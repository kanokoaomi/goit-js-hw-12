import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchReturn, listOfImg, form } from './js/pixabay-api';
import { createGallery } from './js/render-functions';

const loadMoreBtn = document.querySelector('.load-more-btn');
let currentPage = 1;
const postPerPage = 15;
let postsNumberQuantity = 0;

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

function smoothScroll() {
  const { height: cardHeight } = document
    .querySelector('.gallery')
    .firstElementChild.getBoundingClientRect();
  const height = cardHeight * 2;
  window.scrollBy({
    top: height,
    behavior: 'smooth',
  });
}

const renderImages = async event => {
  event.preventDefault();
  const inputResult = form.elements.user_search.value.trim();
  currentPage = 1;

  if (inputResult === '') {
    iziToast.show({
      message: 'Please enter a search query!',
    });
    return;
  }

  listOfImg.innerHTML = '';

  showLoader();
  try {
    const response = await fetchReturn(inputResult, currentPage);
    if (response.data.hits.length === 0) {
      iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    } else {
      const galleryCreating = response.data.hits
        .map(imgInfo => createGallery(imgInfo))
        .join('');
      listOfImg.innerHTML = galleryCreating;
      lightbox.refresh();
      hideLoader();
      loadMoreBtn.classList.remove('is-hidden');
    }
  } catch (err) {
    hideLoader();
    iziToast.show({
      message: 'Sorry, there is an issue. Please try again!',
    });
    form.reset();
    console.log(err);
  }
};

const loader = document.querySelector('.loader');
const showLoader = () => {
  loader.style.display = 'block';
};
const hideLoader = () => {
  loader.style.display = 'none';
};

form.addEventListener('submit', renderImages);

const loadMoreListener = async event => {
  try {
    currentPage++;
    const inputResult = form.elements.user_search.value.trim();
    const response = await fetchReturn(inputResult, currentPage);

    const galleryCreating = response.data.hits
      .map(imgInfo => createGallery(imgInfo))
      .join('');
    listOfImg.insertAdjacentHTML('beforeend', galleryCreating);
    lightbox.refresh();
    smoothScroll();

    postsNumberQuantity += postPerPage;

    if (postsNumberQuantity >= response.data.totalHits) {
      iziToast.show({
        message: "We're sorry, but you've reached the end of search results.",
      });
      loadMoreBtn.classList.add('is-hidden');
    }
  } catch (error) {
    console.log(error);
  }
};

loadMoreBtn.addEventListener('click', loadMoreListener);
