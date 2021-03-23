import React from "react";

export default function BrowseAllTitle(props) {
  const { title } = props;
  return (
    <div className="d-flex flex-row justify-content-between">
      <h1 className="font-weight-bold">{title}</h1>
      <i className="fa fa-map-marker fa-2x orange mt-2" aria-hidden="true"></i>
    </div>
  );
}
