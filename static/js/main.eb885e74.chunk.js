(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,a){e.exports={header:"header_header__3cBp-",header_body:"header_header_body__1_cra",Profileimage:"header_Profileimage__2ZNpK",logo_text:"header_logo_text__1w_Bi"}},function(e,t,a){e.exports={PageRoot:"about_PageRoot__2yTG2",pageRootBlack:"about_pageRootBlack__3Vy1H",leftPart:"about_leftPart__2gUmW"}},,,,,,function(e,t,a){e.exports=a.p+"static/media/profileImage.d398f9e1.jpg"},function(e,t,a){e.exports=a.p+"static/media/uc.4bc2d788.gif"},function(e,t,a){e.exports=a.p+"static/media/profile.bbe03cb8.jpg"},function(e,t,a){e.exports={vtext:"PageTitle_vtext__1_uMi"}},,,function(e,t,a){e.exports=a(24)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t){var a=function(e,t,a){this.toRotate=t,this.el=e,this.loopNum=0,this.period=parseInt(a,12)||2e3,this.txt="",this.tick(),this.isDeleting=!1};a.prototype.tick=function(){var e=this.loopNum%this.toRotate.length,t=this.toRotate[e];this.isDeleting?this.txt=t.substring(0,this.txt.length-1):this.txt=t.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var a=this,n=300-100*Math.random();this.isDeleting&&(n/=2),this.isDeleting||this.txt!==t?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,n=500):(n=this.period,this.isDeleting=!0),setTimeout(function(){a.tick()},n)},window.onload=function(){for(var e=document.getElementsByClassName("txt-rotate"),t=0;t<e.length;t++){var n=e[t].getAttribute("data-rotate"),o=e[t].getAttribute("data-period");n&&new a(e[t],JSON.parse(n),o)}var r=document.createElement("style");r.type="text/css",r.innerHTML=".txt-rotate > .wrap { border-right: 0.1em solid #fff }",document.body.appendChild(r)}},function(e,t,a){e.exports={pageRootBlack:"HomePage_pageRootBlack__24R8J",pageRootWhite:"HomePage_pageRootWhite__2pjLR",leftAlignedBold:"HomePage_leftAlignedBold__aZLuB"}},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(4),i=a.n(r),l=(a(19),a(20),a(5)),c=a(6),s=a(12),u=a(7),d=a(13),m=a(1),h=a.n(m),p=a(8),g=a.n(p);var f=function(){return o.a.createElement("header",{className:h.a.header},o.a.createElement("div",{className:h.a.header_body},o.a.createElement("div",{className:h.a.logo_text},o.a.createElement("b",null,"SOURAV DEY"),o.a.createElement("div",null,"Developer & Designer")),o.a.createElement("img",{src:g.a,className:h.a.Profileimage,alt:"ProfileImage"})))},_=a(9),v=a.n(_),E=function(e){return o.a.createElement("div",null,o.a.createElement(f,null),o.a.createElement("div",null,e.children),o.a.createElement("div",null,o.a.createElement("img",{alt:"under construction",style:{width:"100%"},src:v.a})))},b=a(2),x=a.n(b);a(21),a(22);var w=function(){return o.a.createElement("div",null,"I 'm\xa0",o.a.createElement("span",{class:"txt-rotate","data-period":"500","data-rotate":'[ "coder.", "developer.", "designer.", "engineer." ]'}))},y=a(10),R=a.n(y),B=function(){return o.a.createElement("div",{className:x.a.PageRoot},o.a.createElement("div",{className:x.a.leftPart},o.a.createElement("img",{src:R.a,alt:""})),o.a.createElement("div",{className:x.a.pageRootBlack},o.a.createElement("div",{style:{fontSize:"1em",borderLeft:"2px solid #fab600",paddingLeft:"10px"}},"Hi ",o.a.createElement("span",{style:{color:"#fab600",fontWeight:"bold"}}," Sourav ")," here,",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(w,null),o.a.createElement("br",null),"Based on Bangalore. Currently working as ",o.a.createElement("span",{style:{color:"white",fontWeight:"bold"}},"Software Developer")," for Tata Consultancy Services.",o.a.createElement("br",null),o.a.createElement("br",null))))},N=(a(23),a(11)),k=a.n(N);var P=function(){return o.a.createElement("div",{className:k.a.vtext},"About")},D=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(E,null,o.a.createElement(P,null),o.a.createElement("div",null,o.a.createElement(B,null)))}}]),t}(o.a.Component);var j=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(D,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[14,1,2]]]);
//# sourceMappingURL=main.eb885e74.chunk.js.map