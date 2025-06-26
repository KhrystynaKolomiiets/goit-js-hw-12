import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const loader = document.querySelector(".loader");
const gallery = document.querySelector(".gallery");
const loadMore = document.querySelector(".load-more");

export function createGallery(images) {
    return images.map(image =>
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
};

export function showLoadMore() {
    loadMore.classList.remove("hidden");
    loadMore.disabled = false;
    loadMore.textContent = "Load more";
}
export function hideLoadMore() {
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