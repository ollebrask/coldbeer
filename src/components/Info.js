import React from 'react';
import styles from '../styles/Info.module.css';

const Info = () => {
  return (
    <div className={styles.Info}>
      <h2>Welcome to Cold Beer!</h2>
      <p>
        This is a platform where you can post about different kinds of beers.
        Our goal is to create a community where beer enthusiasts can share their thoughts and experiences.
        Feel free to explore and connect with others who share your passion for beer!
      </p>
    </div>
  );
};

export default Info;