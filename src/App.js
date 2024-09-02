import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import ProjetosSM from "./components/projetos/ProjetosSM";
import ProjetosMD from "./components/projetos/ProjetosMD";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="w-full h-full">
      <motion.div className="relative flex flex-row justify-end items-center h-full ">
        <div className="relative hidden md:block left-0 z-[1000] bg-escuro">
          <Sidebar
            isCollapsed={isCollapsed}
            toggleSidebar={toggleSidebar}
            setIsCollapsed={setIsCollapsed}
          />
        </div>
        <div
          className={`relative hidden md:flex flex-col  transition-all duration-300 ${
            isCollapsed ? "w-[calc(100%-5rem)]" : "w-[calc(100%-10rem)]"
          } h-full bg-cinza p-4 ml-20`}
        >
          <div className="bg-slate-100 w-full h-full items-center flex justify-center p-4 rounded-md shadow-md">
            <ProjetosMD />
          </div>
        </div>
        <div className="relative flex md:hidden flex-col w-full h-full bg-cinza p-4">
          <div className="bg-slate-300 w-full h-full items-center flex justify-center p-4 rounded-md shadow-md">
            <ProjetosSM />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
