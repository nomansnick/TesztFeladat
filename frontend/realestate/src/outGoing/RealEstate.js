import axios from 'axios'

const api = axios.create({
  baseURL: `/api/`,
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

async function getCoords(access_key, query) {
  try {
    return await axios.get(
      `http://api.positionstack.com/v1/forward?access_key=${access_key}&query=${query}`
    )
  } catch (error) {
    console.log('errorCoord')
  }
}

export { getItems, getOneItem, getContacts, getCoords }
