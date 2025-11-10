/**
 * i18n Helper - Sistema de traducciones
 * Proporciona funciones para obtener traducciones basadas en el idioma actual
 */

import esTranslations from '../locales/es.json';
import enTranslations from '../locales/en.json';

type Language = 'es' | 'en';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const translations: Record<Language, any> = {
  es: esTranslations,
  en: enTranslations,
};

/**
 * Obtiene una traducción basada en el idioma y la clave
 * @param lang - Idioma ('es' | 'en')
 * @param key - Ruta de la clave en el objeto de traducciones (ej: 'hero.title')
 * @returns La traducción correspondiente o la clave si no se encuentra
 */
export function t(lang: Language, key: string): string {
  const keys = key.split('.');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let value: any = translations[lang] || translations.es;

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
 * Detecta el idioma del navegador
 * @returns El idioma detectado ('es' | 'en')
 */
export function detectLanguage(): Language {
  if (typeof window === 'undefined') return 'es';
  
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith('en')) return 'en';
  return 'es';
}

/**
 * Obtiene el idioma actual desde la URL o detecta automáticamente
 * @param url - URL actual (opcional)
 * @returns El idioma actual
 */
export function getCurrentLanguage(url?: string): Language {
  if (url) {
    const match = url.match(/^\/(en|es)\//);
    if (match) return match[1] as Language;
  }
  return 'es'; // Default
}
