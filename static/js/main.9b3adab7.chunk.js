(this.webpackJsonpufomg=this.webpackJsonpufomg||[]).push([[0],{41:function(e,t,s){},44:function(e,t,s){},45:function(e,t,s){},47:function(e,t,s){},48:function(e,t,s){},49:function(e,t,s){},50:function(e,t,s){},51:function(e,t,s){"use strict";s.r(t);var i=s(1),a=s(13),c=s.n(a),n=s(8),l=s(14),r=s(30),j=s(31),o=s(4),b=s(27),m=s(6),d="FETCH_SIGHTINGS_PENDING",O="FETCH_SIGHTINGS_SUCCESS",x="FETCH_SIGHTINGS_ERROR",u="FETCH_COMMENTS_SUCCESS",p="POST_SIGHTINGS_SUCCESS",h="POST_COMMENT_SUCCESS",g={pending:!1,sightings:[],error:null,singleSighting:{}},f=Object(l.combineReducers)({sightingsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(m.a)(Object(m.a)({},e),{},{pending:!0});case O:return Object(m.a)(Object(m.a)({},e),{},{pending:!1,sightings:t.sightings});case x:return Object(m.a)(Object(m.a)({},e),{},{pending:!1,error:t.error});case u:return Object(m.a)(Object(m.a)({},e),{},{singleSighting:t.singleSighting});case p:return Object(m.a)(Object(m.a)({},e),{},{sightings:[].concat(Object(b.a)(e.sightings),[t.sighting])});case h:return Object(m.a)(Object(m.a)({},e),{},{singleSighting:Object(m.a)(Object(m.a)({},e.singleSighting),{},{comments:[].concat(Object(b.a)(e.singleSighting.comments),[t.comment])})});default:return e}}}),y=(s(41),function(e,t){fetch("https://ancient-mesa-60922.herokuapp.com/api/v1/reports/".concat(t)).then((function(e){return e.json()})).then((function(t){if(t.error)throw t.error;return e({type:u,singleSighting:t}),t}))}),N=function(e,t){fetch("https://ancient-mesa-60922.herokuapp.com/api/v1/reports",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(s){if(s.error)throw s.error;t(function(e){return{type:p,sighting:e}}(e))}))},v=function(e,t,s){var i={report_id:e,text:t};fetch("https://ancient-mesa-60922.herokuapp.com/api/v1/comments",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}).then((function(e){return e.json()})).then((function(e){if(e.error)throw e.error;s(function(e){return{type:h,comment:e}}(t))}))},S=function(e){e({type:d}),fetch("https://ancient-mesa-60922.herokuapp.com/api/v1/reports").then((function(e){return e.json()})).then((function(t){if(t.error)throw t.error;var s;return e((s=t.results,{type:O,sightings:s})),t.results})).catch((function(t){e(function(e){return{type:x,error:e}}(t))}))},T=s(0),A=function(){var e=Object(n.b)();return Object(i.useEffect)((function(){S(e)})),Object(T.jsx)("main",{className:"main",children:Object(T.jsx)("div",{className:"main-content ",children:Object(T.jsxs)("section",{className:"content",children:[Object(T.jsxs)("div",{className:"scene",children:[Object(T.jsx)("div",{className:"ufoWrap",children:Object(T.jsx)("div",{className:"center",children:Object(T.jsx)("div",{className:"ufoInner",children:Object(T.jsxs)("div",{id:"ufo",children:[Object(T.jsxs)("ul",{className:"blinkers",children:[Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{})]}),Object(T.jsx)("div",{className:"dome"}),Object(T.jsx)("div",{className:"antigrav",children:Object(T.jsxs)("div",{className:"rings",children:[Object(T.jsx)("div",{className:"inner"}),Object(T.jsxs)("ul",{children:[Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{})]})]})}),Object(T.jsx)("div",{className:"thrust",children:Object(T.jsxs)("ul",{children:[Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{})]})})]})})})}),Object(T.jsxs)("div",{className:"foreground",children:[Object(T.jsxs)("ul",{className:"trees3",children:[Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{})]}),Object(T.jsxs)("ul",{className:"trees2",children:[Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{})]}),Object(T.jsxs)("ul",{className:"trees1",children:[Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{})]})]}),Object(T.jsx)("div",{className:"background",children:Object(T.jsxs)("div",{className:"stars",children:[Object(T.jsx)("li",{className:"small"}),Object(T.jsx)("li",{className:"small"}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{className:"small"}),Object(T.jsx)("li",{className:"small"}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{className:"small"}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{className:"small"}),Object(T.jsx)("li",{className:"small"}),Object(T.jsx)("li",{className:"small"}),Object(T.jsx)("li",{className:"small"}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{className:"small"}),Object(T.jsx)("li",{className:"small"}),Object(T.jsx)("li",{className:"small"}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{className:"small"}),Object(T.jsx)("li",{className:"small"}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{className:"small"}),Object(T.jsx)("li",{className:"small"}),Object(T.jsx)("li",{className:"small"}),Object(T.jsx)("li",{className:"small"}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{className:"small"}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{className:"small"}),Object(T.jsx)("li",{className:"small"}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{className:"small"}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{className:"small"}),Object(T.jsx)("li",{className:"small"}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{className:"small"}),Object(T.jsx)("li",{className:"small"}),Object(T.jsx)("li",{className:"small"}),Object(T.jsx)("li",{className:"small"}),Object(T.jsx)("li",{}),Object(T.jsx)("li",{})]})})]}),Object(T.jsxs)("div",{className:"camera",children:[Object(T.jsx)("div",{className:"battery",children:Object(T.jsx)("div",{className:"juice"})}),Object(T.jsx)("div",{className:"rec",children:Object(T.jsxs)("span",{children:[Object(T.jsx)("span",{}),"REC"]})}),Object(T.jsx)("div",{className:"meta",children:Object(T.jsxs)("p",{children:["F2.3\xa0\xa00dB\xa0\xa015.7V",Object(T.jsxs)("span",{className:"exposure",children:[Object(T.jsx)("span",{className:"plus",children:"+"}),Object(T.jsx)("span",{className:"minus",children:"-"})]})]})}),Object(T.jsxs)("div",{className:"timer",children:[Object(T.jsx)("label",{id:"hours",children:"00"}),":",Object(T.jsx)("label",{id:"minutes",children:"00"}),":",Object(T.jsx)("label",{id:"seconds",children:"00"})]})]}),Object(T.jsx)("div",{id:"app",children:Object(T.jsx)("div",{id:"wrapper",children:Object(T.jsx)("h1",{className:"glitch","data-text":"UFOMG",children:"UFOMG"})})}),Object(T.jsxs)("div",{className:"main-btns",children:[Object(T.jsx)(o.b,{className:"link-style",to:"/sightings-map",children:Object(T.jsx)("button",{className:"btns",children:"Sightings"})}),Object(T.jsx)(o.b,{className:"link-style",to:"/report-form",children:Object(T.jsx)("button",{className:"btns",children:"Report Sighting"})}),Object(T.jsx)(o.b,{className:"link-style",to:"/sighting-research",children:Object(T.jsx)("button",{className:"btns",children:"Research"})})]})]})})})},C=s(5),I=(s(44),s.p+"static/media/ufo.1edcbb7b.png"),E=s.p+"static/media/ufoabduction.3074ee26.jpg",_=function(e){var t=e.data,s=window.cloudinary.createUploadWidget({cloudName:"mdflynn",uploadPreset:"xilykym7"},(function(e,s){"success"===s.event&&t(s.info.secure_url,"An image of ".concat(s.info.original_filename))}));return Object(T.jsx)("div",{id:"photo-form-container",children:Object(T.jsx)("button",{onClick:function(e){return function(e,t){t.preventDefault(),e.open()}(s,e)},children:"Upload Photo"})})},w=function(){var e=Object(i.useState)(""),t=Object(C.a)(e,2),s=t[0],a=t[1],c=Object(i.useState)("anonymous"),l=Object(C.a)(c,2),r=l[0],j=l[1],b=Object(i.useState)(""),m=Object(C.a)(b,2),d=m[0],O=m[1],x=Object(i.useState)(""),u=Object(C.a)(x,2),p=u[0],h=u[1],g=Object(i.useState)(""),f=Object(C.a)(g,2),y=f[0],v=f[1],S=Object(i.useState)(""),A=Object(C.a)(S,2),w=A[0],k=A[1],M=Object(i.useState)(""),R=Object(C.a)(M,2),D=(R[0],R[1]),L=Object(n.b)(),F=function(e){e.preventDefault(),function(e,t){var s=e.split(" ").join("+"),i=t.split(" ").join("+");return fetch("https://maps.googleapis.com/maps/api/geocode/json?address=".concat(s,",+").concat(i,"&key=").concat("AIzaSyC4MPnXNz8txiScW63KMhoqFAs4K90VsA0")).then((function(e){return e.json()}))}(d,p).then((function(e){var t=e.results[0].geometry.location;N({name:r,city:d,state:p,lat:t.lat,long:t.lng,description:y,event_type:s,image:w},L)}))},H=w||E;return Object(T.jsx)("div",{className:"form-container",children:Object(T.jsxs)("form",{className:"full-form",children:[Object(T.jsx)(o.b,{className:"link-style",to:"/",children:Object(T.jsx)("h1",{className:"glitch","data-text":"UFOMG",children:"UFOMG"})}),Object(T.jsxs)("div",{className:"form",children:[Object(T.jsx)("img",{src:H,className:"formPhoto",alt:"ufo"}),Object(T.jsxs)("article",{className:"form-inputs",children:[Object(T.jsxs)("div",{className:"form__group field",children:[Object(T.jsx)("input",{type:"input",className:"form__field",placeholder:"Name",name:"name",id:"name",onChange:function(e){j(e.target.value)},required:!0}),Object(T.jsx)("label",{htmlFor:"name",className:"form__label",children:"Name"})]}),Object(T.jsxs)("div",{className:"form__group field",children:[Object(T.jsx)("input",{type:"input",className:"form__field",placeholder:"City",name:"city",id:"city",onChange:function(e){O(e.target.value)},required:!0}),Object(T.jsx)("label",{htmlFor:"city",className:"form__label",children:"City"})]}),Object(T.jsxs)("div",{className:"form__group field",children:[Object(T.jsx)("input",{type:"input",className:"form__field",placeholder:"State",name:"state",id:"state",onChange:function(e){h(e.target.value)},required:!0}),Object(T.jsx)("label",{htmlFor:"state",className:"form__label",children:"State"})]}),Object(T.jsxs)("div",{className:"form__group field",children:[Object(T.jsx)("input",{type:"input",className:"form__field",placeholder:"Description",name:"desciption",id:"description",onChange:function(e){v(e.target.value)},required:!0}),Object(T.jsx)("label",{htmlFor:"description",className:"form__label",children:"Description"})]}),Object(T.jsxs)("section",{className:"image-upload",children:[Object(T.jsxs)("label",{className:"encounter",children:["Encounter Type",Object(T.jsxs)("select",{value:s,onChange:function(e){a(e.target.value)},className:"drop-down",children:[Object(T.jsx)("option",{disabled:!!s}),Object(T.jsx)("option",{value:"sighting",children:"Sighting"}),Object(T.jsx)("option",{value:"encounter",children:"Encounter"}),Object(T.jsx)("option",{value:"abduction",children:"Abduction"})]})]}),Object(T.jsx)(_,{data:function(e,t){k(e),D(t)}})]}),Object(T.jsxs)("section",{className:"form-btns",children:[Object(T.jsx)("div",{className:"container",children:Object(T.jsxs)("a",{href:"/#",target:"_blank",onClick:function(e){return F(e)},children:[Object(T.jsx)(o.b,{className:"link-style",to:"/sightings-map",children:Object(T.jsx)("div",{className:"button",children:Object(T.jsx)("span",{children:"Submit"})})}),Object(T.jsx)("img",{src:I,className:"submit ufoIcon",alt:"hovering ufo"})]})}),Object(T.jsx)("div",{className:"container",children:Object(T.jsxs)("a",{href:"/#",target:"_blank",onClick:function(e){return F(e)},children:[Object(T.jsx)(o.b,{className:"link-style",to:"/",children:Object(T.jsx)("div",{className:"button",children:Object(T.jsx)("span",{children:"Home"})})}),Object(T.jsx)("img",{src:I,className:"submit ufoIcon",alt:"hovering ufo"})]})})]})]})]})]})})},k=(s(45),s(16)),M=s.p+"static/media/ufobeam.ea8231a2.png",R=s.p+"static/media/alienmarker.b1725d72.png",D=s.p+"static/media/skylights.af9f465f.png",L=s.p+"static/media/blue-blur.7640ae6a.png",F=s.p+"static/media/green-blur.fee846fe.png",H=s.p+"static/media/red-blur.48392dab.png",U=s.p+"static/media/alienstock.157bcffd.jpeg",G=s.p+"static/media/lightsstock.3bb0aaf2.jpeg",P=s.p+"static/media/ufostock.4ce3bdeb.jpeg",W={width:"90vw",height:"80vh"},K={lat:39.8283,lng:-98.5795},z=function(e){switch(e){case"sighting":return G;case"encounter":return U;case"abduction":return P;default:return G}},V=function(e,t){switch(e){case"sighting":return t[0];case"encounter":case"contact":return t[1];case"abduction":return t[2];default:return t[0]}},B=function(e,t){var s=new Date,i=new Date(s.getFullYear(),s.getMonth(),s.getDate()-s.getDay()-7),a=new Date(s.getFullYear(),s.getMonth(),s.getDate()-s.getDay()-30),c=new Date(e);return c>=i?t[0]:c<i&&c>a?t[1]:c<=a?t[2]:t[0]},Y=function(e){var t=document.createElement("div"),s=document.createElement("div");s.id="legend",s.style.backgroundColor="#fff",s.style.border="2px solid #fff",s.style.borderRadius="3px",s.style.boxShadow="0 2px 6px rgba(0,0,0,.3)",s.style.cursor="pointer",s.style.marginBottom="22px",s.style.marginTop="10px",s.style.textAlign="center",s.title="Reset map zoom",t.appendChild(s);var i=document.createElement("div");i.style.color="rgb(25,25,25)",i.style.fontFamily="Roboto,Arial,sans-serif",i.style.fontSize="16px",i.style.lineHeight="38px",i.style.paddingLeft="30px",i.style.paddingRight="30px",i.innerHTML="Reset Zoom",t.appendChild(i);var a=[];a.push("<h2>Icon Legend</h2>"),a.push('<div style="display:flex; justify-content: space-between"><img className="legend-icon" width="25" height="25" src="'+D+'"><p>Lights in Sky</p></div>'),a.push('<div style="display:flex; justify-content: space-between"><img className="legend-icon" width="25" height="25" src="'+R+'"><p>Alien Sighting</p></div>'),a.push('<div style="display:flex; justify-content: space-between"><img className="legend-icon" width="25" height="25" src="'+M+'"><p>Abduction</p></div>'),a.push("<h2>Sighting Legend</h2>"),a.push('<div style="display:flex; justify-content: space-between"><img className="legend-icon" width="25" height="25" src="'+H+'"><p>Within last week</p></div>'),a.push('<div style="display:flex; justify-content: space-between"><img className="legend-icon" width="25" height="25" src="'+F+'"><p>Within last month</p></div>'),a.push('<div style="display:flex; justify-content: space-between"><img className="legend-icon" width="25" height="25" src="'+L+'"><p>Over a month</p></div>'),s.innerHTML=a.join(""),s.index=1,e.controls[window.google.maps.ControlPosition.LEFT_BOTTOM].push(t)},q=["rgba(0, 255, 255, 0)","rgba(0, 255, 255, 1)","rgba(0, 191, 255, 1)","rgba(0, 127, 255, 1)","rgba(0, 63, 255, 1)","rgba(0, 0, 255, 1)","rgba(0, 0, 223, 1)","rgba(0, 0, 191, 1)","rgba(0, 0, 159, 1)","rgba(0, 0, 127, 1)","rgba(63, 0, 91, 1)","rgba(127, 0, 63, 1)","rgba(191, 0, 31, 1)","rgba(255, 0, 0, 1)"],J=["places","visualization"],X=function(e,t){var s=document.createElement("div");s.id="toggle-heatmap",s.style.backgroundColor="#fff",s.style.border="2px solid #fff",s.style.borderRadius="3px",s.style.boxShadow="0 2px 6px rgba(0,0,0,.3)",s.style.cursor="pointer",s.style.marginBottom="22px",s.style.marginTop="10px",s.style.textAlign="center",s.title="Click to center map",e.appendChild(s);var i=document.createElement("div");i.style.color="rgb(25,25,25)",i.style.fontFamily="Roboto,Arial,sans-serif",i.style.fontSize="16px",i.style.lineHeight="38px",i.style.paddingLeft="5px",i.style.paddingRight="5px",i.innerHTML="Center Map",s.appendChild(i),s.addEventListener("click",(function(){t.setCenter(K)}));var a=document.createElement("div");a.id="reset-zoom",a.style.backgroundColor="#fff",a.style.border="2px solid #fff",a.style.borderRadius="3px",a.style.boxShadow="0 2px 6px rgba(0,0,0,.3)",a.style.cursor="pointer",a.style.marginBottom="22px",a.style.marginTop="10px",a.style.textAlign="center",a.title="Reset map zoom",e.appendChild(a);var c=document.createElement("div");c.style.color="rgb(25,25,25)",c.style.fontFamily="Roboto,Arial,sans-serif",c.style.fontSize="16px",c.style.lineHeight="38px",c.style.paddingLeft="5px",c.style.paddingRight="5px",c.innerHTML="Reset Zoom",a.appendChild(c),a.addEventListener("click",(function(){t.setZoom(5)})),t.controls[window.google.maps.ControlPosition.TOP_CENTER].push(e)},Z=[{elementType:"geometry",stylers:[{color:"#1d2c4d"}]},{elementType:"labels.text.fill",stylers:[{color:"#8ec3b9"}]},{elementType:"labels.text.stroke",stylers:[{color:"#1a3646"}]},{featureType:"administrative.country",elementType:"geometry.stroke",stylers:[{color:"#4b6878"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#64779e"}]},{featureType:"administrative.province",elementType:"geometry.stroke",stylers:[{color:"#4b6878"}]},{featureType:"landscape.man_made",elementType:"geometry.stroke",stylers:[{color:"#334e87"}]},{featureType:"landscape.natural",elementType:"geometry",stylers:[{color:"#023e58"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#283d6a"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#6f9ba5"}]},{featureType:"poi",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#023e58"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#3C7680"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#304a7d"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#98a5be"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#2c6675"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#255763"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#b0d5ce"}]},{featureType:"road.highway",elementType:"labels.text.stroke",stylers:[{color:"#023e58"}]},{featureType:"transit",elementType:"labels.text.fill",stylers:[{color:"#98a5be"}]},{featureType:"transit",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"transit.line",elementType:"geometry.fill",stylers:[{color:"#283d6a"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#3a4762"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#0e1626"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#4e6d70"}]}],Q=[{name:"ALABAMA",abbreviation:"AL"},{name:"ALASKA",abbreviation:"AK"},{name:"ARIZONA",abbreviation:"AZ"},{name:"ARKANSAS",abbreviation:"AR"},{name:"CALIFORNIA",abbreviation:"CA"},{name:"COLORADO",abbreviation:"CO"},{name:"CONNECTICUT",abbreviation:"CT"},{name:"DELAWARE",abbreviation:"DE"},{name:"DISTRICT OF COLUMBIA",abbreviation:"DC"},{name:"FLORIDA",abbreviation:"FL"},{name:"GEORGIA",abbreviation:"GA"},{name:"GUAM",abbreviation:"GU"},{name:"HAWAII",abbreviation:"HI"},{name:"IDAHO",abbreviation:"ID"},{name:"ILLINOIS",abbreviation:"IL"},{name:"INDIANA",abbreviation:"IN"},{name:"IOWA",abbreviation:"IA"},{name:"KANSAS",abbreviation:"KS"},{name:"KENTUCKY",abbreviation:"KY"},{name:"LOUISIANA",abbreviation:"LA"},{name:"MAINE",abbreviation:"ME"},{name:"MARYLAND",abbreviation:"MD"},{name:"MASSACHUSETTS",abbreviation:"MA"},{name:"MICHIGAN",abbreviation:"MI"},{name:"MINNESOTA",abbreviation:"MN"},{name:"MISSISSIPPI",abbreviation:"MS"},{name:"MISSOURI",abbreviation:"MO"},{name:"MONTANA",abbreviation:"MT"},{name:"NEBRASKA",abbreviation:"NE"},{name:"NEVADA",abbreviation:"NV"},{name:"NEW HAMPSHIRE",abbreviation:"NH"},{name:"NEW JERSEY",abbreviation:"NJ"},{name:"NEW MEXICO",abbreviation:"NM"},{name:"NEW YORK",abbreviation:"NY"},{name:"NORTH CAROLINA",abbreviation:"NC"},{name:"NORTH DAKOTA",abbreviation:"ND"},{name:"OHIO",abbreviation:"OH"},{name:"OKLAHOMA",abbreviation:"OK"},{name:"OREGON",abbreviation:"OR"},{name:"PALAU",abbreviation:"PW"},{name:"PENNSYLVANIA",abbreviation:"PA"},{name:"PUERTO RICO",abbreviation:"PR"},{name:"RHODE ISLAND",abbreviation:"RI"},{name:"SOUTH CAROLINA",abbreviation:"SC"},{name:"SOUTH DAKOTA",abbreviation:"SD"},{name:"TENNESSEE",abbreviation:"TN"},{name:"TEXAS",abbreviation:"TX"},{name:"UTAH",abbreviation:"UT"},{name:"VERMONT",abbreviation:"VT"},{name:"VIRGINIA",abbreviation:"VA"},{name:"WASHINGTON",abbreviation:"WA"},{name:"WEST VIRGINIA",abbreviation:"WV"},{name:"WISCONSIN",abbreviation:"WI"},{name:"WYOMING",abbreviation:"WY"}],$=function(){var e,t=Object(i.useState)(null),s=Object(C.a)(t,2),a=s[0],c=s[1],l=Object(i.useState)(null),r=Object(C.a)(l,2),j=r[0],b=r[1],d=Object(i.useState)(!0),O=Object(C.a)(d,2),x=O[0],u=O[1],p=Object(i.useState)(!1),h=Object(C.a)(p,2),g=h[0],f=h[1],y=Object(n.c)((function(e){return e.sightingsReducer})),N=Object(k.e)({id:"google-map-script",googleMapsApiKey:"".concat("AIzaSyC4MPnXNz8txiScW63KMhoqFAs4K90VsA0"),libraries:J}).isLoaded,v=function(){return y.sightings.map((function(e){var t=e.created_at.split(",")[0],s=Date.parse(t);return Object(m.a)(Object(m.a)({},e),{},{parsedDate:s})}))},S=function(e,t,s){return e.map((function(e,i){var a={lat:parseFloat(e.lat),lng:parseFloat(e.long)},n=t===V?e.event_type:e.created_at;return Object(T.jsx)(k.d,{icon:{url:t(n,s),scaledSize:new window.google.maps.Size(50,50)},position:a,onMouseDown:function(){b(e)},onMouseUp:function(){c(a)}},i)}))};return N?Object(T.jsxs)("main",{className:"main-main",children:[Object(T.jsx)(o.b,{className:"link-style",to:"/",children:Object(T.jsx)("h1",{className:"glitch","data-text":"UFOMG",children:"UFOMG"})}),Object(T.jsxs)("div",{className:"button-div",children:[Object(T.jsx)("button",{onClick:function(){u(!x)},className:"main-button",children:"Toggle HeatMap"}),Object(T.jsx)("button",{onClick:function(){f(!g)},className:"main-button",children:"Show Recent Activity"})]}),Object(T.jsxs)(k.a,{onLoad:function(e){return function(e){var t=document.createElement("div");t.id="custom-buttons",X(t,e),Y(e)}(e)},options:{styles:Z},mapContainerStyle:W,center:K,zoom:5,children:[x&&Object(T.jsx)(k.b,{options:{gradient:q,radius:30},data:(e=y,e.sightings.map((function(e){return new window.google.maps.LatLng(parseFloat(e.lat),parseFloat(e.long))})))}),!g&&S(y.sightings,V,[D,R,M]),g&&function(){var e=v().sort((function(e,t){return t.parsedDate-e.parsedDate}));return S(e,B,[H,F,L])}(),a&&Object(T.jsx)(k.c,{onCloseClick:function(){c(null)},position:a,children:Object(T.jsxs)("div",{children:[Object(T.jsxs)("div",{children:[Object(T.jsxs)("div",{className:"map-info-div",children:[Object(T.jsxs)("h1",{children:[Object(T.jsx)("span",{children:"Name:"})," ",j.name?j.name:"anonymous"]}),Object(T.jsxs)("h1",{children:[Object(T.jsx)("span",{children:"Description:"})," ",j.description]}),Object(T.jsxs)("h1",{children:[Object(T.jsx)("span",{children:"Event:"})," ",j.event_type]})]}),Object(T.jsx)(o.b,{className:"link-style",to:"/comment-page/".concat(j.id),children:Object(T.jsx)("button",{className:"button",children:"Comment"})})]}),j.image&&Object(T.jsx)("img",{className:"site-image",src:j.image,alt:"alien ".concat(j.event_type)}),!j.image&&Object(T.jsx)("img",{className:"site-image",src:z(j.event_type),alt:"alien ".concat(j.event_type)})]})})]})]}):Object(T.jsx)(T.Fragment,{})},ee=function(){return Object(T.jsx)("main",{className:"map-main",children:Object(T.jsx)($,{})})},te=s(26),se=s.n(te),ie=s(32),ae=(s(47),function(){var e=Object(i.useState)(""),t=Object(C.a)(e,2),s=t[0],a=t[1],c=Object(i.useState)([]),l=Object(C.a)(c,2),r=l[0],j=l[1],b=Object(n.c)((function(e){return e.sightingsReducer})),m=function(e){return b.sightings.filter((function(t){return t.state.toLowerCase()===e.toLowerCase()}))},d=function(e){var t=[],s=[];return e.forEach((function(e){t.push(fetch("https://ancient-mesa-60922.herokuapp.com/api/v1/reports/".concat(e.id)).then((function(e){return e.json()})))})),Promise.all(t).then((function(e){return e.forEach((function(e){s.push(e)})),s}))};Object(i.useEffect)((function(){O()}),[s]);var O=function(){var e=Object(ie.a)(se.a.mark((function e(){var t,i;return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=m(s),e.next=3,d(t);case 3:return i=e.sent,e.abrupt("return",j(i));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(T.jsxs)("main",{className:"filter-main",children:[Object(T.jsx)(o.b,{className:"link-style",to:"/",children:Object(T.jsx)("h1",{className:"glitch","data-text":"UFOMG",children:"UFOMG"})}),Object(T.jsx)("div",{className:"filter-div",children:Object(T.jsxs)("aside",{className:"filter-aside",children:[Object(T.jsx)("h3",{children:"Show Sightings By State"}),Object(T.jsxs)("select",{value:s,onChange:function(e){a(e.target.value)},className:"drop-down",children:[Object(T.jsx)("option",{disabled:!!s,children:"-- Choose State --"}),Q.map((function(e,t){return Object(T.jsx)("option",{value:"".concat(e.abbreviation),children:"".concat(e.name)},t)}))]})]})}),Object(T.jsx)("div",{className:"filter-section",children:r&&function(e){return e.map((function(e){var t,s=(t=e.comments).length>0?t.map((function(e,t){return Object(T.jsx)("h1",{className:"single-comment",children:"".concat(e)},t)})):Object(T.jsx)("h1",{className:"single-comment",children:"No comments yet"}),i=e.image?e.image:z(e.event_type);return Object(T.jsxs)("article",{className:"single-sighting",children:[Object(T.jsx)("div",{className:"stock-div",children:Object(T.jsx)("img",{src:i,className:"sighting-image",alt:e.event_type})}),Object(T.jsxs)("div",{className:"sighting-details",children:[Object(T.jsxs)("h1",{className:"report-info",children:["Name: ","".concat(e.name)]}),Object(T.jsxs)("h1",{className:"report-info",children:["City: ","".concat(e.city)]}),Object(T.jsxs)("h1",{className:"report-info",children:["Event Type: ","".concat(e.event_type)]}),Object(T.jsxs)("h1",{className:"report-info",children:["Description: ","".concat(e.description)]}),Object(T.jsx)("h1",{className:"report-info",children:"Comments:"}),Object(T.jsx)("div",{className:"comments-div",children:s}),Object(T.jsx)(o.b,{className:"link-style",to:"/comment-page/".concat(e.id),children:Object(T.jsx)("button",{className:"btns",children:"Add a comment..."})})]})]})}))}(r)})]})}),ce=(s(48),function(e){var t=e.id,s=Object(i.useState)("anonymous"),a=Object(C.a)(s,2),c=a[0],l=a[1],r=Object(i.useState)(""),j=Object(C.a)(r,2),o=j[0],b=j[1],m=Object(n.b)();return Object(T.jsxs)("form",{className:"comment-form",id:"comment-form",onSubmit:function(e){e.preventDefault();var s="".concat(o," ~").concat(c);v(t,s,m),document.getElementById("comment-form").reset()},children:[Object(T.jsxs)("div",{className:"form__group field",children:[Object(T.jsx)("input",{type:"input",className:"form__field",placeholder:"Name",name:"name",id:"name",onChange:function(e){l(e.target.value)}}),Object(T.jsx)("label",{htmlFor:"name",className:"form__label",children:"Name (optional)"})]}),Object(T.jsxs)("div",{className:"form__group field",children:[Object(T.jsx)("input",{type:"input",className:"form__field",placeholder:"Comment",name:"comment",id:"comment",onChange:function(e){var t=e.target.value;b(t)},required:!0}),Object(T.jsx)("label",{htmlFor:"comment",className:"form__label",children:"Comment"})]}),Object(T.jsx)("button",{className:"btns",children:"Comment"})]})}),ne=(s(49),function(e){var t=e.id,s=Object(n.c)((function(e){return e.sightingsReducer})),a=Object(n.b)();Object(i.useEffect)((function(){y(a,t)}),[a,t]);var c=function(){var e=s.singleSighting.comments;if(e)return e.map((function(e,t){return Object(T.jsx)("div",{className:"comment-div",children:Object(T.jsx)("p",{children:e})},t)}))}();return Object(T.jsxs)("section",{className:"comment-section",children:[Object(T.jsx)(o.b,{className:"link-style",to:"/",children:Object(T.jsx)("h1",{className:"glitch","data-text":"UFOMG",children:"UFOMG"})}),Object(T.jsxs)("div",{className:"sighting-card",children:[Object(T.jsxs)("div",{className:"comment-details",children:[Object(T.jsx)("img",{src:s.singleSighting.image,className:"comment-image",alt:s.singleSighting.event_type}),Object(T.jsxs)("article",{className:"comment-article",children:[Object(T.jsxs)("h1",{children:["Name: ",s.singleSighting.name]}),Object(T.jsxs)("h1",{children:["City/State: ",s.singleSighting.city,","," ",s.singleSighting.state]}),Object(T.jsxs)("h1",{children:["Description: ",s.singleSighting.description]}),Object(T.jsx)("h1",{children:"Comments:"}),Object(T.jsx)("div",{className:"display-comment",children:c})]})]}),Object(T.jsx)(ce,{id:t})]})]})}),le=s(3);var re=function(){return Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)(le.c,{children:[Object(T.jsx)(le.a,{exact:!0,path:"/",component:A}),Object(T.jsx)(le.a,{exact:!0,path:"/ufomg.github.io/ufomg/ufomg-fe",component:A}),Object(T.jsx)(le.a,{exact:!0,path:"/report-form",component:w}),Object(T.jsx)(le.a,{exact:!0,path:"/sightings-map",component:ee}),Object(T.jsx)(le.a,{exact:!0,path:"/sighting-research",component:ae}),Object(T.jsx)(le.a,{exact:!0,path:"/comment-page/:id",render:function(e){var t=e.match;return Object(T.jsx)(ne,{id:t.params.id})}})]})})},je=(s(50),Object(l.createStore)(f,Object(j.composeWithDevTools)(Object(l.applyMiddleware)(r.a))));c.a.render(Object(T.jsx)(n.a,{store:je,children:Object(T.jsx)(o.a,{children:Object(T.jsx)(re,{})})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.9b3adab7.chunk.js.map