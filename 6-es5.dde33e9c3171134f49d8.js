(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{JwQr:function(e,n,l){"use strict";l.r(n);var t=l("8Y7J"),a=l("5yhm");class u{constructor(e,n){this.agenteService=e,this.dialogService=n,this.tableStructure={columns:[{title:"ID",name:"id",editable:!1,type:"number",filter:!1},{title:"Nombre",name:"nombre",editable:!0,type:"text",filter:!0},{title:"Tel\xe9fono",name:"telefono",editable:!0,type:"number",filter:!0},{title:"Correo",name:"correo",editable:!0,type:"text",filter:!0},{title:"Direcci\xf3n",name:"direccion",editable:!0,type:"textarea",filter:!0}],buttons:{create:!0,delete:!0,update:!0}},this.errorsPerInput=[],this.messageSuccess=""}ngOnInit(){this.agentes=this.agenteService.getAgentes()}create(e,n){this.reset(),n.charginData++,this.agenteService.createAgente(e).subscribe(e=>{n.charginData--,this.messageSuccess="Proveedor creado exitosamente",n.pushData(e)},e=>this.displayErrors(e))}update(e,n){this.reset(),n.charginData++,this.agenteService.updateAgente(e).subscribe(e=>{n.charginData--,n.updateData(e),this.messageSuccess="Proveedor actualizado correctamente"},e=>this.displayErrors(e))}delete(e,n){this.dialogService.open(a.a,{context:{title:"\xa1Cuidado!",content:"Si elimina este registro, se perder\xe1 el historial de movimientos relacionados al registro de ".concat(e.nombre.toUpperCase(),". \xbfDesea continuar?")}}).onClose.subscribe(l=>{l&&(this.reset(),n.charginData++,this.agenteService.deleteAgente(e).subscribe(e=>{n.charginData--,this.messageSuccess="Proveedor eliminado correctamente",n.deleteData(e)},e=>this.displayErrors(e)))})}reset(){this.errorsPerInput=[],this.messageSuccess="",setTimeout(()=>{this.errorsPerInput=[],this.messageSuccess=""},1e4)}displayErrors(e){for(const n in e.error.errors)this.errorsPerInput.push(e.error.errors[n])}}class c{}var s=l("pMnS"),r=l("jXVt"),i=l("tKwJ"),b=l("SVse"),o=l("0ppS"),d=l("65g3"),g=l("IheW");let p=(()=>{class e{constructor(e){this.http=e}getAgentes(){return this.http.get("http://api.vidamarinapuebla.com/api/agentes")}updateAgente(e){return this.http.put("http://api.vidamarinapuebla.com/api/agentes/"+e.id,e)}createAgente(e){return this.http.post("http://api.vidamarinapuebla.com/api/agentes",e)}deleteAgente(e){return this.http.delete("http://api.vidamarinapuebla.com/api/agentes/"+e.id)}}return e.ngInjectableDef=t.ic({factory:function(){return new e(t.jc(g.c))},token:e,providedIn:"root"}),e})();var m=t.Gb({encapsulation:0,styles:[[""]],data:{}});function U(e){return t.ec(0,[(e()(),t.Ib(0,0,null,null,2,"nb-alert",[["closable",""],["status","success"]],[[2,"closable",null],[2,"size-tiny",null],[2,"size-small",null],[2,"size-medium",null],[2,"size-large",null],[2,"size-giant",null],[2,"status-primary",null],[2,"status-success",null],[2,"status-info",null],[2,"status-warning",null],[2,"status-danger",null],[2,"status-basic",null],[2,"status-control",null],[2,"accent-primary",null],[2,"accent-success",null],[2,"accent-info",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-basic",null],[2,"accent-control",null],[2,"outline-primary",null],[2,"outline-success",null],[2,"outline-info",null],[2,"outline-warning",null],[2,"outline-danger",null],[2,"outline-basic",null],[2,"outline-control",null]],[[null,"close"]],(function(e,n,l){var t=!0;return"close"===n&&(t=!1!==(e.component.messageSuccess="")&&t),t}),r.u,r.d)),t.Hb(1,49152,null,0,i.A,[],{status:[0,"status"],closable:[1,"closable"]},{close:"close"}),(e()(),t.cc(2,0,[" ","\n"]))],(function(e,n){e(n,1,0,"success","")}),(function(e,n){var l=n.component;e(n,0,1,[t.Ub(n,1).closable,t.Ub(n,1).tiny,t.Ub(n,1).small,t.Ub(n,1).medium,t.Ub(n,1).large,t.Ub(n,1).giant,t.Ub(n,1).primary,t.Ub(n,1).success,t.Ub(n,1).info,t.Ub(n,1).warning,t.Ub(n,1).danger,t.Ub(n,1).basic,t.Ub(n,1).control,t.Ub(n,1).primaryAccent,t.Ub(n,1).successAccent,t.Ub(n,1).infoAccent,t.Ub(n,1).warningAccent,t.Ub(n,1).dangerAccent,t.Ub(n,1).basicAccent,t.Ub(n,1).controlAccent,t.Ub(n,1).primaryOutline,t.Ub(n,1).successOutline,t.Ub(n,1).infoOutline,t.Ub(n,1).warningOutline,t.Ub(n,1).dangerOutline,t.Ub(n,1).basicOutline,t.Ub(n,1).controlOutline]),e(n,2,0,l.messageSuccess)}))}function f(e){return t.ec(0,[(e()(),t.Ib(0,0,null,null,1,"div",[],null,null,null,null,null)),(e()(),t.cc(1,null,[" - "," "]))],null,(function(e,n){e(n,1,0,n.context.$implicit)}))}function h(e){return t.ec(0,[(e()(),t.Ib(0,0,null,null,3,"nb-alert",[["closable",""],["status","danger"]],[[2,"closable",null],[2,"size-tiny",null],[2,"size-small",null],[2,"size-medium",null],[2,"size-large",null],[2,"size-giant",null],[2,"status-primary",null],[2,"status-success",null],[2,"status-info",null],[2,"status-warning",null],[2,"status-danger",null],[2,"status-basic",null],[2,"status-control",null],[2,"accent-primary",null],[2,"accent-success",null],[2,"accent-info",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-basic",null],[2,"accent-control",null],[2,"outline-primary",null],[2,"outline-success",null],[2,"outline-info",null],[2,"outline-warning",null],[2,"outline-danger",null],[2,"outline-basic",null],[2,"outline-control",null]],[[null,"close"]],(function(e,n,l){var t=!0;return"close"===n&&(t=!1!==e.component.errorsPerInput.splice(e.context.index,1)&&t),t}),r.u,r.d)),t.Hb(1,49152,null,0,i.A,[],{status:[0,"status"],closable:[1,"closable"]},{close:"close"}),(e()(),t.xb(16777216,null,0,1,null,f)),t.Hb(3,278528,null,0,b.l,[t.eb,t.Y,t.B],{ngForOf:[0,"ngForOf"]},null)],(function(e,n){e(n,1,0,"danger",""),e(n,3,0,n.context.$implicit)}),(function(e,n){e(n,0,1,[t.Ub(n,1).closable,t.Ub(n,1).tiny,t.Ub(n,1).small,t.Ub(n,1).medium,t.Ub(n,1).large,t.Ub(n,1).giant,t.Ub(n,1).primary,t.Ub(n,1).success,t.Ub(n,1).info,t.Ub(n,1).warning,t.Ub(n,1).danger,t.Ub(n,1).basic,t.Ub(n,1).control,t.Ub(n,1).primaryAccent,t.Ub(n,1).successAccent,t.Ub(n,1).infoAccent,t.Ub(n,1).warningAccent,t.Ub(n,1).dangerAccent,t.Ub(n,1).basicAccent,t.Ub(n,1).controlAccent,t.Ub(n,1).primaryOutline,t.Ub(n,1).successOutline,t.Ub(n,1).infoOutline,t.Ub(n,1).warningOutline,t.Ub(n,1).dangerOutline,t.Ub(n,1).basicOutline,t.Ub(n,1).controlOutline])}))}function S(e){return t.ec(0,[(e()(),t.xb(16777216,null,null,1,null,U)),t.Hb(1,16384,null,0,b.m,[t.eb,t.Y],{ngIf:[0,"ngIf"]},null),(e()(),t.xb(16777216,null,null,1,null,h)),t.Hb(3,278528,null,0,b.l,[t.eb,t.Y,t.B],{ngForOf:[0,"ngForOf"]},null),(e()(),t.Ib(4,0,null,null,9,"nb-card",[],[[2,"size-tiny",null],[2,"size-small",null],[2,"size-medium",null],[2,"size-large",null],[2,"size-giant",null],[2,"status-primary",null],[2,"status-info",null],[2,"status-success",null],[2,"status-warning",null],[2,"status-danger",null],[2,"status-basic",null],[2,"status-control",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-basic",null],[2,"accent-control",null]],null,null,r.x,r.g)),t.Hb(5,49152,null,0,i.hb,[],null,null),(e()(),t.Ib(6,0,null,0,2,"nb-card-header",[],null,null,null,r.z,r.i)),t.Hb(7,49152,null,0,i.kb,[],null,null),(e()(),t.cc(-1,0,["PROVEEDORES"])),(e()(),t.Ib(9,0,null,1,4,"nb-card-body",[],null,null,null,r.w,r.f)),t.Hb(10,49152,null,0,i.gb,[],null,null),(e()(),t.Ib(11,0,null,0,2,"app-data-table",[],null,[[null,"create"],[null,"update"],[null,"delete"]],(function(e,n,l){var a=!0,u=e.component;return"create"===n&&(a=!1!==u.create(l,t.Ub(e,12))&&a),"update"===n&&(a=!1!==u.update(l,t.Ub(e,12))&&a),"delete"===n&&(a=!1!==u.delete(l,t.Ub(e,12))&&a),a}),o.b,o.a)),t.Hb(12,114688,[["dataTable",4]],0,d.a,[i.Mb],{tableStructure:[0,"tableStructure"],dataArrayInput:[1,"dataArrayInput"]},{create:"create",update:"update",delete:"delete"}),t.Wb(131072,b.b,[t.j])],(function(e,n){var l=n.component;e(n,1,0,l.messageSuccess),e(n,3,0,l.errorsPerInput),e(n,12,0,l.tableStructure,t.dc(n,12,1,t.Ub(n,13).transform(l.agentes)))}),(function(e,n){e(n,4,1,[t.Ub(n,5).tiny,t.Ub(n,5).small,t.Ub(n,5).medium,t.Ub(n,5).large,t.Ub(n,5).giant,t.Ub(n,5).primary,t.Ub(n,5).info,t.Ub(n,5).success,t.Ub(n,5).warning,t.Ub(n,5).danger,t.Ub(n,5).basic,t.Ub(n,5).control,t.Ub(n,5).hasAccent,t.Ub(n,5).primaryAccent,t.Ub(n,5).infoAccent,t.Ub(n,5).successAccent,t.Ub(n,5).warningAccent,t.Ub(n,5).dangerAccent,t.Ub(n,5).basicAccent,t.Ub(n,5).controlAccent])}))}var y=t.Eb("app-agentes",u,(function(e){return t.ec(0,[(e()(),t.Ib(0,0,null,null,1,"app-agentes",[],null,null,null,S,m)),t.Hb(1,114688,null,0,u,[p,i.Mb],null,null)],(function(e,n){e(n,1,0)}),null)}),{},{},[]),A=l("s7LF"),v=l("QQfA"),w=l("IP0z"),I=l("iInd"),z=l("zMNK"),O=l("/HVE"),D=l("hOhj"),x=l("l00W"),H=l("XoTT");l.d(n,"AgentesModuleNgFactory",(function(){return P}));var P=t.Fb(c,[],(function(e){return t.Rb([t.Sb(512,t.m,t.qb,[[8,[s.a,y]],[3,t.m],t.H]),t.Sb(4608,b.o,b.n,[t.D,[2,b.F]]),t.Sb(4608,A.q,A.q,[]),t.Sb(4608,v.d,v.d,[v.i,v.e,t.m,v.h,v.f,t.z,t.J,b.d,w.b,[2,b.i]]),t.Sb(5120,v.j,v.k,[v.d]),t.Sb(1073742336,b.c,b.c,[]),t.Sb(1073742336,I.p,I.p,[[2,I.u],[2,I.l]]),t.Sb(1073742336,i.Wb,i.Wb,[i.Vb]),t.Sb(1073742336,A.p,A.p,[]),t.Sb(1073742336,A.f,A.f,[]),t.Sb(1073742336,i.de,i.de,[]),t.Sb(1073742336,i.lb,i.lb,[]),t.Sb(1073742336,i.Yb,i.Yb,[]),t.Sb(1073742336,i.K,i.K,[]),t.Sb(1073742336,i.D,i.D,[]),t.Sb(1073742336,i.z,i.z,[]),t.Sb(1073742336,i.B,i.B,[]),t.Sb(1073742336,w.a,w.a,[]),t.Sb(1073742336,z.f,z.f,[]),t.Sb(1073742336,O.b,O.b,[]),t.Sb(1073742336,D.b,D.b,[]),t.Sb(1073742336,v.g,v.g,[]),t.Sb(1073742336,i.nb,i.nb,[]),t.Sb(1073742336,i.mb,i.mb,[]),t.Sb(1073742336,i.xc,i.xc,[]),t.Sb(1073742336,i.zb,i.zb,[]),t.Sb(1073742336,i.bd,i.bd,[]),t.Sb(1073742336,i.Cd,i.Cd,[]),t.Sb(1073742336,x.a,x.a,[]),t.Sb(1073742336,H.a,H.a,[i.Vb]),t.Sb(1073742336,c,c,[]),t.Sb(1024,I.j,(function(){return[[{path:"",component:u}]]}),[])])}))}}]);