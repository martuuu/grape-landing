# 🚀 Grape Landing - Documentación Técnica

## 📋 Información General del Proyecto

### Stack Tecnológico
- **Framework**: Astro 5.0 + Tailwind CSS
- **Idiomas**: Español (es) e Inglés (en) - _Internacionalización pendiente_
- **Configuración**: `src/config.yaml`
- **Estructura**: Template modular AstroWind con widgets reutilizables
- **MCP Server**: Astro-MCP instalado y configurado (puerto 4321/__mcp/sse)
- **Node**: ^18.17.1 || ^20.3.0 || >= 21.0.0
- **Package Manager**: npm

### Herramientas de Desarrollo
- **MCP Server**: Mejora contexto de IA sobre el proyecto (auto-activado con `npm run dev`)
- **ESLint**: Validación de código - Detecta errores y malas prácticas
  - Config: `eslint.config.js` (flat config)
  - Comando: `npm run check:eslint` o `npm run fix:eslint`
  - Reglas: Recomendadas de Astro + TypeScript
- **Prettier**: Formateo automático de código
  - Plugin: `prettier-plugin-astro`
  - Comando: `npm run check:prettier` o `npm run fix:prettier`
  - Auto-formatea al guardar (si está configurado en VSCode)
- **TypeScript**: Type checking estricto habilitado
  - Comando: `npm run check:astro`

---

## 🔧 MCP Server (Model Context Protocol)

### ¿Qué es y para qué sirve?
El MCP Server de Astro **mejora el contexto que los modelos de IA (como GitHub Copilot) tienen sobre tu proyecto**. Proporciona información en tiempo real que no está visible en los archivos:

**📊 Información que proporciona:**
- Runtime info del servidor Astro (rutas, configuración activa)
- Documentación actualizada de Astro
- Detalles de integraciones instaladas
- Graph de módulos y dependencias Vite

**🎯 Beneficios para ti:**
- Respuestas más precisas sobre configuración del proyecto
- Acceso instantáneo a documentación de Astro
- Mejor comprensión de rutas y estructura del proyecto
- Debugging más eficiente

### 🚀 Uso (Automático)

**Tú NO necesitas hacer nada**. Cuando el servidor de desarrollo está corriendo:

```bash
npm run dev
```

El MCP se activa automáticamente en: `http://localhost:4321/__mcp/sse`


### ⚙️ Configuración Técnica

- **URL**: `http://localhost:4321/__mcp/sse`
- **Config file**: `.vscode/mcp.json` (auto-generado)
- **Integración**: `astro.config.ts` (ya instalado: `mcp()`)
- **Package**: `astro-mcp@^0.4.2`

### 🔍 Herramientas Disponibles (para el modelo IA)

#### Astro Tools:
- `get-astro-config` - Config completa del proyecto
- `list-astro-routes` - Rutas con detalles
- `get-astro-server-address` - Dirección del dev server
- `list-astro-integrations` - Integraciones del ecosistema
- `get-astro-integration` - Metadata de integración específica
- `search-astro-docs` - Búsqueda en docs oficiales
- `get-astro-changes` - Changelog de paquetes

#### Vite Tools:
- `get-vite-config` - Configuración Vite
- `get-vite-module-info` - Graph de módulos

---

## 🎯 Objetivo del Proyecto

Crear un sitio web profesional tipo marketing landing para **Grape**, una agencia de desarrollo de software, adaptando el template AstroWind con:

- ✅ Diseño limpio y profesional
- ✅ Logo personalizado implementado
- ✅ Estructura de secciones optimizada
- 🔄 Soporte multiidioma (Español e Inglés) - **En desarrollo**
- 🔄 SEO optimizado - **Pendiente**
- 🔄 Formulario de contacto funcional - **Pendiente**
- 🔄 Transiciones suaves con View Transitions API - **Pendiente**
- 🔄 Tipografías personalizadas - **Opcional**

### Estado del Proyecto
- **Versión actual**: 1.2
- **Fase actual**: Desarrollo (Post-Fase 2)
- **Servidor de desarrollo**: http://localhost:4321
- **Página principal**: `/index-new` (provisional)

---

## � Tareas Pendientes (Roadmap)

### 🚀 Prioridad Alta
- [ ] **Internacionalización (i18n)**
  - Implementar sistema de traducciones ES/EN
  - Crear archivos de idioma (`src/locales/es.json`, `src/locales/en.json`)
  - Agregar selector de idioma al Header
  - Configurar rutas multiidioma o detección automática
  
