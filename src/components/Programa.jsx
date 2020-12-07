import React from "react";
import "./../styles/Programa.css";

function Programa({ title, picture, description }) {
  return (
    <div className="programa">
      <img className="programa__picture" src={picture} alt="programa" />
      <h3 className="programa__title">{title}</h3>
      <p className="programa__description">{description}</p>
      <button className="programa__button">Reserva ahora</button>
    </div>
  );
}

export default Programa;
