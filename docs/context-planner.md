# 🎯 COMMIT Landing - Context Planner## 📦 Stack Tecnológico```json{  "framework": "Astro 5.12.9 (SSG)",  "styling": "Tailwind CSS 3.x + tailwindcss-animate",  "js-framework": "React 19.2.0 (Islands)",  "animations": "Motion 12.23.24 + Lottie 5.13.0",  "email": "EmailJS @emailjs/browser 4.x",  "icons": "astro-icon + @iconify-json/tabler",  "build": "Vite (via Astro)",  "deploy": "Vercel/Netlify ready"}```**Características clave:**- **Astro Islands**: Hidratación selectiva (React solo donde se necesita)- **Zero JS by default**: HTML estático + Progressive Enhancement- **View Transitions**: Navegación fluida entre páginas- **Image Optimization**: Astro Assets + Unpic CDN---## 🏗️ Arquitectura### Estructura de Directorios```src/├── components/│   ├── widgets/      # Secciones completas (Hero, Footer, etc)│   ├── ui/           # Componentes base (Button, Form)│   └── common/       # Utilidades (Image, Metadata)├── layouts/          # PageLayout, LandingLayout├── pages/            # Rutas (index, presupuesto, contact)├── utils/            # Helpers (email, permalinks, images)└── config/           # SEO, navegación```### Componentes Críticos**Header** (`src/components/widgets/Header.astro`)- Sticky navigation con auto-hide en footer (Intersection Observer)- Dropdown menus con Tailwind- Mobile: ToggleMenu hamburger**Hero** (`src/components/widgets/Hero.astro`)- Pattern ondulado SVG animado (paleta COMMIT)- Tailwind Animate: `animate-in fade-in slide-in-from-bottom`- Fireflies effect (canvas-based)**CallToAction** (`src/components/widgets/CallToAction.astro`)- Pattern ondulado similar al Hero- 3 ondas con gradientes (#052832 → #138bae → #26bce9)- Animaciones CSS `@keyframes wave`**BudgetBuilder** (`src/components/widgets/BudgetBuilder.tsx`)- React component (cliente-side)- 4 steps: basics, type, modules, summary- EmailJS integration con estados loading/success/error- Progress bar animada**Form** (`src/components/ui/Form.astro`)- EmailJS integration- Validación nativa HTML5- Feedback messages (green/red)---## 🎨 Sistema de Diseño### Paleta COMMIT (Tailwind)```javascript'commit': {  darkest: '#052832',  // Base oscura  darker: '#117999',  dark: '#1283a5',  DEFAULT: '#138bae',  // Principal  light: '#1ba1c9',  lighter: '#26bce9',  // Accent  lightest: '#59cbee',  pale: '#ade4f7',     // Backgrounds}```### Gradientes Predefinidos```cssbg-gradient-commit       /* #138bae → #26bce9 */bg-gradient-commit-dark  /* #052832 → #117999 */bg-gradient-commit-light /* #59cbee → #ade4f7 */```### Animaciones (Tailwind Animate)```cssanimate-in fade-in slide-in-from-bottom duration-1000animate-in fade-in-50 delay-[200ms]hover:animate-pulse```**Custom animations** (CustomStyles.astro):- `fadeInUp`: Aparición desde abajo- `wave`: Movimiento ondulatorio- `float`: Levitación suave---## 📧 Integración EmailJS### Setup```bashnpm install @emailjs/browser```### Variables de Entorno (.env.local)```envPUBLIC_EMAILJS_SERVICE_ID=service_xxxxxPUBLIC_EMAILJS_TEMPLATE_CONTACT=template_xxxxxPUBLIC_EMAILJS_TEMPLATE_BUDGET=template_xxxxxPUBLIC_EMAILJS_PUBLIC_KEY=your_public_key```### Implementación**Utilities** (`src/utils/email.ts`):- `initEmailJS()`: Inicializa con public key- `sendContactEmail(data)`: Form de contacto- `sendBudgetEmail(data)`: Budget Builder**Destino:** martin.navarro.dev@gmail.com**Templates necesarios:**1. Contact: name, email, message2. Budget: name, email, phone, company, selections (basics, type, modules)---## ⚙️ Configuración### SEO (src/config/seo.ts)- Meta tags por página- Open Graph tags- Twitter Cards- Canonical URLs- Sitemap automático### Navegación (src/navigation.ts)```javascriptheaderData.links    // Links del headerfooterData.links    // Links del footer (incluye Productos)footerData.socialLinks  // Instagram, LinkedIn, WhatsApp```**Nota:** "Productos" comentado en header (página en desarrollo)---## 🚀 Scripts NPM```bashnpm run dev       # http://localhost:4321npm run build     # Build para producciónnpm run preview   # Preview del buildnpm run check     # Astro + ESLint + Prettiernpm run fix       # Auto-fix linting```---## ⚠️ Integraciones Pendientes### 1. EmailJS (CRÍTICO)- [ ] Crear cuenta en emailjs.com- [ ] Conectar Gmail- [ ] Crear 2 templates- [ ] Copiar credenciales a `.env.local`- [ ] Testing de envío### 2. Analytics```javascript// TODO: Configurar Google Analytics o Plausible// Ver src/components/common/Analytics.astro// Opción recomendada: Plausible (privacy-focused, sin cookies)```**Eventos a trackear:**- Budget Builder completado- Formulario de contacto enviado- CTAs clickeados- Scroll depth### 3. OG Images```bash# Ver /public/og-images/README.md# Crear imágenes 1200x630px para:# - Home, Presupuesto, Contacto, Servicios```---## 🐛 Errores Conocidos### 1. Tailwind Animate ESLint Warning```javascript// tailwind.config.js línea 4// 'tailwindcssAnimate' is defined but never used// ⚠️ Falso positivo - el plugin SÍ se usa en el array```### 2. BudgetBuilder - Variables no usadas```typescript// BudgetBuilder.tsx líneas 17-18// 'isSubmitting' y 'submitMessage' están usadas en el JSX// ⚠️ Ignorar este warning de ESLint```---## 🎯 Buenas Prácticas Implementadas### Performance✅ Static Site Generation (SSG)  ✅ Image optimization (Astro Assets)  ✅ CSS Purging (Tailwind JIT)  ✅ Component lazy loading (Islands)  ✅ Minimal JavaScript (~50KB gzipped)### SEO✅ Semantic HTML  ✅ Meta tags completos  ✅ Sitemap.xml generado  ✅ robots.txt configurado  ✅ Canonical URLs  ⚠️ OG images pendientes### Accesibilidad✅ Aria labels en navegación  ✅ Keyboard navigation funcional  ✅ Focus states visibles  ✅ Color contrast (light mode)  ```javascript// TODO: Verificar contraste en dark mode (WCAG AA)// Ver src/components/CustomStyles.astro```

