import React from "react";
import ReactPlayer from "react-player/youtube";
import Thumbnail from "./../imgs/landing2.jpg";
import "./../styles/reactPlayer.css";
import "./../styles/Testimonios.css";

function Testimonios() {
  return (
    <div className="testimonios">
      <div className="testimonios__testimonio">
        <ReactPlayer
          className="testimonios__video"
          width={320}
          height={180}
          controls={true}
          playing={true}
          light={
            "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          }
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
          light={
            "https://images.unsplash.com/photo-1499651681375-8afc5a4db253?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1287&q=80"
          }
          url="https://www.youtube.com/watch?v=ltmO9XQVdSg"
        />
        <div className="testimonios__personData">
          <h3 className="testimonios__name">Diana</h3>
          <em className="testimonios__quote">
            " Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, hic"
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
          light={
            "https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
          }
          url="https://www.youtube.com/watch?v=ltmO9XQVdSg"
        />
        <div className="testimonios__personData">
          <h3 className="testimonios__name">Marga</h3>
          <em className="testimonios__quote">
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Blanditiis officiis itaque facilis sunt atque ipsa animi veritatis
            est aspernatur rem"
          </em>
        </div>
      </div>
    </div>
  );
}

export default Testimonios;
