var D=Object.defineProperty;var f=t=>{throw TypeError(t)};var B=(t,e,o)=>e in t?D(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var u=(t,e,o)=>B(t,typeof e!="symbol"?e+"":e,o),h=(t,e,o)=>e.has(t)||f("Cannot "+o);var v=(t,e,o)=>(h(t,e,"read from private field"),o?o.call(t):e.get(t)),g=(t,e,o)=>e.has(t)?f("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o);var P=(t,e,o)=>(h(t,e,"access private method"),o);import{a as w,S as L,i as m}from"./assets/vendor-8mTUrOQ0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}})();w.defaults.baseURL="https://pixabay.com/api";var c,d,b;class F{constructor(){g(this,d);g(this,c,"22579303-973b9b71134c76d3c38c0933d");u(this,"currentPage",1);u(this,"queryField","")}incrementPage(){this.currentPage++}async getPhotoByQuery(e){this.queryField=e;const o=await w.get("",{params:P(this,d,b).call(this,e)});return console.log(o),o.data}}c=new WeakMap,d=new WeakSet,b=function(e){return{key:v(this,c),q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",page:this.currentPage,per_page:15}};const l=new F,q=({downloads:t=0,comments:e=0,likes:o=0,views:i=0,webformatURL:r,largeImageURL:a,tags:n})=>{const p=n.split(",")[0]||"";return`<li class="gallery-item">
      <a class="gallery-link" href=${a}>
        <div class='gallery-thumb-image'>
          <img class="gallery-image" src=${r} data-source=${a} alt=${p} />
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
`},s={form:document.querySelector(".form"),imgWrap:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".js-load-more-btn")},y=(t,e)=>{e==="error"?m.error({message:t,position:"topRight"}):e==="warning"?m.warning({message:t,position:"topRight"}):m.show({message:t,position:"topRight"})},O=async t=>{l.incrementPage(),console.log(l.queryField);try{const{hits:e,total:o,totalHits:i}=await l.getPhotoByQuery(l.queryField);if(e.length===0){y("Sorry, there are no images matching your search query. Please try again!","error");return}const r=e.map(a=>q(a)).join("");s.imgWrap.insertAdjacentHTML("beforeend",r),new L(".gallery-link",{captionsData:"alt",captionDelay:250,overlayOpacity:.9})}catch{}},$=async t=>{t.preventDefault();const e=t.target,i=new FormData(e).get("search-field").trim();if(!i){y("The search field is empty. Please enter text to search.","warning");return}s.loader.classList.add("is-loaded");try{const{hits:r,total:a,totalHits:n}=await l.getPhotoByQuery(i);if(r.length===0){y("Sorry, there are no images matching your search query. Please try again!","error");return}const p=r.map(S=>q(S)).join("");s.imgWrap.innerHTML=p,s.loadMoreBtn.classList.remove("inactive"),s.loadMoreBtn.addEventListener("click",O),new L(".gallery-link",{captionsData:"alt",captionDelay:250,overlayOpacity:.9})}catch(r){console.log(r)}finally{s.loader.classList.remove("is-loaded")}};s.form.addEventListener("submit",$);
//# sourceMappingURL=index.js.map
