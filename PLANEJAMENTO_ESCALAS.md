# Planejamento de escalas — Régua Cósmica

Pesquisa científica e plano de evolução do site · 11 de setembro de 2026

**Escopo:** aprofundar a experiência educativa preservando a identidade visual existente. Este documento não implementa, redesenha nem publica o site.

**Decisão central:** apresentar, já na entrada, duas jornadas independentes: **do cotidiano ao universo** e **Micro — do cotidiano ao átomo**. Compartilham linguagem visual e ferramentas de medida, mas não uma apresentação contínua obrigatória.

## 1. Síntese executiva

O objetivo não é fazer alguém decorar quantos quilômetros separam dois astros. É permitir que essa pessoa reconstrua uma proporção, reconheça o que desapareceu durante um afastamento e explique por que uma imagem muda quando muda o observador.

A pesquisa sustenta quatro direções, com limites importantes:

1. A compreensão de magnitudes depende de experiência, representação e intervalo numérico. Não existe uma única “intuição de escala” que funcione igualmente do corpo ao átomo ou às estrelas.[^1][^2][^3][^4]
2. Objetos familiares oferecem referências úteis, mas sua familiaridade também pode enviesar estimativas. Toda analogia deve vir acompanhada de uma medida verificável.[^5]
3. Articular referências concretas, representações intermediárias e relações matemáticas é uma estratégia fundamentada; sua eficácia específica neste site ainda precisa ser testada.[^6]
4. Animações e múltiplas vistas podem apoiar o entendimento quando tornam relações rastreáveis. Movimento ou realismo visual, isoladamente, não garantem aprendizagem.[^9][^10][^11][^12]

**Proposta de produto derivada dessas evidências:** cada etapa combina uma referência reconhecível, uma cena mensurável, uma transformação controlável e uma pequena descoberta. A profundidade fica em camadas; a tela principal continua limpa.

Prioridades de implementação:

- Corrigir a proporcionalidade dos desenhos existentes antes de ampliar o catálogo.
- Disponibilizar Micro e Macro desde a primeira entrega funcional da nova experiência.
- Usar escala linear dentro de cada vista de medida; reservar a escala logarítmica para a navegação entre ordens de grandeza.
- Fazer o laboratório Sol–Terra–Lua a partir de um único modelo geométrico, com vistas sincronizadas de dimensões, posições e céu do observador.
- Medir compreensão por estimativa, explicação e transferência para exemplos novos, separadamente de encantamento e satisfação.

## 2. Objetivo, público e necessidades

### 2.1 Objetivo geral

Transformar dimensões abstratas em relações observáveis, corporalmente comparáveis e recuperáveis pela memória: “agora consigo imaginar essa distância” e “sei o que esse desenho está medindo”.

Resultados esperados:

- Distinguir comprimento, diâmetro, distância entre centros, distância entre superfícies, área e volume.
- Entender que aumentar uma distância dez vezes não é somar dez unidades.
- Usar uma referência conhecida para estimar algo desconhecido.
- Compreender a diferença entre tamanho físico e tamanho aparente.
- Reconhecer limites de resolução e de modelos científicos sem interpretar ausência de desenho como ausência do objeto.
- Voltar livremente ao familiar depois de explorar uma escala extrema.

### 2.2 Público assumido

Pessoas curiosas, adolescentes e adultas, sem formação científica obrigatória; uso individual em celular ou computador e uso acompanhado em contextos educativos. Essa definição é uma hipótese de produto, não uma conclusão demográfica da pesquisa.

| Necessidade | Resposta proposta |
| --- | --- |
| “Não sei notação científica.” | Medida por extenso primeiro; potência de dez como segunda leitura opcional. |
| “Perdi a noção de onde estou.” | Âncora anterior, régua, trilha de etapas e botão de retorno à referência. |
| “Quero explorar, não assistir a uma aula longa.” | Avançar, voltar, pausar, comparar e escolher etapas sem bloqueios. |
| “Quero conferir se isso é verdade.” | Fonte, definição da medida, data e limites acessíveis junto da cena. |
| “Não quero informar minha casa.” | Distância manual e percurso demonstrativo completos, sem localização. |
| “Não caminho / não conheço futebol / meu corpo é diferente.” | Referências alternativas; passo e altura configuráveis, nunca universais. |
| “Zoom e movimento me incomodam.” | Modo estático equivalente, navegação por botões e respeito a movimento reduzido. |

## 3. Pesquisa: método, descobertas e limites

### 3.1 Como esta pesquisa foi conduzida

Revisão orientada ao projeto, não revisão sistemática exaustiva. Foram buscados estudos sobre concepções de escala, estimativa numérica, tamanho familiar, aprendizagem espacial, representações múltiplas e animação; depois, dados físicos e normas nas instituições responsáveis.

Prioridade de fontes: artigos e revisões científicas; textos de autores e universidades; NASA/JPL, IAU, BIPM, NIST, NOAA, CERN; documentação oficial para acessibilidade e mapas. Os números das analogias foram calculados a partir dos dados identificados neste documento.

Onde o acesso se limitou ao resumo, a interpretação também se limitou ao resumo. Artigos antigos foram mantidos quando tratam diretamente de mecanismos fundamentais; dados, constantes e serviços devem ter versão própria. Não foi encontrada, nesta seleção, uma validação experimental da combinação completa de recursos aqui proposta.

Convenções usadas:

- **Evidência:** resultado de pesquisa, com população e limitações quando relevantes.
- **Fato/modelo científico:** dado físico ou descrição estabelecida, com sua convenção.
- **Derivação:** cálculo deste planejamento a partir de dados citados.
- **Proposta de design:** decisão para o site, não conclusão demonstrada pelo artigo.
- **Hipótese a testar:** resultado esperado ainda não verificado com usuários.

As referências completas, links e DOI verificados estão nas notas ao final. Páginas institucionais sem DOI são identificadas como tal.

### 3.2 Por que escalas extremas são difíceis

**Evidência direta sobre escala espacial.** Tretter, Jones e Minogue estudaram 215 participantes de diferentes níveis escolares e formação científica, em um intervalo de nanômetros a grandes distâncias. A precisão das concepções variou entre escalas; especialistas usaram referências e relações para transitar entre domínios. Isso não demonstra que uma animação contínua seja a melhor interface, mas mostra que acertar a escala cotidiana não implica dominar a microscópica ou a astronômica.[^1]

**Consequência proposta:** capítulos semânticos conectados por razões explícitas. Não exigir que a pessoa acompanhe uma viagem visual ininterrupta por dezenas de ordens de grandeza.

**Evidência sobre representação numérica.** Siegler e Opfer observaram diferenças de estimativa relacionadas à idade, tarefa e intervalo. Dehaene e colaboradores encontraram diferentes mapeamentos de números para espaço conforme experiência cultural e estímulo. Esses estudos não autorizam a afirmação simplista “o cérebro é logarítmico”, nem uma hierarquia de capacidade entre culturas.[^2][^3]

**Consequência proposta:** ensinar a leitura das duas réguas. Na linear, distâncias iguais significam acréscimos iguais; na logarítmica, significam multiplicações iguais. Nunca trocar de uma para outra silenciosamente.

**Evidência sobre números grandes.** Landy, Silbert e Goldin encontraram, em amostras adultas, estratégias que tratavam fronteiras como mil, milhão e bilhão como segmentos semelhantes, apesar dos fatores multiplicativos envolvidos. O resultado não é uma prevalência universal.[^4]

**Consequência proposta:** revelar “mil grupos de mil”, com agrupamento visual progressivo; ligar 1.000.000 a um milhão sem transformar cada zero em uma decoração. Em português brasileiro, explicitar milhão = 10⁶, bilhão = 10⁹ e trilhão = 10¹² quando essas unidades surgirem.

### 3.3 O familiar ajuda, mas não é uma régua infalível

**Evidência.** Maltz e colaboradores manipularam tamanhos de dados e cubos de Rubik reais. A identidade familiar afetou julgamentos de tamanho e distância, inclusive com visão binocular. É um estudo de objetos próximos, não um teste de interfaces astronômicas.[^5]

**Consequência proposta:** dizer “uma bola de 20 cm de diâmetro”, não apenas “uma bola”. Formiga, cabelo, passo, gota, quarteirão e grão de areia variam. O desenho precisa mostrar qual medida foi adotada e permitir substituição quando útil.

**Evidência de aprendizagem.** A revisão de Fyfe e colaboradores organiza a estratégia de passar do concreto ao abstrato, preservando as correspondências relevantes. O contexto e a qualidade dessas correspondências importam.[^6]

**Consequência proposta:** percurso conhecido → linha com o mesmo comprimento → grupos de percursos → unidade maior. Na Micro: objeto com régua → recorte identificado → comparação ampliada → micrômetro/nanômetro. Não desaparecer com a referência antes de estabelecer a próxima.

### 3.4 Habilidade espacial pode ser desenvolvida

**Evidência.** A meta-análise de Uttal e colaboradores reuniu 217 estudos de treinamento espacial e encontrou ganhos médios, com diferenças entre intervenções. Isso apoia a possibilidade de aprendizagem; não demonstra que qualquer atividade interativa produza transferência para astronomia.[^7]

**Consequência proposta:** pequenas tarefas repetíveis de estimar, observar e corrigir. Evitar “você nasceu sem noção de escala”. Oferecer pistas sem julgamento e exemplos novos para testar transferência.

### 3.5 A tela precisa ajudar a selecionar, não apenas acumular

**Base teórica e experimental.** Mayer e Moreno discutem a capacidade limitada de processamento e estratégias para reduzir sobrecarga em aprendizagem multimídia. Não se trata de classificar pessoas em “aprendizes visuais” e “auditivos”.[^8]

**Consequência proposta:** uma pergunta principal por etapa, rótulo próximo do elemento pertinente e informação técnica sob demanda. Narração opcional, legendada, sem competir com parágrafos longos. A referência completa fica disponível sem ocupar continuamente a cena.

### 3.6 Animação deve explicar uma mudança

**Evidência com ressalvas.** Tversky, Morrison e Bétrancourt discutem dificuldades de acompanhar mudanças rápidas e evidência insuficiente em comparações mal controladas. Höffler e Leutner, em meta-análise, encontraram vantagem média de animações em certos contextos, com variação conforme conteúdo e função. As conclusões são compatíveis: animação pode ajudar, mas não por existir.[^9][^10]

**Evidência mais específica.** Heer e Robertson estudaram transições em gráficos estatísticos e encontraram benefícios perceptivos de transições planejadas. Transferir isso para escalas físicas é uma hipótese de design a validar.[^11]

**Consequência proposta:** manter o objeto rastreável, separar mudanças de câmera e de modelo, permitir pausa e reversão. O movimento deve responder “o que mudou?”, não apenas produzir um efeito cinematográfico.

### 3.7 Vistas diferentes precisam conversar entre si

**Base de pesquisa.** O modelo DeFT, de Ainsworth, discute como representações podem se complementar, restringir interpretações equivocadas e apoiar a construção de entendimento; também destaca o custo de relacioná-las. Hegarty ressalta que uma visualização atraente ou preferida não é necessariamente a mais eficaz para a tarefa.[^12][^13]

**Consequência proposta:** as vistas de tamanho físico, distância e céu do observador devem compartilhar seleção, tempo e localização. Uma legenda “mesmo instante, outro ponto de vista” é mais útil do que três animações independentes.

### 3.8 O que esta pesquisa não autoriza prometer

- “Toda pessoa aprende melhor com 3D.”
- “Um zoom contínuo reproduz como o cérebro pensa.”
- “Uma analogia corporal é universal.”
- “Mais tempo no site significa maior compreensão.”
- “A experiência será inesquecível porque tem animações.”

**Hipótese de produto:** uma referência estável, relações visíveis e controle do ritmo produzirão maior compreensão e encantamento. A seção 15 define como verificar isso.

## 4. Diagnóstico do site atual e preservação do design

### 4.1 Base analisada

