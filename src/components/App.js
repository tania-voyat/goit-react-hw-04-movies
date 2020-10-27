import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MoviesPage from "../pages/MoviesPage";
import MovieDetailsPage from "../pages/MovieDetailsPage";
import Navigation from "../components/Navigation";
import NotFound from "../pages/NotFound";
import routes from "../routes";

const App = () => (
  <div>
    <Navigation />
    <Switch>
      <Route path={routes.home} exact component={HomePage} />
      <Route path={routes.movies} exact component={MoviesPage} />
      <Route path={routes.movieDetails} component={MovieDetailsPage} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default App;
