import React, { Component } from "react";
import moviesApi from "../../services/moviesApi";
import Loader from "react-loader-spinner";

export default class Reviews extends Component {
  state = {
    reviews: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ loading: true });
    moviesApi
      .fetchMovieReviews(this.props.match.params.movieId)
      .then((reviews) => this.setState({ reviews }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { reviews, loading, error } = this.state;

    return (
      <div>
        <h3>Reviews</h3>
        {reviews.length > 0 && (
          <div>
            {reviews.map((review) => (
              <div key={review.id}>
                <p>Author: {review.author}</p>
                <p>{review.content}</p>
              </div>
            ))}
          </div>
        )}
        {reviews.length === 0 && <p>We do not have reviews for this movie.</p>}

        {loading && (
          <Loader type="ThreeDots" color="#ff0000" height={40} width={40} />
        )}
        {error && <h2>Oops! Something went wrong!</h2>}
      </div>
    );
  }
}
