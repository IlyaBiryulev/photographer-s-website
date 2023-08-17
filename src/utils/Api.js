import axios from "axios";

const BASE_URL = "https://cloud-api.yandex.net/v1/disk/public/resources?";
const PUBLIC_KEY = 'https://disk.yandex.ru/d/wZNmHiZTHgpR3Q';

export async function getPhotoCards(path) {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        public_key: PUBLIC_KEY,
        path: `${path}`,
        limit: 17,
        fields: ['_embedded']
      }
    });
    return response
  } catch (error) {
    console.error(error);
  }
}

export async function getFolder(limit, page) {
  try {
    const responce = await axios.get(`${BASE_URL}`, {
      params: {
        public_key: PUBLIC_KEY,
        path: '/photo',
        offset: 0,
        limit: limit,
        page: page,
        fields: ['_embedded']
      }
    })
    return responce;
  } catch (error) {
    console.error(error);
  }
}
