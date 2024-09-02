import React from "react";
import CloseIcon from "@mui/icons-material/Close";

function Modalidade({ open, onClose, children }) {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        open ? "visible bg-black/10" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-xl shadow p-6 transition-all ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 rounded-lg text-verde bg-white hover:bg-slate-100 hover:text-[#1d1d1b]"
        >
          <CloseIcon />
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modalidade;
