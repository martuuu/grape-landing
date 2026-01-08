import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, s as spreadAttributes, r as renderComponent, F as Fragment, a as renderTemplate, u as unescapeHTML } from './astro/server_CmDtgPsN.mjs';
import { b as $$Icon } from './PageLayout_BZgvDoRs.mjs';
import { twMerge } from 'tailwind-merge';

const $$Astro = createAstro("https://commit.agency");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    variant = "secondary",
    target,
    text = Astro2.slots.render("default"),
    icon = "",
    class: className = "",
    type,
    ...rest
  } = Astro2.props;
  const variants = {
    primary: "px-8 py-4 bg-gradient-commit text-white font-bold rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all inline-block",
    secondary: "px-8 py-4 border-2 border-commit text-commit font-bold rounded-xl hover:bg-commit/5 transition-all inline-block",
    outlined: "px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-bold rounded-xl hover:border-commit hover:text-commit transition-all inline-block",
    white: "px-8 py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 border-none shadow-md transition-all inline-block",
    tertiary: "btn btn-tertiary",
    link: "text-commit hover:text-commit-light underline-offset-4 hover:underline font-medium transition-colors",
    "link-white": "text-gray-200 hover:text-white font-medium transition-colors",
    "gradient-border": "btn-gradient-border"
  };
  return renderTemplate`${type === "button" || type === "submit" || type === "reset" ? renderTemplate`${maybeRenderHead()}<button${addAttribute(type, "type")}${addAttribute(twMerge(variants[variant] || "", className), "class")}${spreadAttributes(rest)}>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })}${icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "w-5 h-5 ml-1 -mr-1.5 rtl:mr-1 rtl:-ml-1.5 inline-block" })}`}</button>` : renderTemplate`<a${addAttribute(twMerge(variants[variant] || "", className), "class")}${spreadAttributes(target ? { target, rel: "noopener noreferrer" } : {})}${spreadAttributes(rest)}>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })}${icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "w-5 h-5 ml-1 -mr-1.5 rtl:mr-1 rtl:-ml-1.5 inline-block" })}`}</a>`}`;
}, "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/components/ui/Button.astro", void 0);

export { $$Button as $ };
