import React from 'react'
import { Link } from 'react-router-dom'
import '../style.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'

const setting = {
  textAlign: 'center',
  textDecoration: 'none',
  color: 'inherit',
  width: 'inherit',
}

export default function NavBottom() {
  const routes = [
    { label: 'Browse', route: '/', icon: 'fa fa-search' },
    { label: 'Connections', route: '/connections', icon: 'fa fa-comment-o' },
    { label: 'Save', route: '/saved', icon: 'fa fa-heart-o' },
    { label: 'Notifications', route: '/notifications', icon: 'fa fa-bell-o' },
  ]
  return (
    <div className="d-flex justify-content-center navBarHeight">
      <div className="col-12 d-flex justify-content-around align-items-center bg-white rounded1Rem">
        {routes.map((oneRoute) => (
          <div key={oneRoute.route} className="w-100">
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
