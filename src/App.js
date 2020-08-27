import React from "react";
import "./App.css";
import ProjectSidebar from "./Components/ProjectSidebar";
import TextEditor from "./Components/TextEditor";
import NotesSidebar from "./Components/NotesSidebar";
import NavBar from "./Components/NavBar";


function App() {
  return <div className="App">
      <NavBar />
      <div className="AppContainer">
        <ProjectSidebar />
        <TextEditor />
        <NotesSidebar />
      </div>
    </div>;
}

export default App;
