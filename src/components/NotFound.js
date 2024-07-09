import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.NotFound}>
      <h1>404 Error</h1>
      <p>Page not found</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default NotFound;