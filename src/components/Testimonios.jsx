import React from "react";
import ReactPlayer from "react-player/youtube";
import FotoDaniel from "./../imgs/testimonio_daniel.jpg";
import VideoDaniel from "./../videos/testimonio_daniel.mp4";
import FotoDaura from "./../imgs/testimonio_daura.jpg";
import FotoInes from "./../imgs/testimonio_ines.jpg";
import "./../styles/reactPlayer.css";
import "./../styles/Testimonios.css";

function Testimonios() {
  const createUrl = (file) => URL.createObjectURL(file);

  return (
    <div className="testimonios">
      <div className="testimonios__testimonio">
        <ReactPlayer
          className="testimonios__video"
          width={320}
          height={180}
          controls={true}
          playing={true}
          light={FotoDaura}
          url="https://youtu.be/t9XGdifBTrw"
        />
        <div className="testimonios__personData">
          <h3 className="testimonios__name">Daura Cruz</h3>
          <em className="testimonios__quote">
            "Gracias al curso, aprendí a gestionar mejor mis sentimientos, mis
            impulsos y mis pensamientos"
          </em>
        </div>
      </div>
      <div className="testimonios__testimonio">
        <ReactPlayer
          className="testimonios__video"
          width={320}
          height={180}
          controls={true}
          playing={true}
          light={FotoInes}
          url="https://youtu.be/CFbKIJfj-ns"
        />
        <div className="testimonios__personData">
          <h3 className="testimonios__name">Inés Nuez</h3>
          <em className="testimonios__quote">
            "Gracias a la meditación, he aprendido a canalizar las experiencias
            negativas"
          </em>
        </div>
      </div>
      <div className="testimonios__testimonio">
        <ReactPlayer
          className="testimonios__video"
          width={320}
          height={180}
          controls={true}
          playing={true}
          light={FotoDaniel}
          url="https://youtu.be/zkafMGuE5qQ"
        />
        <div className="testimonios__personData">
          <h3 className="testimonios__name">Daniel García</h3>
          <em className="testimonios__quote">
            "Ahora tengo más consciencia de lo que ocurre dentro de mi cabeza,
            he aprendido a aceptar cómo me siento"
          </em>
        </div>
      </div>
    </div>
  );
}

export default Testimonios;