- [x] **SEO Optimization** ✅
  - [x] Metadata personalizada por página
  - [x] Open Graph tags optimizados
  - [x] Structured data (JSON-LD) - Componente creado
  - [x] Sitemap configurado (automático con @astrojs/sitemap)
  - [x] Robots.txt optimizado
  - [x] Keywords strategy implementada
  - [x] SEO configuration centralizada
  - [ ] Crear imágenes Open Graph (ver `/public/og-images/README.md`)
  - [ ] Configurar Google Search Console
  - [ ] Validar schemas en Schema Validator

- [ ] **Formulario de Contacto**
  - Backend para envío de emails (Netlify Forms / FormSpree / API propia)
  - Validación de campos
  - Mensajes de confirmación/error
  - reCAPTCHA o similar anti-spam

### 🎨 Prioridad Media
- [ ] **View Transitions API**
  - Implementar transiciones entre páginas
  - Animaciones suaves en navegación
  - Preservar estado cuando sea necesario
  - Fallbacks para navegadores antiguos

- [ ] **Contenido Final (Copy)**
  - Hero principal con copy definitivo
  - Descripción de servicios
  - About Us / Quiénes Somos
  - Testimonios reales
  - Portfolio/casos de éxito
  - Footer con información real

- [ ] **UI/UX Improvements**
  - Revisar responsive en todos los breakpoints
  - Micro-animaciones (scroll reveals, hovers)
  - Loading states
  - Accesibilidad (ARIA labels, keyboard navigation)

### 🎯 Prioridad Baja (Opcional)
- [ ] **Tipografías Personalizadas**
  - Seleccionar y cargar fuentes corporativas
  - Configurar fallbacks
  - Optimizar carga (subset, preload)

- [ ] **Performance Optimization**
  - Lazy loading de imágenes
  - Code splitting
  - Análisis con Lighthouse
  - Optimización de assets

- [ ] **Analytics**
  - Google Analytics 4
  - Hotjar o similar para heatmaps
  - Conversión tracking

---

## 📦 Componentes/Widgets Disponibles

### Widgets de Layout Principales
Los siguientes widgets están disponibles en `src/components/widgets/`:

1. **Hero.astro** - Hero principal con imagen/video de fondo
2. **Hero2.astro** - Hero alternativo optimizado para SaaS
3. **HeroText.astro** - Hero minimalista solo con texto
4. **Features.astro** - Grid de características/servicios (flexible columns)
5. **Features2.astro** - Características en 2 columnas específicas
6. **Features3.astro** - Características con sección de contacto integrada
7. **Content.astro** - Sección de contenido con imagen (reversible)
8. **Stats.astro** - Estadísticas numéricas destacadas
9. **Steps.astro** - Pasos de proceso/metodología
10. **Steps2.astro** - Pasos alternativos con formulario de contacto
11. **Brands.astro** - Logos de clientes/partners
12. **Testimonials.astro** - Testimonios y reseñas
13. **Contact.astro** - Formulario de contacto completo
14. **CallToAction.astro** - CTA final (conversión)
15. **FAQs.astro** - Preguntas frecuentes (accordion)
16. **Pricing.astro** - Planes y precios
17. **BlogLatestPosts.astro** - Últimos posts del blog
18. **Note.astro** - Nota destacada/banner
19. **Announcement.astro** - Anuncio superior sticky
20. **Header.astro** - Navegación principal
21. **Footer.astro** - Pie de página

### Componentes Comunes
Disponibles en `src/components/common/`:
- **Image.astro** - Wrapper optimizado para imágenes
- **ToggleTheme.astro** - Switcher dark/light mode
- **ToggleLanguage.astro** - Selector de idioma (a implementar)
- **Analytics.astro** - Integración de analytics
- **Metadata.astro** - Meta tags SEO

### Componentes UI
Disponibles en `src/components/ui/`:
- **Button.astro** - Botones reutilizables con variantes
- **Form.astro** - Elementos de formulario
- **Headline.astro** - Títulos de sección consistentes
- **Timeline.astro** - Línea de tiempo visual
- **ItemGrid.astro** - Grids de ítems flexibles

---

## 🏗️ Arquitectura de Páginas

### Página Principal (index-new.astro)
Estructura actual de 10 secciones implementadas:

