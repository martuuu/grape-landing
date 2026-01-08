import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../chunks/astro/server_CmDtgPsN.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../chunks/PageLayout_BZgvDoRs.mjs';
import { $ as $$Hero } from '../chunks/Hero_DBmV9CNy.mjs';
import { $ as $$Features2 } from '../chunks/Features2_Bm8-YRcy.mjs';
import { $ as $$Content } from '../chunks/Content_C_ww1jv_.mjs';
import { $ as $$Stats } from '../chunks/Stats_CVgY7WPY.mjs';
import { $ as $$Steps } from '../chunks/Steps_DutvRy0o.mjs';
import { $ as $$CallToAction } from '../chunks/CallToAction_Bwqt2O2Z.mjs';
import { a as getPermalink } from '../chunks/consts_CmXsJCj0.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://commit.agency");
const $$QuienesSomos = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$QuienesSomos;
  const metadata = {
    title: "Qui\xE9nes Somos - COMMIT",
    description: "Conoc\xE9 al equipo de COMMIT: desarrolladores apasionados creando soluciones digitales innovadoras."
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "tagline": "Nuestro Equipo", "title": "Somos COMMIT", "subtitle": "Un equipo multidisciplinario de desarrolladores, dise\xF1adores y especialistas en tecnolog\xEDa, unidos por la pasi\xF3n de crear soluciones digitales que transformen negocios.", "image": {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Equipo COMMIT"
  } })}  ${renderComponent($$result2, "Stats", $$Stats, { "title": "N\xFAmeros que nos representan", "stats": [
    { title: "A\xF1os de Experiencia", amount: "8+" },
    { title: "Proyectos Entregados", amount: "150+" },
    { title: "Clientes Satisfechos", amount: "80+" },
    { title: "L\xEDneas de C\xF3digo", amount: "2M+" }
  ] })}  ${renderComponent($$result2, "Content", $$Content, { "isReversed": true, "title": "Nuestra Historia", "subtitle": "De un caf\xE9 a una agencia digital", "items": [
    {
      title: "Fundaci\xF3n (2016)",
      description: "Todo comenz\xF3 con tres amigos desarrolladores que compart\xEDan la visi\xF3n de hacer desarrollo web accesible y de calidad.",
      icon: "tabler:rocket"
    },
    {
      title: "Primeros Clientes",
      description: "Nuestros primeros proyectos fueron para startups y peque\xF1os negocios locales que confiaron en nosotros.",
      icon: "tabler:users"
    },
    {
      title: "Expansi\xF3n del Equipo",
      description: "El boca a boca nos permiti\xF3 crecer: sumamos dise\xF1adores, QA testers y especialistas en DevOps.",
      icon: "tabler:trending-up"
    },
    {
      title: "Hoy",
      description: "Somos un equipo de 12 profesionales trabajando con empresas de toda Latinoam\xE9rica.",
      icon: "tabler:award"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Historia de COMMIT"
  } })}  ${renderComponent($$result2, "Features2", $$Features2, { "title": "Nuestros Valores", "subtitle": "Los principios que gu\xEDan cada decisi\xF3n que tomamos", "columns": 3, "items": [
    {
      title: "Transparencia",
      description: "Comunicaci\xF3n clara y honesta en cada etapa del proyecto. Sin sorpresas, sin letra chica.",
      icon: "tabler:eye"
    },
    {
      title: "Calidad",
      description: "No entregamos c\xF3digo que nosotros mismos no usar\xEDamos. Testing exhaustivo y code reviews constantes.",
      icon: "tabler:certificate"
    },
    {
      title: "Innovaci\xF3n",
      description: "Nos mantenemos actualizados con las \xFAltimas tecnolog\xEDas para ofrecer las mejores soluciones.",
      icon: "tabler:bulb"
    },
    {
      title: "Colaboraci\xF3n",
      description: "Trabajamos codo a codo con nuestros clientes. Tu \xE9xito es nuestro \xE9xito.",
      icon: "tabler:users-group"
    },
    {
      title: "Agilidad",
      description: "Metodolog\xEDas \xE1giles que nos permiten adaptarnos r\xE1pido a cambios y entregar valor constantemente.",
      icon: "tabler:refresh"
    },
    {
      title: "Compromiso",
      description: "Cumplimos plazos, respondemos r\xE1pido y estamos disponibles cuando nos necesitas.",
      icon: "tabler:heart-handshake"
    }
  ] }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div class="absolute inset-0 bg-bg-light dark:bg-transparent"></div> ` })}` })}  ${renderComponent($$result2, "Features2", $$Features2, { "title": "Conoc\xE9 al Equipo", "subtitle": "Los profesionales detr\xE1s de COMMIT", "items": [
    {
      title: "Desarrolladores Full Stack",
      description: "Expertos en frontend y backend, manejan proyectos completos de principio a fin.",
      icon: "tabler:code"
    },
    {
      title: "Dise\xF1adores UX/UI",
      description: "Especializados en crear experiencias de usuario intuitivas y visualmente atractivas.",
      icon: "tabler:palette"
    },
    {
      title: "Arquitectos de Software",
      description: "Dise\xF1an sistemas escalables y robustos que crecen con tu negocio.",
      icon: "tabler:building"
    },
    {
      title: "QA Engineers",
      description: "Garantizan la calidad mediante testing manual y automatizado exhaustivo.",
      icon: "tabler:test-pipe"
    },
    {
      title: "DevOps Engineers",
      description: "Expertos en infraestructura cloud, CI/CD y deployment automatizado.",
      icon: "tabler:server"
    },
    {
      title: "Project Managers",
      description: "Coordinan equipos, tiempos y recursos para entregas exitosas.",
      icon: "tabler:calendar-check"
    }
  ] })}  ${renderComponent($$result2, "Steps", $$Steps, { "id": "metodologia", "title": "Nuestra Metodolog\xEDa de Trabajo", "tagline": "Proceso optimizado", "items": [
    {
      title: "Escuchamos",
      description: "Entendemos tu negocio, tus objetivos y tus usuarios antes de escribir una sola l\xEDnea de c\xF3digo.",
      icon: "tabler:ear"
    },
    {
      title: "Planificamos",
      description: "Creamos roadmaps detallados con hitos claros y estimaciones realistas.",
      icon: "tabler:map"
    },
    {
      title: "Dise\xF1amos",
      description: "Prototipamos y validamos interfaces antes del desarrollo para asegurar usabilidad.",
      icon: "tabler:brush"
    },
    {
      title: "Desarrollamos",
      description: "C\xF3digo limpio, documentado y siguiendo las mejores pr\xE1cticas de la industria.",
      icon: "tabler:code"
    },
    {
      title: "Testeamos",
      description: "Testing exhaustivo en m\xFAltiples dispositivos y navegadores antes de cada release.",
      icon: "tabler:checkbox"
    },
    {
      title: "Acompa\xF1amos",
      description: "Soporte post-lanzamiento, capacitaci\xF3n y evoluci\xF3n continua del producto.",
      icon: "tabler:lifebuoy"
    }
  ] })}  ${renderComponent($$result2, "Content", $$Content, { "title": "Stack Tecnol\xF3gico", "subtitle": "Herramientas y tecnolog\xEDas con las que trabajamos", "items": [
    {
      title: "Frontend Moderno",
      description: "React, Vue, Next.js, Astro, Tailwind CSS, TypeScript",
      icon: "tabler:brand-react"
    },
    {
      title: "Backend Escalable",
      description: "Node.js, Python, .NET, PostgreSQL, MongoDB, Redis",
      icon: "tabler:server"
    },
    {
      title: "Mobile Cross-Platform",
      description: "React Native, Flutter para apps iOS y Android",
      icon: "tabler:device-mobile"
    },
    {
      title: "Cloud & DevOps",
      description: "AWS, Google Cloud, Docker, Kubernetes, CI/CD",
      icon: "tabler:cloud"
    },
    {
      title: "CMS & E-commerce",
      description: "WordPress, Shopify, Strapi, Contentful",
      icon: "tabler:shopping-cart"
    },
    {
      title: "IA & Automatizaci\xF3n",
      description: "OpenAI API, Automation Workflows, ML Models",
      icon: "tabler:robot"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    alt: "Tecnolog\xEDas COMMIT"
  } })}  ${renderComponent($$result2, "Features2", $$Features2, { "title": "\xBFPor Qu\xE9 Elegir COMMIT?", "subtitle": "Lo que nos diferencia de otras agencias", "columns": 2, "items": [
    {
      title: "Equipo Senior",
      description: "Todos nuestros desarrolladores tienen m\xEDnimo 5 a\xF1os de experiencia en proyectos reales.",
      icon: "tabler:users"
    },
    {
      title: "Sin Intermediarios",
      description: "Trabajas directamente con los desarrolladores, no con comerciales o intermediarios.",
      icon: "tabler:phone"
    },
    {
      title: "C\xF3digo Propietario",
      description: "El c\xF3digo es 100% tuyo, sin dependencias ocultas ni licencias restrictivas.",
      icon: "tabler:code"
    },
    {
      title: "Relaci\xF3n Precio-Calidad",
      description: "Calidad de agencia grande, con la flexibilidad y precio de un equipo boutique.",
      icon: "tabler:cash"
    },
    {
      title: "Soporte Continuo",
      description: "No desaparecemos despu\xE9s del lanzamiento. Estamos para mantener y evolucionar tu producto.",
      icon: "tabler:headset"
    },
    {
      title: "Trabajo Remoto Eficiente",
      description: "100% remote-first desde 2020. Herramientas de colaboraci\xF3n que funcionan.",
      icon: "tabler:home"
    }
  ] }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-bg-light dark:bg-transparent"></div> ` })}` })}  ${renderComponent($$result2, "CallToAction", $$CallToAction, { "title": "\xBFQuer\xE9s conocer m\xE1s sobre nosotros?", "subtitle": "Charlemos sobre tu proyecto y c\xF3mo podemos ayudarte a hacerlo realidad.", "actions": [
    {
      variant: "primary",
      text: "Contactanos",
      href: getPermalink("/contact"),
      icon: "tabler:message"
    },
    {
      variant: "secondary",
      text: "Ver Trabajos",
      href: getPermalink("/trabajos")
    }
  ] })} ` })}`;
}, "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/pages/quienes-somos.astro", void 0);

const $$file = "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/pages/quienes-somos.astro";
const $$url = "/quienes-somos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$QuienesSomos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
