import{a as h,i as r}from"./assets/vendor-weOZHO9C.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))e(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function e(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}})();const y="324d82384f0b6b757e9697b6aa6e9ef8";async function x(o){const s=new URLSearchParams({q:o,appid:y,units:"metric"});return(await h.get(`https://api.openweathermap.org/data/2.5/weather?${s}`)).data}async function D(o,s){const t=new URLSearchParams({lat:o,lon:s,appid:y,units:"metric"});return(await h.get(`https://api.openweathermap.org/data/2.5/weather?${t}`)).data}const u="/weather-app/assets/icons-D0JtYWc4.svg",l=document.querySelector(".weather-card"),m=document.querySelector(".datetime-card"),P={"01d":"icon-sun","01n":"icon-sun","02d":"icon-cloudy_and_sun","02n":"icon-cloudy_and_sun","03d":"icon-cloudy","03n":"icon-cloudy","04d":"icon-cloudy","04n":"icon-cloudy","09d":"icon-weather","09n":"icon-weather","10d":"icon-weather","10n":"icon-weather","11d":"icon-weather","11n":"icon-weather","13d":"icon-snow","13n":"icon-snow","50d":"icon-cloudy","50n":"icon-cloudy"};function w(o){const{city:s,country:t,temp:e,tempMin:n,tempMax:i,icon:a,day:g,weekday:M,month:$,time:v,sunrise:L,sunset:S}=o,C=P[a]||"icon-sun",b=`
                <svg class="weather-icon">
                    <use href="${u}#${C}"></use>
                </svg>
                <p class="weather-location">${s}, ${t}</p>
                <div class="weather-temp-wrapper">
                  <p class="weather-temp">${e}&deg;</p>
                  <ul class="temp-box">
                    <li class="temp-item">
                      <p class="temp-name">min</p>
                      <p class="temp-value">${n}&deg;</p>
                    </li>
                    <li class="temp-item">
                      <p class="temp-name">max</p>
                      <p class="temp-value">${i}&deg;</p>
                    </li>
                  </ul>
                </div>
    `,k=`
            <ul class="datetime-wrapper">
              <li class="datetime-day">${g}</li>
              <li class="datetime-weekday">${M}</li>
            </ul>
            <ul class="datetime-wrapper">
              <li class="datetime-month">${$}</li>
              <li class="datetime-time">${v}</li>
            </ul>
              <ul class="datetime-wrapper">
              <li>
                <svg class="datetime-icon">
                  <use href="${u}#icon-sunrise"></use>
                </svg>
                <p class="datetime-sunrise">${L}</p>
              </li>
              <li>
                <svg class="datetime-icon">
                  <use href="${u}#icon-sunset"></use>
                </svg>
                <p class="datetime-sunset">${S}</p>
              </li>
            </ul>
  `;l.innerHTML=b,l.style.display="block",m.innerHTML=k,m.style.display="block"}function T(){l.innerHTML=""}function _(){m.innerHTML=""}const p=document.querySelector(".header-input");function f(){const o=new Date,s=o.getDate(),t=o.toLocaleDateString("en-US",{weekday:"short"}),e=o.toLocaleDateString("en-US",{month:"long"}),n=o.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",second:"2-digit"});return{day:`${s}<sup>${O(s)}</sup>`,weekday:t,month:e,time:n}}function O(o){if(o>3&&o<21)return"th";switch(o%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}function c(o,s){return new Date((o+s)*1e3).toUTCString().slice(17,22)}async function d(o,s){var t;try{const e=await D(o,s),n=f();w({city:e==null?void 0:e.name,country:(t=e==null?void 0:e.sys)==null?void 0:t.country,temp:Math.round(e.main.temp),tempMin:Math.round(e.main.temp_min),tempMax:Math.round(e.main.temp_max),icon:e.weather[0].icon,day:n.day,weekday:n.weekday,month:n.month,time:n.time,sunrise:c(e.sys.sunrise,e.timezone),sunset:c(e.sys.sunset,e.timezone)})}catch{r.show({message:"Cannot get local weather",position:"topRight",timeout:5e3})}}window.addEventListener("load",()=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(o=>{const{latitude:s,longitude:t}=o.coords;d(s,t)},()=>{r.show({message:"Geolocation denied, enter city manually",position:"topRight",timeout:5e3}),d(50.4333,30.5167)}):(r.show({message:"Geolocation not supported",position:"topRight",timeout:5e3}),d(50.4333,30.5167))});p.addEventListener("keydown",async o=>{if(o.key==="Enter"){const s=p.value.trim();if(!s){r.show({message:"Enter the city",position:"topRight",timeout:5e3});return}T(),_();try{const t=await x(s),e=f();w({city:t.name,country:t.sys.country,temp:Math.round(t.main.temp),tempMin:Math.round(t.main.temp_min),tempMax:Math.round(t.main.temp_max),icon:t.weather[0].icon,day:e.day,weekday:e.weekday,month:e.month,time:e.time,sunrise:c(t.sys.sunrise,t.timezone),sunset:c(t.sys.sunset,t.timezone)})}catch{r.show({message:"City not found",position:"topRight",timeout:5e3})}}});
//# sourceMappingURL=index.js.map
