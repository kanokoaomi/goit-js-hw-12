import{i as n}from"./assets/vendor-17o45ynk.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const i=document.querySelector(".form"),c=o=>{o.preventDefault();const s=i.elements.user_search.value.trim();fetch(`https://pixabay.com/api/?key=45647419-a95c01b27d6f35f87705f1aeb&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{r.hits.length===0?n.show({message:"Sorry, there are no images matching your search query. Please try again!"}):console.log(u(r.results))}).catch(r=>{console.log(r)}),i.reset()};document.querySelector(".gallery");function u(o){return`
    <li class="gallery-item">
      <a class="gallery-link" href="${o.largeImageURL}">
        <img 
        class="gallery-image"
        src="${o.webformatURL}"
        data-source="${o.largeImageURL}"
        alt="${o.tags}" 
        />
      </a>
    </li>
    `}i.addEventListener("submit",c);
//# sourceMappingURL=index.js.map