Inspeção do HTML, CSS e JavaScript de `dist/index.html`. Esta é uma auditoria de código e conteúdo, não uma alegação de teste visual ou de usabilidade em dispositivos reais.

Características a preservar:

- Nome e marca Régua Cósmica; linguagem de régua e exploração.
- Fundo noturno, gradientes discretos, painéis translúcidos, bordas finas e cantos arredondados.
- Paleta existente: fundo `#08111d`, texto `#f4f7fb`, ciano `#5fe1cf`, amarelo `#ffd166`, laranja `#ff9f5a`, azul `#81a8ff`.
- Tipografia de sistema com preferência por Inter, títulos grandes e hierarquia editorial.
- Largura máxima de 1.180 px, composição de abertura, abas em pílula, painel de exploração e cartões de descoberta.
- Espaço de respiro e progressão vertical, sem transformar a experiência em um painel de instrumentos.

Não introduzir outra identidade, nova família tipográfica, estética de videogame, fundo claro obrigatório, constelações decorativas na Micro ou uma coleção nova de estilos de cartão. Adaptar os componentes existentes ao novo conteúdo.

### 4.2 Correções científicas necessárias

| Observação verificável no código | Risco | Evolução sem mudança de identidade |
| --- | --- | --- |
| Linha 321: o tamanho usa `sqrt(diâmetro/Sol)`, com mínimo de 8 px. Linha 325 afirma proporcionalidade dos diâmetros. | A imagem contradiz a legenda. | Usar diâmetro linear. Seleção deve destacar o contorno ou o rótulo, não ampliar o corpo. |
| CSS dos marcadores e esferas, linhas 111–123, usa mínimos e crescimento na seleção. | Confundir localizador clicável com dimensão física. | Separar geometria mensurável de área de toque e localizador. |
| Os planetas internos ocupam uma pequena parte da régua até Netuno. | Rótulos próximos e dificuldade de distinguir objetos. | Zoom local e rótulos em trilhas externas; não deslocar planetas para abrir espaço. |
| Há raios/diâmetros de convenções diferentes no catálogo. | Comparações inconsistentes, especialmente em planetas achatados. | Adotar diâmetros médios equivalentes em volume nas esferas comparativas; identificar modelos elipsoidais à parte. |
| O diâmetro solar fixo é 1.392.700 km. | Conversões independentes podem divergir da nova base. | Migrar explicitamente para 1.391.400 km nominal, mantendo registro da convenção e recalculando analogias. |
| Os dados de distância são heliocêntricos. | Interpretá-los como distância da Terra ao planeta. | Rotular a origem; criar cálculo separado entre dois corpos. |
| O desenho orbital da abertura e os retratos dos cartões são ilustrativos. | Parecerem modelos físicos. | Manter a arte como identidade, com indicação discreta e legível “ilustração, sem escala”; não usá-la como evidência. |
| A seleção reconstrói o conteúdo de `viz` com `innerHTML`; o painel inteiro tem `aria-live`. | Potencial perda de foco e anúncios excessivos. | Atualizar elementos estáveis e anunciar somente a mudança relevante; verificar com leitor de tela. |
| A navegação some abaixo de 800 px; vários rótulos usam aproximadamente 12 px. | Recursos novos podem ficar inacessíveis ou difíceis de ler. | Preservar o estilo com navegação compacta visível e revisão de legibilidade. |

**Derivação de controle:** com o Sol de 164 px, a Terra deveria ter aproximadamente 1,50 px de diâmetro. A fórmula atual produz cerca de 15,70 px. Corrigir essa diferença é alteração de fidelidade científica, não de direção visual.

### 4.3 Contrato de preservação

Antes da implementação, registrar capturas de referência em celular e desktop, tokens de estilo e estados dos componentes. Avaliar as mudanças em duas listas separadas:

1. **Identidade preservada:** cores, tipografia, espaçamentos, hierarquia, superfícies e comportamento responsivo reconhecíveis.
2. **Conteúdo corrigido:** geometria, legendas, foco e informação acessível podem mudar quando necessários à precisão.

Preservar integralmente o design não pode significar congelar uma distorção matemática. Manter a mesma linguagem visual; corrigir o que ela afirma sobre o mundo.

## 5. Arquitetura da experiência: Micro e Macro separadas

### 5.1 Entrada obrigatoriamente bifurcada

Na abertura atual, antes do explorador, inserir duas escolhas de igual importância, no padrão dos cartões existentes:

- **Macro — do seu caminho ao universo.** “Descubra quanto espaço existe entre as coisas.”
- **Micro — da sua mão ao átomo.** “Descubra o que cabe nas coisas que você já conhece.”

Os textos acima são propostas editoriais. Manter o nome Régua Cósmica; ampliar a promessa da abertura sem trocar sua composição. Não iniciar automaticamente pela Macro e esconder a Micro em um menu.

```text
Entrada: escolha sua jornada
├── Macro
│   ├── Você e um percurso
│   ├── Bairro → cidade → país → continente
│   ├── Terra e relevo
│   ├── Terra–Lua → Sol–Terra–Lua
│   └── Planetas → outras estrelas → galáxia → universo observável (opcional)
└── Micro
    ├── Você e uma referência de mão/mesa
    ├── Formiga / lápis → areia / cabelo
    ├── Células → bactérias → vírus
    └── Estruturas moleculares → átomo → núcleo/partículas (opcional)
```

Cada jornada tem endereço e progresso próprios, por exemplo `#macro/percurso` e `#micro/cabelo`. Esses endereços são uma proposta futura; não existem ainda. “Trocar de jornada” volta à escolha sem apagar o ponto anterior. Retomar progresso não deve inserir localização privada na URL.

### 5.2 Modos dentro de cada jornada

1. **Exploração guiada:** etapas curtas, relação entre a referência anterior e a próxima.
2. **Exploração livre:** escolher escala, objeto, distância ou ponto de observação; voltar às etapas a qualquer momento.
3. **Comparar:** fixar duas medidas ou uma analogia reduzida/ampliada; explicitar a dimensão comparada.

Esses modos não são três interfaces diferentes. Usam o mesmo explorador e aparecem quando pertinentes. Mapas pertencem à Macro; ferramentas de amostra e resolução pertencem à Micro. A entrada não apresenta todos os controles.

### 5.3 Anatomia de uma etapa

Ordem de leitura proposta:

1. Pergunta: “Onde ficaria a Lua se esta fosse a Terra?”
2. Cena principal, com régua e referência identificada.
3. Medida legível: “6,03 metros entre os centros, neste modelo”.
4. Uma comparação ou descoberta.
5. Controles anterior/próximo, ampliar/reduzir e restaurar referência.
6. Ações secundárias “Como sabemos?”, “Ver cálculo” e “Limites desta imagem”.

A tela inicial de uma etapa deve evitar mais de uma tarefa de atenção. Esse limite é uma decisão de design a testar, não uma norma científica.

## 6. Motor de escalas e contrato visual

### 6.1 Uma cena de medida é linear

**Derivação geométrica:** se `k` é a quantidade de pixels por metro, então `comprimento_px = comprimento_m × k`. Na mesma vista ortográfica, usar o mesmo `k` nos dois eixos e para todos os comprimentos físicos.

Não usar raiz quadrada, logaritmo ou tamanho mínimo nos diâmetros quando a legenda diz “tamanhos em escala”. Uma vista de diâmetros pode reorganizar os centros em uma fila, desde que declare “somente tamanhos; posições não representam distâncias”.

Na perspectiva 3D, o tamanho em pixels também depende da profundidade. A cena pode ser fisicamente coerente, mas não deve ser vendida como uma régua plana uniforme. Oferecer vista ortográfica para comparar comprimentos e vista angular para comparar aparências.

### 6.2 A navegação entre escalas pode ser logarítmica

Definir a largura física visível como `W_m` e a posição do navegador como `z = log10(W_m / 1 m)`. Uma etapa de `z` corresponde a multiplicar ou dividir o campo por dez.

Rotular: “Navegador de potências de dez — cada intervalo muda a escala 10 vezes”. A barra não é uma estrada em que as distâncias entre planetas estão preservadas.

Exemplo de transição: enquadrar 1 km → 10 km aumenta dez vezes a largura coberta e reduz dez vezes cada comprimento desenhado, com viewport constante. Mostrar os dois valores. No percurso inverso, uma janela de 1 mm → 100 µm amplia os objetos dez vezes.

### 6.3 O objeto ficou menor que um pixel

Não inflar silenciosamente o objeto. Usar, nesta ordem:

1. Manter sua geometria física, mesmo que não resolvida.
2. Exibir um localizador de interface, com haste/retículo e texto “objeto menor que um pixel nesta vista”. Não desenhar um disco colorido que pareça seu tamanho.
3. Oferecer aproximação real ou detalhe em painel próprio, com outra barra de escala claramente identificada.

Área clicável pode ser grande e invisível; não altera o corpo. Uma estrela não resolvida pode ser detectável por seu fluxo luminoso na observação real: resolução do diâmetro e detectabilidade não são a mesma coisa. O site deve distinguir seu limite de desenho de uma afirmação sobre instrumentos.

### 6.4 Estados de fidelidade

| Rótulo | Significado e requisito |
| --- | --- |
| Tamanhos e posições em escala | Mesmo modelo métrico e câmera declarada; sem corpos inflados. |
| Tamanhos em escala; posições reorganizadas | Fila comparativa, sem alegar separação real. |
| Distâncias em escala; localizadores de objetos | Ícones de navegação não codificam diâmetros. |
| Detalhe ampliado | Painel separado, campo físico e régua próprios. |
| Mapa projetado | Projeção e referência de distância explicitadas. |
| Reconstrução científica | Método e dados identificados; não é fotografia direta. |
| Modelo probabilístico | Densidade/probabilidade e convenção da representação identificadas. |

O modo padrão não oferece “exagerar os planetas”. Se uma exceção didática for indispensável, precisa de aprovação editorial, fator visível e alternativa fiel. O planejamento não depende dessa exceção.

### 6.5 Comprimento, área, volume e tempo

- Ao multiplicar comprimentos por `s`, áreas crescem por `s²` e volumes por `s³`. Não usar contagem linear como quantidade volumétrica.
- “Cabem 109 Terras no diâmetro do Sol” não significa 109 Terras em volume nem uma simulação de empacotamento.
- Tempo de viagem não é uma dimensão do objeto. Mostrar `t = distância / velocidade` somente com hipótese de velocidade declarada.
- Anos-luz são distância. “Em um ano-luz” não significa “um ano de viagem de qualquer nave”.[^15][^16]
- Valores físicos em centímetros na tela não são garantidos por CSS. Uma comparação “em tamanho real na sua tela” exige calibração opcional com régua física e invalidação após mudança de zoom/dispositivo.

## 7. Jornada Macro: do cotidiano ao universo

Os intervalos abaixo são campos de exploração propostos, não tamanhos universais de bairros ou cidades. O usuário pode interromper o percurso após qualquer descoberta.

### 7.1 Sequência e transições

