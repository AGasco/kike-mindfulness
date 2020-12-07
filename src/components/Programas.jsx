import React from "react";
import Programa from "./Programa";
import "./../styles/Programas.css";

const programasData = [
  {
    title: "Programa de 8 semanas",
    picture:
      "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1352&q=80",
    description:
      "Programa oficial de 'Respira Vida Breathworks'. El plan más completo e integral.",
  },
  {
    title: "Sesión individual",
    picture:
      "https://images.unsplash.com/photo-1532798442725-41036acc7489?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
    description:
      "Sesiones más cercanas, donde puedo mirar cada caso más tranquilamente.",
  },
  {
    title: "Retiros de meditación",
    picture:
      "https://images.unsplash.com/photo-1577253313708-cab167d2c474?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1322&q=80",
    description:
      "Fin de semana en la naturaleza para practicar meditación y apreciar el momento presente.",
  },
];

function Programas() {
  return (
    <div className="programas">
      <h1 className="programas__title">MIS PROGRAMAS</h1>
      <ul className="programas__list">
        {programasData.map((p) => (
          <li>
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
