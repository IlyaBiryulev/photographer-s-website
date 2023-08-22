const BASE_URL = "https://cloud-api.yandex.net/v1/disk/public/resources?";
const PUBLIC_KEY = 'https://disk.yandex.ru/d/wZNmHiZTHgpR3Q';

const initialPhoto = {
  desktop: {
    photo: 8,
    more: 4,
  },
  pad: {
    photo: 6,
    more: 3,
  },
  mobile: {
    photo: 4,
    more: 2,
  }
};

const desktopScreenWidth = 1280;
const padScreenWidth = 768;
const mobileScreenWidth = 320;


export {
  BASE_URL,
  PUBLIC_KEY,
  initialPhoto,
  desktopScreenWidth,
  padScreenWidth,
  mobileScreenWidth
}
