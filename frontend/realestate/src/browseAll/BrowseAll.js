import React from 'react'
import '../style.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import { useState } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import SliderCustom from './SliderCustom'
import CATEGORIES from '../assets/images/ImageUrlCollection'
import useManyItems from '../hook/useManyItems'
import NavBottom from './NavBottom'
import BrowseAllTitle from './BrowseAllTitle'
import SearchWithIcon from '../SearchWithIcon'
import BrowseAllButtonGroup from './BrowseAllButtonGroup'
import { getCoords } from '../outGoing/RealEstate'

export default function BrowseAll(props) {
  const { title, resolution, device } = props
  const [activeButton, setActiveButton] = useState(' ')
  const [categories, setCategories] = useState(CATEGORIES)
  const [isSortedDistance, setIsSortedDistance] = useState(false)
  const [lastAddress, setLastAddress] = useState(' ')
  const [isSortedCategory, setIsSortedCategory] = useState(false)
  const [activeCategory, setActiveCategory] = useState(' ')
  const { items } = useManyItems()
  const [listed, setListed] = useState(items)

  function activate(target) {
    activeButton === target ? emptyTypeFilter() : activateTypeFilter(target)
  }

  function emptyTypeFilter() {
    setActiveButton(' ')
    !isSortedDistance && !isSortedCategory
      ? setListed(items)
      : isSortedCategory && !isSortedDistance
      ? filterCategory(activeCategory)
      : !isSortedCategory && isSortedDistance
      ? coordinates(lastAddress)
      : setCategoryAndDistance()
  }

  function setCategoryAndDistance() {
    coordinates(lastAddress)
    filterCategory(activeCategory)
  }

  function activateTypeFilter(target) {
    setActiveButton(target)
    let changed = []
    listed ? (changed = [...listed]) : (changed = [...items])
    target === 'BUY'
      ? (changed = changed.filter((onePlace) => onePlace.isForSale))
      : (changed = changed.filter((onePlace) => !onePlace.isForSale))
    setListed(changed)
  }

  function activateCategory(category) {
    activeCategory === category ? emptyCategory() : filterCategory(category)
  }

  function filterCategory(category) {
    let changed = []
    listed ? (changed = [...listed]) : (changed = [...items])
    changed = changed.filter((onePlace) => onePlace.type === category)
    setListed(changed)
    setActiveCategory(category)
    setIsSortedCategory(true)
  }

  function emptyCategory() {
    setActiveCategory(' ')
    setIsSortedCategory(false)
    !isSortedDistance && activeButton !== 'BUY' && activeButton !== 'RENT'
      ? setListed(items)
      : !isSortedDistance && (activeButton === 'BUY' || activeButton === 'RENT')
      ? activateTypeFilter(activeButton)
      : isSortedDistance && activeButton !== 'BUY' && activeButton !== 'RENT'
      ? coordinates(lastAddress)
      : setTypeAndDistance()
  }

  function setTypeAndDistance() {
    coordinates(lastAddress)
    activateTypeFilter(activeButton)
  }

  function searchLocation(values) {
    coordinates(values)
  }

  async function coordinates(address) {
    const access_key = 'cfbb81329857df19e3ec733b22ab7a86'
    const query = address
    try {
      const response = await getCoords(access_key, query)
      const coords = {
        latitude: response.data.data[0].latitude,
        longitude: response.data.data[0].longitude,
      }
      setLastAddress(address)
      sortList(coords)
    } catch (error) {
      console.log('CoordsNotWorking!')
    }
  }

  function sortList(coords) {
    const changed = [...items]
    changed.forEach((onePlace) => setDistance(onePlace, coords))
    changed.sort((a, b) => (a.distance > b.distance ? 1 : -1))
    setListed(changed)
    setIsSortedDistance(true)
  }

  function setDistance(onePlace, coords) {
    const latDistance = onePlace.address.latitude - coords.latitude
    const longDistance = onePlace.address.longitude - coords.longitude
    onePlace.distance = Math.sqrt(
      Math.pow(latDistance, 2) + Math.pow(longDistance, 2)
    )
  }

  let classBase =
    'd-flex flex-column justify-content-between col-12 rounded1Rem bg-white h-100 pb-5'

  const Phone = ' pt-3'
  const Tablet = ' pt-4 pr-4 pl-4'
  const Pc = ' pt-5 pr-5 pl-5'

  return items ? (
    <div className="h-100">
      <div className="d-flex justify-content-center align-items-stretch h-100 marginBottomCust">
        <div
          className={
            device === 'SmartPhone'
              ? classBase.concat(Phone)
              : device === 'Tablet'
              ? classBase.concat(Tablet)
              : classBase.concat(Pc)
          }
        >
          <BrowseAllTitle title={title} />
          <SearchWithIcon
            onchange={searchLocation}
            name="search"
            placeholder="&#xF002;  Where do you want to live?"
            label="location"
            type="text"
          />
          <BrowseAllButtonGroup
            activate={activate}
            activeButton={activeButton}
          />
          <div className="mt-3">
            <SliderCustom
              title="Categories"
              items={categories}
              toShow={2.2}
              type="fixed"
              resolution={resolution}
              device={device}
              clicked={activateCategory}
              link={false}
              linkAll="/categories"
            />
          </div>
          <div className="mt-3">
            <SliderCustom
              title="Nearby"
              items={listed ? listed : items}
              toShow={1.2}
              type="toLoad"
              resolution={resolution}
              device={device}
              link={true}
              linkAll="/all"
            />
          </div>
        </div>
      </div>
      <NavBottom />
    </div>
  ) : (
    <div>Loading...</div>
  )
}
