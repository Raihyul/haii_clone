import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  kor: {},
  eng: {},
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ko",
  fallbackLng: "ko",
  // debug: true,
  // keySeparator: false,
  interpolation: {
    escapeValue: false, // 기본적으로 문자열을 escape하지 않음.
  },
});

export default i18n;
