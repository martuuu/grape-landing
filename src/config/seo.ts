/**
 * SEO Configuration for COMMIT
 * 
 * Configuración centralizada de SEO keywords, structured data y metadata
 * Optimizado para: Apps, Webapps, Desarrollo de Software, Startups
 * Target Audience: 25-60 años, tech-savvy, emprendedores y empresarios
 */

export const SEO_CONFIG = {
  // Keywords principales por página/sección
  keywords: {
    primary: [
      'desarrollo de software',
      'desarrollo de aplicaciones',
      'agencia de desarrollo',
      'desarrollo web',
      'desarrollo móvil',
      'apps',
      'webapps',
    ],
    secondary: [
      'desarrollo de mvp',
      'desarrollo ágil',
      'aplicaciones personalizadas',
      'software a medida',
      'desarrollo para startups',
      'aplicaciones empresariales',
      'desarrollo react',
      'desarrollo node.js',
      'desarrollo flutter',
    ],
    longTail: [
      'agencia desarrollo aplicaciones web españa',
      'desarrollo mvp para startups',
      'crear aplicación móvil desde cero',
      'desarrollo software empresarial personalizado',
      'agencia desarrollo web moderna',
      'aplicaciones web progresivas pwa',
    ],
  },

  // Páginas específicas
  pages: {
    home: {
      title: 'Desarrollo de Apps Web y Móviles | COMMIT',
      description:
        'Agencia especializada en desarrollo de aplicaciones web y móviles para startups y empresas. Creamos MVPs, webapps y soluciones digitales personalizadas con las últimas tecnologías.',
      keywords: 'desarrollo de apps, desarrollo web, desarrollo móvil, mvp, startup, webapp, agencia software',
      focusKeywords: ['desarrollo de aplicaciones', 'apps web', 'desarrollo móvil'],
    },
    services: {
      title: 'Servicios de Desarrollo de Software',
      description:
        'Desarrollo de aplicaciones web, móviles, MVPs y sistemas a medida. Soluciones tecnológicas personalizadas para startups y empresas en crecimiento.',
      keywords:
        'desarrollo web, desarrollo móvil, mvp, aplicaciones personalizadas, software a medida, desarrollo ágil',
      focusKeywords: ['desarrollo de software', 'servicios desarrollo', 'apps personalizadas'],
    },
    contact: {
      title: 'Contacto - Hablemos de tu proyecto',
      description:
        'Contacta con COMMIT para desarrollar tu aplicación web o móvil. Respuesta en 24 horas. Presupuesto gratuito y sin compromiso.',
      keywords: 'contacto, presupuesto desarrollo, consultoría software, agencia desarrollo',
      focusKeywords: ['contacto desarrollo software', 'presupuesto app'],
    },
    about: {
      title: 'Sobre Nosotros - Equipo COMMIT',
      description:
        'Conoce al equipo de COMMIT. Agencia de desarrollo de software con experiencia en startups y empresas. Metodologías ágiles y tecnologías modernas.',
      keywords: 'equipo desarrollo, agencia software, sobre nosotros, metodología ágil',
      focusKeywords: ['agencia desarrollo software', 'equipo desarrollo'],
    },
  },

  // Structured Data Templates
  structuredData: {
    organization: {
      name: 'COMMIT',
      legalName: 'COMMIT Agency SL', // TODO: Actualizar con nombre legal
      description: 'Agencia especializada en desarrollo de aplicaciones web y móviles para startups y empresas',
      foundingDate: '2020', // TODO: Actualizar con fecha real
      founders: [
        // TODO: Agregar fundadores reales
      ],
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'ES',
        // addressLocality: 'Madrid', // TODO: Actualizar
        // postalCode: '28001', // TODO: Actualizar
      },
      areaServed: ['ES', 'EU', 'LATAM'], // Expandir según mercado objetivo
      knowsAbout: [
        'Software Development',
        'Web Development',
        'Mobile Development',
        'Progressive Web Apps',
        'MVP Development',
        'Agile Methodologies',
        'React',
        'Node.js',
        'TypeScript',
        'Flutter',
      ],
    },

    services: [
      {
        '@type': 'Service',
        name: 'Desarrollo de Aplicaciones Web',
        description:
          'Desarrollo de aplicaciones web modernas, responsivas y escalables utilizando tecnologías de vanguardia como React, Next.js y Node.js.',
        serviceType: 'Web Development',
        provider: 'Grape',
      },
      {
        '@type': 'Service',
        name: 'Desarrollo de Aplicaciones Móviles',
        description:
          'Creación de aplicaciones móviles nativas e híbridas para iOS y Android con Flutter, React Native y tecnologías nativas.',
        serviceType: 'Mobile App Development',
        provider: 'Grape',
      },
      {
        '@type': 'Service',
        name: 'Desarrollo de MVP',
        description:
          'Desarrollo ágil de Productos Mínimos Viables (MVP) para validar ideas de negocio y acelerar el time-to-market de startups.',
        serviceType: 'MVP Development',
        provider: 'Grape',
      },
      {
        '@type': 'Service',
        name: 'Software a Medida',
        description:
          'Desarrollo de soluciones de software personalizadas para empresas, adaptadas a procesos específicos y necesidades únicas.',
        serviceType: 'Custom Software Development',
        provider: 'Grape',
      },
    ],

    faqs: [
      {
        question: '¿Cuánto tiempo tarda el desarrollo de una aplicación web?',
        answer:
          'El tiempo de desarrollo depende de la complejidad del proyecto. Un MVP puede estar listo en 6-8 semanas, mientras que aplicaciones más complejas pueden requerir 3-6 meses. Trabajamos con metodologías ágiles para entregar valor desde las primeras semanas.',
      },
      {
        question: '¿Qué tecnologías utilizan para desarrollar aplicaciones?',
        answer:
          'Utilizamos tecnologías modernas y probadas: React, Next.js, Astro y Vue para web; Flutter y React Native para móvil; Node.js, Python y TypeScript en backend. Seleccionamos la mejor tecnología según las necesidades de cada proyecto.',
      },
      {
        question: '¿Ofrecen mantenimiento post-lanzamiento?',
        answer:
          'Sí, ofrecemos planes de mantenimiento y soporte continuo. Incluyen actualizaciones de seguridad, mejoras de rendimiento, corrección de bugs y nuevas funcionalidades según las necesidades del negocio.',
      },
      {
        question: '¿Cuál es el costo aproximado de desarrollar una app?',
        answer:
          'El costo varía según la complejidad y funcionalidades. Un MVP puede costar desde 8.000€, aplicaciones de complejidad media desde 15.000€, y proyectos complejos pueden superar los 40.000€. Ofrecemos presupuestos personalizados sin compromiso.',
      },
      {
        question: '¿Trabajan con startups sin financiación?',
        answer:
          'Sí, tenemos experiencia trabajando con startups en fase inicial. Ofrecemos opciones flexibles de pago y podemos estructurar proyectos en fases para optimizar la inversión inicial y validar el producto progresivamente.',
      },
    ],
  },

  // Social Media Profiles
  socialProfiles: {
    twitter: 'https://twitter.com/grape_agency', // TODO: Actualizar
    linkedin: 'https://linkedin.com/company/grape-agency', // TODO: Actualizar
    github: 'https://github.com/grape-agency', // TODO: Actualizar
    instagram: 'https://instagram.com/grape.agency', // TODO: Actualizar
  },

  // Contact Information
  contact: {
    email: 'hello@grape.agency', // TODO: Actualizar
    phone: '+34 XXX XXX XXX', // TODO: Actualizar
  },

  // Business Info
  business: {
    priceRange: '€€€',
    currency: 'EUR',
    paymentAccepted: ['Cash', 'Credit Card', 'Wire Transfer'],
    openingHours: 'Mo-Fr 09:00-18:00',
  },
};

export default SEO_CONFIG;
