import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: getPermalink('/'),
    },
    // {
    //   text: 'Productos',
    //   href: getPermalink('/productos'),
    //   links: [
    //     {
    //       text: 'Laneko - Gestión Integral',
    //       href: getPermalink('/productos/laneko'),
    //     },
    //     {
    //       text: 'Consultorio Online',
    //       href: getPermalink('/productos/consultorio-online'),
    //     },
    //     {
    //       text: 'Picky - Gestión de Tiendas',
    //       href: getPermalink('/productos/picky'),
    //     },
    //   ],
    // },
    {
      text: 'Servicios',
      links: [
        {
          text: 'Marketing & Landings',
          href: getPermalink('/servicios/marketing-landings'),
        },
        {
          text: 'Sistemas para PyMEs',
          href: getPermalink('/servicios/sistemas-pymes'),
        },
        {
          text: 'Desarrollo a Medida',
          href: getPermalink('/servicios/desarrollo-medida'),
        },
      ],
    },
    {
      text: 'Nosotros',
      links: [
        {
          text: 'Sobre la Agencia',
          href: getPermalink('/about#agency'),
        },
        {
          text: 'Quiénes Somos',
          href: getPermalink('/about#team'),
        },
        {
          text: 'Trabajos',
          href: getPermalink('/about#work'),
        },
      ],
    },
    {
      text: 'Presupuesto',
      href: getPermalink('/presupuesto'),
    },
    {
      text: 'Contacto',
      href: getPermalink('/contact'),
    },
    // {
    //   text: 'Homes',
    //   links: [
    //     {
    //       text: 'SaaS',
    //       href: getPermalink('/homes/saas'),
    //     },
    //     {
    //       text: 'Startup',
    //       href: getPermalink('/homes/startup'),
    //     },
    //     {
    //       text: 'Mobile App',
    //       href: getPermalink('/homes/mobile-app'),
    //     },
    //     {
    //       text: 'Personal',
    //       href: getPermalink('/homes/personal'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Pages',
    //   links: [
    //     {
    //       text: 'Features (Anchor Link)',
    //       href: getPermalink('/#features'),
    //     },
    //     {
    //       text: 'Services',
    //       href: getPermalink('/services'),
    //     },
    //     {
    //       text: 'Pricing',
    //       href: getPermalink('/pricing'),
    //     },
    //     {
    //       text: 'About us',
    //       href: getPermalink('/about'),
    //     },
    //     {
    //       text: 'Contact',
    //       href: getPermalink('/contact'),
    //     },
    //     {
    //       text: 'Terms',
    //       href: getPermalink('/terms'),
    //     },
    //     {
    //       text: 'Privacy policy',
    //       href: getPermalink('/privacy'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Landing',
    //   links: [
    //     {
    //       text: 'Lead Generation',
    //       href: getPermalink('/landing/lead-generation'),
    //     },
    //     {
    //       text: 'Long-form Sales',
    //       href: getPermalink('/landing/sales'),
    //     },
    //     {
    //       text: 'Click-Through',
    //       href: getPermalink('/landing/click-through'),
    //     },
    //     {
    //       text: 'Product Details (or Services)',
    //       href: getPermalink('/landing/product'),
    //     },
    //     {
    //       text: 'Coming Soon or Pre-Launch',
    //       href: getPermalink('/landing/pre-launch'),
    //     },
    //     {
    //       text: 'Subscription',
    //       href: getPermalink('/landing/subscription'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Blog',
    //   links: [
    //     {
    //       text: 'Blog List',
    //       href: getBlogPermalink(),
    //     },
    //     {
    //       text: 'Article',
    //       href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
    //     },
    //     {
    //       text: 'Article (with MDX)',
    //       href: getPermalink('markdown-elements-demo-post', 'post'),
    //     },
    //     {
    //       text: 'Category Page',
    //       href: getPermalink('tutorials', 'category'),
    //     },
    //     {
    //       text: 'Tag Page',
    //       href: getPermalink('astro', 'tag'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Widgets',
    //   href: '#',
    // },
  ],
  actions: [],
  // actions: [{ text: 'Download', href: 'https://github.com/arthelokyo/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Productos',
      links: [
        { text: 'Laneko - Medicina Laboral', href: getPermalink('/productos/laneko') },
        { text: 'Buffet-IA - LegalTech', href: getPermalink('/productos/buffet-ia') },
        { text: 'EventPlanner - Eventos', href: getPermalink('/productos/event-planning') },
        { text: 'Todos los Productos', href: getPermalink('/productos') },
      ],
    },
    {
      title: 'Servicios',
      links: [
        { text: 'Marketing & Landings', href: getPermalink('/servicios/marketing-landings') },
        { text: 'Sistemas para PyMEs', href: getPermalink('/servicios/sistemas-pymes') },
        { text: 'Desarrollo a Medida', href: getPermalink('/servicios/desarrollo-medida') },
        { text: 'Solicitar Presupuesto', href: getPermalink('/presupuesto') },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { text: 'Sobre Nosotros', href: getPermalink('/about') },
        { text: 'Productos', href: getPermalink('/productos') },
        { text: 'Contacto', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Soporte',
      links: [
        { text: 'Preguntas Frecuentes', href: getPermalink('/faq') },
        { text: 'Documentación', href: getPermalink('/docs') },
        { text: 'Estado del Servicio', href: getPermalink('/status') },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Términos y Condiciones', href: getPermalink('/terms') },
        { text: 'Política de Privacidad', href: getPermalink('/privacy') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Términos', href: getPermalink('/terms') },
    { text: 'Privacidad', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/commit.ar' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com/company/commit-ar' },
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/5492915278982' },
    // { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
  `,
};
