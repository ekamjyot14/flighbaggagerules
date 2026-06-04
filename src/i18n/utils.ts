import { defaultLocale, locales, rtlLocales, pathSegments, type Locale } from './config';
import type { GetStaticPathsResult } from 'astro';

// Load translations dynamically
const translationCache: Partial<Record<Locale, Record<string, string>>> = {};

export async function loadTranslations(locale: Locale): Promise<Record<string, string>> {
  if (translationCache[locale]) return translationCache[locale]!;
  try {
    const mod = await import(`./translations/${locale}.json`);
    translationCache[locale] = mod.default;
    return mod.default;
  } catch {
    if (locale !== defaultLocale) {
      return loadTranslations(defaultLocale);
    }
    return {};
  }
}

// Synchronous t() for use in Astro frontmatter — call after awaiting translations
export function createTranslator(translations: Record<string, string>) {
  return function t(key: string, replacements?: Record<string, string>): string {
    let str = translations[key] ?? key;
    if (replacements) {
      for (const [k, v] of Object.entries(replacements)) {
        str = str.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
      }
    }
    return str;
  };
}

// Get locale from URL pathname
export function getLocaleFromUrl(url: URL): Locale {
  const [, maybeLocale] = url.pathname.split('/');
  if (locales.includes(maybeLocale as Locale)) return maybeLocale as Locale;
  return defaultLocale;
}

// Get the path prefix for a given locale
export function getLocalePath(locale: Locale, path: string = ''): string {
  const base = locale === defaultLocale ? '' : `/${locale}`;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

// Build localized path for a specific segment key
export function getSegmentPath(locale: Locale, segment: string, slug?: string): string {
  const localized = pathSegments[segment]?.[locale] ?? segment;
  const base = locale === defaultLocale ? '' : `/${locale}`;
  return slug ? `${base}/${localized}/${slug}` : `${base}/${localized}`;
}

// Check if a locale is RTL
export function isRTL(locale: Locale): boolean {
  return rtlLocales.includes(locale);
}

// Generate static paths for all locales
export function getLocaleStaticPaths(): GetStaticPathsResult {
  return locales
    .filter((l) => l !== defaultLocale)
    .map((lang) => ({ params: { lang } }));
}

// Build hreflang alternates for a given path
export function getHreflangs(
  site: string,
  path: string,
  locale: Locale
): Array<{ hreflang: string; href: string }> {
  const hreflangMap: Record<Locale, string> = {
    en: 'en-US',
    es: 'es-ES',
    fr: 'fr-FR',
    de: 'de-DE',
    it: 'it-IT',
    pt: 'pt-PT',
    nl: 'nl-NL',
    ar: 'ar-SA',
    hi: 'hi-IN',
    ja: 'ja-JP',
    ko: 'ko-KR',
    zh: 'zh-CN',
  };

  return [
    ...locales.map((l) => ({
      hreflang: hreflangMap[l],
      href: `${site}${getLocalePath(l, path)}`,
    })),
    { hreflang: 'x-default', href: `${site}${path}` },
  ];
}
