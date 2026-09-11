import { CSS_PX_PER_CM, EARTH_DIAMETER, MOON_DIAMETER, SUN_DIAMETER, MOON_DISTANCE, AU, LIGHT_SPEED, LIGHT_YEAR, pixelsPerMetre, modelCm, length, number, niceStep, clamp, angularDiameter, classifyEclipse } from './scale.mjs';
import { CHAPTERS, SOURCES, PLANETS } from './data.mjs';

const $ = selector => document.querySelector(selector);
const scene = $('#scene');
const world = $('#world');
const savedScenes = new Map();
let chapter = CHAPTERS[1];
let state = { cm: 5, camera: 0, view: 'distance', selected: 'neptune' };
let pxPerCm = CSS_PX_PER_CM;
let calibrated = false;
let calibrationSignature;
let bodyNodes = new Map();
let route = { distance: 600, step: .75, speed: 1.25 };
let lunarDistance = MOON_DISTANCE;
let superpose = false;
let drawFrame;
let pointer;
const announce = message => { $('#announcer').textContent = message; };
const setText = (selector, text) => { $(selector).textContent = text; };
const displayCm = cm => cm >= .01 ? `${number(cm, cm < 1 ? 4 : 2)} cm` : length(cm / 100, 3);
const toModel = metres => modelCm(metres, reference(), state.cm) / 100;
const reference = () => chapter.id === 'cotidiano' ? route.distance : chapter.anchor;
const kValue = () => pixelsPerMetre(reference(), state.cm, pxPerCm);
const signature = () => `${window.devicePixelRatio}|${window.screen.width}|${window.screen.height}|${window.visualViewport?.scale ?? 1}`;

// Keep the measuring scene in the first mobile screen, with the same DOM/tab order.
// Move the real controls (not clones); no responsive rule touches physical dimensions.
const mobileControls=document.createElement('div');
mobileControls.className='mobile-controls';
$('.instrument').after(mobileControls);
const movableControls=['.anchor-control','.discovery','.source-trigger'].map(selector=>{
  const element=$(selector), marker=document.createComment('desktop position');
  element.before(marker);return {element,marker};
});
const compactLayout=window.matchMedia('(max-width: 480px)');
function arrangeControls(){
  for(const {element,marker} of movableControls){if(compactLayout.matches)mobileControls.append(element);else marker.after(element);}
  mobileControls.hidden=!compactLayout.matches;
}
compactLayout.addEventListener('change',arrangeControls);
arrangeControls();

function loadCalibration() {
  try {
    const saved = JSON.parse(sessionStorage.getItem('regua-calibration-v2'));
    if (saved && saved.signature === signature() && Number.isFinite(saved.value) && saved.value >= 15 && saved.value <= 100) {
      pxPerCm = saved.value; calibrated = true; calibrationSignature = saved.signature;
    }
  } catch { /* A blocked storage API must not block the explorer. */ }
}

function objects() {
  if (chapter.id === 'cotidiano') return [
    { id:'start', name:'Início', x:0, diameter:null },
    { id:'end', name:'Chegada', x:route.distance, diameter:null },
  ];
  let result = chapter.bodies.map(b => ({...b}));
  // Sun, Earth and Moon share the same ideal aligned state with the angular experiment.
  if (chapter.id === 'sol') result.find(b => b.id === 'moon').x = AU - lunarDistance;
  if (state.view === 'size') {
    let edge = -(result[0].diameter ?? 0) / 2;
    for (const body of result) {
      const d = body.diameter ?? 0;
      body.x = edge + d / 2;
      edge += d + reference() * .30;
    }
  }
  return result;
}

function bounds(bodies = objects()) {
  return { min: Math.min(...bodies.map(b => b.x - (b.diameter ?? 0)/2)), max: Math.max(...bodies.map(b => b.x + (b.diameter ?? 0)/2)) };
}

function createBodies() {
  world.replaceChildren();
  bodyNodes = new Map();
  for (const body of objects()) {
    const group = document.createElement('div');
    group.dataset.object = body.id;
    // Geometry and UI labels are separate. No minimum size or selection transform.
    group.innerHTML = `<div class="physical-body ${body.id}" data-body="${body.id}"></div><div class="diameter-line"></div><div class="body-center"></div><div class="object-label"></div>`;
    if (body.color) group.firstElementChild.style.backgroundColor = body.color;
    world.append(group);
    bodyNodes.set(body.id, { group, body:group.children[0], line:group.children[1], center:group.children[2], label:group.children[3] });
  }
  if (chapter.id === 'cotidiano') {
    const line = document.createElement('div');
    line.className = 'route-segment'; line.id = 'route-segment'; world.prepend(line);
  }
}

