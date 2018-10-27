import React from "react";
import { Switch, Route ,Redirect } from "react-router-dom";
import Home from "../scene/Home";
//import Roster from './Roster'
import EmplyoeeDetails from "../scene/EmplyoeDetails";
import Persons from '../scene/Person';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"

const Main = () => (
 
  <main>
      <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route path='/roster' component={Roster}/> */}
      <Route path="/EmplyoeeDetails" component={EmplyoeeDetails} />
      <Route path="/Profile" component={Persons} />
    </Switch>}
  </main>
);

export default Main;
