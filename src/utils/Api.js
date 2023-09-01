import axios from "axios";
import { BASE_URL, PUBLIC_KEY } from "./constants";

export async function getPhotoCards(path) {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        public_key: PUBLIC_KEY,
        path: `${path}`,
        fields: ['_embedded']
      }
    });
    return response
  } catch (error) {
    console.error(error);
  }
}

export async function getFolder() {
  try {
    const responce = await axios.get(`${BASE_URL}`, {
      params: {
        public_key: PUBLIC_KEY,
        path: '/photo',
        fields: ['_embedded']
      }
    })
    return responce;
  } catch (error) {
    console.error(error);
  }
}

export async function getPhotosById(id) {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        public_key: PUBLIC_KEY,
        path: `/photo/${id}`,
        fields: ['_embedded']
      }
    });
    return response
  } catch (error) {
    console.error(error);
  }
}

