(this["webpackJsonpdevchallenge-image-upload"]=this["webpackJsonpdevchallenge-image-upload"]||[]).push([[0],{68:function(e,t,a){},69:function(e,t,a){},98:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(0),r=a.n(c),i=a(13),o=a.n(i),s=(a(68),a(17)),l=(a(69),a(22)),d=a(34),b=a(39),j=a.n(b),u=a(50),m=a(124),f=a(4),h=a(7),O=a(38),g=a.n(O),p=a(121),x=a(123),v=Object(p.a)((function(e){return{root:{borderRadius:12,height:10},barColorPrimary:{backgroundColor:"#2f80ed"},bar1Indeterminate:{borderRadius:12},bar2Indeterminate:{borderRadius:12,display:"none"},colorPrimary:{backgroundColor:"f2f2f2"}}}));function y(){var e=v();return Object(n.jsx)("div",{style:{width:"90%",alignSelf:"center"},children:Object(n.jsx)(x.a,{classes:{root:e.root,bar1Indeterminate:e.bar1Indeterminate,bar2Indeterminate:e.bar2Indeterminate,barColorPrimary:e.barColorPrimary}})})}var w=Object(h.a)({root:{background:"#2f80ed","&:hover":{backgroundColor:"#2f80ed"},borderRadius:10}})((function(e){var t=function(){var e=Object(u.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p(!0),(a=new FormData).append("file",t.target.files[0]),g.a.post("".concat(document.baseURI,"api/upload"),a,{}).then((function(e){"OK"===e.statusText&&setTimeout((function(){p(!1),S(e.data.filename)}),3e3)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a=Object(c.useRef)(!0);Object(c.useLayoutEffect)((function(){a.current?a.current=!1:""!=w&&(e.getFileName(w),e.liftStateUp(!0))}));var r=e.classes,i=(e.children,e.className),o=Object(d.a)(e,["classes","children","className"]),b=Object(c.useState)(!1),h=Object(s.a)(b,2),O=h[0],p=h[1],x=Object(c.useState)(""),v=Object(s.a)(x,2),w=v[0],S=v[1];return Object(n.jsx)("div",{className:"mainDiv".concat(O?"small":""),children:O?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{style:{fontSize:24,color:"4f4f4f",width:"90%",marginBottom:15,fontFamily:"'Poppins',sans-serif"},children:"Uploading..."}),Object(n.jsx)(y,{})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"innerDiv",children:[Object(n.jsx)("span",{style:{fontWeight:"400",fontSize:30,color:"#4f4f4f"},children:"Upload your image"}),Object(n.jsx)("p",{style:{marginTop:20,color:"#828282"},children:"File should be Jpeg, Png..."}),Object(n.jsxs)("div",{className:"dragImage",children:[Object(n.jsx)("img",{style:{height:"40%",width:"40%",justifySelf:"center"},src:"image.svg",alt:"imagesd"}),Object(n.jsx)("p",{style:{color:"#bdbdbd"},children:"Drag & Drop your image here"})]})]}),Object(n.jsx)("div",{style:{color:"#bdbdbd",marginBottom:25,pointerEvents:"none"},children:"Or"}),Object(n.jsxs)(m.a,Object(l.a)(Object(l.a)({className:Object(f.a)(r.root,i)},o),{},{variant:"contained",color:"primary",component:"label",children:["Choose a file",Object(n.jsx)("input",{onChange:t,type:"file",hidden:!0})]}))]})})})),S=a(128),N=a(125),C=a(55),k=a.n(C);var I=Object(h.a)({root:{background:"#2f80ed",height:"100%",width:"20%","&:hover":{backgroundColor:"#2f80ed"},borderRadius:10}})((function(e){var t=Object(c.useState)(!1),a=Object(s.a)(t,2),r=a[0],i=a[1],o=e.classes,b=(e.children,e.className),j=Object(d.a)(e,["classes","children","className"]),u=function(e,t){"clickaway"!==t&&i(!1)};return Object(n.jsxs)("div",{className:"mainDivuploaded",children:[Object(n.jsx)(S.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:r,autoHideDuration:6e3,onClose:u,message:"Text Copied",action:Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(N.a,{size:"small","aria-label":"close",color:"inherit",onClick:u,children:Object(n.jsx)(k.a,{fontSize:"small"})})})}),Object(n.jsx)("i",{class:"material-icons",style:{fontSize:64,color:"green"},children:"check_circle"}),Object(n.jsx)("h1",{style:{fontSize:32},children:"Uploaded Successfully"}),Object(n.jsx)("div",{className:"innerDiv2",children:Object(n.jsx)("img",{style:{height:"100%",width:"100%",borderRadius:12},src:"".concat(document.baseURI,"api/image/").concat(e.fileName)})}),Object(n.jsxs)("div",{style:{display:"flex",flexDirection:"row",border:"4px solid #e0e0e0",borderRadius:12,height:"10%",width:"75%",alignItems:"center",background:"#f6f8fb"},children:[Object(n.jsx)("div",{style:{width:"90%",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",fontSize:18,fontWeight:500,margin:"0 0 0 10px"},children:"".concat(document.baseURI,"api/image/").concat(e.fileName)}),Object(n.jsx)(m.a,Object(l.a)(Object(l.a)({onClick:function(){navigator.clipboard.writeText("".concat(document.baseURI,"api/image/").concat(e.fileName)),i(!0)},className:Object(f.a)(o.root,b)},j),{},{variant:"contained",color:"primary",component:"label",children:"Copy"}))]})]})}));var F=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),a=t[0],r=t[1],i=Object(c.useState)(""),o=Object(s.a)(i,2),l=o[0],d=o[1];return Object(n.jsx)("div",{className:"outerDiv",children:a?Object(n.jsx)(I,{fileName:l}):Object(n.jsx)(w,{liftStateUp:function(e){r(e)},getFileName:function(e){d(e)}})})},R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,129)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))},D=a(56),U=Object(D.a)({typography:{button:{textTransform:"none"}}}),z=a(126),P=a(127);o.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsxs)(z.a,{theme:U,children:[Object(n.jsx)(P.a,{}),Object(n.jsx)(F,{})]})}),document.getElementById("root")),R()}},[[98,1,2]]]);
//# sourceMappingURL=main.facedb3c.chunk.js.map