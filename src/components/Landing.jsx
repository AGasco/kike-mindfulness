import React from "react";
import Navbar from "./Navbar";
import "./../styles/Landing.css";

function Landing() {
  return (
    <div className="landing">
      <div className="landing__top">
        <h1>KIKE MINDFULNESS</h1>
        <Navbar />
      </div>
      <div className="landing__main">
        <div className="landing__mainSide">
          <p>kike@gmail.com - 642042042</p>
        </div>
        <h1>KIKE MINDFULNESS</h1>
        {/* <h4>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
          expedita, magnam quis possimus rem itaque fuga obcaecati
          necessitatibus minus asperiores maxime, id voluptatum minima aliquid
          beatae repellendus debitis ut. Autem.
        </h4> */}
      </div>
    </div>
  );
}

export default Landing;
