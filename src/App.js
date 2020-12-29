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
import HappyPeople from "./components/HappyPeople";
import Testimonios from "./components/Testimonios";

class App extends Component {
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
                    <Contacto programas={data.default} match={props.match} />
                  </React.Fragment>
                )}
              />

              <Route path="/" exact>
                <div className="app__allContainer">
                  <Navbar />
                  <Landing />
                  <QuienSoy />
                  <Programas programas={data.default} />
                  <HappyPeople />
                  <LeadGenerator />
                  <Testimonios />
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
