(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,a){e.exports=a(290)},113:function(e,t,a){},129:function(e,t,a){},290:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),o=a(16),s=a.n(o),r=(a(113),a(27)),c=a(28),l=a(32),u=a(29),p=a(33),h=a(21),m=a(36),d=a.n(m),f=a(106),g=a.n(f),v=a(107),b=a.n(v),x=a(31),w=a.n(x),y=a(37),E=a.n(y),k={apiKey:"AIzaSyDcyfdg5qzoEbM-9v7Q6WwpGJQIZqfQQRU",authDomain:"user-feed-84a20.firebaseapp.com",databaseURL:"https://user-feed-84a20.firebaseio.com",projectId:"user-feed-84a20",storageBucket:"user-feed-84a20.appspot.com",messagingSenderId:"969646773326"};E.a.initializeApp(k);var j=new E.a.auth.GoogleAuthProvider,O=E.a.auth(),N=E.a,S=(a(129),a(45)),C=a.n(S),I=a(105),B=a.n(I),A=a(104),D=a.n(A),W=a(58),P=a.n(W),R=a(101),L=a.n(R),M=a(102),Q=a.n(M),q=a(44),z=a.n(q),F=a(103),J=a.n(F),U=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).like=function(e,t,a){var n=a+1;N.database().ref("posts/".concat(e)).update({likes:n})},a.state={posts:[]},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.database().ref("posts").on("value",function(t){var a=t.val(),n=[];for(var i in a)n.unshift({post:a[i].post,id:i,likes:a[i].likes});e.setState({posts:n})})}},{key:"render",value:function(){var e=this,t=this.props.classes;return i.a.createElement(P.a,{className:t.list},this.state.posts.map(function(a,n){return i.a.createElement(z.a,{key:a.id,className:t.paper,elevation:1},i.a.createElement(L.a,{className:t.listItem},i.a.createElement(Q.a,{primary:"".concat(a.post)}),i.a.createElement(J.a,{className:t.likeButton,onClick:function(){return e.like(a.id,n,a.likes)}}),i.a.createElement("p",{className:t.likes},a.likes)))}))}}]),t}(n.Component),G=Object(h.withStyles)(function(){return{list:{width:"100%",height:"100%",margin:"0 auto",display:"flex",flexDirection:"column",justifyContent:"space-between"},paper:{width:"80%",padding:"21px",margin:"21px auto 21px 0"},listItem:{overflowX:"hidden"},likeButton:{boxShadow:"2px 2px 2px #c5c5c5",borderRadius:"3px",padding:"5px","&:hover":{boxShadow:"3px 3px 3px #c5c5c5",cursor:"pointer"},"&:active":{boxShadow:"1px 1px 1px #c5c5c5"}},likes:{marginLeft:"13px"}}})(U),T=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={user:null,loggedIn:!1,post:""},a.componentWillReceiveProps=function(e){a.setState({loggedIn:e.authenticated,user:e.user})},a.handleChange=function(e){a.setState({post:e.target.value})},a.handleSubmit=function(){var e=N.database().ref("posts"),t={post:a.state.post,likes:0};a.setState({post:""}),e.push(t)},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return i.a.createElement("div",{className:e.container},this.state.loggedIn?i.a.createElement(C.a,{container:!0},i.a.createElement(C.a,{item:!0,xs:4},i.a.createElement("div",{className:e.postContainer},i.a.createElement(w.a,{variant:"h6",gutterBottom:!0,className:e.welcome},"Welcome, ",this.state.user.displayName),i.a.createElement(D.a,{alt:"Profile Photo",src:this.state.user.photoURL,className:e.avatar}),i.a.createElement(B.a,{id:"post-field",label:"What's on your mind",multiline:!0,rowsMax:"4",className:e.postField,margin:"normal",value:this.state.post,onChange:this.handleChange}),i.a.createElement(d.a,{id:"post-button",variant:"outlined",className:e.postButton,onClick:this.handleSubmit},"Post"))),i.a.createElement(C.a,{item:!0,xs:8},i.a.createElement(G,null))):i.a.createElement("div",{className:e.center},i.a.createElement(w.a,{variant:"h6",gutterBottom:!0},"Ope, nothing to see here")))}}]),t}(n.Component),X=Object(h.withStyles)(function(e){return{container:{display:"flex",height:"calc(100% - 64px)",overflowX:"hidden"},center:{display:"flex",height:"calc(100% - 64px)",alignItems:"center",justifyContent:"center",width:"100%"},avatar:{width:120,height:120,margin:"16px auto 0 auto"},postContainer:{display:"flex",flexDirection:"column",padding:"21px",height:"calc(100% - 42px)",borderRight:"1px solid #c5c5c5",position:"fixed"},welcome:{width:"85%",margin:"0 auto",textAlign:"center"},postField:{width:"70%",margin:"16px auto"},postButton:{width:"70%",margin:"0 auto"}}})(T),K=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={user:null,authenticated:!1},a.login=function(){O.signInWithPopup(j).then(function(e){a.setState({user:e.user,authenticated:!0}),N.app().database().ref("users").orderByChild("email").equalTo(e.user.email).limitToFirst(1).once("value",function(e){if(null==e.val()){var t=N.database().ref("users"),n={username:a.state.user.displayName,email:a.state.user.email};t.push(n)}})})},a.logout=function(){O.signOut().then(function(){a.setState({user:null,authenticated:!1})})},a.componentDidMount=function(){O.onAuthStateChanged(function(e){e&&a.setState({user:e,authenticated:!0})})},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return i.a.createElement("div",{className:"app"},i.a.createElement(g.a,{position:"static",color:"default",elevation:2},i.a.createElement(b.a,null,i.a.createElement(w.a,{variant:"h6",color:"inherit"},"anon.io"),i.a.createElement("form",{className:e.container,noValidate:!0,autoComplete:"off"},this.state.user?i.a.createElement(d.a,{variant:"outlined",className:e.button,onClick:this.logout},"Log Out"):i.a.createElement(d.a,{variant:"outlined",className:e.button,onClick:this.login},"Log In")))),i.a.createElement(X,{authenticated:this.state.authenticated,user:this.state.user}))}}]),t}(n.Component),V=Object(h.withStyles)(function(e){return{container:{margin:"0 0 0 auto",display:"flex",flexDirection:"row"},button:{margin:e.spacing.unit}}})(K);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(288);s.a.render(i.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[108,2,1]]]);
//# sourceMappingURL=main.b77bb173.chunk.js.map