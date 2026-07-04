# Caio Araujo — Portfólio Pessoal

Landing page/portfólio profissional de **Caio Ferreira de Araujo** — Analista de TI e Desenvolvedor de Automações, Integrações e Soluções Web. Site premium, escuro/tech por padrão (com tema claro alternável), com animações fluidas, glassmorphism/Liquid Glass e foco em conversão para clientes e empresas.

> Para o histórico completo de como este projeto foi construído (ferramenta, modelo de IA, ordem de tarefas, decisões tomadas), veja [`PROJECT_CONTEXT.md`](./PROJECT_CONTEXT.md).

## Stack técnica

- **React 18** + **Vite 6** — build e dev server
- **JavaScript** (sem TypeScript) — todos os componentes em `.jsx`
- **Tailwind CSS 3** — estilização utilitária, com tokens de tema via CSS variables
- **Framer Motion** — animações de entrada, transições e microinterações
- **lucide-react** — ícones
- Canvas 2D nativo (sem lib externa) — background de partículas do Hero

Sem backend: é um site estático (SPA client-side), pronto para hospedagem em qualquer CDN/host de arquivos estáticos (Vercel, Netlify, Cloudflare Pages, etc.).

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
│   ├── data/                     # conteúdo editável em arrays (sem tocar em JSX)
│   │   ├── projects.js           # 8 projetos em destaque
│   │   ├── services.js           # 10 serviços oferecidos
│   │   ├── techs.js              # stack técnica exibida (4 grupos)
│   │   ├── stats.js              # números de impacto
│   │   ├── process.js            # 5 etapas do processo de trabalho
│   │   └── differentials.js      # "Por que trabalhar comigo?"
│   ├── hooks/
│   │   ├── useActiveSection.js   # scroll-spy (IntersectionObserver) p/ nav ativa
│   │   └── useTheme.js           # tema claro/escuro (persistido + preferência do sistema)
│   └── components/
│       ├── Header.jsx            # nav fixa desktop + menu mobile + toggle de tema
│       ├── Hero.jsx               # primeira dobra: título, CTA, mockup de dashboard
│       ├── About.jsx              # sobre mim + foto de perfil
│       ├── Stats.jsx              # números de impacto
│       ├── Projects.jsx           # cards de projetos
│       ├── Services.jsx           # cards de serviços
│       ├── TechStack.jsx          # badges de tecnologias por grupo
│       ├── Differentials.jsx      # diferenciais competitivos
│       ├── Process.jsx            # timeline do processo de trabalho
│       ├── Contact.jsx            # seção de contato com links reais
│       ├── ContactWidget.jsx      # widget flutuante (mobile) com ícones alternando
│       ├── MobileNav.jsx          # barra de navegação inferior (mobile)
│       ├── Footer.jsx             # rodapé
│       └── ui/
│           ├── ParticleBackground.jsx  # canvas de partículas do Hero (interativo com o mouse)
│           ├── CursorGlow.jsx          # luz que segue o cursor (global, todas as seções)
│           ├── ThemeToggle.jsx         # botão de alternância claro/escuro
│           ├── SectionTitle.jsx        # badge + título + subtítulo (reutilizável)
│           └── Icon.jsx                # mapeamento string → ícone lucide-react
```

## Como editar o conteúdo

Você **não precisa mexer em componentes React** para atualizar textos e contatos — tudo fica em arquivos de dados:

| O que mudar | Onde editar |
|---|---|
| WhatsApp, e-mail, LinkedIn, GitHub, Instagram | `src/config/contact.js` |
| Foto de perfil (seção Sobre) | `AVATAR_URL` em `src/config/contact.js` |
| Projetos do portfólio | `src/data/projects.js` |
| Serviços oferecidos | `src/data/services.js` |
| Tecnologias exibidas | `src/data/techs.js` |
| Números de impacto | `src/data/stats.js` |
| Etapas do processo de trabalho | `src/data/process.js` |
| Diferenciais competitivos | `src/data/differentials.js` |

## Design system

- **Tema**: claro/escuro automático (segue o sistema operacional) com alternância manual salva em `localStorage`. Tokens de cor em `src/index.css` (`:root` e `.dark`).
- **Liquid Glass**: classes utilitárias (`.liquid-glass`, `.icon-btn-glass`, `.nav-pill`, `.badge-glass`, `.chip-glass`) para botões, navegação e chips com efeito de vidro translúcido.
- **Paleta de acento**: azul (`#3b82f6`), ciano (`#22d3ee`), roxo (`#8b5cf6`), dourado (`#f5c451` — uso pontual).
- **Tipografia**: Sora (Google Fonts) como fonte principal.
- **Acessibilidade**: `focus-visible` consistente em todos os elementos interativos, `scroll-margin-top` nas seções âncora, `aria-current`/`aria-expanded` na navegação.

## Efeitos visuais principais

- **Partículas do Hero** (`ParticleBackground.jsx`): canvas 2D com partículas conectadas por linhas, repelidas pelo cursor do mouse, recoloridas conforme o tema.
- **Glow do cursor** (`CursorGlow.jsx`): luz que segue o mouse em toda a página (desktop), com `requestAnimationFrame` + interpolação (sem re-render do React); em touch, "flutua" sozinha pela tela.
- **Widget de contato flutuante** (`ContactWidget.jsx`): botão no canto inferior esquerdo (mobile) que alterna ícones (WhatsApp/Instagram/GitHub/LinkedIn) e abre um menu rápido.

## Publicação / Deploy

O projeto ainda não está publicado com domínio próprio. Passos recomendados quando for ao ar:

1. `npm run build` gera a pasta `dist/` — é isso que vai para o host.
2. Hospedar em **Vercel**, **Netlify** ou **Cloudflare Pages** (todos com plano gratuito compatível com Vite).
3. Ao comprar o domínio, apontar o DNS para o host escolhido e configurar o domínio customizado no painel dele.

Enquanto isso, o projeto pode ser demonstrado publicamente via túnel local (Cloudflare Quick Tunnel) — ver `PROJECT_CONTEXT.md` para o registro de como isso foi feito.

## Licença / Uso

Projeto pessoal de Caio Araujo. Código e conteúdo não licenciados para reuso por terceiros sem autorização.
