import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderComponent, a as renderTemplate } from './astro/server_CmDtgPsN.mjs';
import 'kleur/colors';
import { b as $$Icon } from './PageLayout_BZgvDoRs.mjs';

const $$Astro = createAstro("https://commit.agency");
const $$PremiumCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PremiumCard;
  const {
    title,
    description,
    icon,
    href,
    class: className = "",
    tags = [],
    gradient = "purple"
  } = Astro2.props;
  const gradientColors = {
    red: "from-c-red-light to-c-red-dark",
    purple: "from-c-purple-light to-c-purple-dark",
    blue: "from-c-blue-light to-c-blue-dark",
    yellow: "from-c-yellow-light to-c-yellow-dark"
  };
  const glowColors = {
    red: "group-hover:shadow-c-red/20",
    purple: "group-hover:shadow-c-purple/20",
    blue: "group-hover:shadow-c-blue/20",
    yellow: "group-hover:shadow-c-yellow/20"
  };
  const iconColors = {
    red: "text-c-red",
    purple: "text-c-purple",
    blue: "text-c-blue",
    yellow: "text-c-yellow"
  };
  const bgColors = {
    red: "bg-c-red/10",
    purple: "bg-c-purple/10",
    blue: "bg-c-blue/10",
    yellow: "bg-c-yellow/10"
  };
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`group relative h-full ${className}`, "class")}> <!-- Gradient Border Wrapper --> <div${addAttribute(`absolute -inset-[1px] bg-gradient-to-r ${gradientColors[gradient]} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`, "class")}></div> <!-- Card Content --> <div${addAttribute(`relative h-full bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl ${glowColors[gradient]} overflow-hidden`, "class")}> <!-- Background Gradient Blob --> <div${addAttribute(`absolute -top-20 -right-20 w-40 h-40 ${bgColors[gradient]} rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`, "class")}></div> <div class="relative z-10 flex flex-col h-full"> ${icon && renderTemplate`<div${addAttribute(`w-14 h-14 rounded-xl ${bgColors[gradient]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`, "class")}> ${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": `w-7 h-7 ${iconColors[gradient]}` })} </div>`} <h3 class="text-2xl font-bold font-heading mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-300 transition-colors"> ${title} </h3> <p class="text-muted mb-6 flex-grow"> ${description} </p> ${tags.length > 0 && renderTemplate`<div class="flex flex-wrap gap-2 mb-6"> ${tags.map((tag) => renderTemplate`<span class="text-xs font-medium px-2.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"> ${tag} </span>`)} </div>`} ${href && renderTemplate`<a${addAttribute(href, "href")}${addAttribute(`inline-flex items-center font-bold ${iconColors[gradient]} group-hover:translate-x-2 transition-transform duration-300`, "class")}>
Ver más
${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:arrow-right", "class": "w-5 h-5 ml-2" })} </a>`} </div> </div> </div>`;
}, "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/components/ui/PremiumCard.astro", void 0);

export { $$PremiumCard as $ };
