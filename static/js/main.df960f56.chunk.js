(this.webpackJsonptask1=this.webpackJsonptask1||[]).push([[0],{64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(9),c=a.n(r),s=a(11),i=a(12),o=a(30),u=a(31),d="WEATHER_DATA_SUCCESS",j="WEATHER_DATA_FAIL",l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{weatherStatus:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return{weatherStatus:t.payload};case j:return{error:t.payload};default:return e}},p=Object(i.combineReducers)({weatherData:l}),b=[o.a],h=Object(i.createStore)(p,Object(u.composeWithDevTools)(i.applyMiddleware.apply(void 0,b))),O=a(13),m=a(70),x=a(68),y=a(69),f=a(21),v=a.n(f),w=a(32),g=a(33),S=a.n(g),C=a(6),k=function(e){var t=Object(s.b)(),a=Object(n.useState)(""),r=Object(O.a)(a,2),c=r[0],i=r[1];return Object(C.jsx)(x.a,{show:e.show,onHide:e.onHide,dialogClassName:"modal-90w","aria-labelledby":"example-custom-modal-styling-title",centered:!0,children:Object(C.jsx)(x.a.Body,{children:Object(C.jsxs)(y.a,{onSubmit:function(e){e.preventDefault(),t(function(e){return function(){var t=Object(w.a)(v.a.mark((function t(a){var n,r,c;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n={header:{"Content-Type":"application/json"}},t.next=4,S.a.get("http://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=87c948d44a0dd452a319d8043213d2e0&units=metric"),{},n);case 4:r=t.sent,c=r.data,a({type:d,payload:c}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a({type:j,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}(c))},children:[Object(C.jsx)(y.a.Group,{controlId:"cityname",children:Object(C.jsx)(y.a.Control,{required:!0,type:"text",placeholder:"Enter City",value:c,onChange:function(e){return i(e.target.value)}})}),Object(C.jsx)(m.a,{type:"submit",variant:"primary",children:"Submit"})]})})})},A=function(){var e=Object(s.c)((function(e){return e.weatherData})),t=e.weatherStatus,a=e.error,r=Object(n.useState)(!1),c=Object(O.a)(r,2),i=c[0],o=c[1];return Object(C.jsxs)(C.Fragment,{children:[a?Object(C.jsx)("h1",{children:a}):t.weather?Object(C.jsxs)("div",{children:[t.main.temp,"  \xb0C",Object(C.jsx)("br",{}),t.weather.map((function(e){return e.main}))," ",Object(C.jsx)("br",{}),t.name,", India ",Object(C.jsx)("br",{}),Object(C.jsx)("br",{})]}):Object(C.jsx)("h1",{children:"Please Select a City"}),Object(C.jsx)(m.a,{variant:"outline-primary",onClick:function(){return o(!0)},children:"Select City"}),Object(C.jsx)(k,{show:i,onHide:function(){return o(!1)}})]})};a(64),a(65);var E=function(){return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("div",{className:"main",children:Object(C.jsx)(A,{})})})};c.a.render(Object(C.jsx)(s.a,{store:h,children:Object(C.jsx)(E,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.df960f56.chunk.js.map