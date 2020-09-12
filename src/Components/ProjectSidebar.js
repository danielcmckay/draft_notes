import React, { useState, useContext, useEffect } from "react";
import {DatabaseContext} from '../context/DatabaseContext'
import {AuthContext} from '../context/AuthContext'
import axios from "axios";
import "./ProjectSidebar.css";
import Project from "./Project";

function ProjectSidebar(props) {
  const [sidebarOpen, toggleSidebarOpen] = useState(true);
  const [formVal, setFormVal] = useState("");

  const database = useContext(DatabaseContext)
  const auth = useContext(AuthContext)


  const toggleHandler = (e) => {
    toggleSidebarOpen(!sidebarOpen);
  };

  const formValHandler = (e) => {
    setFormVal(e.target.value);
  };

  
  const newProjClickHandler = (e) => {
    e.preventDefault();
    props.addProjects(formVal, auth.userId);
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
        {database.projects.map((proj) => (
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
