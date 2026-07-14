# Caio Araujo — Portfólio Pessoal

Landing page/portfólio profissional de **Caio Ferreira de Araujo** — Analista de TI e Desenvolvedor de Automações, Integrações e Soluções Web. Site premium, escuro/tech por padrão (com tema claro alternável), com animações fluidas, glassmorphism/Liquid Glass e foco em conversão para clientes e empresas.

> Para o histórico completo de como este projeto foi construído (ferramenta, modelo de IA, ordem de tarefas, decisões tomadas), veja [`PROJECT_CONTEXT.md`](./PROJECT_CONTEXT.md).

## Stack técnica

- **React 18** + **Vite 6** — build e dev server
- **JavaScript** (sem TypeScript) — todos os componentes em `.jsx`
- **Tailwind CSS 3** — estilização utilitária, com tokens de tema via CSS variables
- **Framer Motion** — animações de entrada, transições e microinterações
- **lucide-react** — ícones
- **vite-plugin-pwa** — manifest + service worker (PWA instalável)
- Canvas 2D nativo (sem lib externa) — background de partículas do Hero

Sem backend: é um site estático (SPA client-side), hospedado no **Cloudflare Pages**.

## Como rodar localmente

Pré-requisito: [Node.js](https://nodejs.org) 18+ instalado.

```bash
npm install       # instala as dependências
npm run dev       # servidor de desenvolvimento (http://localhost:5173)
npm run build     # build de produção (gera a pasta dist/)
npm run preview   # serve a build de produção localmente (http://localhost:4173)
```

## Estrutura do projeto

```
site-portfolio/
├── index.html                    # HTML raiz, meta tags SEO/Open Graph, boot script do tema
├── vite.config.js                # config do Vite (plugin React, allowedHosts do preview)
├── tailwind.config.js            # tokens de cor (dark/light), animações customizadas
├── postcss.config.js
├── src/
│   ├── main.jsx                  # entry point (ReactDOM.createRoot)
│   ├── App.jsx                   # composição das seções da página
│   ├── index.css                 # tokens de tema (CSS vars), classes utilitárias (glass, botões)
│   ├── config/
│   │   └── contact.js            # WHATSAPP_URL, EMAIL, LINKEDIN_URL, GITHUB_URL, INSTAGRAM_URL, AVATAR_URL
│   ├── i18n/                      # internacionalização (pt-BR, pt-PT, en)
│   │   ├── LanguageContext.jsx    # Provider + useLanguage() (idioma atual, t, setLang)
│   │   ├── detectLanguage.js      # detecção por geolocalização IP + navegador + localStorage
│   │   └── locales/
│   │       ├── ptBR.js            # todo o texto/dados do site em português (Brasil)
│   │       ├── ptPT.js            # idem, em português (Portugal)
│   │       └── en.js              # idem, em inglês
│   ├── hooks/
│   │   ├── useActiveSection.js   # scroll-spy (IntersectionObserver) p/ nav ativa
│   │   ├── useTheme.js           # tema claro/escuro (persistido + preferência do sistema)
│   │   ├── useIsMobile.js        # tela pequena OU touch (pointer: coarse)
│   │   ├── useReducedMotion.js   # reflete prefers-reduced-motion do SO
│   │   └── usePerformanceMode.js # isMobile || reducedMotion (uso genérico)
│   └── components/
│       ├── Header.jsx            # nav fixa desktop + menu mobile + toggle de tema
│       ├── Hero.jsx               # primeira dobra: título, CTA, mockup de dashboard (carrega imediatamente)
│       ├── About.jsx              # sobre mim + foto de perfil (lazy)
│       ├── Stats.jsx              # números de impacto (lazy)
│       ├── Projects.jsx           # cards de projetos (lazy)
│       ├── Services.jsx           # cards de serviços (lazy)
│       ├── TechStack.jsx          # badges de tecnologias por grupo (lazy)
│       ├── Differentials.jsx      # diferenciais competitivos (lazy)
│       ├── Process.jsx            # timeline do processo de trabalho (lazy)
│       ├── Contact.jsx            # seção de contato com links reais (lazy)
│       ├── ContactWidget.jsx      # widget flutuante (mobile) com ícones alternando
│       ├── MobileNav.jsx          # barra de navegação inferior (mobile)
│       ├── Footer.jsx             # rodapé
│       └── ui/
│           ├── ParticleBackground.jsx  # canvas de partículas do Hero — só desktop
│           ├── HeroBackgroundLite.jsx  # fundo estático em CSS do Hero — só mobile
│           ├── CursorGlow.jsx          # luz que segue o cursor — só desktop (sem cursor real em touch)
│           ├── SectionFallback.jsx     # fallback discreto do React.lazy/Suspense
│           ├── ThemeToggle.jsx         # botão de alternância claro/escuro
│           ├── SectionTitle.jsx        # badge + título + subtítulo (reutilizável)
│           ├── LanguageSwitcher.jsx    # seletor de idioma (bandeira, popover Liquid Glass)
│           ├── FlagIcon.jsx            # bandeiras como SVG embutido (BR/PT/US)
│           └── Icon.jsx                # mapeamento string → ícone lucide-react
├── public/
│   ├── icons/                    # ícones do PWA (192, 512, maskable, apple-touch-icon)
│   └── _headers                  # regras de cache do Cloudflare Pages
```

## Como editar o conteúdo

Você **não precisa mexer em componentes React** para atualizar textos e contatos:

| O que mudar | Onde editar |
|---|---|
| WhatsApp, e-mail, LinkedIn, GitHub, Instagram | `src/config/contact.js` |
| Foto de perfil (seção Sobre) | `AVATAR_URL` em `src/config/contact.js` |
| Qualquer texto do site (nav, hero, sobre, projetos, serviços, tecnologias, diferenciais, processo, contato, rodapé) | `src/i18n/locales/ptBR.js`, `ptPT.js` e `en.js` — **um arquivo por idioma**, edite os 3 para manter tudo traduzido |

Cada arquivo de idioma é um único objeto grande e comentado por seção (`hero`, `about`, `projects`, `services`, `techGroups`, `differentials`, `process`, `contact`, `footer`...). Basta abrir o arquivo do idioma desejado e editar o texto direto — a estrutura (ícones, gradientes, ids) é igual nos 3 arquivos, só o texto muda.

## Internacionalização (i18n)

O site tem 3 idiomas: **Português (Brasil)**, **Português (Portugal)** e **Inglês**.

- **Detecção automática**: na primeira visita, o idioma é detectado por geolocalização de IP (serviço gratuito, sem prompt de permissão do navegador) — Brasil e demais países lusófonos caem em português, o resto em inglês. Se a geolocalização falhar (rede lenta, bloqueio de ad-blocker), cai para o idioma configurado no navegador (`navigator.language`).
- **Escolha manual**: o seletor de idioma no header (ícone de bandeira, ao lado do botão de tema) abre um menu com as 3 opções. A escolha do usuário é salva em `localStorage` e **sempre tem prioridade** sobre a detecção automática nas próximas visitas.
- **Bandeiras em SVG**: as bandeiras são desenhadas em SVG embutido (`FlagIcon.jsx`), não em emoji Unicode — no Windows, emoji de bandeira regional costuma cair para o código do país em texto ("BR") em vez do desenho, por limitação de fonte do sistema. SVG garante a bandeira de verdade em qualquer SO/navegador.
- **Sem flash de idioma errado**: um script no `index.html` já aplica o idioma salvo (ou detectado pelo navegador) no atributo `lang` do `<html>` antes do primeiro paint, do mesmo jeito que já era feito para o tema claro/escuro.

## Design system

- **Tema**: claro/escuro automático (segue o sistema operacional) com alternância manual salva em `localStorage`. Tokens de cor em `src/index.css` (`:root` e `.dark`).
- **Liquid Glass**: classes utilitárias (`.liquid-glass`, `.icon-btn-glass`, `.nav-pill`, `.badge-glass`, `.chip-glass`) para botões, navegação e chips com efeito de vidro translúcido.
- **Paleta de acento**: azul (`#3b82f6`), ciano (`#22d3ee`), roxo (`#8b5cf6`), dourado (`#f5c451` — uso pontual).
- **Tipografia**: Sora (Google Fonts) como fonte principal.
- **Acessibilidade**: `focus-visible` consistente em todos os elementos interativos, `scroll-margin-top` nas seções âncora, `aria-current`/`aria-expanded` na navegação.

## Efeitos visuais principais

- **Partículas do Hero** (`ParticleBackground.jsx`): canvas 2D com partículas conectadas por linhas, repelidas pelo cursor do mouse, recoloridas conforme o tema. **Exclusivo do desktop.**
- **Glow do cursor** (`CursorGlow.jsx`): luz que segue o mouse em toda a página, com `requestAnimationFrame` + interpolação (sem re-render do React). **Exclusivo do desktop** — não existe cursor de precisão em touch, então o componente não renderiza nada em mobile.
- **Widget de contato flutuante** (`ContactWidget.jsx`): botão no canto inferior esquerdo (mobile) que alterna ícones (WhatsApp/Instagram/GitHub/LinkedIn) e abre um menu rápido.

## Modo performance mobile

O site detecta automaticamente dispositivos móveis/touch (`useIsMobile`, via `matchMedia('(max-width: 767px), (pointer: coarse)')`) e ativa uma versão mais leve de tudo que é pesado para CPU/GPU — sem alterar o visual desktop:

| Recurso | Desktop | Mobile |
|---|---|---|
| Background do Hero | Canvas de partículas interativo (`ParticleBackground`) | CSS estático sem canvas/rAF (`HeroBackgroundLite`) |
| Luz do cursor | Segue o mouse (`CursorGlow`) | Não renderiza (sem cursor real) |
| Animação de entrada do Hero | Stagger completo (delay 0.3s + 0.15s/item) | Stagger mínimo (delay 0.05s + 0.04s/item) — conteúdo aparece quase imediato |
| Tags flutuantes do Hero | Renderizadas e animadas | Não renderizadas (eram decorativas, ocultas por CSS mesmo antes) |
| Gráfico de barras do mockup | Anima a altura de cada barra | Barras já no valor final, sem animação |
| Blur/backdrop-filter dos cards de vidro | Intensidade completa (16px+) | Reduzido (~8px) via classe `.perf-mode` no `<html>` |
| Blobs de luz ambiente (background das seções) | Tamanho e blur completos | ~45% do tamanho/blur, via classes responsivas do Tailwind |
| Seções abaixo do Hero | — | Carregadas via `React.lazy` (code-splitting), reduzindo o JS inicial |

**Importante — separação deliberada de responsabilidades:** a detecção de "mobile" (`useIsMobile`) é independente da preferência de acessibilidade `prefers-reduced-motion` (`useReducedMotion`). Isso é proposital: os efeitos de background/cursor do desktop continuam sempre ativos mesmo que o usuário tenha "reduzir movimento" ligado no sistema operacional (decisão de produto já tomada e documentada em `PROJECT_CONTEXT.md`). O que **respeita** `prefers-reduced-motion` é o Framer Motion como um todo, via `<MotionConfig reducedMotion="user">` em `App.jsx` — isso faz toda animação de entrada (fade/slide dos cards, títulos, etc.) cair para só opacidade automaticamente, em qualquer tela, sem precisar editar cada componente.

## PWA — instalar como aplicativo

O site é uma PWA (Progressive Web App) instalável, com ícone, splash e funcionamento offline básico via service worker (`vite-plugin-pwa`, `registerType: 'autoUpdate'`).

**No iPhone (Safari):**
1. Abra o site no Safari (precisa ser Safari, não funciona pelo Chrome no iOS).
2. Toque no ícone de Compartilhar (quadrado com seta para cima).
3. Toque em **"Adicionar à Tela de Início"**.
4. O ícone aparece na tela inicial e abre em tela cheia, sem a barra de endereço do Safari.

**No Android (Chrome):**
1. Abra o site no Chrome.
2. Toque no menu (⋮) e em **"Instalar app"** (ou **"Adicionar à tela inicial"**) — ou aguarde o banner automático de instalação do Chrome.
3. O app passa a existir como um ícone normal, abrindo em janela própria (modo `standalone`).

**Atualizações:** o service worker usa `autoUpdate` — a cada novo deploy, a próxima vez que o usuário abrir o app ele já recebe a versão nova automaticamente (sem precisar desinstalar/reinstalar).

## Deploy no Cloudflare Pages

O projeto já está publicado no Cloudflare Pages (build automático a partir do repositório GitHub). Fluxo de publicação:

1. `npm run build` gera a pasta `dist/` (inclui o app, o `manifest.webmanifest`, o `sw.js` e os ícones).
2. Configuração do Cloudflare Pages: **comando de build** `npm run build`, **diretório de saída** `dist`.
3. O arquivo `public/_headers` (copiado automaticamente para `dist/_headers` no build) define cache longo para os assets com hash (`/assets/*`) e `no-cache` para `index.html`, `sw.js` e `manifest.webmanifest` — isso garante que o Cloudflare nunca sirva uma versão antiga do app-shell ou do service worker depois de um deploy novo.
4. Sem backend, sem rotas server-side: é 100% arquivos estáticos, compatível nativamente com o Cloudflare Pages.
5. Ao comprar um domínio próprio, basta adicioná-lo como "Custom domain" no painel do Cloudflare Pages e apontar o DNS — sem mudanças no código.

Para desenvolvimento/demonstração temporária local antes de um deploy, ver `PROJECT_CONTEXT.md` (registro de uso do Cloudflare Quick Tunnel).

## Licença / Uso

Projeto pessoal de Caio Araujo. Código e conteúdo não licenciados para reuso por terceiros sem autorização.
