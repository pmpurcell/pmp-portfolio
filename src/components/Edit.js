import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleProject } from '../helpers/projectData';
import ProjectForm from './ProjectForm';

export default function Edit() {
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
      <h1>Edit {item.projectName}</h1>
      <ProjectForm item={item} />
    </div>
  );
}
