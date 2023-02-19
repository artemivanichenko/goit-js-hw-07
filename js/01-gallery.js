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
        <a class="gallery__link" href="${preview}">
        <img class="gallery__image" 
        src="${original}"
        data-source="${original}"
        alt "${description}" 
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

  const instance = basicLightbox.create(`
      <img  src="${evt.target.src}" >
  `);

  instance.show(evt);

  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      instance.close();
    }
  });
}
