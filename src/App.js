import { motion } from "framer-motion";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="w-screen h-screen">
      <motion.div className="relative flex flex-row justify-around items-center h-full w-full">
        <div className="relative left-0 z-[1000] bg-escuro">
          <Sidebar />
        </div>
        <div className="relative flex flex-col w-full h-full">
          <div className="bg-red-500 w-full h-full items-center flex justify-center">
            Head
          </div>
          <div className="bg-blue-500 w-full h-full items-center flex justify-center">
            Escopo
          </div>
          <div className="bg-green-500 w-full h-full items-center flex justify-center">
            Footer
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
