(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~agentes-agentes-module~clientes-clientes-module~compras-compras-module~productos-productos-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/own/data-table/data-table.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/own/data-table/data-table.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-table\">\n  <div class=\"linePreloader\" *ngIf=\"charginData\"></div>\n\n  <table>\n    <thead>\n    <!-- Se muestra los nombres que tendrán las columnas -->\n    <tr>\n      <th style=\"width: 6%;\"></th>\n      <th *ngFor=\"let column of tableStructure.columns\" (click)=\"sortColumn(column)\">\n        {{column.title}}\n        <nb-icon class=\"sort\"\n                 [icon]=\"columnSorted.mode\"\n                 *ngIf=\"columnSorted.column==column.name\"></nb-icon>\n      </th>\n    </tr>\n    </thead>\n    <tbody>\n    <!-- Se agrega el bot'on de crear -->\n    <tr>\n      <td>\n        <!--   <button nbButton *ngIf=\"tableStructure.buttons.create \" desaparece bot'on      -->\n        <button nbButton\n                style=\"padding:.5rem 2.5rem ;\"\n                (click)=\"onCreate=true;createClick.emit()\">\n          <nb-icon icon=\"plus-outline\"></nb-icon>\n        </button>\n      </td>\n      <!-- crea campos de filtrado -->\n      <td *ngFor=\"let column of tableStructure.columns\">\n        <input *ngIf=\"column.filter\"\n               #valueFilter (keyup)=\"filterColumn(column,valueFilter.value)\"\n               [type]=\"column.type == 'number'? 'number': 'text' \"\n               [placeholder]=\"column.title\"\n               nbInput fullWidth>\n      </td>\n    </tr>\n    <!-- Fila para crear el registros -->\n    <tr *ngIf=\"onCreate && tableStructure.buttons.create\">\n      <td>\n        <!-- Bot'on de editar       -->\n        <nb-icon icon=\"save-outline\" status=\"success\" (click)=\"create.emit(newData)\"></nb-icon>\n        <!-- Bot'on de cancelar -->\n        <nb-icon icon=\"close-outline\" status=\"danger\" (click)=\"onCreate=false\"></nb-icon>\n      </td>\n      <!-- Crea campos de crear  -->\n      <td *ngFor=\"let column of tableStructure.columns\">\n        <div *ngIf=\"column.editable\">\n          <!--   Campo generic      -->\n          <input class=\"input-edit\" status=\"primary\" nbInput\n                 *ngIf=\"isGeneric(column.type)\"\n                 [type]=\"column.type\" [placeholder]=\"column.title\"\n                 [(ngModel)]=\"newData[column.name]\">\n          <!-- Campo file      -->\n          <input class=\"input-edit\" status=\"primary\" nbInput\n                 *ngIf=\"column.type=='file' \"\n                 [type]=\"column.type\" [placeholder]=\"column.title\"\n                 (change)=\"setImageChange($event,column.name)\">\n          <!--     Campo textarea     -->\n          <textarea class=\"input-edit\" status=\"primary\" rows=\"5\" nbInput\n                    *ngIf=\"column.type=='textarea'\"\n                    [placeholder]=\"column.title\"\n                    [(ngModel)]=\"newData[column.name]\"></textarea>\n        </div>\n        <img *ngIf=\"newData[column.name] && column.type=='file'\"\n             [src]=\"newData[column.name]\">\n      </td>\n    </tr>\n\n    <!-- fila para mostrar y update-->\n    <tr *ngFor=\"let data of dataArray\">\n\n      <!-- Botones para editar -->\n      <td *ngIf=\"!inUpdate[data.id]\">\n        <nb-icon icon=\"edit-outline\" status=\"primary\" (click)=\"putEdit(data.id); getLists(); \"></nb-icon>\n        <nb-icon icon=\"trash-2-outline\" status=\"danger\" (click)=\"delete.emit(data)\"></nb-icon>\n      </td>\n\n      <!--Botones en modo Edición-->\n      <td *ngIf=\"inUpdate[data.id]\">\n        <nb-icon icon=\"checkmark-outline\" status=\"success\" (click)=\"update.emit(inUpdate[data.id])\">\n        </nb-icon>\n        <nb-icon icon=\"close-outline\" status=\"danger\" (click)=\"inUpdate[data.id]=undefined\"></nb-icon>\n      </td>\n\n      <!--Muestra datos -->\n      <td *ngFor=\"let column of tableStructure.columns\">\n        <!--  Simple texto      -->\n        <span *ngIf=\"(!inUpdate[data.id]||!column.editable)&&(isGeneric(column.type)||column.type=='textarea')\">\n              {{data[column.name]}}</span>\n        <span *ngIf=\"(!inUpdate[data.id]||!column.editable)&&column.type=='list'\">\n              {{data[column.name]['nombre']}}</span>\n\n        <nb-toggle *ngIf=\"(!inUpdate[data.id]||!column.editable)&&column.type=='toggle'\"\n                   disabled [checked]=\"data[column.name]\"></nb-toggle>\n\n        <!--  Imagen si es que se cambia      -->\n        <img *ngIf=\"column.type=='file' &&  !inUpdate[data.id] && data[column.name]\"\n             (click)=\"onClickImage(data[column.name],column.name)\"\n             [src]=\"data[column.name]\">\n\n\n        <!-- Inputs en edición-->\n        <div *ngIf=\"inUpdate[data.id] && column.editable\">\n          <!--     Input genetico     -->\n          <input class=\"input-edit\" status=\"primary\" nbInput\n                 *ngIf=\"isGeneric(column.type)\"\n                 [type]=\"column.type\" [placeholder]=\"column.title\"\n                 [(ngModel)]=\"inUpdate[data.id][column.name]\">\n          <!--     Input file     -->\n          <input class=\"input-edit\" status=\"primary\" nbInput\n                 *ngIf=\"column.type=='file' \"\n                 [type]=\"column.type\" [placeholder]=\"column.title\"\n                 (change)=\"setImageChange($event,column.name,data.id)\">\n\n          <nb-select *ngIf=\"column.type=='list'\" status=\"primary\"\n                     [(selected)]=\"inUpdate[data.id][column.name]['id']\">\n\n            <nb-option *ngFor=\"let name of (lists[column.name] |async);\"\n                       [value]=\"name.id\">{{name.nombre}}</nb-option>\n          </nb-select>\n\n          <nb-toggle *ngIf=\"column.type=='toggle'\" status=\"primary\"\n                     [(checked)]=\"inUpdate[data.id][column.name]\"></nb-toggle>\n\n          <textarea class=\"input-edit\" status=\"primary\" rows=\"5\" nbInput\n                    *ngIf=\"column.type=='textarea'\"\n                    [placeholder]=\"column.title\"\n                    [(ngModel)]=\"inUpdate[data.id][column.name]\"></textarea>\n\n          <img *ngIf=\"inUpdate[data.id][column.name] && column.type=='file'\" [src]=\"inUpdate[data.id][column.name]\">\n\n        </div>\n        <nb-icon icon=\"eye\" status=\"info\" *ngIf=\"column.type=='button'\" class=\"w-100\"\n                 (click)=\"buttonClick.emit(data.id)\"></nb-icon>\n\n      </td>\n    </tr>\n\n    <tr>\n      <td *ngIf=\"!dataArray\" [colSpan]=\"tableStructure.columns.length+1\">\n        <p style=\"padding-left: 1rem;\">Sin datos</p>\n      </td>\n    </tr>\n\n    </tbody>\n  </table>\n\n</div>\n<nb-actions size=\"small\" style=\"margin:20px 0\">\n  <nb-action>Filas por pagina</nb-action>\n  <nb-action><input type=\"number\" nbInput [(ngModel)]=\"pages.rowPerPage\" fieldSize=\"tiny\" style=\"width: 6rem;\"\n                    (keyup)=\"paginate(true)\"></nb-action>\n  <nb-action *ngFor=\"let page of pages.numPages\" (click)=\"setPage(page)\"\n             [ngClass]=\"pages.selected==page? 'selected':''\">{{1 + page}}</nb-action>\n  <nb-action>Total {{pages.totalRows}} registros</nb-action>\n</nb-actions>\n");

