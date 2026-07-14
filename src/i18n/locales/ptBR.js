export default {
  code: 'pt-BR',
  htmlLang: 'pt-BR',
  flagCode: 'BR',
  name: 'Português (Brasil)',

  meta: {
    title: 'Caio Araujo — Analista de TI & Desenvolvedor de Automações',
    description:
      'Analista de TI e Desenvolvedor de Automações, Integrações e Soluções Web. Especialista em CRM (Bitrix24), APIs, dashboards e ferramentas internas para empresas.',
    ogLocale: 'pt_BR',
  },

  a11y: {
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    mobileNavLabel: 'Navegação principal (mobile)',
    themeToLight: 'Mudar para tema claro',
    themeToDark: 'Mudar para tema escuro',
    languageLabel: 'Idioma',
    openContact: 'Abrir opções de contato',
    closeContact: 'Fechar opções de contato',
    closeContactOverlay: 'Fechar menu de contato',
  },

  nav: {
    inicio: 'Início',
    sobre: 'Sobre',
    projetos: 'Projetos',
    servicos: 'Serviços',
    tecnologias: 'Tecnologias',
    contato: 'Contato',
    cta: 'Fale comigo',
  },

  hero: {
    badge: 'Analista de TI • Automações • Integrações • Soluções Web',
    titlePrefix: 'Transformo processos manuais em ',
    titleHighlight: 'soluções digitais inteligentes',
    titleSuffix: '.',
    // Frases alternadas no efeito de digitação (trecho azul do título) —
    // cada uma já inclui o ponto final.
    typewriterWords: [
      'soluções digitais inteligentes.',
      'automações que geram resultados.',
      'integrações entre sistemas.',
      'dashboards para decisões melhores.',
      'processos mais rápidos e seguros.',
    ],
    subtitle:
      'Sou Caio Araujo, Analista de TI e Desenvolvedor de Automações com experiência em CRM, integrações, APIs, dashboards e sistemas internos para ambientes corporativos.',
    ctaProjects: 'Ver projetos',
    ctaContact: 'Entrar em contato',
    mockupLabel: 'dashboard — operação em tempo real',
    mockupStats: [
      { label: 'Negócios', value: '440k+' },
      { label: 'Automações ativas', value: '24/7' },
      { label: 'Contatos CRM', value: '2M+' },
    ],
    floatingTags: ['Bitrix24', 'APIs', 'Dashboards', 'Automações', 'CRM', 'Integrações'],
  },

  about: {
    badge: 'Sobre mim',
    title: 'Tecnologia com visão de negócio',
    avatarAlt: 'Foto de perfil de Caio Araujo, Analista de TI e Desenvolvedor de Automações',
    paragraph1:
      'Tenho **2 anos de experiência** atuando em uma empresa de advocacia de grande porte, onde administro um ambiente de CRM com centenas de usuários, conduzo a migração de infraestrutura crítica, desenvolvo automações de grande volume e integro plataformas de telefonia, IA de voz e assinatura eletrônica.',
    paragraph2:
      'Minha atuação une **visão técnica e visão de negócio**: entendo o problema operacional, transformo em escopo, estruturo a solução com travas de segurança e acompanho a entrega até funcionar no dia a dia da empresa — sem apresentar como pronto o que ainda depende de terceiros.',
    traits: [
      'Raciocínio prático',
      'Condução de projetos de infraestrutura crítica',
      'Automação seções de grande volume com auditoria',
      'Soluções rápidas e funcionais',
      'Comunicação clara com usuários não técnicos',
      'Disciplina de segurança operacional',
    ],
  },

  stats: [
    { value: '2+', label: 'Anos de experiência', detail: 'Atuação prática em ambiente corporativo de alta demanda', icon: 'Briefcase' },
    { value: '600+', label: 'Usuários atendidos', detail: 'Atuação em estrutura com centenas de colaboradores ativos', icon: 'Users' },
    { value: '440k+', label: 'Negócios em CRM', detail: 'Ambiente com grande volume de negócios administrados', icon: 'BarChart3' },
    { value: '2M+', label: 'Contatos em base CRM', detail: 'Experiência com bases de dados em larga escala', icon: 'Database' },
    { value: '7+', label: 'Sistemas entregues', detail: 'Automações, dashboards e integrações em produção ou homologação', icon: 'Rocket' },
    { value: '0', label: 'Erros em cargas críticas', detail: 'Migrações e redistribuições em massa concluídas sem erro', icon: 'ShieldCheck' },
  ],

  projectsSection: {
    badge: 'Portfólio',
    title: 'Projetos em destaque',
    subtitle:
      'Sistemas reais, em produção ou homologação, desenvolvidos para resolver problemas operacionais de uma empresa de grande porte — sem expor dados de clientes ou fornecedores.',
  },
  projects: [
    {
      title: 'Migração de CRM Cloud → On-Premise',
      description:
        'Condução técnica da migração de um ambiente de CRM Cloud (mais de 436 mil negócios e 2 milhões de contatos) para uma estrutura On-Premise, com ferramenta própria de sincronização incremental que preserva a integridade de tudo criado ou alterado durante a transição.',
      tags: ['Python', 'FastAPI', 'SQLite', 'API REST', 'Migração de dados'],
      highlights: [
        '106 usuários criados e 8 reativados, 0 erros',
        '584 senhas e 6.454 senhas de SPA atualizadas',
        '5.540 gravações/hora testadas com 0% de erro',
        'Trava de segurança contra escrita simultânea',
      ],
      icon: 'ServerCog',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'Distribuição segura de carteira por estado',
      description:
        'Automação para redistribuir, de forma equilibrada e auditável, uma carteira de milhares de clientes entre responsáveis por estado — com travas técnicas que tornam impossível mover um card de etapa ou funil por engano.',
      tags: ['Node.js', 'API REST', 'Automação', 'Auditoria'],
      highlights: [
        '~46.655 cards atualizados, 0 erros ao final',
        'Whitelist de API sem acesso a mudança de etapa',
        'Validação em amostra antes de cada carga completa',
        'Checkpoint de retomada e relatórios auditáveis',
      ],
      icon: 'Shuffle',
      gradient: 'from-blue-500 to-cyan-400',
    },
    {
      title: 'Plataforma de discagem e IA de voz',
      description:
        'Plataforma própria que conecta o CRM a um discador automático e a uma fila de inteligência artificial de voz, com agendamento de campanhas, retentativas e auditoria completa das exportações de contato.',
      tags: ['Python', 'Flask', 'APScheduler', 'SQLite', 'API REST'],
      highlights: [
        'Agendamento automático de campanhas por dia/horário',
        'Correção de uma falha silenciosa de terceiro em produção',
        'Retry com backoff para instabilidades de rede',
        'Notificação de resultado direto no CRM',
      ],
      icon: 'PhoneCall',
      gradient: 'from-green-400 to-cyan-500',
    },
    {
      title: 'Overlay de reconhecimento em tempo real',
      description:
        'Sistema que recebe a confirmação de um contrato fechado e exibe, em tempo real, um alerta animado com o responsável e a pontuação — usado em transmissões e painéis internos.',
      tags: ['Python', 'Flask', 'Server-Sent Events', 'SQLite'],
      highlights: [
        'Atualização em tempo real via Server-Sent Events',
        'Painel administrativo completo para configuração',
        'Modo especial para registros sem pontuação válida',
        'Falhas de integração nunca derrubam o alerta principal',
      ],
      icon: 'MonitorPlay',
      gradient: 'from-cyan-400 to-emerald-400',
    },
    {
      title: 'Cadastro assistido por leitura de PDF',
      description:
        'Ferramenta que lê PDFs de processos automaticamente, identifica número de processo, documento e estado por reconhecimento de padrões, e prepara o cadastro no CRM com verificação de duplicidade antes de criar qualquer registro.',
      tags: ['Python', 'Flask', 'pypdf', 'SQLite'],
      highlights: [
        'Extração automática de dados por reconhecimento de padrões',
        'Bloqueio de cadastro duplicado com reserva atômica',
        'Conferência humana antes da criação de qualquer registro',
        'Modo de simulação ativado por padrão para segurança',
      ],
      icon: 'FileSearch',
      gradient: 'from-amber-400 to-orange-500',
    },
    {
      title: 'Dashboard de comissão e produtividade',
      description:
        'Painel que audita tarefas concluídas no CRM e organiza ranking, histórico e pendências por colaborador, com sincronização incremental e cancelamento seguro de execuções longas.',
      tags: ['Python', 'FastAPI', 'SQLite', 'HTML/CSS/JS'],
      highlights: [
        'Mais de 26 mil itens coletados numa única sincronização',
        'Ranking, histórico e pendências por colaborador',
        'Checkpoint de retomada sem duplicar dados',
        'Filtros por período e paginação de alto volume',
      ],
      icon: 'LayoutDashboard',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'MVP de recrutamento e admissão digital',
      description:
        'Sistema para centralizar o fluxo de admissão entre candidato, RH e Departamento Pessoal: formulário responsivo, validações reais de documentos, aprovação com tokens de uso único e trilha de auditoria completa.',
      tags: ['Python', 'FastAPI', 'SQLAlchemy', 'pytest'],
      highlights: [
        '93 testes automatizados, 100% aprovados',
        'Validação real de CPF, e-mail, telefone e CEP',
        'Fluxo de aprovação, reprovação e correção com tokens únicos',
        'Transparência entre o que é real e o que ainda é simulado',
      ],
      icon: 'UserPlus',
      gradient: 'from-blue-500 to-cyan-400',
    },
  ],

  servicesSection: {
    badge: 'Serviços',
    title: 'Como posso ajudar sua empresa',
    subtitle: 'Do diagnóstico à entrega: soluções sob medida para automatizar, integrar e organizar a operação do seu negócio.',
  },
  services: [
    { title: 'Landing pages profissionais', description: 'Páginas modernas, rápidas e responsivas, pensadas para conversão e presença digital.', icon: 'Globe' },
    { title: 'Dashboards internos', description: 'Painéis visuais para acompanhamento de processos, indicadores e rotinas da empresa.', icon: 'LayoutDashboard' },
    { title: 'Integrações com APIs', description: 'Conexão entre sistemas diferentes via API REST e webhooks, com tratamento de erros.', icon: 'Plug' },
    { title: 'Automações para CRM', description: 'Fluxos automáticos que reduzem trabalho manual e padronizam a operação comercial.', icon: 'Workflow' },
    { title: 'Customização de Bitrix24', description: 'Configuração, campos, automações, apps e integrações sob medida no Bitrix24.', icon: 'Settings2' },
    { title: 'Ferramentas internas', description: 'Sistemas web sob medida para resolver dores operacionais específicas do seu negócio.', icon: 'Wrench' },
    { title: 'Importação e tratamento de dados', description: 'Scripts para importar, normalizar, validar e migrar dados com logs e relatórios.', icon: 'DatabaseZap' },
    { title: 'E-mail corporativo e DNS', description: 'Configuração de SMTP, SPF, DKIM e DMARC para entregabilidade e segurança de e-mail.', icon: 'MailCheck' },
    { title: 'Suporte técnico e processos', description: 'Estruturação de rotinas de suporte, documentação e treinamento de usuários.', icon: 'Headset' },
    { title: 'Consultoria em otimização', description: 'Análise de rotinas operacionais e proposta de melhorias com tecnologia.', icon: 'TrendingUp' },
  ],

  techsSection: {
    badge: 'Stack',
    title: 'Tecnologias que utilizo',
    subtitle: 'Ferramentas escolhidas pela praticidade e adequação a cada cenário — do frontend à infraestrutura.',
  },
  techGroups: [
    { title: 'Frontend', icon: 'Code2', gradient: 'from-blue-500 to-cyan-400', items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite'] },
    { title: 'Backend & Automações', icon: 'Terminal', gradient: 'from-purple-500 to-blue-500', items: ['Python', 'FastAPI', 'Flask', 'APIs REST', 'Webhooks', 'SQLite', 'SQLAlchemy'] },
    { title: 'CRM & Integrações', icon: 'Boxes', gradient: 'from-cyan-400 to-emerald-400', items: ['Bitrix24', 'WhatsApp API', 'Contact Center', 'Open Channels', 'Discadores', 'IA de Voz', 'Assinatura Eletrônica'] },
    { title: 'Infraestrutura', icon: 'Server', gradient: 'from-amber-400 to-orange-500', items: ['VPS Ubuntu', 'Nginx', 'PM2', 'Gunicorn', 'DNS', 'SMTP', 'SPF/DKIM/DMARC'] },
  ],

  differentialsSection: {
    badge: 'Diferenciais',
    title: 'Por que trabalhar comigo?',
    subtitle: 'Mais do que código: experiência prática em operação, comunicação clara e compromisso com o resultado.',
  },
  differentials: [
    { title: 'Experiência real em operação', description: 'Não crio soluções apenas bonitas. Crio ferramentas pensadas para funcionar no dia a dia de empresas com alta demanda.', icon: 'Building2', gradient: 'from-blue-500 to-cyan-400' },
    { title: 'Visão técnica e de negócio', description: 'Consigo entender a dor operacional, transformar em escopo técnico e entregar uma solução prática.', icon: 'Lightbulb', gradient: 'from-purple-500 to-blue-500' },
    { title: 'Comunicação simples', description: 'Tenho facilidade em explicar tecnologia para pessoas não técnicas, documentar processos e treinar usuários.', icon: 'MessagesSquare', gradient: 'from-cyan-400 to-emerald-400' },
    { title: 'Foco em automação', description: 'Busco reduzir trabalho manual, evitar erros repetitivos e tornar processos mais rápidos.', icon: 'Zap', gradient: 'from-amber-400 to-orange-500' },
    { title: 'Melhoria contínua', description: 'Analiso problemas, testo soluções, melhoro fluxos e acompanho o funcionamento após a entrega.', icon: 'RefreshCw', gradient: 'from-pink-500 to-purple-500' },
  ],

  processSection: {
    badge: 'Metodologia',
    title: 'Como funciona o processo',
    subtitle: 'Um fluxo simples e transparente, do primeiro contato até a entrega funcionando.',
  },
  process: [
    { step: '01', title: 'Diagnóstico', description: 'Entendo o problema, o fluxo atual e o objetivo do cliente.', icon: 'Search' },
    { step: '02', title: 'Escopo', description: 'Transformo a necessidade em requisitos claros e organizados.', icon: 'ClipboardList' },
    { step: '03', title: 'Desenvolvimento', description: 'Crio a solução usando tecnologias adequadas ao cenário.', icon: 'Code2' },
    { step: '04', title: 'Validação', description: 'Testo, ajusto e valido com o usuário final.', icon: 'CheckCircle2' },
    { step: '05', title: 'Entrega', description: 'Entrego a solução documentada e pronta para uso.', icon: 'PackageCheck' },
  ],

  contact: {
    badge: 'Vamos conversar',
    title: 'Vamos transformar sua ideia em uma solução digital?',
    subtitle: 'Se você precisa de uma landing page, automação, dashboard, integração ou ferramenta interna para sua empresa, entre em contato comigo.',
    ctaButton: 'Iniciar conversa no WhatsApp',
    connect: 'Conectar',
    platforms: {
      WhatsApp: 'Resposta rápida e direta',
      'E-mail': 'Envie os detalhes do seu projeto',
      LinkedIn: 'Perfil profissional',
      GitHub: 'Repositórios e código',
      Instagram: 'Bastidores e conteúdo',
    },
  },

  footer: {
    tagline: '© 2026 Caio Araujo. Desenvolvido com React, automações e foco em soluções reais.',
  },

  mobileNav: {
    inicio: 'Início',
    sobre: 'Sobre',
    projetos: 'Projetos',
    servicos: 'Serviços',
    contato: 'Contato',
  },

  languageSwitcher: {
    label: 'Idioma',
  },
}
