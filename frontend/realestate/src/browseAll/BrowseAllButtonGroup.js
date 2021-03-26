import React from 'react'
import ButtonCustom from '../ButtonCustom'

export default function BrowseAllButtonGroup(props) {
  const { activate, activeButton } = props
  return (
    <div className="d-flex justify-content-center">
      <ButtonCustom
        click={activate}
        className={
          activeButton === 'BUY'
            ? 'roundedTop buttonHeight orangeBg text-white shadow-none btn-outline-light buttonCustom border-0'
            : 'roundedTop text-dark buttonCustom bg-light shadow-none btn-outline-light border-0'
        }
        param="BUY"
      >
        BUY
      </ButtonCustom>
      <ButtonCustom
        click={activate}
        className={
          activeButton === 'RENT'
            ? 'roundedTop buttonHeight orangeBg text-white buttonCustom shadow-none btn-outline-light border-0'
            : 'roundedTop text-dark buttonCustom bg-light shadow-none btn-outline-light border-0'
        }
        param="RENT"
      >
        RENT
      </ButtonCustom>
    </div>
  )
}
