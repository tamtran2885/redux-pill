import React from "react";
import withLayout from "../../hoc/withLayout";
import { Container, Col, Row } from "react-bootstrap";

import IntroCard from "../../components/IntroCard";
import HomeSearch from "../../components/HomeSearch";
import ProductListing from "../../components/ProductListing";

const Home = () => {
  return (
    <Container style={{ marginTop: "2rem" }}>
      <Row>
        <Col xs={12} md={6}>
          <IntroCard />
        </Col>
        <Col xs={12} md={6}>
          <HomeSearch />
        </Col>
      </Row>
      {/* <Row style={{ marginTop: "2rem" }}>
        <Col>
          <ProductListing />
        </Col>
      </Row> */}
    </Container>
  );
};

export default withLayout(Home);
