import React from "react";
import "./style.css";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import ButtonCustom from "./ButtonCustom";
import { useState } from "react";

const inputStyle = {
  fontFamily: "FontAwesome, Arial",
  fontStyle: "normal",
};

export default function BrowseAll(props) {
  const { title } = props;
  const [activeButton, setActiveButton] = useState(" ");

  function activate(target) {
    setActiveButton(target);
  }

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
              style={{ ...inputStyle }}
              className="rounded-pill"
              placeholder="&#xF002;  Where do you want to live?"
              aria-label="location"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>
        <div className="d-flex justify-content-center">
          <ButtonCustom
            activate={activate}
            className={
              activeButton === "BUY"
                ? "roundedTop orangeBg text-white"
                : "roundedTop text-dark"
            }
            text="BUY"
          />
          <ButtonCustom
            activate={activate}
            className={
              activeButton === "RENT"
                ? "roundedTop orangeBg text-white"
                : "roundedTop text-dark"
            }
            text="RENT"
          />
        </div>
      </div>
    </div>
  );
}
