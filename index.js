import{a as y,i as r}from"./assets/vendor-weOZHO9C.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(e){if(e.ep)return;e.ep=!0;const a=n(e);fetch(e.href,a)}})();const h="324d82384f0b6b757e9697b6aa6e9ef8";async function x(t){const o=new URLSearchParams({q:t,appid:h,units:"metric"});return(await y.get(`https://api.openweathermap.org/data/2.5/weather?${o}`)).data}async function D(t,o){const n=new URLSearchParams({lat:t,lon:o,appid:h,units:"metric"});return(await y.get(`https://api.openweathermap.org/data/2.5/weather?${n}`)).data}const u="/weather-app/assets/icons-D0JtYWc4.svg",l=document.querySelector(".weather-card"),m=document.querySelector(".datetime-card"),P={"01d":"icon-sun","01n":"icon-sun","02d":"icon-cloudy_and_sun","02n":"icon-cloudy_and_sun","03d":"icon-cloudy","03n":"icon-cloudy","04d":"icon-cloudy","04n":"icon-cloudy","09d":"icon-weather","09n":"icon-weather","10d":"icon-weather","10n":"icon-weather","11d":"icon-weather","11n":"icon-weather","13d":"icon-snow","13n":"icon-snow","50d":"icon-cloudy","50n":"icon-cloudy"};function f(t){const{city:o,country:n,temp:s,tempMin:e,tempMax:a,icon:i,day:g,weekday:M,month:v,time:$,sunrise:L,sunset:S}=t,C=P[i]||"icon-sun",b=`
                <svg class="weather-icon">
                    <use href="${u}#${C}"></use>
                </svg>
                <p class="weather-location">${o}, ${n}</p>
                <div class="weather-temp-wrapper">
                  <p class="weather-temp">${s}&deg;</p>
                  <ul class="temp-box">
                    <li class="temp-item">
                      <p class="temp-name">min</p>
                      <p class="temp-value">${e}&deg;</p>
                    </li>
                    <li class="temp-item">
                      <p class="temp-name">max</p>
                      <p class="temp-value">${a}&deg;</p>
                    </li>
                  </ul>
                </div>
    `,k=`
            <ul class="datetime-wrapper">
              <li class="datetime-day">${g}</li>
              <li class="datetime-weekday">${M}</li>
            </ul>
            <ul class="datetime-wrapper">
              <li class="datetime-month">${v}</li>
              <li class="datetime-time">${$}</li>
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
  `;l.innerHTML=b,l.style.display="block",m.innerHTML=k,m.style.display="block"}function T(){l.innerHTML=""}function _(){m.innerHTML=""}const p=document.querySelector(".header-input");function w(){const t=new Date,o=t.getDate(),n=t.toLocaleDateString("en-US",{weekday:"short"}),s=t.toLocaleDateString("en-US",{month:"long"}),e=t.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",second:"2-digit"});return{day:`${o}<sup>${O(o)}</sup>`,weekday:n,month:s,time:e}}function O(t){if(t>3&&t<21)return"th";switch(t%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}function c(t,o){return new Date((t+o)*1e3).toUTCString().slice(17,22)}async function d(t,o,n=null,s=null){try{const e=await D(t,o),a=w();f({city:e.name,country:e.sys.country,temp:Math.round(e.main.temp),tempMin:Math.round(e.main.temp_min),tempMax:Math.round(e.main.temp_max),icon:e.weather[0].icon,day:a.day,weekday:a.weekday,month:a.month,time:a.time,sunrise:c(e.sys.sunrise,e.timezone),sunset:c(e.sys.sunset,e.timezone)})}catch{r.show({message:"Cannot get local weather",position:"topRight",timeout:5e3})}}window.addEventListener("load",()=>{const t={lat:50.4501,lon:30.5234,city:"Kyiv",country:"UA"};navigator.geolocation?navigator.geolocation.getCurrentPosition(o=>{const{latitude:n,longitude:s}=o.coords;d(n,s)},()=>{r.show({message:"Geolocation denied, enter city manually",position:"topRight",timeout:5e3}),d(t.lat,t.lon,t.city,t.country)}):(r.show({message:"Geolocation not supported",position:"topRight",timeout:5e3}),d(t.lat,t.lon,t.city,t.country))});p.addEventListener("keydown",async t=>{if(t.key==="Enter"){const o=p.value.trim();if(!o){r.show({message:"Enter the city",position:"topRight",timeout:5e3});return}T(),_();try{const n=await x(o),s=w();f({city:n.name,country:n.sys.country,temp:Math.round(n.main.temp),tempMin:Math.round(n.main.temp_min),tempMax:Math.round(n.main.temp_max),icon:n.weather[0].icon,day:s.day,weekday:s.weekday,month:s.month,time:s.time,sunrise:c(n.sys.sunrise,n.timezone),sunset:c(n.sys.sunset,n.timezone)})}catch{r.show({message:"City not found",position:"topRight",timeout:5e3})}}});
//# sourceMappingURL=index.js.map
