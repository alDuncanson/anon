(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{179:function(e,t,n){"use strict";n.r(t);var a=n(2),o=n.n(a),i=n(21),r=n.n(i),c=(n(71),n(27)),s=n(28),u=n(31),l=n(29),h=n(32),p=n(30),d=n(41),f=n.n(d),m=n(63),g=n.n(m),v=n(64),b=n.n(v),w=n(65),y=n.n(w),O=n(22),E=n.n(O);E.a.initializeApp({apiKey:"AIzaSyDcyfdg5qzoEbM-9v7Q6WwpGJQIZqfQQRU",authDomain:"user-feed-84a20.firebaseapp.com",databaseURL:"https://user-feed-84a20.firebaseio.com",projectId:"user-feed-84a20",storageBucket:"user-feed-84a20.appspot.com",messagingSenderId:"969646773326"});var j=new E.a.auth.GoogleAuthProvider,I=E.a.auth(),k=(E.a,n(87),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={user:null,loggedIn:!1},n.componentWillReceiveProps=function(e){n.setState({loggedIn:e.authenticated})},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",{className:e.container},this.state.loggedIn?o.a.createElement("p",null,"Logged In"):o.a.createElement("p",null,"Ope, nothin to see here"))}}]),t}(a.Component)),S=Object(p.withStyles)(function(){return{container:{display:"flex"}}})(k),A=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={user:null,authenticated:!1},n.login=function(){I.signInWithPopup(j).then(function(e){n.setState({user:e.user,authenticated:!0})})},n.logout=function(){I.signOut().then(function(){n.setState({user:null,authenticated:!1})})},n.componentDidMount=function(){I.onAuthStateChanged(function(e){e&&n.setState({user:e,authenticated:!0})})},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",{className:"app"},o.a.createElement(g.a,{position:"static",color:"default"},o.a.createElement(b.a,null,o.a.createElement(y.a,{variant:"h6",color:"inherit"},"App Title"),o.a.createElement("form",{className:e.container,noValidate:!0,autoComplete:"off"},this.state.user?o.a.createElement(f.a,{variant:"outlined",className:e.button,onClick:this.logout},"Log Out"):o.a.createElement(f.a,{variant:"outlined",className:e.button,onClick:this.login},"Log In")))),o.a.createElement(S,{authenticated:this.state.authenticated}))}}]),t}(a.Component),C=Object(p.withStyles)(function(e){return{container:{margin:"0 0 0 auto",display:"flex",flexDirection:"row"},button:{margin:e.spacing.unit}}})(A);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},66:function(e,t,n){e.exports=n(179)},71:function(e,t,n){},87:function(e,t,n){}},[[66,2,1]]]);
//# sourceMappingURL=main.8e15954d.chunk.js.map