(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["agentes-agentes-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/agentes/agentes.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/agentes/agentes.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAgentesAgentesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nb-alert status=\"success\" *ngIf=\"messageSuccess\" closable (close)=\"messageSuccess=''\">\n    {{messageSuccess}}\n</nb-alert>\n\n<nb-alert status=\"danger\" *ngFor=\"let errorsInput of errorsPerInput; let i = index\" closable\n    (close)=\"errorsPerInput.splice(i,1)\">\n    <div *ngFor=\"let error of errorsInput\">\n        - {{error}}\n    </div>\n</nb-alert>\n\n<nb-card>\n    <nb-card-header >PROVEEDORES</nb-card-header>\n\n    <nb-card-body>\n\n        <app-data-table [dataArrayInput]=\"agentes |async\" [tableStructure]=\"tableStructure\" #dataTable (create)=\"create($event,dataTable)\" (update)=\"update($event,dataTable)\" (delete)=\"delete($event,dataTable)\"></app-data-table>\n    </nb-card-body>\n\n</nb-card>\n\n";
    /***/
  },

  /***/
  "./src/app/pages/agentes/agentes.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/pages/agentes/agentes.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAgentesAgentesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FnZW50ZXMvYWdlbnRlcy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/agentes/agentes.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/agentes/agentes.component.ts ***!
    \****************************************************/

  /*! exports provided: AgentesComponent */

  /***/
  function srcAppPagesAgentesAgentesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgentesComponent", function () {
      return AgentesComponent;
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


    var src_app_services_agentes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/agentes.service */
    "./src/app/services/agentes.service.ts");
    /* harmony import */


    var _own_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../own/dialog/dialog.component */
    "./src/app/own/dialog/dialog.component.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");

    let AgentesComponent = class AgentesComponent {
      constructor(agenteService, dialogService) {
        this.agenteService = agenteService;
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
        this.agentes = this.agenteService.getAgentes();
      }

      create(newData, dataTable) {
        this.reset();
        dataTable.charginData++;
        this.agenteService.createAgente(newData).subscribe(agenteResponse => {
          dataTable.charginData--;
          this.messageSuccess = "Proveedor creado exitosamente";
          dataTable.pushData(agenteResponse);
        }, error => this.displayErrors(error));
      }

      update(updateData, dataTable) {
        this.reset();
        dataTable.charginData++;
        this.agenteService.updateAgente(updateData).subscribe(agenResponse => {
          dataTable.charginData--;
          dataTable.updateData(agenResponse);
          this.messageSuccess = "Proveedor actualizado correctamente";
        }, error => this.displayErrors(error));
      }

      delete(deleteData, dataTable) {
        this.dialogService.open(_own_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"], {
          context: {
            title: '¡Cuidado!',
            content: "Si elimina este registro, se perder\xE1 el historial de movimientos relacionados al registro de ".concat(deleteData.nombre.toUpperCase(), ". \xBFDesea continuar?")
          }
        }).onClose.subscribe(response => {
          if (response) {
            this.reset();
            dataTable.charginData++;
            this.agenteService.deleteAgente(deleteData).subscribe(response => {
              dataTable.charginData--;
              this.messageSuccess = "Proveedor eliminado correctamente";
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

    AgentesComponent.ctorParameters = () => [{
      type: src_app_services_agentes_service__WEBPACK_IMPORTED_MODULE_2__["AgentesService"]
    }, {
      type: _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDialogService"]
    }];

    AgentesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-agentes',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./agentes.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/agentes/agentes.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./agentes.component.scss */
      "./src/app/pages/agentes/agentes.component.scss")).default]
    })], AgentesComponent);
    /***/
  },

  /***/
  "./src/app/pages/agentes/agentes.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/agentes/agentes.module.ts ***!
    \*************************************************/

  /*! exports provided: AgentesModule */

  /***/
  function srcAppPagesAgentesAgentesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgentesModule", function () {
      return AgentesModule;
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


    var _agentes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./agentes.component */
    "./src/app/pages/agentes/agentes.component.ts");
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
      component: _agentes_component__WEBPACK_IMPORTED_MODULE_3__["AgentesComponent"]
    }];
    let AgentesModule = class AgentesModule {};
    AgentesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_agentes_component__WEBPACK_IMPORTED_MODULE_3__["AgentesComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_app_own_data_table_data_table_module__WEBPACK_IMPORTED_MODULE_7__["DataTableModule"], //Nebular's components
      _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"], _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_6__["NbEvaIconsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbAlertModule"]],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
    })], AgentesModule);
    /***/
  },

  /***/
  "./src/app/services/agentes.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/agentes.service.ts ***!
    \*********************************************/

  /*! exports provided: AgentesService */

  /***/
  function srcAppServicesAgentesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgentesService", function () {
      return AgentesService;
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

    let AgentesService = class AgentesService {
      constructor(http) {
        this.http = http;
      }

      getAgentes() {
        return this.http.get('http://api.vidamarinapuebla.com/api/agentes');
      }

      updateAgente(agente) {
        return this.http.put('http://api.vidamarinapuebla.com/api/agentes/' + agente.id, agente);
      }

      createAgente(agente) {
        return this.http.post('http://api.vidamarinapuebla.com/api/agentes', agente);
      }

      deleteAgente(agente) {
        return this.http.delete('http://api.vidamarinapuebla.com/api/agentes/' + agente.id);
      }

    };

    AgentesService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }];

    AgentesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AgentesService); //ng build --prod --output-path docs --base-href /<project_name>/

    /***/
  }
}]);
//# sourceMappingURL=agentes-agentes-module-es5.js.map