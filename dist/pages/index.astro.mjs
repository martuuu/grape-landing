import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, f as renderScript, u as unescapeHTML, b as addAttribute, F as Fragment } from '../chunks/astro/server_CmDtgPsN.mjs';
import 'kleur/colors';
import { b as $$Icon, $ as $$PageLayout } from '../chunks/PageLayout_BZgvDoRs.mjs';
import { $ as $$Hero } from '../chunks/Hero_DBmV9CNy.mjs';
import { $ as $$Features } from '../chunks/Features_2pWlyopA.mjs';
import { $ as $$CallToAction } from '../chunks/CallToAction_Bwqt2O2Z.mjs';
import { $ as $$Contact } from '../chunks/Contact_BT_uqHv6.mjs';
import { $ as $$Steps } from '../chunks/Steps_DutvRy0o.mjs';
import { $ as $$WidgetWrapper } from '../chunks/WidgetWrapper_ztPl0CnH.mjs';
import { $ as $$Headline } from '../chunks/Headline_CWCD6_Wu.mjs';
import { $ as $$ItemGrid2 } from '../chunks/ItemGrid2_BHJB7kBJ.mjs';
/* empty css                                 */
import 'clsx';
import { a as getPermalink } from '../chunks/consts_CmXsJCj0.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro("https://commit.agency");
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Services;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline = await Astro2.slots.render("tagline"),
    items = [],
    columns = 3,
    defaultIcon,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": classes?.headline })} ${renderComponent($$result2, "ItemGrid2", $$ItemGrid2, { "items": items, "columns": columns, "defaultIcon": defaultIcon, "classes": {
    container: "gap-6 md:gap-8",
    panel: "rounded-xl p-8 md:p-10 min-h-[320px] shadow-lg bg-white dark:bg-slate-800 hover:shadow-xl transition-shadow duration-300",
    title: "text-xl md:text-2xl font-bold mb-3",
    description: "text-muted dark:text-slate-400",
    icon: "w-16 h-16 mb-4 text-primary"
  } })} ` })}`;
}, "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/components/widgets/Services.astro", void 0);

