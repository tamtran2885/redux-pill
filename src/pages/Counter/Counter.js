import React from "react";
import withLayout from "../../hoc/withLayout";
import { Container } from "react-bootstrap";

import HeaderCounter from "../../components/HeaderCounter";
import FooterCounter from "../../components/FooterCounter";

const Counter = () => {
  return (
    <Container style={{ marginTop: "2rem" }}>
      <HeaderCounter />
      <h1>Counter</h1>
      <FooterCounter />
    </Container>
  );
};

export default withLayout(Counter);
