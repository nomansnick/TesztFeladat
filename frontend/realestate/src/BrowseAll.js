import React from "react";
import "./style.css";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import "../node_modules/font-awesome/css/font-awesome.min.css";

export default function BrowseAll(props) {
  const { title } = props;
  return (
    <div className="p-3 d-flex flex-column align-items-center">
      <div className="col-xs-12 col-md-6 rounded1Rem bg-primary">
        <div className="d-flex flex-row justify-content-between">
          <h1 className="font-weight-bold">{title}</h1>
          <i
            className="fa fa-map-marker fa-2x orange mt-2"
            aria-hidden="true"
          ></i>
        </div>
        <div>
          <InputGroup className="mb-3">
            <FormControl
              className="rounded-pill"
              placeholder="&#xF002; Where do you want to live?"
              aria-label="location"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>
      </div>
    </div>
  );
}
