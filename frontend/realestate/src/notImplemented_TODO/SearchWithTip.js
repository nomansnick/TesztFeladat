import React from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import SearchWithIcon from '../SearchWithIcon'

export default function SearchWithTip() {
  return (
    <OverlayTrigger
      placement="bottom"
      overlay={
        <Tooltip id="button-tooltip-2">
          Number Street, City Postal, Country Code
        </Tooltip>
      }
    >
      {({ ref, ...triggerHandler }) => (
        <SearchWithIcon
          onchange={searchLocation}
          name="search"
          placeholder="&#xF002;  Where do you want to live?"
          label="location"
          type="text"
          {...triggerHandler}
        />
      )}
    </OverlayTrigger>
  )
}
