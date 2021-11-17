import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProjects } from '../helpers/projectData';
import Navigation from './Navbar';
import ProjectCard from './ProjectCard';

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
        <ProjectCard project={project} />
      ))}
      <Link to="/create">Add new project</Link>
    </div>
  );
}
