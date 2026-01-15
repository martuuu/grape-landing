# Open Graph Images - COMMIT Landing

## 📐 Especificaciones Técnicas

### Tamaños Recomendados

#### Open Graph (Facebook, LinkedIn)
- **Tamaño**: 1200 x 630 px
- **Ratio**: 1.91:1
- **Formato**: JPG o PNG
- **Peso**: < 300 KB
- **Nombre**: `og-image-[page].jpg`

#### Twitter Card
- **Tamaño**: 1200 x 675 px (o 1200 x 628 px para compatibilidad)
- **Ratio**: 16:9 o 1.91:1
- **Formato**: JPG o PNG
- **Peso**: < 5 MB (idealmente < 300 KB)
- **Nombre**: `twitter-card-[page].jpg`

---

## 🎨 Guía de Diseño para Imágenes OG - COMMIT

### Paleta de Colores COMMIT
```css
/* Tonos principales */
--commit-darkest: #052832
--commit-dark: #1283a5
--commit-default: #138bae
--commit-light: #1ba1c9
--commit-lighter: #26bce9
--commit-pale: #ade4f7

/* Gradiente recomendado */
background: linear-gradient(135deg, #052832 0%, #138bae 50%, #26bce9 100%);
```

### Elementos Clave

1. **Logo de COMMIT**
   - Posición: Superior izquierda
   - Tamaño: ~120 px de ancho
   - Margen: 60 px desde bordes
   - Incluir "COMMIT" + "TECNOLOGÍAS DEL SUR"

2. **Título Principal**
   - Tipografía: Inter Bold (ya cargada en el proyecto)
   - Tamaño: 72-84 px
   - Color: #052832 (sobre fondo claro) o blanco (sobre pattern ondulado)
   - Posición: Centro-izquierda, vertical centrado
   - Max líneas: 2

3. **Subtítulo/Tagline**
   - Tipografía: Inter Medium
   - Tamaño: 36-42 px
   - Color: #1283a5 o gris claro
   - Posición: Debajo del título
   - Max líneas: 1

4. **Background**
   - Opción 1: Pattern ondulado (como en Hero/CTA)
   - Opción 2: Gradiente suave de la paleta
   - Opción 3: Blanco con accent en esquinas

---

## 📋 Imágenes a Crear

### Prioridad Alta
1. **`og-image-home.jpg`** - Homepage
   - Título: "Desarrollo de Software para Startups"
   - Subtítulo: "Apps Web y Móviles | COMMIT"

2. **`og-image-presupuesto.jpg`** - Budget Builder
   - Título: "Presupuesto Personalizado"
   - Subtítulo: "Cotizá tu proyecto en minutos"

3. **`og-image-contacto.jpg`** - Contacto
   - Título: "Hablemos de tu Proyecto"
   - Subtítulo: "Equipo especializado en desarrollo"

### Prioridad Media
4. **`og-image-servicios.jpg`** - Servicios
5. **`og-image-productos.jpg`** - Productos
6. **`og-image-about.jpg`** - Sobre nosotros

---

## 🛠️ Herramientas Recomendadas

### Online (Gratis)
- **Canva** (plantillas pre-diseñadas)
- **Figma** (diseño profesional)
- **OG Image Generator** by Vercel

### Automatización
```javascript
// TODO: Implementar generación automática con @vercel/og
// Permite crear OG images dinámicamente con React/JSX
```

---

## 📝 Template Básico (HTML + CSS para Figma/Canva)

```html
<div style="width: 1200px; height: 630px; background: linear-gradient(135deg, #052832 0%, #138bae 50%, #26bce9 100%); padding: 60px; display: flex; flex-direction: column; justify-content: space-between;">
  
  <!-- Logo -->
  <div style="width: 120px; height: auto;">
    <!-- Logo SVG aquí -->
  </div>
  
  <!-- Contenido Central -->
  <div style="flex: 1; display: flex; flex-direction: column; justify-content: center; max-width: 800px;">
    <h1 style="font-family: Inter, sans-serif; font-weight: 800; font-size: 72px; color: white; line-height: 1.1; margin-bottom: 20px;">
      Desarrollo de Software
    </h1>
    <p style="font-family: Inter, sans-serif; font-weight: 500; font-size: 38px; color: #ade4f7;">
      Apps Web y Móviles | COMMIT
    </p>
  </div>
  
  <!-- Footer -->
  <div style="font-family: Inter, sans-serif; font-size: 24px; color: #ade4f7;">
    commit.ar
  </div>
</div>
```

---

## ✅ Checklist de Validación

Antes de publicar cada imagen:

- [ ] Tamaño exacto: 1200 x 630 px
- [ ] Peso < 300 KB (optimizada)
- [ ] Logo visible y nítido
- [ ] Texto legible en móvil (mínimo 28px)
- [ ] Colores de marca correctos
- [ ] Sin elementos cortados en bordes
- [ ] Testing en:
  - [ ] Facebook Debugger
  - [ ] Twitter Card Validator
  - [ ] LinkedIn Post Inspector

