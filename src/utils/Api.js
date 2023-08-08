const BASE_URL = "https://cloud-api.yandex.net/v1/disk/public/resources?";
const params = {
  public_key: "https://disk.yandex.ru/d/wZNmHiZTHgpR3Q",
  path:'/photo/2',
  offset: 0,
  limit: 10,
  fields: ['_embedded']
}

const searchParams = new URLSearchParams(params).toString();

export function getPhotoCard() {
  const url = BASE_URL + searchParams;
  return fetch(`${url}`, {
    method: "GET",
    headers: {"Content-Type": "application/json"},
  }).then((res) => {
    return res.ok
      ? res.json()
      : Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
  });
}

