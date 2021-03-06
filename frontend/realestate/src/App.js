import React, { useState } from 'react'
import './App.css'
import Routes from './Routes'
import { BrowserRouter as Router } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
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
  faAngleRight,
  faAngleLeft,
} from '@fortawesome/free-solid-svg-icons'
import { devices, typographies, resolutions } from './settings/Settings'
import UiSetter from './uiSetter/UiSetter'

library.add(faStar)
library.add(faMapMarkerAlt)
library.add(faBed)
library.add(faBath)
library.add(faSquare)
library.add(faSearch)
library.add(faComment)
library.add(faHeart)
library.add(faBell)
library.add(faAngleRight)
library.add(faAngleLeft)

function App() {
  const [deviceCycle, setDeviceCycle] = useState(0)
  const [device, setDevice] = useState(devices[deviceCycle])
  const [typoCycle, setTypoCycle] = useState(0)
  const [typography, setTypography] = useState(typographies[typoCycle].type)
  const [resCycle, setResCycle] = useState(0)
  const [resolution, setResolution] = useState(
    resolutions.SmartPhone[resCycle].size
  )
  const [classToUse, setClassToUse] = useState('smartPhoneGS5 tNR')
  const [usedSize, setUsedSize] = useState(0)

  function nextDevice(param) {
    if (param >= devices.length - 1) {
      setDevice(devices[0])
      setDeviceCycle(0)
      setResolution(resolutions[devices[0]][0].size)
      setResCycle(0)
      setUsedSize(0)
      classNameBuilder(resolutions[devices[0]][0].className, typography)
      return
    }
    setDevice(devices[param + 1])
    setDeviceCycle(param + 1)
    setResolution(resolutions[devices[param + 1]][0].size)
    setResCycle(0)
    setUsedSize(0)
    classNameBuilder(resolutions[devices[param + 1]][0].className, typography)
  }

  function nextTypo(param) {
    if (param >= typographies.length - 1) {
      setTypography(typographies[0].type)
      setTypoCycle(0)
      classNameBuilder(
        resolutions[device][usedSize].className,
        typographies[0].className
      )
      return
    }
    setTypography(typographies[param + 1].type)
    setTypoCycle(param + 1)
    classNameBuilder(
      resolutions[device][usedSize].className,
      typographies[param + 1].className
    )
  }

  function nextRes(param) {
    if (device === devices[0]) {
      nextResInner(param, resolutions.SmartPhone)
    }
    if (device === devices[1]) {
      nextResInner(param, resolutions.Tablet)
    }
    if (device === devices[2]) {
      nextResInner(param, resolutions.Pc)
    }
  }

  function nextResInner(param, array) {
    if (param >= array.length - 1) {
      setResolution(array[0].size)
      setResCycle(0)
      classNameBuilder(array[0].className, typography)
      return
    }
    setResolution(array[param + 1].size)
    setResCycle(param + 1)
    classNameBuilder(array[param + 1].className, typography)
    return
  }

  function classNameBuilder(size, font) {
    let classBase = ''
    setClassToUse(classBase.concat(' ').concat(size).concat(' ').concat(font))
  }

  return (
    <Router>
      <div className="bgMain bg-dark w-100 h-100" />
      <div className="d-flex w-100 h-100 flex-wrap justify-content-around align-items-center">
        <div className="d-flex flex-column align-items-center justify-content-around">
          <div className="d-flex flex-column align-items-start w-100 ml-5 mb-5">
            <h2 className="font-weight-bold orange titleFont">Housing</h2>
            <h2 className="font-weight-bold text-white titleFont">
              Real Estate
            </h2>
            <h4 className="text-white titleFontSm">iOS UI Kit Template</h4>
          </div>
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
        <div className={classToUse}>
          <Routes resolution={resolution} device={device} />
        </div>
      </div>
    </Router>
  )
}

export default App