const $$Astro$1 = createAstro("https://commit.agency");
const $$ScrollSnapContent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ScrollSnapContent;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline = await Astro2.slots.render("tagline"),
    content = await Astro2.slots.render("content"),
    items = [],
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-6xl ${classes?.container ?? ""}`, "bg": bg, "data-astro-cid-yvnr6iob": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="timeline-section" data-astro-cid-yvnr6iob> <!-- Header con título y subtítulo --> <div class="section-header" data-astro-cid-yvnr6iob> ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": {
    container: "text-center max-w-3xl mx-auto",
    title: "text-4xl md:text-5xl font-bold tracking-tighter mb-4 font-heading",
    subtitle: "max-w-3xl mx-auto text-xl text-muted dark:text-slate-400"
  }, "data-astro-cid-yvnr6iob": true })} ${content && renderTemplate`<div class="mt-4 text-center max-w-3xl mx-auto text-lg dark:text-slate-400" data-astro-cid-yvnr6iob>${unescapeHTML(content)}</div>`} </div> <!-- Timeline --> <div class="timeline-container" data-astro-cid-yvnr6iob> <!-- Columna izquierda: Timeline track --> <div class="timeline-track" data-astro-cid-yvnr6iob> <div class="timeline-line" data-astro-cid-yvnr6iob></div> <div class="timeline-progress" id="timeline-progress" data-astro-cid-yvnr6iob></div> </div> <!-- Columna derecha: Cards --> <div class="timeline-cards" data-astro-cid-yvnr6iob> ${items.map((item, index) => renderTemplate`<div class="timeline-item"${addAttribute(index, "data-index")} data-astro-cid-yvnr6iob> <div class="timeline-content" data-astro-cid-yvnr6iob> ${item.icon && renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": item.icon, "class": "item-icon", "data-astro-cid-yvnr6iob": true })}`} ${item.title && renderTemplate`<h3 class="item-title" data-astro-cid-yvnr6iob>${item.title}</h3>`} ${item.description && renderTemplate`<p class="item-description" data-astro-cid-yvnr6iob>${unescapeHTML(item.description)}</p>`} </div> </div>`)} </div> </div> <!-- Dots se generan dinámicamente con JS para sincronizar con cards --> </div>  ${renderScript($$result2, "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/components/widgets/ScrollSnapContent.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/components/widgets/ScrollSnapContent.astro", void 0);

const $$Astro = createAstro("https://commit.agency");
const $$TranslatablePage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TranslatablePage;
  return renderTemplate`${renderScript($$result, "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/components/common/TranslatablePage.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/components/common/TranslatablePage.astro", void 0);

const nav$1 = {"home":"Inicio","about":"Nosotros","services":"Servicios","contact":"Contacto","pricing":"Precios","blog":"Blog","know_more":"Conoce más"};
const hero$1 = {"tagline":"Agencia de Desarrollo","title":"Creamos soluciones digitales para impulsar tu negocio","title_part1":"Creamos soluciones digitales","title_part2":"para","title_highlight":"impulsar tu negocio","subtitle":"Somos una Agencia de Desarrollo que tiene por objetivo proveer soluciones que ayuden a nuestros clientes a mejorar sus negocios digitales.","cta_primary":"Conoce más","cta_secondary":"Contáctanos"};
const features$1 = {"title":"¿Qué hacemos en COMMIT?","subtitle":"Combinamos experiencia, tecnología y atención personalizada para entregar soluciones que realmente marcan la diferencia.","items":{"boutique":{"title":"Agencia Boutique","description":"Equipo selecto de especialistas que trabajan directamente en tu proyecto. Sin intermediarios, con atención personalizada y dedicación completa a tus objetivos."},"experience":{"title":"Experiencia Senior en Desarrollo Web y Mobile","description":"Más de 10 años creando aplicaciones web y móviles de alto rendimiento. Dominamos las tecnologías más demandadas: React, Next.js, React Native, Node.js y más."},"processes":{"title":"Procesos Claros y Eficientes","description":"Metodologías ágiles que garantizan entregas rápidas sin sacrificar calidad. Sprints cortos, comunicación constante y resultados visibles desde la primera semana."},"tech":{"title":"Tecnologías Modernas y Escalables","description":"Stack tecnológico de vanguardia preparado para crecer con tu negocio. Infraestructura cloud, arquitecturas robustas y código mantenible para el largo plazo."},"attention":{"title":"Atención Personalizada","description":"Cada proyecto es único. Te asignamos un equipo dedicado que entiende tu visión y trabaja como una extensión de tu empresa. Respuestas rápidas, feedback continuo."},"support":{"title":"Soporte y Monitoreo Continuo","description":"No desaparecemos después del lanzamiento. Monitoreo 24/7, actualizaciones regulares y soporte técnico para que tu aplicación funcione perfectamente siempre."}}};
const common$1 = {"learnMore":"Saber más","getStarted":"Comenzar","contactUs":"Contáctanos","readMore":"Leer más","viewAll":"Ver todo"};
const services$1 = {"web":{"tagline":"Presencia Digital","title":"Marketing Landings & Webapps","content_title":"Tu presencia digital que convierte","content_subtitle":"Transformamos visitantes en clientes con diseño estratégico y tecnología de punta","items":{"landing":{"title":"Landing pages de alto impacto","description":"Diseñamos y desarrollamos landing pages optimizadas para conversión que capturan la atención de tus visitantes y los guían hacia la acción."},"webapps":{"title":"Web applications modernas","description":"Creamos aplicaciones web escalables y performantes utilizando las últimas tecnologías como React, Next.js, Astro y más."},"conversion":{"title":"Diseño centrado en conversión","description":"Cada elemento está estratégicamente ubicado para maximizar las conversiones, desde CTAs efectivos hasta formularios optimizados."},"seo":{"title":"SEO y Analytics integrados","description":"Implementamos las mejores prácticas de SEO desde el inicio y configuramos analytics para que puedas medir el éxito de tu sitio."}}},"business":{"tagline":"Soluciones Empresariales","title":"Sistemas para PyMEs, Eventos y Clubes","content_title":"Software que se adapta a tu negocio","content_subtitle":"Soluciones prácticas y eficientes para simplificar tu gestión diaria","items":{"pyme":{"title":"Gestión para PyMEs","description":"Desarrollamos sistemas de gestión adaptados a las necesidades específicas de pequeñas y medianas empresas: inventarios, facturación, CRM y más."},"events":{"title":"Plataformas para eventos","description":"Soluciones completas para la gestión de eventos: registro de asistentes, venta de entradas, acreditaciones y seguimiento en tiempo real."},"clubs":{"title":"Software para clubes deportivos","description":"Sistemas especializados para la administración de socios, reservas de instalaciones, pagos de cuotas y comunicación con miembros."},"integration":{"title":"Integración con herramientas existentes","description":"Conectamos tu nuevo sistema con las herramientas que ya usas: contabilidad, email marketing, pasarelas de pago y más."}}},"custom":{"tagline":"Desarrollo Personalizado","title":"Sistemas 100% a Medida","content_title":"Tu visión, nuestro código","content_subtitle":"Construimos el software que tu negocio necesita, exactamente como lo necesitas","items":{"analysis":{"title":"Análisis profundo de requerimientos","description":"Comenzamos con un discovery exhaustivo para entender a fondo tus procesos, desafíos y objetivos de negocio."},"architecture":{"title":"Arquitectura escalable","description":"Diseñamos la arquitectura de tu sistema pensando en el crecimiento futuro, utilizando tecnologías robustas y probadas."},"agile":{"title":"Desarrollo ágil e iterativo","description":"Trabajamos en sprints cortos con entregas frecuentes, permitiéndote ver el progreso y hacer ajustes en el camino."},"support":{"title":"Soporte y mantenimiento continuo","description":"No terminamos con el lanzamiento. Ofrecemos soporte técnico, actualizaciones y nuevas funcionalidades según evolucionen tus necesidades."}}}};
const services_section$1 = {"tagline":"Nuestros Servicios","title":"Lo que hacemos","subtitle":"Soluciones digitales completas para impulsar tu negocio","items":{"web":{"title":"Marketing Landings & Webapps","description":"Diseñamos y desarrollamos landing pages optimizadas para conversión y aplicaciones web modernas que capturan la atención y generan resultados.","cta":"Conocer más"},"business":{"title":"Sistemas para PyMEs, Eventos y Clubes","description":"Desarrollamos sistemas de gestión adaptados a las necesidades de pequeñas y medianas empresas, eventos y organizaciones deportivas.","cta":"Conocer más"},"custom":{"title":"Desarrollo a Medida","description":"Creamos soluciones de software 100% personalizadas que se adaptan exactamente a los procesos y necesidades de tu negocio.","cta":"Conocer más"}}};
const differentiation$1 = {"tagline":"Por qué elegirnos","title":"Lo que nos hace diferentes","content_title":"Creatividad, Calidad y Flexibilidad","content_subtitle":"Una consultora de sistemas con los más altos estándares, enfocada en tu éxito","items":{"creativity":{"title":"Creatividad en cada solución","description":"Nos encanta resolver desafíos con creatividad. Pensamos fuera de la caja para encontrar la mejor solución técnica que se adapte perfectamente a tu problema de negocio."},"quality":{"title":"Calidad sin concesiones","description":"Cumplimos con los más altos estándares de calidad en cada línea de código. Priorizamos la excelencia y la experiencia de uso por encima de la cantidad de proyectos."},"flexibility":{"title":"Flexibilidad enfocada en el cliente","description":"Nos adaptamos a tus necesidades con una capacidad de respuesta rápida y difícil de superar. Tu éxito es nuestro compromiso principal."},"custom":{"title":"Desarrollo a medida","description":"Creamos soluciones de software 100% adaptadas a las necesidades específicas de tu negocio. No hay dos proyectos iguales, cada uno es único como tu empresa."},"agile":{"title":"Equipos ágiles e idóneos","description":"Nuestros equipos combinan agilidad con experiencia técnica profunda. Entregas rápidas sin sacrificar la calidad del producto final."},"improvement":{"title":"Mejora continua","description":"Aprovechamos cada oportunidad de mejora para optimizar nuestros procesos de comunicación y producción. Evolucionamos junto a nuestros clientes."}}};
const about$1 = {"title":"Sobre nosotros","subtitle":"COMMIT es una empresa de Desarrollo de Software especializada en software factory y transformación digital. Acompañamos a nuestros clientes en todo el proceso hasta lograr los objetivos comprometidos. Lo que nos diferencia es la agilidad y la idoneidad de nuestros equipos: afrontamos cada desafío con creatividad, calidad y flexibilidad enfocada en el cliente.","cta":"Conoce más sobre nosotros"};
const steps$1 = {"title":"Nuestro proceso de trabajo: claro, ágil y efectivo","items":{"discovery":{"title":"Discovery y Planificación","description":"Comenzamos con una reunión de descubrimiento donde entendemos a fondo tu visión, objetivos y desafíos. Definimos alcance, tecnologías y roadmap del proyecto."},"design":{"title":"Diseño y Arquitectura","description":"Diseñamos la arquitectura técnica y la experiencia de usuario. Creamos prototipos y wireframes para validar la solución antes de comenzar el desarrollo.","icon":"tabler:layout-2"},"development":{"title":"Desarrollo Ágil","description":"Desarrollamos en sprints cortos con entregas frecuentes. Comunicación constante, demos regulares y ajustes en el camino. Ves el progreso desde la primera semana."},"testing":{"title":"Testing y QA","description":"Pruebas exhaustivas de funcionalidad, rendimiento y seguridad. Garantizamos que tu aplicación funcione perfectamente en todos los escenarios."},"launch":{"title":"Lanzamiento y Soporte","description":"Deploy a producción con todas las garantías. No terminamos aquí: soporte continuo, monitoreo 24/7 y evolución constante de tu producto."},"ready":"¡Tu proyecto en producción!"}};
const contact$1 = {"title":"¿Listo para comenzar tu proyecto?","subtitle":"Contáctanos y cuéntanos sobre tu idea. Nuestro equipo estará encantado de ayudarte a convertirla en realidad.","name_label":"Nombre","email_label":"Email","message_label":"Cuéntanos sobre tu proyecto","disclaimer":"Al enviar este formulario, aceptas que procesemos tu información para contactarte sobre tu proyecto.","description":"Te responderemos dentro de las 24 horas hábiles."};
const contact_info$1 = {"title":"¿Cómo podemos ayudarte?","items":{"consulting":{"title":"Consultoría técnica","description":"¿Necesitas asesoramiento sobre tecnologías, arquitectura o escalabilidad? Hablemos sobre la mejor solución para tu proyecto."},"quotes":{"title":"Presupuestos","description":"Solicita un presupuesto sin compromiso. Te ayudamos a definir alcance, tiempos y costos de tu proyecto de forma transparente."},"support":{"title":"Soporte y mantenimiento","description":"¿Tienes una aplicación que necesita mantenimiento o nuevas funcionalidades? Podemos ayudarte a evolucionar tu producto."},"whatsapp":{"title":"WhatsApp","value":"+54 9 11 XXXX-XXXX"},"email":{"title":"Email","value":"hola@grape.com.ar"},"location":{"title":"Ubicación","value":"Buenos Aires, Argentina"}}};
const esTranslations = {
  nav: nav$1,
  hero: hero$1,
  features: features$1,
  common: common$1,
  services: services$1,
  services_section: services_section$1,
  differentiation: differentiation$1,
  about: about$1,
  steps: steps$1,
  contact: contact$1,
  contact_info: contact_info$1,
};

const nav = {"home":"Home","about":"About","services":"Services","contact":"Contact","pricing":"Pricing","blog":"Blog","know_more":"Learn More"};
const hero = {"tagline":"Development Agency","title":"We create digital solutions to boost your business","title_part1":"We create digital solutions","title_part2":"to","title_highlight":"boost your business","subtitle":"We are a Development Agency that aims to provide solutions that help our clients improve their digital businesses.","cta_primary":"Learn More","cta_secondary":"Contact Us"};
const features = {"title":"What we do at COMMIT?","subtitle":"We combine experience, technology, and personalized attention to deliver solutions that truly make a difference.","items":{"boutique":{"title":"Boutique Agency","description":"Select team of specialists working directly on your project. No intermediaries, with personalized attention and complete dedication to your goals."},"experience":{"title":"Senior Experience in Web and Mobile Development","description":"Over 10 years creating high-performance web and mobile applications. We master the most in-demand technologies: React, Next.js, React Native, Node.js, and more."},"processes":{"title":"Clear and Efficient Processes","description":"Agile methodologies that guarantee fast deliveries without sacrificing quality. Short sprints, constant communication, and visible results from the first week."},"tech":{"title":"Modern and Scalable Technologies","description":"Cutting-edge technology stack prepared to grow with your business. Cloud infrastructure, robust architectures, and maintainable code for the long term."},"attention":{"title":"Personalized Attention","description":"Each project is unique. We assign you a dedicated team that understands your vision and works as an extension of your company. Fast responses, continuous feedback."},"support":{"title":"Continuous Support and Monitoring","description":"We don't disappear after launch. 24/7 monitoring, regular updates, and technical support to keep your application running perfectly at all times."}}};
const common = {"learnMore":"Learn More","getStarted":"Get Started","contactUs":"Contact Us","readMore":"Read More","viewAll":"View All"};
const services = {"web":{"tagline":"Digital Presence","title":"Marketing Landings & Webapps","content_title":"Your digital presence that converts","content_subtitle":"We transform visitors into customers with strategic design and cutting-edge technology","items":{"landing":{"title":"High-impact landing pages","description":"We design and develop conversion-optimized landing pages that capture your visitors' attention and guide them to action."},"webapps":{"title":"Modern web applications","description":"We create scalable and performant web applications using the latest technologies like React, Next.js, Astro and more."},"conversion":{"title":"Conversion-centered design","description":"Every element is strategically placed to maximize conversions, from effective CTAs to optimized forms."},"seo":{"title":"Integrated SEO and Analytics","description":"We implement SEO best practices from the start and configure analytics so you can measure your site's success."}}},"business":{"tagline":"Business Solutions","title":"Systems for SMEs, Events and Clubs","content_title":"Software that adapts to your business","content_subtitle":"Practical and efficient solutions to simplify your daily management","items":{"pyme":{"title":"Management for SMEs","description":"We develop management systems adapted to the specific needs of small and medium businesses: inventory, invoicing, CRM and more."},"events":{"title":"Platforms for events","description":"Complete solutions for event management: attendee registration, ticket sales, accreditations and real-time tracking."},"clubs":{"title":"Software for sports clubs","description":"Specialized systems for member administration, facility reservations, fee payments and communication with members."},"integration":{"title":"Integration with existing tools","description":"We connect your new system with the tools you already use: accounting, email marketing, payment gateways and more."}}},"custom":{"tagline":"Custom Development","title":"100% Custom Systems","content_title":"Your vision, our code","content_subtitle":"We build the software your business needs, exactly as you need it","items":{"analysis":{"title":"Deep requirements analysis","description":"We start with an exhaustive discovery to thoroughly understand your processes, challenges and business objectives."},"architecture":{"title":"Scalable architecture","description":"We design your system's architecture thinking about future growth, using robust and proven technologies."},"agile":{"title":"Agile and iterative development","description":"We work in short sprints with frequent deliveries, allowing you to see progress and make adjustments along the way."},"support":{"title":"Continuous support and maintenance","description":"We don't finish with the launch. We offer technical support, updates and new features as your needs evolve."}}}};
const services_section = {"tagline":"Our Services","title":"What we do","subtitle":"Complete digital solutions to boost your business","items":{"web":{"title":"Marketing Landings & Webapps","description":"We design and develop conversion-optimized landing pages and modern web applications that capture attention and generate results.","cta":"Learn More"},"business":{"title":"Systems for SMEs, Events and Clubs","description":"We develop management systems adapted to the needs of small and medium businesses, events and sports organizations.","cta":"Learn More"},"custom":{"title":"Custom Development","description":"We create 100% personalized software solutions that adapt exactly to your business processes and needs.","cta":"Learn More"}}};
const differentiation = {"tagline":"Why choose us","title":"What makes us different","content_title":"Creativity, Quality and Flexibility","content_subtitle":"A systems consultancy with the highest standards, focused on your success","items":{"creativity":{"title":"Creativity in every solution","description":"We love solving challenges with creativity. We think outside the box to find the best technical solution that perfectly fits your business problem."},"quality":{"title":"Uncompromising quality","description":"We meet the highest quality standards in every line of code. We prioritize excellence and user experience over the number of projects."},"flexibility":{"title":"Client-focused flexibility","description":"We adapt to your needs with a fast response capacity that's hard to beat. Your success is our main commitment."},"custom":{"title":"Custom development","description":"We create software solutions 100% adapted to your business's specific needs. No two projects are alike, each one is unique like your company."},"agile":{"title":"Agile and skilled teams","description":"Our teams combine agility with deep technical experience. Fast deliveries without sacrificing the quality of the final product."},"improvement":{"title":"Continuous improvement","description":"We leverage every opportunity for improvement to optimize our communication and production processes. We evolve alongside our clients."}}};
const about = {"title":"About us","subtitle":"COMMIT is a Software Development company specialized in software factory and digital transformation. We support our clients throughout the entire process until achieving the committed objectives. What sets us apart is the agility and suitability of our teams: we face each challenge with creativity, quality, and client-focused flexibility.","cta":"Learn more about us"};
const steps = {"title":"Our work process: clear, agile and effective","items":{"discovery":{"title":"Discovery and Planning","description":"We begin with a discovery meeting where we thoroughly understand your vision, objectives, and challenges. We define scope, technologies, and project roadmap."},"design":{"title":"Design and Architecture","description":"We design the technical architecture and user experience. We create prototypes and wireframes to validate the solution before starting development.","icon":"tabler:layout-2"},"development":{"title":"Agile Development","description":"We develop in short sprints with frequent deliveries. Constant communication, regular demos, and adjustments along the way. You see progress from the first week."},"testing":{"title":"Testing and QA","description":"Exhaustive testing of functionality, performance, and security. We guarantee that your application works perfectly in all scenarios."},"launch":{"title":"Launch and Support","description":"Deploy to production with all guarantees. We don't stop here: continuous support, 24/7 monitoring, and constant evolution of your product."},"ready":"Your project in production!"}};
const contact = {"title":"Ready to start your project?","subtitle":"Contact us and tell us about your idea. Our team will be happy to help you make it a reality.","name_label":"Name","email_label":"Email","message_label":"Tell us about your project","disclaimer":"By submitting this form, you agree that we process your information to contact you about your project.","description":"We will respond within 24 business hours."};
const contact_info = {"title":"How can we help you?","items":{"consulting":{"title":"Technical consulting","description":"Need advice on technologies, architecture, or scalability? Let's talk about the best solution for your project."},"quotes":{"title":"Quotes","description":"Request a quote without obligation. We help you define scope, timelines, and costs for your project transparently."},"support":{"title":"Support and maintenance","description":"Do you have an application that needs maintenance or new features? We can help you evolve your product."},"whatsapp":{"title":"WhatsApp","value":"+54 9 11 XXXX-XXXX"},"email":{"title":"Email","value":"hola@grape.com.ar"},"location":{"title":"Location","value":"Buenos Aires, Argentina"}}};
const enTranslations = {
  nav,
  hero,
  features,
  common,
  services,
  services_section,
  differentiation,
  about,
  steps,
  contact,
  contact_info,
};

const translations = {
  es: esTranslations,
  en: enTranslations
};
function t(lang, key) {
  const keys = key.split(".");
  let value = translations[lang] || translations.es;
  for (const k of keys) {
    if (value && typeof value === "object" && k in value) {
      value = value[k];
    } else {
      console.warn(`Translation key not found: ${key} for language: ${lang}`);
      return key;
    }
  }
  return typeof value === "string" ? value : key;
}

const websiteIcon = new Proxy({"src":"/_astro/website.DdjXdAfl.gif","width":640,"height":640,"format":"gif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/assets/animated-icons/website.gif";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/martinnavarro/Documents/commit-landing/grape-landing/src/assets/animated-icons/website.gif");
							return target[name];
						}
					});

const digitalProcessIcon = new Proxy({"src":"/_astro/digital-process.B3famhOn.gif","width":640,"height":640,"format":"gif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/assets/animated-icons/digital-process.gif";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/martinnavarro/Documents/commit-landing/grape-landing/src/assets/animated-icons/digital-process.gif");
							return target[name];
						}
					});

const launchIcon = new Proxy({"src":"/_astro/launch.voQiT-Pw.gif","width":640,"height":640,"format":"gif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/assets/animated-icons/launch.gif";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/martinnavarro/Documents/commit-landing/grape-landing/src/assets/animated-icons/launch.gif");
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const lang = "es";
  const metadata = {
    title: "Desarrollo de Apps Web y M\xF3viles | COMMIT",
    ignoreTitleTemplate: true,
    description: "Agencia especializada en desarrollo de aplicaciones web y m\xF3viles para startups y empresas. Creamos MVPs, webapps y soluciones digitales personalizadas con las \xFAltimas tecnolog\xEDas.",
    keywords: [
      "desarrollo de apps",
      "desarrollo web",
      "desarrollo m\xF3vil",
      "mvp",
      "startup",
      "webapp",
      "agencia software",
      "aplicaciones personalizadas",
      "desarrollo react",
      "desarrollo node.js"
    ],
    canonical: "https://commit.ar/",
    openGraph: {
      title: "COMMIT - Desarrollo de Software para Startups y Empresas",
      description: "Transformamos ideas en aplicaciones web y m\xF3viles exitosas. Desarrollo \xE1gil, dise\xF1o moderno y tecnolog\xEDa de vanguardia.",
      type: "website",
      url: "https://commit.ar/"
      // TODO: Crear og-image-home.jpg (1200x630) - Ver /public/og-images/README.md
      // images: [
      //   {
      //     url: "https://commit.ar/og-image-home.jpg",
      //     width: 1200,
      //     height: 630,
      //     alt: "COMMIT - Agencia de Desarrollo de Software"
      //   }
      // ],
    },
    twitter: {
      cardType: "summary_large_image",
      title: "COMMIT - Desarrollo de Apps Web y M\xF3viles",
      description: "Creamos soluciones digitales personalizadas para startups y empresas. Apps, webapps y MVPs."
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "TranslatablePage", $$TranslatablePage, {})}   ${renderComponent($$result2, "Hero", $$Hero, { "actions": [
    {
      variant: "primary",
      text: t(lang, "nav.know_more"),
      href: "#features"
    },
    { text: t(lang, "nav.contact"), href: "#contact" }
  ] }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div class="absolute inset-0 bg-white dark:bg-gray-900"></div> <div class="absolute top-0 left-0 w-full h-full bg-no-repeat pointer-events-none bg-cover bg-center md:bg-[length:200%] md:bg-[center_top]" style="background-image: url('/src/assets/backgrounds/eli_7.jpg');"></div> ` })}`, "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate` <span class="text-black dark:text-slate-300 font-medium" data-i18n-key="hero.subtitle">${t(lang, "hero.subtitle")}</span> ` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate` <span class="text-black dark:text-white" data-i18n-key="hero.title_part1">${t(lang, "hero.title_part1")}</span><br> <span class="text-black dark:text-white" data-i18n-key="hero.title_part2">${t(lang, "hero.title_part2")}</span> <span class="relative inline-block"> <span class="text-transparent bg-clip-text bg-gradient-commit drop-shadow-md" data-i18n-key="hero.title_highlight">${t(lang, "hero.title_highlight")}</span> </span> ` })}` })}  ${renderComponent($$result2, "Services", $$Services, { "id": "servicios", "columns": 3, "items": [
    {
      title: t(lang, "services_section.items.web.title"),
      description: t(lang, "services_section.items.web.description"),
      iconImage: websiteIcon,
      callToAction: {
        text: t(lang, "services_section.items.web.cta"),
        href: getPermalink("/servicios/marketing-landings"),
        variant: "gradient-border"
      }
    },
    {
      title: t(lang, "services_section.items.business.title"),
      description: t(lang, "services_section.items.business.description"),
      iconImage: digitalProcessIcon,
      callToAction: {
        text: t(lang, "services_section.items.business.cta"),
        href: getPermalink("/servicios/sistemas-pymes"),
        variant: "gradient-border"
      }
    },
    {
      title: t(lang, "services_section.items.custom.title"),
      description: t(lang, "services_section.items.custom.description"),
      iconImage: launchIcon,
      callToAction: {
        text: t(lang, "services_section.items.custom.cta"),
        href: getPermalink("/servicios/desarrollo-medida"),
        variant: "gradient-border"
      }
    }
  ] }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate` <span data-i18n-key="services_section.subtitle">${t(lang, "services_section.subtitle")}</span> ` })}`, "tagline": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "tagline" }, { "default": ($$result4) => renderTemplate` <span data-i18n-key="services_section.tagline">${t(lang, "services_section.tagline")}</span> ` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate` <span data-i18n-key="services_section.title">${t(lang, "services_section.title")}</span> ` })}` })}  ${renderComponent($$result2, "Features", $$Features, { "id": "features", "columns": 2, "items": [
    {
      title: t(lang, "features.items.boutique.title"),
      description: t(lang, "features.items.boutique.description"),
      icon: "tabler:diamond"
    },
    {
      title: t(lang, "features.items.experience.title"),
      description: t(lang, "features.items.experience.description"),
      icon: "tabler:award"
    },
    {
      title: t(lang, "features.items.processes.title"),
      description: t(lang, "features.items.processes.description"),
      icon: "tabler:rocket"
    },
    {
      title: t(lang, "features.items.tech.title"),
      description: t(lang, "features.items.tech.description"),
      icon: "tabler:cpu"
    },
    {
      title: t(lang, "features.items.attention.title"),
      description: t(lang, "features.items.attention.description"),
      icon: "tabler:users"
    },
    {
      title: t(lang, "features.items.support.title"),
      description: t(lang, "features.items.support.description"),
      icon: "tabler:headset"
    }
  ] }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate` <span data-i18n-key="features.subtitle">${t(lang, "features.subtitle")}</span> ` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate` <span data-i18n-key="features.title">${t(lang, "features.title")}</span> ` })}` })}  ${renderComponent($$result2, "ScrollSnapContent", $$ScrollSnapContent, { "id": "diferenciacion", "items": [
    {
      title: t(lang, "differentiation.items.creativity.title"),
      description: t(lang, "differentiation.items.creativity.description"),
      icon: "tabler:bulb"
    },
    {
      title: t(lang, "differentiation.items.quality.title"),
      description: t(lang, "differentiation.items.quality.description"),
      icon: "tabler:award"
    },
    {
      title: t(lang, "differentiation.items.flexibility.title"),
      description: t(lang, "differentiation.items.flexibility.description"),
      icon: "tabler:adjustments"
    },
    {
      title: t(lang, "differentiation.items.custom.title"),
      description: t(lang, "differentiation.items.custom.description"),
      icon: "tabler:puzzle"
    },
    {
      title: t(lang, "differentiation.items.agile.title"),
      description: t(lang, "differentiation.items.agile.description"),
      icon: "tabler:users-group"
    },
    {
      title: t(lang, "differentiation.items.improvement.title"),
      description: t(lang, "differentiation.items.improvement.description"),
      icon: "tabler:trending-up"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Equipo COMMIT trabajando"
  } }, { "tagline": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "tagline" }, { "default": ($$result4) => renderTemplate` <span data-i18n-key="differentiation.tagline">${t(lang, "differentiation.tagline")}</span> ` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate` <span data-i18n-key="differentiation.title">${t(lang, "differentiation.title")}</span> ` })}` })}  <section class="relative py-16 md:py-20 overflow-hidden"> <!-- Gradient background --> <div class="absolute inset-0 bg-gradient-to-br from-commit-dark via-commit-darkest to-gray-900"></div> <!-- Animated gradient overlay --> <div class="absolute inset-0 opacity-30"> <div class="absolute inset-0 bg-gradient-to-tr from-commit-lighter/20 via-transparent to-commit-light/20 animate-pulse"></div> </div> <!-- Content --> <div class="relative max-w-7xl mx-auto px-4 sm:px-6"> <div class="max-w-3xl mx-auto text-center"> <h2 class="text-3xl md:text-4xl font-bold leading-tighter tracking-tighter mb-4 font-heading text-white"> <span data-i18n-key="about.title">${t(lang, "about.title")}</span> </h2> <p class="text-xl text-white mt-4 mb-8"> <span data-i18n-key="about.subtitle">${t(lang, "about.subtitle")}</span> </p> <!-- CTA Button --> <div class="mt-6"> <a${addAttribute(getPermalink("/about"), "href")} class="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-commit-dark bg-white hover:bg-commit-pale rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"> <span data-i18n-key="about.cta">Conoce más sobre nosotros</span> <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path> </svg> </a> </div> </div> </div> </section>  ${renderComponent($$result2, "Steps", $$Steps, { "items": [
    {
      title: 'Paso 1: <span class="font-medium" data-i18n-key="steps.items.discovery.title">' + t(lang, "steps.items.discovery.title") + "</span>",
      description: t(lang, "steps.items.discovery.description"),
      icon: "tabler:search"
    },
    {
      title: 'Paso 2: <span class="font-medium" data-i18n-key="steps.items.design.title">' + t(lang, "steps.items.design.title") + "</span>",
      description: t(lang, "steps.items.design.description"),
      icon: "tabler:layout-2"
    },
    {
      title: 'Paso 3: <span class="font-medium" data-i18n-key="steps.items.development.title">' + t(lang, "steps.items.development.title") + "</span>",
      description: t(lang, "steps.items.development.description"),
      icon: "tabler:code"
    },
    {
      title: 'Paso 4: <span class="font-medium" data-i18n-key="steps.items.testing.title">' + t(lang, "steps.items.testing.title") + "</span>",
      description: t(lang, "steps.items.testing.description"),
      icon: "tabler:bug"
    },
    {
      title: 'Paso 5: <span class="font-medium" data-i18n-key="steps.items.launch.title">' + t(lang, "steps.items.launch.title") + "</span>",
      description: t(lang, "steps.items.launch.description"),
      icon: "tabler:rocket"
    },
    {
      title: t(lang, "steps.items.ready"),
      icon: "tabler:check"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Proceso de trabajo en COMMIT"
  } }, { "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate` <span data-i18n-key="steps.title">${t(lang, "steps.title")}</span> ` })}` })}  ${renderComponent($$result2, "Contact", $$Contact, { "id": "contact", "inputs": [
    {
      type: "text",
      name: "name",
      label: t(lang, "contact.name_label")
    },
    {
      type: "email",
      name: "email",
      label: t(lang, "contact.email_label")
    }
  ], "textarea": {
    label: t(lang, "contact.message_label")
  }, "disclaimer": {
    label: t(lang, "contact.disclaimer")
  } }, { "description": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "description" }, { "default": ($$result4) => renderTemplate` <span data-i18n-key="contact.description">${t(lang, "contact.description")}</span> ` })}`, "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate` <span data-i18n-key="contact.subtitle">${t(lang, "contact.subtitle")}</span> ` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate` <span data-i18n-key="contact.title">${t(lang, "contact.title")}</span> ` })}` })}  ${renderComponent($$result2, "CallToAction", $$CallToAction, { "actions": [
    {
      variant: "primary",
      text: "Solicitar Presupuesto",
      href: getPermalink("/presupuesto"),
      icon: "tabler:calculator"
    },
    {
      variant: "tertiary",
      text: "Contactar por WhatsApp",
      href: "https://wa.me/5492915278982?text=Hola! Quiero solicitar un presupuesto",
      icon: "tabler:brand-whatsapp"
    }
  ] }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate`
Respondé unas preguntas simples y recibí un presupuesto adaptado a tu proyecto en menos de 24 horas
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
Presupuestos Personalizados
` })}` })} ` })}`;
}, "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/pages/index.astro", void 0);

const $$file = "/Users/martinnavarro/Documents/commit-landing/grape-landing/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