| Etapa | O que medir e observar | Interação e transição para a próxima |
| --- | --- | --- |
| M0 — você, 1–10 m | Altura escolhida e uma régua de 1 m; corpo como referência, não padrão obrigatório. | Marcar um comprimento e repetir segmentos até caber um espaço conhecido. |
| M1 — um percurso, 10–1.000 m | Casa–loja opcional, caminho demonstrativo ou distância digitada. | Ver linha do percurso e régua lado a lado; converter em passos e duração. Recuar mantendo o trajeto destacado. |
| M2 — bairro/cidade, 1–100 km | Rota viária versus distância geográfica entre pontos. | O percurso original permanece como referência; mapa se afasta sem perder a marca. Nomear quando ela vira localizador. |
| M3 — país/continente, 100–10.000 km | Distância sobre a Terra, não distância na projeção da tela. | Trocar progressivamente o mapa regional pelo globo, informando a mudança de representação. |
| M4 — Terra, aproximadamente 10⁷ m de diâmetro | Diâmetro, circunferência, superfície, montanhas e oceanos. | A rota vira arco no globo; comparar arco com corda. Afastar preservando o diâmetro terrestre. |
| M5 — Terra–Lua, aproximadamente 4 × 10⁸ m entre centros | Diâmetros relativos e o intervalo entre os corpos. | Fixar a Terra-bola; posicionar a Lua por estimativa; revelar distância. Só então localizar o Sol. |
| M6 — Sol–Terra–Lua, aproximadamente 1,5 × 10¹¹ m Terra–Sol | Tamanho, distância, perspectiva e luz. | Laboratório da seção 9; sair mantendo Terra e Sol como âncoras. |
| M7 — planetas, até aproximadamente 4,5 × 10¹² m do Sol a Netuno | Distâncias heliocêntricas e distâncias variáveis entre a Terra e cada planeta. | Viajar numa régua linear local; trocar para vista orbital quando a posição relativa for a pergunta. |
| M8 — além dos planetas | Diferentes sentidos de “tamanho do Sistema Solar”. | Mostrar regiões e incerteza, não uma parede no fim da régua. Oort é um desvio contextual, não uma parada de posição exata. |
| M9 — outras estrelas, aproximadamente 4 × 10¹⁶ m até Proxima Centauri | Ano-luz e separação interestelar. | Reutilizar a mesma redução do Sistema Solar para revelar o salto até a estrela. |
| M10 — Via Láctea, ordem de 10²¹ m | Disco galáctico da ordem de 100 mil anos-luz. | Localização solar orienta a passagem; imagem externa é reconstrução, não fotografia da nossa galáxia vista de fora. |
| M11 — universo observável, ordem de 10²⁷ m | Região observável, expansão e limite da comparação euclidiana simples. | Capítulo opcional com nova explicação de distância; terminar com retorno à referência humana. |

Dados astronômicos e definições: seção 10.[^16][^17][^20][^25][^26][^27][^28][^29][^30]

### 7.2 Casa → loja: fazer a distância ser percebida

**Proposta:** começar com três entradas equivalentes: “usar um exemplo”, “digitar uma distância” ou “escolher dois pontos no mapa”. Geolocalização só após ação explícita. Não pedir endereço residencial para ensinar escala.

**Exemplo de parâmetros escolhidos, não média populacional:** percurso de 600 m; comprimento de um passo de 0,75 m; caminhada a 1,25 m/s.

**Derivações:** `600 / 0,75 = 800 passos`; `600 / 1,25 = 480 s = 8 min`. Tempo sem paradas e sem variação de terreno. Definir passo como avanço de um pé ao seguinte, não ciclo completo de duas passadas.

Para personalizar, a pessoa pode informar a distância medida ao longo de 20 passos e o tempo que levou. Não inferir automaticamente a partir de idade, gênero ou altura. Oferecer metros, rodas/revoluções apenas se calibradas, e tempo configurável como alternativas; não pressupor que todos caminham.

Interação principal: o trajeto se desenha em segmentos, com contador agrupado. Após alguns passos, mostrar conjuntos de 10 e 100; não exigir assistir a 800 animações. “Ver trecho completo” e “avançar” sempre disponíveis.

### 7.3 Mapas e deslocamentos

**Fato cartográfico:** nenhuma projeção plana preserva simultaneamente todas as propriedades do globo. Comparações geográficas precisam escolher a propriedade relevante.[^33]

**Regras propostas:**

- Comprimento de caminhada/carro vem de uma rota adequada ao modo, não de uma linha reta nem de pixels do mapa.
- Distância entre dois pontos vem de cálculo geodésico no elipsoide adotado; identificar o datum. Uma aproximação esférica deve ser rotulada como tal.
- “De avião” pode começar como arco de grande círculo e tempo idealizado, explicitamente sem representar voo comercial, conexão, vento ou acesso aos aeroportos.
- Não criar percurso a pé sobre oceanos. Se comparar o equivalente em passos, chamá-lo de equivalência matemática, não rota praticável.
- Afastamento regional deve mostrar régua local; para continentes, favorecer globo e vistas adequadas à tarefa. Não medir área comparando silhuetas arbitrárias em Mercator.
- Comparar objeto e região exige a mesma propriedade: comprimento com comprimento; área projetada com área em projeção apropriada. “Um país do tamanho de uma bola” sem definir a medida não é uma analogia válida.

**Integração futura:** separar visualizador, geocodificador, roteador e fonte de mapas. Valhalla é um candidato de roteamento com perfis de pedestre e automóvel; escolher provedor, custos, cobertura e termos antes de integrar.[^45] Não tratar servidores públicos do OpenStreetMap como infraestrutura ilimitada; cumprir atribuição e políticas específicas.[^46]

Privacidade proposta: modo local sem mapa por padrão; explicar que consultas e coordenadas podem chegar ao provedor; não registrar endereço em telemetria ou link compartilhável. Exemplo sem rede deve continuar ensinando a mesma relação, sem fingir uma rota calculada.

### 7.4 Terra, montanhas e oceanos

Usar esfera de raio médio para a analogia global; elipsoide para medições geográficas. Não misturar circunferência equatorial com diâmetro médio sem avisar.[^17]

**Derivação:** numa Terra de 20 cm de diâmetro, 8.848,86 m de altitude do Everest equivalem a aproximadamente 0,139 mm; 10.935 m de profundidade equivalem a aproximadamente 0,172 mm. As referências têm definições e medições próprias.[^31][^32]

**Descoberta proposta:** o relevo é pequeno em relação ao planeta. Manter essa proporção na esfera; abrir um recorte com régua própria para tornar a altura legível, sem elevar montanhas artificialmente no globo. Usar a mesma escala vertical e horizontal no perfil, ou informar explicitamente qualquer diferença — preferencialmente sem exagero vertical.

A transição Terra–Lua reutiliza a mesma bola de 20 cm. Assim, o usuário não precisa reaprender o tamanho da Terra para perceber a distância lunar.

### 7.5 Sistema Solar e espaço interestelar

Na régua de distâncias, a referência precisa dizer “a partir do centro do Sol”. Para responder “qual a distância da Terra a Marte?”, usar posições de ambos no mesmo instante. Subtrair dois valores orbitais médios não produz essa distância geral.[^24]

Não apresentar Netuno como borda física do Sistema Solar. Separar domínio dos planetas, heliosfera e distribuição distante de corpos ligados ao Sol. A Nuvem de Oort é inferida e sua extensão é incerta; a imagem deve mostrar região estimada, não uma casca preenchida de objetos observados.[^26][^27]

**Descoberta proposta com a redução já existente:** Sol de 14 cm → Terra a cerca de 15 m → Netuno a cerca de 452 m → Proxima Centauri a cerca de 4.036 km. São cálculos na mesma escala; o último não é uma rota real sobre a Terra, nem a direção de viagem de uma sonda.[^16][^18][^25][^28]

Tempos de luz: experimentar primeiro aproximadamente 1,28 s Terra–Lua; depois 8 min 19 s para 1 au. Uma linha de propagação é uma representação de sinal, não um feixe visível no vácuo. Os intervalos longos podem ser acelerados com fator exposto, pausa e salto; nunca impor horas de espera.

### 7.6 Até onde ir no universo

Via Láctea e universo observável ficam em um aprofundamento opcional. “Diâmetro do universo observável” é diferente da distância até um objeto específico e do tamanho total do universo, que não conhecemos. A estimativa divulgada pela NASA é de aproximadamente 92 bilhões de anos-luz de diâmetro; o planejamento usa essa ordem, sem precisão aparente excessiva.[^30]

Não calcular distâncias cosmológicas atuais simplesmente como velocidade da luz multiplicada pelo tempo de viagem da luz. Não representar o horizonte observável como uma parede ou afirmar que estamos no centro físico de tudo. Uma exploração cosmológica com evolução temporal exige modelo cosmológico e revisão próprios; não reutilizar sem adaptação o simulador de órbitas.

## 8. Jornada Micro: do cotidiano ao átomo

### 8.1 Sequência e referências

A Micro começa novamente no cotidiano. Não exige assistir à Macro nem começa num átomo sem contexto. O retorno pode percorrer toda a sequência no sentido contrário: átomo → estruturas moleculares → referências microscópicas → cabelo/lápis/formiga → pessoa.

| Etapa | Medida inicial proposta | O que a pessoa observa e como a passagem acontece |
| --- | --- | --- |
| µ0 — pessoa e mão/mesa | Altura configurada; referência de 1 m | Aproximação até uma régua de centímetros, preservando a localização do recorte. |
| µ1 — formiga/lápis | Formiga-exemplo de 5 mm; segmento de grafite de 0,5 mm | Comparação de comprimentos. “0,5 mm” pode ser grafite de lapiseira; não é a dimensão universal da ponta afiada de qualquer lápis. |
| µ2 — areia/gota/cabelo | Grão-exemplo de 0,5 mm; gota-exemplo de 2 mm; fio de 80 µm | Referências alternativas, não uma sequência obrigatória de objetos contidos uns nos outros. Mostrar o eixo medido e a variabilidade. |
| µ3 — células | Hemácia humana de aproximadamente 7,5 µm; outras células identificadas à parte | Comparar à largura do cabelo; informar tipo celular e preparação da imagem. |
| µ4 — bactérias | Modelo didático de 2 µm de comprimento, dentro de uma faixa típica mais ampla | Comparar comprimento e largura separadamente. Troca de amostra explícita; não sugerir que a bactéria está dentro da hemácia. |
| µ5 — vírus | Exemplo de influenza A aproximadamente esférico, 80–120 nm | A faixa de tamanho acompanha a comparação. Não representa todos os vírus nem todas as formas de influenza. |
| µ6 — estruturas biológicas/moleculares | Nucleossomo da ordem de 10 nm; largura da dupla hélice de DNA aproximadamente 2 nm | Abrir uma amostra molecular própria; largura da hélice não é comprimento total do DNA. |
| µ7 — átomo | Comprimento característico de 0,1 nm; hidrogênio como modelo definido | Troca declarada para representação quântica. A régua permanece; o tipo de “tamanho” muda. |
| µ8 — núcleo/partículas, opcional | Escala de femtômetros; raio de carga do próton como medida específica | Mostrar a diferença entre extensão mensurável e partícula sem tamanho resolvido; não fabricar bolinhas de elétrons/quarks. |

Os tamanhos de formiga, areia, gota e grafite acima são **parâmetros de exemplares didáticos**, não dados universais ou médias científicas. Para usar fotografia de um exemplar real, medir ou obter escala documentada antes de publicar. Dados biológicos e atômicos verificados estão na seção 10.[^34][^35][^36][^37][^38][^39][^40][^41]

### 8.2 Manter a referência durante o zoom

No início de cada aproximação, mostrar a janela do próximo enquadramento dentro do atual. A janela ocupa exatamente a fração correspondente do campo; ampliar até preencher o painel, atualizar a régua e manter uma miniatura contextual identificada.

Se houver troca de amostra, interromper a falsa continuidade: “Agora vamos comparar outra amostra na mesma escala”. Não animar uma bactéria virando um vírus, nem uma hemácia virando uma célula nucleada. A etapa molecular não deve afirmar que há um núcleo na hemácia humana madura.

Escolher exemplos pela relação que explicam. As opções formiga e lápis podem ser portas de entrada alternativas, sem obrigar o usuário a passar por todos os objetos familiares antes de chegar à célula.

### 8.3 Ampliar não cria resolução

**Fato:** microscopia óptica convencional possui limites de resolução associados à difração; técnicas de super-resolução superam certas limitações por métodos específicos. Não existe uma proibição universal de toda microscopia óptica abaixo de 200 nm.[^42]

**Proposta:** quando o zoom ultrapassar a resolução de uma imagem, oferecer “ver limite da imagem” e “mudar de método”. Identificar microscopia óptica, eletrônica, reconstrução molecular ou modelo matemático. Não inventar detalhes por interpolação ou IA e apresentá-los como observação.

Imagens precisam registrar método, barra de escala, autoria, licença, preparação e uso de falsa cor quando aplicável. Diagramas vetoriais são aceitáveis se as dimensões forem fundamentadas e o status de esquema estiver explícito. O interativo da Universidade de Utah é um precedente útil de comparação, não prova de eficácia pedagógica nem fonte automática para todos os números.[^43]

