import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { createProject, updateProject } from '../helpers/projectData';
import Navigation from './Navbar';

const initialState = {
  projectName: '',
  description: '',
  image: '',
  projectLink: '',
  firebaseKey: '',
};

export default function ProjectForm({ item = {} }) {
  const [formInput, setFormInput] = useState(initialState);

  useEffect(() => {
    console.log(item);
    if (item.firebaseKey) {
      console.log(formInput);
      setFormInput({
        projectName: item.projectName,
        description: item.description,
        image: item.image,
        projectLink: item.projectLink,
        firebaseKey: item.firebaseKey,
      });
      console.log(formInput);
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
      <Navigation />
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
          <label htmlFor="projectLink" className="form-label">
            Project Link
            <input
              type="text"
              value={formInput.projectLink || ''}
              className="form-control"
              onChange={handleChange}
              id="projectLink"
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
