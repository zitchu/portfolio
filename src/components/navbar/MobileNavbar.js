import React from "react";
import { useLanguage } from "../../context/LanguageContext";

const MobileNavbar = () => {
  const { language, changeLanguage, uiText } = useLanguage();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-escuro text-limao z-[1000] shadow-md md:hidden flex justify-between items-center px-4 py-3">
      <div className="flex space-x-4 mont-regular text-sm">
        <button onClick={handleScrollToTop} className="hover:text-white transition-colors h-10 px-2 flex items-center">
          {uiText.navbar.home}
        </button>
        <button onClick={handleScrollToTop} className="hover:text-white transition-colors h-10 px-2 flex items-center">
          {uiText.navbar.projects}
        </button>
        <button onClick={handleScrollToBottom} className="hover:text-white transition-colors h-10 px-2 flex items-center">
          {uiText.navbar.contact}
        </button>
      </div>

      <div className="flex space-x-2 text-xs mont-bold">
        <button
          onClick={() => changeLanguage("pt")}
          className={`h-10 px-1 flex items-center transition-colors ${language === "pt" ? "text-white" : "text-gray-500 hover:text-limao"}`}
        >
          PT
        </button>
        <span className="flex items-center text-gray-500">|</span>
        <button
          onClick={() => changeLanguage("en")}
          className={`h-10 px-1 flex items-center transition-colors ${language === "en" ? "text-white" : "text-gray-500 hover:text-limao"}`}
        >
          EN
        </button>
        <span className="flex items-center text-gray-500">|</span>
        <button
          onClick={() => changeLanguage("es")}
          className={`h-10 px-1 flex items-center transition-colors ${language === "es" ? "text-white" : "text-gray-500 hover:text-limao"}`}
        >
          ES
        </button>
      </div>
    </div>
  );
};

export default MobileNavbar;