### 8.4 Analogias calculadas

**Derivação:** se a largura de um cabelo-exemplo de 80 µm fosse ampliada para 1 m, na mesma proporção:

| Referência | Medida adotada | Medida no modelo |
| --- | --- | --- |
| Hemácia | 7,5 µm de diâmetro | 9,375 cm |
| Bactéria didática | 2 µm de comprimento | 2,5 cm |
| Vírus-exemplo | 100 nm de diâmetro | 1,25 mm |
| DNA | 2 nm de largura | 25 µm |

São comparações de comprimentos, não objetos necessariamente contidos naquele cabelo. As medidas derivam das referências explicitadas; o usuário pode trocar o cabelo de exemplo e observar todos os resultados mudarem juntos.[^34][^35][^36][^37][^38]

**Outra derivação:** uma formiga-exemplo de 5 mm é 50 milhões de vezes mais longa que uma referência de 0,1 nm. Se 0,1 nm virasse 1 cm, os 5 mm virariam 500 km. Não dizer “todo átomo tem exatamente 0,1 nm”; trata-se de um comprimento característico escolhido para visualizar a ordem de grandeza.

**Momento de descoberta proposto:** voltar dos 500 km do modelo à formiga original, mostrando a razão de ampliação. O paralelo emocional com a Macro é a transformação de uma relação, sem juntar as duas apresentações.

### 8.5 Como representar átomos corretamente

**Fato/modelo:** átomos não são pequenos sistemas solares com elétrons em trajetórias planetárias. No modelo quântico do hidrogênio, a função de onda permite calcular distribuições de probabilidade. “Raio atômico” depende da definição e do contexto químico; não é uma borda rígida universal.[^39]

**Proposta:** usar hidrogênio no estado 1s como primeiro exemplo; apresentar densidade de probabilidade e uma região com probabilidade integrada declarada, por exemplo 90%. Explicar que a nuvem é representação matemática, não fumaça material ou fotografia de um elétron espalhado.

Para implementação posterior, no modelo não relativístico de núcleo fixo: `ρ(r) = exp(-2r/a₀)/(πa₀³)`. A probabilidade radial inclui o fator `4πr²`; não confundir seu máximo com o máximo da densidade espacial. O raio de Bohr é uma escala característica, não uma órbita mostrada como trajetória real.[^39][^40]

**Derivação para o contorno:** a probabilidade acumulada dentro do raio `r` nesse modelo é `F(r) = 1 − exp(-2r/a₀) × [1 + 2r/a₀ + 2(r/a₀)²]`. Resolver `F(r) = 0,9` fornece aproximadamente `r = 2,661 × a₀`, ou 141 pm. Esse contorno é uma convenção de visualização de probabilidade, não uma superfície atômica. Mostrar o núcleo no enquadramento completo exige localizador, não aumento oculto de seu tamanho.

O aprofundamento nuclear usa “raio quadrático médio de carga do próton”, não “raio de uma bolinha sólida”. Para elétrons e quarks, explicar que não há tamanho espacial resolvido nos modelos/testes apresentados; símbolo de identificação não é medida. Não usar o raio clássico do elétron como seu diâmetro físico.[^40][^41]

## 9. Laboratório Sol–Terra–Lua

### 9.1 O que “triangular” significa nesta experiência

Aqui, triangular é relacionar **três corpos, suas separações e o observador** em um mesmo estado físico. Não significa desenhar sempre um triângulo equilátero, colocar os três perto para caber ou chamar isso de medição por triangulação.

Uma única imagem de tela não consegue simultaneamente resolver todos os diâmetros e acomodar todas as distâncias com a mesma escala linear. A solução proposta é **um único modelo, observado em vistas complementares**, nunca três desenhos com geometrias incompatíveis.

### 9.2 As três vistas sincronizadas

| Vista | Pergunta | Contrato de fidelidade |
| --- | --- | --- |
| Dimensões | “Quanto mede cada corpo?” | Esferas com diâmetros proporcionais; centros reorganizados somente nesta vista, com aviso. Aproximação de pares quando necessário. |
| Posições e luz | “Onde estão e que luz chega a cada lugar?” | Coordenadas e raios físicos; câmera ortográfica ou perspectiva identificada; aproximação real, sem encurtar Terra–Sol. |
| Céu do observador | “O que alguém neste ponto da Terra vê?” | Direções e tamanhos angulares calculados para o ponto escolhido; régua angular; fase e ocultação coerentes. |

Ao selecionar a Lua, ela é identificada nas três vistas. Ao mudar o observador, apenas aquilo que depende do observador muda; o tamanho físico dos corpos não muda. O painel de distâncias mantém origem e destino nomeados.

No desktop, a vista principal ocupa a maior área, com duas vistas auxiliares menores. No celular, usar abas sincronizadas com resumo persistente dos três valores; não comprimir três cenas ilegíveis. Revelar as vistas uma a uma durante a introdução, oferecendo a composição completa depois.

Se o Sol estiver fora do quadro Terra–Lua, mostrar direção e distância num localizador de borda; não trazer seu disco artificialmente para perto. Um detalhe da sombra tem sua própria régua e ligação explícita ao local ampliado.

### 9.3 Sequência didática

1. **Tamanho:** comparar Terra e Lua, depois Terra e Sol, com diâmetros lineares. Separar a pergunta sobre tamanho da pergunta sobre distância.
2. **Intervalo:** fixar a Terra de 20 cm; pedir uma estimativa opcional da posição lunar e revelar o valor. Conservar a régua durante o afastamento.
3. **O terceiro corpo:** na mesma redução, informar o tamanho e a posição do Sol. O usuário percebe por que ele não cabe no enquadramento anterior.
4. **Perspectiva:** entrar na vista de uma pessoa na Terra. O Sol muito maior pode ocupar quase o mesmo ângulo que a Lua muito menor.
5. **Luz e fases:** avançar a posição lunar; destacar lado iluminado e porção visível. Luz solar refletida é a origem do luar; as fases usuais não são a sombra da Terra.[^21]
6. **Alinhamento e sombra:** ir a um caso explicitamente alinhado. Mostrar umbra, penumbra e, quando pertinente, antumbra; relacionar a sombra na superfície ao céu visto daquele ponto.[^22]
7. **Por que não acontece todo mês:** reintroduzir a inclinação orbital real, da ordem de 5°, sem exagerá-la. Mostrar passagem acima/abaixo do alinhamento e os nós orbitais.[^22][^23]
8. **Explicar e transferir:** perguntar o que aconteceria ao afastar a Lua mantendo seu tamanho. Repetir com uma mudança de observador, não apenas com uma nova legenda.

### 9.4 Base numérica e analogias

Valores didáticos: diâmetro médio terrestre 12.742,0168 km; lunar 3.474,8 km; solar nominal 1.391.400 km; distância média Terra–Lua 384.400 km; referência Terra–Sol de 1 au. Os três últimos números não definem uma configuração orbital única de uma data real.[^16][^17][^18][^19][^20]

**Derivações, arredondadas para exibição:**

| Relação | Resultado | Como apresentar |
| --- | --- | --- |
| Diâmetro do Sol / diâmetro da Terra | 109,2 | Relação linear, não de volume. |
| Diâmetro da Lua / diâmetro da Terra | 0,2727 | Cerca de 27% do diâmetro terrestre. |
| Distância média Terra–Lua / diâmetro terrestre | 30,17 | Entre centros; não confundir com espaço livre entre superfícies. |
| Intervalo entre superfícies / diâmetro terrestre | 29,53 | Subtrair os dois raios da distância entre centros. |
| Diâmetro do Sol / diâmetro da Lua | 400,4 | Razão física aproximada. |
| 1 au / distância média Terra–Lua | 389,2 | Não é exatamente a mesma razão dos diâmetros. |

**Modelo Terra = 20 cm:** Lua de 5,45 cm, a 6,03 m entre centros; intervalo entre superfícies de 5,91 m. Sol de 21,84 m de diâmetro, a 2,35 km da Terra entre centros.

**Modelo Sol = 14 cm**, preservando a analogia atual: Terra de 1,28 mm a 15,05 m do Sol; Lua de 0,350 mm a 3,87 cm da Terra entre centros. Trocar a referência de escala recalcula todas as dimensões e distâncias; não combinar a Terra do primeiro modelo com o Sol do segundo.

### 9.5 Tamanho aparente: cálculo e experiência

**Derivação geométrica:** para uma esfera de raio `R`, observada a distância `d` de seu centro, com observador externo, o diâmetro angular é `θ = 2 × asin(R/d)`. Para ângulos pequenos, `θ ≈ 2R/d`, em radianos. Usar a expressão exata no cálculo; a aproximação serve para explicar a relação.

Com os valores de referência acima, observados do centro terrestre: Sol ≈ 0,533°; Lua ≈ 0,518°. São ângulos próximos, não iguais e constantes. A aparência também muda com a posição do observador e as distâncias orbitais.[^20][^22][^23]

**Proposta de interação:** primeiro, dois discos na mesma régua angular; depois, afastar um corpo virtual mantendo seu raio. O tamanho físico permanece no painel auxiliar enquanto o disco aparente diminui. A manipulação livre recebe o selo “experimento geométrico”, não “posição real de hoje”.

Não confundir essa comparação com a ilusão da Lua perto do horizonte. A explicação do eclipse não depende de essa ilusão ocorrer.

### 9.6 Um modelo único para iluminação, fase e sombra

Estado mínimo: posições de Sol, Terra e Lua; raios; orientação terrestre; localização do observador; instante ou identificação do experimento. Todas as vistas leem esse mesmo estado.

**Iluminação proposta:** para cada superfície lunar, calcular a orientação em relação ao Sol. Um modelo de reflexão difusa pode ser usado para ensinar orientação, com aviso de que não reproduz a fotometria real do solo lunar. Não aplicar uma sombra CSS fixa independentemente da posição solar. Desligar brilhos decorativos ao redor da Lua na vista física.

**Derivação de apoio:** se `α` é o ângulo Sol–Lua–observador, a fração iluminada do disco aparente, na aproximação de esfera e observador distante, é `(1 + cos α)/2`. Isso não é uma fórmula de brilho e não inclui ocultações. Para eclipses, calcular o bloqueio da fonte separadamente.

Fora de eclipses, aproximadamente metade da superfície lunar recebe luz solar direta; o observador vê diferentes frações dessa região. Fase nova não significa que toda a Lua deixou de receber luz. No eclipse lunar, a Terra interfere na iluminação; no solar, a Lua bloqueia parte ou todo o disco solar para certos observadores.[^21][^22]

**Fonte extensa:** o Sol precisa ter raio físico no cálculo da sombra. Uma luz pontual pode produzir sombra dura, mas não explica corretamente penumbra e antumbra.

### 9.7 Algoritmo verificável de eclipse solar

Para um ponto `P` da superfície terrestre, calcular vetores até Sol e Lua, distâncias aos centros, semidiâmetros angulares `aS = asin(RS/dS)` e `aM = asin(RM/dM)`, e separação angular `δ` entre as direções normalizadas.

Na geometria ideal de discos aparentes, com a Lua à frente do Sol:

- `δ > aS + aM`: discos separados, sem eclipse naquele ponto.
- `aM > aS` e `δ < aM − aS`: disco solar inteiramente coberto, totalidade.
- `aS > aM` e `δ < aS − aM`: disco lunar inteiramente dentro do solar, anularidade.
- Demais sobreposições: eclipse parcial.
- Igualdades correspondem a contatos ou casos degenerados; usar tratamento numérico específico, não classificar por arredondamento visual.

Calcular também horizonte/visibilidade: uma ocultação abaixo do horizonte não é um eclipse visível para aquela pessoa. Na borda, evitar decidir somente pelo centro do Sol; se a versão básica não tratar refração e horizonte local, limitar os experimentos a alturas confortavelmente acima do horizonte e declarar a restrição.

