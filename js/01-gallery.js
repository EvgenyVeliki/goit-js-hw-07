import { galleryItems } from './gallery-items.js';
// Change code below this line




const boxGalleryItems = document.querySelector('.gallery')

const listItemsMarkup = createListItemMarkup(galleryItems)


boxGalleryItems.innerHTML = listItemsMarkup



function createListItemMarkup (items) {
    return items.map(item => `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </div>`).join('')
}

boxGalleryItems.addEventListener('click', onImageClick)


function onImageClick(evt) {
    evt.preventDefault()
if (evt.target.nodeName !== 'IMG') {
    return
}

const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`)

instance.show()
}
