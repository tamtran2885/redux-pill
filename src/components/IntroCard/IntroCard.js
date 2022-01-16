import React from "react";
import { Card } from "react-bootstrap";

export default function IntroCard() {
  return (
    <Card style={{ maxWidth: "26rem" }}>
      <Card.Body>
        <Card.Title>We verify your home, you spot it online</Card.Title>

        <Card.Text style={{ marginTop: "1rem" }}>
          Save time, energy and money – find and book your new home 100% online.
          Our team verifies properties on your behalf...
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
