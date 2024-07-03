"use strict";(self.webpackChunkequilandoo_app=self.webpackChunkequilandoo_app||[]).push([[922],{6126:function(e,t,a){var r,n=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},i=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])},r(e,t)},function(e,t){function a(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}),o=this&&this.__createBinding||(Object.create?function(e,t,a,r){void 0===r&&(r=a),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[a]}})}:function(e,t,a,r){void 0===r&&(r=a),e[r]=t[a]}),l=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),c=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&o(t,e,a);return l(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});var s,d,u=c(a(7294)),p=a(3431),m=a(9890),h=p.keyframes(s||(s=n(["\n  50% {transform: scale(0.75);opacity: 0.2}\n  100% {transform: scale(1);opacity: 1}\n"],["\n  50% {transform: scale(0.75);opacity: 0.2}\n  100% {transform: scale(1);opacity: 1}\n"]))),g=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.style=function(e){var a=t.props,r=a.color,i=a.size,o=a.margin,l=a.speedMultiplier;return p.css(d||(d=n(["\n      display: inline-block;\n      background-color: ",";\n      width: ",";\n      height: ",";\n      margin: ",";\n      border-radius: 100%;\n      animation: "," ","s ","\n        infinite linear;\n      animation-fill-mode: both;\n    "],["\n      display: inline-block;\n      background-color: ",";\n      width: ",";\n      height: ",";\n      margin: ",";\n      border-radius: 100%;\n      animation: "," ","s ","\n        infinite linear;\n      animation-fill-mode: both;\n    "])),r,m.cssValue(i),m.cssValue(i),m.cssValue(o),h,.7/l,e%2?"0s":.35/l+"s")},t}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.loading,a=e.css;return t?p.jsx("span",{css:[a]},p.jsx("span",{css:this.style(1)}),p.jsx("span",{css:this.style(2)}),p.jsx("span",{css:this.style(3)})):null},t.defaultProps=m.sizeMarginDefaults(15),t}(u.PureComponent);t.default=g},1007:function(e,t){var a;Object.defineProperty(t,"__esModule",{value:!0}),t.calculateRgba=void 0,function(e){e.maroon="#800000",e.red="#FF0000",e.orange="#FFA500",e.yellow="#FFFF00",e.olive="#808000",e.green="#008000",e.purple="#800080",e.fuchsia="#FF00FF",e.lime="#00FF00",e.teal="#008080",e.aqua="#00FFFF",e.blue="#0000FF",e.navy="#000080",e.black="#000000",e.gray="#808080",e.silver="#C0C0C0",e.white="#FFFFFF"}(a||(a={}));t.calculateRgba=function(e,t){if(Object.keys(a).includes(e)&&(e=a[e]),"#"===e[0]&&(e=e.slice(1)),3===e.length){var r="";e.split("").forEach((function(e){r+=e,r+=e})),e=r}return"rgba("+(e.match(/.{2}/g)||[]).map((function(e){return parseInt(e,16)})).join(", ")+", "+t+")"}},9890:function(e,t,a){var r=this&&this.__createBinding||(Object.create?function(e,t,a,r){void 0===r&&(r=a),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[a]}})}:function(e,t,a,r){void 0===r&&(r=a),e[r]=t[a]}),n=this&&this.__exportStar||function(e,t){for(var a in e)"default"===a||Object.prototype.hasOwnProperty.call(t,a)||r(t,e,a)};Object.defineProperty(t,"__esModule",{value:!0}),n(a(313),t),n(a(1007),t),n(a(384),t)},313:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.heightWidthRadiusDefaults=t.heightWidthDefaults=t.sizeMarginDefaults=t.sizeDefaults=void 0;var a={loading:!0,color:"#000000",css:"",speedMultiplier:1};function r(e){return Object.assign({},a,{size:e})}function n(e,t){return Object.assign({},a,{height:e,width:t})}t.sizeDefaults=r,t.sizeMarginDefaults=function(e){return Object.assign({},r(e),{margin:2})},t.heightWidthDefaults=n,t.heightWidthRadiusDefaults=function(e,t,a){return void 0===a&&(a=2),Object.assign({},n(e,t),{radius:a,margin:2})}},384:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.cssValue=t.parseLengthAndUnit=void 0;var a={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function r(e){if("number"==typeof e)return{value:e,unit:"px"};var t,r=(e.match(/^[0-9.]*/)||"").toString();t=r.includes(".")?parseFloat(r):parseInt(r,10);var n=(e.match(/[^0-9]*$/)||"").toString();return a[n]?{value:t,unit:n}:(console.warn("React Spinners: "+e+" is not a valid css value. Defaulting to "+t+"px."),{value:t,unit:"px"})}t.parseLengthAndUnit=r,t.cssValue=function(e){var t=r(e);return""+t.value+t.unit}},8670:function(e,t,a){a.d(t,{T:function(){return l}});var r=a(6126),n=a.n(r),i=a(4297),o=a(7294),l=function(){return o.createElement("div",{style:{margin:"auto auto"}},o.createElement(n(),{color:i.Z.primary[170],loading:!0,size:30}))}},1768:function(e,t,a){a.r(t),a.d(t,{default:function(){return U}});var r=a(7294),n=a(5131),i=a(2256),o=a(1001),l=a(8670),c=a(5861),s=a(4687),d=a.n(s),u=a(1082),p=a(9692),m=a(6944),h=a(74),g=a(3989),f=a(4297),x=a(8135),b=p.default.div.withConfig({displayName:"styled__CameraContainer",componentId:"sc-6wgxfx-0"})(["display:flex;flex-direction:",";height:100%;max-width:",";.message-block{position:absolute;width:100vw;height:100vh;z-index:6;background-color:hsla(0,0%,0%,75%);.message{position:absolute;top:calc((100vh - ",") / 2);left:calc((100vw - ",") / 2);display:flex;flex-direction:column;justify-content:center;box-sizing:border-box;padding:",";width:",";height:",";z-index:7;background-color:white;border-style:solid;border-color:red;}button{margin:auto;}}.orientation-block{position:absolute;width:100vw;height:100%;z-index:11;max-width:",";display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:white;p{margin:"," "," 0 ",";}.title{font-weight:bold;font-size:",";}.hint{font-size:",";}@media screen and (orientation:landscape){display:",";}@media screen and (orientation:portrait){display:",";}}"],(function(e){return e.landscape?"row":"column"}),x.Z.desktopWidth,m.W.space5xl,m.W.space7xl,m.W.spaceMd,m.W.space7xl,m.W.space5xl,x.Z.desktopWidth,m.W.spaceMd,m.W.space2xs,m.W.space2xs,h.Z.textLg,h.Z.textMd,(function(e){return e.landscape?"none":"flex"}),(function(e){return e.landscape?"flex":"none"})),w=p.default.div.withConfig({displayName:"styled__CameraWrapper",componentId:"sc-6wgxfx-1"})(["height:",";width:100vw;max-width:",";background-color:black;video{width:100%;height:100%;}"],(function(e){return e.landscape?"100vh":"82%"}),x.Z.desktopWidth),v=p.default.button.withConfig({displayName:"styled__HelpButton",componentId:"sc-6wgxfx-2"})(["position:absolute;top:",";left:calc(50% - "," / 2);z-index:4;width:",";height:",";display:flex;justify-content:center;align-items:center;border-style:solid;border-width:1px;border-color:white;border-radius:999px;background-color:",";color:white;font-weight:600;font-size:",";cursor:pointer;"],m.W.spaceMd,m.W.spaceMd,m.W.spaceLg,m.W.spaceLg,f.Z.greys[400],h.Z.textXl),y=p.default.div.withConfig({displayName:"styled__CameraMenu",componentId:"sc-6wgxfx-3"})(["height:",";width:",";display:flex;flex-direction:",";justify-content:center;align-items:center;background-color:black;.thumbnail{margin:auto;width:",";max-height:",";grid-area:1 / 1 / 2 / 2;}.takePictureButton{margin:auto;grid-area:1 / 2 / 2 / 3;width:",";max-height:",";min-height:",";padding:0;border-style:none;border-radius:999px;cursor:pointer;background-color:white;&:hover,&:focus{background-color:",";}}.picture-preview{margin:auto;grid-area:1 / 3 / 2 / 4;.picture-count{position:absolute;width:",";height:",";display:flex;align-items:center;justify-content:center;color:white;font-weight:600;font-size:",";background-color:hsla(0,0%,0%,0.5);text-shadow:black 2px 2px;}.picture-container{width:",";height:",";border-radius:",";}img{width:100%;height:100%;}}"],(function(e){return e.landscape?"100vh":"18vh"}),(function(e){return e.landscape?"18vw":"100vw"}),(function(e){return e.landscape?"column":"row"}),m.W.space2xl,m.W.space2xl,m.W.space2xl,m.W.space2xl,m.W.space2xl,f.Z.greys[250],m.W.space2xl,m.W.space2xl,h.Z.textXl,m.W.space2xl,m.W.space2xl,g.Z.small),E=a(3223),_=a(3310),k=a(3175),I="30px",T="5px",F="20px",S="7px",N="black",W=p.default.div.withConfig({displayName:"styled__SpiritLevelStyles",componentId:"sc-1fix9u8-0"})(["position:absolute;top:0;left:0;height:",";width:",";margin:"," 0 0 ",";.garden{border:"," solid #ccc;border-radius:10px;background-color:rgba(255,255,255,0.4);position:absolute;top:0;left:0;height:",";max-height:80%;width:",";margin:"," 0 0 ",";}.ball{position:absolute;background:rgb(0,0,0);border-radius:100%;width:",";height:",";top:calc(50% - calc("," / 2));left:calc(50% - calc("," / 2));}.balltarget{position:absolute;background-color:rgba(0,0,0,0);border-radius:100%;border:"," solid white;height:calc("," + 5px);width:calc("," + 5px);top:calc(50% - "," / 2 - 1.5 * ",");left:calc(50% - "," / 2 - 1.5 * ",");}.output{position:absolute;top:250px;width:100%;color:black;font-size:100%;background:rgba(255,255,255,0.7);}.userclick{position:absolute;top:300px;width:100px;height:50px;background:cyan;display:none;}.arrow-left{position:absolute;width:0;height:0;border-top:"," solid transparent;border-bottom:"," solid transparent;border-left:"," solid ",";top:calc(50% - ",");left:0%;}.arrow-right{position:absolute;width:0;height:0;border-top:"," solid transparent;border-bottom:"," solid transparent;border-right:"," solid ",";top:calc(50% - ",");left:calc(100% - ",");}.arrow-down-upper{position:absolute;width:0;height:0;border-left:"," solid transparent;border-right:"," solid transparent;border-top:"," solid ",";top:calc(2 * ",");left:calc((100% - 2 * "," - "," / 2) / 2);}.arrow-down-lower{position:absolute;width:0;height:0;border-left:"," solid transparent;border-right:"," solid transparent;border-top:"," solid ",";top:calc(3 * ",");left:calc((100% - 2 * "," - "," / 2) / 2);}.arrow-up-upper{position:absolute;width:0;height:0;border-left:"," solid transparent;border-right:"," solid transparent;border-bottom:"," solid ",";top:calc(100% - 3 * ",");left:calc((100% - 2 * "," - "," / 2) / 2);}.arrow-up-lower{position:absolute;width:0;height:0;border-left:"," solid transparent;border-right:"," solid transparent;border-bottom:"," solid ",";top:calc(100% - 2 * ",");left:calc((100% - 2 * "," - "," / 2) / 2);}@media screen and (orientation:portrait){.ball{}.balltarget{}.arrow-left{}.arrow-right{}.arrow-down-upper{}.arrow-down-lower{}.arrow-up-upper{}.arrow-up-lower{}}@media screen and (orientation:landscape){}"],m.W.space5xl,m.W.spaceXl,m.W.space2xs,m.W.space2xs,T,m.W.space5xl,m.W.spaceXl,m.W.space2xs,m.W.space2xs,I,I,I,I,T,I,I,I,T,I,T,F,F,F,N,F,F,F,F,N,F,F,S,S,S,N,S,T,S,S,S,S,N,S,T,S,S,S,S,N,S,T,S,S,S,S,N,S,T,S),C=a(2830),K=a(7078),M=p.default.div.withConfig({displayName:"PermissionModal__Modal",componentId:"sc-7cn565-0"})(["position:absolute;top:calc(50vh - 100px);left:calc(50vw - 150px);width:300px;height:200px;box-sizing:border-box;z-index:10;padding:",";display:",";flex-direction:column;background-color:white;"],m.W.spaceSm,(function(e){return e.show?"flex":"none"}));function z(e){var t=e.setPermissionGranted,a=e.setMessage,n=(0,r.useState)(!1),i=n[0];n[1];function o(){return(o=(0,c.Z)(d().mark((function e(){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("requesting permission"),!DeviceOrientationEvent||"function"!=typeof DeviceOrientationEvent.requestPermission){e.next=6;break}return e.next=4,DeviceOrientationEvent.requestPermission();case 4:"granted"===e.sent?(console.log("granted"),t(!0)):(console.log("denied"),a("Du hast den Zugriff auf die Bewegungssensoren deines Gerätes verweigert."));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.createElement(r.Fragment,null,r.createElement(K.x,{zIndex:9}),r.createElement(M,{show:!i},r.createElement("p",null,"Wir benötigen deine Erlaubnis, um auf die Bewegungssensoren deines Gerätes zugreifen zu können."),r.createElement(C.z,{className:"primary",onClick:function(){!function(){o.apply(this,arguments)}()}},"Ok")))}function Z(e){var t=e.landscapeMode,a=e.setVertical,n=e.setHorizontal,i=(0,r.useRef)(),o=(0,r.useRef)(),l=(0,r.useRef)(),c=Math.PI/180;function s(e){var r,s,d,u,p,m,h,g,f,x,b,w,v,y,E=e.beta,_=e.gamma,k=e.alpha,I=(u=(s=E)?s*c:0,p=(d=_)?d*c:0,m=(r=k)?r*c:0,h=Math.cos(u),g=Math.cos(p),f=Math.cos(m),x=Math.sin(u),b=Math.sin(p),w=Math.sin(m),[f*g-w*x*b,-h*w,g*w*x+f*b,g*w+f*x*b,f*h,w*b-f*g*x,-h*b,x,h*g]),T=function(){if(void 0!==window.onorientationchange)return window.orientation}(),F=0,S=0,N=getComputedStyle(o.current),W=getComputedStyle(l.current),C=getComputedStyle(i.current),K=parseInt(N.width,10),M=parseInt(N.height,10),z=parseInt(N.getPropertyValue("border"),10),Z=(parseInt(W.getPropertyValue("border-top"),10),parseInt(C.height),(M-2*z)/2),H=(K-2*z)/2;0===T&&(v=I[8],F=v>0?Z-Z*v:Z+-1*Z*v,S=(y=I[6])>0?H-H*y*2:H+-1*H*y*2);-90===T&&(F=(v=I[8])>0?90-90*v:90+-90*v,S=(y=I[7])>0?30+-30*y:30-30*y);90===T&&(F=(v=I[8])>0?90-90*v:90+-90*v,S=(y=I[7])>0?30+30*y:30- -30*y);if(n(y),a(v),t?(i.current.style.top=F-30+"px",i.current.style.left=S-20+"px"):(i.current.style.top=F-10+"px",i.current.style.left=S-10+"px"),F>=Z-3&&F<=Z+3&&S>=H-2&&S<=H+2)i.current.style.backgroundColor="#00FF00";else{var D=230-160*(Math.abs(v)+Math.abs(y)),j=50*(Math.abs(v)+Math.abs(y));i.current.style.backgroundColor="rgb("+j.toFixed(0)+","+D.toFixed(0)+",0)"}}return(0,r.useEffect)((function(){var e="undefined"!=typeof DeviceOrientationEvent&&"function"==typeof DeviceOrientationEvent.requestPermission?(DeviceOrientationEvent.requestPermission().then((function(e){"granted"===e&&window.addEventListener("deviceorientation",s)})).catch(console.error),3):5;return 5===e&&window.addEventListener("deviceorientation",s),function(){window.removeEventListener("deviceorientation",s)}}),[]),r.createElement(W,null,r.createElement("div",{id:"container"},r.createElement("div",{className:"garden",ref:o},r.createElement("div",{className:"balltarget"}),r.createElement("div",{className:"ball",ref:i}),r.createElement("div",{className:"arrow-down-upper"}),r.createElement("div",{className:"arrow-down-lower"}),r.createElement("div",{className:"arrow-left",ref:l}),r.createElement("div",{className:"arrow-right"}),r.createElement("div",{className:"arrow-up-upper"}),r.createElement("div",{className:"arrow-up-lower"}))))}var H=a(3723),D=p.default.div.withConfig({displayName:"styled__HelpModalWrapper",componentId:"sc-17eqi91-0"})(["position:absolute;top:2.5%;left:5%;width:90%;height:95%;max-width:",";z-index:5;box-sizing:border-box;display:",";flex-direction:column;margin:auto;padding:",";background-color:hsla(0,100%,100%,90%);@media only screen and (min-width:","){left:auto;right:auto;}.text{height:calc((100% - 2 * 12px - 24px - 46px) * 0.25);margin:0;padding:",";border-style:solid;border-width:2px;border-color:",";border-radius:",";}.image{height:calc((100% - 2 * 12px - 24px - 46px) * 0.7);width:100%;margin-top:",";display:flex;justify-content:center;img{object-fit:contain !important;}.gatsby-image-wrapper{width:100%;height:auto;}}.close{position:absolute;right:8px;margin:0 0 0 0;padding:0;height:36px;width:36px;border-style:solid;border-radius:8px;border-color:pink;font-size:",";cursor:pointer;background-color:white;}.button-row{margin-top:",";display:flex;justify-content:space-between;}.help-block-container{display:flex;flex-direction:",";}.left{width:50%;padding:0 ",";}.right{width:50%;padding:0 ",";}.right{.gatsby-image-wrapper{max-height:90vh;}}"],x.Z.desktopWidth,(function(e){return e.show?"flex":"none"}),m.W.spaceXs,x.Z.desktopWidth,m.W.spaceXs,f.Z.greys[500],g.Z.medium,m.W.spaceMd,h.Z.textXl,m.W.space2xs,(function(e){return e.horizontal?"row":"column"}),m.W.spaceXs,m.W.spaceXs),j=p.default.div.withConfig({displayName:"styled__HelpBlock",componentId:"sc-17eqi91-1"})(["padding:0 ",";max-height:70vh;height:70vh;display:flex;flex-direction:column;justify-content:center;align-self:center;border-style:solid;border-width:2px;border-color:",";border-radius:",";background-color:white;p{font-size:",";margin:"," 0;}.gatsby-image-wrapper{div{width:auto;}img{}}@media (max-height:380px){p{font-size:",";}}"],m.W.spaceXs,f.Z.greys[500],g.Z.medium,h.Z.textLg,m.W.spaceXs,h.Z.textMd),O=(0,p.default)(H.G).withConfig({displayName:"styled__SmallImage",componentId:"sc-17eqi91-2"})(["width:",";margin:",";img{width:",";object-fit:contain;}"],(function(e){return e.width}),(function(e){return"0 0 0 calc(0.5 * (100% - "+e.width+"))"}),(function(e){return e.width}));function B(e){switch(e){case 0:return 2;case 1:return 5;case 2:case 3:return 7}}function P(e){var t=e.page,a=e.left,n=e.texts,i=e.images;switch(t){case 0:return a?r.createElement(j,null,r.createElement("p",null,n[0]),r.createElement(O,{image:i[0],width:"140px"})):r.createElement(j,null,r.createElement("p",null,n[1]),r.createElement(O,{image:i[1],width:"130px"}));case 1:return a?r.createElement(j,null,r.createElement("p",null,n[2])):r.createElement(j,null,r.createElement(O,{image:i[3],width:"220px"}));case 2:return a?r.createElement(j,null,r.createElement("p",null,n[3])):r.createElement(j,null,r.createElement(O,{image:i[4],width:"220px"}));case 3:return a?r.createElement(j,null,r.createElement("p",null,n[4])):r.createElement(j,null,r.createElement(O,{image:i[5],width:"220px"}));case 4:return a?r.createElement(j,null,r.createElement("p",null,n[5])):r.createElement(j,null,r.createElement(O,{image:i[1],width:"220px"}));case 5:return a?r.createElement(j,null,r.createElement("p",null,n[6])):r.createElement(j,{style:{backgroundColor:"#9e9e9e"}},r.createElement(O,{image:i[6],width:"220px"}));case 6:return a?r.createElement(j,null,r.createElement("p",null,n[7])):r.createElement(j,{style:{backgroundColor:"#a8a9a9"}},r.createElement(O,{image:i[7],width:"250px"}))}}var L=a(5054);function Q(e){var t=e.cms,a=e.show,n=e.close,i=e.pages,o=e.pos,l=e.target,c=(0,r.useState)(0),s=c[0],d=c[1],u=function(e){var t=e.target,a=e.pos,r=e.cms;switch(a){case 0:return[r.Kamera_Texte.Koerper.Text_1,r.Kamera_Texte.Koerper.Text_2];case 1:return[r.Kamera_Texte.Fessel.Text_1.replace("{target}",(0,_.ZQ)(t)),r.Kamera_Texte.Fessel.Text_2.replace("{target}",(0,_.ZQ)(t)),r.Kamera_Texte.Fessel.Text_3.replace("{target}",(0,_.ZQ)(t)),r.Kamera_Texte.Fessel.Text_4.replace("{target}",(0,_.ZQ)(t)),r.Kamera_Texte.Fessel.Text_5.replace("{target}",(0,_.ZQ)(t))];case 2:return[r.Kamera_Texte.Huf.Text_1.replace("{target}",(0,_.ZQ)(t)).replace("{mode}","breitesten"),r.Kamera_Texte.Huf.Text_2.replace("{target}",(0,_.ZQ)(t)).replace("{mode}","breitesten"),r.Kamera_Texte.Huf.Text_3.replace("{target}",(0,_.ZQ)(t)).replace("{mode}","breitesten"),r.Kamera_Texte.Huf.Text_4.replace("{target}",(0,_.ZQ)(t)).replace("{mode}","breitesten"),r.Kamera_Texte.Huf.Text_5.replace("{target}",(0,_.ZQ)(t)).replace("{mode}","breitesten"),r.Kamera_Texte.Huf.Text_6.replace("{target}",(0,_.ZQ)(t)).replace("{mode}","breitesten"),r.Kamera_Texte.Huf.Text_7.replace("{target}",(0,_.ZQ)(t)).replace("{mode}","breitesten"),r.Kamera_Texte.Huf.Text_8.replace("{target}",(0,_.ZQ)(t)).replace("{mode}","breitesten")];case 3:return[r.Kamera_Texte.Huf.Text_1.replace("{target}",(0,_.ZQ)(t)).replace("{mode}","längsten"),r.Kamera_Texte.Huf.Text_2.replace("{target}",(0,_.ZQ)(t)).replace("{mode}","längsten"),r.Kamera_Texte.Huf.Text_3.replace("{target}",(0,_.ZQ)(t)).replace("{mode}","längsten"),r.Kamera_Texte.Huf.Text_4.replace("{target}",(0,_.ZQ)(t)).replace("{mode}","längsten"),r.Kamera_Texte.Huf.Text_5.replace("{target}",(0,_.ZQ)(t)).replace("{mode}","längsten"),r.Kamera_Texte.Huf.Text_6.replace("{target}",(0,_.ZQ)(t)).replace("{mode}","längsten"),r.Kamera_Texte.Huf.Text_7.replace("{target}",(0,_.ZQ)(t)).replace("{mode}","längsten"),r.Kamera_Texte.Huf.Text_8.replace("{target}",(0,_.ZQ)(t)).replace("{mode}","längsten")]}}({target:l,pos:o,cms:t}),p=function(e){var t=e.target,a=e.pos,r=e.cms;switch(a){case 0:return[r.Kamera_Texte.Koerper.Bild_1.localFile.childImageSharp.gatsbyImageData,r.Kamera_Texte.Koerper.Bild_2.localFile.childImageSharp.gatsbyImageData];case 1:return[r.Thumbnails[(0,_.iH)(t)].localFile.childImageSharp.gatsbyImageData,r.Kamera_Texte.Fessel.Bild_1.localFile.childImageSharp.gatsbyImageData,r.Kamera_Texte.Fessel.Bild_2.localFile.childImageSharp.gatsbyImageData,r.Kamera_Texte.Fessel.Bild_3.localFile.childImageSharp.gatsbyImageData,r.Kamera_Texte.Fessel.Bild_4.localFile.childImageSharp.gatsbyImageData];case 2:return[r.Thumbnails[(0,_.iH)(t)].localFile.childImageSharp.gatsbyImageData,r.Kamera_Texte.Huf.Bild_Breite.localFile.childImageSharp.gatsbyImageData,r.Kamera_Texte.Huf.Bild_1.localFile.childImageSharp.gatsbyImageData,r.Kamera_Texte.Huf.Bild_2.localFile.childImageSharp.gatsbyImageData,r.Kamera_Texte.Huf.Bild_3.localFile.childImageSharp.gatsbyImageData,r.Kamera_Texte.Huf.Bild_4.localFile.childImageSharp.gatsbyImageData,r.Kamera_Texte.Huf.Bild_5.localFile.childImageSharp.gatsbyImageData,r.Kamera_Texte.Huf.Bild_6.localFile.childImageSharp.gatsbyImageData];case 3:return[r.Thumbnails[(0,_.iH)(t)].localFile.childImageSharp.gatsbyImageData,r.Kamera_Texte.Huf.Bild_Laenge.localFile.childImageSharp.gatsbyImageData,r.Kamera_Texte.Huf.Bild_1.localFile.childImageSharp.gatsbyImageData,r.Kamera_Texte.Huf.Bild_2.localFile.childImageSharp.gatsbyImageData,r.Kamera_Texte.Huf.Bild_3.localFile.childImageSharp.gatsbyImageData,r.Kamera_Texte.Huf.Bild_4.localFile.childImageSharp.gatsbyImageData,r.Kamera_Texte.Huf.Bild_5.localFile.childImageSharp.gatsbyImageData,r.Kamera_Texte.Huf.Bild_6.localFile.childImageSharp.gatsbyImageData]}}({target:l,pos:o,cms:t}),m=i-1;function h(e){var t="next"===e?s+1:s-1;d(t<0?m:t>m?0:t),console.log(t)}return 1===o?r.createElement(r.Fragment,null,r.createElement(K.x,{style:{display:a?"flex":"none"}}),r.createElement(D,{show:a,horizontal:1!==o},r.createElement("div",{className:"blur"}),r.createElement("button",{className:"close",onClick:n},r.createElement(L.T,{stroke:"red",strokeWidth:"3px"})),r.createElement("p",{className:"text"},u[s]),r.createElement("div",{className:"image"},r.createElement(H.G,{image:p[s]})),r.createElement("div",{className:"button-row"},r.createElement(C.z,{className:"secondary",onClick:function(){return h("previous")}},"Vorherige"),r.createElement(C.z,{className:"primary",onClick:function(){return h("next")}},"Nächste")))):0===o?r.createElement(r.Fragment,null,r.createElement(K.x,{style:{display:a?"flex":"none"}}),r.createElement(D,{show:a,horizontal:!0},r.createElement("button",{className:"close",onClick:n},r.createElement(L.T,{stroke:"red",strokeWidth:"3px"})),r.createElement("div",{className:"help-block-container"},r.createElement("div",{className:"left"},r.createElement(j,null,r.createElement("p",null,u[s]))),r.createElement("div",{className:"right"},r.createElement(j,{style:{backgroundColor:"#a8a9a9"}},r.createElement(O,{image:p[s]})))),r.createElement("div",{className:"button-row"},r.createElement(C.z,{className:"secondary",onClick:function(){return h("previous")}},"Vorherige"),r.createElement(C.z,{className:"primary",onClick:function(){return h("next")}},"Nächste")))):2===o||3===o?r.createElement(r.Fragment,null,r.createElement(K.x,{style:{display:a?"flex":"none"}}),r.createElement(D,{show:a,horizontal:!0},r.createElement("button",{className:"close",onClick:n},r.createElement(L.T,{stroke:"red",strokeWidth:"3px"})),r.createElement("div",{className:"help-block-container"},r.createElement("div",{className:"left"},P({page:s,left:!0,texts:u,images:p})),r.createElement("div",{className:"right"},P({page:s,left:!1,texts:u,images:p}))),r.createElement("div",{className:"button-row"},r.createElement(C.z,{className:"secondary",onClick:function(){return h("previous")}},"Vorherige"),r.createElement(C.z,{className:"primary",onClick:function(){return h("next")}},"Nächste")))):void 0}var R=a(3918),V=function(e){e.fill,e.stroke,e.strokeLinecap,e.strokeLineJoin,e.strokeWidth;return r.createElement("svg",{style:{width:"123px",height:"108px"}},r.createElement("g",null,r.createElement("path",{class:"st0",d:"M11.1,0h35.63c3.05,0,5.85,1.25,7.85,3.25c2.03,2.03,3.25,4.8,3.25,7.85v31.46h-3.19V12.18H3.15v75.26l0,0 h7.61v11.61c0,1.58,0.27,3.1,0.77,4.51H11.1c-3.05,0-5.85-1.25-7.85-3.25C1.22,98.27,0,95.51,0,92.45V11.1 c0-3.05,1.25-5.85,3.25-7.85C5.28,1.22,8.04,0,11.1,0L11.1,0L11.1,0z M94.95,33.45c-0.37-5.8-2.64-10.56-6.06-13.97 c-3.64-3.63-8.59-5.74-13.94-5.93l2.46,2.95c0.73,0.88,0.62,2.18-0.26,2.91c-0.88,0.73-2.18,0.62-2.91-0.26l-5.72-6.85l0,0 c-0.72-0.86-0.62-2.14,0.22-2.88l6.71-5.89c0.86-0.75,2.16-0.66,2.91,0.19c0.75,0.86,0.66,2.16-0.19,2.91l-3.16,2.78 c6.43,0.21,12.4,2.75,16.8,7.13c4.07,4.06,6.79,9.69,7.25,16.49l2.58-3.08c0.73-0.88,2.04-0.99,2.91-0.26 c0.88,0.73,0.99,2.04,0.26,2.91l-5.73,6.84c-0.72,0.86-1.99,0.99-2.87,0.29l-6.98-5.56c-0.89-0.71-1.04-2.01-0.33-2.91 c0.71-0.89,2.01-1.04,2.91-0.33L94.95,33.45L94.95,33.45z M122.88,59.7v35.63c0,3.05-1.25,5.85-3.25,7.85 c-2.03,2.03-4.8,3.25-7.85,3.25h-78.9c-3.05,0-5.85-1.25-7.85-3.25c-2.03-2.03-3.25-4.8-3.25-7.85V59.7c0-3.05,1.25-5.85,3.25-7.85 c2.03-2.03,4.79-3.25,7.85-3.25h78.9c3.05,0,5.85,1.25,7.85,3.25C121.66,53.88,122.88,56.64,122.88,59.7L122.88,59.7L122.88,59.7z M35.41,77.49c0,2.51-2.03,4.57-4.57,4.57c-2.51,0-4.57-2.03-4.57-4.57c0-2.51,2.03-4.57,4.57-4.57 C33.36,72.92,35.41,74.95,35.41,77.49L35.41,77.49L35.41,77.49z M37.88,51.75v51.49h72.82V51.75H37.88L37.88,51.75z"})))},q=a(7933);a(8668);function X(e){var t=e.horse,a=e.target,n=e.pos,i=e.addImage,o=e.cms,l=1!==n,s=(0,r.useState)(),p=(s[0],s[1]),m=(0,r.useState)(new RegExp("iPhone|iPad|iPod").test("undefined"!=typeof window?navigator.userAgent:"")),h=m[0],g=(m[1],(0,r.useState)(!0)),f=g[0],x=g[1],I=(0,r.useState)({}),T=I[0],F=I[1],S=(0,r.useState)(),N=S[0],W=S[1],K=(0,r.useRef)(),M=(0,r.useRef)(),H=(0,r.useState)([]),D=H[0],j=H[1],O=(0,r.useState)(0),P=O[0],L=O[1],X=(0,r.useState)(0),G=X[0],A=X[1],U=a?null!=a&&a.startsWith("leg")?o.Thumbnails[(0,_.rr)(n)].localFile.childImageSharp.gatsbyImageData:o.Thumbnails.Koerper.localFile.childImageSharp.gatsbyImageData:null,J=(0,r.useState)(!0),$=J[0],Y=J[1],ee=(0,r.useState)(""),te=ee[0],ae=ee[1],re=(0,r.useState)(0),ne=re[0];re[1];(0,r.useEffect)((function(){var e,t;(console.log("IOS?: ",h),!h||h&&f)&&(null===(e=Screen.orientation)||void 0===e||e.addEventListener("change",(function(e){p(Screen.orientation.type)})),p(null===(t=Screen.orientation)||void 0===t?void 0:t.type))}),[f]),(0,r.useEffect)((function(){le().then((function(e){F(e.mediaRecorder),W(e.stream)})).catch((function(e){ae("Du hast den Zugriff auf deine Kamera (temporär) verweigert. Bitte erlaube uns die Nutzung der Kamera, damit du Bilder von deinem Pferd aufnehmen kannst."),console.error(e)}))}),[]),(0,r.useEffect)((function(){return console.log(N),function(){console.log(N);try{console.log(N),console.log(N.getTracks()),N.getTracks()[0].stop()}catch(e){console.log(e)}}}),[N]),(0,r.useEffect)((function(){return T.onerror=function(e){console.log("Error recording stream"),console.log(e.error)},console.log("MediaRecorder ready"),function(){console.log(N)}}),[T]),(0,r.useEffect)((function(){console.log("MediaRecorder state: "+T.state)}),[T.state]),(0,r.useEffect)((function(){if(D.length>=3){try{N.getTracks()[0].stop()}catch(e){console.log("could not dismount camera",e)}(0,u.navigate)(E.Z.photoGuide(t.id))}}),[D]);var ie=function(e){K.current&&(K.current.srcObject=e)},oe=function(e){return new Promise((function(t,a){try{var r=new MediaRecorder(e);console.log("New MediaRecorder created"),t(r)}catch(n){console.log("Error in creating new MediaRecorder"),a(n)}}))},le=function(){var e=(0,c.Z)(d().mark((function e(){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=(0,c.Z)(d().mark((function e(t,a){var r,n;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise(function(){var e=(0,c.Z)(d().mark((function e(t,a){var r;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:{ideal:"environment"}}});case 3:r=e.sent,console.log("Stream fetched"),t(r),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error in fetching stream"),a(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a){return e.apply(this,arguments)}}()).catch((function(e){return console.error(e)}));case 3:return r=e.sent,ie(r),e.next=7,oe(r);case 7:n=e.sent,F(n),t({mediaRecorder:n,stream:r}),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(0),q.Tb(e.t0),console.log("Error in initializing MediaRecorder of fetching media devices stream"),a(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,a){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.createElement(b,{landscape:l,orientSupport:!!window.Screen.orientation},r.createElement(R.V,null),r.createElement("div",{className:"message-block",style:{display:te?"flex":"none"}},r.createElement("div",{className:"message"},te," ",r.createElement(C.z,{onClick:function(){(0,u.navigate)(-1)},className:"primary",style:{display:0===ne?"flex":"none"}},"Zurück"),r.createElement(C.z,{onClick:function(){ae("")},className:"primary",style:{display:1===ne?"flex":"none"}},"Okay"))),r.createElement("div",{className:"orientation-block"},r.createElement(V,null),r.createElement("p",{className:"title"},"Bitte drehe dein Smartphone."),r.createElement("p",{className:"hint"},'Falls das automatische Drehen auf deinem Smartphone deaktiviert ist, kannst du es in den Einstellungen unter "Bedienungshilfen" aktivieren. Oder in den'," ",r.createElement("a",{href:"https://support.google.com/android/answer/9083864?hl=de"},"Schnelleinstellungen"),".")),r.createElement(v,{onClick:function(){Y(!0)}},"?"),r.createElement(Q,{cms:o,pages:B(n),show:$,close:function(){Y(!1)},pos:n,target:a}),r.createElement(w,{landscape:l},r.createElement("video",{className:"recorder",ref:K,autoPlay:!0,playsInline:!0,muted:!0}),h&&!f?r.createElement(z,{setPermissionGranted:x,setMessage:ae}):r.createElement(Z,{landscapeMode:l,setHorizontal:L,setVertical:A})),r.createElement(y,{landscape:l},r.createElement(k.C,{image:U,className:"thumbnail"}),r.createElement("button",{onClick:function(){console.log(G,P);try{var e=M.current,t=K.current,a=function(e){var t=e.videoWidth/e.videoHeight,a=e.offsetWidth,r=e.offsetHeight;a/r>t?a=r*t:r=a/t;return{width:a,height:r}}(t),r=a.width,n=a.height;e.width=r,e.height=n,e.getContext("2d").drawImage(t,0,0,r,n);var o=e.toDataURL("image/png");if(!(o.length>7))return void q.uT("image is not valid");console.log(o),console.log(D),i(o),j((function(e){return e.concat(o)}))}catch(l){q.Tb(l)}},className:"takePictureButton"}),r.createElement("div",{className:"picture-preview"},r.createElement("span",{className:"picture-count"},D.length),r.createElement("div",{className:"picture-container"},D.map((function(e,t){if(t===D.length-1)return r.createElement("img",{src:e,alt:"Previews of the taken pictures",key:"picture-preview"+t})}))))),r.createElement("canvas",{ref:M,style:{display:"none"}}))}var G=a(3808),A=function(e){var t=e.cms,a=e.horseId,n=(0,i.v9)((function(e){return e.auth.user})),c=(0,i.v9)((function(e){return e.appState})),s=(0,i.I0)(),d=c.selectedHorse,u=d.pos,p=d.target,m=(0,o.Op)({userId:null==n?void 0:n.id,horseId:a},{refetchOnMountOrArgChange:!0,skip:!a}),h=m.data;return m.isLoading?r.createElement(l.T,null):r.createElement(X,{horse:h,target:p,pos:u,addImage:function(e){s((0,G.fo)({temporaryImage:e}))},cms:t})};function U(e){var t=e.id,a=e.data,i=e.location;return r.createElement(n.Z,{location:i,wrapContent:!1,showHeader:!1,horseId:t},r.createElement(A,{cms:a.strapiKamera,horseId:t}))}},6513:function(e,t,a){a.d(t,{K:function(){return n}});var r=a(7294),n=function(e){var t=e.fill,a=e.stroke,n=e.strokeLinecap,i=e.strokeLinejoin,o=e.strokeWidth,l=e.height,c={fill:t||"none",stroke:a||"#000",strokeLinecap:n||"round",strokeLinejoin:i||"round",strokeWidth:o||"1px",width:e.width||24,height:l||24};return r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",style:c},r.createElement("polyline",{points:"9 11 12 14 22 4"}),r.createElement("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"}))}},4827:function(e,t,a){a.d(t,{M:function(){return s}});var r=a(6513),n=a(4297),i=a(7294),o=a(9692),l=a(3989),c=o.default.div.withConfig({displayName:"Checkmark__Styles",componentId:"sc-8z0cmn-0"})(["background-color:white;border-radius:",";height:24px;"],l.Z.small);function s(e){var t=e.completed;return i.createElement(c,null,i.createElement(r.K,{stroke:t?n.Z.lightGreen[80]:n.Z.greys[500],strokeWidth:t?"2px":"1px"}))}},3175:function(e,t,a){a.d(t,{C:function(){return s}});var r=a(7294),n=a(3723),i=a(9692),o=a(4827),l=(a(6513),a(4297),i.default.div.withConfig({displayName:"ImageWithSkeleton__Overlay",componentId:"sc-15uh7ef-0"})(["position:absolute;display:",";justify-content:center;align-items:center;height:64px;width:64px;z-index:2;background-color:hsla(0,0%,30%,70%);border-radius:10px;font-size:64px;color:lightgreen;"],(function(e){return e.completed?"flex":"none"}))),c=i.default.div.withConfig({displayName:"ImageWithSkeleton__ImageCheckmark",componentId:"sc-15uh7ef-1"})(["display:",";position:absolute;margin:-20px 0 0 48px;font-size:1.2rem;"],(function(e){return e.show?"flex":"none"}));function s(e){var t=e.image,a=e.height,i=e.width,s=e.className,d=e.showCheckmark,u=e.checked;return t?r.createElement(r.Fragment,null,r.createElement(l,{completed:u},"✓"),r.createElement(n.G,{image:t,className:s,alt:""}),r.createElement(c,{show:d},r.createElement(o.M,{completed:u}))):r.createElement("div",{style:{height:a,width:i}})}},3310:function(e,t,a){function r(e){switch(e){case"leg0":return"Bein_VR";case"leg1":return"Bein_VL";case"leg2":return"Bein_HR";case"leg3":return"Bein_HL";case"torso":return"Koerper"}}function n(e){switch(e){case"0":case 0:return"Koerper";case"1":case 1:return"Fessel";case"2":case 2:return"Hufbreite";case"3":case 3:return"Huflaenge"}}function i(e){switch(e){case"leg0":return"vorderen rechten";case"leg1":return"vorderen linken";case"leg2":return"hinteren rechten";case"leg3":return"hinteren linken"}}a.d(t,{ZQ:function(){return i},iH:function(){return r},rr:function(){return n}})}}]);
//# sourceMappingURL=component---src-pages-pferde-[id]-kamera-tsx-34540175fe600a5d5cb3.js.map