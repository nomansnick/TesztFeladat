import React from "react";
import { Link } from "react-router-dom";

const setting = {
  textAlign: "center",
  textDecoration: "none",
  color: "inherit",
  width: "inherit",
};

function NavBottom(props) {
  const { routes } = props;
  return (
    <div className="d-flex justify-content-around align-items-center">
      {routes.map((oneRoute) => (
        <div className="d-flex justify-content-center w-100">
          <Link to={oneRoute.route} style={setting}>
            {oneRoute.label}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default NavBottom;
