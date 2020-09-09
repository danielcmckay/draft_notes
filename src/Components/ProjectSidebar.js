import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProjectSidebar.css";
import Project from "./Project";

function ProjectSidebar(props) {
  const [sidebarOpen, toggleSidebarOpen] = useState(true);
  const [formVal, setFormVal] = useState("");

  const toggleHandler = (e) => {
    toggleSidebarOpen(!sidebarOpen);
  };

  const formValHandler = (e) => {
    setFormVal(e.target.value);
  };

  
  const newProjClickHandler = (e) => {
    e.preventDefault();
    props.addProjectToDb(formVal);
  }

  const addNewDocument = (newDoc) => {
    props.documents.push(...newDoc)
  }

  return (
    <div
      className="ProjectSidebar"
      style={{ width: sidebarOpen ? "25%" : "2%" }}
    >
      <span></span>
      <div onClick={toggleHandler}>
        <i
          className={
            sidebarOpen
              ? "fas fa-arrow-circle-left arrow"
              : "fas fa-arrow-circle-right arrow"
          }
        ></i>
      </div>
      <div
        className="ProjectsContainer"
        style={{ visibility: sidebarOpen ? "visible" : "hidden" }}
      >
        <span>
          <ul className="ProjectsList">Projects:</ul>
        </span>
        <form onSubmit={newProjClickHandler}>
          <input
            className="NewProject"
            type="text"
            name="newProject"
            id="newProject"
            value={formVal}
            onChange={formValHandler}
          />
          <i className="fas fa-plus" onClick={newProjClickHandler}></i>
        </form>
        <div>
        {props.projects.map((proj) => (
          <Project
            name={proj.name}
            documents={proj.documents}
            projectId={proj.projectId}
            addNewDocument={addNewDocument}
          />
        ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectSidebar;
