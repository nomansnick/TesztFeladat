import React from 'react'
import Slider from 'react-slick'
import Image from 'react-bootstrap/Image'
import '../style.css'

export default function SliderCustom(props) {
  const { title, items, toShow, type, widthSet } = props
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: toShow,
    slidesToScroll: 1,
    arrows: false,
  }
  return type === 'fixed' || items ? (
    <div>
      <h3 className="font-weight-bold pb-3">{title}</h3>
      <Slider {...settings}>
        {items.map((oneItem) => (
          <div className="slickImgContainer">
            <Image
              className="z-index-5 mb-n4"
              src={oneItem.picUrl}
              style={{
                borderRadius: '1rem',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            <div className="ml-3 text-white">{oneItem.category}</div>
          </div>
        ))}
      </Slider>
    </div>
  ) : (
    <div>Loading</div>
  )
}
