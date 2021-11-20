import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import About from '../components/About';
import Contact from '../components/Contact';
import ProjectDetails from '../components/ProjectDetails';
import Projects from '../components/Projects';
import Technologies from '../components/Technologies';

export default function PublicRoutes({ user }) {
  return (
    <Switch>
      <Route exact path="/" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/tech" component={Technologies} />
      <Route exact path="/contact" component={Contact} />
      <Route
        exact
        path="/details/:firebaseKey"
        component={() => <ProjectDetails user={user} />}
      />
    </Switch>
  );
}

PublicRoutes.propTypes = {
  user: PropTypes.shape({
    isAdmin: PropTypes.bool,
  }),
};

PublicRoutes.defaultProps = {
  user: {},
};