**Derivação didática da umbra:** para dois corpos esféricos alinhados, o cone delimitado pelas tangentes externas comuns às duas esferas tem vértice a `L = RM × D(S,M)/(RS − RM)` do centro lunar, atrás da Lua. A interseção desse cone com a Terra, ou a ausência dela, explica a diferença entre umbra e antumbra. Construir os raios tangentes a partir da geometria; não desenhar um triângulo com largura escolhida artisticamente.

O mapa da sombra deve ser resultado de avaliação geométrica na superfície. A vista do observador deve concordar com sua classificação no mapa. Uma porcentagem de área solar ocultada não deve ser apresentada automaticamente como a mesma porcentagem de brilho percebido: fotometria e percepção exigem tratamento adicional.

### 9.8 Experimento idealizado versus evento real

**Primeira versão recomendada:** geometria esférica didática, unidades reais e cenários identificados. Usar configurações ideais de alinhamento e uma órbita inclinada para explicar as relações. Não associar horário, cidade ou trilha de totalidade reais sem validação.

**Versão de eventos reais:** obter efemérides JPL Horizons e fixar corpo de referência, referencial, unidade, instante e escala de tempo. Distinguir posições geométricas de direções aparentes e correções de tempo de luz; não misturar saídas de convenções diferentes. A localização topocêntrica importa.[^24]

Somente anunciar previsão de eclipse depois de validar contra cálculos oficiais, com modelo de forma terrestre, orientação, raios, tempo e tratamento adequado de aparência. Relevo lunar, atmosfera e efeitos de borda ficam fora do modelo básico; ele não prevê contas de Baily nem contato de alta precisão.

### 9.9 Casos obrigatórios de validação

- Alterar somente o zoom não muda ângulos, fase ou tipo de eclipse calculado.
- Lua nova fora do alinhamento dos nós não produz eclipse automaticamente.
- Em experimento alinhado com Sol a 1 au e observador no lado próximo, usar separações Terra–Lua de 363.396 km e 405.504 km como casos de teste: o primeiro permite totalidade central, o segundo anularidade central no modelo esférico. São referências de perigeu/apogeu médios, não extremos absolutos nem eventos datados.[^23]
- Lua no lado oposto ao Sol em relação à Terra não causa eclipse solar.
- Um observador fora da região de totalidade não vê o Sol totalmente coberto.
- Alterar o diâmetro lunar em um experimento altera tamanho angular e sombra; alterar o contorno de seleção não altera nenhum dos dois.
- O caso de quarto lunar mostra aproximadamente metade do disco iluminada sem depender da sombra da Terra.

**Segurança editorial:** a experiência é uma simulação. Não sugerir alinhar objetos olhando diretamente para o Sol. Qualquer convite à observação real deve apontar as orientações oficiais de proteção solar da NASA; experimentos físicos do site devem usar iluminação doméstica apropriada, não observação solar improvisada.[^47]

## 10. Dados, definições e fontes por escala

### 10.1 Constantes e convenções

| Dado | Valor de trabalho | Natureza e fonte |
| --- | --- | --- |
| Prefixos SI | mm = 10⁻³ m; µm = 10⁻⁶ m; nm = 10⁻⁹ m; pm = 10⁻¹² m; fm = 10⁻¹⁵ m | Definições; BIPM.[^14] |
| Velocidade da luz no vácuo | 299.792.458 m/s | Exata no SI.[^15] |
| Unidade astronômica | 149.597.870.700 m | Exata; não significa que a distância instantânea Terra–Sol seja fixa.[^16] |
| Ano juliano | 365,25 dias de 86.400 s | Convenção usada na conversão de ano-luz.[^16] |
| Ano-luz | 9.460.730.472.580.800 m | Derivado de `c × ano juliano`; aproximadamente 9,46 trilhões de km. |
| Raio solar nominal | 695.700 km | Constante nominal de conversão IAU 2015; não medida exata de uma superfície solar imutável.[^18] |
| Raio médio terrestre | 6.371,0084 km | Esfera de volume equivalente, conforme tabela JPL.[^17] |
| Raio equatorial terrestre | 6.378,1366 km | Não intercambiável silenciosamente com o raio médio.[^17] |
| Raio médio lunar | 1.737,4 km | Valor com incerteza de 0,1 km na tabela JPL.[^19] |
| Distância média Terra–Lua | 384.400 km | Aproximação educativa entre centros; distância instantânea variável.[^20] |

**Derivações terrestres:** diâmetro médio ≈ 12.742 km; circunferência da esfera de raio médio ≈ 40.030 km; circunferência equatorial a partir do raio equatorial ≈ 40.075 km. Não chamar as duas últimas de um único valor exato da “volta da Terra”.

### 10.2 Planetas

Diâmetros abaixo são duas vezes os raios médios do JPL. Distâncias são referências heliocêntricas aproximadas das tabelas educativas da NASA, não coordenadas simultâneas nem distâncias da Terra. Para órbitas e datas usar efemérides, não estes valores arredondados.[^17][^24][^25]

| Planeta | Diâmetro médio aproximado, km | Referência heliocêntrica, au |
| --- | ---: | ---: |
| Mercúrio | 4.878,8 | 0,387 |
| Vênus | 12.103,6 | 0,723 |
| Terra | 12.742,0 | 1,000 |
| Marte | 6.779,0 | 1,524 |
| Júpiter | 139.822 | 5,20 |
| Saturno | 116.464 | 9,58 |
| Urano | 50.724 | 19,20 |
| Netuno | 49.244 | 30,05 |

Não incorporar os anéis no diâmetro do planeta. Se forem exibidos em cena mensurável, seus limites precisam de dados próprios. Esferas equivalentes são adequadas a comparações iniciais; um retrato físico mais detalhado deve representar achatamento e orientação com parâmetros próprios.

### 10.3 Geografia e escalas maiores

| Escala/dado | Valor ou regra | Fonte e limite |
| --- | --- | --- |
| Passos e corpo | Medida fornecida ou exemplo configurável | Dados pessoais opcionais; não apresentar padrão escolhido como média científica. |
| Rota local | Comprimento da geometria retornada para o modo escolhido | Provedor de roteamento identificado; mapa incompleto não é garantia de passagem segura.[^45] |
| Países/continentes | Distâncias geodésicas; área quando a comparação for de área | Registrar base geográfica, datum, data e projeção antes da implementação.[^33] |
| Everest | 8.848,86 m acima do nível do mar | Fonte oficial nepalesa; não “altura desde o centro da Terra” nem base–cume.[^32] |
| Challenger Deep | 10.935 ± 6 m, intervalo de confiança de 95%, no estudo citado | Medição de 2020 publicada em 2021; não eliminar incerteza nem combinar profundidades de estudos diferentes.[^31] |
| Sol–Netuno | Aproximadamente 30,05 au, ou 4,50 bilhões de km | Referência radial; região planetária de ponta a ponta tem outra medida.[^25] |
| Nuvem de Oort | Borda interna estimada aproximadamente 2.000–5.000 au; externa aproximadamente 10.000–100.000 au | Faixas de estimativas NASA, não objeto com fronteira observada e posição exata.[^27] |
| Proxima Centauri | Aproximadamente 4,24 anos-luz | Distância de referência; não posição atual calculada por este plano.[^28] |
| Via Láctea | Disco da ordem de 100 mil anos-luz de diâmetro | A extensão depende do componente e da definição; não confundir com halo.[^29] |
| Universo observável | Aproximadamente 92 bilhões de anos-luz de diâmetro | Estimativa divulgada pela NASA; não tamanho total do universo.[^30] |

Sem uma base geográfica validada, não inventar distâncias de bairros, fronteiras ou rotas reais. A implementação pode começar com medidas manuais e exemplos explicitamente hipotéticos.

### 10.4 Micro: amostra, dimensão e incerteza

| Objeto | Medida de referência | Convenção/fonte |
| --- | --- | --- |
| Formiga | 5 mm no exemplar didático | Comprimento selecionado; espécie e fotografia reais pendentes de documentação. |
| Grafite/lápis | 0,5 mm no exemplo de grafite | Diâmetro escolhido, não raio de curvatura da ponta afiada. |
| Areia | Grão-exemplo de 0,5 mm | Comprimento selecionado; não média de todos os grãos. |
| Gota | 2 mm de diâmetro no exemplo | Parâmetro geométrico; não gota-padrão de volume fixo. |
| Cabelo | 80 µm no exemplo; fonte apresenta 80–100 µm como referência | Variável entre fios e pessoas; eixo de medida definido.[^34] |
| Hemácia | Aproximadamente 7,5 µm de diâmetro | Tipo celular específico, não “tamanho da célula humana”.[^35] |
| Células procarióticas | Faixa típica de 0,1–5 µm no texto didático | Existem diversidade e exceções; modelo de 2 µm é escolha dentro de referência geral.[^36] |
| Células eucarióticas | Faixa típica de 10–100 µm no texto didático | Não aplicar a todos os tipos, inclusive às hemácias.[^36] |
| Influenza A | 80–120 nm para referência de partículas aproximadamente esféricas | Tabela de propriedades virais; morfologia variável, não vírus universal.[^37] |
| Nucleossomo | Ordem de 10 nm | Dimensão aproximada da estrutura representada, não comprimento do DNA enrolado.[^38] |
| Dupla hélice de DNA | Aproximadamente 2 nm de largura | Não comprimento total da molécula; geometria e estado precisam ser identificados.[^38] |
| Raio de Bohr, `a₀` | 5,29177210544 × 10⁻¹¹ m | Valor CODATA 2022; incerteza consta na fonte, não é raio rígido de todo átomo.[^40] |
| Comprimento atômico comparativo | 0,1 nm | Referência de ordem de grandeza; não uma nova constante física. |
| Raio RMS de carga do próton | 0,84075 ± 0,00064 fm | CODATA 2022; incerteza-padrão, diferente de fronteira sólida.[^40] |
| Elétrons e quarks | Sem diâmetro resolvido para desenhar como medida nesta experiência | Símbolos não representam tamanho; explicar limites dos modelos e testes.[^41] |

### 10.5 Governança do catálogo

Cada medida precisa dos seguintes campos antes de entrar em produção:

| Grupo | Campos obrigatórios |
| --- | --- |
| Identificação | ID estável, nome em português, jornada, categoria, amostra/espécie quando aplicável. |
| Grandeza | Valor em SI, dimensão física, unidade original, eixo medido, raio/diâmetro/comprimento/distância. |
| Definição | Entre centros ou superfícies; largura ou comprimento; raio médio/equatorial/RMS; extensão observada ou inferida. |
| Incerteza | Faixa natural, erro de medida ou incerteza de modelo, sem confundir essas categorias. |
| Proveniência | Fonte, link, DOI quando houver, tabela/seção, data de consulta e versão do dado. |
| Temporalidade | Constante, referência média, época de efeméride ou medida de exemplar. |
| Imagem/modelo | Método, autoria, licença, escala de calibração, orientação, falsa cor, limites de resolução. |
| Relações | “Comparável a” separado de “parte de”; nunca inferir contenção só pela ordem de tamanho. |
| Revisão | Responsável pela revisão científica, status verificado/pendente e histórico de alteração. |

Regras: guardar precisão de origem, arredondar só na interface; recalcular tudo quando a âncora muda; bloquear alegação científica sem fonte; distinguir valor escolhido, valor medido e valor derivado. Revisar antes de cada publicação e quando uma fonte for atualizada; registrar conflitos, não escolher o número mais surpreendente.

## 11. Componentes interativos e integração técnica

### 11.1 Componentes necessários

