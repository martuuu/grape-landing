# 🚀 SEO Implementation Guide - Grape Agency

## ✅ Implementación Completada

### 1. ⚙️ Configuración Base (`src/config.yaml`)

**Actualizado con:**
- ✅ Nombre del sitio: "Grape"
- ✅ Metadata optimizada para desarrollo de software
- ✅ Descripción enfocada en apps, webapps, MVPs
- ✅ Open Graph configurado con locale `es_ES`
- ✅ Twitter Cards con `summary_large_image`
- ✅ i18n configurado (ES como default)

**TODO:**
- [ ] Actualizar `site.site` con dominio real cuando esté disponible
- [ ] Actualizar `googleSiteVerificationId` con ID de Google Search Console
- [ ] Actualizar handles de Twitter con cuenta real

---

### 2. 🤖 Robots.txt Optimizado

**Ubicación**: `public/robots.txt`

**Configuración:**
- ✅ Permite todos los crawlers
- ✅ Bloquea páginas de tags (bajo valor SEO)
- ✅ Referencias a sitemaps
- ✅ Configuración para Googlebot-Image
- ✅ Comentarios documentados

**Formato optimizado para:**
- Google
- Bing
- Yandex
- Otros crawlers

---

### 3. 🗺️ Sitemap

**Estado**: ✅ Configurado automáticamente

La integración `@astrojs/sitemap` en `astro.config.ts` genera:
- `sitemap-index.xml` - Índice principal
- `sitemap-0.xml` - Páginas del sitio

**URLs incluidas automáticamente:**
- Todas las páginas `.astro`
- Posts del blog
- Páginas dinámicas

**Prioridades (implícitas por frecuencia de actualización):**
- Home: Alta prioridad
- Servicios: Alta
- Blog posts: Media-Alta
- Páginas estáticas: Media

---

### 4. 📊 Structured Data (JSON-LD)

**Componente**: `src/components/common/StructuredData.astro`

**Schemas implementados:**

#### Organization Schema
```json
{
  "@type": "Organization",
  "name": "Grape",
  "description": "Agencia especializada en desarrollo de apps...",
  "address": { "addressCountry": "ES" },
  "contactPoint": { "email": "..." },
  "sameAs": ["Twitter", "LinkedIn", "GitHub"]
}
```

#### WebSite Schema
```json
{
  "@type": "WebSite",
  "name": "Grape",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "..."
  }
}
```

#### Service Schema
Para páginas de servicios específicos.

#### FAQ Schema
Para páginas con preguntas frecuentes.

#### Article Schema
Para posts del blog.

#### Breadcrumb Schema
Para mejorar navegación en SERPs.

**Uso:**
```astro
<StructuredData type="WebSite" />
<StructuredData type="Service" data={{ service: {...} }} />
<StructuredData type="FAQPage" data={{ faqs: [...] }} />
```

---

### 5. 🔑 SEO Keywords

**Componente**: `src/components/common/SEOKeywords.astro`

**Incluye:**
- Meta keywords (para Bing, Yandex)
- Meta author
- Robots directives
- Mobile SEO tags
- Geographic targeting (ES)
- Language hints

**Integración:**
Automática a través de `Metadata.astro` cuando se pasa `keywords` prop.

---

### 6. 🎯 Metadata por Página

**Tipo**: `MetaData` extendido con `keywords`

**Páginas actualizadas:**

#### Home (`/index.astro`)
```typescript
{
  title: "Desarrollo de Apps Web y Móviles | Grape Agency",
  description: "Agencia especializada en desarrollo...",
  keywords: ['desarrollo de apps', 'mvp', 'webapp', ...],
  openGraph: { ... },
  twitter: { ... }
}
```

#### Services (`/services.astro`)
```typescript
{
  title: "Servicios de Desarrollo de Software",
  description: "Desarrollo de aplicaciones web, móviles...",
  keywords: ['desarrollo web', 'desarrollo móvil', ...],
}
```

#### Contact (`/contact.astro`)
```typescript
{
  title: "Contacto - Hablemos de tu proyecto",
  description: "Contacta con Grape...",
  keywords: ['contacto', 'presupuesto desarrollo', ...],
}
```

---

### 7. 🎨 Open Graph & Twitter Cards

**Configuración Global**: `src/config.yaml`

**Por Página**: Metadata object en cada `.astro`

**Especificaciones:**
- **OG Image Size**: 1200 x 630 px
- **Twitter Card**: `summary_large_image`
- **Locale**: `es_ES`
- **Type**: `website` (default)

**Imágenes requeridas** (ver `/public/og-images/README.md`):
- [ ] `og-image-home.jpg`
- [ ] `og-image-services.jpg`
- [ ] `og-image-contact.jpg`
- [ ] `og-image-about.jpg`
- [ ] `og-default.jpg`

---

### 8. 📋 CommonMeta Mejorado

**Ubicación**: `src/components/common/CommonMeta.astro`

**Agregados:**
- ✅ DNS prefetch para Google Fonts
- ✅ Preconnect para performance
- ✅ Security headers
- ✅ Theme color para mobile
- ✅ Apple mobile web app meta tags

---

### 9. 📚 Configuración SEO Centralizada

**Archivo**: `src/config/seo.ts`

**Contiene:**

#### Keywords por Categoría
- Primary keywords
- Secondary keywords
- Long-tail keywords

#### Páginas Específicas
- Title patterns
- Descriptions
- Focus keywords

#### Structured Data Templates
- Organization data
- Services array
- FAQs comunes

#### Social Profiles
- Twitter, LinkedIn, GitHub, Instagram

#### Contact Info
- Email, teléfono

#### Business Info
- Precio, moneda, horarios

