import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useLanguage } from "../../context/LanguageContext";

const CompartilharSM = () => {
  const { uiText } = useLanguage();
  const currentURL = window.location.href;

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${currentURL}`,
    twitter: `https://twitter.com/intent/tweet?url=${currentURL}&text=Veja%20isso!`,
    linkedin: `https://www.linkedin.com/shareArticle?url=${currentURL}&title=Veja%20isso!`,
    whatsapp: `https://api.whatsapp.com/send?text=Veja%20isso!%20${currentURL}`,
  };

  return (
    <div className="h-full w-full rounded overflow-hidden shadow-lg p-6 pt-2">
      <h2 className="cursor-default pb-4 uppercase text-xl text-center mont-regular">
        {uiText.share.title}
      </h2>
      <div className="flex pl-1 left-0 justify-around">
        <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="transition-transform duration-150 hover:scale-110">
          <FacebookIcon className="hover:bg-[#848c8c] h-20 w-20 rounded text-blue-600 hover:text-white text-3xl" />
        </a>
        <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="transition-transform duration-150 hover:scale-110">
          <XIcon className="hover:bg-[#848c8c] h-20 w-20 rounded text-white hover:text-blue-600 text-3xl" />
        </a>
        <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" className="transition-transform duration-150 hover:scale-110">
          <LinkedInIcon className="hover:bg-[#848c8c] h-20 w-20 rounded text-blue-700 hover:text-white text-3xl" />
        </a>
        <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="transition-transform duration-150 hover:scale-110">
          <WhatsAppIcon className="hover:bg-[#848c8c] h-20 w-20 rounded text-green-500 hover:text-white text-3xl" />
        </a>
      </div>
    </div>
  );
};

export default CompartilharSM;
