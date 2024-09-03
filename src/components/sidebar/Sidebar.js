import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Compartilhar from "../projetos/Compartilhar";
import CompartilharCol from "../projetos/CompartilharCol";

function Sidebar({ isCollapsed, toggleSidebar }) {
  const menuOptions = [
    { label: "Frameworks", title: "Frameworks" },
    { label: "Responsivos", title: "Responsivos" },
    { label: "Otimização", title: "Otimização" },
    { label: "Navegação", title: "Navegação" },
    { label: "Trabalho", title: "Trabalho" },
    { label: "Experiência", title: "Experiência" },
    { label: "Network", title: "Network" },
    { label: "Deploy", title: "Deploy" },
  ];

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
        <div className="h-full">
          <ul className="p-4 space-y-2 md:space-y-3">
            {menuOptions.map((option, index) => (
              <li key={index}>
                <a
                  title={option.title}
                  className={`cursor-default block p-2 rounded hover:bg-limao hover:text-escuro transition-colors duration-300 ${
                    isCollapsed ? "text-center" : ""
                  }`}
                >
                  {isCollapsed ? option.label[0] : option.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="divider z-[1000]" />
        {isCollapsed ? (
          <div
            className={`p-4 space-y-4 md:space-y-8 pl-7 h-full transition-all duration-300 ${
              isCollapsed ? "w-20" : "w-40"
            }`}
          >
            <div className="" title="Contatos">
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
