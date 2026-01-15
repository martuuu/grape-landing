/**
 * Cliente de i18n para cambio dinámico de idioma
 * Este script se ejecuta en el navegador para actualizar el contenido
 */

// Importar traducciones
import esTranslations from '../locales/es.json';
import enTranslations from '../locales/en.json';

type Language = 'es' | 'en';

const translations = {
  es: esTranslations,
  en: enTranslations,
};

/**
 * Obtiene el idioma actual - FORZADO A ESPAÑOL ÚNICAMENTE
 * El sitio solo opera en español, multi-idioma deshabilitado
 */
export function getCurrentLanguage(): Language {
  // FORZAR ESPAÑOL SIEMPRE - No respetar preferencias de usuario ni navegador
  return 'es';
}

/**
 * Obtiene una traducción por clave
 */
export function t(lang: Language, key: string): string {
  const keys = key.split('.');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let value: any = translations[lang];

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      console.warn(`Translation key not found: ${key} for language: ${lang}`);
      return key;
    }
  }

  return typeof value === 'string' ? value : key;
}

/**
 * Actualiza los elementos del DOM con traducciones
 */
export function updatePageTranslations(lang: Language) {
  // Actualizar elementos con data-i18n
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach((element) => {
    const key = element.getAttribute('data-i18n');
    if (key) {
      const translation = t(lang, key);
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        (element as HTMLInputElement).placeholder = translation;
      } else {
        element.textContent = translation;
      }
    }
  });

  // Actualizar atributo lang del HTML
  document.documentElement.lang = lang;
  
  // Guardar preferencia
  localStorage.setItem('language', lang);
}

/**
 * Inicializar idioma al cargar la página - FORZADO A ESPAÑOL
 */
export function initLanguage() {
  // Forzar español, ignorar cualquier otra configuración
  const lang = 'es';
  updatePageTranslations(lang);
}
