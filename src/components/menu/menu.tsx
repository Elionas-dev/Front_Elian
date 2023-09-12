import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom"; // Importe o Link e NavLink do react-router-dom
import { FaHome, FaShoppingCart } from "react-icons/fa";

const NavbarMenu = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Nav>
        <Navbar.Brand>
          <Link to="/" className="nav-link">
            <FaHome className="mr-2" /> Página Inicial
          </Link>
        </Navbar.Brand>

        <Nav.Link>
          <Link to="/cart" className="nav-link">
            <FaShoppingCart className="mr-2" /> Carrinho
          </Link>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavbarMenu;
