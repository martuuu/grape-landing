import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, b as addAttribute, F as Fragment, m as maybeRenderHead } from '../chunks/astro/server_CmDtgPsN.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../chunks/PageLayout_BZgvDoRs.mjs';
import { $ as $$Hero } from '../chunks/Hero_DBmV9CNy.mjs';
import { $ as $$Content } from '../chunks/Content_C_ww1jv_.mjs';
import { a as getPermalink } from '../chunks/consts_CmXsJCj0.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image } from '../chunks/_astro_assets_Hs0e_krd.mjs';
import germanImg from '../chunks/german_D0IakYs1.mjs';
import martinImg from '../chunks/martin_BHVekwRv.mjs';
import lanekoImg from '../chunks/laneko-landing_Dso5XjuT.mjs';
import consulImg from '../chunks/consul-dash_CUZLm3Q1.mjs';
import medifarImg from '../chunks/medifar_CODUGkpV.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://commit.agency");
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const metadata = {
    title: "Sobre Nosotros - COMMIT",
    description: "Conoce al equipo de COMMIT. Agencia de desarrollo de software con experiencia en startups y empresas. Metodolog\xEDas \xE1giles y tecnolog\xEDas modernas.",
    keywords: ["equipo desarrollo", "agencia software", "sobre nosotros", "metodolog\xEDa \xE1gil"],
    canonical: "https://commit.agency/about",
    openGraph: {
      title: "Sobre Nosotros | COMMIT",
      description: "Equipo de desarrollo con m\xE1s de 10 a\xF1os de experiencia creando soluciones digitales innovadoras.",
      type: "website",
      url: "https://commit.agency/about"
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "id": "agency", "tagline": "Sobre Nosotros" }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate`
Somos un equipo apasionado de desarrolladores, diseñadores y estrategas digitales 
      comprometidos con crear soluciones que generen impacto real en los negocios de nuestros clientes.
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
Transformamos ${maybeRenderHead()}<span class="text-accent dark:text-white">ideas</span> en <br> <span class="text-accent dark:text-white">experiencias digitales</span> ` })}` })} ${renderComponent($$result2, "Content", $$Content, { "id": "history", "isReversed": true, "image": {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Equipo COMMIT trabajando"
  } }, { "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h2 class="text-3xl font-bold tracking-tight sm:text-4xl mb-2">Nuestra Historia</h2> <p class="text-muted dark:text-slate-400 text-lg">
COMMIT nació de la visión de crear una agencia diferente: una donde la calidad, 
        la transparencia y el compromiso con el cliente fueran más que palabras. 
        Comenzamos como un equipo pequeño de desarrolladores apasionados y hemos crecido 
        orgánicamente, proyecto a proyecto, manteniendo siempre nuestros valores fundamentales.
</p> <br> <p class="text-muted dark:text-slate-400 text-lg">
A lo largo de estos años, hemos tenido el privilegio de trabajar con empresas de diversos 
        rubros: desde e-commerce y fintech hasta educación y salud. Con más de 10 años de experiencia 
        y más de 50 proyectos completados, trabajamos con las tecnologías de punta para ofrecer 
        soluciones modernas y escalables que generan impacto real.
</p> ` })}` })} <section id="team" class="py-16 md:py-20"> <div class="max-w-7xl mx-auto px-4 sm:px-6"> <div class="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16"> <div class="text-center"> <div class="relative inline-block mb-4"> ${renderComponent($$result2, "Image", $$Image, { "src": germanImg, "alt": "German Distel - CTO", "class": "w-48 h-48 rounded-full object-cover mx-auto border-4 border-commit-light/20", "width": 192, "height": 192 })} </div> <h3 class="text-xl font-bold mb-1">German Distel</h3> <p class="text-commit-medium font-medium mb-2">CTO</p> </div> <div class="text-center"> <div class="relative inline-block mb-4"> ${renderComponent($$result2, "Image", $$Image, { "src": martinImg, "alt": "Martin Navarro - CEO", "class": "w-48 h-48 rounded-full object-cover mx-auto border-4 border-commit-light/20", "width": 192, "height": 192 })} </div> <h3 class="text-xl font-bold mb-1">Martin Navarro</h3> <p class="text-commit-medium font-medium mb-2">CEO</p> </div> </div> <div class="mt-16"> <h3 class="text-2xl font-bold text-center mb-8">Áreas de Expertise</h3> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6"> <div class="text-center p-6 rounded-lg bg-commit-pale/5 dark:bg-slate-800"> <div class="text-commit-light text-4xl mb-3">⚡</div> <h4 class="font-bold mb-2">Full Stack Development</h4> <p class="text-sm text-muted dark:text-slate-400">React, Node.js, Python, Next.js</p> </div> <div class="text-center p-6 rounded-lg bg-commit-pale/5 dark:bg-slate-800"> <div class="text-commit-light text-4xl mb-3">📱</div> <h4 class="font-bold mb-2">Mobile Development</h4> <p class="text-sm text-muted dark:text-slate-400">React Native, Flutter, PWAs</p> </div> <div class="text-center p-6 rounded-lg bg-commit-pale/5 dark:bg-slate-800"> <div class="text-commit-light text-4xl mb-3">☁️</div> <h4 class="font-bold mb-2">Cloud & DevOps</h4> <p class="text-sm text-muted dark:text-slate-400">AWS, GCP, Docker, Kubernetes</p> </div> <div class="text-center p-6 rounded-lg bg-commit-pale/5 dark:bg-slate-800"> <div class="text-commit-light text-4xl mb-3">🎨</div> <h4 class="font-bold mb-2">UX/UI Design</h4> <p class="text-sm text-muted dark:text-slate-400">Figma, Design Systems, Branding</p> </div> </div> </div> </div> </section> <section id="work" class="py-16 md:py-20 bg-commit-darkest/5 dark:bg-slate-900"> <div class="max-w-7xl mx-auto px-4 sm:px-6"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-4">Proyectos Destacados</h2> <p class="text-xl text-muted dark:text-slate-400 max-w-3xl mx-auto">
Algunos de los proyectos que nos enorgullecen y que demuestran nuestra capacidad
</p> </div> <div class="grid md:grid-cols-2 gap-8"> <div class="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"> ${renderComponent($$result2, "Image", $$Image, { "src": lanekoImg, "alt": "Laneko - Sistema de gesti\xF3n para Medicina Laboral", "class": "w-full h-64 object-cover", "width": 800, "height": 256 })} <div class="p-6"> <div class="flex items-center gap-2 mb-3"> <span class="px-3 py-1 bg-commit-light/10 text-commit-medium text-xs font-medium rounded-full">Healthcare</span> <span class="px-3 py-1 bg-commit-light/10 text-commit-medium text-xs font-medium rounded-full">SaaS</span> </div> <h3 class="text-xl font-bold mb-2">Laneko</h3> <p class="text-muted dark:text-slate-400 mb-4">
Sistema de gestión integral para empresa de Medicina Laboral. Plataforma completa para manejo de pacientes, 
              estudios médicos y reporting.
</p> <div class="flex items-center gap-4 text-sm text-muted"> <span>⚡ React + Node.js</span> <span>🏥 Healthcare</span> </div> </div> </div> <div class="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"> ${renderComponent($$result2, "Image", $$Image, { "src": consulImg, "alt": "Consultorio Online - SaaS para profesionales de la salud", "class": "w-full h-64 object-cover", "width": 800, "height": 256 })} <div class="p-6"> <div class="flex items-center gap-2 mb-3"> <span class="px-3 py-1 bg-commit-light/10 text-commit-medium text-xs font-medium rounded-full">SaaS</span> <span class="px-3 py-1 bg-commit-light/10 text-commit-medium text-xs font-medium rounded-full">Healthcare</span> </div> <h3 class="text-xl font-bold mb-2">Consultorio Online</h3> <p class="text-muted dark:text-slate-400 mb-4">
SaaS para profesionales de la salud, enfocado en el manejo de consultorios y clínicas para médicos. 
              Gestión de turnos, pacientes y facturación.
</p> <div class="flex items-center gap-4 text-sm text-muted"> <span>📊 Next.js + Python</span> <span>☁️ Cloud Infrastructure</span> </div> </div> </div> <div class="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"> ${renderComponent($$result2, "Image", $$Image, { "src": medifarImg, "alt": "Medifar - Marketing landing", "class": "w-full h-64 object-cover", "width": 800, "height": 256 })} <div class="p-6"> <div class="flex items-center gap-2 mb-3"> <span class="px-3 py-1 bg-commit-light/10 text-commit-medium text-xs font-medium rounded-full">Marketing</span> <span class="px-3 py-1 bg-commit-light/10 text-commit-medium text-xs font-medium rounded-full">Landing</span> </div> <h3 class="text-xl font-bold mb-2">Medifar</h3> <p class="text-muted dark:text-slate-400 mb-4">
Marketing landing para empresa de venta de insumos hospitalarios. 
              Diseño moderno y optimizado para conversión.
</p> <div class="flex items-center gap-4 text-sm text-muted"> <span>🎨 Astro + Tailwind</span> <span>⚡ High Performance</span> </div> </div> </div> <div class="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"> <div class="w-full h-64 bg-gradient-to-br from-commit-light to-commit-dark flex items-center justify-center"> <span class="text-white text-6xl font-bold">Picky</span> </div> <div class="p-6"> <div class="flex items-center gap-2 mb-3"> <span class="px-3 py-1 bg-commit-light/10 text-commit-medium text-xs font-medium rounded-full">E-commerce</span> <span class="px-3 py-1 bg-commit-light/10 text-commit-medium text-xs font-medium rounded-full">Mobile</span> </div> <h3 class="text-xl font-bold mb-2">Picky</h3> <p class="text-muted dark:text-slate-400 mb-4">
Sistema integral para tiendas y mayoristas, revolucionario por su sistema de compra en local 
              a través de celular. Experiencia de compra innovadora.
</p> <div class="flex items-center gap-4 text-sm text-muted"> <span>📱 React Native</span> <span>🛒 E-commerce Innovation</span> </div> </div> </div> </div> <div class="text-center mt-12"> <a${addAttribute(getPermalink("/contact"), "href")} class="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-commit-light hover:bg-commit-lighter rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105">
¿Tienes un proyecto en mente?
<svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path> </svg> </a> </div> </div> </section> ` })}`;
}, "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/pages/about.astro", void 0);

const $$file = "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
