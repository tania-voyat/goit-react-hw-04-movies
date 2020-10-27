import React, { Component } from "react";
import styles from "./Searchbox.module.css";

export default class Searchbox extends Component {
  state = {
    value: "",
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    return (
      <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
        <input
          className={styles.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button type="submit" className={styles.SearchFormButton}>
          <span className={styles.SearchFormButtonLabel}>Search</span>
        </button>
      </form>
    );
  }
}
