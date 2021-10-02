import Books from "@views/Books/BooksContainer";
import Categories from "@views/Categories/CategoriesContainer";
import Fallback from "@views/Fallback";
import Welcome from "@views/Welcome/WelcomeContainer";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Routes = () => (
  <Router>
    <Switch>
      <Route component={Welcome} path="/" exact />
      <Route component={Categories} path="/Categories" exact />
      <Route component={Books} path="/books" exact />
      <Route component={Fallback} />
    </Switch>
  </Router>
);

export default Routes;
