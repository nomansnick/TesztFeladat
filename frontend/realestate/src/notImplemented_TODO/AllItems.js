import React from 'react'
import { Image } from 'react-bootstrap'
import LinkBack from '../LinkBack'
import useManyItems from '../hook/useManyItems'

export default function AllItems() {
  const style = {
    maxWidth: '12rem',
    maxHeight: '12rem',
  }
  const { items } = useManyItems()
  return items ? (
    <div className="bg-white h-100 w-100 overflow-auto">
      <div>NOT IMPLEMENTED!!!</div>
      <LinkBack />
      <div className="d-flex flex-wrap justify-content-around h-100">
        {items.map((oneItem) => (
          <div key={oneItem.id}>
            <Image style={{ ...style }} src={oneItem.picUrl} />
            <div className="mt-n4">{oneItem.name}</div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div>Loading... Not Implemented!!!</div>
  )
}
