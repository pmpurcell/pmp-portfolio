import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import About from '../components/About';
import Contact from '../components/Contact';
import Create from '../components/Create';
import Edit from '../components/Edit';
import ProjectDetails from '../components/ProjectDetails';
import Projects from '../components/Projects';
import Technologies from '../components/Technologies';

export default function Routes({ user }) {
  return (
    <Switch>
      <Route exact path="/" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/tech" component={Technologies} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/create" component={Create} />
      <Route
        exact
        path="/details/:firebaseKey"
        component={() => <ProjectDetails user={user} />}
      />
      <Route exact path="/edit/:firebaseKey" component={Edit} />
    </Switch>
  );
}

Routes.propTypes = {
  user: PropTypes.shape({
    isAdmin: PropTypes.bool,
  }),
};

Routes.defaultProps = {
  user: {},
};
