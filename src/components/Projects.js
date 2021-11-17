import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import getProjects from '../helpers/projectData';
import Navigation from './Navbar';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getProjects().then((projectsArray) => {
      if (isMounted) {
        setProjects(projectsArray);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <div>
      <Navigation />
      <h1>Projects</h1>
      {projects.map((project) => (
        <h1>{project.name}</h1>
      ))}
      <Link to="/create">Add new project</Link>
    </div>
  );
}
