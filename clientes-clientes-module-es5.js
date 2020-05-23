(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["clientes-clientes-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/clientes/clientes.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/clientes/clientes.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesClientesClientesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nb-alert status=\"success\" *ngIf=\"messageSuccess\" closable (close)=\"messageSuccess=''\">\n    {{messageSuccess}}\n</nb-alert>\n\n<nb-alert status=\"danger\" *ngFor=\"let errorsInput of errorsPerInput; let i = index\" closable\n    (close)=\"errorsPerInput.splice(i,1)\">\n    <div *ngFor=\"let error of errorsInput\">\n        - {{error}}\n    </div>\n</nb-alert>\n\n<nb-card>\n    <nb-card-header>CLIENTES</nb-card-header>\n    <nb-card-body>\n        <app-data-table [dataArrayInput]=\"clientes |async\" [tableStructure]=\"tableStructure\" #dataTable (create)=\"create($event,dataTable)\" (update)=\"update($event,dataTable)\" (delete)=\"delete($event,dataTable)\"></app-data-table>\n    </nb-card-body>\n</nb-card>\n";
    /***/
  },

  /***/
  "./src/app/pages/clientes/clientes.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/pages/clientes/clientes.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesClientesClientesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NsaWVudGVzL2NsaWVudGVzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/clientes/clientes.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/clientes/clientes.component.ts ***!
    \******************************************************/

  /*! exports provided: ClientesComponent */

  /***/
  function srcAppPagesClientesClientesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientesComponent", function () {
      return ClientesComponent;
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


    var _services_clientes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/clientes.service */
    "./src/app/services/clientes.service.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var src_app_own_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/own/dialog/dialog.component */
    "./src/app/own/dialog/dialog.component.ts");

    let ClientesComponent = class ClientesComponent {
      constructor(clienteService, dialogService) {
        this.clienteService = clienteService;
        this.dialogService = dialogService;
        this.tableStructure = {
          columns: [{
            title: "ID",
            name: "id",
            editable: false,
            type: "number",
            filter: false
          }, {
            title: "Nombre",
            name: "nombre",
            editable: true,
            type: "text",
            filter: true
          }, {
            title: "Teléfono",
            name: "telefono",
            editable: true,
            type: "number",
            filter: true
          }, {
            title: "Correo",
            name: "correo",
            editable: true,
            type: "text",
            filter: true
          }, {
            title: "Dirección",
            name: "direccion",
            editable: true,
            type: "textarea",
            filter: true
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
        this.clientes = this.clienteService.getClientes();
      }

      create(newData, dataTable) {
        this.reset();
        dataTable.charginData++;
        this.clienteService.createCliente(newData).subscribe(clienteResponse => {
          dataTable.charginData--;
          this.messageSuccess = "Cliente creado exitosamente";
          dataTable.pushData(clienteResponse);
        }, error => this.displayErrors(error));
      }

      update(updateData, dataTable) {
        this.reset();
        dataTable.charginData++;
        this.clienteService.updateCliente(updateData).subscribe(clienteResponse => {
          dataTable.charginData--;
          dataTable.updateData(clienteResponse);
          this.messageSuccess = "Cliente actualizado correctamente";
        }, error => this.displayErrors(error));
      }

      delete(deleteData, dataTable) {
        this.dialogService.open(src_app_own_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], {
          context: {
            title: '¡Cuidado!',
            content: "Si elimina este registro, se perder\xE1 el historial de movimientos relacionados al registro de ".concat(deleteData.nombre.toUpperCase(), ". \xBFDesea continuar?")
          }
        }).onClose.subscribe(response => {
          if (response) {
            this.reset();
            dataTable.charginData++;
            this.clienteService.deleteCliente(deleteData).subscribe(response => {
              dataTable.charginData--;
              this.messageSuccess = "Cliente eliminado correctamente";
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

      displayErrors(error) {
        for (const key in error.error.errors) {
          this.errorsPerInput.push(error.error.errors[key]);
        }
      }

    };

    ClientesComponent.ctorParameters = () => [{
      type: _services_clientes_service__WEBPACK_IMPORTED_MODULE_2__["ClientesService"]
    }, {
      type: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDialogService"]
    }];

    ClientesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-clientes',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./clientes.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/clientes/clientes.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./clientes.component.scss */
      "./src/app/pages/clientes/clientes.component.scss")).default]
    })], ClientesComponent);
    /***/
  },

  /***/
  "./src/app/pages/clientes/clientes.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/clientes/clientes.module.ts ***!
    \***************************************************/

  /*! exports provided: ClientesModule */

  /***/
  function srcAppPagesClientesClientesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientesModule", function () {
      return ClientesModule;
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


    var _clientes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./clientes.component */
    "./src/app/pages/clientes/clientes.component.ts");
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
      component: _clientes_component__WEBPACK_IMPORTED_MODULE_3__["ClientesComponent"]
    }];
    let ClientesModule = class ClientesModule {};
    ClientesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_clientes_component__WEBPACK_IMPORTED_MODULE_3__["ClientesComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_app_own_data_table_data_table_module__WEBPACK_IMPORTED_MODULE_7__["DataTableModule"], //Nebular's components
      _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"], _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_6__["NbEvaIconsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbAlertModule"]],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
    })], ClientesModule);
    /***/
  },

  /***/
  "./src/app/services/clientes.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/clientes.service.ts ***!
    \**********************************************/

  /*! exports provided: ClientesService */

  /***/
  function srcAppServicesClientesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientesService", function () {
      return ClientesService;
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

    let ClientesService = class ClientesService {
      constructor(http) {
        this.http = http;
      }

      getClientes() {
        return this.http.get('http://api.vidamarinapuebla.com/api/clientes');
      }

      updateCliente(cliente) {
        return this.http.put('http://api.vidamarinapuebla.com/api/clientes/' + cliente.id, cliente);
      }

      createCliente(cliente) {
        return this.http.post('http://api.vidamarinapuebla.com/api/clientes', cliente);
      }

      deleteCliente(cliente) {
        return this.http.delete('http://api.vidamarinapuebla.com/api/clientes/' + cliente.id);
      }

    };

    ClientesService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }];

    ClientesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ClientesService);
    /***/
  }
}]);
//# sourceMappingURL=clientes-clientes-module-es5.js.map