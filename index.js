import{a as u,i as s}from"./assets/vendor-weOZHO9C.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=e(o);fetch(o.href,a)}})();const m="324d82384f0b6b757e9697b6aa6e9ef8";async function w(n){const t=new URLSearchParams({q:n,appid:m,units:"metric"});return(await u.get(`https://api.openweathermap.org/data/2.5/weather?${t}`)).data}async function p(n,t){const e=new URLSearchParams({lan:n,lot:t,appid:m,units:"metric"});return(await u.get(`https://api.openweathermap.org/data/2.5/weather?${e}`)).data}const f="/weather-app/assets/icons-D0JtYWc4.svg",c=document.querySelector(".weather-card"),g={"01d":"icon-sun","01n":"icon-sun","02d":"icon-cloudy_and_sun","02n":"icon-cloudy_and_sun","03d":"icon-cloudy","03n":"icon-cloudy","04d":"icon-cloudy","04n":"icon-cloudy","09d":"icon-weather","09n":"icon-weather","10d":"icon-weather","10n":"icon-weather","11d":"icon-weather","11n":"icon-weather","13d":"icon-snow","13n":"icon-snow","50d":"icon-cloudy","50n":"icon-cloudy"};function l(n){const{city:t,country:e,temp:i,tempMin:o,tempMax:a,icon:r}=n,h=g[r]||"icon-sun",y=`
                <svg class="weather-icon">
                    <use href="${f}#${h}"></use>
                </svg>
                <p class="weather-location">${t}, ${e}</p>
                <div class="weather-temp-wrapper">
                  <p class="weather-temp">${i}&deg;</p>
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
    `;c.innerHTML=y,c.style.display="block"}function M(){c.innerHTML=""}const d=document.querySelector(".header-input");async function v(n,t){await p(n,t);try{const e=await p(n,t);l({city:e.name,country:e.sys.country,temp:Math.round(e.main.temp),tempMin:Math.round(e.main.temp_min),tempMax:Math.round(e.main.temp_max),icon:e.weather[0].icon})}catch{s.show({message:"Cannot get local weather",position:"topRight",timeout:5e3})}}window.addEventListener("load",()=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(n=>{const{latitude:t,longitude:e}=n.coords;v(t,e)},()=>{s.show({message:"Geolocation denied, enter city manually",position:"topRight",timeout:5e3})}):s.show({message:"Geolocation not supported",position:"topRight",timeout:5e3})});d.addEventListener("keydown",async n=>{if(n.key==="Enter"){const t=d.value.trim();if(!t){s.show({message:"Enter the city",position:"topRight",timeout:5e3});return}M();try{const e=await w(t);l({city:e.name,country:e.sys.country,temp:Math.round(e.main.temp),tempMin:Math.round(e.main.temp_min),tempMax:Math.round(e.main.temp_max),icon:e.weather[0].icon})}catch{s.show({message:"City not found",position:"topRight",timeout:5e3})}}});
//# sourceMappingURL=index.js.map
