import React from "react";
import Resume from "../../img/resume.png";

const styles = {
  card: {
    background: "#6a040f",
  },
  font: {
    color: "white",
  },
};

function Resumes() {
  return (
    <div class="container" id="resume" style={styles.card}>
      <div class="row">
        <div class="col">
          <h1 class="self-resume" style={styles.font}>
            Resume
          </h1>
          <img src={Resume} alt="Resume" width="193" height="130" />

          {/* <button className="button">
            <a
              className="button"
              href="../img/Jesse_Orozco_Software_Developer_2021.pdf"
              download="jesse-martines-resume-2021"
            >
              Download Resume
            </a>
          </button> */}

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
}

export default Resumes;
