import fr from './i18n/fr.json';
import en from './i18n/en.json';

const translations: Record<string, Record<string, string>> = { fr, en };

export type Lang = 'fr' | 'en';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en') return 'en';
  return 'fr';
}

export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    return translations[lang][key] ?? key;
  };
}
