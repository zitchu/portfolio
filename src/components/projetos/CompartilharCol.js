import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ShareIcon from "@mui/icons-material/Share";
import { useLanguage } from "../../context/LanguageContext";

const CompartilharCol = () => {
  const { uiText } = useLanguage();
  const currentURL = window.location.href;

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${currentURL}`,
    twitter: `https://twitter.com/intent/tweet?url=${currentURL}&text=Veja%20isso!`,
    linkedin: `https://www.linkedin.com/shareArticle?url=${currentURL}&title=Veja%20isso!`,
    whatsapp: `https://api.whatsapp.com/send?text=Veja%20isso!%20${currentURL}`,
  };

  return (
    <div className="h-full rounded overflow-hidden shadow-lg px-7 pt-4 space-y-4 md:space-y-6">
      <div
        title={uiText.share.title}
        className="bg-cinza rounded text-white font-semibold mb-2"
      >
        <ShareIcon />
      </div>
      <div className="flex flex-col -pl-1 left-0 justify-evenly space-y-4 md:space-y-6">
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          title="Compartilhar Facebook"
          className="transition-transform duration-150 hover:scale-110 inline-block"
        >
          <FacebookIcon className="text-blue-600 hover:text-white text-3xl" />
        </a>
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          title="Compartilhar X"
          className="transition-transform duration-150 hover:scale-110 inline-block"
        >
          <XIcon className="text-white hover:text-blue-600 text-3xl" />
        </a>
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          title="Compartilhar Linked In"
          className="transition-transform duration-150 hover:scale-110 inline-block"
        >
          <LinkedInIcon className="text-blue-700 hover:text-white text-3xl" />
        </a>
        <a
          href={shareLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          title="Compartilhar Whats App"
          className="transition-transform duration-150 hover:scale-110 inline-block"
        >
          <WhatsAppIcon className="text-green-500 hover:text-white text-3xl" />
        </a>
      </div>
    </div>
  );
};

export default CompartilharCol;
