import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.jpeg";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink to="/">
        <Navbar.Brand>
          <img src={logo} alt="logo" height="45" />
        </Navbar.Brand></NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink
                exact
                className={styles.NavLink}
                activeClassName={styles.Active}
                to="/">
                <i className="fa-solid fa-house">Home</i>
            </NavLink>
            <NavLink
                className={styles.NavLink}
                activeClassName={styles.Active}
                to="/login">
                <i className="fa-solid fa-right-to-bracket">Log in</i>
            </NavLink>
            <NavLink
                className={styles.NavLink}
                activeClassName={styles.Active}
                to="/signup">
                <i className="fa-solid fa-user-plus">Sign up</i>
            </NavLink>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;