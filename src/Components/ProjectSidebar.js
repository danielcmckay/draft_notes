import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProjectSidebar.css";
import Project from "./Project";

function ProjectSidebar() {
  const [sidebarOpen, toggleSidebarOpen] = useState(true);
  const [formVal, setFormVal] = useState("");
  const [projects, setProjects] = useState([]);

  const toggleHandler = (e) => {
    toggleSidebarOpen(!sidebarOpen);
  };

  const formValHandler = (e) => {
    setFormVal(e.target.value);
  };

  const newProjectHandler = (e) => {
    e.preventDefault();
    let projectsArr = [...projects];
    projectsArr.push({ name: formVal, text: "" });
    setProjects(projectsArr);
    addProjectToDb(formVal);
  };

  const getProjectsFromDb = () => {
    let dbProjects = [];
    try {
      axios
        .get("http://localhost:5000/projects/")
        .then((res) => {
          setProjects(res.data);
        })
        .then(console.log("dbProjects = " + dbProjects));
    } catch (error) {
      console.log(error);
    }
  };

  const addProjectToDb = (name) => {
    let newProj = {
      name: name,
    };

    if (name !== "" || name !== undefined || name !== null) {
      try {
        axios
          .post("http://localhost:5000/projects/new/", { newProj })
          .then((res) => {
            console.log(res);
            console.log(res.data);
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("You must fill in a new project name!");
    }
  };

  useEffect(() => {
    getProjectsFromDb();
    console.log("Use effects running: " + projects);
  }, []);

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
        <form onSubmit={newProjectHandler}>
          <input
            className="NewProject"
            type="text"
            name="newProject"
            id="newProject"
            value={formVal}
            onChange={formValHandler}
          />
          <i className="fas fa-plus" onClick={newProjectHandler}></i>
        </form>
        <div>
        {projects.map((proj) => (
          <Project
            name={proj.name}
            documents={proj.documents}
            projectId={proj.projectId}
          />
        ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectSidebar;
