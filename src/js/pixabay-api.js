import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export const form = document.querySelector('.form');
export const listOfImg = document.querySelector('.gallery');

export const fetchReturn = inputResult => {
  return fetch(
    `https://pixabay.com/api/?key=45647419-a95c01b27d6f35f87705f1aeb&q=${inputResult}&image_type=photo&orientation=horizontal&safesearch=true`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