| # | Sección | Componente | Propósito |
|---|---------|------------|-----------|
| 1 | Hero Principal | `Hero.astro` | Presentación impactante con CTA |
| 2 | Features Grid | `Features.astro` | "Qué hacemos en GRAPE" - 2 columnas |
| 3 | About Us | `Features2.astro` | Quiénes somos - Fondo azul claro |
| 4 | Services Grid | `Features.astro` | Servicios destacados |
| 5-7 | Content Trio | `Content.astro` x3 | Diferenciadores, procesos, cultura |
| 8 | Support Info | `Features2.astro` | "Estamos aquí para ayudar" |
| 9 | Contact Form | `Contact.astro` | Formulario de contacto |
| 10 | Services Detail | `Content.astro` | Contenido adicional de servicios |

### Otras Páginas
- `/about.astro` - Página "Nosotros"
- `/services.astro` - Página de servicios
- `/contact.astro` - Página de contacto standalone
- `/pricing.astro` - Planes y precios
- `/trabajos.astro` - Portfolio
- `/quienes-somos.astro` - About detallado
- `/presupuestos.astro` - Solicitud de presupuesto

### Blog
- `/[...blog]/` - Sistema de blog con:
  - Categorías
  - Tags
  - Paginación
  - Posts individuales con MDX
  - RSS feed

---

## 🌍 Estrategia de Internacionalización (i18n)

### Approach Propuesto
**Opción elegida**: Sistema de traducciones basado en archivos JSON + helper de traducción

### Estructura de Archivos
```
src/
  i18n/
    index.ts          # Helper principal de traducción
    utils.ts          # Utilidades (detección idioma, navegación)
    types.ts          # Tipos TypeScript
  locales/
    es.json           # Traducciones español (default)
    en.json           # Traducciones inglés
```

### Configuración en config.yaml
```yaml
i18n:
  defaultLanguage: 'es'
  languages: ['es', 'en']
  textDirection: 'ltr'
  showLanguageSelector: true
```

### Ejemplo de Uso
```typescript
// En cualquier componente .astro
import { t } from '~/i18n';

const currentLang = Astro.currentLocale || 'es';
const title = t(currentLang, 'hero.title');
```

### Estructura de Traducciones
```json
{
  "nav": {
    "home": "Inicio",
    "about": "Nosotros",
    "services": "Servicios",
    "contact": "Contacto"
  },
  "hero": {
    "title": "Mejora la presencia online de tu Startup",
    "subtitle": "Soluciones de desarrollo que impulsan tu negocio",
    "cta": "Comenzar"
  },
  "common": {
    "learnMore": "Saber más",
    "getStarted": "Comenzar",
    "contactUs": "Contáctanos"
  }
}
```

### Implementación Pendiente
- [ ] Crear helpers de traducción en `src/i18n/`
- [ ] Generar archivos JSON con todo el contenido
- [ ] Modificar Header.astro para agregar selector de idioma
- [ ] Actualizar todas las páginas para usar sistema de traducciones
- [ ] Configurar rutas (opcional): `/es/`, `/en/` o detección automática // CONFIGURACION AUTOMATICA SE DEBE IMPLEMENTAR

---

## 📝 Historial de Desarrollo

### ✅ Fase 1: Preparación y Setup (Completada)
- Análisis completo del template AstroWind
- Logo personalizado implementado en `Logo.astro`
- Colores corporativos configurados en Tailwind
- MCP Server de Astro instalado y configurado

### ✅ Fase 2: Estructura Base (Completada)
- Creación de `index-new.astro` con 10 secciones
- Integración de todos los widgets necesarios
- Contenido inicial traducido al español
- Navegación básica configurada

### 🔄 Fase 3: Internacionalización (En Progreso)
- Sistema de traducciones ES/EN
- Selector de idioma
- Rutas multiidioma

### ⏳ Fase 4: Personalización de Contenido (Pendiente)
- Copy final para todas las secciones
- Imágenes y assets propios
- Metadata y SEO por página
- Footer personalizado

### ⏳ Fase 5: Features Avanzadas (Pendiente)
- View Transitions API
- Formulario de contacto funcional
- Optimización de performance
- Analytics integration

### ⏳ Fase 6: Testing y Deploy (Pendiente)
- Testing responsive
- Validación SEO
- Build de producción
- Deploy final

---

## 📂 Estructura del Proyecto

