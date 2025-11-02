var D=Object.defineProperty;var f=t=>{throw TypeError(t)};var E=(t,e,o)=>e in t?D(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var y=(t,e,o)=>E(t,typeof e!="symbol"?e+"":e,o),v=(t,e,o)=>e.has(t)||f("Cannot "+o);var L=(t,e,o)=>(v(t,e,"read from private field"),o?o.call(t):e.get(t)),m=(t,e,o)=>e.has(t)?f("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o);var P=(t,e,o)=>(v(t,e,"access private method"),o);import{a as w,S as b,i as p}from"./assets/vendor-8mTUrOQ0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}})();w.defaults.baseURL="https://pixabay.com/api";var d,g,B;class O{constructor(){m(this,g);m(this,d,"22579303-973b9b71134c76d3c38c0933d");y(this,"currentPage",1);y(this,"queryField","")}incrementPage(){this.currentPage++}resetPage(){this.currentPage=1}async getPhotoByQuery(e){this.queryField=e;const o=await w.get("",{params:P(this,g,B).call(this,e)});return console.log(o),o.data}}d=new WeakMap,g=new WeakSet,B=function(e){return{key:L(this,d),q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",page:this.currentPage,per_page:15}};const c=new O,q=({downloads:t=0,comments:e=0,likes:o=0,views:i=0,webformatURL:r,largeImageURL:a,tags:n})=>{const u=n.split(",")[0]||"";return`<li class="gallery-item">
      <a class="gallery-link" href=${a}>
        <div class='gallery-thumb-image'>
          <img class="gallery-image" src=${r} data-source=${a} alt=${u} />
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
`},s={form:document.querySelector(".form"),galleryList:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".js-load-more-btn"),card:document.querySelector(".gallery-item")},l=(t,e)=>{e==="error"?p.error({message:t,position:"topRight"}):e==="warning"?p.warning({message:t,position:"topRight"}):p.show({message:t,position:"topRight"})},h=()=>{s.loadMoreBtn.classList.add("inactive"),s.loadMoreBtn.removeEventListener("click",M)},$=()=>{s.loadMoreBtn.classList.remove("inactive"),s.loadMoreBtn.addEventListener("click",M)},F=()=>{const t=s.galleryList.children[0],{height:e}=t.getBoundingClientRect();return e},M=async t=>{c.incrementPage();try{const{hits:e,totalHits:o}=await c.getPhotoByQuery(c.queryField);if(e.length===0&&o===0){l("Sorry, there are no images matching your search query. Please try again!","error");return}const i=e.map(a=>q(a)).join("");s.galleryList.insertAdjacentHTML("beforeend",i);const r=s.galleryList.children.length;window.scrollBy({top:F()*2,left:0,behavior:"smooth"}),new b(".gallery-link",{captionsData:"alt",captionDelay:250,overlayOpacity:.9}),o===r&&(l("We're sorry, but you've reached the end of search results.","warning"),h())}catch(e){l(e.message,"error"),console.log(e)}},H=async t=>{t.preventDefault();const e=t.target,i=new FormData(e).get("search-field").trim();if(!i){l("The search field is empty. Please enter text to search.","warning");return}c.resetPage(),s.loader.classList.add("is-loaded");try{const{hits:r,totalHits:a}=await c.getPhotoByQuery(i);if(r.length===0){l("Sorry, there are no images matching your search query. Please try again!","error");return}const n=r.map(S=>q(S)).join("");s.galleryList.innerHTML=n;const u=s.galleryList.children.length;a===u?h():$(),new b(".gallery-link",{captionsData:"alt",captionDelay:250,overlayOpacity:.9})}catch(r){l(r.message,"error"),s.galleryList.innerHTML="",h(),console.log(r)}finally{s.loader.classList.remove("is-loaded")}};s.form.addEventListener("submit",H);
//# sourceMappingURL=index.js.map
