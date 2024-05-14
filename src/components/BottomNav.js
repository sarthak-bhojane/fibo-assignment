import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BottomNav = () => {
  return (
    <Navbar fixed="bottom" bg="dark" variant="dark">
      <Nav className="w-100 d-flex justify-content-around">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/page2">Page2</Nav.Link>
        <Nav.Link as={Link} to="/page3">Page3</Nav.Link>
        <Nav.Link as={Link} to="/page4">Page4</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default BottomNav;
