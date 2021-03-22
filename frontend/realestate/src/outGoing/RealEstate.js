import axios from "axios";

const api = axios.create({
  baseURL: `/api/`,
});

async function getItems() {
  try {
    return await api.get(`/realestates/`);
  } catch (error) {
    console.log("PICSABA");
  }
}

async function getOneItem(id) {
  try {
    return await api.get(`/realestate/${id}`);
  } catch (error) {
    console.log("PICSABA2");
  }
}

export { getItems, getOneItem };
