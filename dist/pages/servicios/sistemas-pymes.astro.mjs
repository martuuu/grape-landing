import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute, F as Fragment } from '../../chunks/astro/server_CmDtgPsN.mjs';
import 'kleur/colors';
import { $ as $$PageLayout, b as $$Icon } from '../../chunks/PageLayout_BZgvDoRs.mjs';
import { $ as $$Features } from '../../chunks/Features_2pWlyopA.mjs';
import { $ as $$Content } from '../../chunks/Content_C_ww1jv_.mjs';
import { $ as $$Features2 } from '../../chunks/Features2_Bm8-YRcy.mjs';
import { $ as $$Steps } from '../../chunks/Steps_DutvRy0o.mjs';
import { $ as $$CallToAction } from '../../chunks/CallToAction_Bwqt2O2Z.mjs';
import { a as getPermalink } from '../../chunks/consts_CmXsJCj0.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://commit.agency");
const $$SistemasPymes = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SistemasPymes;
  const metadata = {
    title: "Sistemas para PyMEs - Servicios COMMIT",
    description: "Soluciones de software personalizadas para peque\xF1as y medianas empresas, eventos, clubes y organizaciones."
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`   ${maybeRenderHead()}<section class="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-white to-commit-pale/20 dark:from-gray-900 dark:to-commit-darkest"> <div class="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none"> <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-commit-lighter/30 rounded-full blur-[100px]"></div> <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-commit-light/25 rounded-full blur-[120px]"></div> <div class="absolute top-1/2 right-1/4 w-80 h-80 bg-commit/20 rounded-full blur-[100px]"></div> </div> <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center"> <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-commit-lighter/20 border border-commit-lighter/40 text-commit-darker dark:text-commit-light text-sm font-medium mb-8"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:building-store", "class": "w-5 h-5" })}
Sistemas de Gestión
</div> <h1 class="text-4xl md:text-7xl font-bold font-heading leading-tight mb-8">
Soluciones para <br> <span class="text-transparent bg-clip-text bg-gradient-to-r from-commit-darker via-commit to-commit-light">PyMEs</span> </h1> <p class="text-lg md:text-xl text-muted dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
Desarrollamos sistemas web a medida para digitalizar y optimizar la gestión de tu negocio, evento o organización.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a${addAttribute(getPermalink("/presupuestos"), "href")} class="px-8 py-4 bg-gradient-commit text-white font-bold rounded-xl shadow-lg shadow-commit/30 hover:scale-105 transition-transform">
Solicitar Presupuesto
</a> <a${addAttribute(getPermalink("/trabajos"), "href")} class="px-8 py-4 bg-white dark:bg-gray-800 border-2 border-commit-light dark:border-gray-700 font-bold rounded-xl hover:bg-commit-pale/20 dark:hover:bg-gray-700 transition-colors">
Ver Trabajos
</a> </div> </div> </section>  ${renderComponent($$result2, "Content", $$Content, { "isAfterContent": true, "items": [
    {
      title: "Gesti\xF3n para PyMEs",
      description: "Desarrollamos sistemas de gesti\xF3n adaptados a las necesidades espec\xEDficas de peque\xF1as y medianas empresas: inventarios, facturaci\xF3n, CRM y m\xE1s.",
      icon: "tabler:building-store"
    },
    {
      title: "Plataformas para eventos",
      description: "Soluciones completas para la gesti\xF3n de eventos: registro de asistentes, venta de entradas, acreditaciones y seguimiento en tiempo real.",
      icon: "tabler:calendar-event"
    },
    {
      title: "Software para clubes deportivos",
      description: "Sistemas especializados para la administraci\xF3n de socios, reservas de instalaciones, pagos de cuotas y comunicaci\xF3n con miembros.",
      icon: "tabler:ball-football"
    },
    {
      title: "Integraci\xF3n con herramientas existentes",
      description: "Conectamos tu nuevo sistema con las herramientas que ya usas: contabilidad, email marketing, pasarelas de pago y m\xE1s.",
      icon: "tabler:plug-connected"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Gesti\xF3n Empresarial"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">
Software que se adapta a tu negocio
</h3>
Soluciones prácticas y eficientes para simplificar tu gestión diaria
` })}` })}  ${renderComponent($$result2, "Features2", $$Features2, { "title": "\xBFPara qui\xE9n son estos sistemas?", "subtitle": "Soluciones adaptadas a diferentes tipos de organizaciones", "columns": 3, "items": [
    {
      title: "PyMEs y Comercios",
      description: "Sistemas de gesti\xF3n de inventario, ventas, clientes y facturaci\xF3n adaptados a tu negocio.",
      icon: "tabler:building-store"
    },
    {
      title: "Eventos y Conferencias",
      description: "Plataformas para gesti\xF3n de inscripciones, agenda, speakers, sponsors y asistentes.",
      icon: "tabler:calendar-event"
    },
    {
      title: "Clubes Deportivos",
      description: "Sistemas para gesti\xF3n de socios, cuotas, reservas de canchas, torneos y comunicaci\xF3n.",
      icon: "tabler:ball-football"
    },
    {
      title: "Escuelas y Centros Educativos",
      description: "Gesti\xF3n acad\xE9mica, comunicaci\xF3n con padres, asistencia y seguimiento de alumnos.",
      icon: "tabler:school"
    },
    {
      title: "ONGs y Asociaciones",
      description: "Administraci\xF3n de miembros, donaciones, proyectos y voluntarios.",
      icon: "tabler:users-group"
    },
    {
      title: "Restaurantes y Servicios",
      description: "Reservas online, gesti\xF3n de mesas, pedidos y delivery integrado.",
      icon: "tabler:tools-kitchen"
    }
  ] }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-transparent"></div> ` })}` })}  ${renderComponent($$result2, "Features", $$Features, { "id": "features", "title": "Funcionalidades que Incluimos", "subtitle": "Todo lo necesario para gestionar tu organizaci\xF3n eficientemente", "columns": 3, "items": [
    {
      title: "Panel de Administraci\xF3n",
      description: "Dashboard intuitivo con m\xE9tricas y accesos r\xE1pidos a todas las funciones del sistema.",
      icon: "tabler:dashboard"
    },
    {
      title: "Gesti\xF3n de Usuarios",
      description: "Sistema de roles y permisos para diferentes niveles de acceso y responsabilidades.",
      icon: "tabler:users"
    },
    {
      title: "Base de Datos Segura",
      description: "Almacenamiento seguro de informaci\xF3n con backups autom\xE1ticos y encriptaci\xF3n.",
      icon: "tabler:database"
    },
    {
      title: "Reportes y Estad\xEDsticas",
      description: "Generaci\xF3n de reportes personalizados y visualizaci\xF3n de datos en tiempo real.",
      icon: "tabler:chart-bar"
    },
    {
      title: "Integraci\xF3n de Pagos",
      description: "Mercado Pago, Stripe u otras pasarelas de pago integradas de forma segura.",
      icon: "tabler:credit-card"
    },
    {
      title: "Notificaciones",
      description: "Sistema de notificaciones por email, SMS o push para mantener informados a usuarios.",
      icon: "tabler:bell"
    },
    {
      title: "Versi\xF3n M\xF3vil",
      description: "Dise\xF1o responsive que funciona perfecto en smartphones y tablets.",
      icon: "tabler:device-mobile"
    },
    {
      title: "Exportaci\xF3n de Datos",
      description: "Exporta informaci\xF3n a Excel, PDF o CSV para an\xE1lisis externos.",
      icon: "tabler:file-export"
    },
    {
      title: "Soporte y Capacitaci\xF3n",
      description: "Incluye capacitaci\xF3n para tu equipo y soporte t\xE9cnico continuo.",
      icon: "tabler:headset"
    }
  ] })}  ${renderComponent($$result2, "Content", $$Content, { "isReversed": true, "title": "Ejemplo: Sistema de Gesti\xF3n de Eventos", "subtitle": "Caso de \xE9xito real", "items": [
    {
      title: "Inscripciones Online",
      description: "Formularios personalizados con pago integrado y confirmaci\xF3n autom\xE1tica.",
      icon: "tabler:forms"
    },
    {
      title: "Gesti\xF3n de Agenda",
      description: "Cronograma interactivo con charlas, workshops y actividades.",
      icon: "tabler:calendar"
    },
    {
      title: "Certificados Autom\xE1ticos",
      description: "Generaci\xF3n y env\xEDo de certificados de asistencia personalizados.",
      icon: "tabler:certificate"
    },
    {
      title: "Panel de Asistentes",
      description: "Check-in digital, badges virtuales y networking entre participantes.",
      icon: "tabler:qrcode"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Sistema de Eventos"
  } })}  ${renderComponent($$result2, "Content", $$Content, { "title": "Ejemplo: Sistema para Clubes Deportivos", "subtitle": "Digitaliza tu club", "items": [
    {
      title: "Gesti\xF3n de Socios",
      description: "Alta, baja, modificaci\xF3n de socios con historial completo y estados de cuenta.",
      icon: "tabler:id-badge"
    },
    {
      title: "Cobro de Cuotas",
      description: "Generaci\xF3n autom\xE1tica de cuotas, recordatorios de pago y reportes de morosidad.",
      icon: "tabler:currency-dollar"
    },
    {
      title: "Reserva de Instalaciones",
      description: "Sistema de reservas online para canchas, gimnasio, piletas y salones.",
      icon: "tabler:calendar-check"
    },
    {
      title: "Comunicaci\xF3n",
      description: "Newsletter, notificaciones push y comunicados internos para todos los socios.",
      icon: "tabler:mail"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Sistema para Clubes"
  } })}  ${renderComponent($$result2, "Steps", $$Steps, { "id": "proceso", "title": "Proceso de Implementaci\xF3n", "tagline": "Metodolog\xEDa \xE1gil", "items": [
    {
      title: "1. An\xE1lisis de Necesidades",
      description: "Relevamos procesos actuales, identificamos puntos de mejora y definimos requerimientos funcionales.",
      icon: "tabler:clipboard-list"
    },
    {
      title: "2. Dise\xF1o del Sistema",
      description: "Creamos wireframes, flujos de usuario y dise\xF1o de base de datos adaptado a tu negocio.",
      icon: "tabler:layout"
    },
    {
      title: "3. Desarrollo Iterativo",
      description: "Desarrollamos en sprints quincenales con demostraciones y feedback constante.",
      icon: "tabler:code"
    },
    {
      title: "4. Pruebas y Ajustes",
      description: "Testing exhaustivo, correcci\xF3n de bugs y ajustes finales seg\xFAn tu feedback.",
      icon: "tabler:test-pipe"
    },
    {
      title: "5. Capacitaci\xF3n",
      description: "Entrenamos a tu equipo en el uso del sistema con manuales y videos tutoriales.",
      icon: "tabler:school"
    },
    {
      title: "6. Lanzamiento",
      description: "Puesta en producci\xF3n con migraci\xF3n de datos y monitoreo durante las primeras semanas.",
      icon: "tabler:rocket"
    }
  ] })}  ${renderComponent($$result2, "Features2", $$Features2, { "title": "Stack Tecnol\xF3gico", "subtitle": "Desarrollamos con tecnolog\xEDas modernas y escalables", "items": [
    {
      title: "Frontend Moderno",
      description: "React, Next.js o Astro para interfaces r\xE1pidas y user-friendly.",
      icon: "tabler:brand-react"
    },
    {
      title: "Backend Robusto",
      description: "Node.js, Python o .NET para APIs seguras y eficientes.",
      icon: "tabler:server"
    },
    {
      title: "Bases de Datos",
      description: "PostgreSQL, MySQL o MongoDB seg\xFAn las necesidades del proyecto.",
      icon: "tabler:database"
    },
    {
      title: "Cloud Hosting",
      description: "Hosting en AWS, Google Cloud o Azure con 99.9% de uptime.",
      icon: "tabler:cloud"
    }
  ] }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-bg-light dark:bg-transparent"></div> ` })}` })}  ${renderComponent($$result2, "CallToAction", $$CallToAction, { "title": "\xBFNecesitas digitalizar tu negocio?", "subtitle": "Contanos sobre tu proyecto y te enviamos una propuesta personalizada sin compromiso.", "actions": [
    {
      variant: "primary",
      text: "Solicitar Presupuesto",
      href: getPermalink("/presupuestos"),
      icon: "tabler:rocket"
    },
    {
      variant: "secondary",
      text: "Contactar",
      href: getPermalink("/contact")
    }
  ] })} ` })}`;
}, "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/pages/servicios/sistemas-pymes.astro", void 0);

const $$file = "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/pages/servicios/sistemas-pymes.astro";
const $$url = "/servicios/sistemas-pymes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SistemasPymes,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
