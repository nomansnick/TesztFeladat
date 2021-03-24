import React, { useState } from "react";
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
  faSearch,
  faComment,
  faHeart,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { devices, typographies } from "./settings/Settings";
import UiSetter from "./uiSetter/UiSetter";

library.add(faStar);
library.add(faMapMarkerAlt);
library.add(faBed);
library.add(faBath);
library.add(faSquare);
library.add(faSearch);
library.add(faComment);
library.add(faHeart);
library.add(faBell);

function App() {
  const [deviceCycle, setDeviceCycle] = useState(0);
  const [device, setDevice] = useState(devices[deviceCycle]);
  const [typoCycle, setTypoCycle] = useState(0);
  const [typography, setTypography] = useState(typographies[typoCycle]);

  function nextDevice(param) {
    if (param >= devices.length - 1) {
      setDevice(devices[0]);
      setDeviceCycle(0);
    } else {
      setDevice(devices[param + 1]);
      setDeviceCycle(param + 1);
    }
  }

  function nextTypo(param) {
    if (param >= typographies.length - 1) {
      setTypography(typographies[0]);
      setTypoCycle(0);
    } else {
      setTypography(typographies[param + 1]);
      setTypoCycle(param + 1);
    }
  }

  return (
    <Router>
      <div className="d-flex w-100 h-100 flex-wrap">
        <div className="d-flex w-100 align-items-center justify-content-center">
          <UiSetter
            device={device}
            setDevice={nextDevice}
            deviceCycle={deviceCycle}
            typography={typography}
            setTypography={nextTypo}
            typoCycle={typoCycle}
          />
        </div>
        <div className="w-100 h-100">
          <Routes />
        </div>
      </div>
    </Router>
  );
}

export default App;
