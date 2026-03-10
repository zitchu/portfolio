import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const LANGUAGES = [
  { code: "pt", label: "PT" },
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
];

const MobileNavbar = () => {
  const { language, changeLanguage, uiText } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  const handleScrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    setIsOpen(false);
  };

  const handleDownload = (e) => {
    if (!window.confirm(uiText.navbar.downloadConfirm)) {
      e.preventDefault();
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="fixed top-0 left-0 w-full bg-escuro text-limao z-[1000] shadow-md md:hidden flex justify-between items-center px-4 py-3 h-12">
        {/* Hamburger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="h-10 w-10 flex items-center justify-center hover:text-white transition-colors duration-200 rounded"
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
        </button>

        {/* Language Selector with flags */}
        <div className="flex items-center space-x-1 text-xs mont-bold">
          {LANGUAGES.map((lang, index) => (
            <React.Fragment key={lang.code}>
              {index > 0 && <span className="text-gray-500">|</span>}
              <button
                onClick={() => changeLanguage(lang.code)}
                className={`h-10 px-1 flex items-center gap-1.5 transition-colors duration-200 ${
                  language === lang.code ? "text-white" : "text-gray-500 hover:text-limao"
                }`}
                title={lang.label}
              >
                {lang.code === 'pt' ? (
                  <div className="lang-flag text-lg drop-shadow-sm">
                    <div className="flag-half flag-top"><span className="fi fi-br" /></div>
                    <div className="flag-half flag-bottom"><span className="fi fi-pt" /></div>
                  </div>
                ) : lang.code === 'en' ? (
                  <div className="lang-flag text-lg drop-shadow-sm">
                    <div className="flag-half flag-top"><span className="fi fi-gb" /></div>
                    <div className="flag-half flag-bottom"><span className="fi fi-us" /></div>
                  </div>
                ) : (
                  <span className="fi fi-es text-lg drop-shadow-sm rounded-sm" />
                )}
                <span className="text-xs">{lang.label}</span>
              </button>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Drawer Overlay */}
      {isOpen && (
        <div
          className="drawer-overlay md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-in Drawer */}
      <div
        className={`fixed top-12 left-0 w-64 h-auto bg-escuro text-limao z-[999] shadow-xl rounded-br-xl md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col py-2">
          {/* Projects link */}
          <button
            onClick={handleScrollToTop}
            className="text-left px-6 py-4 hover:bg-white/10 hover:text-white transition-colors duration-200 mont-regular text-sm flex items-center gap-3 animate-fade-slide-up"
          >
            <span className="text-lg">📂</span>
            {uiText.navbar.projects}
          </button>

          {/* Contact link */}
          <button
            onClick={handleScrollToBottom}
            className="text-left px-6 py-4 hover:bg-white/10 hover:text-white transition-colors duration-200 mont-regular text-sm flex items-center gap-3 animate-fade-slide-up"
            style={{ animationDelay: "40ms" }}
          >
            <span className="text-lg">💬</span>
            {uiText.navbar.contact}
          </button>

          {/* Share link */}
          <button
            onClick={handleScrollToBottom}
            className="text-left px-6 py-4 hover:bg-white/10 hover:text-white transition-colors duration-200 mont-regular text-sm flex items-center gap-3 animate-fade-slide-up"
            style={{ animationDelay: "80ms" }}
          >
            <span className="text-lg">🔗</span>
            {uiText.navbar.share}
          </button>

          <div className="mx-6 my-1 h-px bg-white/10" />

          {/* Resume download */}
          <a
            href="/CV_Jeanluiz_2026_ENG.pdf"
            download="CV_Jeanluiz_2026_ENG.pdf"
            onClick={handleDownload}
            className="px-6 py-4 hover:bg-white/10 hover:text-white transition-colors duration-200 mont-regular text-sm flex items-center gap-3 animate-fade-slide-up"
            style={{ animationDelay: "120ms" }}
          >
            <span className="text-lg">📄</span>
            {uiText.navbar.resume}
          </a>
        </nav>
      </div>
    </>
  );
};

export default MobileNavbar;