/***/ }),

/***/ "./src/app/own/data-table/data-table.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/own/data-table/data-table.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n  border-collapse: collapse;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\ntable, th, td {\n  border: 1px solid rgba(192, 192, 192, 0.315);\n}\n\ntd, th {\n  font-weight: normal;\n  padding: 1rem;\n  min-width: 150px;\n}\n\n.container-table {\n  overflow-x: auto;\n}\n\nnb-icon {\n  width: 50%;\n  height: 25px;\n}\n\nbutton {\n  padding: 3px 25px;\n}\n\ntr:nth-child(even) {\n  background-color: #f7f9fc;\n}\n\ntr:hover {\n  background-color: #cdd9eb;\n}\n\n.tr-input {\n  background-color: #cdd9eb;\n}\n\nnb-icon:hover, th:hover {\n  cursor: pointer;\n}\n\n.sort {\n  width: 15px;\n}\n\nnb-action:hover {\n  cursor: pointer;\n}\n\n.selected {\n  border-bottom: 2px solid #3366ff;\n}\n\n.input-edit {\n  width: 230px;\n}\n\ntextarea {\n  resize: none;\n}\n\nimg {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100px;\n  height: 100px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.linePreloader {\n  width: 100%;\n  height: 3px;\n  background: -webkit-gradient(linear, left top, right top, from(blue), to(#242483));\n  background: linear-gradient(to right, blue, #242483);\n  background-color: #ccc;\n  margin: auto;\n  border-radius: 4px;\n  background-size: 20%;\n  background-repeat: repeat-y;\n  background-position: -25% 0;\n  -webkit-animation: scroll 1.2s ease-in-out infinite;\n          animation: scroll 1.2s ease-in-out infinite;\n}\n\n@-webkit-keyframes scroll {\n  50% {\n    background-size: 80%;\n  }\n  100% {\n    background-position: 125% 0;\n  }\n}\n\n@keyframes scroll {\n  50% {\n    background-size: 80%;\n  }\n  100% {\n    background-position: 125% 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3duL2RhdGEtdGFibGUvQzpcXGxhcmFnb25cXHd3d1xcVmlkYU1hcmluYUFkbWluL3NyY1xcYXBwXFxvd25cXGRhdGEtdGFibGVcXGRhdGEtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL293bi9kYXRhLXRhYmxlL2RhdGEtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDQUY7O0FER0E7RUFDRSw0Q0FBQTtBQ0FGOztBREdBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UsaUJBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7QUNBRjs7QURHQTtFQUNFLGdDQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxrRkFBQTtFQUFBLG9EQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtREFBQTtVQUFBLDJDQUFBO0FDQUY7O0FER0E7RUFDRTtJQUNFLG9CQUFBO0VDQUY7RURFQTtJQUNFLDJCQUFBO0VDQUY7QUFDRjs7QUROQTtFQUNFO0lBQ0Usb0JBQUE7RUNBRjtFREVBO0lBQ0UsMkJBQUE7RUNBRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvb3duL2RhdGEtdGFibGUvZGF0YS10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbnRhYmxlLCB0aCwgdGQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTkyLCAxOTIsIDE5MiwgMC4zMTUpO1xyXG59XHJcblxyXG50ZCwgdGgge1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBtaW4td2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyLXRhYmxlIHtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG59XHJcblxyXG5uYi1pY29uIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogMjVweDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBwYWRkaW5nOiAzcHggMjVweDtcclxufVxyXG5cclxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOWZjO1xyXG59XHJcblxyXG50cjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NkZDllYjtcclxufVxyXG5cclxuLnRyLWlucHV0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2RkOWViO1xyXG59XHJcblxyXG5uYi1pY29uOmhvdmVyLCB0aDpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc29ydCB7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbn1cclxuXHJcbm5iLWFjdGlvbjpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc2VsZWN0ZWQge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMzM2NmZmO1xyXG59XHJcblxyXG4uaW5wdXQtZWRpdCB7XHJcbiAgd2lkdGg6IDIzMHB4O1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgcmVzaXplOiBub25lO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBvYmplY3QtZml0OiBjb250YWluO1xyXG59XHJcblxyXG4ubGluZVByZWxvYWRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBibHVlLCByZ2IoMzYsIDM2LCAxMzEpKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAyMCU7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yNSUgMDtcclxuICBhbmltYXRpb246IHNjcm9sbCAxLjJzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNjcm9sbCB7XHJcbiAgNTAlIHtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogODAlXHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTI1JSAwO1xyXG4gIH1cclxufVxyXG5cclxuIiwidGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG50YWJsZSwgdGgsIHRkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxOTIsIDE5MiwgMTkyLCAwLjMxNSk7XG59XG5cbnRkLCB0aCB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHBhZGRpbmc6IDFyZW07XG4gIG1pbi13aWR0aDogMTUwcHg7XG59XG5cbi5jb250YWluZXItdGFibGUge1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuXG5uYi1pY29uIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG5idXR0b24ge1xuICBwYWRkaW5nOiAzcHggMjVweDtcbn1cblxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjlmYztcbn1cblxudHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2RkOWViO1xufVxuXG4udHItaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2RkOWViO1xufVxuXG5uYi1pY29uOmhvdmVyLCB0aDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNvcnQge1xuICB3aWR0aDogMTVweDtcbn1cblxubmItYWN0aW9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2VsZWN0ZWQge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzMzNjZmZjtcbn1cblxuLmlucHV0LWVkaXQge1xuICB3aWR0aDogMjMwcHg7XG59XG5cbnRleHRhcmVhIHtcbiAgcmVzaXplOiBub25lO1xufVxuXG5pbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4ubGluZVByZWxvYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDNweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBibHVlLCAjMjQyNDgzKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogMjAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yNSUgMDtcbiAgYW5pbWF0aW9uOiBzY3JvbGwgMS4ycyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBzY3JvbGwge1xuICA1MCUge1xuICAgIGJhY2tncm91bmQtc2l6ZTogODAlO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEyNSUgMDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/own/data-table/data-table.component.ts":
/*!********************************************************!*\
  !*** ./src/app/own/data-table/data-table.component.ts ***!
  \********************************************************/
