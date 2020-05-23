(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["productos-productos-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/productos/productos.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/productos/productos.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProductosProductosComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nb-alert status=\"success\" *ngIf=\"messageSuccess\" closable (close)=\"messageSuccess=''\">\n    {{messageSuccess}}\n</nb-alert>\n<nb-alert status=\"danger\" *ngFor=\"let errorsInput of errorsPerInput; let i = index\" closable\n    (close)=\"errorsPerInput.splice(i,1)\">\n    <div *ngFor=\"let error of errorsInput\">\n        - {{error}}\n    </div>\n</nb-alert>\n\n<nb-card>\n    <nb-card-header>PRODUCTOS</nb-card-header>\n    <nb-card-body>\n        <app-data-table [dataArrayInput]=\"productos |async\" [tableStructure]=\"tableStructure\" #dataTable (create)=\"create($event,dataTable)\" (update)=\"update($event,dataTable)\" (delete)=\"delete($event,dataTable)\"></app-data-table>\n    </nb-card-body>\n</nb-card>\n";
    /***/
  },

  /***/
  "./src/app/pages/productos/productos.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/pages/productos/productos.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProductosProductosComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3Rvcy9wcm9kdWN0b3MuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/productos/productos.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/productos/productos.component.ts ***!
    \********************************************************/

  /*! exports provided: ProductosComponent */

  /***/
  function srcAppPagesProductosProductosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductosComponent", function () {
      return ProductosComponent;
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


    var _services_productos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/productos.service */
    "./src/app/services/productos.service.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var src_app_own_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/own/dialog/dialog.component */
    "./src/app/own/dialog/dialog.component.ts");

    let ProductosComponent = class ProductosComponent {
      constructor(productoService, dialogService) {
        this.productoService = productoService;
        this.dialogService = dialogService;
        this.tableStructure = {
          columns: [{
            title: 'ID',
            name: 'id',
            editable: false,
            type: "number",
            'filter': false
          }, {
            title: 'Nombre',
            name: 'nombre',
            editable: true,
            type: "text",
            'filter': true
          }, {
            title: 'Código',
            name: 'codigo_producto',
            editable: true,
            type: "number",
            'filter': true
          }, {
            title: 'Marca',
            name: 'marca',
            editable: true,
            type: "text",
            'filter': true
          }, {
            title: 'Caducidad',
            name: 'fecha_caducidad',
            editable: true,
            type: "date",
            'filter': true
          }, {
            title: 'Ubicación',
            name: 'ubicacion',
            editable: true,
            type: "text",
            'filter': true
          }, {
            title: 'Medida',
            name: 'unidad_medida',
            editable: true,
            type: "text",
            'filter': true
          }, {
            title: 'Presentación',
            name: 'presentacion',
            editable: true,
            type: "text",
            'filter': true
          }, {
            title: 'Stock min',
            name: 'stock_minimo',
            editable: true,
            type: "number",
            'filter': true
          }, {
            title: 'Stock max',
            name: 'stock_maximo',
            editable: true,
            type: "number",
            'filter': true
          }, {
            title: 'Stock act',
            name: 'stock_actual',
            editable: true,
            type: "number",
            'filter': true
          }, {
            title: 'Costo',
            name: 'costo',
            editable: true,
            type: "number",
            'filter': true
          }, {
            title: 'Iva',
            name: 'iva',
            editable: true,
            type: "number",
            'filter': true
          }, {
            title: 'Precio',
            name: 'precio',
            editable: true,
            type: "number",
            'filter': true
          }, {
            title: 'Utilidad',
            name: 'utilidad_bruta',
            editable: true,
            type: "number",
            'filter': true
          }, {
            title: 'Descuento',
            name: 'descuento',
            editable: true,
            type: "number",
            'filter': true
          }, {
            title: 'Comisión',
            name: 'comision',
            editable: true,
            type: "number",
            'filter': true
          }, {
            title: 'Imagen',
            name: 'imagen',
            editable: true,
            type: "file",
            'filter': false
          }, {
            title: 'Descripción',
            name: 'descripcion',
            editable: true,
            type: "textarea",
            'filter': true
          }],
          buttons: {
            create: true,
            delete: true,
            update: true
          }
        };
        this.errorsPerInput = [];
        this.messageSuccess = "";
      }

      ngOnInit() {
        this.productos = this.productoService.getProductos();
      }

      create(newData, dataTable) {
        this.reset();
        dataTable.charginData++;
        this.productoService.createProducto(newData).subscribe(productoResponse => {
          dataTable.charginData--;
          this.messageSuccess = "Producto creado exitosamente";
          dataTable.pushData(productoResponse);
        }, error => this.displayErrors(error, dataTable));
      }

      update(updateData, dataTable) {
        this.reset();
        dataTable.charginData++;
        this.productoService.updateProducto(updateData).subscribe(productoResponse => {
          dataTable.charginData--;
          dataTable.updateData(productoResponse);
          this.messageSuccess = "Producto actualizado correctamente";
        }, error => this.displayErrors(error));
      }

      delete(deleteData, dataTable) {
        this.dialogService.open(src_app_own_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], {
          context: {
            title: '¡Cuidado!',
            content: "Si elimina este registro, se perder\xE1 el historial de movimientos relacionados al registro de ".concat((deleteData.codigo_producto + "").toUpperCase(), ". \xBFDesea continuar?")
          }
        }).onClose.subscribe(response => {
          if (response) {
            this.reset();
            dataTable.charginData++;
            this.productoService.deleteProducto(deleteData).subscribe(response => {
              dataTable.charginData--;
              this.messageSuccess = "Producto eliminado correctamente";
              dataTable.deleteData(response);
            }, error => this.displayErrors(error));
          }
        });
      }

      reset() {
        this.errorsPerInput = [];
        this.messageSuccess = "";
        setTimeout(() => {
          this.errorsPerInput = [];
          this.messageSuccess = "";
        }, 10000);
      }

      displayErrors(error, dataTable) {
        dataTable ? dataTable.charginData-- : 0;

        for (const key in error.error.errors) {
          this.errorsPerInput.push(error.error.errors[key]);
        }
      }

    };

    ProductosComponent.ctorParameters = () => [{
      type: _services_productos_service__WEBPACK_IMPORTED_MODULE_2__["ProductosService"]
    }, {
      type: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDialogService"]
    }];

    ProductosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-productos',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./productos.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/productos/productos.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./productos.component.scss */
      "./src/app/pages/productos/productos.component.scss")).default]
    })], ProductosComponent);
    /***/
  },

  /***/
  "./src/app/pages/productos/productos.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/productos/productos.module.ts ***!
    \*****************************************************/

  /*! exports provided: ProductosModule */

  /***/
  function srcAppPagesProductosProductosModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductosModule", function () {
      return ProductosModule;
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


    var _productos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./productos.component */
    "./src/app/pages/productos/productos.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @nebular/eva-icons */
    "./node_modules/@nebular/eva-icons/fesm2015/index.js");
    /* harmony import */


    var src_app_own_data_table_data_table_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/own/data-table/data-table.module */
    "./src/app/own/data-table/data-table.module.ts");

    const routes = [{
      path: '',
      component: _productos_component__WEBPACK_IMPORTED_MODULE_3__["ProductosComponent"]
    }];
    let ProductosModule = class ProductosModule {};
    ProductosModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_productos_component__WEBPACK_IMPORTED_MODULE_3__["ProductosComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_app_own_data_table_data_table_module__WEBPACK_IMPORTED_MODULE_7__["DataTableModule"], //Nebular's components
      _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"], _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_6__["NbEvaIconsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbAlertModule"]],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
    })], ProductosModule);
    /***/
  },

  /***/
  "./src/app/services/productos.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/productos.service.ts ***!
    \***********************************************/

  /*! exports provided: ProductosService */

  /***/
  function srcAppServicesProductosServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductosService", function () {
      return ProductosService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    let ProductosService = class ProductosService {
      constructor(http) {
        this.http = http;
      }

      getProductos() {
        return this.http.get('http://api.vidamarinapuebla.com/api/productos');
      }

      updateProducto(producto) {
        return this.http.put('http://api.vidamarinapuebla.com/api/productos/' + producto.id, producto);
      }

      createProducto(producto) {
        return this.http.post('http://api.vidamarinapuebla.com/api/productos', producto);
      }

      deleteProducto(producto) {
        return this.http.delete('http://api.vidamarinapuebla.com/api/productos/' + producto.id);
      }

    };

    ProductosService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }];

    ProductosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ProductosService);
    /***/
  }
}]);
//# sourceMappingURL=productos-productos-module-es5.js.map