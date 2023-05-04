import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import zhTranslation from "../locales/zh/translation.json";
import enTranslation from "../locales/en/translation.json";

i18n.use(initReactI18next).init({
    lng: "zh",
    fallbackLng: "zh",
    resources: {
        zh: {
            translation: zhTranslation,
        },
        en: {
            translation: enTranslation,
        },
    },
});
