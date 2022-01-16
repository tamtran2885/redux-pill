import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AppBar() {
  return (
    <>
      <Navbar bg="light" expand="lg" style={{ padding: "10px" }}>
        <Container fluid>
          <Navbar.Brand href="#">Redux</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to={"/"}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/dashboard"}>
                Dashboard
              </Nav.Link>
              <Nav.Link as={Link} to={"/counter"}>
                Counter
              </Nav.Link>
            </Nav>
            <Button
              as={Link}
              to={"/sign-in"}
              variant="outline-success"
              style={{ marginRight: "10px" }}
            >
              Log In
            </Button>
            <Button as={Link} to={"/sign-up"} variant="outline-success">
              Register
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
