import React from "react";
import "./style.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCustom from "./SliderCustom";
import CATEGORIES from "./assets/images/ImageUrlCollection";
import useManyItems from "./hook/useManyItems";
import NavBottom from "./NavBottom";
import BrowseAllTitle from "./BrowseAllTitle";
import BrowseAllSearchWithIcon from "./BrowseAllSearchWithIcon";
import BrowseAllButtonGroup from "./BrowseAllButtonGroup";

export default function BrowseAll(props) {
  const { title } = props;
  const [activeButton, setActiveButton] = useState(" ");
  const [categories, setCategories] = useState(CATEGORIES);

  const { items } = useManyItems();

  function activate(target) {
    setActiveButton(target);
  }

  const routes = [
    { label: "Browse", route: "/" },
    { label: "Connections", route: "/connections" },
    { label: "Save", route: "/save" },
    { label: "Notifications", route: "/notifications" },
  ];

  return (
    <div className="p-3 d-flex justify-content-center align-items-stretch h-100">
      <div className="d-flex flex-column justify-content-between col-xs-12 col-md-6 rounded1Rem bg-primary h-100 pt-3 pb-3">
        <BrowseAllTitle title={title} />
        <div>
          <BrowseAllSearchWithIcon />
        </div>
        <BrowseAllButtonGroup activate={activate} activeButton={activeButton} />
        <div>
          <SliderCustom
            title="Categories"
            items={categories}
            toShow={2.2}
            type="fixed"
            widthSet="1rem"
          />
        </div>
        <div>
          <SliderCustom
            title="Nearby"
            items={items}
            toShow={1.2}
            type="toLoad"
            widthSet="1rem"
          />
        </div>
        <NavBottom routes={routes} />
      </div>
    </div>
  );
}
