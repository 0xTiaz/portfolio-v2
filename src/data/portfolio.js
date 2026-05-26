export const portfolio = {
  name: 'Matias Figueroa',
  role: 'Frontend Developer',
  tagline: 'I build clean, responsive web experiences with React and modern JavaScript.',
  email: 'kevinmsotof@gmail.com',
  location: 'Santiago, Region Metropolitana, Chile',
  about: {
    sectionLabel: '01 — Perfil',
    title: 'Sobre',
    titleAccent: 'mí',
    lead: 'Desarrollador que une código, deporte y curiosidad constante.',
    paragraphs: [
      'Me muevo entre el soporte técnico, el desarrollo de software y el análisis: tres roles que me enseñaron a escuchar problemas, traducirlos en soluciones y comunicarlas con claridad.',
      'Fuera del teclado entreno ciclismo, running y crossfit. Esa misma disciplina la llevo al código: constancia, mejora incremental y ganas de aprender algo nuevo cada semana.',
    ],
    location: 'Santiago, Region Metropolitana, Chile',
  },
  experience: {
    sectionLabel: '02 — Trayectoria',
    title: 'Experiencia',
    titleAccent: 'laboral',
    description:
      'He transitado por soporte, desarrollo y análisis. Cada etapa sumó una capa distinta: resolver incidentes con rapidez, construir software útil y traducir necesidades del negocio en soluciones claras.',
    highlights: [
      'Comunicación con usuarios y equipos técnicos',
      'Mejora continua de procesos',
      'Orientación a resultados medibles',
    ],
    featured: {
      title: 'Analista Desarrollador',
      company: 'Iconex',
      period: '2024 — 2025',
      description:
        'Puente entre negocio y tecnología: relevamiento de requerimientos, propuestas de solución y seguimiento hasta la entrega con stakeholders.',
      highlights: ['Requerimientos', 'Análisis funcional', 'Coordinación','Mantenimiento, Desarrollo y diseño'],
    },
    roles: [
      {
        title: 'Soporte Técnico',
        company: 'Instituto Sanitas S.A.',
        period: '2021 — 2022',
        description:
          'Diagnóstico y resolución de incidencias, documentación de casos y acompañamiento a usuarios para restablecer operaciones con el menor tiempo de detención posible.',
        highlights: ['Tickets y SLA', 'Documentación', 'Atención a usuarios'],
      },
      {
        title: 'Desarrollador de Software',
        company: 'Instituto Sanitas S.A.',
        period: '2022 — 2023',
        description:
          'Construcción y mantenimiento de aplicaciones (Add-Ons), integraciones de nuevas versiones de SAP B1 y tratamiento de datos a traves de Querys. Trabajo con código legible, versionado y despliegues iterativos.',
        highlights: ['Visual Basic', 'C#', '.NET', 'SAP B1', 'Integraciones', 'Hana B1', 'Soporte N1 y N2', 'Tickets y SLA'],
      },
      {
        title: 'Soporte Técnico (Reemplazo)',
        company: 'Mall Plaza',
        period: '2023 — 2023',
        description:
          'Diagnóstico y resolución de incidencias, documentación de casos y acompañamiento a usuarios para restablecer operaciones con el menor tiempo de detención posible.',
        highlights: ['Tickets y SLA', 'Documentación', 'Atención a usuarios'],
      },
    ],
  },
  contact: {
    intro:
      '¿Tienes un proyecto, una vacante o simplemente quieres saludar? Escríbeme y te respondo lo antes posible.',
    form: {
      name: 'Nombre',
      email: 'Correo',
      message: 'Mensaje',
      submit: 'Enviar mensaje',
      sending: 'Enviando…',
      success: '¡Mensaje enviado! Revisaré tu correo pronto.',
      error: 'No se pudo enviar. Intenta de nuevo o escríbeme directo.',
      notConfigured:
        'El formulario aún no está configurado. Agrega tu clave de Web3Forms en el archivo .env',
    },
  },
  social: [
    { label: 'GitHub', href: 'https://github.com/0xTiazz' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/matias-figueroa-abb76524b/' },
    { label: 'Instagram', href: 'https://www.instagram.com/0xtiazz/' },
  ],
  skills: ['JavaScript', 'React', 'HTML', 'CSS', 'Vite', 'Git', 'Responsive Design', 'MongoDB', 'MySql', 'MariaDB','SAP B1', 'HanaB1','Integracion de Software','API','Axios','Express','Desarrollo con IA','Cursor','Excel','Jira','GitHub','Git','Node','Props'],
  projects: [
    {
      title: 'Crossfit Landing Page',
      description: 'Una landing page simple, con bastante contenido e informativa.',
      tech: ['React', 'Vite'],
      liveUrl: 'https://bullbox365.com/',
      repoUrl: 'https://github.com/0xTiaz/crossfit-bullbox-365.git',
    },
    {
      title: 'e-commerce',
      description: 'Un proyecto simple un tanto ambicioso.',
      tech: ['JavaScript', 'CSS', 'React', 'Axios', 'MongoDB'],
      liveUrl: 'https://e-commerce-chi-black-15.vercel.app/',
      repoUrl: 'https://github.com/0xTiaz/dashboard-mongo.git',
    },
    {
      title: 'Project Three',
      description: 'Add a third project or replace this card with something you are proud of.',
      tech: ['React'],
      liveUrl: '#',
      repoUrl: '#',
    },
  ],
  hero: {
    sports: ['Ciclismo', 'Running', 'Crossfit'],
    roles: [
      'Soporte Técnico',
      'Desarrollador de Software',
      'Analista Desarrollador',
    ],
    photos: {
      formal: '/hero/formal.png',
      informal: '/hero/informal.png',
    },
  },
}
