import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h2>404</h2>
      <p>
        Oops! This page is not found. Please go to the{" "}
        <Link to="/">homepage</Link>{" "}
      </p>
    </div>
  );
}
export default NotFound;
