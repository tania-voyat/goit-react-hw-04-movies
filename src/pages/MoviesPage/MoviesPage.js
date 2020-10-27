import React, { Component } from "react";
import { Link } from "react-router-dom";
import getQueryParams from "../../utils/getQueryParams";
import Searchbox from "../../components/Searchbox";
import Loader from "react-loader-spinner";
import moviesApi from "../../services/moviesApi";

export default class MoviesPage extends Component {
  state = {
    movies: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);
    if (query) {
      this.setState({ loading: true });
      moviesApi
        .fetchMovies(query)
        .then((movies) => this.setState({ movies }))
        .catch((error) => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);

    if (prevQuery !== nextQuery) {
      this.setState({ loading: true });
      moviesApi
        .fetchMovies(nextQuery)
        .then((movies) => this.setState({ movies }))
        .catch((error) => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  handleQueryChange = (query) => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${query}`,
    });
  };
  render() {
    const { movies, loading, error } = this.state;
    const { match } = this.props;
    return (
      <div>
        <h3>Search movies</h3>
        <Searchbox onSubmit={this.handleQueryChange} />
        {movies.length > 0 && (
          <ul>
            {movies.map(({ id, title }) => (
              <li key={id}>
                <Link to={`${match.url}/${id}`}>{title}</Link>
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
