/* eslint-disable react/prop-types */
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Buttons from "../Button/Button";

import { NavLink } from "react-router-dom";

function NavBar({ title }) {
  return (
    <>
      <Navbar expand="lg" className="m-4">
        <Container>
          <Navbar.Brand href="#" className="text-uppercase fs-3 fw-bold">
            {title}
          </Navbar.Brand>
          <Navbar.Toggle />

          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Navbar.Brand>
                  <NavLink className="fs-6 fw-medium m-4 text-black link-offset-2 link-underline link-underline-opacity-0" to="/">Home</NavLink>
              </Navbar.Brand>
              <Navbar.Brand>
                <NavLink className="fs-6 fw-medium m-4 text-black link-offset-2 link-underline link-underline-opacity-0" to="/properties">Properties</NavLink>
              </Navbar.Brand>
              <Navbar.Brand>
                <NavLink className="fs-6 fw-medium m-4 text-black link-offset-2 link-underline link-underline-opacity-0" to="/propertyDetails">Property Details</NavLink>
              </Navbar.Brand>
              <Navbar.Brand>
                <NavLink className="fs-6 fw-medium m-4 text-black link-offset-2 link-underline link-underline-opacity-0" to="/contactUS">Contact US</NavLink>
              </Navbar.Brand>
            </Nav>
          </Navbar.Collapse>
          <Buttons title="Schedule a visit" />
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
