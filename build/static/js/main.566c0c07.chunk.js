(this["webpackJsonpcarbon-calculator"]=this["webpackJsonpcarbon-calculator"]||[]).push([[0],{20:function(e,t,n){e.exports=n(45)},25:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(12),l=n.n(r),c=(n(25),n(2)),i=n.n(c),u=n(13),s=n(14),h=n(15),m=n(16),p=n(19),d=n(18),b=n(17),g=n.n(b),v=(n(44),{url:{API_URL:"https://carbon-backend2.herokuapp.com/testAPI"}}.url.API_URL),E=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).handleInputChange=function(e){a.setState(Object(s.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n={origin:t.origin,destination:t.destination,mode:t.mode};a.callAPI(n)},a.state={origin:"",destination:"",mode:"",apiResponse:""},a}return Object(m.a)(n,[{key:"callAPI",value:function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("".concat(v),{posted_data:t});case 2:n=e.sent,this.setState({apiResponse:n.data.distance});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"catch",value:function(e){console.log("Axios request failed: ".concat(e))}},{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("h1",null,"Carbon Calculator"),o.a.createElement("br",null),o.a.createElement("input",{type:"text",name:"origin",placeholder:"Choose starting point...",onChange:this.handleInputChange}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("input",{type:"text",name:"destination",placeholder:"Choose destination...",onChange:this.handleInputChange}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("select",{name:"mode",onChange:this.handleInputChange,value:this.state.mode},o.a.createElement("option",{value:"null"}),o.a.createElement("option",{value:"driving"},"Car"),o.a.createElement("option",{value:"bicycling"},"Bike"),o.a.createElement("option",{value:"walking"},"Walk")),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("button",{type:"submit"},"Calculate"),o.a.createElement("h3",null,this.state.apiResponse," "))}}]),n}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.566c0c07.chunk.js.map