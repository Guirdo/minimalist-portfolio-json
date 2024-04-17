import { ui, defaultLang, showDefaultLang } from './ui';

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLang;
  }
  
  export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof defaultLang],...interpolation: any[]) {
      let translation = ui[lang][key] || ui[defaultLang][key]

      if(interpolation.length > 0){
        const pattern = new RegExp('%s')
        return translation.replace(pattern,interpolation[0]) 
      }
      return translation
    }
  }

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`
  }
}
