import React, { MouseEventHandler, useState } from "react";
import Avatar from "./Avatar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import likes from "../utils/likes";
import acronyms from "../utils/acronyms";

function useRandomize(arr: string[], initial = 0, waitTime = 0) {
  const [randomIdx, setRandomIdx] = useState(initial);
  const [shouldWait, setShouldWait] = useState(false);

  const randomize = () => {
    if (shouldWait) return randomIdx;
    setRandomIdx(Math.floor(Math.random() * arr.length));
    setShouldWait(true);
    const timeout = setTimeout(() => setShouldWait(false), waitTime);
    return () => clearTimeout(timeout);
  };
  return [randomIdx, randomize];
}

const App: React.FC = () => {
  const [currentLike, setCurrentLike] = useRandomize(likes, 0, 777);
  const [currentAcronym, setCurrentAcronym] = useRandomize(acronyms, 0, 777);

  return (
    <div className="container">
      <Navbar
        currentAcronym={currentAcronym}
        setCurrentAcronym={setCurrentAcronym}
      />
      <section className="hero is-white-bis is-small">
        <div
          className="hero-body"
          onMouseMove={setCurrentLike as MouseEventHandler<HTMLDivElement>}
        >
          <div className="container">
            <Avatar />
            <p className="title is-size-1">URI STOLAR</p>
            <p className="subtitle is-size-2">
              Computer Systems Engineer in Mexico City
            </p>
            <p className="subtitle is-size-4">{`Loves ${
              likes[currentLike as number]
            }`}</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;
