import{s as m,i as p}from"./assets/vendor-DnUmO7qu.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();const o=document.querySelector(".form"),n=document.querySelector(".gallery"),d=t=>fetch(`https://pixabay.com/api/?key=45647419-a95c01b27d6f35f87705f1aeb&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()});function f(t){return`
    <li class="gallery-item">
      <a class="gallery-link" href="${t.largeImageURL}">
        <img 
        class="gallery-image"
        src="${t.webformatURL}"
        data-source="${t.largeImageURL}"
        alt="${t.tags}" 
        />
        <ul class="picture-data">
      <li class="picture-data-item"><p class="picture-data-item-text"><b>Likes:</b><span class="picture-data-item-span">${t.likes}</span></p></li>
      <li class="picture-data-item"><p class="picture-data-item-text"><b>Views:</b><span class="picture-data-item-span">${t.views}</span></p></li>
      <li class="picture-data-item"><p class="picture-data-item-text"><b>Comments:</b><span class="picture-data-item-span">${t.comments}</span></p></li>
      <li class="picture-data-item"><p class="picture-data-item-text"><b>Downloads:</b><span class="picture-data-item-span">${t.downloads}</span></p></li>
      </ul>
      </a>
    </li>
    `}const c=new m(".gallery-item a",{captions:!0,captionsData:"alt",captionDelay:250});document.querySelector(".gallery");const g=t=>{event.preventDefault();const s=o.elements.user_search.value.trim();n.innerHTML="",y(),d(s).then(r=>{if(r.hits.length===0)p.show({message:"Sorry, there are no images matching your search query. Please try again!"});else{const i=r.hits.map(e=>f(e)).join("");n.innerHTML=i,c.refresh()}}).catch(r=>{console.log(r)}).finally(()=>{h()}),o.reset()},u=document.querySelector(".loader"),y=()=>{u.style.display="block"},h=()=>{u.style.display="none"};o.addEventListener("submit",g);n.addEventListener("click",t=>{t.target.classList.contains("gallery-image")&&(t.preventDefault(),c.open())});
//# sourceMappingURL=index.js.map
