import React from "react";
import Happy1 from "./../imgs/happy_1.jpg";
import Happy2 from "./../imgs/happy_2.JPG";
import Happy3 from "./../imgs/happy_3.jpg";
import Happy4 from "./../imgs/happy_4.JPG";
import Happy5 from "./../imgs/happy_5.jpg";
import Happy6 from "./../imgs/happy_6.jpg";
import "./../styles/HappyPeople.css";

function HappyPeople() {
  return (
    <div className="happyPeople">
      <div className="happyPeople__top">
        <img
          className="happyPeople__pic happy1"
          src={Happy1}
          alt="Participantes"
        />
        <img
          className="happyPeople__pic happy2"
          src={Happy2}
          alt="Participantes"
        />
        <img
          className="happyPeople__pic happy3"
          src={Happy3}
          alt="Participantes"
        />
      </div>
      <div className="happyPeople__bottom">
        <img
          className="happyPeople__pic happy4"
          src={Happy4}
          alt="Participantes"
        />
        <img
          className="happyPeople__pic happy5"
          src={Happy5}
          alt="Participantes"
        />
      </div>
    </div>
  );
}

export default HappyPeople;
