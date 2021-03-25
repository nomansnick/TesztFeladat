import React from 'react'
import LinkBack from '../LinkBack'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import useOneItem from '../hook/useOneItem'
import BrowseOneLower from './BrowseOneLower'

export default function BrowseOneItem(props) {
  const { resolution, device } = props
  const { oneItemData } = useOneItem()

  console.log(device)
  console.log(resolution)

  const screenWidth = resolution.split(' ')[0]
  const imageHeight =
    device === 'SmartPhone'
      ? '20rem'
      : device === 'Tablet' && screenWidth > 1000
      ? '30rem'
      : device === 'Tablet' && screenWidth < 1000
      ? '25rem'
      : screenWidth > 1500
      ? '25rem'
      : '25rem'

  const roundedTopImage = {
    borderTopLeftRadius: '1rem',
    borderTopRightRadius: '1rem',
    height: imageHeight,
    backgroundImage: `url(${oneItemData?.picUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  return oneItemData ? (
    <div className="d-flex justify-content-center align-items-stretch h-100 w-100">
      <div className="col-align-self-center pl-0 pr-0 rounded1Rem w-100">
        <div className="d-flex flex-column align-items-center h-100 w-100">
          <div
            className="d-flex w-100 justify-content-between"
            style={roundedTopImage}
          >
            <div className="mt-5 ml-5">
              <LinkBack />
            </div>
            <i
              className="fa fa-heart-o fa-2x mt-5 mr-5 text-dark"
              aria-hidden="true"
            ></i>
          </div>
          <BrowseOneLower
            oneItemData={oneItemData}
            resolution={resolution}
            device={device}
          />
        </div>
      </div>
    </div>
  ) : (
    <div>Loading</div>
  )
}
