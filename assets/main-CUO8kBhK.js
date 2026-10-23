const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-1EtPX3YI.js","assets/vendor-DnveWo0P.css"])))=>i.map(i=>d[i]);
import{a as ie,i as ae}from"./vendor-1EtPX3YI.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}})();const ce="https://api.openweathermap.org/data/2.5";ie.create({baseURL:ce,timeout:1e4});async function _(e,t,s){throw new Error("OpenWeather API key is missing")}function le(e,t){return _()}function ue(e,t,s){return _()}function de(e,t){return _()}const fe="modulepreload",me=function(e){return"/weather-app/"+e},H={},pe=function(t,s,r){let n=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));n=Promise.allSettled(s.map(a=>{if(a=me(a),a in H)return;H[a]=!0;const u=a.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${d}`))return;const l=document.createElement("link");if(l.rel=u?"stylesheet":fe,u||(l.as="script"),l.crossOrigin="",l.href=a,c&&l.setAttribute("nonce",c),document.head.appendChild(l),u)return new Promise((f,L)=>{l.addEventListener("load",f),l.addEventListener("error",()=>L(new Error(`Unable to preload CSS for ${a}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return n.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return t().catch(i)})},g="/weather-app/assets/icons-D0JtYWc4.svg";let N=!1,V=!1,h=null,p=null;function J(e){let t=null;return()=>{t===null&&(t=requestAnimationFrame(()=>{t=null,e()}))}}function he(){const e=document.querySelector(".forecast-5days-wrapper"),t=document.querySelector(".forecast-5days"),s=document.querySelector(".forecast-button-left"),r=document.querySelector(".forecast-button-right");if(!e||!t||!s||!r)return;if(N){e.scrollLeft=0,h==null||h();return}N=!0;function n(){const o=t.querySelector(".forecast-item");if(!o)return 0;const c=getComputedStyle(t),a=parseFloat(c.columnGap)||0;return o.getBoundingClientRect().width+a}function i(){const o=Math.max(0,e.scrollWidth-e.clientWidth),c=e.scrollLeft<=1,a=e.scrollLeft>=o-1;s.disabled=c,r.disabled=a,s.setAttribute("aria-disabled",String(c)),r.setAttribute("aria-disabled",String(a)),s.style.opacity=c?"0.3":"1",r.style.opacity=a?"0.3":"1"}if(h=J(i),r.addEventListener("click",()=>{const o=n();o&&e.scrollBy({left:o,behavior:"smooth"})}),s.addEventListener("click",()=>{const o=n();o&&e.scrollBy({left:-o,behavior:"smooth"})}),e.addEventListener("scroll",h,{passive:!0}),typeof ResizeObserver<"u"){const o=new ResizeObserver(h);o.observe(e),o.observe(t)}else window.addEventListener("resize",h);e.scrollLeft=0,h()}function Q(){const e=document.querySelector(".forecast-hours-wrapper"),t=document.querySelector(".forecast-hours"),s=document.querySelector(".scroll-bar"),r=document.querySelector(".scroll-thumb");if(!e||!t||!s||!r)return;if(V){p==null||p();return}V=!0;function n(){const i=e.scrollWidth,o=e.clientWidth,c=e.scrollLeft;if(!o||i<=o+1){s.style.opacity="0",r.style.width="0px",r.style.left="0px";return}const a=s.clientWidth;if(!a)return;const u=i-o,d=Math.min(a,Math.max(o/i*a,30)),l=Math.min(1,Math.max(0,c/u)),f=a-d,L=l*f;s.style.opacity="1",r.style.width=`${d}px`,r.style.left=`${L}px`}if(p=J(n),e.addEventListener("scroll",p,{passive:!0}),typeof ResizeObserver<"u"){const i=new ResizeObserver(p);i.observe(e),i.observe(t),i.observe(s)}else window.addEventListener("resize",p);p()}function X(){const e=document.querySelector(".forecast-hours-wrapper");e&&(e.scrollLeft=0,p==null||p())}const $=document.querySelector(".weather-card"),q=document.querySelector(".datetime-card"),U={"01d":"icon-sun","01n":"icon-sun","02d":"icon-cloudy_and_sun","02n":"icon-cloudy_and_sun","03d":"icon-cloudy","03n":"icon-cloudy","04d":"icon-cloudy","04n":"icon-cloudy","09d":"icon-weather","09n":"icon-weather","10d":"icon-weather","10n":"icon-weather","11d":"icon-weather","11n":"icon-weather","13d":"icon-snow","13n":"icon-snow","50d":"icon-cloudy","50n":"icon-cloudy"};function m(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function ee(e){return new Date(`${e}T12:00:00`)}function ye(e){if(!$||!q)return;const{city:t,country:s,temp:r,tempMin:n,tempMax:i,icon:o,day:c,weekday:a,month:u,time:d,sunrise:l,sunset:f}=e,L=U[o]||"icon-sun";$.innerHTML=`
    <svg class="weather-icon" aria-hidden="true">
      <use href="${g}#${L}"></use>
    </svg>

    <p class="weather-location">
      ${m(t)}, ${m(s)}
    </p>

    <div class="weather-temp-wrapper">
      <p class="weather-temp">${m(r)}&deg;</p>

      <ul class="temp-box">
        <li class="temp-item">
          <p class="temp-name">min</p>
          <p class="temp-value">${m(n)}&deg;</p>
        </li>

        <li class="temp-item">
          <p class="temp-name">max</p>
          <p class="temp-value">${m(i)}&deg;</p>
        </li>
      </ul>
    </div>
  `,q.innerHTML=`
    <ul class="datetime-wrapper">
      <li class="datetime-day">${m(c)}</li>
      <li class="datetime-weekday">${m(a)}</li>
    </ul>

    <div class="datetime-container">
      <ul class="datetime-wrapper">
        <li class="datetime-month">${m(u)}</li>
        <li class="datetime-time">${m(d)}</li>
      </ul>

      <ul class="datetime-wrapper">
        <li>
          <svg class="datetime-icon" aria-hidden="true">
            <use href="${g}#icon-sunrise"></use>
          </svg>
          <p class="datetime-sunrise">${m(l)}</p>
        </li>

        <li>
          <svg class="datetime-icon" aria-hidden="true">
            <use href="${g}#icon-sunset"></use>
          </svg>
          <p class="datetime-sunset">${m(f)}</p>
        </li>
      </ul>
    </div>
  `,$.style.display="block",q.style.display="block"}function ge(){$&&($.innerHTML="")}function we(){q&&(q.innerHTML="")}const M=document.querySelector(".forecast-container"),k=M==null?void 0:M.querySelector(".forecast-city"),D=document.querySelector(".forecast-5days");function ve(e,t){k&&(k.textContent=`${e}, ${t}`)}function te(e){const t=new Map;for(const s of(e==null?void 0:e.list)||[]){const r=s.dt_txt.split(" ")[0];t.has(r)||t.set(r,[]),t.get(r).push(s)}return Array.from(t.entries()).slice(0,5)}function be(e){if(!D||!M)return;const t=te(e).map(([s,r])=>{const n=r[0],i=ee(s),o=i.toLocaleDateString("en-US",{weekday:"long"}),c=i.toLocaleDateString("en-US",{month:"short"}),a=i.getDate(),u=Math.round(Math.min(...r.map(f=>f.main.temp_min))),d=Math.round(Math.max(...r.map(f=>f.main.temp_max))),l=U[n.weather[0].icon]||"icon-sun";return`
        <li class="forecast-item">
          <p class="forecast-weekday">${o}</p>
          <p class="forecast-date">${a} ${c}</p>

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
            data-date="${s}"
          >
            more info
          </button>
        </li>
      `});D.innerHTML=t.join(""),M.style.display="block"}function Se(){k&&(k.textContent=""),D&&(D.innerHTML="")}const b=document.querySelector(".forecast-hours");function Le(e){if(!b)return;const t=e.map(n=>{const i=n.dt_txt.slice(11,16),o=Math.round(n.main.temp),c=n.main.pressure,a=n.main.humidity,u=n.wind.speed,d=U[n.weather[0].icon]||"icon-sun";return`
      <li class="forecast-hours-item">
        <ul>
          <li class="forecast-hours-time">${i}</li>

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
                  ${a}%
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
    `});b.innerHTML=t.join(""),b.style.display="flex";const s=document.querySelector(".forecast-container-inner"),r=document.querySelector(".scroll-bar-wrapper");s&&(s.style.display="block"),r&&(r.style.display="block"),Q()}function ne(){if(!b)return;b.innerHTML="",b.style.display="none";const e=document.querySelector(".scroll-bar");e&&(e.style.opacity="0"),Q()}let x=null,j=0;const G=new Map;async function Ce(){return x||(x=pe(()=>import("./vendor-1EtPX3YI.js").then(e=>e.b),__vite__mapDeps([0,1])).then(e=>e.default).catch(e=>{throw x=null,e})),x}function Ee(e){const t=te(e);function s(r,n){return r.reduce((i,o)=>i+n(o),0)/r.length}return{labels:t.map(([r])=>ee(r).toLocaleDateString("en-US",{weekday:"short"})),temperature:t.map(([,r])=>Number(s(r,n=>n.main.temp).toFixed(1))),humidity:t.map(([,r])=>Math.round(s(r,n=>n.main.humidity))),wind:t.map(([,r])=>Number(s(r,n=>n.wind.speed).toFixed(1))),pressure:t.map(([,r])=>Math.round(s(r,n=>n.main.pressure)))}}const se=[{id:"chart-temp",label:"Temperature, °C",key:"temperature",color:"#ff6b09"},{id:"chart-humidity",label:"Humidity, %",key:"humidity",color:"#6585ff"},{id:"chart-wind",label:"Wind speed, m/s",key:"wind",color:"#ffbc42"},{id:"chart-pressure",label:"Pressure, hPa",key:"pressure",color:"#42c77a"}];function $e(){return{responsive:!0,maintainAspectRatio:!1,resizeDelay:100,animation:!1,layout:{padding:{top:8,right:8,bottom:8,left:4}},interaction:{intersect:!1,mode:"index"},plugins:{legend:{display:!0,position:"top",align:"start",labels:{color:"#f1f5f9",font:{size:12,weight:"500"},boxWidth:10,boxHeight:10,padding:12}},tooltip:{enabled:!0}},scales:{x:{ticks:{color:"#e2e8f0",font:{size:11},maxRotation:0,minRotation:0,autoSkip:!0},grid:{color:"rgba(255, 255, 255, 0.12)"},border:{display:!1}},y:{ticks:{color:"#e2e8f0",font:{size:11},maxTicksLimit:5,padding:4},grid:{color:"rgba(255, 255, 255, 0.12)"},border:{display:!1}}}}}function qe(){var t;const e=se.map(({id:s})=>document.getElementById(s));if(e.some(s=>!s))return null;for(const s of e){if((t=s.parentElement)!=null&&t.classList.contains("chart-wrapper"))continue;const r=document.createElement("div");r.className="chart-wrapper",s.parentNode.insertBefore(r,s),r.appendChild(s),s.removeAttribute("width"),s.removeAttribute("height")}return e}async function Me(e){if(!Array.isArray(e==null?void 0:e.list)||!e.list.length)return;const t=qe();if(!t)return;const s=++j,r=await Ce();if(s!==j)return;const n=Ee(e);se.forEach(({id:i,label:o,key:c,color:a},u)=>{var f;const d=t[u];(f=G.get(i))==null||f.destroy();const l=new r(d,{type:"line",data:{labels:n.labels,datasets:[{label:o,data:n[c],borderColor:a,backgroundColor:a,borderWidth:2.5,pointRadius:3,pointHoverRadius:5,tension:.35,fill:!1}]},options:$e()});G.set(i,l)})}const C=document.querySelector(".header-input"),Z=!!document.querySelector(".home"),w=!!document.querySelector(".five-days"),F=document.querySelector(".button-show-chart"),W=document.querySelector(".button-hide-chart"),T=document.querySelector(".chart-button-show-container"),R=document.querySelector(".forecast-chart-container"),re="Kyiv",I="currentCity";let S=null,y=null,v=null,A=0,P=null,E=null;function z(e){ae.show({message:e,position:"topRight",timeout:5e3})}function xe(e){return(e==null?void 0:e.code)==="ERR_CANCELED"||(e==null?void 0:e.name)==="AbortError"||(e==null?void 0:e.name)==="CanceledError"}function ke(e){var t,s,r;return((t=e==null?void 0:e.response)==null?void 0:t.status)===404?"City not found. Please check the name.":((s=e==null?void 0:e.response)==null?void 0:s.status)===401?"Weather API authorization error.":((r=e==null?void 0:e.response)==null?void 0:r.status)===429?"Too many requests. Please try again later.":(e==null?void 0:e.code)==="ECONNABORTED"||(e==null?void 0:e.code)==="ETIMEDOUT"?"Request timed out. Please try again.":"Unable to load weather. Check your connection."}function De(e){if(e>3&&e<21)return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}function Te(e=0){const t=new Date(Date.now()+e*1e3),s=t.getUTCDate(),r=t.toLocaleDateString("en-US",{weekday:"short",timeZone:"UTC"}),n=t.toLocaleDateString("en-US",{month:"long",timeZone:"UTC"}),i=t.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1,timeZone:"UTC"});return{day:`${s}${De(s)}`,weekday:r,month:n,time:i}}function K(e,t){return new Date((e+t)*1e3).toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",hour12:!1,timeZone:"UTC"})}function oe(){if(!w)return;y&&(y.classList.remove("active"),y=null),ne(),X();const e=document.querySelector(".forecast-container-inner"),t=document.querySelector(".scroll-bar-wrapper");e&&(e.style.display="none"),t&&(t.style.display="none")}function O(){w&&(R&&(R.style.display="none"),T&&(T.style.display="flex"))}async function B(e,t=!1){if(!Z&&!w)return!1;v==null||v.abort();const s=new AbortController;v=s;const r=++A;try{let n,i=null;if(typeof e=="string"?n=await le(e,s.signal):n=await ue(e.lat,e.lon,s.signal),w&&(i=await de(n.name,s.signal)),s.signal.aborted||r!==A)return!1;if(Z){ge(),we();const o=Te(n.timezone);ye({city:n.name,country:n.sys.country,temp:Math.round(n.main.temp),tempMin:Math.round(n.main.temp_min),tempMax:Math.round(n.main.temp_max),icon:n.weather[0].icon,day:o.day,weekday:o.weekday,month:o.month,time:o.time,sunrise:K(n.sys.sunrise,n.timezone),sunset:K(n.sys.sunset,n.timezone)})}if(w&&i&&(oe(),O(),S=i,P=null,E=null,Se(),ve(i.city.name,i.city.country),be(i),he()),t)try{sessionStorage.setItem(I,n.name)}catch{}return!0}catch(n){return xe(n)||s.signal.aborted||r!==A||(console.error("Weather request failed:",n),z(ke(n))),!1}finally{v===s&&(v=null)}}function Y(){let e=null;try{e=sessionStorage.getItem(I)}catch{e=null}B(e||re)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Y,{once:!0}):Y();C==null||C.addEventListener("keydown",async e=>{if(e.key!=="Enter")return;e.preventDefault();const t=C.value.trim();if(!t){z("Please enter a city name.");return}await B(t,!0)&&(C.value="")});window.addEventListener("storage",e=>{if(e.key!==I)return;const t=e.newValue||re;B(t)});w&&document.addEventListener("click",e=>{const t=e.target.closest(".forecast-button");if(!t||!S)return;const s=t.dataset.date;if(!s)return;if(y===t){t.classList.remove("active"),y=null,oe();return}y&&y.classList.remove("active");const r=S.list.filter(n=>n.dt_txt.startsWith(s));ne(),Le(r),X(),t.classList.add("active"),y=t});async function Re(){if(!S||!R||!T)return;T.style.display="none",R.style.display="flex",await new Promise(t=>{requestAnimationFrame(t)});const e=S;if(P!==e&&E!==e){E=e;try{await Me(e),S===e&&(P=e)}catch(t){console.error("Chart rendering failed:",t),z("Unable to display weather charts."),O()}finally{E===e&&(E=null)}}}function Fe(){O()}w&&(F==null||F.addEventListener("click",Re),W==null||W.addEventListener("click",Fe));
//# sourceMappingURL=main-CUO8kBhK.js.map
