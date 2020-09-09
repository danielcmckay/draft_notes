import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import "./Project.css";
import {AuthContext} from '../context/AuthContext';

function Project(props) {
  const [chevron, toggleChevron] = useState(false);
  const [addingDocument, toggleAddingDocument] = useState(false);
  const auth = useContext(AuthContext);
  const [newDocument, setNewDocument] = useState({
    name: '',
    words: 0,
    projectId: props.projectId,
    creatorId: auth.userId,
    text: ''
  });

  const newDocumentChangeHandler = (e) => {
    setNewDocument({name: e.target.value});
  };

  useEffect(() => {}, []);

  const chevronToggleHandler = (e) => {
    console.log(e.target);
    toggleChevron(!chevron);
  };

  const newDocClickHandler = (e) => {
    e.preventDefault();
    toggleChevron(true);
    toggleAddingDocument(true);
  };

  const submitNewDoc = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:5000/documents/${props.projectId}`, newDocument)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  };

  return (
    <div>
      <li className="Project" key={props.projectId}>
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
        {chevron &&
          props.documents.map((doc) => (
            <li className="DocumentTitle">{doc.name}</li>
          ))}
        {addingDocument && (
          <form onSubmit={submitNewDoc}>
            <input type="text" onChange={newDocumentChangeHandler}></input>
          </form>
        )}
      </li>
    </div>
  );
}

export default Project;
