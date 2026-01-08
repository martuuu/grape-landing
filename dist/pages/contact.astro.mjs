import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_CmDtgPsN.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../chunks/PageLayout_BZgvDoRs.mjs';
import { $ as $$HeroText } from '../chunks/HeroText_DUhiMwQL.mjs';
import { $ as $$Contact$1 } from '../chunks/Contact_BT_uqHv6.mjs';
import { $ as $$Features2 } from '../chunks/Features2_Bm8-YRcy.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Contacto - Hablemos de tu proyecto",
    description: "Contacta con COMMIT para desarrollar tu aplicaci\xF3n web o m\xF3vil. Respuesta en 24 horas. Presupuesto gratuito y sin compromiso.",
    canonical: "https://commit.agency/contact",
    openGraph: {
      title: "Contacto | COMMIT",
      description: "Cu\xE9ntanos tu proyecto. Te respondemos en 24 horas con un presupuesto personalizado.",
      type: "website"
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "HeroText", $$HeroText, { "tagline": "Contact", "title": "Let's Connect!" })} ${renderComponent($$result2, "ContactUs", $$Contact$1, { "id": "form", "title": "Drop us a message today!", "subtitle": "For quicker answers, explore our FAQs section. You may find the solution you're looking  for right there! If not, our support team is delighted to help you.", "inputs": [
    {
      type: "text",
      name: "name",
      label: "Name"
    },
    {
      type: "email",
      name: "email",
      label: "Email"
    }
  ], "textarea": {
    label: "Message"
  }, "disclaimer": {
    label: "By submitting this contact form, you acknowledge and agree to the collection of your personal information."
  }, "description": "Our support team typically responds within 24 business hours." })}  ${renderComponent($$result2, "Features2", $$Features2, { "title": "We are here to help!", "items": [
    {
      title: "General support",
      description: `Chat with us for inquiries related to account management, website navigation, payment issues, accessing purchased templates or general questions about the website's functionality.`
    },
    {
      title: "Contact sales",
      description: "Chat with us for questions about purchases, customization options, licensing for commercial use, inquiries about specific template, etc."
    },
    {
      title: "Technical support",
      description: "Chat with us when facing issues like template installation, problems editing difficulties, compatibility issues with software or download errors, or other technical challenges related to using the templates."
    },
    {
      title: "Phone",
      description: "+1 (234) 567-890",
      icon: "tabler:headset"
    },
    {
      title: "Email",
      description: "contact@support.com",
      icon: "tabler:mail"
    },
    {
      title: "Location",
      description: "1234 Lorem Ipsum St, 12345, Miami, EEUU",
      icon: "tabler:map-pin"
    }
  ] })} ` })}`;
}, "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/pages/contact.astro", void 0);

const $$file = "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
