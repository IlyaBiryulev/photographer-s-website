const BASE_URL = "https://cloud-api.yandex.net/v1/disk/public/resources?";
const PUBLIC_KEY = 'https://disk.yandex.ru/d/wZNmHiZTHgpR3Q'

const cardParams = {
  public_key: PUBLIC_KEY,
  path: '/photo/test',
  fields: ['_embedded']
}

const folderParams = {
  public_key: "https://disk.yandex.ru/d/wZNmHiZTHgpR3Q",
  path: '/photo',
  offset: 0,
  limit: 6,
  fields: ['_embedded']
}

const cParams = new URLSearchParams(cardParams).toString();
const fParams = new URLSearchParams(folderParams).toString();

export function getPhotoCard() {
  const url = BASE_URL + cParams;
  return fetch(`${url}`, {
    method: "GET",
    headers: {"Content-Type": "application/json"},
  }).then((res) => {
    return res.ok
      ? res.json()
      : Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
  });
}

export function getFolder() {
  const url = BASE_URL + fParams;
  return fetch(`${url}`, {
    method: "GET",
    headers: {"Content-Type": "application/json"},
  }).then((res) => {
    return res.ok
      ? res.json()
      : Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
  });
}

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
