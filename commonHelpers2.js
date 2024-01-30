import"./assets/header-40f54f50.js";import{n as L,a as l,P as q}from"./assets/vendor-ae726d3c.js";const y=document.querySelector(".quote__backend"),w=new Date().toLocaleDateString();async function P(){y.innerHTML=`
        <span class="loader"></span>
        <span>We're looking a quote for you...</span>
    `;try{return(await l.get("https://energyflow.b.goit.study/api/quote")).data}catch{L.Notify.failure("Something went wrong, try again")}}function b(t,e){return`<p class="quote__backend-text">${e}</p>
            <p class="quote__backend-author">${t}</p>`}function C(){if(localStorage.getItem("quote")&&localStorage.getItem("savedDate")===w){const{author:t,quote:e}=JSON.parse(localStorage.getItem("quote"));y.innerHTML=b(t,e)}else P().then(({author:t,quote:e})=>{const a={author:t,quote:e};localStorage.setItem("quote",JSON.stringify(a)),localStorage.setItem("savedDate",w),y.innerHTML=b(t,e)}).catch(t=>L.Notify.failure(t.message))}C();const H=document.getElementById("subscriptionForm"),E=document.getElementById("email"),A=new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/);H.addEventListener("submit",async function(t){t.preventDefault();try{A.test(E.value)?await l.post("https://energyflow.b.goit.study/api/subscription",{email:E.value}).then(e=>{console.log(e.data.message)}).catch(e=>{console.log(e.response.data.message)}):alert("Please enter the correct email")}catch(e){console.error("Error:",e),alert("Something went wrong, try again")}});const k=document.getElementById("exercises-search-form"),v=k.querySelector(".exercises-search-input"),f=document.querySelector(".exercises-list-page2"),h=document.querySelector(".exercises-inputclear-icon");k.addEventListener("submit",async t=>{t.preventDefault();const e=v.value.trim().toLowerCase();try{await N(e)}catch(a){console.error(a)}});v.addEventListener("input",D);function D(){v.value.trim()!==""?h.classList.remove("exercises-is-hidden"):h.classList.add("exercises-is-hidden")}function O(){const t=document.getElementById("exercises-search-input");t&&(t.value="")}h.addEventListener("click",O);async function R(t){try{return(await l.get(`https://energyflow.b.goit.study/api/exercises?bodypart=back&muscles=lats&equipment=barbell&keyword=${t}&page=1&limit=10`)).data}catch(e){throw console.error("Error fetching exercises:",e),e}}async function N(t){try{const e=await R(t);if(f.innerHTML="",e.results.length>0){const a=e.results.map(s=>`
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
      `).join("");f.innerHTML=a}else f.innerHTML='<p class="no-results-message">Unfortunately, <span class="error-message">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>'}catch(e){console.error(e)}}document.addEventListener("DOMContentLoaded",function(){var t=document.getElementById(".exercises-start-button");t.addEventListener("click",function(){fetch("https://energyflow.b.goit.study/api/data?id=64f389465ae26083f39b17a4").then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>{document.getElementById("modalTitle").textContent=e.name,document.getElementById("modalImage").src=e.gifUrl,document.getElementById("modalName").textContent=e.name,document.getElementById("modalRating").textContent=e.rating,document.getElementById("modalTarget").textContent=e.bodyPart,document.getElementById("modalEquipment").textContent=e.equipment,document.getElementById("modalPopularity").textContent=e.popularity,document.getElementById("modalBurnedCalories").textContent=e.burnedCalories+" cal / "+e.time+" min",document.getElementById("modalDescription").textContent=e.description;var a=document.querySelector(".pop-up-exercise");a.style.display="block";var s=document.getElementById("closeBtn");s.onclick=function(){a.style.display="none"}}).catch(e=>{console.error("There was a problem with your fetch operation:",e)})})});function T(t,e){const a=document.getElementById("tui-pagination-container"),s=e<5?e:5,n={totalItems:t*e,itemsPerPage:t,visiblePages:s,centerAlign:!0},r=new q(a,n);return s<=1?a.style.display="none":a.style.display="block",r}function i(t){return t.charAt(0).toUpperCase()+t.slice(1)}const o=document.querySelector(".exercises-list");document.querySelector(".exercises-bottom-buttons");let g="Muscles",m=1;const B=12;let c;async function p(t,e){let a=new URLSearchParams({filter:t,page:e,limit:B});try{await l.get(`https://energyflow.b.goit.study/api/filters?${a}`).then(s=>{let n=s.data.results;c=s.data.totalPages,console.log("Total Pages: ",c);const r=n.map(({name:d,filter:u,imgUrl:x})=>`<li class="exercises-list-item" data-name="${d}" data-filter="${u}">
            <div class="exercises-item"
            style="background:
            linear-gradient(0deg,rgba(16, 16, 16, 0.7) 0%, rgba(16, 16, 16, 0.7) 100%),
            url(${x}),lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; 
            background-size: cover;">
            <p class="exercises-item-name">${i(d)}</p>
            <p class="exercises-item-subname">${u}</p>
            </div>
          </li>`).join("");o.insertAdjacentHTML("beforeend",r),U()}).catch(s=>{console.log(s.response.data.message)})}catch(s){console.error("Error:",s),alert("Something went wrong, try again")}}await p(g,m);T(12,c).on("afterMove",({page:t})=>{console.log("Moved",t),o.innerHTML="",p(g,t)});function U(){const t=document.querySelectorAll(".exercises-list-item");for(const e of t)e.addEventListener("click",function(a){const s=a.currentTarget.dataset.name,n=a.currentTarget.dataset.filter;_({filter:n,name:s}),console.log("Clicked: ",i(s),n)})}const j=document.querySelectorAll(".exercises-filter-button");for(const t of j)t.addEventListener("click",async function(e){const a=e.currentTarget.dataset.name;g=a,console.log("Clicked the button: ",a),o.innerHTML="",await p(a,m),T(12,c).on("afterMove",({page:s})=>{console.log("Moved",s),console.log("Total Pages Pressed",c),o.innerHTML="",p(g,s)}),console.log(a,m)});function _({filter:t,name:e}){const s={"Body parts":"bodypart",Muscles:"muscles",Equipment:"equipment"}[t];new URLSearchParams({muscles:e,page:1,limit:9}),l.get(`https://energyflow.b.goit.study/api/exercises?${s}=${e.toLowerCase()}&page=${m}&limit${B}`).then(n=>{let r=n.data.results;console.log(r);const d=r.map(({bodyPart:u,burnedCalories:x,name:$,_id:I,target:M,rating:S})=>`<li class="exercises-item-page2">
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
                <button class="exercises-start-button" id=${I}>
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
                <p class="exercises-card-exname">${i($)}</p>
              </div>
              <ul class="exercises-card-info">
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Burned calories: </span>${x}
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Body part: </span>${i(u)}
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Target: </span>${i(M)}
                </li>
              </ul>
            </div>
          </li> `).join("");o.innerHTML="",o.insertAdjacentHTML("beforeend",d)}).catch(n=>{console.log(n.response.data.message)})}document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("scrollTop");function e(){window.scrollTo({top:0,behavior:"smooth"})}t.addEventListener("click",e)});
//# sourceMappingURL=commonHelpers2.js.map
