import { Link } from "react-router-dom";
import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ListGroup from 'react-bootstrap/ListGroup';
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">BootStrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "300px" }}
            navbarScroll
          >
            <Nav.Link href="/HomePage">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
            <Nav.Link href="/ShopPage">Shop</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export function NavbarBottom() {
  return (
    <Navbar
      fixed="bottom"
      bg="dark"
      data-bs-theme="dark"
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container fluid>
        <Navbar.Brand href="#">BootStrap</Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <ListGroup horizontal className="ms-auto border-0 ">
            <ListGroup.Item  className="border-0">
                <Link to="/HomePage" className="text-decoration-none accordion-body text-white ">Home</Link>
            </ListGroup.Item>
            <ListGroup.Item className="border-0">
                <Link to="/About">About</Link>
            </ListGroup.Item>
            <ListGroup.Item className="border-0">
                <Link to="/Contact">Contact</Link>
            </ListGroup.Item>
            <ListGroup.Item className="border-0">
                <Link to="/ShopPage">Shop</Link>
            </ListGroup.Item>
            
          </ListGroup>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
