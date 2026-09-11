import { EARTH_DIAMETER, MOON_DIAMETER, SUN_DIAMETER, MOON_DISTANCE, AU, LIGHT_YEAR } from './scale.mjs';

export const SOURCES = {
  planets: { name: 'NASA / JPL · dimensões dos planetas', url: 'https://ssd.jpl.nasa.gov/planets/phys_par.html', note: 'Diâmetros calculados a partir dos raios médios de volume equivalente. Valores em metros no modelo.' },
  moonSize: { name: 'NASA / JPL · dimensões da Lua', url: 'https://ssd.jpl.nasa.gov/sats/phys_par/', note: 'Raio médio lunar: 1.737,4 km. A tabela indica incerteza de 0,1 km no raio.' },
  moon: { name: 'NASA · fatos sobre a Lua', url: 'https://science.nasa.gov/moon/facts/', note: '384.400 km é a distância média entre centros. A distância real varia ao longo da órbita.' },
  au: { name: 'NASA / JPL · unidade astronômica e luz', url: 'https://ssd.jpl.nasa.gov/astro_par.html', note: '1 au = 149.597.870.700 m; ano juliano de 365,25 dias. Distância de referência, não uma posição de hoje.' },
  sun: { name: 'IAU · raio solar nominal', url: 'https://www.iau.org/common/Uploaded%20files/IAUGA2015-Resolution-B3-recommended-nominal-conversion.pdf', note: 'Resolução B3, 2015: raio solar nominal de 695.700 km. Constante de conversão, não medida de uma superfície imutável.' },
  distances: { name: 'NASA · distâncias no Sistema Solar', url: 'https://science.nasa.gov/learn/basics-of-space-flight/chapter1-2/', note: 'Referências heliocêntricas arredondadas. Os pontos na régua não são coordenadas simultâneas nem distâncias medidas a partir da Terra.' },
  stars: { name: 'NASA · a distância até Proxima Centauri', url: 'https://science.nasa.gov/mission/voyager/voyager-1/voyager-1-what-is-a-light-day/', note: 'Referência aproximada de 4,24 anos-luz. Ano-luz é distância: luz percorrida durante um ano juliano.' },
  galaxy: { name: 'NASA · galáxias', url: 'https://science.nasa.gov/universe/galaxies/', note: 'Disco da Via Láctea da ordem de 100 mil anos-luz. A extensão depende de qual componente é medido.' },
  solarSystem: { name: 'NASA · diferentes limites do Sistema Solar', url: 'https://science.nasa.gov/solar-system/solar-system-facts/', note: 'Netuno não é uma borda física. Planetas, heliosfera e Nuvem de Oort têm extensões diferentes.' },
  relief: { name: 'Governo do Nepal · altitude do Everest', url: 'https://dmgnepal.gov.np/en/pages/general-geology-4128', note: '8.848,86 m acima do nível do mar. Não é uma medida a partir do centro terrestre.' },
  eclipse: { name: 'NASA · geometria dos eclipses', url: 'https://science.nasa.gov/eclipses/geometry/', note: 'Comparação geométrica idealizada. Não prevê eventos, datas, contatos ou visibilidade em cidades reais.' },
  orbit: { name: 'NASA / GSFC · órbita lunar', url: 'https://eclipse.gsfc.nasa.gov/SEhelp/moonorbit.html', note: '363.396 e 405.504 km são perigeu e apogeu médios usados nos experimentos. Não são extremos absolutos.' },
  css: { name: 'W3C · unidades absolutas de comprimento', url: 'https://www.w3.org/TR/css-values-4/#absolute-lengths', note: '96 pixels CSS = 1 polegada = 2,54 cm CSS. Calibração com régua física é necessária para conferir a medida real na tela.' },
  earthImage: { name: 'NASA · Blue Marble 2002', url: 'https://science.nasa.gov/resource/blue-marble-2002/', note: 'Composição de dados MODIS / NASA Earth Observatory. A textura identifica a Terra; a esfera de medida define seu diâmetro. Não usamos a imagem para medir relevo ou atmosfera.' },
};
export const SUN = { id:'sun', name:'Sol', diameter:SUN_DIAMETER, color:'#ffd166', definition:'Diâmetro nominal', x:0 };
export const EARTH = { id:'earth', name:'Terra', diameter:EARTH_DIAMETER, color:'#81a8ff', definition:'Diâmetro médio', x:0 };
export const MOON = { id:'moon', name:'Lua', diameter:MOON_DIAMETER, color:'#c9cecd', definition:'Diâmetro médio', x:MOON_DISTANCE };
export const PLANETS = [
  { id:'mercury', name:'Mercúrio', diameter:4_878_800, color:'#b0a18c', au:.387 },
  { id:'venus', name:'Vênus', diameter:12_103_600, color:'#dcc397', au:.723 },
  { ...EARTH, au:1 },
  { id:'mars', name:'Marte', diameter:6_779_000, color:'#df9273', au:1.524 },
  { id:'jupiter', name:'Júpiter', diameter:139_822_000, color:'#d4ad87', au:5.20 },
  { id:'saturn', name:'Saturno', diameter:116_464_000, color:'#e2cf93', au:9.58 },
  { id:'uranus', name:'Urano', diameter:50_724_000, color:'#9bd5da', au:19.20 },
  { id:'neptune', name:'Netuno', diameter:49_244_000, color:'#7d9fe5', au:30.05 },
].map(p=>({...p,x:p.au*AU,definition:'Diâmetro médio; anéis excluídos'}));
export const CHAPTERS = [
  { id:'cotidiano', name:'O cotidiano', eyebrow:'01 / A SUA PRIMEIRA REFERÊNCIA', anchor:600, anchorName:'Percurso', anchorLabel:'Comprimento do percurso na tela', defaultCm:12, defaultView:'distance', description:'Comece com um caminho que dá para imaginar. Uma rua, algumas esquinas, a distância até uma loja.', sourceIds:['css'], note:'Exemplo de percurso, sem mapa ou endereço. Os metros são divididos pelo passo e pela velocidade que você escolher.', bodies:[] },
  { id:'terra-lua', name:'Terra e Lua', eyebrow:'02 / A TERRA E SUA VIZINHA', anchor:EARTH_DIAMETER, anchorName:'Terra', anchorLabel:'Diâmetro da Terra na tela', defaultCm:5, defaultView:'distance', description:'Você pode colocá-la na palma da mão. A Lua, na mesma escala, vai precisar de um pouco mais de espaço.', sourceIds:['planets','moonSize','moon','relief','earthImage','css'], note:'A Lua fica fora do quadro na escala inicial. Vá até ela ou use “Ver tudo” para reduzir a escala inteira.', bodies:[EARTH,MOON] },
  { id:'sol', name:'O Sol', eyebrow:'03 / O TAMANHO DA NOSSA ESTRELA', anchor:SUN_DIAMETER, anchorName:'Sol', anchorLabel:'Diâmetro do Sol na tela', defaultCm:14, defaultView:'distance', description:'Agora, o Sol vira a referência. A Terra cabe em pouco mais de um milímetro. A distância entre os dois continua imensa.', sourceIds:['planets','moonSize','sun','au','moon','eclipse','orbit','earthImage','css'], note:'Terra e Lua conservam seus diâmetros reais em proporção ao Sol. Mude para “Tamanhos” para compará-los lado a lado.', bodies:[SUN,{...EARTH,x:AU},{...MOON,x:AU+MOON_DISTANCE}] },
  { id:'planetas', name:'Os planetas', eyebrow:'04 / MUITO MAIS ESPAÇO DO QUE PLANETAS', anchor:SUN_DIAMETER, anchorName:'Sol', anchorLabel:'Diâmetro do Sol na tela', defaultCm:14, defaultView:'distance', description:'Mantenha o mesmo Sol. Percorra as distâncias até os planetas e perceba quanto da nossa vizinhança é espaço vazio.', sourceIds:['planets','sun','au','distances','solarSystem','earthImage','css'], note:'Esta é uma régua de distâncias a partir do centro do Sol. As posições são referências médias alinhadas para comparação, não as órbitas de hoje.', bodies:[SUN,...PLANETS] },
  { id:'estrelas', name:'As estrelas', eyebrow:'05 / O SALTO PARA OUTRA ESTRELA', anchor:SUN_DIAMETER, anchorName:'Sol', anchorLabel:'Diâmetro do Sol na tela', defaultCm:14, defaultView:'distance', description:'Saia do Sistema Solar sem trocar sua referência. Com esse mesmo Sol, até a estrela mais próxima exige outra noção de distância.', sourceIds:['sun','au','stars','galaxy','solarSystem','css'], note:'Proxima Centauri aparece como localizador de distância. Seu símbolo não indica diâmetro. A equivalência em quilômetros não é uma rota na superfície da Terra.', bodies:[SUN,{id:'proxima',name:'Proxima Centauri',diameter:null,x:4.24*LIGHT_YEAR,definition:'Localizador de distância',color:'#df9273'}] },
];
