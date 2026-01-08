import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute, F as Fragment } from '../../chunks/astro/server_CmDtgPsN.mjs';
import 'kleur/colors';
import { $ as $$PageLayout, b as $$Icon } from '../../chunks/PageLayout_BZgvDoRs.mjs';
import { $ as $$Features } from '../../chunks/Features_2pWlyopA.mjs';
import { $ as $$Content } from '../../chunks/Content_C_ww1jv_.mjs';
import { $ as $$Steps } from '../../chunks/Steps_DutvRy0o.mjs';
import { $ as $$CallToAction } from '../../chunks/CallToAction_Bwqt2O2Z.mjs';
import { a as getPermalink } from '../../chunks/consts_CmXsJCj0.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://commit.agency");
const $$MarketingLandings = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarketingLandings;
  const metadata = {
    title: "Marketing & Landings - Servicios COMMIT",
    description: "Creamos landing pages y campa\xF1as de marketing digital que convierten visitantes en clientes."
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`   ${maybeRenderHead()}<section class="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-white to-commit-pale/20 dark:from-gray-900 dark:to-commit-darkest"> <div class="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none"> <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-commit-lighter/30 rounded-full blur-[100px]"></div> <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-commit-light/25 rounded-full blur-[120px]"></div> <div class="absolute top-1/2 right-1/4 w-80 h-80 bg-commit/20 rounded-full blur-[100px]"></div> </div> <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center"> <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-commit-lighter/20 border border-commit-lighter/40 text-commit-darker dark:text-commit-light text-sm font-medium mb-8"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:rocket", "class": "w-5 h-5" })}
Marketing Digital
</div> <h1 class="text-4xl md:text-7xl font-bold font-heading leading-tight mb-8">
Landings que <br> <span class="text-transparent bg-clip-text bg-gradient-to-r from-commit-darker via-commit to-commit-light">Convierten</span> </h1> <p class="text-lg md:text-xl text-muted dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
Diseñamos y desarrollamos landing pages optimizadas para maximizar tus conversiones y potenciar tu presencia digital.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a${addAttribute(getPermalink("/presupuestos"), "href")} class="px-8 py-4 bg-gradient-commit text-white font-bold rounded-xl shadow-lg shadow-commit/30 hover:scale-105 transition-transform">
Solicitar Presupuesto
</a> <a${addAttribute(getPermalink("/trabajos"), "href")} class="px-8 py-4 bg-white dark:bg-gray-800 border-2 border-commit-light dark:border-gray-700 font-bold rounded-xl hover:bg-commit-pale/20 dark:hover:bg-gray-700 transition-colors">
Ver Trabajos
</a> </div> </div> </section>  ${renderComponent($$result2, "Content", $$Content, { "isReversed": true, "items": [
    {
      title: "Marketing Landings & Webapps",
      description: "Dise\xF1amos y desarrollamos landing pages optimizadas para conversi\xF3n que capturan la atenci\xF3n de tus visitantes y los gu\xEDan hacia la acci\xF3n.",
      icon: "tabler:rocket"
    },
    {
      title: "Web applications modernas",
      description: "Creamos aplicaciones web escalables y performantes utilizando las \xFAltimas tecnolog\xEDas como React, Next.js, Astro y m\xE1s.",
      icon: "tabler:apps"
    },
    {
      title: "Dise\xF1o centrado en conversi\xF3n",
      description: "Cada elemento est\xE1 estrat\xE9gicamente ubicado para maximizar las conversiones, desde CTAs efectivos hasta formularios optimizados.",
      icon: "tabler:target"
    },
    {
      title: "SEO y Analytics integrados",
      description: "Implementamos las mejores pr\xE1cticas de SEO desde el inicio y configuramos analytics para que puedas medir el \xE9xito de tu sitio.",
      icon: "tabler:chart-line"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
    alt: "Marketing Digital"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">
Tu presencia digital que convierte
</h3>
Transformamos visitantes en clientes con diseño estratégico y tecnología de
      punta
` })}` })}  ${renderComponent($$result2, "Features", $$Features, { "id": "features", "title": "\xBFQu\xE9 incluye este servicio?", "subtitle": "Todo lo que necesitas para lanzar campa\xF1as exitosas", "columns": 3, "items": [
    {
      title: "Dise\xF1o Orientado a Conversi\xF3n",
      description: "Dise\xF1os probados que gu\xEDan al usuario hacia la acci\xF3n deseada, con llamados a la acci\xF3n estrat\xE9gicos.",
      icon: "tabler:target"
    },
    {
      title: "Optimizaci\xF3n SEO",
      description: "Landing pages optimizadas para motores de b\xFAsqueda, mejorando tu visibilidad org\xE1nica.",
      icon: "tabler:seo"
    },
    {
      title: "Responsive Design",
      description: "Dise\xF1os que se adaptan perfectamente a cualquier dispositivo: m\xF3vil, tablet o desktop.",
      icon: "tabler:device-mobile"
    },
    {
      title: "Carga Ultrarr\xE1pida",
      description: "Optimizaci\xF3n de rendimiento para tiempos de carga m\xEDnimos, mejorando la experiencia del usuario.",
      icon: "tabler:rocket"
    },
    {
      title: "Integraci\xF3n con Analytics",
      description: "Configuraci\xF3n completa de Google Analytics y herramientas de seguimiento para medir resultados.",
      icon: "tabler:chart-line"
    },
    {
      title: "A/B Testing",
      description: "Implementaci\xF3n de herramientas para probar diferentes versiones y optimizar conversiones.",
      icon: "tabler:a-b-2"
    }
  ] }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-transparent"></div> ` })}` })}  ${renderComponent($$result2, "Steps", $$Steps, { "id": "proceso", "title": "Nuestro Proceso de Trabajo", "tagline": "Metodolog\xEDa comprobada", "items": [
    {
      title: "1. Descubrimiento",
      description: "Analizamos tu negocio, p\xFAblico objetivo y objetivos de conversi\xF3n para crear una estrategia efectiva.",
      icon: "tabler:search"
    },
    {
      title: "2. Dise\xF1o y Prototipo",
      description: "Creamos wireframes y dise\xF1os visuales que maximizan la conversi\xF3n, validando con tu equipo.",
      icon: "tabler:palette"
    },
    {
      title: "3. Desarrollo",
      description: "Desarrollamos tu landing con las \xFAltimas tecnolog\xEDas, asegurando rendimiento y compatibilidad.",
      icon: "tabler:code"
    },
    {
      title: "4. Optimizaci\xF3n",
      description: "Configuramos analytics, implementamos SEO t\xE9cnico y optimizamos para conversiones.",
      icon: "tabler:adjustments"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
    alt: "Proceso de Marketing Digital"
  } })}  <section class="py-20 bg-gray-50 dark:bg-gray-900"> <div class="max-w-7xl mx-auto px-4 sm:px-6"> <div class="text-center mb-16"> <h2 class="text-3xl font-bold font-heading mb-4">Tipos de Landing Pages</h2> <p class="text-xl text-muted dark:text-gray-400">Soluciones adaptadas a tus necesidades</p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> <!-- Card 1 --> <div class="relative group"> <div class="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-indigo-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> <div class="relative bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full"> <div class="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:user-plus", "class": "w-6 h-6 text-blue-600 dark:text-blue-400" })} </div> <h3 class="text-xl font-bold mb-3">Landing de Captación</h3> <p class="text-muted dark:text-gray-400">
Páginas diseñadas para captar leads con formularios optimizados y ofertas irresistibles.
</p> </div> </div> <!-- Card 2 --> <div class="relative group"> <div class="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> <div class="relative bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full"> <div class="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-6"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:package", "class": "w-6 h-6 text-purple-600 dark:text-purple-400" })} </div> <h3 class="text-xl font-bold mb-3">Landing de Producto</h3> <p class="text-muted dark:text-gray-400">
Presentación detallada de productos o servicios con focus en beneficios y características.
</p> </div> </div> <!-- Card 3 --> <div class="relative group"> <div class="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-yellow-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> <div class="relative bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full"> <div class="w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-6"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:calendar-event", "class": "w-6 h-6 text-orange-600 dark:text-orange-400" })} </div> <h3 class="text-xl font-bold mb-3">Landing de Evento</h3> <p class="text-muted dark:text-gray-400">
Páginas para promocionar eventos, webinars o lanzamientos con registro integrado.
</p> </div> </div> <!-- Card 4 --> <div class="relative group"> <div class="absolute inset-0 bg-gradient-to-r from-green-500/30 to-emerald-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> <div class="relative bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full"> <div class="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:download", "class": "w-6 h-6 text-green-600 dark:text-green-400" })} </div> <h3 class="text-xl font-bold mb-3">Landing de Descarga</h3> <p class="text-muted dark:text-gray-400">
Optimizadas para descargas de apps, ebooks, whitepapers u otros recursos digitales.
</p> </div> </div> <!-- Card 5 --> <div class="relative group"> <div class="absolute inset-0 bg-gradient-to-r from-red-500/30 to-rose-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> <div class="relative bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full"> <div class="w-12 h-12 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-6"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:ad", "class": "w-6 h-6 text-red-600 dark:text-red-400" })} </div> <h3 class="text-xl font-bold mb-3">Landing de Campaña</h3> <p class="text-muted dark:text-gray-400">
Páginas para campañas específicas de Google Ads, Facebook Ads o email marketing.
</p> </div> </div> <!-- Card 6 --> <div class="relative group"> <div class="absolute inset-0 bg-gradient-to-r from-teal-500/30 to-cyan-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> <div class="relative bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full"> <div class="w-12 h-12 rounded-lg bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mb-6"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:cash", "class": "w-6 h-6 text-teal-600 dark:text-teal-400" })} </div> <h3 class="text-xl font-bold mb-3">Landing de Ventas</h3> <p class="text-muted dark:text-gray-400">
Long-form sales pages con storytelling persuasivo para productos de alto valor.
</p> </div> </div> </div> </div> </section>  ${renderComponent($$result2, "Content", $$Content, { "isReversed": true, "title": "Tecnolog\xEDas de Vanguardia", "subtitle": "Trabajamos con las herramientas m\xE1s modernas y eficientes", "items": [
    {
      title: "Astro & Next.js",
      description: "Frameworks modernos para sitios ultra-r\xE1pidos y optimizados.",
      icon: "tabler:brand-astro"
    },
    {
      title: "Tailwind CSS",
      description: "Dise\xF1os \xFAnicos y responsivos con el mejor framework de CSS.",
      icon: "tabler:brand-tailwind"
    },
    {
      title: "WordPress & Webflow",
      description: "Para clientes que necesitan gesti\xF3n de contenido simplificada.",
      icon: "tabler:brand-wordpress"
    },
    {
      title: "Google Analytics & Tag Manager",
      description: "Seguimiento completo de conversiones y comportamiento de usuarios.",
      icon: "tabler:chart-dots"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    alt: "Tecnolog\xEDas de Marketing"
  } })}  ${renderComponent($$result2, "Content", $$Content, { "title": "Resultados Medibles", "subtitle": "M\xE9tricas que importan para tu negocio", "isAfterContent": true, "items": [
    {
      title: "Mayor Tasa de Conversi\xF3n",
      description: "Aumenta tus conversiones entre 30% y 200% con dise\xF1os optimizados.",
      icon: "tabler:trending-up"
    },
    {
      title: "Menor Costo por Adquisici\xF3n",
      description: "Reduce el CPA de tus campa\xF1as con landings de alto rendimiento.",
      icon: "tabler:coin"
    },
    {
      title: "Mejor ROI Publicitario",
      description: "Maximiza el retorno de inversi\xF3n de tus campa\xF1as de Google Ads y Facebook Ads.",
      icon: "tabler:percentage"
    },
    {
      title: "Datos Accionables",
      description: "Dashboards y reportes para tomar decisiones basadas en datos reales.",
      icon: "tabler:report-analytics"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Resultados Analytics"
  } })}  ${renderComponent($$result2, "CallToAction", $$CallToAction, { "title": "\xBFListo para mejorar tus conversiones?", "subtitle": "Conversemos sobre tu proyecto y c\xF3mo podemos ayudarte a alcanzar tus objetivos de marketing digital.", "actions": [
    {
      variant: "primary",
      text: "Solicitar Presupuesto",
      href: getPermalink("/presupuestos"),
      icon: "tabler:rocket"
    },
    {
      variant: "secondary",
      text: "Ver Trabajos",
      href: getPermalink("/trabajos")
    }
  ] })} ` })}`;
}, "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/pages/servicios/marketing-landings.astro", void 0);

const $$file = "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/pages/servicios/marketing-landings.astro";
const $$url = "/servicios/marketing-landings";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MarketingLandings,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
