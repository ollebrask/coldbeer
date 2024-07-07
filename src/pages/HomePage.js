import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Info from "../components/Info";
import ContactUs from "../components/ContactUs";
import PostsPage from "./posts/PostsPage";
import styles from "../styles/HomePage.module.css";

const HomePage = () => {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <Info />
        </Col>{" "}
      </Row>{" "}
      <Row>
        <Col md={8}>
          <PostsPage message="No results found. Adjust the search keyword." />
        </Col>{" "}
        <Col md={4}>
          <ContactUs />
        </Col>{" "}
      </Row>{" "}
    </Container>
  );
};

export default HomePage;