function draw() {
  drawFrame = undefined;
  const bodies = objects(), k = kValue(), width = scene.clientWidth;
  const height = scene.clientHeight, origin = width / 2, cy = (height - 70) / 2;
  const cameraMin = Math.min(...bodies.map(b=>b.x)), cameraMax = Math.max(...bodies.map(b=>b.x));
  let visible = 0;
  const screenObjects = bodies.map(b=>({...b,sx:origin+(b.x-state.camera)*k,d:(b.diameter??0)*k}));
  const occupied = [];
  for (const b of screenObjects) {
    const node = bodyNodes.get(b.id);
    const inside = b.sx + b.d/2 >= -2 && b.sx - b.d/2 <= width + 2;
    // Keep coordinates near the camera; never construct an astronomical CSS scroll area.
    const representable = Math.abs(b.sx) < 500_000 && b.d < 500_000;
    node.group.hidden = !representable;
    if (!representable) continue;
    const left=b.sx-b.d/2, top=cy-b.d/2;
    Object.assign(node.body.style,{width:`${b.d}px`,height:`${b.d}px`,left:`${left}px`,top:`${top}px`});
    node.body.hidden = b.diameter === null;
    node.body.dataset.metres = b.diameter ?? '';
    node.body.dataset.modelCm = b.diameter === null ? '' : modelCm(b.diameter,reference(),state.cm);
    node.body.dataset.centerMetres = b.x;
    node.center.hidden = !inside || b.d < 30;
    Object.assign(node.center.style,{left:`${b.sx}px`,top:`${cy}px`});
    node.line.hidden = !inside || b.d < 18 || b.d > width - 24 || top < 50;
    Object.assign(node.line.style,{width:`${b.d}px`,left:`${left}px`,top:`${cy+b.d/2+17}px`});
    const isLocator = b.diameter === null || b.d < 1;
    let labelY = isLocator ? cy - 14 : Math.min(cy + b.d/2 + 28, height - 113);
    let lane = 0;
    // Reflow label lanes only. Physical centres never move to make room for text.
    while (occupied.some(p=>Math.abs(p.x-b.sx)<112 && Math.abs(p.y-labelY)<45) && lane < 4) { lane++; labelY = 112 + (lane-1)*43; }
    const labelVisible = inside && b.sx >= 25 && b.sx <= width-25 && !occupied.some(p=>Math.abs(p.x-b.sx)<112&&Math.abs(p.y-labelY)<45);
    node.label.hidden = !labelVisible;
    if (labelVisible) occupied.push({x:b.sx,y:labelY});
    node.label.className = `object-label${isLocator ? ' subpixel' : ''}`;
    Object.assign(node.label.style,{left:`${b.sx}px`,top:`${labelY}px`});
    const clipped = top < 0 || left < 0 || left+b.d > width || top+b.d > height-60;
    const detail = b.diameter === null ? (chapter.id === 'cotidiano' ? length(toModel(b.x)) : 'Localizador · diâmetro não representado') : `${length(toModel(b.diameter),3)}${b.d < 1 ? ' · < 1 pixel' : clipped ? ' · parte fora do quadro' : ''}`;
    node.label.innerHTML = `${b.name}<small>${detail}</small>`;
    if (inside) visible++;
  }
  if (chapter.id === 'cotidiano') {
    const a = origin-state.camera*k, b=origin+(route.distance-state.camera)*k;
    Object.assign($('#route-segment').style,{left:`${Math.max(-5,a)}px`,top:`${cy}px`,width:`${Math.max(0,Math.min(width+5,b)-Math.max(-5,a))}px`});
  }
  $('#empty-space').hidden = visible > 0;
  const left = screenObjects.filter(b=>b.sx+b.d/2 < 0).sort((a,b)=>b.sx-a.sx)[0];
  const right = screenObjects.filter(b=>b.sx-b.d/2 > width).sort((a,b)=>a.sx-b.sx)[0];
  $('#edge-locators').innerHTML = [left,right].filter(Boolean).map(b=>`<button class="edge-locator ${b===right?'right':'left'}" data-jump="${b.id}"><strong>${b===left?'← ':''}${b.name}${b===right?' →':''}</strong>${state.view==='size'?'Fora do quadro':length(toModel(b.x))+' desde a origem'}</button>`).join('');
  drawRuler(k,origin,width);
  const progress = cameraMax === cameraMin ? 0 : clamp((state.camera-cameraMin)/(cameraMax-cameraMin),0,1);
  $('#travel-range').value = progress*1000;
  $('#travel-range').setAttribute('aria-valuetext',`${number(progress*100,1)}% do percurso. ${length(state.camera)} a partir da origem.`);
  setText('#travel-progress',progress < .0001 ? 'Percorra a distância' : `${number(progress*100,1)}% do percurso`);
  setText('#field-width',`${length(toModel(width/k))} de campo`);
  scene.dataset.pixelsPerMetre = k;
  scene.dataset.pixelsPerCm = pxPerCm;
  scene.dataset.referenceCm = state.cm;
  scene.dataset.cameraMetres = state.camera;
}

