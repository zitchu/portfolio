import { useState } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Projetos from "./components/projetos/Projetos";
import MobileFooter from "./components/footer/MobileFooter";
import MobileNavbar from "./components/navbar/MobileNavbar";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <LanguageProvider>
      <div className="w-full h-full min-h-screen bg-cinza overflow-x-hidden pt-12 md:pt-0">
        <MobileNavbar />
        <div className="relative flex flex-row h-full w-full">
          {/* Sidebar - Hidden on mobile, visible on desktop */}
          <Sidebar
            isCollapsed={isCollapsed}
            toggleSidebar={toggleSidebar}
            setIsCollapsed={setIsCollapsed}
          />

          {/* Main Content Area - Add left margin to account for fixed sidebar */}
          <div className={`flex-1 h-full flex flex-col p-4 overflow-y-auto transition-all duration-500 ease-in-out ${
            isCollapsed ? "md:ml-20" : "md:ml-40"
          }`}>
              <div className="flex-1 bg-white rounded-md shadow-md p-4 mb-4">
                 <Projetos />
              </div>

              {/* Mobile Footer - Only visible on small screens */}
              <div className="md:hidden mt-auto">
                <MobileFooter />
              </div>
          </div>
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
