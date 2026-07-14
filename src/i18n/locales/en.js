export default {
  code: 'en',
  htmlLang: 'en',
  flagCode: 'US',
  name: 'English',

  meta: {
    title: 'Caio Araujo — IT Analyst & Automation Developer',
    description:
      'IT Analyst and Automation Developer specializing in Integrations and Web Solutions. Expert in CRM (Bitrix24), APIs, dashboards and internal tools for businesses.',
    ogLocale: 'en_US',
  },

  a11y: {
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    mobileNavLabel: 'Main navigation (mobile)',
    themeToLight: 'Switch to light theme',
    themeToDark: 'Switch to dark theme',
    languageLabel: 'Language',
    openContact: 'Open contact options',
    closeContact: 'Close contact options',
    closeContactOverlay: 'Close contact menu',
  },

  nav: {
    inicio: 'Home',
    sobre: 'About',
    projetos: 'Projects',
    servicos: 'Services',
    tecnologias: 'Tech Stack',
    contato: 'Contact',
    cta: 'Get in touch',
  },

  hero: {
    badge: 'IT Analyst • Automation • Integrations • Web Solutions',
    titlePrefix: 'I turn manual processes into ',
    titleHighlight: 'smart digital solutions',
    titleSuffix: '.',
    // Phrases cycled by the typewriter effect (blue portion of the title) —
    // each one already includes the trailing period.
    typewriterWords: [
      'smart digital solutions.',
      'automations that drive results.',
      'integrations between systems.',
      'dashboards for better decisions.',
      'faster, safer processes.',
    ],
    subtitle:
      "I'm Caio Araujo, an IT Analyst and Automation Developer with experience in CRM, integrations, APIs, dashboards and internal systems for corporate environments.",
    ctaProjects: 'View projects',
    ctaContact: 'Get in touch',
    mockupLabel: 'dashboard — real-time operation',
    mockupStats: [
      { label: 'Deals', value: '440k+' },
      { label: 'Active automations', value: '24/7' },
      { label: 'CRM contacts', value: '2M+' },
    ],
    floatingTags: ['Bitrix24', 'APIs', 'Dashboards', 'Automation', 'CRM', 'Integrations'],
  },

  about: {
    badge: 'About me',
    title: 'Technology with a business mindset',
    avatarAlt: 'Profile photo of Caio Araujo, IT Analyst and Automation Developer',
    paragraph1:
      "I have **2 years of experience** working at a large law firm, where I administer a CRM environment with hundreds of users, lead critical infrastructure migration, build large-scale automations, and integrate telephony, voice AI, and e-signature platforms.",
    paragraph2:
      'My work bridges **technical vision and business vision**: I understand the operational problem, turn it into scope, structure the solution with safety guardrails, and follow through until it actually works in the day-to-day of the company — without presenting as finished what still depends on third parties.',
    traits: [
      'Practical problem-solving',
      'Leading critical infrastructure projects',
      'Large-scale automation with full auditability',
      'Fast, functional solutions',
      'Clear communication with non-technical users',
      'Operational security discipline',
    ],
  },

  stats: [
    { value: '2+', label: 'Years of experience', detail: 'Hands-on work in a high-demand corporate environment', icon: 'Briefcase' },
    { value: '600+', label: 'Users supported', detail: 'Operating within a structure of hundreds of active employees', icon: 'Users' },
    { value: '440k+', label: 'Deals in CRM', detail: 'Environment with a large volume of managed deals', icon: 'BarChart3' },
    { value: '2M+', label: 'Contacts in CRM', detail: 'Experience with large-scale databases', icon: 'Database' },
    { value: '7+', label: 'Systems delivered', detail: 'Automations, dashboards and integrations in production or staging', icon: 'Rocket' },
    { value: '0', label: 'Errors in critical runs', detail: 'Migrations and mass redistributions completed with zero errors', icon: 'ShieldCheck' },
  ],

  projectsSection: {
    badge: 'Portfolio',
    title: 'Featured projects',
    subtitle:
      'Real systems, in production or staging, built to solve operational problems for a large company — without exposing client or vendor data.',
  },
  projects: [
    {
      title: 'Cloud → On-Premise CRM Migration',
      description:
        'Technical lead on migrating a Cloud CRM environment (400k+ deals and 2 million contacts) to an On-Premise structure, with a custom incremental sync tool that preserves the integrity of everything created or changed during the transition.',
      tags: ['Python', 'FastAPI', 'SQLite', 'REST API', 'Data migration'],
      highlights: [
        '106 users created, 8 reactivated, 0 errors',
        '584 passwords and 6,454 SPA passwords updated',
        '5,540 writes/hour tested at 0% error rate',
        'Safety lock against concurrent writes',
      ],
      icon: 'ServerCog',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'Secure state-based portfolio distribution',
      description:
        'Automation to redistribute a portfolio of thousands of clients evenly and auditably across regional owners — with technical guardrails that make it impossible to accidentally move a card between stages or pipelines.',
      tags: ['Node.js', 'REST API', 'Automation', 'Audit trail'],
      highlights: [
        '~46,655 records updated, 0 errors at completion',
        'API allowlist with no access to stage changes',
        'Sample validation before every full-scale run',
        'Resume checkpoints and auditable reports',
      ],
      icon: 'Shuffle',
      gradient: 'from-blue-500 to-cyan-400',
    },
    {
      title: 'Dialer & voice-AI integration platform',
      description:
        'Custom platform connecting the CRM to an automated dialer and a voice-AI queue, with campaign scheduling, retries, and full audit trails for every contact export.',
      tags: ['Python', 'Flask', 'APScheduler', 'SQLite', 'REST API'],
      highlights: [
        'Automatic campaign scheduling by day/time',
        'Fixed a silent third-party failure in production',
        'Retry with backoff for network instability',
        'Result notifications sent straight to the CRM',
      ],
      icon: 'PhoneCall',
      gradient: 'from-green-400 to-cyan-500',
    },
    {
      title: 'Real-time recognition overlay',
      description:
        'System that receives payment confirmation for a closed deal and displays an animated real-time alert with the owner and their score — used in internal broadcasts and dashboards.',
      tags: ['Python', 'Flask', 'Server-Sent Events', 'SQLite'],
      highlights: [
        'Real-time updates via Server-Sent Events',
        'Full admin panel for configuration',
        'Special mode for records without a valid score',
        'Integration failures never take down the main alert',
      ],
      icon: 'MonitorPlay',
      gradient: 'from-cyan-400 to-emerald-400',
    },
    {
      title: 'PDF-assisted record intake',
      description:
        'Tool that automatically reads case PDFs, identifies case number, document ID, and state via pattern recognition, and prepares the CRM record with duplicate checking before creating anything.',
      tags: ['Python', 'Flask', 'pypdf', 'SQLite'],
      highlights: [
        'Automatic data extraction via pattern recognition',
        'Duplicate-entry lock with atomic reservation',
        'Human review before any record is created',
        'Simulation mode enabled by default for safety',
      ],
      icon: 'FileSearch',
      gradient: 'from-amber-400 to-orange-500',
    },
    {
      title: 'Commission & productivity dashboard',
      description:
        'Panel that audits completed CRM tasks and organizes rankings, history, and pending items per employee, with incremental sync and safe cancellation of long-running jobs.',
      tags: ['Python', 'FastAPI', 'SQLite', 'HTML/CSS/JS'],
      highlights: [
        'Over 26,000 items collected in a single sync run',
        'Rankings, history and pending items per employee',
        'Resume checkpoints with no data duplication',
        'Date-range filters and high-volume pagination',
      ],
      icon: 'LayoutDashboard',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Digital recruitment & onboarding MVP',
      description:
        'System to centralize the onboarding flow between candidate, HR, and Personnel Department: responsive form, real document validation, single-use-token approval flow, and a full audit trail.',
      tags: ['Python', 'FastAPI', 'SQLAlchemy', 'pytest'],
      highlights: [
        '93 automated tests, 100% passing',
        'Real validation of tax ID, email, phone and postal code',
        'Approval, rejection and correction flow with one-time tokens',
        'Transparent about what is real vs. still simulated',
      ],
      icon: 'UserPlus',
      gradient: 'from-blue-500 to-cyan-400',
    },
  ],

  servicesSection: {
    badge: 'Services',
    title: 'How I can help your business',
    subtitle: 'From diagnosis to delivery: tailored solutions to automate, integrate and organize your business operations.',
  },
  services: [
    { title: 'Professional landing pages', description: 'Modern, fast, responsive pages built for conversion and digital presence.', icon: 'Globe' },
    { title: 'Internal dashboards', description: 'Visual panels to track processes, metrics and company routines.', icon: 'LayoutDashboard' },
    { title: 'API integrations', description: 'Connecting different systems via REST APIs and webhooks, with proper error handling.', icon: 'Plug' },
    { title: 'CRM automations', description: 'Automated flows that cut manual work and standardize sales operations.', icon: 'Workflow' },
    { title: 'Bitrix24 customization', description: 'Custom fields, automations, apps and integrations tailored to Bitrix24.', icon: 'Settings2' },
    { title: 'Internal tools', description: 'Custom web systems built to solve your business\'s specific operational pain points.', icon: 'Wrench' },
    { title: 'Data import & processing', description: 'Scripts to import, normalize, validate and migrate data with logs and reports.', icon: 'DatabaseZap' },
    { title: 'Corporate email & DNS', description: 'SMTP, SPF, DKIM and DMARC setup for email deliverability and security.', icon: 'MailCheck' },
    { title: 'Technical support & processes', description: 'Structuring support routines, documentation and user training.', icon: 'Headset' },
    { title: 'Optimization consulting', description: 'Analysis of operational routines with technology-driven improvement proposals.', icon: 'TrendingUp' },
  ],

  techsSection: {
    badge: 'Stack',
    title: 'Technologies I use',
    subtitle: 'Tools chosen for practicality and fit to each scenario — from frontend to infrastructure.',
  },
  techGroups: [
    { title: 'Frontend', icon: 'Code2', gradient: 'from-blue-500 to-cyan-400', items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite'] },
    { title: 'Backend & Automation', icon: 'Terminal', gradient: 'from-purple-500 to-blue-500', items: ['Python', 'FastAPI', 'Flask', 'REST APIs', 'Webhooks', 'SQLite', 'SQLAlchemy'] },
    { title: 'CRM & Integrations', icon: 'Boxes', gradient: 'from-cyan-400 to-emerald-400', items: ['Bitrix24', 'WhatsApp API', 'Contact Center', 'Open Channels', 'Dialer platforms', 'Voice AI', 'E-signature'] },
    { title: 'Infrastructure', icon: 'Server', gradient: 'from-amber-400 to-orange-500', items: ['VPS Ubuntu', 'Nginx', 'PM2', 'Gunicorn', 'DNS', 'SMTP', 'SPF/DKIM/DMARC'] },
  ],

  differentialsSection: {
    badge: 'Why me',
    title: 'Why work with me?',
    subtitle: 'More than code: hands-on operational experience, clear communication and commitment to results.',
  },
  differentials: [
    { title: 'Real operational experience', description: "I don't just build pretty solutions. I build tools designed to work in the daily grind of high-demand businesses.", icon: 'Building2', gradient: 'from-blue-500 to-cyan-400' },
    { title: 'Technical and business vision', description: 'I can understand the operational pain point, turn it into technical scope, and deliver a practical solution.', icon: 'Lightbulb', gradient: 'from-purple-500 to-blue-500' },
    { title: 'Straightforward communication', description: 'I explain technology clearly to non-technical people, document processes, and train users.', icon: 'MessagesSquare', gradient: 'from-cyan-400 to-emerald-400' },
    { title: 'Automation-first mindset', description: 'I aim to cut manual work, prevent repetitive errors, and make processes faster.', icon: 'Zap', gradient: 'from-amber-400 to-orange-500' },
    { title: 'Continuous improvement', description: 'I analyze problems, test solutions, refine workflows, and follow up after delivery.', icon: 'RefreshCw', gradient: 'from-pink-500 to-purple-500' },
  ],

  processSection: {
    badge: 'Methodology',
    title: 'How the process works',
    subtitle: 'A simple, transparent flow — from first contact to a working delivery.',
  },
  process: [
    { step: '01', title: 'Diagnosis', description: "I understand the problem, the current workflow, and the client's goal.", icon: 'Search' },
    { step: '02', title: 'Scoping', description: 'I turn the need into clear, organized requirements.', icon: 'ClipboardList' },
    { step: '03', title: 'Development', description: 'I build the solution using technologies that fit the scenario.', icon: 'Code2' },
    { step: '04', title: 'Validation', description: 'I test, adjust and validate with the end user.', icon: 'CheckCircle2' },
    { step: '05', title: 'Delivery', description: 'I deliver the solution, documented and ready to use.', icon: 'PackageCheck' },
  ],

  contact: {
    badge: "Let's talk",
    title: "Let's turn your idea into a digital solution?",
    subtitle: 'If you need a landing page, automation, dashboard, integration or internal tool for your business, get in touch with me.',
    ctaButton: 'Start a conversation on WhatsApp',
    connect: 'Connect',
    platforms: {
      WhatsApp: 'Quick, direct response',
      'E-mail': 'Send me your project details',
      LinkedIn: 'Professional profile',
      GitHub: 'Repositories and code',
      Instagram: 'Behind the scenes and content',
    },
  },

  footer: {
    tagline: '© 2026 Caio Araujo. Built with React, automation, and a focus on real-world solutions.',
  },

  mobileNav: {
    inicio: 'Home',
    sobre: 'About',
    projetos: 'Projects',
    servicos: 'Services',
    contato: 'Contact',
  },

  languageSwitcher: {
    label: 'Language',
  },
}
