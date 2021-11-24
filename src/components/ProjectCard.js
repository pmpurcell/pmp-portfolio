import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  return (
    <div>
      <div className="card text-white bg-secondary mb-3">
        <img src={project.image} alt={project.projectName} />
        <div className="card-body">
          <h5 className="card-title">{project.projectName}</h5>
          <Link
            to={`/details/${project.firebaseKey}`}
            type="button"
            className="btn btn-primary"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    projectName: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    appLink: PropTypes.string,
    githubLink: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
};
