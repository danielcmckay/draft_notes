import React, { useState } from "react";
import "./ProjectSidebar.css";

function ProjectSidebar() {
  const [sidebarOpen, toggleSidebarOpen] = useState(true);

  const toggleHandler = (e) => {
    toggleSidebarOpen(!sidebarOpen);
  };

  return (
    <div
      className="ProjectSidebar"
      style={{ width: sidebarOpen ? "25%" : "2%" }}
    >
    <span></span><div onClick={toggleHandler}><i className="fas fa-arrow-circle-left"></i></div>
    <div className="ProjectsContainer" style={{visibility: sidebarOpen ? "visible" : "hidden"}}>
    <ul className="ProjectsList">Projects:</ul>
      <li className="Project">Book</li>
      <li className="Project">Lecture Notes</li>
      <li className="Project">Recipes</li>
    </div>
      
    </div>
  );
}

export default ProjectSidebar;
