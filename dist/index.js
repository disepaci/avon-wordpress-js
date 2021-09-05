!function(){"use strict";var e="https://apps.pacificamello.com/avonUtilidades/api/v1/";const t=e=>({target:t})=>{const a=Array.from(t.querySelectorAll("option")).find((e=>e.value===t.value));e(a.getAttribute("data-id")||"",a)},a=e=>{const t=document.createElement("option");return t.value="",t.innerHTML=e,t},n=async(t,a,{fromId:n,country:l,defaultLabel:o}={})=>{try{const c=n?`fromId=${n}&country=${l}`:`country=${l}`,i=await fetch(`${e}geography/${a}?${c}`),s=(await i.json()).payload.map((e=>{const t=document.createElement("option");return t.value=e.name,t.innerHTML=e.name,t.setAttribute("data-id",e.id),t}));r(t,o),s.forEach((e=>t.append(e)))}catch(e){console.warm(e)}},r=(e,t)=>{e.innerHTML="",e.append(a(t))},l=e=>{e.forEach((e=>r(e.element,e.defaultLabel)))};var o=e=>`pacifica__${e}`;const c=async(t,a)=>{try{const n=await fetch(`${e}/representatives/${a}?code=${t}`),{payload:r}=await n.json();return r&&sessionStorage.setItem(o("rep"),JSON.stringify(r)),r}catch(e){console.warn(e)}};var i={getRep:c,getRepOnForm:({loading:e,err:t,country:a,form:n,input:r}={},l)=>{n.addEventListener("submit",(async n=>{n.preventDefault();const o=r.value;if(!o)return;e&&(e.style.display="block"),t&&(t.style.display="none");const i=await c(o,a);e&&(e.style.display="none"),t&&!i&&(t.style.display="block"),l(i)}))},formAutoComplete:(e,t={})=>{const a=JSON.parse(sessionStorage.getItem(o("rep")));if(!a)return null;for(const n in t){const r=e.querySelector(`[name=${n}]`),l=t[n],o=a[l];r&&l&&o&&(r.value=o)}}};window.pacifica_geo=({country:e,levels:r}={})=>{if(0===r.length)throw new Error("pacifica_geo: should specified at leat 1 scale level");if(r.length>3)throw new Error("pacifica_geo: should specified max 3 scale levels");var o;r.forEach=e=>{e.select.append(a(e.defaultLabel))},o=r[0],n(o.element,"departments",{country:e,defaultLabel:o.defaultLabel}),r[1]&&(r[0].element.addEventListener("change",t(((t,a)=>r=>{if(!r)return l(a);n(t.element,"cities",{fromId:r,country:e,defaultLabel:t.defaultLabel})})(r[1],r.slice(1)))),r[1].element.append(a(r[1].defaultLabel))),r[2]&&(r[1].element.addEventListener("change",t(((t,a)=>r=>{if(!r)return l(a);n(t.element,"towns",{fromId:r,country:e,defaultLabel:t.defaultLabel})})(r[2],r.slice(2)))),r[2].element.append(a(r[2].defaultLabel)))},window.pacifica_rep=i}();