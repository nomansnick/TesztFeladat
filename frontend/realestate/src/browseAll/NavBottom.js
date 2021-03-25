import React from 'react'
import { Link } from 'react-router-dom'
import '../style.css'

const setting = {
  textAlign: 'center',
  textDecoration: 'none',
  color: 'inherit',
  width: 'inherit',
}

function NavBottom(props) {
  const { routes } = props
  return (
    <div className="d-flex justify-content-center navBarHeight">
      <div className="col-12 d-flex justify-content-around align-items-center bg-secondary rounded1Rem">
        {routes.map((oneRoute) => (
          <div className="w-100">
            <Link
              className="d-flex flex-column align-items-center"
              to={oneRoute.route}
              style={setting}
            >
              <i className={oneRoute.icon} aria-hidden="true"></i>
              {oneRoute.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NavBottom
