import React, { useState, useEffect } from "react";
import SidebarSM from "./SidebarSM";
import SidebarMD from "./SidebarMD";

function Sidebar({ isCollapsed, toggleSidebar }) {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const minHeight = 720;

  return windowHeight < minHeight ? (
    <SidebarSM isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
  ) : (
    <SidebarMD isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
  );
}

export default Sidebar;
