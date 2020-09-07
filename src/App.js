import React, { useState } from "react";
import "./App.css";
import ProjectSidebar from "./Components/ProjectSidebar";
import TextEditor from "./Components/TextEditor";
import NotesSidebar from "./Components/NotesSidebar";
import NavBar from "./Components/NavBar";
import Login from "./Components/Login";
import { Route, Switch } from "react-router-dom";


const App = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  

  return (
    <div className="App">
      <Switch>
        {!loginStatus ? (
          <Login setLoginStatus={setLoginStatus}/>
        ) : (
          <>
            <NavBar />

            <div className="AppContainer">
              <ProjectSidebar />
              <TextEditor />
              <NotesSidebar />
            </div>
          </>
        )}
      </Switch>
    </div>
  );
};

export default App;
