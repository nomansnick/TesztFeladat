import React from 'react'

export default function OneIconBox(props) {
  const { icon, type, value } = props
  return (
    <div className="d-flex flex-column align-items-center">
      <div className={icon} aria-hidden="true"></div>
      <div>{value}</div>
      <div>{type}</div>
    </div>
  )
}
