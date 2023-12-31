import { React, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import About from "./About.jsx";
import ContactUs from "./ContactUs.jsx";

function NavBarScroll({ searchQuery, onSearchQueryChange }) {
  /* console.log(searchQuery); */

  return (
    <Navbar
      sticky="top"
      bg="dark"
      data-bs-theme="dark"
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container fluid>
        <Navbar.Brand className="brand_name" href="/">
          <h2>
            MAGICAL
            <br />
            PLACES
          </h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="Contact Us" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/contactus">Contact</NavDropdown.Item>
              <NavDropdown.Item href="/contactus">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/contactus">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about" disabled>
              Preview
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search Country"
              className="me-2"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => onSearchQueryChange(e.target.value)}
            />
          </Form>
          <button>Search</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarScroll;
