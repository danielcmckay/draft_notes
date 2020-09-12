import { createContext } from 'react';

 export const DatabaseContext = createContext({
  projects: [],
  userId: null,
  selectedDoc: {},
  getProjects: () => {},
  addProjects: () => {}
});

export default DatabaseContext;