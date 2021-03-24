import React from "react";
import ButtonCustom from "../ButtonCustom";

export default function BrowseAllButtonGroup(props) {
  const { activate, activeButton } = props;
  return (
    <div className="d-flex justify-content-center">
      <ButtonCustom
        activate={activate}
        className={
          activeButton === "BUY"
            ? "roundedTop orangeBg text-white buttonCustom"
            : "roundedTop text-dark buttonCustom"
        }
        text="BUY"
      />
      <ButtonCustom
        activate={activate}
        className={
          activeButton === "RENT"
            ? "roundedTop orangeBg text-white buttonCustom"
            : "roundedTop text-dark buttonCustom"
        }
        text="RENT"
      />
    </div>
  );
}
