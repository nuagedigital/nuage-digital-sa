// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translation JSON files
import enCommon from "./locales/en/common.json";
import arCommon from "./locales/ar/common.json";
import enContact from "./locales/en/contact.json";
import arContact from "./locales/ar/contact.json";
import enServices from "./locales/en/services.json";
import arServices from "./locales/ar/services.json";
import enBookkeeping from "./locales/en/bookkeeping_lang.json";
import arBookkeeping from "./locales/ar/bookkeeping_lang.json";
import enConsulting from "./locales/en/consulting.json";
import arConsulting from "./locales/ar/consulting.json";
import enManage from "./locales/en/manage.json";
import arManage from "./locales/ar/manage.json";
import enTechnology from "./locales/en/technology.json";
import arTechnology from "./locales/ar/technology.json";
import enhuman_resoure from "./locales/en/human_resoure.json";
import arhuman_resoure from "./locales/ar/human_resoure.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
        contact: enContact,
        services: enServices,
        bookkeeping_lang: enBookkeeping,
        consulting: enConsulting,
        manage: enManage,
        technology: enTechnology,
        human_resoure: enhuman_resoure,
      },
      ar: {
        common: arCommon,
        contact: arContact,
        services: arServices,
        bookkeeping_lang: arBookkeeping,
        consulting: arConsulting,
        manage: arManage,
        technology: arTechnology,
        human_resoure: arhuman_resoure,
      },
    },
    lng: "ar",
    fallbackLng: "ar",
    ns: ["common", "contact", "services", "bookkeeping_lang", "consulting", "manage", "technology", "Human"],
    defaultNS: "common",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;