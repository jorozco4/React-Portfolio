import React from "react";
import "./App.css";
// import Navbar from "./Components/NavbarElements";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Home from "./Components";
// import About from "./pages/about";
// import Portfolio from "./pages/portfolio";
// import Contact from "./pages/contact";
// import Resume from "./pages/resume";
import * as ReactBootStrap from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <ReactBootStrap.Navbar.Brand href="#home">
          Orozco-Portolio
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link href="#about-me">
              About Me
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="contact">
              Contact
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="portfolio">
              Portfolio
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="resume">
              Resume
            </ReactBootStrap.Nav.Link>
            {/* <ReactBootStrap.NavDropdown
              title="Dropdown"
              id="collasible-nav-dropdown"
            >
              <ReactBootStrap.NavDropdown.Item href="#action/3.1">
               Portfolio
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.2">
                Another action
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.3">
                Something
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="#action/3.4">
                Separated link
              </ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown> */}
          </ReactBootStrap.Nav>
          {/* <ReactBootStrap.Nav>
            <ReactBootStrap.Nav.Link href="#deets">
              More deets
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
              Dank memes
            </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav> */}
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </div>
  );
}

export default App;
