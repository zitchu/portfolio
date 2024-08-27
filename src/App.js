import { motion } from "framer-motion";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
/* import Projetos from "./components/projetos/Projetos"; */
import ProjetosSM from "./components/projetos/ProjetosSM";
import ProjetosMD from "./components/projetos/ProjetosMD";

function App() {
  return (
    <div className="w-screen h-screen">
      <motion.div className="relative flex flex-row justify-around items-center h-full w-full overflow-auto">
        <div className="relative left-0 z-[1000] bg-escuro">
          <Sidebar />
        </div>
        <div className="relative hidden md:flex flex-col w-full h-full bg-cinza p-4">
          <div className="bg-slate-300 w-full h-full items-center flex justify-center p-4 rounded-md shadow-md">
            <ProjetosMD />
          </div>
        </div>
        {/* <div className="relative hidden md:flex flex-col w-full h-full bg-cinza p-4">
          <div className="bg-slate-300 w-full h-full items-center flex justify-center p-4 rounded-md shadow-md">
            <Projetos />
          </div>
        </div> */}
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