/*! exports provided: DataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableComponent", function() { return DataTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");
/* harmony import */ var src_app_own_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/own/dialog/dialog.component */ "./src/app/own/dialog/dialog.component.ts");




let DataTableComponent = class DataTableComponent {
    constructor(dialogService) {
        this.dialogService = dialogService;
        this.pages = {
            rowPerPage: 5,
            numPages: [],
            selected: 0,
            totalRows: 0
        };
        this.paginateDataArray = [];
        this.create = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.getList = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.createClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.buttonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onCreate = false;
        this.newData = {};
        this.inUpdate = [];
        this.columnSorted = { column: '', mode: 'arrow-up' };
        this.columnsFilter = {};
        this.charginData = 0;
        this.islists = false;
        this.lists = [];
        this.genericTypes = 'text,date,number';
    }
    set dataArrayInput(dataArray) {
        this.dataArray = dataArray;
        if (dataArray) {
            this.backUpData = dataArray;
            this.paginate();
            this.pages.totalRows = this.backUpData.length;
        }
    }
    ngOnInit() {
        this.paginateDataArray.push([]);
    }
    pushData(successData) {
        this.checkSizePage(true);
        this.pages.totalRows++;
        this.paginateDataArray[this.pages.numPages.length - 1].push(successData);
        this.setPage(this.pages.numPages.length - 1);
        // this.dataArray.push(successData);
        this.backUpData.push(successData);
        this.onCreate = false;
        this.newData = {};
        // this.paginate();
    }
    putEdit(j) {
        if (!this.update) {
            this.inUpdate[j] = JSON.parse(JSON.stringify(this.dataArray[this.getIndexArray(j)]));
        }
        else {
            this.buttonClick.emit(j);
        }
        // old form to clone an object but there was and issue because in object as property din't clone it
        // this.inUpdate[j] = {...this.dataArray[this.getIndexArray(j)]};
    }
    updateData(updatedData) {
        const index = this.getIndexArray(updatedData.id);
        this.inUpdate[updatedData.id] = undefined;
        this.dataArray[index] = updatedData;
        this.backUpData[this.getIndexBackUp(updatedData.id)] = updatedData;
        this.pages.totalRows++;
    }
    deleteData(deletedData) {
        this.dataArray.splice(this.getIndexArray(deletedData.id), 1);
        this.backUpData.splice(this.getIndexBackUp(deletedData.id), 1);
        this.inUpdate[deletedData.id] = undefined;
        this.checkSizePage(false);
        this.pages.totalRows--;
    }
    sortColumn(column = null, isrefresh = false) {
        if (!isrefresh) {
            this.columnSorted.column = column.name;
            this.columnSorted.mode = this.columnSorted.mode === 'arrow-up' ? 'arrow-down' : 'arrow-up';
        }
        const changeDirection = this.columnSorted.mode === 'arrow-up' ? -1 : 1;
        this.paginateDataArray.forEach((arrayData, index) => {
            if (index !== this.pages.selected) {
                this.dataArray = this.dataArray.concat(arrayData);
            }
        });
        this.dataArray.sort((a, b) => {
            if (isNaN(a[this.columnSorted.column])) {
                if (a[this.columnSorted.column].toUpperCase() > b[this.columnSorted.column].toUpperCase()) {
                    return -1 * changeDirection;
                }
                if (a[this.columnSorted.column].toUpperCase() < b[this.columnSorted.column].toUpperCase()) {
                    return changeDirection;
                }
                // a must be equal to b
                return 0;
            }
            else {
                if (a[this.columnSorted.column] > b[this.columnSorted.column]) {
                    return -1 * changeDirection;
                }
                if (a[this.columnSorted.column] < b[this.columnSorted.column]) {
                    return changeDirection;
                }
                // a must be equal to b
                return 0;
            }
        });
        this.paginate();
    }
    filterColumn(column, value) {
        value === '' ? delete this.columnsFilter[column.name] : this.columnsFilter[column.name] = value;
        if (Object.keys(this.columnsFilter).length) {
            let index = 0;
            for (const key in this.columnsFilter) {
                if (this.columnsFilter[key] !== '') {
                    if (index === 0) {
                        this.dataArray = this.backUpData.filter(data => (data[key] + '').includes(this.columnsFilter[key]));
                    }
                    else {
                        this.dataArray = this.dataArray.filter(data => (data[key] + '').includes(this.columnsFilter[key]));
                    }
                    index++;
                }
            }
        }
        else {
            this.dataArray = this.backUpData.filter(data => true);
        }
        if (this.columnSorted.column) {
            this.sortColumn(null, true);
        }
        this.pages.selected = 0;
        this.paginate();
    }
    getIndexBackUp(id) {
        return this.backUpData.findIndex(data => data.id === id);
    }
    getIndexArray(id) {
        return this.dataArray.findIndex(data => data.id === id);
    }
    paginate(newPagination = false) {
        if (this.pages.rowPerPage >= 5 && this.pages.rowPerPage) {
            if (newPagination) {
                this.paginateDataArray.forEach((arrayData, index) => {
                    if (index !== this.pages.selected) {
                        this.dataArray = this.dataArray.concat(arrayData);
                    }
                });
            }
            this.paginateDataArray = [];
            if (this.pages.rowPerPage) {
                this.pages.numPages = [];
                for (let i = 0; i < Math.ceil(this.dataArray.length / this.pages.rowPerPage); i++) {
                    this.pages.numPages.push(i);
                }
                this.pages.numPages.forEach(i => {
                    if (i === 0) {
                        this.paginateDataArray.push(this.dataArray.slice(i, this.pages.rowPerPage));
                    }
                    else {
                        this.paginateDataArray.push(this.dataArray.slice(i * this.pages.rowPerPage, (1 + i) * this.pages.rowPerPage));
                    }
                });
                this.setPage();
            }
        }
    }
    setPage(page = 0) {
        this.pages.selected = page;
        this.dataArray = this.paginateDataArray[page];
    }
    checkSizePage(push) {
        let lastPage = this.pages.numPages.length - 1;
        if (lastPage === -1) {
            this.pages.numPages.push(0);
            this.paginateDataArray.push([]);
            lastPage = 0;
        }
        if (push) {
            if (this.paginateDataArray[lastPage].length === this.pages.rowPerPage) {
                this.pages.numPages.push(lastPage + 1);
                this.paginateDataArray.push([]);
            }
        }
        else {
            if (!this.paginateDataArray[lastPage].length) {
                this.pages.numPages.pop();
                this.paginateDataArray.pop();
                this.setPage(lastPage - 1);
            }
        }
    }
    setImageChange(event, column, i) {
        const reader = new FileReader();
        const [file] = event.target.files;
        reader.readAsDataURL(file);
        reader.onload = () => {
            if (i) {
                this.inUpdate[i][column] = reader.result;
            }
            else {
                this.newData[column] = reader.result;
            }
        };
    }
    onClickImage(imageSrc, name) {
        this.dialogService.open(src_app_own_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"], {
            context: {
                title: name,
                isImage: true,
                content: imageSrc
            }
        });
    }
    isGeneric(columntype) {
        return this.genericTypes.includes(columntype);
    }
    getLists() {
        if (!this.islists) {
            this.getList.emit();
        }
    }
};
DataTableComponent.ctorParameters = () => [
    { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDialogService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableComponent.prototype, "tableStructure", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableComponent.prototype, "dataArrayInput", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DataTableComponent.prototype, "create", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DataTableComponent.prototype, "update", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DataTableComponent.prototype, "delete", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DataTableComponent.prototype, "getList", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DataTableComponent.prototype, "createClick", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DataTableComponent.prototype, "buttonClick", void 0);
DataTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-data-table',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./data-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/own/data-table/data-table.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./data-table.component.scss */ "./src/app/own/data-table/data-table.component.scss")).default]
    })
], DataTableComponent);



/***/ }),

/***/ "./src/app/own/data-table/data-table.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/own/data-table/data-table.module.ts ***!
  \*****************************************************/
/*! exports provided: DataTableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableModule", function() { return DataTableModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _data_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-table.component */ "./src/app/own/data-table/data-table.component.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let DataTableModule = class DataTableModule {
};
DataTableModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_data_table_component__WEBPACK_IMPORTED_MODULE_3__["DataTableComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbInputModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbActionsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbAlertModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSelectModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToggleModule"]
        ],
        exports: [_data_table_component__WEBPACK_IMPORTED_MODULE_3__["DataTableComponent"]]
    })
], DataTableModule);



/***/ })

}]);
//# sourceMappingURL=default~agentes-agentes-module~clientes-clientes-module~compras-compras-module~productos-productos-module-es2015.js.map