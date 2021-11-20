import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { createProject, updateProject } from '../helpers/projectData';

const initialState = {
  projectName: '',
  description: '',
  image: '',
  appLink: '',
  githubLink: '',
  firebaseKey: '',
};

export default function ProjectForm({ item = {} }) {
  const [formInput, setFormInput] = useState(initialState);

  useEffect(() => {
    if (item.firebaseKey) {
      setFormInput({
        projectName: item.projectName,
        description: item.description,
        image: item.image,
        appLink: item.appLink,
        githubLink: item.githubLink,
        firebaseKey: item.firebaseKey,
      });
    }
  }, [item]);

  const history = useHistory();

  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (item.firebaseKey) {
      updateProject(formInput).then(() => history.push('/projects'));
    } else {
      createProject(formInput).then(() => history.push('/projects'));
    }
  };

  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="projectName" className="form-label">
            Project Name
            <input
              type="text"
              value={formInput.projectName || ''}
              className="form-control"
              onChange={handleChange}
              id="projectName"
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Project Description
            <input
              type="text"
              value={formInput.description || ''}
              className="form-control"
              onChange={handleChange}
              id="description"
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image
            <input
              type="text"
              value={formInput.image || ''}
              className="form-control"
              onChange={handleChange}
              id="image"
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="appLink" className="form-label">
            App Link
            <input
              type="text"
              value={formInput.appLink || ''}
              className="form-control"
              onChange={handleChange}
              id="appLink"
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="githubLink" className="form-label">
            Github Link
            <input
              type="text"
              value={formInput.githubLink || ''}
              className="form-control"
              onChange={handleChange}
              id="githubLink"
            />
          </label>
        </div>

        <button
          type="submit"
          onClick={(e) => handleClick(e)}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

ProjectForm.propTypes = {
  item: PropTypes.shape({}).isRequired,
};
