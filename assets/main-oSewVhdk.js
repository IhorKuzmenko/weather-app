import{a as F,C as A,r as j,i as L}from"./vendor-CLteyknc.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();const T="324d82384f0b6b757e9697b6aa6e9ef8";async function G(e){const s=new URLSearchParams({q:e,appid:T,units:"metric"});return(await F.get(`https://api.openweathermap.org/data/2.5/weather?${s}`)).data}async function N(e,s){const t=new URLSearchParams({lat:e,lon:s,appid:T,units:"metric"});return(await F.get(`https://api.openweathermap.org/data/2.5/weather?${t}`)).data}async function K(e){const s=new URLSearchParams({q:e,appid:T,units:"metric"});return(await F.get(`https://api.openweathermap.org/data/2.5/forecast?${s}`)).data}const f="/weather-app/assets/icons-D0JtYWc4.svg";function V(){var a;const e=document.querySelector(".forecast-5days-wrapper"),s=document.querySelector(".forecast-5days"),t=document.querySelector(".forecast-button-left"),n=document.querySelector(".forecast-button-right");if(!e||!s||!t||!n)return;const o=((a=s.querySelector(".forecast-item"))==null?void 0:a.offsetWidth)||0,r=parseInt(getComputedStyle(s).gap)||0,u=o+r;n.addEventListener("click",()=>{e.scrollBy({left:u,behavior:"smooth"})}),t.addEventListener("click",()=>{e.scrollBy({left:-u,behavior:"smooth"})});function p(){t.style.opacity=e.scrollLeft>0?"1":"0.3",n.style.opacity=e.scrollLeft+e.clientWidth>=s.scrollWidth?"0.3":"1"}e.addEventListener("scroll",p),p(),e.scrollLeft=0}function U(){const e=document.querySelector(".forecast-hours-wrapper"),s=document.querySelector(".forecast-hours"),t=document.querySelector(".scroll-bar"),n=document.querySelector(".scroll-thumb");if(!e||!s||!t||!n)return;function o(){const r=s.scrollWidth,u=e.clientWidth,p=e.scrollLeft;if(r<=u+10){t.style.opacity="0",n.style.width="0";return}t.style.opacity="1";const a=t.offsetWidth,l=Math.max(u/r*a,30),c=r-u,i=c===0?0:p/c,d=a-l,y=i*d;n.style.width=`${l}px`,n.style.left=`${y}px`}e.addEventListener("scroll",o),window.addEventListener("resize",o),o()}A.register(...j);const v=document.querySelector(".weather-card"),S=document.querySelector(".datetime-card"),E={"01d":"icon-sun","01n":"icon-sun","02d":"icon-cloudy_and_sun","02n":"icon-cloudy_and_sun","03d":"icon-cloudy","03n":"icon-cloudy","04d":"icon-cloudy","04n":"icon-cloudy","09d":"icon-weather","09n":"icon-weather","10d":"icon-weather","10n":"icon-weather","11d":"icon-weather","11n":"icon-weather","13d":"icon-snow","13n":"icon-snow","50d":"icon-cloudy","50n":"icon-cloudy"};function J(e){if(!v||!S)return;const{city:s,country:t,temp:n,tempMin:o,tempMax:r,icon:u,day:p,weekday:a,month:l,time:c,sunrise:i,sunset:d}=e,y=E[u]||"icon-sun",q=`
                <svg class="weather-icon">
                    <use href="${f}#${y}"></use>
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
                      <p class="temp-value">${r}&deg;</p>
                    </li>
                  </ul>
                </div>
    `,D=`
            <ul class="datetime-wrapper">
              <li class="datetime-day">${p}</li>
              <li class="datetime-weekday">${a}</li>
            </ul>
            <div class="datetime-container">
            <ul class="datetime-wrapper">
              <li class="datetime-month">${l}</li>
              <li class="datetime-time">${c}</li>
            </ul>
              <ul class="datetime-wrapper">
              <li>
                <svg class="datetime-icon">
                  <use href="${f}#icon-sunrise"></use>
                </svg>
                <p class="datetime-sunrise">${i}</p>
              </li>
              <li>
                <svg class="datetime-icon">
                  <use href="${f}#icon-sunset"></use>
                </svg>
                <p class="datetime-sunset">${d}</p>
              </li>
            </ul>
            </div>
  `;v.innerHTML=q,v.style.display="block",S.innerHTML=D,S.style.display="block"}function Y(){v.innerHTML=""}function Q(){S.innerHTML=""}const $=document.querySelector(".forecast-container"),k=$?$.querySelector(".forecast-city"):null,M=document.querySelector(".forecast-5days");function X(e,s){k&&(k.textContent=`${e}, ${s}`)}function Z(e){if(!M||!$)return;const s=new Map;e.list.forEach(o=>{const r=o.dt_txt.split(" ")[0];s.has(r)||s.set(r,[]),s.get(r).push(o)});const t=Array.from(s.entries()).slice(0,5),n=[];t.forEach(([o,r])=>{const u=r[0],{dt_txt:p,main:a,weather:l}=u,c=new Date(p),i=c.getDate(),d=c.toLocaleDateString("en-US",{weekday:"long"}),y=c.toLocaleDateString("en-US",{month:"short"}),q=Math.round(Math.min(...r.map(W=>W.main.temp_min))),D=Math.round(Math.max(...r.map(W=>W.main.temp_max))),z=E[l[0].icon]||"icon-sun";n.push(`
          <li class="forecast-item">
            <p class="forecast-weekday">${d}</p>
            <p class="forecast-date">${i} ${y}</p>
            <svg class="forecast-icon">
              <use href="${f}#${z}"></use>
            </svg>
            <ul class="forecast-temp">
              <li>
                <p class="forecast-temp-title">min</p>
                <p class="forecast-temp-value">${q}&deg</p>
              </li>
              <li>
                <p class="forecast-temp-title">max</p>
                <p class="forecast-temp-value">${D}&deg</p>
              </li>
            </ul>
            <button type="button" class="forecast-button" data-date="${o}">more info</button>
            </li>
  `)}),M.innerHTML=n.join(""),$.style.display="block"}function ee(){!k||!M||(k.textContent="",M.innerHTML="")}const h=document.querySelector(".forecast-hours");function te(e){if(!h)return;const s=e.map(o=>{const u=new Date(o.dt_txt).toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"}),p=Math.round(o.main.temp),a=o.main.pressure,l=o.main.humidity,c=o.wind.speed,i=o.weather[0].icon,d=E[i]||"icon-sun";return`
           <li class="forecast-hours-item">
                <ul>
                  <li class="forecast-hours-time">${u}</li>
                  <li>
                    <svg class="forecast-hours-icon">
                      <use href="${f}#${d}"></use>
                    </svg>
                  </li>
                  <li class="forecast-hours-temp">${p}&deg</li>
                  <div class="forecast-hours-container">
                  <li class="forecast-hours-wrap">
                    <svg class="forecast-hours-img">
                      <use href="${f}#icon-atmosphere"></use>
                    </svg>
                    <p class="forecast-hours-value">${a} mm</p>
                  </li>
                  <li class="forecast-hours-wrap">
                    <svg class="forecast-hours-img">
                      <use href="${f}#icon-humidity"></use>
                    </svg>
                    <p class="forecast-hours-value">${l}%</p>
                  </li>
                    <li class="forecast-hours-wrap">
                    <svg class="forecast-hours-img">
                      <use href="${f}#icon-wind"></use>
                    </svg>
                    <p class="forecast-hours-value">${c} m/s</p>
                  </li>
                  </div>
                </ul>
              </li>
    `});h.innerHTML=s.join(""),h.style.display="flex";const t=document.querySelector(".forecast-container-inner"),n=document.querySelector(".scroll-bar-wrapper");t&&(t.style.display="block"),n&&(n.style.display="block"),U()}function I(){if(!h)return;h.innerHTML="",h.style.display="none";const e=document.querySelector(".scroll-bar");e&&(e.style.opacity="0"),U()}const g=document.querySelector(".forecast-chart");function se(e){if(!g||!e)return;const s=new Map;e.list.forEach(a=>{const l=a.dt_txt.split(" ")[0];s.has(l)||s.set(l,[]),s.get(l).push(a)});const t=Array.from(s.entries()).slice(0,5),n=t.map(([a])=>new Date(a).toLocaleDateString("en-US",{weekday:"short"})),o=t.map(([a,l])=>{const c=l.map(i=>i.main.temp);return Math.round(c.reduce((i,d)=>i+d)/c.length)}),r=t.map(([a,l])=>{const c=l.map(i=>i.main.humidity);return Math.round(c.reduce((i,d)=>i+d)/c.length)}),u=t.map(([a,l])=>{const c=l.map(i=>i.wind.speed);return(c.reduce((i,d)=>i+d)/c.length).toFixed(1)}),p=t.map(([a,l])=>{const c=l.map(i=>i.main.pressure);return Math.round(c.reduce((i,d)=>i+d)/c.length)});g.chartInstance&&g.chartInstance.destroy(),g.chartInstance=new A(g,{type:"line",data:{labels:n,datasets:[{label:"Temperature, C°",data:o,borderColor:"#ff6b09",backgroundColor:"rgba(255, 107, 9, 0.1)",borderWidth:3,pointBackgroundColor:"#ff6b09",pointRadius:5,tension:.4,yAxisID:"y-temp"},{label:"Humidity, %",data:r,borderColor:"#007bff",backgroundColor:"rgba(0, 123, 255, 0.1)",borderWidth:3,pointBackgroundColor:"#007bff",pointRadius:5,tension:.4,yAxisID:"y-percent"},{label:"Wind Speed, m/s",data:u,borderColor:"#00e396",backgroundColor:"rgba(0, 227, 150, 0.1)",borderWidth:3,pointBackgroundColor:"#00e396",pointRadius:5,tension:.4,yAxisID:"y-speed"},{label:"Atmosphere Pressure, mm",data:p,borderColor:"#feb019",backgroundColor:"rgba(254, 176, 25, 0.1)",borderWidth:3,pointBackgroundColor:"#feb019",pointRadius:5,tension:.4,yAxisID:"y-pressure"}]},options:{responsive:!0,maintainAspectRatio:!1,interaction:{mode:"index",intersect:!1},plugins:{legend:{display:!0,position:"top",align:"start",labels:{color:"#ffffff",font:{size:14,family:"Lato"},padding:20,usePointStyle:!0,pointStyle:"line"}},tooltip:{backgroundColor:"rgba(16, 33, 54, 0.95)",titleColor:"#ff6b09",bodyColor:"#ffffff",cornerRadius:12}},scales:{x:{ticks:{color:"#ffffff",font:{size:14}},grid:{display:!1},border:{display:!1}},"y-temp":{type:"linear",position:"left",title:{display:!1},ticks:{color:"#ff6b09",callback:a=>a+"°"},grid:{display:!1}},"y-percent":{type:"linear",position:"right",min:0,max:100,ticks:{color:"#007bff",callback:a=>a+"%"},grid:{display:!1}},"y-speed":{type:"linear",position:"right",display:!1},"y-pressure":{type:"linear",position:"right",display:!1}}}})}const C=document.querySelector(".header-input"),_=document.querySelector(".home")!==null,P=document.querySelector(".five-days")!==null;function oe(){const e=new Date,s=e.getDate(),t=e.toLocaleDateString("en-US",{weekday:"short"}),n=e.toLocaleDateString("en-US",{month:"long"}),o=e.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",second:"2-digit"});return{day:`${s}<sup>${ne(s)}</sup>`,weekday:t,month:n,time:o}}function ne(e){if(e>3&&e<21)return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}function H(e,s){return new Date((e+s)*1e3).toUTCString().slice(17,22)}let b=null;async function m(e,s=!1){let t,n;try{typeof e=="string"?t=await G(e):t=await N(e.lat,e.lon),n=await K(t.name),b=n,s&&sessionStorage.setItem("currentCity",t.name)}catch{L.show({message:"City not found or network error",position:"topRight",timeout:5e3});return}if(_&&(Y(),Q()),P&&ee(),_){const o=oe();J({city:t.name,country:t.sys.country,temp:Math.round(t.main.temp),tempMin:Math.round(t.main.temp_min),tempMax:Math.round(t.main.temp_max),icon:t.weather[0].icon,day:o.day,weekday:o.weekday,month:o.month,time:o.time,sunrise:H(t.sys.sunrise,t.timezone),sunset:H(t.sys.sunset,t.timezone)})}P&&(X(n.city.name,n.city.country),Z(n),V())}window.addEventListener("load",()=>{const e=sessionStorage.getItem("currentCity");if(e){m(e);return}navigator.geolocation?navigator.geolocation.getCurrentPosition(s=>{const{latitude:t,longitude:n}=s.coords;m({lat:t,lon:n})},()=>{L.show({message:"Geolocation denied, enter city manually",position:"topRight",timeout:5e3}),m({lat:50.4333,lon:30.5167})}):(L.show({message:"Geolocation not supported",position:"topRight",timeout:5e3}),m({lat:50.4333,lon:30.5167}))});C.addEventListener("keydown",async e=>{if(e.key==="Enter"){const s=C.value.trim();if(!s){L.show({message:"Enter the city",position:"topRight",timeout:5e3});return}await m(s,!0),C.value=""}});window.addEventListener("storage",e=>{e.key==="currentCity"&&(C.value=e.newValue,m(e.newValue))});let w=null;document.addEventListener("click",e=>{const s=document.querySelector(".forecast-hours"),t=e.target.closest(".forecast-button");if(!t||!s||!b)return;const n=t.dataset.date;if(!n)return;if(w===t){I(),t.classList.remove("active"),w=null;return}w&&w.classList.remove("active");const o=b.list.filter(r=>r.dt_txt.split(" ")[0]===n);I(),te(o),t.classList.add("active"),w=t});const B=document.querySelector(".button-show-chart"),O=document.querySelector(".chart-button-show-container"),R=document.querySelector(".button-hide-chart"),x=document.querySelector(".forecast-chart-container");B.addEventListener("click",()=>{!B||!x||(O.style.display="none",x.style.display="flex",requestAnimationFrame(()=>{b&&se(b)}))});R.addEventListener("click",()=>{!R||!x||(O.style.display="flex",x.style.display="none")});
//# sourceMappingURL=main-oSewVhdk.js.map
