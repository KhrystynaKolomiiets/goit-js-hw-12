import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const loader = document.querySelector(".loader");
const gallery = document.querySelector(".gallery");
const loadMore = document.querySelector(".load-more");

const lightBox = new SimpleLightbox(".image-item", {
    captionsData: 'alt',
    captionDelay: 250,
});

export function createGallery(images) {
    const markup = images.map(image =>
        ` <li class="gallery-item">
        <a class="image-item" href = "${image.largeImageURL}">
        <img src = "${image.webformatURL}" alt = "${image.tags}" />
        <ul class ="description">
        <li>
        <p><b>Likes</b> ${image.likes}</p>
        </li>
        <li> 
        <p> <b>Views</b> ${image.views}</p>
        </li>
        <li>
         <p> <b>Comments</b> ${image.comments}</p>
        </li>
        <li>
         <p> <b>Downloads</b> ${image.downloads}</p>
        </li>
        </ul>
        </a>
    </li>
`).join('');
 
    gallery.insertAdjacentHTML('beforeend', markup);
    lightBox.refresh();
};

export function showLoadMoreButton() {
    loadMore.classList.remove("hidden");
    loadMore.disabled = false;
    loadMore.textContent = "Load more";
}
export function hideLoadMoreButton() {
 loadMore.classList.add("hidden")   
}

export function showLoader() {
    loader.classList.remove('hidden');
}
export function hideLoader() {
    loader.classList.add('hidden');
}
export function clearGallery() {
    gallery.innerHTML = '';
}