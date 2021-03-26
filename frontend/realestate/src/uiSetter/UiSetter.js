import React from 'react'
import Table from 'react-bootstrap/Table'
import OneCell from './OneCell'

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
  } = props

  const tempObj = {
    category: 'Real Estate',
    fileFormat: 'PSD',
    image: 'NOT INCLUDED',
    cycler: '0',
  }

  function tempSetter() {
    console.log('TODO!!!')
  }

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
              available={true}
            />
            <OneCell
              label="Category"
              value={tempObj.category}
              valueSetter={tempSetter}
              cycler={tempObj.cycler}
              available={true}
            />
          </tr>
          <tr>
            <OneCell
              label="File Format"
              value={tempObj.fileFormat}
              valueSetter={tempSetter}
              cycler={tempObj.cycler}
              available={true}
            />
            <OneCell
              label="Image"
              value={tempObj.image}
              valueSetter={tempSetter}
              cycler={tempObj.cycler}
              available={false}
            />
          </tr>
          <tr>
            <OneCell
              label="Typography"
              value={typography}
              valueSetter={setTypography}
              cycler={typoCycle}
              available={true}
            />
            <OneCell
              label="Screen"
              value={resolution}
              valueSetter={setResolution}
              cycler={resCycle}
              available={true}
            />
          </tr>
        </tbody>
      </Table>
    </div>
  )
}
