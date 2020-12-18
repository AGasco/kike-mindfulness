import React from "react";
import { Link } from "react-router-dom";
import "./../styles/Programa.css";

function Programa({ title, title2, picture, description, url }) {
  return (
    <div className="programa">
      <img className="programa__picture" src={picture} alt="programa" />
      <h3 className="programa__title">{title}</h3>
      <h3 className="programa__title">{title2}</h3>
      <p className="programa__description">{description}</p>
      <button className="programa__button">
        <Link to={url}>Más Información</Link>
      </button>
    </div>
  );
}

export default Programa;
