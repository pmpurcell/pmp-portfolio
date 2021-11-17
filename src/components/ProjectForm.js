import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createProject } from '../helpers/projectData';
import Navigation from './Navbar';

const initialState = {
  projectName: '',
  description: '',
  image: '',
  projectLink: '',
};

export default function ProjectForm() {
  const [formInput, setFormInput] = useState(initialState);

  const history = useHistory();

  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    createProject(formInput).then(() => history.push('/projects'));
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
              className="form-control"
              onChange={(e) => handleChange(e)}
              id="projectName"
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Project Description
            <input
              type="text"
              className="form-control"
              onChange={(e) => handleChange(e)}
              id="description"
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image
            <input
              type="file"
              className="form-control"
              onChange={(e) => handleChange(e)}
              id="image"
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="projectLink" className="form-label">
            Project Link
            <input
              type="text"
              className="form-control"
              onChange={(e) => handleChange(e)}
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
