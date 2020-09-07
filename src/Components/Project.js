import React, {useState, useEffect} from 'react';
import './Project.css';

function Project(props) {
  const [chevron, toggleChevron] = useState(false);

  useEffect(() => {
    if (props.documents === undefined || props.documents.length === 0) {
      props.documents.push({name: "Untitled", dateCreated: new Date().toUTCString, words: 0, creatorId: 1, projectId: props.projectId, text: ''})
    }
  }, [])

  
  
  const chevronToggleHandler = (e) => {
    console.log(e.target);
    toggleChevron(!chevron);
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
            <ul>{props.name}</ul>
              {chevron && props.documents.map(doc => <li className="DocumentTitle">{doc.name}</li>)}
          </li>
    </div>
  )
}

export default Project;
