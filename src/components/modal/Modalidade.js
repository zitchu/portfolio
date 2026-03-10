import React from "react";
import CloseIcon from "@mui/icons-material/Close";

function Modalidade({ open, onClose, children }) {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-all duration-200 z-[999] ${
        open ? "visible bg-black/40 backdrop-blur-sm" : "invisible bg-black/0 backdrop-blur-none"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-xl shadow-2xl p-6 transition-all duration-200 ease-out ${
          open ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 rounded-lg text-verde bg-white hover:bg-slate-100 hover:text-[#1d1d1b] transition-colors duration-150"
        >
          <CloseIcon />
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modalidade;
