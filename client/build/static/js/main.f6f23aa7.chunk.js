(this["webpackJsonpdevchallenge-image-upload"]=this["webpackJsonpdevchallenge-image-upload"]||[]).push([[0],{51:function(e,t,n){},52:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(0),r=n.n(a),i=n(11),s=n.n(i),o=(n(51),n(22)),l=(n(52),n(25)),d=n(44),j=n(24),b=n.n(j),u=n(37),h=n(97),f=n(4),p=n(10),O=n(38),g=n.n(O),m=n(93),v=n(98),x=Object(m.a)((function(e){return{root:{width:"90%","& > * + *":{marginTop:e.spacing(2)}}}}));function y(){var e=x();return Object(c.jsx)("div",{className:e.root,children:Object(c.jsx)(v.a,{})})}var S=Object(p.a)({root:{background:"#2f80ed","&:hover":{backgroundColor:"#2f80ed"},borderRadius:10}})((function(e){var t=function(){var t=Object(u.a)(b.a.mark((function t(n){var c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:O(!0),(c=new FormData).append("file",n.target.files[0]),g.a.post("http://localhost:5000/api/upload",c,{}).then((function(t){"OK"===t.statusText&&setTimeout((function(){O(!1),e.liftStateUp(!0)}),3e3)}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),n=e.classes,r=(e.children,e.className),i=Object(d.a)(e,["classes","children","className"]),s=Object(a.useState)(!1),j=Object(o.a)(s,2),p=j[0],O=j[1];return Object(c.jsx)("div",{className:"mainDiv".concat(p?"small":""),children:p?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{style:{fontSize:20,color:"4f4f4f",width:"90%",marginBottom:15},children:"Uploading..."}),Object(c.jsx)(y,{})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"innerDiv",children:[Object(c.jsx)("span",{style:{fontWeight:"400",fontSize:30,color:"#4f4f4f"},children:"Upload your image"}),Object(c.jsx)("p",{style:{marginTop:20,color:"#828282"},children:"File should be Jpeg, Png..."}),Object(c.jsxs)("div",{className:"dragImage",children:[Object(c.jsx)("img",{style:{height:"40%",width:"40%",justifySelf:"center"},src:"image.svg",alt:"imagesd"}),Object(c.jsx)("p",{style:{color:"#bdbdbd"},children:"Drag & Drop your image here"})]})]}),Object(c.jsx)("div",{style:{color:"#bdbdbd",marginBottom:25,pointerEvents:"none"},children:"Or"}),Object(c.jsxs)(h.a,Object(l.a)(Object(l.a)({className:Object(f.a)(n.root,r)},i),{},{variant:"contained",color:"primary",component:"label",children:["Choose a file",Object(c.jsx)("input",{onChange:t,type:"file",hidden:!0})]}))]})})}));var w=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(c.jsx)("div",{className:"outerDiv",children:n?Object(c.jsx)("div",{}):Object(c.jsx)(S,{liftStateUp:function(e){r(e)}})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,99)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))},N=n(43),D=Object(N.a)({typography:{button:{textTransform:"none"}}}),T=n(95),C=n(96);s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsxs)(T.a,{theme:D,children:[Object(c.jsx)(C.a,{}),Object(c.jsx)(w,{})]})}),document.getElementById("root")),F()}},[[76,1,2]]]);
//# sourceMappingURL=main.f6f23aa7.chunk.js.map