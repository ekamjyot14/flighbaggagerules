export type Locale = 'en' | 'es' | 'fr' | 'de' | 'it' | 'pt' | 'nl' | 'ar' | 'hi' | 'ja' | 'ko' | 'zh';

export const defaultLocale: Locale = 'en';

export const locales: Locale[] = ['en', 'es', 'fr', 'de', 'it', 'pt', 'nl', 'ar', 'hi', 'ja', 'ko', 'zh'];

export const rtlLocales: Locale[] = ['ar'];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  it: 'Italiano',
  pt: 'Português',
  nl: 'Nederlands',
  ar: 'العربية',
  hi: 'हिन्दी',
  ja: '日本語',
  ko: '한국어',
  zh: '中文',
};

export const localeFlags: Record<Locale, string> = {
  en: 'US',
  es: 'ES',
  fr: 'FR',
  de: 'DE',
  it: 'IT',
  pt: 'PT',
  nl: 'NL',
  ar: 'SA',
  hi: 'IN',
  ja: 'JP',
  ko: 'KR',
  zh: 'CN',
};

// Localized path segments for SEO-friendly URLs
export const pathSegments: Record<string, Record<Locale, string>> = {
  airlines: {
    en: 'airlines',
    es: 'aerolineas',
    fr: 'compagnies-aeriennes',
    de: 'fluggesellschaften',
    it: 'compagnie-aeree',
    pt: 'companhias-aereas',
    nl: 'luchtvaartmaatschappijen',
    ar: 'airlines',
    hi: 'airlines',
    ja: 'airlines',
    ko: 'airlines',
    zh: 'airlines',
  },
  items: {
    en: 'items',
    es: 'articulos',
    fr: 'articles',
    de: 'artikel',
    it: 'articoli',
    pt: 'artigos',
    nl: 'artikelen',
    ar: 'items',
    hi: 'items',
    ja: 'items',
    ko: 'items',
    zh: 'items',
  },
  check: {
    en: 'check',
    es: 'verificar',
    fr: 'verifier',
    de: 'pruefen',
    it: 'verifica',
    pt: 'verificar',
    nl: 'controleren',
    ar: 'check',
    hi: 'check',
    ja: 'check',
    ko: 'check',
    zh: 'check',
  },
  compare: {
    en: 'compare',
    es: 'comparar',
    fr: 'comparer',
    de: 'vergleichen',
    it: 'confronta',
    pt: 'comparar',
    nl: 'vergelijken',
    ar: 'compare',
    hi: 'compare',
    ja: 'compare',
    ko: 'compare',
    zh: 'compare',
  },
  blog: {
    en: 'blog',
    es: 'blog',
    fr: 'blog',
    de: 'blog',
    it: 'blog',
    pt: 'blog',
    nl: 'blog',
    ar: 'blog',
    hi: 'blog',
    ja: 'blog',
    ko: 'blog',
    zh: 'blog',
  },
};
