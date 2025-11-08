# 🚀 Grape Landing - Plan de Desarrollo

## 📋 Análisis del Template AstroWind

### Información General
- **Framework**: Astro 5.0 + Tailwind CSS
- **Idioma actual**: Inglés (en)
- **Configuración**: `src/config.yaml`
- **Estructura**: Template modular con widgets reutilizables

---

## 🎯 Objetivo del Proyecto

Adaptar el template AstroWind para crear un sitio web profesional para una agencia de desarrollo de software con:
- ✅ Soporte multiidioma (Español e Inglés)
- ✅ Diseño limpio y profesional
- ✅ Secciones específicas seleccionadas
- ✅ Logo personalizado (assets/images/logo.png)

---

## 📦 Componentes/Widgets Disponibles

### Widgets Principales Identificados:
1. **Hero.astro** - Hero principal con imagen/video
2. **Hero2.astro** - Hero alternativo para SaaS
3. **HeroText.astro** - Hero solo texto
4. **Features.astro** - Grid de características
5. **Features2.astro** - Características con 2 columnas
6. **Features3.astro** - Características con contacto
7. **Content.astro** - Sección de contenido con imagen
8. **Stats.astro** - Estadísticas numéricas
9. **Steps.astro** - Pasos/proceso
10. **Steps2.astro** - Pasos alternativos con contacto
11. **Brands.astro** - Logos de marcas/clientes
12. **Testimonials.astro** - Testimonios de clientes
13. **Contact.astro** - Formulario de contacto
14. **CallToAction.astro** - CTA final
15. **FAQs.astro** - Preguntas frecuentes
16. **Pricing.astro** - Planes de precios
17. **BlogLatestPosts.astro** - Últimos posts del blog
18. **Note.astro** - Nota destacada
19. **Announcement.astro** - Anuncio superior
20. **Header.astro** - Navegación
21. **Footer.astro** - Pie de página

---

## 🏗️ Estructura de Secciones Requeridas

### Para el nuevo Index (en orden):

1. **Hero** 
   - Fuente: `homes/startup.astro` (líneas ~18-49)
   - Componente: `Hero.astro`

2. **Features** 
   - Fuente: `homes/saas.astro` (líneas ~56-106)
   - Componente: `Features.astro`
   - Título: "Que hacemos en GRAPE "?"
   - Layout: 2 columnas

3. **About Us (Features2)** 
   - Fuente: `homes/startup.astro` (líneas ~51-59)
   - Componente: `Features2.astro`
   - Título: "About us"
   - Fondo azul claro

4. **Features (del index actual)**
   - Fuente: `pages/index.astro` (líneas ~50-96)
   - Componente: `Features.astro`
   - Título: "Conoce algunos de nuestros servicios"

5. **Diferenciacion (3 secciones)**
   - Fuente: `pages/index.astro` (líneas ~100-206)
   - Componente: `Content.astro`
   - 3 secciones diferentes con imágenes
   - Aca vamos a explicar procesos, como avanzamos, como nos comunicamos, cultura, etc

6. **Contact Sections**
   - **Features2 - "We are here to help"**
     - Fuente: `pages/contact.astro` (líneas ~45-76)
     - Componente: `Features2.astro`
   
   - **Contact Form**
     - Fuente: `pages/contact.astro` (líneas ~17-42)
     - Componente: `Contact.astro`

7. **Content de Services**
   - Fuente: `pages/services.astro` (líneas ~72-108)
   - Componente: `Content.astro`
   - isReversed

---

## 🌍 Plan de Internacionalización (i18n)

### Estructura propuesta:
```
src/
  locales/
    es.json
    en.json
  i18n/
    utils.ts
    index.ts
```

### Archivos de configuración a modificar:
1. `src/config.yaml` - Agregar configuración i18n
2. `astro.config.ts` - Posible integración @astrojs/i18n
3. Crear utility para traducciones

### Implementación:
- Opción 1: Archivos JSON para traducciones
- Opción 2: Rutas con prefijo (`/es/`, `/en/`)
- Opción 3: Selector de idioma en header

---

## 📝 Plan de Acción - Pasos Detallados

### FASE 1: Preparación y Setup
- [x] ✅ Análisis completo del template
- [x] ✅ Logo implementado en `Logo.astro`
- [ ] 🔄 Configurar estructura i18n
- [ ] 🔄 Crear archivos de traducción (es.json, en.json)

### FASE 2: Crear Index Provisional
- [x] ✅ Crear `src/pages/index-new.astro`
- [x] ✅ Importar todos los widgets necesarios
- [x] ✅ Copiar sección Hero de startup
- [x] ✅ Copiar sección Features de saas
- [x] ✅ Copiar sección About Us de startup
- [x] ✅ Copiar Features del index actual
- [x] ✅ Copiar 3 Content widgets del index actual
- [x] ✅ Copiar secciones de Contact
- [x] ✅ Copiar Content de Services

### FASE 3: Implementar i18n
- [ ] 🌐 Crear helper de traducción
- [ ] 🌐 Traducir contenido al español
- [ ] 🌐 Agregar selector de idioma al Header
- [ ] 🌐 Configurar rutas multiidioma

### FASE 4: Personalización de Contenido
- [ ] ✏️ Reemplazar textos placeholder con contenido real
- [ ] ✏️ Actualizar metadata y SEO
- [ ] ✏️ Modificar `src/config.yaml` con datos de la agencia
- [ ] ✏️ Actualizar navigation.ts
- [ ] ✏️ Personalizar Footer con datos reales

### FASE 5: Testing y Optimización
- [ ] 🧪 Probar ambos idiomas
- [ ] 🧪 Verificar responsive design
- [ ] 🧪 Optimizar imágenes
- [ ] 🧪 Validar formularios
- [ ] 🧪 SEO check

