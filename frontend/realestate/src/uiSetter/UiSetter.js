import React from "react";
import Table from "react-bootstrap/Table";
import OneCell from "./OneCell";

export default function UiSetter(props) {
  const {
    device,
    setDevice,
    deviceCycle,
    typography,
    setTypography,
    typoCycle,
    resolution,
    setResolution,
    resCycle,
  } = props;
  return (
    <div>
      <Table>
        <tbody>
          <tr>
            <OneCell
              label="Device"
              value={device}
              valueSetter={setDevice}
              cycler={deviceCycle}
            />
            <OneCell
              label="Category"
              value={device}
              valueSetter={setDevice}
              cycler={deviceCycle}
            />
          </tr>
          <tr>
            <OneCell
              label="File Format"
              value={device}
              valueSetter={setDevice}
              cycler={deviceCycle}
            />
            <OneCell
              label="Image"
              value={device}
              valueSetter={setDevice}
              cycler={deviceCycle}
            />
          </tr>
          <tr>
            <OneCell
              label="Typography"
              value={typography}
              valueSetter={setTypography}
              cycler={typoCycle}
            />
            <OneCell
              label="Screen"
              value={resolution}
              valueSetter={setResolution}
              cycler={resCycle}
            />
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
