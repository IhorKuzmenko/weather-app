import{a as k,i as $}from"./vendor-weOZHO9C.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();const W="324d82384f0b6b757e9697b6aa6e9ef8";async function I(e){const s=new URLSearchParams({q:e,appid:W,units:"metric"});return(await k.get(`https://api.openweathermap.org/data/2.5/weather?${s}`)).data}async function R(e,s){const t=new URLSearchParams({lat:e,lon:s,appid:W,units:"metric"});return(await k.get(`https://api.openweathermap.org/data/2.5/weather?${t}`)).data}async function U(e){const s=new URLSearchParams({q:e,appid:W,units:"metric"});return(await k.get(`https://api.openweathermap.org/data/2.5/forecast?${s}`)).data}const d="/weather-app/assets/icons-D0JtYWc4.svg";function O(){var i;const e=document.querySelector(".forecast-5days-wrapper"),s=document.querySelector(".forecast-5days"),t=document.querySelector(".forecast-button-left"),n=document.querySelector(".forecast-button-right");if(!e||!s||!t||!n)return;const o=((i=s.querySelector(".forecast-item"))==null?void 0:i.offsetWidth)||0,a=parseInt(getComputedStyle(s).gap)||0,r=o+a;n.addEventListener("click",()=>{e.scrollBy({left:r,behavior:"smooth"})}),t.addEventListener("click",()=>{e.scrollBy({left:-r,behavior:"smooth"})});function c(){t.style.opacity=e.scrollLeft>0?"1":"0.3",n.style.opacity=e.scrollLeft+e.clientWidth>=s.scrollWidth?"0.3":"1"}e.addEventListener("scroll",c),c(),e.scrollLeft=0}function _(){const e=document.querySelector(".forecast-hours-wrapper"),s=document.querySelector(".forecast-hours"),t=document.querySelector(".scroll-bar"),n=document.querySelector(".scroll-thumb");if(!e||!s||!t||!n)return;function o(){const a=s.scrollWidth,r=e.clientWidth,c=e.scrollLeft;if(a<=r+10){t.style.opacity="0",n.style.width="0";return}t.style.opacity="1";const i=t.offsetWidth,u=Math.max(r/a*i,30),l=a-r,f=l===0?0:c/l,h=i-u,y=f*h;n.style.width=`${u}px`,n.style.left=`${y}px`}e.addEventListener("scroll",o),window.addEventListener("resize",o),o()}const w=document.querySelector(".weather-card"),v=document.querySelector(".datetime-card"),F={"01d":"icon-sun","01n":"icon-sun","02d":"icon-cloudy_and_sun","02n":"icon-cloudy_and_sun","03d":"icon-cloudy","03n":"icon-cloudy","04d":"icon-cloudy","04n":"icon-cloudy","09d":"icon-weather","09n":"icon-weather","10d":"icon-weather","10n":"icon-weather","11d":"icon-weather","11n":"icon-weather","13d":"icon-snow","13n":"icon-snow","50d":"icon-cloudy","50n":"icon-cloudy"};function j(e){if(!w||!v)return;const{city:s,country:t,temp:n,tempMin:o,tempMax:a,icon:r,day:c,weekday:i,month:u,time:l,sunrise:f,sunset:h}=e,y=F[r]||"icon-sun",D=`
                <svg class="weather-icon">
                    <use href="${d}#${y}"></use>
                </svg>
                <p class="weather-location">${s}, ${t}</p>
                <div class="weather-temp-wrapper">
                  <p class="weather-temp">${n}&deg;</p>
                  <ul class="temp-box">
                    <li class="temp-item">
                      <p class="temp-name">min</p>
                      <p class="temp-value">${o}&deg;</p>
                    </li>
                    <li class="temp-item">
                      <p class="temp-name">max</p>
                      <p class="temp-value">${a}&deg;</p>
                    </li>
                  </ul>
                </div>
    `,q=`
            <ul class="datetime-wrapper">
              <li class="datetime-day">${c}</li>
              <li class="datetime-weekday">${i}</li>
            </ul>
            <div class="datetime-container">
            <ul class="datetime-wrapper">
              <li class="datetime-month">${u}</li>
              <li class="datetime-time">${l}</li>
            </ul>
              <ul class="datetime-wrapper">
              <li>
                <svg class="datetime-icon">
                  <use href="${d}#icon-sunrise"></use>
                </svg>
                <p class="datetime-sunrise">${f}</p>
              </li>
              <li>
                <svg class="datetime-icon">
                  <use href="${d}#icon-sunset"></use>
                </svg>
                <p class="datetime-sunset">${h}</p>
              </li>
            </ul>
            </div>
  `;w.innerHTML=D,w.style.display="block",v.innerHTML=q,v.style.display="block"}function z(){w.innerHTML=""}function G(){v.innerHTML=""}const L=document.querySelector(".forecast-container"),b=L?L.querySelector(".forecast-city"):null,M=document.querySelector(".forecast-5days");function N(e,s){b&&(b.textContent=`${e}, ${s}`)}function K(e){if(!M||!L)return;const s=new Map;e.list.forEach(o=>{const a=o.dt_txt.split(" ")[0];s.has(a)||s.set(a,[]),s.get(a).push(o)});const t=Array.from(s.entries()).slice(0,5),n=[];t.forEach(([o,a])=>{const r=a[0],{dt_txt:c,main:i,weather:u}=r,l=new Date(c),f=l.getDate(),h=l.toLocaleDateString("en-US",{weekday:"long"}),y=l.toLocaleDateString("en-US",{month:"short"}),D=Math.round(Math.min(...a.map(x=>x.main.temp_min))),q=Math.round(Math.max(...a.map(x=>x.main.temp_max))),B=F[u[0].icon]||"icon-sun";n.push(`
          <li class="forecast-item">
            <p class="forecast-weekday">${h}</p>
            <p class="forecast-date">${f} ${y}</p>
            <svg class="forecast-icon">
              <use href="${d}#${B}"></use>
            </svg>
            <ul class="forecast-temp">
              <li>
                <p class="forecast-temp-title">min</p>
                <p class="forecast-temp-value">${D}&deg</p>
              </li>
              <li>
                <p class="forecast-temp-title">max</p>
                <p class="forecast-temp-value">${q}&deg</p>
              </li>
            </ul>
            <button type="button" class="forecast-button" data-date="${o}">more info</button>
            </li>
  `)}),M.innerHTML=n.join(""),L.style.display="block"}function V(){!b||!M||(b.textContent="",M.innerHTML="")}const p=document.querySelector(".forecast-hours");function A(e){if(!p)return;const s=e.map(t=>{const o=new Date(t.dt_txt).toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"}),a=Math.round(t.main.temp),r=t.main.pressure,c=t.main.humidity,i=t.wind.speed,u=t.weather[0].icon,l=F[u]||"icon-sun";return`
           <li class="forecast-hours-item">
                <ul>
                  <li class="forecast-hours-time">${o}</li>
                  <li>
                    <svg class="forecast-hours-icon">
                      <use href="${d}#${l}"></use>
                    </svg>
                  </li>
                  <li class="forecast-hours-temp">${a}&deg</li>
                  <div class="forecast-hours-container">
                  <li class="forecast-hours-wrap">
                    <svg class="forecast-hours-img">
                      <use href="${d}#icon-atmosphere"></use>
                    </svg>
                    <p class="forecast-hours-value">${r} mm</p>
                  </li>
                  <li class="forecast-hours-wrap">
                    <svg class="forecast-hours-img">
                      <use href="${d}#icon-humidity"></use>
                    </svg>
                    <p class="forecast-hours-value">${c}%</p>
                  </li>
                    <li class="forecast-hours-wrap">
                    <svg class="forecast-hours-img">
                      <use href="${d}#icon-wind"></use>
                    </svg>
                    <p class="forecast-hours-value">${i} m/s</p>
                  </li>
                  </div>
                </ul>
              </li>
    `});p.innerHTML=s.join(""),p.style.display="flex",_()}function T(){if(!p)return;p.innerHTML="",p.style.display="none";const e=document.querySelector(".scroll-bar");e&&(e.style.opacity="0"),_()}const S=document.querySelector(".header-input"),E=document.querySelector(".home")!==null,P=document.querySelector(".five-days")!==null;function J(){const e=new Date,s=e.getDate(),t=e.toLocaleDateString("en-US",{weekday:"short"}),n=e.toLocaleDateString("en-US",{month:"long"}),o=e.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",second:"2-digit"});return{day:`${s}<sup>${Y(s)}</sup>`,weekday:t,month:n,time:o}}function Y(e){if(e>3&&e<21)return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}function H(e,s){return new Date((e+s)*1e3).toUTCString().slice(17,22)}let C=null;async function m(e,s=!1){let t,n;try{typeof e=="string"?t=await I(e):t=await R(e.lat,e.lon),n=await U(t.name),C=n,s&&sessionStorage.setItem("currentCity",t.name)}catch{$.show({message:"City not found or network error",position:"topRight",timeout:5e3});return}if(E&&(z(),G()),P&&V(),E){const o=J();j({city:t.name,country:t.sys.country,temp:Math.round(t.main.temp),tempMin:Math.round(t.main.temp_min),tempMax:Math.round(t.main.temp_max),icon:t.weather[0].icon,day:o.day,weekday:o.weekday,month:o.month,time:o.time,sunrise:H(t.sys.sunrise,t.timezone),sunset:H(t.sys.sunset,t.timezone)})}P&&(N(n.city.name,n.city.country),K(n),O())}window.addEventListener("load",()=>{const e=sessionStorage.getItem("currentCity");if(e){m(e);return}navigator.geolocation?navigator.geolocation.getCurrentPosition(s=>{const{latitude:t,longitude:n}=s.coords;m({lat:t,lon:n})},()=>{$.show({message:"Geolocation denied, enter city manually",position:"topRight",timeout:5e3}),m({lat:50.4333,lon:30.5167})}):($.show({message:"Geolocation not supported",position:"topRight",timeout:5e3}),m({lat:50.4333,lon:30.5167}))});S.addEventListener("keydown",async e=>{if(e.key==="Enter"){const s=S.value.trim();if(!s){$.show({message:"Enter the city",position:"topRight",timeout:5e3});return}await m(s,!0),S.value=""}});window.addEventListener("storage",e=>{e.key==="currentCity"&&(S.value=e.newValue,m(e.newValue))});let g=null;document.addEventListener("click",e=>{const s=document.querySelector(".forecast-hours"),t=e.target.closest(".forecast-button");if(!t||!s||!C)return;const n=t.dataset.date;if(!n)return;if(g===t){T(),t.classList.remove("active"),g=null;return}g&&g.classList.remove("active");const o=C.list.filter(a=>a.dt_txt.split(" ")[0]===n);T(),A(o),t.classList.add("active"),g=t});
//# sourceMappingURL=main-DKbTNbQa.js.map
