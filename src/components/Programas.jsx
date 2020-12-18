import React from "react";
import Programa from "./Programa";
import "./../styles/Programas.css";

function Programas({ programas }) {
  return (
    <div className="programas" id="programas">
      <div className="programas__container">
        <h1 className="programas__title">PROGRAMAS</h1>
        <em>
          <p className="programas__subtitle">
            Entrena tu mente y recupera tu sensación de paz y bienestar
          </p>
        </em>

        <ul className="programas__list">
          {programas.map((p) => (
            <li key={p.title}>
              <Programa
                title={p.title}
                title2={p.title2}
                picture={p.picture}
                description={p.description}
                url={p.url}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Programas;
