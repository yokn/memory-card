(this["webpackJsonpmemory-card"]=this["webpackJsonpmemory-card"]||[]).push([[0],{13:function(c,e,t){},14:function(c,e,t){},18:function(c,e,t){"use strict";t.r(e);var s=t(1),n=t.n(s),r=t(6),a=t.n(r),i=t(8),o=t(3),j=(t(13),t(14),t(0));var u=function(c){return Object(j.jsxs)("div",{className:"ScoreBar",children:[Object(j.jsxs)("div",{className:"score",children:["Score: ",c.score]}),Object(j.jsxs)("div",{className:"highscore",children:[" High Score: ",c.highscore]})]})};var d=function(c){var e=c.id;return Object(j.jsx)("div",{className:"card",id:e,onClick:function(){c.onClick(e)},children:Object(j.jsx)("img",{src:"/assets/images/".concat(e,".svg"),alt:"",className:"cardImage"})})};var l=function(c){return Object(j.jsx)("div",{className:"Deck",children:c.cards.map((function(e){return Object(j.jsx)(d,{id:e+1,onClick:c.onClick})}))})},b=t(7),O=t.n(b);var h=function(){var c=Object(s.useState)(0),e=Object(o.a)(c,2),t=e[0],n=e[1],r=Object(s.useState)(0),a=Object(o.a)(r,2),d=a[0],b=a[1],h=Object(s.useState)([]),m=Object(o.a)(h,2),f=m[0],v=m[1],x=Object(s.useState)(Object(i.a)(Array(12)).map((function(c,e){return e}))),g=Object(o.a)(x,2),p=g[0],k=g[1];function S(){n(0),v([])}return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(u,{score:t,highscore:d}),Object(j.jsx)(l,{cards:p,onClick:function(c){if(k(O.a.shuffle(p)),f.includes(c))S();else{v(f.concat(c));var e=t+1;n(e),e>=d&&b(e),12===e&&(alert("Congratulations, you won!"),S())}}})]})};a.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.56b70af0.chunk.js.map