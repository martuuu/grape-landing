import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate, r as renderComponent, u as unescapeHTML } from './astro/server_CmDtgPsN.mjs';
import 'kleur/colors';
import { b as $$Icon } from './PageLayout_BZgvDoRs.mjs';
import { twMerge } from 'tailwind-merge';
import { $ as $$Button } from './Button_dtm-42uk.mjs';

const $$Astro = createAstro("https://commit.agency");
const $$ItemGrid2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ItemGrid2;
  const { items = [], columns, defaultIcon = "", classes = {} } = Astro2.props;
  const {
    container: containerClass = "",
    // container: containerClass = "sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    panel: panelClass = "",
    title: titleClass = "",
    description: descriptionClass = "",
    icon: defaultIconClass = "text-primary"
  } = classes;
  return renderTemplate`${items && items.length > 0 && renderTemplate`${maybeRenderHead()}<div${addAttribute(twMerge(
    `grid gap-8 gap-x-12 sm:gap-y-8 ${columns === 4 ? "lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2" : columns === 3 ? "lg:grid-cols-3 sm:grid-cols-2" : columns === 2 ? "sm:grid-cols-2 " : ""}`,
    containerClass
  ), "class")}>${items.map((item) => {
    const { title, description, icon, callToAction, classes: itemClasses = {} } = item;
    const iconImage = item.iconImage;
    const iconSrc = typeof iconImage === "string" ? iconImage : iconImage?.src;
    return renderTemplate`<div${addAttribute(twMerge(
      "relative flex flex-col intersect-once intersect-quarter intersect-no-queue motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade",
      panelClass,
      itemClasses?.panel
    ), "class")}>${iconSrc ? renderTemplate`<img${addAttribute(iconSrc, "src")}${addAttribute(title || "Service icon", "alt")}${addAttribute(twMerge("mb-2 w-16 h-16 object-contain", defaultIconClass, itemClasses?.icon), "class")}${addAttribute(64, "width")}${addAttribute(64, "height")}>` : (icon || defaultIcon) && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon || defaultIcon, "class": twMerge("mb-2 w-10 h-10", defaultIconClass, itemClasses?.icon) })}`}<div${addAttribute(twMerge("text-xl font-bold", titleClass, itemClasses?.title), "class")}>${title}</div>${description && renderTemplate`<p${addAttribute(twMerge("text-muted mt-2", descriptionClass, itemClasses?.description), "class")}>${unescapeHTML(description)}</p>`}${callToAction && renderTemplate`<div class="mt-2">${renderComponent($$result, "Button", $$Button, { ...callToAction })}</div>`}</div>`;
  })}</div>`}`;
}, "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/components/ui/ItemGrid2.astro", void 0);

export { $$ItemGrid2 as $ };
