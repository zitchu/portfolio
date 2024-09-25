import { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import ProjetosSM from "./components/projetos/ProjetosSM";
import ProjetosMD from "./components/projetos/ProjetosMD";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isMdLayout, setIsMdLayout] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth: width, innerHeight: height } = window;

      if (width < 768 || height < 720) {
        setIsMdLayout(false);
      } else {
        setIsMdLayout(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-full">
      <div className="relative flex flex-row justify-end items-center h-full w-full bg-cinza">
        <div className="relative hidden md:block left-0 z-[1000] bg-escuro">
          <Sidebar
            isCollapsed={isCollapsed}
            toggleSidebar={toggleSidebar}
            setIsCollapsed={setIsCollapsed}
          />
        </div>

        {isMdLayout ? (
          <div
            className={`relative flex flex-col transition-all duration-300 ${
              isCollapsed ? "w-[calc(100%-5rem)]" : "w-[calc(100%-10rem)]"
            } h-full p-4 ml-20`}
          >
            <div className="bg-white w-full h-full items-center flex justify-center p-4 rounded-md shadow-md">
              <ProjetosMD />
            </div>
          </div>
        ) : (
          <div className="relative flex w-full h-full p-4">
            <div className="bg-white w-full h-full items-center flex justify-center p-4 rounded-md shadow-md">
              <ProjetosSM />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
