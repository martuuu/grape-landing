# SEO Deployment Checklist - Grape Agency

## ✅ Pre-Launch Checklist

### 📋 Configuración Base
- [x] `config.yaml` actualizado con información de Grape
- [ ] Dominio real configurado en `site.site`
- [ ] Google Site Verification ID actualizado
- [ ] Twitter/Social handles actualizados
- [ ] Email de contacto actualizado
- [ ] Información de negocio completa (dirección, teléfono)

### 🖼️ Imágenes Open Graph
- [ ] Crear `og-image-home.jpg` (1200x630)
- [ ] Crear `og-image-services.jpg` (1200x630)
- [ ] Crear `og-image-contact.jpg` (1200x630)
- [ ] Crear `og-image-about.jpg` (1200x630)
- [ ] Crear `og-default.jpg` (fallback, 1200x630)
- [ ] Todas las imágenes < 300 KB
- [ ] Logo visible en todas las imágenes
- [ ] Texto legible en previews pequeños

### 📄 Metadata por Página
- [x] Home (`/index.astro`) - Metadata completa
- [x] Services (`/services.astro`) - Metadata completa
- [x] Contact (`/contact.astro`) - Metadata completa
- [ ] About (`/about.astro`) - Actualizar metadata
- [ ] Pricing (`/pricing.astro`) - Actualizar metadata
- [ ] Trabajos/Portfolio - Actualizar metadata
- [ ] Todas las páginas de servicios individuales
- [ ] Páginas de blog (template general)

### 🔍 Structured Data
- [x] Schema WebSite en Layout principal
- [ ] Schema Organization verificado con datos reales
- [ ] Schema Service en páginas de servicios
- [ ] Schema FAQPage en home (si hay FAQs)
- [ ] Schema Article en blog posts
- [ ] Schema BreadcrumbList en páginas internas

### 🤖 Technical SEO
- [x] Robots.txt optimizado
- [x] Sitemap configurado (@astrojs/sitemap)
- [ ] Sitemap enviado a Google Search Console
- [ ] Sitemap enviado a Bing Webmaster Tools
- [x] Canonical URLs en todas las páginas
- [x] Meta viewport configurado
- [x] Theme color configurado
- [x] Security headers configurados

### 🔗 Internal Linking
- [ ] Mínimo 3 enlaces internos por página
- [ ] Anchor text descriptivo (no "click aquí")
- [ ] Enlaces a servicios desde home
- [ ] Enlaces a blog desde páginas relevantes
- [ ] Breadcrumbs implementados
- [ ] Footer links organizados

### 📱 Mobile SEO
- [x] Mobile-friendly meta tags
- [x] Apple mobile web app tags
- [ ] Tested en Google Mobile-Friendly Test
- [ ] Touch targets > 48px
- [ ] Texto legible sin zoom
- [ ] No horizontal scroll

### ⚡ Performance
- [ ] Lighthouse Performance Score > 90
- [ ] Core Web Vitals en verde
- [ ] Imágenes optimizadas (WebP)
- [ ] Lazy loading habilitado
- [ ] CSS/JS minificado
- [ ] Recursos críticos precargados

---

## 🧪 Validation & Testing

