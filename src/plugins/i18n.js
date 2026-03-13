import { createI18n } from "vue-i18n";
import en from "@/locales/en/index.json";
import th from "@/locales/th/index.json";

const messages = {
  en,
  th,
};

const savedLocale = (() => {
  try {
    return localStorage.getItem("locale") || "en";
  } catch (e) {
    return "en";
  }
})();

const i18n = createI18n({
  legacy: false,
  locale: savedLocale,
  fallbackLocale: "en",
  messages,
});

export function setLocale(locale) {
  i18n.global.locale.value = locale;
  try {
    localStorage.setItem("locale", locale);
  } catch (e) {}
}

export default i18n;