| Componente | Responsabilidade | Critério de aceite |
| --- | --- | --- |
| Seletor Micro/Macro | Escolha inicial e troca explícita | Ambos visíveis e acessíveis sem iniciar outra jornada. |
| Navegador de etapas | Anterior, próximo, escolha livre e retorno | Preserva estado e não bloqueia por falta de resposta. |
| Navegador de ordem de grandeza | Alterar o campo físico | Exibe fator de mudança e natureza logarítmica. |
| Cena de medida | Desenhar com escala/câmera declaradas | Mesma medida gera mesma geometria sob o mesmo estado. |
| Âncora de referência | Fixar corpo, percurso ou objeto | Medida e fator continuam identificados após cada transição. |
| Régua adaptativa | Marcas e unidade coerentes com o enquadramento | Não altera silenciosamente o tipo de grandeza. |
| Localizador subpixel | Acesso a objetos não resolvidos | Não parece um corpo ampliado; funciona por teclado/lista. |
| Comparador | Duas medidas e razão entre elas | Denominador, dimensão e convenções explícitos. |
| Cartão de descoberta | Uma consequência observável | Não exige ler todo o catálogo para seguir. |
| Painel de fontes | Origem, definição, cálculo e limites | Disponível junto do dado e sem perder o estado da cena. |
| Mapa/percurso | Pontos, rota, distância e estimativa de tempo | Sem localização obrigatória; distingue rota e linha geográfica. |
| Laboratório de três corpos | Geometria, observador, luz e sombra | Uma única fonte de estado alimenta todas as vistas. |
| Visualizador Micro | Amostra, método, detalhe e resolução | Troca de amostra e reconstrução sempre identificadas. |
| Controle de movimento | Pausa, velocidade, avanço por etapas | Modo reduzido mantém toda a informação essencial. |
| Verificação de compreensão | Estimar, explicar e aplicar | Não mede só cliques ou satisfação. |

### 11.2 Organização técnica proposta

O site atual é estático e reúne apresentação e cálculo no mesmo arquivo. Não é necessário trocar de framework para executar este plano. Separar responsabilidades antes de acrescentar complexidade:

1. **Catálogo versionado:** medidas, referências, amostras e cenas.
2. **Cálculos puros:** unidades, razões, tempos, escalas, ângulos e ocultações, sem dependência do desenho.
3. **Estado da experiência:** jornada, etapa, campo físico, âncora, comparação, observador e movimento.
4. **Apresentação:** componentes existentes, cena vetorial/Canvas e vistas alternativas acessíveis.
5. **Adaptadores externos opcionais:** mapas, rotas e efemérides, com dados demonstrativos de reserva.

Usar desenho vetorial para réguas e comparações simples. Avaliar 3D apenas onde perspectiva e sombra justificam sua complexidade. Antes de escolher bibliotecas, testar compatibilidade, desempenho, acessibilidade e manutenção; este planejamento não fixa versões de dependências.

Não criar um documento de rolagem com 10²⁷ pixels nem desenhar universo e átomo em um único sistema de coordenadas de GPU. Usar coordenadas locais, origem próxima da cena, campo físico separado e níveis de detalhe. O navegador conecta escalas; cada representação usa uma faixa numérica adequada.

### 11.3 Estado e transições

Cada transição guarda: cena de origem/destino, âncora, transformação de câmera, razão de escala, método visual e indicação de troca de amostra. Voltar deve restaurar o estado anterior, inclusive a comparação escolhida.

Interromper uma transição deve deixar um estado válido, sem número de um quadro e geometria de outro. Durante movimento contínuo, valores podem atualizar visualmente; anúncio acessível ocorre na parada ou sob solicitação, não a cada quadro.

Falhas externas: fonte indisponível → manter dados verificados já carregados; rota indisponível → mostrar erro e exemplo/manual; ausência de aceleração gráfica → versão vetorial/estática; ausência de consentimento → nenhuma funcionalidade educativa essencial é perdida.

## 12. Animações, microinterações e descoberta

Todos os itens desta seção são **propostas de design**, não durações ou técnicas cientificamente prescritas.

| Interação | O que explica | Limite de uso |
| --- | --- | --- |
| Janela de recorte que se amplia | Relação entre visão geral e detalhe | Sem inventar resolução; manter régua e origem. |
| Régua que troca m → km ou µm → nm | Mesma medida, unidade diferente | Valor antigo e equivalente aparecem juntos brevemente. |
| Grupo de dez segmentos | Multiplicação e mudança de ordem | Agrupar visualmente; não tornar milhares de itens obrigatórios. |
| Referência que sai do campo | Pequenez relativa ou grande distância | Mostrar localizador e explicar por que deixou de ser resolvida. |
| Estimar antes de revelar | Comparar expectativa e proporção | Sempre opcional; feedback acolhedor, sem constrangimento. |
| Linha de sinal luminoso | Tempo de propagação | Traço é guia; velocidade real ou aceleração identificadas. |
| Vistas coordenadas | Mesmo mundo, outra perspectiva | Não mover todos os elementos simultaneamente sem necessidade. |
| Retorno à referência cotidiana | Recuperar a relação aprendida | Não resumir apenas com uma pilha de números. |

Valores iniciais para prototipação: microinterações de seleção na ordem de 150–250 ms; transições simples de enquadramento de 500–900 ms; saltos grandes divididos em etapas controláveis. Ajustar por observação de usuários. Nenhum tempo físico será substituído por esses tempos de interface sem indicação.

Não usar estrelas passando rapidamente, tremor, parallax automático, pulsação incessante, som obrigatório ou rolagem sequestrada. O espaço vazio pode produzir surpresa; não precisa ser preenchido de partículas decorativas que pareçam matéria em escala.

Exemplos de momentos narrativos:

- “A Lua não mudou de tamanho. Você mudou de lugar.”
- “O planeta continua ali. Nesta vista, seu diâmetro já não ocupa um pixel.”
- “Este é outro material, mostrado com a mesma régua.”
- “O que parecia uma fronteira do átomo era um limite escolhido para a representação.”

São textos propostos, sujeitos a teste de compreensão. A emoção desejada é consequência da relação percebida, não substituto da explicação.

## 13. Acessibilidade, leitura e privacidade

### 13.1 Base normativa

Adotar WCAG 2.2 nível AA como base e selecionar melhorias adicionais. A norma não determina uma fonte mínima universal de 16 px; tamanhos de texto abaixo são decisões do projeto.[^44]

- Contraste de texto de pelo menos 4,5:1, ou 3:1 para texto grande conforme a definição normativa; componentes e informação gráfica essencial com contraste aplicável de 3:1.
- Operação por teclado, foco visível e não encoberto pelo cabeçalho fixo; ordem de foco coerente e retorno após painéis.
- Alternativa a arrastar, pinçar ou passar o mouse: botões, campos numéricos e seleção por lista.
- Alvos atendendo ao mínimo AA de 24 × 24 pixels CSS, observadas as exceções normativas; adotar 44 × 44 como meta de conforto do projeto quando possível, sem aumentar a geometria física.
- Redimensionamento de texto, reflow e zoom do navegador; verificar largura equivalente a 320 pixels CSS. Exceções de conteúdo bidimensional não justificam esconder os controles ou o resumo acessível.
- Pausar movimentos prolongados e não usar flashes perigosos. Respeitar movimento reduzido e oferecer modo estático; redução de animação de interação é também uma melhoria além da base AA.

### 13.2 Aplicação ao design existente

Conservar a paleta, mas medir contrastes reais sobre gradientes e transparências. Se um texto secundário não passar, ajustar sua aplicação, peso ou tom dentro da mesma família visual. Não afirmar conformidade sem teste.

Proposta de leitura: corpo de 16–18 px e rótulos essenciais preferencialmente de pelo menos 14 px; permitir ampliação. Não usar apenas ciano/amarelo para distinguir corpos: combinar nome, forma de marcador e posição na legenda.

Cada cena precisa de uma alternativa textual estruturada, por exemplo: “Modelo: Terra com 20 cm de diâmetro. Lua: 5,45 cm. Separação entre centros: 6,03 m”. Uma tabela acessível pode oferecer as mesmas relações sem depender de interpretar a imagem.

Não colocar todos os controles em Canvas. Regiões de atualização assistiva anunciam apenas ações relevantes. Ícones decorativos ficam fora da leitura; símbolos matemáticos recebem texto explicativo; “µm” pode ser anunciado como micrômetros.

### 13.3 Privacidade e contexto de uso

Não pedir cadastro, endereço ou localização para começar. Não persistir a casa do usuário por padrão. Explicar cada provedor externo antes de enviar pontos; uma recusa deve manter o caminho demonstrativo funcional.

Compartilhamento registra configuração educativa, não coordenadas privadas. Telemetria de avaliação deve ser mínima e consentida quando necessária; não capturar texto livre que possa conter endereço. Mapas são ferramentas educativas e não orientação garantida de deslocamento seguro.

## 14. Cuidados para não distorcer a ciência

Lista editorial de bloqueio de publicação:

- [ ] Nenhum diâmetro com raiz quadrada, mínimo visual ou aumento de seleção numa vista dita proporcional.
- [ ] Localizadores, área de toque e corpo físico estão separados.
- [ ] Todas as réguas informam unidade e tipo; navegação logarítmica não se passa por distância linear.
- [ ] A mesma medida não muda porque o dispositivo ficou mais estreito; somente a câmera muda.
- [ ] Raio, diâmetro, comprimento, área e volume não são usados como sinônimos.
- [ ] Distâncias entre centros e entre superfícies estão identificadas.
- [ ] Distância heliocêntrica não é rotulada como distância à Terra.
- [ ] Distâncias de uma data vêm de posições compatíveis; médias não são coordenadas instantâneas.
- [ ] Retratos ilustrativos não são usados para ensinar proporção.
- [ ] Mapas não medem quilômetros diretamente em pixels projetados.
- [ ] Altura e profundidade declaram referência; relevo não é inflado por padrão.
- [ ] Planetas, heliosfera, Oort e universo observável não recebem falsas paredes delimitadoras.
- [ ] Fases lunares não são explicadas pela sombra terrestre.
- [ ] Sol é fonte extensa nos cálculos de eclipse; sombra não é efeito gráfico independente.
- [ ] Mesma posição/tempo/observador geram resultados coerentes em todas as vistas.
- [ ] Microorganismos não formam uma sequência falsa de contenção.
- [ ] Uma medida de célula, vírus, fio, gota ou formiga não representa todos os exemplares.
- [ ] Ampliação de imagem não inventa detalhe observacional.
- [ ] Cores artificiais, reconstruções e diagramas estão identificados.
- [ ] Átomo não é representado como sistema solar; raio RMS não é esfera rígida.
- [ ] Não são atribuídos diâmetros arbitrários a elétrons ou quarks.
- [ ] Tempo de viagem hipotético está separado de missão real ou voo real.
- [ ] Um ano-luz é apresentado como distância; expansão cosmológica não é ignorada no capítulo final.
- [ ] Fontes, convenções, arredondamento e incerteza acompanham os dados relevantes.

## 15. Como saber se o usuário realmente compreendeu

### 15.1 Três resultados distintos

1. **Compreensão:** estimar relações e explicar mecanismos.
2. **Usabilidade:** conseguir executar ações e se localizar.
3. **Experiência emocional:** curiosidade, surpresa e sensação de visualizar as distâncias.

Medir os três separadamente. Uma pessoa pode gostar muito da experiência e ainda confundir fases com eclipses; isso precisa aparecer no resultado.

### 15.2 Tarefas de avaliação propostas

| Conceito | Tarefa antes/depois ou de transferência | Evidência de compreensão |
| --- | --- | --- |
| Razão e distância | Posicionar a Lua diante de uma Terra de tamanho escolhido | Estimativa melhora e a pessoa identifica centros ou superfícies. |
| Transferência de analogia | Trocar a Terra de 20 cm por 10 cm | Todas as distâncias e diâmetros do modelo são reduzidos à metade. |
| Tamanho aparente | Manter diâmetro e dobrar distância | Prever diminuição angular, sem afirmar mudança física do objeto. |
| Fases | Explicar um quarto lunar em uma configuração sem eclipse | Distinguir iluminação solar, parte visível e sombra da Terra. |
| Eclipse | Escolher duas posições de observador no mesmo instante | Explicar por que só uma vê totalidade, quando for o caso. |
| Logaritmo | Comparar intervalos 1→10 e 10→100 no navegador | Identificar o mesmo fator e diferentes diferenças absolutas. |
| Micro | Comparar 2 µm com 100 nm | Reconhecer a razão 20, sem confundir micrômetro com nanômetro. |
| Método científico | Escolher entre foto ampliada e modelo molecular | Reconhecer que zoom não cria resolução nem transforma modelo em fotografia. |
| Limites atômicos | Explicar o contorno de uma região de probabilidade | Não tratá-lo como casca sólida do átomo. |
| Astronomia | Interpretar ano-luz e limite do Sistema Solar | Distinguir distância, tempo e diferentes critérios de extensão. |

