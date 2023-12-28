import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { MdLocalOffer } from "react-icons/md";

const TopBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <h6 className="text-light">
            <MdLocalOffer className="text-warning" /> &nbsp;&nbsp; Pizza Spot
            With Free Home Delivery
          </h6>
          <Nav className="ms-auto">
            <LinkContainer to="/" activeClassName="">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/about" activeClassName=" <About />">
              <Nav.Link>About Us</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/contact" activeClassName="">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/policy" activeClassName="">
              <Nav.Link>Terms & Policy</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default TopBar;
