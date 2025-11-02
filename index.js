var D=Object.defineProperty;var f=t=>{throw TypeError(t)};var B=(t,e,a)=>e in t?D(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var g=(t,e,a)=>B(t,typeof e!="symbol"?e+"":e,a),h=(t,e,a)=>e.has(t)||f("Cannot "+a);var v=(t,e,a)=>(h(t,e,"read from private field"),a?a.call(t):e.get(t)),u=(t,e,a)=>e.has(t)?f("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a);var P=(t,e,a)=>(h(t,e,"access private method"),a);import{a as w,S as L,i as m}from"./assets/vendor-8mTUrOQ0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}})();w.defaults.baseURL="https://pixabay.com/api";var l,d,b;class O{constructor(){u(this,d);u(this,l,"22579303-973b9b71134c76d3c38c0933d");g(this,"currentPage",1);g(this,"queryField","")}incrementPage(){this.currentPage++}resetPage(){this.currentPage=1}async getPhotoByQuery(e){this.queryField=e;const a=await w.get("",{params:P(this,d,b).call(this,e)});return console.log(a),a.data}}l=new WeakMap,d=new WeakSet,b=function(e){return{key:v(this,l),q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",page:this.currentPage,per_page:15}};const c=new O,S=({downloads:t=0,comments:e=0,likes:a=0,views:s=0,webformatURL:r,largeImageURL:o,tags:n})=>{const p=n.split(",")[0]||"";return`<li class="gallery-item">
      <a class="gallery-link" href=${o}>
        <div class='gallery-thumb-image'>
          <img class="gallery-image" src=${r} data-source=${o} alt=${p} />
        </div>
        <div class='wrapper-info'>
          <div class='info'>
            <p>Likes</p>
            <p>${a}</p>
          </div>
          <div class='info'>
            <p>Views</p>
            <p>${s}</p>
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
`},i={form:document.querySelector(".form"),imgWrap:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".js-load-more-btn")},y=(t,e)=>{e==="error"?m.error({message:t,position:"topRight"}):e==="warning"?m.warning({message:t,position:"topRight"}):m.show({message:t,position:"topRight"})},$=async t=>{c.incrementPage();try{const{hits:e,total:a,totalHits:s}=await c.getPhotoByQuery(c.queryField);if(e.length===0){y("Sorry, there are no images matching your search query. Please try again!","error");return}const r=e.map(o=>S(o)).join("");i.imgWrap.insertAdjacentHTML("beforeend",r),new L(".gallery-link",{captionsData:"alt",captionDelay:250,overlayOpacity:.9})}catch(e){console.log(e)}},F=async t=>{t.preventDefault();const e=t.target,s=new FormData(e).get("search-field").trim();if(!s){y("The search field is empty. Please enter text to search.","warning");return}i.loader.classList.add("is-loaded"),c.resetPage();try{const{hits:r,total:o,totalHits:n}=await c.getPhotoByQuery(s);if(r.length===0){y("Sorry, there are no images matching your search query. Please try again!","error");return}const p=r.map(q=>S(q)).join("");i.imgWrap.innerHTML=p,i.loadMoreBtn.classList.remove("inactive"),i.loadMoreBtn.addEventListener("click",$),new L(".gallery-link",{captionsData:"alt",captionDelay:250,overlayOpacity:.9})}catch(r){console.log(r)}finally{i.loader.classList.remove("is-loaded")}};i.form.addEventListener("submit",F);
//# sourceMappingURL=index.js.map
