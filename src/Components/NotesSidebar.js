import React, {useState} from "react";
import "./NotesSidebar.css";

function NotesSidebar() {
  const [sidebarOpen, toggleSidebarOpen] = useState(true);

  const toggleHandler = e => {
    toggleSidebarOpen(!sidebarOpen);
  };
  
    return <div className="NotesSidebar" style={{width: sidebarOpen ?  "25%"  : "2%"}}>
    <div onClick={toggleHandler}>-></div>
  </div>;
}

export default NotesSidebar;
