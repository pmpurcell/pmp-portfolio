import React, { useEffect, useState } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { deleteProject, getSingleProject } from '../helpers/projectData';

export default function projectDetails() {
  const [item, setItem] = useState({});
  const { firebaseKey } = useParams();
  const history = useHistory();

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getSingleProject(firebaseKey).then(setItem);
    }
    return () => {
      isMounted = false;
    };
  }, []);

  const handleDelete = () => {
    deleteProject(firebaseKey).then(() => history.push('/projects'));
  };

  return (
    <div>
      <h1>{item.projectName}</h1>
      <img src={item.image} alt={item.projectName} />
      <p>{item.description}</p>
      <a
        href={item.projectLink}
        className="btn btn-secondary"
        role="button"
        target="_blank"
        rel="noreferrer"
        data-bs-toggle="button"
      >
        View App
      </a>
      <button type="button" onClick={handleDelete} className="btn btn-danger">
        DELETE
      </button>
      <Link to={`/edit/${item.firebaseKey}`}>Edit</Link>
    </div>
  );
}
