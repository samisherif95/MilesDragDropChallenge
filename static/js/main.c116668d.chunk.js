(this.webpackJsonpdragdroprewards=this.webpackJsonpdragdroprewards||[]).push([[0],{20:function(e,a,t){e.exports=t(29)},25:function(e,a,t){},26:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},27:function(e,a,t){},29:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(16),o=t.n(c),i=t(31),s=t(18),l=(t(25),t(4)),d=(t(26),t(27),t(33)),m=t(32),u="reward";var g=function(e){var a=e.name,t=e.idx,n=e.changeRewardPos,c=e.createID,o=e.catID,i=Object(m.a)({item:{type:u},begin:function(e){return{type:u,idx:t,name:a,catID:o,createID:c}},collect:function(e){return{isDragging:!!e.isDragging()}}}),s=Object(l.a)(i,2),d=s[0].isDragging,g=s[1];return r.a.createElement("div",{className:"reward-item-".concat(a),ref:g,style:{opacity:d?.5:1,fontWeight:"bold",cursor:"move"}},a,n?r.a.createElement("span",{className:"deletebutton",onClick:function(){return n(c)}}," X"):null)};var f=function(e){var a=e.name,t=e.index,n=e.showRewards,c=e.changeRewardPos,o=e.createNewRewardObject;console.log(o);var i=Object(d.a)({accept:u,drop:function(e,a){void 0!==e.catID?c(e.createID,t):o(t,e)}}),s=Object(l.a)(i,2),m=(s[0],s[1]);return r.a.createElement("div",{className:"category-item"},r.a.createElement("div",{className:"category-name"},a),r.a.createElement("div",{className:"category-lane",ref:m},n(t)))};var w=function(){var e=Object(n.useState)((function(){var e=window.localStorage.getItem("savedRewards")||[];return 0!==e.length&&(e=JSON.parse(e)),e})),a=Object(l.a)(e,2),t=a[0],c=a[1],o=Object(n.useState)((function(){var e=window.localStorage.getItem("numberRewards")||0;return 0!==e&&(e=JSON.parse(e)),e})),i=Object(l.a)(o,2),s=i[0],d=i[1];function m(e){return console.log(t),t.map((function(a,t){if(a.catID===e)return r.a.createElement(g,{key:t,name:a.name,createID:a.createID,idx:a.idx,catID:e,changeRewardPos:w})}))}function u(e,a){var n=Object.assign([],t),r=a.idx;if(!n.some((function(a){return a.idx===r&&a.catID===e}))){var o={name:a.name,idx:a.idx,createID:s+1,catID:e};n.push(o),c(n),d(s+1)}}function w(e,a){var n=Object.assign([],t),r=n.findIndex((function(a){return a.createID===e}));if(void 0!==a){var o=n[r];if(n.some((function(e){return e.idx===o.idx&&e.catID===a})))return;console.log(o),o.catID=a}else n.splice(r,1);c(n)}return Object(n.useEffect)((function(){window.localStorage.setItem("savedRewards",JSON.stringify(t)),window.localStorage.setItem("numberReward",JSON.stringify(s))}),[t,s]),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"table"},r.a.createElement("div",{className:"rewards"},r.a.createElement("span",{className:"rewardTitle"},"Rewards"),["R1","R2","R3","R4","R5"].map((function(e,a){return r.a.createElement(g,{key:a,idx:a,name:e})}))),r.a.createElement("div",{className:"categories"},r.a.createElement("span",{className:"categoryTitle"},"Categories"),r.a.createElement("div",{className:"categoryContent"},["C1","C2","C3","C4","C5"].map((function(e,a){return r.a.createElement(f,{key:a,name:e,index:a,showRewards:m,createNewRewardObject:u,changeRewardPos:w})})))),r.a.createElement("button",{onClick:function(){var e=Object.assign([],t);e.pop(),c(e)}},"UNDO")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{backend:s.a},r.a.createElement(w,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.c116668d.chunk.js.map