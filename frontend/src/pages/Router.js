import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Users from "../components/Users";
import Login from "../components/Login";
import Ni from "../components/Ni";

function Router(props) {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route exact path={`/`} component={Login} />
        <Route exact path={`/login`} component={Login} />
        <Route exact path={`/users`} component={Users} />
        <Route component={Ni} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
