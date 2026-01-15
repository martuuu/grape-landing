# 🚀 COMMIT - Tecnologías del Sur

## Landing Page Oficial

Sitio web corporativo de COMMIT, agencia de desarrollo de software especializada en soluciones digitales innovadoras. Construido con Astro 5.12.9 y optimizado para máximo rendimiento.

---

## 📋 Índice

- [Stack Tecnológico](#-stack-tecnológico)
- [Instalación](#-instalación)
- [Desarrollo](#-desarrollo)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Configuración](#-configuración)
- [Deployment](#-deployment)
- [Documentación Adicional](#-documentación-adicional)

---

## 🛠️ Stack Tecnológico

### Core
- **[Astro 5.12.9](https://astro.build)** - Framework SSG de alto rendimiento
- **[React 19.2.0](https://react.dev)** - Componentes interactivos (Islands Architecture)
- **[Tailwind CSS 3.x](https://tailwindcss.com)** - Utility-first styling
- **[TypeScript](https://www.typescriptlang.org)** - Type safety

### Animaciones & UI
- **[tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate)** - Animaciones con utilities
- **[Motion 12.23.24](https://motion.dev)** - Animaciones avanzadas
- **[Lottie-web 5.13.0](https://airbnb.io/lottie)** - Animaciones JSON

### Integraciones
- **[EmailJS](https://www.emailjs.com)** - Envío de formularios sin backend
- **[Astro Icon](https://github.com/natemoo-re/astro-icon)** - Sistema de iconos con Tabler

### Build & Dev
- **Vite** - Build tool ultra-rápido
- **ESLint + Prettier** - Code quality
- **Astro Compress** - Minificación automática

---

## 📦 Instalación

### Requisitos
- **Node.js** 18.17.1+ o 20.3.0+ o 21.0.0+
- **npm** o **pnpm**

### Clonar e Instalar

```bash
# Clonar repositorio
git clone https://github.com/martuuu/grape-landing.git
cd grape-landing

# Instalar dependencias
npm install

# Copiar variables de entorno
cp .env.example .env.local
```

---

## 🚀 Desarrollo

### Comandos Disponibles

```bash
# Desarrollo (puerto 4321)
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview

# Verificar código (Astro + ESLint)
npm run check

# Auto-fix linting
npm run fix
```

### Acceder al sitio

```
http://localhost:4321
```

---

## 📁 Estructura del Proyecto

```
src/
├── assets/           # Imágenes, iconos, estilos
│   ├── images/       # Imágenes del proyecto
│   ├── animated-icons/
│   └── styles/
├── components/       # Componentes reutilizables
│   ├── widgets/      # Secciones completas (Hero, Footer, etc)
│   ├── ui/           # Componentes base (Button, Form, etc)
│   ├── common/       # Utilidades (Image, Metadata, etc)
│   └── effects/      # Efectos visuales (Fireflies, etc)
├── layouts/          # Templates de página
│   ├── Layout.astro
│   ├── PageLayout.astro
│   └── LandingLayout.astro
├── pages/            # Rutas del sitio (file-based routing)
│   ├── index.astro   # Homepage
│   ├── about.astro   # Sobre nosotros
│   ├── productos.astro
│   ├── contact.astro
│   ├── presupuesto.astro
│   └── servicios/    # Páginas de servicios
├── utils/            # Funciones helper
│   ├── email.ts      # Integración EmailJS
│   ├── permalinks.ts # Gestión de URLs
│   └── images.ts     # Optimización de imágenes
├── config/           # Configuración
│   └── seo.ts        # SEO defaults
├── navigation.ts     # Configuración de menús
└── types.d.ts        # TypeScript types
```

---

## ⚙️ Configuración

### 1. EmailJS (Formularios)

**Crear cuenta en [emailjs.com](https://emailjs.com)**

1. Conectar Gmail: `martin.navarro.dev@gmail.com`
2. Crear 2 templates:
   - **Template Contacto**: name, email, message
   - **Template Presupuesto**: name, email, phone, company, selections

3. Copiar credenciales a `.env.local`:

```env
PUBLIC_EMAILJS_SERVICE_ID=service_xxxxx
PUBLIC_EMAILJS_TEMPLATE_CONTACT=template_xxxxx
PUBLIC_EMAILJS_TEMPLATE_BUDGET=template_xxxxx
PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Documentación completa**: Ver `.env.example`

### 2. Analytics (Opcional)

Editar `src/components/common/Analytics.astro`:

**Opción A: Google Analytics (GA4)**
```javascript
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

**Opción B: Plausible (Recomendado)**
```javascript
<script defer data-domain="commit.agency" src="https://plausible.io/js/script.js"></script>
```

### 3. SEO & Meta Tags

Editar `src/config/seo.ts`:

```typescript
export const SITE = {
  name: 'COMMIT',
  origin: 'https://commit.agency',
  basePathname: '/',
  description: 'Agencia de desarrollo de software...',
};
```

### 4. Navegación

Editar `src/navigation.ts`:

```typescript
export const headerData = {
  links: [
    { text: 'Inicio', href: '/' },
    { text: 'Productos', href: '/productos', links: [...] },
    // ...
  ]
};
```

---

## 🎨 Sistema de Diseño

### Paleta de Colores COMMIT

Configurada en `tailwind.config.js`:

```javascript
colors: {
  commit: {
    darkest: '#052832',  // Base oscura
    darker: '#117999',
    dark: '#1283a5',
    DEFAULT: '#138bae',  // Color principal
    light: '#1ba1c9',
    lighter: '#26bce9',  // Accent
    lightest: '#59cbee',
    pale: '#ade4f7',     // Backgrounds
  }
}
```

### Uso en HTML

```html
<!-- Textos -->
<h1 class="text-commit">Título</h1>
<p class="text-commit-light">Subtítulo</p>

<!-- Backgrounds -->
<div class="bg-commit">...</div>
<div class="bg-gradient-commit">...</div>

<!-- Borders -->
<div class="border-2 border-commit-lighter">...</div>
```

### Animaciones Tailwind

```html
<!-- Fade in desde abajo -->
<div class="animate-in fade-in slide-in-from-bottom duration-700">

<!-- Con delay -->
<div class="animate-in fade-in delay-300">

<!-- Hover effects -->
<div class="hover:animate-pulse">
```

---

## 📄 Páginas Principales

### Homepage (`/`)
- Hero con pattern ondulado animado
- Sección de servicios
- Features destacados
- CallToAction final

### Productos (`/productos`)
- Grid de productos (Laneko, Consultorio, Medifar, Picky)
- Breadcrumbs en páginas individuales
- Integración con navbar dropdown

### Presupuesto (`/presupuesto`)
- Budget Builder interactivo (React)
- 4 pasos: basics, tipo de proyecto, módulos, resumen
- Integración con EmailJS
- Progress bar animada

### Contacto (`/contact`)
- Formulario simple
- Validación HTML5
- EmailJS integration
- Estados de loading/success/error

### Sobre Nosotros (`/about`)
- Historia del equipo
- Áreas de expertise
- Proyectos destacados
- Stack tecnológico

---

## 🚀 Deployment

### Vercel (Recomendado)

1. Conectar repositorio en [vercel.com](https://vercel.com)
2. Configurar variables de entorno (EmailJS)
3. Deploy automático en cada push a `main`

```bash
# CLI
vercel --prod
```

### Netlify

1. Conectar repositorio en [netlify.com](https://netlify.com)
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Variables de entorno en Settings → Environment

### Build Manual

```bash
npm run build
# Output en /dist
```

---

## 🐛 Troubleshooting

### Error: "EmailJS public key not found"

**Solución**: Configurar `.env.local` con credenciales de EmailJS.

### Imágenes no se ven en producción

**Solución**: Verificar que las imágenes estén en `src/assets/` o `public/` según corresponda.

### Animaciones no funcionan

**Solución**: Verificar que `tailwindcss-animate` esté instalado:
```bash
npm install tailwindcss-animate
```

---

## 📚 Documentación Adicional

### Archivos de Documentación

- **[DEVELOPMENT-ROADMAP.md](./DEVELOPMENT-ROADMAP.md)** - Roadmap completo del sprint UX/UI
- **[SPRINT-SUMMARY.md](./SPRINT-SUMMARY.md)** - Resumen ejecutivo del sprint
- **[context-planner.md](./context-planner.md)** - Referencia técnica detallada
- **[.env.example](./.env.example)** - Template de variables de entorno
- **[/public/og-images/README.md](./public/og-images/README.md)** - Guía para crear OG images

### TODOs Pendientes

```bash
# Buscar TODOs en el código
grep -r "TODO" src/
```

**Lista actual:**
1. Verificar contraste de colores en dark mode (WCAG AA)
2. Reactivar ToggleTheme y ToggleLanguage
3. Configurar Google Analytics o Plausible
4. Crear OG images para páginas principales

---

## 📊 Métricas de Performance

### Lighthouse Scores Target

```
Performance:     > 95
Accessibility:   > 95
Best Practices:  > 95
SEO:             100
```

### Core Web Vitals

- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

---

## 🤝 Contribuir

Este es un proyecto privado de COMMIT. Para contribuir:

1. Crear branch desde `develop`
2. Hacer cambios
3. Crear PR con descripción detallada
4. Esperar code review

### Convenciones de Commits

```
feat: Nueva funcionalidad
fix: Corrección de bug
docs: Cambios en documentación
style: Cambios de formato (no afectan código)
refactor: Refactorización de código
perf: Mejoras de performance
test: Agregar o modificar tests
```

---

## 📞 Contacto

**COMMIT - Tecnologías del Sur**

- **Email**: martin.navarro.dev@gmail.com
- **Website**: https://commit.agency
- **Repositorio**: https://github.com/martuuu/grape-landing

---

## 📝 Licencia

© 2026 COMMIT - Tecnologías del Sur. Todos los derechos reservados.

---

**Última actualización:** 14 de Enero 2026  
**Versión:** 1.0.0  
**Stack:** Astro 5.12.9 + React 19.2.0 + Tailwind CSS 3.x
