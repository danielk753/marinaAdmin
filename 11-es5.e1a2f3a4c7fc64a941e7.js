(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{tePd:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J");class u{constructor(l,n,e,t){this.nbMenuService=l,this.window=n,this.router=e,this.authService=t,this.items=[{title:"Dashboard",link:"/pages/dashboard",icon:"home-outline"},{title:"Caja",link:"/pages/caja",icon:"shopping-cart-outline"},{title:"Ventas",link:"/pages/ventas",icon:"npm-outline"},{title:"Compras",link:"/pages/compras",icon:"file-outline"},{title:"Productos",link:"/pages/productos",icon:"archive-outline"},{title:"Clientes",link:"/pages/clientes",icon:"people-outline"},{title:"Proveedores",link:"/pages/agentes",icon:"car-outline"}],this.state="collapsed",this.user=localStorage.getItem("user"),this.items2=[{title:"Cerrar sesi\xf3n"},{title:"Nueva cuenta"}]}ngOnInit(){this.nbMenuService.onItemClick().subscribe(l=>{l.tag&&(l.item.title.includes("Cerrar")?(this.authService.loguot(),this.router.navigate(["/login"])):this.router.navigate(["/create-account"]))})}onToggle(){this.state="expanded"==this.state?"collapsed":"expanded"}}const a=()=>e.e(6).then(e.bind(null,"mhqm")).then(l=>l.DashboardModuleNgFactory),i=()=>Promise.all([e.e(0),e.e(12)]).then(e.bind(null,"h2N+")).then(l=>l.ProductosModuleNgFactory),b=()=>Promise.all([e.e(0),e.e(7)]).then(e.bind(null,"JwQr")).then(l=>l.AgentesModuleNgFactory),o=()=>Promise.all([e.e(0),e.e(9)]).then(e.bind(null,"Zpjr")).then(l=>l.ClientesModuleNgFactory),s=()=>Promise.all([e.e(0),e.e(10)]).then(e.bind(null,"eAxk")).then(l=>l.ComprasModuleNgFactory),r=()=>e.e(8).then(e.bind(null,"elR2")).then(l=>l.CajaModuleNgFactory),c=()=>Promise.all([e.e(0),e.e(13)]).then(e.bind(null,"9Mwe")).then(l=>l.VentaModuleNgFactory);class d{}var h=e("pMnS"),p=e("jXVt"),m=e("tKwJ"),g=e("cUpR"),f=e("iInd"),S=e("SVse"),U=e("lGQG"),w=t.Gb({encapsulation:0,styles:[["h2[_ngcontent-%COMP%]{margin-left:30px}"]],data:{}});function y(l){return t.ec(0,[(l()(),t.Ib(0,0,null,null,8,"nb-actions",[["class","ml-auto"]],[[2,"full-width",null],[2,"size-tiny",null],[2,"size-small",null],[2,"size-medium",null],[2,"size-large",null],[2,"size-giant",null]],null,null,p.v,p.d)),t.Hb(1,49152,null,0,m.y,[],null,null),(l()(),t.Ib(2,0,null,0,6,"nb-action",[],[[2,"disabled",null]],null,null,p.u,p.c)),t.Hb(3,49152,null,0,m.x,[],null,null),(l()(),t.Ib(4,0,null,0,4,"nb-user",[["nbContextMenuTag","my-context-menu"]],[[2,"context-menu-host",null],[2,"size-tiny",null],[2,"size-small",null],[2,"size-medium",null],[2,"size-large",null],[2,"size-giant",null],[2,"shape-rectangle",null],[2,"shape-semi-round",null],[2,"shape-round",null]],null,null,p.L,p.t)),t.Zb(512,null,m.Pb,m.Pb,[m.Cc,t.m,t.J,m.xc]),t.Zb(512,null,m.Qb,m.Qb,[m.Jc,m.Ud,m.Pb]),t.Hb(7,4931584,null,0,m.Cb,[t.q,m.sc,m.Qb],{tag:[0,"tag"],items:[1,"items"]},null),t.Hb(8,49152,null,0,m.Vd,[g.b],{name:[0,"name"]},null)],(function(l,n){var e=n.component;l(n,7,0,"my-context-menu",e.items2),l(n,8,0,e.user)}),(function(l,n){l(n,0,0,t.Ub(n,1).fullWidth,t.Ub(n,1).tiny,t.Ub(n,1).small,t.Ub(n,1).medium,t.Ub(n,1).large,t.Ub(n,1).giant),l(n,2,0,t.Ub(n,3).disabled),l(n,4,0,t.Ub(n,7).contextMenuHost,t.Ub(n,8).tiny,t.Ub(n,8).small,t.Ub(n,8).medium,t.Ub(n,8).large,t.Ub(n,8).giant,t.Ub(n,8).rectangle,t.Ub(n,8).semiRound,t.Ub(n,8).round)}))}function k(l){return t.ec(0,[(l()(),t.Ib(0,0,null,null,20,"nb-layout",[],[[2,"window-mode",null],[2,"with-scroll",null],[2,"with-subheader",null]],[["window","scroll"],["window","resize"]],(function(l,n,e){var u=!0;return"window:scroll"===n&&(u=!1!==t.Ub(l,1).onScroll(e)&&u),"window:resize"===n&&(u=!1!==t.Ub(l,1).onResize(e)&&u),u}),p.E,p.m)),t.Hb(1,4374528,null,0,m.ec,[m.Ad,m.pd,t.q,t.P,m.o,m.f,t.M,m.fc,m.kc,m.jc,m.Sc,m.yc],null,null),(l()(),t.Ib(2,0,null,0,10,"nb-layout-header",[["class","align-items-center"],["fixed",""]],[[2,"fixed",null],[2,"subheader",null]],null,null,p.F,p.n)),t.Hb(3,49152,null,0,m.hc,[m.ec],{fixed:[0,"fixed"]},null),(l()(),t.Ib(4,0,null,0,3,"nb-icon",[["icon","menu"]],[[8,"innerHTML",1],[2,"status-primary",null],[2,"status-info",null],[2,"status-success",null],[2,"status-warning",null],[2,"status-danger",null],[2,"status-basic",null],[2,"status-control",null]],[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.onToggle()&&t),t}),p.C,p.k)),t.Hb(5,638976,null,0,m.Xb,[g.b,m.Yb,t.q,t.P],{icon:[0,"icon"],options:[1,"options"]},null),t.Xb(6,{type:0}),t.Xb(7,{animation:0}),(l()(),t.Ib(8,0,null,0,2,"a",[["class","pl-5"],["routerLink","/pages/dashboard"],["style","height: 100%"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t.Ub(l,9).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u),u}),null,null)),t.Hb(9,671744,null,0,f.o,[f.l,f.a,S.k],{routerLink:[0,"routerLink"]},null),(l()(),t.Ib(10,0,null,null,0,"img",[["alt","vida marina logo"],["src","/assets/brand.png"],["style","height: 100%"]],null,null,null,null,null)),(l()(),t.xb(16777216,null,0,1,null,y)),t.Hb(12,16384,null,0,S.n,[t.eb,t.Y],{ngIf:[0,"ngIf"]},null),(l()(),t.Ib(13,0,null,1,3,"nb-sidebar",[],[[2,"fixed",null],[2,"right",null],[2,"left",null],[2,"start",null],[2,"end",null],[2,"expanded",null],[2,"collapsed",null],[2,"compacted",null]],null,null,p.J,p.r)),t.Hb(14,770048,null,0,m.fd,[m.jd,m.Ad,t.q],{state:[0,"state"]},null),(l()(),t.Ib(15,0,null,1,1,"nb-menu",[],null,null,null,p.G,p.o)),t.Hb(16,4440064,null,0,m.pc,[m.o,t.M,m.ee,f.l],{items:[0,"items"]},null),(l()(),t.Ib(17,0,null,3,3,"nb-layout-column",[],[[2,"left",null],[2,"start",null]],null,null,p.D,p.l)),t.Hb(18,49152,null,0,m.dc,[],null,null),(l()(),t.Ib(19,16777216,null,0,1,"router-outlet",[],null,null,null,null,null)),t.Hb(20,212992,null,0,f.q,[f.b,t.eb,t.m,[8,null],t.j],null,null)],(function(l,n){var e=n.component;l(n,3,0,"");var t=l(n,7,0,l(n,6,0,"shake"));l(n,5,0,"menu",t),l(n,9,0,"/pages/dashboard"),l(n,12,0,e.user),l(n,14,0,e.state),l(n,16,0,e.items),l(n,20,0)}),(function(l,n){l(n,0,0,t.Ub(n,1).windowModeValue,t.Ub(n,1).withScrollValue,t.Ub(n,1).withSubheader),l(n,2,0,t.Ub(n,3).fixedValue,t.Ub(n,3).subheaderValue),l(n,4,0,t.Ub(n,5).html,t.Ub(n,5).primary,t.Ub(n,5).info,t.Ub(n,5).success,t.Ub(n,5).warning,t.Ub(n,5).danger,t.Ub(n,5).basic,t.Ub(n,5).control),l(n,8,0,t.Ub(n,9).target,t.Ub(n,9).href),l(n,13,0,t.Ub(n,14).fixedValue,t.Ub(n,14).rightValue,t.Ub(n,14).leftValue,t.Ub(n,14).startValue,t.Ub(n,14).endValue,t.Ub(n,14).expanded,t.Ub(n,14).collapsed,t.Ub(n,14).compacted),l(n,17,0,t.Ub(n,18).leftValue,t.Ub(n,18).startValue)}))}var v=t.Eb("app-pages",u,(function(l){return t.ec(0,[(l()(),t.Ib(0,0,null,null,1,"app-pages",[],null,null,null,k,w)),t.Hb(1,114688,null,0,u,[m.sc,m.o,f.l,U.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),C=e("s7LF"),x=e("IP0z"),M=e("QQfA"),H=e("zMNK"),I=e("/HVE"),z=e("hOhj");e.d(n,"PagesModuleNgFactory",(function(){return P}));var P=t.Fb(d,[],(function(l){return t.Rb([t.Sb(512,t.m,t.qb,[[8,[h.a,p.a,v]],[3,t.m],t.H]),t.Sb(4608,S.p,S.o,[t.D,[2,S.G]]),t.Sb(4608,C.q,C.q,[]),t.Sb(4608,m.Sc,m.Sc,[f.l]),t.Sb(6144,m.Ob,null,[x.b]),t.Sb(4608,M.d,M.d,[M.i,M.e,t.m,M.h,M.f,t.z,t.J,S.e,x.b,[2,S.j]]),t.Sb(5120,M.j,M.k,[M.d]),t.Sb(1073742336,S.c,S.c,[]),t.Sb(1073742336,f.p,f.p,[[2,f.u],[2,f.l]]),t.Sb(1073742336,C.p,C.p,[]),t.Sb(1073742336,C.f,C.f,[]),t.Sb(1073742336,m.ge,m.ge,[]),t.Sb(1073742336,m.ic,m.ic,[]),t.Sb(1073742336,m.id,m.id,[]),t.Sb(1073742336,m.H,m.H,[]),t.Sb(1073742336,m.Zb,m.Zb,[m.Yb]),t.Sb(1073742336,m.rc,m.rc,[]),t.Sb(1073742336,m.lb,m.lb,[]),t.Sb(1073742336,m.D,m.D,[]),t.Sb(1073742336,m.z,m.z,[]),t.Sb(1073742336,x.a,x.a,[]),t.Sb(1073742336,H.f,H.f,[]),t.Sb(1073742336,I.b,I.b,[]),t.Sb(1073742336,z.b,z.b,[]),t.Sb(1073742336,M.g,M.g,[]),t.Sb(1073742336,m.nb,m.nb,[]),t.Sb(1073742336,m.mb,m.mb,[]),t.Sb(1073742336,m.Ac,m.Ac,[]),t.Sb(1073742336,m.Db,m.Db,[]),t.Sb(1073742336,m.Wd,m.Wd,[]),t.Sb(1073742336,m.K,m.K,[]),t.Sb(1073742336,d,d,[]),t.Sb(1024,f.j,(function(){return[[{path:"",component:u,children:[{path:"dashboard",loadChildren:a},{path:"productos",loadChildren:i},{path:"agentes",loadChildren:b},{path:"clientes",loadChildren:o},{path:"compras",loadChildren:s},{path:"caja",loadChildren:r},{path:"ventas",loadChildren:c},{path:"",redirectTo:"dashboard",pathMatch:"full"}]}]]}),[])])}))}}]);