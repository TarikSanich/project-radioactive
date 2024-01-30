import"./assets/header-40f54f50.js";import{n as I,a as p,P as O}from"./assets/vendor-ae726d3c.js";const L=document.querySelector(".quote__backend"),q=new Date().toLocaleDateString();async function U(){L.innerHTML=`
        <span class="loader"></span>
        <span>We're looking a quote for you...</span>
    `;try{return(await p.get("https://energyflow.b.goit.study/api/quote")).data}catch{I.Notify.failure("Something went wrong, try again")}}function M(e,t){return`<p class="quote__backend-text">${t}</p>
            <p class="quote__backend-author">${e}</p>`}function N(){if(localStorage.getItem("quote")&&localStorage.getItem("savedDate")===q){const{author:e,quote:t}=JSON.parse(localStorage.getItem("quote"));L.innerHTML=M(e,t)}else U().then(({author:e,quote:t})=>{const a={author:e,quote:t};localStorage.setItem("quote",JSON.stringify(a)),localStorage.setItem("savedDate",q),L.innerHTML=M(e,t)}).catch(e=>I.Notify.failure(e.message))}N();const _=document.getElementById("subscriptionForm"),k=document.getElementById("email"),j=new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/);_.addEventListener("submit",async function(e){e.preventDefault();try{j.test(k.value)?await p.post("https://energyflow.b.goit.study/api/subscription",{email:k.value}).then(t=>{console.log(t.data.message)}).catch(t=>{console.log(t.response.data.message)}):alert("Please enter the correct email")}catch(t){console.error("Error:",t),alert("Something went wrong, try again")}});const $=document.getElementById("exercises-search-form"),B=$.querySelector(".exercises-search-input"),E=document.querySelector(".exercises-list-page2"),T=document.querySelector(".exercises-inputclear-icon");$.addEventListener("submit",async e=>{e.preventDefault();const t=B.value.trim().toLowerCase();try{await Q(t)}catch(a){console.error(a)}});B.addEventListener("input",F);function F(){B.value.trim()!==""?T.classList.remove("exercises-is-hidden"):T.classList.add("exercises-is-hidden")}function z(){const e=document.getElementById("exercises-search-input");e&&(e.value="")}T.addEventListener("click",z);async function J(e){try{return(await p.get(`https://energyflow.b.goit.study/api/exercises?bodypart=back&muscles=lats&equipment=barbell&keyword=${e}&page=1&limit=10`)).data}catch(t){throw console.error("Error fetching exercises:",t),t}}async function Q(e){try{const t=await J(e);if(E.innerHTML="",t.results.length>0){const a=t.results.map(s=>`
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
      `).join("");E.innerHTML=a}else E.innerHTML='<p class="no-results-message">Unfortunately, <span class="error-message">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>'}catch(t){console.error(t)}}document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".exercises-start-button"),t=document.querySelectorAll(".openModalBtn"),a=document.querySelector(".pop-up-exercise"),s=document.getElementById("modalTitle"),n=document.getElementById("modalImage"),o=document.getElementById("modalBodyPart"),c=document.getElementById("modalEquipment"),l=document.getElementById("modalTarget"),u=document.getElementById("modalDescription"),y=document.getElementById("modalRating"),h=document.getElementById("modalBurnedCalories"),w=document.getElementById("modalTime"),b=document.getElementById("modalPopularity"),H=document.querySelector(".add-to-favorites-btn"),D=document.querySelector(".give-rating-btn");H.addEventListener("click",function(){}),D.addEventListener("click",function(){}),e.forEach(function(r){r.addEventListener("click",function(){var i=r.getAttribute("data-id");S(i)})}),t.forEach(function(r){r.addEventListener("click",function(){var i=r.getAttribute("data-id");S(i)})});function S(r){var i=new XMLHttpRequest;i.open("GET","https://energyflow.b.goit.study/api/data?id="+r,!0),i.onreadystatechange=function(){if(i.readyState===XMLHttpRequest.DONE)if(i.status===200){var A=JSON.parse(i.responseText);R(A)}else console.error("Ошибка запроса на сервер: "+i.status)},i.send()}function R(r){s.textContent=r.name,n.src=r.gifUrl,o.textContent=r.bodyPart,c.textContent=r.equipment,l.textContent=r.target,u.textContent=r.description,y.textContent=r.rating,h.textContent=r.burnedCalories,w.textContent=r.time+" мин",b.textContent=r.popularity,a.style.display="flex"}});function P(e,t){const a=document.getElementById("tui-pagination-container"),s=t<5?t:5,n={totalItems:e*t,itemsPerPage:e,visiblePages:s,centerAlign:!0},o=new O(a,n);return s<=1?a.style.display="none":a.style.display="block",o}function m(e){return e.charAt(0).toUpperCase()+e.slice(1)}const d=document.querySelector(".exercises-list");document.querySelector(".exercises-bottom-buttons");let v="Muscles",f=1;const C=12;let g;async function x(e,t){let a=new URLSearchParams({filter:e,page:t,limit:C});try{await p.get(`https://energyflow.b.goit.study/api/filters?${a}`).then(s=>{let n=s.data.results;g=s.data.totalPages,console.log("Total Pages: ",g);const o=n.map(({name:c,filter:l,imgUrl:u})=>`<li class="exercises-list-item" data-name="${c}" data-filter="${l}">
            <div class="exercises-item"
            style="background:
            linear-gradient(0deg,rgba(16, 16, 16, 0.7) 0%, rgba(16, 16, 16, 0.7) 100%),
            url(${u}),lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; 
            background-size: cover;">
            <p class="exercises-item-name">${m(c)}</p>
            <p class="exercises-item-subname">${l}</p>
            </div>
          </li>`).join("");d.insertAdjacentHTML("beforeend",o),W()}).catch(s=>{console.log(s.response.data.message)})}catch(s){console.error("Error:",s),alert("Something went wrong, try again")}}await x(v,f);P(12,g).on("afterMove",({page:e})=>{console.log("Moved",e),d.innerHTML="",x(v,e)});function W(){const e=document.querySelectorAll(".exercises-list-item");for(const t of e)t.addEventListener("click",function(a){const s=a.currentTarget.dataset.name,n=a.currentTarget.dataset.filter;V({filter:n,name:s}),console.log("Clicked: ",m(s),n)})}const K=document.querySelectorAll(".exercises-filter-button");for(const e of K)e.addEventListener("click",async function(t){const a=t.currentTarget.dataset.name;v=a,console.log("Clicked the button: ",a),d.innerHTML="",await x(a,f),P(12,g).on("afterMove",({page:s})=>{console.log("Moved",s),console.log("Total Pages Pressed",g),d.innerHTML="",x(v,s)}),console.log(a,f)});function V({filter:e,name:t}){const s={"Body parts":"bodypart",Muscles:"muscles",Equipment:"equipment"}[e];new URLSearchParams({muscles:t,page:1,limit:9}),p.get(`https://energyflow.b.goit.study/api/exercises?${s}=${t.toLowerCase()}&page=${f}&limit${C}`).then(n=>{let o=n.data.results;console.log(o);const c=o.map(({bodyPart:l,burnedCalories:u,name:y,_id:h,target:w,rating:b})=>`<li class="exercises-item-page2" id=${h}>
            <div class="exercises-card">
              <div class="exercises-card-top">
                <div class="exercises-kind-wrapper">
                  <p class="exercises-card-kind">WORKOUT</p>
                  <div class="exercises-card-rating">
                    <p class="exercises-rating-value">${b}</p>
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
                <button class="exercises-start-button">
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
                <p class="exercises-card-exname">${m(y)}</p>
              </div>
              <ul class="exercises-card-info">
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Burned calories: </span>${u}
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Body part: </span>${m(l)}
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Target: </span>${m(w)}
                </li>
              </ul>
            </div>
          </li> `).join("");d.innerHTML="",d.insertAdjacentHTML("beforeend",c)}).catch(n=>{console.log(n.response.data.message)})}document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("scrollTop");function t(){window.scrollTo({top:0,behavior:"smooth"})}e.addEventListener("click",t)});
//# sourceMappingURL=commonHelpers2.js.map
