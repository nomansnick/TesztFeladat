import React from "react";
import OneIconBox from "./OneIconBox";

export default function BrosweMultiIconBox(props) {
  const { onePlace } = props;
  return (
    <div className="d-flex flex-row justify-content-around w-100">
      <OneIconBox type="BEDROOM" value={onePlace.nrOfBedrooms} />
      <OneIconBox type="BATHROOM" value={onePlace.nrOfBathrooms} />
      <OneIconBox type="AREA" value={onePlace.area} />
    </div>
  );
}
