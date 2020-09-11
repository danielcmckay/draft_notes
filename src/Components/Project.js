import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./Project.css";
import { AuthContext } from "../context/AuthContext";

function Project(props) {
  const [chevron, toggleChevron] = useState(false);
  const [addingDocument, toggleAddingDocument] = useState(false);
  const auth = useContext(AuthContext);
  const [newDocument, setNewDocument] = useState({
    name: "",
    words: 0,
    projectId: "",
    creatorId: auth.userId,
    text: "",
  });
  const [documents, setDocuments] = useState([]);

  const getDocumentsFromDb = () => {
    let dbDocuments = [];
    try {
      axios
        .get(`http://localhost:5000/documents/${props.projectId}/${auth.userId}`)
        .then((res) => {
          let data = res.data;
          data.forEach((doc) => dbDocuments.push(doc));
          setDocuments(dbDocuments)
        })
    } catch (error) {
      console.log(error);
    }
  }

  const newDocumentChangeHandler = (e) => {
    setNewDocument({
      name: e.target.value,
      words: 0,
      projectId: props.projectId,
      creatorId: auth.userId,
      text: "",
    });
  };

  useEffect(() => {
    getDocumentsFromDb();
  }, [chevron]);

  const chevronToggleHandler = (e) => {
    toggleChevron(!chevron);
    getDocumentsFromDb();
  };

  const newDocClickHandler = (e) => {
    e.preventDefault();
    toggleChevron(true);
    toggleAddingDocument(true);
  };

  const submitNewDoc = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/documents/${props.projectId}`, newDocument)
      .catch((err) => console.log(err));

    getDocumentsFromDb();
  };

  return (
    <div>
      <p className="Project" key={props.projectId}>
        <i
          className={
            !chevron
              ? "fas fa-chevron-right chevron"
              : "fas fa-chevron-down chevron"
          }
          onClick={chevronToggleHandler}
        ></i>
        <ul>
          {props.name}
          <i className="fas fa-plus NewDoc" onClick={newDocClickHandler}></i>
        </ul>
        {addingDocument && (
          <form onSubmit={submitNewDoc}>
            <input type="text" onChange={newDocumentChangeHandler}></input>
          </form>
        )}
        {chevron &&
          documents.map((doc) => (
            <li className="DocumentTitle">{doc.name}</li>
          ))}
        
      </p>
    </div>
  );
}

export default Project;
