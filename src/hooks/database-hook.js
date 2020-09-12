import React, {useState, useCallback} from 'react';
import axios from 'axios';

const useDatabase = () => {
  const [projects, setProjects] = useState([]);

  const getProjects = useCallback((userId) => {
      let dbProjects = [];
      try {
        axios
          .get(`http://localhost:5000/projects/${userId}`)
          .then((res) => {
            setProjects(res.data)
          })
      } catch (error) {
        console.log(error);
      }
    return projects;
  });

  const addProjects = useCallback((name, userId) => {
    let newProj = {
      name: name,
      creatorId: userId
    };

    if (name !== "" || name !== undefined || name !== null) {
      try {
        axios
          .post("http://localhost:5000/projects/new/", { newProj })
          .then((res) => {
            console.log(res.data);
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("You must fill in a new project name!");
    }
  });

  return {projects, setProjects, getProjects, addProjects}
}

export default useDatabase;
