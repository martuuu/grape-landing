/**
 * Utilidades para i18n
 */

export type Language = 'es' | 'en';

export const LANGUAGES = {
  es: {
    code: 'es',
    name: 'Español',
    flag: '🇪🇸',
  },
  en: {
    code: 'en',
    name: 'English',
    flag: '🇺🇸',
  },
} as const;

export const DEFAULT_LANGUAGE: Language = 'es';

/**
 * Obtiene la configuración de un idioma
 */
export function getLanguageConfig(lang: Language) {
  return LANGUAGES[lang] || LANGUAGES[DEFAULT_LANGUAGE];
}

/**
 * Lista de todos los idiomas disponibles
 */
export function getAvailableLanguages() {
  return Object.values(LANGUAGES);
}
