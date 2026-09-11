# Régua Cósmica

Explorador de proporções do cotidiano ao universo. Reconstrução de setembro de 2026, focada exclusivamente na jornada **Macro**, conforme a orientação mais recente. O planejamento científico original permanece em `PLANEJAMENTO_ESCALAS.md`; os capítulos Micro e os serviços de mapas não fazem parte desta entrega.

## Executar localmente

Site estático, sem instalação ou compilação:

```sh
python3 -m http.server 4173 --bind 127.0.0.1 --directory dist
```

Abra `http://127.0.0.1:4173`. O servidor HTTP é necessário para carregar os módulos JavaScript. Os arquivos de produção são os próprios arquivos em `dist/`. A identidade existente em `.openai/hosting.json` foi preservada; esta reconstrução não foi publicada.

## Organização

- `dist/index.html`: estrutura acessível, controles e diálogos.
- `dist/styles.css`: identidade visual e adaptação da interface à largura disponível.
- `dist/data.mjs`: catálogo Macro, valores em metros, definições e fontes.
- `dist/scale.mjs`: conversões, proporções, intervalos de régua e geometria angular.
- `dist/script.js`: navegação, estado por capítulo, câmera, calibração e apresentação.
- `dist/earth.jpg`: textura NASA Blue Marble 2002, com crédito no painel de fontes.
- `tests/scale.test.mjs`: regressões matemáticas do contrato de escala.
- `.rebuild-backup/`: cópia dos três arquivos anteriores à reconstrução.

## Contrato de escala

```text
pixels_por_cm = 96 / 2,54                  # aproximação inicial
pixels_por_metro = referência_cm × pixels_por_cm / referência_m
diâmetro_px = diâmetro_m × pixels_por_metro
distância_px = distância_m × pixels_por_metro
```

Uma Terra de 5 cm tem diâmetro calculado de **188,97637795 pixels CSS**. O navegador quantiza a geometria em frações de pixel. Nem a largura da tela, nem a seleção, nem `devicePixelRatio` são multiplicadores da dimensão. Nenhuma esfera recebe tamanho mínimo visual. Uma calibração física altera `pixels_por_cm` para todas as dimensões e distâncias juntas.

- Arrastar e as setas movem a câmera sem alterar a escala.
- “Ver tudo” calcula uma nova escala comum e atualiza a medida da referência.
- “Tamanhos” conserva diâmetros e reorganiza posições com aviso explícito.
- Localizadores e áreas interativas não representam diâmetros.
- A posição da câmera é calculada em coordenadas locais; distâncias interestelares não criam páginas com bilhões de pixels.
- A régua mostra comprimentos no modelo. A equivalência com a medida real fica imediatamente abaixo dela.
- Calibração é uma preferência local da sessão. Mudanças detectáveis no zoom/tela a invalidam. É preciso recalibrar ao trocar de monitor, inclusive se o novo monitor tiver a mesma resolução.

## Capítulos

1. **O cotidiano:** percurso manual com distância, passo e velocidade configuráveis.
2. **Terra e Lua:** diâmetros e separação média, relevo sem exagero e sinal luminoso em tempo real.
3. **O Sol:** comparação Sol–Terra–Lua; experimento angular separado com os mesmos raios e distâncias. Modelo esférico alinhado, sem previsão de eventos reais.
4. **Os planetas:** oito planetas, distâncias heliocêntricas de referência e comparação linear de diâmetros.
5. **As estrelas:** Proxima Centauri na mesma redução solar; contexto do disco da Via Láctea. A estrela recebe localizador, não diâmetro inventado.

Endereços diretos: `#macro/cotidiano`, `#macro/terra-lua`, `#macro/sol`, `#macro/planetas`, `#macro/estrelas`. Trocar de capítulo e voltar restaura sua escala, câmera e modo durante a sessão da página.

## Verificação

```sh
node tests/scale.test.mjs
node --input-type=module --check < dist/script.js
node --check dist/data.mjs
node --check dist/scale.mjs
```

Verificar também no navegador: Terra de 5/10/20 cm; proporção da Lua; distância entre centros; enquadramento; modos Distâncias/Tamanhos; calibração; larguras 320/390 px; navegação por teclado e manutenção das medidas ao redimensionar. Para campos subpixel, o resultado visual pode ser zero pixels por limitação de resolução; o modelo não aumenta esses objetos.

Fontes físicas e métodos acompanham cada capítulo. A textura terrestre é uma composição NASA, limitada pela máscara circular mensurável; ela não fundamenta medidas de relevo ou atmosfera. As fontes tipográficas têm alternativa local de sistema caso o serviço externo esteja indisponível.
