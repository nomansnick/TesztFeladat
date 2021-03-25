import React from "react";
import BrosweMultiIconBox from "./BrowseMultiIconBox";
import BrowseItemBottomLine from "./BrowseItemBottomLine";
import Rating from "react-rating";
import Image from "react-bootstrap/Image";

export default function BrowseOneLower(props) {
  const { oneItemData, resolution, device } = props;

  const screenHeight = resolution.split(" ")[2];
  const thumbnail =
    device === "Pc" && screenHeight > 800
      ? { mt: "-3%", mw: "15vh" }
      : device === "Pc" && screenHeight < 800
      ? { mt: "-4%", mw: "15vh" }
      : device === "Tablet"
      ? { mt: "-5%", mw: "12vh" }
      : { mt: "-10%", mw: "5rem" };

  const rating = {
    color: "yellow",
  };

  const thumbnailFix = {
    maxWidth: thumbnail.mw,
    marginLeft: "10%",
    marginTop: thumbnail.mt,
  };

  return (
    <div className="d-flex flex-column flex-1 w-100 h-100 bg-primary rounded1Rem mt-n3">
      <Image
        className="img-thumbnail z-index-5 border-double"
        src={oneItemData.person.picUrl}
        style={{ ...thumbnailFix }}
        roundedCircle
        variant="left"
      />
      <div className="d-flex flex-column align-items-start w-auto z-index-3 h-100 p-3 ml-3 rounded1Rem pt-3">
        <div className="h-100 w-100 d-flex flex-column justify-content-between">
          <div className="d-flex flex-column justify-content-between">
            <div>{oneItemData.person.name}</div>
            <div className="text-muted">{oneItemData.person.workplace}</div>
            <Rating
              style={{ ...rating }}
              initialRating={oneItemData.person.rating}
              stop={5}
              emptySymbol="fa fa-star-o"
              fullSymbol="fa fa-star"
            />
          </div>
          <div className="d-flex flex-column justify-content-around h-25">
            <div className="font-weight-bold">{oneItemData.name}</div>
            <div className="text-muted">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              {oneItemData.addressString}
            </div>
          </div>
          <BrosweMultiIconBox
            className="d-flex justify-self-center"
            onePlace={oneItemData}
          />
          <div className="w-100">
            <BrowseItemBottomLine onePlace={oneItemData} />
          </div>
        </div>
      </div>
    </div>
  );
}
