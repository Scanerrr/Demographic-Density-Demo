(this["webpackJsonpuser-density-yalantis"]=this["webpackJsonpuser-density-yalantis"]||[]).push([[0],{13:function(e,n,t){e.exports=t(24)},18:function(e,n,t){},24:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),u=t(8),o=t.n(u),c=(t(18),t(3)),i=t(1),l=t(2),s=function(e,n,t){return e>=n&&e<=t};function f(){var e=Object(i.a)(["\n  user-select: none;\n  cursor: pointer;\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);\n  border-radius: 50%;\n  margin: 1rem;\n  padding: 1rem;\n  width: 5rem;\n  height: 5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: color 0.2s;\n  color: #fff;\n  border: 1px solid transparent;\n  &.active {\n    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.8);\n    border-color: rgba(0, 0, 0, 0.7);\n  }\n"]);return f=function(){return e},e}var m=l.a.div(f()),v=function(e){var n=e.usersLength,t=e.month,r=e.isActive,u=e.onHover,o=function(e){var n="white";return s(e,0,2)?n="#9e9e9e":s(e,3,6)?n="#039be5":s(e,7,10)?n="#43a047":e>=11&&(n="#f44336"),n}(n);return a.a.createElement(m,{onMouseOver:u,style:{background:o},className:r?"active":""},t)};function h(e){for(var n=new Intl.DateTimeFormat(e,{month:"long"}),t=[],r=0;r<12;r++){var a=new Date(Date.UTC(2e3,r,1,0,0,0));t.push(n.format(a))}return t}function p(e){return new Date(e).getUTCMonth()}function d(){var e=Object(i.a)(["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n"]);return d=function(){return e},e}var b=h("en"),g=l.a.div(d()),x=function(e){var n=e.users,t=e.activeMonth,r=e.setActiveMonth,u=b.map((function(e,u){return a.a.createElement(v,{key:u,month:e,usersLength:Object.values(n[u]).length,onHover:function(){return r(u)},isActive:t===u})}));return a.a.createElement(g,null,u)};function w(){var e=Object(i.a)(["\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7);\n  margin: 0.5rem;\n  padding: 1rem;\n"]);return w=function(){return e},e}function E(){var e=Object(i.a)(["\n  display: flex;\n  flex-flow: row wrap;\n"]);return E=function(){return e},e}function j(){var e=Object(i.a)(["\n  text-align: center;\n  margin: 2rem 0 0.8rem;\n"]);return j=function(){return e},e}var O=l.a.h2(j()),y=l.a.div(E()),D=l.a.div(w()),M=function(e){var n=e.users;return a.a.createElement(a.a.Fragment,null,a.a.createElement(O,null,"List of users"),a.a.createElement(y,null,n.map((function(e){return a.a.createElement(D,{key:e.id},e.firstName," ",e.lastName)}))),"People was born ",n.length)},A="https://yschool.getsandbox.com/users",k=h();function N(){var e=Object(i.a)(["\n  max-width: 875px;\n  margin: 0 auto;\n"]);return N=function(){return e},e}function L(){var e=Object(i.a)(["\n  margin: 1rem;\n  text-align: center;\n"]);return L=function(){return e},e}var T=l.a.h1(L()),C=l.a.div(N()),F=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=Object(r.useState)(e),t=Object(c.a)(n,2),a=t[0],u=t[1];return Object(r.useEffect)((function(){return fetch(A).then((function(e){return e.json()})).then((function(e){return k.map((function(n,t){return e.filter((function(e){return t===p(e.dob)}))}))})).then((function(e){return u(e)})),function(){u([])}}),[]),[a]}([]),n=Object(c.a)(e,1)[0],t=Object(r.useState)((new Date).getUTCMonth()),u=Object(c.a)(t,2),o=u[0],i=u[1],l=n.length?Object.values(n[o]):[];return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement(C,null,a.a.createElement(T,null,"Demographic Density Demo"))),n.length?a.a.createElement(a.a.Fragment,null,a.a.createElement(C,null,a.a.createElement(x,{users:n,activeMonth:o,setActiveMonth:i})),a.a.createElement(C,null,a.a.createElement(M,{users:l}))):"Loading...")};o.a.render(a.a.createElement(F,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.375ec532.chunk.js.map