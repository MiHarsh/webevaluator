import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { PersonCircle } from "react-bootstrap-icons";
import { GlobalContext } from "context";

const Header = () => {
  const { setTheme } = useContext(GlobalContext);
  const location = useLocation();
  return (
    <Navbar
      expand="lg"
      className="bg-primary-color py-0 pl-0 text-white"
      sticky="top"
    >
      <Navbar.Brand as={Link} to="/" className="py-0">
        <img
          src="https://www.howtogeek.com/wp-content/uploads/2021/05/web_crawler_header.jpg"
          alt="logo"
          height="50"
          width="50"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link
            as={Link}
            to="/"
            className={location.pathname === "/" && "active-nav-item"}
          >
            Home
          </Nav.Link>
        </Nav>
        <Nav className="ms-auto">
          <Dropdown drop="left">
            <Dropdown.Toggle variant="link" bsPrefix="p-0">
              <PersonCircle color="#fff" size={40} className="m-2" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setTheme("light")}>
                Light Theme
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setTheme("dark")}>
                Dark Theme
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
