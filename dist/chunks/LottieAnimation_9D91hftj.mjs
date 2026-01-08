import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, f as renderScript, a as renderTemplate } from './astro/server_CmDtgPsN.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */

const $$Astro = createAstro("https://commit.agency");
const $$LottieAnimation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LottieAnimation;
  const { src, class: className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["lottie-container", className], "class:list")}${addAttribute(src, "data-lottie-src")} data-astro-cid-ezgzys7b></div> ${renderScript($$result, "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/components/common/LottieAnimation.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/components/common/LottieAnimation.astro", void 0);

export { $$LottieAnimation as $ };
