import React, {useState} from 'react';
import axios from 'axios';

const useDatabase = () => {
  const [projects, setProjects] = useState([]);
 

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
  return {projects, getProjectsFromDb, addProjectToDb}
}

export default useDatabase
