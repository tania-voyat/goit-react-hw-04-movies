import React, { Component } from "react";
import moviesApi from "../../services/moviesApi";
import Loader from "react-loader-spinner";

export default class Cast extends Component {
  state = {
    cast: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ loading: true });
    moviesApi
      .fetchMovieCast(this.props.match.params.movieId)
      .then((cast) => this.setState({ cast }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { cast, loading, error } = this.state;
    const imgConfiguration = "https://image.tmdb.org/t/p/w300";

    return (
      <div>
        <h3>Cast</h3>
        {cast.length > 0 && (
          <ul>
            {cast.map((character) => (
              <li key={character.id}>
                <img
                  src={imgConfiguration + character.profile_path}
                  alt=""
                  width="100"
                />
                {character.name}
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
