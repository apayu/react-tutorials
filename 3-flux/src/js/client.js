import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./pages/Layout";
import Todos from "./pages/Todos";
import Favorites from "./pages/Favorites";
import Settings from "./pages/Settings";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Todos}></IndexRoute>
      <Route path="Favorites" component={Favorites}></Route>
      <Route path="Settings" component={Settings}></Route>
    </Route>
  </Router>,
app);
