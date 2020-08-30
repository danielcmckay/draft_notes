import React, { useState, useEffect } from "react";
import "./TextEditor.css";

function TextEditor() {
  const [textContent, setTextContent] = useState("");

  useEffect(() => {
    populateTextContent();
  }, []);

  const populateTextContent = () => {
    const lsTextContent = window.localStorage.getItem("textContent");
    setTextContent(lsTextContent);
  };

  const setTextContentLS = (text) => {
    window.localStorage.setItem("textContent", textContent);
  };

  const textHandler = (e) => {
    setTextContent(e.target.value);
    setTextContentLS(textContent);
    console.log(textContent);
  };
  return (
    <div className="TextEditor">
      <div className="TextOptionsContainer">
        <span className="TextOptions">
          <i className="fas fa-bold TextOption"></i>
          <span className="TextOption">12</span>
          <i className="fas fa-italic TextOption"></i>
          <i className="fas fa-underline TextOption"></i>
          <i className="fas fa-strikethrough TextOption"></i>
        </span>
      </div>
      <textarea
        name="editor"
        id="editor"
        className="TextField"
        onChange={textHandler}
        value={textContent}
      ></textarea>
    </div>
  );
}

export default TextEditor;
