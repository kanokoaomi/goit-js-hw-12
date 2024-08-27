import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchReturn, listOfImg, form } from './js/pixabay-api';
import { createGallery, lightbox } from './js/render-functions';

const onFormElement = event => {
  event.preventDefault();
  const inputResult = form.elements.user_search.value.trim();

  listOfImg.innerHTML = '';

  showLoader();

  fetchReturn(inputResult)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        const galleryCreating = data.hits
          .map(imgInfo => createGallery(imgInfo))
          .join('');
        listOfImg.innerHTML = galleryCreating;
        lightbox.refresh();
      }
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      hideLoader();
    });

  form.reset();
};

const loader = document.querySelector('.loader');
const showLoader = () => {
  loader.style.display = 'block';
};
const hideLoader = () => {
  loader.style.display = 'none';
};

form.addEventListener('submit', onFormElement);

listOfImg.addEventListener('click', event => {
  if (event.target.classList.contains('gallery-image')) {
    event.preventDefault();
    lightbox.open();
  }
});
