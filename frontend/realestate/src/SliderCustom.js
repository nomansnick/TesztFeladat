import React from "react";
import Slider from "react-slick";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import "./style.css";

export default function SliderCustom(props) {
  const { title, items, toShow, type, widthSet } = props;
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: toShow,
    slidesToScroll: 1,
    arrows: false,
  };
  return type === "fixed" || items ? (
    <div>
      <Card.Title className="font-weight-bold mt-2">{title}</Card.Title>
      <Slider {...settings}>
        {items.map((oneItem) => (
          <div className="slickImgContainer">
            <Image
              className="z-index-5"
              src={oneItem.picUrl}
              style={{
                borderRadius: "1rem",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <div className="ml-3 text-white">{oneItem.category}</div>
          </div>
        ))}
      </Slider>
    </div>
  ) : (
    <div>Loading</div>
  );
}
