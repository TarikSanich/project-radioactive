import"./assets/header-40f54f50.js";import{n as I,a as u,P as M}from"./assets/vendor-ae726d3c.js";const h=document.querySelector(".quote__backend"),b=new Date().toLocaleDateString();async function P(){h.innerHTML=`
        <span class="loader"></span>
        <span>We're looking a quote for you...</span>
    `;try{return(await u.get("https://energyflow.b.goit.study/api/quote")).data}catch{I.Notify.failure("Something went wrong, try again")}}function E(e,t){return`<p class="quote__backend-text">${t}</p>
            <p class="quote__backend-author">${e}</p>`}function C(){if(localStorage.getItem("quote")&&localStorage.getItem("savedDate")===b){const{author:e,quote:t}=JSON.parse(localStorage.getItem("quote"));h.innerHTML=E(e,t)}else P().then(({author:e,quote:t})=>{const n={author:e,quote:t};localStorage.setItem("quote",JSON.stringify(n)),localStorage.setItem("savedDate",b),h.innerHTML=E(e,t)}).catch(e=>I.Notify.failure(e.message))}C();const H=document.getElementById("subscriptionForm"),L=document.getElementById("email"),A=new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/);H.addEventListener("submit",async function(e){e.preventDefault();try{A.test(L.value)?await u.post("https://energyflow.b.goit.study/api/subscription",{email:L.value}).then(t=>{console.log(t.data.message)}).catch(t=>{console.log(t.response.data.message)}):alert("Please enter the correct email")}catch(t){console.error("Error:",t),alert("Something went wrong, try again")}});const B=document.getElementById("exercises-search-form"),w=B.querySelector(".exercises-search-input"),f=document.querySelector(".exercises-list-page2"),v=document.querySelector(".exercises-inputclear-icon");B.addEventListener("submit",async e=>{e.preventDefault();const t=w.value.trim().toLowerCase();try{await U(t)}catch(n){console.error(n)}});w.addEventListener("input",D);function D(){w.value.trim()!==""?v.classList.remove("exercises-is-hidden"):v.classList.add("exercises-is-hidden")}function R(){const e=document.getElementById("exercises-search-input");e&&(e.value="")}v.addEventListener("click",R);async function O(e){try{return(await u.get(`https://energyflow.b.goit.study/api/exercises?bodypart=back&muscles=lats&equipment=barbell&keyword=${e}&page=1&limit=10`)).data}catch(t){throw console.error("Error fetching exercises:",t),t}}async function U(e){try{const t=await O(e);if(f.innerHTML="",t.results.length>0){const n=t.results.map(s=>`
        <li class="exercises-item-page2">
          <div class="exercises-card">
            <div class="exercises-card-top">
              <div class="exercises-kind-wrapper">
                <p class="exercises-card-kind">WORKOUT</p>
                <div class="exercises-card-rating">
                  <p class="exercises-rating-value">${s.rating}</p>
                  <svg class="exercises-star-icon" width="18" height="18" aria-label="star icon">
                    <use href="./img/exercises/exercises-sprite.svg#icon-star"></use>
                  </svg>
                </div>
              </div>
              <button class="exercises-start-button">
                Start
                <svg class="exercises-start-icon" width="14" height="14">
                  <use href="./img/exercises/exercises-sprite.svg#icon-arrow"></use>
                </svg>
              </button>
            </div>
            <div class="exercises-card-namewrapper">
              <svg class="exercises-star-icon" width="24" height="24" aria-label="star icon">
                <use href="./img/exercises/exercises-sprite.svg#icon-icon"></use>
              </svg>
              <p class="exercises-card-exname">${s.name}</p>
            </div>
            <ul class="exercises-card-info">
              <li class="exercises-info-data">
                <span class="exercises-data-name">Burned calories: </span>${s.calories} / ${s.duration} min
              </li>
              <li class="exercises-info-data">
                <span class="exercises-data-name">Body part: </span>${s.bodyPart}
              </li>
              <li class="exercises-info-data">
                <span class="exercises-data-name">Target: </span>${s.target}
              </li>
            </ul>
          </div>
        </li>
      `).join("");f.innerHTML=n}else f.innerHTML='<p class="no-results-message">Unfortunately, <span class="error-message">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>'}catch(t){console.error(t)}}function o(e){return e.charAt(0).toUpperCase()+e.slice(1)}function N(){document.querySelector(".exercises-list").addEventListener("click",async function(a){let i=a.target;if(i.classList.contains("exercises-start-button")||i.parentElement.classList.contains("exercises-start-button")){let c;i.parentElement.classList.contains("exercises-start-button")?c=i.parentElement.getAttribute("id"):c=i.getAttribute("id");async function l(){try{await u.get("https://energyflow.b.goit.study/api/exercises/"+c).then(({data:r})=>{document.getElementById("modalImage").src=r.gifUrl,document.getElementById("modalName").textContent=o(r.name),document.getElementById("modalRating").textContent=r.rating,document.getElementById("modalTarget").textContent=o(r.target),document.getElementById("bodyPart").textContent=o(r.bodyPart),document.getElementById("modalEquipment").textContent=o(r.equipment),document.getElementById("modalPopularity").textContent=r.popularity,document.getElementById("modalBurnedCalories").textContent=r.burnedCalories+" cal / "+r.time+" min",document.getElementById("modalDescription").textContent=r.description;var y=document.getElementById("pop-up-exercise");y.style.display="flex"})}catch(r){console.error("Error:",r),alert("Something went wrong, try again")}}await l()}}),document.getElementById("closeBtn").addEventListener("click",function(){const a=document.getElementById("pop-up-exercise");a.style.display="none"});const n=3,s=document.querySelectorAll(".star");for(let a=0;a<n;a++)s[a].style.fill="yellow"}function $(e,t){const n=document.getElementById("tui-pagination-container"),s=t<5?t:5,a={totalItems:e*t,itemsPerPage:e,visiblePages:s,centerAlign:!0},i=new M(n,a);return s<=1?n.style.display="none":n.style.display="block",i}const d=document.querySelector(".exercises-list");document.querySelector(".exercises-bottom-buttons");let m="Muscles",p=1;const T=12;let g;async function x(e,t){let n=new URLSearchParams({filter:e,page:t,limit:T});try{await u.get(`https://energyflow.b.goit.study/api/filters?${n}`).then(s=>{let a=s.data.results;g=s.data.totalPages,console.log("Total Pages: ",g);const i=a.map(({name:c,filter:l,imgUrl:r})=>`<li class="exercises-list-item" data-name="${c}" data-filter="${l}">
            <div class="exercises-item"
            style="background:
            linear-gradient(0deg,rgba(16, 16, 16, 0.7) 0%, rgba(16, 16, 16, 0.7) 100%),
            url(${r}),lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; 
            background-size: cover;">
            <p class="exercises-item-name">${o(c)}</p>
            <p class="exercises-item-subname">${l}</p>
            </div>
          </li>`).join("");d.insertAdjacentHTML("beforeend",i),_()}).catch(s=>{console.log(s.response.data.message)})}catch(s){console.error("Error:",s),alert("Something went wrong, try again")}}await x(m,p);$(12,g).on("afterMove",({page:e})=>{console.log("Moved",e),d.innerHTML="",x(m,e)});function _(){const e=document.querySelectorAll(".exercises-list-item");for(const t of e)t.addEventListener("click",function(n){const s=n.currentTarget.dataset.name,a=n.currentTarget.dataset.filter;z({filter:a,name:s}),console.log("Clicked: ",o(s),a)})}const j=document.querySelectorAll(".exercises-filter-button");for(const e of j)e.addEventListener("click",async function(t){const n=t.currentTarget.dataset.name;m=n,console.log("Clicked the button: ",n),d.innerHTML="",await x(n,p),$(12,g).on("afterMove",({page:s})=>{console.log("Moved",s),console.log("Total Pages Pressed",g),d.innerHTML="",x(m,s)}),console.log(n,p)});function z({filter:e,name:t}){const s={"Body parts":"bodypart",Muscles:"muscles",Equipment:"equipment"}[e];new URLSearchParams({muscles:t,page:1,limit:9}),u.get(`https://energyflow.b.goit.study/api/exercises?${s}=${t.toLowerCase()}&page=${p}&limit${T}`).then(a=>{let i=a.data.results;console.log(i);const c=i.map(({bodyPart:l,burnedCalories:r,name:y,_id:k,target:S,rating:q})=>`<li class="exercises-item-page2">
            <div class="exercises-card">
              <div class="exercises-card-top">
                <div class="exercises-kind-wrapper">
                  <p class="exercises-card-kind">WORKOUT</p>
                  <div class="exercises-card-rating">
                    <p class="exercises-rating-value">${q}</p>
                    <svg
                      class="exercises-star-icon"
                      width="18"
                      height="18"
                      aria-label="star icon"
                    >
                      <use
                        href="./img/exercises/exercises-sprite.svg#icon-star"
                      ></use>
                    </svg>
                  </div>
                </div>
                <button class="exercises-start-button" id=${k}>
                  Start
                  <svg class="exercises-start-icon" width="14" height="14">
                    <use
                      href="./img/exercises/exercises-sprite.svg#icon-arrow"
                    ></use>
                  </svg>
                </button>
              </div>
              <div class="exercises-card-namewrapper">
                <svg
                  class="exercises-star-icon"
                  width="24"
                  height="24"
                  aria-label="star icon"
                >
                  <use
                    href="./img/exercises/exercises-sprite.svg#icon-icon"
                  ></use>
                </svg>
                <p class="exercises-card-exname">${o(y)}</p>
              </div>
              <ul class="exercises-card-info">
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Burned calories: </span>${r}
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Body part: </span>${o(l)}
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Target: </span>${o(S)}
                </li>
              </ul>
            </div>
          </li> `).join("");d.innerHTML="",d.insertAdjacentHTML("beforeend",c),N()}).catch(a=>{console.log(a.response.data.message)})}document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("scrollTop");function t(){window.scrollTo({top:0,behavior:"smooth"})}e.addEventListener("click",t)});
//# sourceMappingURL=commonHelpers2.js.map