### Schema Validation
- [ ] [Schema.org Validator](https://validator.schema.org/) - Sin errores
- [ ] [Google Rich Results](https://search.google.com/test/rich-results) - Sin warnings
- [ ] Todos los schemas con datos completos
- [ ] No hay campos requeridos faltantes

### Open Graph Validation
- [ ] [Facebook Debugger](https://developers.facebook.com/tools/debug/) - Home
- [ ] Facebook Debugger - Services
- [ ] Facebook Debugger - Contact
- [ ] Facebook Debugger - About
- [ ] Imágenes se cargan correctamente
- [ ] Títulos y descripciones correctos

### Twitter Cards
- [ ] [Twitter Card Validator](https://cards-dev.twitter.com/validator) - Home
- [ ] Twitter Validator - Services
- [ ] Twitter Validator - Blog posts
- [ ] Tipo de card: summary_large_image
- [ ] Imágenes se muestran correctamente

### LinkedIn
- [ ] [LinkedIn Inspector](https://www.linkedin.com/post-inspector/) - Home
- [ ] LinkedIn Inspector - Services
- [ ] Preview correcto

### Google Tools
- [ ] Google Search Console - Sitio verificado
- [ ] Google Search Console - Sitemap enviado
- [ ] Google Search Console - Sin errores de indexación
- [ ] Google Search Console - Mobile usability OK
- [ ] Google Analytics instalado (si se usa)

### Lighthouse Audit
- [ ] SEO Score > 95
- [ ] Performance Score > 90
- [ ] Accessibility Score > 95
- [ ] Best Practices Score > 95
- [ ] Sin errores en consola
- [ ] Sin warnings críticos

### Manual Testing
- [ ] Todas las páginas cargan correctamente
- [ ] No hay enlaces rotos
- [ ] Imágenes tienen alt text
- [ ] Headings jerárquicos (H1 → H2 → H3)
- [ ] Solo un H1 por página
- [ ] Meta description en todas las páginas
- [ ] Title único por página

---

## 🚀 Post-Launch Tasks

### Semana 1
- [ ] Verificar indexación en Google
- [ ] Verificar indexación en Bing
- [ ] Revisar Google Search Console diariamente
- [ ] Corregir errores de crawling si existen
- [ ] Monitorear Core Web Vitals

### Semana 2-4
- [ ] Analizar primeras keywords posicionadas
- [ ] Revisar páginas más visitadas
- [ ] Identificar páginas de bajo rendimiento
- [ ] Optimizar títulos según CTR
- [ ] Crear contenido para blog (mínimo 2-3 posts)

### Mes 2-3
- [ ] Link building básico
  - [ ] Registrar en directorios
  - [ ] Perfiles de redes sociales
  - [ ] Google My Business (si aplica)
- [ ] Guest posting (1-2 artículos)
- [ ] Actualizar contenido según datos de Search Console
- [ ] Expandir keywords (long-tail)

### Mes 4-6
- [ ] Auditoría SEO completa
- [ ] Análisis de competencia
- [ ] Crear landing pages específicas
- [ ] Video marketing
- [ ] Webinars o contenido educativo
- [ ] Medir ROI de SEO

---

## 📊 Monitoring Dashboard

### Métricas Clave a Monitorear

#### Google Search Console (Semanal)
- [ ] Impresiones totales
- [ ] Clicks totales
- [ ] CTR promedio
- [ ] Posición promedio
- [ ] Páginas mejor posicionadas
- [ ] Queries con más impresiones
- [ ] Errores de indexación

#### Google Analytics (Semanal)
- [ ] Usuarios orgánicos
- [ ] Páginas más visitadas
- [ ] Bounce rate por página
- [ ] Tiempo promedio en página
- [ ] Conversiones (si hay tracking)
- [ ] Tráfico por fuente

#### Core Web Vitals (Mensual)
- [ ] LCP (< 2.5s)
- [ ] FID (< 100ms)
- [ ] CLS (< 0.1)
- [ ] TTFB (< 600ms)

#### Rankings (Mensual)
- [ ] Top 5 keywords principales
- [ ] Keywords en top 10
- [ ] Keywords en top 30
- [ ] Nuevas keywords posicionadas
- [ ] Keywords que bajaron

---

## 🛠️ Herramientas Necesarias

### Esenciales (Gratis)
- [x] Google Search Console
- [ ] Google Analytics
- [ ] Bing Webmaster Tools
- [ ] Schema.org Validator
- [ ] Google Rich Results Test
- [ ] Facebook Sharing Debugger
- [ ] Twitter Card Validator

### Recomendadas (Freemium)
- [ ] Ubersuggest (keyword research)
- [ ] Answer The Public (content ideas)
- [ ] Screaming Frog (SEO Spider - 500 URLs gratis)
- [ ] GTmetrix (performance testing)

### Premium (Opcional)
- [ ] Ahrefs ($99/mes)
- [ ] SEMrush ($119/mes)
- [ ] Moz Pro ($99/mes)
- [ ] Surfer SEO ($59/mes)

---

## 📚 Content Creation Checklist

### Cada Blog Post Debe Tener:
- [ ] Keyword research previo
- [ ] Title optimizado (50-60 caracteres)
- [ ] Meta description (150-160 caracteres)
- [ ] Keywords naturales en el contenido
- [ ] H1 único
- [ ] H2-H6 jerárquicos
- [ ] Imágenes con alt text
- [ ] Mínimo 1000 palabras (idealmente 1500+)
- [ ] Enlaces internos (3-5)
- [ ] Enlaces externos a fuentes de autoridad
- [ ] CTA al final
- [ ] Schema Article
- [ ] Open Graph image
- [ ] Fecha de publicación visible

---

## 🎯 Quick Wins (Implementación Rápida)

### Esta Semana
1. [ ] Crear las 5 imágenes OG principales
2. [ ] Actualizar dominio en config.yaml
3. [ ] Configurar Google Search Console
4. [ ] Enviar sitemap
5. [ ] Validar schemas

### Próxima Semana
6. [ ] Escribir primer blog post
7. [ ] Agregar FAQs con schema a home
8. [ ] Implementar breadcrumbs
9. [ ] Optimizar 3 imágenes más pesadas
10. [ ] Crear página de servicios detallada

### Este Mes
11. [ ] 3-5 blog posts publicados
12. [ ] Link building inicial (10 enlaces)
13. [ ] Perfiles sociales optimizados
14. [ ] Google My Business (si aplica)
15. [ ] Primera auditoría SEO

---

## ❓ Troubleshooting

### "Página no se indexa"
1. Verificar robots.txt (no bloquea la página)
2. Verificar meta robots (no es noindex)
3. Verificar sitemap (incluye la URL)
4. Solicitar indexación manual en Search Console
5. Verificar canonical (apunta a URL correcta)

### "OG image no se muestra"
1. Verificar que la imagen existe (200 status)
2. Verificar tamaño (1200x630 recomendado)
3. Verificar peso (< 8 MB, idealmente < 300 KB)
4. Usar URL absoluta (con dominio completo)
5. Limpiar cache con Facebook Debugger

### "Schema no valida"
1. Usar Schema.org Validator
2. Verificar que todos los campos requeridos estén presentes
3. Verificar tipos de datos correctos
4. Usar URLs absolutas
5. Verificar que JSON sea válido

### "CTR bajo"
1. Mejorar title (más atractivo, incluir números/beneficios)
2. Mejorar description (incluir CTA)
3. Usar rich snippets (FAQ, How-to, Reviews)
4. Verificar que metadata sea relevante al contenido
5. A/B testing de titles/descriptions

---

## 📞 Contacto y Soporte

**Documentación:**
- `/docs/SEO_IMPLEMENTATION.md` - Implementación completa
- `/docs/SEO_QUICK_REFERENCE.md` - Referencia rápida
- `/docs/SEO_SUMMARY.md` - Resumen ejecutivo
- `/public/og-images/README.md` - Guía de imágenes

**Componentes:**
- `StructuredData.astro` - Schema.org markup
- `SEOKeywords.astro` - Meta tags adicionales
- `SEOPreview.astro` - Preview tool (dev only)

**Configuración:**
- `src/config/seo.ts` - SEO config centralizada
- `src/config.yaml` - Site config general

---

**Última actualización**: Noviembre 9, 2025  
**Versión**: 1.0  

**Status**: 🟡 Ready for Production - Pending final checks
