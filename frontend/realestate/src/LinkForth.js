import React from 'react'
import { Link } from 'react-router-dom'
import '../node_modules/font-awesome/css/font-awesome.min.css'

export default function LinkForth(props) {
  const { linkTo, text } = props
  const setting = {
    textAlign: 'center',
    textDecoration: 'none',
    color: 'inherit',
  }
  return (
    <div className="w-100">
      <Link
        style={setting}
        to={linkTo}
        className="d-flex align-items-center justify-content-between w-100"
      >
        <div className="orange">{text}</div>
        <i className="fa fa-angle-right orange fa-2x" aria-hidden="true"></i>
      </Link>
    </div>
  )
}
