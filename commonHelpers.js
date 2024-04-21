import{A as b,S as v,K as p,M as f,N as g,a as h,i as E}from"./assets/vendor-b2910d74.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const m of n.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&a(m)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const B=document.querySelector(".header-dropdown"),c=document.querySelector(".header-navigation");B.addEventListener("click",q);function q(){c.classList.contains("active")?(c.classList.add("collapsed"),setTimeout(()=>{c.classList.remove("active")},500)):(c.classList.remove("collapsed"),c.classList.add("active"))}const A=document.querySelector(".burger-open-button"),P=document.querySelector(".menu-close-button"),u=document.querySelector(".header-mobile-menu");A.addEventListener("click",O);P.addEventListener("click",M);function O(){u.classList.remove("menu-close"),u.classList.add("menu-open")}function M(){u.classList.remove("menu-open"),u.classList.add("menu-close")}document.querySelector(".menu-sections-link");document.querySelector(".menu-header-navigation");new b(".about-me-info-list.accordion-container",{duration:300,openOnInit:[0],showMultiple:!0});const N=document.querySelectorAll(".disclosure-button.ac-trigger");N.forEach(e=>{e.addEventListener("click",D)});function D(e){e.currentTarget.firstElementChild.classList.toggle("rotate")}new v(".about-me-swiper",{modules:[p,f,g],keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{invert:!0},navigation:{nextEl:".swiper-button"},loop:!0,slidesPerView:2,slideActiveClass:"is-active",breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}}});new v(".projects-swiper",{modules:[p,f,g],keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{invert:!0},navigation:{nextEl:".project-btn-swap.next",prevEl:".project-btn-swap.prev",disabledClass:"disabled"},loop:!1,slidesPerView:1,speed:1e3});new b(".faq-list.accordion-container",{duration:800,showMultiple:!0});const k=document.querySelectorAll(".faq-btn.ac-trigger");k.forEach(e=>{e.addEventListener("click",T)});function T(e){e.currentTarget.firstElementChild.classList.toggle("rotate")}const V=document.querySelector(".covers"),C=document.querySelectorAll(".covers-img"),_=new IntersectionObserver($);_.observe(V);function $(e){const t=e[0];C.forEach(s=>{t.isIntersecting?s.classList.add("covers-active"):s.classList.remove("covers-active")})}async function j(){const s="https://portfolio-js.b.goit.study/api/reviews";return(await h.get(s)).data}async function F(e){const a="https://portfolio-js.b.goit.study/api/requests";return await h.post(a,e)}new v(".reviews-swiper",{modules:[p,f,g],keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{invert:!0},navigation:{nextEl:".review-swiper-button.next",prevEl:".review-swiper-button.prev",disabledClass:"disabled"},loop:!1,slidesPerView:1,breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}}});const S=document.querySelector(".reviews-list");document.addEventListener("DOMContentLoaded",()=>{let e;j().then(t=>{e=t.map(s=>x(s)).join(""),S.insertAdjacentHTML("beforeend",e)}).catch(()=>{R()})});function x(e){return`<li class="swiper-slide reviews-list-item">
            <img width="48" class="reviews-img" src="${e.avatar_url}" alt="${e.author}" />
            <div class="reviews-customer-info">
              <h3 class="reviews-customer-author">${e.author}</h3>
              <p class="reviews-descr">${e.review}</p>
            </div>
          </li>`}function R(){S.insertAdjacentHTML("beforeend",'<p class="not-found-info">NOT FOUND</p>'),E.error({position:"topRight",message:"Аn error occurred. Please reload your page!"})}const K=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,w="user-email",y="user-comment",L=document.querySelector(".footer-form"),r=document.getElementById("user-email"),i=document.getElementById("user-comment"),l=document.querySelector(".form-fields"),d=document.querySelector(".backdrop");J();r.addEventListener("input",U);i.addEventListener("input",z);L.addEventListener("submit",H);L.addEventListener("input",e=>{const t=r.value,s=i.value;G(t,s)});document.addEventListener("keydown",e=>{e.key==="Escape"&&d.classList.remove("is-open")});d.addEventListener("click",e=>{(e.target===d||e.target.closest(".modal-close-btn"))&&Z()});function U(){K.test(r.value.trim())?(r.classList.remove("invalid"),r.classList.add("valid"),l.dataset.status="Success!",l.style.setProperty("--status-color","#3cbc81")):(r.classList.remove("valid"),r.classList.add("invalid"),l.dataset.status="Invalid email, try again",l.style.setProperty("--status-color","#e74a3b"))}function z(){i.value.trim().length>=3?(i.classList.remove("invalid"),i.classList.add("valid")):(i.classList.remove("valid"),i.classList.add("invalid"))}async function H(e){e.preventDefault();const t=e.target.elements.userEmail.value.trim().toLowerCase(),s=e.target.elements.userComment.value.trim();await F({email:t,comment:s}).then(()=>{Q(),I(),d.classList.add("is-open")}).catch(o=>{E.error({position:"topRight",message:"An error occurred while sending the request. Try again."})})}function Z(){I(),d.classList.remove("is-open")}function I(){l.dataset.status="",r.classList.remove("valid"),i.classList.remove("valid"),L.reset()}function G(e,t){localStorage.setItem(w,e),localStorage.setItem(y,t)}function J(){r.value=localStorage.getItem(w)??"",i.value=localStorage.getItem(y)??""}function Q(){localStorage.removeItem(w),localStorage.removeItem(y)}
//# sourceMappingURL=commonHelpers.js.map
