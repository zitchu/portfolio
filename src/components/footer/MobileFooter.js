import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CompartilharSM from "../projetos/CompartilharSM";
import { useLanguage } from "../../context/LanguageContext";

const MobileFooter = () => {
  const { uiText } = useLanguage();

  const handleDownload = (e) => {
    if (!window.confirm(uiText.navbar.downloadConfirm)) {
      e.preventDefault();
    }
  };

  return (
    <div className="w-full flex flex-col gap-4 pb-4">
      {/* Resume Section */}
      <div className="p-4 flex flex-col justify-center items-center bg-escuro text-white w-full rounded text-limao transition-all duration-300">
        <div className="cursor-default uppercase text-xl text-center mont-regular mb-2">
          {uiText.sidebar.resume}
        </div>
        <div className="flex flex-nowrap w-full justify-around items-center">
          <div className="py-2">
            <a
              className="hover:bg-white/20 rounded px-2 transition-colors duration-200"
              href="/CV_Jeanluiz_2026_ENG.pdf"
              download="CV_Jeanluiz_2026_ENG.pdf"
              title="English Resume"
              onClick={handleDownload}
            >
              Download CV (English 2026)
            </a>
          </div>
        </div>
      </div>

      {/* Contacts Section */}
      <div className="p-4 flex flex-col justify-center items-center bg-escuro text-white w-full rounded text-limao transition-all duration-300">
        <div className="cursor-default uppercase text-xl text-center mont-regular mb-2">
          {uiText.sidebar.contacts}
        </div>
        <div className="flex flex-nowrap w-full justify-around items-center">
          <div className="py-2">
            <a
              className="hover:bg-white/20 rounded px-2 transition-colors duration-200 flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/351922009194?text=Olá,%20vi%20seu%20portfólio%20e%20entrei%20em%20contato!"
            >
              <WhatsAppIcon fontSize="small" /> {uiText.sidebar.whatsapp}
            </a>
          </div>
          <div className="py-2">
            <a
              className="hover:bg-white/20 rounded px-2 transition-colors duration-200 flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/zitchu"
              title="GitHub"
            >
              <GitHubIcon fontSize="small" /> {uiText.sidebar.github}
            </a>
          </div>
          <div className="py-2">
            <a
              className="hover:bg-white/20 rounded px-2 transition-colors duration-200 flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/jeanluiz-monteiro/"
            >
              <LinkedInIcon fontSize="small" /> {uiText.sidebar.linkedin}
            </a>
          </div>
        </div>
      </div>

      {/* Share Section */}
      <div className="flex justify-center bg-escuro text-white w-full rounded text-limao">
        <CompartilharSM />
      </div>
    </div>
  );
};

export default MobileFooter;
