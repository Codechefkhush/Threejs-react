(this["webpackJsonpthreejs-react"]=this["webpackJsonpthreejs-react"]||[]).push([[0],{47:function(e,t,n){},48:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(36),o=n.n(i),s=(n(47),n(9)),a=(n(48),n(10)),j=n(55),b=n(37),l=n(6);Object(a.b)({OrbitControls:b.a});var u=function(){var e=Object(a.e)(),t=e.camera,n=e.gl;return Object(l.jsx)("orbitControls",{attach:"orbitControls",args:[t,n.domElement]})},d=n(7),h=n(0),O=function(e){var t=Object(a.d)(h.TextureLoader,"/threejs-react/modern-background-gray.jpeg"),n=Object(a.e)().gl,r=Object(c.useMemo)((function(){return new h.WebGLCubeRenderTarget(t.image.height).fromEquirectangularTexture(n,t)}),[n,t]);return Object(l.jsx)("primitive",{attach:"background",object:r})},f=function(e){var t=Object(j.c)((function(){return Object(d.a)({args:[20,1,10]},e)})),n=Object(s.a)(t,2),c=n[0];n[1];return Object(l.jsxs)("mesh",Object(d.a)(Object(d.a)({ref:c},e),{},{receiveShadow:!0,children:[Object(l.jsx)("boxBufferGeometry",{args:[200,1,200]}),Object(l.jsx)("meshPhysicalMaterial",{color:"black",opacity:1})]}))},g={activeMesh:{},activeMeshName:"Capot001_CAR_PAINT_0",cameraPos:new h.Vector3(9,2,4),target:new h.Vector3(4,0,0),shouldUpdate:!0},p={height:50,width:50,borderRadius:"50%",cursor:"pointer"},x=function(e){var t=function(e){g.activeMesh&&(g.activeMesh.material.color=new h.Color(e.target.style.background))};return Object(l.jsxs)("div",{style:{position:"absolute",zIndex:1,left:0,right:0,margin:"auto",width:"fit-content",display:"flex",top:"20px"},children:[Object(l.jsx)("div",{onClick:t,style:Object(d.a)({background:"rgb(243, 246, 247)"},p)}),Object(l.jsx)("div",{onClick:t,style:Object(d.a)({background:"black"},p)}),Object(l.jsx)("div",{onClick:t,style:Object(d.a)({background:"red"},p)}),Object(l.jsx)("div",{onClick:t,style:Object(d.a)({background:"rgb(30, 75, 93)"},p)}),Object(l.jsx)("div",{onClick:t,style:Object(d.a)({background:"#000d89"},p)}),Object(l.jsx)("div",{onClick:t,style:Object(d.a)({background:"#175421"},p)})]})},m=n(18),v=function(e){var t=e.position,n=void 0===t?[0,0,0]:t,c=e.offset,r=void 0===c?[0,0,0]:c,i=e.dims,o=void 0===i?[1,1,1]:i,a=e.visible,b=void 0!==a&&a,u=e.children,d=Object(j.c)((function(){return{mass:1,args:o,position:n}})),h=Object(s.a)(d,2),O=h[0],f=h[1];return Object(l.jsxs)("group",{ref:O,api:f,children:[Object(l.jsxs)("mesh",{scale:o,visible:b,children:[Object(l.jsx)("boxBufferGeometry",{}),Object(l.jsx)("meshPhysicalMaterial",{wireframe:!0})]}),Object(l.jsx)("group",{position:r,children:u})]})},w=n(41),y=function(e){var t,n=Object(a.d)(w.a,"/threejs-react"+e.path);return n.animations.length>0&&(t=new h.AnimationMixer(n.scene),n.animations.forEach((function(e){t.clipAction(e).play()}))),Object(a.c)((function(e,n){var c;null===(c=t)||void 0===c||c.update(n)})),n.scene.traverse((function(e){e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0,e.material.side=h.FrontSide)})),Object(l.jsx)("primitive",{object:n.scene,scale:e.scale,position:e.position})},k=n(42);Object(a.b)({DragControls:k.a});var C=function(e){var t=Object(c.useRef)(),n=Object(c.useRef)(),r=Object(c.useState)([]),i=Object(s.a)(r,2),o=i[0],j=i[1],b=Object(a.e)(),u=b.camera,d=b.gl,h=b.scene;return Object(c.useEffect)((function(){j(t.current.children)}),[]),Object(c.useEffect)((function(){n.current.addEventListener("hoveron",(function(e){return h.orbitControls.enabled=!1})),n.current.addEventListener("hoveroff",(function(e){return h.orbitControls.enabled=!0})),n.current.addEventListener("dragstart",(function(e){var t;console.log(e.object),null===(t=e.object.api)||void 0===t||t.mass.set(0)})),n.current.addEventListener("dragend",(function(e){var t;return null===(t=e.object.api)||void 0===t?void 0:t.mass.set(1)})),n.current.addEventListener("drag",(function(e){var t,n;null===(t=e.object.api)||void 0===t||t.position.copy(e.object.position),null===(n=e.object.api)||void 0===n||n.velocity.set(0,0,0)}))}),[o]),Object(l.jsxs)("group",{ref:t,children:[Object(l.jsx)("dragControls",{transformGroup:e.transformGroup,ref:n,args:[o,u,d.domElement]}),e.children]})},M=function(e){return Object(m.a)(e),Object(l.jsxs)(c.Suspense,{fallback:null,children:[Object(l.jsx)(C,{transformGroup:!0,children:Object(l.jsx)(v,{position:[4,4,0],dims:[3,2,6],offset:[0,-.4,.8],children:Object(l.jsx)(y,{path:"/tesla_model_3/scene.gltf",scale:new Array(3).fill(.01)})})}),Object(l.jsx)(C,{transformGroup:!0,children:Object(l.jsx)(v,{position:[-4,4,0],dims:[3,2,7],offset:[0,-.8,.2],children:Object(l.jsx)(y,{path:"/tesla_model_s/scene.gltf",scale:new Array(3).fill(.013)})})}),Object(l.jsx)(C,{transformGroup:!0,children:Object(l.jsx)(v,{position:[-8,0,0],dims:[3,2,7],offset:[-4,-.9,-.4],children:Object(l.jsx)(y,{path:"/tesla_roadster_2020_interior/scene.gltf",scale:new Array(3).fill(2)})})})]})},P=function(e){return Object(m.a)(e),Object(a.c)((function(e){var t=e.camera,n=e.scene;(g.activeMesh.name!==g.activeMeshName&&(g.activeMesh=n.getObjectByName(g.activeMeshName)||{}),g.shouldUpdate)&&(t.position.lerp(g.cameraPos,.1),n.orbitControls.target.lerp(g.target,.1),n.orbitControls.update(),t.position.clone().sub(g.cameraPos).length()<.1&&(g.shouldUpdate=!1))})),null},S=n(14),E={zIndex:1,position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",bottom:"5vh",height:"40px",width:"40px",backgroundColor:"rgb(30, 75, 93)",color:"black",borderRadius:"50%",fontSize:20,fontWeight:"bold",border:"1px solid black",cursor:"pointer"},_=function(e){Object(m.a)(e);var t=[{cameraPos:[-7,2,5],target:[-12,0,0],name:"Object_6"},{cameraPos:[1,2,5],target:[-4,0,0],name:"object005_bod_0"},{cameraPos:[9,2,4],target:[4,0,0],name:"Capot001_CAR_PAINT_0"}],n=2,c=function(e){var c,r;"right"===e&&n<t.length-1?n+=1:"left"===e&&n>0?n-=1:console.log("no action");var i=n;(c=g.cameraPos).set.apply(c,Object(S.a)(t[i].cameraPos)),(r=g.target).set.apply(r,Object(S.a)(t[i].target)),g.activeMeshName=t[i].name,g.shouldUpdate=!0};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("button",{onClick:function(e){return c("left")},style:Object(d.a)({left:"40vw"},E),children:"<"}),Object(l.jsx)("button",{onClick:function(e){return c("right")},style:Object(d.a)({right:"40vw"},E),children:">"})]})},L=function(e){var t=Object(c.useRef)(),n=Object(a.e)().scene;return Object(c.useEffect)((function(){n.lights?n.lights.push(t):n.lights=[t]}),[]),Object(l.jsxs)("mesh",Object(d.a)(Object(d.a)({},e),{},{ref:t,children:[Object(l.jsx)("pointLight",{castShadow:!0,"shadow-mapSize-height":Math.pow(2,10),"shadow-mapSize-width":Math.pow(2,10),"shadow-radius":10}),Object(l.jsx)("sphereBufferGeometry",{args:[.2,20,20]}),Object(l.jsx)("meshPhongMaterial",{emissive:"white"})]}))},G=function(e){return Object(m.a)(e),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("ambientLight",{intensity:.2}),Object(l.jsx)("directionalLight",{intensity:.5,position:[6,3,0]}),Object(l.jsx)(L,{position:[-6,3,0]}),Object(l.jsx)(L,{position:[0,3,0]}),Object(l.jsx)(L,{position:[6,3,0]})]})},A=n(33),R=function(){var e=Object(c.useState)(null),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(a.e)().scene;return Object(c.useEffect)((function(){i.lights&&3===i.lights.length&&r(i.lights)}),[i.lights]),n?Object(l.jsx)(A.b,{children:Object(l.jsx)(A.a,{focusDistance:0,focalLength:.02,bokehScale:2,height:480})}):null},B=n(43),F=n.n(B),I=function(){var e=Object(c.useRef)();return Object(a.c)((function(t){F.a.get(e.current,"rotation.y")&&(e.current.rotation.y+=.1,e.current.rotation.x+=.1)})),Object(l.jsxs)("mesh",{ref:e,position:[0,3,0],children:[Object(l.jsx)("dodecahedronBufferGeometry",{args:[1,1]}),Object(l.jsx)("meshPhysicalMaterial",{color:"rgb(30, 75, 93)",opacity:.5,side:h.DoubleSide})]})};var N=function(){var e=Object(c.useState)({width:window.innerWidth,height:window.innerHeight}),t=Object(s.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(){window.addEventListener("resize",i)}),[n]);var i=function(){r({width:window.innerWidth,height:window.innerHeight})};return Object(l.jsxs)("div",{style:{height:"100vh",width:"100vw"},children:[Object(l.jsx)(x,{}),Object(l.jsx)(_,{}),Object(l.jsxs)(a.a,{gl:{powerPreference:"high-performance",antialias:!1,stencil:!1,depth:!1},shadowMap:!0,style:{background:"black"},camera:{position:[7,7,7]},children:[Object(l.jsx)(c.Suspense,{fallback:Object(l.jsx)(I,{}),children:Object(l.jsx)(O,{windowDimensions:n})}),Object(l.jsx)(P,{}),Object(l.jsx)(G,{}),Object(l.jsx)(u,{}),Object(l.jsxs)(j.a,{children:[Object(l.jsx)(M,{}),Object(l.jsx)(f,{position:[0,-.5,0]})]}),Object(l.jsx)(R,{})]})]})},T=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,57)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),i(e),o(e)}))};o.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root")),T()}},[[54,1,2]]]);
//# sourceMappingURL=main.33123c81.chunk.js.map