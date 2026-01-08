import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate } from './astro/server_CmDtgPsN.mjs';
import 'kleur/colors';
import { S as SITE } from './consts_CmXsJCj0.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image } from './_astro_assets_Hs0e_krd.mjs';
import logoImage from './logo_CqtjaFTU.mjs';
/* empty css                                                            */

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center gap-4" data-astro-cid-tvrurpns> ${renderComponent($$result, "Image", $$Image, { "src": logoImage, "alt": SITE?.name, "class": "h-10 md:h-12 w-auto", "data-astro-cid-tvrurpns": true })} <div class="brand-text flex flex-col justify-center" data-astro-cid-tvrurpns> <h1 class="brand-title" data-astro-cid-tvrurpns>COMMIT</h1> <p class="brand-slogan" data-astro-cid-tvrurpns>TECNOLOGÍAS DEL SUR</p> </div> </div>`;
}, "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/components/Logo.astro", void 0);

export { $$Logo as $ };
