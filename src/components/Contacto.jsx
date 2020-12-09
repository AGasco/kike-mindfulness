import React, { Component } from "react";
import "./../styles/Contacto.css";

class Contacto extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    program: "",
    comments: "",
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    console.log("submitted");
  };

  render() {
    return (
      <div className="contacto">
        <h1 className="contacto__title">CONTACTO</h1>
        <em>
          <p className="contacto__subtitle">
            Ponte en contacto conmigo y te responderé lo antes posible :)
          </p>
        </em>
        <form onSubmit={this.handleSubmit}>
          <div className="contacto__formElem">
            <label htmlFor="name">¿Cómo te llamas?</label>
            <input
              type="text"
              name="name"
              id="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="contacto__horizFormElem">
            <div className="contacto__formElem">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="contacto__formElem">
              <label htmlFor="phone">Teléfono</label>
              <input
                type="text"
                name="phone"
                value={this.state.phone}
                onChange={this.handleInputChange}
                required
              />
            </div>
          </div>

          <div className="contacto__formElem">
            <label htmlFor="program">¿Qué programa te interesa más?</label>
            <select
              name="program"
              value={this.state.program}
              onChange={this.handleInputChange}
              required
            >
              <option value=""></option>
              {this.props.programas.map((p) => (
                <option key={p.title} value={p.title}>
                  {p.title}
                </option>
              ))}
            </select>
          </div>
          <div className="contacto__formElem">
            <label htmlFor="comments">Cuéntame lo que quieras</label>
            <textarea
              name="comments"
              id=""
              cols="30"
              rows="10"
              value={this.state.comments}
              onChange={this.handleInputChange}
            ></textarea>
          </div>

          <div className="contacto__formElem">
            <input
              className="contacto__submit"
              type="submit"
              value="¡Empieza tu viaje de autoconocimiento!"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Contacto;
