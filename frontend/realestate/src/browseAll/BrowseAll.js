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

  const { items } = useManyItems()
  const listed = items

  function activate(target) {
    setActiveButton(target)
  }

  function searchLocation(values) {
    console.log('hely')
    console.log(values)
  }

  async function coordinates(address) {
    const response = await getCoords(address)
    const coords = {
      latitude: response.data.results.latitude,
      longitude: response.data.results.longitude,
    }
    sortList(coords)
  }

  function sortList(coords) {
    listed.forEach((onePlace) => setDistance(onePlace, coords))
    listed.sort((a, b) => (a.distance > b.distance ? 1 : -1))
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

  return listed ? (
    <div className="h-100">
      <div className="d-flex justify-content-center align-items-stretch h-100 marginBottomCust">
        <div className="d-flex flex-column justify-content-between col-12 rounded1Rem bg-primary h-100 pt-3 pb-5">
          <BrowseAllTitle title={title} />
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => console.log(values)}
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
            />
          </div>
          <div>
            <SliderCustom
              title="Nearby"
              items={listed}
              toShow={1.2}
              type="toLoad"
              resolution={resolution}
              device={device}
            />
          </div>
        </div>
      </div>
      <NavBottom className="mt-n5" routes={routes} />
    </div>
  ) : (
    <div>Loading...</div>
  )
}