**Uso:**
```typescript
import SEO_CONFIG from '~/config/seo';

const keywords = SEO_CONFIG.pages.home.keywords;
const faqs = SEO_CONFIG.structuredData.faqs;
```

---

## 🎯 Keywords Strategy

### Target Audience
- **Edad**: 25-60 años
- **Perfil**: Tech-savvy, emprendedores, decision makers
- **Intereses**: Apps, webapps, startups, transformación digital

### Primary Keywords
1. desarrollo de software
2. desarrollo de aplicaciones
3. agencia de desarrollo
4. desarrollo web
5. desarrollo móvil

### Secondary Keywords
- desarrollo de mvp
- desarrollo ágil
- aplicaciones personalizadas
- software a medida
- desarrollo para startups

### Long-tail Keywords
- agencia desarrollo aplicaciones web españa
- desarrollo mvp para startups
- crear aplicación móvil desde cero
- desarrollo software empresarial personalizado

### Búsquedas de Intención
- "cuánto cuesta desarrollar una app"
- "mejor agencia desarrollo web"
- "crear mvp startup"
- "desarrollo aplicación móvil precio"

---

## 🧪 Testing & Validation

### Herramientas de Validación

#### 1. Google Search Console
- [ ] Verificar propiedad del sitio
- [ ] Enviar sitemap
- [ ] Monitorear indexación
- [ ] Revisar Core Web Vitals

#### 2. Facebook Sharing Debugger
URL: https://developers.facebook.com/tools/debug/
- [ ] Validar OG tags de home
- [ ] Validar OG tags de services
- [ ] Validar OG tags de contact
- [ ] Validar imágenes OG

#### 3. Twitter Card Validator
URL: https://cards-dev.twitter.com/validator
- [ ] Validar card de home
- [ ] Validar card de services
- [ ] Validar card de blog posts

#### 4. LinkedIn Post Inspector
URL: https://www.linkedin.com/post-inspector/
- [ ] Validar previews

#### 5. Schema Markup Validator
URL: https://validator.schema.org/
- [ ] Validar Organization schema
- [ ] Validar WebSite schema
- [ ] Validar Service schemas
- [ ] Validar FAQ schema

#### 6. Rich Results Test (Google)
URL: https://search.google.com/test/rich-results
- [ ] Validar structured data

#### 7. Lighthouse SEO Audit
- [ ] Score > 95
- [ ] Verificar meta tags
- [ ] Verificar canonical
- [ ] Verificar robots.txt

---

## 📈 Métricas de Éxito

### KPIs SEO
- **Objetivo**: Ranking top 10 para keywords principales en 6 meses
- **Tráfico orgánico**: +50% en 6 meses
- **Click-through rate (CTR)**: > 3%
- **Bounce rate**: < 60%
- **Tiempo en página**: > 2 min

### Core Web Vitals
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1

### Lighthouse Scores (Objetivos)
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 95
- **SEO: > 95** ✅

---

## 🔄 Mantenimiento Continuo

### Mensual
- [ ] Revisar Google Search Console
- [ ] Analizar keywords con tendencia
- [ ] Actualizar contenido relevante
- [ ] Revisar backlinks

### Trimestral
- [ ] Auditoría completa de SEO
- [ ] Actualizar structured data si hay cambios
- [ ] Revisar competencia
- [ ] Optimizar páginas de bajo rendimiento

### Anual
- [ ] Revisión completa de estrategia SEO
- [ ] Actualizar keywords según tendencias
- [ ] Renovar contenido antiguo
- [ ] Evaluación de ROI SEO

---

## 🚀 Próximos Pasos (TODO)

### Inmediato
1. [ ] Crear imágenes Open Graph (ver `/public/og-images/README.md`)
2. [ ] Actualizar dominio real en `config.yaml`
3. [ ] Configurar Google Search Console
4. [ ] Enviar sitemap a Google
5. [ ] Validar todos los schemas con Schema Validator

### Corto Plazo (1-2 semanas)
6. [ ] Crear contenido para blog (mínimo 5 artículos)
7. [ ] Implementar breadcrumbs en páginas internas
8. [ ] Agregar FAQs estructuradas en página principal
9. [ ] Optimizar imágenes (WebP, lazy loading)
10. [ ] Configurar Analytics y Search Console

### Medio Plazo (1 mes)
11. [ ] Link building strategy
12. [ ] Guest posting en blogs relevantes
13. [ ] Crear casos de éxito / portfolio
14. [ ] Implementar blog con contenido regular
15. [ ] Optimizar velocidad de carga

### Largo Plazo (3-6 meses)
16. [ ] Expandir a más keywords long-tail
17. [ ] Crear contenido en inglés (i18n)
18. [ ] Video marketing para SEO
19. [ ] Podcasts o webinars
20. [ ] Comunidad / Forum

---

## 📚 Recursos

### Documentación
- [Google SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)
- [Schema.org Documentation](https://schema.org/)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Card Docs](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)

### Herramientas
- [Ahrefs](https://ahrefs.com/) - Keyword research
- [SEMrush](https://www.semrush.com/) - SEO suite
- [Screaming Frog](https://www.screamingfrog.co.uk/seo-spider/) - Site audit
- [Answer The Public](https://answerthepublic.com/) - Question keywords

### Aprendizaje
- [Moz SEO Learning Center](https://moz.com/learn/seo)
- [Backlinko Blog](https://backlinko.com/blog)
- [Search Engine Journal](https://www.searchenginejournal.com/)

---

**Documento creado**: Noviembre 9, 2025  
**Última actualización**: Noviembre 9, 2025  
**Versión**: 1.0  
**Estado**: ✅ Implementación Base Completada
