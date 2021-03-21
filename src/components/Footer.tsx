import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faOsi,
  faHackerrank,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import hyperlinks from "../utils/hyperlinks";

const Footer: React.FC = () => (
  <div className="">
    <footer className="footer level">
      <div className="buttons level-left">
        <a
          className="button icon is-medium"
          href={hyperlinks.myGitHub}
          target="blank"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          className="button is-size-6"
          href={hyperlinks.myHackerRank}
          target="blank"
        >
          <FontAwesomeIcon icon={faHackerrank} />
        </a>
        <a className="button is-size-6" href={hyperlinks.mySO} target="blank">
          <FontAwesomeIcon icon={faStackOverflow} />
        </a>
        <a
          className="button icon is-medium"
          href={hyperlinks.myLinkedIn}
          target="blank"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a className="button is-size-6" href={hyperlinks.myBlog} target="blank">
          bl0g
        </a>
      </div>
      <div className="level-right is-size-7">
        <span className="icon is-medium">
          <FontAwesomeIcon className="fas fa-2x" icon={faOsi} />
        </span>
        Licensed under
        <a rel="license" href={hyperlinks.GNUGPL} target="blank">
          &nbsp;GNU General Public License V3
        </a>
        .
      </div>
    </footer>
  </div>
);

export default Footer;
