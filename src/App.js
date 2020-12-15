import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import QuienSoy from "./components/QuienSoy";
import LeadGenerator from "./components/LeadGenerator";
import Programas from "./components/Programas";
import ProgramaPage from "./components/ProgramaPage";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import * as data from "./data.json";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leadGeneratorClicked: false,
    };
  }

  componentDidUpdate() {}

  handleLeadGeneratorClicked = () => {
    this.setState({
      leadGeneratorClicked: true,
    });
  };

  render() {
    return (
      <div className="app" id="#">
        <div className="app__container">
          <div className="app__top"></div>
          <div className="app__main">
            <Switch>
              <Route
                path="/programas/:id"
                render={(props) => (
                  <React.Fragment>
                    <Navbar hidden />
                    <ProgramaPage {...props} />
                  </React.Fragment>
                )}
              />
              <Route
                path="/contacto/:id"
                render={(props) => (
                  <React.Fragment>
                    <Navbar hidden />
                    <Contacto
                      programas={data.default}
                      match={props.match}
                      leadClicked={this.state.leadGeneratorClicked}
                    />
                  </React.Fragment>
                )}
              />

              <Route path="/" exact>
                <div className="app__allContainer">
                  <Navbar />
                  <Landing />
                  <QuienSoy />
                  <LeadGenerator
                    onLeadClick={this.handleLeadGeneratorClicked}
                  />
                  <Programas programas={data.default} />
                  <Contacto programas={data.default} />
                  <Footer />
                </div>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
