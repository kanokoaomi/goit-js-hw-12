import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

export const form = document.querySelector('.form');
export const listOfImg = document.querySelector('.gallery');

export const fetchReturn = (inputResult, page) => {
  return axios.get('https://pixabay.com/api/', {
    params: {
      key: '45647419-a95c01b27d6f35f87705f1aeb',
      q: inputResult,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      page: page,
    },
  });
};
