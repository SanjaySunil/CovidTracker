/*! For license information please see main.5467cb9b.chunk.js.LICENSE.txt */
(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{121:function(e,t,a){},122:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),s=a.n(c),i=a(67),o=a(45),l=Object(i.a)({palette:{type:"dark",primary:{main:o.DARK_PRIMARY},secondary:{main:o.DARK_SECONDARY},success:{main:o.DARK_SUCCESS}},overrides:{MuiTooltip:{tooltip:{fontSize:"0.8em"}}},typography:{fontFamily:["Rubik"].join(",")}}),d=a(146),j=a(147),u=a(148),p=a(149),h=a(1),b=Object(d.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),x=function(){var e=b();return Object(h.jsx)("div",{className:e.root,children:Object(h.jsx)(j.a,{position:"static",color:"default",children:Object(h.jsx)(u.a,{children:Object(h.jsx)(p.a,{variant:"h6",className:e.title,children:"CovidTracker by Sanjay Sunil"})})})})},O=a(44),m=a(30),f=a(68),v=a(65),g=a.n(v),w=a(66),y=a(154),N=a(151),C=a(153),k=a(8),S=a.n(k),D=a(12),R=a(25),A=a(26),W=a(29),I=a(27),z=a(125),B=a(150),G=Object(d.a)((function(e){return{root:{flexGrow:1,overflow:"hidden",padding:e.spacing(0,3)},paper:{maxWidth:1e3,margin:"".concat(e.spacing(1),"px auto"),marginBottom:"15px",padding:e.spacing(2)},logo:{maxWidth:1e3,margin:"".concat(e.spacing(1),"px auto"),marginBottom:"3%",backgroundColor:"#333333",padding:e.spacing(2),textAlign:"center"},title:{fontSize:"5vh"},message:{fontSize:"20px"}}})),_=function(){var e=G();return Object(h.jsxs)("div",{className:e.root,children:[Object(h.jsx)(z.a,{elevation:3,className:e.logo,children:Object(h.jsx)(B.a,{container:!0,wrap:"nowrap",spacing:12,children:Object(h.jsx)(B.a,{item:!0,xs:!0,children:Object(h.jsx)(p.a,{className:e.title,children:"CovidTracker"})})})}),Object(h.jsx)(z.a,{elevation:2,className:e.paper,children:Object(h.jsx)(B.a,{container:!0,wrap:"nowrap",spacing:12,children:Object(h.jsx)(B.a,{item:!0,xs:!0,children:Object(h.jsx)(p.a,{className:e.message,children:"Coronavirus disease (COVID-19) is an infectious disease\ncaused by a newly discovered coronavirus."})})})}),Object(h.jsx)(z.a,{elevation:2,className:e.paper,children:Object(h.jsx)(B.a,{container:!0,wrap:"nowrap",spacing:12,children:Object(h.jsx)(B.a,{item:!0,xs:!0,children:Object(h.jsx)(p.a,{className:e.message,children:"A disease was first identified in December 2019 in China.\nThe World Health Organization (WHO) declared the outbreak of COVID-19 a pandemic\non the 11 March 2020."})})})})]})},M=a(19),K=a.n(M),E=Object(d.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.primary,fontSize:"20px"},item:{maxWidth:1050,margin:"".concat(e.spacing(1),"px auto"),marginBottom:"15px",padding:e.spacing(3)},count:{fontSize:"3vh",fontWeight:"bolder"}}})),T=function(e){var t=e.data,a=t.confirmed,n=t.recovered,r=t.deaths,c=t.lastUpdate,s=E();return a?Object(h.jsx)("div",{className:s.root,children:Object(h.jsx)("div",{className:s.item,children:Object(h.jsxs)(B.a,{container:!0,spacing:3,children:[Object(h.jsx)(B.a,{item:!0,xs:6,children:Object(h.jsxs)(z.a,{elevation:3,className:s.paper,children:[Object(h.jsx)("span",{className:s.count,children:Object(h.jsx)(K.a,{start:0,end:a.value,duration:2.5,separator:","})}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{style:{color:"#ff453a"},children:"Infected"})]})}),Object(h.jsx)(B.a,{item:!0,xs:6,children:Object(h.jsxs)(z.a,{elevation:3,className:s.paper,children:[Object(h.jsx)("span",{className:s.count,children:Object(h.jsx)(K.a,{start:0,end:r.value,duration:2.5,separator:","})}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{style:{color:"#ff453a"},children:"Deaths"})]})}),Object(h.jsx)(B.a,{item:!0,xs:12,children:Object(h.jsxs)(z.a,{elevation:3,className:s.paper,children:[Object(h.jsx)("span",{className:s.count,children:Object(h.jsx)(K.a,{start:0,end:n.value,duration:2.5,separator:","})}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{style:{color:"#ff453a"},children:"Recovered"})]})}),Object(h.jsx)(B.a,{item:!0,xs:12,children:Object(h.jsx)(z.a,{elevation:3,className:s.paper,children:Object(h.jsxs)("span",{className:s.count,children:["Last updated on ",new Date(c).toDateString()]})})})]})})}):Object(h.jsx)("div",{className:s.root,children:Object(h.jsx)("div",{className:s.item,children:Object(h.jsx)(B.a,{container:!0,spacing:3,children:Object(h.jsx)(B.a,{item:!0,xs:12,children:Object(h.jsx)(z.a,{elevation:3,className:s.paper,children:Object(h.jsx)("span",{className:s.count,children:"Loading ..."})})})})})})},U=a(46),V=a.n(U),H=" https://covid19.mathdro.id/api",L=function(){var e=Object(D.a)(S.a.mark((function e(t){var a,n,r,c,s,i,o;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=H,t&&(a="".concat(H,"/countries/").concat(t)),e.prev=2,e.next=5,V.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,s=r.recovered,i=r.deaths,o=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:s,deaths:i,lastUpdate:o});case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(D.a)(S.a.mark((function e(){var t,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V.a.get("".concat(H,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),q=L,F=function(e){Object(W.a)(a,e);var t=Object(I.a)(a);function a(e){var n;return Object(R.a)(this,a),(n=t.call(this,e)).handleCountryChange=function(){var e=Object(D.a)(S.a.mark((function e(t){var a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q(t);case 2:a=e.sent,n.setState({data:a,country:t});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={data:{},country:""},n}return Object(A.a)(a,[{key:"componentDidMount",value:function(){var e=Object(D.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data;e.country;return Object(h.jsxs)("div",{children:[Object(h.jsx)(_,{}),Object(h.jsx)(T,{data:t})]})}}]),a}(n.Component),P=Object(d.a)((function(e){return{root:{flexGrow:1,overflow:"hidden",padding:e.spacing(0,3)},paper:{maxWidth:1e3,margin:"".concat(e.spacing(1),"px auto"),marginBottom:"15px",padding:e.spacing(2)},logo:{maxWidth:1e3,margin:"".concat(e.spacing(1),"px auto"),marginBottom:"3%",backgroundColor:"#333333",padding:e.spacing(2),textAlign:"center"},title:{fontSize:"5vh"},message:{fontSize:"20px"},link:{"&":{fontSize:"20px",color:"grey",textDecoration:"none",transition:"0.25s"},"&:hover":{color:"#fff",transition:"0.25s"}}}})),J=function(){var e=P();return Object(h.jsxs)("div",{className:e.root,children:[Object(h.jsx)(z.a,{elevation:3,className:e.logo,children:Object(h.jsx)(B.a,{container:!0,wrap:"nowrap",spacing:12,children:Object(h.jsx)(B.a,{item:!0,xs:!0,children:Object(h.jsx)(p.a,{className:e.title,children:"Information"})})})}),Object(h.jsx)(z.a,{elevation:2,className:e.paper,children:Object(h.jsx)(B.a,{container:!0,wrap:"nowrap",spacing:12,children:Object(h.jsxs)(B.a,{item:!0,xs:!0,children:[Object(h.jsx)(p.a,{className:e.message,children:"Most people infected with the COVID-19 virus\n will experience mild to moderate respiratory illness\nand recover without requiring special treatment.  Older people,\n and those with underlying medical problems like\n cardiovascular disease, diabetes, chronic respiratory disease,\n and cancer are more likely to develop serious illness."}),Object(h.jsx)("br",{}),Object(h.jsx)(p.a,{className:e.message,children:"The best way to prevent and slow down transmission\n is to be well informed about the COVID-19 virus,\nthe disease it causes and how it spreads. Protect yourself and\nothers from infection by washing your hands or using\nan alcohol based rub frequently and not touching your face. "}),Object(h.jsx)("br",{}),Object(h.jsx)(p.a,{className:e.message,children:"The COVID-19 virus spreads primarily through droplets\n of saliva or discharge from the nose when an infected\nperson coughs or sneezes, so it\u2019s important that you also practice\n respiratory etiquette (for example, by coughing into a flexed elbow)."})]})})}),Object(h.jsx)(z.a,{elevation:2,className:e.paper,children:Object(h.jsx)(B.a,{container:!0,wrap:"nowrap",spacing:12,children:Object(h.jsx)(B.a,{item:!0,xs:!0,children:Object(h.jsx)(p.a,{align:"center",children:Object(h.jsx)("a",{className:e.link,href:"https://www.who.int/health-topics/coronavirus#tab=tab_1",rel:"noreferrer",target:"_blank",children:"More information on the WHO website"})})})})})]})},Q=function(e){Object(W.a)(a,e);var t=Object(I.a)(a);function a(){return Object(R.a)(this,a),t.apply(this,arguments)}return Object(A.a)(a,[{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsx)(J,{})})}}]),a}(n.Component),X=Object(d.a)((function(e){return{root:{flexGrow:1,overflow:"hidden",padding:e.spacing(0,3)},logo:{maxWidth:1e3,margin:"".concat(e.spacing(1),"px auto"),marginBottom:"3%",backgroundColor:"#333333",padding:e.spacing(2),textAlign:"center"},title:{fontSize:"5vh"}}})),Z=function(){var e=X();return Object(h.jsx)("div",{className:e.root,children:Object(h.jsx)(z.a,{elevation:3,className:e.logo,children:Object(h.jsx)(B.a,{container:!0,spacing:1,children:Object(h.jsx)(B.a,{item:!0,xs:12,children:Object(h.jsx)(p.a,{className:e.title,children:"Regions"})})})})})},$=a(157),ee=a(155),te=Object(d.a)((function(e){return{root:{flexGrow:1,overflow:"hidden",padding:e.spacing(0,3)},picker:{maxWidth:1e3,margin:"".concat(e.spacing(1),"px auto"),marginBottom:"3%",backgroundColor:"transparent",textAlign:"center",boxShadow:"none"}}})),ae=function(e){var t=e.handleCountryChange,a=te(),r=Object(n.useState)([]),c=Object(O.a)(r,2),s=c[0],i=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(D.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=i,e.next=3,Y();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(h.jsx)("div",{className:a.root,children:Object(h.jsx)(z.a,{elevation:3,className:a.picker,children:Object(h.jsx)(B.a,{container:!0,spacing:1,children:Object(h.jsx)(B.a,{item:!0,xs:12,children:Object(h.jsx)($.a,{children:Object(h.jsxs)(ee.a,{defaultValue:"",onChange:function(e){return t(e.target.value)},children:[Object(h.jsx)("option",{value:"global",children:"Global"}),s.map((function(e,t){return Object(h.jsxs)("option",{value:e,children:[" ",e," "]},t)}))]})})})})})})},ne=Object(d.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.primary,fontSize:"20px"},item:{maxWidth:1050,margin:"".concat(e.spacing(1),"px auto"),marginBottom:"15px",padding:e.spacing(3)},count:{fontSize:"3vh",fontWeight:"bolder"}}})),re=function(e){var t=e.data,a=t.confirmed,n=t.recovered,r=t.deaths,c=t.lastUpdate,s=ne();return a?Object(h.jsx)("div",{className:s.root,children:Object(h.jsx)("div",{className:s.item,children:Object(h.jsxs)(B.a,{container:!0,spacing:3,children:[Object(h.jsx)(B.a,{item:!0,xs:6,children:Object(h.jsxs)(z.a,{elevation:3,className:s.paper,children:[Object(h.jsx)("span",{className:s.count,children:Object(h.jsx)(K.a,{start:0,end:a.value,duration:2.5,separator:","})}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{style:{color:"#ff453a"},children:"Infected"})]})}),Object(h.jsx)(B.a,{item:!0,xs:6,children:Object(h.jsxs)(z.a,{elevation:3,className:s.paper,children:[Object(h.jsx)("span",{className:s.count,children:Object(h.jsx)(K.a,{start:0,end:r.value,duration:2.5,separator:","})}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{style:{color:"#ff453a"},children:"Deaths"})]})}),Object(h.jsx)(B.a,{item:!0,xs:12,children:Object(h.jsxs)(z.a,{elevation:3,className:s.paper,children:[Object(h.jsx)("span",{className:s.count,children:Object(h.jsx)(K.a,{start:0,end:n.value,duration:2.5,separator:","})}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{style:{color:"#ff453a"},children:"Recovered"})]})}),Object(h.jsx)(B.a,{item:!0,xs:12,children:Object(h.jsx)(z.a,{elevation:3,className:s.paper,children:Object(h.jsxs)("span",{className:s.count,children:["Last updated on ",new Date(c).toDateString()]})})})]})})}):Object(h.jsx)("div",{className:s.root,children:Object(h.jsx)("div",{className:s.item,children:Object(h.jsx)(B.a,{container:!0,spacing:3,children:Object(h.jsx)(B.a,{item:!0,xs:12,children:Object(h.jsx)(z.a,{elevation:3,className:s.paper,children:Object(h.jsx)("span",{className:s.count,children:"Loading ..."})})})})})})},ce=function(e){Object(W.a)(a,e);var t=Object(I.a)(a);function a(e){var n;return Object(R.a)(this,a),(n=t.call(this,e)).handleCountryChange=function(){var e=Object(D.a)(S.a.mark((function e(t){var a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q(t);case 2:a=e.sent,n.setState({data:a,country:t});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={data:{},country:""},n}return Object(A.a)(a,[{key:"componentDidMount",value:function(){var e=Object(D.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.data;return Object(h.jsxs)("div",{children:[Object(h.jsx)(Z,{}),Object(h.jsx)(ae,{handleCountryChange:this.handleCountryChange}),Object(h.jsx)(re,{data:e})]})}}]),a}(n.Component);function se(e){var t=e.children,a=e.value,n=e.index,r=Object(f.a)(e,["children","value","index"]);return Object(h.jsx)("div",Object(m.a)(Object(m.a)({role:"tabpanel",hidden:a!==n,id:"full-width-tabpanel-".concat(n),"aria-labelledby":"full-width-tab-".concat(n)},r),{},{children:a===n&&Object(h.jsx)(C.a,{p:3,children:Object(h.jsx)(p.a,{children:t})})}))}function ie(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}var oe=Object(d.a)((function(e){return{root:{backgroundColor:e.palette.background.paper,width:"100%"}}}));function le(){var e=oe(),t=Object(w.a)(),a=r.a.useState(0),n=Object(O.a)(a,2),c=n[0],s=n[1];return Object(h.jsxs)("div",{className:e.root,children:[Object(h.jsx)(j.a,{position:"static",color:"default",children:Object(h.jsxs)(y.a,{value:c,onChange:function(e,t){s(t)},indicatorColor:"primary",textColor:"primary",variant:"fullWidth","aria-label":"full width tabs example",children:[Object(h.jsx)(N.a,Object(m.a)({label:"Home"},ie(0))),Object(h.jsx)(N.a,Object(m.a)({label:"Regions"},ie(1))),Object(h.jsx)(N.a,Object(m.a)({label:"Information"},ie(2)))]})}),Object(h.jsxs)(g.a,{axis:"rtl"===t.direction?"x-reverse":"x",index:c,onChangeIndex:function(e){s(e)},children:[Object(h.jsx)(se,{value:c,index:0,dir:t.direction,children:Object(h.jsx)(F,{})}),Object(h.jsx)(se,{value:c,index:1,dir:t.direction,children:Object(h.jsx)(ce,{})}),Object(h.jsx)(se,{value:c,index:2,dir:t.direction,children:Object(h.jsx)(Q,{})})]})]})}var de=a(152),je=function(){return Object(h.jsx)(de.a,{theme:l,children:Object(h.jsxs)(z.a,{style:{minHeight:"100vh"},children:[Object(h.jsx)(x,{}),Object(h.jsx)(le,{})]})})};a(121);s.a.render(Object(h.jsx)(je,{}),document.getElementById("root"))},45:function(e,t){e.exports={DARK_PRIMARY:"#ff453a",DARK_SECONDARY:"#333333",DARK_WARNING:"#FF9966",DARK_SUCCESS:"#388e3c"}}},[[122,1,2]]]);
//# sourceMappingURL=main.5467cb9b.chunk.js.map