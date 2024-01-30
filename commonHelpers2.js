import"./assets/header-40f54f50.js";import{n as I,a as u,P as C}from"./assets/vendor-ae726d3c.js";const h=document.querySelector(".quote__backend"),b=new Date().toLocaleDateString();async function P(){h.innerHTML=`
        <span class="loader"></span>
        <span>We're looking a quote for you...</span>
    `;try{return(await u.get("https://energyflow.b.goit.study/api/quote")).data}catch{I.Notify.failure("Something went wrong, try again")}}function E(e,t){return`<p class="quote__backend-text">${t}</p>
            <p class="quote__backend-author">${e}</p>`}function H(){if(localStorage.getItem("quote")&&localStorage.getItem("savedDate")===b){const{author:e,quote:t}=JSON.parse(localStorage.getItem("quote"));h.innerHTML=E(e,t)}else P().then(({author:e,quote:t})=>{const n={author:e,quote:t};localStorage.setItem("quote",JSON.stringify(n)),localStorage.setItem("savedDate",b),h.innerHTML=E(e,t)}).catch(e=>I.Notify.failure(e.message))}H();const A=document.getElementById("subscriptionForm"),L=document.getElementById("email"),D=new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/);A.addEventListener("submit",async function(e){e.preventDefault();try{D.test(L.value)?await u.post("https://energyflow.b.goit.study/api/subscription",{email:L.value}).then(t=>{console.log(t.data.message)}).catch(t=>{console.log(t.response.data.message)}):alert("Please enter the correct email")}catch(t){console.error("Error:",t),alert("Something went wrong, try again")}});const k=document.getElementById("exercises-search-form"),w=k.querySelector(".exercises-search-input"),y=document.querySelector(".exercises-list-page2"),v=document.querySelector(".exercises-inputclear-icon");k.addEventListener("submit",async e=>{e.preventDefault();const t=w.value.trim().toLowerCase();try{await j(t)}catch(n){console.error(n)}});w.addEventListener("input",O);function O(){w.value.trim()!==""?v.classList.remove("exercises-is-hidden"):v.classList.add("exercises-is-hidden")}function R(){const e=document.getElementById("exercises-search-input");e&&(e.value="")}v.addEventListener("click",R);async function N(e){try{return(await u.get(`https://energyflow.b.goit.study/api/exercises?bodypart=back&muscles=lats&equipment=barbell&keyword=${e}&page=1&limit=10`)).data}catch(t){throw console.error("Error fetching exercises:",t),t}}async function j(e){try{const t=await N(e);if(y.innerHTML="",t.results.length>0){const n=t.results.map(s=>`
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
      `).join("");y.innerHTML=n}else y.innerHTML='<p class="no-results-message">Unfortunately, <span class="error-message">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>'}catch(t){console.error(t)}}document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".exercises-list");e.addEventListener("click",function(n){var s=n.target;if(s.classList.contains("exercises-start-button")){var a=s.getAttribute("data-id");fetch("https://energyflow.b.goit.study/api/exercises/?id="+a).then(r=>{if(!r.ok)throw new Error("Network response was not ok");return r.json()}).then(r=>{console.log(r),document.getElementById("modalTitle").textContent=r.name,document.getElementById("modalImage").src=r.gifUrl,document.getElementById("modalName").textContent=r.name,document.getElementById("modalRating").textContent=r.rating,document.getElementById("modalTarget").textContent=r.bodyPart,document.getElementById("modalEquipment").textContent=r.equipment,document.getElementById("modalPopularity").textContent=r.popularity,document.getElementById("modalBurnedCalories").textContent=r.burnedCalories+" cal / "+r.time+" min",document.getElementById("modalDescription").textContent=r.description;var i=document.getElementById("pop-up-exercise");i.style.display="flex"}).catch(r=>{console.error("There was a problem with your fetch operation:",r)})}});var t=document.getElementById("closeBtn");t.addEventListener("click",function(){var n=document.getElementById("pop-up-exercise");n.style.display="none"})});function B(e,t){const n=document.getElementById("tui-pagination-container"),s=t<5?t:5,a={totalItems:e*t,itemsPerPage:e,visiblePages:s,centerAlign:!0},r=new C(n,a);return s<=1?n.style.display="none":n.style.display="block",r}function l(e){return e.charAt(0).toUpperCase()+e.slice(1)}const c=document.querySelector(".exercises-list");document.querySelector(".exercises-bottom-buttons");let m="Muscles",p=1;const T=12;let d;async function x(e,t){let n=new URLSearchParams({filter:e,page:t,limit:T});try{await u.get(`https://energyflow.b.goit.study/api/filters?${n}`).then(s=>{let a=s.data.results;d=s.data.totalPages,console.log("Total Pages: ",d);const r=a.map(({name:i,filter:f,imgUrl:o})=>`<li class="exercises-list-item" data-name="${i}" data-filter="${f}">
            <div class="exercises-item"
            style="background:
            linear-gradient(0deg,rgba(16, 16, 16, 0.7) 0%, rgba(16, 16, 16, 0.7) 100%),
            url(${o}),lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; 
            background-size: cover;">
            <p class="exercises-item-name">${l(i)}</p>
            <p class="exercises-item-subname">${f}</p>
            </div>
          </li>`).join("");c.insertAdjacentHTML("beforeend",r),U()}).catch(s=>{console.log(s.response.data.message)})}catch(s){console.error("Error:",s),alert("Something went wrong, try again")}}await x(m,p);B(12,d).on("afterMove",({page:e})=>{console.log("Moved",e),c.innerHTML="",x(m,e)});function U(){const e=document.querySelectorAll(".exercises-list-item");for(const t of e)t.addEventListener("click",function(n){const s=n.currentTarget.dataset.name,a=n.currentTarget.dataset.filter;z({filter:a,name:s}),console.log("Clicked: ",l(s),a)})}const _=document.querySelectorAll(".exercises-filter-button");for(const e of _)e.addEventListener("click",async function(t){const n=t.currentTarget.dataset.name;m=n,console.log("Clicked the button: ",n),c.innerHTML="",await x(n,p),B(12,d).on("afterMove",({page:s})=>{console.log("Moved",s),console.log("Total Pages Pressed",d),c.innerHTML="",x(m,s)}),console.log(n,p)});function z({filter:e,name:t}){const s={"Body parts":"bodypart",Muscles:"muscles",Equipment:"equipment"}[e];u.get(`https://energyflow.b.goit.study/api/exercises?${s}=${t.toLowerCase()}&page=${p}&limit${T}`).then(a=>{const i=a.data.results.map(({bodyPart:o,burnedCalories:g,name:$,_id:S,target:q,rating:M})=>`<li class="exercises-item-page2">
            <div class="exercises-card">
              <div class="exercises-card-top">
                <div class="exercises-kind-wrapper">
                  <p class="exercises-card-kind">WORKOUT</p>
                  <div class="exercises-card-rating">
                    <p class="exercises-rating-value">${M}</p>
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
                <button class="exercises-start-button" id="${S}">
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
                <p class="exercises-card-exname">${l($)}</p>
              </div>
              <ul class="exercises-card-info">
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Burned calories: </span>${g}
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Body part: </span>${l(o)}
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Target: </span>${l(q)}
                </li>
              </ul>
            </div>
          </li> `).join("");c.innerHTML="",c.insertAdjacentHTML("beforeend",i),document.querySelectorAll(".exercises-start-button").forEach(o=>{o.addEventListener("click",function(){const g=o.id;localStorage.setItem("exerciseId",g),console.log("Clicked Start for exercise with ID:",g)})})}).catch(a=>{console.log(a.response.data.message)})}document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("scrollTop");function t(){window.scrollTo({top:0,behavior:"smooth"})}e.addEventListener("click",t)});
//# sourceMappingURL=commonHelpers2.js.map
