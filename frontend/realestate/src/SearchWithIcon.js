import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import "./style.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";

const inputStyle = {
  fontFamily: "FontAwesome, Arial",
  fontStyle: "normal",
};

export default function SearchWithIcon(props) {
  const { label, placeHolder } = props;
  return (
    <InputGroup className="mb-3">
      <FormControl
        style={{ ...inputStyle }}
        className="rounded-pill"
        placeholder={placeHolder}
        aria-label={label}
        aria-describedby="basic-addon1"
      />
    </InputGroup>
  );
}
