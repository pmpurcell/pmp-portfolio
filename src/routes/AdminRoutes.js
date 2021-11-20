import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Create from '../components/Create';
import Edit from '../components/Edit';

export default function AdminRoutes() {
  return (
    <div>
      <Switch>
        <Route exact path="/create" component={Create} />
        <Route exact path="/edit/:firebaseKey" component={Edit} />
      </Switch>
    </div>
  );
}
