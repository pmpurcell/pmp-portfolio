import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../components/About';
import Contact from '../components/Contact';
import Edit from '../components/Edit';
import Projects from '../components/Projects';
import Technologies from '../components/Technologies';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/tech" component={Technologies} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/edit/:key" component={Edit} />
    </Switch>
  );
}
