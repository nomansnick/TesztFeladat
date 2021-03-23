import React from "react";
import Image from "react-bootstrap/Image";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import useOneItem from "./hook/useOneItem";
import BrowseOneLower from "./BrowseOneLower";

const roundedTopImage = {
  borderTopLeftRadius: "1rem",
  borderTopRightRadius: "1rem",
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

export default function BrowseOneItem() {
  const { oneItemData } = useOneItem();

  console.log(oneItemData);

  return oneItemData ? (
    <div className="d-flex justify-content-center align-items-stretch h-100 w-100">
      <div className="col-xs-12 col-md-8 col-align-self-center pl-0 pr-0 rounded1Rem">
        <div className="d-flex flex-column align-items-center h-100">
          <div className="d-flex flex-1 h-100 mb-n3">
            <Image style={{ ...roundedTopImage }} src={oneItemData.picUrl} />
          </div>
          <BrowseOneLower oneItemData={oneItemData} />
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
