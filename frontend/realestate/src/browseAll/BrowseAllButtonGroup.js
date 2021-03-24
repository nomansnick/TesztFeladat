import React from "react";
import ButtonCustom from "../ButtonCustom";

export default function BrowseAllButtonGroup(props) {
  const { activate, activeButton } = props;
  return (
    <div className="d-flex justify-content-center">
      <ButtonCustom
        click={activate}
        className={
          activeButton === "BUY"
            ? "roundedTop orangeBg text-white buttonCustom"
            : "roundedTop text-dark buttonCustom"
        }
        param="BUY"
      >
        BUY
      </ButtonCustom>
      <ButtonCustom
        click={activate}
        className={
          activeButton === "RENT"
            ? "roundedTop orangeBg text-white buttonCustom"
            : "roundedTop text-dark buttonCustom"
        }
        param="RENT"
      >
        RENT
      </ButtonCustom>
    </div>
  );
}
