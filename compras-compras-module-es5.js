(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["compras-compras-module"], {
  /***/
  "./node_modules/ng2-completer/esm2015/ng2-completer.js":
  /*!*************************************************************!*\
    !*** ./node_modules/ng2-completer/esm2015/ng2-completer.js ***!
    \*************************************************************/

  /*! exports provided: ɵa, ɵb, LocalData, RemoteData, LocalDataFactory, RemoteDataFactory, CompleterService, CtrCompleter, CtrDropdown, CtrInput, CtrList, CtrRow, CompleterListItemCmp, CompleterCmp, Ng2CompleterModule */

  /***/
  function node_modulesNg2CompleterEsm2015Ng2CompleterJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return CtrListContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return CompleterBaseData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocalData", function () {
      return LocalData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RemoteData", function () {
      return RemoteData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocalDataFactory", function () {
      return LocalDataFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RemoteDataFactory", function () {
      return RemoteDataFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompleterService", function () {
      return CompleterService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CtrCompleter", function () {
      return CtrCompleter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CtrDropdown", function () {
      return CtrDropdown;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CtrInput", function () {
      return CtrInput;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CtrList", function () {
      return CtrList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CtrRow", function () {
      return CtrRow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompleterListItemCmp", function () {
      return CompleterListItemCmp;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompleterCmp", function () {
      return CompleterCmp;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Ng2CompleterModule", function () {
      return Ng2CompleterModule;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /**
     * @license ng2-completer
     * MIT license
     */


    const MAX_CHARS = 524288; // the default max length per the html maxlength attribute

    const MIN_SEARCH_LENGTH = 3;
    const PAUSE = 10;
    const TEXT_SEARCHING = "Searching...";
    const TEXT_NO_RESULTS = "No results found";
    const CLEAR_TIMEOUT = 50;

    function isNil(value) {
      return typeof value === "undefined" || value === null;
    }

    class CompleterBaseData extends rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"] {
      constructor() {
        super();
        this._searchFields = null;
        this._titleField = null;
        this._descriptionField = undefined;
        this._imageField = undefined;
      }

      cancel() {
        return;
      }

      searchFields(searchFields) {
        this._searchFields = searchFields;
        return this;
      }

      titleField(titleField) {
        this._titleField = titleField;
        return this;
      }

      descriptionField(descriptionField) {
        this._descriptionField = descriptionField;
        return this;
      }

      imageField(imageField) {
        this._imageField = imageField;
        return this;
      }

      convertToItem(data) {
        let image = null;
        let formattedText;
        let formattedDesc = null;

        if (this._titleField) {
          formattedText = this.extractTitle(data);
        } else {
          formattedText = data;
        }

        if (typeof formattedText !== "string") {
          formattedText = JSON.stringify(formattedText);
        }

        if (this._descriptionField) {
          formattedDesc = this.extractValue(data, this._descriptionField);
        }

        if (this._imageField) {
          image = this.extractValue(data, this._imageField);
        }

        if (isNil(formattedText)) {
          return null;
        }

        return {
          description: formattedDesc,
          image,
          originalObject: data,
          title: formattedText
        };
      }

      extractMatches(data, term) {
        let matches = [];
        const searchFields = this._searchFields ? this._searchFields.split(",") : null;

        if (this._searchFields !== null && this._searchFields !== undefined && term !== "") {
          matches = data.filter(item => {
            const values = searchFields ? this.extractBySearchFields(searchFields, item) : [item];
            return values.some(value => value.toString().toLowerCase().indexOf(term.toString().toLowerCase()) >= 0);
          });
        } else {
          matches = data;
        }

        return matches;
      }

      extractTitle(item) {
        // split title fields and run extractValue for each and join with ' '
        if (!this._titleField) {
          return "";
        }

        return this._titleField.split(",").map(field => {
          return this.extractValue(item, field);
        }).reduce((acc, titlePart) => acc ? "".concat(acc, " ").concat(titlePart) : titlePart);
      }

      extractValue(obj, key) {
        let keys;
        let result;

        if (key) {
          keys = key.split(".");
          result = obj;

          for (key of keys) {
            if (result) {
              result = result[key];
            }
          }
        } else {
          result = obj;
        }

        return result;
      }

      processResults(matches) {
        let i;
        const results = [];

        if (matches && matches.length > 0) {
          for (i = 0; i < matches.length; i++) {
            const item = this.convertToItem(matches[i]);

            if (item) {
              results.push(item);
            }
          }
        }

        return results;
      }

      extractBySearchFields(searchFields, item) {
        return searchFields.map(searchField => this.extractValue(item, searchField)).filter(value => !!value);
      }

    }

    class LocalData extends CompleterBaseData {
      constructor() {
        super();
        this.dataSourceChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._data = [];
        this.savedTerm = null;
      }

      data(data) {
        if (data instanceof rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]) {
          const data$ = data;
          data$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => [])).subscribe(res => {
            this._data = res;

            if (this.savedTerm) {
              this.search(this.savedTerm);
            }

            this.dataSourceChange.emit();
          });
        } else {
          this._data = data;
        }

        this.dataSourceChange.emit();
        return this;
      }

      search(term) {
        if (!this._data) {
          this.savedTerm = term;
        } else {
          this.savedTerm = null;
          const matches = this.extractMatches(this._data, term);
          this.next(this.processResults(matches));
        }
      }

      convertToItem(data) {
        return super.convertToItem(data);
      }

    }

    class RemoteData extends CompleterBaseData {
      constructor(http) {
        super();
        this.http = http;
        this.dataSourceChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._remoteUrl = null;
        this.remoteSearch = null;
        this._urlFormater = null;
        this._dataField = null;
      }

      remoteUrl(remoteUrl) {
        this._remoteUrl = remoteUrl;
        this.dataSourceChange.emit();
        return this;
      }

      urlFormater(urlFormater) {
        this._urlFormater = urlFormater;
      }

      dataField(dataField) {
        this._dataField = dataField;
      }

      requestOptions(requestOptions) {
        this._requestOptions = requestOptions;
      }

      search(term) {
        this.cancel(); // let params = {};

        let url = "";

        if (this._urlFormater) {
          url = this._urlFormater(term);
        } else {
          url = this._remoteUrl + encodeURIComponent(term);
        }

        this.remoteSearch = this.http.get(url, Object.assign({}, this._requestOptions)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
          const matches = this.extractValue(data, this._dataField);
          return this.extractMatches(matches, term);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => [])).subscribe(matches => {
          const results = this.processResults(matches);
          this.next(results);
        });
      }

      cancel() {
        if (this.remoteSearch) {
          this.remoteSearch.unsubscribe();
        }
      }

      convertToItem(data) {
        return super.convertToItem(data);
      }

    }

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    let LocalDataFactory = class LocalDataFactory {
      create() {
        return new LocalData();
      }

    };
    LocalDataFactory = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], LocalDataFactory);

    var __decorate$1 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    let RemoteDataFactory = class RemoteDataFactory {
      constructor(http) {
        this.http = http;
      }

      create() {
        return new RemoteData(this.http);
      }

    };
    RemoteDataFactory = __decorate$1([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], RemoteDataFactory);

    var __decorate$2 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata$1 = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    let CompleterService = class CompleterService {
      constructor(localDataFactory, // Using any instead of () => LocalData because of AoT errors
      remoteDataFactory // Using any instead of () => LocalData because of AoT errors
      ) {
        this.localDataFactory = localDataFactory;
        this.remoteDataFactory = remoteDataFactory;
      }

      local(data, searchFields = "", titleField = "") {
        const localData = this.localDataFactory.create();
        return localData.data(data).searchFields(searchFields).titleField(titleField);
      }

      remote(url, searchFields = "", titleField = "") {
        const remoteData = this.remoteDataFactory.create();
        return remoteData.remoteUrl(url).searchFields(searchFields).titleField(titleField);
      }

    };
    CompleterService = __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), __metadata$1("design:paramtypes", [LocalDataFactory, RemoteDataFactory // Using any instead of () => LocalData because of AoT errors
    ])], CompleterService);

    var __decorate$3 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata$2 = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    let CtrCompleter = class CtrCompleter {
      constructor() {
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.highlighted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dataSourceChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.list = null;
        this.dropdown = null;
        this._hasHighlighted = false;
        this._hasSelected = false;
        this._cancelBlur = false;
        this._isOpen = false;
        this._autoHighlightIndex = null;
      }

      registerList(list) {
        this.list = list;
      }

      registerDropdown(dropdown) {
        this.dropdown = dropdown;
      }

      onHighlighted(item) {
        this.highlighted.emit(item);
        this._hasHighlighted = !!item;
      }

      onSelected(item, clearList = true) {
        this.selected.emit(item);

        if (item) {
          this._hasSelected = true;
        }

        if (clearList) {
          this.clear();
        }
      }

      onDataSourceChange() {
        if (this.hasSelected) {
          this.selected.emit(null);
          this._hasSelected = false;
        }

        this.dataSourceChange.emit();
      }

      search(term) {
        if (this._hasSelected) {
          this.selected.emit(null);
          this._hasSelected = false;
        }

        if (this.list) {
          this.list.search(term);
        }
      }

      clear() {
        this._hasHighlighted = false;
        this.isOpen = false;

        if (this.dropdown) {
          this.dropdown.clear();
        }

        if (this.list) {
          this.list.clear();
        }
      }

      selectCurrent() {
        if (this.dropdown) {
          this.dropdown.selectCurrent();
        }
      }

      nextRow() {
        if (this.dropdown) {
          this.dropdown.nextRow();
        }
      }

      prevRow() {
        if (this.dropdown) {
          this.dropdown.prevRow();
        }
      }

      hasHighlighted() {
        return this._hasHighlighted;
      }

      cancelBlur(cancel) {
        this._cancelBlur = cancel;
      }

      isCancelBlur() {
        return this._cancelBlur;
      }

      open() {
        if (!this._isOpen && !!this.list) {
          this.isOpen = true;
          this.list.open();
        }
      }

      get isOpen() {
        return this._isOpen;
      }

      set isOpen(open) {
        this._isOpen = open;
        this.opened.emit(this._isOpen);

        if (this.list) {
          this.list.isOpen(open);
        }
      }

      get autoHighlightIndex() {
        return this._autoHighlightIndex;
      }

      set autoHighlightIndex(index) {
        this._autoHighlightIndex = index;

        if (this.dropdown) {
          this.dropdown.highlightRow(this._autoHighlightIndex);
        }
      }

      get hasSelected() {
        return this._hasSelected;
      }

    };

    __decorate$3([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), __metadata$2("design:type", Object)], CtrCompleter.prototype, "selected", void 0);

    __decorate$3([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), __metadata$2("design:type", Object)], CtrCompleter.prototype, "highlighted", void 0);

    __decorate$3([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), __metadata$2("design:type", Object)], CtrCompleter.prototype, "opened", void 0);

    __decorate$3([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), __metadata$2("design:type", Object)], CtrCompleter.prototype, "dataSourceChange", void 0);

    CtrCompleter = __decorate$3([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: "[ctrCompleter]"
    })], CtrCompleter);

    var __decorate$4 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata$3 = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    class CtrRowItem {
      constructor(row, index) {
        this.row = row;
        this.index = index;
      }

    }

    let CtrDropdown = class CtrDropdown {
      constructor(completer, el, zone) {
        this.completer = completer;
        this.el = el;
        this.zone = zone;
        this.rows = [];
        this.isScrollOn = false;
        this._rowMouseDown = false;
        this.completer.registerDropdown(this);
      }

      ngOnDestroy() {
        this.completer.registerDropdown(null);
      }

      ngAfterViewInit() {
        const css = getComputedStyle(this.el.nativeElement);
        const autoHighlightIndex = this.completer.autoHighlightIndex;
        this.isScrollOn = !!css.maxHeight && css.overflowY === "auto";

        if (autoHighlightIndex) {
          this.zone.run(() => {
            this.highlightRow(autoHighlightIndex);
          });
        }
      }

      onMouseDown(event) {
        // Support for canceling blur on IE (issue #158)
        if (!this._rowMouseDown) {
          this.completer.cancelBlur(true);
          this.zone.run(() => {
            this.completer.cancelBlur(false);
          });
        } else {
          this._rowMouseDown = false;
        }
      }

      registerRow(row) {
        const arrIndex = this.rows.findIndex(_row => _row.index === row.index);

        if (arrIndex >= 0) {
          this.rows[arrIndex] = row;
        } else {
          this.rows.push(row);
        }
      }

      unregisterRow(rowIndex) {
        const arrIndex = this.rows.findIndex(_row => _row.index === rowIndex);
        this.rows.splice(arrIndex, 1);

        if (this.currHighlighted && rowIndex === this.currHighlighted.index) {
          this.highlightRow(null);
        }
      }

      highlightRow(index) {
        const highlighted = this.rows.find(row => row.index === index);

        if (isNil(index) || index < 0) {
          if (this.currHighlighted) {
            this.currHighlighted.row.setHighlighted(false);
          }

          this.currHighlighted = undefined;
          this.completer.onHighlighted(null);
          return;
        }

        if (!highlighted) {
          return;
        }

        if (this.currHighlighted) {
          this.currHighlighted.row.setHighlighted(false);
        }

        this.currHighlighted = highlighted;
        this.currHighlighted.row.setHighlighted(true);
        this.completer.onHighlighted(this.currHighlighted.row.getDataItem());

        if (this.isScrollOn && this.currHighlighted) {
          const rowTop = this.dropdownRowTop();

          if (!rowTop) {
            return;
          }

          if (rowTop < 0) {
            this.dropdownScrollTopTo(rowTop - 1);
          } else {
            const row = this.currHighlighted.row.getNativeElement();

            if (this.dropdownHeight() < row.getBoundingClientRect().bottom) {
              this.dropdownScrollTopTo(this.dropdownRowOffsetHeight(row));

              if (this.el.nativeElement.getBoundingClientRect().bottom - this.dropdownRowOffsetHeight(row) < row.getBoundingClientRect().top) {
                this.dropdownScrollTopTo(row.getBoundingClientRect().top - (this.el.nativeElement.getBoundingClientRect().top + parseInt(getComputedStyle(this.el.nativeElement).paddingTop, 10)));
              }
            }
          }
        }
      }

      clear() {
        this.rows = [];
      }

      onSelected(item) {
        this.completer.onSelected(item);
      }

      rowMouseDown() {
        this._rowMouseDown = true;
      }

      selectCurrent() {
        if (!!this.currHighlighted && !!this.currHighlighted.row) {
          this.onSelected(this.currHighlighted.row.getDataItem());
        } else if (this.rows.length > 0) {
          this.onSelected(this.rows[0].row.getDataItem());
        }
      }

      nextRow() {
        let nextRowIndex = 0;

        if (this.currHighlighted) {
          nextRowIndex = this.currHighlighted.index + 1;
        }

        this.highlightRow(nextRowIndex);
      }

      prevRow() {
        let nextRowIndex = -1;

        if (this.currHighlighted) {
          nextRowIndex = this.currHighlighted.index - 1;
        }

        this.highlightRow(nextRowIndex);
      }

      dropdownScrollTopTo(offset) {
        this.el.nativeElement.scrollTop = this.el.nativeElement.scrollTop + offset;
      }

      dropdownRowTop() {
        if (!this.currHighlighted) {
          return;
        }

        return this.currHighlighted.row.getNativeElement().getBoundingClientRect().top - (this.el.nativeElement.getBoundingClientRect().top + parseInt(getComputedStyle(this.el.nativeElement).paddingTop, 10));
      }

      dropdownHeight() {
        return this.el.nativeElement.getBoundingClientRect().top + parseInt(getComputedStyle(this.el.nativeElement).maxHeight, 10);
      }

      dropdownRowOffsetHeight(row) {
        let css = getComputedStyle(row.parentElement);
        return row.parentElement.offsetHeight + parseInt(css.marginTop, 10) + parseInt(css.marginBottom, 10);
      }

    };

    __decorate$4([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("mousedown", ["$event"]), __metadata$3("design:type", Function), __metadata$3("design:paramtypes", [Object]), __metadata$3("design:returntype", void 0)], CtrDropdown.prototype, "onMouseDown", null);

    CtrDropdown = __decorate$4([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: "[ctrDropdown]"
    }), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])()), __metadata$3("design:paramtypes", [CtrCompleter, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], CtrDropdown);

    var __decorate$5 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata$4 = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __param$1 = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }; // keyboard events


    const KEY_DW = 40;
    const KEY_RT = 39;
    const KEY_UP = 38;
    const KEY_LF = 37;
    const KEY_ES = 27;
    const KEY_EN = 13;
    const KEY_TAB = 9;
    const KEY_BK = 8;
    const KEY_SH = 16;
    const KEY_CL = 20;
    const KEY_F1 = 112;
    const KEY_F12 = 123;
    let CtrInput = class CtrInput {
      constructor(completer, ngModel, el) {
        this.completer = completer;
        this.ngModel = ngModel;
        this.el = el;
        this.clearSelected = false;
        this.clearUnselected = false;
        this.overrideSuggested = false;
        this.fillHighlighted = true;
        this.openOnFocus = false;
        this.openOnClick = false;
        this.selectOnClick = false;
        this.selectOnFocus = false;
        this.ngModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._searchStr = "";
        this._displayStr = "";
        this.blurTimer = null;
        this.completer.selected.subscribe(item => {
          if (!item) {
            return;
          }

          if (this.clearSelected) {
            this.searchStr = "";
          } else {
            this.searchStr = item.title;
          }

          this.ngModelChange.emit(this.searchStr);
        });
        this.completer.highlighted.subscribe(item => {
          if (this.fillHighlighted) {
            if (item) {
              this._displayStr = item.title;
              this.ngModelChange.emit(item.title);
            } else {
              this._displayStr = this.searchStr;
              this.ngModelChange.emit(this.searchStr);
            }
          }
        });
        this.completer.dataSourceChange.subscribe(() => {
          this.completer.search(this.searchStr);
        });

        if (this.ngModel.valueChanges) {
          this.ngModel.valueChanges.subscribe(value => {
            if (!isNil(value) && this._displayStr !== value) {
              if (this.searchStr !== value) {
                this.completer.search(value);
              }

              this.searchStr = value;
            }
          });
        }
      }

      keyupHandler(event) {
        if (event.keyCode === KEY_LF || event.keyCode === KEY_RT || event.keyCode === KEY_TAB) {
          // do nothing
          return;
        }

        if (event.keyCode === KEY_UP || event.keyCode === KEY_EN) {
          event.preventDefault();
        } else if (event.keyCode === KEY_DW) {
          event.preventDefault();
          this.completer.search(this.searchStr);
        } else if (event.keyCode === KEY_ES) {
          if (this.completer.isOpen) {
            this.restoreSearchValue();
            this.completer.clear();
            event.stopPropagation();
            event.preventDefault();
          }
        }
      }

      pasteHandler(event) {
        this.completer.open();
      }

      keydownHandler(event) {
        const keyCode = event.keyCode || event.which;

        if (keyCode === KEY_EN) {
          if (this.completer.hasHighlighted()) {
            event.preventDefault();
          }

          this.handleSelection();
        } else if (keyCode === KEY_DW) {
          event.preventDefault();
          this.completer.open();
          this.completer.nextRow();
        } else if (keyCode === KEY_UP) {
          event.preventDefault();
          this.completer.prevRow();
        } else if (keyCode === KEY_TAB) {
          this.handleSelection();
        } else if (keyCode === KEY_BK) {
          this.completer.open();
        } else if (keyCode === KEY_ES) {
          // This is very specific to IE10/11 #272
          // without this, IE clears the input text
          event.preventDefault();

          if (this.completer.isOpen) {
            event.stopPropagation();
          }
        } else {
          if (keyCode !== 0 && keyCode !== KEY_SH && keyCode !== KEY_CL && (keyCode <= KEY_F1 || keyCode >= KEY_F12) && !event.ctrlKey && !event.metaKey && !event.altKey) {
            this.completer.open();
          }
        }
      }

      onBlur(event) {
        // Check if we need to cancel Blur for IE
        if (this.completer.isCancelBlur()) {
          setTimeout(() => {
            // get the focus back
            this.el.nativeElement.focus();
          }, 0);
          return;
        }

        if (this.completer.isOpen) {
          this.blurTimer = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(200).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(() => this.doBlur());
        }
      }

      onfocus() {
        if (this.blurTimer) {
          this.blurTimer.unsubscribe();
          this.blurTimer = null;
        }

        if (this.selectOnFocus) {
          this.el.nativeElement.select();
        }

        if (this.openOnFocus) {
          this.completer.open();
        }
      }

      onClick(event) {
        if (this.selectOnClick) {
          this.el.nativeElement.select();
        }

        if (this.openOnClick) {
          if (this.completer.isOpen) {
            this.completer.clear();
          } else {
            this.completer.open();
          }
        }
      }

      get searchStr() {
        return this._searchStr;
      }

      set searchStr(term) {
        this._searchStr = term;
        this._displayStr = term;
      }

      handleSelection() {
        if (this.completer.hasHighlighted()) {
          this._searchStr = "";
          this.completer.selectCurrent();
        } else if (this.overrideSuggested) {
          this.completer.onSelected({
            title: this.searchStr,
            originalObject: null
          });
        } else {
          if (this.clearUnselected && !this.completer.hasSelected) {
            this.searchStr = "";
            this.ngModelChange.emit(this.searchStr);
          }

          this.completer.clear();
        }
      }

      restoreSearchValue() {
        if (this.fillHighlighted) {
          if (this._displayStr != this.searchStr) {
            this._displayStr = this.searchStr;
            this.ngModelChange.emit(this.searchStr);
          }
        }
      }

      doBlur() {
        if (this.blurTimer) {
          this.blurTimer.unsubscribe();
          this.blurTimer = null;
        }

        if (this.overrideSuggested) {
          this.completer.onSelected({
            title: this.searchStr,
            originalObject: null
          });
        } else {
          if (this.clearUnselected && !this.completer.hasSelected) {
            this.searchStr = "";
            this.ngModelChange.emit(this.searchStr);
          } else {
            this.restoreSearchValue();
          }
        }

        this.completer.clear();
      }

    };

    __decorate$5([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("clearSelected"), __metadata$4("design:type", Object)], CtrInput.prototype, "clearSelected", void 0);

    __decorate$5([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("clearUnselected"), __metadata$4("design:type", Object)], CtrInput.prototype, "clearUnselected", void 0);

    __decorate$5([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("overrideSuggested"), __metadata$4("design:type", Object)], CtrInput.prototype, "overrideSuggested", void 0);

    __decorate$5([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("fillHighlighted"), __metadata$4("design:type", Object)], CtrInput.prototype, "fillHighlighted", void 0);

    __decorate$5([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("openOnFocus"), __metadata$4("design:type", Object)], CtrInput.prototype, "openOnFocus", void 0);

    __decorate$5([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("openOnClick"), __metadata$4("design:type", Object)], CtrInput.prototype, "openOnClick", void 0);

    __decorate$5([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("selectOnClick"), __metadata$4("design:type", Object)], CtrInput.prototype, "selectOnClick", void 0);

    __decorate$5([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("selectOnFocus"), __metadata$4("design:type", Object)], CtrInput.prototype, "selectOnFocus", void 0);

    __decorate$5([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), __metadata$4("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], CtrInput.prototype, "ngModelChange", void 0);

    __decorate$5([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("keyup", ["$event"]), __metadata$4("design:type", Function), __metadata$4("design:paramtypes", [Object]), __metadata$4("design:returntype", void 0)], CtrInput.prototype, "keyupHandler", null);

    __decorate$5([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("paste", ["$event"]), __metadata$4("design:type", Function), __metadata$4("design:paramtypes", [Object]), __metadata$4("design:returntype", void 0)], CtrInput.prototype, "pasteHandler", null);

    __decorate$5([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("keydown", ["$event"]), __metadata$4("design:type", Function), __metadata$4("design:paramtypes", [Object]), __metadata$4("design:returntype", void 0)], CtrInput.prototype, "keydownHandler", null);

    __decorate$5([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("blur", ["$event"]), __metadata$4("design:type", Function), __metadata$4("design:paramtypes", [Object]), __metadata$4("design:returntype", void 0)], CtrInput.prototype, "onBlur", null);

    __decorate$5([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("focus", []), __metadata$4("design:type", Function), __metadata$4("design:paramtypes", []), __metadata$4("design:returntype", void 0)], CtrInput.prototype, "onfocus", null);

    __decorate$5([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("click", ["$event"]), __metadata$4("design:type", Function), __metadata$4("design:paramtypes", [Object]), __metadata$4("design:returntype", void 0)], CtrInput.prototype, "onClick", null);

    CtrInput = __decorate$5([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: "[ctrInput]"
    }), __param$1(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])()), __metadata$4("design:paramtypes", [CtrCompleter, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], CtrInput);

    var __decorate$6 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata$5 = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __param$2 = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    class CtrListContext {
      constructor(results, searching, searchInitialized, isOpen) {
        this.results = results;
        this.searching = searching;
        this.searchInitialized = searchInitialized;
        this.isOpen = isOpen;
      }

    }

    let CtrList = class CtrList {
      constructor(completer, templateRef, viewContainer, cd, zone) {
        this.completer = completer;
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.zone = zone;
        this.ctrListMinSearchLength = MIN_SEARCH_LENGTH;
        this.ctrListPause = PAUSE;
        this.ctrListAutoMatch = false;
        this.ctrListAutoHighlight = false;
        this.ctrListDisplaySearching = true;
        this._dataService = null; // private results: CompleterItem[] = [];

        this.term = null; // private searching = false;

        this.searchTimer = null;
        this.clearTimer = null;
        this.ctx = new CtrListContext([], false, false, false);
        this._initialValue = null;
        this.viewRef = null;
      }

      ngOnInit() {
        this.completer.registerList(this);
        this.viewRef = this.viewContainer.createEmbeddedView(this.templateRef, new CtrListContext([], false, false, false));
      }

      set dataService(newService) {
        this._dataService = newService;
        this.dataServiceSubscribe();
      }

      set initialValue(value) {
        if (this._dataService && typeof this._dataService.convertToItem === "function") {
          this.zone.run(() => {
            const initialItem = this._dataService && this._dataService.convertToItem(value);

            if (initialItem) {
              this.completer.onSelected(initialItem, false);
            }
          });
        } else if (!this._dataService) {
          this._initialValue = value;
        }
      }

      search(term) {
        if (!isNil(term) && term.length >= this.ctrListMinSearchLength && this.term !== term) {
          if (this.searchTimer) {
            this.searchTimer.unsubscribe();
            this.searchTimer = null;
          }

          if (!this.ctx.searching) {
            if (this.ctrListDisplaySearching) {
              this.ctx.results = [];
            }

            this.ctx.searching = true;
            this.ctx.searchInitialized = true;
            this.refreshTemplate();
          }

          if (this.clearTimer) {
            this.clearTimer.unsubscribe();
          }

          this.searchTimer = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(this.ctrListPause).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(() => {
            this.searchTimerComplete(term);
          });
        } else if (!isNil(term) && term.length < this.ctrListMinSearchLength) {
          this.clear();
          this.term = "";
        }
      }

      clear() {
        if (this.searchTimer) {
          this.searchTimer.unsubscribe();
        }

        this.clearTimer = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(CLEAR_TIMEOUT).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(() => {
          this._clear();
        });
      }

      open() {
        if (!this.ctx.searchInitialized) {
          this.search("");
        }

        this.refreshTemplate();
      }

      isOpen(open) {
        this.ctx.isOpen = open;
      }

      _clear() {
        if (this.searchTimer) {
          this.searchTimer.unsubscribe();
          this.searchTimer = null;
        }

        if (this.dataService) {
          this.dataService.cancel();
        }

        this.viewContainer.clear();
        this.viewRef = null;
      }

      searchTimerComplete(term) {
        // Begin the search
        if (isNil(term) || term.length < this.ctrListMinSearchLength) {
          this.ctx.searching = false;
          return;
        }

        this.term = term;

        if (this._dataService) {
          this._dataService.search(term);
        }
      }

      refreshTemplate() {
        // create the template if it doesn't exist
        if (!this.viewRef) {
          this.viewRef = this.viewContainer.createEmbeddedView(this.templateRef, this.ctx);
        } else if (!this.viewRef.destroyed) {
          // refresh the template
          this.viewRef.context.isOpen = this.ctx.isOpen;
          this.viewRef.context.results = this.ctx.results;
          this.viewRef.context.searching = this.ctx.searching;
          this.viewRef.context.searchInitialized = this.ctx.searchInitialized;
          this.viewRef.detectChanges();
        }

        this.cd.markForCheck();
      }

      getBestMatchIndex() {
        if (!this.ctx.results || !this.term) {
          return null;
        } // First try to find the exact term


        let bestMatch = this.ctx.results.findIndex(item => item.title.toLowerCase() === this.term.toLocaleLowerCase()); // If not try to find the first item that starts with the term

        if (bestMatch < 0) {
          bestMatch = this.ctx.results.findIndex(item => item.title.toLowerCase().startsWith(this.term.toLocaleLowerCase()));
        } // If not try to find the first item that includes the term


        if (bestMatch < 0) {
          bestMatch = this.ctx.results.findIndex(item => item.title.toLowerCase().includes(this.term.toLocaleLowerCase()));
        }

        return bestMatch < 0 ? null : bestMatch;
      }

      dataServiceSubscribe() {
        if (this._dataService) {
          this._dataService.subscribe(results => {
            this.ctx.searchInitialized = true;
            this.ctx.searching = false;
            this.ctx.results = results;

            if (this.ctrListAutoMatch && results && results.length === 1 && results[0].title && !isNil(this.term) && results[0].title.toLocaleLowerCase() === this.term.toLocaleLowerCase()) {
              // Do automatch
              this.completer.onSelected(results[0]);
              return;
            }

            this.refreshTemplate();

            if (this.ctrListAutoHighlight) {
              this.completer.autoHighlightIndex = this.getBestMatchIndex();
            }
          }, error => {
            console.error(error);
            console.error("Unexpected error in dataService: errors should be handled by the dataService Observable");
            return [];
          });

          if (this._dataService.dataSourceChange) {
            this._dataService.dataSourceChange.subscribe(() => {
              this.term = null;
              this.ctx.searchInitialized = false;
              this.ctx.searching = false;
              this.ctx.results = [];
              this.refreshTemplate();
              this.completer.onDataSourceChange();
            });
          }
        }
      }

    };

    __decorate$6([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), __metadata$5("design:type", Object)], CtrList.prototype, "ctrListMinSearchLength", void 0);

    __decorate$6([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), __metadata$5("design:type", Object)], CtrList.prototype, "ctrListPause", void 0);

    __decorate$6([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), __metadata$5("design:type", Object)], CtrList.prototype, "ctrListAutoMatch", void 0);

    __decorate$6([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), __metadata$5("design:type", Object)], CtrList.prototype, "ctrListAutoHighlight", void 0);

    __decorate$6([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), __metadata$5("design:type", Object)], CtrList.prototype, "ctrListDisplaySearching", void 0);

    __decorate$6([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("ctrList"), __metadata$5("design:type", Object), __metadata$5("design:paramtypes", [Object])], CtrList.prototype, "dataService", null);

    __decorate$6([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("ctrListInitialValue"), __metadata$5("design:type", Object), __metadata$5("design:paramtypes", [Object])], CtrList.prototype, "initialValue", null);

    CtrList = __decorate$6([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: "[ctrList]"
    }), __param$2(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])()), __metadata$5("design:paramtypes", [CtrCompleter, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], CtrList);

    var __decorate$7 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata$6 = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __param$3 = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    let CtrRow = class CtrRow {
      constructor(el, renderer, dropdown) {
        this.el = el;
        this.renderer = renderer;
        this.dropdown = dropdown;
        this.selected = false;
        this._rowIndex = 0;
        this._item = null;
      }

      ngOnDestroy() {
        if (this._rowIndex) {
          this.dropdown.unregisterRow(this._rowIndex);
        }
      }

      set ctrRow(index) {
        this._rowIndex = index;
        this.dropdown.registerRow(new CtrRowItem(this, this._rowIndex));
      }

      set dataItem(item) {
        this._item = item;
      }

      onClick(event) {
        this.dropdown.onSelected(this._item);
      }

      onMouseEnter(event) {
        this.dropdown.highlightRow(this._rowIndex);
      }

      onMouseDown(event) {
        this.dropdown.rowMouseDown();
      }

      setHighlighted(selected) {
        this.selected = selected;

        if (this.selected) {
          this.renderer.addClass(this.el.nativeElement, "completer-selected-row");
        } else {
          this.renderer.removeClass(this.el.nativeElement, "completer-selected-row");
        }
      }

      getNativeElement() {
        return this.el.nativeElement;
      }

      getDataItem() {
        return this._item;
      }

    };

    __decorate$7([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), __metadata$6("design:type", Number), __metadata$6("design:paramtypes", [Number])], CtrRow.prototype, "ctrRow", null);

    __decorate$7([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), __metadata$6("design:type", Object), __metadata$6("design:paramtypes", [Object])], CtrRow.prototype, "dataItem", null);

    __decorate$7([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("click", ["$event"]), __metadata$6("design:type", Function), __metadata$6("design:paramtypes", [Object]), __metadata$6("design:returntype", void 0)], CtrRow.prototype, "onClick", null);

    __decorate$7([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("mouseenter", ["$event"]), __metadata$6("design:type", Function), __metadata$6("design:paramtypes", [Object]), __metadata$6("design:returntype", void 0)], CtrRow.prototype, "onMouseEnter", null);

    __decorate$7([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("mousedown", ["$event"]), __metadata$6("design:type", Function), __metadata$6("design:paramtypes", [Object]), __metadata$6("design:returntype", void 0)], CtrRow.prototype, "onMouseDown", null);

    CtrRow = __decorate$7([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: "[ctrRow]"
    }), __param$3(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])()), __metadata$6("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], CtrDropdown])], CtrRow);

    var __decorate$8 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata$7 = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    let CompleterListItemCmp = class CompleterListItemCmp {
      constructor() {
        this.text = "";
        this.searchStr = "";
        this.matchClass = "";
        this.type = "";
        this.parts = [];
      }

      ngOnInit() {
        if (!this.searchStr) {
          this.parts.push({
            isMatch: false,
            text: this.text
          });
          return;
        }

        const matchStr = this.text.toLowerCase();
        let matchPos = matchStr.indexOf(this.searchStr.toLowerCase());
        let startIndex = 0;

        while (matchPos >= 0) {
          const matchText = this.text.slice(matchPos, matchPos + this.searchStr.length);

          if (matchPos === 0) {
            this.parts.push({
              isMatch: true,
              text: matchText
            });
            startIndex += this.searchStr.length;
          } else if (matchPos > 0) {
            const matchPart = this.text.slice(startIndex, matchPos);
            this.parts.push({
              isMatch: false,
              text: matchPart
            });
            this.parts.push({
              isMatch: true,
              text: matchText
            });
            startIndex += this.searchStr.length + matchPart.length;
          }

          matchPos = matchStr.indexOf(this.searchStr.toLowerCase(), startIndex);
        }

        if (startIndex < this.text.length) {
          this.parts.push({
            isMatch: false,
            text: this.text.slice(startIndex, this.text.length)
          });
        }
      }

    };

    __decorate$8([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), __metadata$7("design:type", String)], CompleterListItemCmp.prototype, "text", void 0);

    __decorate$8([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), __metadata$7("design:type", String)], CompleterListItemCmp.prototype, "searchStr", void 0);

    __decorate$8([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), __metadata$7("design:type", String)], CompleterListItemCmp.prototype, "matchClass", void 0);

    __decorate$8([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), __metadata$7("design:type", String)], CompleterListItemCmp.prototype, "type", void 0);

    CompleterListItemCmp = __decorate$8([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "completer-list-item",
      template: "<span class=\"completer-list-item-holder\" [ngClass]= \"{'completer-title': type === 'title', 'completer-description': type === 'description'}\" >\n        <span class=\"completer-list-item\" *ngFor=\"let part of parts\" [ngClass]= \"part.isMatch ? matchClass : null\">{{part.text}}</span>\n    </span>"
    })], CompleterListItemCmp);

    var __decorate$9 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata$8 = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    const noop = () => {
      return;
    };

    const COMPLETER_CONTROL_VALUE_ACCESSOR = {
      multi: true,
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => CompleterCmp)
    };
    let CompleterCmp = class CompleterCmp {
      constructor(completerService, cdr) {
        this.completerService = completerService;
        this.cdr = cdr;
        this.inputName = "";
        this.inputId = "";
        this.pause = PAUSE;
        this.minSearchLength = MIN_SEARCH_LENGTH;
        this.maxChars = MAX_CHARS;
        this.overrideSuggested = false;
        this.clearSelected = false;
        this.clearUnselected = false;
        this.fillHighlighted = true;
        this.placeholder = "";
        this.autoMatch = false;
        this.disableInput = false;
        this.autofocus = false;
        this.openOnFocus = false;
        this.openOnClick = false;
        this.selectOnClick = false;
        this.selectOnFocus = false;
        this.autoHighlight = false;
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.highlighted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.blurEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.focusEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.keyup = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.keydown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("");
        this.displaySearching = true;
        this.displayNoResults = true;
        this._textNoResults = TEXT_NO_RESULTS;
        this._textSearching = TEXT_SEARCHING;
        this._onTouchedCallback = noop;
        this._onChangeCallback = noop;
        this._focus = false;
        this._open = false;
        this._searchStr = "";
      }

      get value() {
        return this.searchStr;
      }

      set value(v) {
        if (v !== this.searchStr) {
          this.searchStr = v;
        } // Propagate the change in any case


        this._onChangeCallback(v);
      }

      get searchStr() {
        return this._searchStr;
      }

      set searchStr(value) {
        if (typeof value === "string" || isNil(value)) {
          this._searchStr = value;
        } else {
          this._searchStr = JSON.stringify(value);
        }
      }

      ngAfterViewInit() {
        if (this.autofocus) {
          this._focus = true;
        }
      }

      ngAfterViewChecked() {
        if (this._focus) {
          setTimeout(() => {
            if (!!this.ctrInput) {
              this.ctrInput.nativeElement.focus();
              this._focus = false;
            }
          }, 0);
        }
      }

      onTouched() {
        this._onTouchedCallback();
      }

      writeValue(value) {
        this.searchStr = value;
      }

      registerOnChange(fn) {
        this._onChangeCallback = fn;
      }

      registerOnTouched(fn) {
        this._onTouchedCallback = fn;
      }

      setDisabledState(isDisabled) {
        this.disableInput = isDisabled;
      }

      set datasource(source) {
        if (source) {
          if (source instanceof Array) {
            this.dataService = this.completerService.local(source);
          } else if (typeof source === "string") {
            this.dataService = this.completerService.remote(source);
          } else {
            this.dataService = source;
          }
        }
      }

      set textNoResults(text) {
        if (this._textNoResults !== text) {
          this._textNoResults = text;
          this.displayNoResults = !!this._textNoResults && this._textNoResults !== "false";
        }
      }

      set textSearching(text) {
        if (this._textSearching !== text) {
          this._textSearching = text;
          this.displaySearching = !!this._textSearching && this._textSearching !== "false";
        }
      }

      ngOnInit() {
        if (!this.completer) {
          return;
        }

        this.completer.selected.subscribe(item => {
          this.selected.emit(item);
        });
        this.completer.highlighted.subscribe(item => {
          this.highlighted.emit(item);
        });
        this.completer.opened.subscribe(isOpen => {
          this._open = isOpen;
          this.opened.emit(isOpen);
        });
      }

      onBlur() {
        this.blurEvent.emit();
        this.onTouched();
        this.cdr.detectChanges();
      }

      onFocus() {
        this.focusEvent.emit();
        this.onTouched();
      }

      onClick(event) {
        this.click.emit(event);
        this.onTouched();
      }

      onKeyup(event) {
        this.keyup.emit(event);
        event.stopPropagation();
      }

      onKeydown(event) {
        this.keydown.emit(event);
        event.stopPropagation();
      }

      onChange(value) {
        this.value = value;
      }

      open() {
        if (!this.completer) {
          return;
        }

        this.completer.open();
      }

      close() {
        if (!this.completer) {
          return;
        }

        this.completer.clear();
      }

      focus() {
        if (this.ctrInput) {
          this.ctrInput.nativeElement.focus();
        } else {
          this._focus = true;
        }
      }

      blur() {
        if (this.ctrInput) {
          this.ctrInput.nativeElement.blur();
        } else {
          this._focus = false;
        }
      }

      isOpen() {
        return this._open;
      }

    };

    __decorate$9([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), __metadata$8("design:type", Object)], CompleterCmp.prototype, "dataService", void 0);

    __decorate$9([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), __metadata$8("design:type", Object)], CompleterCmp.prototype, "inputName", void 0);

    __decorate$9([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), __metadata$8("design:type", String)], CompleterCmp.prototype, "inputId", void 0);

    __decorate$9([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), __metadata$8("design:type", Object)], CompleterCmp.prototype, "pause", void 0);

    __decorate$9([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), __metadata$8("design:type", Object)], CompleterCmp.prototype, "minSearchLength", void 0);

    __decorate$9([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), __metadata$8("design:type", Object)], CompleterCmp.prototype, "maxChars", void 0);

    __decorate$9([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), __metadata$8("design:type", Object)], CompleterCmp.prototype, "overrideSuggested", void 0);

    __decorate$9([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), __metadata$8("design:type", Object)], CompleterCmp.prototype, "clearSelected", void 0);

    __decorate$9([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), __metadata$8("design:type", Object)], CompleterCmp.prototype, "clearUnselected", void 0);

    __decorate$9([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), __metadata$8("design:type", Object)], CompleterCmp.prototype, "fillHighlighted", void 0);

    __decorate$9([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), __metadata$8("design:type", Object)], CompleterCmp.prototype, "placeholder", void 0);

    __decorate$9([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), __metadata$8("design:type", Object)], CompleterCmp.prototype, "matchClass", void 0);

    __decorate$9([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), __metadata$8("design:type", Object)], CompleterCmp.prototype, "fieldTabindex", void 0);

    __decorate$9([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), __metadata$8("design:type", Object)], CompleterCmp.prototype, "autoMatch", void 0);

    __decorate$9([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), __metadata$8("design:type", Object)], CompleterCmp.prototype, "disableInput", void 0);

    __decorate$9([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), __metadata$8("design:type", Object)], CompleterCmp.prototype, "inputClass", void 0);

    __decorate$9([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), __metadata$8("design:type", Object)], CompleterCmp.prototype, "autofocus", void 0);

    __decorate$9([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), __metadata$8("design:type", Object)], CompleterCmp.prototype, "openOnFocus", void 0);

    __decorate$9([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), __metadata$8("design:type", Object)], CompleterCmp.prototype, "openOnClick", void 0);

    __decorate$9([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), __metadata$8("design:type", Object)], CompleterCmp.prototype, "selectOnClick", void 0);

    __decorate$9([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), __metadata$8("design:type", Object)], CompleterCmp.prototype, "selectOnFocus", void 0);

    __decorate$9([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), __metadata$8("design:type", Object)], CompleterCmp.prototype, "initialValue", void 0);

    __decorate$9([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), __metadata$8("design:type", Object)], CompleterCmp.prototype, "autoHighlight", void 0);

    __decorate$9([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), __metadata$8("design:type", Object)], CompleterCmp.prototype, "selected", void 0);

    __decorate$9([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), __metadata$8("design:type", Object)], CompleterCmp.prototype, "highlighted", void 0);

    __decorate$9([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("blur"), __metadata$8("design:type", Object)], CompleterCmp.prototype, "blurEvent", void 0);

    __decorate$9([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), __metadata$8("design:type", Object)], CompleterCmp.prototype, "click", void 0);

    __decorate$9([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("focus"), __metadata$8("design:type", Object)], CompleterCmp.prototype, "focusEvent", void 0);

    __decorate$9([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), __metadata$8("design:type", Object)], CompleterCmp.prototype, "opened", void 0);

    __decorate$9([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), __metadata$8("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], CompleterCmp.prototype, "keyup", void 0);

    __decorate$9([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), __metadata$8("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], CompleterCmp.prototype, "keydown", void 0);

    __decorate$9([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(CtrCompleter, {
      static: false
    }), __metadata$8("design:type", Object)], CompleterCmp.prototype, "completer", void 0);

    __decorate$9([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("ctrInput", {
      static: false
    }), __metadata$8("design:type", Object)], CompleterCmp.prototype, "ctrInput", void 0);

    __decorate$9([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), __metadata$8("design:type", Object), __metadata$8("design:paramtypes", [Object])], CompleterCmp.prototype, "datasource", null);

    __decorate$9([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), __metadata$8("design:type", String), __metadata$8("design:paramtypes", [String])], CompleterCmp.prototype, "textNoResults", null);

    __decorate$9([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), __metadata$8("design:type", String), __metadata$8("design:paramtypes", [String])], CompleterCmp.prototype, "textSearching", null);

    CompleterCmp = __decorate$9([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "ng2-completer",
      template: "\n        <div class=\"completer-holder\" ctrCompleter>\n            <input #ctrInput [attr.id]=\"inputId.length > 0 ? inputId : null\" type=\"search\"\n                class=\"completer-input\" ctrInput [ngClass]=\"inputClass\"\n                [(ngModel)]=\"searchStr\" (ngModelChange)=\"onChange($event)\"\n                [attr.name]=\"inputName\" [placeholder]=\"placeholder\"\n                [attr.maxlength]=\"maxChars\" [tabindex]=\"fieldTabindex\" [disabled]=\"disableInput\"\n                [clearSelected]=\"clearSelected\" [clearUnselected]=\"clearUnselected\"\n                [overrideSuggested]=\"overrideSuggested\" [openOnFocus]=\"openOnFocus\" [fillHighlighted]=\"fillHighlighted\"\n                [openOnClick]=\"openOnClick\" [selectOnClick]=\"selectOnClick\" [selectOnFocus]=\"selectOnFocus\"\n                (blur)=\"onBlur()\" (focus)=\"onFocus()\" (keyup)=\"onKeyup($event)\"\n                (keydown)=\"onKeydown($event)\" (click)=\"onClick($event)\"\n                autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" />\n\n            <div class=\"completer-dropdown-holder\"\n                *ctrList=\"dataService;\n                    minSearchLength: minSearchLength;\n                    pause: pause;\n                    autoMatch: autoMatch;\n                    initialValue: initialValue;\n                    autoHighlight: autoHighlight;\n                    displaySearching: displaySearching;\n                    let items = results;\n                    let searchActive = searching;\n                    let isInitialized = searchInitialized;\n                    let isOpen = isOpen;\">\n                <div class=\"completer-dropdown\" ctrDropdown\n                    *ngIf=\"isInitialized && isOpen && (( items?.length > 0|| (displayNoResults && !searchActive)) || (searchActive && displaySearching))\">\n                    <div *ngIf=\"searchActive && displaySearching\" class=\"completer-searching\">{{ _textSearching }}</div>\n                    <div *ngIf=\"!searchActive && (!items || items?.length === 0)\"\n                    class=\"completer-no-results\">{{ _textNoResults }}</div>\n                    <div class=\"completer-row-wrapper\" *ngFor=\"let item of items; let rowIndex=index\">\n                        <div class=\"completer-row\" [ctrRow]=\"rowIndex\" [dataItem]=\"item\">\n                            <div *ngIf=\"item.image || item.image === ''\" class=\"completer-image-holder\">\n                                <img *ngIf=\"item.image != ''\" src=\"{{item.image}}\" class=\"completer-image\" />\n                                <div *ngIf=\"item.image === ''\" class=\"completer-image-default\"></div>\n                            </div>\n                            <div class=\"completer-item-text\"\n                            [ngClass]=\"{'completer-item-text-image': item.image || item.image === '' }\">\n                                <completer-list-item\n                                class=\"completer-title\" [text]=\"item.title\" [matchClass]=\"matchClass\"\n                                [searchStr]=\"searchStr\" [type]=\"'title'\"></completer-list-item>\n                                <completer-list-item *ngIf=\"item.description && item.description != ''\"\n                                class=\"completer-description\" [text]=\"item.description\"\n                                    [matchClass]=\"matchClass\" [searchStr]=\"searchStr\" [type]=\"'description'\">\n                                </completer-list-item>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ",
      styles: ["\n    .completer-dropdown {\n        border-color: #ececec;\n        border-width: 1px;\n        border-style: solid;\n        border-radius: 2px;\n        width: 250px;\n        padding: 6px;\n        cursor: pointer;\n        z-index: 9999;\n        position: absolute;\n        margin-top: -6px;\n        background-color: #ffffff;\n    }\n\n    .completer-row {\n        padding: 5px;\n        color: #000000;\n        margin-bottom: 4px;\n        clear: both;\n        display: inline-block;\n        width: 103%;\n    }\n\n    .completer-selected-row {\n        background-color: lightblue;\n        color: #ffffff;\n    }\n\n    .completer-description {\n        font-size: 14px;\n    }\n\n    .completer-image-default {\n        width: 16px;\n        height: 16px;\n        background-image: url(\"demo/res/img/default.png\");\n    }\n\n    .completer-image-holder {\n        float: left;\n        width: 10%;\n    }\n    .completer-item-text-image {\n        float: right;\n        width: 90%;\n    }\n    "],
      providers: [COMPLETER_CONTROL_VALUE_ACCESSOR]
    }), __metadata$8("design:paramtypes", [CompleterService, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], CompleterCmp);

    var __decorate$a = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var Ng2CompleterModule_1;
    const providers = [CompleterService, LocalDataFactory, RemoteDataFactory];
    let Ng2CompleterModule = Ng2CompleterModule_1 = class Ng2CompleterModule {
      static forRoot() {
        return {
          ngModule: Ng2CompleterModule_1,
          providers
        };
      }

      static forChild() {
        return {
          ngModule: Ng2CompleterModule_1,
          providers
        };
      }

    };
    Ng2CompleterModule = Ng2CompleterModule_1 = __decorate$a([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [CompleterListItemCmp, CtrCompleter, CtrDropdown, CtrInput, CtrList, CtrRow, CompleterCmp],
      exports: [CompleterListItemCmp, CtrCompleter, CtrDropdown, CtrInput, CtrList, CtrRow, CompleterCmp],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]],
      providers
    })], Ng2CompleterModule); // Public classes.

    /**
     * Entry point for all public APIs of the package.
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ng2-completer.js.map

    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/compras/compras.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/compras/compras.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComprasComprasComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nb-alert status=\"success\" *ngIf=\"messageSuccess\" closable (close)=\"messageSuccess=''\">\n  {{messageSuccess}}\n</nb-alert>\n<nb-alert status=\"danger\" *ngFor=\"let errorsInput of errorsPerInput; let i = index\" closable\n          (close)=\"errorsPerInput.splice(i,1)\">\n  <div *ngFor=\"let error of errorsInput\">\n    - {{error}}\n  </div>\n</nb-alert>\n<nb-card>\n  <nb-card-header>COMPRAS</nb-card-header>\n  <nb-card-body>\n    <nb-card *ngIf=\"clickedCreat\">\n      <nb-card-header class=\"d-flex justify-content-between\"><span *ngIf=\"!inUpdateProducts\">Agregar</span>\n        <span *ngIf=\"inUpdateProducts\">Actualizar</span>\n        <nb-icon icon=\"close\" (click)=\"clickedCreat=false;\"></nb-icon>\n      </nb-card-header>\n      <nb-card-body>\n        <div class=\"form-group row\">\n          <label for=\"fecha_solicitud\" class=\"label col-sm-3 col-form-label\">Fecha solicitud</label>\n          <div class=\"col-sm-9\">\n            <input type=\"date\" name=\"fecha_solicitud\" id=\"fecha_solicitud\" placeholder=\"Fecha solicitud\" nbInput\n                   fullWidth [(ngModel)]=\"compra.fecha_solicitud\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"fecha_entrega\" class=\"label col-sm-3 col-form-label\">Fecha entrega</label>\n          <div class=\"col-sm-9\">\n            <input type=\"date\" name=\"fecha_entrega\" id=\"fecha_entrega\" placeholder=\"Fecha entrega\"\n                   nbInput fullWidth [(ngModel)]=\"compra.fecha_entrega\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"numero_factura\" class=\"label col-sm-3 col-form-label\">Factura</label>\n          <div class=\"col-sm-9\">\n            <input type=\"number\" name=\"numero_factura\" id=\"numero_factura\" placeholder=\"Factura\"\n                   nbInput fullWidth [(ngModel)]=\"compra.factura\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"numero_factura\" class=\"label col-sm-3 col-form-label\">Proveedor</label>\n          <div class=\"col-sm-9\">\n            <nb-select placeholder=\"Proveedor\" [(selected)]=\"compra.agente_id\">\n              <nb-option *ngFor=\"let proveedor of (listaProveedores | async) \" [value]=\"proveedor.id\">{{proveedor.nombre}}</nb-option>\n            </nb-select>\n          </div>\n        </div>\n        <hr>\n        <div class=\"py-3\"></div>\n        <div class=\"form-group row\">\n            <strong class=\"col-md-4\">Producto</strong>\n          <strong class=\"col-md-2\">Cantidad</strong>\n          <strong class=\"col-md-2\">Iva</strong>\n          <strong class=\"col-md-2\">Subtotal</strong>\n          <strong class=\"col-md-2\">Total</strong>\n        </div>\n        <div class=\"form-group \" *ngFor=\"let producto of compra.productos;let i = index\">\n          <div *ngIf=\"producto\" class=\"row\">\n            <div class=\"col-md-4 d-flex\">\n              <nb-icon icon=\"trash-outline\" class=\"mt-2\" (click)=\"deleteProducto(i)\"> </nb-icon>\n              <ng2-completer name=\"producto\" clearUnselected=\"true\" inputClass=\"form-control w-100\"\n                             [(ngModel)]=\"producto.descripcion\" [datasource]=\"dataService\" [minSearchLength]=\"0\"\n                             (selected)=\"selectedChange($event,i)\"\n                             textNoResults=\"Producto no encontrado\"\n                             textSearchingtextSearching=\"Buscando\">\n              </ng2-completer>\n            </div>\n            <div class=\"col-md-2\">\n              <input type=\"number\" name=\"cantidad\" id=\"{{i+'cantidad'}}\" placeholder=\"Cantidad\" nbInput fullWidth\n                     [(ngModel)]=\"producto.cantidad\">\n            </div>\n            <div class=\"col-md-2\">\n              <input type=\"number\" name=\"cantidad\" id=\"{{i+'iva'}}\" placeholder=\"Iva\" nbInput fullWidth\n                     [(ngModel)]=\"producto.iva\" (keyup)=\"updateTotalCompra()\">\n            </div>\n            <div class=\"col-md-2\">\n              <input type=\"number\" name=\"cantidad\" id=\"{{i+'subtotal'}}\" placeholder=\"Subtotal\" nbInput fullWidth\n                     [(ngModel)]=\"producto.subtotal\" (keyup)=\"updateTotalCompra()\">\n            </div>\n            <div class=\"col-md-2\">\n              <input type=\"number\" name=\"cantidad\" id=\"{{i+'total'}}\" placeholder=\"Total\" nbInput fullWidth\n                     [(ngModel)]=\"producto.costo\" (keyup)=\"updateTotalCompra()\">\n            </div>\n          </div>\n\n        </div>\n        <div class=\"form-group row\">\n          <div class=\"col-sm-9\">\n            <button class=\"btn btn-primary\" (click)=\"clickAgregarProducto()\">Agregar producto</button>\n          </div>\n        </div>\n        <hr>\n\n        <div class=\"form-group row\">\n          <label for=\"iva\" class=\"label col-sm-3 col-form-label\">Iva</label>\n          <div class=\"col-sm-9\">\n            <input disabled type=\"number\" name=\"iva\" id=\"iva\" placeholder=\"Iva\"\n                   nbInput fullWidth [(ngModel)]=\"compra.iva\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"subtotal\" class=\"label col-sm-3 col-form-label\">Subtotal</label>\n          <div class=\"col-sm-9\">\n            <input disabled type=\"number\" name=\"subtotal\" id=\"subtotal\" placeholder=\"Subtotal\"\n                   nbInput fullWidth [(ngModel)]=\"compra.subtotal\">\n          </div>\n        </div>\n\n        <div class=\"form-group row\">\n          <label for=\"total\" class=\"label col-sm-3 col-form-label\">Total</label>\n          <div class=\"col-sm-9\">\n            <input disabled type=\"number\" name=\"total\" id=\"total\" placeholder=\"Total\"\n                   nbInput fullWidth [(ngModel)]=\"compra.total\">\n          </div>\n        </div>\n\n        <div class=\"form-group row\">\n          <label for=\"aplicado\" class=\"label col-sm-3 col-form-label\">Aplicar</label>\n          <div class=\"col-sm-9\">\n            <nb-toggle status=\"primary\" id=\"aplicado\" [(ngModel)]=\"compra.aplicar\"></nb-toggle>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <div class=\"col-4 mt-3 text-center mx-auto\">\n            <button class=\"btn btn-primary w-100 \"(click)=\"guardarCompra()\" *ngIf=\"!inUpdateProducts\">Guardar compra</button>\n            <button class=\"btn btn-primary w-100 \"(click)=\"actualizarCompra()\" *ngIf=\"inUpdateProducts\">Actualizar compra</button>\n          </div>\n        </div>\n      </nb-card-body>\n    </nb-card>\n    <app-data-table [dataArrayInput]=\"tickets |async\"\n                    [tableStructure]=\"tableStructure\"\n                    #dataTable\n                    (delete)=\"delete($event,dataTable)\"\n                    (getList)=\"setLists(dataTable)\"\n                    (createClick)=\"clickCreate(dataTable)\"\n                    (buttonClick)=\"seeProducts($event,dataTable)\">\n    </app-data-table>\n  </nb-card-body>\n</nb-card>\n\n\n";
    /***/
  },

  /***/
  "./src/app/pages/compras/compras.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/pages/compras/compras.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComprasComprasComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "nb-icon {\n  color: red;\n}\n\nnb-icon:hover {\n  cursor: pointer;\n  color: #e23c3c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tcHJhcy9DOlxcbGFyYWdvblxcd3d3XFxWaWRhTWFyaW5hQWRtaW4vc3JjXFxhcHBcXHBhZ2VzXFxjb21wcmFzXFxjb21wcmFzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb21wcmFzL2NvbXByYXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29tcHJhcy9jb21wcmFzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmItaWNvbntcclxuICBjb2xvcjpyZWQ7XHJcbn1cclxubmItaWNvbjpob3ZlcntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICNlMjNjM2M7XHJcbn1cclxuIiwibmItaWNvbiB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbm5iLWljb246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjZTIzYzNjO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/compras/compras.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/compras/compras.component.ts ***!
    \****************************************************/

  /*! exports provided: ComprasComponent */

  /***/
  function srcAppPagesComprasComprasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComprasComponent", function () {
      return ComprasComponent;
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


    var src_app_services_tickets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/tickets.service */
    "./src/app/services/tickets.service.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var src_app_own_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/own/dialog/dialog.component */
    "./src/app/own/dialog/dialog.component.ts");
    /* harmony import */


    var ng2_completer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng2-completer */
    "./node_modules/ng2-completer/esm2015/ng2-completer.js");

    let ComprasComponent = class ComprasComponent {
      constructor(ticketsService, dialogService, completerService) {
        this.ticketsService = ticketsService;
        this.dialogService = dialogService;
        this.completerService = completerService;
        this.tableStructure = {
          columns: [{
            title: 'ID',
            name: 'id',
            editable: false,
            type: 'number',
            filter: false
          }, {
            title: 'Aplicado',
            name: 'aplicado',
            editable: true,
            type: 'toggle',
            filter: false
          }, // {title: 'Productos', name: 'productos', editable: false, type: 'button', filter: false},
          {
            title: 'Proveedor',
            name: 'agente_id',
            editable: true,
            type: 'list',
            filter: true
          }, {
            title: 'No. factura',
            name: 'numero_factura',
            editable: true,
            type: 'number',
            filter: true
          }, {
            title: 'Solicitud',
            name: 'fecha_solicitud',
            editable: true,
            type: 'date',
            filter: true
          }, {
            title: 'Enterega',
            name: 'fecha_entrega',
            editable: true,
            type: 'date',
            filter: true
          }, {
            title: 'Subtotal',
            name: 'subtotal',
            editable: true,
            type: 'number',
            filter: true
          }, {
            title: 'Iva',
            name: 'iva',
            editable: true,
            type: 'number',
            filter: true
          }, {
            title: 'Total',
            name: 'total',
            editable: true,
            type: 'number',
            filter: true
          }],
          buttons: {
            create: false,
            delete: true,
            update: true
          }
        };
        this.errorsPerInput = [];
        this.messageSuccess = '';
        this.clickedCreat = false;
        this.inUpdateProducts = false;
      }

      ngOnInit() {
        this.tickets = this.ticketsService.getTicket();
      }

      delete(deleteData, dataTable) {
        this.dialogService.open(src_app_own_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], {
          context: {
            title: '¡Cuidado!',
            content: "Si elimina este registro, se perder\xE1 el historial de movimientos relacionados. \xBFDesea continuar?"
          }
        }).onClose.subscribe(response => {
          if (response) {
            this.reset();
            dataTable.charginData++; // tslint:disable-next-line:no-shadowed-variable

            this.ticketsService.deleteTicket(deleteData).subscribe(response => {
              dataTable.charginData--;
              this.messageSuccess = 'Compra eliminada correctamente';
              dataTable.deleteData(response);
            }, error => {
              this.displayErrors(error);
            });
          }
        });
      }

      reset() {
        this.errorsPerInput = [];
        this.messageSuccess = '';
        setTimeout(() => {
          this.errorsPerInput = [];
          this.messageSuccess = '';
        }, 10000);
      }

      displayErrors(error, dataTable) {
        dataTable ? dataTable.charginData-- : 0;
        window.scrollTo(0, 0);

        for (const key in error.error.errors) {
          let err = error.error.errors[key][0];

          if (err.includes('producto')) {
            if (err.includes('id')) {
              continue;
            }

            err = err.replace('.', ' ');
            err = err.replace('.', ' ');
          }

          this.errorsPerInput.push([err]);
        }
      }

      setLists(datatable) {
        datatable.lists.agente_id = this.ticketsService.getNameAgentes();
        datatable.islists = true;
      }

      clickCreate(datatable) {
        this.inUpdateProducts = false;
        this.datatable = datatable;
        this.clickedCreat = true;
        this.compra = {
          aplicar: false
        };
        this.compra.productos = [];

        if (!this.listaProveedores) {
          this.listaProveedores = this.ticketsService.getNameAgentes();
        }

        this.ticketsService.getProductos().subscribe(response => {
          this.productos = response;
          this.dataService = this.completerService.local(this.productos, 'descripcion', 'descripcion');
        });
      }

      clickAgregarProducto() {
        this.compra.productos.push({
          cantidad: 1
        });
      }

      selectedChange(event, i) {
        if (this.compra.productos[i]) {
          console.warn(event);
        }
      }

      deleteProducto(i) {
        this.compra.iva -= this.compra.productos[i].iva ? this.compra.productos[i].iva : 0;
        this.compra.subtotal -= this.compra.productos[i].subtotal ? this.compra.productos[i].subtotal : 0;
        this.compra.total -= this.compra.productos[i].costo ? this.compra.productos[i].costo : 0;
        this.compra.productos.splice(i, 1);
      }

      guardarCompra() {
        this.compra.productos.forEach(producto => {
          if (producto) {
            this.productos.forEach(productoStock => {
              if (producto.descripcion === productoStock.descripcion) {
                producto.id = productoStock.id;
              }
            });
          }
        });
        this.reset();
        window.scrollTo(0, 0);
        this.ticketsService.setCompra(this.compra).subscribe(response => {
          this.messageSuccess = 'Compra registrada exitosamente';
          this.clickedCreat = false;
          this.compra = undefined;
          this.datatable.pushData(response);
        }, error => this.displayErrors(error));
      }

      updateTotalCompra() {
        this.compra.iva = 0;
        this.compra.total = 0;
        this.compra.subtotal = 0;
        this.compra.productos.forEach(producto => {
          this.compra.iva += producto.iva ? producto.iva : 0;
          this.compra.total += producto.costo ? producto.costo : 0;
          this.compra.subtotal += producto.subtotal ? producto.subtotal : 0;
        });
      }

      seeProducts(event, dataTable) {
        this.datatable = dataTable;

        if (!this.productos) {
          this.ticketsService.getProductos().subscribe(response => {
            this.productos = response;
            this.dataService = this.completerService.local(this.productos, 'descripcion', 'descripcion');
          });
        }

        if (!this.listaProveedores) {
          this.listaProveedores = this.ticketsService.getNameAgentes();
        }

        this.ticketsService.getCompra(event).subscribe(response => {
          this.clickedCreat = true;
          this.inUpdateProducts = true;
          this.compra = response;
          console.warn(this.compra);
          console.warn(response);
        }, error => this.displayErrors(error));
      }

      actualizarCompra() {
        this.reset();
        this.compra.productos.forEach(producto => {
          if (producto) {
            this.productos.forEach(productoStock => {
              if (producto.descripcion === productoStock.descripcion) {
                producto.id = productoStock.id;
              }
            });
          }
        });
        console.warn(this.compra);
        this.ticketsService.updateCompra(this.compra).subscribe(response => {
          this.datatable.updateData(response);
          this.messageSuccess = 'Compra actualizada correctamente';
          this.clickedCreat = false;
          this.compra = undefined;
          console.warn(response);
        }, error => this.displayErrors(error));
      }

    };

    ComprasComponent.ctorParameters = () => [{
      type: src_app_services_tickets_service__WEBPACK_IMPORTED_MODULE_2__["TicketsService"]
    }, {
      type: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDialogService"]
    }, {
      type: ng2_completer__WEBPACK_IMPORTED_MODULE_5__["CompleterService"]
    }];

    ComprasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-compras',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./compras.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/compras/compras.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./compras.component.scss */
      "./src/app/pages/compras/compras.component.scss")).default]
    })], ComprasComponent);
    /***/
  },

  /***/
  "./src/app/pages/compras/compras.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/compras/compras.module.ts ***!
    \*************************************************/

  /*! exports provided: ComprasModule */

  /***/
  function srcAppPagesComprasComprasModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComprasModule", function () {
      return ComprasModule;
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


    var _compras_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./compras.component */
    "./src/app/pages/compras/compras.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var src_app_own_data_table_data_table_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/own/data-table/data-table.module */
    "./src/app/own/data-table/data-table.module.ts");
    /* harmony import */


    var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @nebular/eva-icons */
    "./node_modules/@nebular/eva-icons/fesm2015/index.js");
    /* harmony import */


    var ng2_completer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng2-completer */
    "./node_modules/ng2-completer/esm2015/ng2-completer.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    const routes = [{
      path: '',
      component: _compras_component__WEBPACK_IMPORTED_MODULE_3__["ComprasComponent"]
    }];
    let ComprasModule = class ComprasModule {};
    ComprasModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_compras_component__WEBPACK_IMPORTED_MODULE_3__["ComprasComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_app_own_data_table_data_table_module__WEBPACK_IMPORTED_MODULE_6__["DataTableModule"], // Nebular Modules
      _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"], _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_7__["NbEvaIconsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbAlertModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbToggleModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbListModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSelectModule"], ng2_completer__WEBPACK_IMPORTED_MODULE_8__["Ng2CompleterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSelectModule"]],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
    })], ComprasModule);
    /***/
  },

  /***/
  "./src/app/services/tickets.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/tickets.service.ts ***!
    \*********************************************/

  /*! exports provided: TicketsService */

  /***/
  function srcAppServicesTicketsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TicketsService", function () {
      return TicketsService;
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

    let TicketsService = class TicketsService {
      constructor(http) {
        this.http = http;
      }

      getTicket() {
        return this.http.get('http://api.vidamarinapuebla.com/api/tickets');
      }

      updateTicket(ticket) {
        return this.http.put('http://api.vidamarinapuebla.com/api/tickets/' + ticket.id, ticket);
      }

      createTicket(ticket) {
        return this.http.post('http://api.vidamarinapuebla.com/api/tickets', ticket);
      }

      deleteTicket(ticket) {
        return this.http.delete('http://api.vidamarinapuebla.com/api/tickets/' + ticket.id);
      }

      getNameAgentes() {
        return this.http.get('http://api.vidamarinapuebla.com/api/tickets/nombresAgentes');
      }

      getProductos() {
        return this.http.get('http://api.vidamarinapuebla.com/api/tickets/productosForAdd');
      }

      setCompra(producto) {
        return this.http.post('http://api.vidamarinapuebla.com/api/tickets/setProductos', producto);
      }

      getCompra(id) {
        return this.http.get('http://api.vidamarinapuebla.com/api/tickets/getCompra/' + id);
      }

      updateCompra(ticket) {
        return this.http.post('http://api.vidamarinapuebla.com/api/tickets/updateCompra', ticket);
      }

    };

    TicketsService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }];

    TicketsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], TicketsService);
    /***/
  }
}]);
//# sourceMappingURL=compras-compras-module-es5.js.map