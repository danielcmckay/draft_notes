import React, { useState, useEffect, useContext } from "react";
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
import useDatabase from './hooks/database-hook';
import DatabaseContext from "./context/DatabaseContext";



const App = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  const {projects, getProjects, addProjects} = useDatabase();
  const {userId, login, logout} = useAuth();
  const [selectedDocument, setSelectedDocument] = useState(0)

  const newProjectHandler = (project, userId) => {
    addProjects(project, userId);
  };

  const populateTextHandler = (item) => {
    console.log(item)
    setSelectedDocument(...item)
  }

  useEffect(() => {
      if (userId != null) {
        getProjects(userId);
      }
  }, [userId]);

  return (
      <AuthContext.Provider
        value={{
          isLoggedIn: loginStatus,
          login: login,
          logout: logout,
          userId: userId
      }}
        >
      <div className="App">

      <Switch>
        {!loginStatus ? (
          <Login setLoginStatus={setLoginStatus}/>
        ) : (
          <>
            <DatabaseContext.Provider
              value={{
                projects: projects,
                creatorId: userId,
                getProjects: getProjects,
                addProjects: addProjects
              }}>
            <NavBar />

            <div className="AppContainer">
              <ProjectSidebar projects={projects} addProjects={addProjects} populateText={populateTextHandler}/>
              <TextEditor selectedDocument={selectedDocument}/>
              <NotesSidebar />
            </div>
            </DatabaseContext.Provider>
          </>
        )}
      </Switch>
      </div>
      </AuthContext.Provider>
   
  );
};

export default App;
