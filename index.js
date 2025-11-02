var S=Object.defineProperty;var m=r=>{throw TypeError(r)};var D=(r,e,a)=>e in r?S(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a;var u=(r,e,a)=>D(r,typeof e!="symbol"?e+"":e,a),f=(r,e,a)=>e.has(r)||m("Cannot "+a);var h=(r,e,a)=>(f(r,e,"read from private field"),a?a.call(r):e.get(r)),y=(r,e,a)=>e.has(r)?m("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(r):e.set(r,a);var v=(r,e,a)=>(f(r,e,"access private method"),a);import{a as L,S as P,i as p}from"./assets/vendor-8mTUrOQ0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();L.defaults.baseURL="https://pixabay.com/api";var d,g,w;class O{constructor(){y(this,g);y(this,d,"22579303-973b9b71134c76d3c38c0933d");u(this,"currentPage",1);u(this,"queryField","")}incrementPage(){this.currentPage++}resetPage(){this.currentPage=1}async getPhotoByQuery(e){this.queryField=e;const a=await L.get("",{params:v(this,g,w).call(this,e)});return console.log(a),a.data}}d=new WeakMap,g=new WeakSet,w=function(e){return{key:h(this,d),q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",page:this.currentPage,per_page:100}};const c=new O,b=({downloads:r=0,comments:e=0,likes:a=0,views:i=0,webformatURL:t,largeImageURL:o,tags:n})=>{const q=n.split(",")[0]||"";return`<li class="gallery-item">
      <a class="gallery-link" href=${o}>
        <div class='gallery-thumb-image'>
          <img class="gallery-image" src=${t} data-source=${o} alt=${q} />
        </div>
        <div class='wrapper-info'>
          <div class='info'>
            <p>Likes</p>
            <p>${a}</p>
          </div>
          <div class='info'>
            <p>Views</p>
            <p>${i}</p>
          </div>
          <div class='info'>
            <p>Comments</p>
            <p>${e}</p>
          </div>
          <div class='info'>
            <p>Downloads</p>
            <p>${r}</p>
          </div>
        </div>
      </a>
    </li>
`},s={form:document.querySelector(".form"),galleryList:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".js-load-more-btn")},l=(r,e)=>{e==="error"?p.error({message:r,position:"topRight"}):e==="warning"?p.warning({message:r,position:"topRight"}):p.show({message:r,position:"topRight"})},B=()=>{s.loadMoreBtn.classList.add("inactive"),s.loadMoreBtn.removeEventListener("click",M)},$=()=>{s.loadMoreBtn.classList.remove("inactive"),s.loadMoreBtn.addEventListener("click",M)},M=async r=>{c.incrementPage();try{const{hits:e,totalHits:a}=await c.getPhotoByQuery(c.queryField);if(e.length===0){l("Sorry, there are no images matching your search query. Please try again!","error");return}const i=e.map(o=>b(o)).join("");s.galleryList.insertAdjacentHTML("beforeend",i);const t=s.galleryList.children.length;new P(".gallery-link",{captionsData:"alt",captionDelay:250,overlayOpacity:.9}),a===t&&(l("We're sorry, but you've reached the end of search results.","warning"),B())}catch(e){l(e.message,"error"),console.log(e)}},F=async r=>{r.preventDefault();const e=r.target,i=new FormData(e).get("search-field").trim();if(!i){l("The search field is empty. Please enter text to search.","warning");return}c.resetPage(),s.loader.classList.add("is-loaded");try{const{hits:t}=await c.getPhotoByQuery(i);if(t.length===0){l("Sorry, there are no images matching your search query. Please try again!","error");return}const o=t.map(n=>b(n)).join("");s.galleryList.innerHTML=o,$(),new P(".gallery-link",{captionsData:"alt",captionDelay:250,overlayOpacity:.9})}catch(t){l(t.message,"error"),s.galleryList.innerHTML="",B(),console.log(t)}finally{s.loader.classList.remove("is-loaded")}};s.form.addEventListener("submit",F);
//# sourceMappingURL=index.js.map
