var O=Object.defineProperty;var L=t=>{throw TypeError(t)};var $=(t,e,o)=>e in t?O(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var y=(t,e,o)=>$(t,typeof e!="symbol"?e+"":e,o),v=(t,e,o)=>e.has(t)||L("Cannot "+o);var P=(t,e,o)=>(v(t,e,"read from private field"),o?o.call(t):e.get(t)),h=(t,e,o)=>e.has(t)?L("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o);var b=(t,e,o)=>(v(t,e,"access private method"),o);import{a as w,i as m,S as x}from"./assets/vendor-8mTUrOQ0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();w.defaults.baseURL="https://pixabay.com/api";var d,g,B;class D{constructor(){h(this,g);h(this,d,"22579303-973b9b71134c76d3c38c0933d");y(this,"currentPage",1);y(this,"queryField","")}incrementPage(){this.currentPage++}resetPage(){this.currentPage=1}async getPhotoByQuery(e){this.queryField=e;const o=await w.get("",{params:b(this,g,B).call(this,e)});return console.log(o),o.data}}d=new WeakMap,g=new WeakSet,B=function(e){return{key:P(this,d),q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",page:this.currentPage,per_page:15}};const c=new D,q=({downloads:t=0,comments:e=0,likes:o=0,views:i=0,webformatURL:r,largeImageURL:s,tags:n})=>{const u=n.split(",")[0]||"";return`<li class="gallery-item">
      <a class="gallery-link" href=${s}>
        <div class='gallery-thumb-image'>
          <img class="gallery-image" src=${r} data-source=${s} alt=${u} />
        </div>
        <div class='wrapper-info'>
          <div class='info'>
            <p>Likes</p>
            <p>${o}</p>
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
`};let f=null;const a={form:document.querySelector(".form"),galleryList:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".js-load-more-btn"),card:document.querySelector(".gallery-item")},l=(t,e)=>{e==="error"?m.error({message:t,position:"topRight"}):e==="warning"?m.warning({message:t,position:"topRight"}):m.show({message:t,position:"topRight"})},p=()=>{a.loadMoreBtn.classList.add("inactive"),a.loadMoreBtn.removeEventListener("click",S)},F=()=>{a.loadMoreBtn.classList.remove("inactive"),a.loadMoreBtn.addEventListener("click",S)},H=()=>{const t=a.galleryList.children[0],{height:e}=t.getBoundingClientRect();return e},M=()=>{f?f.refresh():f=new x(".gallery-link",{captionsData:"alt",captionDelay:250,overlayOpacity:.9})},S=async t=>{c.incrementPage();try{const{hits:e,totalHits:o}=await c.getPhotoByQuery(c.queryField);if(e.length===0&&o===0){l("Sorry, there are no images matching your search query. Please try again!","error");return}const i=e.map(s=>q(s)).join("");a.galleryList.insertAdjacentHTML("beforeend",i);const r=a.galleryList.children.length;window.scrollBy({top:H()*2,left:0,behavior:"smooth"}),M(),o===r&&(l("We're sorry, but you've reached the end of search results.","warning"),p())}catch(e){l(e.message,"error"),console.log(e)}},T=async t=>{t.preventDefault();const e=t.target,i=new FormData(e).get("search-field").trim();if(!i){l("The search field is empty. Please enter text to search.","warning");return}c.resetPage(),a.loader.classList.add("is-loaded");try{const{hits:r,totalHits:s}=await c.getPhotoByQuery(i);if(r.length===0){l("Sorry, there are no images matching your search query. Please try again!","error");return}const n=r.map(E=>q(E)).join("");a.galleryList.innerHTML=n;const u=a.galleryList.children.length;s===u?p():F(),M()}catch(r){l(r.message,"error"),a.galleryList.innerHTML="",p(),console.log(r)}finally{a.loader.classList.remove("is-loaded")}};a.form.addEventListener("submit",T);
//# sourceMappingURL=index.js.map
