import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Compartilhar from "../projetos/Compartilhar";
import CompartilharCol from "../projetos/CompartilharCol";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { GiUsaFlag } from "react-icons/gi";
import { GiBrazilFlag } from "react-icons/gi";

function Sidebar({ isCollapsed, toggleSidebar }) {
  return (
    <div className="flex top-0 left-0 fixed h-full roboto-med">
      <div
        className={`bg-escuro z-[900] text-limao transition-all duration-300 ${
          isCollapsed ? "w-20" : "w-40"
        } flex flex-col justify-center`}
      >
        <div className="p-4">
          <div className="text-center">
            {isCollapsed ? "JM" : "Jeanluiz Monteiro"}
          </div>
        </div>
        <div className="divider z-[1000]" />

        {isCollapsed ? (
          <div className="h-auto flex flex-col">
            <div
              title="Download CV"
              className=" text-center text-white px-7 pt-2"
            >
              <FileDownloadIcon className="bg-cinza rounded mb-2" />
            </div>
            <div className="bg-gradient-to-r from-green-700 to-yellow-500 mx-7 p-1 rounded">
              <GiBrazilFlag className="  text-white text-center" />
            </div>
            <a
              href="/Jeanluiz_CV_BRA_2025.pdf"
              download="Jeanluiz_CV_BRA_2025.pdf"
              className="p-4 pl-7 "
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
            >
              BR-CV
            </a>
            <div className="bg-gradient-to-r from-blue-600 to-red-600 mx-7 p-1 rounded">
              <GiUsaFlag className="  text-white text-center" />
            </div>
            <a
              href="/Jeanluiz_CV_ENG_2025.pdf"
              download="Jeanluiz_CV_ENG_2025.pdf"
              className="p-4 pl-7 "
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
            >
              EN-CV
            </a>
          </div>
        ) : (
          <div className="h-full flex flex-col">
            <div className="cursor-default text-lg underline p-4 pl-6">
              Currículo
            </div>
            <a
              href="/Jeanluiz_CV_BRA_2025.pdf"
              download="Jeanluiz_CV_BRA_2025.pdf"
              className="p-4 pl-6 "
            >
              Versão em português
            </a>
            <a
              href="/Jeanluiz_CV_ENG_2025.pdf"
              download="Jeanluiz_CV_ENG_2025.pdf"
              className="p-4 pl-6 "
            >
              English version
            </a>
          </div>
        )}

        <div className="divider z-[1000]" />
        {isCollapsed ? (
          <div
            className={`p-4 space-y-4 md:space-y-8 px-7 h-auto transition-all duration-300 ${
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
                href="https://wa.me/5561981024948?text=Olá,%20vi%20seu%20portfólio%20e%20entrei%20em%20contato!"
                title="Whats App"
              >
                <WhatsAppIcon />
              </a>
            </div>
            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/jeanluiz-ferreira-porto-monteiro-a19185105/"
                title="Linked-In"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        ) : (
          <div
            className={`p-4 space-y-4 pl-6 h-full transition-all duration-300 ${
              isCollapsed ? "w-20" : "w-40"
            }`}
          >
            <div className="cursor-default text-lg underline">Contatos</div>
            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://wa.me/5561981024948?text=Olá,%20vi%20seu%20portfólio%20e%20entrei%20em%20contato!"
              >
                Whats App
              </a>
            </div>
            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/jeanluiz-ferreira-porto-monteiro-a19185105/"
              >
                Linked-In
              </a>
            </div>
          </div>
        )}

        <div className="divider z-[1000]" />
        {isCollapsed ? <CompartilharCol /> : <Compartilhar />}

        <button
          onClick={toggleSidebar}
          className="m-2 p-2 bg-limao text-escuro rounded"
        >
          {isCollapsed ? "Menu" : "Fechar"}
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
