# Sistema de Internacionalización (i18n)

## Estructura

```
src/
├── i18n/
│   ├── index.ts      # Helper principal de traducción
│   └── utils.ts      # Utilidades (idiomas, detección)
└── locales/
    ├── es.json       # Traducciones español (default)
    └── en.json       # Traducciones inglés
```

## Uso

### En componentes Astro

```astro
---
import { t } from '~/i18n';

// Obtener idioma actual (por ahora siempre 'es', luego se detectará automáticamente)
const currentLang = 'es';

// Obtener traducciones
const heroTitle = t(currentLang, 'hero.title');
const ctaPrimary = t(currentLang, 'hero.cta_primary');
---

<h1>{heroTitle}</h1>
<button>{ctaPrimary}</button>
```

### Estructura de archivos JSON

Las traducciones se organizan por secciones:

```json
{
  "nav": { ... },           // Navegación
  "hero": { ... },          // Hero principal
  "features": {             // Sección Features
    "title": "...",
    "subtitle": "...",
    "items": {
      "boutique": {
        "title": "...",
        "description": "..."
      }
    }
  },
  "common": { ... }         // Textos comunes (botones, etc.)
}
```

## Idiomas Disponibles

- **es** (Español) - Idioma por defecto
- **en** (English)

## Agregar Nuevas Traducciones

1. Agregar la clave en `src/locales/es.json`
2. Agregar la misma clave con la traducción en `src/locales/en.json`
3. Usar en componentes con `t(lang, 'clave.anidada')`

## Próximos Pasos

- [ ] Implementar detección automática de idioma
- [ ] Agregar selector de idioma en Header
- [ ] Configurar rutas por idioma (opcional: /es/, /en/)
- [ ] Completar traducciones de todas las secciones
