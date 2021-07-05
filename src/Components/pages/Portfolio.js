import React from "react";
// import { Generator } from "webpack";
import Homies from "../../img/Homies.png";
import SneakerHype from "../../img/SneakerHype.png";
import Password from "../../img/Password-Generator.png";
import WorkDayScheduler from "../../img/Work-Day-Scheduler.png";
import NoteTaker from "../../img/NoteTaker.png";

const styles = {
  card: {
    background: "#6a040f",
  },
};

const Portfolio = () => {
  return (
    <>
      <div className="container" id="projects">
        <div className="row justify-content-start">
          <div className="col-2">
            <h1 id="section-title">Projects/Activities</h1>
          </div>
        </div>
      </div>

      <div className="container" style={styles.card}>
        <div className="row">
          <div className="col-sm-12 col-md-4 porfolio-item--card">
            <div className="portfolio-item--title">Homies</div>
            <a href="https://tsilvab.github.io/Homies/">
              <img src={Homies} alt="Homies" width="193" height="130" />
            </a>
          </div>
          <div className="col-sm-12 col-md-4 porfolio-item--card">
            <div className="portfolio-item--title">Sneaker-Hype</div>
            <a href="https://sneakerhype.herokuapp.com/">
              <img
                src={SneakerHype}
                alt="SneakerHype"
                width="193"
                height="130"
              />
            </a>
          </div>
          <div className="col-sm-12 col-md-4 porfolio-item--card">
            <div className="portfolio-item--title">Password-Generator</div>
            <a href="https://jorozco4.github.io/Homework-3/">
              <img src={Password} alt="Password" width="193" height="130" />
            </a>
          </div>
          <div className="col-sm-12 col-md-4 porfolio-item--card">
            <div className="portfolio-item--title">Work-Day-Schedule</div>
            <a href="https://jorozco4.github.io/Homework5/">
              <img
                src={WorkDayScheduler}
                alt="WorkDayScheduler"
                width="193"
                height="130"
              />
            </a>
          </div>
          <div className="col-sm-12 col-md-4 porfolio-item--card">
            <div className="portfolio-item--title">Note-Taker</div>
            <a href="https://hidden-ocean-60791.herokuapp.com/">
              <img src={NoteTaker} alt="NoteTaker" width="193" height="130" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
