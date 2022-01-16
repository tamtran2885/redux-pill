import React from "react";
import { Form, Button, Container } from "react-bootstrap";

export default function SignUp() {
  return (
    <Container
      gap={2}
      className="col-sm-5 mx-auto"
      style={{ marginTop: "10%" }}
    >
      <div className="bg-light border" style={{ padding: "1.5rem" }}>
        <h2 style={{ textAlign: "center" }}>Sign Up</h2>
        <Form style={{ marginTop: "1rem" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
}
