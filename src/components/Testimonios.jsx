import React from "react";
import ReactPlayer from "react-player/youtube";
import FotoDaniel from "./../imgs/testimonio_daniel.png";
import VideoDaniel from "./../videos/testimonio_daniel.mp4";
import FotoDaura from "./../imgs/testimonio_daura2.PNG";
import FotoInes from "./../imgs/testimonio_ines.PNG";
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
          light={FotoInes}
          url="https://www.youtube.com/watch?v=ltmO9XQVdSg"
        />
        <div className="testimonios__personData">
          <h3 className="testimonios__name">Inés</h3>
          <em className="testimonios__quote">
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Blanditiis officiis itaque facilis sunt atque ipsa animi veritatis
            est aspernatur rem"
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
          url="https://www.youtube.com/watch?v=ltmO9XQVdSg"
        />
        <div className="testimonios__personData">
          <h3 className="testimonios__name">Daniel</h3>
          <em className="testimonios__quote">
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est quis
            porro distinctio molestiae blanditiis nihil"
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
          light={FotoDaura}
          url="https://www.youtube.com/watch?v=ltmO9XQVdSg"
        />
        <div className="testimonios__personData">
          <h3 className="testimonios__name">Daura</h3>
          <em className="testimonios__quote">
            " Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, hic"
          </em>
        </div>
      </div>
    </div>
  );
}

export default Testimonios;