### FASE 6: Deploy Final
- [ ] 🚀 Reemplazar index.astro actual con index-new.astro
- [ ] 🚀 Limpiar archivos no utilizados
- [ ] 🚀 Build final
- [ ] 🚀 Deploy a producción

---

## 📂 Archivos Clave a Modificar

### Configuración:
- `src/config.yaml` - Información del sitio, metadata, SEO
- `src/navigation.ts` - Links del header y footer
- `astro.config.ts` - Configuración de Astro

### Páginas:
- `src/pages/index-new.astro` - Nueva página principal (provisional)
- `src/pages/about.astro` - Página "Nosotros"
- `src/pages/services.astro` - Página de servicios
- `src/pages/contact.astro` - Página de contacto

### Componentes:
- `src/components/Logo.astro` - ✅ YA ACTUALIZADO
- `src/components/widgets/Header.astro` - Agregar selector idioma
- `src/components/widgets/Footer.astro` - Personalizar

---

## 🎨 Personalización Pendiente

### Branding:
- [x] Logo - ✅ Implementado
- [ ] Colores corporativos (Tailwind config)
- [ ] Tipografía corporativa
- [ ] Favicon

### Contenido:
- [ ] Misión y visión de la agencia
- [ ] Servicios ofrecidos
- [ ] Portfolio/casos de éxito
- [ ] Equipo
- [ ] Información de contacto real

---

## 🔧 Configuración i18n Propuesta

### config.yaml actualizado:
```yaml
i18n:
  defaultLanguage: 'es'
  languages: ['es', 'en']
  textDirection: 'ltr'
  showLanguageSelector: true
```

### Estructura de traducción:
```json
// locales/es.json
{
  "hero": {
    "title": "Mejora la presencia online de tu Startup",
    "subtitle": "Entra en el centro de atención..."
  },
  "nav": {
    "home": "Inicio",
    "about": "Nosotros",
    "services": "Servicios",
    "contact": "Contacto"
  }
}
```

---

## 📊 Secciones del Index Final

| # | Sección | Componente | Fuente Original |
|---|---------|------------|-----------------|
| 1 | Hero Principal | Hero.astro | homes/startup.astro |
| 2 | Features (2 col) | Features.astro | homes/saas.astro |
| 3 | About Us | Features2.astro | homes/startup.astro |
| 4 | Features Grid | Features.astro | pages/index.astro |
| 5 | Content 1 | Content.astro | pages/index.astro |
| 6 | Content 2 | Content.astro | pages/index.astro |
| 7 | Content 3 | Content.astro | pages/index.astro |
| 8 | Support Info | Features2.astro | pages/contact.astro |
| 9 | Contact Form | Contact.astro | pages/contact.astro |
| 10 | Services Content | Content.astro | pages/services.astro |

---

## 🚦 Estado Actual del Proyecto

### ✅ Completado:
- Análisis completo del template
- Logo implementado
- Estructura del proyecto comprendida
- ✅ **FASE 2 COMPLETADA**: index-new.astro creado con todas las secciones
- Todas las secciones integradas y funcionando

### 🔄 En Progreso:
- Revisión y ajustes del index-new.astro

### ⏳ Pendiente:
- Sistema de traducciones (Fase 3)
- Contenido personalizado (Fase 4)
- Testing (Fase 5)
- Deploy final (Fase 6)

---

## 💡 Notas Importantes

1. **No eliminar index.astro actual** hasta que index-new.astro esté completamente funcional
2. **Mantener estructura de carpetas** del template original
3. **Usar widgets existentes** en lugar de crear componentes nuevos
4. **Logo ajustado** pero puede necesitar refinamiento de dimensiones
5. **Blog habilitado** en config.yaml - decidir si mantenerlo o deshabilitarlo

---

## 🔗 Referencias Útiles

- Documentación Astro: https://docs.astro.build/
- Tailwind CSS: https://tailwindcss.com/docs
- Template Original: https://github.com/arthelokyo/astrowind
- Astro i18n: https://docs.astro.build/en/guides/internationalization/

---

## 📞 Próximos Pasos Inmediatos

### ✅ FASE 2 COMPLETADA
- ✅ Archivo `index-new.astro` creado y funcional
- ✅ 10 secciones integradas correctamente
- ✅ Contenido traducido al español
- ✅ Todas las secciones renderizando correctamente

### 🎯 Acceso a la página nueva:
**URL**: http://localhost:4322/index-new

### 📋 Siguientes pasos sugeridos:

#### Opción A: Personalizar contenido (Recomendado)
1. Revisar cada sección de `index-new.astro`
2. Reemplazar textos placeholder con contenido real de Grape
3. Actualizar imágenes con assets propios
4. Ajustar CTAs y enlaces

#### Opción B: Implementar i18n (FASE 3)
1. Crear estructura de carpetas `src/locales/` y `src/i18n/`
2. Crear archivos `es.json` y `en.json`
3. Implementar helper de traducción
4. Agregar selector de idioma al Header

#### Opción C: Configuración básica (FASE 4 parcial)
1. Actualizar `src/config.yaml` con datos de Grape
2. Modificar `src/navigation.ts` con navegación correcta
3. Personalizar Footer con datos reales
4. Actualizar metadata y SEO

### 🔍 Verificación actual:
- [x] Servidor corriendo en puerto 4322
- [x] index-new.astro accesible
- [x] Sin errores de compilación
- [x] Logo funcionando correctamente
- [x] Todas las secciones visibles

---

**Fecha de creación**: Noviembre 8, 2025  
**Última actualización**: Noviembre 8, 2025 - 17:42 (Fase 2 completada)  
**Versión**: 1.1  
**Proyecto**: Grape Landing - Agencia de Desarrollo de Software
