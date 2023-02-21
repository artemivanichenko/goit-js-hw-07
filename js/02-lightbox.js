import { galleryItems } from "./gallery-items.js";

const createGallerycontainer = document.querySelector(".gallery");
const newGallery = createGalleryForms(galleryItems);

createGallerycontainer.insertAdjacentHTML("beforeend", newGallery);
createGallerycontainer.addEventListener("click", onGalleryContainerClick);

function createGalleryForms(galleryItems) {
  return galleryItems
    .map(({ preview, description, original }) => {
      return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" 
        src="${preview}"
        data-source="${original}"
        alt="${description}" 
        >
        </a>
      </div>`;
    })
    .join("");
}

function onGalleryContainerClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
