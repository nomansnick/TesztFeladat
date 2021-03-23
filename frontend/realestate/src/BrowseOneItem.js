import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Rating from "react-rating";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import BrosweMultiIconBox from "./BrowseMultiIconBox";
import BrowseItemBottomLine from "./BrowseItemBottomLine";
import useOneItem from "./hook/useOneItem";

const roundedTopImage = {
  borderTopLeftRadius: "1rem",
  borderTopRightRadius: "1rem",
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const oneRemRadius = {
  borderRadius: "1rem",
};

const rating = {
  color: "yellow",
  marginBottom: "2%",
};

const thumbnailFix = {
  maxWidth: "8rem",
  marginLeft: "10%",
  marginTop: "-20%",
  marginBottom: "-25%",
  position: "relative",
};

export default function BrowseOneItem() {
  const { oneItemData } = useOneItem();

  console.log(oneItemData);

  return oneItemData ? (
    <div className="d-flex justify-content-center align-items-stretch h-100">
      <div
        className="col-xs-12 col-md-8 col-align-self-center pl-0 pr-0 h-auto"
        style={{ ...oneRemRadius }}
      >
        <div className="d-flex flex-column align-items-center h-100">
          <div className="w-100 h-100 mb-n5">
            <Image style={{ ...roundedTopImage }} src={oneItemData.picUrl} />
          </div>
          <div className="w-100 h-100">
            <Image
              className="img-thumbnail z-index-5"
              src={oneItemData.person.picUrl}
              style={{ ...thumbnailFix }}
              roundedCircle
              variant="left"
            />
            <Card.Body
              className="d-flex flex-column align-items-start w-auto bg-white z-index-3 h-100"
              style={{ ...oneRemRadius }}
            >
              <div className="h-100 w-100 d-flex flex-column justify-content-around">
                <Card.Text style={{ marginTop: "10%" }}>
                  {oneItemData.person.name}
                </Card.Text>
                <Card.Subtitle className="mb-2 text-muted">
                  {oneItemData.person.workplace}
                </Card.Subtitle>
                <Rating
                  style={{ ...rating }}
                  initialRating={oneItemData.person.rating}
                  stop={5}
                  emptySymbol="fa fa-star-o"
                  fullSymbol="fa fa-star"
                />
                <Card.Title className="font-weight-bold">
                  {oneItemData.name}
                </Card.Title>
                <Card.Text>
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  {oneItemData.addressString}
                </Card.Text>
                <BrosweMultiIconBox
                  className="d-flex justify-self-center"
                  onePlace={oneItemData}
                />
                <div className="w-100">
                  <BrowseItemBottomLine onePlace={oneItemData} />
                </div>
              </div>
            </Card.Body>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>Loading</div>
  );
}

/*
<Card.Link href="#">Card Link</Card.Link>
*/