```
grape-landing/
├── .vscode/
│   └── mcp.json              # Config MCP Server (auto-generado)
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── _headers              # Netlify headers
├── src/
│   ├── assets/
│   │   ├── images/           # Logo, hero-image, etc.
│   │   └── styles/
│   │       └── tailwind.css  # Estilos globales
│   ├── components/
│   │   ├── widgets/          # Componentes de página (Hero, Features, etc.)
│   │   ├── common/           # Utilidades comunes (Image, Meta, etc.)
│   │   ├── ui/               # Componentes UI (Button, Form, etc.)
│   │   ├── Logo.astro        # Logo personalizado ✅
│   │   └── CustomStyles.astro
│   ├── content/
│   │   ├── config.ts         # Configuración de colecciones
│   │   └── post/             # Posts del blog (MDX)
│   ├── layouts/
│   │   ├── Layout.astro      # Layout base
│   │   ├── PageLayout.astro  # Layout para páginas
│   │   └── MarkdownLayout.astro
│   ├── pages/
│   │   ├── index.astro       # Home original
│   │   ├── index-new.astro   # Home en desarrollo ✅
│   │   ├── about.astro
│   │   ├── services.astro
│   │   ├── contact.astro
│   │   ├── pricing.astro
│   │   └── [...blog]/        # Rutas dinámicas del blog
│   ├── utils/                # Helpers y utilidades
│   ├── config.yaml           # Configuración del sitio ⚠️
│   ├── navigation.ts         # Navegación header/footer
│   └── env.d.ts
├── astro.config.ts           # Configuración Astro + MCP ✅
├── tailwind.config.js        # Configuración Tailwind ✅
├── package.json
└── README.md

Leyenda:
✅ Actualizado/Configurado
⚠️ Pendiente de personalización
```

---

## 🎨 Branding y Diseño

### Assets Actuales
- ✅ **Logo**: `src/assets/images/logo.png` - Implementado
- ✅ **Colores**: Configurados en `tailwind.config.js` y `CustomStyles.astro`
- ⏳ **Favicon**: Por personalizar
- ⏳ **Tipografías**: Inter (default) - Personalización opcional

### Paleta de Colores (Tailwind)
Los colores se configuran mediante CSS variables en `CustomStyles.astro`:

```css
--aw-color-primary: rgb(X, X, X);
--aw-color-secondary: rgb(X, X, X);
--aw-color-accent: rgb(X, X, X);
--aw-color-bg-light: rgb(X, X, X);
```

### Tipografías
**Actual**: `@fontsource-variable/inter`

**Opciones para personalización**:
- Google Fonts (next/font para optimización)
- Adobe Fonts
- Fontsource (autohosted)

### Theme System
- ✅ Dark mode implementado
- ✅ Configuración en `src/config.yaml`: `ui.theme: 'system'`
- Toggle disponible en `ToggleTheme.astro`

---

## � View Transitions API (Astro)

### ¿Qué son las View Transitions?
Las View Transitions de Astro permiten animaciones suaves entre navegación de páginas sin necesidad de JavaScript adicional.

### Implementación Básica
```astro
---
// En Layout.astro
import { ViewTransitions } from 'astro:transitions';
---

<html>
  <head>
    <ViewTransitions />
  </head>
  <body>
    <!-- contenido -->
  </body>
</html>
```

### Directivas Disponibles
```astro
<!-- Persistir elemento entre páginas -->
<div transition:persist="nav-state">...</div>

<!-- Animar elementos específicos -->
<img transition:name="hero" />

<!-- Controlar animación -->
<div transition:animate="slide">...</div>
```

### Opciones de Animación
- `fade` - Fundido (default)
- `slide` - Deslizamiento
- `none` - Sin animación
- Custom CSS animations

### Fallback
Las transitions degradan gracefully en navegadores antiguos (full page reload).

### Implementación Pendiente
- [ ] Agregar `<ViewTransitions />` a Layout.astro
- [ ] Configurar transiciones para elementos clave (hero, navbar)
- [ ] Testing cross-browser
- [ ] Optimizar performance con `transition:persist`

---

## 💡 Comandos Útiles y Herramientas

### Desarrollo
```bash
npm run dev          # Servidor de desarrollo (http://localhost:4321)
                     # → Activa MCP automáticamente
npm run build        # Build de producción
npm run preview      # Preview del build local
npm run check        # Valida TODO (Astro + ESLint + Prettier)
npm run fix          # Arregla TODO automáticamente
```

### Validación Individual
```bash
npm run check:astro     # Solo validación Astro + TypeScript
npm run check:eslint    # Solo validación ESLint
npm run check:prettier  # Solo verifica formato
npm run fix:eslint      # Auto-fix errores ESLint
npm run fix:prettier    # Auto-formatea código
```