function drawRuler(k, origin, width) {
  // Tick spacing is chosen in model centimetres, not arbitrary astronomical units.
  const stepCm = niceStep(88 / pxPerCm);
  const startCm = modelCm(state.camera-origin/k,reference(),state.cm);
  const endCm = startCm+width/pxPerCm;
  const minor = stepCm/5;
  const startIndex = Math.ceil(startCm/minor), count = Math.ceil((endCm-startCm)/minor)+1;
  let html = '';
  for(let i=0;i<count;i++) {
    const index=startIndex+i, cm=index*minor;
    if(cm<-.000001) continue;
    const x=(cm-startCm)*pxPerCm, major=index%5===0;
    if(x<0||x>width) continue;
    html+=`<div class="ruler-tick${major?' major':''}" style="left:${x}px">${major&&x>15&&x<width-20?`<span>${Math.abs(cm)<1e-8?'0':length(cm/100)}</span>`:''}</div>`;
  }
  $('#ruler').innerHTML=html;
}

function requestDraw() { if(drawFrame === undefined) drawFrame=requestAnimationFrame(draw); }
function focusBody(id, focus = true) {
  const body=objects().find(b=>b.id===id);
  if(!body)return;
  state.camera=body.x;draw();
  if(focus)scene.focus({preventScroll:true});
  announce(`${body.name} no centro da cena.`);
}

function measurementValues() {
  switch(chapter.id) {
    case 'cotidiano':return [{name:'Percurso escolhido',real:route.distance},{name:'Um passo do exemplo',real:route.step},{name:'Percurso × 10',real:route.distance*10}];
    case 'terra-lua':return [{name:'Diâmetro da Terra',real:EARTH_DIAMETER},{name:'Diâmetro da Lua',real:MOON_DIAMETER},{name:'Distância entre centros',real:MOON_DISTANCE}];
    case 'sol':return [{name:'Diâmetro do Sol',real:SUN_DIAMETER},{name:'Diâmetro da Terra',real:EARTH_DIAMETER},{name:'Distância Sol–Terra',real:AU}];
    case 'planetas': {
      const p=PLANETS.find(p=>p.id===state.selected)??PLANETS.at(-1);
      return [{name:'Diâmetro do Sol',real:SUN_DIAMETER},{name:`Diâmetro de ${p.name}`,real:p.diameter},{name:`Sol → ${p.name}`,real:p.x}];
    }
    default:return [{name:'Diâmetro do Sol',real:SUN_DIAMETER},{name:'Sol → Netuno',real:PLANETS.at(-1).x},{name:'Sol → Proxima Centauri',real:4.24*LIGHT_YEAR}];
  }
}

