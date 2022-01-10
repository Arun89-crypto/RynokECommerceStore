import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavMain = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>
            <i class="bi bi-cart-fill"></i>
            Rynok.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link
                to="/"
                className="mx-3 my-3"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Home
              </Link>
              <Link
                to="/products"
                className="mx-3 my-3"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Products
              </Link>
              <Link
                to="/cart"
                className="mx-3 my-3"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Cart
              </Link>
              <Link
                to="/about"
                className="mx-3 my-3"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                About
              </Link>
            </Nav>
            <div className="d-flex">
              <Link
                variant="btn btn-primary"
                className="mx-2 btn btn-primary"
                role="button"
                to="/login"
              >
                Log In
              </Link>
              <Link
                variant="btn btn-primary"
                className="mx-2 btn btn-primary"
                role="button"
                to="/signup"
              >
                Sign Up
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavMain;
