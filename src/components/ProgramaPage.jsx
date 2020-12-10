import React, { Component } from "react";
import * as data from "./../data.json";

class ProgramaPage extends Component {
  state = {
    programa: {},
  };

  componentDidMount() {
    console.log(this.props);
    const programa = data.default.find(
      (p) => p.id === this.props.match.params.id
    );
    this.setState({ programa: programa });
  }

  render() {
    const { programa } = this.state;
    return (
      <div className="programaPage">
        <h1>{programa.title}</h1>
        <h4>{programa.subtitle}</h4>
        <p>{programa.pageDescription}</p>
        <button>¡ Estoy interesado !</button>
      </div>
    );
  }
}

export default ProgramaPage;