function renderCopy() {
  const size=displayCm(state.cm);
  const titles={cotidiano:`Um caminho.<br><em>${length(route.distance)}.</em>`, 'terra-lua':`E se a Terra<br>tivesse <em>${size}?</em>`,sol:`E se o Sol<br>tivesse <em>${size}?</em>`,planetas:`Quanto espaço<br><em>entre os planetas?</em>`,estrelas:`A próxima estrela<br>fica <em>muito além.</em>`};
  $('#scene-title').innerHTML=titles[chapter.id];
  setText('#chapter-label',chapter.eyebrow);
  let description=chapter.description;
  if(chapter.id==='terra-lua'&&state.cm>10) description='Aumente a Terra e observe a Lua se afastar na mesma proporção. Se o planeta não couber, a cena mostra apenas uma parte dele.';
  if(chapter.id==='sol')description=`Com o Sol de ${size}, a Terra mede ${length(toModel(EARTH_DIAMETER))}. Os dois continuam separados por uma distância muito maior que seus diâmetros.`;
  if(chapter.id==='estrelas')description=`Mantenha o Sol de ${size}. Com essa mesma redução, a distância até Proxima Centauri equivale a ${length(toModel(4.24*LIGHT_YEAR))}.`;
  setText('#scene-description',description);
  setText('#anchor-label',chapter.anchorLabel);
  if(document.activeElement!==$('#anchor-size'))$('#anchor-size').value=Number(state.cm.toPrecision(7));
  $('#anchor-size').classList.toggle('compact-number',$('#anchor-size').value.length>7);
  document.querySelectorAll('[data-cm]').forEach(b=>b.setAttribute('aria-pressed',String(Math.abs(Number(b.dataset.cm)-state.cm)<1e-8)));
  document.querySelectorAll('[data-view]').forEach(b=>{b.setAttribute('aria-pressed',String(b.dataset.view===state.view));b.disabled=(chapter.id==='cotidiano'||chapter.id==='estrelas')&&b.dataset.view==='size';});
  let label, value, copy;
  switch(chapter.id) {
    case 'cotidiano':label='Esse caminho equivale a';value=`${number(route.distance/route.step,0)} passos`;copy=`Com passos de ${length(route.step)} e sem presumir um tamanho universal.`;break;
    case 'terra-lua':label='A Lua ficaria a';value=length(toModel(MOON_DISTANCE));copy=`de centro a centro. ${number(MOON_DISTANCE/EARTH_DIAMETER,2)} diâmetros terrestres de distância.`;break;
    case 'sol':label='A Terra ficaria a';value=length(toModel(AU));copy='do centro do Sol, usando 1 unidade astronômica como referência.';break;
    case 'planetas': {
      const p=PLANETS.find(p=>p.id===state.selected)??PLANETS.at(-1);
      label=`${p.name} ficaria a`;value=length(toModel(p.x));copy='do centro do Sol. Mude o planeta para explorar outra distância.';break;
    }
    default:label='Proxima Centauri ficaria a';value=length(toModel(4.24*LIGHT_YEAR));copy='do Sol. A mesma redução, agora atravessando o espaço interestelar.';
  }
  setText('#discovery-label',label);$('#discovery-value').innerHTML=value.replace(/ (\S+)$/,' <span>$1</span>');setText('#discovery-copy',copy);
  let contract=state.view==='size'?'TAMANHOS EM ESCALA · POSIÇÕES REORGANIZADAS':'TAMANHOS E DISTÂNCIAS EM ESCALA';
  if(chapter.id==='planetas'&&state.view==='distance')contract='RÉGUA HELIOCÊNTRICA · MÉDIAS EM ESCALA';
  if(chapter.id==='estrelas')contract='DISTÂNCIA EM ESCALA · ESTRELA LOCALIZADA';
  if(chapter.id==='cotidiano')contract='COMPRIMENTO EM ESCALA · EXEMPLO ESCOLHIDO';
  setText('#scene-contract',contract);
  setText('#scale-equivalence',`1 cm aqui = ${length(reference()/state.cm)} na realidade`);
  const list=objects();const sorted=[...list].sort((a,b)=>a.x-b.x);
  setText('#travel-start',`← ${sorted[0].name}`);setText('#travel-end',`${sorted.at(-1).name} →`);
  setText('#travel-hint',state.view==='size'?'Posições reorganizadas · os espaços não representam distâncias reais':'Navegação linear · cada trecho mantém a mesma proporção');
  setText('#reading-note',state.view==='size'?'Os diâmetros seguem uma única proporção. Nesta comparação, apenas os espaços entre os corpos foram reorganizados para colocá-los lado a lado.':chapter.note);
  setText('#measurement-kind',chapter.id==='cotidiano'?'Parâmetros do exemplo':'Medida no modelo · referência real abaixo');
  $('#measurements').innerHTML=measurementValues().map(m=>`<article class="measurement-card"><h3>${m.name}</h3><strong class="model-value">${length(toModel(m.real),3)}</strong><p class="real-value">${length(m.real)} na realidade</p></article>`).join('');
  const index=CHAPTERS.indexOf(chapter);
  setText('#chapter-counter',`${String(index+1).padStart(2,'0')} / 05`);
  $('#previous-chapter').disabled=index===0;
  $('#next-chapter').innerHTML=index===CHAPTERS.length-1?'Voltar ao cotidiano <span aria-hidden="true">↺</span>':`Próxima: ${CHAPTERS[index+1].name.toLocaleLowerCase('pt-BR')} <span aria-hidden="true">→</span>`;
  scene.setAttribute('aria-label',`${chapter.name}. ${chapter.anchorLabel}: ${size}. ${contract.toLowerCase()}. Arraste ou use as setas do teclado para percorrer.`);
  setText('#calibration-state',calibrated?'Tela calibrada com régua física':'Medida aproximada da tela');
  renderExtraValues();
}

function setScale(cm) {
  if(!Number.isFinite(cm)||cm<=0||cm>100){$('#anchor-size').setCustomValidity('Escolha um comprimento maior que zero e de até 100 cm.');$('#anchor-size').reportValidity();return;}
  $('#anchor-size').setCustomValidity('');state.cm=cm;renderCopy();draw();
  announce(`${chapter.anchorName}: ${displayCm(cm)} na tela. Todas as medidas foram recalculadas.`);
}

function fitScene() {
  const b=bounds(), availableWidth=Math.max(100,scene.clientWidth-110);
  const maxDiameter=Math.max(...objects().map(b=>b.diameter??0));
  const horizontalK=availableWidth/(b.max-b.min);
  const verticalK=maxDiameter?(scene.clientHeight-190)/maxDiameter:Infinity;
  const fitK=Math.min(horizontalK,verticalK);
  state.cm=fitK*reference()/pxPerCm;
  state.camera=(b.min+b.max)/2;
  renderCopy();draw();
  announce(`Cena enquadrada. A escala mudou: ${chapter.anchorName} agora mede ${displayCm(state.cm)}.`);
}

function setView(view) {
  if(view===state.view)return;
  stopLight();
  const selectedBody=objects().reduce((best,b)=>Math.abs(b.x-state.camera)<Math.abs(best.x-state.camera)?b:best).id;
  state.view=view;
  state.camera=objects().find(b=>b.id===selectedBody)?.x??0;
  renderCopy();draw();announce(view==='size'?'Comparação de diâmetros. Posições reorganizadas.':'Distâncias e diâmetros na mesma escala.');
}

