import{a as _,C as w,r as J,i as $}from"./vendor-CLteyknc.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();const B="324d82384f0b6b757e9697b6aa6e9ef8";async function Y(e){const s=new URLSearchParams({q:e,appid:B,units:"metric"});return(await _.get(`https://api.openweathermap.org/data/2.5/weather?${s}`)).data}async function Q(e,s){const t=new URLSearchParams({lat:e,lon:s,appid:B,units:"metric"});return(await _.get(`https://api.openweathermap.org/data/2.5/weather?${t}`)).data}async function X(e){const s=new URLSearchParams({q:e,appid:B,units:"metric"});return(await _.get(`https://api.openweathermap.org/data/2.5/forecast?${s}`)).data}const m="/weather-app/assets/icons-D0JtYWc4.svg";let U=!1;function Z(){var u;const e=document.querySelector(".forecast-5days-wrapper"),s=document.querySelector(".forecast-5days"),t=document.querySelector(".forecast-button-left"),n=document.querySelector(".forecast-button-right");if(!e||!s||!t||!n||U)return;U=!0;const o=((u=s.querySelector(".forecast-item"))==null?void 0:u.offsetWidth)||0,r=parseInt(getComputedStyle(s).gap)||0,l=o+r;n.addEventListener("click",()=>{e.scrollBy({left:l,behavior:"smooth"})}),t.addEventListener("click",()=>{e.scrollBy({left:-l,behavior:"smooth"})});function p(){t.style.opacity=e.scrollLeft>0?"1":"0.3",n.style.opacity=e.scrollLeft+e.clientWidth>=s.scrollWidth?"0.3":"1"}e.addEventListener("scroll",p),p(),e.scrollLeft=0}let R=!1;function K(){const e=document.querySelector(".forecast-hours-wrapper"),s=document.querySelector(".forecast-hours"),t=document.querySelector(".scroll-bar"),n=document.querySelector(".scroll-thumb");if(!e||!s||!t||!n||R)return;R=!0;function o(){const r=s.scrollWidth,l=e.clientWidth,p=e.scrollLeft;if(r<=l+10){t.style.opacity="0",n.style.width="0";return}t.style.opacity="1";const u=t.offsetWidth,c=Math.max(l/r*u,30),i=r-l,a=i===0?0:p/i,d=u-c,y=a*d;n.style.width=`${c}px`,n.style.left=`${y}px`}e.addEventListener("scroll",o),window.addEventListener("resize",o),o()}w.register(...J);const b=document.querySelector(".weather-card"),S=document.querySelector(".datetime-card"),I={"01d":"icon-sun","01n":"icon-sun","02d":"icon-cloudy_and_sun","02n":"icon-cloudy_and_sun","03d":"icon-cloudy","03n":"icon-cloudy","04d":"icon-cloudy","04n":"icon-cloudy","09d":"icon-weather","09n":"icon-weather","10d":"icon-weather","10n":"icon-weather","11d":"icon-weather","11n":"icon-weather","13d":"icon-snow","13n":"icon-snow","50d":"icon-cloudy","50n":"icon-cloudy"};function ee(e){if(!b||!S)return;const{city:s,country:t,temp:n,tempMin:o,tempMax:r,icon:l,day:p,weekday:u,month:c,time:i,sunrise:a,sunset:d}=e,y=I[l]||"icon-sun",k=`
                <svg class="weather-icon">
                    <use href="${m}#${y}"></use>
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
    `,q=`
            <ul class="datetime-wrapper">
              <li class="datetime-day">${p}</li>
              <li class="datetime-weekday">${u}</li>
            </ul>
            <div class="datetime-container">
            <ul class="datetime-wrapper">
              <li class="datetime-month">${c}</li>
              <li class="datetime-time">${i}</li>
            </ul>
              <ul class="datetime-wrapper">
              <li>
                <svg class="datetime-icon">
                  <use href="${m}#icon-sunrise"></use>
                </svg>
                <p class="datetime-sunrise">${a}</p>
              </li>
              <li>
                <svg class="datetime-icon">
                  <use href="${m}#icon-sunset"></use>
                </svg>
                <p class="datetime-sunset">${d}</p>
              </li>
            </ul>
            </div>
  `;b.innerHTML=k,b.style.display="block",S.innerHTML=q,S.style.display="block"}function te(){b.innerHTML=""}function se(){S.innerHTML=""}const x=document.querySelector(".forecast-container"),C=x?x.querySelector(".forecast-city"):null,M=document.querySelector(".forecast-5days");function oe(e,s){C&&(C.textContent=`${e}, ${s}`)}function ne(e){if(!M||!x)return;const s=new Map;e.list.forEach(o=>{const r=o.dt_txt.split(" ")[0];s.has(r)||s.set(r,[]),s.get(r).push(o)});const t=Array.from(s.entries()).slice(0,5),n=[];t.forEach(([o,r])=>{const l=r[0],{dt_txt:p,main:u,weather:c}=l,i=new Date(p),a=i.getDate(),d=i.toLocaleDateString("en-US",{weekday:"long"}),y=i.toLocaleDateString("en-US",{month:"short"}),k=Math.round(Math.min(...r.map(D=>D.main.temp_min))),q=Math.round(Math.max(...r.map(D=>D.main.temp_max))),V=I[c[0].icon]||"icon-sun";n.push(`
          <li class="forecast-item">
            <p class="forecast-weekday">${d}</p>
            <p class="forecast-date">${a} ${y}</p>
            <svg class="forecast-icon">
              <use href="${m}#${V}"></use>
            </svg>
            <ul class="forecast-temp">
              <li>
                <p class="forecast-temp-title">min</p>
                <p class="forecast-temp-value">${k}&deg</p>
              </li>
              <li>
                <p class="forecast-temp-title">max</p>
                <p class="forecast-temp-value">${q}&deg</p>
              </li>
            </ul>
            <button type="button" class="forecast-button" data-date="${o}">more info</button>
            </li>
  `)}),M.innerHTML=n.join(""),x.style.display="block"}function re(){!C||!M||(C.textContent="",M.innerHTML="")}const h=document.querySelector(".forecast-hours");function ae(e){if(!h)return;const s=e.map(o=>{const l=new Date(o.dt_txt).toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"}),p=Math.round(o.main.temp),u=o.main.pressure,c=o.main.humidity,i=o.wind.speed,a=o.weather[0].icon,d=I[a]||"icon-sun";return`
           <li class="forecast-hours-item">
                <ul>
                  <li class="forecast-hours-time">${l}</li>
                  <li>
                    <svg class="forecast-hours-icon">
                      <use href="${m}#${d}"></use>
                    </svg>
                  </li>
                  <li class="forecast-hours-temp">${p}&deg</li>
                  <div class="forecast-hours-container">
                  <li class="forecast-hours-wrap">
                    <svg class="forecast-hours-img">
                      <use href="${m}#icon-atmosphere"></use>
                    </svg>
                    <p class="forecast-hours-value">${u} mm</p>
                  </li>
                  <li class="forecast-hours-wrap">
                    <svg class="forecast-hours-img">
                      <use href="${m}#icon-humidity"></use>
                    </svg>
                    <p class="forecast-hours-value">${c}%</p>
                  </li>
                    <li class="forecast-hours-wrap">
                    <svg class="forecast-hours-img">
                      <use href="${m}#icon-wind"></use>
                    </svg>
                    <p class="forecast-hours-value">${i} m/s</p>
                  </li>
                  </div>
                </ul>
              </li>
    `});h.innerHTML=s.join(""),h.style.display="flex";const t=document.querySelector(".forecast-container-inner"),n=document.querySelector(".scroll-bar-wrapper");t&&(t.style.display="block"),n&&(n.style.display="block"),K()}function A(){if(!h)return;h.innerHTML="",h.style.display="none";const e=document.querySelector(".scroll-bar");e&&(e.style.opacity="0"),K()}const ie=document.getElementById("chart-temp"),ce=document.getElementById("chart-humidity"),le=document.getElementById("chart-wind"),ue=document.getElementById("chart-pressure");let W,E,H,T;function de(e){if(!e)return;const s=new Map;e.list.forEach(u=>{const c=u.dt_txt.split(" ")[0];s.has(c)||s.set(c,[]),s.get(c).push(u)});const t=Array.from(s.entries()).slice(0,5),n=t.map(([u])=>new Date(u).toLocaleDateString("en-US",{weekday:"short"})),o=t.map(([u,c])=>{const i=c.map(a=>a.main.temp);return Math.round(i.reduce((a,d)=>a+d)/i.length)}),r=t.map(([u,c])=>{const i=c.map(a=>a.main.humidity);return Math.round(i.reduce((a,d)=>a+d)/i.length)}),l=t.map(([u,c])=>{const i=c.map(a=>a.wind.speed);return(i.reduce((a,d)=>a+d)/i.length).toFixed(1)}),p=t.map(([u,c])=>{const i=c.map(a=>a.main.pressure);return Math.round(i.reduce((a,d)=>a+d)/i.length)});W&&W.destroy(),E&&E.destroy(),H&&H.destroy(),T&&T.destroy(),W=new w(ie,{type:"line",data:{labels:n,datasets:[{label:"Temperature, C°",data:o,borderColor:"#ff6b09",backgroundColor:"#ff6b09",tension:.4}]},options:{responsive:!0,plugins:{legend:{display:!0,labels:{color:"#FFFFFF54",font:{weight:400,size:14},padding:20,boxWidth:12,boxHeight:12}}},scales:{x:{ticks:{color:"#FFFFFF54",font:{size:14}},grid:{color:"#FFFFFF20"}},y:{ticks:{color:"#FFFFFF54",font:{size:14}},grid:{color:"#FFFFFF20"}}}}}),E=new w(ce,{type:"line",data:{labels:n,datasets:[{label:"Humidity, %",data:r,borderColor:"#0906EB",backgroundColor:"#0906EB",tension:.4}]},options:{responsive:!0,plugins:{legend:{display:!0,labels:{color:"#FFFFFF54",font:{weight:400,size:14},padding:20,boxWidth:12,boxHeight:12}}},scales:{x:{ticks:{color:"#FFFFFF54",font:{size:14}},grid:{color:"#FFFFFF20"}},y:{ticks:{color:"#FFFFFF54",font:{size:14}},grid:{color:"#FFFFFF20"}}}}}),H=new w(le,{type:"line",data:{labels:n,datasets:[{label:"Wind speed, m/s",data:l,borderColor:"#EA9A05",backgroundColor:"#EA9A05",tension:.4}]},options:{responsive:!0,plugins:{legend:{display:!0,labels:{color:"#FFFFFF54",font:{weight:400,size:14},padding:20,boxWidth:12,boxHeight:12}}},scales:{x:{ticks:{color:"#FFFFFF54",font:{size:14}},grid:{color:"#FFFFFF20"}},y:{ticks:{color:"#FFFFFF54",font:{size:14}},grid:{color:"#FFFFFF20"}}}}}),T=new w(ue,{type:"line",data:{labels:n,datasets:[{label:"Pressure, mm",data:p,borderColor:"#067806",backgroundColor:"#067806",tension:.4}]},options:{responsive:!0,plugins:{legend:{display:!0,labels:{color:"#FFFFFF54",font:{weight:400,size:14},padding:20,boxWidth:12,boxHeight:12}}},scales:{x:{ticks:{color:"#FFFFFF54",font:{size:14}},grid:{color:"#FFFFFF20"}},y:{ticks:{color:"#FFFFFF54",font:{size:14}},grid:{color:"#FFFFFF20"}}}}})}const L=document.querySelector(".header-input"),O=document.querySelector(".home")!==null,j=document.querySelector(".five-days")!==null;function pe(){const e=new Date,s=e.getDate(),t=e.toLocaleDateString("en-US",{weekday:"short"}),n=e.toLocaleDateString("en-US",{month:"long"}),o=e.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",second:"2-digit"});return{day:`${s}<sup>${me(s)}</sup>`,weekday:t,month:n,time:o}}function me(e){if(e>3&&e<21)return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}function G(e,s){return new Date((e+s)*1e3).toUTCString().slice(17,22)}let v=null;async function f(e,s=!1){let t,n;try{typeof e=="string"?t=await Y(e):t=await Q(e.lat,e.lon),n=await X(t.name),v=n,s&&sessionStorage.setItem("currentCity",t.name)}catch{$.show({message:"City not found or network error",position:"topRight",timeout:5e3});return}if(O&&(te(),se()),j&&re(),O){const o=pe();ee({city:t.name,country:t.sys.country,temp:Math.round(t.main.temp),tempMin:Math.round(t.main.temp_min),tempMax:Math.round(t.main.temp_max),icon:t.weather[0].icon,day:o.day,weekday:o.weekday,month:o.month,time:o.time,sunrise:G(t.sys.sunrise,t.timezone),sunset:G(t.sys.sunset,t.timezone)})}j&&(oe(n.city.name,n.city.country),ne(n),Z())}window.addEventListener("load",()=>{const e=sessionStorage.getItem("currentCity");if(e){f(e);return}navigator.geolocation?navigator.geolocation.getCurrentPosition(s=>{const{latitude:t,longitude:n}=s.coords;f({lat:t,lon:n})},()=>{$.show({message:"Geolocation denied, enter city manually",position:"topRight",timeout:5e3}),f({lat:50.4333,lon:30.5167})}):($.show({message:"Geolocation not supported",position:"topRight",timeout:5e3}),f({lat:50.4333,lon:30.5167}))});L.addEventListener("keydown",async e=>{if(e.key==="Enter"){const s=L.value.trim();if(!s){$.show({message:"Enter the city",position:"topRight",timeout:5e3});return}await f(s,!0),L.value=""}});window.addEventListener("storage",e=>{e.key==="currentCity"&&(L.value=e.newValue,f(e.newValue))});let g=null;document.addEventListener("click",e=>{const s=document.querySelector(".forecast-hours"),t=e.target.closest(".forecast-button");if(!t||!s||!v)return;const n=t.dataset.date;if(!n)return;if(g===t){A(),t.classList.remove("active"),g=null;return}g&&g.classList.remove("active");const o=v.list.filter(r=>r.dt_txt.split(" ")[0]===n);A(),ae(o),t.classList.add("active"),g=t});const z=document.querySelector(".button-show-chart"),P=document.querySelector(".chart-button-show-container"),N=document.querySelector(".button-hide-chart"),F=document.querySelector(".forecast-chart-container");z&&F&&P&&(z.addEventListener("click",()=>{!z||!F||(P.style.display="none",F.style.display="flex",requestAnimationFrame(()=>{v&&de(v)}))}),N.addEventListener("click",()=>{!N||!F||(P.style.display="flex",F.style.display="none")}));
//# sourceMappingURL=main-Bq5bjltX.js.map
