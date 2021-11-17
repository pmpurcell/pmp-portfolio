import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  return (
    <div>
      <h1>{project.projectName}</h1>
      <img src={project.image} alt={project.projectName} />
      <Link to={`/details/${project.firebaseKey}`}>Details</Link>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    projectName: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    projectLink: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
};
