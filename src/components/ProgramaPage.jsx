import React, { Component } from "react";
import ReactPlayer from "react-player/youtube";
import Thumbnail from "./../imgs/pensamientosNegativos.jpg";
import * as data from "./../data.json";
import { Link } from "react-router-dom";
import "./../styles/ProgramaPage.css";

class ProgramaPage extends Component {
  state = {
    programa: {},
  };

  componentDidMount() {
    const programa = data.default.find(
      (p) => p.id === this.props.match.params.id
    );
    this.setState({ programa: programa });
  }

  render() {
    const { programa } = this.state;
    return (
      <div className="programaPage">
        <div className="programaPage__left"></div>
        <div className="programaPage__container">
          <h1 className="programaPage__title">{programa.title}</h1>
          {/* <h4 className="programaPage__subtitle">{programa.subtitle}</h4> */}
          <p
            className="programaPage__description"
            dangerouslySetInnerHTML={{ __html: programa.pageDescription }}
          ></p>
          <div className="programaPage__buttons">
            <button
              className="programaPage__backBtn"
              onClick={this.props.history.goBack}
            >
              Volver a Programas
            </button>
            <Link
              to={`/contacto/${programa.id}`}
              className="programaPage__confirmLink"
            >
              <button className="programaPage__confirmBtn">
                ¡ Reserva tu plaza !
              </button>
            </Link>
          </div>
        </div>
        <div className="programaPage__right">
          {programa.video && (
            <ReactPlayer
              className="programaPage__video"
              width={640}
              height={360}
              controls={true}
              url="https://www.youtube.com/watch?v=BdnBgG1IlZM&feature=emb_logo"
            />
          )}
        </div>
      </div>
    );
  }
}

export default ProgramaPage;
