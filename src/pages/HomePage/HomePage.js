import React, { Component } from "react";
import moviesApi from "../../services/moviesApi";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import routes from "../../routes";

export default class HomePage extends Component {
  state = {
    popularMovies: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ loading: true });
    moviesApi
      .getPopularMovies()
      .then((popularMovies) => this.setState({ popularMovies }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { popularMovies, loading, error } = this.state;
    return (
      <div>
        <h3>Trending today</h3>
        {popularMovies.length > 0 && (
          <ul>
            {popularMovies.map((movie) => (
              <li key={movie.id}>
                <Link to={`${routes.movies}/${movie.id}`}>{movie.title}</Link>
              </li>
            ))}
          </ul>
        )}
        {loading && (
          <Loader type="ThreeDots" color="#ff0000" height={40} width={40} />
        )}
        {error && <h2>Oops! Something went wrong!</h2>}
      </div>
    );
  }
}
