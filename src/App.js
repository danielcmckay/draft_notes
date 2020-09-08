import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import ProjectSidebar from "./Components/ProjectSidebar";
import TextEditor from "./Components/TextEditor";
import NotesSidebar from "./Components/NotesSidebar";
import NavBar from "./Components/NavBar";
import Login from "./Components/Login";
import { Route, Switch } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import useAuth from './hooks/auth-hook';


const App = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  const [projects, setProjects] = useState([]);
  const {userId, login, logout} = useAuth();

  const newProjectHandler = (project) => {
    // let projectsArr = [...projects];
    // projectsArr.push({ name: formVal, text: "" });
    // setProjects(projectsArr);
    addProjectToDb(project);
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
    <div className="App">
      <AuthContext.Provider
        value={{isLoggedIn: loginStatus,
        login: login,
        logout: logout,
        userId: userId}}>
      <Switch>
        {!loginStatus ? (
          <Login setLoginStatus={setLoginStatus}/>
        ) : (
          <>
            <NavBar />

            <div className="AppContainer">
              <ProjectSidebar projects={projects} addProjectToDb={addProjectToDb}/>
              <TextEditor />
              <NotesSidebar />
            </div>
          </>
        )}
      </Switch>
      </AuthContext.Provider>
    </div>
  );
};

export default App;
