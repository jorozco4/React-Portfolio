import React from "react";
import "./App.css";

// import Navbar from "./Components/NavbarElements";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Home from "./Components";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Resume from "./components/resume";
import * as ReactBootStrap from "react-bootstrap";
import Footer from "./components/footer";

function App() {
  return (
    <>
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
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
      </div>
      <About />
      <div>
        <Contact />
      </div>
      <div>
        <Portfolio />
      </div>
      <div>
        <Resume />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
