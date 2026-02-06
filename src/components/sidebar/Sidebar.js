import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Compartilhar from "../projetos/Compartilhar";
import CompartilharCol from "../projetos/CompartilharCol";
import GitHubIcon from "@mui/icons-material/GitHub";

function Sidebar({ isCollapsed, toggleSidebar }) {
  
  return (
    <div className="fixed top-0 left-0 h-screen hidden md:flex roboto-med z-[1000]">
      <div
        className={`bg-escuro text-limao transition-all duration-500 ease-in-out ${
          isCollapsed ? "w-20" : "w-40"
        } flex flex-col justify-center h-full`}
      >
        <div className="p-4">
          <div className="text-center mont-regular">
            {isCollapsed ? "JM" : "Jeanluiz Monteiro"}
          </div>
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
                      "Do you want to download the resume in English?"
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
              Currículo
            </div>
            <a
              href="/CV_Jeanluiz_2026_ENG.pdf"
              download="CV_Jeanluiz_2026_ENG.pdf"
              className="p-4 pl-6 hover:text-white transition-colors"
              onClick={(e) => {
                if (
                  !window.confirm(
                    "Do you want to download the resume in English?"
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
              title="Contatos"
            >
              <ContactPageIcon />
            </div>
            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://wa.me/351922009194?text=Olá,%20vi%20seu%20portfólio%20e%20entrei%20em%20contato!"
                title="Whats App"
              >
                <WhatsAppIcon className="hover:text-white transition-colors" />
              </a>
            </div>
            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/zitchu"
                title="GitHub"
              >
                <GitHubIcon className="hover:text-white transition-colors" />
              </a>
            </div>
            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/jeanluiz-ferreira-porto-monteiro-a19185105/"
                title="Linked-In"
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
            <div className="cursor-default text-md mont-regular">Contatos</div>
            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://wa.me/351922009194?text=Olá,%20vi%20seu%20portfólio%20e%20entrei%20em%20contato!"
                className="hover:text-white transition-colors"
              >
                Whats App
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
                GitHub
              </a>
            </div>
            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/jeanluiz-ferreira-porto-monteiro-a19185105/"
                className="hover:text-white transition-colors"
              >
                Linked-In
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
          {isCollapsed ? "Menu" : "Fechar"}
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
