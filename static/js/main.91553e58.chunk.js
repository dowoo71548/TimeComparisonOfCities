(this.webpackJsonpdowoo=this.webpackJsonpdowoo||[]).push([[0],{42:function(e,c,a){},48:function(e,c,a){},49:function(e,c,a){},50:function(e,c,a){},51:function(e,c,a){},58:function(e,c,a){},59:function(e,c,a){},60:function(e,c,a){},61:function(e,c,a){},64:function(e,c,a){},65:function(e,c,a){"use strict";a.r(c);var n=a(0),t=a.n(n),s=a(16),r=a.n(s),i=a(4),o=a(68),l=a(69),d=(a(41),a(42),a(1)),j=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(o.a,{collapseOnSelect:!0,sticky:"top",expand:"sm",bg:"style",children:[Object(d.jsx)(o.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(d.jsx)(o.a.Collapse,{id:"responsive-navbar-nav",children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(l.a.Link,{href:"/",children:Object(d.jsx)("div",{className:"link-text",children:"Home"})}),Object(d.jsx)(l.a.Link,{href:"/clock",children:Object(d.jsx)("div",{className:"link-text",children:"Clock"})})]})})]})})},b=(a(48),function(){return Object(d.jsx)("div",{className:"head",children:Object(d.jsx)("h2",{children:"Welcome to Dowoo's website"})})}),h=a(36),u=a(10),m=(a(49),function(e){var c=e.searchChange;return Object(d.jsx)("div",{className:"flex-container",children:Object(d.jsx)("input",{className:"searchBox",type:"search",placeholder:"Search a city",onChange:c})})}),p=(a(50),function(e){var c=e.name,a=e.date,n=e.cityNameClick,t={year:"",month:"",day:"",hour:"",minute:"",amOrPm:""},s=function(e,c){var n=a.toLocaleString(e,{year:"numeric",timeZone:c}),s=a.toLocaleString(e,{month:"short",timeZone:c}).toUpperCase(),r=a.toLocaleString(e,{day:"numeric",timeZone:c}),i=a.toLocaleString(e,{hour:"numeric",hour12:!1,timeZone:c}),o=a.toLocaleString(e,{minute:"numeric",timeZone:c});t.year=n,t.month=s,t.day=r,t.hour=parseInt(i,10)>12?"0".concat(i-12):i,t.hour=3===t.hour.length?t.hour.substr(1):t.hour,t.amOrPm=24===parseInt(i,10)||i<12?"AM":"PM",t.minute=o<10?"0".concat(o):o};switch(c){case"Athens":s("en-US","Europe/Athens");break;case"Istanbul":s("en-US","Europe/Istanbul");break;case"London":s("en-US","Europe/London");break;case"Los Angeles":s("en-US","America/Los_Angeles");break;case"Moscow":s("en-US","Europe/Moscow");break;case"New York":s("en-US","America/New_York");break;case"Paris":s("en-US","Europe/Paris");break;case"Seoul":s("en-US","Asia/Seoul");break;case"Shanghai":s("en-US","Asia/Shanghai");break;case"Taipei":s("en-US","Asia/Taipei");break;case"Tokyo":s("en-US","Asia/Tokyo");break;case"Toronto":s("en-US","America/Toronto")}return Object(d.jsxs)("div",{className:"outside-container",children:[Object(d.jsx)("div",{className:"city-name",children:Object(d.jsxs)("div",{className:"inside-container-name",children:[Object(d.jsx)("div",{}),Object(d.jsx)("button",{className:"city-name-button",onMouseOver:function(e){e.target.style.fontWeight=400},onMouseLeave:function(e){e.target.style.fontWeight=300},onClick:n,children:c})]})}),Object(d.jsx)("div",{className:"time",children:Object(d.jsxs)("div",{className:"inside-container-time",children:[Object(d.jsx)("div",{className:"hour",children:"".concat(t.hour,":")}),Object(d.jsx)("div",{className:"minute",children:"".concat(t.minute)}),Object(d.jsx)("div",{className:"ampm",children:"".concat(t.amOrPm)})]})}),Object(d.jsx)("div",{className:"date",children:"".concat(t.month," ").concat(t.day,", ").concat(t.year)})]})}),O=(a(51),function(e){var c,a,n,t=e.name,s=e.date,r=function(e,c){var a=s.toLocaleString(e,{hour:"2-digit",hour12:!1,timeZone:c});return parseInt(a)},i=function(e,c){var a=s.toLocaleString(e,{minute:"2-digit",timeZone:c});return parseInt(a)},o=function(e,c){var a=s.toLocaleString(e,{second:"2-digit",timeZone:c});return parseInt(a)};switch(t){case"Athens":c=r("en-US","Europe/Athens"),a=i("en-US","Europe/Athens"),n=o("en-US","Europe/Athens");break;case"Istanbul":c=r("en-US","Europe/Istanbul"),a=i("en-US","Europe/Istanbul"),n=o("en-US","Europe/Istanbul");break;case"London":c=r("en-US","Europe/London"),a=i("en-US","Europe/London"),n=o("en-US","Europe/London");break;case"Los Angeles":c=r("en-US","America/Los_Angeles"),a=i("en-US","America/Los_Angeles"),n=o("en-US","America/Los_Angeles");break;case"Moscow":c=r("en-US","Europe/Moscow"),a=i("en-US","Europe/Moscow"),n=o("en-US","Europe/Moscow");break;case"New York":c=r("en-US","America/New_York"),a=i("en-US","America/New_York"),n=o("en-US","America/New_York");break;case"Paris":c=r("en-US","Europe/Paris"),a=i("en-US","Europe/Paris"),n=o("en-US","Europe/Paris");break;case"Seoul":c=r("en-US","Asia/Seoul"),a=i("en-US","Asia/Seoul"),n=o("en-US","Asia/Seoul");break;case"Shanghai":c=r("en-US","Asia/Shanghai"),a=i("en-US","Asia/Shanghai"),n=o("en-US","Asia/Shanghai");break;case"Taipei":c=r("en-US","Asia/Taipei"),a=i("en-US","Asia/Taipei"),n=o("en-US","Asia/Taipei");break;case"Tokyo":c=r("en-US","Asia/Tokyo"),a=i("en-US","Asia/Tokyo"),n=o("en-US","Asia/Tokyo");break;case"Toronto":c=r("en-US","America/Toronto"),a=i("en-US","America/Toronto"),n=o("en-US","America/Toronto");break;default:c=0,a=0,n=0}n*=6;var l={transform:"rotateZ(".concat((c*=30)+(a*=6)/12,"deg)")},j={transform:"rotateZ(".concat(a,"deg)")},b={transform:"rotateZ(".concat(n,"deg)")};return Object(d.jsx)("div",{className:"clock__container grid",children:Object(d.jsx)("div",{className:"clock__content grid",children:Object(d.jsxs)("div",{className:"clock__circle",children:[Object(d.jsx)("span",{className:"clock__twelve"}),Object(d.jsx)("span",{className:"clock__three"}),Object(d.jsx)("span",{className:"clock__six"}),Object(d.jsx)("span",{className:"clock__nine"}),Object(d.jsx)("div",{className:"clock__rounder"}),Object(d.jsx)("div",{className:"clock__hour",style:l}),Object(d.jsx)("div",{className:"clock__minutes",style:j}),Object(d.jsx)("div",{className:"clock__seconds",style:b})]})})})}),x=function(e){var c=e.city,a=e.date,n=e.cityNameClick;return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:Object(d.jsx)(O,{name:c[0].name,date:a})}),Object(d.jsx)("div",{children:Object(d.jsx)(p,{name:c[0].name,date:a,cityNameClick:n})})]})},S=a(33),g=a.n(S),k=a.p+"static/media/worldMap.1db5d311.png",v=(a(58),function(e){var c=e.citiesOnMap;return Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"world-map",children:Object(d.jsx)(g.a,{src:k,map:c,width:800})})})}),f=(a(59),function(e){var c=e.twoCities,a=e.date,n=e.resetClick,t=!0,s=function(e){var c={year:0,month:0,day:0,hour:0,minute:0},n=function(e,n){var t=a.toLocaleString(e,{year:"numeric",timeZone:n}),s=a.toLocaleString(e,{month:"numeric",timeZone:n}).toUpperCase(),r=a.toLocaleString(e,{day:"numeric",timeZone:n}),i=a.toLocaleString(e,{hour:"numeric",hour12:!1,timeZone:n});c.year=parseInt(t,10),c.month=parseInt(s,10),c.day=parseInt(r,10),c.hour=parseInt(i,10)};switch(e){case"Athens":n("en-US","Europe/Athens");break;case"Istanbul":n("en-US","Europe/Istanbul");break;case"London":n("en-US","Europe/London");break;case"Los Angeles":n("en-US","America/Los_Angeles");break;case"Moscow":n("en-US","Europe/Moscow");break;case"New York":n("en-US","America/New_York");break;case"Paris":n("en-US","Europe/Paris");break;case"Seoul":n("en-US","Asia/Seoul");break;case"Shanghai":n("en-US","Asia/Shanghai");break;case"Taipei":n("en-US","Asia/Taipei");break;case"Tokyo":n("en-US","Asia/Tokyo");break;case"Toronto":n("en-US","America/Toronto")}return c},r=function(e,c){var a=0;return 24===e.hour&&(e.hour=0),24===c.hour&&(c.hour=0),e.day>c.day?a=e.hour+24-c.hour:e.day<c.day?(t=!1,a=c.hour+24-e.hour):e.hour>c.hour?a=e.hour-c.hour:(t=!1,a=c.hour-e.hour),a}(s(c[0]),s(c[1]));return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"time-difference-box",children:0===r?c[0]===c[1]?Object(d.jsxs)("div",{children:["Please select two ",Object(d.jsx)("i",{children:"different cities"}),Object(d.jsx)("br",{}),"for comparison."]}):Object(d.jsxs)("div",{children:["No time difference ",Object(d.jsx)("br",{}),"between ",Object(d.jsx)("i",{children:c[0]})," and ",Object(d.jsx)("i",{children:c[1]}),"."]}):t?Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{className:"first-city",children:c[0]}),"\xa0is ",r," hours ahead of\xa0",Object(d.jsx)("span",{className:"second-city",children:c[1]}),"."]}):Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{className:"second-city",children:c[1]}),"\xa0is ",r," hours ahead of\xa0",Object(d.jsx)("span",{className:"first-city",children:c[0]}),"."]})}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{className:"reset-button-text",children:Object(d.jsx)("button",{className:"reset-button",onMouseOver:function(e){e.target.style.fontWeight=500},onMouseLeave:function(e){e.target.style.fontWeight=300},onClick:n,children:"Reset"})})]})}),N=(a(60),function(e){var c=e.date,a=e.twoCities,n=e.citiesOnMap,t=e.resetClick;return Object(d.jsxs)("div",{className:"right-display-grid",children:[Object(d.jsx)("div",{className:"world-map",children:Object(d.jsx)(v,{citiesOnMap:n})}),Object(d.jsx)("div",{className:"selected-cities",children:1===a.length?Object(d.jsxs)("div",{children:[Object(d.jsx)("i",{children:a[0]})," is located at a ",Object(d.jsx)("span",{className:"blue-text",children:"blue"})," dot."]}):2===a.length&&a[0]!==a[1]?Object(d.jsxs)("div",{children:[Object(d.jsx)("i",{children:a[0]})," is located at a ",Object(d.jsx)("span",{className:"blue-text",children:"blue"})," dot.",Object(d.jsx)("br",{}),Object(d.jsx)("i",{children:a[1]})," is located at a ",Object(d.jsx)("span",{className:"red-text",children:"red"})," dot."]}):2===a.length&&a[0]===a[1]?Object(d.jsxs)("div",{children:[Object(d.jsx)("i",{children:a[0]})," is located at a ",Object(d.jsx)("span",{className:"blue-text",children:"blue"})," dot."]}):""}),Object(d.jsx)("div",{className:"text-box",children:2===a.length?Object(d.jsx)(f,{twoCities:a,date:c,resetClick:t}):Object(d.jsxs)("div",{className:"notice-text",children:["Search two cities.",Object(d.jsx)("br",{}),"(Click the ",Object(d.jsx)("b",{children:"city name"})," for time comparison)"]})})]})}),U=[{id:"1",name:"Athens"},{id:"2",name:"Istanbul"},{id:"3",name:"London"},{id:"4",name:"Los Angeles"},{id:"5",name:"Moscow"},{id:"6",name:"New York"},{id:"7",name:"Paris"},{id:"8",name:"Seoul"},{id:"9",name:"Shanghai"},{id:"10",name:"Taipei"},{id:"11",name:"Tokyo"},{id:"12",name:"Toronto"}],y=[{id:"Athens",shape:"circle",coords:[433,166,3],preFillColor:"rgba(255, 0, 0, 1)"},{id:"Istanbul",shape:"circle",coords:[441,159,3],preFillColor:"rgba(255, 0, 0, 1)"},{id:"London",shape:"circle",coords:[379,126,3],preFillColor:"rgba(255, 0, 0, 1)"},{id:"Los Angeles",shape:"circle",coords:[117,180,3],preFillColor:"rgba(255, 0, 0, 1)"},{id:"Moscow",shape:"circle",coords:[466,118,3],preFillColor:"rgba(255, 0, 0, 1)"},{id:"New York",shape:"circle",coords:[215,160,3],preFillColor:"rgba(255, 0, 0, 1)"},{id:"Paris",shape:"circle",coords:[385,135,3],preFillColor:"rgba(255, 0, 0, 1)"},{id:"Seoul",shape:"circle",coords:[661,171,3],preFillColor:"rgba(255, 0, 0, 1)"},{id:"Shanghai",shape:"circle",coords:[646,188,3],preFillColor:"rgba(255, 0, 0, 1)"},{id:"Taipei",shape:"circle",coords:[647,207,3],preFillColor:"rgba(255, 0, 0, 1)"},{id:"Tokyo",shape:"circle",coords:[689,175,3],preFillColor:"rgba(255, 0, 0, 1)"},{id:"Toronto",shape:"circle",coords:[182,135,3],preFillColor:"rgba(255, 0, 0, 1)"}],A=(a(61),function(){var e=Object(n.useState)(""),c=Object(u.a)(e,2),a=c[0],t=c[1],s=Object(n.useState)([]),r=Object(u.a)(s,2),i=r[0],o=r[1],l=Object(n.useState)(new Date),j=Object(u.a)(l,2),b=j[0],p=j[1],O=Object(n.useState)([]),S=Object(u.a)(O,2),g=S[0],k=S[1],v=Object(n.useState)({name:"clickedCities",areas:[{id:"",shape:"",coords:[0,0,0]},{id:"",shape:"",coords:[0,0,0]}]}),f=Object(u.a)(v,2),A=f[0],w=f[1];Object(n.useEffect)((function(){o(U);g.length>0&&function(){var e=g[0],c=g[1],a=y.filter((function(c){return c.id===e})),n=y.filter((function(e){return e.id===c})),t=a.concat(n);t[0].preFillColor="rgba(0, 0, 255, 1)",2===t.length&&t[0].id!==t[1].id&&(t[1].preFillColor="rgba(255, 0, 0, 1)"),w({areas:t})}();var e=setInterval((function(){p(new Date)}),1e3);return function(){return clearInterval(e)}}),[g]);var C=i.filter((function(e){return""===a||e.name.toLowerCase().includes(a.toLowerCase())}));return Object(d.jsxs)("div",{className:"outermost-container",children:[Object(d.jsx)("div",{className:"search-box",children:Object(d.jsx)(m,{searchChange:function(e){t(e.target.value)}})}),Object(d.jsx)("div",{className:"city-box",children:1===C.length?Object(d.jsx)(x,{city:C,date:b,cityNameClick:function(){g.length<2&&k((function(e){return[].concat(Object(h.a)(e),[C[0].name])}))}}):Object(d.jsx)("div",{className:"flexbox",children:C.map((function(e){return Object(d.jsx)("div",{children:e.name},e.id)}))})}),Object(d.jsx)("div",{className:"right-display",children:Object(d.jsx)(N,{date:b,twoCities:g,citiesOnMap:A,resetClick:function(){w({areas:[]}),k([])}})})]})});var w=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j,{}),Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{path:"/clock",component:A}),Object(d.jsx)(i.a,{path:"/",component:b})]})]})},C=a(25),L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,70)).then((function(c){var a=c.getCLS,n=c.getFID,t=c.getFCP,s=c.getLCP,r=c.getTTFB;a(e),n(e),t(e),s(e),r(e)}))};a(64);r.a.render(Object(d.jsx)(t.a.StrictMode,{children:Object(d.jsx)(C.a,{basename:"/TimeComparison",children:Object(d.jsx)(w,{})})}),document.getElementById("root")),L()}},[[65,1,2]]]);
//# sourceMappingURL=main.91553e58.chunk.js.map