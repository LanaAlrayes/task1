/* eslint-disable react/prop-types */
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";

import { IoMdMail } from "react-icons/io";
import { FaMap } from "react-icons/fa";

import "./TopNavBar.css";
import { IconData } from "../../tools/Json";

function NavBar({ email, location }) {
  return (
    <>
      <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Brand>
            {" "}
            <IoMdMail className="link-danger" />
            <span className="fs-6 fw-semibold text-black-50 m-2">{email}</span>
          </Navbar.Brand>
          <div className="vr mt-4 mb-3 mx-3" />
          <Navbar.Brand>
            {" "}
            <FaMap className="link-danger" />
            <span className="fs-6 fw-semibold text-black-50 m-2">
              {location}
            </span>
          </Navbar.Brand>
          <Navbar.Collapse className="coll justify-content-end" >
            <Nav>
              {IconData.map((element, index) => (
                <Nav.Link key={index}>
                  <Badge pill className="fs-6 mt-4 p-2 bg-secondary bg-opacity-50 ">
                    {element.icon}
                  </Badge>
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr />
    </>
  );
}

export default NavBar;
