import React, { useState, useEffect } from 'react';
import { getProjects } from '../helpers/projectData';
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
      <h1>Projects</h1>
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </div>
  );
}
