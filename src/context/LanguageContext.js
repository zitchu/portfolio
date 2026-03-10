import React, { createContext, useContext, useState, useEffect } from "react";
import translations from "../i18n/translations";

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  // Inicializa o idioma a partir do localStorage ou com o padrão 'pt'
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("language");
    return savedLanguage || "pt";
  });

  // Atualiza o localStorage sempre que o idioma muda
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const changeLanguage = (lang) => {
    if (["pt", "en", "es"].includes(lang)) {
      setLanguage(lang);
    }
  };

  const uiText = translations[language];

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, uiText }}>
      {children}
    </LanguageContext.Provider>
  );
};
