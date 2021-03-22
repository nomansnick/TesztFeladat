import "./App.css";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStar,
  faMapMarkerAlt,
  faBed,
  faBath,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";

library.add(faStar);
library.add(faMapMarkerAlt);
library.add(faBed);
library.add(faBath);
library.add(faSquare);

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
