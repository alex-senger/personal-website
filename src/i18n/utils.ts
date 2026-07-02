import { ui, defaultLocale, locales, type Locale, type UiKey } from './ui';

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

/** Extract the locale from a URL path like /de/blog/... */
export function getLocaleFromUrl(url: URL): Locale {
  const [, first] = url.pathname.split('/');
  return isLocale(first) ? first : defaultLocale;
}

/** Returns a translator bound to a locale: t('nav.blog') */
export function useTranslations(locale: Locale) {
  return function t(key: UiKey): string {
    return ui[locale][key] ?? ui[defaultLocale][key];
  };
}

/** Prefix a site-relative path with the locale: localePath('de', '/blog') -> /de/blog */
export function localePath(locale: Locale, path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `/${locale}${clean === '/' ? '/' : clean}`;
}

/** The same page in the other locale (used by the language switcher). */
export function switchLocalePath(url: URL, target: Locale): string {
  const [, first, ...rest] = url.pathname.split('/');
  const restPath = rest.join('/');
  if (isLocale(first)) {
    return `/${target}/${restPath}`;
  }
  return `/${target}${url.pathname}`;
}

/** Date formatting per locale */
export function formatDate(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(locale === 'de' ? 'de-DE' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}
