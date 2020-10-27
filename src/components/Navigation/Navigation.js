import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import styles from "../Navigation/Navigation.module.css";

function Navigation() {
  return (
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <NavLink
          exact
          to={routes.home}
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={routes.movies}
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Movies
        </NavLink>
      </li>
    </ul>
  );
}
export default Navigation;
