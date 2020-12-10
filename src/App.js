import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import QuienSoy from "./components/QuienSoy";
import LeadGenerator from "./components/LeadGenerator";
import Programas from "./components/Programas";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";
import * as data from "./data.json";
import "./App.css";

function App() {
  console.log("data", data.default);

  return (
    <div className="app">
      <div className="app__container">
        <div className="app__top">
          <Navbar />
        </div>
        <div className="app__main">
          <Switch>
            <Route path="/quien-soy" component={QuienSoy} />
            <Route
              path="/programas"
              exact
              render={() => <Programas programas={data.default} />}
            />
            <Route
              path="/contacto"
              render={() => <Contacto programas={data.default} />}
            />
            <Route
              path="/"
              exact
              render={() => (
                <div className="app__allContainer">
                  <Landing />
                  <QuienSoy />
                  <LeadGenerator />
                  <Programas programas={data.default} />
                  <Contacto programas={data.default} />
                  <Footer />
                </div>
              )}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
