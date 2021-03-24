import React from "react";
import Button from "react-bootstrap/Button";

export default function BrowseItemBottomLine(props) {
  const { onePlace } = props;
  return (
    <div className="d-flex justify-content-around">
      <div>{onePlace.price} HUF</div>
      <div>
        {onePlace.isNegotiable === true ? (
          <Button variant="success"> Negotiable </Button>
        ) : (
          <Button variant="warning"> Non-negotiable </Button>
        )}
      </div>
    </div>
  );
}
