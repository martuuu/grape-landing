import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CmDtgPsN.mjs';
import 'kleur/colors';
import { $ as $$PageLayout, b as $$Icon } from '../../chunks/PageLayout_BZgvDoRs.mjs';
import { $ as $$PremiumCard } from '../../chunks/PremiumCard_BCF4Idio.mjs';
import { $ as $$CallToAction } from '../../chunks/CallToAction_Bwqt2O2Z.mjs';
export { renderers } from '../../renderers.mjs';

const $$EventPlanning = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "EventPlanner - Gesti\xF3n de Eventos SaaS | COMMIT",
    description: "Plataforma integral para Wedding Planners y Eventos Corporativos. Seating planner, RSVP digital y landings personalizadas."
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-commit-lightest/20 to-white dark:from-gray-900 dark:to-commit-darkest"> <div class="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none"> <!-- Confetti/Celebration abstract elements --> <div class="absolute top-10 left-10 w-20 h-20 bg-commit-lightest/30 rounded-full blur-xl"></div> <div class="absolute top-40 right-20 w-32 h-32 bg-commit-lighter/25 rounded-full blur-xl"></div> <div class="absolute bottom-20 left-1/3 w-40 h-40 bg-commit-light/20 rounded-full blur-xl"></div> <div class="absolute top-1/2 right-10 w-28 h-28 bg-commit/15 rounded-full blur-xl"></div> </div> <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center"> <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-commit-lightest/30 border border-commit-lightest/40 text-commit-darker dark:text-commit-light text-sm font-medium mb-6"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:confetti", "class": "w-4 h-4" })}
SaaS para Eventos
</div> <h1 class="text-4xl md:text-7xl font-bold font-heading leading-tight mb-6">
Crea Experiencias <br> <span class="text-transparent bg-clip-text bg-gradient-to-r from-commit to-commit-lighter">Inolvidables</span> </h1> <p class="text-lg md:text-xl text-muted mb-10 max-w-3xl mx-auto leading-relaxed">
La plataforma todo-en-uno para Wedding Planners y Organizadores Corporativos. 
        Desde la invitación digital hasta la distribución de mesas, todo en un solo lugar.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="#contacto" class="px-8 py-4 bg-gradient-commit text-white font-bold rounded-xl shadow-lg shadow-commit/20 hover:scale-105 transition-transform">
