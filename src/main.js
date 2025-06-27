import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import axios from 'axios';
import { getImagesByQuery } from './js/pixabay-api';
import {
    createGallery,
    clearGallery,
    hideLoader,
    showLoader,
    showLoadMoreButton,
    hideLoadMoreButton
} from './js/render-functions';



const form = document.querySelector(".form");
const inputField = document.querySelector(".input-field");
const loader = document.querySelector(".loader");
const gallery = document.querySelector(".gallery");
const loadMore = document.querySelector(".load-more");

let currentPage = 1;
let totalHits = 0;
let loadedHits = 0;
let myPicture = '';

form.addEventListener("submit", handleSubmit)
loadMore.addEventListener("click", handleClick)




async function handleSubmit(event) {
    event.preventDefault();
    clearGallery();
    hideLoadMoreButton();
   
    myPicture = inputField.value.trim();
    currentPage = 1;
    loadedHits = 0;
    if (myPicture === '') {
        iziToast.warning({
      message: 'Please enter a search query.',
      position: 'topRight',
        });
       
    return;
    }
    clearGallery();
    hideLoadMoreButton();
    showLoader();
    try {
        const response = await getImagesByQuery(myPicture, currentPage);
        totalHits = response.totalHits;
        
        if (response.hits.length === 0) {
            return iziToast.info({
                title: 'Error',
                message:
                    'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
            });
        }
        createGallery(response.hits);  
        loadedHits += response.hits.length;

        if (loadedHits < totalHits) {
            showLoadMoreButton();
        } else {
            hideLoadMoreButton();
            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
                position: 'topRight',
            });
        }
    } catch (error) {
            iziToast.error({
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
    });
            console.log(error)
    } finally {
        hideLoader();
        inputField.value = '';
    }
};



async function handleClick(event) {
    hideLoadMoreButton();
    showLoader();
    try {
        currentPage += 1;
        const response = await getImagesByQuery(myPicture, currentPage);
        createGallery(response.hits);
       
        loadedHits += response.hits.length;
        if (loadedHits >= totalHits) {
            hideLoadMoreButton();
            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
                position: 'topRight',
            });
        } else {
            showLoadMoreButton();
        }
        const { height: cardHeight } = document.querySelector(".gallery").firstElementChild.getBoundingClientRect();

        window.scrollBy({
            top: cardHeight * 2,
            behavior: "smooth",
        });
    } catch (error) {
            iziToast.error({
      message: 'Failed to load more images.',
      position: 'topRight',
    });
        console.log(error);
    } finally {
        hideLoader();
        
        }
};
