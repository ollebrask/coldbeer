import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Info from "../components/Info";
import ContactUs from "../components/ContactUs";
import PostsPage from "./posts/PostsPage";

const HomePage = () => {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Info />
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="d-md-none">
          <ContactUs />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={8}>
          <PostsPage message="No results found. Adjust the search keyword." />
        </Col>
        <Col md={4} className="d-none d-md-block">
          <ContactUs />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
