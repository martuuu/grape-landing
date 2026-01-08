# 🚀 COMMIT Landing - Plan de Mejoras UX/UI

## 📋 Checklist de Mejoras (Sprint Actual)

### ✅ **1. Header - Ajustes Generales**
- [x] Comentar toggle de cambio de theme
- [x] Comentar toggle de cambio de idioma
- [x] Actualizar link de Instagram a `commit.ar`
- [x] Cambiar teléfono de contacto global a `2915278982`

### ✅ **2. Header - Menú Productos**
- [x] Actualizar dropdown con 3 productos:
  - [x] Laneko - Gestión integral
  - [x] Consultorio Online
  - [x] Picky - Gestión de tiendas

### ✅ **3. Rebranding Global: Grape → COMMIT**
- [x] Actualizar todas las referencias en código
- [x] Revisar metadata y SEO
- [x] Verificar textos en componentes
- [x] Actualizar assets si es necesario

### ✅ **4. Home - Sección Diferenciación (Rediseño)**
- [x] Analizar problemas actuales:
  - Items muy separados
  - Gradiente de color no visible
  - Falta de transiciones fluidas
- [x] Implementar mejoras:
  - [x] Agregar transiciones de aparición (fade-in, slide-up con Intersection Observer)
  - [x] Ajustar espaciado entre items (más compacto)
  - [x] Mejorar contraste de gradientes (colores más vibrantes)
  - [x] Agregar efectos hover con glassmorphism
  - [x] Staggered animations para efecto progresivo

### ✅ **5. Home - Sección Contact/Support (Sección 8)**
- [x] Eliminar información de ubicación
- [x] Refocalizar en "Presupuestos personalizados"
- [x] Mejorar CTA hacia página `/presupuesto`
- [x] Optimizar copy y diseño del formulario

### ✅ **6. Página Presupuesto - Mejoras Generales**
- [x] Actualizar texto inicial: "Construyamos tu proyecto a medida"
- [x] Cambiar "Tienes" por "Tenés" (argentinizar)

### ✅ **7. Página Presupuesto - Step 2 (Tipo de Proyecto)**
- [x] Corregir layout: cards apiladas sin separación
- [x] Opción 3: Mantener gradiente del logo (queda bien así)
- [x] Opción 3: Cambiar título a "Desarrollo 100% Personalizado (Landing + App)"

### ✅ **8. Página Presupuesto - Step 3 (Funcionalidades)**
- [x] Eliminar efecto de agrandamiento de card al seleccionar
- [x] Implementar transición suave al seleccionar:
  - Borde de color ✓
  - Hover sutil ✓
  - Sin cambio de tamaño (se mantiene escala consistente)
- [x] Aplicar consistencia en todo el builder

### ✅ **9. Página Presupuesto - Step 4 (Resumen)**
- [x] Argentinizar textos (eliminar español neutro)
- [x] Rediseñar visualización de selecciones del usuario:
  - Layout más organizado con gradientes
  - Mejor jerarquía visual con bullets de color
  - Estilo más premium con borders y shadows

---

## 🎯 Contexto Técnico

### Stack Actual
- **Framework**: Astro 5.0 (SSG optimizado)
- **Styling**: Tailwind CSS + Paleta COMMIT
- **Interactividad**: React components (islands architecture)
- **Transiciones**: Intersection Observer API + CSS transitions

### Paleta de Colores COMMIT
```css
'commit': {
  darkest: '#052832',
  darker: '#117999',
  dark: '#1283a5',
  DEFAULT: '#138bae',
  light: '#1ba1c9',
  lighter: '#26bce9',
  lightest: '#59cbee',
  pale: '#ade4f7',
}
```

### Componentes Modificados
- ✅ `/src/components/widgets/Header.astro` - Toggles comentados, links actualizados
- ✅ `/src/components/widgets/ScrollSnapContent.astro` - Rediseño completo con mejores transiciones
- ✅ `/src/pages/index.astro` - CallToAction reemplazando Features2
- ✅ `/src/pages/presupuesto.astro` - Textos argentinizados
- ✅ `/src/components/widgets/BudgetBuilder.tsx` - Mejoras UX en todos los steps
- ✅ `/src/navigation.ts` - Menú Productos actualizado

---

## 📝 Notas de Implementación
- ✅ Transiciones implementadas con Intersection Observer para mejor performance
- ✅ `motion-safe:` considerado en los estilos para accesibilidad
- ✅ Consistencia mantenida con sistema de diseño COMMIT
- ✅ Responsive verificado conceptualmente (requiere testing)

---

## 🔄 Siguiente Sprint (Backlog)
- Testing responsive en todos los breakpoints (mobile, tablet, desktop)
- Internacionalización ES/EN
- Optimización SEO avanzada
- Analytics y tracking
- Formularios funcionales con backend
- Validación de schemas en Schema Validator

