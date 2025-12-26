import{a as C,i as m}from"./vendor-weOZHO9C.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=a(n);fetch(n.href,s)}})();const b="324d82384f0b6b757e9697b6aa6e9ef8";async function _(e){const t=new URLSearchParams({q:e,appid:b,units:"metric"});return(await C.get(`https://api.openweathermap.org/data/2.5/weather?${t}`)).data}async function E(e,t){const a=new URLSearchParams({lat:e,lon:t,appid:b,units:"metric"});return(await C.get(`https://api.openweathermap.org/data/2.5/weather?${a}`)).data}async function I(e){const t=new URLSearchParams({q:e,appid:b,units:"metric"});return(await C.get(`https://api.openweathermap.org/data/2.5/forecast?${t}`)).data}const l="/weather-app/assets/icons-D0JtYWc4.svg",u=document.querySelector(".weather-card"),d=document.querySelector(".datetime-card"),q={"01d":"icon-sun","01n":"icon-sun","02d":"icon-cloudy_and_sun","02n":"icon-cloudy_and_sun","03d":"icon-cloudy","03n":"icon-cloudy","04d":"icon-cloudy","04n":"icon-cloudy","09d":"icon-weather","09n":"icon-weather","10d":"icon-weather","10n":"icon-weather","11d":"icon-weather","11n":"icon-weather","13d":"icon-snow","13n":"icon-snow","50d":"icon-cloudy","50n":"icon-cloudy"};function U(e){if(!u||!d)return;const{city:t,country:a,temp:o,tempMin:n,tempMax:s,icon:i,day:g,weekday:x,month:w,time:c,sunrise:v,sunset:$}=e,S=q[i]||"icon-sun",M=`
                <svg class="weather-icon">
                    <use href="${l}#${S}"></use>
                </svg>
                <p class="weather-location">${t}, ${a}</p>
                <div class="weather-temp-wrapper">
                  <p class="weather-temp">${o}&deg;</p>
                  <ul class="temp-box">
                    <li class="temp-item">
                      <p class="temp-name">min</p>
                      <p class="temp-value">${n}&deg;</p>
                    </li>
                    <li class="temp-item">
                      <p class="temp-name">max</p>
                      <p class="temp-value">${s}&deg;</p>
                    </li>
                  </ul>
                </div>
    `,L=`
            <ul class="datetime-wrapper">
              <li class="datetime-day">${g}</li>
              <li class="datetime-weekday">${x}</li>
            </ul>
            <div class="datetime-container">
            <ul class="datetime-wrapper">
              <li class="datetime-month">${w}</li>
              <li class="datetime-time">${c}</li>
            </ul>
              <ul class="datetime-wrapper">
              <li>
                <svg class="datetime-icon">
                  <use href="${l}#icon-sunrise"></use>
                </svg>
                <p class="datetime-sunrise">${v}</p>
              </li>
              <li>
                <svg class="datetime-icon">
                  <use href="${l}#icon-sunset"></use>
                </svg>
                <p class="datetime-sunset">${$}</p>
              </li>
            </ul>
            </div>
  `;u.innerHTML=M,u.style.display="block",d.innerHTML=L,d.style.display="block"}function R(){u.innerHTML=""}function H(){d.innerHTML=""}const f=document.querySelector(".forecast-container"),y=f?f.querySelector(".forecast-city"):null,h=document.querySelector(".forecast-5days");function W(e,t){y&&(y.textContent=`${e}, ${t}`)}function O(e){if(!h||!f)return;const t=new Map;e.list.forEach(n=>{const s=n.dt_txt.split(" ")[0];t.has(s)||t.set(s,[]),t.get(s).push(n)});const a=Array.from(t.entries()).slice(0,5),o=[];a.forEach(([n,s])=>{const i=s[0],{dt_txt:g,main:x,weather:w}=i,c=new Date(g),v=c.getDate(),$=c.toLocaleDateString("en-US",{weekday:"long"}),S=c.toLocaleDateString("en-US",{month:"short"}),M=Math.round(Math.min(...s.map(D=>D.main.temp_min))),L=Math.round(Math.max(...s.map(D=>D.main.temp_max))),T=q[w[0].icon]||"icon-sun";o.push(`
          <li class="forecast-item">
            <p class="forecast-weekday">${$}</p>
            <p class="forecast-date">${v} ${S}</p>
            <svg>
              <use href="${l}#${T}"></use>
            </svg>
            <ul class="forecast-temp">
              <li>
                <p class="forecast-temp-title">min</p>
                <p class="forecast-temp-value">${M}&deg</p>
              </li>
              <li>
                <p class="forecast-temp-title">max</p>
                <p class="forecast-temp-value">${L}&deg</p>
              </li>
            </ul>
            <button type="button" class="forecast-button">more info</button>
            </li>
  `)}),h.innerHTML=o.join(""),f.style.display="block"}function z(){!y||!h||(y.textContent="",h.innerHTML="")}const p=document.querySelector(".header-input"),k=document.querySelector(".home")!==null,P=document.querySelector(".five-days")!==null;function G(){const e=new Date,t=e.getDate(),a=e.toLocaleDateString("en-US",{weekday:"short"}),o=e.toLocaleDateString("en-US",{month:"long"}),n=e.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",second:"2-digit"});return{day:`${t}<sup>${N(t)}</sup>`,weekday:a,month:o,time:n}}function N(e){if(e>3&&e<21)return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}function F(e,t){return new Date((e+t)*1e3).toUTCString().slice(17,22)}async function r(e,t=!1){let a,o;try{typeof e=="string"?a=await _(e):a=await E(e.lat,e.lon),o=await I(a.name),t&&sessionStorage.setItem("currentCity",a.name)}catch{m.show({message:"City not found or network error",position:"topRight",timeout:5e3});return}if(k&&(R(),H()),P&&z(),k){const n=G();U({city:a.name,country:a.sys.country,temp:Math.round(a.main.temp),tempMin:Math.round(a.main.temp_min),tempMax:Math.round(a.main.temp_max),icon:a.weather[0].icon,day:n.day,weekday:n.weekday,month:n.month,time:n.time,sunrise:F(a.sys.sunrise,a.timezone),sunset:F(a.sys.sunset,a.timezone)})}P&&(W(o.city.name,o.city.country),O(o))}window.addEventListener("load",()=>{const e=sessionStorage.getItem("currentCity");if(e){r(e);return}navigator.geolocation?navigator.geolocation.getCurrentPosition(t=>{const{latitude:a,longitude:o}=t.coords;r({lat:a,lon:o})},()=>{m.show({message:"Geolocation denied, enter city manually",position:"topRight",timeout:5e3}),r({lat:50.4333,lon:30.5167})}):(m.show({message:"Geolocation not supported",position:"topRight",timeout:5e3}),r({lat:50.4333,lon:30.5167}))});p.addEventListener("keydown",async e=>{if(e.key==="Enter"){const t=p.value.trim();if(!t){m.show({message:"Enter the city",position:"topRight",timeout:5e3});return}await r(t,!0),p.value=""}});window.addEventListener("storage",e=>{e.key==="currentCity"&&(p.value=e.newValue,r(e.newValue))});
//# sourceMappingURL=main-r_up99CB.js.map
