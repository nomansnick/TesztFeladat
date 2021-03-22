import React from "react";

export default function OneIconBox(props) {
  const { type, value } = props;
  return (
    <div className="d-flex flex-column align-items-center">
      {type === "BEDROOM" ? (
        <div className="fa fa-bed" aria-hidden="true"></div>
      ) : type === "BATHROOM" ? (
        <div className="fa fa-bath" aria-hidden="true"></div>
      ) : (
        <div className="fa fa-square" aria-hidden="true"></div>
      )}
      <div>{value}</div>
      <div>{type}</div>
    </div>
  );
}
