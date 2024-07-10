// Opisany w dokumentacji
import SimpleLightbox from 'simplelightbox';
// Dodatkowy import stylów
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';

const ulGallery = document.querySelector('.gallery');

const arrayDiv = galleryItems.map(item => {
  const aImage = document.createElement('a');
  aImage.setAttribute('class', 'gallery__item gallery_link');
  aImage.href = item.original;
  const image = document.createElement('img');
  image.setAttribute('class', 'gallery__image');
  image.src = item.preview;
  image.alt = item.description;
  aImage.append(image);
  return aImage;
});
ulGallery.append(...arrayDiv);

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
