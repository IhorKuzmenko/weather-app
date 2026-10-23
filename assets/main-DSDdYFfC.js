const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-1EtPX3YI.js","assets/vendor-DnveWo0P.css"])))=>i.map(i=>d[i]);
import{a as le,i as ue}from"./vendor-1EtPX3YI.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}})();const de="324d82384f0b6b757e9697b6aa6e9ef8",fe="https://api.openweathermap.org/data/2.5",me=le.create({baseURL:fe,timeout:1e4});async function _(e,t,s){return(await me.get(e,{params:{...t,appid:de,units:"metric"},signal:s})).data}function pe(e,t){return _("/weather",{q:e},t)}function he(e,t,s){return _("/weather",{lat:e,lon:t},s)}function ye(e,t){return _("/forecast",{q:e},t)}const ge="modulepreload",we=function(e){return"/weather-app/"+e},H={},be=function(t,s,r){let n=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));n=Promise.allSettled(s.map(i=>{if(i=we(i),i in H)return;H[i]=!0;const u=i.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${d}`))return;const l=document.createElement("link");if(l.rel=u?"stylesheet":ge,u||(l.as="script"),l.crossOrigin="",l.href=i,c&&l.setAttribute("nonce",c),document.head.appendChild(l),u)return new Promise((f,q)=>{l.addEventListener("load",f),l.addEventListener("error",()=>q(new Error(`Unable to preload CSS for ${i}`)))})}))}function a(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return n.then(o=>{for(const c of o||[])c.status==="rejected"&&a(c.reason);return t().catch(a)})},y="/weather-app/assets/icons-D0JtYWc4.svg";let N=!1,V=!1,h=null,p=null;function ee(e){let t=null;return()=>{t===null&&(t=requestAnimationFrame(()=>{t=null,e()}))}}function ve(){const e=document.querySelector(".forecast-5days-wrapper"),t=document.querySelector(".forecast-5days"),s=document.querySelector(".forecast-button-left"),r=document.querySelector(".forecast-button-right");if(!e||!t||!s||!r)return;if(N){e.scrollLeft=0,h==null||h();return}N=!0;function n(){const o=t.querySelector(".forecast-item");if(!o)return 0;const c=getComputedStyle(t),i=parseFloat(c.columnGap)||0;return o.getBoundingClientRect().width+i}function a(){const o=Math.max(0,e.scrollWidth-e.clientWidth),c=e.scrollLeft<=1,i=e.scrollLeft>=o-1;s.disabled=c,r.disabled=i,s.setAttribute("aria-disabled",String(c)),r.setAttribute("aria-disabled",String(i)),s.style.opacity=c?"0.3":"1",r.style.opacity=i?"0.3":"1"}if(h=ee(a),r.addEventListener("click",()=>{const o=n();o&&e.scrollBy({left:o,behavior:"smooth"})}),s.addEventListener("click",()=>{const o=n();o&&e.scrollBy({left:-o,behavior:"smooth"})}),e.addEventListener("scroll",h,{passive:!0}),typeof ResizeObserver<"u"){const o=new ResizeObserver(h);o.observe(e),o.observe(t)}else window.addEventListener("resize",h);e.scrollLeft=0,h()}function te(){const e=document.querySelector(".forecast-hours-wrapper"),t=document.querySelector(".forecast-hours"),s=document.querySelector(".scroll-bar"),r=document.querySelector(".scroll-thumb");if(!e||!t||!s||!r)return;if(V){p==null||p();return}V=!0;function n(){const a=e.scrollWidth,o=e.clientWidth,c=e.scrollLeft;if(!o||a<=o+1){s.style.opacity="0",r.style.width="0px",r.style.left="0px";return}const i=s.clientWidth;if(!i)return;const u=a-o,d=Math.min(i,Math.max(o/a*i,30)),l=Math.min(1,Math.max(0,c/u)),f=i-d,q=l*f;s.style.opacity="1",r.style.width=`${d}px`,r.style.left=`${q}px`}if(p=ee(n),e.addEventListener("scroll",p,{passive:!0}),typeof ResizeObserver<"u"){const a=new ResizeObserver(p);a.observe(e),a.observe(t),a.observe(s)}else window.addEventListener("resize",p);p()}function ne(){const e=document.querySelector(".forecast-hours-wrapper");e&&(e.scrollLeft=0,p==null||p())}const M=document.querySelector(".weather-card"),k=document.querySelector(".datetime-card"),I={"01d":"icon-sun","01n":"icon-sun","02d":"icon-cloudy_and_sun","02n":"icon-cloudy_and_sun","03d":"icon-cloudy","03n":"icon-cloudy","04d":"icon-cloudy","04n":"icon-cloudy","09d":"icon-weather","09n":"icon-weather","10d":"icon-weather","10n":"icon-weather","11d":"icon-weather","11n":"icon-weather","13d":"icon-snow","13n":"icon-snow","50d":"icon-cloudy","50n":"icon-cloudy"};function m(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function se(e){return new Date(`${e}T12:00:00`)}function Se(e){if(!M||!k)return;const{city:t,country:s,temp:r,tempMin:n,tempMax:a,icon:o,day:c,weekday:i,month:u,time:d,sunrise:l,sunset:f}=e,q=I[o]||"icon-sun";M.innerHTML=`
    <svg class="weather-icon" aria-hidden="true">
      <use href="${y}#${q}"></use>
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
          <p class="temp-value">${m(a)}&deg;</p>
        </li>
      </ul>
    </div>
  `,k.innerHTML=`
    <ul class="datetime-wrapper">
      <li class="datetime-day">${m(c)}</li>
      <li class="datetime-weekday">${m(i)}</li>
    </ul>

    <div class="datetime-container">
      <ul class="datetime-wrapper">
        <li class="datetime-month">${m(u)}</li>
        <li class="datetime-time">${m(d)}</li>
      </ul>

      <ul class="datetime-wrapper">
        <li>
          <svg class="datetime-icon" aria-hidden="true">
            <use href="${y}#icon-sunrise"></use>
          </svg>
          <p class="datetime-sunrise">${m(l)}</p>
        </li>

        <li>
          <svg class="datetime-icon" aria-hidden="true">
            <use href="${y}#icon-sunset"></use>
          </svg>
          <p class="datetime-sunset">${m(f)}</p>
        </li>
      </ul>
    </div>
  `,M.style.display="block",k.style.display="block"}function Le(){M&&(M.innerHTML="")}function Ee(){k&&(k.innerHTML="")}const x=document.querySelector(".forecast-container"),R=x==null?void 0:x.querySelector(".forecast-city"),F=document.querySelector(".forecast-5days");function qe(e,t){R&&(R.textContent=`${e}, ${t}`)}function re(e){const t=new Map;for(const s of(e==null?void 0:e.list)||[]){const r=s.dt_txt.split(" ")[0];t.has(r)||t.set(r,[]),t.get(r).push(s)}return Array.from(t.entries()).slice(0,5)}function $e(e){if(!F||!x)return;const t=re(e).map(([s,r])=>{const n=r[0],a=se(s),o=a.toLocaleDateString("en-US",{weekday:"long"}),c=a.toLocaleDateString("en-US",{month:"short"}),i=a.getDate(),u=Math.round(Math.min(...r.map(f=>f.main.temp_min))),d=Math.round(Math.max(...r.map(f=>f.main.temp_max))),l=I[n.weather[0].icon]||"icon-sun";return`
        <li class="forecast-item">
          <p class="forecast-weekday">${o}</p>
          <p class="forecast-date">${i} ${c}</p>

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
            data-date="${s}"
          >
            more info
          </button>
        </li>
      `});F.innerHTML=t.join(""),x.style.display="block"}function Ce(){R&&(R.textContent=""),F&&(F.innerHTML="")}const L=document.querySelector(".forecast-hours");function Me(e){if(!L)return;const t=e.map(n=>{const a=n.dt_txt.slice(11,16),o=Math.round(n.main.temp),c=n.main.pressure,i=n.main.humidity,u=n.wind.speed,d=I[n.weather[0].icon]||"icon-sun";return`
      <li class="forecast-hours-item">
        <ul>
          <li class="forecast-hours-time">${a}</li>

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
                  ${i}%
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
    `});L.innerHTML=t.join(""),L.style.display="flex";const s=document.querySelector(".forecast-container-inner"),r=document.querySelector(".scroll-bar-wrapper");s&&(s.style.display="block"),r&&(r.style.display="block"),te()}function oe(){if(!L)return;L.innerHTML="",L.style.display="none";const e=document.querySelector(".scroll-bar");e&&(e.style.opacity="0"),te()}let D=null,j=0;const G=new Map;async function ke(){return D||(D=be(()=>import("./vendor-1EtPX3YI.js").then(e=>e.b),__vite__mapDeps([0,1])).then(e=>e.default).catch(e=>{throw D=null,e})),D}function xe(e){const t=re(e);function s(r,n){return r.reduce((a,o)=>a+n(o),0)/r.length}return{labels:t.map(([r])=>se(r).toLocaleDateString("en-US",{weekday:"short"})),temperature:t.map(([,r])=>Number(s(r,n=>n.main.temp).toFixed(1))),humidity:t.map(([,r])=>Math.round(s(r,n=>n.main.humidity))),wind:t.map(([,r])=>Number(s(r,n=>n.wind.speed).toFixed(1))),pressure:t.map(([,r])=>Math.round(s(r,n=>n.main.pressure)))}}const ae=[{id:"chart-temp",label:"Temperature, °C",key:"temperature",color:"#ff6b09"},{id:"chart-humidity",label:"Humidity, %",key:"humidity",color:"#6585ff"},{id:"chart-wind",label:"Wind speed, m/s",key:"wind",color:"#ffbc42"},{id:"chart-pressure",label:"Pressure, hPa",key:"pressure",color:"#42c77a"}];function De(){return{responsive:!0,maintainAspectRatio:!1,resizeDelay:100,animation:!1,layout:{padding:{top:8,right:8,bottom:8,left:4}},interaction:{intersect:!1,mode:"index"},plugins:{legend:{display:!0,position:"top",align:"start",labels:{color:"#f1f5f9",font:{size:12,weight:"500"},boxWidth:10,boxHeight:10,padding:12}},tooltip:{enabled:!0}},scales:{x:{ticks:{color:"#e2e8f0",font:{size:11},maxRotation:0,minRotation:0,autoSkip:!0},grid:{color:"rgba(255, 255, 255, 0.12)"},border:{display:!1}},y:{ticks:{color:"#e2e8f0",font:{size:11},maxTicksLimit:5,padding:4},grid:{color:"rgba(255, 255, 255, 0.12)"},border:{display:!1}}}}}function Te(){var t;const e=ae.map(({id:s})=>document.getElementById(s));if(e.some(s=>!s))return null;for(const s of e){if((t=s.parentElement)!=null&&t.classList.contains("chart-wrapper"))continue;const r=document.createElement("div");r.className="chart-wrapper",s.parentNode.insertBefore(r,s),r.appendChild(s),s.removeAttribute("width"),s.removeAttribute("height")}return e}async function Ae(e){if(!Array.isArray(e==null?void 0:e.list)||!e.list.length)return;const t=Te();if(!t)return;const s=++j,r=await ke();if(s!==j)return;const n=xe(e);ae.forEach(({id:a,label:o,key:c,color:i},u)=>{var f;const d=t[u];(f=G.get(a))==null||f.destroy();const l=new r(d,{type:"line",data:{labels:n.labels,datasets:[{label:o,data:n[c],borderColor:i,backgroundColor:i,borderWidth:2.5,pointRadius:3,pointHoverRadius:5,tension:.35,fill:!1}]},options:De()});G.set(a,l)})}const $=document.querySelector(".header-input"),K=!!document.querySelector(".home"),w=!!document.querySelector(".five-days"),T=document.querySelector(".button-show-chart"),A=document.querySelector(".button-hide-chart"),b=document.querySelector(".chart-button-show-container"),v=document.querySelector(".forecast-chart-container"),ie="Kyiv",U="currentCity";let E=null,g=null,S=null,W=0,P=null,C=null;function z(e){ue.show({message:e,position:"topRight",timeout:5e3})}function Re(e){return(e==null?void 0:e.code)==="ERR_CANCELED"||(e==null?void 0:e.name)==="AbortError"||(e==null?void 0:e.name)==="CanceledError"}function Fe(e){var t,s,r;return((t=e==null?void 0:e.response)==null?void 0:t.status)===404?"City not found. Please check the name.":((s=e==null?void 0:e.response)==null?void 0:s.status)===401?"Weather API authorization error.":((r=e==null?void 0:e.response)==null?void 0:r.status)===429?"Too many requests. Please try again later.":(e==null?void 0:e.code)==="ECONNABORTED"||(e==null?void 0:e.code)==="ETIMEDOUT"?"Request timed out. Please try again.":"Unable to load weather. Check your connection."}function We(e){if(e>3&&e<21)return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}function Pe(e=0){const t=new Date(Date.now()+e*1e3),s=t.getUTCDate(),r=t.toLocaleDateString("en-US",{weekday:"short",timeZone:"UTC"}),n=t.toLocaleDateString("en-US",{month:"long",timeZone:"UTC"}),a=t.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1,timeZone:"UTC"});return{day:`${s}${We(s)}`,weekday:r,month:n,time:a}}function Y(e,t){return new Date((e+t)*1e3).toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",hour12:!1,timeZone:"UTC"})}function ce(){if(!w)return;g&&(g.classList.remove("active"),g=null),oe(),ne();const e=document.querySelector(".forecast-container-inner"),t=document.querySelector(".scroll-bar-wrapper");e&&(e.style.display="none"),t&&(t.style.display="none")}function O(){w&&(v&&(v.style.display="none"),b&&(b.style.display="flex"))}async function B(e,t=!1){if(!K&&!w)return!1;S==null||S.abort();const s=new AbortController;S=s;const r=++W;try{let n,a=null;if(typeof e=="string"?n=await pe(e,s.signal):n=await he(e.lat,e.lon,s.signal),w&&(a=await ye(n.name,s.signal)),s.signal.aborted||r!==W)return!1;if(K){Le(),Ee();const o=Pe(n.timezone);Se({city:n.name,country:n.sys.country,temp:Math.round(n.main.temp),tempMin:Math.round(n.main.temp_min),tempMax:Math.round(n.main.temp_max),icon:n.weather[0].icon,day:o.day,weekday:o.weekday,month:o.month,time:o.time,sunrise:Y(n.sys.sunrise,n.timezone),sunset:Y(n.sys.sunset,n.timezone)})}if(w&&a&&(ce(),O(),E=a,P=null,C=null,Ce(),qe(a.city.name,a.city.country),$e(a),ve()),t)try{sessionStorage.setItem(U,n.name)}catch{}return!0}catch(n){return Re(n)||s.signal.aborted||r!==W||(console.error("Weather request failed:",n),z(Fe(n))),!1}finally{S===s&&(S=null)}}function Z(){let e=null;try{e=sessionStorage.getItem(U)}catch{e=null}B(e||ie)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Z,{once:!0}):Z();$==null||$.addEventListener("keydown",async e=>{if(e.key!=="Enter")return;e.preventDefault();const t=$.value.trim();if(!t){z("Please enter a city name.");return}await B(t,!0)&&($.value="")});window.addEventListener("storage",e=>{if(e.key!==U)return;const t=e.newValue||ie;B(t)});w&&document.addEventListener("click",e=>{const t=e.target.closest(".forecast-button");if(!t||!E)return;const s=t.dataset.date;if(!s)return;if(g===t){ce();return}g&&g.classList.remove("active");const r=E.list.filter(n=>n.dt_txt.startsWith(s));oe(),Me(r),ne(),t.classList.add("active"),g=t});async function J(){if(!E||!v||!b)return;b.style.display="none",v.style.display="flex",await new Promise(t=>{requestAnimationFrame(t)});const e=E;if(P!==e&&C!==e){C=e;try{await Ae(e),E===e&&(P=e)}catch(t){console.error("Chart rendering failed:",t),z("Unable to display weather charts."),O()}finally{C===e&&(C=null)}}}function Q(){O()}function X(e,t,s,r){!e||t!=null&&t.contains(e)||(e.style.cursor="pointer",e.setAttribute("role","button"),e.setAttribute("tabindex","0"),e.setAttribute("aria-label",r),e.addEventListener("click",s),e.addEventListener("keydown",n=>{(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),s())}))}if(w){T==null||T.addEventListener("click",J),A==null||A.addEventListener("click",Q);const e=b==null?void 0:b.querySelector(".icon-container"),t=(v==null?void 0:v.querySelector(".icon-container"))||document.querySelector(".chart-button-hide-container .icon-container");X(e,T,J,"Show weather charts"),X(t,A,Q,"Hide weather charts")}
//# sourceMappingURL=main-DSDdYFfC.js.map
