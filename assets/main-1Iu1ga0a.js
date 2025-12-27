import{a as C,i as y}from"./vendor-weOZHO9C.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const k="324d82384f0b6b757e9697b6aa6e9ef8";async function T(e){const t=new URLSearchParams({q:e,appid:k,units:"metric"});return(await C.get(`https://api.openweathermap.org/data/2.5/weather?${t}`)).data}async function W(e,t){const n=new URLSearchParams({lat:e,lon:t,appid:k,units:"metric"});return(await C.get(`https://api.openweathermap.org/data/2.5/weather?${n}`)).data}async function _(e){const t=new URLSearchParams({q:e,appid:k,units:"metric"});return(await C.get(`https://api.openweathermap.org/data/2.5/forecast?${t}`)).data}const d="/weather-app/assets/icons-D0JtYWc4.svg",p=document.querySelector(".weather-card"),m=document.querySelector(".datetime-card"),F={"01d":"icon-sun","01n":"icon-sun","02d":"icon-cloudy_and_sun","02n":"icon-cloudy_and_sun","03d":"icon-cloudy","03n":"icon-cloudy","04d":"icon-cloudy","04n":"icon-cloudy","09d":"icon-weather","09n":"icon-weather","10d":"icon-weather","10n":"icon-weather","11d":"icon-weather","11n":"icon-weather","13d":"icon-snow","13n":"icon-snow","50d":"icon-cloudy","50n":"icon-cloudy"};function I(e){if(!p||!m)return;const{city:t,country:n,temp:a,tempMin:o,tempMax:s,icon:i,day:r,weekday:l,month:v,time:u,sunrise:S,sunset:L}=e,$=F[i]||"icon-sun",M=`
                <svg class="weather-icon">
                    <use href="${d}#${$}"></use>
                </svg>
                <p class="weather-location">${t}, ${n}</p>
                <div class="weather-temp-wrapper">
                  <p class="weather-temp">${a}&deg;</p>
                  <ul class="temp-box">
                    <li class="temp-item">
                      <p class="temp-name">min</p>
                      <p class="temp-value">${o}&deg;</p>
                    </li>
                    <li class="temp-item">
                      <p class="temp-name">max</p>
                      <p class="temp-value">${s}&deg;</p>
                    </li>
                  </ul>
                </div>
    `,b=`
            <ul class="datetime-wrapper">
              <li class="datetime-day">${r}</li>
              <li class="datetime-weekday">${l}</li>
            </ul>
            <div class="datetime-container">
            <ul class="datetime-wrapper">
              <li class="datetime-month">${v}</li>
              <li class="datetime-time">${u}</li>
            </ul>
              <ul class="datetime-wrapper">
              <li>
                <svg class="datetime-icon">
                  <use href="${d}#icon-sunrise"></use>
                </svg>
                <p class="datetime-sunrise">${S}</p>
              </li>
              <li>
                <svg class="datetime-icon">
                  <use href="${d}#icon-sunset"></use>
                </svg>
                <p class="datetime-sunset">${L}</p>
              </li>
            </ul>
            </div>
  `;p.innerHTML=M,p.style.display="block",m.innerHTML=b,m.style.display="block"}function R(){p.innerHTML=""}function U(){m.innerHTML=""}const h=document.querySelector(".forecast-container"),g=h?h.querySelector(".forecast-city"):null,w=document.querySelector(".forecast-5days");function H(e,t){g&&(g.textContent=`${e}, ${t}`)}function B(e){if(!w||!h)return;const t=new Map;e.list.forEach(o=>{const s=o.dt_txt.split(" ")[0];t.has(s)||t.set(s,[]),t.get(s).push(o)});const n=Array.from(t.entries()).slice(0,5),a=[];n.forEach(([o,s])=>{const i=s[0],{dt_txt:r,main:l,weather:v}=i,u=new Date(r),S=u.getDate(),L=u.toLocaleDateString("en-US",{weekday:"long"}),$=u.toLocaleDateString("en-US",{month:"short"}),M=Math.round(Math.min(...s.map(D=>D.main.temp_min))),b=Math.round(Math.max(...s.map(D=>D.main.temp_max))),E=F[v[0].icon]||"icon-sun";a.push(`
          <li class="forecast-item">
            <p class="forecast-weekday">${L}</p>
            <p class="forecast-date">${S} ${$}</p>
            <svg class="forecast-icon">
              <use href="${d}#${E}"></use>
            </svg>
            <ul class="forecast-temp">
              <li>
                <p class="forecast-temp-title">min</p>
                <p class="forecast-temp-value">${M}&deg</p>
              </li>
              <li>
                <p class="forecast-temp-title">max</p>
                <p class="forecast-temp-value">${b}&deg</p>
              </li>
            </ul>
            <button type="button" class="forecast-button">more info</button>
            </li>
  `)}),w.innerHTML=a.join(""),h.style.display="block"}function O(){!g||!w||(g.textContent="",w.innerHTML="")}function z(){var l;const e=document.querySelector(".forecast-5days-wrapper"),t=document.querySelector(".forecast-5days"),n=document.querySelector(".forecast-button-left"),a=document.querySelector(".forecast-button-right");if(!e||!t||!n||!a)return;const o=((l=t.querySelector(".forecast-item"))==null?void 0:l.offsetWidth)||0,s=parseInt(getComputedStyle(t).gap)||0,i=o+s;a.addEventListener("click",()=>{e.scrollBy({left:i,behavior:"smooth"})}),n.addEventListener("click",()=>{e.scrollBy({left:-i,behavior:"smooth"})});function r(){n.style.opacity=e.scrollLeft>0?"1":"0.3",a.style.opacity=e.scrollLeft+e.clientWidth>=t.scrollWidth?"0.3":"1"}e.addEventListener("scroll",r),r(),e.scrollLeft=0}const f=document.querySelector(".header-input"),q=document.querySelector(".home")!==null,x=document.querySelector(".five-days")!==null;function G(){const e=new Date,t=e.getDate(),n=e.toLocaleDateString("en-US",{weekday:"short"}),a=e.toLocaleDateString("en-US",{month:"long"}),o=e.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",second:"2-digit"});return{day:`${t}<sup>${N(t)}</sup>`,weekday:n,month:a,time:o}}function N(e){if(e>3&&e<21)return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}function P(e,t){return new Date((e+t)*1e3).toUTCString().slice(17,22)}async function c(e,t=!1){let n,a;try{typeof e=="string"?n=await T(e):n=await W(e.lat,e.lon),a=await _(n.name),t&&sessionStorage.setItem("currentCity",n.name)}catch{y.show({message:"City not found or network error",position:"topRight",timeout:5e3});return}if(q&&(R(),U()),x&&O(),q){const o=G();I({city:n.name,country:n.sys.country,temp:Math.round(n.main.temp),tempMin:Math.round(n.main.temp_min),tempMax:Math.round(n.main.temp_max),icon:n.weather[0].icon,day:o.day,weekday:o.weekday,month:o.month,time:o.time,sunrise:P(n.sys.sunrise,n.timezone),sunset:P(n.sys.sunset,n.timezone)})}x&&(H(a.city.name,a.city.country),B(a),z())}window.addEventListener("load",()=>{const e=sessionStorage.getItem("currentCity");if(e){c(e);return}navigator.geolocation?navigator.geolocation.getCurrentPosition(t=>{const{latitude:n,longitude:a}=t.coords;c({lat:n,lon:a})},()=>{y.show({message:"Geolocation denied, enter city manually",position:"topRight",timeout:5e3}),c({lat:50.4333,lon:30.5167})}):(y.show({message:"Geolocation not supported",position:"topRight",timeout:5e3}),c({lat:50.4333,lon:30.5167}))});f.addEventListener("keydown",async e=>{if(e.key==="Enter"){const t=f.value.trim();if(!t){y.show({message:"Enter the city",position:"topRight",timeout:5e3});return}await c(t,!0),f.value=""}});window.addEventListener("storage",e=>{e.key==="currentCity"&&(f.value=e.newValue,c(e.newValue))});
//# sourceMappingURL=main-1Iu1ga0a.js.map
