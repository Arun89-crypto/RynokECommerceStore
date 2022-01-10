import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import NavMain from "../Navbar/Navbar";
import CashCounter from "../../Assets/Images/cash-counter.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <NavMain />
      <Container>
        <Row>
          <Col sm={12} md={6} className="d-flex my-auto">
            <img src={CashCounter} alt="cash-counter" width={"100%"}></img>
          </Col>
          <Col sm={12} md={6} className="d-flex my-auto">
            <Col>
              <h1 className="my-4">Welcome to Rynok E-commerce</h1>
              <p className="my-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut
                ultrices lacus. Ut bibendum cursus vehicula. Aliquam fermentum
                gravida odio, sed euismod sem. Ut varius lectus in velit
                placerat, quis bibendum dui eleifend. Sed et lobortis dolor.
                Duis dui justo, imperdiet et eros placerat, gravida faucibus
                ligula. Cras et dui non nulla sodales porta vel et justo. Donec
                vitae feugiat sapien, ac luctus quam.
              </p>
              <Link
                variant="btn btn-primary"
                className="btn btn-primary my-4"
                role="button"
                to="/products"
              >
                Explore Products
              </Link>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
