(window["webpackJsonpliftbuddy-client"]=window["webpackJsonpliftbuddy-client"]||[]).push([[0],{13:function(o,e,n){o.exports=n(37)},18:function(o,e,n){},19:function(o,e,n){},37:function(o,e,n){"use strict";n.r(e);var t=n(1),l=n.n(t),c=n(11),s=n.n(c),a=(n(18),n(19),n(12)),i=n.n(a);console.log("process.env is: "),console.log(Object({NODE_ENV:"production",PUBLIC_URL:"https://healthy-people-front-end.herokuapp.com",REACT_APP_LOCAL_URL:"http://localhost:3001/",REACT_APP_SERVER_URL:"https://healthy-people-back-end.herokuapp.com/"})),console.log("process.env.NODE_ENV is: "),console.log("production"),console.log("process.env.REACT_APP_LOCAL_URL is: "),console.log("http://localhost:3001/"),console.log("process.env.REACT_APP_SERVER_URL is: "),console.log("https://healthy-people-back-end.herokuapp.com/"),console.log("test");var p=function(){console.log("auth"),console.log("env is prod"),i.a.post("https://healthy-people-back-end.herokuapp.com/api/user",{email_address:"Dev@gmail.com"}).then((function(o){console.log("local URL is: "),console.log("http://localhost:3001/"),console.log("response is: "),console.log(o)})).catch((function(o){console.log(o)}))};var r=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("button",{onClick:function(o){o.preventDefault(),p()}},"Submit")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(r,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(o){o.unregister()}))}},[[13,1,2]]]);
//# sourceMappingURL=main.e9ca23c8.chunk.js.map