function goChapter(id, fromHistory=false) {
  stopLight();
  const next=CHAPTERS.find(c=>c.id===id)??CHAPTERS[1];
  savedScenes.set(chapter.id,{...state});
  chapter=next;
  state=savedScenes.get(id)?{...savedScenes.get(id)}:{cm:chapter.defaultCm,camera:0,view:chapter.defaultView,selected:'neptune'};
  if(!fromHistory && location.hash!==`#macro/${chapter.id}`)history.pushState(null,'',`#macro/${chapter.id}`);
  document.querySelectorAll('[data-chapter]').forEach(b=>{if(b.dataset.chapter===chapter.id)b.setAttribute('aria-current','step');else b.removeAttribute('aria-current');});
  createBodies();renderExtra();renderCopy();draw();
  document.title=`Régua Cósmica — ${chapter.name}`;
  announce(`${chapter.name}. ${chapter.description}`);
}

function renderExtra() {
  const extra=$('#chapter-extra');extra.hidden=false;
  if(chapter.id==='cotidiano') {
    extra.innerHTML='<div class="eyebrow">UM PERCURSO QUE FAZ SENTIDO PARA VOCÊ</div><h2>Troque o exemplo pelo seu caminho.</h2><p>Os valores abaixo são escolhas de exemplo. Passo e velocidade podem variar; não é necessário caminhar para usar a comparação.</p><div class="route-controls"><label for="route-distance">Percurso, em metros<input id="route-distance" type="number" min="1" max="1000000" step="any" value="600"></label><label for="route-step">Um passo, em metros<input id="route-step" type="number" min="0.01" max="5" step="any" value="0.75"></label><label for="route-speed">Velocidade, em metros/segundo<input id="route-speed" type="number" min="0.01" max="1000" step="any" value="1.25"></label></div><div class="route-result" id="route-result"></div><p class="evidence-note">Tempo idealizado, sem paradas ou variações de terreno. Nenhum endereço ou localização é solicitado.</p>';
    for(const key of ['distance','step','speed']){
      const input=$('#route-'+key);input.value=route[key];
      input.oninput=()=>{if(!input.validity.valid||!Number.isFinite(input.valueAsNumber))return;route[key]=input.valueAsNumber;state.camera=clamp(state.camera,0,route.distance);renderCopy();draw();};
      input.onchange=()=>{if(!input.checkValidity()||!Number.isFinite(input.valueAsNumber)){input.reportValidity();return;}input.oninput();announce('Percurso e equivalências atualizados.');};
    }
  } else if(chapter.id==='terra-lua') {
    extra.innerHTML='<div class="earth-discoveries"><div><div class="eyebrow">NA SUPERFÍCIE DESSA TERRA</div><h2>O Everest quase desaparece.</h2><p id="relief-copy"></p><p class="evidence-note">Altitude: 8.848,86 m acima do nível do mar. A esfera não exagera montanhas nem acrescenta uma camada de atmosfera.</p></div><div><div class="eyebrow">NO ESPAÇO ENTRE OS DOIS</div><h2>A luz leva 1,28 segundo.</h2><p>O sinal atravessa 384.400 km. Na escala que você escolheu, ele cruza a distância em exatamente o mesmo tempo.</p><button class="lab-mode" id="light-signal">Enviar um sinal de luz →</button><p class="evidence-note" id="light-status" role="status">Velocidade real no modelo · sem aceleração de tempo</p></div></div>';
    $('#light-signal').onclick=sendLight;
  } else if(chapter.id==='sol') {
    extra.innerHTML='<div class="eyebrow">MESMOS CORPOS, OUTRO PONTO DE VISTA</div><h2>Por que os dois parecem tão parecidos no céu?</h2><p>O Sol tem cerca de 400 vezes o diâmetro da Lua, mas também está muito mais distante. Compare os tamanhos aparentes com uma régua em graus.</p><div class="lab-controls"><label for="lunar-distance">Distância Terra–Lua</label><select id="lunar-distance"><option value="384400000">Média · 384.400 km</option><option value="363396000">Perigeu médio · 363.396 km</option><option value="405504000">Apogeu médio · 405.504 km</option></select><button class="lab-mode" id="superpose" aria-pressed="false">Sobrepor centros</button></div><div class="lab-comparison" id="lab-comparison" role="img"><div class="lab-disc" id="lab-sun"></div><div class="lab-disc" id="lab-moon"></div><div class="lab-scale" id="lab-scale"></div></div><div class="lab-summary"><span id="sun-angle"></span><span id="moon-angle"></span></div><div class="lab-result" id="lab-result"></div><p class="evidence-note">Experimento esférico alinhado, com a Lua entre a Terra e o Sol e observador no lado próximo da Terra. Não representa um evento real. Não inclui atmosfera, relevo ou previsão de eclipses. A vista em graus tem escala própria; o zoom da régua acima não altera os ângulos.</p>';
    $('#lunar-distance').value=String(lunarDistance);
    $('#lunar-distance').onchange=e=>{lunarDistance=Number(e.target.value);renderCopy();draw();renderAngular();};
    $('#superpose').onclick=()=>{superpose=!superpose;renderAngular();};
  } else if(chapter.id==='planetas') {
    extra.innerHTML=`<div class="eyebrow">ESCOLHA SEU DESTINO</div><h2>Qual planeta você quer encontrar?</h2><div class="object-picker">${PLANETS.map(p=>`<button data-planet="${p.id}" aria-pressed="${p.id===state.selected}">${p.name}</button>`).join('')}</div><p id="planet-copy"></p><p class="evidence-note">As referências orbitais não são posições simultâneas. Não subtraia essas distâncias para calcular a separação atual entre a Terra e outro planeta.</p>`;
    extra.querySelectorAll('[data-planet]').forEach(b=>b.onclick=()=>{state.selected=b.dataset.planet;renderCopy();focusBody(state.selected,false);extra.querySelectorAll('[data-planet]').forEach(p=>p.setAttribute('aria-pressed',String(p===b)));scene.scrollIntoView({block:'center',behavior:'instant'});});
  } else {
    extra.innerHTML='<div class="eyebrow">ANO-LUZ É DISTÂNCIA</div><h2>E a nossa galáxia?</h2><p id="galaxy-copy"></p><p class="evidence-note">A ordem de 100 mil anos-luz descreve o disco da Via Láctea, não uma borda rígida de toda a galáxia. Netuno também não é o fim físico do Sistema Solar.</p>';
  }
}

