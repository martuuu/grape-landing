# Open Graph Images - Grape Agency

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

#### LinkedIn
- **Tamaño**: 1200 x 627 px
- **Ratio**: 1.91:1
- **Formato**: JPG o PNG

---

## 🎨 Guía de Diseño para Imágenes OG

### Elementos Clave

1. **Logo de Grape**
   - Posición: Superior izquierda
   - Tamaño: ~100-150 px de ancho
   - Margen: 60 px desde bordes

2. **Título Principal**
   - Tipografía: Inter Bold / Similar sans-serif moderna
   - Tamaño: 64-80 px
   - Color: Azul primario (#1e40af) o blanco sobre fondo oscuro
   - Posición: Centro-izquierda
   - Max líneas: 2-3

3. **Subtítulo/Descripción**
   - Tipografía: Inter Regular / Medium
   - Tamaño: 32-40 px
   - Color: Gris oscuro (#374151) o gris claro si fondo oscuro
   - Posición: Debajo del título
   - Max líneas: 1-2

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
