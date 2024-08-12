import React, { useState } from "react";

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  
  const menuOptions = [
    { label: "Home", href: "#" },
    { label: "Sobre", href: "#about" },
    { label: "Projetos", href: "#projects" },
    { label: "Contato", href: "#contact" },
  ];

  return (
    <div className="flex h-screen">
      <div
        className={`bg-escuro z-[900] text-limao transition-all duration-300 ${
          isCollapsed ? "w-20" : "w-64"
        } flex flex-col`}
      >

        <div className="p-4">
          <div className="text-center">
            {isCollapsed ? "JM" : "Jeanluiz Monteiro"}
          </div>
        </div>
        <div className="divider z-[1000]" />
        <nav className="flex-grow">
          <ul className="p-4 space-y-2">
            {menuOptions.map((option, index) => (
              <li key={index}>
                <a
                  href={option.href}
                  className={`block p-2 rounded hover:bg-limao hover:text-escuro transition-colors duration-300 ${
                    isCollapsed ? "text-center" : ""
                  }`}
                >
                  {isCollapsed ? option.label[0] : option.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

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
