(this.webpackJsonpradio=this.webpackJsonpradio||[]).push([[0],{28:function(e,t,a){},42:function(e,t,a){},57:function(e,t,a){e.exports=a.p+"static/media/0.28e65fd9.gif"},58:function(e,t,a){e.exports=a.p+"static/media/1.8400ed0c.gif"},59:function(e,t,a){e.exports=a.p+"static/media/2.63e456d6.gif"},60:function(e,t,a){e.exports=a.p+"static/media/3.975fff62.gif"},61:function(e,t,a){e.exports=a.p+"static/media/4.303295a3.gif"},62:function(e,t,a){e.exports=a.p+"static/media/5.cd23183b.gif"},63:function(e,t,a){e.exports=a.p+"static/media/6.ba4e5f6c.gif"},64:function(e,t,a){e.exports=a.p+"static/media/7.f48c078f.gif"},67:function(e,t,a){e.exports=a(96)},96:function(e,t,a){"use strict";a.r(t);var n,c=a(5),r=a.n(c),i=a(33),o=a.n(i),l=a(13),s=a(10),u=a(51),m=a(52).a.input.attrs({type:"range"})(n||(n=Object(u.a)(["\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  outline: 0;\n  height: 2px;\n  border-radius: 40px;\n  background: ",";\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);\n\n  ::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    background-color: #fff;\n    height: 12px;\n    width: 12px;\n    border-radius: 50%;\n  }\n\n  ::-moz-range-thumb {\n    -webkit-appearance: none;\n    background-color: #fff;\n    height: 12px;\n    width: 12px;\n    border-radius: 50%;\n  }\n"])),(function(e){return"linear-gradient(to right, #fff 0%, #fff ".concat(e.value,"%, #292828 ").concat(e.value,"%, #292828 100%);")})),d=(a(28),"[ui] Open Fullscreen"),f="[ui] Exit Fullscreen",b="[ui] Change Background",p="[ui] Change Visibility Chat",g="[ui] Change Visibility Help",h="[ui] Change Visibility Gif",v="[ui] Show Error",E="[radio] get information",j="[messages] Messages Load",O="[messages] Clear All Messages",y="[auth] Loign",N="[auth] Logout",x=function(e){return{type:v,payload:e}},k=function(){var e=Object(l.c)((function(e){return e.radio})),t=e.name,a=e.author,n=e.listeners,i=Object(l.c)((function(e){return e.ui})).Fullscreen,o=Object(c.useState)(!1),u=Object(s.a)(o,2),b=u[0],p=u[1],g=Object(c.useState)(!0),h=Object(s.a)(g,2),v=h[0],E=h[1],j=Object(c.useState)(100),O=Object(s.a)(j,2),y=O[0],N=O[1],x=Object(c.useState)(null),k=Object(s.a)(x,2),w=k[0],_=k[1],F=Object(c.useRef)(),I=Object(l.b)(),C=function(){v?(p(!0),"https://low-radio-node.herokuapp.com/listen"===w?(F.current.play(),setTimeout((function(){p(!1)}),8500)):(p(!0),_("https://low-radio-node.herokuapp.com/listen"),setTimeout((function(){F.current.play()}),.5),setTimeout((function(){p(!1)}),8e3))):(F.current.pause(),_("null")),E(!v)};return r.a.createElement("div",{className:"radio-footer__info"},r.a.createElement("div",{className:"radio-footer__info-favorite"},r.a.createElement("i",{className:"bi bi-star svgIcon"})),r.a.createElement("div",{className:"radio-footer__info-song SuiTypography-Body1"},r.a.createElement("label",null,t,r.a.createElement("br",null),"BUG BUNNY"===a?r.a.createElement("span",{className:"bugbunny"},a):r.a.createElement("span",null,a))),r.a.createElement("div",{className:"radio-footer__info-listeners"},r.a.createElement("label",null,"Listeners: ",n)),r.a.createElement("div",{className:"radio-footer__info-playbtn"},b?r.a.createElement("div",{className:"loader",id:"loader"}):null,v?r.a.createElement("i",{className:"bi bi-play-fill btnPlay svgIcon",onClick:C}):r.a.createElement("i",{className:"bi bi-pause-fill btnPlay svgIcon",onClick:C})),r.a.createElement("div",{className:"radio-footer__info-volume"},r.a.createElement("audio",{ref:F,src:w}),y>60?r.a.createElement("i",{className:"bi bi-volume-up-fill svgIcon"}):y>30?r.a.createElement("i",{className:"bi bi-volume-down-fill svgIcon"}):r.a.createElement("i",{className:"bi bi-volume-off-fill svgIcon"})),r.a.createElement("div",{className:"radio-footer__info-volume-slider"},r.a.createElement(m,{value:y,onChange:function(e){N(e.target.value),function(e){F.current.volume=e}(e.target.value/100)}})),r.a.createElement("div",{className:"radio-footer__info-access"},i?r.a.createElement("i",{className:"bi bi-fullscreen-exit svgIcon",width:"100px",height:"100px",onClick:function(){I({type:f})}}):r.a.createElement("i",{className:"bi bi-fullscreen svgIcon",onClick:function(){I({type:d})}})))},w=a(4),_=a(14),F=a(56),I=a(22),C=a(15),S=Object(F.a)({apiKey:"AIzaSyCbZJY2nDiCPTRsv0yoGtS3I17NVD5JmSM",authDomain:"radio-6035c.firebaseapp.com",projectId:"radio-6035c",storageBucket:"radio-6035c.appspot.com",messagingSenderId:"584821453886",appId:"1:584821453886:web:e148ed9d9812ebed064d6f",measurementId:"G-54T7T3YZV8"}),D=Object(C.d)(S),A=Object(I.b)(),q=(a(42),a(0)),T=a.n(q),z=a(2),M=function(){var e=Object(z.a)(T.a.mark((function e(t){var a,n,c,r,i;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.giphy.com/v1/gifs/search?q=".concat(t,"&rating=PG&limit=1&api_key=DnKhsHbOOyW15hQ77467vSt21jCNVenP"),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:c=e.sent,r=c.data,i=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_small.mp4}})),console.log(i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(e){return console.log(e),r.a.createElement("div",null)},G=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"card"},r.a.createElement("li",null,"/login <email>  <password>")))},V=function(){var e,t=Object(l.b)(),a=Object(l.c)((function(e){return e.msg})).state,n=Object(l.c)((function(e){return e.ui})),i=n.error,o=n.help;return Object(c.useEffect)((function(){var e=Object(C.h)(Object(C.b)(D,"room"),Object(C.g)("createdAt","desc"),Object(C.e)(50));Object(C.f)(e,(function(e){t({type:O}),e.forEach((function(e){var a;t((a={id:e.id,message:e.data().message,createdAt:e.data().createdAt,author:e.data().author,admin:e.data().admin},{type:j,payload:a}))}))}))}),[t]),e=a?a.map((function(e){return e.gif?r.a.createElement(R,{key:e.id,img:e.img}):e.admin?r.a.createElement("li",{className:"message",key:e.id},r.a.createElement("span",{style:{color:"grey"}},e.author," ",r.a.createElement("span",{style:{fontSize:10,color:"red"}},"[MOD]"))," ",e.message):r.a.createElement("li",{className:"message",key:e.id},r.a.createElement("span",{style:{color:"grey"}},e.author)," ",e.message)})):null,r.a.createElement("ul",{className:"chat-container__messages-list"},e,i?r.a.createElement("li",{className:"message"},i):null,o?r.a.createElement(G,null):null)},B=function(e){return function(t){console.log(e);var a=Object(C.h)(Object(C.b)(D,"users"),Object(C.i)("id","==",e.uid));Object(C.c)(a).then((function(a){a.forEach((function(a){var n,c,r,i;console.log(a.id," => ",a.data()),t(x("")),t((n=e.uid,c=e.displayName,r=e.emailVerified,i=a.data().admin,{type:y,payload:{uid:n,displayName:c,verified:r,admin:i}}))}))})).catch((function(e){console.log(e)}))}},L=function(){return function(e){A.signOut(),e({type:N})}},P=function(e,t,a,n,c,r){var i,o,l=e.split(" ");switch(l[0]){case"/login":c((i=l[1],o=l[2],function(){Object(I.e)(A,i,o).then((function(e){var t=e.user;console.log("inicio sesion",t.displayName),B(t)})).catch((function(e){var t=e.message;console.log(t)}))}));break;case"/register":c(function(e,t,a){return function(n){var c=new Date;Object(I.a)(A,e,t).then((function(e){var t=e.user;A.languageCode="es",Object(I.f)(A.currentUser,{displayName:a,photoURL:"https://example.com/jane-q-user/profile.jpg"}),Object(I.d)(A.currentUser).then((function(){Object(C.a)(Object(C.b)(D,"users"),{admin:!1,id:t.uid,createdAt:c}),A.signOut()}))})).catch((function(e){var t=e.message;console.log(t)}))}}(l[2],l[3],l[1]));break;case"/out":c(L());break;case"/giphy":t?a?U(e)?(console.log(l,"desde /giphy"),M(l[1]),c({type:g,payload:!0})):console.log("mensaje vacio"):console.log("verifica correo"):c(x("inicia sesi\xf3n"));break;default:t?a?U(e)?(M(),c(function(e,t,a,n,c){return function(r){var i=new Date;try{console.log(t,e,a),Object(C.a)(Object(C.b)(D,"room"),{author:t,message:e,createdAt:i,admin:a,url:n,isGif:c})}catch(o){console.error("Error adding document: ",o)}}}(e,n,r,null,!1))):console.log("mensaje vacio"):console.log("verifica correo"):c(x("inicia sesi\xf3n"))}},U=function(e){return e.replace(/\s+/g,"").length>0},J=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.ui})),a=t.chat,n=t.help,i=Object(l.c)((function(e){return e.auth})),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),a=Object(s.a)(t,2),n=a[0],r=a[1],i=function(){r(e)},o=function(e){var t=e.target;r(Object(_.a)(Object(_.a)({},n),{},Object(w.a)({},t.name,t.value)))};return[n,o,i]}({message:"",gif:!1}),u=Object(s.a)(o,3),m=u[0],d=u[1],f=u[2],b=m.message;return r.a.createElement("div",null,r.a.createElement("div",{className:"chat-container ".concat(a?"":"hidden")},r.a.createElement("div",{className:"chat-container__toolbar"},r.a.createElement("h6",{className:"chat-container__toolbar-title"},"CHAT")),r.a.createElement("div",{className:"chat-container-scroll-to-bottom"},r.a.createElement("div",{className:"chat-container__messages"},r.a.createElement(V,null))),r.a.createElement("div",{className:"chat-container__textbox-title"},r.a.createElement("h6",null,r.a.createElement("span",{className:"chat-container__textbox-title-arrow"},"\u2192")," RADIO GIT:(",r.a.createElement("span",{className:"chat-container__textbox-title-span-color"},"MAIN"),")")),r.a.createElement("div",{className:"chat-container__text-area"},r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),P(b,i.uid,i.verified,i.displayName,e,i.admin),f()}},r.a.createElement("input",{placeholder:"Commit here...",name:"message",onChange:d,autoComplete:"off",value:b}),r.a.createElement("i",{className:"bi bi-question-circle svgIcon help",onClick:function(){e({type:g,payload:!n})}}),r.a.createElement("button",null,r.a.createElement("i",{className:"bi bi-send-fill",style:{color:"white",fontSize:"1.6rem",padding:"8px",transition:".2s"},id:"send-button"}))))))},H=a(57),Y=a.n(H),K=a(58),Z=a.n(K),Q=a(59),W=a.n(Q),X=a(60),$=a.n(X),ee=a(61),te=a.n(ee),ae=a(62),ne=a.n(ae),ce=a(63),re=a.n(ce),ie=a(64),oe=a.n(ie),le=a(65),se=a.n(le),ue=function(){var e=Object(z.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,se.a.get("https://low-radio-node.herokuapp.com/status");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),me=function(){return function(){var e=Object(z.a)(T.a.mark((function e(t){var a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ue();case 3:a=e.sent,t(de(a.data)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},de=function(e){return{type:E,payload:e}},fe=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.ui})),a=t.background,n=t.chat,c=function(){e({type:p,payload:!n})};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"radio-navbar"},r.a.createElement("i",{className:"bi bi-broadcast svgIcon"}),r.a.createElement("div",{className:"radio-navbar-icons-container"},r.a.createElement("div",{className:"radio-navbar-icons-container_icon"},r.a.createElement("i",{className:"bi bi-image svgIcon",onClick:function t(){var n=Math.floor(8*Math.random())+0;n!==a?e({type:b,payload:n}):t()}}),n?r.a.createElement("i",{className:"bi bi-chat-left svgIcon",onClick:c}):r.a.createElement("i",{className:"bi bi-chat-left-text svgIcon",onClick:c})))))},be=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.ui})).background,a=[Y.a,Z.a,W.a,$.a,te.a,ne.a,re.a,oe.a];return Object(c.useEffect)((function(){Object(I.c)(A,(function(e){e&&B(e)}))}),[]),Object(c.useEffect)((function(){e(me())})),setInterval((function(){e(me())}),4e3),r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{className:"jDvIgD",src:a[t],alt:"Mario"}),r.a.createElement(fe,null),r.a.createElement(J,null),r.a.createElement("div",{className:"radio-footer"},r.a.createElement(k,null)))},pe=function(){var e=Object(l.c)((function(e){return e.ui})).Fullscreen,t=document.documentElement;return e&&(t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.msRequestFullscreen&&t.msRequestFullscreen()),(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)&&!e&&(document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()),r.a.createElement(r.a.Fragment,null,r.a.createElement(be,null))},ge=a(27),he=a(66),ve={uid:"",displayName:"",verified:!1,admin:!1},Ee=a(16),je={state:[]},Oe={name:"feliz",author:"cumple",historySong:[],listeners:0},ye={chat:!0,Fullscreen:!1,background:0,help:!1,error:"",gif:!1},Ne=Object(ge.b)({radio:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(_.a)(Object(_.a)({},e),{},{name:t.payload.current_track.name,author:t.payload.current_track.author,listeners:t.payload.listeners});default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(_.a)(Object(_.a)({},e),{},{Fullscreen:!0});case f:return Object(_.a)(Object(_.a)({},e),{},{Fullscreen:!1});case b:return Object(_.a)(Object(_.a)({},e),{},{background:t.payload});case p:return Object(_.a)(Object(_.a)({},e),{},{chat:t.payload});case v:return Object(_.a)(Object(_.a)({},e),{},{error:t.payload});case g:return Object(_.a)(Object(_.a)({},e),{},{help:t.payload});case h:return Object(_.a)(Object(_.a)({},e),{},{gif:t.payload});default:return e}},msg:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return{state:[t.payload].concat(Object(Ee.a)(e.state))};case O:return{state:[]};default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return{uid:t.payload.uid,displayName:t.payload.displayName,verified:t.payload.verified,admin:t.payload.admin};case N:return{uid:"",displayName:"",verified:!1,admin:!1};default:return e}}}),xe=ge.c,ke=Object(ge.d)(Ne,xe(Object(ge.a)(he.a))),we=function(){return r.a.createElement(l.a,{store:ke},r.a.createElement(pe,null))};o.a.render(r.a.createElement(we,null),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.f3ea9030.chunk.js.map