import React, { Component } from "react";
import ReactPlayer from "react-player/youtube";
import Thumbnail from "./../imgs/pensamientosNegativos.jpg";
import "./../styles/reactPlayer.css";

class LeadGenerator extends Component {
  render() {
    return (
      <div className="leadGenerator">
        <div className="leadGenerator__container">
          <h4>¿Sufres de estrés y ansiedad y no sabes por qué?</h4>
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
            url="https://youtu.be/R5I_HEYYZaI"
          />
        </div>
      </div>
    );
  }
}

export default LeadGenerator;
