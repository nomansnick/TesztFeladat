import React from 'react'
import ButtonCustom from '../ButtonCustom'

export default function OneCell(props) {
  const { label, valueSetter, cycler, value, available } = props
  const classBase = 'btn border border border-secondary dark settingButton'
  return (
    <td className="borderNone">
      <ButtonCustom
        className={
          available
            ? classBase.concat(' bg-white')
            : classBase.concat(' orangeBg')
        }
        click={valueSetter}
        param={cycler}
      >
        <div className="text-muted">{label}</div>
        <div className={available ? 'text-dark' : 'text-white'}>{value}</div>
      </ButtonCustom>
    </td>
  )
}
