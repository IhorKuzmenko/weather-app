import{a as p,i as r}from"./assets/vendor-weOZHO9C.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();const h="324d82384f0b6b757e9697b6aa6e9ef8";async function k(t){const n=new URLSearchParams({q:t,appid:h,units:"metric"});return(await p.get(`https://api.openweathermap.org/data/2.5/weather?${n}`)).data}async function x(t,n){const e=new URLSearchParams({lat:t,lon:n,appid:h,units:"metric"});return(await p.get(`https://api.openweathermap.org/data/2.5/weather?${e}`)).data}const D="/weather-app/assets/icons-D0JtYWc4.svg",d=document.querySelector(".weather-card"),l=document.querySelector(".datetime-card"),P={"01d":"icon-sun","01n":"icon-sun","02d":"icon-cloudy_and_sun","02n":"icon-cloudy_and_sun","03d":"icon-cloudy","03n":"icon-cloudy","04d":"icon-cloudy","04n":"icon-cloudy","09d":"icon-weather","09n":"icon-weather","10d":"icon-weather","10n":"icon-weather","11d":"icon-weather","11n":"icon-weather","13d":"icon-snow","13n":"icon-snow","50d":"icon-cloudy","50n":"icon-cloudy"};function y(t){const{city:n,country:e,temp:o,tempMin:s,tempMax:a,icon:i,day:f,weekday:w,month:v,time:M,sunrise:$,sunset:L}=t,S=P[i]||"icon-sun",C=`
                <svg class="weather-icon">
                    <use href="${D}#${S}"></use>
                </svg>
                <p class="weather-location">${n}, ${e}</p>
                <div class="weather-temp-wrapper">
                  <p class="weather-temp">${o}&deg;</p>
                  <ul class="temp-box">
                    <li class="temp-item">
                      <p class="temp-name">min</p>
                      <p class="temp-value">${s}&deg;</p>
                    </li>
                    <li class="temp-item">
                      <p class="temp-name">max</p>
                      <p class="temp-value">${a}&deg;</p>
                    </li>
                  </ul>
                </div>
    `,b=`
            <ul class="datetime-wrapper">
              <li class="datetime-day">${f}</li>
              <li class="datetime-weekday">${w}</li>
            </ul>
            <ul class="datetime-wrapper">
              <li class="datetime-month">${v}</li>
              <li class="datetime-time">${M}</li>
            </ul>
              <ul class="datetime-wrapper">
              <li>
                <svg class="datetime-icon">
                  <use href="./img/icons.svg#icon-sunrise"></use>
                </svg>
                <p class="datetime-sunrise">${$}</p>
              </li>
              <li>
                <svg class="datetime-icon">
                  <use href="./img/icons.svg#icon-sunset"></use>
                </svg>
                <p class="datetime-sunset">${L}</p>
              </li>
            </ul>
  `;d.innerHTML=C,d.style.display="block",l.innerHTML=b,l.style.display="block"}function T(){d.innerHTML=""}function _(){l.innerHTML=""}const m=document.querySelector(".header-input");function g(){const t=new Date,n=t.getDate(),e=t.toLocaleDateString("en-US",{weekday:"short"}),o=t.toLocaleDateString("en-US",{month:"long"}),s=t.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",second:"2-digit"});return{day:`${n}<sup>${O(n)}</sup>`,weekday:e,month:o,time:s}}function O(t){if(t>3&&t<21)return"th";switch(t%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}function c(t,n){return new Date((t+n)*1e3).toUTCString().slice(17,22)}async function u(t,n){try{const e=await x(t,n),o=g();y({city:e.name,country:e.sys.country,temp:Math.round(e.main.temp),tempMin:Math.round(e.main.temp_min),tempMax:Math.round(e.main.temp_max),icon:e.weather[0].icon,day:o.day,weekday:o.weekday,month:o.month,time:o.time,sunrise:c(e.sys.sunrise,e.timezone),sunset:c(e.sys.sunset,e.timezone)})}catch{r.show({message:"Cannot get local weather",position:"topRight",timeout:5e3})}}window.addEventListener("load",()=>{const t={lat:50.4501,lon:30.5234,city:"Kyiv",country:"UA"};navigator.geolocation?navigator.geolocation.getCurrentPosition(n=>{const{latitude:e,longitude:o}=n.coords;u(e,o)},()=>{r.show({message:"Geolocation denied, enter city manually",position:"topRight",timeout:5e3}),u(t.lat,t.lon)}):(r.show({message:"Geolocation not supported",position:"topRight",timeout:5e3}),u(t.lat,t.lon))});m.addEventListener("keydown",async t=>{if(t.key==="Enter"){const n=m.value.trim();if(!n){r.show({message:"Enter the city",position:"topRight",timeout:5e3});return}T(),_();try{const e=await k(n),o=g();y({city:e.name,country:e.sys.country,temp:Math.round(e.main.temp),tempMin:Math.round(e.main.temp_min),tempMax:Math.round(e.main.temp_max),icon:e.weather[0].icon,day:o.day,weekday:o.weekday,month:o.month,time:o.time,sunrise:c(e.sys.sunrise,e.timezone),sunset:c(e.sys.sunset,e.timezone)})}catch{r.show({message:"City not found",position:"topRight",timeout:5e3})}}});
//# sourceMappingURL=index.js.map
