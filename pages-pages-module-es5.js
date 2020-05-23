(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPagesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nb-layout>\r\n    <nb-layout-header fixed>\r\n        <nb-icon icon=\"menu\" [options]=\"{ animation: { type: 'shake' } }\"  (click)=\"onToggle()\"></nb-icon>\r\n        <h2>Vida marina</h2>\r\n    </nb-layout-header>\r\n\r\n    <nb-sidebar [state]=\"state\">\r\n        <nb-menu [items]=\"items\">\r\n        </nb-menu>\r\n    </nb-sidebar>\r\n\r\n    <nb-layout-column>\r\n        <router-outlet></router-outlet>\r\n    </nb-layout-column>\r\n</nb-layout>";
    /***/
  },

  /***/
  "./src/app/pages/pages.component.scss":
  /*!********************************************!*\
    !*** ./src/app/pages/pages.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPagesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h2 {\n  margin-left: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvQzpcXGxhcmFnb25cXHd3d1xcVmlkYU1hcmluYUFkbWluL3NyY1xcYXBwXFxwYWdlc1xccGFnZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3BhZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDJ7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxufSIsImgyIHtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/pages.component.ts":
  /*!******************************************!*\
    !*** ./src/app/pages/pages.component.ts ***!
    \******************************************/

  /*! exports provided: PagesComponent */

  /***/
  function srcAppPagesPagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagesComponent", function () {
      return PagesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let PagesComponent = class PagesComponent {
      constructor() {
        this.items = [{
          title: 'Dashboard',
          link: '/pages/dashboard',
          icon: 'home-outline'
        }, {
          title: 'Caja',
          icon: 'shopping-cart-outline'
        }, {
          title: 'Ventas',
          icon: 'npm-outline'
        }, {
          title: 'Compras',
          link: '/pages/compras',
          icon: 'file-outline'
        }, {
          title: 'Productos',
          link: '/pages/productos',
          icon: 'archive-outline'
        }, {
          title: 'Clientes',
          link: '/pages/clientes',
          icon: 'people-outline'
        }, {
          title: 'Proveedores',
          link: '/pages/agentes',
          icon: 'car-outline'
        }];
        this.state = "collapsed";
      }

      ngOnInit() {}

      onToggle() {
        this.state = this.state == "expanded" ? "collapsed" : "expanded";
      }

    };
    PagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pages',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pages.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pages.component.scss */
      "./src/app/pages/pages.component.scss")).default]
    })], PagesComponent);
    /***/
  },

  /***/
  "./src/app/pages/pages.module.ts":
  /*!***************************************!*\
    !*** ./src/app/pages/pages.module.ts ***!
    \***************************************/

  /*! exports provided: PagesModule */

  /***/
  function srcAppPagesPagesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagesModule", function () {
      return PagesModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _pages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages.component */
    "./src/app/pages/pages.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");

    const routes = [{
      path: '',
      component: _pages_component__WEBPACK_IMPORTED_MODULE_3__["PagesComponent"],
      children: [{
        path: 'dashboard',
        loadChildren: () => __webpack_require__.e(
        /*! import() | dashboard-dashboard-module */
        "dashboard-dashboard-module").then(__webpack_require__.bind(null,
        /*! ./dashboard/dashboard.module */
        "./src/app/pages/dashboard/dashboard.module.ts")).then(m => m.DashboardModule)
      }, {
        path: 'productos',
        loadChildren: () => Promise.all(
        /*! import() | productos-productos-module */
        [__webpack_require__.e("default~agentes-agentes-module~clientes-clientes-module~compras-compras-module~productos-productos-module"), __webpack_require__.e("productos-productos-module")]).then(__webpack_require__.bind(null,
        /*! ./productos/productos.module */
        "./src/app/pages/productos/productos.module.ts")).then(m => m.ProductosModule)
      }, {
        path: 'agentes',
        loadChildren: () => Promise.all(
        /*! import() | agentes-agentes-module */
        [__webpack_require__.e("default~agentes-agentes-module~clientes-clientes-module~compras-compras-module~productos-productos-module"), __webpack_require__.e("agentes-agentes-module")]).then(__webpack_require__.bind(null,
        /*! ./agentes/agentes.module */
        "./src/app/pages/agentes/agentes.module.ts")).then(m => m.AgentesModule)
      }, {
        path: 'clientes',
        loadChildren: () => Promise.all(
        /*! import() | clientes-clientes-module */
        [__webpack_require__.e("default~agentes-agentes-module~clientes-clientes-module~compras-compras-module~productos-productos-module"), __webpack_require__.e("clientes-clientes-module")]).then(__webpack_require__.bind(null,
        /*! ./clientes/clientes.module */
        "./src/app/pages/clientes/clientes.module.ts")).then(m => m.ClientesModule)
      }, {
        path: 'compras',
        loadChildren: () => Promise.all(
        /*! import() | compras-compras-module */
        [__webpack_require__.e("default~agentes-agentes-module~clientes-clientes-module~compras-compras-module~productos-productos-module"), __webpack_require__.e("compras-compras-module")]).then(__webpack_require__.bind(null,
        /*! ./compras/compras.module */
        "./src/app/pages/compras/compras.module.ts")).then(m => m.ComprasModule)
      }, {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }]
    }];
    let PagesModule = class PagesModule {};
    PagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_pages_component__WEBPACK_IMPORTED_MODULE_3__["PagesComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbLayoutModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSidebarModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbBidiModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbMenuModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"]],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
    })], PagesModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-pages-module-es5.js.map