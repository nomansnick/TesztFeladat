import React from 'react'
import Slider from 'react-slick'
import Image from 'react-bootstrap/Image'
import '../style.css'
import { Link } from 'react-router-dom'
import LinkForth from '../LinkForth'

export default function SliderCustom(props) {
  const {
    title,
    items,
    toShow,
    type,
    device,
    resolution,
    clicked,
    link,
    linkAll,
  } = props
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
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="font-weight-bold">{title}</h3>
        <div className="w-25">
          <LinkForth linkTo={linkAll} text="See All" />
        </div>
      </div>
      <Slider {...settings}>
        {items.map((oneItem) => (
          <div
            key={oneItem.id}
            className={
              device === 'SmartPhone'
                ? 'slickImgContainer pr-3'
                : resolution.split(' ')[2] < 800
                ? 'slickImgContainerMed pr-3'
                : 'slickImgContainerLarge pr-3'
            }
          >
            {!link ? (
              <Image
                onClick={() => clicked(oneItem.category)}
                className="z-index-5 mb-n4"
                src={oneItem.picUrl}
                style={{
                  borderRadius: '1rem',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            ) : (
              <Link to={`/browse/${oneItem.id}`}>
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
              </Link>
            )}
            <div className="ml-3 text-white">{oneItem.category}</div>
          </div>
        ))}
      </Slider>
    </div>
  ) : (
    <div>Loading</div>
  )
}
