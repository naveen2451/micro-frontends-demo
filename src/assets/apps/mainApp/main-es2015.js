!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,(function(t){return e[t]}).bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}({0:function(e,t,n){e.exports=n("zUnb")},"g/Wr":function(e,t){e.exports=ng.elements},"vG+p":function(e,t){e.exports=ng.platformBrowser},vOrQ:function(e,t){e.exports=ng.core},zUnb:function(e,t,n){"use strict";n.r(t);var r=n("vOrQ"),o=n("vG+p");let i=(()=>{class e{constructor(e){this.cd=e,this.title="mainApp",this.heading="Another heading"}ngOnChanges(e){console.log(e),e.shellMessage&&(this.shellMessage=e.shellMessage.currentValue,this.cd.detectChanges())}ngOnInit(){window.addEventListener("ce_subApp",this.customEventListenerFunction.bind(this),!0)}customEventListenerFunction(e){this.heading=e.detail.action,this.cd.detectChanges()}ngOnDestroy(){window.removeEventListener("ce_subApp",this.customEventListenerFunction,!0)}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](r.ChangeDetectorRef))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["app-root"]],inputs:{shellMessage:"shellMessage"},features:[r["\u0275\u0275NgOnChangesFeature"]],decls:17,vars:2,consts:[[1,"p-3","main-app-mark"],[1,"my-2"],[1,"text-secondary","font-weight-light","my-2"],[1,"pb-4"],[1,"d-flex","mb-2","align-items-center"],[1,"text-muted"],[1,"mx-3","text-font-bold","pb-2",2,"color","rgb(197, 27, 191)","font-size","20px"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"div",0),r["\u0275\u0275elementStart"](1,"div",1),r["\u0275\u0275elementStart"](2,"h1"),r["\u0275\u0275text"](3,"Welcome to the Micro Frontend demo"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](4,"p",2),r["\u0275\u0275text"](5,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae sit exercitationem suscipit eum quibusdam temporibus qui fugiat, aliquam et nisi? Accusantium dignissimos, veritatis molestiae quam tempora voluptatum maxime qui sint labore laborum atque! Quasi tenetur dolore quo eveniet numquam quos modi harum, et dolores ut porro voluptas, nam impedit nihil."),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](6,"div",3),r["\u0275\u0275elementStart"](7,"h3"),r["\u0275\u0275text"](8),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](9,"p",2),r["\u0275\u0275text"](10,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sunt vero illo cumque natus nostrum voluptatem obcaecatcati ad perferendii ad perferendis magnam."),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](11,"div",4),r["\u0275\u0275elementStart"](12,"h5",5),r["\u0275\u0275text"](13," Message from shell"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](14,"span",6),r["\u0275\u0275text"](15),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](16,"hr"),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275advance"](8),r["\u0275\u0275textInterpolate"](t.heading),r["\u0275\u0275advance"](7),r["\u0275\u0275textInterpolate"](t.shellMessage))},styles:[""],changeDetection:0}),e})();var s=n("g/Wr");let a=(()=>{class e{constructor(e){this.injector=e}ngDoBootstrap(){const e=Object(s.createCustomElement)(i,{injector:this.injector});customElements.define("main-app",e)}}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)(r["\u0275\u0275inject"](r.Injector))},providers:[],imports:[[o.BrowserModule]]}),e})();Object(r.enableProdMode)(),o.platformBrowser().bootstrapModule(a,{ngZone:"noop"}).catch(e=>console.error(e))}});