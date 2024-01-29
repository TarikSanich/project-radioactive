import"./assets/header-b6fb7402.js";import{n as u,a as m}from"./assets/vendor-a94eb9aa.js";const c=document.querySelector(".quote__backend"),l=new Date().toLocaleDateString();async function I(){c.innerHTML=`
        <span class="loader"></span>
        <span>We're looking a quote for you...</span>
    `;try{return(await m.get("https://energyflow.b.goit.study/api/quote")).data}catch{u.Notify.failure("Something went wrong, try again")}}function d(e,t){return`<p class="quote__backend-text">${t}</p>
            <p class="quote__backend-author">${e}</p>`}function L(){if(localStorage.getItem("quote")&&localStorage.getItem("savedDate")===l){const{author:e,quote:t}=JSON.parse(localStorage.getItem("quote"));c.innerHTML=d(e,t)}else I().then(({author:e,quote:t})=>{const n={author:e,quote:t};localStorage.setItem("quote",JSON.stringify(n)),localStorage.setItem("savedDate",l),c.innerHTML=d(e,t)}).catch(e=>u.Notify.failure(e.message))}L();document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("subscriptionForm");e.addEventListener("submit",function(t){if(t.preventDefault(),!e.checkValidity())alert("Please fill in a valid email address.");else{const n=new FormData(e);fetch("https://energyflow.b.goit.study/api-docs/#/Subscriptions",{method:"POST",body:n}).then(o=>{if(!o.ok)throw new Error("Network response was not ok");return o.json()}).then(o=>{alert("We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being."),console.log("Server response:",o)}).catch(o=>{console.error("Error:",o)})}})});const p=document.getElementById("exercises-search-form"),T=p.querySelector(".exercises-search-input"),i=document.querySelector(".exercises-list-page2");p.addEventListener("submit",async e=>{e.preventDefault();const t=T.value.trim().toLowerCase();try{await k(t)}catch(n){console.error(n)}});async function k(e){try{const n=(await m.get(`https://energyflow.b.goit.study/api/exercises?bodypart=back&muscles=lats&equipment=barbell&keyword=${e}&page=1&limit=10`)).data;if(i.innerHTML="",n.length>0){const o=n.map(a=>`
        <li class="exercises-item-page2">
          <div class="exercises-card">
            <div class="exercises-card-top">
              <div class="exercises-kind-wrapper">
                <p class="exercises-card-kind">WORKOUT</p>
                <div class="exercises-card-rating">
                  <p class="exercises-rating-value">${a.rating}</p>
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
              <p class="exercises-card-exname">${a.name}</p>
            </div>
            <ul class="exercises-card-info">
              <li class="exercises-info-data">
                <span class="exercises-data-name">Burned calories: </span>${a.calories} / ${a.duration} min
              </li>
              <li class="exercises-info-data">
                <span class="exercises-data-name">Body part: </span>${a.bodyPart}
              </li>
              <li class="exercises-info-data">
                <span class="exercises-data-name">Target: </span>${a.targetMuscle}
              </li>
            </ul>
          </div>
        </li>
      `).join("");i.innerHTML=o}else i.innerHTML='<p class="no-results-message">Unfortunately, <span class="error-message">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>'}catch(t){console.error(t)}}document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll(".openModalBtn"),t=document.querySelector(".pop-up-exercise"),n=document.getElementById("modalTitle"),o=document.getElementById("modalImage"),a=document.getElementById("modalBodyPart"),g=document.getElementById("modalEquipment"),y=document.getElementById("modalTarget"),f=document.getElementById("modalDescription"),v=document.getElementById("modalRating"),x=document.getElementById("modalBurnedCalories"),h=document.getElementById("modalTime"),w=document.getElementById("modalPopularity"),b=document.querySelector(".add-to-favorites-btn"),E=document.querySelector(".give-rating-btn");b.addEventListener("click",function(){}),E.addEventListener("click",function(){}),e.forEach(function(s){s.addEventListener("click",function(){var r=s.getAttribute("data-id");S(r)})});function S(s){var r=new XMLHttpRequest;r.open("GET","https://energyflow.b.goit.study/api/data?id="+s,!0),r.onreadystatechange=function(){if(r.readyState===XMLHttpRequest.DONE)if(r.status===200){var B=JSON.parse(r.responseText);q(B)}else console.error("Ошибка запроса на сервер: "+r.status)},r.send()}function q(s){n.textContent=s.name,o.src=s.gifUrl,a.textContent=s.bodyPart,g.textContent=s.equipment,y.textContent=s.target,f.textContent=s.description,v.textContent=s.rating,x.textContent=s.burnedCalories,h.textContent=s.time+" мин",w.textContent=s.popularity,t.style.display="flex"}});
//# sourceMappingURL=commonHelpers2.js.map