### UX
✅ Header auto-hide en footer  
✅ Animaciones sutiles con Tailwind Animate  
✅ Form validation nativa  
✅ Loading states en forms  
✅ Error handling con fallback a WhatsApp

---

## 🔧 TODOs en Código

```bash
# Buscar TODOs en el proyecto:
grep -r "TODO" src/
```

**Lista actual:**
1. `CustomStyles.astro`: Verificar contraste dark mode
2. `Header.astro`: Reactivar ToggleTheme y ToggleLanguage
3. `Analytics.astro`: Configurar Google Analytics o Plausible
4. `og-images/README.md`: Crear imágenes OG para páginas principales

---

## 📊 Métricas Target (Lighthouse)

```
Performance:  > 95
Accessibility: > 95
Best Practices: > 95
SEO: 100
```

**Optimizaciones aplicadas:**
- Preload critical resources
- Font display: swap
- Lazy loading de imágenes
- Minificación de CSS/JS

---

## 🔄 Próximas Iteraciones

**Sprint 2 (Febrero 2026):**
- Completar página Productos
- Activar sistema i18n (ES/EN)
- Blog con MDX
- Testimonios dinámicos

**Sprint 3 (Marzo 2026):**
- Dashboard de clientes
- A/B testing de CTAs
- Optimización avanzada mobile
- PWA capabilities

---

**Última actualización:** 14 Enero 2026  
**Mantenedor:** Martin Navarro  
**Email:** martin.navarro.dev@gmail.com

