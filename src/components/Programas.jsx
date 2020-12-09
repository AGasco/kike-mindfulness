import React from "react";
import Programa from "./Programa";
import "./../styles/Programas.css";

function Programas({ programas }) {
  return (
    <div className="programas">
      <h1 className="programas__title">MIS PROGRAMAS</h1>
      <ul className="programas__list">
        {programas.map((p) => (
          <li key={p.title}>
            <Programa
              title={p.title}
              picture={p.picture}
              description={p.description}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Programas;
