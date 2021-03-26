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
import { Formik, Form } from 'formik'
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
    console.log(activeButton)
    console.log(target)
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
    console.log('kapott')
    console.log(category)
    console.log('aktiv')
    console.log(activeCategory)
    activeCategory === category ? emptyCategory() : filterCategory(category)
  }

  function filterCategory(category) {
    console.log(category)
    let changed = []
    console.log(listed)
    listed ? (changed = [...listed]) : (changed = [...items])
    console.log(changed)
    changed = changed.filter((onePlace) => onePlace.type === category)
    console.log(changed)
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
    coordinates(values.search)
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
      console.log('Something is amiss!')
    }
  }

  function sortList(coords) {
    const changed = [...items]
    changed.forEach((onePlace) => setDistance(onePlace, coords))
    changed.sort((a, b) => (a.distance > b.distance ? 1 : -1))
    console.log(listed)
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

  const routes = [
    { label: 'Browse', route: '/', icon: 'fa fa-search' },
    { label: 'Connections', route: '/connections', icon: 'fa fa-comment-o' },
    { label: 'Save', route: '/save', icon: 'fa fa-heart-o' },
    { label: 'Notifications', route: '/notifications', icon: 'fa fa-bell-o' },
  ]

  const initialValues = {
    search: '',
  }

  return items ? (
    <div className="h-100">
      <div className="d-flex justify-content-center align-items-stretch h-100 marginBottomCust">
        <div className="d-flex flex-column justify-content-between col-12 rounded1Rem bg-primary h-100 pt-3 pb-5">
          <BrowseAllTitle title={title} />
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => searchLocation(values)}
          >
            <Form>
              <SearchWithIcon
                name="search"
                placeholder="&#xF002;  Where do you want to live?"
                label="location"
                type="text"
              />
            </Form>
          </Formik>
          <BrowseAllButtonGroup
            activate={activate}
            activeButton={activeButton}
          />
          <div>
            <SliderCustom
              title="Categories"
              items={categories}
              toShow={2.2}
              type="fixed"
              resolution={resolution}
              device={device}
              clicked={activateCategory}
              link={false}
            />
          </div>
          <div>
            <SliderCustom
              title="Nearby"
              items={listed ? listed : items}
              toShow={1.2}
              type="toLoad"
              resolution={resolution}
              device={device}
              link={true}
            />
          </div>
        </div>
      </div>
      <NavBottom routes={routes} />
    </div>
  ) : (
    <div>Loading...</div>
  )
}
