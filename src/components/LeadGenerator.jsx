import React, { Component } from "react";
import ReactPlayer from "react-player/youtube";
import Thumbnail from "./../imgs/pensamientosNegativos.jpg";
import "./../styles/reactPlayer.css";
import "./../styles/LeadGenerator.css";

class LeadGenerator extends Component {
  render() {
    return (
      <div className="leadGenerator">
        <div className="leadGenerator__container">
          <h4>
            ¿Tienes constantemente pensamientos negativos y tu mente se centra
            siempre en lo peor de cada situación?
          </h4>
          <p>
            No te preocupes, ¡es algo completamente normal! En este video te
            muestro por qué sucede
          </p>
          <ReactPlayer
            className="leadGenerator__video"
            width={640}
            height={360}
            controls={true}
            playing={true}
            light={Thumbnail}
            url="https://www.youtube.com/watch?v=ltmO9XQVdSg"
          />
        </div>
      </div>
    );
  }
}

export default LeadGenerator;
