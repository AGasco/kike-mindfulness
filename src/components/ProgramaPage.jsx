import React, { Component } from "react";
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
        <h1 className="programaPage__title">{programa.title}</h1>
        <h4 className="programaPage__subtitle">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
          ratione repudiandae, obcaecati dolorum exercitationem molestias nisi
          et voluptates possimus atque.
        </h4>
        <p className="programaPage__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
          sapiente voluptate accusantium iste maxime quia et dolorum, deleniti
          nemo perferendis natus, repellat consequuntur porro rerum vel
          repellendus odit. Ducimus cum commodi, ab hic assumenda corrupti
          suscipit necessitatibus fugiat facilis delectus, optio ipsam iusto
          blanditiis repellendus distinctio ipsa. Dolorum consequuntur, labore,
          sunt nisi, odit unde ullam doloribus eveniet nemo quo molestiae!
        </p>
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
              ¡ Estoy interesado !
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default ProgramaPage;
