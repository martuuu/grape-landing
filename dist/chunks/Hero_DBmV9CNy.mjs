import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate, s as spreadAttributes, e as renderSlot, r as renderComponent, f as renderScript, F as Fragment, u as unescapeHTML } from './astro/server_CmDtgPsN.mjs';
import { $ as $$Image } from './Image_CKE-QOF8.mjs';
import { $ as $$Button } from './Button_dtm-42uk.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro$1 = createAstro("https://commit.agency");
const $$Fireflies = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Fireflies;
  const { quantity = 15 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="fireflies-container" data-astro-cid-lei53wlj> ${Array.from({ length: quantity }, (_, i) => renderTemplate`<div${addAttribute(`firefly firefly-${i + 1}`, "class")} data-astro-cid-lei53wlj></div>`)} </div> `;
}, "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/components/effects/Fireflies.astro", void 0);

const $$Astro = createAstro("https://commit.agency");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    content = await Astro2.slots.render("content"),
    actions = await Astro2.slots.render("actions"),
    image = await Astro2.slots.render("image"),
    id,
    bg = await Astro2.slots.render("bg"),
    class: className = ""
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(["relative md:-mt-[76px] not-prose overflow-hidden min-h-screen md:min-h-[120vh] flex items-center", className], "class:list")}${spreadAttributes(id ? { id } : {})}> <div class="absolute inset-0 pointer-events-none" aria-hidden="true"> ${renderSlot($$result, $$slots["bg"], renderTemplate` ${bg ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(bg)}` })}` : null} `)} <!-- Fireflies Effect --> ${renderComponent($$result, "Fireflies", $$Fireflies, { "quantity": 15 })} </div> <div class="relative max-w-7xl mx-auto px-4 sm:px-6"> <div class="pt-0 md:pt-[76px] pointer-events-none"></div> <div class="py-16 md:py-20"> <div class="text-center pb-12 md:pb-16 max-w-5xl mx-auto"> ${tagline && renderTemplate`<p class="text-base text-secondary dark:text-blue-200 font-bold tracking-wide uppercase intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade">${unescapeHTML(tagline)}</p>`} ${title && renderTemplate`<h1 class="text-4xl md:text-6xl font-bold leading-tight md:leading-tighter tracking-tighter mb-6 font-heading dark:text-gray-200 intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade">${unescapeHTML(title)}</h1>`} <div class="max-w-3xl mx-auto"> ${subtitle && renderTemplate`<p class="text-lg md:text-xl text-muted mb-8 dark:text-slate-300 intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade">${unescapeHTML(subtitle)}</p>`} ${actions && renderTemplate`<div class="max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4 intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade"> ${Array.isArray(actions) ? actions.map((action) => renderTemplate`<div class="flex w-full sm:w-auto"> ${renderComponent($$result, "Button", $$Button, { ...action || {}, "class": "w-full sm:mb-0" })} </div>`) : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(actions)}` })}`} </div>`} </div> ${content && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(content)}` })}`} </div> <div id="hero-image-container"> ${image && renderTemplate`<div class="relative m-auto max-w-5xl mt-8 md:mt-0"> ${typeof image === "string" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "mx-auto rounded-lg w-full shadow-2xl", "widths": [400, 768, 1024, 2040], "sizes": "(max-width: 767px) 400px, (max-width: 1023px) 768px, (max-width: 2039px) 1024px, 2040px", "loading": "eager", "width": 1024, "height": 576, ...image })}`} </div>`} </div> </div> </div> </section> ${renderScript($$result, "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/components/widgets/Hero.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/components/widgets/Hero.astro", void 0);

export { $$Hero as $ };