function renderExtraValues() {
  if(chapter.id==='cotidiano'&&$('#route-result')) {
    const seconds=route.distance/route.speed;
    setText('#route-result',`${number(route.distance/route.step,0)} passos · ${seconds<60?`${number(seconds)} segundos`:seconds<3600?`${number(seconds/60)} minutos`:`${number(seconds/3600)} horas`}`);
  }
  if(chapter.id==='terra-lua'&&$('#relief-copy'))setText('#relief-copy',`Numa Terra de ${displayCm(state.cm)}, a altura do Everest vira ${length(toModel(8848.86),3)}: ${number(8848.86*kValue(),3)} pixel${8848.86*kValue()===1?'':'s'} na tela. Essa pequenez faz parte da proporção.`);
  if(chapter.id==='planetas'&&$('#planet-copy')) {
    const p=PLANETS.find(p=>p.id===state.selected)??PLANETS.at(-1);
    setText('#planet-copy',`${p.name}: ${number(p.au,3)} vezes a distância de referência Terra–Sol. No modelo, seu diâmetro mede ${length(toModel(p.diameter),3)} e seu centro fica a ${length(toModel(p.x))} do centro do Sol.`);
  }
  if(chapter.id==='estrelas'&&$('#galaxy-copy'))setText('#galaxy-copy',`Na mesma redução em que o Sol mede ${displayCm(state.cm)}, um disco galáctico de 100 mil anos-luz corresponderia a aproximadamente ${length(toModel(100_000*LIGHT_YEAR))}. Proxima Centauri ainda está muito perto de nós, na escala da galáxia.`);
  if(chapter.id==='sol'&&$('#lab-comparison'))renderAngular();
}

function renderAngular() {
  const box=$('#lab-comparison');if(!box)return;
  const sunAngle=angularDiameter(SUN_DIAMETER,AU-EARTH_DIAMETER/2);
  const moonAngle=angularDiameter(MOON_DIAMETER,lunarDistance-EARTH_DIAMETER/2);
  // Both apparent disks use exactly the same angular pixels/degree in this separate view.
  const angleK=Math.min(220,box.clientWidth*.65), sw=sunAngle*angleK, mw=moonAngle*angleK;
  const sunX=superpose?box.clientWidth/2:box.clientWidth*.30;
  const moonX=superpose?sunX:box.clientWidth*.72;
  Object.assign($('#lab-sun').style,{left:`${sunX-sw/2}px`,width:`${sw}px`,height:`${sw}px`,top:`${120-sw/2}px`,background:'#ffd166'});
  Object.assign($('#lab-moon').style,{left:`${moonX-mw/2}px`,width:`${mw}px`,height:`${mw}px`,top:`${120-mw/2}px`,background:superpose?'#090f14':'#c9cecd'});
  $('#lab-moon').style.zIndex=2;
  $('#lab-scale').innerHTML=`<span style="display:inline-block;width:${angleK*.5}px;border-top:1px solid var(--accent);padding-top:5px;text-align:center">0,5°</span> <span style="margin-left:15px">Régua angular</span>`;
  setText('#sun-angle',`Sol: ${number(sunAngle,3)}°`);setText('#moon-angle',`Lua: ${number(moonAngle,3)}°`);
  setText('#lab-result',superpose?`${classifyEclipse(sunAngle,moonAngle,0)} neste alinhamento idealizado`:'Diâmetros aparentes, lado a lado');
  $('#superpose').setAttribute('aria-pressed',String(superpose));setText('#superpose',superpose?'Separar os discos':'Sobrepor centros');
  box.setAttribute('aria-label',`Diâmetros aparentes: Sol ${number(sunAngle,3)} graus; Lua ${number(moonAngle,3)} graus. ${superpose?classifyEclipse(sunAngle,moonAngle,0):'Discos reorganizados lado a lado.'}`);
}

