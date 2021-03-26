import React from 'react'
import OneIconBox from './OneIconBox'

export default function BrosweMultiIconBox(props) {
  const { onePlace } = props
  return (
    <div className="d-flex flex-row justify-content-around align-items-around w-100 h-50">
      <OneIconBox
        icon="fa fa-bed fa-2x"
        type="BEDROOM"
        value={onePlace.nrOfBedrooms}
      />
      <OneIconBox
        icon="fa fa-bath fa-2x"
        type="BATHROOM"
        value={onePlace.nrOfBathrooms}
      />
      <OneIconBox
        icon="fa fa-square-o fa-2x"
        type="AREA SQFT"
        value={onePlace.area}
      />
    </div>
  )
}
