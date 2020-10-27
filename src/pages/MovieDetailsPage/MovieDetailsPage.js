import React, { Component } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import Cast from "../Cast";
import Reviews from "../Reviews";
import Loader from "react-loader-spinner";
import moviesApi from "../../services/moviesApi";
import routes from "../../routes";
import styles from "../MovieDetailsPage/MovieDetailsPage.module.css";

export default class MovieDetailsPage extends Component {
  state = {
    movie: null,
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ loading: true });
    moviesApi
      .fetchMovieDetails(this.props.match.params.movieId)
      .then((movie) => this.setState({ movie }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { movie, loading, error } = this.state;
    const imgConfiguration = "https://image.tmdb.org/t/p/w300";
    return (
      <div>
        {movie && (
          <>
            <h2>{movie.title}</h2>
            <div className={styles.movieDetails}>
              <img
                src={imgConfiguration + movie.poster_path}
                alt={movie.title}
                className={styles.movieImg}
              />
              <div>
                <p className={styles.moviePopularity}>
                  Popularity: {movie.vote_average}
                </p>
                <p className={styles.movieRelease}>
                  Release date: {movie.release_date}
                </p>
                <p>{movie.overview}</p>
                <ul className={styles.genresList}>
                  Genres:{" "}
                  {movie.genres.map((genre) => (
                    <li key={genre.id} className={styles.genresItem}>
                      {genre.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <h3>Additional information</h3>
            <ul className={styles.additionalInfo}>
              <li className={styles.listItem}>
                <NavLink
                  to={`${this.props.match.url}/cast`}
                  className={styles.link}
                  activeClassName={styles.activeLink}
                >
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`${this.props.match.url}/reviews`}
                  className={styles.link}
                  activeClassName={styles.activeLink}
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
          </>
        )}
        {loading && (
          <Loader type="ThreeDots" color="#ff0000" height={40} width={40} />
        )}
        {error && <h2>Oops! Something went wrong!</h2>}
        <Switch>
          <Route path={routes.cast} component={Cast} />
          <Route path={routes.reviews} component={Reviews} />
        </Switch>
      </div>
    );
  }
}
