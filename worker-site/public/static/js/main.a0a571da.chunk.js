(this["webpackJsonpshantitok-maker"]=this["webpackJsonpshantitok-maker"]||[]).push([[0],{11:function(e,n,a){},12:function(e,n,a){},14:function(e,n,a){"use strict";a.r(n);var t=a(1),r=a.n(t),o=a(4),l=a.n(o),d=(a(11),a(2)),s=(a(12),a(5)),i=a.n(s),c=a(6),u=a(0),h=function(){var e=r.a.useRef(null),n=r.a.useRef(null),a=r.a.useRef(null),t=r.a.useRef(null),o=r.a.useRef(null),l=r.a.useState(!1),s=Object(d.a)(l,2),h=s[0],b=s[1],m=r.a.useState(!1),g=Object(d.a)(m,2),j=g[0],w=g[1],y=r.a.useState(!1),p=Object(d.a)(y,2),O=p[0],f=p[1],k=r.a.useState([]),v=Object(d.a)(k,2),x=v[0],T=v[1],S=r.a.useState(!1),C=Object(d.a)(S,2),W=C[0],R=C[1],L=r.a.useCallback((function(e){var n=e.data;n.size>0&&T((function(e){return e.concat(n)}))}),[T]),A=r.a.useCallback((function(){w(!0),f(!1),T([]),n.current.pause(),n.current.removeAttribute("src"),n.current.load(),t.current.currentTime=0,t.current.play();try{a.current=new MediaRecorder(e.current.stream,{audioBitsPerSecond:128e3,videoBitsPerSecond:25e5,mimeType:"video/webm; codecs=vp8,opus"})}catch(r){return void alert("MediaRecorder is not supported by this browser. Please use Firefox.")}a.current.addEventListener("dataavailable",L),a.current.start()}),[e,w,a,L]),B=r.a.useCallback((function(){a.current.stop(),t.current.pause(),w(!1)}),[a,w]),D=r.a.useCallback((function(){if(x.length){var e=new Blob(x,{type:"video/webm"});n.current.src=window.URL.createObjectURL(e),f(!0),t.current.currentTime=0,t.current.play()}}),[n,t,x,f]),F=r.a.useCallback((function(){f(!1),n.current.pause(),n.current.currentTime=0,t.current.currentTime=0,t.current.pause()}),[n,t,f]),I=r.a.useCallback((function(){if(x.length){var e=new Blob(x,{type:"video/webm"}),n=URL.createObjectURL(e),a=document.createElement("a");document.body.appendChild(a),a.style="display: none",a.href=n,a.download="shanty.webm",a.click(),window.URL.revokeObjectURL(n),T([])}}),[x]),P=r.a.useCallback((function(){b(!0),new c.a(o.current,t.current)}),[b,t,o]);return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("br",{}),Object(u.jsxs)("div",{style:{display:W?"none":"block"},children:[Object(u.jsx)("img",{width:"500",src:"./flag.png",alt:"Pirate Flag"}),Object(u.jsxs)("p",{children:["Ah this here reminds me o' the time when I be sailin' in the 'igh seas ",Object(u.jsx)("br",{}),"with me fellow arr, mates, singin' our 'earts out until the sun goes down ",Object(u.jsx)("br",{}),"after a day o' 'onest labour.",Object(u.jsx)("br",{})]}),Object(u.jsx)("p",{children:"It be the only way to go I tell ye'all. So quit ya blabberin' an' begin doin'."}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{onClick:R,children:"Aye aye Cap'n"})]}),Object(u.jsxs)("div",{style:{display:W?"block":"none"},children:[Object(u.jsx)(i.a,{height:720,ref:e,videoConstraints:{height:720,width:1280,frameRate:{min:24,ideal:30,max:60},facingMode:"user"}}),Object(u.jsx)("video",{height:720,ref:n,autoPlay:!0,loop:!0,playsInline:!0}),Object(u.jsx)("br",{}),h?Object(u.jsx)(u.Fragment,{children:j?Object(u.jsx)("button",{onClick:B,children:"Avast ye Capturin"}):Object(u.jsx)("button",{onClick:A,children:"Argg Let's Start ye Singin"})}):Object(u.jsx)("button",{children:"Loading ..."}),x.length>0&&Object(u.jsxs)(u.Fragment,{children:[O?Object(u.jsx)("button",{onClick:F,children:"Avast"}):Object(u.jsx)("button",{onClick:D,children:"Play"}),Object(u.jsx)("button",{onClick:I,children:"Download"})]}),Object(u.jsx)("hr",{}),Object(u.jsxs)("div",{className:"wellerman",children:[Object(u.jsx)("video",{ref:t,controls:!0,width:"300",src:"./wellerman.mp4",playsInline:!0,onLoadedData:P,onEnded:B}),"Credits:",Object(u.jsx)("br",{})," Nathan Evans - Wellerman (TikTok Sea Shanty) | Official Audio"]}),Object(u.jsx)("div",{className:"rabbit-lyrics",ref:o,style:{display:h?"inline-block":"none"},dangerouslySetInnerHTML:{__html:"[00:02.00] There once was a ship that put to sea\n  [00:05.00] The name of the ship was the Billy of Tea \n  [00:08.00] The winds blew up, her bow dipped down \n  [00:10.00] Oh blow, my bully boys, blow (huh) \n\n  [00:13.00] Soon may the Wellerman come\n  [00:15.00] To bring us sugar and tea and rum\n  [00:18.00] One day, when the tonguing is done\n  [00:20.00] We'll take our leave and go\n  \n  [00:23.00] She'd not been two weeks from shore\n  [00:25.00] When down on her a right whale bore\n  [00:28.00] The captain called all hands and swore\n  [00:30.00] He'd take that whale in tow (huh)\n  \n  [00:33.00] Soon may the Wellerman come\n  [00:35.00] To bring us sugar and tea and rum\n  [00:38.00] One day, when the tonguing is done\n  [00:40.00] We'll take our leave and go\n  \n  [00:43.00] Da-da-da-da-da\n  [00:45.00] Da-da-da-da-da-da-da\n  [00:48.00] Da-da-da-da-da-da-da-da-da-da-da\n  \n  [00:53.00] Before the boat had hit the water\n  [00:55.00] The whale's tail came up and caught her\n  [00:58.00] All hands to the side, harpooned and fought her\n  [01:00.00] When she dived down low (huh)\u2026\n  \n  [01:03.00] Soon may the Wellerman come\n  [01:05.50] To bring us sugar and tea and rum\n  [01:08.00] One day, when the tonguing is done\n  [01:10.00] We'll take our leave and go\n  \n  [01:12.00] No line was cut, no whale was freed\n  [01:15.00] The captain's mind was not of greed\n  [01:18.00] And he belonged to the Whaleman's creed\n  [01:20.00] She took that ship in tow (huh)\n\n  [01:23.00] Soon may the Wellerman come\n  [01:25.00] To bring us sugar and tea and rum\n  [01:28.00] One day, when the tonguing is done\n  [01:30.00] We'll take our leave and go\n\n  [01:33.00] Da-da-da-da-da\n  [01:35.00] Da-da-da-da-da-da-da\n  [01:38.00] Da-da-da-da-da-da-da-da-da-da-da\n\n  [01:42.00] For forty days or even more\n  [01:45.00] The line went slack then tight once more\n  [01:48.00] All boats were lost, there were only four\n  [01:50.00] But still that whale did go (huh)\n\n  [01:53.00] Soon may the Wellerman come\n  [01:55.00] To bring us sugar and tea and rum\n  [01:58.00] One day, when the tonguing is done\n  [02:00.00] We'll take our leave and go\n\n  [02:03.00] As far as I've heard, the fight's still on\n  [02:06.00] The line's not cut, and the whale's not gone\n  [02:07.00] The Wellerman makes his regular call\n  [02:10.00] To encourage the captain, crew and all (huh)\n\n  [02:13.00] Soon may the Wellerman come\n  [02:15.00] To bring us sugar and tea and rum\n  [02:18.00] One day, when the tonguing is done\n  [02:20.00] We'll take our leave and go\n\n  [02:23.00] Soon may the Wellerman come\n  [02:25.00] To bring us sugar and tea and rum\n  [02:28.00] One day, when the tonguing is done\n  [02:30.00] We'll take our leave and go  \n  "}})]})]})},b=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,15)).then((function(n){var a=n.getCLS,t=n.getFID,r=n.getFCP,o=n.getLCP,l=n.getTTFB;a(e),t(e),r(e),o(e),l(e)}))};l.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root")),b()}},[[14,1,2]]]);
//# sourceMappingURL=main.a0a571da.chunk.js.map