Não exigir conta de cabeça como único indicador. Permitir régua, calculadora interna, resposta oral em teste moderado ou explicação curta. Avaliar a relação compreendida, não habilidade de digitação.

### 15.3 Métricas e protocolo

Para estimativas positivas, usar erro multiplicativo: `E = abs(log10(estimativa / referência))`. Exemplo: errar por fator 10 gera `E = 1`; por fator 2, aproximadamente `0,301`. É uma métrica proposta para este projeto, não um teste clínico ou escala psicológica validada.

Combinar esse erro com uma rubrica de explicação: incorreta; parcialmente correta; correta com relação causal. Respostas abertas importantes devem ser avaliadas com critérios prévios e, em pesquisa mais formal, avaliadores independentes.

Protocolo por etapas:

1. Rodada de usabilidade com aproximadamente 6–8 participantes diversos por ciclo para descobrir problemas, sem alegar poder estatístico.
2. Teste pré/pós com exemplos equivalentes, evitando apenas repetir o número revelado na tela.
3. Comparar versão interativa com alternativa estática de conteúdo equivalente e tempo controlado, se a pergunta for o benefício da interação.
4. Testar transferência com nova âncora e ordem diferente de exemplos.
5. Quando viável e com consentimento, medir retenção dias depois; isso é um protocolo futuro, não um lembrete ou coleta já configurados.

Metas iniciais **a validar**, não resultados prometidos: 80% dos participantes conseguem trocar a âncora mantendo proporções; 80% distinguem fase de eclipse após o laboratório; queda do erro multiplicativo mediano; ausência de bloqueios de teclado; ambos os caminhos localizáveis sem ajuda. Fixar metas finais e tamanho amostral conforme piloto e desenho de pesquisa.

Perguntar também “qual relação ficou mais clara?” e “onde você deixou de acreditar na imagem?”. Não otimizar por tempo de permanência: descobrir uma relação rapidamente pode ser um sucesso.

## 16. Roadmap de implementação por fases

As fases abaixo descrevem trabalho futuro. Não são tarefas executadas, datas prometidas ou autorização para contratar serviços.

| Fase | Entrega | Dependências e revisão | Critério para avançar |
| --- | --- | --- | --- |
| 0 — base científica e visual | Capturas do design atual; catálogo com convenções; testes de proporção; correção planejada dos tamanhos existentes | Conteúdo científico + frontend + revisão visual | Nenhuma alegação de escala contradiz a geometria; baseline visual aprovado. |
| 1 — fundação das duas jornadas | Escolha Micro/Macro na entrada; navegação reversível; régua e âncora; fluxo curto em ambos | Fase 0; revisão de acessibilidade | Macro: percurso manual → Terra–Lua. Micro: referência de mesa → cabelo → célula, com troca de amostra explícita. Ambos utilizáveis. |
| 2 — laboratório Sol–Terra–Lua | Três vistas coordenadas; fases; tamanho angular; sombra por geometria; cenários idealizados | Cálculos independentes; revisão de pessoa com domínio de astronomia/óptica | Casos da seção 9.9 passam; sem alegação de previsão real. |
| 3 — Micro completo | Bactérias, vírus, estruturas moleculares, hidrogênio e retorno até formiga/lápis | Curadoria de amostras/imagens; revisão em biologia e física | Escalas e métodos documentados; limites de resolução/probabilidade compreensíveis. |
| 4 — Macro geográfico | Mapas, rotas opcionais, passos/tempos calibráveis; globo e relevo | Provedor escolhido, termos, privacidade, datum e cobertura | Sem coordenadas obrigatórias; rota versus geodésica corretas; falha de rede tratada. |
| 5 — Macro astronômico | Planetas, distâncias entre corpos, diferentes extensões do Sistema Solar, estrelas e Via Láctea | Efemérides ou estados didáticos identificados; catálogo revisado | Nenhuma distância Terra–planeta fixa indevida; continuidade de referência comprovada em teste. |
| 6 — validação e aprofundamentos | Testes comparativos; melhorias; opcional universo observável, núcleo/partículas e eclipses reais | Revisão especializada e resultados das jornadas básicas | Recursos avançados só entram se não introduzirem confusões persistentes. |

Fases 3 e 4 podem avançar em paralelo quando houver capacidade, usando o motor e os componentes compartilhados. A Micro não deve ficar como promessa indefinida enquanto toda a Macro é construída. Os testes de compreensão começam na fase 1, não apenas no final.

### 16.1 Primeiro incremento recomendado

Entregar um recorte pequeno, porém honesto, das duas apresentações:

- Entrada com escolha explícita.
- Macro: 600 m configuráveis → passos/tempo → Terra de 20 cm → Lua na mesma escala.
- Micro: formiga ou lápis com medida declarada → cabelo de referência → hemácia, com régua e contexto de amostra.
- Proporções corrigidas na experiência solar existente, fontes junto dos dados e navegação por teclado.

Esse incremento valida o núcleo “referência → transformação → descoberta”. Mapas ao vivo, renderização avançada e cosmologia não são pré-requisitos para testar essa hipótese.

### 16.2 Trabalho que não deve entrar por impulso

Não priorizar conta de usuário, gamificação competitiva, rankings, realidade virtual, narração obrigatória, tours automáticos longos ou catálogo de centenas de objetos. Nenhum deles resolve, por si, a questão de proporcionalidade e compreensão.

Não publicar eventos astronômicos “em tempo real” com matemática idealizada. Não comprar infraestrutura, enviar localização ou substituir a identidade visual como efeito colateral da evolução.

## 17. Critérios finais de aceite

- [ ] Micro e Macro aparecem como escolhas de igual importância no início.
- [ ] O site permanece reconhecível como o design atual, com mudanças visuais justificadas e revisadas.
- [ ] Avanço e retorno funcionam sem exigir completar uma apresentação.
- [ ] Toda etapa tem uma referência, medida, contrato visual e fonte/parametrização identificáveis.
- [ ] Geometrias mensuráveis não são infladas para caber ou receber cliques.
- [ ] Transições mostram razão e preservam correspondências ou declaram mudança de contexto.
- [ ] A relação Sol–Terra–Lua é coerente entre dimensões, posições, iluminação, sombra e perspectiva.
- [ ] A Micro separa amostras e métodos; não fabrica resolução, contenção ou órbitas eletrônicas.
- [ ] Rotas, passos e tempos são opcionais e têm hipóteses explícitas.
- [ ] Fonte e limites são acessíveis sem lotar a tela principal.
- [ ] Acessibilidade e desempenho são verificados em dispositivos reais, com alternativas sem animação.
- [ ] Há evidência de compreensão em exemplos novos, não apenas comentários sobre beleza.

**Definição de sucesso:** a pessoa consegue reconstruir e explicar uma relação que antes era só um número, mantendo consciência do que a visualização mostra e do que ela não mostra.

## 18. Referências verificadas

Consulta em 11/09/2026. DOI aparece apenas quando identificado nas fontes consultadas. “Sem DOI indicado” significa que a página utilizada não fornece DOI, não que jamais exista publicação acadêmica relacionada. Notas 1–13 sustentam a pesquisa de cognição e visualização; as demais sustentam dados, modelos e requisitos de implementação. As propostas e derivações matemáticas deste documento são autorais.

