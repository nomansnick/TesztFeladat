import axios from "axios";

const api = axios.create({
  baseURL: `/api/`,
});

async function getItems() {
  try {
    return await api.get(`/realestates/`);
  } catch (error) {
    console.log("error");
  }
}

async function getContacts() {
  try {
    return await api.get(`/realestates/`);
  } catch (error) {
    console.log("error");
  }
}

async function getOneItem(id) {
  try {
    return await api.get(`/realestate/${id}`);
  } catch (error) {
    console.log("error");
  }
}

export { getItems, getOneItem, getContacts };
