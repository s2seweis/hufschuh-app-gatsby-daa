(self.webpackChunkhufschuhapp_frontend=self.webpackChunkhufschuhapp_frontend||[]).push([[677],{312:function(e,t,n){"use strict";n.d(t,{z:function(){return a}});var o=n(8117),i=n(6944);const a=o.default.div.withConfig({displayName:"styled__Styles",componentId:"sc-yxqlie-0"})(["width:100%;form{padding:"," 0 "," 0;}"],i.W.spaceMd,i.W.spaceXs)},102:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var o=n(7294),i=n(8117),a=n(3989),s=n(6944),r=n(4297),l=n(5977),c=(n(4051),n(4517)),d=n(312);const u=i.default.div.withConfig({displayName:"ImageSelect__ImageSelectWrapper",componentId:"sc-q09y50-0"})(["width:","px;display:flex;flex-direction:row;"," &{flex-wrap:wrap;width:100%;label{display:none;}}justify-content:space-between;.image-select-option{display:flex;flex-direction:column;justify-content:space-between;align-items:center;text-align:center;"," &{width:47%;padding:1.5%;}}"],(e=>e.width),l.N,l.N),h=i.default.div.withConfig({displayName:"ImageSelect__ImageRadio",componentId:"sc-q09y50-1"})(["width:25vw;max-width:120px;"," &{width:25vw;}margin-right:",";display:flex;flex-direction:column;justify-content:flex-start;border-style:solid;border-radius:",";border-width:2px;border-color:",";box-shadow:1px 1px 4px ",";cursor:pointer;background-color:transparent;font-size:1rem;"," &{width:100%;max-width:none;border-style:none;margin:0;}"," &{img{filter:none;-webkit-filter:none;-moz-filter:none;-o-filter:none;-ms-filter:none;}}img{width:100%;-webkit-filter:",";-moz-filter:",";-o-filter:",";-ms-filter:",";filter:",";}.checkmark{position:absolute;width:",";height:",";display:flex;justify-content:center;align-items:center;align-self:",";margin:"," ",";border-radius:999px;background-color:",";opacity:",";box-shadow:0px 0px 6px 4px white;"," &{background-color:",";color:white;}}"],d.z,s.W.space2xs,a.Z.medium,(e=>e.checked?r.Z.pineGreen[80]:"white"),r.Z.greys[200],l.N,c.K,(e=>!e.oneChosen||e.oneChosen&&e.checked?"grayscale(0%)":"grayscale(100%)"),(e=>!e.oneChosen||e.oneChosen&&e.checked?"grayscale(0%)":"grayscale(100%)"),(e=>!e.oneChosen||e.oneChosen&&e.checked?"grayscale(0%)":"grayscale(100%)"),(e=>!e.oneChosen||e.oneChosen&&e.checked?"grayscale(0%)":"grayscale(100%)"),(e=>!e.oneChosen||e.oneChosen&&e.checked?"grayscale(0%)":"grayscale(100%)"),s.W.spaceMd,s.W.spaceMd,(e=>"left"===e.checkmarkHorizontalPosition?"flex-start":"flex-end"),s.W.space3xs,s.W.space3xs,r.Z.pineGreen[40],(e=>e.checked?"1":"0"),l.N,r.Z.green.primary);function p(e){let{images:t,options:n,onChange:i,value:a,checkmarkHorizontalPosition:s}=e;return o.createElement(u,null,n.map(((e,n)=>o.createElement("div",{className:"image-select-option",key:"image-select"+e},o.createElement(h,{type:"radio",id:"id"+e,value:e,checked:e===a,onClick:()=>{i(e)},checkmarkHorizontalPosition:s,oneChosen:!1!==a},t[n],o.createElement("span",{className:"checkmark"},"✓")),o.createElement("label",{htmlFor:"id"+e},e)))))}},4051:function(e,t,n){"use strict";n.d(t,{B:function(){return w},X:function(){return x}});var o=n(7294),i=n(8117),a=n(3989),s=n(74),r=n(4297),l=n(6944);const c=i.default.input.withConfig({displayName:"Input__StyledInput",componentId:"sc-1900mwl-0"})(["padding:"," ",";border-style:solid;border-radius:",";border-color:",";border-width:1px;font-family:Montserrat,Helvetica,sans-serif;font-size:",";color:",";&:focus{border-style:solid;border-radius:",";border-color:",";border-width:1px;box-shadow:0 0 0 1px ",";outline:none;}"],l.W.space2xs,l.W.spaceSm,a.Z.small,r.Z.greys[250],s.Z.textMd,r.Z.text.secondary,a.Z.small,r.Z.primary[120],r.Z.primary[120]);function d(e){return o.createElement(c,e)}var u=n(1287),h=n(102),p=n(3723),m=n(9161),f=n(3773);const g=i.default.ul.withConfig({displayName:"styled__HoofshoeRanking",componentId:"sc-1rzxvwg-0"})(["display:",";flex-direction:column;margin:"," 0 0 0 !important;padding:0;list-style:none;p{margin:0;font-weight:bold;}li + li{margin-top:",";}li{display:grid;grid-template-columns:auto 132px;grid-template-rows:1fr;grid-column-gap:0px;grid-row-gap:0px;}.shoe-name{grid-area:1 / 1 / 2 / 2;margin-right:",";}.rating{min-width:138px;grid-area:1 / 2 / 2 / 3;svg{width:18px;height:18px;}span{margin-right:",";}}"],(e=>e.show?"flex":"none"),l.W.spaceSm,l.W.spaceXs,l.W.spaceXs,l.W.space2xs);var y=n(9936),v=n(757),b=n(674);function x(e){const{type:t,images:n,state:i,setState:a,name:s,hint:l,showRanking:c,starSelectTitle:b,...x}=e;switch(t){case"boolean":return o.createElement("label",{style:{width:"56px"}},o.createElement(y.default,{onChange:()=>(0,m.Lp)({setState:a,name:s}),checked:i[s]}));case"textarea":return o.createElement("textarea",{value:x.value,name:s,onChange:e=>(0,m._p)(e,i,a),className:"textarea",rows:6});case"select":{var w,k;const e=(0,v.Q)(null===(w=x.options)||void 0===w?void 0:w.strapi_json_value);return console.log("select, ",e,x),o.createElement(o.Fragment,null,o.createElement(u.ZP,Object.assign({},x,{defaultValue:x.value,options:e,onChange:t=>(0,m.Wo)(t,s,i,a,e),value:e[null===(k=x.value)||void 0===k?void 0:k.index],isSearchable:!1})),l)}case"image-select":return o.createElement(h.Z,Object.assign({},x,{images:[o.createElement(p.G,{image:n[0].childImageSharp.gatsbyImageData,alt:"image select choice 1"}),o.createElement(p.G,{image:n[1].childImageSharp.gatsbyImageData,alt:"image select choice 1"}),o.createElement(p.G,{image:n[2].childImageSharp.gatsbyImageData,alt:"image select choice 1"})],checkmarkHorizontalPosition:"right",onChange:e=>(0,m._9)({newState:e,setState:a,property:s}),value:i[s],options:x.options.strapi_json_value}));case"star-rating":{var C;const e=x.options.strapi_json_value,t=Object.keys(e).map((t=>({value:e[t],label:e[t],color:r.Z.text.primary,isFluid:!0})));return o.createElement(o.Fragment,null,o.createElement("div",{className:"input-group"},o.createElement(u.ZP,{onChange:e=>(0,m.pJ)(e,"Letzte_Hufschuhe",i,a),value:i[s+"_selected"],defaultValue:i[s+"_selected"],isMulti:!0,isClearable:"true",name:"Letzte Hufschuhe",options:t})),o.createElement(g,{className:"hoofshoe-rating",show:c},o.createElement("p",null,b),i.Letzte_Hufschuhe&&(null===(C=Object.keys(i.Letzte_Hufschuhe))||void 0===C?void 0:C.map(((e,t)=>{const n=i.Letzte_Hufschuhe[e];return o.createElement("li",{key:"Hufschuh-Bewertung"+t},o.createElement("span",{className:"shoe-name"},n.name),o.createElement(f.i,{key:"rating-"+t,size:5,className:"rating",ratingValue:n.rating,onClick:e=>(0,m.Vm)(n.name,e,i,a)}))})))))}default:return o.createElement(d,Object.assign({onChange:e=>(0,m._p)(e,i,a),name:s,type:t},x))}}function w(e){let{children:t,title:n,subtext:i,help:a,hint:s,showHint:r,insertAfterInput:c}=e;const{0:d,1:u}=(0,o.useState)(!1),h=(0,o.useRef)(),{0:p,1:m}=(0,o.useState)(0);return(0,o.useEffect)((()=>{let e=document.createElement("p");e.textContent=a,e.style.opacity="0",h.current.append(e),m(e.offsetHeight),e.remove()})),o.createElement("div",{className:"input-group",ref:h},o.createElement("label",null,n," ",o.createElement(b.M,{onClick:()=>u((e=>!e)),className:"help-button",type:"button",style:{display:" "!==a?"flex":"none"}},"?")),o.createElement("p",{className:"subtext"},i),t,o.createElement("p",{className:"hint",style:{display:r?"flex":"none"}},s),o.createElement("p",{className:"help-text",style:{height:d?p:"0",margin:d?"0 0 "+l.W.space2xs+" 0":"0"}},a),c)}},9161:function(e,t,n){"use strict";function o(e,t,n){e.persist(),n((t=>({...t,[e.target.name]:e.target.value})))}function i(e,t){let n;return e.forEach(((e,o)=>{e.value===t&&(n=o)})),n}function a(e,t,n,o,a){o((n=>({...n,[t]:{value:e.value,index:i(a,e.value)}})))}function s(e,t,n,o){console.log(e);let i={};e.map((e=>{var t;let o=null===(t=n.Letzte_Hufschuhe[e.value])||void 0===t?void 0:t.rating;i[e.label]={name:e.value,rating:o||1}})),o((n=>({...n,[t]:i,[t+"_selected"]:e})))}function r(e,t,n,o,i){const a=Object.assign({},n.Letzte_Hufschuhe);a[e].rating=t,o((e=>({...e,Letzte_Hufschuhe:a})))}function l(e){let{newState:t,property:n,setState:o}=e;o((e=>({...e,[n]:t})))}function c(e){let{setState:t,name:n}=e;t((e=>({...e,[n]:!e[n]})))}n.d(t,{Lp:function(){return c},Vm:function(){return r},Wo:function(){return a},_9:function(){return l},_p:function(){return o},pJ:function(){return s}})},4517:function(e,t,n){"use strict";n.d(t,{K:function(){return l}});var o=n(8117),i=n(6944),a=n(4297),s=n(74),r=n(3989);const l=o.default.form.withConfig({displayName:"styled__FactFileForm",componentId:"sc-8tazwc-0"})(["display:flex;flex-direction:column;padding-bottom:1rem;overflow-x:hidden;.input-group + *{margin-top:",";}.input-group{display:flex;flex-direction:column;label{display:flex;justify-content:space-between;align-items:center;}}textarea{width:100%;box-sizing:border-box;padding:"," ",";border-style:solid;border-radius:",";border-color:",";border-width:1px;font-family:Montserrat,Helvetica,sans-serif;font-size:",";color:",";&:focus{border-style:solid;border-radius:",";border-color:",";border-width:1px;box-shadow:0 0 0 1px ",";outline:none;}}.insert-field{width:100%;margin:"," 0;}label{font-weight:600;margin-bottom:",";}p{margin:"," 0 0 0;}.bottom-row{display:flex;justify-content:space-between;align-items:center;margin-right:",";.fill-out{color:#ff0000;display:none;}button{margin-left:auto;}}.help-text{margin:"," 0 "," 0 !important;overflow:hidden;transition:all 300ms ease-in-out;}.subtext{overflow:hidden;transition:all 300ms ease-in-out;margin:0 0 "," 0;}"],i.W.spaceMd,i.W.space2xs,i.W.spaceSm,r.Z.small,a.Z.greys[250],s.Z.textMd,a.Z.text.secondary,r.Z.small,a.Z.primary[120],a.Z.primary[120],i.W.spaceXs,i.W.space3xs,i.W.spaceSm,i.W.spaceXs,i.W.spaceXs,i.W.spaceXs,i.W.space2xs)},5977:function(e,t,n){"use strict";n.d(t,{N:function(){return c}});var o=n(8117),i=n(6944),a=n(3989),s=n(4297),r=n(74),l=n(2056);const c=o.default.div.withConfig({displayName:"styled__PhotoGuideWrapper",componentId:"sc-7z4m5s-0"})(["display:flex;flex-direction:column;padding:"," 0;section{width:100%;padding:",";box-sizing:border-box;display:flex;flex-direction:column;border-radius:",";.icon{position:absolute;z-index:2;display:flex;justify-content:center;align-items:center;padding:",";margin:-"," 0 0 -12px;background-color:white;border-radius:",";box-shadow:"," 2px 2px 5px;}.content{display:flex;flex-direction:row;justify-content:space-between;padding-top:",";}}* + section{margin-top:",";}.thumbnails{background-color:",";.content{justify-content:space-between;}.hint{width:40%;font-weight:bold;font-size:",";}.gatsby-image-wrapper{height:",";width:",";@media (min-width:","){height:",";width:",";}}}.instructions{background-color:",";p{margin:0;}}.image-preview{background-color:",";.content{width:100%;flex-wrap:wrap;justify-content:center;button{margin:"," auto 0 auto;}.single-image-container{display:flex;justify-content:center;img{width:50%;}}}.placeholder{display:flex;flex-direction:column;justify-content:center;align-items:center;p{margin-top:0;text-align:center;}}}.selection-confirmed{margin:0;}.button-row{display:flex;flex-direction:column;align-items:center;width:100%;.button-row-button{display:flex;flex-direction:row;justify-content:space-between;align-items:center;button{margin:1rem;}}}"],i.W.spaceMd,i.W.spaceMd,a.Z.medium,i.W.space3xs,i.W.spaceLg,a.Z.medium,s.Z.greys[600],i.W.spaceMd,i.W.spaceMd,s.Z.red.background,r.Z.textLg,i.W.space2xl,i.W.space2xl,l.Z.big,i.W.space3xl,i.W.space3xl,s.Z.yellow.background,s.Z.green.background,i.W.spaceMd)},2056:function(e,t){"use strict";t.Z={small:"360px",w400:"400px",big:"800px"}},3773:function(e,t,n){"use strict";var o=n(5893),i=n(7294),a=function(){return a=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},a.apply(this,arguments)};function s(e,t,n){if(n||2===arguments.length)for(var o,i=0,a=t.length;i<a;i++)!o&&i in t||(o||(o=Array.prototype.slice.call(t,0,i)),o[i]=t[i]);return e.concat(o||Array.prototype.slice.call(t))}function r(e){var t=e.size,n=void 0===t?25:t,i=e.SVGstrokeColor,s=void 0===i?"currentColor":i,r=e.SVGstorkeWidth,l=void 0===r?0:r,c=e.SVGclassName,d=void 0===c?"star-svg":c,u=e.SVGstyle;return o.jsx("svg",a({className:d,style:u,stroke:s,fill:"currentColor",strokeWidth:l,viewBox:"0 0 24 24",width:n,height:n,xmlns:"http://www.w3.org/2000/svg"},{children:o.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"})}))}function l(e,t){switch(t.type){case"PointerMove":return a(a({},e),{hoverValue:t.payload,hoverIndex:t.index});case"PointerLeave":return a(a({},e),{ratingValue:e.ratingValue,hoverIndex:0,hoverValue:null});case"MouseClick":return a(a({},e),{valueIndex:e.hoverIndex,ratingValue:t.payload});default:return e}}!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&o.firstChild?o.insertBefore(i,o.firstChild):o.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}("body,html{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;margin:0;padding:0}.style-module_starRatingWrap__q-lJC{display:inline-block;touch-action:none}.style-module_simpleStarRating__nWUxf{display:inline-block;overflow:hidden;position:relative;touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap}.style-module_fillIcons__6---A{display:inline-block;overflow:hidden;position:absolute;top:0;white-space:nowrap}.style-module_emptyIcons__Bg-FZ{display:inline-block}.style-module_tooltip__tKc3i{background-color:#333;border-radius:5px;color:#fff;display:inline-block;padding:5px 15px;vertical-align:middle}"),t.i=function(e){var t,n,c=e.onClick,d=e.onPointerMove,u=e.onPointerEnter,h=e.onPointerLeave,p=e.initialValue,m=void 0===p?0:p,f=e.iconsCount,g=void 0===f?5:f,y=e.size,v=void 0===y?40:y,b=e.readonly,x=void 0!==b&&b,w=e.rtl,k=void 0!==w&&w,C=e.customIcons,S=void 0===C?[]:C,_=e.allowFraction,W=void 0!==_&&_,M=e.style,E=e.className,I=void 0===E?"react-simple-star-rating":E,N=e.transition,j=void 0!==N&&N,z=e.allowHover,H=void 0===z||z,Z=e.disableFillHover,L=void 0!==Z&&Z,T=e.fillIcon,V=void 0===T?null:T,D=e.fillColor,G=void 0===D?"#ffbc0b":D,P=e.fillColorArray,O=void 0===P?[]:P,R=e.fillStyle,A=e.fillClassName,B=void 0===A?"filled-icons":A,F=e.emptyIcon,X=void 0===F?null:F,U=e.emptyColor,q=void 0===U?"#cccccc":U,K=e.emptyStyle,J=e.emptyClassName,$=void 0===J?"empty-icons":J,Q=e.showTooltip,Y=void 0!==Q&&Q,ee=e.tooltipDefaultText,te=void 0===ee?"Your Rate":ee,ne=e.tooltipArray,oe=void 0===ne?[]:ne,ie=e.tooltipStyle,ae=e.tooltipClassName,se=void 0===ae?"react-simple-star-rating-tooltip":ae,re=e.SVGclassName,le=void 0===re?"star-svg":re,ce=e.titleSeparator,de=void 0===ce?"out of":ce,ue=e.SVGstyle,he=e.SVGstorkeWidth,pe=void 0===he?0:he,me=e.SVGstrokeColor,fe=void 0===me?"currentColor":me,ge=i.useReducer(l,{hoverIndex:0,valueIndex:0,ratingValue:0,hoverValue:null}),ye=ge[0],ve=ye.ratingValue,be=ye.hoverValue,xe=ye.hoverIndex,we=ye.valueIndex,ke=ge[1],Ce=i.useMemo((function(){return"ontouchstart"in window||navigator.maxTouchPoints>0}),[]),Se=i.useMemo((function(){return W?2*g:g}),[W,g]),_e=i.useMemo((function(){return m>Se?0:W||Math.floor(m)===m?Math.round(m/g*100):2*Math.ceil(m)*10}),[W,m,g,Se]),We=i.useMemo((function(){return(W?2*m-1:m-1)||0}),[W,m]),Me=i.useCallback((function(e){return g%2!=0?e/2/10:e/g}),[g]),Ee=function(e){for(var t=e.clientX,n=e.currentTarget.children[0].getBoundingClientRect(),o=n.left,i=n.right,a=n.width,s=k?i-t:t-o,r=Se,l=Math.round(a/Se),c=0;c<=Se;c+=1)if(s<=l*c){r=0===c&&s<l?0:c;break}var u=r-1;r>0&&(ke({type:"PointerMove",payload:100*r/Se,index:u}),d&&be&&d(Me(be),u,e))},Ie=function(e){be&&(ke({type:"MouseClick",payload:be}),c&&c(Me(be),xe,e))},Ne=i.useMemo((function(){if(H){if(L){var e=ve&&ve||_e;return be&&be>e?be:e}return be&&be||ve&&ve||_e}return ve&&ve||_e}),[H,L,be,ve,_e]);i.useEffect((function(){oe.length>Se&&console.error("tooltipArray Array length is bigger then Icons Count length.")}),[oe.length,Se]);var je=i.useCallback((function(e){return be&&e[xe]||ve&&e[we]||m&&e[We]}),[be,xe,ve,we,m,We]),ze=i.useMemo((function(){return be&&Me(be)||ve&&Me(ve)||m&&Me(_e)}),[be,Me,ve,m,_e]);return o.jsxs("span",a({className:"style-module_starRatingWrap__q-lJC",style:{direction:"".concat(k?"rtl":"ltr")}},{children:[o.jsxs("span",a({className:"".concat("style-module_simpleStarRating__nWUxf"," ").concat(I),style:a({cursor:x?"":"pointer"},M),onPointerMove:x?void 0:Ee,onPointerEnter:x?void 0:function(e){u&&u(e),Ce&&Ee(e)},onPointerLeave:x?void 0:function(e){Ce&&Ie(),ke({type:"PointerLeave"}),h&&h(e)},onClick:x?void 0:Ie,"aria-hidden":"true"},{children:[o.jsx("span",a({className:"".concat("style-module_emptyIcons__Bg-FZ"," ").concat($),style:a({color:q},K)},{children:s([],Array(g),!0).map((function(e,t){var n;return o.jsx(i.Fragment,{children:(null===(n=S[t])||void 0===n?void 0:n.icon)||X||o.jsx(r,{SVGclassName:le,SVGstyle:ue,SVGstorkeWidth:pe,SVGstrokeColor:fe,size:v})},t)}))})),o.jsx("span",a({className:"".concat("style-module_fillIcons__6---A"," ").concat(B),style:a((t={},t[k?"right":"left"]=0,t.color=je(O)||G,t.transition=j?"width .2s ease, color .2s ease":"",t.width="".concat(Ne,"%"),t),R),title:"".concat(be&&Me(be)||Me(_e)," ").concat(de," ").concat(g)},{children:s([],Array(g),!0).map((function(e,t){var n;return o.jsx(i.Fragment,{children:(null===(n=S[t])||void 0===n?void 0:n.icon)||V||o.jsx(r,{SVGclassName:le,SVGstyle:ue,SVGstorkeWidth:pe,SVGstrokeColor:fe,size:v})},t)}))}))]})),Y&&o.jsx("span",a({className:"".concat("style-module_tooltip__tKc3i"," ").concat(se),style:a((n={},n[k?"marginRight":"marginLeft"]=20,n),ie)},{children:(oe.length>0?je(oe):ze)||te}))]}))}},3231:function(e,t,n){var o=n(7294);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i.apply(this,arguments)}var a=o.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},o.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),s=o.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},o.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function r(e){if(7===e.length)return e;for(var t="#",n=1;n<4;n+=1)t+=e[n]+e[n];return t}function l(e,t,n,o,i){return function(e,t,n,o,i){var a=(e-n)/(t-n);if(0===a)return o;if(1===a)return i;for(var s="#",r=1;r<6;r+=2){var l=parseInt(o.substr(r,2),16),c=parseInt(i.substr(r,2),16),d=Math.round((1-a)*l+a*c).toString(16);1===d.length&&(d="0"+d),s+=d}return s}(e,t,n,r(o),r(i))}var c=function(e){function t(t){e.call(this,t);var n=t.height,o=t.width,i=t.checked;this.t=t.handleDiameter||n-2,this.i=Math.max(o-n,o-(n+this.t)/2),this.o=Math.max(0,(n-this.t)/2),this.state={h:i?this.i:this.o},this.l=0,this.u=0,this.p=this.p.bind(this),this.v=this.v.bind(this),this.g=this.g.bind(this),this.k=this.k.bind(this),this.M=this.M.bind(this),this.m=this.m.bind(this),this.T=this.T.bind(this),this.$=this.$.bind(this),this.C=this.C.bind(this),this.D=this.D.bind(this),this.O=this.O.bind(this),this.S=this.S.bind(this)}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.componentDidMount=function(){this.W=!0},t.prototype.componentDidUpdate=function(e){e.checked!==this.props.checked&&this.setState({h:this.props.checked?this.i:this.o})},t.prototype.componentWillUnmount=function(){this.W=!1},t.prototype.I=function(e){this.H.focus(),this.setState({R:e,j:!0,B:Date.now()})},t.prototype.L=function(e){var t=this.state,n=t.R,o=t.h,i=(this.props.checked?this.i:this.o)+e-n;t.N||e===n||this.setState({N:!0});var a=Math.min(this.i,Math.max(this.o,i));a!==o&&this.setState({h:a})},t.prototype.U=function(e){var t=this.state,n=t.h,o=t.N,i=t.B,a=this.props.checked,s=(this.i+this.o)/2;this.setState({h:this.props.checked?this.i:this.o});var r=Date.now()-i;(!o||r<250||a&&n<=s||!a&&n>=s)&&this.A(e),this.W&&this.setState({N:!1,j:!1}),this.l=Date.now()},t.prototype.p=function(e){e.preventDefault(),"number"==typeof e.button&&0!==e.button||(this.I(e.clientX),window.addEventListener("mousemove",this.v),window.addEventListener("mouseup",this.g))},t.prototype.v=function(e){e.preventDefault(),this.L(e.clientX)},t.prototype.g=function(e){this.U(e),window.removeEventListener("mousemove",this.v),window.removeEventListener("mouseup",this.g)},t.prototype.k=function(e){this.X=null,this.I(e.touches[0].clientX)},t.prototype.M=function(e){this.L(e.touches[0].clientX)},t.prototype.m=function(e){e.preventDefault(),this.U(e)},t.prototype.$=function(e){Date.now()-this.l>50&&(this.A(e),Date.now()-this.u>50&&this.W&&this.setState({j:!1}))},t.prototype.C=function(){this.u=Date.now()},t.prototype.D=function(){this.setState({j:!0})},t.prototype.O=function(){this.setState({j:!1})},t.prototype.S=function(e){this.H=e},t.prototype.T=function(e){e.preventDefault(),this.H.focus(),this.A(e),this.W&&this.setState({j:!1})},t.prototype.A=function(e){var t=this.props;(0,t.onChange)(!t.checked,e,t.id)},t.prototype.render=function(){var e=this.props,t=e.checked,n=e.disabled,a=e.className,s=e.offColor,r=e.onColor,c=e.offHandleColor,d=e.onHandleColor,u=e.checkedIcon,h=e.uncheckedIcon,p=e.checkedHandleIcon,m=e.uncheckedHandleIcon,f=e.boxShadow,g=e.activeBoxShadow,y=e.height,v=e.width,b=e.borderRadius,x=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}(e,["checked","disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","checkedHandleIcon","uncheckedHandleIcon","boxShadow","activeBoxShadow","height","width","borderRadius","handleDiameter"]),w=this.state,k=w.h,C=w.N,S=w.j,_={position:"relative",display:"inline-block",textAlign:"left",opacity:n?.5:1,direction:"ltr",borderRadius:y/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},W={height:y,width:v,margin:Math.max(0,(this.t-y)/2),position:"relative",background:l(k,this.i,this.o,s,r),borderRadius:"number"==typeof b?b:y/2,cursor:n?"default":"pointer",WebkitTransition:C?null:"background 0.25s",MozTransition:C?null:"background 0.25s",transition:C?null:"background 0.25s"},M={height:y,width:Math.min(1.5*y,v-(this.t+y)/2+1),position:"relative",opacity:(k-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:C?null:"opacity 0.25s",MozTransition:C?null:"opacity 0.25s",transition:C?null:"opacity 0.25s"},E={height:y,width:Math.min(1.5*y,v-(this.t+y)/2+1),position:"absolute",opacity:1-(k-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:C?null:"opacity 0.25s",MozTransition:C?null:"opacity 0.25s",transition:C?null:"opacity 0.25s"},I={height:this.t,width:this.t,background:l(k,this.i,this.o,c,d),display:"inline-block",cursor:n?"default":"pointer",borderRadius:"number"==typeof b?b-1:"50%",position:"absolute",transform:"translateX("+k+"px)",top:Math.max(0,(y-this.t)/2),outline:0,boxShadow:S?g:f,border:0,WebkitTransition:C?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:C?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:C?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"},N={height:this.t,width:this.t,opacity:Math.max(2*(1-(k-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:C?null:"opacity 0.25s",MozTransition:C?null:"opacity 0.25s",transition:C?null:"opacity 0.25s"},j={height:this.t,width:this.t,opacity:Math.max(2*((k-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:C?null:"opacity 0.25s",MozTransition:C?null:"opacity 0.25s",transition:C?null:"opacity 0.25s"};return o.createElement("div",{className:a,style:_},o.createElement("div",{className:"react-switch-bg",style:W,onClick:n?null:this.T,onMouseDown:function(e){return e.preventDefault()}},u&&o.createElement("div",{style:M},u),h&&o.createElement("div",{style:E},h)),o.createElement("div",{className:"react-switch-handle",style:I,onClick:function(e){return e.preventDefault()},onMouseDown:n?null:this.p,onTouchStart:n?null:this.k,onTouchMove:n?null:this.M,onTouchEnd:n?null:this.m,onTouchCancel:n?null:this.O},m&&o.createElement("div",{style:N},m),p&&o.createElement("div",{style:j},p)),o.createElement("input",i({},{type:"checkbox",role:"switch","aria-checked":t,checked:t,disabled:n,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},x,{ref:this.S,onFocus:this.D,onBlur:this.O,onKeyUp:this.C,onChange:this.$})))},t}(o.Component);c.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:a,checkedIcon:s,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56},t.default=c},9936:function(e,t,n){e.exports=n(3231)}}]);
//# sourceMappingURL=981bc3541c812f57ecf73f7a33a1e55214997bf1-384e05dd31309def6d2e.js.map