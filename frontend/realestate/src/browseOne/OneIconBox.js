import React from 'react'

export default function OneIconBox(props) {
  const { icon, type, value } = props
  return (
    <div className="d-flex flex-column align-items-center justify-content-around">
      <div className={icon} aria-hidden="true"></div>
      <div className="d-flex flex-column align-items-center">
        <div>{value}</div>
        <div className="iconFontSize">{type}</div>
      </div>
    </div>
  )
}
