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
import SearchWithIcon from "./SearchWithIcon";
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
    { label: "Browse", route: "/", icon: "fa fa-search" },
    { label: "Connections", route: "/connections", icon: "fa fa-comment-o" },
    { label: "Save", route: "/save", icon: "fa fa-heart-o" },
    { label: "Notifications", route: "/notifications", icon: "fa fa-bell-o" },
  ];

  return (
    <div className="h-100">
      <div className="d-flex justify-content-center align-items-stretch h-100 marginBottomCust">
        <div className="d-flex flex-column justify-content-between col-xs-12 col-md-6 rounded1Rem bg-primary h-100 pt-3 pb-5">
          <BrowseAllTitle title={title} />
          <div>
            <SearchWithIcon
              placeHolder="&#xF002;  Where do you want to live?"
              label="location"
            />
          </div>
          <BrowseAllButtonGroup
            activate={activate}
            activeButton={activeButton}
          />
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
        </div>
      </div>
      <NavBottom className="mt-n5" routes={routes} />
    </div>
  );
}
