function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i);var r=i("7Y9D8");const s=document.querySelector(".form");function l(e,t){return new Promise(((n,o)=>{Math.random()>.3?setTimeout((()=>{n({position:e,delay:t})}),t):setTimeout((()=>{o({position:e,delay:t})}),t)}))}document.addEventListener("DOMContentLoaded",(()=>{s.addEventListener("submit",(async function(t){t.preventDefault();const n=parseInt(this.elements.delay.value),o=parseInt(this.elements.step.value),i=parseInt(this.elements.amount.value);for(let t=0;t<i;t++){const i=n+t*o;try{const n=await l(t,i);e(r).Notify.success(`✅ Fulfilled promise ${n.position} in ${n.delay}ms`)}catch(t){e(r).Notify.failure(`❌ Rejected promise ${t.position} in ${t.delay}ms`)}}}))}));
//# sourceMappingURL=03-promises.4c459e03.js.map