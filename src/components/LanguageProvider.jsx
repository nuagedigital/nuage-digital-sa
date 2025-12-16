import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = (lang) => setLanguage(lang);

  const translations = {
    en: {
      login: "Login",
      services: "Services",
      service1: "Business Solutions",
      service2: "Financial Services",
      contact: "Contact Us",
      global: "Global"
    },
    ar: {
      login: "تسجيل الدخول",
      services: "الخدمات",
      service1: "حلول الأعمال",
      service2: "الخدمات المالية",
      contact: "اتصل بنا",
      global: "عالمي"
    },
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