Empezar Ahora
</a> <a href="#features" class="px-8 py-4 bg-white dark:bg-gray-800 border-2 border-commit-light dark:border-gray-700 font-bold rounded-xl hover:bg-commit-pale/20 dark:hover:bg-gray-700 transition-colors">
Explorar Features
</a> </div> <!-- Hero Image Placeholder --> <div class="mt-16 relative mx-auto max-w-5xl rounded-2xl shadow-2xl overflow-hidden border-4 border-white dark:border-gray-800"> <div class="aspect-video bg-gray-100 dark:bg-gray-800 flex items-center justify-center relative"> <div class="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900"></div> <div class="text-center z-10"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:layout", "class": "w-20 h-20 text-commit-light mx-auto mb-4 opacity-50" })} <p class="text-muted font-medium">Dashboard de Eventos</p> </div> </div> </div> </div> </section>  <section id="features" class="py-20 bg-white dark:bg-gray-900"> <div class="max-w-7xl mx-auto px-4 sm:px-6"> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> ${renderComponent($$result2, "PremiumCard", $$PremiumCard, { "title": "Seating Planner Visual", "description": "Distribuye invitados en mesas con una interfaz Drag & Drop intuitiva. Visualiza v\xEDnculos y restricciones alimentarias al instante.", "icon": "tabler:armchair-2", "gradient": "yellow", "tags": ["Drag & Drop", "Gesti\xF3n de Mesas"] })} ${renderComponent($$result2, "PremiumCard", $$PremiumCard, { "title": "RSVP Digital & QR", "description": "Invitaciones digitales con formulario de confirmaci\xF3n integrado. Check-in r\xE1pido en el evento mediante escaneo de QR.", "icon": "tabler:qrcode", "gradient": "red", "tags": ["Check-in", "Invitaciones"] })} ${renderComponent($$result2, "PremiumCard", $$PremiumCard, { "title": "Landing Page Generator", "description": "Crea autom\xE1ticamente una web para el evento con historia, mapa, cuenta regresiva y lista de regalos.", "icon": "tabler:wand", "gradient": "purple", "tags": ["Web Autom\xE1tica", "Personalizable"] })} ${renderComponent($$result2, "PremiumCard", $$PremiumCard, { "title": "Gesti\xF3n de Invitados", "description": "Base de datos centralizada. Importaci\xF3n masiva, etiquetas (VIP, Novio, Novia) y seguimiento de estados.", "icon": "tabler:users", "gradient": "blue", "tags": ["CRM", "Importaci\xF3n Excel"] })} ${renderComponent($$result2, "PremiumCard", $$PremiumCard, { "title": "Timeline del Evento", "description": "Agenda minuto a minuto compartida con proveedores e invitados. Que nadie se pierda el momento del brindis.", "icon": "tabler:clock", "gradient": "yellow", "tags": ["Agenda", "Coordinaci\xF3n"] })} ${renderComponent($$result2, "PremiumCard", $$PremiumCard, { "title": "Multi-Tenant SaaS", "description": "Panel de control para organizadores que gestionan m\xFAltiples eventos simult\xE1neamente. Todo separado y organizado.", "icon": "tabler:building", "gradient": "red", "tags": ["Agencias", "Escalable"] })} </div> </div> </section>  <section class="py-20 bg-gray-50 dark:bg-gray-800/50"> <div class="max-w-7xl mx-auto px-4 sm:px-6"> <div class="grid md:grid-cols-2 gap-16 items-center"> <div class="order-2 md:order-1"> <div class="relative mx-auto w-64 h-[500px] bg-gray-900 rounded-[3rem] shadow-2xl border-8 border-gray-800 overflow-hidden"> <!-- Mobile Screen Mockup --> <div class="absolute top-0 left-0 w-full h-full bg-white dark:bg-gray-900 flex flex-col"> <div class="h-32 bg-commit-lighter/20 flex items-end p-4 pb-2"> <div class="w-12 h-12 rounded-full bg-white shadow-sm"></div> </div> <div class="p-4 space-y-4"> <div class="h-8 bg-gray-100 dark:bg-gray-800 rounded w-3/4"></div> <div class="h-4 bg-gray-50 dark:bg-gray-800/50 rounded w-full"></div> <div class="h-4 bg-gray-50 dark:bg-gray-800/50 rounded w-5/6"></div> <div class="mt-8 p-4 bg-commit-lightest/20 rounded-xl border border-commit-light/30 text-center"> <span class="text-commit-darker font-bold">Confirmar Asistencia</span> </div> </div> </div> </div> </div> <div class="order-1 md:order-2"> <h2 class="text-3xl md:text-4xl font-bold font-heading mb-6">Experiencia Móvil Perfecta</h2> <p class="text-muted text-lg mb-8">
Tus invitados viven en sus teléfonos. Dales una experiencia fluida desde la recepción de la invitación hasta el día de la fiesta.
</p> <ul class="space-y-6"> <li class="flex items-start gap-4"> <div class="w-12 h-12 rounded-xl bg-commit-lighter/20 flex items-center justify-center flex-shrink-0 text-commit"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:device-mobile", "class": "w-6 h-6" })} </div> <div> <h4 class="font-bold text-lg">Invitaciones por WhatsApp</h4> <p class="text-muted">Envía links personalizados directamente a sus chats favoritos.</p> </div> </li> <li class="flex items-start gap-4"> <div class="w-12 h-12 rounded-xl bg-commit-light/20 flex items-center justify-center flex-shrink-0 text-commit-light"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:map-pin", "class": "w-6 h-6" })} </div> <div> <h4 class="font-bold text-lg">Integración con Mapas</h4> <p class="text-muted">"Cómo llegar" con un solo clic usando Google Maps o Waze.</p> </div> </li> </ul> </div> </div> </div> </section>  <div id="contacto"> ${renderComponent($$result2, "CallToAction", $$CallToAction, { "title": "Organiza Eventos de Otro Nivel", "subtitle": "La herramienta que los profesionales estaban esperando.", "actions": [
    {
      variant: "primary",
      text: "Solicitar Demo",
      href: "/contact",
      icon: "tabler:calendar-plus"
    },
    {
      variant: "secondary",
      text: "Volver a Productos",
      href: "/productos"
    }
  ] })} </div> ` })}`;
}, "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/pages/productos/event-planning.astro", void 0);

const $$file = "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/pages/productos/event-planning.astro";
const $$url = "/productos/event-planning";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$EventPlanning,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
