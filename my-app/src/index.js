import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';

const TopMenu = () => (
  <Navbar className="navbar-custom container" expand="lg">
    <Container fluid={true}"container-fluid">
      <Nav className="me-auto container-fluid">
              <img src="https://images.squarespace-cdn.com/content/v1/5ee94b6da7910d1bee2546fd/1599597312683-IHIO1FA3OGWG31T9EHSA/murphyslogowhite.png?format=1500w" width="240px"/>
              <li className="nav-item px-3">Home</li>
              <li className="nav-item px-3">About Us</li>
              <li className="nav-item px-3">St. Patrick's Day</li>
              <li className="nav-item px-3">To Go Ordering</li>
              <li className="nav-item px-3"><i className="bi bi-instagram p-1"></i></li>
              <li className="nav-item px-3"><i className="bi bi-facebook p-1"></i></li>
        <li className="nav-item px-3"><i className="bi bi-twitter p-1"></i></li></Nav>
    </Container>
  </Navbar>
);

const Murphys = () => (
  <Container>
    <TopMenu/>

  </Container>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Murphys />);