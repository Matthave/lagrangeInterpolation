(()=>{"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var n={x0:"",x1:"",x2:"",y0:"",y1:"",y2:"",searchValue:""};new function r(){var a=this;e(this,r),t(this,"onChangeHandler",(function(e){var t=e.target.name,r=e.target.value;"x0"===t&&(n.x0=r),"x1"===t&&(n.x1=r),"x2"===t&&(n.x2=r),"y0"===t&&(n.y0=r),"y1"===t&&(n.y1=r),"y2"===t&&(n.y2=r),"searchValue"===t&&(n.searchValue=r)})),document.querySelectorAll("input").forEach((function(e){e.addEventListener("keyup",(function(e){return a.onChangeHandler(e)}))}))},new function r(){var a=this;e(this,r),t(this,"countItFunc",(function(){var e=document.querySelectorAll("input");if(""===n.x0||""===n.x1||""===n.x2||""===n.y0||""===n.y1||""===n.y2||""===n.searchValue)document.querySelector(".result__value").textContent="You have to complete every input",e.forEach((function(e){""===e.value?e.style.border="1px solid #d00":e.style.border="1px solid #aaa"}));else{var t=(n.searchValue-n.x1)/(n.x0-n.x1)*((n.searchValue-n.x2)/(n.x0-n.x2)),r=(n.searchValue-n.x0)/(n.x1-n.x0)*((n.searchValue-n.x2)/(n.x1-n.x2)),a=(n.searchValue-n.x0)/(n.x2-n.x0)*((n.searchValue-n.x1)/(n.x2-n.x1)),u=n.y0*t+n.y1*r+n.y2*a;document.querySelector(".result__value").textContent=u.toFixed(2),e.forEach((function(e){return e.style.border="1px solid #aaa"}))}})),t(this,"clearItFunc",(function(){document.querySelectorAll("input").forEach((function(e){e.value="",e.style.border="1px solid #aaa"})),document.querySelector(".result__value").textContent="- - -",n={x0:"",x1:"",x2:"",y0:"",y1:"",y2:"",searchValue:""}}));var u=document.querySelector(".btnSection__calculate"),c=document.querySelector(".btnSection__clear");u.addEventListener("click",(function(){return a.countItFunc()})),c.addEventListener("click",(function(){return a.clearItFunc()}))}})();