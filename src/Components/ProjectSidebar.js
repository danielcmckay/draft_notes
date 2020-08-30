import React, { useState } from "react";
import "./ProjectSidebar.css";

function ProjectSidebar() {
  const [sidebarOpen, toggleSidebarOpen] = useState(true);
  const [formVal, setFormVal] = useState('');
  const [projects, setProjects] = useState([
    {
      name: "Novel",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro labore exercitationem quis, expedita dolorum autem repellendus, consectetur corporis doloribus fugiat voluptatem aut. Sint quaerat iste impedit exercitationem deserunt? Consequuntur explicabo odio non quam dolorum exercitationem laboriosam excepturi nihil placeat harum est maiores eos vero, soluta laudantium illum magni? Dolores, illum.",
    },
    { name: "Notes", text: "Lesson 1: These are my notes" },
    { name: "Recipes", text: "Orange Chicken:\n Ingredients: stuff" },
  ]);

  const toggleHandler = (e) => {
    toggleSidebarOpen(!sidebarOpen);
  };

  const formValHandler = (e) => {
    setFormVal(e.target.value);
  }

  const newProjectHandler = (e) => {
    e.preventDefault();
    let projectsArr = [...projects];
    projectsArr.push({name: formVal, text: ''});
    setProjects(projectsArr);
  };

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
            type="text"
            name="newProject"
            id="newProject"
            value={formVal}
            onChange={formValHandler}
          />
          <i className="fas fa-plus-circle" onClick={newProjectHandler}></i>
        </form>

        {projects.map((proj) => (
          <li className="Project">{proj.name}</li>
        ))}
      </div>
    </div>
  );
}

export default ProjectSidebar;
