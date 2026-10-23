const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-1EtPX3YI.js","assets/vendor-DnveWo0P.css"])))=>i.map(i=>d[i]);
import{a as me,i as pe}from"./vendor-1EtPX3YI.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const he="324d82384f0b6b757e9697b6aa6e9ef8",ye="https://api.openweathermap.org/data/2.5",ge=me.create({baseURL:ye,timeout:1e4});async function W(e,t,n){return(await ge.get(e,{params:{...t,appid:he,units:"metric"},signal:n})).data}function we(e,t){return W("/weather",{q:e},t)}function be(e,t,n){return W("/weather",{lat:e,lon:t},n)}function ve(e,t){return W("/forecast",{q:e},t)}function Se(e,t,n){return W("/forecast",{lat:e,lon:t},n)}const Le="modulepreload",qe=function(e){return"/weather-app/"+e},N={},$e=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=Promise.allSettled(n.map(i=>{if(i=qe(i),i in N)return;N[i]=!0;const u=i.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${d}`))return;const l=document.createElement("link");if(l.rel=u?"stylesheet":Le,u||(l.as="script"),l.crossOrigin="",l.href=i,c&&l.setAttribute("nonce",c),document.head.appendChild(l),u)return new Promise((f,$)=>{l.addEventListener("load",f),l.addEventListener("error",()=>$(new Error(`Unable to preload CSS for ${i}`)))})}))}function s(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return o.then(a=>{for(const c of a||[])c.status==="rejected"&&s(c.reason);return t().catch(s)})},g="/weather-app/assets/icons-D0JtYWc4.svg";let V=!1,j=!1,y=null,m=null;function te(e){let t=null;return()=>{t===null&&(t=requestAnimationFrame(()=>{t=null,e()}))}}function Ee(){const e=document.querySelector(".forecast-5days-wrapper"),t=document.querySelector(".forecast-5days"),n=document.querySelector(".forecast-button-left"),r=document.querySelector(".forecast-button-right");if(!e||!t||!n||!r)return;if(V){e.scrollLeft=0,y==null||y();return}V=!0;function o(){const a=t.querySelector(".forecast-item");if(!a)return 0;const c=getComputedStyle(t),i=parseFloat(c.columnGap)||0;return a.getBoundingClientRect().width+i}function s(){const a=Math.max(0,e.scrollWidth-e.clientWidth),c=e.scrollLeft<=1,i=e.scrollLeft>=a-1;n.disabled=c,r.disabled=i,n.setAttribute("aria-disabled",String(c)),r.setAttribute("aria-disabled",String(i)),n.style.opacity=c?"0.3":"1",r.style.opacity=i?"0.3":"1"}if(y=te(s),r.addEventListener("click",()=>{const a=o();a&&e.scrollBy({left:a,behavior:"smooth"})}),n.addEventListener("click",()=>{const a=o();a&&e.scrollBy({left:-a,behavior:"smooth"})}),e.addEventListener("scroll",y,{passive:!0}),typeof ResizeObserver<"u"){const a=new ResizeObserver(y);a.observe(e),a.observe(t)}else window.addEventListener("resize",y);e.scrollLeft=0,y()}function ne(){const e=document.querySelector(".forecast-hours-wrapper"),t=document.querySelector(".forecast-hours"),n=document.querySelector(".scroll-bar"),r=document.querySelector(".scroll-thumb");if(!e||!t||!n||!r)return;if(j){m==null||m();return}j=!0;function o(){const s=e.scrollWidth,a=e.clientWidth,c=e.scrollLeft;if(!a||s<=a+1){n.style.opacity="0",r.style.width="0px",r.style.left="0px";return}const i=n.clientWidth;if(!i)return;const u=s-a,d=Math.min(i,Math.max(a/s*i,30)),l=Math.min(1,Math.max(0,c/u)),f=i-d,$=l*f;n.style.opacity="1",r.style.width=`${d}px`,r.style.left=`${$}px`}if(m=te(o),e.addEventListener("scroll",m,{passive:!0}),typeof ResizeObserver<"u"){const s=new ResizeObserver(m);s.observe(e),s.observe(t),s.observe(n)}else window.addEventListener("resize",m);m()}function re(){const e=document.querySelector(".forecast-hours-wrapper");e&&(e.scrollLeft=0,m==null||m())}const F=document.querySelector(".weather-card"),_=document.querySelector(".datetime-card"),U={"01d":"icon-sun","01n":"icon-sun","02d":"icon-cloudy_and_sun","02n":"icon-cloudy_and_sun","03d":"icon-cloudy","03n":"icon-cloudy","04d":"icon-cloudy","04n":"icon-cloudy","09d":"icon-weather","09n":"icon-weather","10d":"icon-weather","10n":"icon-weather","11d":"icon-weather","11n":"icon-weather","13d":"icon-snow","13n":"icon-snow","50d":"icon-cloudy","50n":"icon-cloudy"};function p(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function se(e){return new Date(`${e}T12:00:00`)}function xe(e){if(!F||!_)return;const{city:t,country:n,temp:r,tempMin:o,tempMax:s,icon:a,day:c,weekday:i,month:u,time:d,sunrise:l,sunset:f}=e,$=U[a]||"icon-sun";F.innerHTML=`
    <svg class="weather-icon" aria-hidden="true">
      <use href="${g}#${$}"></use>
    </svg>

    <p class="weather-location">
      ${p(t)}, ${p(n)}
    </p>

    <div class="weather-temp-wrapper">
      <p class="weather-temp">${p(r)}&deg;</p>

      <ul class="temp-box">
        <li class="temp-item">
          <p class="temp-name">min</p>
          <p class="temp-value">${p(o)}&deg;</p>
        </li>

        <li class="temp-item">
          <p class="temp-name">max</p>
          <p class="temp-value">${p(s)}&deg;</p>
        </li>
      </ul>
    </div>
  `;const ue=String(c??"").replace(/^(\d{1,2})<sup>(st|nd|rd|th)<\/sup>$/,(ze,de,fe)=>`${de}<sup>${fe}</sup>`);_.innerHTML=`
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
  `,F.classList.add("is-loaded"),_.classList.add("is-loaded")}const C=document.querySelector(".forecast-container"),T=C==null?void 0:C.querySelector(".forecast-city"),R=document.querySelector(".forecast-5days");function Ce(e,t){T&&(T.textContent=`${e}, ${t}`)}function oe(e){const t=new Map;for(const n of(e==null?void 0:e.list)||[]){const r=n.dt_txt.split(" ")[0];t.has(r)||t.set(r,[]),t.get(r).push(n)}return Array.from(t.entries()).slice(0,5)}function Me(e){if(!R||!C)return;const t=oe(e).map(([n,r])=>{const o=r[0],s=se(n),a=s.toLocaleDateString("en-US",{weekday:"long"}),c=s.toLocaleDateString("en-US",{month:"short"}),i=s.getDate(),u=Math.round(Math.min(...r.map(f=>f.main.temp_min))),d=Math.round(Math.max(...r.map(f=>f.main.temp_max))),l=U[o.weather[0].icon]||"icon-sun";return`
      <li class="forecast-item">
        <p class="forecast-weekday">${a}</p>
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
    `});R.innerHTML=t.join(""),C.style.display="block"}function ke(){T&&(T.textContent=""),R&&(R.innerHTML="")}const L=document.querySelector(".forecast-hours");function De(e){if(!L)return;const t=e.map(o=>{const s=o.dt_txt.slice(11,16),a=Math.round(o.main.temp),c=o.main.pressure,i=o.main.humidity,u=o.wind.speed,d=U[o.weather[0].icon]||"icon-sun";return`
      <li class="forecast-hours-item">
        <ul>
          <li class="forecast-hours-time">${s}</li>

          <li>
            <svg class="forecast-hours-icon" aria-hidden="true">
              <use href="${g}#${d}"></use>
            </svg>
          </li>

          <li class="forecast-hours-temp">${a}&deg;</li>

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
    `});L.innerHTML=t.join(""),L.style.display="flex";const n=document.querySelector(".forecast-container-inner"),r=document.querySelector(".scroll-bar-wrapper");n&&(n.style.display="block"),r&&(r.style.display="block"),ne()}function ae(){if(!L)return;L.innerHTML="",L.style.display="none";const e=document.querySelector(".scroll-bar");e&&(e.style.opacity="0"),ne()}let M=null,G=0;const K=new Map;async function Ae(){return M||(M=$e(()=>import("./vendor-1EtPX3YI.js").then(e=>e.b),__vite__mapDeps([0,1])).then(e=>e.default).catch(e=>{throw M=null,e})),M}function Te(e){const t=oe(e);function n(r,o){return r.reduce((s,a)=>s+o(a),0)/r.length}return{labels:t.map(([r])=>se(r).toLocaleDateString("en-US",{weekday:"short"})),temperature:t.map(([,r])=>Number(n(r,o=>o.main.temp).toFixed(1))),humidity:t.map(([,r])=>Math.round(n(r,o=>o.main.humidity))),wind:t.map(([,r])=>Number(n(r,o=>o.wind.speed).toFixed(1))),pressure:t.map(([,r])=>Math.round(n(r,o=>o.main.pressure)))}}const ie=[{id:"chart-temp",label:"Temperature, °C",key:"temperature",color:"#ff6b09"},{id:"chart-humidity",label:"Humidity, %",key:"humidity",color:"#6585ff"},{id:"chart-wind",label:"Wind speed, m/s",key:"wind",color:"#ffbc42"},{id:"chart-pressure",label:"Pressure, hPa",key:"pressure",color:"#42c77a"}];function Re(){return{responsive:!0,maintainAspectRatio:!1,resizeDelay:100,animation:!1,layout:{padding:{top:8,right:8,bottom:8,left:4}},interaction:{intersect:!1,mode:"index"},plugins:{legend:{display:!0,position:"top",align:"start",labels:{color:"#f1f5f9",font:{size:12,weight:"500"},boxWidth:10,boxHeight:10,padding:12}},tooltip:{enabled:!0}},scales:{x:{ticks:{color:"#e2e8f0",font:{size:11},maxRotation:0,minRotation:0,autoSkip:!0},grid:{color:"rgba(255, 255, 255, 0.12)"},border:{display:!1}},y:{ticks:{color:"#e2e8f0",font:{size:11},maxTicksLimit:5,padding:4},grid:{color:"rgba(255, 255, 255, 0.12)"},border:{display:!1}}}}}function We(){var t;const e=ie.map(({id:n})=>document.getElementById(n));if(e.some(n=>!n))return null;for(const n of e){if((t=n.parentElement)!=null&&t.classList.contains("chart-wrapper"))continue;const r=document.createElement("div");r.className="chart-wrapper",n.parentNode.insertBefore(r,n),r.appendChild(n),n.removeAttribute("width"),n.removeAttribute("height")}return e}async function Fe(e){if(!Array.isArray(e==null?void 0:e.list)||!e.list.length)return;const t=We();if(!t)return;const n=++G,r=await Ae();if(n!==G)return;const o=Te(e);ie.forEach(({id:s,label:a,key:c,color:i},u)=>{var f;const d=t[u];(f=K.get(s))==null||f.destroy();const l=new r(d,{type:"line",data:{labels:o.labels,datasets:[{label:a,data:o[c],borderColor:i,backgroundColor:i,borderWidth:2.5,pointRadius:3,pointHoverRadius:5,tension:.35,fill:!1}]},options:Re()});K.set(s,l)})}const E=document.querySelector(".header-input"),A=!!document.querySelector(".home"),w=!!document.querySelector(".five-days"),k=document.querySelector(".button-show-chart"),D=document.querySelector(".button-hide-chart"),b=document.querySelector(".chart-button-show-container"),v=document.querySelector(".forecast-chart-container"),ce="Kyiv",z="currentCity";let q=null,h=null,S=null,P=0,I=null,x=null;function B(e){pe.show({message:e,position:"topRight",timeout:5e3})}function _e(e){return(e==null?void 0:e.code)==="ERR_CANCELED"||(e==null?void 0:e.name)==="AbortError"||(e==null?void 0:e.name)==="CanceledError"}function Pe(e){var t;switch((t=e==null?void 0:e.response)==null?void 0:t.status){case 404:return"City not found. Please check the name.";case 401:return"Weather API authorization error.";case 429:return"Too many requests. Please try again later.";default:return"Unable to load weather. Check your connection."}}function Ie(e){if(e>3&&e<21)return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}function Ue(e=0){const t=new Date(Date.now()+e*1e3),n=t.getUTCDate();return{day:`${n}<sup>${Ie(n)}</sup>`,weekday:t.toLocaleDateString("en-US",{weekday:"short",timeZone:"UTC"}),month:t.toLocaleDateString("en-US",{month:"long",timeZone:"UTC"}),time:t.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1,timeZone:"UTC"})}}function Y(e,t){return new Date((e+t)*1e3).toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",hour12:!1,timeZone:"UTC"})}function le(){if(!w)return;h==null||h.classList.remove("active"),h=null,ae(),re();const e=document.querySelector(".forecast-container-inner"),t=document.querySelector(".scroll-bar-wrapper");e&&(e.style.display="none"),t&&(t.style.display="none")}function H(){w&&(v&&(v.style.display="none"),b&&(b.style.display="flex"))}function Z(e){if(!A)return;const t=document.querySelector(".weather-card"),n=document.querySelector(".datetime-card");for(const r of[t,n])r&&r.setAttribute("aria-busy",String(e))}async function O(e,t=!1){var o;if(!A&&!w)return!1;S==null||S.abort();const n=new AbortController;S=n;const r=++P;Z(!0);try{let s=null,a=null;if(A&&(s=typeof e=="string"?await we(e,n.signal):await be(e.lat,e.lon,n.signal)),w&&(a=typeof e=="string"?await ve(e,n.signal):await Se(e.lat,e.lon,n.signal)),n.signal.aborted||r!==P)return!1;if(A&&s){const i=Ue(s.timezone);xe({city:s.name,country:s.sys.country,temp:Math.round(s.main.temp),tempMin:Math.round(s.main.temp_min),tempMax:Math.round(s.main.temp_max),icon:s.weather[0].icon,...i,sunrise:Y(s.sys.sunrise,s.timezone),sunset:Y(s.sys.sunset,s.timezone)})}w&&a&&(le(),H(),q=a,I=null,x=null,ke(),Ce(a.city.name,a.city.country),Me(a),Ee());const c=(s==null?void 0:s.name)||((o=a==null?void 0:a.city)==null?void 0:o.name);if(t&&c)try{sessionStorage.setItem(z,c)}catch{}return!0}catch(s){return _e(s)||n.signal.aborted||r!==P||(console.error("Weather request failed:",s),B(Pe(s))),!1}finally{S===n&&(S=null,Z(!1))}}function J(){let e=null;try{e=sessionStorage.getItem(z)}catch{}O(e||ce)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",J,{once:!0}):J();E==null||E.addEventListener("keydown",async e=>{if(e.key!=="Enter")return;e.preventDefault();const t=E.value.trim();if(!t){B("Please enter a city name.");return}await O(t,!0)&&(E.value="")});window.addEventListener("storage",e=>{e.key===z&&O(e.newValue||ce)});w&&document.addEventListener("click",e=>{const t=e.target.closest(".forecast-button");if(!t||!q)return;const n=t.dataset.date;if(!n)return;if(h===t){le();return}h==null||h.classList.remove("active");const r=q.list.filter(o=>o.dt_txt.startsWith(n));ae(),De(r),re(),t.classList.add("active"),h=t});async function Q(){if(!q||!v||!b)return;b.style.display="none",v.style.display="flex",await new Promise(t=>requestAnimationFrame(t));const e=q;if(!(I===e||x===e)){x=e;try{await Fe(e),q===e&&(I=e)}catch(t){console.error("Chart rendering failed:",t),B("Unable to display weather charts."),H()}finally{x===e&&(x=null)}}}function X(){H()}function ee(e,t,n,r){!e||t!=null&&t.contains(e)||(e.style.cursor="pointer",e.setAttribute("role","button"),e.setAttribute("tabindex","0"),e.setAttribute("aria-label",r),e.addEventListener("click",n),e.addEventListener("keydown",o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),n())}))}if(w){k==null||k.addEventListener("click",Q),D==null||D.addEventListener("click",X);const e=b==null?void 0:b.querySelector(".icon-container"),t=(v==null?void 0:v.querySelector(".icon-container"))||document.querySelector(".chart-button-hide-container .icon-container");ee(e,k,Q,"Show weather charts"),ee(t,D,X,"Hide weather charts")}
//# sourceMappingURL=main-Bcp9G1I6.js.map
