import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useLanguage } from "../../context/LanguageContext";

const Compartilhar = () => {
  const { uiText } = useLanguage();
  const currentURL = window.location.href;

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${currentURL}`,
    twitter: `https://twitter.com/intent/tweet?url=${currentURL}&text=Veja%20isso!`,
    linkedin: `https://www.linkedin.com/shareArticle?url=${currentURL}&title=Veja%20isso!`,
    whatsapp: `https://api.whatsapp.com/send?text=Veja%20isso!%20${currentURL}`,
  };

  return (
    <div className="h-full rounded overflow-hidden shadow-lg p-6 pt-2">
      <h2 className="cursor-default pb-4 mont-regular text-md">{uiText.share.title}</h2>
      <div className="flex -pl-1 left-0 justify-evenly space-x-2">
        <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="transition-transform duration-150 hover:scale-110">
          <FacebookIcon className="text-blue-600 hover:text-blue-800 text-3xl" />
        </a>
        <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="transition-transform duration-150 hover:scale-110">
          <XIcon className="text-white hover:text-blue-600 text-3xl" />
        </a>
        <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" className="transition-transform duration-150 hover:scale-110">
          <LinkedInIcon className="text-blue-700 hover:text-blue-900 text-3xl" />
        </a>
        <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="transition-transform duration-150 hover:scale-110">
          <WhatsAppIcon className="text-green-500 hover:text-green-700 text-3xl" />
        </a>
      </div>
    </div>
  );
};

export default Compartilhar;
