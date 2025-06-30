import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

export const languages = [
  'en',
  'uk',
  'zh',
  'es',
  'hi',
  'pt',
  'ru',
  'fr',
  'de',
  'ja',
  'ko',
  'id',
  'tr'
] as const;
export const languagesLabels = [
  {
    code: 'id',
    label: 'Bahasa Indonesia'
  },
  {
    code: 'de',
    label: 'Deutsch'
  },
  {
    code: 'en',
    label: 'English'
  },
  {
    code: 'es',
    label: 'Español'
  },
  {
    code: 'fr',
    label: 'Français'
  },
  {
    code: 'hi',
    label: 'हिन्दी'
  },
  {
    code: 'ja',
    label: '日本語'
  },
  {
    code: 'ko',
    label: '한국어'
  },
  {
    code: 'pt',
    label: 'Português'
  },
  {
    code: 'ru',
    label: 'Русский'
  },
  {
    code: 'tr',
    label: 'Türkçe'
  },
  {
    code: 'uk',
    label: 'Українська'
  },
  {
    code: 'zh',
    label: '中文'
  }
];

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: languages,
    fallbackLng: 'en',
    //debug: true,
    interpolation: {
      escapeValue: false
    },
    load: 'languageOnly',
    backend: {
      loadPath: '/messages/{{lng}}.json'
    }
  });

export default i18n;
