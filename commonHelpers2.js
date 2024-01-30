import"./assets/header-40f54f50.js";import{n as L,a as l,P as q}from"./assets/vendor-ae726d3c.js";const f=document.querySelector(".quote__backend"),w=new Date().toLocaleDateString();async function P(){f.innerHTML=`
        <span class="loader"></span>
        <span>We're looking a quote for you...</span>
    `;try{return(await l.get("https://energyflow.b.goit.study/api/quote")).data}catch{L.Notify.failure("Something went wrong, try again")}}function b(e,t){return`<p class="quote__backend-text">${t}</p>
            <p class="quote__backend-author">${e}</p>`}function C(){if(localStorage.getItem("quote")&&localStorage.getItem("savedDate")===w){const{author:e,quote:t}=JSON.parse(localStorage.getItem("quote"));f.innerHTML=b(e,t)}else P().then(({author:e,quote:t})=>{const n={author:e,quote:t};localStorage.setItem("quote",JSON.stringify(n)),localStorage.setItem("savedDate",w),f.innerHTML=b(e,t)}).catch(e=>L.Notify.failure(e.message))}C();const H=document.getElementById("subscriptionForm"),E=document.getElementById("email"),A=new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/);H.addEventListener("submit",async function(e){e.preventDefault();try{A.test(E.value)?await l.post("https://energyflow.b.goit.study/api/subscription",{email:E.value}).then(t=>{console.log(t.data.message)}).catch(t=>{console.log(t.response.data.message)}):alert("Please enter the correct email")}catch(t){console.error("Error:",t),alert("Something went wrong, try again")}});const k=document.getElementById("exercises-search-form"),v=k.querySelector(".exercises-search-input"),y=document.querySelector(".exercises-list-page2"),h=document.querySelector(".exercises-inputclear-icon");k.addEventListener("submit",async e=>{e.preventDefault();const t=v.value.trim().toLowerCase();try{await N(t)}catch(n){console.error(n)}});v.addEventListener("input",D);function D(){v.value.trim()!==""?h.classList.remove("exercises-is-hidden"):h.classList.add("exercises-is-hidden")}function O(){const e=document.getElementById("exercises-search-input");e&&(e.value="")}h.addEventListener("click",O);async function R(e){try{return(await l.get(`https://energyflow.b.goit.study/api/exercises?bodypart=back&muscles=lats&equipment=barbell&keyword=${e}&page=1&limit=10`)).data}catch(t){throw console.error("Error fetching exercises:",t),t}}async function N(e){try{const t=await R(e);if(y.innerHTML="",t.results.length>0){const n=t.results.map(s=>`
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
      `).join("");y.innerHTML=n}else y.innerHTML='<p class="no-results-message">Unfortunately, <span class="error-message">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>'}catch(t){console.error(t)}}document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".exercises-list");e.addEventListener("click",function(n){var s=n.target;s.classList.contains("exercises-start-button")&&(s.getAttribute("data-id"),fetch("https://energyflow.b.goit.study/api/exercises/?id=").then(a=>{if(!a.ok)throw new Error("Network response was not ok");return a.json()}).then(a=>{document.getElementById("modalTitle").textContent=a.name,document.getElementById("modalImage").src=a.gifUrl,document.getElementById("modalName").textContent=a.name,document.getElementById("modalRating").textContent=a.rating,document.getElementById("modalTarget").textContent=a.bodyPart,document.getElementById("modalEquipment").textContent=a.equipment,document.getElementById("modalPopularity").textContent=a.popularity,document.getElementById("modalBurnedCalories").textContent=a.burnedCalories+" cal / "+a.time+" min",document.getElementById("modalDescription").textContent=a.description;var r=document.getElementById("pop-up-exercise");r.style.display="flex"}).catch(a=>{console.error("There was a problem with your fetch operation:",a)}))});var t=document.getElementById("closeBtn");t.addEventListener("click",function(){var n=document.getElementById("pop-up-exercise");n.style.display="none"})});function T(e,t){const n=document.getElementById("tui-pagination-container"),s=t<5?t:5,a={totalItems:e*t,itemsPerPage:e,visiblePages:s,centerAlign:!0},r=new q(n,a);return s<=1?n.style.display="none":n.style.display="block",r}function o(e){return e.charAt(0).toUpperCase()+e.slice(1)}const i=document.querySelector(".exercises-list");document.querySelector(".exercises-bottom-buttons");let g="Muscles",m=1;const B=12;let c;async function p(e,t){let n=new URLSearchParams({filter:e,page:t,limit:B});try{await l.get(`https://energyflow.b.goit.study/api/filters?${n}`).then(s=>{let a=s.data.results;c=s.data.totalPages,console.log("Total Pages: ",c);const r=a.map(({name:d,filter:u,imgUrl:x})=>`<li class="exercises-list-item" data-name="${d}" data-filter="${u}">
            <div class="exercises-item"
            style="background:
            linear-gradient(0deg,rgba(16, 16, 16, 0.7) 0%, rgba(16, 16, 16, 0.7) 100%),
            url(${x}),lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; 
            background-size: cover;">
            <p class="exercises-item-name">${o(d)}</p>
            <p class="exercises-item-subname">${u}</p>
            </div>
          </li>`).join("");i.insertAdjacentHTML("beforeend",r),U()}).catch(s=>{console.log(s.response.data.message)})}catch(s){console.error("Error:",s),alert("Something went wrong, try again")}}await p(g,m);T(12,c).on("afterMove",({page:e})=>{console.log("Moved",e),i.innerHTML="",p(g,e)});function U(){const e=document.querySelectorAll(".exercises-list-item");for(const t of e)t.addEventListener("click",function(n){const s=n.currentTarget.dataset.name,a=n.currentTarget.dataset.filter;_({filter:a,name:s}),console.log("Clicked: ",o(s),a)})}const j=document.querySelectorAll(".exercises-filter-button");for(const e of j)e.addEventListener("click",async function(t){const n=t.currentTarget.dataset.name;g=n,console.log("Clicked the button: ",n),i.innerHTML="",await p(n,m),T(12,c).on("afterMove",({page:s})=>{console.log("Moved",s),console.log("Total Pages Pressed",c),i.innerHTML="",p(g,s)}),console.log(n,m)});function _({filter:e,name:t}){const s={"Body parts":"bodypart",Muscles:"muscles",Equipment:"equipment"}[e];new URLSearchParams({muscles:t,page:1,limit:9}),l.get(`https://energyflow.b.goit.study/api/exercises?${s}=${t.toLowerCase()}&page=${m}&limit${B}`).then(a=>{let r=a.data.results;console.log(r);const d=r.map(({bodyPart:u,burnedCalories:x,name:I,_id:$,target:M,rating:S})=>`<li class="exercises-item-page2">
            <div class="exercises-card">
              <div class="exercises-card-top">
                <div class="exercises-kind-wrapper">
                  <p class="exercises-card-kind">WORKOUT</p>
                  <div class="exercises-card-rating">
                    <p class="exercises-rating-value">${S}</p>
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
                <button class="exercises-start-button" id=${$}>
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
                <p class="exercises-card-exname">${o(I)}</p>
              </div>
              <ul class="exercises-card-info">
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Burned calories: </span>${x}
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Body part: </span>${o(u)}
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Target: </span>${o(M)}
                </li>
              </ul>
            </div>
          </li> `).join("");i.innerHTML="",i.insertAdjacentHTML("beforeend",d)}).catch(a=>{console.log(a.response.data.message)})}document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("scrollTop");function t(){window.scrollTo({top:0,behavior:"smooth"})}e.addEventListener("click",t)});
//# sourceMappingURL=commonHelpers2.js.map
