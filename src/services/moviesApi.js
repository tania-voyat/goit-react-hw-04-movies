const baseURL = "https://api.themoviedb.org/3";
const APIkey = "9030d76ba1b7daadc53f6380487e5894";

const getPopularMovies = () => {
  return fetch(`${baseURL}/trending/movie/day?api_key=${APIkey}`)
    .then((res) => res.json())
    .then((data) => data.results);
};

const fetchMovies = (searchQuery) => {
  return fetch(
    `${baseURL}/search/movie/?api_key=${APIkey}&query=${searchQuery}`
  )
    .then((res) => res.json())
    .then((data) => data.results);
};

const fetchMovieDetails = (movieId) => {
  return fetch(`${baseURL}/movie/${movieId}?api_key=${APIkey}`).then((res) =>
    res.json()
  );
};

const fetchMovieCast = (movieId) => {
  return fetch(`${baseURL}/movie/${movieId}/credits?api_key=${APIkey}`)
    .then((res) => res.json())
    .then((data) => data.cast);
};

const fetchMovieReviews = (movieId) => {
  return fetch(`${baseURL}/movie/${movieId}/reviews?api_key=${APIkey}`)
    .then((res) => res.json())
    .then((data) => data.results);
};
export default {
  fetchMovies,
  fetchMovieDetails,
  getPopularMovies,
  fetchMovieCast,
  fetchMovieReviews,
};
