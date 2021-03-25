import React from 'react'
import OneIconBox from './OneIconBox'

export default function BrosweMultiIconBox(props) {
  const { onePlace } = props
  return (
    <div className="d-flex flex-row justify-content-around w-100">
      <OneIconBox
        icon="fa fa-bed"
        type="BEDROOM"
        value={onePlace.nrOfBedrooms}
      />
      <OneIconBox
        icon="fa fa-bath"
        type="BATHROOM"
        value={onePlace.nrOfBathrooms}
      />
      <OneIconBox icon="fa fa-square" type="AREA" value={onePlace.area} />
    </div>
  )
}
