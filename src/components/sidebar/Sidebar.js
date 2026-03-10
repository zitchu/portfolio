import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Compartilhar from "../projetos/Compartilhar";
import CompartilharCol from "../projetos/CompartilharCol";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useLanguage } from "../../context/LanguageContext";

function Sidebar({ isCollapsed, toggleSidebar }) {
  const { language, changeLanguage, uiText } = useLanguage();
  
  return (
    <div className="fixed top-0 left-0 h-screen hidden md:flex roboto-med z-[1000]">
      <div
        className={`bg-escuro text-limao transition-all duration-500 ease-in-out ${
          isCollapsed ? "w-20" : "w-40"
        } flex flex-col justify-center h-full`}
      >
        <div className="p-4">
          <div className="text-center mont-regular">
            {isCollapsed ? uiText.sidebar.nameShort : uiText.sidebar.name}
          </div>
        </div>
        <div className="divider z-[1000]" />

        {/* Language Selector */}
        <div className="flex justify-center items-center py-2 text-xs mont-bold">
            <button
              onClick={() => changeLanguage("pt")}
              className={`px-1 transition-colors ${language === "pt" ? "text-white" : "text-gray-500 hover:text-limao"}`}
              title="Português"
            >
              PT
            </button>
            <span className="text-gray-500 mx-1">|</span>
            <button
              onClick={() => changeLanguage("en")}
              className={`px-1 transition-colors ${language === "en" ? "text-white" : "text-gray-500 hover:text-limao"}`}
              title="English"
            >
              EN
            </button>
            <span className="text-gray-500 mx-1">|</span>
            <button
              onClick={() => changeLanguage("es")}
              className={`px-1 transition-colors ${language === "es" ? "text-white" : "text-gray-500 hover:text-limao"}`}
              title="Español"
            >
              ES
            </button>
        </div>
        <div className="divider z-[1000]" />

        {isCollapsed ? (
          <div className="h-auto flex flex-col space-y-4 md:space-y-6 py-4 mb-4 items-center">
            <div className="w-10 h-10 bg-verde rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
              <a
                href="/CV_Jeanluiz_2026_ENG.pdf"
                download="CV_Jeanluiz_2026_ENG.pdf"
                className="text-white text-xs font-bold"
                title="Download CV"
                onClick={(e) => {
                  if (
                    !window.confirm(
                      uiText.sidebar.downloadConfirm
                    )
                  ) {
                    e.preventDefault();
                  }
                }}
              >
                CV
              </a>
            </div>
          </div>
        ) : (
          <div className="h-auto flex flex-col py-2">
            <div className="cursor-default text-md p-4 pl-6 mont-regular">
              {uiText.sidebar.resume}
            </div>
            <a
              href="/CV_Jeanluiz_2026_ENG.pdf"
              download="CV_Jeanluiz_2026_ENG.pdf"
              className="p-4 pl-6 hover:text-white transition-colors"
              onClick={(e) => {
                if (
                  !window.confirm(
                     uiText.sidebar.downloadConfirm
                  )
                ) {
                  e.preventDefault();
                }
              }}
            >
              English CV 2026
            </a>
          </div>
        )}

        <div className="divider z-[1000]" />
        {isCollapsed ? (
          <div
            className={`p-4  space-y-4 md:space-y-6 px-7 h-auto transition-all duration-500 ease-in-out ${
              isCollapsed ? "w-20" : "w-40"
            }`}
          >
            <div
              className="bg-cinza rounded text-center text-white"
              title={uiText.sidebar.contacts}
            >
              <ContactPageIcon />
            </div>
            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://wa.me/351922009194?text=Olá,%20vi%20seu%20portfólio%20e%20entrei%20em%20contato!"
                title={uiText.sidebar.whatsapp}
              >
                <WhatsAppIcon className="hover:text-white transition-colors" />
              </a>
            </div>
            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/zitchu"
                title={uiText.sidebar.github}
              >
                <GitHubIcon className="hover:text-white transition-colors" />
              </a>
            </div>
            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/jeanluiz-monteiro/"
                title={uiText.sidebar.linkedin}
              >
                <LinkedInIcon className="hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        ) : (
          <div
            className={`p-4 space-y-4 md:space-y-6 pl-6 h-auto transition-all duration-500 ease-in-out ${
              isCollapsed ? "w-20" : "w-40"
            }`}
          >
            <div className="cursor-default text-md mont-regular">{uiText.sidebar.contacts}</div>
            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://wa.me/351922009194?text=Olá,%20vi%20seu%20portfólio%20e%20entrei%20em%20contato!"
                className="hover:text-white transition-colors"
              >
                {uiText.sidebar.whatsapp}
              </a>
            </div>
            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/zitchu"
                title="GitHub"
                className="hover:text-white transition-colors"
              >
                 {uiText.sidebar.github}
              </a>
            </div>
            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/jeanluiz-monteiro/"
                className="hover:text-white transition-colors"
              >
                 {uiText.sidebar.linkedin}
              </a>
            </div>
          </div>
        )}

        <div className="divider z-[1000]" />
        
        {/* Share Buttons logic */}
        {isCollapsed ? <CompartilharCol /> : <Compartilhar />}

        <button
          onClick={toggleSidebar}
          className="m-2 p-2 bg-limao text-escuro rounded hover:bg-verde hover:text-white transition-colors"
        >
          {isCollapsed ? uiText.sidebar.menu : uiText.sidebar.close}
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
