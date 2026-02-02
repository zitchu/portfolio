import { useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Compartilhar from "../projetos/Compartilhar";
import CompartilharCol from "../projetos/CompartilharCol";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import GitHubIcon from "@mui/icons-material/GitHub";
import { GiUsaFlag, GiBrazilFlag } from "react-icons/gi";

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
          <div className="h-auto flex flex-col space-y-4 md:space-y-6 mb-4">
            <div
              title="Download CV"
              className=" text-center text-white px-7 pt-4"
            >
              <FileDownloadIcon className="bg-cinza rounded mb-2" />
            </div>
            <div className="h-6 bg-gradient-to-r from-green-700 to-yellow-500 mx-7 p-1 rounded cursor-pointer hover:opacity-80 transition-opacity">
              <GiBrazilFlag className="  text-white text-center" />
              <a
                href="/Jeanluiz_CV_BRA_2025.pdf"
                download="Jeanluiz_CV_BRA_2025.pdf"
                className="p-4 pl-7 block w-full h-full"
                title="Currículo em Português"
                onClick={(e) => {
                  if (
                    !window.confirm(
                      "Você deseja baixar o currículo em português?"
                    )
                  ) {
                    e.preventDefault();
                  }
                }}
              />
            </div>

            <div className="h-6 bg-gradient-to-r from-blue-600 to-red-600 mx-7 p-1 rounded cursor-pointer hover:opacity-80 transition-opacity">
              <GiUsaFlag className="  text-white text-center" />
              <a
                href="/Jeanluiz_CV_ENG_2025.pdf"
                download="Jeanluiz_CV_ENG_2025.pdf"
                className="p-4 pl-7 block w-full h-full"
                title="English Resume"
                onClick={(e) => {
                  if (
                    !window.confirm(
                      "Do you want to download the resume in English?"
                    )
                  ) {
                    e.preventDefault();
                  }
                }}
              />
            </div>
          </div>
        ) : (
          <div className="h-auto flex flex-col ">
            <div className="cursor-default text-md  p-4 pl-6 mont-regular">
              Currículo
            </div>
            <div className="w-[25%] bg-gradient-to-r  from-green-700 to-yellow-500 mx-7 p-1 rounded">
              <GiBrazilFlag className=" text-white text-center transform transition-transform duration-300 ease-in-out hover:translate-x-full" />
            </div>

            <a
              href="/Jeanluiz_CV_BRA_2025.pdf"
              download="Jeanluiz_CV_BRA_2025.pdf"
              className="p-4 pl-6 hover:text-white transition-colors"
            >
              Versão em português
            </a>
            <div className="w-[25%] bg-gradient-to-r from-blue-600 to-red-600 mx-7 p-1 rounded">
              <GiUsaFlag className="  text-white text-center transform transition-transform duration-300 ease-in-out hover:translate-x-full" />
            </div>
            <a
              href="/Jeanluiz_CV_ENG_2025.pdf"
              download="Jeanluiz_CV_ENG_2025.pdf"
              className="p-4 pl-6 hover:text-white transition-colors"
            >
              English version
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
