import axios from 'axios';
import firebaseConfig from '../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/projects.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const getSingleProject = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/projects/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const createProject = (projectObj) => new Promise((resolve, reject) => {
  axios
    .post(`${dbUrl}/projects.json`, projectObj)
    .then((response) => {
      axios.patch(`${dbUrl}/projects/${response.data.name}.json`, {
        firebaseKey: response.data.name,
      });
    })
    .then(resolve)
    .catch(reject);
});

const updateProject = (projectObj) => new Promise((resolve, reject) => {
  axios
    .patch(`${dbUrl}/projects/${projectObj.firebaseKey}.json`, projectObj)
    .then(() => getProjects().then(resolve))
    .catch(reject);
});

const deleteProject = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${dbUrl}/projects/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

export {
  getProjects,
  getSingleProject,
  createProject,
  updateProject,
  deleteProject,
};
