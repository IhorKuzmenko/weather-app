const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-1EtPX3YI.js","assets/vendor-DnveWo0P.css"])))=>i.map(i=>d[i]);
import{a as me,i as pe}from"./vendor-1EtPX3YI.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();const he="324d82384f0b6b757e9697b6aa6e9ef8",ye="https://api.openweathermap.org/data/2.5",ge=me.create({baseURL:ye,timeout:1e4});async function I(e,t,n){return(await ge.get(e,{params:{...t,appid:he,units:"metric"},signal:n})).data}function we(e,t){return I("/weather",{q:e},t)}function be(e,t,n){return I("/weather",{lat:e,lon:t},n)}function ve(e,t){return I("/forecast",{q:e},t)}const Se="modulepreload",Le=function(e){return"/weather-app/"+e},N={},qe=function(t,n,s){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(n.map(i=>{if(i=Le(i),i in N)return;N[i]=!0;const u=i.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${d}`))return;const l=document.createElement("link");if(l.rel=u?"stylesheet":Se,u||(l.as="script"),l.crossOrigin="",l.href=i,c&&l.setAttribute("nonce",c),document.head.appendChild(l),u)return new Promise((f,$)=>{l.addEventListener("load",f),l.addEventListener("error",()=>$(new Error(`Unable to preload CSS for ${i}`)))})}))}function a(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return r.then(o=>{for(const c of o||[])c.status==="rejected"&&a(c.reason);return t().catch(a)})},g="/weather-app/assets/icons-D0JtYWc4.svg";let V=!1,j=!1,y=null,m=null;function te(e){let t=null;return()=>{t===null&&(t=requestAnimationFrame(()=>{t=null,e()}))}}function $e(){const e=document.querySelector(".forecast-5days-wrapper"),t=document.querySelector(".forecast-5days"),n=document.querySelector(".forecast-button-left"),s=document.querySelector(".forecast-button-right");if(!e||!t||!n||!s)return;if(V){e.scrollLeft=0,y==null||y();return}V=!0;function r(){const o=t.querySelector(".forecast-item");if(!o)return 0;const c=getComputedStyle(t),i=parseFloat(c.columnGap)||0;return o.getBoundingClientRect().width+i}function a(){const o=Math.max(0,e.scrollWidth-e.clientWidth),c=e.scrollLeft<=1,i=e.scrollLeft>=o-1;n.disabled=c,s.disabled=i,n.setAttribute("aria-disabled",String(c)),s.setAttribute("aria-disabled",String(i)),n.style.opacity=c?"0.3":"1",s.style.opacity=i?"0.3":"1"}if(y=te(a),s.addEventListener("click",()=>{const o=r();o&&e.scrollBy({left:o,behavior:"smooth"})}),n.addEventListener("click",()=>{const o=r();o&&e.scrollBy({left:-o,behavior:"smooth"})}),e.addEventListener("scroll",y,{passive:!0}),typeof ResizeObserver<"u"){const o=new ResizeObserver(y);o.observe(e),o.observe(t)}else window.addEventListener("resize",y);e.scrollLeft=0,y()}function ne(){const e=document.querySelector(".forecast-hours-wrapper"),t=document.querySelector(".forecast-hours"),n=document.querySelector(".scroll-bar"),s=document.querySelector(".scroll-thumb");if(!e||!t||!n||!s)return;if(j){m==null||m();return}j=!0;function r(){const a=e.scrollWidth,o=e.clientWidth,c=e.scrollLeft;if(!o||a<=o+1){n.style.opacity="0",s.style.width="0px",s.style.left="0px";return}const i=n.clientWidth;if(!i)return;const u=a-o,d=Math.min(i,Math.max(o/a*i,30)),l=Math.min(1,Math.max(0,c/u)),f=i-d,$=l*f;n.style.opacity="1",s.style.width=`${d}px`,s.style.left=`${$}px`}if(m=te(r),e.addEventListener("scroll",m,{passive:!0}),typeof ResizeObserver<"u"){const a=new ResizeObserver(m);a.observe(e),a.observe(t),a.observe(n)}else window.addEventListener("resize",m);m()}function re(){const e=document.querySelector(".forecast-hours-wrapper");e&&(e.scrollLeft=0,m==null||m())}const R=document.querySelector(".weather-card"),W=document.querySelector(".datetime-card"),U={"01d":"icon-sun","01n":"icon-sun","02d":"icon-cloudy_and_sun","02n":"icon-cloudy_and_sun","03d":"icon-cloudy","03n":"icon-cloudy","04d":"icon-cloudy","04n":"icon-cloudy","09d":"icon-weather","09n":"icon-weather","10d":"icon-weather","10n":"icon-weather","11d":"icon-weather","11n":"icon-weather","13d":"icon-snow","13n":"icon-snow","50d":"icon-cloudy","50n":"icon-cloudy"};function p(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function se(e){return new Date(`${e}T12:00:00`)}function Ee(e){if(!R||!W)return;const{city:t,country:n,temp:s,tempMin:r,tempMax:a,icon:o,day:c,weekday:i,month:u,time:d,sunrise:l,sunset:f}=e,$=U[o]||"icon-sun";R.innerHTML=`
    <svg class="weather-icon" aria-hidden="true">
      <use href="${g}#${$}"></use>
    </svg>

    <p class="weather-location">
      ${p(t)}, ${p(n)}
    </p>

    <div class="weather-temp-wrapper">
      <p class="weather-temp">${p(s)}&deg;</p>

      <ul class="temp-box">
        <li class="temp-item">
          <p class="temp-name">min</p>
          <p class="temp-value">${p(r)}&deg;</p>
        </li>

        <li class="temp-item">
          <p class="temp-name">max</p>
          <p class="temp-value">${p(a)}&deg;</p>
        </li>
      </ul>
    </div>
  `;const ue=String(c??"").replace(/^(\d{1,2})<sup>(st|nd|rd|th)<\/sup>$/,(Ue,de,fe)=>`${de}<sup>${fe}</sup>`);W.innerHTML=`
    <ul class="datetime-wrapper">
      <li class="datetime-day">${ue}</li>
      <li class="datetime-weekday">${p(i)}</li>
    </ul>

    <div class="datetime-container">
      <ul class="datetime-wrapper">
        <li class="datetime-month">${p(u)}</li>
        <li class="datetime-time">${p(d)}</li>
      </ul>

      <ul class="datetime-wrapper">
        <li>
          <svg class="datetime-icon" aria-hidden="true">
            <use href="${g}#icon-sunrise"></use>
          </svg>
          <p class="datetime-sunrise">${p(l)}</p>
        </li>

        <li>
          <svg class="datetime-icon" aria-hidden="true">
            <use href="${g}#icon-sunset"></use>
          </svg>
          <p class="datetime-sunset">${p(f)}</p>
        </li>
      </ul>
    </div>
  `,R.classList.add("is-loaded"),W.classList.add("is-loaded")}const x=document.querySelector(".forecast-container"),A=x==null?void 0:x.querySelector(".forecast-city"),T=document.querySelector(".forecast-5days");function Ce(e,t){A&&(A.textContent=`${e}, ${t}`)}function oe(e){const t=new Map;for(const n of(e==null?void 0:e.list)||[]){const s=n.dt_txt.split(" ")[0];t.has(s)||t.set(s,[]),t.get(s).push(n)}return Array.from(t.entries()).slice(0,5)}function xe(e){if(!T||!x)return;const t=oe(e).map(([n,s])=>{const r=s[0],a=se(n),o=a.toLocaleDateString("en-US",{weekday:"long"}),c=a.toLocaleDateString("en-US",{month:"short"}),i=a.getDate(),u=Math.round(Math.min(...s.map(f=>f.main.temp_min))),d=Math.round(Math.max(...s.map(f=>f.main.temp_max))),l=U[r.weather[0].icon]||"icon-sun";return`
      <li class="forecast-item">
        <p class="forecast-weekday">${o}</p>
        <p class="forecast-date">${i} ${c}</p>

        <svg class="forecast-icon" aria-hidden="true">
          <use href="${g}#${l}"></use>
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
          data-date="${n}"
        >
          more info
        </button>
      </li>
    `});T.innerHTML=t.join(""),x.style.display="block"}function Me(){A&&(A.textContent=""),T&&(T.innerHTML="")}const L=document.querySelector(".forecast-hours");function ke(e){if(!L)return;const t=e.map(r=>{const a=r.dt_txt.slice(11,16),o=Math.round(r.main.temp),c=r.main.pressure,i=r.main.humidity,u=r.wind.speed,d=U[r.weather[0].icon]||"icon-sun";return`
      <li class="forecast-hours-item">
        <ul>
          <li class="forecast-hours-time">${a}</li>

          <li>
            <svg class="forecast-hours-icon" aria-hidden="true">
              <use href="${g}#${d}"></use>
            </svg>
          </li>

          <li class="forecast-hours-temp">${o}&deg;</li>

          <li class="forecast-hours-container">
            <ul>
              <li class="forecast-hours-wrap">
                <svg class="forecast-hours-img" aria-hidden="true">
                  <use href="${g}#icon-atmosphere"></use>
                </svg>
                <p class="forecast-hours-value">
                  ${c} hPa
                </p>
              </li>

              <li class="forecast-hours-wrap">
                <svg class="forecast-hours-img" aria-hidden="true">
                  <use href="${g}#icon-humidity"></use>
                </svg>
                <p class="forecast-hours-value">
                  ${i}%
                </p>
              </li>

              <li class="forecast-hours-wrap">
                <svg class="forecast-hours-img" aria-hidden="true">
                  <use href="${g}#icon-wind"></use>
                </svg>
                <p class="forecast-hours-value">
                  ${u} m/s
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    `});L.innerHTML=t.join(""),L.style.display="flex";const n=document.querySelector(".forecast-container-inner"),s=document.querySelector(".scroll-bar-wrapper");n&&(n.style.display="block"),s&&(s.style.display="block"),ne()}function ae(){if(!L)return;L.innerHTML="",L.style.display="none";const e=document.querySelector(".scroll-bar");e&&(e.style.opacity="0"),ne()}let M=null,G=0;const K=new Map;async function De(){return M||(M=qe(()=>import("./vendor-1EtPX3YI.js").then(e=>e.b),__vite__mapDeps([0,1])).then(e=>e.default).catch(e=>{throw M=null,e})),M}function Ae(e){const t=oe(e);function n(s,r){return s.reduce((a,o)=>a+r(o),0)/s.length}return{labels:t.map(([s])=>se(s).toLocaleDateString("en-US",{weekday:"short"})),temperature:t.map(([,s])=>Number(n(s,r=>r.main.temp).toFixed(1))),humidity:t.map(([,s])=>Math.round(n(s,r=>r.main.humidity))),wind:t.map(([,s])=>Number(n(s,r=>r.wind.speed).toFixed(1))),pressure:t.map(([,s])=>Math.round(n(s,r=>r.main.pressure)))}}const ie=[{id:"chart-temp",label:"Temperature, °C",key:"temperature",color:"#ff6b09"},{id:"chart-humidity",label:"Humidity, %",key:"humidity",color:"#6585ff"},{id:"chart-wind",label:"Wind speed, m/s",key:"wind",color:"#ffbc42"},{id:"chart-pressure",label:"Pressure, hPa",key:"pressure",color:"#42c77a"}];function Te(){return{responsive:!0,maintainAspectRatio:!1,resizeDelay:100,animation:!1,layout:{padding:{top:8,right:8,bottom:8,left:4}},interaction:{intersect:!1,mode:"index"},plugins:{legend:{display:!0,position:"top",align:"start",labels:{color:"#f1f5f9",font:{size:12,weight:"500"},boxWidth:10,boxHeight:10,padding:12}},tooltip:{enabled:!0}},scales:{x:{ticks:{color:"#e2e8f0",font:{size:11},maxRotation:0,minRotation:0,autoSkip:!0},grid:{color:"rgba(255, 255, 255, 0.12)"},border:{display:!1}},y:{ticks:{color:"#e2e8f0",font:{size:11},maxTicksLimit:5,padding:4},grid:{color:"rgba(255, 255, 255, 0.12)"},border:{display:!1}}}}}function Re(){var t;const e=ie.map(({id:n})=>document.getElementById(n));if(e.some(n=>!n))return null;for(const n of e){if((t=n.parentElement)!=null&&t.classList.contains("chart-wrapper"))continue;const s=document.createElement("div");s.className="chart-wrapper",n.parentNode.insertBefore(s,n),s.appendChild(n),n.removeAttribute("width"),n.removeAttribute("height")}return e}async function We(e){if(!Array.isArray(e==null?void 0:e.list)||!e.list.length)return;const t=Re();if(!t)return;const n=++G,s=await De();if(n!==G)return;const r=Ae(e);ie.forEach(({id:a,label:o,key:c,color:i},u)=>{var f;const d=t[u];(f=K.get(a))==null||f.destroy();const l=new s(d,{type:"line",data:{labels:r.labels,datasets:[{label:o,data:r[c],borderColor:i,backgroundColor:i,borderWidth:2.5,pointRadius:3,pointHoverRadius:5,tension:.35,fill:!1}]},options:Te()});K.set(a,l)})}const E=document.querySelector(".header-input"),P=!!document.querySelector(".home"),w=!!document.querySelector(".five-days"),k=document.querySelector(".button-show-chart"),D=document.querySelector(".button-hide-chart"),b=document.querySelector(".chart-button-show-container"),v=document.querySelector(".forecast-chart-container"),ce="Kyiv",z="currentCity";let q=null,h=null,S=null,_=0,F=null,C=null;function O(e){pe.show({message:e,position:"topRight",timeout:5e3})}function _e(e){return(e==null?void 0:e.code)==="ERR_CANCELED"||(e==null?void 0:e.name)==="AbortError"||(e==null?void 0:e.name)==="CanceledError"}function Pe(e){var t;switch((t=e==null?void 0:e.response)==null?void 0:t.status){case 404:return"City not found. Please check the name.";case 401:return"Weather API authorization error.";case 429:return"Too many requests. Please try again later.";default:return"Unable to load weather. Check your connection."}}function Fe(e){if(e>3&&e<21)return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}function Ie(e=0){const t=new Date(Date.now()+e*1e3),n=t.getUTCDate();return{day:`${n}<sup>${Fe(n)}</sup>`,weekday:t.toLocaleDateString("en-US",{weekday:"short",timeZone:"UTC"}),month:t.toLocaleDateString("en-US",{month:"long",timeZone:"UTC"}),time:t.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1,timeZone:"UTC"})}}function Y(e,t){return new Date((e+t)*1e3).toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",hour12:!1,timeZone:"UTC"})}function le(){if(!w)return;h==null||h.classList.remove("active"),h=null,ae(),re();const e=document.querySelector(".forecast-container-inner"),t=document.querySelector(".scroll-bar-wrapper");e&&(e.style.display="none"),t&&(t.style.display="none")}function H(){w&&(v&&(v.style.display="none"),b&&(b.style.display="flex"))}function Z(e){if(!P)return;const t=document.querySelector(".weather-card"),n=document.querySelector(".datetime-card");for(const s of[t,n])s&&s.setAttribute("aria-busy",String(e))}async function B(e,t=!1){if(!P&&!w)return!1;S==null||S.abort();const n=new AbortController;S=n;const s=++_;Z(!0);try{const r=typeof e=="string"?await we(e,n.signal):await be(e.lat,e.lon,n.signal);let a=null;if(w&&(a=await ve(r.name,n.signal)),n.signal.aborted||s!==_)return!1;if(P){const o=Ie(r.timezone);Ee({city:r.name,country:r.sys.country,temp:Math.round(r.main.temp),tempMin:Math.round(r.main.temp_min),tempMax:Math.round(r.main.temp_max),icon:r.weather[0].icon,...o,sunrise:Y(r.sys.sunrise,r.timezone),sunset:Y(r.sys.sunset,r.timezone)})}if(w&&a&&(le(),H(),q=a,F=null,C=null,Me(),Ce(a.city.name,a.city.country),xe(a),$e()),t)try{sessionStorage.setItem(z,r.name)}catch{}return!0}catch(r){return _e(r)||n.signal.aborted||s!==_||(console.error("Weather request failed:",r),O(Pe(r))),!1}finally{S===n&&(S=null,Z(!1))}}function J(){let e=null;try{e=sessionStorage.getItem(z)}catch{}B(e||ce)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",J,{once:!0}):J();E==null||E.addEventListener("keydown",async e=>{if(e.key!=="Enter")return;e.preventDefault();const t=E.value.trim();if(!t){O("Please enter a city name.");return}await B(t,!0)&&(E.value="")});window.addEventListener("storage",e=>{e.key===z&&B(e.newValue||ce)});w&&document.addEventListener("click",e=>{const t=e.target.closest(".forecast-button");if(!t||!q)return;const n=t.dataset.date;if(!n)return;if(h===t){le();return}h==null||h.classList.remove("active");const s=q.list.filter(r=>r.dt_txt.startsWith(n));ae(),ke(s),re(),t.classList.add("active"),h=t});async function Q(){if(!q||!v||!b)return;b.style.display="none",v.style.display="flex",await new Promise(t=>requestAnimationFrame(t));const e=q;if(!(F===e||C===e)){C=e;try{await We(e),q===e&&(F=e)}catch(t){console.error("Chart rendering failed:",t),O("Unable to display weather charts."),H()}finally{C===e&&(C=null)}}}function X(){H()}function ee(e,t,n,s){!e||t!=null&&t.contains(e)||(e.style.cursor="pointer",e.setAttribute("role","button"),e.setAttribute("tabindex","0"),e.setAttribute("aria-label",s),e.addEventListener("click",n),e.addEventListener("keydown",r=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),n())}))}if(w){k==null||k.addEventListener("click",Q),D==null||D.addEventListener("click",X);const e=b==null?void 0:b.querySelector(".icon-container"),t=(v==null?void 0:v.querySelector(".icon-container"))||document.querySelector(".chart-button-hide-container .icon-container");ee(e,k,Q,"Show weather charts"),ee(t,D,X,"Hide weather charts")}
//# sourceMappingURL=main-CdAtsUhl.js.map
