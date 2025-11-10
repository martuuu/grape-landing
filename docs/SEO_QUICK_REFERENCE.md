# SEO Quick Reference - Grape Agency

## 🚀 Agregar SEO a una Nueva Página

### 1. Metadata Básica

```astro
---
import Layout from '~/layouts/PageLayout.astro';

const metadata = {
  title: 'Título de la Página',
  description: 'Descripción optimizada para SEO (150-160 caracteres)',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  canonical: 'https://grape.agency/ruta-de-la-pagina',
  openGraph: {
    title: 'Título para redes sociales',
    description: 'Descripción para compartir',
    type: 'website',
  },
};
---

<Layout metadata={metadata}>
  <!-- Contenido -->
</Layout>
```

### 2. Con Structured Data

```astro
---
import Layout from '~/layouts/PageLayout.astro';
import StructuredData from '~/components/common/StructuredData.astro';

const metadata = { /* ... */ };
---

<Layout metadata={metadata}>
  <StructuredData 
    type="Service" 
    data={{
      service: {
        name: 'Nombre del servicio',
        description: 'Descripción del servicio',
      }
    }}
  />
  
  <!-- Contenido -->
</Layout>
```

### 3. Con FAQs (Schema)

```astro
<StructuredData 
  type="FAQPage" 
  data={{
    faqs: [
      {
        question: '¿Pregunta 1?',
        answer: 'Respuesta detallada...'
      },
      {
        question: '¿Pregunta 2?',
        answer: 'Respuesta detallada...'
      }
    ]
  }}
/>
```

---

## 📝 Checklist por Página

- [ ] **Title** (50-60 caracteres)
  - Incluye keyword principal
  - Formato: "Keyword | Grape Agency"
  
- [ ] **Description** (150-160 caracteres)
  - Resume el contenido
  - Incluye call-to-action
  - Contiene keywords naturalmente

- [ ] **Keywords** (5-10 keywords)
  - 2-3 primary keywords
  - 3-5 secondary keywords
  - Variaciones long-tail

- [ ] **Canonical URL**
  - URL completa con dominio
  - Sin trailing slash (o consistente)

- [ ] **Open Graph**
  - Title específico
  - Description
  - Image (1200x630 px)
  - Type (website, article, etc.)

- [ ] **Structured Data**
  - Schema apropiado (WebPage, Service, Article, FAQ)
  - Datos completos y válidos

- [ ] **Images**
  - Alt text descriptivo
  - Tamaño optimizado
  - Formato WebP cuando sea posible

- [ ] **Headings**
  - H1 único por página
  - H2-H6 jerárquicos
  - Incluyen keywords

- [ ] **Internal Links**
  - Mínimo 2-3 enlaces internos
  - Anchor text descriptivo

---

## 🎯 Keywords por Tipo de Página

### Landing / Home
```typescript
keywords: [
  'desarrollo de apps',
  'desarrollo web',
  'desarrollo móvil',
  'mvp',
  'agencia software',
  'webapp',
]
```

### Servicios
```typescript
keywords: [
  'desarrollo web personalizado',
  'desarrollo app móvil',
  'mvp startup',
  'software a medida',
  'desarrollo ágil',
]
```

### Blog Post
```typescript
keywords: [
  'tutorial [tema]',
  'cómo [hacer algo]',
  'guía [tema]',
  'mejores prácticas [tema]',
]
```

### Contacto
```typescript
keywords: [
  'contacto desarrollo software',
  'presupuesto app',
  'consultoría desarrollo',
]
```

---

## 📊 Templates por Tipo de Página

### Página de Servicio

```astro
---
const metadata = {
  title: 'Desarrollo Web Personalizado | Grape',
  description: 'Creamos aplicaciones web modernas y escalables con React, Next.js y Node.js. Presupuesto gratuito en 24h.',
  keywords: ['desarrollo web', 'react', 'next.js', 'webapp personalizada'],
  canonical: 'https://grape.agency/servicios/desarrollo-web',
  openGraph: {
    title: 'Desarrollo Web Profesional | Grape',
    description: 'Apps web modernas con las últimas tecnologías',
    image: '/og-images/og-service-web.jpg',
  },
};
---

<Layout metadata={metadata}>
  <StructuredData 
    type="Service"
    data={{
      service: {
        name: 'Desarrollo Web Personalizado',
        description: 'Creamos aplicaciones web modernas...',
      }
    }}
  />
</Layout>
```

### Blog Post

```astro
---
const metadata = {
  title: 'Título del Artículo | Blog Grape',
  description: 'Resumen del artículo...',
  keywords: ['keyword principal', 'keyword 2'],
  canonical: 'https://grape.agency/blog/slug-del-post',
  openGraph: {
    title: 'Título del Artículo',
    description: 'Resumen del artículo...',
    image: '/blog/images/post-og.jpg',
    type: 'article',
  },
};

const articleData = {
  title: 'Título del Artículo',
  description: 'Resumen del artículo...',
  image: '/blog/images/post-og.jpg',
  publishDate: '2025-11-09',
  url: 'https://grape.agency/blog/slug-del-post',
};
---

<Layout metadata={metadata}>
  <StructuredData 
    type="Article"
    data={{ article: articleData }}
  />
</Layout>
```

---

## 🔍 Validation Tools

### Before Publishing
1. **Schema Validator**: https://validator.schema.org/
2. **Rich Results Test**: https://search.google.com/test/rich-results
3. **OG Debugger**: https://developers.facebook.com/tools/debug/
4. **Twitter Validator**: https://cards-dev.twitter.com/validator

### Quick Check
```bash
# En browser console
document.querySelector('meta[name="description"]').content
document.querySelector('meta[property="og:title"]').content
document.querySelector('script[type="application/ld+json"]').textContent
```

---

## 💡 Best Practices

### Titles
✅ DO:
- "Desarrollo de Apps Móviles | Grape Agency"
- "Cómo Crear un MVP en 8 Semanas | Blog Grape"

❌ DON'T:
- "Home | Grape" (muy genérico)
- "Desarrollo de apps móviles nativas e híbridas para iOS y Android..." (muy largo)

### Descriptions
✅ DO:
- "Agencia especializada en desarrollo de apps móviles. Flutter, React Native y nativo. Presupuesto gratis."

❌ DON'T:
- "Somos una empresa..." (boring)
- Menos de 120 caracteres (muy corto)

### Keywords
✅ DO:
- Naturales y relevantes
- Mix de competitivas y long-tail
- Relacionadas con el contenido

❌ DON'T:
- Keyword stuffing
- Keywords irrelevantes
- Solo keywords ultra-competitivas

---

## 📈 Monitoring

### Weekly
- [ ] Check Google Search Console
- [ ] Review indexation status
- [ ] Monitor ranking changes

### Monthly
- [ ] Analyze keyword performance
- [ ] Update low-performing pages
- [ ] Check Core Web Vitals

---

**Última actualización**: Noviembre 9, 2025
