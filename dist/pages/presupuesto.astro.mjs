import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CmDtgPsN.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../chunks/PageLayout_BZgvDoRs.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { $ as $$Button } from '../chunks/Button_dtm-42uk.mjs';
export { renderers } from '../renderers.mjs';

function BudgetBuilder() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selections, setSelections] = useState({
    basics: [],
    type: "",
    modules: []
  });
  const totalSteps = 4;
  const nextStep = () => {
    if (currentStep === 2 && !selections.type) {
      alert("Por favor selecciona un tipo de proyecto");
      return;
    }
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  const handleCheckboxChange = (name, value, checked) => {
    setSelections((prev) => ({
      ...prev,
      [name]: checked ? [...prev[name], value] : prev[name].filter((v) => v !== value)
    }));
  };
  const handleRadioChange = (value) => {
    setSelections((prev) => ({ ...prev, type: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      ...Object.fromEntries(formData),
      selections
    };
    console.log("Budget request:", data);
    alert("¡Gracias! Nos pondremos en contacto contigo pronto con tu presupuesto personalizado.");
  };
  const summaryLabels = {
    basics: {
      branding: "Branding",
      designs: "Diseños UI/UX",
      domain: "Dominio",
      cloud: "Servicios Cloud"
    },
    type: {
      landing: "Landing Page / Sitio Web",
      app: "Aplicación Web/Móvil",
      both: "Desarrollo 100% Personalizado (Landing + App)"
    },
    modules: {
      ecommerce: "E-commerce",
      scheduling: "Turnero/Agenda",
      admin: "Panel Admin",
      medical: "Historial Médico",
      events: "Eventos",
      legal: "Paquete Jurídico"
    }
  };
  const progress = currentStep / totalSteps * 100;
  return /* @__PURE__ */ jsxs("div", { className: "budget-builder-container", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 py-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between mb-2", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium text-muted", children: [
            "Paso ",
            currentStep,
            " de 4"
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium text-commit", children: [
            Math.round(progress),
            "%"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx(
          "div",
          {
            className: "h-full bg-gradient-commit transition-all duration-300",
            style: { width: `${progress}%` }
          }
        ) })
      ] }),
      currentStep === 1 && /* @__PURE__ */ jsxs("div", { className: "step-content space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold font-heading mb-2", children: "¿Qué tenés ya preparado?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted", children: "Esto nos ayuda a entender desde dónde partimos y ajustar el presupuesto" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          { value: "branding", emoji: "🎨", title: "Branding Definido", desc: "Ya tengo logo, colores corporativos e identidad visual", color: "commit" },
          { value: "designs", emoji: "📐", title: "Diseños UI/UX", desc: "Tengo mockups o wireframes del proyecto", color: "commit-light" },
          { value: "domain", emoji: "🌐", title: "Dominio Registrado", desc: "Ya tengo un dominio (.com, .com.ar, etc.)", color: "commit-lighter" },
          { value: "cloud", emoji: "☁️", title: "Servicios Cloud", desc: "Tengo hosting, base de datos o servicios configurados", color: "commit-dark" }
        ].map((option) => /* @__PURE__ */ jsxs("label", { className: "option-card cursor-pointer", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "checkbox",
              className: "hidden",
              value: option.value,
              checked: selections.basics.includes(option.value),
              onChange: (e) => handleCheckboxChange("basics", option.value, e.target.checked)
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: `p-6 rounded-xl border-2 transition-all duration-300 ${selections.basics.includes(option.value) ? "border-commit bg-commit/5 scale-[1.02]" : "border-gray-200 dark:border-gray-700 hover:border-commit/50 hover:bg-commit/5"}`, children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-4", children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-lg bg-commit/10 flex items-center justify-center text-2xl", children: option.emoji }),
              selections.basics.includes(option.value) && /* @__PURE__ */ jsx("div", { className: "text-commit text-2xl transition-transform duration-300 scale-110", children: "✓" })
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "font-bold mb-2", children: option.title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted", children: option.desc })
          ] })
        ] }, option.value)) })
      ] }),
      currentStep === 2 && /* @__PURE__ */ jsxs("div", { className: "step-content space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold font-heading mb-2", children: "¿Qué tipo de proyecto necesitás?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted", children: "Seleccioná la opción que mejor describa tu necesidad" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [
          { value: "landing", emoji: "📄", title: "Landing Page / Sitio Web", desc: "Una página de presentación para tu producto o servicio. Ideal para marketing, conversión y presencia online." },
          { value: "app", emoji: "📱", title: "Aplicación Web/Móvil", desc: "Un sistema completo con usuarios, base de datos y funcionalidades avanzadas. Para gestión interna o servicios digitales." },
          { value: "both", emoji: "🚀", title: "Desarrollo 100% Personalizado (Landing + App)", desc: "Una landing page para marketing y captación, más una aplicación para el servicio. La solución completa." }
        ].map((option) => /* @__PURE__ */ jsxs("label", { className: "option-card cursor-pointer block", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "radio",
              className: "hidden",
              name: "project-type",
              value: option.value,
              checked: selections.type === option.value,
              onChange: () => handleRadioChange(option.value)
            }
          ),
          /* @__PURE__ */ jsx("div", { className: `p-6 rounded-xl border-2 transition-all duration-300 ${selections.type === option.value ? "border-commit bg-commit/5 scale-[1.02]" : "border-gray-200 dark:border-gray-700 hover:border-commit/50 hover:bg-commit/5"}`, children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: `w-14 h-14 rounded-lg ${option.value === "both" ? "bg-gradient-commit text-white" : "bg-commit/10"} flex items-center justify-center flex-shrink-0 text-3xl`, children: option.emoji }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-bold mb-1 text-lg", children: option.title }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted", children: option.desc })
            ] }),
            selections.type === option.value && /* @__PURE__ */ jsx("div", { className: "text-commit text-2xl transition-transform duration-300 scale-110", children: "✓" })
          ] }) })
        ] }, option.value)) })
      ] }),
      currentStep === 3 && /* @__PURE__ */ jsxs("div", { className: "step-content space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold font-heading mb-2", children: "¿Qué funcionalidades necesitás?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted", children: "Seleccioná todos los módulos que tu proyecto requiera" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-4", children: [
          { value: "ecommerce", emoji: "🛒", title: "E-commerce" },
          { value: "scheduling", emoji: "📅", title: "Turnero/Agenda" },
          { value: "admin", emoji: "⚙️", title: "Panel Admin" },
          { value: "medical", emoji: "🏥", title: "Historial Médico" },
          { value: "events", emoji: "🎉", title: "Eventos" },
          { value: "legal", emoji: "⚖️", title: "Paquete Jurídico" }
        ].map((option) => /* @__PURE__ */ jsxs("label", { className: "option-card cursor-pointer", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "checkbox",
              className: "hidden",
              value: option.value,
              checked: selections.modules.includes(option.value),
              onChange: (e) => handleCheckboxChange("modules", option.value, e.target.checked)
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: `p-4 rounded-xl border-2 transition-all duration-300 text-center ${selections.modules.includes(option.value) ? "border-commit bg-commit/5" : "border-gray-200 dark:border-gray-700 hover:border-commit/50 hover:bg-commit/5"}`, children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-lg bg-commit/10 flex items-center justify-center mx-auto mb-3 text-2xl", children: option.emoji }),
            /* @__PURE__ */ jsx("span", { className: "font-medium text-sm", children: option.title }),
            selections.modules.includes(option.value) && /* @__PURE__ */ jsx("div", { className: "text-commit text-xl mt-2 transition-transform duration-300 scale-110", children: "✓" })
          ] })
        ] }, option.value)) })
      ] }),
      currentStep === 4 && /* @__PURE__ */ jsxs("div", { className: "step-content space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold font-heading mb-2", children: "Resumen de tu proyecto" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted", children: "Revisá tu selección y solicitá tu presupuesto personalizado" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-commit/5 to-commit-lighter/10 dark:from-commit-darkest/20 dark:to-gray-800/50 p-8 rounded-2xl space-y-6 border border-commit/20", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("h3", { className: "font-bold text-sm text-commit uppercase tracking-wider mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "w-2 h-2 bg-commit rounded-full" }),
              "Ya tenés preparado"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: selections.basics.length > 0 ? selections.basics.map((id) => /* @__PURE__ */ jsx("span", { className: "px-4 py-2 bg-white dark:bg-gray-700 rounded-lg text-sm font-medium border border-commit/20 shadow-sm", children: summaryLabels.basics[id] }, id)) : /* @__PURE__ */ jsx("span", { className: "text-sm text-muted italic", children: "Ninguna selección" }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("h3", { className: "font-bold text-sm text-commit uppercase tracking-wider mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "w-2 h-2 bg-commit rounded-full" }),
              "Tipo de Proyecto"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "px-4 py-3 bg-white dark:bg-gray-700 rounded-lg inline-flex items-center gap-2 border border-commit/20 shadow-sm", children: [
              /* @__PURE__ */ jsx("span", { className: "text-2xl", children: selections.type === "landing" ? "📄" : selections.type === "app" ? "📱" : "🚀" }),
              /* @__PURE__ */ jsx("span", { className: "text-lg font-bold text-commit", children: selections.type ? summaryLabels.type[selections.type] : "No seleccionado" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("h3", { className: "font-bold text-sm text-commit uppercase tracking-wider mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "w-2 h-2 bg-commit rounded-full" }),
              "Funcionalidades"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: selections.modules.length > 0 ? selections.modules.map((id) => /* @__PURE__ */ jsx("span", { className: "px-4 py-2 bg-white dark:bg-gray-700 rounded-lg text-sm font-medium border border-commit/20 shadow-sm", children: summaryLabels.modules[id] }, id)) : /* @__PURE__ */ jsx("span", { className: "text-sm text-muted italic", children: "Ninguna selección" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "pt-6 border-t border-gray-200 dark:border-gray-700", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold mb-4", children: "Datos de contacto" }),
          /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  name: "name",
                  placeholder: "Nombre completo",
                  required: true,
                  className: "px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-commit focus:ring-2 focus:ring-commit/20 outline-none transition-all"
                }
              ),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "email",
                  name: "email",
                  placeholder: "Email",
                  required: true,
                  className: "px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-commit focus:ring-2 focus:ring-commit/20 outline-none transition-all"
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "tel",
                name: "phone",
                placeholder: "Teléfono (opcional)",
                className: "w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-commit focus:ring-2 focus:ring-commit/20 outline-none transition-all"
              }
            ),
            /* @__PURE__ */ jsx(
              "textarea",
              {
                name: "message",
                placeholder: "Contanos más sobre tu proyecto...",
                rows: 4,
                className: "w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-commit focus:ring-2 focus:ring-commit/20 outline-none transition-all"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                className: "w-full px-6 py-4 bg-gradient-commit text-white font-bold rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all",
                children: "Solicitar Presupuesto"
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between mt-8 pt-6 border-t border-gray-200 dark:border-gray-700", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: prevStep,
            disabled: currentStep === 1,
            className: "px-8 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-600 hover:border-commit hover:text-commit transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-gray-300 dark:disabled:hover:border-gray-600 disabled:hover:text-current font-bold",
            children: "← Anterior"
          }
        ),
        currentStep < totalSteps && /* @__PURE__ */ jsx(
          "button",
          {
            onClick: nextStep,
            className: "px-8 py-4 bg-gradient-commit text-white font-bold rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all",
            children: "Siguiente →"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("style", { children: `
        .step-content {
          animation: fadeIn 0.3s ease-in-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      ` })
  ] });
}

const $$Astro = createAstro("https://commit.agency");
const $$BudgetBuilder = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BudgetBuilder;
  const { class: className } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BudgetBuilderReact", BudgetBuilder, { "client:load": true, "class": className, "client:component-hydration": "load", "client:component-path": "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/components/widgets/BudgetBuilder.tsx", "client:component-export": "default" })}`;
}, "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/components/widgets/BudgetBuilder.astro", void 0);

const $$Presupuesto = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Presupuesto - COMMIT",
    description: "Solicita un presupuesto personalizado para tu proyecto. Cu\xE9ntanos qu\xE9 necesitas y te ayudaremos a estimar el costo de desarrollo.",
    ignoreTitleTemplate: true
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="bg-gradient-to-br from-commit/10 via-white to-commit-lighter/10 dark:from-commit-darkest dark:via-gray-900 dark:to-commit-darkest py-16 md:py-20"> <div class="max-w-4xl mx-auto px-4 text-center"> <h1 class="text-4xl md:text-5xl font-bold font-heading mb-4">
Construyamos tu proyecto a medida
</h1> <p class="text-xl text-muted max-w-2xl mx-auto">
Respondé unas simples preguntas y recibí un presupuesto personalizado. Te guiaremos paso a paso para entender el alcance y costo real de tu desarrollo.
</p> </div> </section>  <section class="py-12 md:py-16"> ${renderComponent($$result2, "BudgetBuilder", $$BudgetBuilder, {})} </section>  <section class="py-16 bg-gray-50 dark:bg-gray-800/50"> <div class="max-w-4xl mx-auto px-4"> <h2 class="text-3xl font-bold font-heading text-center mb-12">¿Por qué es importante entender los costos?</h2> <div class="grid md:grid-cols-3 gap-8"> <div class="text-center"> <div class="w-16 h-16 bg-gradient-commit rounded-full flex items-center justify-center mx-auto mb-4"> <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <h3 class="font-bold mb-2">Transparencia Total</h3> <p class="text-sm text-muted">Sin sorpresas. Sabrás exactamente qué estás pagando y por qué.</p> </div> <div class="text-center"> <div class="w-16 h-16 bg-gradient-commit-light rounded-full flex items-center justify-center mx-auto mb-4"> <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path> </svg> </div> <h3 class="font-bold mb-2">Decisiones Informadas</h3> <p class="text-sm text-muted">Entiende qué funcionalidades son esenciales y cuáles pueden esperar.</p> </div> <div class="text-center"> <div class="w-16 h-16 bg-gradient-commit rounded-full flex items-center justify-center mx-auto mb-4"> <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <h3 class="font-bold mb-2">Mejor ROI</h3> <p class="text-sm text-muted">Invierte inteligentemente en las funcionalidades que realmente importan.</p> </div> </div> </div> </section>  <section class="py-16"> <div class="max-w-4xl mx-auto px-4 text-center"> <h2 class="text-3xl font-bold font-heading mb-4">¿Tienes dudas?</h2> <p class="text-muted mb-8">Nuestro equipo está listo para ayudarte a definir tu proyecto</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> ${renderComponent($$result2, "Button", $$Button, { "variant": "primary", "text": "Hablar con un experto", "href": "/contact" })} ${renderComponent($$result2, "Button", $$Button, { "variant": "secondary", "text": "Ver proyectos anteriores", "href": "/trabajos" })} </div> </div> </section> ` })}`;
}, "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/pages/presupuesto.astro", void 0);

const $$file = "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/pages/presupuesto.astro";
const $$url = "/presupuesto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Presupuesto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
