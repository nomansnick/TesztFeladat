import axios from 'axios'

const api = axios.create({
  baseURL: `/api/`,
})

const coordApi = axios.create({
  baseURL: `/api.positionstack.com/`,
})

async function getItems() {
  try {
    return await api.get(`/realestates/`)
  } catch (error) {
    console.log('error')
  }
}

async function getContacts() {
  try {
    return await api.get(`/realestates/`)
  } catch (error) {
    console.log('error')
  }
}

async function getOneItem(id) {
  try {
    return await api.get(`/realestate/${id}`)
  } catch (error) {
    console.log('error')
  }
}

async function getCoords(address) {
  try {
    return await coordApi.get(
      `/v1/forward?key=cfbb81329857df19e3ec733b22ab7a86&query=${address}`
    )
  } catch (error) {
    console.log('errorCoord')
  }
}

export { getItems, getOneItem, getContacts, getCoords }
