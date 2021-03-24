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
import { devices, typographies, resolutions } from "./settings/Settings";
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
  const [resCycle, setResCycle] = useState(0);
  const [resolution, setResolution] = useState(
    resolutions.SmartPhone[resCycle]
  );

  function nextDevice(param) {
    if (param >= devices.length - 1) {
      setDevice(devices[0]);
      setDeviceCycle(0);
      setResolution(resolutions[devices[0]][0]);
      return;
    }
    setDevice(devices[param + 1]);
    setDeviceCycle(param + 1);
    setResolution(resolutions[devices[param + 1]][0]);
  }

  function nextTypo(param) {
    if (param >= typographies.length - 1) {
      setTypography(typographies[0]);
      setTypoCycle(0);
      return;
    }
    setTypography(typographies[param + 1]);
    setTypoCycle(param + 1);
  }

  function nextRes(param) {
    if (device === devices[0]) {
      nextResInner(param, resolutions.SmartPhone);
    }
    if (device === devices[1]) {
      nextResInner(param, resolutions.Tablet);
    }
    if (device === devices[3]) {
      nextResInner(param, resolutions.Pc);
    }
  }

  function nextResInner(param, array) {
    if (param >= array.length - 1) {
      setResolution(array[0]);
      setResCycle(0);
      return;
    }
    setResolution(array[param]);
    setResCycle(param + 1);
    return;
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
            resolution={resolution}
            setResolution={nextRes}
            resCycle={resCycle}
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
