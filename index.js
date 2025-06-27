import{a as v,S as q,i}from"./assets/vendor-DWXSRYDZ.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();async function y(s,e){const o="50815044-d1b29e7254804b3149c32accf",l="https://pixabay.com/api/",r=new URLSearchParams({key:o,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15});return(await v(`${l}?${r}`)).data}const g=document.querySelector(".loader"),L=document.querySelector(".gallery"),d=document.querySelector(".load-more"),R=new q(".image-item",{captionsData:"alt",captionDelay:250});function b(s){const e=s.map(o=>` <li class="gallery-item">
        <a class="image-item" href = "${o.largeImageURL}">
        <img src = "${o.webformatURL}" alt = "${o.tags}" />
        <ul class ="description">
        <li>
        <p><b>Likes</b> ${o.likes}</p>
        </li>
        <li> 
        <p> <b>Views</b> ${o.views}</p>
        </li>
        <li>
         <p> <b>Comments</b> ${o.comments}</p>
        </li>
        <li>
         <p> <b>Downloads</b> ${o.downloads}</p>
        </li>
        </ul>
        </a>
    </li>
`).join("");L.insertAdjacentHTML("beforeend",e),R.refresh()}function w(){d.classList.remove("hidden"),d.disabled=!1,d.textContent="Load more"}function n(){d.classList.add("hidden")}function S(){g.classList.remove("hidden")}function P(){g.classList.add("hidden")}function f(){L.innerHTML=""}const E=document.querySelector(".form"),p=document.querySelector(".input-field");document.querySelector(".loader");document.querySelector(".gallery");const $=document.querySelector(".load-more");let m=1,h=0,a=0,u="";E.addEventListener("submit",B);$.addEventListener("click",M);async function B(s){if(s.preventDefault(),f(),n(),u=p.value.trim(),m=1,a=0,u===""){i.warning({message:"Please enter a search query.",position:"topRight"});return}f(),n(),S();try{const e=await y(u,m);if(h=e.totalHits,e.hits.length===0)return i.info({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});b(e.hits),a+=e.hits.length,a<h?w():(n(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(e){i.error({message:"Something went wrong. Please try again later.",position:"topRight"}),console.log(e)}finally{P(),p.value=""}}async function M(s){n(),S();try{m+=1;const e=await y(u,m);b(e.hits),a+=e.hits.length,a>=h?(n(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):w();const{height:o}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}catch(e){i.error({message:"Failed to load more images.",position:"topRight"}),console.log(e)}finally{P()}}
//# sourceMappingURL=index.js.map
