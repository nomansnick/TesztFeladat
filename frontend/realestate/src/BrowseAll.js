import React from "react";
import "./style.css";

export default function BrowseAll(props) {
  const { title } = props;
  return (
    <div className="p-3 d-flex flex-column align-items-center">
      <div className="col-xs-12 col-md-6">
        <div className="d-flex flex-row justify-content-between">
          <h1 className="font-weight-bold">{title}</h1>
          <i className="fa fa-map-marker fa-2x orange" aria-hidden="true"></i>
        </div>
        <div>2</div>
      </div>
    </div>
  );
}
