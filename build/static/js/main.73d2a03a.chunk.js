(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports={softkey:"Softkey_softkey__1151L",left:"Softkey_left__2rFAu",right:"Softkey_right__WpWo6",center:"Softkey_center__2ZVB4"}},23:function(e,t,n){e.exports={input:"Input_input__3PNbO"}},24:function(e,t,n){},25:function(e,t,n){e.exports={todos:"ToDos_todos__pfuN-",completed:"ToDos_completed__1Rfv4"}},28:function(e,t,n){e.exports=n(36)},33:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(8),r=n.n(a),c=n(22),o=n.n(c),l=(n(33),n(2)),u=n.n(l),s=n(9),i=n(10),f=n(23),d=n.n(f),p=function(e){var t=e.label,n=e.type;return r.a.createElement("div",{className:d.a.input},r.a.createElement("input",{type:n,"nav-selectable":"true"}),r.a.createElement("label",null,t))},m=n(24),v=n.n(m),b=function(e){var t=e.title;return r.a.createElement("header",{className:v.a.header},r.a.createElement("span",null,t))},y=n(25),g=n.n(y),h=function(e){var t=e.toDos;if(void 0===t||!t.length)return null;var n=t.length;return r.a.createElement("div",{className:g.a.todos,tabIndex:""+(n+1),"nav-selectable":"true"},t.map(function(e,t){return r.a.createElement("div",null,r.a.createElement("span",{"nav-selectable":"true",key:t,className:"todo",tabIndex:""+n--},e.name),r.a.createElement("br",null),r.a.createElement("img",{src:e.name}))}))},E=n(18),w=n.n(E),k=function(e){var t=e.left,n=e.onKeyLeft,c=e.center,o=e.onKeyCenter,l=e.right,u=e.onKeyRight;Object(a.useEffect)(function(){return document.addEventListener("keydown",s),function(){return document.removeEventListener("keydown",s)}},[]);var s=function(e){switch(e.key){case"SoftLeft":return n&&n(e);case"Enter":return o&&o(e);case"SoftRight":return u&&u(e);default:return}};return r.a.createElement("div",{className:w.a.softkey},r.a.createElement("label",{className:w.a.left},t),r.a.createElement("label",{className:w.a.center},c),r.a.createElement("label",{className:w.a.right},l))},_=function(){Object(a.useEffect)(function(){return document.addEventListener("keydown",l),o(0),function(){return document.removeEventListener("keydown",l)}},[]);var e=Object(a.useState)({type:null,index:null}),t=Object(i.a)(e,2),n=t[0],r=t[1],c=function(){return document.querySelectorAll("[nav-selectable]")},o=function(e){return u(c()[e]||document.body)},l=function(e){if("ArrowDown"===e.key||"ArrowUp"===e.key){var t,n=c(),a=function(){var e=document.querySelector("[nav-selected=true]");return e?parseInt(e.getAttribute("nav-index")):0}();switch(e.key){case"ArrowDown":var r=a+1>n.length-1;u(n[t=r?0:a+1]||n[0],t);break;case"ArrowUp":t=0===a?n.length-1:a-1,u(n[t]||n[0],t)}var o=document.querySelector("[nav-selected=true]").offsetTop;window.scrollTo({top:o,behavior:"smooth"})}},u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e&&([].forEach.call(c(),function(t,n){var a=t;t.setAttribute("nav-selected",t===e),t.setAttribute("nav-index",n),a&&("INPUT"===t.nodeName?t.focus():t.blur())}),r({type:e.tagName,index:t}))};return[n,o]},O=n(26),j=n(15);o.a.render(r.a.createElement(function(){var e=Object(O.a)({apiKey:"AIzaSyBEvvdbPzE-MHBNXhs64khBUIH2ZFL5iYA",authDomain:"traveller-ad8e4.firebaseapp.com",projectId:"traveller-ad8e4",storageBucket:"traveller-ad8e4.appspot.com",messagingSenderId:"676434108843",appId:"1:676434108843:web:3e04bc87b2d84742e732ee"}),t=Object(j.e)(e),n=Object(a.useState)([]),c=Object(i.a)(n,2),o=c[0],l=c[1];function f(){return(f=Object(s.a)(u.a.mark(function e(){var n,a,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(j.a)(t,"notes"),e.next=3,Object(j.d)(n);case 3:a=e.sent,r=a.docs.map(function(e){return e.data()}),l(r),r.length;case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}function d(){return(d=Object(s.a)(u.a.mark(function e(n){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n),a=n.replace(/\//g,"|"),console.log(a),e.next=5,Object(j.f)(Object(j.c)(t,"notes",a),{name:n});case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}var m=_(),v=Object(i.a)(m,2),y=v[0];return v[1],r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{title:"Traveller"}),r.a.createElement(p,{type:"text",label:"+"}),r.a.createElement(h,{toDos:o}),r.a.createElement(k,{left:"CONNECT",onKeyLeft:function(){!function(){f.apply(this,arguments)}(t)},center:"INPUT"===y.type?"Insert":"Toggle",onKeyCenter:function(){var e=document.querySelector("[nav-selected=true]");parseInt(e.getAttribute("nav-index"),10),e.value.length&&(function(e){d.apply(this,arguments)}(""+e.value),e.value="")},right:"SPAN"===y.type?"Delete":"",onKeyRight:function(){var e=document.querySelector("[nav-selected=true]");parseInt(e.getAttribute("nav-index"),10)>0&&(Object(j.b)(Object(j.c)(t,"notes",""+e.innerHTML.replace(/\//g,"|"))),console.log(e.value))}}))},null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.73d2a03a.chunk.js.map