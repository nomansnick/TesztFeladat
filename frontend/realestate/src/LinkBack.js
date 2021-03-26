import React from 'react'
import { Link } from 'react-router-dom'
import '../node_modules/font-awesome/css/font-awesome.min.css'

export default function LinkBack() {
  const setting = {
    textAlign: 'center',
    textDecoration: 'none',
  }
  return (
    <div>
      <Link style={setting} to="/">
        <i className="fa fa-angle-left fa-2x text-dark" aria-hidden="true"></i>
      </Link>
    </div>
  )
}
