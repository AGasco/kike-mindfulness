import React from "react";
import { Link } from "react-router-dom";

function Programa({ title, title2, picture, description, url }) {
  return (
    <div className="programa">
      <img className="programa__picture" src={picture} alt="programa" />
      <h3 className="programa__title">{title}</h3>
      <h3 className="programa__title">{title2}</h3>
      <p className="programa__description">{description}</p>

      <Link to={url} className="programa__link">
        {" "}
        <button className="programa__button">Más Información </button>
      </Link>
    </div>
  );
}

export default Programa;
