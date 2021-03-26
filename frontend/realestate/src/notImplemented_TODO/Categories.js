import React from 'react'
import { Image } from 'react-bootstrap'
import CATEGORIES from '../assets/images/ImageUrlCollection'
import LinkBack from '../LinkBack'

export default function Categories() {
  const style = {
    maxWidth: '12rem',
    maxHeight: '12rem',
  }
  return (
    <div className="bg-white h-100 w-100 overflow-auto">
      <div>NOT IMPLEMENTED!!!</div>
      <LinkBack />
      <div className="d-flex flex-wrap justify-content-around h-100">
        {CATEGORIES.map((oneCategory) => (
          <div key={oneCategory.id}>
            <Image style={{ ...style }} src={oneCategory.picUrl} />
            <div className="mt-n3">{oneCategory.category}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
