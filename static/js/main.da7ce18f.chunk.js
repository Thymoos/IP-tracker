(this["webpackJsonpip-tracker"]=this["webpackJsonpip-tracker"]||[]).push([[0],{20:function(e,t,c){},22:function(e,t,c){},24:function(e,t,c){},26:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),r=c(9),i=c.n(r),a=(c(20),c(11)),o=c.n(a),j=c(12),l=c(4),d=(c(22),c(28)),b=c(29),p=c(32),u=c(30),O=c(31),h=c(13),x=c(14),f=c(3),m=c.n(f),v=c(1),g=m.a.icon({iconUrl:h.a,shadowUrl:x.a});function y(e){function t(e){var t=e.coords,c=Object(d.a)();return c.setView(t,c.getZoom()),null}return Object(v.jsxs)(b.a,{zoomControl:!1,center:[e.cords.latitude,e.cords.longitude],zoom:13,style:{height:"74vh",zIndex:1},children:[Object(v.jsx)(p.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(v.jsx)(u.a,{position:[e.cords.latitude,e.cords.longitude],children:Object(v.jsx)(O.a,{children:Object(v.jsx)("span",{children:"Placeholder"})})}),Object(v.jsx)(t,{coords:[e.cords.latitude,e.cords.longitude]})]})}m.a.Marker.prototype.options.icon=g;c(24);var k=function(e){var t=e.ip,c=e.location,n=e.timezone,s=e.isp;return Object(v.jsxs)("div",{className:"display-wrapper",children:[Object(v.jsxs)("div",{className:"ip-address",children:["IP ADDRESS",Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)("span",{children:t})]}),Object(v.jsxs)("div",{className:"location",children:["LOCATION",Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)("span",{children:c})]}),Object(v.jsxs)("div",{className:"timezone",children:["TIMEZONE",Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)("span",{children:n})]}),Object(v.jsxs)("div",{className:"isp",children:["ISP",Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)("span",{children:s})]})]})},S={latitude:49.688919,longitude:19.200649},w={ip:"-",location:{city:"-",timezone:"-"},isp:"-"};var z=function(){var e=Object(n.useState)(S),t=Object(l.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(w),i=Object(l.a)(r,2),a=i[0],d=i[1],b=Object(n.useState)(""),p=Object(l.a)(b,2),u=p[0],O=p[1],h=Object(n.useState)(!1),x=Object(l.a)(h,2),f=x[0],m=x[1],g="https://geo.ipify.org/api/v1?apiKey=at_J9T6UXAUk2lTqjQD5LbX2XnlndjHg&ipAddress=".concat(u,"&domain=").concat(u);Object(n.useEffect)((function(){(function(){var e=Object(j.a)(o.a.mark((function e(){var t,c,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(g);case 3:return t=e.sent,e.next=6,t.json();case 6:return c=e.sent,d(c),e.next=10,[c.location.lat,c.location.lng];case 10:n=e.sent,s({latitude:n[0],longitude:n[1]}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log("error",e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}})()()}),[f]);var z="";return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsxs)("header",{children:[Object(v.jsx)("h1",{children:"IP Address Tracker"}),Object(v.jsxs)("form",{action:"",children:[Object(v.jsx)("input",{onChange:function(e){z=e.target.value},type:"text",spellCheck:"false",placeholder:"Search for any IP address or domain"}),Object(v.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),z.includes(".")?O(z):window.alert("This is not ip address or domain"),m(!f)},children:">"})]})]}),Object(v.jsx)(k,{ip:a.ip,location:a.location.city,timezone:a.location.timezone,isp:a.isp}),Object(v.jsx)(y,{cords:c})]})};c(25);i.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(z,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.da7ce18f.chunk.js.map