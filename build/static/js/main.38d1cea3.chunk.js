(window["webpackJsonpliftbuddy-client"]=window["webpackJsonpliftbuddy-client"]||[]).push([[0],{13:function(o,e,n){o.exports=n(37)},18:function(o,e,n){},19:function(o,e,n){},37:function(o,e,n){"use strict";n.r(e);var t=n(1),c=n.n(t),l=n(11),s=n.n(l),a=(n(18),n(19),n(12)),r=n.n(a);console.log("process.env is: "),console.log(Object({NODE_ENV:"production",PUBLIC_URL:"https://healthy-people-front-end.herokuapp.com",REACT_APP_LOCAL_URL:"http://localhost:3001/",REACT_APP_SERVER_URL:"https://healthy-people-back-end.herokuapp.com/"})),console.log("process.env.NODE_ENV is: "),console.log("production"),console.log("process.env.REACT_APP_LOCAL_URL is: "),console.log("http://localhost:3001/"),console.log("process.env.REACT_APP_SERVER_URL is: "),console.log("https://healthy-people-back-end.herokuapp.com/");var i="http://localhost:3001/";i="https://healthy-people-back-end.herokuapp.com/",console.log("production"),console.log(i),console.log("baseURL is: "),console.log("production");var p=function(){r.a.post(i+"api/user",{email_address:"Prod@gmail.com"}).then((function(o){console.log("response is: "),console.log(o)})).catch((function(o){console.log(o)}))};var h=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("button",{onClick:function(o){o.preventDefault(),p()}},"Submit")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(o){o.unregister()}))}},[[13,1,2]]]);
//# sourceMappingURL=main.38d1cea3.chunk.js.map