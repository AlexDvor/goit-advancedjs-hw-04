var D=Object.defineProperty;var h=t=>{throw TypeError(t)};var O=(t,e,a)=>e in t?D(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var y=(t,e,a)=>O(t,typeof e!="symbol"?e+"":e,a),v=(t,e,a)=>e.has(t)||h("Cannot "+a);var L=(t,e,a)=>(v(t,e,"read from private field"),a?a.call(t):e.get(t)),p=(t,e,a)=>e.has(t)?h("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a);var P=(t,e,a)=>(v(t,e,"access private method"),a);import{a as w,S as b,i as m}from"./assets/vendor-8mTUrOQ0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}})();w.defaults.baseURL="https://pixabay.com/api";var d,g,q;class ${constructor(){p(this,g);p(this,d,"22579303-973b9b71134c76d3c38c0933d");y(this,"currentPage",1);y(this,"queryField","")}incrementPage(){this.currentPage++}resetPage(){this.currentPage=1}async getPhotoByQuery(e){this.queryField=e;const a=await w.get("",{params:P(this,g,q).call(this,e)});return console.log(a),a.data}}d=new WeakMap,g=new WeakSet,q=function(e){return{key:L(this,d),q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",page:this.currentPage,per_page:100}};const c=new $,B=({downloads:t=0,comments:e=0,likes:a=0,views:i=0,webformatURL:r,largeImageURL:o,tags:n})=>{const u=n.split(",")[0]||"";return`<li class="gallery-item">
      <a class="gallery-link" href=${o}>
        <div class='gallery-thumb-image'>
          <img class="gallery-image" src=${r} data-source=${o} alt=${u} />
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
            <p>${t}</p>
          </div>
        </div>
      </a>
    </li>
`},s={form:document.querySelector(".form"),galleryList:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".js-load-more-btn"),card:document.querySelector(".gallery-item")},l=(t,e)=>{e==="error"?m.error({message:t,position:"topRight"}):e==="warning"?m.warning({message:t,position:"topRight"}):m.show({message:t,position:"topRight"})},f=()=>{s.loadMoreBtn.classList.add("inactive"),s.loadMoreBtn.removeEventListener("click",M)},E=()=>{s.loadMoreBtn.classList.remove("inactive"),s.loadMoreBtn.addEventListener("click",M)},M=async t=>{c.incrementPage();try{const{hits:e,totalHits:a}=await c.getPhotoByQuery(c.queryField);if(e.length===0&&a===0){l("Sorry, there are no images matching your search query. Please try again!","error");return}const i=e.map(o=>B(o)).join("");s.galleryList.insertAdjacentHTML("beforeend",i);const r=s.galleryList.children.length;new b(".gallery-link",{captionsData:"alt",captionDelay:250,overlayOpacity:.9}),a===r&&(l("We're sorry, but you've reached the end of search results.","warning"),f())}catch(e){l(e.message,"error"),console.log(e)}},F=async t=>{t.preventDefault();const e=t.target,i=new FormData(e).get("search-field").trim();if(!i){l("The search field is empty. Please enter text to search.","warning");return}c.resetPage(),s.loader.classList.add("is-loaded");try{const{hits:r,totalHits:o}=await c.getPhotoByQuery(i);if(r.length===0){l("Sorry, there are no images matching your search query. Please try again!","error");return}const n=r.map(S=>B(S)).join("");s.galleryList.innerHTML=n;const u=s.galleryList.children.length;o===u?f():E(),new b(".gallery-link",{captionsData:"alt",captionDelay:250,overlayOpacity:.9})}catch(r){l(r.message,"error"),s.galleryList.innerHTML="",f(),console.log(r)}finally{s.loader.classList.remove("is-loaded")}};s.form.addEventListener("submit",F);
//# sourceMappingURL=index.js.map
