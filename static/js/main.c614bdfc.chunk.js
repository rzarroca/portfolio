(this.webpackJsonpmy_portfolio=this.webpackJsonpmy_portfolio||[]).push([[0],{28:function(e,t,r){"use strict";function n(e){return["primary","secondary","highlight","dark","clear"].includes(e)?e:"clear"}r.d(t,"a",(function(){return n}))},31:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(22),c=r(27),i=(r(75),r(28)),a=r(1),l=["children","href","small","color","reverse"];function o(e){var t=e.children,r=void 0===t?"New Link":t,o=e.href,s=e.small,u=e.color,f=e.reverse,d=Object(c.a)(e,l),j=s?"link--smallText":"",h="link--".concat(Object(i.a)(u)),b=f?"link--reversed":"";return Object(a.jsx)("a",Object(n.a)(Object(n.a)({href:o||"#",className:"link link-io ".concat(j," ").concat(h," ").concat(b)},d),{},{children:r}))}},35:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));r(78);var n=r(1);function c(e){var t=e.children,r=e.className;return Object(n.jsx)("mark",{className:"highligthText ".concat(r),children:t})}},48:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(22),c=r(27),i=(r(73),r(28)),a=r(1),l=["children","background","extend"];function o(e){var t=e.children,r=e.background,o=e.extend,s=Object(c.a)(e,l),u=r?"fullpage-".concat(Object(i.a)(r)):"fullpage-dark",f=o?"fullpage-extend":"";return Object(a.jsx)("section",Object(n.a)(Object(n.a)({className:"fullpage ".concat(u," ").concat(f)},s),{},{children:t}))}},49:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n,c=r(0),i=["title","titleId"];function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}function o(e,t){var r=e.title,o=e.titleId,s=l(e,i);return c.createElement("svg",a({width:100,height:100,viewBox:"0 0 100 100",fill:"current",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":o},s),r?c.createElement("title",{id:o},r):null,n||(n=c.createElement("path",{d:"M87.0002 12.9125C83.946 9.85833 80.271 8.33333 75.971 8.33333H23.9418C19.6418 8.33333 15.9668 9.85833 12.9127 12.9125C9.8585 15.9667 8.3335 19.6417 8.3335 23.9417V75.9708C8.3335 80.2708 9.8585 83.9458 12.9127 87C15.9668 90.0542 19.6418 91.5792 23.9418 91.5792H36.0835C36.8752 91.5792 37.471 91.55 37.871 91.4958C38.3364 91.4025 38.7564 91.1543 39.0627 90.7917C39.4585 90.375 39.6585 89.7708 39.6585 88.9792L39.6293 85.2917C39.6127 82.9417 39.6043 81.0833 39.6043 79.7083L38.3543 79.925C37.5627 80.0708 36.5627 80.1333 35.3502 80.1167C34.0864 80.0933 32.8266 79.9665 31.5835 79.7375C30.2602 79.4932 29.0144 78.936 27.9502 78.1125C26.8356 77.2693 26.0042 76.1066 25.5668 74.7792L25.0252 73.5292C24.5686 72.5431 23.995 71.6156 23.3168 70.7667C22.5418 69.7542 21.7543 69.0708 20.9585 68.7083L20.5835 68.4375C20.322 68.2502 20.0842 68.032 19.8752 67.7875C19.6755 67.5606 19.5112 67.305 19.3877 67.0292C19.2793 66.775 19.371 66.5667 19.6585 66.4042C19.9502 66.2375 20.471 66.1583 21.2335 66.1583L22.3168 66.325C23.0377 66.4667 23.9335 66.9 24.996 67.6208C26.0712 68.3539 26.9694 69.3176 27.6252 70.4417C28.4585 71.9208 29.4585 73.05 30.6335 73.8292C31.8085 74.6042 32.9918 74.9958 34.1835 74.9958C35.3752 74.9958 36.4043 74.9042 37.2752 74.725C38.1173 74.5509 38.9356 74.2767 39.7127 73.9083C40.0377 71.4917 40.921 69.625 42.3668 68.325C40.4934 68.1413 38.6366 67.8154 36.8127 67.35C35.0326 66.861 33.3207 66.1513 31.7168 65.2375C30.0387 64.3239 28.5564 63.0894 27.3543 61.6042C26.2002 60.1583 25.2502 58.2625 24.5085 55.9167C23.771 53.5667 23.4002 50.8542 23.4002 47.7833C23.4002 43.4125 24.8252 39.6917 27.6793 36.6167C26.346 33.3333 26.471 29.6458 28.0585 25.5667C29.1085 25.2375 30.6627 25.4833 32.721 26.2958C34.7793 27.1083 36.2877 27.8042 37.246 28.3792C38.2043 28.9625 38.971 29.45 39.5502 29.8458C42.9376 28.9031 46.4382 28.4293 49.9543 28.4375C53.5335 28.4375 57.0002 28.9083 60.3627 29.8458L62.421 28.5458C64.0043 27.5952 65.6743 26.7972 67.4085 26.1625C69.3252 25.4375 70.7835 25.2417 71.8002 25.5667C73.4252 29.65 73.5668 33.3333 72.2293 36.6208C75.0835 39.6917 76.5127 43.4125 76.5127 47.7875C76.5127 50.8583 76.1418 53.5792 75.4002 55.9417C74.6627 58.3083 73.7043 60.2042 72.5293 61.6333C71.3061 63.0995 69.8176 64.3222 68.1418 65.2375C66.3918 66.2125 64.6918 66.9167 63.046 67.35C61.2221 67.8169 59.3654 68.1442 57.4918 68.3292C59.3668 69.9542 60.3085 72.5167 60.3085 76.0208V88.9792C60.3085 89.5917 60.396 90.0875 60.5793 90.4667C60.6636 90.6493 60.7837 90.8132 60.9326 90.9485C61.0815 91.0838 61.2561 91.1877 61.446 91.2542C61.846 91.3958 62.196 91.4875 62.5043 91.5208C62.8127 91.5625 63.2543 91.575 63.8293 91.575H75.971C80.271 91.575 83.946 90.05 87.0002 86.9958C90.0502 83.9458 91.5793 80.2667 91.5793 75.9667V23.9417C91.5793 19.6417 90.0502 15.9667 86.996 12.9125H87.0002Z"})))}var s=c.forwardRef(o);r.p},51:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r(77);var n=r(58),c=r(28),i=r(1);function a(e){var t=e.children,r=e.color,a=e.title,l=void 0===a?"":a,o="navList--".concat(Object(c.a)(r));return Object(i.jsxs)("article",{className:"navList ".concat(o),children:[Object(i.jsx)("header",{className:"navList-header",children:Object(i.jsx)("h1",{children:l})}),Object(i.jsx)("nav",{children:Object(i.jsx)("ul",{className:"navList-links",children:t.map((function(e){return Object(i.jsx)("li",{children:e},Object(n.a)())}))})})]})}},52:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r(85);var n=r(58),c=r(31),i=r(1);function a(e){var t=e.list,r=e.className,a=void 0===r?"linkList-flex":r,l=e.color,o=void 0===l?"dark":l,s=e.reverse?"linkList-item--reversed":"";return Object(i.jsx)("ul",{className:a,children:t.map((function(e){return Object(i.jsx)("li",{className:"linkList-item ".concat(s),children:"link"===e.type?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(c.a,{href:e.href,small:!0,color:o,children:e.text}),e.icon]}):Object(i.jsxs)(i.Fragment,{children:[e.text,e.icon]})},Object(n.a)())}))})}},53:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n,c,i=r(0),a=["title","titleId"];function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}function s(e,t){var r=e.title,s=e.titleId,u=o(e,a);return i.createElement("svg",l({width:50,height:50,viewBox:"0 0 50 50",fill:"current",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},u),r?i.createElement("title",{id:s},r):null,n||(n=i.createElement("path",{d:"M44.9027 8.3333C44.7134 8.31379 44.5226 8.31379 44.3332 8.3333H5.44436C5.19512 8.33714 4.94753 8.37451 4.70825 8.44441L24.7777 28.4305L44.9027 8.3333Z",fill:"current"})),c||(c=i.createElement("path",{d:"M46.9582 10.2639L26.736 30.4028C26.2155 30.9202 25.5115 31.2106 24.7776 31.2106C24.0438 31.2106 23.3398 30.9202 22.8193 30.4028L2.77764 10.4167C2.71603 10.6431 2.68336 10.8765 2.68042 11.1111V38.8889C2.68042 39.6256 2.97308 40.3322 3.49401 40.8531C4.01495 41.374 4.72149 41.6667 5.4582 41.6667H44.3471C45.0838 41.6667 45.7903 41.374 46.3113 40.8531C46.8322 40.3322 47.1249 39.6256 47.1249 38.8889V11.1111C47.1138 10.8218 47.0576 10.5359 46.9582 10.2639V10.2639ZM7.36098 38.8889H5.43042V36.9028L15.5276 26.8889L17.486 28.8473L7.36098 38.8889ZM44.3193 38.8889H42.3749L32.2499 28.8473L34.2082 26.8889L44.3054 36.9028L44.3193 38.8889Z",fill:"current"})))}var u=i.forwardRef(s);r.p},54:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n,c=r(0),i=["title","titleId"];function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}function o(e,t){var r=e.title,o=e.titleId,s=l(e,i);return c.createElement("svg",a({width:50,height:50,viewBox:"0 0 50 50",fill:"current",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":o},s),r?c.createElement("title",{id:o},r):null,n||(n=c.createElement("path",{d:"M34.7222 5.55554H15.2778C14.5411 5.55554 13.8345 5.8482 13.3136 6.36913C12.7927 6.89007 12.5 7.59661 12.5 8.33332V41.6667C12.5 42.4034 12.7927 43.1099 13.3136 43.6308C13.8345 44.1518 14.5411 44.4444 15.2778 44.4444H34.7222C35.4589 44.4444 36.1655 44.1518 36.6864 43.6308C37.2073 43.1099 37.5 42.4034 37.5 41.6667V8.33332C37.5 7.59661 37.2073 6.89007 36.6864 6.36913C36.1655 5.8482 35.4589 5.55554 34.7222 5.55554V5.55554ZM26.3889 41.6667H23.6111V38.8889H26.3889V41.6667ZM15.2778 36.1111V8.33332H34.7222V36.1111H15.2778Z",fill:"currents"})))}var s=c.forwardRef(o);r.p},55:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n,c,i=r(0),a=["title","titleId"];function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}function s(e,t){var r=e.title,s=e.titleId,u=o(e,a);return i.createElement("svg",l({width:50,height:50,viewBox:"0 0 50 50",fill:"current",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},u),r?i.createElement("title",{id:s},r):null,n||(n=i.createElement("g",{clipPath:"url(#clip0_51_305)"},i.createElement("path",{d:"M11.3502 50V16.265H0.632116V50H11.3502ZM5.99253 11.6563C9.7301 11.6563 12.0566 9.06589 12.0566 5.82869C11.9869 2.51849 9.73025 -6.10352e-05 6.06346 -6.10352e-05C2.39724 -6.10352e-05 -0.000244141 2.51854 -0.000244141 5.82869C-0.000244141 9.06604 2.32564 11.6563 5.92256 11.6563H5.99219H5.99253ZM17.2826 50H28.0006V31.1607C28.0006 30.1525 28.0703 29.1453 28.3533 28.4245C29.1281 26.4101 30.8917 24.3237 33.8525 24.3237C37.7309 24.3237 39.2825 27.4173 39.2825 31.9523V49.9997H49.9998V30.6564C49.9998 20.2944 44.7121 15.473 37.6603 15.473C31.8783 15.473 29.3397 18.8541 27.9293 21.157H28.0009V16.2643H17.2828C17.4235 19.4298 17.2828 49.9993 17.2828 49.9993L17.2826 50Z",fill:"current"}))),c||(c=i.createElement("defs",null,i.createElement("clipPath",{id:"clip0_51_305"},i.createElement("rect",{width:50,height:50,fill:"current"})))))}var u=i.forwardRef(s);r.p},67:function(e,t,r){},72:function(e,t,r){},73:function(e,t,r){},75:function(e,t,r){},76:function(e,t,r){},77:function(e,t,r){},78:function(e,t,r){},84:function(e,t,r){},85:function(e,t,r){},86:function(e,t,r){},88:function(e,t,r){"use strict";r.r(t);r(67);var n=r(0),c=r(25),i=r.n(c),a=(r(72),r(48)),l=r(31),o=r(22),s=r(27),u=(r(76),r(1)),f=["children"];function d(e){var t=e.children,r=void 0===t?"New Button":t,n=Object(s.a)(e,f);return Object(u.jsx)("button",Object(o.a)(Object(o.a)({className:"button"},n),{},{children:r}))}var j=r(51),h=r(35),b=r(15),O=r(111),v=Object(n.createContext)();function p(e){var t=e.children,r=e.content,c=void 0===r?"empty drawer":r,i=Object(n.useState)(!1),a=Object(b.a)(i,2),l=a[0],o=a[1];function s(){o((function(e){return!e}))}return Object(u.jsxs)(v.Provider,{value:s,children:[t,Object(u.jsx)(O.a,{anchor:"right",open:l,onClose:function(){return s()},children:c})]})}var m=r.p+"static/media/DSC04573.f82afe67.JPG";function C(){var e=function(){var e=Object(n.useContext)(v);if(!e)throw new Error("useDrawer must be inside <DrawerProvider> context");return e}();return Object(u.jsx)(a.a,{background:"primary",children:Object(u.jsxs)("div",{className:"landing",children:[Object(u.jsxs)("article",{className:"summary",children:[Object(u.jsxs)("header",{children:[Object(u.jsx)("h1",{children:"Hello World!"}),Object(u.jsxs)("h2",{children:["I'm Ricardo Zarroca, ",Object(u.jsx)(h.a,{children:"fullstack web developer"})]})]}),Object(u.jsx)("img",{src:m,alt:"avatar image"}),Object(u.jsxs)("p",{className:"p1",children:["Every time the human being has had to solve a need, he has found a ",Object(u.jsx)(h.a,{children:"solution based on technology."})]}),Object(u.jsxs)("p",{className:"p2",children:["This is one of the motivations that have driven me to enter the world of web development and technology, which ",Object(u.jsx)(h.a,{children:"offers endless opportunities"})," to solve our needs and push us to a new level."]})]}),Object(u.jsxs)(j.a,{title:"Please, have a look around!",children:[Object(u.jsx)(l.a,{children:"About me"}),Object(u.jsx)(l.a,{children:"Projects"}),Object(u.jsx)(d,{onClick:function(){return e()},children:"Contact Me"})]})]})})}r(84);var x,g=r(52),y=r(53),w=r(54),k=["title","titleId"];function E(){return E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},E.apply(this,arguments)}function L(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}function N(e,t){var r=e.title,c=e.titleId,i=L(e,k);return n.createElement("svg",E({width:50,height:50,viewBox:"0 0 50 50",fill:"current",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":c},i),r?n.createElement("title",{id:c},r):null,x||(x=n.createElement("path",{d:"M24.9999 4.16663C20.6084 4.16641 16.3942 5.89946 13.2733 8.98911C10.1525 12.0788 8.37717 16.2753 8.33325 20.6666C8.33325 32.0833 23.0208 44.7916 23.6458 45.3333C24.0231 45.6561 24.5033 45.8334 24.9999 45.8334C25.4965 45.8334 25.9767 45.6561 26.3541 45.3333C27.0832 44.7916 41.6666 32.0833 41.6666 20.6666C41.6227 16.2753 39.8474 12.0788 36.7265 8.98911C33.6056 5.89946 29.3915 4.16641 24.9999 4.16663ZM24.9999 27.0833C23.5578 27.0833 22.148 26.6556 20.9489 25.8544C19.7498 25.0532 18.8152 23.9144 18.2633 22.582C17.7114 21.2496 17.567 19.7835 17.8484 18.3691C18.1297 16.9546 18.8242 15.6554 19.8439 14.6356C20.8637 13.6159 22.1629 12.9214 23.5774 12.6401C24.9918 12.3587 26.4579 12.5031 27.7903 13.055C29.1227 13.6069 30.2615 14.5415 31.0627 15.7406C31.8639 16.9397 32.2916 18.3495 32.2916 19.7916C32.2916 21.7255 31.5234 23.5802 30.1559 24.9476C28.7884 26.3151 26.9338 27.0833 24.9999 27.0833V27.0833Z",fill:"current"})))}var P=n.forwardRef(N),H=(r.p,r(55)),I=r(49);function V(){var e=[{type:"link",href:"mailto: ricardozarroca@gmail.com",text:"ricardozarroca@gmail.com",icon:Object(u.jsx)(y.a,{fill:"#E8C084",className:"sideLinks-icon"})},{type:"link",href:"tel:+34633670474",text:"+34-633670474",icon:Object(u.jsx)(w.a,{fill:"#E8C084",className:"sideLinks-icon"})},{type:"text",text:"Las Palmas de Gran Canaria, Spain",icon:Object(u.jsx)(P,{fill:"#E8C084",className:"sideLinks-icon"})},{type:"link",href:"https://linkedin.com/in/rzarroca",text:"https://linkedin.com/in/rzarroca",icon:Object(u.jsx)(H.a,{fill:"#E8C084",className:"sideLinks-icon"})},{type:"link",href:"https://github.com/rzarroca",text:"github.com/rzarroca",icon:Object(u.jsx)(I.a,{fill:"#E8C084",className:"sideLinks-icon"})}];return Object(u.jsxs)("aside",{className:"sideLinks",children:[Object(u.jsx)("h2",{children:"Contact Info"}),Object(u.jsx)(g.a,{list:e})]})}r(86);var S=r(114);function M(e){var t=e.children,c=function(){var e=Object(n.useState)(!1),t=Object(b.a)(e,2),c=t[0],i=t[1],a=Object(n.useRef)();return Object(n.useEffect)((function(){var e;function t(t){t[0].isIntersecting&&(i(!0),e.disconnect())}return console.log(a.current),Promise.resolve("undefined"!==typeof IntersectionObserver?IntersectionObserver:r.e(6).then(r.t.bind(null,122,7))).then((function(){e=new IntersectionObserver(t,{rootMargin:"100px"}),a.current&&e.observe(a.current)})),function(){return e&&e.disconnect}})),{isNear:c,refElement:a}}(),i=c.isNear,a=c.refElement;return Object(u.jsx)(u.Fragment,{children:i?Object(u.jsx)(n.Suspense,{fallback:Object(u.jsx)("div",{className:"lazyPage",children:Object(u.jsx)(S.a,{color:"secondary"})}),children:t}):Object(u.jsx)("div",{ref:a,className:"lazyPage"})})}var Z=Object(n.lazy)((function(){return r.e(4).then(r.bind(null,123))})),z=Object(n.lazy)((function(){return r.e(3).then(r.bind(null,124))})),B=Object(n.lazy)((function(){return r.e(5).then(r.bind(null,121))}));function R(){return Object(u.jsx)("main",{children:Object(u.jsxs)(p,{content:Object(u.jsx)(V,{}),children:[Object(u.jsx)(C,{}),Object(u.jsx)(M,{children:Object(u.jsx)(Z,{})}),Object(u.jsx)(M,{children:Object(u.jsx)(z,{})}),Object(u.jsx)(M,{children:Object(u.jsx)(B,{})})]})})}var _=r(113),F=r(56);var T=Object(F.a)({palette:{primary:{main:"#30475E"},secondary:{main:"#E8C084"}},typography:{button:{textTransform:"none",fontSize:function(){var e=document.querySelector(":root");return getComputedStyle(e)}().getPropertyValue("--typography-large"),fontWeight:"normal",fontFamily:"inherit"}}});i.a.render(Object(u.jsx)(n.StrictMode,{children:Object(u.jsx)(_.a,{theme:T,children:Object(u.jsx)(R,{})})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.c614bdfc.chunk.js.map