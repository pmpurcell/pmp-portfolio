import React, { useState } from 'react';
import Navigation from './Navbar';

const initialState = {
  name: '',
  description: '',
  image: '',
  projectLink: '',
};

export default function ProjectForm() {
  const [formInput, setFormInput] = useState(initialState);

  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.warn(formInput);
  };

  return (
    <div>
      <Navigation />
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Project Name
            <input
              type="text"
              className="form-control"
              onChange={(e) => handleChange(e)}
              id="name"
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
