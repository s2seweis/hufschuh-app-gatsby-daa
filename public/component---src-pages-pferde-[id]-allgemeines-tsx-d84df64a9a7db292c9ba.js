"use strict";(self.webpackChunkequilandoo_app=self.webpackChunkequilandoo_app||[]).push([[431],{8625:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var a=n(7294),r=n(5131),i=n(3223),l=n(5861),o=n(4687),c=n.n(o),s=n(4517),u=n(2830),f=n(925),h=n(1082),d=n(9692),m=n(6944),p=d.default.div.withConfig({displayName:"ConfirmText__ConfirmTextWrapper",componentId:"sc-9wre6e-0"})(["display:flex;flex-direction:column;align-items:center;margin:"," 0;p{margin:0 0 ",";text-align:center;}.checkbox-row{display:flex;flex-direction:row;align-items:center;}input{width:",";height:",";margin:0 "," 0 0;}label{margin:0;}button{align-self:center;margin:"," 0 !important;}"],m.W.spaceXs,m.W.spaceSm,m.W.spaceLg,m.W.spaceLg,m.W.spaceXs,m.W.spaceXs);function g(e){var t=e.text,n=e.buttonText,r=e.value,i=e.onChange,l=e.name,o=e.checkboxText,c=e.link;return a.createElement(p,null,a.createElement("p",null,t),a.createElement("div",{className:"checkbox-row"},a.createElement("input",{id:"confirm-text-checkbox",type:"checkbox",onChange:function(e){return i(e)},checked:r,name:l}),a.createElement("label",{htmlFor:"confirm-text-checkbox"},o)),a.createElement(u.z,{className:"secondary",target:"_blank",href:c},n))}var b=n(8846),v={Geburtsjahr:"",Groesse:"",Gewicht:"",Letzte_Hufbearbeitung:"",Letzte_Hufschuhe:{},Letzte_Hufschuhe_selected:[],Terrain:"",Terrain_Andere:"",Hufform:"",Hufbearbeitung_Gelesen:!1};function _(e){var t=e.cms,n=e.saveFactFileGeneral,r=e.horse,l=e.cmsMisc,o=e.initialState,c=(0,a.useState)(o||v),h=c[0],d=c[1],m=(0,a.useRef)(),p=(0,a.useState)(""),_=p[0],H=p[1];return a.createElement(s.K,{onSubmit:function(e){e.preventDefault();var a=!1,i=["Letzte_Hufschuhe","Letzte_Hufschuhe_selected","Hufschuhe_Fuer","Stellungsfehler","Terrain_Andere"];if(Object.keys(h).forEach((function(e){var t=h[e];t||("object"!=typeof t||0!==Object.keys(t).length)&&t||e.endsWith("Andere")||i.includes(e)||(a=!0)})),a)return H(t.Meta.FelderFehlen),void(m.current.style.display="inline");n(r.id,h)}},a.createElement(b.Z,null),Object.keys(t).map((function(e,n){var r,o,c,s,u;if("Meta"!==e&&"Hufschuhe_Fuer"!==e&&"Stellungsfehler"!==e){var m,p,b=t[e];"Letzte_Hufbearbeitung"===e&&(h.Letzte_Hufbearbeitung===b.Optionen.strapi_json_value[b.Optionen.length-1]&&(m=!0),p=a.createElement(g,{text:b.Erklaerung,checkboxText:b.Gelesen,buttonText:b.InfoButton,link:i.Z.padsInformation,value:h.Hufbearbeitung_Gelesen,onChange:function(e){e.persist(),d((function(t){return Object.assign({},t,{Hufbearbeitung_Gelesen:e.target.checked})}))}}));var v=t.Terrain.Optionen;return"Terrain"===e&&h.Terrain.value===v[v.length-1]&&(p=a.createElement("div",{className:"insert-field"},a.createElement("label",{htmlFor:e+"additional-field"},t.Terrain.Titel_Andere),a.createElement(f.X,{id:e+"additional-field",state:h,setState:d,name:"Terrain_Andere",value:h.Terrain_Andere,type:"text"}))),a.createElement(f.B,{title:b.Titel,subtext:b.Subtext,help:b.Hilfstext,hint:b.Hinweis,showHint:m,key:"input-group"+n,insertAfterInput:p},a.createElement(f.X,{state:h,value:h[e],setState:d,name:e,options:b.Optionen,type:(null===(r=b.Typ)||void 0===r?void 0:r.toLowerCase())||"select",images:[null===(o=b.Bild1)||void 0===o?void 0:o.localFile,null===(c=b.Bild2)||void 0===c?void 0:c.localFile,null===(s=b.Bild3)||void 0===s?void 0:s.localFile],showRanking:h.Letzte_Hufschuhe&&!(null===(u=Object.keys(h.Letzte_Hufschuhe))||void 0===u||!u.length),starSelectTitle:l.StarSelectTitle}))}})),a.createElement("div",{className:"bottom-row"},a.createElement("span",{className:"fill-out",ref:m},_),a.createElement(u.z,{className:"primary save-button"},t.Meta.Speichern)))}var H=n(1001),G=n(2256),x=n(757),T=function(e){var t=e.horseId,n=e.cms,r=e.cmsMisc,o=(0,G.v9)((function(e){return e.auth.user})),s=(0,H.Op)({userId:null==o?void 0:o.id,horseId:t},{refetchOnMountOrArgChange:!0,skip:!t}),u=s.data,f=s.isLoading,d=(0,H.IE)(),m=d[0],p=(d[1].isLoading,function(){var e=(0,l.Z)(c().mark((function e(n){var a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={factFileGeneral:{yearOfBirth:n.Geburtsjahr,height:n.Groesse,weight:n.Gewicht,lastHoofBoots:n.Letzte_Hufschuhe,hoofShape:n.Hufform,lastHoofTrimming:n.Letzte_Hufbearbeitung.value,confirmedHoofTrimmingNote:n.Hufbearbeitung_Gelesen,terrain:n.Terrain.value,terrainOther:n.Terrain_Andere}},e.next=3,m({userId:null==o?void 0:o.id,horseId:t,data:a});case 3:return e.next=5,(0,h.navigate)(i.Z.detailView(t));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return f?a.createElement("span",null,"Lädt.."):a.createElement(_,{cms:n,cmsMisc:r,saveFactFileGeneral:function(e,t){p(t)},horse:u,initialState:u.factFileGeneral?{Geburtsjahr:u.factFileGeneral.yearOfBirth,Groesse:u.factFileGeneral.height,Gewicht:u.factFileGeneral.weight,Letzte_Hufschuhe:u.factFileGeneral.lastHoofBoots,Hufform:u.factFileGeneral.hoofShape,Letzte_Hufbearbeitung:(0,x.t)(n.Letzte_Hufbearbeitung.Optionen.strapi_json_value,u.factFileGeneral.lastHoofTrimming),Terrain:(0,x.t)(n.Terrain.Optionen.strapi_json_value,u.factFileGeneral.terrain),Terrain_Andere:u.factFileGeneral.terrainOther,Hufbearbeitung_Gelesen:u.factFileGeneral.confirmedHoofTrimmingNote,Letzte_Hufschuhe_selected:Object.keys(u.factFileGeneral.lastHoofBoots).map((function(e){return(0,x.t)(n.Letzte_Hufschuhe.Optionen.strapi_json_value,u.factFileGeneral.lastHoofBoots[e].name)}))}:v})};function y(e){var t=e.data,n=e.location,l=e.id;return a.createElement(r.Z,{title:"Allgemeines",horseId:l,subtitleKey:"name",showNavigation:!0,location:n,lastRoute:i.Z.detailView(l)},a.createElement(T,{cms:t.strapiSteckbriefAllgemeines,cmsMisc:t.strapiMisc,horseId:l}))}},8846:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),r=n(1082),i=n(9692),l=n(3723),o=i.default.div.withConfig({displayName:"Logo__LogoWrapper",componentId:"sc-181hvhl-0"})(["width:100%;display:flex;justify-content:center;"]);function c(){return a.createElement(r.StaticQuery,{query:"114436975",render:function(e){return a.createElement(o,null,a.createElement(l.G,{image:e.logoBig.childImageSharp.gatsbyImageData,alt:"Equilandoo Logo"}))}})}}}]);
//# sourceMappingURL=component---src-pages-pferde-[id]-allgemeines-tsx-d84df64a9a7db292c9ba.js.map