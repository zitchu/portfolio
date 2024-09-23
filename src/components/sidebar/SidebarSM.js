import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import GitHubIcon from "@mui/icons-material/GitHub";
import { GiUsaFlag } from "react-icons/gi";
import { GiBrazilFlag } from "react-icons/gi";
import CompartilharColSM from "../projetos/CompartilharColSM";

function SidebarSM({ toggleSidebar }) {
  return (
    <div className="flex flex-row top-0 fixed w-full roboto-med">
      <div className="w-full bg-escuro z-[900] text-limao flex flex-row justify-center">
        <div className="w-20 h-full mont-regular flex justify-center items-center text-center">JM</div>
        <div className="divider-h z-[1000]" />

        <div className="w-auto flex flex-row space-w-4 md:space-w-6 mb-4">
          <div title="Download CV" className="text-center text-white py-7 pt-4">
            <FileDownloadIcon className="bg-cinza rounded mb-2" />
          </div>
          <div className="w-6 h-6 bg-gradient-to-r from-green-700 to-yellow-500 my-7 p-1 rounded">
            <GiBrazilFlag className="text-white text-center" />
            <a
              href="/Jeanluiz_CV_BRA_2025.pdf"
              download="Jeanluiz_CV_BRA_2025.pdf"
              className="p-4 pl-7"
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

          <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-red-600 my-7 p-1 rounded">
            <GiUsaFlag className="text-white text-center" />
            <a
              href="/Jeanluiz_CV_ENG_2025.pdf"
              download="Jeanluiz_CV_ENG_2025.pdf"
              className="p-4 pl-7"
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

        <div className="divider-h z-[1000]" />

        <div className=" flex flex-col p-4 space-w-4 py-7 w-auto transition-all duration-300">
          <div
            className="basis-full bg-cinza rounded text-center text-white"
            title="Contatos"
          >
            <ContactPageIcon />
          </div>
          <div className="flex justify-around">
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
                href="https://github.com/zitchu"
                title="GitHub"
              >
                <GitHubIcon />
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
        </div>

        <div className="divider-h z-[1000]" />
        <CompartilharColSM />

        <button
          onClick={toggleSidebar}
          className="m-2 p-2 bg-limao text-escuro rounded"
        >
          Menu
        </button>
      </div>
    </div>
  );
}

export default SidebarSM;
