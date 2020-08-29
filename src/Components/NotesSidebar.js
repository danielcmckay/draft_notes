import React, { useState } from "react";
import "./NotesSidebar.css";

function NotesSidebar() {
  const [sidebarOpen, toggleSidebarOpen] = useState(true);
  const [notesList, setNotesList] = useState([
    { name: "note1", value: "This is note 1" },
    { name: "note2", value: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ad illum minima dicta obcaecati accusamus iure itaque recusandae saepe blanditiis provident, assumenda adipisci culpa aliquid. Deleniti distinctio veniam, aliquid consectetur dolore ipsum doloremque eum eos accusamus enim debitis aspernatur aut minus magnam? Numquam necessitatibus fugiat quo ipsam, at laboriosam id!" },
    { name: "note3", value: "This is note 3" },
  ]);

  const toggleHandler = (e) => {
    toggleSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="NotesSidebar" style={{ width: sidebarOpen ? "25%" : "2%" }}>
      <div onClick={toggleHandler}>
        <i className="fas fa-arrow-circle-right"></i>
      </div>
      <div className="NotesListContainer" style={{visibility: sidebarOpen ? "visible" : "hidden"}}>
        {notesList.map((note) => (
          <div className="NoteItem">
            <h2>{note.name}</h2>
            <p>{note.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotesSidebar;
