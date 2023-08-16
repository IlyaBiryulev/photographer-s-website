/* import axios from "axios"; */

import axios from "axios";

const BASE_URL = "https://cloud-api.yandex.net/v1/disk/public/resources?";
const PUBLIC_KEY = 'https://disk.yandex.ru/d/wZNmHiZTHgpR3Q';

export async function getPhotoCards(paths) {
  const responseArray = [];

  for (const path of paths) {
    try {
      const response = await axios.get(`${BASE_URL}`, {
        params: {
          public_key: PUBLIC_KEY,
          path: path,
          fields: ['_embedded']
        }
      });

      responseArray.push(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return responseArray;
}

export async function getFolder(page = 1) {
  const responce = await axios.get(`${BASE_URL}`, {
    params: {
      public_key: PUBLIC_KEY,
      path: '/photo',
      offset: 0,
      /* limit: limit, */
      page: page,
      fields: ['_embedded']
    }
  })
  return responce;
}

/* export function getPhotoCard() {
  const url = BASE_URL + cParams;
  return fetch(`${BASE_URL}`, {
    method: "GET",
    headers: {"Content-Type": "application/json"},
    params: {
      public_key: PUBLIC_KEY,
      path: '/photo/testtwo',
      fields: ['_embedded']
    }
  }).then((res) => {
    return res.ok
      ? res.json()
      : Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
  });
}

export function getFolder() {
  const url = BASE_URL + fParams;
  return fetch(`${BASE_URL}`, {
    method: "GET",
    headers: {"Content-Type": "application/json"},
  }).then((res) => {
    return res.ok
      ? res.json()
      : Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
  });
} */

/* const makeRequest = (path, method, params, body) => {
  const headers = { "Content-Type": "application/json" };
  const config = { method, headers };
  if (body !== undefined) {
    config.body = JSON.stringify(body);
  }
  return fetch(`${BASE_URL + params + path}`, config).then((res) => {
    return res.ok
      ? res.json()
      : Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
  });
};

export function getFolder() {
  return makeRequest( 'path=/photo', 'GET', fParams);
}

export function getPhotoCard(name) {
  return makeRequest(`&path=%2Fphoto%2F${name}`, 'GET', cParams);
}
 */
