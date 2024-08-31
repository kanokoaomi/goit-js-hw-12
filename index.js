import{a as b,S as L,i}from"./assets/vendor-DOgVoBmD.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();const n=document.querySelector(".form"),d=document.querySelector(".gallery"),g=(t,s)=>b.get("https://pixabay.com/api/",{params:{key:"45647419-a95c01b27d6f35f87705f1aeb",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s}});function h(t){return`
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
    `}document.querySelector(".gallery");const u=document.querySelector(".load-more-btn");let l=1;const w=15;let m=0;const y=new L(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function v(){const{height:t}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect(),s=t*2;window.scrollBy({top:s,behavior:"smooth"})}const S=async t=>{t.preventDefault();const s=n.elements.user_search.value.trim();if(l=1,s===""){i.show({message:"Please enter a search query!"});return}d.innerHTML="",q();try{const r=await g(s,l);if(r.data.hits.length===0)i.show({message:"Sorry, there are no images matching your search query. Please try again!"});else{const o=r.data.hits.map(e=>h(e)).join("");d.innerHTML=o,y.refresh(),p(),u.classList.remove("is-hidden")}}catch(r){p(),i.show({message:"Sorry, there is an issue. Please try again!"}),n.reset(),console.log(r)}},f=document.querySelector(".loader"),q=()=>{f.style.display="block"},p=()=>{f.style.display="none"};n.addEventListener("submit",S);const P=async t=>{try{l++;const s=n.elements.user_search.value.trim(),r=await g(s,l),o=r.data.hits.map(e=>h(e)).join("");d.insertAdjacentHTML("beforeend",o),y.refresh(),v(),m+=w,m>=r.data.totalHits&&(i.show({message:"We're sorry, but you've reached the end of search results."}),u.classList.add("is-hidden"))}catch(s){console.log(s)}};u.addEventListener("click",P);
//# sourceMappingURL=index.js.map
