import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import QuienSoy from "./components/QuienSoy";
import Programas from "./components/Programas";
import Contacto from "./components/Contacto";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app__top">
        <Navbar />
      </div>
      <div className="app__main">
        <Switch>
          <Route path="/quien-soy" component={QuienSoy} />
          <Route path="/programas" component={Programas} />
          <Route path="/contacto" component={Contacto} />
          <Route path="/" exact component={Landing} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