let signalFrame;
function stopLight(){
  cancelAnimationFrame(signalFrame);
  document.querySelector('.light-trace')?.remove();
  if($('#light-signal'))$('#light-signal').disabled=false;
}
function sendLight() {
  stopLight();
  if(state.view!=='distance')setView('distance');
  const start=performance.now(), duration=MOON_DISTANCE/LIGHT_SPEED*1000;
  $('#light-signal').disabled=true;
  const trace=document.createElement('div');trace.className='light-trace';world.append(trace);
  function step(now) {
    if(chapter.id!=='terra-lua'){trace.remove();return;}
    const progress=clamp((now-start)/duration,0,1), position=MOON_DISTANCE*progress;
    const x=scene.clientWidth/2+(position-state.camera)*kValue();
    Object.assign(trace.style,{left:`${x}px`,top:`${(scene.clientHeight-70)/2}px`});
    $('#light-status').textContent=`${number(progress*duration/1000,2)} s · ${progress<1?'sinal em viagem':'sinal chegou à Lua'}`;
    if(progress<1)signalFrame=requestAnimationFrame(step);else{trace.remove();$('#light-signal').disabled=false;}
  }
  signalFrame=requestAnimationFrame(step);
}

function openSources() {
  const data=measurementValues();
  const rows=data.map(m=>`<tr><td>${m.name}</td><td>${length(m.real,4)}</td><td>${length(toModel(m.real),4)}</td></tr>`).join('');
  const definitions=chapter.id==='cotidiano'?'Percurso, passo e velocidade são parâmetros escolhidos. A linha representa somente o comprimento informado.':'Diâmetros médios de esferas de volume equivalente; para o Sol, diâmetro nominal IAU. Todas as distâncias desta régua são entre centros.';
  $('#sources-content').innerHTML=`<p>${definitions}</p><div class="formula">1 cm do modelo corresponde a ${length(reference()/state.cm,4)}.<br>Fator: ${number(state.cm*pxPerCm,4)} pixels ÷ ${number(reference(),4)} metros.</div><table class="data-table"><thead><tr><th>Medida</th><th>Realidade</th><th>Modelo</th></tr></thead><tbody>${rows}</tbody></table>${chapter.id==='terra-lua'?`<p>Entre as superfícies: ${length(MOON_DISTANCE-(EARTH_DIAMETER+MOON_DIAMETER)/2)}, ou ${length(toModel(MOON_DISTANCE-(EARTH_DIAMETER+MOON_DIAMETER)/2),4)} no modelo. Esse intervalo é menor que a distância entre centros.</p>`:''}<h3>Fontes e convenções</h3><ul class="source-list">${chapter.sourceIds.map(id=>SOURCES[id]).map(s=>`<li><a href="${s.url}" target="_blank" rel="noopener noreferrer">${s.name} ↗</a><small>${s.note}</small></li>`).join('')}</ul><p class="small-note">Catálogo baseado no planejamento de 11 de setembro de 2026. Preservamos os valores de origem nos cálculos e arredondamos apenas o texto exibido.</p>`;
  $('#sources-dialog').showModal();
}

function renderCalibration() {
  const value=Number($('#calibration-range').value);
  $('#calibration-line').style.width=`${value*5}px`;
  $('#calibration-output').textContent=`${number(value*5,1)} pixels · linha de referência de 5 cm`;
}
function openCalibration() {$('#calibration-range').value=pxPerCm;renderCalibration();$('#calibration-dialog').showModal();}
function invalidateCalibration() {
  if(calibrated&&signature()!==calibrationSignature){calibrated=false;pxPerCm=CSS_PX_PER_CM;try{sessionStorage.removeItem('regua-calibration-v2');}catch{}renderCopy();requestDraw();announce('O zoom ou a tela mudou. A calibração precisa ser refeita.');}
}

