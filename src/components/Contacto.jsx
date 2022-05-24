import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import ReactPlayer from 'react-player/youtube';

class Contacto extends Component {
  state = {
    userData: {
      name: '',
      email: '',
      phone: '',
      program: '',
      comments: ''
    },
    submitted: false
  };

  componentDidMount() {
    if (this.props.match) {
      const userData = { ...this.state.userData };
      userData.program = this.props.match.params.id;
      this.setState({
        userData
      });
    }
  }

  handleInputChange = (e) => {
    const userData = { ...this.state.userData };
    userData[e.target.name] = e.target.value;
    this.setState({ userData });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, program, comments } = this.state.userData;

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          from_phone: phone,
          programa: program,
          message: comments
        },
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        function (response) {
          console.log('SUCCESS!', response.status, response.text);
        },
        function (error) {
          console.log('FAILED...', error);
        }
      );

    this.setState({ submitted: true });
  };

  render() {
    const { name, email, phone, program, comments } = this.state.userData;

    return (
      <div className="contacto" id="contacto">
        {!this.state.submitted ? (
          <div className="contacto__container">
            <h1 className="contacto__title">CONTACTO</h1>
            <em>
              <p className="contacto__subtitle">
                Ponte en contacto conmigo y te responderé lo antes posible :)
              </p>
              <p className="contacto__subtitle">
                Llámame directamente al 620 648 806 (también respondo por
                WhatsApp)
              </p>
            </em>
            <form onSubmit={this.handleSubmit}>
              <div className="contacto__formElem">
                <label htmlFor="name">¿Cómo te llamas?</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
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
                    value={email}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
                <div className="contacto__formElem">
                  <label htmlFor="phone">Teléfono</label>
                  <input
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="contacto__formElem">
                <label htmlFor="program">¿Qué programa te interesa más?</label>
                <select
                  name="program"
                  value={program}
                  onChange={this.handleInputChange}
                  required
                >
                  <option value=""></option>
                  {this.props.programas.map((p) => (
                    <option key={p.title} value={p.id}>
                      {p.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="contacto__formElem">
                <label htmlFor="comments">
                  Cuéntame lo que quieras sobre ti
                </label>
                <textarea
                  name="comments"
                  id=""
                  cols="30"
                  rows="6"
                  value={comments}
                  onChange={this.handleInputChange}
                ></textarea>
              </div>

              <div className="contacto__formElem">
                <input
                  className="contacto__submit"
                  type="submit"
                  value="¡Empieza tu aventura de autoconocimiento!"
                />
              </div>
            </form>
          </div>
        ) : (
          <div className="contacto__container">
            {this.props.leadClicked ? (
              <div className="contacto__lead">
                <h1 className="contacto__leadTitle">
                  Gracias por contactar conmigo. Tendrás una respuesta mía lo
                  antes posible
                </h1>
                <p className="contacto__leadSubtitle">
                  Mientras, ¿por qué no miras este vídeo?
                </p>
                <ReactPlayer
                  className="contacto__leadVideo"
                  width={640}
                  height={360}
                  controls={true}
                  url="https://www.youtube.com/watch?v=r5pXw5jmf64"
                />
              </div>
            ) : (
              <div className="contacto__graciasContainer">
                <h1 className="contacto__leadTitle">
                  Gracias por contactar conmigo. Tendrás una respuesta mía lo
                  antes posible
                </h1>
                <a className="contacto__volver" href="/#">
                  <button>Volver</button>
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Contacto;
