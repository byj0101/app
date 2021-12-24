// global import
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// local import
import translationEn from "./en.json";
import translationKo from "./ko.json";

i18n.use(LanguageDetector).init({
  lng: "ko",
  fallbackLng: "ko",
  debug: process.env.NODE_ENV === "development" ? true : false,
  ns: ["translations"],
  defaultNS: "translations",
  keySeparator: ".",
  interpolation: {
    escapeValue: false,
    formatSeparator: ",",
  },
  react: {
    useSuspense: false,
  },
  resources: {
    en: {
      translations: translationEn,
    },
    ko: {
      translations: translationKo,
    },
  },
});

export default i18n;