$('#chapter-nav').innerHTML=CHAPTERS.map((c,i)=>`<button class="chapter-button" data-chapter="${c.id}"${i===1?' aria-current="step"':''}><span class="chapter-number">${String(i+1).padStart(2,'0')}</span>${c.name}</button>`).join('');
$('#chapter-nav').addEventListener('click',e=>{const b=e.target.closest('[data-chapter]');if(b)goChapter(b.dataset.chapter);});
$('.brand').addEventListener('click',e=>{e.preventDefault();goChapter('terra-lua');state={cm:5,camera:0,view:'distance',selected:'neptune'};renderCopy();draw();window.scrollTo({top:0,behavior:'instant'});});
$('#anchor-size').addEventListener('change',e=>setScale(e.target.valueAsNumber));
$('#anchor-size').addEventListener('input',()=>{const input=$('#anchor-size');input.setCustomValidity('');if(input.validity.valid&&Number.isFinite(input.valueAsNumber)&&input.valueAsNumber>0)setScale(input.valueAsNumber);});
$('#anchor-size').addEventListener('keydown',e=>{if(e.key==='Enter'){$('#anchor-size').blur();}});
document.querySelectorAll('[data-cm]').forEach(b=>b.onclick=()=>setScale(Number(b.dataset.cm)));
document.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>setView(b.dataset.view));
$('#fit-scene').onclick=fitScene;
$('#reset-scene').onclick=()=>{state.cm=chapter.defaultCm;state.camera=0;renderCopy();draw();announce('Referência original restaurada.');};
$('#travel-start').onclick=()=>focusBody([...objects()].sort((a,b)=>a.x-b.x)[0].id,false);
$('#travel-end').onclick=()=>focusBody([...objects()].sort((a,b)=>a.x-b.x).at(-1).id,false);
$('#edge-locators').addEventListener('click',e=>{const b=e.target.closest('[data-jump]');if(b)focusBody(b.dataset.jump);});
$('#travel-range').oninput=e=>{const xs=objects().map(b=>b.x);state.camera=Math.min(...xs)+Number(e.target.value)/1000*(Math.max(...xs)-Math.min(...xs));draw();};
$('#travel-range').onchange=()=>announce($('#travel-range').getAttribute('aria-valuetext'));
$('#previous-chapter').onclick=()=>goChapter(CHAPTERS[Math.max(0,CHAPTERS.indexOf(chapter)-1)].id);
$('#next-chapter').onclick=()=>goChapter(CHAPTERS[(CHAPTERS.indexOf(chapter)+1)%CHAPTERS.length].id);
document.querySelectorAll('[data-open]').forEach(b=>b.onclick=()=>{if(b.dataset.open==='sources')openSources();else if(b.dataset.open==='calibration')openCalibration();else $('#method-dialog').showModal();});
document.querySelectorAll('dialog').forEach(dialog=>dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}}));
$('#calibration-range').oninput=renderCalibration;
for(const [id,delta] of [['calibration-less',-.1],['calibration-more',.1]])$('#'+id).onclick=()=>{$('#calibration-range').value=clamp(Number($('#calibration-range').value)+delta,15,100);renderCalibration();};
$('#calibration-save').onclick=()=>{pxPerCm=Number($('#calibration-range').value);calibrated=true;calibrationSignature=signature();try{sessionStorage.setItem('regua-calibration-v2',JSON.stringify({value:pxPerCm,signature:calibrationSignature}));}catch{}$('#calibration-dialog').close();renderCopy();draw();announce('Tela calibrada. Todos os tamanhos e distâncias foram ajustados juntos.');};
$('#calibration-reset').onclick=()=>{pxPerCm=CSS_PX_PER_CM;calibrated=false;try{sessionStorage.removeItem('regua-calibration-v2');}catch{}$('#calibration-dialog').close();renderCopy();draw();announce('Referência padrão restaurada: 5 cm correspondem a aproximadamente 189 pixels CSS.');};

scene.addEventListener('pointerdown',e=>{if(e.target.closest('button'))return;pointer={x:e.clientX,camera:state.camera};scene.setPointerCapture(e.pointerId);});
scene.addEventListener('pointermove',e=>{if(!pointer)return;const xs=objects().map(b=>b.x);state.camera=clamp(pointer.camera-(e.clientX-pointer.x)/kValue(),Math.min(...xs),Math.max(...xs));requestDraw();});
scene.addEventListener('pointerup',()=>pointer=null);scene.addEventListener('pointercancel',()=>pointer=null);
scene.addEventListener('keydown',e=>{if(e.target!==scene)return;if(['ArrowLeft','ArrowRight','Home','End'].includes(e.key)){e.preventDefault();const xs=objects().map(b=>b.x),min=Math.min(...xs),max=Math.max(...xs);state.camera=e.key==='Home'?min:e.key==='End'?max:clamp(state.camera+(e.key==='ArrowRight'?1:-1)*scene.clientWidth*.6/kValue(),min,max);draw();}});
window.addEventListener('hashchange',()=>{if(!location.hash.startsWith('#macro/'))return;const id=location.hash.split('/')[1];if(id!==chapter.id)goChapter(id,true);});
window.addEventListener('resize',()=>{invalidateCalibration();requestDraw();if(chapter.id==='sol')renderAngular();});
window.visualViewport?.addEventListener('resize',invalidateCalibration);
window.addEventListener('focus',invalidateCalibration);
new ResizeObserver(requestDraw).observe(scene);
loadCalibration();
goChapter(location.hash.split('/')[1]||'terra-lua',true);
