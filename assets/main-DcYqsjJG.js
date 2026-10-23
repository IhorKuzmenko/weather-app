const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-1EtPX3YI.js","assets/vendor-DnveWo0P.css"])))=>i.map(i=>d[i]);
import{a as Y,i as E}from"./vendor-1EtPX3YI.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const Q="https://api.openweathermap.org/data/2.5";Y.create({baseURL:Q,timeout:1e4});async function R(e,n,t){throw new Error("OpenWeather API key is missing")}function X(e,n){return R()}function Z(e,n,t){return R()}function ee(e,n){return R()}const te="modulepreload",ne=function(e){return"/weather-app/"+e},P={},re=function(n,t,r){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(t.map(a=>{if(a=ne(a),a in P)return;P[a]=!0;const u=a.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${d}`))return;const l=document.createElement("link");if(l.rel=u?"stylesheet":te,u||(l.as="script"),l.crossOrigin="",l.href=a,c&&l.setAttribute("nonce",c),document.head.appendChild(l),u)return new Promise((m,v)=>{l.addEventListener("load",m),l.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${a}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return n().catch(i)})},y="/weather-app/assets/icons-D0JtYWc4.svg";let _=!1,A=!1,p=null,h=null;function j(e){let n=null;return()=>{n===null&&(n=requestAnimationFrame(()=>{n=null,e()}))}}function se(){const e=document.querySelector(".forecast-5days-wrapper"),n=document.querySelector(".forecast-5days"),t=document.querySelector(".forecast-button-left"),r=document.querySelector(".forecast-button-right");if(!e||!n||!t||!r)return;if(_){e.scrollLeft=0,p==null||p();return}_=!0;function s(){const o=n.querySelector(".forecast-item");if(!o)return 0;const c=getComputedStyle(n),a=parseFloat(c.columnGap)||0;return o.getBoundingClientRect().width+a}function i(){const o=Math.max(0,e.scrollWidth-e.clientWidth),c=e.scrollLeft<=1,a=e.scrollLeft>=o-1;t.disabled=c,r.disabled=a,t.setAttribute("aria-disabled",String(c)),r.setAttribute("aria-disabled",String(a)),t.style.opacity=c?"0.3":"1",r.style.opacity=a?"0.3":"1"}if(p=j(i),r.addEventListener("click",()=>{const o=s();o&&e.scrollBy({left:o,behavior:"smooth"})}),t.addEventListener("click",()=>{const o=s();o&&e.scrollBy({left:-o,behavior:"smooth"})}),e.addEventListener("scroll",p,{passive:!0}),typeof ResizeObserver<"u"){const o=new ResizeObserver(p);o.observe(e),o.observe(n)}else window.addEventListener("resize",p);e.scrollLeft=0,p()}function G(){const e=document.querySelector(".forecast-hours-wrapper"),n=document.querySelector(".forecast-hours"),t=document.querySelector(".scroll-bar"),r=document.querySelector(".scroll-thumb");if(!e||!n||!t||!r)return;if(A){h==null||h();return}A=!0;function s(){const i=e.scrollWidth,o=e.clientWidth,c=e.scrollLeft;if(!o||i<=o+1){t.style.opacity="0",r.style.width="0px",r.style.left="0px";return}const a=t.clientWidth;if(!a)return;const u=i-o,d=Math.min(a,Math.max(o/i*a,30)),l=Math.min(1,Math.max(0,c/u)),m=a-d,v=l*m;t.style.opacity="1",r.style.width=`${d}px`,r.style.left=`${v}px`}if(h=j(s),e.addEventListener("scroll",h,{passive:!0}),typeof ResizeObserver<"u"){const i=new ResizeObserver(h);i.observe(e),i.observe(n),i.observe(t)}else window.addEventListener("resize",h);h()}const L=document.querySelector(".weather-card"),$=document.querySelector(".datetime-card"),T={"01d":"icon-sun","01n":"icon-sun","02d":"icon-cloudy_and_sun","02n":"icon-cloudy_and_sun","03d":"icon-cloudy","03n":"icon-cloudy","04d":"icon-cloudy","04n":"icon-cloudy","09d":"icon-weather","09n":"icon-weather","10d":"icon-weather","10n":"icon-weather","11d":"icon-weather","11n":"icon-weather","13d":"icon-snow","13n":"icon-snow","50d":"icon-cloudy","50n":"icon-cloudy"};function f(e){return String(e??"").replace(/[&<>"']/g,n=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[n])}function V(e){return new Date(`${e}T12:00:00`)}function oe(e){if(!L||!$)return;const{city:n,country:t,temp:r,tempMin:s,tempMax:i,icon:o,day:c,weekday:a,month:u,time:d,sunrise:l,sunset:m}=e,v=T[o]||"icon-sun";L.innerHTML=`
    <svg class="weather-icon" aria-hidden="true">
      <use href="${y}#${v}"></use>
    </svg>

    <p class="weather-location">
      ${f(n)}, ${f(t)}
    </p>

    <div class="weather-temp-wrapper">
      <p class="weather-temp">${f(r)}&deg;</p>

      <ul class="temp-box">
        <li class="temp-item">
          <p class="temp-name">min</p>
          <p class="temp-value">${f(s)}&deg;</p>
        </li>

        <li class="temp-item">
          <p class="temp-name">max</p>
          <p class="temp-value">${f(i)}&deg;</p>
        </li>
      </ul>
    </div>
  `,$.innerHTML=`
    <ul class="datetime-wrapper">
      <li class="datetime-day">${f(c)}</li>
      <li class="datetime-weekday">${f(a)}</li>
    </ul>

    <div class="datetime-container">
      <ul class="datetime-wrapper">
        <li class="datetime-month">${f(u)}</li>
        <li class="datetime-time">${f(d)}</li>
      </ul>

      <ul class="datetime-wrapper">
        <li>
          <svg class="datetime-icon" aria-hidden="true">
            <use href="${y}#icon-sunrise"></use>
          </svg>
          <p class="datetime-sunrise">${f(l)}</p>
        </li>

        <li>
          <svg class="datetime-icon" aria-hidden="true">
            <use href="${y}#icon-sunset"></use>
          </svg>
          <p class="datetime-sunset">${f(m)}</p>
        </li>
      </ul>
    </div>
  `,L.style.display="block",$.style.display="block"}function ie(){L&&(L.innerHTML="")}function ae(){$&&($.innerHTML="")}const x=document.querySelector(".forecast-container"),q=x==null?void 0:x.querySelector(".forecast-city"),D=document.querySelector(".forecast-5days");function ce(e,n){q&&(q.textContent=`${e}, ${n}`)}function J(e){const n=new Map;for(const t of(e==null?void 0:e.list)||[]){const r=t.dt_txt.split(" ")[0];n.has(r)||n.set(r,[]),n.get(r).push(t)}return Array.from(n.entries()).slice(0,5)}function le(e){if(!D||!x)return;const n=J(e).map(([t,r])=>{const s=r[0],i=V(t),o=i.toLocaleDateString("en-US",{weekday:"long"}),c=i.toLocaleDateString("en-US",{month:"short"}),a=i.getDate(),u=Math.round(Math.min(...r.map(m=>m.main.temp_min))),d=Math.round(Math.max(...r.map(m=>m.main.temp_max))),l=T[s.weather[0].icon]||"icon-sun";return`
        <li class="forecast-item">
          <p class="forecast-weekday">${o}</p>
          <p class="forecast-date">${a} ${c}</p>

          <svg class="forecast-icon" aria-hidden="true">
            <use href="${y}#${l}"></use>
          </svg>

          <ul class="forecast-temp">
            <li>
              <p class="forecast-temp-title">min</p>
              <p class="forecast-temp-value">${u}&deg;</p>
            </li>

            <li>
              <p class="forecast-temp-title">max</p>
              <p class="forecast-temp-value">${d}&deg;</p>
            </li>
          </ul>

          <button
            type="button"
            class="forecast-button"
            data-date="${t}"
          >
            more info
          </button>
        </li>
      `});D.innerHTML=n.join(""),x.style.display="block"}function ue(){q&&(q.textContent=""),D&&(D.innerHTML="")}const w=document.querySelector(".forecast-hours");function de(e){if(!w)return;const n=e.map(s=>{const i=s.dt_txt.slice(11,16),o=Math.round(s.main.temp),c=s.main.pressure,a=s.main.humidity,u=s.wind.speed,d=T[s.weather[0].icon]||"icon-sun";return`
      <li class="forecast-hours-item">
        <ul>
          <li class="forecast-hours-time">${i}</li>

          <li>
            <svg class="forecast-hours-icon" aria-hidden="true">
              <use href="${y}#${d}"></use>
            </svg>
          </li>

          <li class="forecast-hours-temp">${o}&deg;</li>

          <li class="forecast-hours-container">
            <ul>
              <li class="forecast-hours-wrap">
                <svg class="forecast-hours-img" aria-hidden="true">
                  <use href="${y}#icon-atmosphere"></use>
                </svg>
                <p class="forecast-hours-value">
                  ${c} hPa
                </p>
              </li>

              <li class="forecast-hours-wrap">
                <svg class="forecast-hours-img" aria-hidden="true">
                  <use href="${y}#icon-humidity"></use>
                </svg>
                <p class="forecast-hours-value">
                  ${a}%
                </p>
              </li>

              <li class="forecast-hours-wrap">
                <svg class="forecast-hours-img" aria-hidden="true">
                  <use href="${y}#icon-wind"></use>
                </svg>
                <p class="forecast-hours-value">
                  ${u} m/s
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    `});w.innerHTML=n.join(""),w.style.display="flex";const t=document.querySelector(".forecast-container-inner"),r=document.querySelector(".scroll-bar-wrapper");t&&(t.style.display="block"),r&&(r.style.display="block"),G()}function H(){if(!w)return;w.innerHTML="",w.style.display="none";const e=document.querySelector(".scroll-bar");e&&(e.style.opacity="0"),G()}let M=null,I=0;const z=new Map;async function me(){return M||(M=re(()=>import("./vendor-1EtPX3YI.js").then(e=>e.b),__vite__mapDeps([0,1])).then(e=>e.default).catch(e=>{throw M=null,e})),M}function fe(e){const n=J(e);function t(r,s){return r.reduce((i,o)=>i+s(o),0)/r.length}return{labels:n.map(([r])=>V(r).toLocaleDateString("en-US",{weekday:"short"})),temperature:n.map(([,r])=>Number(t(r,s=>s.main.temp).toFixed(1))),humidity:n.map(([,r])=>Math.round(t(r,s=>s.main.humidity))),wind:n.map(([,r])=>Number(t(r,s=>s.wind.speed).toFixed(1))),pressure:n.map(([,r])=>Math.round(t(r,s=>s.main.pressure)))}}const K=[{id:"chart-temp",label:"Temperature, °C",key:"temperature",color:"#ff6b09"},{id:"chart-humidity",label:"Humidity, %",key:"humidity",color:"#6585ff"},{id:"chart-wind",label:"Wind speed, m/s",key:"wind",color:"#ffbc42"},{id:"chart-pressure",label:"Pressure, hPa",key:"pressure",color:"#42c77a"}];function pe(){return{responsive:!0,maintainAspectRatio:!1,resizeDelay:100,animation:!1,layout:{padding:{top:8,right:8,bottom:8,left:4}},interaction:{intersect:!1,mode:"index"},plugins:{legend:{display:!0,position:"top",align:"start",labels:{color:"#f1f5f9",font:{size:12,weight:"500"},boxWidth:10,boxHeight:10,padding:12}},tooltip:{enabled:!0}},scales:{x:{ticks:{color:"#e2e8f0",font:{size:11},maxRotation:0,minRotation:0,autoSkip:!0},grid:{color:"rgba(255, 255, 255, 0.12)"},border:{display:!1}},y:{ticks:{color:"#e2e8f0",font:{size:11},maxTicksLimit:5,padding:4},grid:{color:"rgba(255, 255, 255, 0.12)"},border:{display:!1}}}}}function he(){var n;const e=K.map(({id:t})=>document.getElementById(t));if(e.some(t=>!t))return null;for(const t of e){if((n=t.parentElement)!=null&&n.classList.contains("chart-wrapper"))continue;const r=document.createElement("div");r.className="chart-wrapper",t.parentNode.insertBefore(r,t),r.appendChild(t),t.removeAttribute("width"),t.removeAttribute("height")}return e}async function ye(e){if(!Array.isArray(e==null?void 0:e.list)||!e.list.length)return;const n=he();if(!n)return;const t=++I,r=await me();if(t!==I)return;const s=fe(e);K.forEach(({id:i,label:o,key:c,color:a},u)=>{var m;const d=n[u];(m=z.get(i))==null||m.destroy();const l=new r(d,{type:"line",data:{labels:s.labels,datasets:[{label:o,data:s[c],borderColor:a,backgroundColor:a,borderWidth:2.5,pointRadius:3,pointHoverRadius:5,tension:.35,fill:!1}]},options:pe()});z.set(i,l)})}const k=document.querySelector(".header-input"),O=document.querySelector(".home")!==null,B=document.querySelector(".five-days")!==null;function ge(){const e=new Date,n=e.getDate(),t=e.toLocaleDateString("en-US",{weekday:"short"}),r=e.toLocaleDateString("en-US",{month:"long"}),s=e.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",second:"2-digit"});return{day:`${n}<sup>${we(n)}</sup>`,weekday:t,month:r,time:s}}function we(e){if(e>3&&e<21)return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}function U(e,n){return new Date((e+n)*1e3).toUTCString().slice(17,22)}let C=null;async function g(e,n=!1){let t,r;try{typeof e=="string"?t=await X(e):t=await Z(e.lat,e.lon),r=await ee(t.name),C=r,n&&sessionStorage.setItem("currentCity",t.name)}catch{E.show({message:"City not found or network error",position:"topRight",timeout:5e3});return}if(O&&(ie(),ae()),B&&ue(),O){const s=ge();oe({city:t.name,country:t.sys.country,temp:Math.round(t.main.temp),tempMin:Math.round(t.main.temp_min),tempMax:Math.round(t.main.temp_max),icon:t.weather[0].icon,day:s.day,weekday:s.weekday,month:s.month,time:s.time,sunrise:U(t.sys.sunrise,t.timezone),sunset:U(t.sys.sunset,t.timezone)})}B&&(ce(r.city.name,r.city.country),le(r),se())}window.addEventListener("load",()=>{const e=sessionStorage.getItem("currentCity");if(e){g(e);return}navigator.geolocation?navigator.geolocation.getCurrentPosition(n=>{const{latitude:t,longitude:r}=n.coords;g({lat:t,lon:r})},()=>{E.show({message:"Geolocation denied, enter city manually",position:"topRight",timeout:5e3}),g({lat:50.4333,lon:30.5167})}):(E.show({message:"Geolocation not supported",position:"topRight",timeout:5e3}),g({lat:50.4333,lon:30.5167}))});k.addEventListener("keydown",async e=>{if(e.key==="Enter"){const n=k.value.trim();if(!n){E.show({message:"Enter the city",position:"topRight",timeout:5e3});return}await g(n,!0),k.value=""}});window.addEventListener("storage",e=>{e.key==="currentCity"&&(k.value=e.newValue,g(e.newValue))});let b=null;document.addEventListener("click",e=>{const n=document.querySelector(".forecast-hours"),t=e.target.closest(".forecast-button");if(!t||!n||!C)return;const r=t.dataset.date;if(!r)return;if(b===t){H(),t.classList.remove("active"),b=null;return}b&&b.classList.remove("active");const s=C.list.filter(i=>i.dt_txt.split(" ")[0]===r);H(),de(s),t.classList.add("active"),b=t});const F=document.querySelector(".button-show-chart"),W=document.querySelector(".chart-button-show-container"),N=document.querySelector(".button-hide-chart"),S=document.querySelector(".forecast-chart-container");F&&S&&W&&(F.addEventListener("click",()=>{!F||!S||(W.style.display="none",S.style.display="flex",requestAnimationFrame(()=>{C&&ye(C)}))}),N.addEventListener("click",()=>{!N||!S||(W.style.display="flex",S.style.display="none")}));
//# sourceMappingURL=main-DcYqsjJG.js.map
