import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleProject } from '../helpers/projectData';
import Navigation from './Navbar';

export default function projectDetails() {
  const [item, setItem] = useState({});
  const { firebaseKey } = useParams();

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getSingleProject(firebaseKey).then(setItem);
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <Navigation />
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
    </div>
  );
}
