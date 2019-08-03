parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"nAQ3":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.monthlyInterest=exports.minInstallmentPercentage=void 0;var e=.05;exports.minInstallmentPercentage=e;var t=2.2/100;exports.monthlyInterest=t;
},{}],"3bBy":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../appConfig");function n(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function t(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}var a=function(){function t(){n(this,t)}return r(t,[{key:"calcMinInstallment",value:function(){return 10*Math.ceil(this.transaction*e.minInstallmentPercentage/10)}}]),t}();exports.default=a;
},{"../appConfig":"nAQ3"}],"6UlO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.DOM=void 0;var e={body:document.querySelector("main"),transactionInput:document.getElementById("transaction-input"),installmentInput:document.getElementById("installment-input"),form:document.getElementById("form"),result:document.querySelector(".result"),resultNumberOfInstallments:document.getElementById("period"),resultInstallment:document.getElementById("installment"),resultIfLast:document.getElementById("if-last"),resultLastInstallment:document.getElementById("last-installment"),resultTotalInterest:document.getElementById("total-interest"),resultOver:document.getElementById("difference"),resultTotalPayment:document.getElementById("total-payment"),modalInput:document.getElementById("modal-toggle-input"),modalBG:document.querySelector(".modal__container")};exports.DOM=e;
},{}],"uhuC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.renderForm=exports.getInstallmentValue=exports.getTransactionValue=void 0;var t=require("./index"),e=function(){return t.DOM.transactionInput.value};exports.getTransactionValue=e;var n=function(){return t.DOM.installmentInput.value};exports.getInstallmentValue=n;var r=function(e,n,r){t.DOM.installmentInput.value=n,t.DOM.installmentInput.setAttribute("min",r),t.DOM.installmentInput.setAttribute("max",e/2)};exports.renderForm=r;
},{"./index":"6UlO"}],"5zz3":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("../appConfig");function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function i(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}var s=function(){function n(t,i){e(this,n),this.transaction=t,this.installment=i,this.debt=t,this.numberOfInstallments=0}return i(n,[{key:"calculate",value:function(){for(;"paid"!==this.debt;)this.debt===this.installment?(this.numberOfInstallments++,this.debt="paid"):this.debt>this.installment?(this.debt-=this.installment,this.numberOfInstallments++,this.numberOfInstallments>1&&(this.debt+=+(this.debt*t.monthlyInterest).toFixed(2))):this.debt<this.installment&&(this.lastInstallment=Math.ceil(this.debt),this.debt="paid")}}]),n}();exports.default=s;
},{"../appConfig":"nAQ3"}],"iSJD":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.renderResult=void 0;var e=require("./index"),t=function(t,s){e.DOM[t].innerHTML=s},s=function(s,r,l,n){e.DOM.body.classList.remove("initial","center"),t("resultNumberOfInstallments",n),t("resultInstallment",r),0===l?e.DOM.resultIfLast.style.display="none":(t("resultLastInstallment",l),e.DOM.resultIfLast.style.display="inline");var o=r*n+l,i=o-s,u=(i/s*100).toFixed(2)+"%";t("resultTotalInterest",u),t("resultOver",i),t("resultTotalPayment",o);var a=e.DOM.result.getBoundingClientRect();window.scrollTo({top:a.y,behavior:"smooth"})};exports.renderResult=s;
},{"./index":"6UlO"}],"QvaY":[function(require,module,exports) {
"use strict";var e=a(require("./models/Form")),t=require("./views/formView"),n=a(require("./models/Result")),r=require("./views/resultView"),l=require("./views");function a(e){return e&&e.__esModule?e:{default:e}}var s={},i=function(){s.form||(s.form=new e.default),s.form.transaction=+(0,t.getTransactionValue)(),s.form.minInstallment=s.form.calcMinInstallment();var n=+(0,t.getInstallmentValue)();s.form.installment=""===n||n<s.form.minInstallment?s.form.minInstallment:n;var r=s.form,l=r.transaction,a=r.installment,i=r.minInstallment;(0,t.renderForm)(l,a,i)},m=function(){s.result=new n.default(s.form.transaction,s.form.installment),s.result.calculate(),(0,r.renderResult)(s.result.transaction,s.result.installment,s.result.lastInstallment,s.result.numberOfInstallments)};l.DOM.transactionInput.addEventListener("change",function(){i()}),l.DOM.form.addEventListener("submit",function(e){e.preventDefault(),i(),m()}),l.DOM.modalBG.addEventListener("click",function(){"modal__container"===event.target.className&&l.DOM.modalInput.click()});
},{"./models/Form":"3bBy","./views/formView":"uhuC","./models/Result":"5zz3","./views/resultView":"iSJD","./views":"6UlO"}]},{},["QvaY"], null)
//# sourceMappingURL=js.cab8c689.js.map