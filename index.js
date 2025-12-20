import{a as d,i as s}from"./assets/vendor-weOZHO9C.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=e(t);fetch(t.href,n)}})();const u="324d82384f0b6b757e9697b6aa6e9ef8";async function y(a){const o=new URLSearchParams({q:a,appid:u,units:"metric"});return(await d.get(`https://api.openweathermap.org/data/2.5/weather?${o}`)).data}async function w(a,o){const e=new URLSearchParams({lan:a,lot:o,appid:u,units:"metric"});return(await d.get(`https://api.openweathermap.org/data/2.5/weather?${e}`)).data}const f="/weather-app/assets/icons-D0JtYWc4.svg",c=document.querySelector(".weather-card"),g={"01d":"icon-sun","01n":"icon-sun","02d":"icon-cloudy_and_sun","02n":"icon-cloudy_and_sun","03d":"icon-cloudy","03n":"icon-cloudy","04d":"icon-cloudy","04n":"icon-cloudy","09d":"icon-weather","09n":"icon-weather","10d":"icon-weather","10n":"icon-weather","11d":"icon-weather","11n":"icon-weather","13d":"icon-snow","13n":"icon-snow","50d":"icon-cloudy","50n":"icon-cloudy"};function m(a){const{city:o,country:e,temp:i,tempMin:t,tempMax:n,icon:r}=a,l=g[r]||"icon-sun",h=`
                <svg class="weather-icon">
                    <use href="${f}#${l}"></use>
                </svg>
                <p class="weather-location">${o}, ${e}</p>
                <div class="weather-temp-wrapper">
                  <p class="weather-temp">${i}&deg;</p>
                  <ul class="temp-box">
                    <li class="temp-item">
                      <p class="temp-name">min</p>
                      <p class="temp-value">${t}&deg;</p>
                    </li>
                    <li class="temp-item">
                      <p class="temp-name">max</p>
                      <p class="temp-value">${n}&deg;</p>
                    </li>
                  </ul>
                </div>
    `;c.innerHTML=h,c.style.display="block"}function M(){c.innerHTML=""}const p=document.querySelector(".header-input");async function v(a,o){try{const e=await w(a,o);m({city:e.name,country:e.sys.country,temp:Math.round(e.main.temp),tempMin:Math.round(e.main.temp_min),tempMax:Math.round(e.main.temp_max),icon:e.weather[0].icon})}catch{s.show({message:"Cannot get local weather",position:"topRight",timeout:5e3})}}window.addEventListener("load",()=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(a=>{const{latitude:o,longitude:e}=a.coords;v(o,e)},()=>{s.show({message:"Geolocation denied, enter city manually",position:"topRight",timeout:5e3})}):s.show({message:"Geolocation not supported",position:"topRight",timeout:5e3})});p.addEventListener("keydown",async a=>{if(a.key==="Enter"){const o=p.value.trim();if(!o){s.show({message:"Enter the city",position:"topRight",timeout:5e3});return}M();try{const e=await y(o);m({city:e.name,country:e.sys.country,temp:Math.round(e.main.temp),tempMin:Math.round(e.main.temp_min),tempMax:Math.round(e.main.temp_max),icon:e.weather[0].icon})}catch{s.show({message:"City not found",position:"topRight",timeout:5e3})}}});
//# sourceMappingURL=index.js.map
