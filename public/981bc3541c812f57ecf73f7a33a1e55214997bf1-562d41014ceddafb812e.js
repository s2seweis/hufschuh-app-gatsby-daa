(self.webpackChunkhufschuhapp_frontend=self.webpackChunkhufschuhapp_frontend||[]).push([[677],{7069:function(e,t,n){"use strict";var i=n(5893),o=n(7294),r=function(){return r=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)};function a(e,t,n){if(n||2===arguments.length)for(var i,o=0,r=t.length;o<r;o++)!i&&o in t||(i||(i=Array.prototype.slice.call(t,0,o)),i[o]=t[o]);return e.concat(i||Array.prototype.slice.call(t))}function s(e){var t=e.size,n=void 0===t?25:t,o=e.SVGstrokeColor,a=void 0===o?"currentColor":o,s=e.SVGstorkeWidth,l=void 0===s?0:s,c=e.SVGclassName,u=void 0===c?"star-svg":c,d=e.SVGstyle;return i.jsx("svg",r({className:u,style:d,stroke:a,fill:"currentColor",strokeWidth:l,viewBox:"0 0 24 24",width:n,height:n,xmlns:"http://www.w3.org/2000/svg"},{children:i.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"})}))}function l(e,t){switch(t.type){case"PointerMove":return r(r({},e),{hoverValue:t.payload,hoverIndex:t.index});case"PointerLeave":return r(r({},e),{ratingValue:e.ratingValue,hoverIndex:0,hoverValue:null});case"MouseClick":return r(r({},e),{valueIndex:e.hoverIndex,ratingValue:t.payload});default:return e}}!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&i.firstChild?i.insertBefore(o,i.firstChild):i.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}("body,html{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;margin:0;padding:0}.style-module_starRatingWrap__q-lJC{display:inline-block;touch-action:none}.style-module_simpleStarRating__nWUxf{display:inline-block;overflow:hidden;position:relative;touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap}.style-module_fillIcons__6---A{display:inline-block;overflow:hidden;position:absolute;top:0;white-space:nowrap}.style-module_emptyIcons__Bg-FZ{display:inline-block}.style-module_tooltip__tKc3i{background-color:#333;border-radius:5px;color:#fff;display:inline-block;padding:5px 15px;vertical-align:middle}"),t.i=function(e){var t,n,c=e.onClick,u=e.onPointerMove,d=e.onPointerEnter,h=e.onPointerLeave,p=e.initialValue,f=void 0===p?0:p,m=e.iconsCount,g=void 0===m?5:m,y=e.size,v=void 0===y?40:y,b=e.readonly,x=void 0!==b&&b,w=e.rtl,k=void 0!==w&&w,C=e.customIcons,S=void 0===C?[]:C,_=e.allowFraction,W=void 0!==_&&_,M=e.style,E=e.className,j=void 0===E?"react-simple-star-rating":E,I=e.transition,N=void 0!==I&&I,z=e.allowHover,Z=void 0===z||z,H=e.disableFillHover,T=void 0!==H&&H,L=e.fillIcon,V=void 0===L?null:L,O=e.fillColor,D=void 0===O?"#ffbc0b":O,G=e.fillColorArray,P=void 0===G?[]:G,R=e.fillStyle,A=e.fillClassName,B=void 0===A?"filled-icons":A,F=e.emptyIcon,X=void 0===F?null:F,U=e.emptyColor,K=void 0===U?"#cccccc":U,J=e.emptyStyle,$=e.emptyClassName,q=void 0===$?"empty-icons":$,Q=e.showTooltip,Y=void 0!==Q&&Q,ee=e.tooltipDefaultText,te=void 0===ee?"Your Rate":ee,ne=e.tooltipArray,ie=void 0===ne?[]:ne,oe=e.tooltipStyle,re=e.tooltipClassName,ae=void 0===re?"react-simple-star-rating-tooltip":re,se=e.SVGclassName,le=void 0===se?"star-svg":se,ce=e.titleSeparator,ue=void 0===ce?"out of":ce,de=e.SVGstyle,he=e.SVGstorkeWidth,pe=void 0===he?0:he,fe=e.SVGstrokeColor,me=void 0===fe?"currentColor":fe,ge=o.useReducer(l,{hoverIndex:0,valueIndex:0,ratingValue:0,hoverValue:null}),ye=ge[0],ve=ye.ratingValue,be=ye.hoverValue,xe=ye.hoverIndex,we=ye.valueIndex,ke=ge[1],Ce=o.useMemo((function(){return"ontouchstart"in window||navigator.maxTouchPoints>0}),[]),Se=o.useMemo((function(){return W?2*g:g}),[W,g]),_e=o.useMemo((function(){return f>Se?0:W||Math.floor(f)===f?Math.round(f/g*100):2*Math.ceil(f)*10}),[W,f,g,Se]),We=o.useMemo((function(){return(W?2*f-1:f-1)||0}),[W,f]),Me=o.useCallback((function(e){return g%2!=0?e/2/10:e/g}),[g]),Ee=function(e){for(var t=e.clientX,n=e.currentTarget.children[0].getBoundingClientRect(),i=n.left,o=n.right,r=n.width,a=k?o-t:t-i,s=Se,l=Math.round(r/Se),c=0;c<=Se;c+=1)if(a<=l*c){s=0===c&&a<l?0:c;break}var d=s-1;s>0&&(ke({type:"PointerMove",payload:100*s/Se,index:d}),u&&be&&u(Me(be),d,e))},je=function(e){be&&(ke({type:"MouseClick",payload:be}),c&&c(Me(be),xe,e))},Ie=o.useMemo((function(){if(Z){if(T){var e=ve&&ve||_e;return be&&be>e?be:e}return be&&be||ve&&ve||_e}return ve&&ve||_e}),[Z,T,be,ve,_e]);o.useEffect((function(){ie.length>Se&&console.error("tooltipArray Array length is bigger then Icons Count length.")}),[ie.length,Se]);var Ne=o.useCallback((function(e){return be&&e[xe]||ve&&e[we]||f&&e[We]}),[be,xe,ve,we,f,We]),ze=o.useMemo((function(){return be&&Me(be)||ve&&Me(ve)||f&&Me(_e)}),[be,Me,ve,f,_e]);return i.jsxs("span",r({className:"style-module_starRatingWrap__q-lJC",style:{direction:"".concat(k?"rtl":"ltr")}},{children:[i.jsxs("span",r({className:"".concat("style-module_simpleStarRating__nWUxf"," ").concat(j),style:r({cursor:x?"":"pointer"},M),onPointerMove:x?void 0:Ee,onPointerEnter:x?void 0:function(e){d&&d(e),Ce&&Ee(e)},onPointerLeave:x?void 0:function(e){Ce&&je(),ke({type:"PointerLeave"}),h&&h(e)},onClick:x?void 0:je,"aria-hidden":"true"},{children:[i.jsx("span",r({className:"".concat("style-module_emptyIcons__Bg-FZ"," ").concat(q),style:r({color:K},J)},{children:a([],Array(g),!0).map((function(e,t){var n;return i.jsx(o.Fragment,{children:(null===(n=S[t])||void 0===n?void 0:n.icon)||X||i.jsx(s,{SVGclassName:le,SVGstyle:de,SVGstorkeWidth:pe,SVGstrokeColor:me,size:v})},t)}))})),i.jsx("span",r({className:"".concat("style-module_fillIcons__6---A"," ").concat(B),style:r((t={},t[k?"right":"left"]=0,t.color=Ne(P)||D,t.transition=N?"width .2s ease, color .2s ease":"",t.width="".concat(Ie,"%"),t),R),title:"".concat(be&&Me(be)||Me(_e)," ").concat(ue," ").concat(g)},{children:a([],Array(g),!0).map((function(e,t){var n;return i.jsx(o.Fragment,{children:(null===(n=S[t])||void 0===n?void 0:n.icon)||V||i.jsx(s,{SVGclassName:le,SVGstyle:de,SVGstorkeWidth:pe,SVGstrokeColor:me,size:v})},t)}))}))]})),Y&&i.jsx("span",r({className:"".concat("style-module_tooltip__tKc3i"," ").concat(ae),style:r((n={},n[k?"marginRight":"marginLeft"]=20,n),oe)},{children:(ie.length>0?Ne(ie):ze)||te}))]}))}},9316:function(e,t,n){var i=n(7294);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o.apply(this,arguments)}var r=i.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},i.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),a=i.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},i.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function s(e){if(7===e.length)return e;for(var t="#",n=1;n<4;n+=1)t+=e[n]+e[n];return t}function l(e,t,n,i,o){return function(e,t,n,i,o){var r=(e-n)/(t-n);if(0===r)return i;if(1===r)return o;for(var a="#",s=1;s<6;s+=2){var l=parseInt(i.substr(s,2),16),c=parseInt(o.substr(s,2),16),u=Math.round((1-r)*l+r*c).toString(16);1===u.length&&(u="0"+u),a+=u}return a}(e,t,n,s(i),s(o))}var c=function(e){function t(t){e.call(this,t);var n=t.height,i=t.width,o=t.checked;this.t=t.handleDiameter||n-2,this.i=Math.max(i-n,i-(n+this.t)/2),this.o=Math.max(0,(n-this.t)/2),this.state={h:o?this.i:this.o},this.l=0,this.u=0,this.p=this.p.bind(this),this.v=this.v.bind(this),this.g=this.g.bind(this),this.k=this.k.bind(this),this.M=this.M.bind(this),this.m=this.m.bind(this),this.T=this.T.bind(this),this.$=this.$.bind(this),this.C=this.C.bind(this),this.D=this.D.bind(this),this.O=this.O.bind(this),this.S=this.S.bind(this)}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.componentDidMount=function(){this.W=!0},t.prototype.componentDidUpdate=function(e){e.checked!==this.props.checked&&this.setState({h:this.props.checked?this.i:this.o})},t.prototype.componentWillUnmount=function(){this.W=!1},t.prototype.I=function(e){this.H.focus(),this.setState({R:e,j:!0,B:Date.now()})},t.prototype.L=function(e){var t=this.state,n=t.R,i=t.h,o=(this.props.checked?this.i:this.o)+e-n;t.N||e===n||this.setState({N:!0});var r=Math.min(this.i,Math.max(this.o,o));r!==i&&this.setState({h:r})},t.prototype.U=function(e){var t=this.state,n=t.h,i=t.N,o=t.B,r=this.props.checked,a=(this.i+this.o)/2;this.setState({h:this.props.checked?this.i:this.o});var s=Date.now()-o;(!i||s<250||r&&n<=a||!r&&n>=a)&&this.A(e),this.W&&this.setState({N:!1,j:!1}),this.l=Date.now()},t.prototype.p=function(e){e.preventDefault(),"number"==typeof e.button&&0!==e.button||(this.I(e.clientX),window.addEventListener("mousemove",this.v),window.addEventListener("mouseup",this.g))},t.prototype.v=function(e){e.preventDefault(),this.L(e.clientX)},t.prototype.g=function(e){this.U(e),window.removeEventListener("mousemove",this.v),window.removeEventListener("mouseup",this.g)},t.prototype.k=function(e){this.X=null,this.I(e.touches[0].clientX)},t.prototype.M=function(e){this.L(e.touches[0].clientX)},t.prototype.m=function(e){e.preventDefault(),this.U(e)},t.prototype.$=function(e){Date.now()-this.l>50&&(this.A(e),Date.now()-this.u>50&&this.W&&this.setState({j:!1}))},t.prototype.C=function(){this.u=Date.now()},t.prototype.D=function(){this.setState({j:!0})},t.prototype.O=function(){this.setState({j:!1})},t.prototype.S=function(e){this.H=e},t.prototype.T=function(e){e.preventDefault(),this.H.focus(),this.A(e),this.W&&this.setState({j:!1})},t.prototype.A=function(e){var t=this.props;(0,t.onChange)(!t.checked,e,t.id)},t.prototype.render=function(){var e=this.props,t=e.checked,n=e.disabled,r=e.className,a=e.offColor,s=e.onColor,c=e.offHandleColor,u=e.onHandleColor,d=e.checkedIcon,h=e.uncheckedIcon,p=e.checkedHandleIcon,f=e.uncheckedHandleIcon,m=e.boxShadow,g=e.activeBoxShadow,y=e.height,v=e.width,b=e.borderRadius,x=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&-1===t.indexOf(i)&&(n[i]=e[i]);return n}(e,["checked","disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","checkedHandleIcon","uncheckedHandleIcon","boxShadow","activeBoxShadow","height","width","borderRadius","handleDiameter"]),w=this.state,k=w.h,C=w.N,S=w.j,_={position:"relative",display:"inline-block",textAlign:"left",opacity:n?.5:1,direction:"ltr",borderRadius:y/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},W={height:y,width:v,margin:Math.max(0,(this.t-y)/2),position:"relative",background:l(k,this.i,this.o,a,s),borderRadius:"number"==typeof b?b:y/2,cursor:n?"default":"pointer",WebkitTransition:C?null:"background 0.25s",MozTransition:C?null:"background 0.25s",transition:C?null:"background 0.25s"},M={height:y,width:Math.min(1.5*y,v-(this.t+y)/2+1),position:"relative",opacity:(k-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:C?null:"opacity 0.25s",MozTransition:C?null:"opacity 0.25s",transition:C?null:"opacity 0.25s"},E={height:y,width:Math.min(1.5*y,v-(this.t+y)/2+1),position:"absolute",opacity:1-(k-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:C?null:"opacity 0.25s",MozTransition:C?null:"opacity 0.25s",transition:C?null:"opacity 0.25s"},j={height:this.t,width:this.t,background:l(k,this.i,this.o,c,u),display:"inline-block",cursor:n?"default":"pointer",borderRadius:"number"==typeof b?b-1:"50%",position:"absolute",transform:"translateX("+k+"px)",top:Math.max(0,(y-this.t)/2),outline:0,boxShadow:S?g:m,border:0,WebkitTransition:C?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:C?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:C?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"},I={height:this.t,width:this.t,opacity:Math.max(2*(1-(k-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:C?null:"opacity 0.25s",MozTransition:C?null:"opacity 0.25s",transition:C?null:"opacity 0.25s"},N={height:this.t,width:this.t,opacity:Math.max(2*((k-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:C?null:"opacity 0.25s",MozTransition:C?null:"opacity 0.25s",transition:C?null:"opacity 0.25s"};return i.createElement("div",{className:r,style:_},i.createElement("div",{className:"react-switch-bg",style:W,onClick:n?null:this.T,onMouseDown:function(e){return e.preventDefault()}},d&&i.createElement("div",{style:M},d),h&&i.createElement("div",{style:E},h)),i.createElement("div",{className:"react-switch-handle",style:j,onClick:function(e){return e.preventDefault()},onMouseDown:n?null:this.p,onTouchStart:n?null:this.k,onTouchMove:n?null:this.M,onTouchEnd:n?null:this.m,onTouchCancel:n?null:this.O},f&&i.createElement("div",{style:I},f),p&&i.createElement("div",{style:N},p)),i.createElement("input",o({},{type:"checkbox",role:"switch","aria-checked":t,checked:t,disabled:n,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},x,{ref:this.S,onFocus:this.D,onBlur:this.O,onKeyUp:this.C,onChange:this.$})))},t}(i.Component);c.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:r,checkedIcon:a,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56},t.default=c},7534:function(e,t,n){e.exports=n(9316)},312:function(e,t,n){"use strict";n.d(t,{z:function(){return r}});var i=n(9692),o=n(6944),r=i.default.div.withConfig({displayName:"styled__Styles",componentId:"sc-173b8i9-0"})(["width:100%;form{padding:"," 0 "," 0;}"],o.W.spaceMd,o.W.spaceXs)},4554:function(e,t,n){"use strict";n.d(t,{p:function(){return r}});var i=n(9692),o=n(6944),r=i.default.ul.withConfig({displayName:"styled__HoofshoeRanking",componentId:"sc-50yhmu-0"})(["display:",";flex-direction:column;margin:"," 0 0 0 !important;padding:0;list-style:none;p{margin:0;font-weight:bold;}li + li{margin-top:",";}li{display:grid;grid-template-columns:auto 132px;grid-template-rows:1fr;grid-column-gap:0px;grid-row-gap:0px;}.shoe-name{grid-area:1 / 1 / 2 / 2;margin-right:",";}.rating{min-width:138px;grid-area:1 / 2 / 2 / 3;svg{width:18px;height:18px;}span{margin-right:",";}}"],(function(e){return e.show?"flex":"none"}),o.W.spaceSm,o.W.spaceXs,o.W.spaceXs,o.W.space2xs)},102:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var i=n(7294),o=n(9692),r=n(3989),a=n(6944),s=n(4297),l=n(5977),c=(n(925),n(4517)),u=n(312),d=o.default.div.withConfig({displayName:"ImageSelect__ImageSelectWrapper",componentId:"sc-demx2z-0"})(["width:","px;display:flex;flex-direction:row;"," &{flex-wrap:wrap;width:100%;label{display:none;}}justify-content:space-between;.image-select-option{display:flex;flex-direction:column;justify-content:space-between;align-items:center;text-align:center;"," &{width:47%;padding:1.5%;}}"],(function(e){return e.width}),l.N,l.N),h=o.default.div.withConfig({displayName:"ImageSelect__ImageRadio",componentId:"sc-demx2z-1"})(["width:25vw;max-width:120px;"," &{width:25vw;}margin-right:",";display:flex;flex-direction:column;justify-content:flex-start;border-style:solid;border-radius:",";border-width:2px;border-color:",";box-shadow:1px 1px 4px ",";cursor:pointer;background-color:transparent;font-size:1rem;"," &{width:100%;max-width:none;border-style:none;margin:0;}"," &{img{filter:none;-webkit-filter:none;-moz-filter:none;-o-filter:none;-ms-filter:none;}}img{width:100%;-webkit-filter:",";-moz-filter:",";-o-filter:",";-ms-filter:",";filter:",";}.checkmark{position:absolute;width:",";height:",";display:flex;justify-content:center;align-items:center;align-self:",";margin:"," ",";border-radius:999px;background-color:",";opacity:",";box-shadow:0px 0px 6px 4px white;"," &{background-color:",";color:white;}}"],u.z,a.W.space2xs,r.Z.medium,(function(e){return e.checked?s.Z.pineGreen[80]:"white"}),s.Z.greys[200],l.N,c.K,(function(e){return!e.oneChosen||e.oneChosen&&e.checked?"grayscale(0%)":"grayscale(100%)"}),(function(e){return!e.oneChosen||e.oneChosen&&e.checked?"grayscale(0%)":"grayscale(100%)"}),(function(e){return!e.oneChosen||e.oneChosen&&e.checked?"grayscale(0%)":"grayscale(100%)"}),(function(e){return!e.oneChosen||e.oneChosen&&e.checked?"grayscale(0%)":"grayscale(100%)"}),(function(e){return!e.oneChosen||e.oneChosen&&e.checked?"grayscale(0%)":"grayscale(100%)"}),a.W.spaceMd,a.W.spaceMd,(function(e){return"left"===e.checkmarkHorizontalPosition?"flex-start":"flex-end"}),a.W.space3xs,a.W.space3xs,s.Z.pineGreen[40],(function(e){return e.checked?"1":"0"}),l.N,s.Z.green.primary);function p(e){var t=e.images,n=e.options,o=e.onChange,r=e.value,a=e.checkmarkHorizontalPosition;return i.createElement(d,null,n.map((function(e,n){return i.createElement("div",{className:"image-select-option",key:"image-select"+e},i.createElement(h,{type:"radio",id:"id"+e,value:e,checked:e===r,onClick:function(){o(e)},checkmarkHorizontalPosition:a,oneChosen:!1!==r},t[n],i.createElement("span",{className:"checkmark"},"✓")),i.createElement("label",{htmlFor:"id"+e},e))})))}},925:function(e,t,n){"use strict";n.d(t,{B:function(){return C},X:function(){return k}});var i=n(3366),o=n(7294),r=n(9692),a=n(3989),s=n(74),l=n(4297),c=n(6944),u=r.default.input.withConfig({displayName:"Input__StyledInput",componentId:"sc-w09t4o-0"})(["padding:"," ",";border-style:solid;border-radius:",";border-color:",";border-width:1px;font-family:Montserrat,Helvetica,sans-serif;font-size:",";color:",";&:focus{border-style:solid;border-radius:",";border-color:",";border-width:1px;box-shadow:0 0 0 1px ",";outline:none;}"],c.W.space2xs,c.W.spaceSm,a.Z.small,l.Z.greys[250],s.Z.textMd,l.Z.text.secondary,a.Z.small,l.Z.primary[120],l.Z.primary[120]);function d(e){return o.createElement(u,e)}var h=n(5719),p=n(102),f=n(3723),m=n(9161),g=n(7069),y=n(4554),v=n(7534),b=n(757),x=n(674),w=["type","images","state","setState","name","hint","showRanking","starSelectTitle"];function k(e){var t=e.type,n=e.images,r=e.state,a=e.setState,s=e.name,c=e.hint,u=e.showRanking,x=e.starSelectTitle,k=(0,i.Z)(e,w);switch(t){case"boolean":return o.createElement("label",{style:{width:"56px"}},o.createElement(v.default,{onChange:function(){return(0,m.Lp)({setState:a,name:s})},checked:r[s]}));case"textarea":return o.createElement("textarea",{value:k.value,name:s,onChange:function(e){return(0,m._p)(e,r,a)},className:"textarea",rows:6});case"select":var C,S,_=(0,b.Q)(null===(C=k.options)||void 0===C?void 0:C.strapi_json_value);return console.log("select, ",_,k),o.createElement(o.Fragment,null,o.createElement(h.ZP,Object.assign({},k,{defaultValue:k.value,options:_,onChange:function(e){return(0,m.Wo)(e,s,r,a,_)},value:_[null===(S=k.value)||void 0===S?void 0:S.index],isSearchable:!1})),c);case"image-select":return o.createElement(p.Z,Object.assign({},k,{images:[o.createElement(f.G,{image:n[0].childImageSharp.gatsbyImageData,alt:"image select choice 1"}),o.createElement(f.G,{image:n[1].childImageSharp.gatsbyImageData,alt:"image select choice 1"}),o.createElement(f.G,{image:n[2].childImageSharp.gatsbyImageData,alt:"image select choice 1"})],checkmarkHorizontalPosition:"right",onChange:function(e){return(0,m._9)({newState:e,setState:a,property:s})},value:r[s],options:k.options.strapi_json_value}));case"star-rating":var W,M=k.options.strapi_json_value,E=Object.keys(M).map((function(e){return{value:M[e],label:M[e],color:l.Z.text.primary,isFluid:!0}}));return o.createElement(o.Fragment,null,o.createElement("div",{className:"input-group"},o.createElement(h.ZP,{onChange:function(e){return(0,m.pJ)(e,"Letzte_Hufschuhe",r,a)},value:r[s+"_selected"],defaultValue:r[s+"_selected"],isMulti:!0,isClearable:"true",name:"Letzte Hufschuhe",options:E})),o.createElement(y.p,{className:"hoofshoe-rating",show:u},o.createElement("p",null,x),null===(W=Object.keys(r.Letzte_Hufschuhe))||void 0===W?void 0:W.map((function(e,t){var n=r.Letzte_Hufschuhe[e];return o.createElement("li",{key:"Hufschuh-Bewertung"+t},o.createElement("span",{className:"shoe-name"},n.name),o.createElement(g.i,{key:"rating-"+t,size:5,className:"rating",ratingValue:n.rating,onClick:function(e){return(0,m.Vm)(n.name,e,r,a)}}))}))));default:return o.createElement(d,Object.assign({onChange:function(e){return(0,m._p)(e,r,a)},name:s,type:t},k))}}function C(e){var t=e.children,n=e.title,i=e.subtext,r=e.help,a=e.hint,s=e.showHint,l=e.insertAfterInput,u=(0,o.useState)(!1),d=u[0],h=u[1],p=(0,o.useRef)(),f=(0,o.useState)(0),m=f[0],g=f[1];return(0,o.useEffect)((function(){var e=document.createElement("p");e.textContent=r,e.style.opacity="0",p.current.append(e),g(e.offsetHeight),e.remove()})),o.createElement("div",{className:"input-group",ref:p},o.createElement("label",null,n," ",o.createElement(x.M,{onClick:function(){return h((function(e){return!e}))},className:"help-button",type:"button",style:{display:" "!==r?"flex":"none"}},"?")),o.createElement("p",{className:"subtext"},i),t,o.createElement("p",{className:"hint",style:{display:s?"flex":"none"}},a),o.createElement("p",{className:"help-text",style:{height:d?m:"0",margin:d?"0 0 "+c.W.space2xs+" 0":"0"}},r),l)}},9161:function(e,t,n){"use strict";function i(e,t,n){e.persist(),n((function(t){var n;return Object.assign({},t,((n={})[e.target.name]=e.target.value,n))}))}function o(e,t){var n;return e.forEach((function(e,i){e.value===t&&(n=i)})),n}function r(e,t,n,i,r){i((function(n){var i;return Object.assign({},n,((i={})[t]={value:e.value,index:o(r,e.value)},i))}))}function a(e,t,n,i){console.log(e);var o={};e.map((function(e){var t,i=null===(t=n.Letzte_Hufschuhe[e.value])||void 0===t?void 0:t.rating;o[e.label]={name:e.value,rating:i||1}})),i((function(n){var i;return Object.assign({},n,((i={})[t]=o,i[t+"_selected"]=e,i))}))}function s(e,t,n,i,o){var r=Object.assign({},n.Letzte_Hufschuhe);r[e].rating=t,i((function(e){return Object.assign({},e,{Letzte_Hufschuhe:r})}))}function l(e){var t=e.newState,n=e.property;(0,e.setState)((function(e){var i;return Object.assign({},e,((i={})[n]=t,i))}))}function c(e){var t=e.setState,n=e.name;t((function(e){var t;return Object.assign({},e,((t={})[n]=!e[n],t))}))}n.d(t,{Lp:function(){return c},Vm:function(){return s},Wo:function(){return r},_9:function(){return l},_p:function(){return i},pJ:function(){return a}})},4517:function(e,t,n){"use strict";n.d(t,{K:function(){return l}});var i=n(9692),o=n(6944),r=n(4297),a=n(74),s=n(3989),l=i.default.form.withConfig({displayName:"styled__FactFileForm",componentId:"sc-14o9iws-0"})(["display:flex;flex-direction:column;padding-bottom:1rem;overflow-x:hidden;.input-group + *{margin-top:",";}.input-group{display:flex;flex-direction:column;label{display:flex;justify-content:space-between;align-items:center;}}textarea{width:100%;box-sizing:border-box;padding:"," ",";border-style:solid;border-radius:",";border-color:",";border-width:1px;font-family:Montserrat,Helvetica,sans-serif;font-size:",";color:",";&:focus{border-style:solid;border-radius:",";border-color:",";border-width:1px;box-shadow:0 0 0 1px ",";outline:none;}}.insert-field{width:100%;margin:"," 0;}label{font-weight:600;margin-bottom:",";}p{margin:"," 0 0 0;}.bottom-row{display:flex;justify-content:space-between;align-items:center;margin-right:",";.fill-out{color:#ff0000;display:none;}button{margin-left:auto;}}.help-text{margin:"," 0 "," 0 !important;overflow:hidden;transition:all 300ms ease-in-out;}.subtext{overflow:hidden;transition:all 300ms ease-in-out;margin:0 0 "," 0;}"],o.W.spaceMd,o.W.space2xs,o.W.spaceSm,s.Z.small,r.Z.greys[250],a.Z.textMd,r.Z.text.secondary,s.Z.small,r.Z.primary[120],r.Z.primary[120],o.W.spaceXs,o.W.space3xs,o.W.spaceSm,o.W.spaceXs,o.W.spaceXs,o.W.spaceXs,o.W.space2xs)},5977:function(e,t,n){"use strict";n.d(t,{N:function(){return c}});var i=n(9692),o=n(6944),r=n(3989),a=n(4297),s=n(74),l=n(2056),c=i.default.div.withConfig({displayName:"styled__PhotoGuideWrapper",componentId:"sc-7z4m5s-0"})(["display:flex;flex-direction:column;padding:"," 0;section{width:100%;padding:",";box-sizing:border-box;display:flex;flex-direction:column;border-radius:",";.icon{position:absolute;z-index:2;display:flex;justify-content:center;align-items:center;padding:",";margin:-"," 0 0 -12px;background-color:white;border-radius:",";box-shadow:"," 2px 2px 5px;}.content{display:flex;flex-direction:row;justify-content:space-between;padding-top:",";}}* + section{margin-top:",";}.thumbnails{background-color:",";.content{justify-content:space-between;}.hint{width:40%;font-weight:bold;font-size:",";}.gatsby-image-wrapper{height:",";width:",";@media (min-width:","){height:",";width:",";}}}.instructions{background-color:",";p{margin:0;}}.image-preview{background-color:",";.content{width:100%;flex-wrap:wrap;justify-content:center;button{margin:"," auto 0 auto;}.single-image-container{display:flex;justify-content:center;img{width:50%;}}}.placeholder{display:flex;flex-direction:column;justify-content:center;align-items:center;p{margin-top:0;text-align:center;}}}.selection-confirmed{margin:0;}.button-row{display:flex;flex-direction:column;align-items:center;width:100%;.button-row-button{display:flex;flex-direction:row;justify-content:space-between;align-items:center;button{margin:1rem;}}}"],o.W.spaceMd,o.W.spaceMd,r.Z.medium,o.W.space3xs,o.W.spaceLg,r.Z.medium,a.Z.greys[600],o.W.spaceMd,o.W.spaceMd,a.Z.red.background,s.Z.textLg,o.W.space2xl,o.W.space2xl,l.Z.big,o.W.space3xl,o.W.space3xl,a.Z.yellow.background,a.Z.green.background,o.W.spaceMd)},2056:function(e,t){"use strict";t.Z={small:"360px",w400:"400px",big:"800px"}}}]);
//# sourceMappingURL=981bc3541c812f57ecf73f7a33a1e55214997bf1-562d41014ceddafb812e.js.map