**Configuración**: `eslint.config.js` (ya tiene reglas de Astro + TypeScript)

### ✨ Prettier - Formateador Automático
**¿Qué hace?** Formatea tu código automáticamente:
- ✅ Indentación consistente
- ✅ Comillas y punto y coma
- ✅ Longitud de líneas
- ✅ Espacios en blanco

**Tip - Formatear al guardar en VSCode**:
```json
// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

### 🤖 MCP Server
**Automático** - Se activa con `npm run dev`
- No requieres hacer nada manual
- Mejora respuestas de IA sobre tu proyecto
- URL interna: `http://localhost:4321/__mcp/sse`

---

## 📊 Métricas de Performance Actuales

### Objetivos (Lighthouse)
- ✅ Performance: 90+
- ✅ Accessibility: 95+
- ✅ Best Practices: 95+
- ✅ SEO: 95+

### Optimizaciones Implementadas
- ✅ Lazy loading de imágenes (Unpic + Astro Assets)
- ✅ Compresión HTML/CSS/JS (astro-compress)
- ✅ Minificación automática
- ⏳ Code splitting por ruta
- ⏳ Preload de recursos críticos

---

## � Referencias y Documentación

### Astro
- [Documentación oficial](https://docs.astro.build/)
- [View Transitions](https://docs.astro.build/en/guides/view-transitions/)
- [Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [Image Optimization](https://docs.astro.build/en/guides/images/)

### Tailwind CSS
- [Documentación](https://tailwindcss.com/docs)
- [Customización](https://tailwindcss.com/docs/configuration)

### MCP Server
- [astro-mcp GitHub](https://github.com/yunsii/astro-mcp)
- [Model Context Protocol](https://modelcontextprotocol.io/)

### Template Original
- [AstroWind GitHub](https://github.com/arthelokyo/astrowind)
- [AstroWind Demo](https://astrowind.vercel.app/)

---

## � Notas Importantes

### Desarrollo
- **NO eliminar** `index.astro` hasta que sea la versión final
- **Mantener** estructura de carpetas del template original
- **Usar widgets existentes** en lugar de crear componentes nuevos
- **Blog habilitado** - Decidir si mantenerlo o deshabilitarlo en `config.yaml`
- **Errores de fetch (ECONNREFUSED)** - Son warnings no-críticos de imágenes externas (Unsplash), no afectan funcionalidad. Ver `docs/TROUBLESHOOTING.md`

### MCP Server
- Se actualiza automáticamente al correr `npm run dev`
- Proporciona contexto en tiempo real para modelos de IA
- Útil para debugging y consulta de documentación

### Imágenes
- Preferir imágenes locales en `src/assets/images/`
- Imágenes externas (Unsplash) pueden causar warnings de fetch
- Configurado soporte para `images.unsplash.com` en `astro.config.ts`
- Optimizar antes de subir (WebP, < 500KB)

### Deployment
- Compatible con Netlify, Vercel, y otros hosts estáticos
- Configuración específica en `netlify.toml` y `vercel.json`
- Headers de seguridad en `public/_headers`

---

## � Estado Actual del Proyecto (Resumen)

### ✅ Completado
- MCP Server instalado y configurado
- Logo y branding básico implementado
- Estructura de 10 secciones en index.astro
- Configuración Tailwind personalizada
- Sistema de navegación básico
- **SEO Optimization Base** ✅
  - Structured Data (JSON-LD) component
  - Metadata personalizada por página
  - Open Graph y Twitter Cards
  - Keywords strategy
  - Robots.txt optimizado
  - Sitemap configurado

### 🔄 En Progreso
- SEO: Crear imágenes OG y validar con herramientas

### ⏳ Prioridades Inmediatas
1. **Internacionalización** (i18n ES/EN)
2. **SEO Validation** (crear imágenes OG, Google Search Console)
3. **Formulario de Contacto** (backend + validación)
4. **View Transitions** (animaciones suaves)
5. **Contenido Final** (copy real de Grape)

---

**Proyecto**: Grape Landing - Marketing Website  
**Cliente**: Grape (Agencia de Desarrollo de Software)  
**Template Base**: AstroWind v1.0.0-beta.52  
**Versión Docs**: 1.3  
**Última actualización**: Noviembre 9, 2025  
**Estado**: En Desarrollo Activo 🚧