[^1]: Tretter, T. R.; Jones, M. G.; Minogue, J. (2006). *Accuracy of scale conceptions in science: Mental maneuverings across many orders of spatial magnitude*. Journal of Research in Science Teaching, 43(10), 1061–1085. [Resumo na editora](https://onlinelibrary.wiley.com/doi/abs/10.1002/tea.20155). DOI: [10.1002/tea.20155](https://doi.org/10.1002/tea.20155). Estudo empírico diretamente relacionado a escalas; interpretação aqui restrita ao resumo acessível.

[^2]: Siegler, R. S.; Opfer, J. E. (2003). *The development of numerical estimation: evidence for multiple representations of numerical quantity*. Psychological Science, 14(3), 237–243. [Registro e resumo PubMed](https://pubmed.ncbi.nlm.nih.gov/12741747/). DOI: [10.1111/1467-9280.02438](https://doi.org/10.1111/1467-9280.02438). Evidência sobre estimativa numérica, não validação deste site.

[^3]: Dehaene, S.; Izard, V.; Spelke, E.; Pica, P. (2008). *Log or linear? Distinct intuitions of the number scale in Western and Amazonian indigene cultures*. Science, 320(5880), 1217–1220. [Artigo no PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC2610411/). DOI: [10.1126/science.1156540](https://doi.org/10.1126/science.1156540). Estudo intercultural; não determina uma interface universal.

[^4]: Landy, D.; Silbert, N.; Goldin, A. (2013). *Estimating Large Numbers*. Cognitive Science, 37(5), 775–799. [Artigo na editora](https://onlinelibrary.wiley.com/doi/full/10.1111/cogs.12028). DOI: [10.1111/cogs.12028](https://doi.org/10.1111/cogs.12028). Experimentos de estimativa de números grandes.

[^5]: Maltz, M. V. et al. (2021). *Familiar size affects the perceived size and distance of real objects even with binocular vision*. Journal of Vision, 21(10), 21. [Texto integral no PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC8479574/). DOI: [10.1167/jov.21.10.21](https://doi.org/10.1167/jov.21.10.21). Estudo de percepção de objetos próximos.

[^6]: Fyfe, E. R.; McNeil, N. M.; Son, J. Y.; Goldstone, R. L. (2014). *Concreteness Fading in Mathematics and Science Instruction: A Systematic Review*. Educational Psychology Review, 26, 9–25. [Registro e resumo ERIC](https://eric.ed.gov/?id=EJ1036777). DOI: [10.1007/s10648-014-9249-3](https://doi.org/10.1007/s10648-014-9249-3). Revisão; acesso consultado ao resumo.

[^7]: Uttal, D. H. et al. (2013). *The malleability of spatial skills: a meta-analysis of training studies*. Psychological Bulletin, 139(2), 352–402. [Registro e resumo PubMed](https://pubmed.ncbi.nlm.nih.gov/22663761/). DOI: [10.1037/a0028446](https://doi.org/10.1037/a0028446). Meta-análise de treinamento espacial; não mede diretamente aprendizagem deste conteúdo.

[^8]: Mayer, R. E.; Moreno, R. (2003). *Nine Ways to Reduce Cognitive Load in Multimedia Learning*. Educational Psychologist, 38(1), 43–52. [Resumo na editora](https://www.tandfonline.com/doi/abs/10.1207/S15326985EP3801_6). DOI: [10.1207/S15326985EP3801_6](https://doi.org/10.1207/S15326985EP3801_6). Síntese de princípios de aprendizagem multimídia; não teste da arquitetura aqui proposta.

[^9]: Tversky, B.; Morrison, J. B.; Bétrancourt, M. (2002). *Animation: can it facilitate?* International Journal of Human-Computer Studies, 57, 247–262. [Texto disponibilizado pela autora na Columbia](https://www.tc.columbia.edu/faculty/bt2158/faculty-profile/files/_Morrison_Betrancourt_AnimationCanitfacilitate.pdf). DOI: [10.1006/ijhc.2002.1017](https://doi.org/10.1006/ijhc.2002.1017). Revisão crítica sobre animação e compreensão.

[^10]: Höffler, T. N.; Leutner, D. (2007). *Instructional animation versus static pictures: A meta-analysis*. Learning and Instruction, 17(6), 722–738. [Registro da instituição de pesquisa IPN](https://www.leibniz-ipn.de/en/research/publications/instructional-animation-versus-static-pictures-a-meta-analysis). DOI: [10.1016/j.learninstruc.2007.09.013](https://doi.org/10.1016/j.learninstruc.2007.09.013). Meta-análise; resumo institucional consultado.

[^11]: Heer, J.; Robertson, G. (2007). *Animated transitions in statistical data graphics*. IEEE Transactions on Visualization and Computer Graphics, 13(6), 1240–1247. [Registro e resumo PubMed](https://pubmed.ncbi.nlm.nih.gov/17968070/). DOI: [10.1109/TVCG.2007.70539](https://doi.org/10.1109/TVCG.2007.70539). Experimentos com gráficos estatísticos; aplicação às cenas do site é inferência de design.

[^12]: Ainsworth, S. (2006). *DeFT: A conceptual framework for considering learning with multiple representations*. Learning and Instruction, 16, 183–198. [Texto hospedado na UFPR](https://www.inf.ufpr.br/alexd/REPRESENTACOES_EXTERNAS/Ainsworth_2006.pdf). DOI: [10.1016/j.learninstruc.2006.03.001](https://doi.org/10.1016/j.learninstruc.2006.03.001). Framework de representações múltiplas, não uma garantia de benefício de telas divididas.

[^13]: Hegarty, M. (2011). *The Cognitive Science of Visual-Spatial Displays: Implications for Design*. Topics in Cognitive Science, 3(3), 446–474. [Artigo na editora](https://onlinelibrary.wiley.com/doi/10.1111/j.1756-8765.2011.01150.x). DOI: [10.1111/j.1756-8765.2011.01150.x](https://doi.org/10.1111/j.1756-8765.2011.01150.x). Revisão de cognição aplicada a visualizações.

[^14]: BIPM. [SI prefixes](https://www.bipm.org/en/measurement-units/si-prefixes). Fonte oficial das definições de prefixos. Sem DOI indicado na página.

[^15]: BIPM. [SI base unit: metre](https://www.bipm.org/en/si-base-units/metre). Definição baseada no valor fixado da velocidade da luz no vácuo. Sem DOI indicado na página.

[^16]: NASA/JPL Solar System Dynamics. [Astrodynamic Parameters](https://ssd.jpl.nasa.gov/astro_par.html). Unidade astronômica, dia, ano juliano e tempo de luz. Sem DOI próprio indicado para a tabela.

[^17]: NASA/JPL Solar System Dynamics. [Planetary Physical Parameters](https://ssd.jpl.nasa.gov/planets/phys_par.html). Raios médios/equatoriais, definições e referências das medidas. Tabela institucional sem DOI próprio indicado; consultar as referências de cada linha para trabalhos de origem.

[^18]: International Astronomical Union (2015). [Resolution B3: recommended nominal conversion constants for selected solar and planetary properties](https://www.iau.org/common/Uploaded%20files/IAUGA2015-Resolution-B3-recommended-nominal-conversion.pdf). Documento normativo sobre constantes nominais, não valores instantâneos medidos. Sem DOI indicado no documento consultado.

[^19]: NASA/JPL Solar System Dynamics. [Planetary Satellite Physical Parameters](https://ssd.jpl.nasa.gov/sats/phys_par/). Raio médio da Lua e incerteza. Sem DOI próprio indicado para a tabela.

[^20]: NASA Science. [Moon Facts](https://science.nasa.gov/moon/facts/). Distância média e características lunares. Divulgação institucional; sem DOI indicado.

[^21]: NASA Science. [Moon Phases](https://science.nasa.gov/moon/moon-phases/). Origem do luar e geometria das fases. Divulgação institucional; sem DOI indicado. Diagramas dessa página também precisam ser lidos com suas próprias advertências de escala.

[^22]: NASA Science. [Why Do Eclipses Happen?](https://science.nasa.gov/eclipses/geometry/). Geometria, tamanhos aparentes e condições para eclipses. Divulgação institucional; sem DOI indicado.

[^23]: Espenak, F.; NASA/GSFC. [Eclipses and the Moon's Orbit](https://eclipse.gsfc.nasa.gov/SEhelp/moonorbit.html). Parâmetros e variação orbital; perigeu/apogeu médios não são extremos absolutos. Referência técnica institucional; sem DOI indicado na página.

[^24]: NASA/JPL Solar System Dynamics. [Horizons System Manual](https://ssd.jpl.nasa.gov/horizons/manual.html). Referência de efemérides, observadores, coordenadas e convenções de saída. Documentação técnica; sem DOI próprio indicado para o manual.

[^25]: NASA Science. [Basics of Space Flight — Chapter 1: The Solar System, page two](https://science.nasa.gov/learn/basics-of-space-flight/chapter1-2/). Tabelas educativas de distâncias heliocêntricas aproximadas. Usadas apenas para essas referências estáveis; outros trechos históricos não devem ser tratados como inventário atual de missões ou luas. Sem DOI indicado.

[^26]: NASA Science. [Solar System: Facts](https://science.nasa.gov/solar-system/solar-system-facts/). Estrutura do Sistema Solar e diferença entre regiões. Divulgação institucional; sem DOI indicado.

[^27]: NASA Science. [Oort Cloud: Facts](https://science.nasa.gov/solar-system/oort-cloud/facts/). Existência inferida e faixas estimadas de extensão. Divulgação institucional; sem DOI indicado.

[^28]: NASA Science. [Voyager 1: What Is a Light-Day?](https://science.nasa.gov/mission/voyager/voyager-1/voyager-1-what-is-a-light-day/). Referência de 4,24 anos-luz até Proxima Centauri. Divulgação institucional; sem DOI indicado.

[^29]: NASA Science. [Galaxies](https://science.nasa.gov/universe/galaxies/). Ordem de grandeza do disco da Via Láctea. Divulgação institucional; sem DOI indicado.

[^30]: NASA (2025). [How Big is Space? We Asked a NASA Expert: Episode 61](https://www.nasa.gov/science-research/astrophysics/how-big-is-space-we-asked-a-nasa-expert-episode-61/). Aproximadamente 92 bilhões de anos-luz para o diâmetro observável e distinção do universo total. Divulgação institucional, não artigo de ajuste cosmológico; sem DOI indicado.

[^31]: Greenaway, S. F. et al. (2021). *Revised depth of the Challenger Deep from submersible transects; including a general method for precise, pressure-derived depths in the ocean*. Deep Sea Research Part I, 178, 103644. [Registro e acesso no repositório NOAA](https://repository.library.noaa.gov/view/noaa/33477). DOI: [10.1016/j.dsr.2021.103644](https://doi.org/10.1016/j.dsr.2021.103644). Medida de 10.935 ± 6 m, intervalo de confiança de 95%. Ver também a [síntese oficial NOAA sobre profundidade oceânica](https://oceanservice.noaa.gov/facts/oceandepth.html).

[^32]: Government of Nepal, Department of Mines and Geology. [General Geology](https://dmgnepal.gov.np/en/pages/general-geology-4128). Referência oficial à altitude de 8.848,86 m do Everest. Página institucional; sem DOI indicado.

[^33]: U.S. Geological Survey. [How are different map projections used?](https://www.usgs.gov/faqs/how-are-different-map-projections-used). Complemento: [Map projections](https://www.usgs.gov/publications/map-projections), publicação institucional de 1993, DOI: [10.3133/70047422](https://doi.org/10.3133/70047422). Apoio às distinções entre propriedades preservadas e distorções cartográficas.

[^34]: U.S. National Nanotechnology Coordination Office. [Just How Small is Nano?](https://www.nano.gov/about-nanotechnology/just-how-small-is-nano/). Referências educativas de dimensões familiares, incluindo cabelo. Página oficial; sem DOI indicado. Exemplos não são limites biológicos universais.

[^35]: NCBI Bookshelf. [Peripheral Blood Smear — Clinical Methods](https://www.ncbi.nlm.nih.gov/books/NBK263/). Capítulo de referência sobre morfologia de hemácias, incluindo diâmetro médio aproximado de 7,5 µm. Fonte didática especializada, não recomendação clínica neste projeto; sem DOI indicado no capítulo.

[^36]: OpenStax/Rice University. [Biology for AP Courses — 4.2 Prokaryotic Cells](https://openstax.org/books/biology-ap-courses/pages/4-2-prokaryotic-cells). Faixas didáticas de dimensões celulares. Livro universitário; sem DOI indicado na seção.

[^37]: Kohl, C. et al. (2015). *Protocol for Metagenomic Virus Detection in Clinical Specimens*. Emerging Infectious Diseases. [Tabela 3 no CDC](https://wwwnc.cdc.gov/eid/article/21/1/14-0766-t3); [registro no Robert Koch Institute](https://edoc.rki.de/handle/176904/1993?show=full). DOI: [10.3201/eid2101.140766](https://doi.org/10.3201/eid2101.140766). A tabela compila propriedades de vírus; não é uma medição nova de toda a diversidade viral.

[^38]: OpenStax/Rice University. [Biology 2e — 10.1 Cell Division](https://openstax.org/books/biology-2e/pages/10-1-cell-division). Dimensões aproximadas da dupla hélice e organização em nucleossomos. Livro universitário; sem DOI indicado na seção.

[^39]: OpenStax/Rice University. [University Physics Volume 3 — 8.1 The Hydrogen Atom](https://openstax.org/books/university-physics-volume-3/pages/8-1-the-hydrogen-atom). Modelo quântico, distribuições de probabilidade e distinção de distribuição radial. Livro universitário; sem DOI indicado na seção.

[^40]: NIST/CODATA. [Base de constantes fundamentais](https://physics.nist.gov/cuu/Constants/), ajuste CODATA 2022. [Tabela resumida](https://physics.nist.gov/cuu/pdf/wall_2022.pdf) e [listagem extensa](https://physics.nist.gov/cuu/pdf/all.pdf), incluindo raio de Bohr e raio RMS de carga do próton. Fonte de dados oficial; estes links de tabelas não indicam DOI próprio. Registrar a versão, pois os arquivos gerais podem ser atualizados.

[^41]: CERN. [CMS looks deep inside quarks](https://home.cern/cms-looks-deep-inside-quarks/) e [The LEP story](https://home.cern/the-lep-story/). Contexto de testes de estrutura e partículas tratadas como pontuais; limites experimentais não são diâmetros medidos. Divulgação institucional; sem DOI indicado nessas páginas.

[^42]: Royal Swedish Academy of Sciences/Nobel Prize (2014). [The Nobel Prize in Chemistry 2014 — informação científica para o público](https://www.nobelprize.org/uploads/2018/06/popular-chemistryprize2014.pdf). Microscopia convencional e métodos de super-resolução. Fonte institucional; sem DOI indicado no documento.

[^43]: University of Utah, Genetic Science Learning Center. [Cell Size and Scale](https://learn.genetics.utah.edu/content/cells/scale/). Precedente de experiência educativa; não tratado como estudo de eficácia. Conteúdo textual localizado pela busca; a inspeção completa do interativo não foi realizada nesta pesquisa. Sem DOI indicado.

[^44]: W3C. [Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/); [Understanding Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum). Norma e explicação oficial, sem DOI indicado. Os critérios AA são separados das metas adicionais propostas para o projeto.

[^45]: Valhalla. [Documentação oficial de APIs](https://valhalla.github.io/valhalla/api/) e [matrizes de tempo/distância](https://valhalla.github.io/valhalla/api/matrix/). Candidato técnico a avaliar, não contratação ou promessa de cobertura. Sem DOI indicado.

[^46]: OpenStreetMap Foundation. [Tile Usage Policy](https://operations.osmfoundation.org/policies/tiles/), [Nominatim Usage Policy](https://operations.osmfoundation.org/policies/nominatim/) e [Attribution Guidelines](https://osmfoundation.org/wiki/Licence/Attribution_Guidelines). Políticas oficiais específicas dos respectivos serviços; verificar novamente antes da integração. Sem DOI indicado.

[^47]: NASA Science. [Eclipse Viewing Safety](https://science.nasa.gov/eclipses/safety/). Orientações oficiais para observação solar segura. Sem DOI indicado. A simulação não substitui essas orientações.
