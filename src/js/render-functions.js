import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function createGallery(pictureInfo) {
  return `
    <li class="gallery-item">
      <a class="gallery-link" href="${pictureInfo.largeImageURL}">
        <img 
        class="gallery-image"
        src="${pictureInfo.webformatURL}"
        data-source="${pictureInfo.largeImageURL}"
        alt="${pictureInfo.tags}" 
        />
        <ul class="picture-data">
      <li class="picture-data-item"><p class="picture-data-item-text"><b>Likes:</b><span class="picture-data-item-span">${pictureInfo.likes}</span></p></li>
      <li class="picture-data-item"><p class="picture-data-item-text"><b>Views:</b><span class="picture-data-item-span">${pictureInfo.views}</span></p></li>
      <li class="picture-data-item"><p class="picture-data-item-text"><b>Comments:</b><span class="picture-data-item-span">${pictureInfo.comments}</span></p></li>
      <li class="picture-data-item"><p class="picture-data-item-text"><b>Downloads:</b><span class="picture-data-item-span">${pictureInfo.downloads}</span></p></li>
      </ul>
      </a>
    </li>
    `;
}

export const lightbox = new simpleLightbox('.gallery-item a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

export const listOfImg = document.querySelector('.gallery');
