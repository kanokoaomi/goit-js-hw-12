const form = document.querySelector('.form');
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const onFormElement = event => {
  event.preventDefault();
  const inputResult = form.elements.user_search.value.trim();
  fetch(
    `https://pixabay.com/api/?key=45647419-a95c01b27d6f35f87705f1aeb&q=${inputResult}&image_type=photo&orientation=horizontal&safesearch=true`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        console.log(createGallery(data.results));
      }
    })
    .catch(err => {
      console.log(err);
    });

  form.reset();
};

const listOfImg = document.querySelector('.gallery');

function createGallery(pictureInfo) {
  return `
    <li class="gallery-item">
      <a class="gallery-link" href="${pictureInfo.largeImageURL}">
        <img 
        class="gallery-image"
        src="${pictureInfo.webformatURL}"
        data-source="${pictureInfo.largeImageURL}"
        alt="${pictureInfo.tags}" 
        />
      </a>
    </li>
    `;
}

form.addEventListener('submit', onFormElement);
