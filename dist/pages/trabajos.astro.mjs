import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../chunks/astro/server_CmDtgPsN.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../chunks/PageLayout_BZgvDoRs.mjs';
import { $ as $$HeroText } from '../chunks/HeroText_DUhiMwQL.mjs';
import { $ as $$Content } from '../chunks/Content_C_ww1jv_.mjs';
import { $ as $$Features2 } from '../chunks/Features2_Bm8-YRcy.mjs';
import { $ as $$CallToAction } from '../chunks/CallToAction_Bwqt2O2Z.mjs';
import { $ as $$Testimonials } from '../chunks/Testimonials_BngwP6sY.mjs';
import { a as getPermalink } from '../chunks/consts_CmXsJCj0.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://commit.agency");
const $$Trabajos = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Trabajos;
  const metadata = {
    title: "Portfolio - Trabajos de COMMIT",
    description: "Proyectos exitosos de desarrollo web, apps m\xF3viles y sistemas a medida realizados por COMMIT."
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "HeroText", $$HeroText, { "tagline": "Portfolio", "title": "Nuestros Trabajos", "subtitle": "Explor\xE1 algunos de los proyectos m\xE1s destacados que hemos desarrollado para nuestros clientes, desde startups hasta empresas consolidadas." })}  ${renderComponent($$result2, "Features2", $$Features2, { "title": "Proyectos por Categor\xEDa", "subtitle": "Experiencia en m\xFAltiples industrias y tipos de soluciones", "columns": 3, "items": [
    {
      title: "E-commerce & Marketplaces",
      description: "Tiendas online, plataformas de ventas y marketplaces multi-vendor.",
      icon: "tabler:shopping-cart"
    },
    {
      title: "SaaS & Plataformas Web",
      description: "Aplicaciones SaaS, dashboards y sistemas de gesti\xF3n basados en web.",
      icon: "tabler:cloud"
    },
    {
      title: "Aplicaciones M\xF3viles",
      description: "Apps nativas e h\xEDbridas para iOS y Android.",
      icon: "tabler:device-mobile"
    },
    {
      title: "Sistemas Empresariales",
      description: "ERPs, CRMs y sistemas internos de gesti\xF3n para empresas.",
      icon: "tabler:building"
    },
    {
      title: "Landing Pages & Marketing",
      description: "P\xE1ginas de aterrizaje optimizadas para conversi\xF3n y campa\xF1as digitales.",
      icon: "tabler:rocket"
    },
    {
      title: "Portales & Comunidades",
      description: "Sitios de contenido, foros, plataformas educativas y redes sociales.",
      icon: "tabler:users-group"
    }
  ] }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div class="absolute inset-0 bg-bg-light dark:bg-transparent"></div> ` })}` })}  ${renderComponent($$result2, "Content", $$Content, { "isReversed": true, "title": "Tienda Online - FashionHub", "subtitle": "E-commerce de moda con +10,000 productos", "items": [
    {
      title: "Desaf\xEDo",
      description: "Migrar de Shopify a una soluci\xF3n custom para tener mayor control y reducir costos mensuales.",
      icon: "tabler:target"
    },
    {
      title: "Soluci\xF3n",
      description: "E-commerce headless con Next.js, Stripe, y panel de administraci\xF3n completo.",
      icon: "tabler:bulb"
    },
    {
      title: "Resultados",
      description: "50% m\xE1s r\xE1pido, costos reducidos en 70%, conversi\xF3n aument\xF3 35%.",
      icon: "tabler:chart-line"
    },
    {
      title: "Tecnolog\xEDas",
      description: "Next.js, React, Node.js, PostgreSQL, Stripe, AWS",
      icon: "tabler:code"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "E-commerce FashionHub"
  } })}  ${renderComponent($$result2, "Content", $$Content, { "title": "Plataforma SaaS - ProjectFlow", "subtitle": "Gesti\xF3n de proyectos para equipos remotos", "items": [
    {
      title: "Desaf\xEDo",
      description: "Crear una alternativa m\xE1s simple y econ\xF3mica a herramientas como Asana o Monday.",
      icon: "tabler:target"
    },
    {
      title: "Soluci\xF3n",
      description: "SaaS multi-tenant con planes de suscripci\xF3n, integraciones y real-time collaboration.",
      icon: "tabler:bulb"
    },
    {
      title: "Resultados",
      description: "500+ empresas usando la plataforma, 95% de retenci\xF3n mensual.",
      icon: "tabler:chart-line"
    },
    {
      title: "Tecnolog\xEDas",
      description: "React, Node.js, Socket.io, MongoDB, Redis, Docker",
      icon: "tabler:code"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
    alt: "SaaS ProjectFlow"
  } })}  ${renderComponent($$result2, "Content", $$Content, { "isReversed": true, "title": "App M\xF3vil - FitTracker", "subtitle": "Aplicaci\xF3n de fitness y nutrici\xF3n", "items": [
    {
      title: "Desaf\xEDo",
      description: "App con tracking de ejercicios, dietas personalizadas y gamificaci\xF3n para motivar usuarios.",
      icon: "tabler:target"
    },
    {
      title: "Soluci\xF3n",
      description: "App React Native con IA para recomendaciones, integraci\xF3n con wearables y comunidad.",
      icon: "tabler:bulb"
    },
    {
      title: "Resultados",
      description: "50,000+ descargas, 4.7\u2605 en stores, featured en App Store.",
      icon: "tabler:chart-line"
    },
    {
      title: "Tecnolog\xEDas",
      description: "React Native, Python, TensorFlow, Google Cloud, Firebase",
      icon: "tabler:code"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "App FitTracker"
  } })}  ${renderComponent($$result2, "Content", $$Content, { "title": "Sistema de Eventos - ConferenceHub", "subtitle": "Plataforma completa para gesti\xF3n de conferencias", "items": [
    {
      title: "Desaf\xEDo",
      description: "Gestionar inscripciones, agenda, speakers, sponsors y networking para eventos de +1000 personas.",
      icon: "tabler:target"
    },
    {
      title: "Soluci\xF3n",
      description: "Portal web + app m\xF3vil con check-in QR, chat en vivo, y gamificaci\xF3n.",
      icon: "tabler:bulb"
    },
    {
      title: "Resultados",
      description: "Usado en 15+ conferencias, 98% satisfacci\xF3n de organizadores.",
      icon: "tabler:chart-line"
    },
    {
      title: "Tecnolog\xEDas",
      description: "Next.js, React Native, Node.js, PostgreSQL, Socket.io",
      icon: "tabler:code"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Sistema ConferenceHub"
  } })}  ${renderComponent($$result2, "Content", $$Content, { "isReversed": true, "title": "ERP Empresarial - ManageXpert", "subtitle": "Sistema integral de gesti\xF3n para industria manufacturera", "items": [
    {
      title: "Desaf\xEDo",
      description: "Reemplazar m\xFAltiples sistemas legacy por una soluci\xF3n integrada y moderna.",
      icon: "tabler:target"
    },
    {
      title: "Soluci\xF3n",
      description: "ERP con m\xF3dulos de inventario, producci\xF3n, ventas, RRHH y contabilidad.",
      icon: "tabler:bulb"
    },
    {
      title: "Resultados",
      description: "40% reducci\xF3n en tiempos operativos, ROI en 8 meses.",
      icon: "tabler:chart-line"
    },
    {
      title: "Tecnolog\xEDas",
      description: "React, .NET Core, SQL Server, Azure, Power BI",
      icon: "tabler:code"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "ERP ManageXpert"
  } })}  ${renderComponent($$result2, "Content", $$Content, { "title": "Landing de Conversi\xF3n - CryptoInvest", "subtitle": "Campa\xF1a de captaci\xF3n para plataforma fintech", "items": [
    {
      title: "Desaf\xEDo",
      description: "Generar leads calificados para nueva plataforma de inversi\xF3n en cripto.",
      icon: "tabler:target"
    },
    {
      title: "Soluci\xF3n",
      description: "Landing optimizada con storytelling, calculadora interactiva y formulario multi-paso.",
      icon: "tabler:bulb"
    },
    {
      title: "Resultados",
      description: "28% tasa de conversi\xF3n, 5,000+ registros en primer mes.",
      icon: "tabler:chart-line"
    },
    {
      title: "Tecnolog\xEDas",
      description: "Astro, Tailwind, Google Analytics, Mailchimp API",
      icon: "tabler:code"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Landing CryptoInvest"
  } })}  ${renderComponent($$result2, "Testimonials", $$Testimonials, { "title": "Lo que dicen nuestros clientes", "subtitle": "Experiencias reales de empresas que confiaron en COMMIT", "testimonials": [
    {
      testimonial: "El equipo de COMMIT no solo entreg\xF3 un producto excepcional, sino que se convirtieron en partners estrat\xE9gicos de nuestro negocio. Su capacidad t\xE9cnica es impresionante.",
      name: "Luc\xEDa Fern\xE1ndez",
      job: "CEO, FashionHub",
      image: {
        src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        alt: "Luc\xEDa Fern\xE1ndez"
      }
    },
    {
      testimonial: "Lograron entender nuestra visi\xF3n y ejecutarla mejor de lo que imagin\xE1bamos. La plataforma super\xF3 todas nuestras expectativas en funcionalidad y dise\xF1o.",
      name: "Mart\xEDn Rodr\xEDguez",
      job: "Founder, ProjectFlow",
      image: {
        src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        alt: "Mart\xEDn Rodr\xEDguez"
      }
    },
    {
      testimonial: "Excelente comunicaci\xF3n, entregas en tiempo y una calidad de c\xF3digo que facilit\xF3 futuras expansiones. 100% recomendables.",
      name: "Ana Guti\xE9rrez",
      job: "CTO, ManageXpert",
      image: {
        src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        alt: "Ana Guti\xE9rrez"
      }
    }
  ] })}  ${renderComponent($$result2, "Features2", $$Features2, { "title": "Industrias con las que Trabajamos", "subtitle": "Experiencia en m\xFAltiples sectores", "columns": 3, "items": [
    {
      title: "Fintech",
      description: "Billeteras digitales, plataformas de inversi\xF3n, procesadores de pago.",
      icon: "tabler:currency-dollar"
    },
    {
      title: "E-commerce",
      description: "Tiendas online, marketplaces, sistemas de inventario y log\xEDstica.",
      icon: "tabler:shopping-cart"
    },
    {
      title: "HealthTech",
      description: "Telemedicina, gesti\xF3n hospitalaria, apps de salud y wellness.",
      icon: "tabler:heartbeat"
    },
    {
      title: "EdTech",
      description: "Plataformas de e-learning, LMS, gesti\xF3n acad\xE9mica.",
      icon: "tabler:book"
    },
    {
      title: "Real Estate",
      description: "Portales inmobiliarios, CRMs para inmobiliarias, tours virtuales.",
      icon: "tabler:home"
    },
    {
      title: "Turismo",
      description: "Sistemas de reservas, plataformas de viajes, gesti\xF3n hotelera.",
      icon: "tabler:plane"
    },
    {
      title: "Log\xEDstica",
      description: "Tracking de env\xEDos, optimizaci\xF3n de rutas, gesti\xF3n de flotas.",
      icon: "tabler:truck"
    },
    {
      title: "Food & Delivery",
      description: "Apps de delivery, gesti\xF3n de restaurantes, sistemas de pedidos.",
      icon: "tabler:pizza"
    },
    {
      title: "Entretenimiento",
      description: "Plataformas de streaming, gesti\xF3n de eventos, ticketing.",
      icon: "tabler:device-tv"
    }
  ] }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-bg-light dark:bg-transparent"></div> ` })}` })}  ${renderComponent($$result2, "CallToAction", $$CallToAction, { "title": "\xBFQuer\xE9s que tu proyecto sea el pr\xF3ximo caso de \xE9xito?", "subtitle": "Charlemos sobre c\xF3mo podemos ayudarte a alcanzar tus objetivos de negocio con tecnolog\xEDa.", "actions": [
    {
      variant: "primary",
      text: "Solicitar Presupuesto",
      href: getPermalink("/presupuestos"),
      icon: "tabler:rocket"
    },
    {
      variant: "secondary",
      text: "Conocer al Equipo",
      href: getPermalink("/quienes-somos")
    }
  ] })} ` })}`;
}, "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/pages/trabajos.astro", void 0);

const $$file = "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/pages/trabajos.astro";
const $$url = "/trabajos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Trabajos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
