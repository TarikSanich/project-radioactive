import"./assets/header-b6fb7402.js";import{n as d,a as u}from"./assets/vendor-a94eb9aa.js";const i=document.querySelector(".quote__backend"),c=new Date().toLocaleDateString();async function g(){i.innerHTML=`
        <span class="loader"></span>
        <span>We're looking a quote for you...</span>
    `;try{return(await u.get("https://energyflow.b.goit.study/api/quote")).data}catch{d.Notify.failure("Something went wrong, try again")}}function l(t,s){return`<p class="quote__backend-text">${s}</p>
            <p class="quote__backend-author">${t}</p>`}function y(){if(localStorage.getItem("quote")&&localStorage.getItem("savedDate")===c){const{author:t,quote:s}=JSON.parse(localStorage.getItem("quote"));i.innerHTML=l(t,s)}else g().then(({author:t,quote:s})=>{const n={author:t,quote:s};localStorage.setItem("quote",JSON.stringify(n)),localStorage.setItem("savedDate",c),i.innerHTML=l(t,s)}).catch(t=>d.Notify.failure(t.message))}y();document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("subscriptionForm");t.addEventListener("submit",function(s){if(s.preventDefault(),!t.checkValidity())alert("Please fill in a valid email address.");else{const n=new FormData(t);fetch("https://energyflow.b.goit.study/api-docs/#/Subscriptions",{method:"POST",body:n}).then(o=>{if(!o.ok)throw new Error("Network response was not ok");return o.json()}).then(o=>{alert("We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being."),console.log("Server response:",o)}).catch(o=>{console.error("Error:",o)})}})});const p=document.getElementById("exercises-search-form"),f=p.querySelector(".exercises-search-input"),a=document.querySelector(".exercises-list-page2");p.addEventListener("submit",async t=>{t.preventDefault();const s=f.value.trim().toLowerCase();try{await x(s)}catch(n){console.error(n)}});async function x(t){try{const n=(await u.get(`https://energyflow.b.goit.study/api/exercises?bodypart=back&muscles=lats&equipment=barbell&keyword=${t}&page=1&limit=10`)).data;if(a.innerHTML="",n.length>0){const o=n.map(e=>`
        <li class="exercises-item-page2">
          <div class="exercises-card">
            <div class="exercises-card-top">
              <div class="exercises-kind-wrapper">
                <p class="exercises-card-kind">WORKOUT</p>
                <div class="exercises-card-rating">
                  <p class="exercises-rating-value">${e.rating}</p>
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
              <p class="exercises-card-exname">${e.name}</p>
            </div>
            <ul class="exercises-card-info">
              <li class="exercises-info-data">
                <span class="exercises-data-name">Burned calories: </span>${e.calories} / ${e.duration} min
              </li>
              <li class="exercises-info-data">
                <span class="exercises-data-name">Body part: </span>${e.bodyPart}
              </li>
              <li class="exercises-info-data">
                <span class="exercises-data-name">Target: </span>${e.targetMuscle}
              </li>
            </ul>
          </div>
        </li>
      `).join("");a.innerHTML=o}else a.innerHTML='<p class="no-results-message">Unfortunately, <span class="error-message">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>'}catch(s){console.error(s)}}document.addEventListener("DOMContentLoaded",function(){var t=document.querySelectorAll(".openModalBtn"),s=document.querySelector(".pop-up-exercise");t.forEach(function(e){e.addEventListener("click",function(){var r=e.getAttribute("data-id");n(r)})});function n(e){var r=new XMLHttpRequest;r.open("GET","https://energyflow.b.goit.study/api/data?id="+e,!0),r.onreadystatechange=function(){if(r.readyState===XMLHttpRequest.DONE)if(r.status===200){var m=JSON.parse(r.responseText);o(m)}else console.error("Ошибка запроса на сервер: "+r.status)},r.send()}function o(e){document.getElementById("modalTitle").textContent=e.name,document.getElementById("modalImage").src=e.gifUrl,document.getElementById("modalBodyPart").textContent=e.bodyPart,document.getElementById("modalEquipment").textContent=e.equipment,document.getElementById("modalTarget").textContent=e.target,document.getElementById("modalDescription").textContent=e.description,document.getElementById("modalRating").textContent=e.rating,document.getElementById("modalBurnedCalories").textContent=e.burnedCalories,document.getElementById("modalTime").textContent=e.time+" мин",document.getElementById("modalPopularity").textContent=e.popularity,s.style.display="flex"}});
//# sourceMappingURL=commonHelpers2.js.map
