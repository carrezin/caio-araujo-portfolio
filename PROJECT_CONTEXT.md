# Contexto do Projeto — Registro de Desenvolvimento

Este arquivo documenta **como, quando e com quê** este site foi construído. Não é conteúdo do site — é um registro histórico/técnico para referência futura (sua ou de qualquer pessoa que continue este projeto).

---

## 1. Ferramenta e modelo de IA utilizados

- **Ferramenta**: [Claude Code](https://claude.com/claude-code) (CLI/extensão oficial da Anthropic), rodando como extensão nativa dentro do VSCode.
- **Modelo(s) de IA**: a sessão rodou majoritariamente em **Claude Sonnet 5** (`claude-sonnet-5`), com trechos em **Claude Fable 5** (`claude-fable-5`) — o usuário alternou o modelo manualmente via comando `/model` algumas vezes durante a conversa.
- **Modo de operação**: agente autônomo com acesso a ferramentas de arquivo (leitura/escrita/edição), execução de comandos PowerShell, e navegador headless (Chrome) para diagnóstico visual.
- **Ambiente**: Windows 11 Pro, PowerShell 5.1, diretório de trabalho `d:\Projetos\site-portfolio`.

## 2. Linha do tempo da sessão

> Datas/horas em horário local (America/Sao_Paulo, UTC-3), extraídas de timestamps reais de sistema (criação de arquivos, logs do Vite e do túnel Cloudflare) capturados durante a sessão.

| Horário (04/07/2026) | Marco |
|---|---|
| **12:44** | Início do projeto — primeiros arquivos criados (`package.json`, configs) |
| ~12:44 – 12:47 | Scaffold inicial: estrutura de pastas, dados (`src/data/*`), componentes de todas as 11 seções |
| ~12:53 | Node.js LTS instalado via `winget` (não estava presente na máquina) + `npm install` |
| ~13:00 | Primeiro `npm run build` e `npm run dev` bem-sucedidos — site no ar em `localhost:5173` |
| 13:09 – 14:12 | **Rodada 1 de revisão**: contraste da navegação, performance do glow do cursor, correção de overflow, navegação mobile inferior, foto de perfil, correção de um crash (`glowRef` órfão) |
| 14:19 | **Rodada 2 de revisão**: sistema de tema claro/escuro, componentes "Liquid Glass", glow do cursor tornado global, widget de contato flutuante |
| 14:19 – 14:27 | Ajuste fino do efeito de partículas (restaurado à intensidade do template original) e remoção de travas de `prefers-reduced-motion` que estavam "congelando" os efeitos na máquina do usuário |
| 14:19 (17:19 UTC) | Publicação temporária via **Cloudflare Quick Tunnel** para o usuário compartilhar o link com terceiros antes de comprar domínio |
| **~14:30** | Documentação final (`README.md` + este arquivo) |

**Duração total da sessão até este ponto**: aproximadamente **1h45min** (12:44 → 14:30).

## 3. Ordem cronológica das tarefas (por pedido do usuário)

1. **Definição de escopo** — usuário descreveu o portfólio desejado em detalhe (seções, conteúdo, tom, stack) e pediu para **planejar antes de codar**.
2. **Templates de referência** — usuário trouxe 2 componentes prontos (React/shadcn-style) para adaptar:
   - `aether-flow-hero.tsx` — background de partículas em canvas (usado no Hero)
   - `get-in-touch.tsx` (ProfessionalConnect) — grid de cards de contato com glow (usado na seção Contato)
   - Decisão tomada em conjunto: seção de contato final com **5 links** (WhatsApp, E-mail, LinkedIn, GitHub, Instagram) em vez dos 4 originalmente especificados.
3. **Confirmação de escopo fechado** — usuário confirmou que era só isso por enquanto ("currículo em forma de site") e perguntou o que faltava para começar.
4. **Coleta de requisitos finais** — respostas do usuário via perguntas diretas:
   - Links reais de contato fornecidos (WhatsApp, e-mail, LinkedIn, GitHub, Instagram)
   - Foto de perfil: deixar placeholder pronto para receber depois
   - Gerenciador de pacotes: npm
   - Git: não inicializar por enquanto
5. **Implementação completa do zero** — scaffold do projeto, instalação do Node.js (ausente na máquina), todas as 11 seções, build e dev server validados.
6. **Revisão 1** (pedida pelo usuário) — correção de contraste da navegação, performance do glow do cursor (estava lento/travado), criação de barra de navegação inferior mobile, inserção da foto de perfil real, otimizações gerais.
   - Durante a execução, foi identificado e corrigido um bug de digitação (`className="w-4.5 h-4.5 w-5 h-5"`) e ajustes de acessibilidade (`focus-visible`, `prefers-reduced-motion`, `scroll-margin-top`).
7. **Revisão 2** (pedida pelo usuário) — usuário reforçou que efeitos visuais **não podiam ser removidos** (glow e background haviam ficado restritos a desktop/uma seção). Escopo desta rodada:
   - Sistema de tema claro/escuro (com persistência e preferência do sistema)
   - Estilo "Liquid Glass" em botões, navegação e controles
   - Glow do cursor tornado **global** (toda a página, não só a seção de contato)
   - Correção de overflow horizontal no mobile
   - Widget de contato flutuante com ícones alternando
   - Novo template do Aether Flow reenviado pelo usuário como referência do nível de intensidade esperado do background
8. **Bug crítico reportado** ("está tudo preto") — diagnosticado via Chrome headless (dump de DOM + captura de erro JS): `<div ref={glowRef}>` órfão deixado no `Contact.jsx` após a refatoração do glow para um componente global, causando `ReferenceError` e queda de toda a árvore React. Corrigido e validado.
9. **Ajuste de intensidade do background** — usuário reenviou o template original pedindo para "arrumar o background"; comparação revelou que a adaptação havia enfraquecido demais a opacidade das linhas, cores e força de repulsão do mouse. Valores restaurados para bater com o template.
10. **Bug de interatividade reportado** ("o mouse não acompanha o fundo") — diagnosticado como comportamento correto do código respeitando `prefers-reduced-motion: reduce`, que estava ativo no sistema operacional do usuário (Configurações de Acessibilidade do Windows). Como o efeito é parte da identidade visual do site, a checagem foi **removida** para que os efeitos rodem sempre, independentemente da configuração do SO.
11. **Publicação temporária** — usuário pediu uma forma de compartilhar o site localmente com terceiros antes de comprar domínio. Solução: build de produção (`vite preview`) + túnel público via **Cloudflare Quick Tunnel** (binário `cloudflared` baixado standalone, sem necessidade de conta). Foi necessário liberar `preview.allowedHosts` no `vite.config.js` para aceitar o host do túnel (bloqueio padrão do Vite contra DNS rebinding).
12. **Documentação** (esta tarefa) — criação de `README.md` e `PROJECT_CONTEXT.md`.

## 4. Ordem de criação dos arquivos (por fase)

**Fase 1 — Scaffold inicial** (build completo do zero):
```
package.json, vite.config.js, tailwind.config.js, postcss.config.js, index.html, .gitignore
src/main.jsx, src/index.css, src/App.jsx
src/config/contact.js
src/data/{projects,services,techs,stats,process,differentials}.js
src/components/ui/{Icon,SectionTitle}.jsx
src/components/{Header,Hero,About,Stats,Projects,Services,TechStack,Differentials,Process,Contact,Footer}.jsx
```

**Fase 2 — Revisão 1** (acessibilidade, mobile, performance):
```
src/hooks/useActiveSection.js          [novo]
src/components/MobileNav.jsx           [novo]
Header.jsx, About.jsx, Contact.jsx, Footer.jsx, ParticleBackground.jsx  [editados]
Projects.jsx, Services.jsx, TechStack.jsx  [editados — scroll-mt]
index.css  [editado — focus-ring, reduced-motion]
```

**Fase 3 — Revisão 2** (tema, Liquid Glass, glow global, widget):
```
src/hooks/useTheme.js                  [novo]
src/components/ui/ThemeToggle.jsx      [novo]
src/components/ui/CursorGlow.jsx       [novo]
src/components/ContactWidget.jsx       [novo]
tailwind.config.js  [reescrito — darkMode, tokens ink/base]
index.css  [reescrito — tokens de tema, classes Liquid Glass]
index.html  [editado — boot script anti-flash de tema, viewport-fit]
Header.jsx, MobileNav.jsx, Contact.jsx, App.jsx, SectionTitle.jsx,
About.jsx, Stats.jsx, Projects.jsx, Services.jsx, TechStack.jsx,
Differentials.jsx, Process.jsx, Footer.jsx  [migrados para tokens de cor]
```

**Fase 4 — Correções e ajuste fino**:
```
Contact.jsx  [remoção do <div ref={glowRef}> órfão — correção de crash]
ParticleBackground.jsx  [reforço de intensidade + remoção de checagem reduced-motion]
CursorGlow.jsx, ContactWidget.jsx, index.css  [remoção de checagem reduced-motion]
```

**Fase 5 — Publicação temporária**:
```
vite.config.js  [editado — preview.allowedHosts para o túnel]
```

**Fase 6 — Documentação**:
```
README.md            [novo]
PROJECT_CONTEXT.md    [novo — este arquivo]
```

## 5. Ferramentas e serviços externos utilizados

| Ferramenta | Uso | Observação |
|---|---|---|
| **winget** | Instalação do Node.js LTS (ausente na máquina) | `winget install --id OpenJS.NodeJS.LTS` |
| **npm** | Gerenciador de pacotes do projeto | Escolhido pelo usuário entre npm/pnpm/yarn |
| **Chrome headless** | Diagnóstico visual (screenshots e dump de DOM) quando o usuário reportou problemas visuais sem enviar logs de console | Usado para depurar a tela preta (crash de `glowRef`) |
| **cloudflared** (Cloudflare Quick Tunnel) | Publicação temporária do site para compartilhamento externo | Binário baixado standalone (~54 MB), sem necessidade de conta Cloudflare; URL gerado: `*.trycloudflare.com` |

## 6. Decisões de produto registradas

- Seção de contato final ficou com **5 canais** (WhatsApp, E-mail, LinkedIn, GitHub, Instagram) — decisão tomada por pergunta direta ao usuário, que preferiu adicionar Instagram aos 4 originalmente especificados no briefing.
- Foto de perfil (`AVATAR_URL` em `src/config/contact.js`): `https://i.imgur.com/YEeBJGg.jpeg`, com fallback automático para avatar de iniciais ("CA") caso a imagem falhe ao carregar.
- Efeitos visuais (partículas do Hero e glow do cursor) foram **deliberadamente configurados para rodar sempre**, mesmo com `prefers-reduced-motion` ativo no sistema operacional — decisão explícita do usuário, priorizando a identidade visual do site sobre a recomendação padrão de acessibilidade nesse ponto específico.
- Git **não foi inicializado** neste projeto por decisão do usuário (feita no início do desenvolvimento). Caso quiser versionar, rodar `git init` na raiz do projeto.

---

## 7. Sessão 2 — Otimização mobile e PWA (v1.0.1)

Entre o fim da Sessão 1 (~14:30) e o início desta sessão (~16:00 do mesmo dia), o projeto foi publicado no **Cloudflare Pages** com deploy automático a partir do repositório `github.com/carrezin/caio-araujo-portfolio` (git inicializado e conectado fora do escopo registrado por este assistente — o repositório já existia, com um commit `chore: versão inicial do portfólio profissional`, quando esta sessão começou).

### 7.1 Contexto do pedido

O usuário reportou que o site, já aprovado visualmente em desktop e mobile, estava demorando para carregar em celulares — principalmente iPhones mais antigos (ex.: iPhone 11 Pro/Safari) — e às vezes mostrava só o background antes do resto da página aparecer. Pediu uma otimização mobile "inteligente" (desktop mantém tudo, mobile fica leve) e a transformação do site em PWA instalável (Android e iOS), com validação de build e commit/tag versionados — sem push automático.

### 7.2 Diagnóstico (antes de alterar)

Leitura completa de `App.jsx`, `main.jsx`, `index.css`, `vite.config.js`, `index.html` e todos os componentes. Identificados como pontos pesados para a primeira renderização em mobile:
- `ParticleBackground.jsx`: canvas 2D com `requestAnimationFrame` contínuo, sempre montado (mesmo em telas pequenas).
- `CursorGlow.jsx`: já tinha um modo "drift" alternativo para touch (animação CSS em loop de 30s) — rodando mesmo sem necessidade, já que não há cursor real em touch.
- `Hero.jsx`: stagger de entrada do Framer Motion com delays acumulados de até ~1,7s antes do mockup do dashboard terminar de aparecer — atrasando o conteúdo principal (candidato a LCP).
- Gráfico de barras do mockup do Hero: animava a propriedade `height` (layout-affecting) em 12 elementos simultâneos — caro em dispositivos mais antigos.
- Todas as 11 seções carregavam no bundle inicial (sem code-splitting).
- Classes de vidro (`liquid-glass`, `glass-card` etc.) com `backdrop-filter: blur(16px) saturate(140%)` fixo, sem variante mais leve.
- Vários blobs de luz ambiente (`blur-[120px]` a `blur-[140px]`, 350–500px) renderizados no mesmo tamanho em qualquer tela.

### 7.3 Decisões de arquitetura

- **`useIsMobile` (dispositivo) ≠ `useReducedMotion` (acessibilidade do SO), deliberadamente.** Os efeitos "sagrados" do desktop (`ParticleBackground`, `CursorGlow`) e a classe `.perf-mode` (que reduz blur/sombras) são gatilhados **só** por `useIsMobile`. Isso preserva a decisão de produto já tomada na Sessão 1 (efeitos de fundo/cursor sempre ativos no desktop, mesmo com `prefers-reduced-motion` ligado no SO) e evita repetir o bug relatado naquela sessão ("o mouse não acompanha o fundo") para um usuário desktop com essa preferência ativada.
- **`prefers-reduced-motion` é respeitado, mas só para animação (Framer Motion), não para "material" (blur/vidro).** Implementado via `<MotionConfig reducedMotion="user">` em `App.jsx` — mecanismo nativo do Framer Motion que remove animações de `x`/`y`/`scale`/`rotate` e mantém só opacidade, aplicado a toda a árvore sem precisar editar cada componente individualmente.
- **Detecção de mobile roda antes do primeiro paint.** O boot script do `index.html` (o mesmo que já aplicava o tema claro/escuro antes do React montar) ganhou uma segunda checagem síncrona (`matchMedia`) que aplica a classe `.perf-mode` no `<html>` — evita "pintar pesado e depois trocar para leve" um instante depois.
- **Lazy loading por seção, não por rota.** Como o site é uma SPA de página única (sem client-side router), `React.lazy` foi aplicado diretamente a cada seção abaixo do Hero — o bundle principal caiu de ~328KB para ~290KB (gzip: 101KB → 94KB), com 8 chunks adicionais pequenos (0,5KB a 6,4KB cada) carregados sob demanda.
- **Ícones do PWA gerados via Chrome headless**, não por um gerador de imagem externo: HTML com o monograma "CA" em gradiente (mesmo estilo do logo do header) renderizado e capturado em screenshot nos tamanhos exigidos (192, 512, 512 maskable, 180 apple-touch-icon) — sem dependências novas de build de imagem.
- **`vite-plugin-pwa` com `generateSW` + `registerType: 'autoUpdate'`**: manifest e service worker gerados automaticamente no build, sem exigir escrita manual de um `manifest.webmanifest` ou de um SW customizado. `skipWaiting`/`clientsClaim` habilitados para o novo SW assumir controle imediatamente a cada deploy (evita usuário preso em versão antiga).

### 7.4 Validação (headless, sem acesso a device físico)

- Build de produção validado (`npm run build`, sem erros).
- `npm run preview` + Chrome headless: confirmado via dump do DOM que o `<canvas>` do `ParticleBackground` **não é montado** em viewport mobile (390×844) e que a classe `.perf-mode` aparece no `<html>` só nesse caso — no desktop (1440×900) o canvas aparece normalmente e `.perf-mode` está ausente.
- Checagem de overflow horizontal via script injetado temporariamente no build (`document.documentElement.scrollWidth` vs `clientWidth`): **sem overflow em nenhum teste**, incluindo nos 4 breakpoints mobile testados (320, 375, 390, 414px de largura solicitada).
  - Observação técnica: o Chrome headless nesta máquina Windows aplica um piso mínimo de janela (~490px) independente do `--window-size` pedido abaixo desse valor — uma limitação da ferramenta de teste (ausência de emulação de dispositivo via CDP/Puppeteer), não do site. Ainda assim, como `scrollWidth` nunca excedeu `clientWidth` em nenhuma medição (inclusive nesse piso de ~490px), e todos os elementos decorativos de background foram revisados manualmente (ancorados a bordas ou contidos por `overflow-hidden` no pai), a ausência de overflow horizontal tem boa confiança — recomenda-se uma checagem final num dispositivo real ou no modo responsivo do DevTools do Chrome (que emula largura corretamente) antes de considerar 100% encerrado.
- Manifest, ícones e meta tags de iOS conferidos diretamente no HTML/JSON gerados em `dist/`.

---

*Seção 7 registrada em 04/07/2026 às 16:23 (horário local), ao final da sessão de otimização mobile e PWA (v1.0.1).*
