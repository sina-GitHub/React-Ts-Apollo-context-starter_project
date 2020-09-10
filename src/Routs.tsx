import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import TestRoute from "./TestRoute";
import NotFound404 from "./components/NotFound404";

export default function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/test' component={TestRoute} />
      <Route component={NotFound404} />
    </Switch>
  );
}
