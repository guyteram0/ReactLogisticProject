(this.webpackJsonplog=this.webpackJsonplog||[]).push([[0],{21:function(e,t,n){e.exports=n(33)},26:function(e,t,n){},27:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(18),o=n.n(l),c=(n(26),n(13)),u=n(6),m=n(7),i=n(9),s=n(8),b=(n(27),n(10)),f=n(1),E=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"a3"},r.a.createElement("h3",null,"Home Page:"),r.a.createElement(b.b,{to:"/SignUp"},r.a.createElement("button",{style:{backgroundColor:"red"},className:"btn1"},"SignUp")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(b.b,{to:"/Login"},r.a.createElement("button",{style:{backgroundColor:"yellow"},className:"btn1"},"Login")),r.a.createElement("br",null))}}]),n}(a.Component),p=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).create=function(){a.props.create2(a.state.radio,a.state.name,a.state.number)},a.state={radio:"",name:"",number:""},a}return Object(m.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"a1"},r.a.createElement("h3",null,"Sign Up:"),r.a.createElement("input",{placeholder:"Number",maxLength:"5",onChange:function(t){e.setState({number:t.target.value})}}),r.a.createElement("br",null),r.a.createElement("input",{placeholder:"Name",maxLength:"5",onChange:function(t){e.setState({name:t.target.value})}}),r.a.createElement("br",null),r.a.createElement("p",null,"Forklift truck"),r.a.createElement("input",{type:"radio",id:"Yes",name:"forklift",onChange:function(){e.setState({radio:"Yes"})}}),r.a.createElement("label",{for:"Yes"},"Yes"),r.a.createElement("input",{type:"radio",id:"No",name:"forklift",onChange:function(){e.setState({radio:"No"})}}),r.a.createElement("label",{for:"No"},"No"),r.a.createElement("br",null),r.a.createElement("br",null)," ",r.a.createElement(b.b,{to:"/Login"},r.a.createElement("button",{style:{backgroundColor:"blue"},onClick:this.create},"Sign-In")))}}]),n}(a.Component),h=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={},a}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,this.props.workers.map((function(e,t){return r.a.createElement("div",null,r.a.createElement("h3",null,"No:",e.number),r.a.createElement("h3",null,"Name:",e.name),r.a.createElement("h3",null,"Counter:"),r.a.createElement("h3",null,"products:"))})))}}]),n}(a.Component),d=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).show=function(){return 2==a.state.flag?r.a.createElement("div",null,a.props.workers.map((function(e){return r.a.createElement("div",null,r.a.createElement("h3",null,"Welcome: ",e.name),r.a.createElement("p",null,"Number:",e.number),r.a.createElement("p",null,"Name:",e.name),r.a.createElement("p",null,"ForkLift License:",e.radio),"------------------------",r.a.createElement("h3",null,"List of Boxes:"))})),a.state.Products.map((function(e){return r.a.createElement("div",null,r.a.createElement("h4",null,"Name-",e.name),r.a.createElement("h4",null,"Number-",e.number),r.a.createElement("h4",null,"forklift needed-",e.forklift),"--------------------------------------")}))):3==a.state.flag?r.a.createElement(h,{workers:a.props.workers,products:a.props.Products}):void 0},a.updateBtn=function(e,t){var n=a.state.Products.filter((function(e,t){return"No"!=e.forklift}));a.setState({Products:Object(c.a)(n)})},a.LoginBtn=function(e){"99999"==a.state.logNum&&a.setState({flag:3}),a.props.workers.map((function(e,t){e.number[t]==a.state.logNum[t]?a.setState({flag:2}):alert("Worker doesnt exist")}))},a.state={flag:1,inplace:!1,logNum:[],Products:[{number:"35354",name:"BlackBox",forklift:"No"},{number:"64389",name:"redBox",forklift:"Yes"},{number:"75264",name:"blueBox",forklift:"No"},{number:"45526",name:"WhiteBox",forklift:"Yes"}]},a}return Object(m.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"a2"},r.a.createElement("h3",null,"Login:"),r.a.createElement("input",{placeholder:"Number",maxLength:"5",onChange:function(t){e.setState({logNum:t.target.value})}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{style:{backgroundColor:"blue"},onClick:this.LoginBtn},"Login"),r.a.createElement("br",null),r.a.createElement("br",null),this.show())}}]),n}(a.Component),g=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).create3=function(e,t,n,r){a.setState({Workers:[].concat(Object(c.a)(a.state.Workers),[{name:t,number:n,radio:e,logNum:[]}])})},a.state={Workers:[]},a}return Object(m.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(b.a,null,r.a.createElement("h2",null,"Logistic Management!!"),r.a.createElement(b.b,{to:"/"},r.a.createElement("button",{style:{backgroundColor:"green"},className:"btn1"},"HomePage")),r.a.createElement(f.c,null,this.state.Workers.map((function(t){return r.a.createElement(f.a,{exact:!0,path:"/Login",component:function(){return r.a.createElement(d,{workers:e.state.Workers})}})})),r.a.createElement(f.a,{exact:!0,path:"/",component:function(){return r.a.createElement(E,null)}}),r.a.createElement(f.a,{exact:!0,path:"/SignUp",component:function(){return r.a.createElement(p,{create2:e.create3})}}))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.ec437fae.chunk.js.map