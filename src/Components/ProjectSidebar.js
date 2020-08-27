import React, {useState} from 'react';
import "./ProjectSidebar.css";

function ProjectSidebar() {
  const [sidebarOpen, toggleSidebarOpen] = useState(true);

  const toggleHandler = e => {
    toggleSidebarOpen(!sidebarOpen);
  };
  
    return <div className="ProjectSidebar" style={{width: sidebarOpen ?  "25%"  : "2%"}}>
    <div onClick={toggleHandler}>*</div>
    </div>
}

export default ProjectSidebar
