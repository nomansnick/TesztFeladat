import React from 'react'
import Slider from 'react-slick'
import Image from 'react-bootstrap/Image'
import '../style.css'
import useOneItem from '../hook/useOneItem'

export default function SliderCustom(props) {
  const { title, items, toShow, type, device, resolution } = props
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: toShow,
    slidesToScroll: 1,
    arrows: false,
  }

  return type === 'fixed' || items ? (
    <div className="d-flex flex-column h-100">
      <h3 className="font-weight-bold pb-3">{title}</h3>
      <Slider {...settings}>
        {items.map((oneItem) => (
          <div
            key={oneItem.id}
            className={
              device === 'SmartPhone'
                ? 'slickImgContainer'
                : resolution.split(' ')[2] < 800
                ? 'slickImgContainerMed'
                : 'slickImgContainerLarge'
            }
          >
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
