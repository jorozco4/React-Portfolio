import React from "react";

const Section = () => {
  return (
    <>
      <div className="container" id="projects">
        <div className="row justify-content-start">
          <div className="col-2">
            <h1 id="section-title">Projects/Activities</h1>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-4 porfolio-item--card">
            <div className="portfolio-item--title">Homies</div>
            <a href="https://tsilvab.github.io/Homies/">
              <img src="./img/Homies.jpg" alt="Image 2" />
            </a>
          </div>
          <div className="col-sm-12 col-md-4 porfolio-item--card">
            <div className="portfolio-item--title">Sneaker-Hype</div>
            <a href="https://sneakerhype.herokuapp.com/">
              <img
                src="./img/SneakerHype.jpg"
                className="gallery__img img-fluid"
                alt="Image 3"
              />
            </a>
          </div>
          <div className="col-sm-12 col-md-4 porfolio-item--card">
            <div className="portfolio-item--title">Password-Generator</div>
            <a href="https://jorozco4.github.io/Homework-3/">
              <img
                src="./img/Password-Generator.jpg"
                className="gallery__img img-fluid"
                alt="Image 3"
              />
            </a>
          </div>
          <div className="col-sm-12 col-md-4 porfolio-item--card">
            <div className="portfolio-item--title">Work-Day-Schedule</div>
            <a href="https://jorozco4.github.io/Homework5/">
              <img
                src="./img/Work-Day-Scheduler.jpg"
                className="gallery__img img-fluid"
                alt="Image 4"
              />
            </a>
          </div>
          <div className="col-sm-12 col-md-4 porfolio-item--card">
            <div className="portfolio-item--title">Note-Taker</div>
            <a href="https://hidden-ocean-60791.herokuapp.com/">
              <img
                src="./img/NoteTaker.jpg"
                className="gallery__img img-fluid"
                alt="Image 5"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
