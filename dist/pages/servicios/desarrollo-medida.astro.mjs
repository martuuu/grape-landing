import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute, F as Fragment } from '../../chunks/astro/server_CmDtgPsN.mjs';
import 'kleur/colors';
import { $ as $$PageLayout, b as $$Icon } from '../../chunks/PageLayout_BZgvDoRs.mjs';
import { $ as $$Features } from '../../chunks/Features_2pWlyopA.mjs';
import { $ as $$Content } from '../../chunks/Content_C_ww1jv_.mjs';
import { $ as $$Features2 } from '../../chunks/Features2_Bm8-YRcy.mjs';
import { $ as $$Steps } from '../../chunks/Steps_DutvRy0o.mjs';
import { $ as $$CallToAction } from '../../chunks/CallToAction_Bwqt2O2Z.mjs';
import { $ as $$Testimonials } from '../../chunks/Testimonials_BngwP6sY.mjs';
import { a as getPermalink } from '../../chunks/consts_CmXsJCj0.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://commit.agency");
const $$DesarrolloMedida = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DesarrolloMedida;
  const metadata = {
    title: "Desarrollo a Medida - Servicios COMMIT",
    description: "Desarrollamos software 100% personalizado para proyectos \xFAnicos y complejos que requieren soluciones espec\xEDficas."
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`   ${maybeRenderHead()}<section class="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-white to-commit-pale/20 dark:from-gray-900 dark:to-commit-darkest"> <div class="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none"> <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-commit-lighter/30 rounded-full blur-[100px]"></div> <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-commit-light/25 rounded-full blur-[120px]"></div> <div class="absolute top-1/2 right-1/4 w-80 h-80 bg-commit/20 rounded-full blur-[100px]"></div> </div> <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center"> <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-commit-lighter/20 border border-commit-lighter/40 text-commit-darker dark:text-commit-light text-sm font-medium mb-8"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:code", "class": "w-5 h-5" })}
Desarrollo Custom
</div> <h1 class="text-4xl md:text-7xl font-bold font-heading leading-tight mb-8">
Sistemas <br> <span class="text-transparent bg-clip-text bg-gradient-to-r from-commit-darker via-commit to-commit-light">100% a Medida</span> </h1> <p class="text-lg md:text-xl text-muted dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
Construimos software personalizado desde cero, adaptado completamente a las necesidades específicas de tu proyecto.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a${addAttribute(getPermalink("/presupuestos"), "href")} class="px-8 py-4 bg-gradient-commit text-white font-bold rounded-xl shadow-lg shadow-commit/30 hover:scale-105 transition-transform">
Iniciar Proyecto
</a> <a${addAttribute(getPermalink("/trabajos"), "href")} class="px-8 py-4 bg-white dark:bg-gray-800 border-2 border-commit-light dark:border-gray-700 font-bold rounded-xl hover:bg-commit-pale/20 dark:hover:bg-gray-700 transition-colors">
Ver Casos de Éxito
</a> </div> </div> </section>  ${renderComponent($$result2, "Content", $$Content, { "isReversed": true, "isAfterContent": true, "items": [
    {
      title: "An\xE1lisis profundo de requerimientos",
      description: "Comenzamos con un discovery exhaustivo para entender a fondo tus procesos, desaf\xEDos y objetivos de negocio.",
      icon: "tabler:search"
    },
    {
      title: "Arquitectura escalable",
      description: "Dise\xF1amos la arquitectura de tu sistema pensando en el crecimiento futuro, utilizando tecnolog\xEDas robustas y probadas.",
      icon: "tabler:building-arch"
    },
    {
      title: "Desarrollo \xE1gil e iterativo",
      description: "Trabajamos en sprints cortos con entregas frecuentes, permiti\xE9ndote ver el progreso y hacer ajustes en el camino.",
      icon: "tabler:refresh"
    },
    {
      title: "Soporte y mantenimiento continuo",
      description: "No terminamos con el lanzamiento. Ofrecemos soporte t\xE9cnico, actualizaciones y nuevas funcionalidades seg\xFAn evolucionen tus necesidades.",
      icon: "tabler:lifebuoy"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Desarrollo a Medida"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">
Tu visión, nuestro código
</h3>
Construimos el software que tu negocio necesita, exactamente como lo necesitas
` })}` })}  ${renderComponent($$result2, "Features2", $$Features2, { "title": "\xBFCu\xE1ndo necesitas desarrollo a medida?", "subtitle": "Identific\xE1 si tu proyecto requiere una soluci\xF3n personalizada", "columns": 2, "items": [
    {
      title: "Procesos \xDAnicos de Negocio",
      description: "Tu empresa tiene workflows espec\xEDficos que no se adaptan a soluciones est\xE1ndar del mercado.",
      icon: "tabler:route"
    },
    {
      title: "Escalabilidad Cr\xEDtica",
      description: "Necesitas un sistema que crezca con tu negocio sin limitaciones t\xE9cnicas o de licenciamiento.",
      icon: "tabler:trending-up"
    },
    {
      title: "Integraciones Complejas",
      description: "Requieres conectar m\xFAltiples sistemas legacy, APIs de terceros o hardware especializado.",
      icon: "tabler:plug-connected"
    },
    {
      title: "Requisitos de Seguridad Avanzados",
      description: "Manejas datos sensibles que necesitan cumplir normativas espec\xEDficas (GDPR, HIPAA, etc.).",
      icon: "tabler:shield-lock"
    },
    {
      title: "Ventaja Competitiva",
      description: "El software es parte central de tu propuesta de valor y diferenciaci\xF3n en el mercado.",
      icon: "tabler:trophy"
    },
    {
      title: "Innovaci\xF3n Tecnol\xF3gica",
      description: "Tu proyecto involucra IA, Machine Learning, IoT u otras tecnolog\xEDas de vanguardia.",
      icon: "tabler:bulb"
    }
  ] }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-transparent"></div> ` })}` })}  ${renderComponent($$result2, "Features", $$Features, { "id": "proyectos", "title": "Tipos de Proyectos que Desarrollamos", "subtitle": "Experiencia en m\xFAltiples industrias y tecnolog\xEDas", "columns": 3, "items": [
    {
      title: "Plataformas SaaS",
      description: "Aplicaciones multi-tenant con suscripciones, billing automatizado y analytics avanzados.",
      icon: "tabler:cloud-computing"
    },
    {
      title: "Marketplaces",
      description: "Plataformas de doble lado con gesti\xF3n de vendedores, compradores, pagos y comisiones.",
      icon: "tabler:shopping-cart"
    },
    {
      title: "Aplicaciones M\xF3viles",
      description: "Apps nativas (iOS/Android) o h\xEDbridas con React Native, sincronizaci\xF3n offline y push notifications.",
      icon: "tabler:device-mobile"
    },
    {
      title: "ERPs Empresariales",
      description: "Sistemas de gesti\xF3n integral: contabilidad, inventario, RRHH, CRM integrados.",
      icon: "tabler:building-factory"
    },
    {
      title: "APIs y Microservicios",
      description: "Arquitecturas escalables basadas en microservicios, APIs RESTful y GraphQL.",
      icon: "tabler:api"
    },
    {
      title: "Portales de E-learning",
      description: "Plataformas educativas con cursos, evaluaciones, gamificaci\xF3n y seguimiento de progreso.",
      icon: "tabler:book"
    },
    {
      title: "Fintech",
      description: "Aplicaciones financieras, billeteras digitales, pr\xE9stamos y sistemas de pagos.",
      icon: "tabler:currency-dollar"
    },
    {
      title: "HealthTech",
      description: "Sistemas de gesti\xF3n m\xE9dica, telemedicina, historias cl\xEDnicas digitales.",
      icon: "tabler:heartbeat"
    },
    {
      title: "IoT y Hardware",
      description: "Integraci\xF3n con dispositivos IoT, sensores, dashboards en tiempo real.",
      icon: "tabler:device-watch"
    }
  ] })}  ${renderComponent($$result2, "Content", $$Content, { "isReversed": true, "title": "Nuestro Enfoque de Desarrollo", "subtitle": "Metodolog\xEDa probada en proyectos complejos", "items": [
    {
      title: "Desarrollo \xC1gil",
      description: "Sprints de 2 semanas con entregas incrementales y feedback constante.",
      icon: "tabler:refresh"
    },
    {
      title: "Arquitectura Escalable",
      description: "Dise\xF1amos sistemas preparados para crecer desde el primer d\xEDa.",
      icon: "tabler:building"
    },
    {
      title: "C\xF3digo de Calidad",
      description: "Code reviews, testing automatizado y documentaci\xF3n completa.",
      icon: "tabler:code"
    },
    {
      title: "DevOps",
      description: "CI/CD, infraestructura como c\xF3digo y monitoreo 24/7.",
      icon: "tabler:infinity"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Equipo de Desarrollo"
  } })}  ${renderComponent($$result2, "Content", $$Content, { "title": "Stack Tecnol\xF3gico Completo", "subtitle": "Elegimos las herramientas adecuadas para cada proyecto", "items": [
    {
      title: "Frontend",
      description: "React, Vue, Angular, Next.js, Astro, TypeScript",
      icon: "tabler:brand-react"
    },
    {
      title: "Backend",
      description: "Node.js, Python, .NET, Java, Go, Ruby on Rails",
      icon: "tabler:server"
    },
    {
      title: "M\xF3vil",
      description: "React Native, Flutter, Swift (iOS), Kotlin (Android)",
      icon: "tabler:device-mobile"
    },
    {
      title: "Bases de Datos",
      description: "PostgreSQL, MongoDB, MySQL, Redis, Elasticsearch",
      icon: "tabler:database"
    },
    {
      title: "Cloud & DevOps",
      description: "AWS, Google Cloud, Azure, Docker, Kubernetes",
      icon: "tabler:cloud"
    },
    {
      title: "IA & ML",
      description: "TensorFlow, PyTorch, OpenAI API, Hugging Face",
      icon: "tabler:brain"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Tecnolog\xEDas de Desarrollo"
  } })}  ${renderComponent($$result2, "Steps", $$Steps, { "id": "proceso", "title": "Proceso de Desarrollo Completo", "tagline": "De la idea al producto final", "items": [
    {
      title: "Discovery & Planning",
      description: "Entendemos tu visi\xF3n, analizamos viabilidad t\xE9cnica y creamos roadmap detallado con estimaciones.",
      icon: "tabler:compass"
    },
    {
      title: "Dise\xF1o UX/UI",
      description: "Wireframes, prototipos interactivos y dise\xF1o visual siguiendo best practices de usabilidad.",
      icon: "tabler:palette"
    },
    {
      title: "Arquitectura T\xE9cnica",
      description: "Definimos estructura de datos, APIs, integraciones y stack tecnol\xF3gico \xF3ptimo.",
      icon: "tabler:sitemap"
    },
    {
      title: "Desarrollo en Sprints",
      description: "Desarrollo iterativo con demos quincenales, ajustes seg\xFAn feedback y entregas parciales.",
      icon: "tabler:code"
    },
    {
      title: "QA & Testing",
      description: "Testing manual y automatizado, pruebas de carga, seguridad y compatibilidad.",
      icon: "tabler:test-pipe"
    },
    {
      title: "Deploy & Monitoreo",
      description: "Despliegue en producci\xF3n, configuraci\xF3n de monitoreo y plan de mantenimiento.",
      icon: "tabler:rocket"
    }
  ] })}  ${renderComponent($$result2, "Features2", $$Features2, { "title": "Nuestras Garant\xEDas", "subtitle": "Trabajamos con transparencia y compromiso", "items": [
    {
      title: "C\xF3digo Propietario",
      description: "El c\xF3digo fuente es 100% tuyo. Sin dependencias ocultas ni licencias restrictivas.",
      icon: "tabler:license"
    },
    {
      title: "Documentaci\xF3n Completa",
      description: "Entregamos documentaci\xF3n t\xE9cnica, gu\xEDas de usuario y videos tutoriales.",
      icon: "tabler:book"
    },
    {
      title: "Soporte Post-Lanzamiento",
      description: "Incluimos soporte t\xE9cnico durante los primeros 3 meses despu\xE9s del lanzamiento.",
      icon: "tabler:lifebuoy"
    },
    {
      title: "Escalabilidad Garantizada",
      description: "Arquitectura dise\xF1ada para soportar 10x el tr\xE1fico inicial sin refactoring.",
      icon: "tabler:chart-arrows-vertical"
    }
  ] }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-bg-light dark:bg-transparent"></div> ` })}` })}  ${renderComponent($$result2, "Testimonials", $$Testimonials, { "title": "Lo que dicen nuestros clientes", "subtitle": "Empresas que confiaron en nosotros para sus proyectos m\xE1s importantes", "testimonials": [
    {
      testimonial: "COMMIT transform\xF3 nuestra visi\xF3n en una plataforma SaaS robusta que hoy usan m\xE1s de 5000 usuarios. Su expertise t\xE9cnico y capacidad de resolver problemas complejos fue clave para nuestro \xE9xito.",
      name: "Carlos Mendoza",
      job: "CEO, TechStartup",
      image: {
        src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        alt: "Carlos Mendoza"
      }
    },
    {
      testimonial: "Necesit\xE1bamos integrar 7 sistemas legacy diferentes. El equipo de COMMIT no solo lo logr\xF3, sino que mejor\xF3 significativamente nuestros tiempos de procesamiento.",
      name: "Mar\xEDa Gonz\xE1lez",
      job: "CTO, Enterprise Corp",
      image: {
        src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        alt: "Mar\xEDa Gonz\xE1lez"
      }
    },
    {
      testimonial: "La aplicaci\xF3n m\xF3vil que desarrollaron super\xF3 todas nuestras expectativas. Excelente performance, dise\xF1o impecable y entrega en tiempo r\xE9cord.",
      name: "Juan P\xE9rez",
      job: "Product Manager, FinTech Solutions",
      image: {
        src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        alt: "Juan P\xE9rez"
      }
    }
  ] })}  ${renderComponent($$result2, "CallToAction", $$CallToAction, { "title": "\xBFListo para iniciar tu proyecto?", "subtitle": "Contanos tu idea y te enviamos una propuesta t\xE9cnica y comercial sin compromiso.", "actions": [
    {
      variant: "primary",
      text: "Solicitar Propuesta",
      href: getPermalink("/presupuestos"),
      icon: "tabler:rocket"
    },
    {
      variant: "secondary",
      text: "Agendar Reuni\xF3n",
      href: getPermalink("/contact")
    }
  ] })} ` })}`;
}, "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/pages/servicios/desarrollo-medida.astro", void 0);

const $$file = "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/pages/servicios/desarrollo-medida.astro";
const $$url = "/servicios/desarrollo-medida";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$DesarrolloMedida,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
