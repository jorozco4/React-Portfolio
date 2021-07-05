import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div class="social-container">
      <h3>Social Follow</h3>
      <a href="https://www.facebook.com/" className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.linkedin.com/" className="Linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://www.github.com/" className="Github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
    </div>
  );
}
