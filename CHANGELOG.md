# Changelog

Todas as mudanças notáveis deste projeto são documentadas neste arquivo.

O formato segue [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/) e o projeto usa [Versionamento Semântico](https://semver.org/lang/pt-BR/).

## [1.1.0] - 2026-07-14

### Adicionado

- Suporte a 3 idiomas: Português (Brasil), Português (Portugal) e Inglês, com todo o conteúdo do site traduzido (navegação, seções, projetos, serviços, tecnologias, contato e rodapé).
- Detecção automática de idioma por geolocalização (IP, sem prompt de permissão) com fallback para o idioma do navegador; escolha manual do usuário é sempre respeitada e persistida.
- Seletor de idioma no header (bandeira do país atual), com popover em estilo Liquid Glass listando as 3 opções — presente tanto no header desktop quanto no menu mobile.
- Bandeiras renderizadas como SVG embutido (`FlagIcon`) em vez de emoji Unicode — evita o problema conhecido do Windows de exibir o código do país em texto ("BR") em vez do desenho da bandeira.
- Novos projetos no portfólio, com números reais e generalizados (sem nomes de empresa/fornecedor): migração de CRM Cloud → On-Premise, distribuição segura de carteira por estado, plataforma de discagem e IA de voz, overlay de reconhecimento em tempo real, cadastro assistido por leitura de PDF, dashboard de comissão e produtividade, e MVP de recrutamento e admissão digital.
- Números de impacto (seção Stats) e texto da seção Sobre atualizados para refletir a escala real do trabalho (440k+ negócios em CRM, 2M+ contatos, 7+ sistemas entregues, 0 erros em cargas críticas).

### Alterado

- `document.title`, meta description e `og:locale` agora são atualizados dinamicamente conforme o idioma selecionado.
- Arquivos de conteúdo estático (`src/data/*.js`) substituídos por dicionários de i18n (`src/i18n/locales/*.js`), um por idioma, contendo todo o texto e os dados de projetos/serviços/tecnologias.

## [1.0.2] - 2026-07-04

### Corrigido

- Corrigido estado ativo do menu de navegação ao clicar e ao rolar a página.
- Corrigido comportamento do menu ativo após lazy loading das seções.
- Ajustado header/topbar para respeitar safe area em iPhones com notch no modo PWA.
- Melhorada usabilidade do header em modo standalone/iOS.
- Mantida compatibilidade visual com desktop e Android.

### Detalhes técnicos

- `useActiveSection`: o `IntersectionObserver` só observava as seções já presentes no DOM no momento do mount. Como a maioria das seções carrega via `React.lazy`/`Suspense`, elas ainda não existiam nesse momento — na prática, só a seção "Início" ficava sob observação, e o menu nunca mais mudava. Um `MutationObserver` agora detecta quando cada seção lazy é montada e a registra no observer assim que aparece.
- A seção ativa passou a ser recalculada pela posição geométrica atual de cada seção (`getBoundingClientRect`) a cada notificação do `IntersectionObserver`, em vez de depender de um histórico acumulado de entradas/saídas — evita que a seção errada fique "presa" como ativa caso alguma notificação de saída seja perdida numa rolagem longa.
- Clicar num item do menu agora chama `scrollToSection`, que marca a seção como ativa imediatamente (feedback instantâneo) e rola até ela via `scrollIntoView`; a marcação manual expira sozinha depois de ~900ms, devolvendo o controle ao observer.
- Header: `padding-top` agora soma `env(safe-area-inset-top, 0px)` (classes `.header-pad`/`.header-pad-top`), com um pequeno acréscimo extra em `@media (display-mode: standalone)`. Como o valor da safe area é `0px` em qualquer aparelho sem notch, desktop e Android não são afetados.

## [1.0.1] - 2026-07-04

### Adicionado

- Suporte PWA para Android e iOS (manifest via `vite-plugin-pwa`, `display: standalone`, `start_url`/`scope` compatíveis com Cloudflare Pages).
- Ícones de instalação: 192×192, 512×512, variante *maskable* 512×512 e `apple-touch-icon` 180×180.
- Meta tags específicas de iOS (`apple-mobile-web-app-capable`, `apple-mobile-web-app-title`, `apple-mobile-web-app-status-bar-style`) e `mobile-web-app-capable` para Android.
- Service worker com `registerType: 'autoUpdate'` (atualização automática a cada deploy, sem cache antigo preso).
- Modo performance mobile: hooks `useIsMobile`, `useReducedMotion` e `usePerformanceMode`.
- `HeroBackgroundLite`: background estático em CSS para o Hero em mobile (sem canvas/rAF).
- `SectionFallback`: fallback discreto para as seções carregadas via `React.lazy`.
- `public/_headers`: regras de cache para o Cloudflare Pages (assets imutáveis, HTML/SW/manifest sempre revalidados).

### Alterado

- Otimização do carregamento inicial em dispositivos móveis: `ParticleBackground` (canvas) e `CursorGlow` não são mais montados em mobile/touch — o Hero usa `HeroBackgroundLite` no lugar, e a luz do cursor simplesmente não renderiza (não existe cursor real em touch).
- Redução de efeitos pesados no mobile: blur/backdrop-filter das superfícies "Liquid Glass" reduzido via classe `.perf-mode` (aplicada antes do primeiro paint, no boot script do `index.html`); blobs de luz ambiente das seções reduzidos responsivamente (~45% do tamanho/blur no mobile).
- Lazy loading (`React.lazy` + `Suspense`) das seções abaixo do Hero (About, Stats, Projects, Services, TechStack, Differentials, Process, Contact) — Header, Hero e Footer continuam carregando imediatamente.
- Animações do Framer Motion agora respeitam `prefers-reduced-motion` globalmente via `<MotionConfig reducedMotion="user">` em `App.jsx`.
- Hero: stagger de entrada reduzido em mobile (conteúdo principal aparece muito mais rápido), tags flutuantes decorativas não renderizadas em mobile, barras do gráfico do mockup sem animação de `height` em mobile (evita layout thrashing).
- `package.json`: versão `1.0.0` → `1.0.1`, nova dependência de desenvolvimento `vite-plugin-pwa`.

### Corrigido

- Possível lentidão inicial em celulares mais antigos (ex.: iPhone 11 Pro/Safari) causada pelo custo combinado de canvas animado, glow do cursor e stagger de animações na primeira renderização.
- Risco de a primeira tela mostrar só o background por mais tempo que o necessário — reduzido via lazy loading das seções abaixo do Hero e stagger de entrada mais curto no Hero em mobile.
- Prevenção reforçada de overflow horizontal no mobile (auditoria de todos os elementos decorativos de background; nenhum ultrapassa a largura da tela em nenhum breakpoint testado).

## [1.0.0] - 2026-07-04

### Adicionado

- Versão inicial do portfólio: Hero, Sobre, Números de Impacto, Projetos, Serviços, Tecnologias, Diferenciais, Processo de Trabalho, Contato e Rodapé.
- Tema claro/escuro com persistência e preferência do sistema.
- Estilo "Liquid Glass" (glassmorphism) em botões, navegação, cards e widgets.
- Background de partículas interativo no Hero e luz que segue o cursor em toda a página.
- Navegação inferior fixa para mobile e widget de contato flutuante.
- Publicação inicial no Cloudflare Pages.
