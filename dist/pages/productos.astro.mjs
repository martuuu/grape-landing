import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CmDtgPsN.mjs';
import 'kleur/colors';
import { $ as $$PageLayout, b as $$Icon } from '../chunks/PageLayout_BZgvDoRs.mjs';
import { $ as $$CallToAction } from '../chunks/CallToAction_Bwqt2O2Z.mjs';
import { $ as $$LottieAnimation } from '../chunks/LottieAnimation_9D91hftj.mjs';
export { renderers } from '../renderers.mjs';

const $$Productos = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Nuestros Productos | Soluciones Tecnol\xF3gicas Innovadoras",
    description: "Descubr\xED nuestro portafolio de productos: Laneko, Buffet-IA y EventPlanner. Soluciones a medida en HealthTech, LegalTech y gesti\xF3n de eventos.",
    ignoreTitleTemplate: true
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative py-12 md:py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"> <!-- Background nebula effects --> <div class="absolute inset-0 pointer-events-none"> <div class="absolute top-20 right-10 w-96 h-96 bg-commit-lighter/20 rounded-full blur-3xl"></div> <div class="absolute bottom-10 left-10 w-80 h-80 bg-commit-pale/25 rounded-full blur-3xl"></div> </div> <div class="relative max-w-7xl mx-auto px-4 sm:px-6"> <div class="grid lg:grid-cols-2 gap-8 items-center"> <!-- Left: Text Content --> <div> <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-commit/10 text-commit-dark text-sm font-medium mb-6"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:rocket", "class": "w-4 h-4" })}
Nuestros Productos
</div> <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-commit-darkest dark:text-white mb-6">
Soluciones Tecnológicas que Transforman
</h1> <p class="text-lg md:text-xl text-muted mb-8">
De la medicina al derecho y eventos, desarrollamos software que potencia tu negocio con tecnología de vanguardia.
</p> </div> <!-- Right: Animation --> <div class="flex justify-center lg:justify-end"> ${renderComponent($$result2, "LottieAnimation", $$LottieAnimation, { "src": "/animation.json", "class": "w-full max-w-md h-auto" })} </div> </div> </div> </section>  <section id="productos" class="py-12 md:py-20 bg-gray-50 dark:bg-gray-900"> <div class="max-w-7xl mx-auto px-4 sm:px-6"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> <!-- Laneko Card --> <a href="/productos/laneko" class="group block"> <div class="relative h-full rounded-2xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"> <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-commit-lighter to-commit"></div> <!-- Icon Section --> <div class="relative bg-gradient-to-br from-commit-lighter/10 to-commit/10 p-12 flex items-center justify-center border-b border-gray-200 dark:border-gray-700"> <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,174,235,0.08),transparent_70%)]"></div> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:heartbeat", "class": "relative w-24 h-24 text-commit-lighter opacity-80 group-hover:scale-110 transition-transform duration-500" })} </div> <!-- Content Section --> <div class="p-6 flex flex-col"> <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-commit-lighter/10 text-commit-darker text-xs font-medium mb-4 w-fit"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:heartbeat", "class": "w-3.5 h-3.5" })}
HealthTech
</div> <h2 class="text-2xl font-bold font-heading mb-3 group-hover:text-commit-dark transition-colors">Laneko</h2> <p class="text-sm text-muted mb-6 flex-grow">
ERP médico integral para clínicas privadas. Agenda, HCE, Facturación, Stock y más.
</p> <div class="space-y-2 mb-6"> <div class="flex items-center gap-2 text-xs text-muted"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:check", "class": "w-4 h-4 text-commit-lighter flex-shrink-0" })} <span>Agenda + HCE</span> </div> <div class="flex items-center gap-2 text-xs text-muted"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:check", "class": "w-4 h-4 text-commit-lighter flex-shrink-0" })} <span>Portal B2B</span> </div> <div class="flex items-center gap-2 text-xs text-muted"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:check", "class": "w-4 h-4 text-commit-lighter flex-shrink-0" })} <span>Visor DICOM</span> </div> </div> <div class="flex items-center text-commit-lighter font-semibold text-sm group-hover:translate-x-2 transition-transform">
Ver más
${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:arrow-right", "class": "w-4 h-4 ml-2" })} </div> </div> </div> </a> <!-- Buffet-IA Card --> <a href="/productos/buffet-ia" class="group block"> <div class="relative h-full rounded-2xl overflow-hidden bg-gray-900 text-white border border-gray-700 shadow-lg hover:shadow-xl hover:shadow-commit/10 hover:-translate-y-1 transition-all duration-300"> <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-commit to-commit-lighter"></div> <!-- Icon Section --> <div class="relative bg-gray-800 p-12 flex items-center justify-center border-b border-gray-700"> <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(184,61,210,0.08),transparent_70%)]"></div> <div class="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-10"></div> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:robot", "class": "relative w-24 h-24 text-commit opacity-60 group-hover:scale-110 transition-transform duration-500" })} </div> <!-- Content Section --> <div class="p-6 flex flex-col"> <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-commit/20 text-commit-light text-xs font-medium mb-4 w-fit border border-commit/30"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:brain", "class": "w-3.5 h-3.5" })}
LegalTech + AI
</div> <h2 class="text-2xl font-bold font-heading mb-3 group-hover:text-commit-light transition-colors">Buffet-IA</h2> <p class="text-sm text-gray-300 mb-6 flex-grow">
Tu abogado junior con IA privada. Redacción automática y análisis de expedientes.
</p> <div class="space-y-2 mb-6"> <div class="flex items-center gap-2 text-xs text-gray-300"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:check", "class": "w-4 h-4 text-commit-light flex-shrink-0" })} <span>Privacidad Local</span> </div> <div class="flex items-center gap-2 text-xs text-gray-300"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:check", "class": "w-4 h-4 text-commit-light flex-shrink-0" })} <span>RAG Expedientes</span> </div> <div class="flex items-center gap-2 text-xs text-gray-300"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:check", "class": "w-4 h-4 text-commit-light flex-shrink-0" })} <span>Integración MCP</span> </div> </div> <div class="flex items-center text-commit-light font-semibold text-sm group-hover:translate-x-2 transition-transform">
Ver más
${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:arrow-right", "class": "w-4 h-4 ml-2" })} </div> </div> </div> </a> <!-- EventPlanner Card --> <a href="/productos/event-planning" class="group block"> <div class="relative h-full rounded-2xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"> <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-commit-lightest to-commit-light"></div> <!-- Icon Section --> <div class="relative bg-gradient-to-br from-commit-lightest/10 to-commit-light/10 p-12 flex items-center justify-center border-b border-gray-200 dark:border-gray-700"> <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,186,0,0.08),transparent_70%)]"></div> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:glass", "class": "relative w-24 h-24 text-commit-lightest opacity-80 group-hover:scale-110 transition-transform duration-500" })} </div> <!-- Content Section --> <div class="p-6 flex flex-col"> <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-commit-lightest/10 text-commit-dark text-xs font-medium mb-4 w-fit"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:confetti", "class": "w-3.5 h-3.5" })}
Eventos SaaS
</div> <h2 class="text-2xl font-bold font-heading mb-3 group-hover:text-commit-dark transition-colors">EventPlanner</h2> <p class="text-sm text-muted mb-6 flex-grow">
Plataforma integral para Wedding Planners. Seating planner visual y RSVP digital.
</p> <div class="space-y-2 mb-6"> <div class="flex items-center gap-2 text-xs text-muted"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:check", "class": "w-4 h-4 text-commit-lightest flex-shrink-0" })} <span>Seating Drag & Drop</span> </div> <div class="flex items-center gap-2 text-xs text-muted"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:check", "class": "w-4 h-4 text-commit-lightest flex-shrink-0" })} <span>RSVP con QR</span> </div> <div class="flex items-center gap-2 text-xs text-muted"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:check", "class": "w-4 h-4 text-commit-lightest flex-shrink-0" })} <span>Landing Generator</span> </div> </div> <div class="flex items-center text-commit-dark font-semibold text-sm group-hover:translate-x-2 transition-transform">
Ver más
${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:arrow-right", "class": "w-4 h-4 ml-2" })} </div> </div> </div> </a> </div> </div> </section>  ${renderComponent($$result2, "CallToAction", $$CallToAction, { "title": "\xBFTienes una idea?", "subtitle": "Adem\xE1s de nuestros productos, desarrollamos soluciones a medida para tu negocio.", "actions": [
    {
      variant: "primary",
      text: "Solicitar Presupuesto",
      href: "/presupuesto"
    },
    {
      variant: "secondary",
      text: "Ver Servicios",
      href: "/servicios"
    }
  ] })} ` })}`;
}, "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/pages/productos.astro", void 0);

const $$file = "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/pages/productos.astro";
const $$url = "/productos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Productos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
