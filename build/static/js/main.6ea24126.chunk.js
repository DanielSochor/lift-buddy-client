(window["webpackJsonpliftbuddy-client"]=window["webpackJsonpliftbuddy-client"]||[]).push([[0],{14:function(o,e,n){o.exports=n(38)},19:function(o,e,n){},20:function(o,e,n){},38:function(o,e,n){"use strict";n.r(e);var t=n(1),c=n.n(t),l=n(11),a=n.n(l),s=(n(19),n(20),n(12)),r=n(13),i=n.n(r);console.log("process.env.NODE_ENV is: "),console.log("production"),console.log("process.env.REACT_APP_LOCAL_URL is: "),console.log("http://localhost:3001/"),console.log("process.env.REACT_APP_SERVER_URL is: "),console.log("https://healthy-people-back-end.herokuapp.com/");var p="https://healthy-people-back-end.herokuapp.com/";Object(s.a)("baseUrl"),p="https://healthy-people-back-end.herokuapp.com/",console.log("production"),console.log(p),console.log("production");var u=function(){i.a.post(p+"api/user",{email_address:"prod@gmail.com"}).then((function(o){console.log("response is: "),console.log(o)})).catch((function(o){console.log(o)}))};var d=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("button",{onClick:function(o){o.preventDefault(),u()}},"Submit")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(c.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(o){o.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.6ea24126.chunk.js.map