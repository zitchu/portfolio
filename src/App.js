import { motion } from "framer-motion";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Projetos from "./components/projetos/Projetos";

function App() {
  return (
    <div className="w-screen h-screen">
      <motion.div className="relative flex flex-row justify-around items-center h-full w-full overflow-auto">
        <div className="relative left-0 z-[1000] bg-escuro">
          <Sidebar />
        </div>
        <div className="relative flex flex-col w-full h-full bg-cinza p-4">
          <div className="bg-white w-full h-full items-center flex justify-center p-4 rounded-md shadow-md">
            <Projetos />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