---

## 📂 Estructura de Archivos

```
/public/og-images/
├── README.md (este archivo)
├── og-image-home.jpg
├── og-image-presupuesto.jpg
├── og-image-contacto.jpg
├── og-image-servicios.jpg
├── og-image-productos.jpg
└── og-image-about.jpg
```

---

## 🔗 Implementación en Código

Una vez creadas las imágenes, actualizar en cada página:

```astro
---
const metadata = {
  title: "Título de la página",
  openGraph: {
    images: [{
      url: "https://commit.ar/og-images/og-image-home.jpg",
      width: 1200,
      height: 630,
    }],
  },
};
---
```

4. **Elemento Visual**
   - Ilustración o patrón de fondo sutil
   - Degradado moderno (opcional)
   - Iconos representativos (código, móvil, web)

5. **Call to Action / Tag**
   - Texto: "Agencia de Desarrollo" o similar
   - Tamaño: 24-28 px
   - Posición: Inferior derecha
   - Badge/etiqueta con fondo de color

---

## 📝 Contenido por Página

### Home Page (`og-image-home.jpg`)
```
Título: "Desarrollamos Apps que Impulsan tu Negocio"
Subtítulo: "Web • Móvil • MVPs para Startups"
Tag: "Grape Agency"
Fondo: Gradiente azul con elementos tech
```

### Services (`og-image-services.jpg`)
```
Título: "Servicios de Desarrollo de Software"
Subtítulo: "Soluciones Personalizadas para tu Empresa"
Tag: "Apps Web & Móvil"
Fondo: Patrón de código o iconos de servicios
```

### Contact (`og-image-contact.jpg`)
```
Título: "Hablemos de tu Proyecto"
Subtítulo: "Respuesta en 24h • Presupuesto Gratis"
Tag: "Contacto"
Fondo: Minimalista, enfoque en CTA
```

### About (`og-image-about.jpg`)
```
Título: "Equipo Experto en Desarrollo"
Subtítulo: "Metodologías Ágiles • Tecnología Moderna"
Tag: "Sobre Nosotros"
Fondo: Foto de equipo o espacio de trabajo
```

---

## 🛠️ Herramientas para Crear Imágenes OG

### Opción 1: Figma (Recomendado)
1. Crear frame 1200 x 630 px
2. Diseñar según las especificaciones
3. Exportar como JPG (calidad 80-90%)

### Opción 2: Canva
- Template: "Facebook Post" (1200 x 630)
- Usar elementos de Grape branding
- Exportar como JPG

### Opción 3: OG Image Generator Online
- [og-image.vercel.app](https://og-image.vercel.app)
- [coverview.vercel.app](https://coverview.vercel.app)
- Personalizar con CSS/HTML

### Opción 4: Automatizado con Código
```typescript
// Usar @vercel/og o similar para generar dinámicamente
import { ImageResponse } from '@vercel/og';

export async function generateOGImage(title: string, description: string) {
  return new ImageResponse(
    (
      <div style={{
        background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '60px',
      }}>
        <h1 style={{ fontSize: 72, color: 'white' }}>{title}</h1>
        <p style={{ fontSize: 36, color: '#e0e7ff' }}>{description}</p>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
```

---

## ✅ Checklist Pre-Publicación

- [ ] Todas las imágenes tienen 1200 x 630 px
- [ ] Peso de archivos < 300 KB
- [ ] Logo de Grape visible y legible
- [ ] Texto no cortado en previews
- [ ] Probado en [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Probado en [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [ ] Probado en [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
- [ ] Colores consistentes con branding
- [ ] Texto legible en mobile (preview pequeño)

---

## 📍 Ubicación de Archivos

```
public/
  og-image-home.jpg       # Página principal
  og-image-services.jpg   # Servicios
  og-image-contact.jpg    # Contacto
  og-image-about.jpg      # Sobre nosotros
  og-image-blog.jpg       # Blog (genérico)
  og-default.jpg          # Fallback por defecto
```

---

## 🧪 Testing

### Herramientas de Validación

1. **Facebook Sharing Debugger**
   - URL: https://developers.facebook.com/tools/debug/
   - Valida OG tags y preview

2. **Twitter Card Validator**
   - URL: https://cards-dev.twitter.com/validator
   - Preview de Twitter Cards

3. **LinkedIn Post Inspector**
   - URL: https://www.linkedin.com/post-inspector/
   - Valida previews de LinkedIn

4. **Open Graph Checker**
   - URL: https://www.opengraph.xyz/
   - Múltiples plataformas

---

## 📚 Recursos Adicionales

- [Open Graph Protocol](https://ogp.me/)
- [Twitter Card Docs](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [Facebook Sharing Best Practices](https://developers.facebook.com/docs/sharing/webmasters)
- [Figma Template OG Images](https://www.figma.com/community/search?model_type=files&q=og%20image)

---

**Última actualización**: Noviembre 9, 2025
