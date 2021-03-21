import React, { MouseEventHandler } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import acronyms from "../utils/acronyms";

interface Props {
  currentAcronym: number | (() => number | (() => void));
  setCurrentAcronym: number | (() => number | (() => void));
}

const Navbar: React.FC<Props> = ({ currentAcronym, setCurrentAcronym }) => {
  return (
    <nav
      className="navbar is-fixed-top purpleNavBar"
      role="navigation"
      aria-label="main navigation"
      onMouseMove={setCurrentAcronym as MouseEventHandler<HTMLElement>}
    >
      <div className="navbar-brand">
        <div className="navbar-item">
          <FontAwesomeIcon icon={faCode} color="white" />
          <span className="is-size-7 navBarText">
            &nbsp; {acronyms[currentAcronym as number]}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
