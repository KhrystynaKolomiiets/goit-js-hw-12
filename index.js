import{a as v,S as q,i as a}from"./assets/vendor-DWXSRYDZ.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();async function y(r,e){const i="50815044-d1b29e7254804b3149c32accf",n="https://pixabay.com/api/",o=new URLSearchParams({key:i,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15});return await v(`${n}?${o}`).then(s=>s.data).catch(s=>{console.log(s)})}const g=document.querySelector(".loader"),R=document.querySelector(".gallery"),d=document.querySelector(".load-more");function L(r){return r.map(e=>` <li class="gallery-item">
        <a class="image-item" href = "${e.largeImageURL}">
        <img src = "${e.webformatURL}" alt = "${e.tags}" />
        <ul class ="description">
        <li>
        <p><b>Likes</b> ${e.likes}</p>
        </li>
        <li> 
        <p> <b>Views</b> ${e.views}</p>
        </li>
        <li>
         <p> <b>Comments</b> ${e.comments}</p>
        </li>
        <li>
         <p> <b>Downloads</b> ${e.downloads}</p>
        </li>
        </ul>
        </a>
    </li>
`).join("")}function b(){d.classList.remove("hidden"),d.disabled=!1,d.textContent="Load more"}function l(){d.classList.add("hidden")}function w(){g.classList.remove("hidden")}function u(){g.classList.add("hidden")}function E(){R.innerHTML=""}const S=new q(".image-item",{captionsData:"alt",captionDelay:250}),$=document.querySelector(".form"),p=document.querySelector(".input-field");document.querySelector(".loader");const P=document.querySelector(".gallery"),M=document.querySelector(".load-more");let h=1,f=0,c=0,m="";$.addEventListener("submit",A);M.addEventListener("click",B);async function A(r){if(r.preventDefault(),E(),l(),w(),m=p.value.trim(),h=1,c=0,m===""){a.warning({message:"Please enter a search query.",position:"topRight"}),u();return}l();try{const e=await y(m,h);if(f=e.totalHits,u(),e.hits.length===0)return a.info({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});const i=L(e.hits);P.insertAdjacentHTML("beforeend",i),S.refresh(),c+=e.hits.length,c<f?b():(l(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(e){a.error({message:"Something went wrong. Please try again later.",position:"topRight"}),console.log(e)}finally{u(),p.value=""}}async function B(r){l(),w(),await new Promise(e=>setTimeout(e,1e3));try{h+=1;const e=await y(m,h),i=L(e.hits);P.insertAdjacentHTML("beforeend",i),S.refresh(),c+=e.hits.length,c>=f?(l(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):b();const{height:n}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:n*2,behavior:"smooth"})}catch(e){a.error({message:"Failed to load more images.",position:"topRight"}),console.log(e)}finally{u(),l()}}
//# sourceMappingURL=index.js.map
