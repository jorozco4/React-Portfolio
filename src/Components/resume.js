import React from "react";

const Section = () => {
  return (
    <div class="container" id="resume">
      <div class="row">
        <div class="col">
          <h1 class="self-resume">Resume</h1>
          {/* <img src="./img/resume.jpg" width="30%" class="img-resume" /> */}
          <a
            href="./img/Jesse_Orozco_Software_Developer_2021.pdf"
            download="jesse-martines-resume-2021"
            class="btn btn-primary btn-lg"
          >
            Download my Resume!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Section;
