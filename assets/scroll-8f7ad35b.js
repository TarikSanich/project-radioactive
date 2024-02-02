import{i as m,a as B}from"./vendor-ebe44317.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const h={homeButtons:document.querySelectorAll(".home"),favoritesButtons:document.querySelectorAll(".favorites")};function b(){window.location.href.endsWith("favorites.html")?h.favoritesButtons.forEach(n=>{n.classList.add("current")}):h.homeButtons.forEach(n=>{n.classList.add("current")})}b();(()=>{const n={mobileMenu:document.querySelector(".mobile-menu"),body:document.querySelector("body"),shirmOpenButton:document.querySelector(".burger-menu"),shirmCloseButton:document.querySelector(".shirm-close-button")};n.shirmOpenButton.addEventListener("click",r),n.shirmCloseButton.addEventListener("click",r);function r(){n.mobileMenu.classList.toggle("menu-is-hidden"),n.body.classList.toggle("no-scroll")}})();function c(n){return n.charAt(0).toUpperCase()+n.slice(1)}function C(n){const r=document.querySelector(".add-to-favorites-btn");r.dataset.action=n,n=="Delete"&&(r.textContent="Remove from favorites"),document.querySelector(".exercises-list").addEventListener("click",i);async function i(t){let s=t.target;if(s.classList.contains("exercises-start-button")||s.parentElement.classList.contains("exercises-start-button")){let p=function(){const o=document.querySelector(".add-to-favorites-btn").dataset.id;if(o){let a=JSON.parse(localStorage.getItem("favorite"))||[];a.some(v=>v._id===o)?m.warning({title:"Denied",message:`The exercise ${c(u.name)} already exists in favorites`}):(a.push(u),localStorage.setItem("favorite",JSON.stringify(a)),m.success({title:"Success",message:`The exercise ${c(u.name)} succesfuly added to favorites`}))}else m.error({title:"Error",message:"The exercise cannot be added for some reason"});y.removeEventListener("click",p)},f;s.parentElement.classList.contains("exercises-start-button")?f=s.parentElement.getAttribute("id"):f=s.getAttribute("id");let u;async function E(){try{await B.get("https://energyflow.b.goit.study/api/exercises/"+f).then(({data:o})=>{console.log(o),document.getElementById("modalImage").src=o.gifUrl,document.getElementById("modalName").textContent=c(o.name),document.getElementById("modalRating").textContent=o.rating.toFixed(1),document.getElementById("modalTarget").textContent=c(o.target),document.getElementById("bodyPart").textContent=c(o.bodyPart),document.getElementById("modalEquipment").textContent=c(o.equipment),document.getElementById("modalPopularity").textContent=o.popularity,document.getElementById("modalBurnedCalories").textContent=o.burnedCalories+" cal / "+o.time+" min",document.getElementById("modalDescription").textContent=o.description,document.querySelector(".add-to-favorites-btn").dataset.id=o._id;var a=document.getElementById("pop-up-exercise");a.style.display="flex",u=o,x(o.rating)})}catch{m.error({title:"Error",message:"Something went wrong, try again"})}}await E();const y=document.querySelector(".add-to-favorites-btn");y.addEventListener("click",p)}}document.getElementById("closeBtn").addEventListener("click",function(){const t=document.getElementById("pop-up-exercise");t.style.display="none"})}function x(n){const r=document.getElementById("rating-container");r.innerHTML="";const l=5,i=Math.min(Math.round(n),l);for(let e=0;e<l;e++){const t=document.createElement("span");t.classList.add("star"),e<i?t.innerHTML="&#9733;":t.innerHTML="&#9734;",r.appendChild(t)}}const d=document.getElementById("scrollTopBtn");window.onscroll=function(){L()};function L(){document.body.scrollTop>20||document.documentElement.scrollTop>20?(d.style.display="block",d.addEventListener("click",g)):(d.style.display="none",d.removeEventListener("click",g))}d.addEventListener("click",g);function g(){window.scrollTo({top:0,behavior:"smooth"})}export{C as a,c};
//# sourceMappingURL=scroll-8f7ad35b.js.map
