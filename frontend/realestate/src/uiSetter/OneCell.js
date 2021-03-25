import React from 'react'
import ButtonCustom from '../ButtonCustom'

export default function OneCell(props) {
  const { label, valueSetter, cycler, value } = props
  return (
    <td>
      <ButtonCustom
        className="btn border border border-secondary settingButton"
        click={valueSetter}
        param={cycler}
      >
        <div className="text-muted">{label}</div>
        <div>{value}</div>
      </ButtonCustom>
    </td>
  )
}
