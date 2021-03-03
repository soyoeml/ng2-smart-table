(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["examples-examples-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/examples/snippets/create-source.md":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/examples/snippets/create-source.md ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "source: LocalDataSource; // add a property to the component\n\nconstructor() {\n  this.source = new LocalDataSource(this.data); // create the source\n}"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/examples/snippets/custom-editor-module.md":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/examples/snippets/custom-editor-module.md ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@NgModule({\n  imports: [\n    // ...\n  ],\n  entryComponents: [CustomEditorComponent, CustomRenderComponent],\n  declarations: [\n    // ...\n    CustomEditorComponent,\n    CustomRenderComponent,\n  ],\n})"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/examples/snippets/hide-filters.md":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/examples/snippets/hide-filters.md ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "settings = {\n  columns: {\n    id: {\n      title: 'ID',\n      filter: false\n    },\n    name: {\n      title: 'Full Name',\n      filter: false\n    },\n    username: {\n      title: 'User Name',\n      filter: false\n    },\n    email: {\n      title: 'Email',\n      filter: false\n    }\n  }\n};"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/examples/snippets/search-table.md":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/examples/snippets/search-table.md ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "onSearch(query: string = '') {\n  this.source.setFilter([\n    // fields we want to include in the search\n    {\n      field: 'id',\n      search: query\n    },\n    {\n      field: 'name',\n      search: query\n    },\n    {\n      field: 'username',\n      search: query\n    },\n    {\n      field: 'email',\n      search: query\n    }\n  ], false); \n  // second parameter specifying whether to perform 'AND' or 'OR' search \n  // (meaning all columns should contain search query or at least one)\n  // 'AND' by default, so changing to 'OR' by setting false here\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/examples/snippets/search.md":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/examples/snippets/search.md ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "// ...\n\n@Component({ \n  template: `\n    <input #search class=\"search\" type=\"text\" placeholder=\"Search...\" (keydown.enter)=\"onSearch(search.value)\">\n    <ng2-smart-table [settings]=\"settings\" [source]=\"source\"></ng2-smart-table>\n  `\n})\n// ..."

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/examples/snippets/source-full.md":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/examples/snippets/source-full.md ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'basic-example-source',\n  styles: [],\n  template: `\n    <input #search class=\"search\" type=\"text\" placeholder=\"Search...\" (keydown.enter)=\"onSearch(search.value)\">\n    <ng2-smart-table [settings]=\"settings\" [source]=\"source\"></ng2-smart-table>\n  `\n})\nexport class BasicExampleSourceComponent {\n\n  settings = {\n    columns: {\n      id: {\n        title: 'ID',\n        filter: false\n      },\n      name: {\n        title: 'Full Name',\n        filter: false\n      },\n      username: {\n        title: 'User Name',\n        filter: false\n      },\n      email: {\n        title: 'Email',\n        filter: false\n      }\n    }\n  };\n  \n  data = [\n    // ... our data here\n  ];\n  \n  source: LocalDataSource;\n  \n  constructor() {\n    this.source = new LocalDataSource(this.data);\n  }\n\n  onSearch(query: string = '') {\n    this.source.setFilter([\n      // fields we want to include in the search\n      {\n        field: 'id',\n        search: query\n      },\n      {\n        field: 'name',\n        search: query\n      },\n      {\n        field: 'username',\n        search: query\n      },\n      {\n        field: 'email',\n        search: query\n      }\n    ], false);\n    // second parameter specifying whether to perform 'AND' or 'OR' search \n    // (meaning all columns should contain search query or at least one)\n    // 'AND' by default, so changing to 'OR' by setting false here\n  }\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/examples/snippets/source-require.md":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/examples/snippets/source-require.md ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/examples/snippets/source-template.md":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/examples/snippets/source-template.md ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "// ...\n\n@Component({\n  template: `\n    <ng2-smart-table [settings]=\"settings\" [source]=\"source\"></ng2-smart-table>\n  `\n})\n// ..."

/***/ }),

/***/ "./src/app/pages/examples/custom-edit-view/advanced-example-custom-editor.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/examples/custom-edit-view/advanced-example-custom-editor.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AdvancedExamplesCustomEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedExamplesCustomEditorComponent", function() { return AdvancedExamplesCustomEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _custom_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-editor.component */ "./src/app/pages/examples/custom-edit-view/custom-editor.component.ts");
/* harmony import */ var _custom_render_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-render.component */ "./src/app/pages/examples/custom-edit-view/custom-render.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdvancedExamplesCustomEditorComponent = /** @class */ (function () {
    function AdvancedExamplesCustomEditorComponent() {
        this.data = [
            {
                id: 1,
                name: 'Leanne Graham',
                username: 'Bret',
                link: '<a href="http://www.google.com">Google</a>',
            },
            {
                id: 2,
                name: 'Ervin Howell',
                username: 'Antonette',
                link: '<a href="https://github.com/akveo/ng2-admin">Ng2 Admin</a>',
            },
            {
                id: 3,
                name: 'Clementine Bauch',
                username: 'Samantha',
                link: '<a href="https://github.com/akveo/ng2-smart-table">Ng2 smart table</a>',
            },
            {
                id: 4,
                name: 'Patricia Lebsack',
                username: 'Karianne',
                link: '<a href="https://github.com/akveo/blur-admin">Blur Admin</a>',
            },
        ];
        this.settings = {
            columns: {
                id: {
                    title: 'ID',
                },
                name: {
                    title: 'Full Name',
                    type: 'custom',
                    renderComponent: _custom_render_component__WEBPACK_IMPORTED_MODULE_2__["CustomRenderComponent"],
                },
                username: {
                    title: 'User Name',
                },
                link: {
                    title: 'Link',
                    type: 'html',
                    editor: {
                        type: 'custom',
                        component: _custom_editor_component__WEBPACK_IMPORTED_MODULE_1__["CustomEditorComponent"],
                    },
                },
            },
        };
    }
    AdvancedExamplesCustomEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'advanced-example-custom-editor',
            template: "\n    <ng2-smart-table [settings]=\"settings\" [source]=\"data\"></ng2-smart-table>\n  ",
        })
    ], AdvancedExamplesCustomEditorComponent);
    return AdvancedExamplesCustomEditorComponent;
}());



/***/ }),

/***/ "./src/app/pages/examples/custom-edit-view/advanced-example-types.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/examples/custom-edit-view/advanced-example-types.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AdvancedExamplesTypesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedExamplesTypesComponent", function() { return AdvancedExamplesTypesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AdvancedExamplesTypesComponent = /** @class */ (function () {
    function AdvancedExamplesTypesComponent() {
        this.data = [
            {
                id: 1,
                name: 'Leanne Graham',
                username: 'Bret',
                email: 'Sincere@april.biz',
                comments: 'Lorem ipsum dolor sit amet, ex dolorem officiis convenire usu.',
                passed: 'Yes',
            },
            {
                id: 2,
                name: 'Ervin Howell',
                username: 'Antonette',
                email: 'Shanna@melissa.tv',
                comments: "Vix iudico graecis in? Malis eirmod consectetuer duo ut?\n                Mel an aeterno vivendum accusata, qui ne amet stet definitiones.",
                passed: 'Yes',
            },
            {
                id: 3,
                name: 'Clementine Bauch',
                username: 'Samantha',
                email: 'Nathan@yesenia.net',
                comments: 'Mollis latine intellegebat ei usu, veri exerci intellegebat vel cu. Eu nec ferri copiosae.',
                passed: 'No',
            },
            {
                id: 4,
                name: 'Patricia Lebsack',
                username: 'Karianne',
                email: 'Julianne.OConner@kory.org',
                comments: 'Eu sea graece corrumpit, et tation nominavi philosophia eam, veri posidonium ex mea?',
                passed: 'Yes',
            },
            {
                id: 5,
                name: 'Chelsey Dietrich',
                username: 'Kamren',
                email: 'Lucio_Hettinger@annie.ca',
                comments: "Quo viris appellantur an, pro id eirmod oblique iuvaret,\n                timeam omittam comprehensam ad eam? Eos id dico gubergren,\n                cum dicant qualisque ea, id vim ferri moderatius?",
                passed: 'No',
            },
            {
                id: 6,
                name: 'Mrs. Dennis Schulist',
                username: 'Leopoldo_Corkery',
                email: 'Karley_Dach@jasper.info',
                comments: 'Audire appareat sententiae qui no. Sed no rebum vitae quidam.',
                passed: 'No',
            },
            {
                id: 7,
                name: 'Kurtis Weissnat',
                username: 'Elwyn.Skiles',
                email: 'Telly.Hoeger@billy.biz',
                comments: "Mel dicat sanctus accusata ut! Eu sit choro vituperata,\n                qui cu quod gubergren elaboraret, mollis vulputate ex cum!",
                passed: 'Yes',
            },
            {
                id: 8,
                name: 'Nicholas Runolfsdottir V',
                username: 'Maxime_Nienow',
                email: 'Sherwood@rosamond.me',
                comments: 'Cu usu nostrum quaerendum, no eripuit sanctus democritum cum.',
                passed: 'No',
            },
            {
                id: 9,
                name: 'Glenna Reichert',
                username: 'Delphine',
                email: 'Chaim_McDermott@dana.io',
                comments: 'In iisque oporteat vix, amet volutpat constituto sit ut. Habeo suavitate vis ei.',
                passed: 'No',
            },
            {
                id: 10,
                name: 'Clementina DuBuque',
                username: 'Moriah.Stanton',
                email: 'Rey.Padberg@karina.biz',
                comments: "Lorem ipsum dolor sit amet, causae fuisset ea has, adhuc tantas interesset per id.\n                 Ne vocibus persequeris has, meis lucilius ex mea, illum labores contentiones pro in?",
                passed: 'Yes',
            },
            {
                id: 11,
                name: 'Nicholas DuBuque',
                username: 'Nicholas.Stanton',
                email: 'Rey.Padberg@rosamond.biz',
                comments: 'Lorem ipsum dolor sit amet, mea dolorum detraxit ea?',
                passed: 'No',
            },
        ];
        this.settings = {
            columns: {
                id: {
                    title: 'ID',
                },
                name: {
                    title: 'Full Name',
                    editor: {
                        type: 'completer',
                        config: {
                            completer: {
                                data: this.data,
                                searchFields: 'name',
                                titleField: 'name',
                                descriptionField: 'email',
                            },
                        },
                    },
                },
                username: {
                    title: 'User Name',
                    type: 'html',
                    editor: {
                        type: 'list',
                        config: {
                            list: [{ value: 'Antonette', title: 'Antonette' }, { value: 'Bret', title: 'Bret' }, {
                                    value: '<b>Samantha</b>',
                                    title: 'Samantha',
                                }],
                        },
                    },
                },
                email: {
                    title: 'Email',
                    type: 'string',
                },
                comments: {
                    title: 'Comments',
                    editor: {
                        type: 'textarea',
                    },
                },
                passed: {
                    title: 'Passed',
                    editor: {
                        type: 'checkbox',
                        config: {
                            true: 'Yes',
                            false: 'No',
                        },
                    },
                },
            },
        };
    }
    AdvancedExamplesTypesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'advanced-example-types',
            template: "\n    <ng2-smart-table [settings]=\"settings\" [source]=\"data\"></ng2-smart-table>\n  ",
        })
    ], AdvancedExamplesTypesComponent);
    return AdvancedExamplesTypesComponent;
}());



/***/ }),

/***/ "./src/app/pages/examples/custom-edit-view/basic-example-button-view.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/examples/custom-edit-view/basic-example-button-view.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ButtonViewComponent, BasicExampleButtonViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonViewComponent", function() { return ButtonViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicExampleButtonViewComponent", function() { return BasicExampleButtonViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ButtonViewComponent = /** @class */ (function () {
    function ButtonViewComponent() {
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ButtonViewComponent.prototype.ngOnInit = function () {
        this.renderValue = this.value.toString().toUpperCase();
    };
    ButtonViewComponent.prototype.onClick = function () {
        this.save.emit(this.rowData);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ButtonViewComponent.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ButtonViewComponent.prototype, "rowData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ButtonViewComponent.prototype, "save", void 0);
    ButtonViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'button-view',
            template: "\n    <button (click)=\"onClick()\">{{ renderValue }}</button>\n  ",
        })
    ], ButtonViewComponent);
    return ButtonViewComponent;
}());

var BasicExampleButtonViewComponent = /** @class */ (function () {
    function BasicExampleButtonViewComponent() {
        this.settings = {
            columns: {
                id: {
                    title: 'ID',
                },
                name: {
                    title: 'Full Name',
                },
                username: {
                    title: 'User Name',
                },
                email: {
                    title: 'Email',
                },
                button: {
                    title: 'Button',
                    type: 'custom',
                    renderComponent: ButtonViewComponent,
                    onComponentInitFunction: function (instance) {
                        instance.save.subscribe(function (row) {
                            alert(row.name + " saved!");
                        });
                    }
                },
            },
        };
        this.data = [
            {
                id: 1,
                name: 'Leanne Graham',
                username: 'Bret',
                email: 'Sincere@april.biz',
                button: 'Button #1',
            },
            {
                id: 2,
                name: 'Ervin Howell',
                username: 'Antonette',
                email: 'Shanna@melissa.tv',
                button: 'Button #2',
            },
            {
                id: 3,
                name: 'Clementine Bauch',
                username: 'Samantha',
                email: 'Nathan@yesenia.net',
                button: 'Button #3',
            },
            {
                id: 4,
                name: 'Patricia Lebsack',
                username: 'Karianne',
                email: 'Julianne.OConner@kory.org',
                button: 'Button #4',
            },
            {
                id: 5,
                name: 'Chelsey Dietrich',
                username: 'Kamren',
                email: 'Lucio_Hettinger@annie.ca',
                button: 'Button #5',
            },
        ];
    }
    BasicExampleButtonViewComponent.prototype.ngOnInit = function () {
    };
    BasicExampleButtonViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'basic-example-button-view',
            template: "\n    <ng2-smart-table [settings]=\"settings\" [source]=\"data\"></ng2-smart-table>\n  ",
        }),
        __metadata("design:paramtypes", [])
    ], BasicExampleButtonViewComponent);
    return BasicExampleButtonViewComponent;
}());



/***/ }),

/***/ "./src/app/pages/examples/custom-edit-view/basic-example-custom-actions.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/examples/custom-edit-view/basic-example-custom-actions.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: BasicExampleCustomActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicExampleCustomActionsComponent", function() { return BasicExampleCustomActionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BasicExampleCustomActionsComponent = /** @class */ (function () {
    function BasicExampleCustomActionsComponent() {
        this.settings = {
            actions: {
                custom: [
                    {
                        name: 'view',
                        title: 'View ',
                    },
                    {
                        name: 'edit',
                        title: 'Edit ',
                    },
                    {
                        name: 'delete',
                        title: 'Delete ',
                    },
                    {
                        name: 'duplicate',
                        title: 'Duplicate ',
                    },
                ],
            },
            columns: {
                id: {
                    title: 'ID',
                },
                name: {
                    title: 'Full Name',
                },
                username: {
                    title: 'User Name',
                },
                email: {
                    title: 'Email',
                }
            },
        };
        this.data = [
            {
                id: 1,
                name: 'Leanne Graham',
                username: 'Bret',
                email: 'Sincere@april.biz',
            },
            {
                id: 2,
                name: 'Ervin Howell',
                username: 'Antonette',
                email: 'Shanna@melissa.tv',
            },
            {
                id: 3,
                name: 'Clementine Bauch',
                username: 'Samantha',
                email: 'Nathan@yesenia.net',
            },
            {
                id: 4,
                name: 'Patricia Lebsack',
                username: 'Karianne',
                email: 'Julianne.OConner@kory.org',
            },
            {
                id: 5,
                name: 'Chelsey Dietrich',
                username: 'Kamren',
                email: 'Lucio_Hettinger@annie.ca',
            },
        ];
    }
    BasicExampleCustomActionsComponent.prototype.onCustom = function (event) {
        alert("Custom event '" + event.action + "' fired on row \u2116: " + event.data.id);
    };
    BasicExampleCustomActionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'basic-example-custom-actions',
            template: "\n    <ng2-smart-table [settings]=\"settings\" [source]=\"data\" (custom)=\"onCustom($event)\"></ng2-smart-table>\n  ",
        })
    ], BasicExampleCustomActionsComponent);
    return BasicExampleCustomActionsComponent;
}());



/***/ }),

/***/ "./src/app/pages/examples/custom-edit-view/custom-edit-view-examples.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/examples/custom-edit-view/custom-edit-view-examples.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Customized edit and view cells examples</h2>\n<h3><a id=\"types\" class=\"anchor\" href=\"#types\" aria-hidden=\"true\"><span aria-hidden=\"true\" class=\"octicon octicon-link\"></span></a>Select, Completer and Textarea column types</h3>\n<p>\n  An example on how to use select, completer, textarea column types:\n</p>\n<div class=\"with-source\">\n  <a class=\"source\" href=\"https://github.com/akveo/ng2-smart-table/blob/master/src/app/pages/examples/custom-edit-view/advanced-example-types.component.ts\" target=\"_blank\">Demo Source</a>\n  <advanced-example-types></advanced-example-types>\n</div>\n<h3><a id=\"custom-editor-renderer\" class=\"anchor\" href=\"#custom-editor-renderer\" aria-hidden=\"true\"><span aria-hidden=\"true\" class=\"octicon octicon-link\"></span></a>Custom editor/renderer column type</h3>\n<p>An example on how to use a custom cell editor and/or custom cell renderer:</p>\n<div class=\"with-source\">\n  <a class=\"source\" href=\"https://github.com/akveo/ng2-smart-table/blob/master/src/app/pages/examples/custom-edit-view/advanced-example-custom-editor.component.ts\" target=\"_blank\">Demo Source</a>\n  <advanced-example-custom-editor></advanced-example-custom-editor>\n</div>\n<p>When implementing a custom editor or renderer remember to add it to the <code>entryComponents</code> and to the <code>declarations</code> part of your module</p>\n<pre>\n  <code highlight class=\"typescript\">{{ snippets.customEditorModule }}</code>\n</pre>\n<p>\n  <b>For the custom cell editor:</b><br>\n  To inherit the methods needed to interact with the table you can either extend the component with the <code>DefaultEditor</code> class or implement the <code>Editor</code> interface and reproduce the same methods on your component.<br>\n  <b>For the custom cell renderer:</b><br>\n  In this example the custom component is applying a <code>.toUpperCase()</code> to one of the columns. You can implement the ViewCell interface to make sure you are setting up your component correctly.\n</p>\n\n<h3>\n  <a id=\"buttonview\" class=\"anchor\" href=\"#buttonview\" aria-hidden=\"true\">\n    <span aria-hidden=\"true\" class=\"octicon octicon-link\"></span>\n  </a>Button View\n</h3>\n<p>An example on how to use custom button view:</p>\n<div class=\"with-source\">\n  <a class=\"source\" href=\"https://github.com/akveo/ng2-smart-table/blob/master/src/app/pages/examples/custom-edit-view/basic-example-button-view.component.ts\"\n    target=\"_blank\">Demo Source</a>\n  <basic-example-button-view></basic-example-button-view>\n</div>\n\n<h3><a id=\"multiselect\" class=\"anchor\" href=\"#customactions\" aria-hidden=\"true\"><span aria-hidden=\"true\" class=\"octicon octicon-link\"></span></a>Custom actions</h3>\n<p>An example on how to use custom actions:</p>\n<div class=\"with-source\">\n  <a class=\"source\" href=\"https://github.com/akveo/ng2-smart-table/blob/master/src/app/pages/examples/various/basic-example-custom-actions.component.ts\" target=\"_blank\">Demo Source</a>\n  <basic-example-custom-actions></basic-example-custom-actions>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/examples/custom-edit-view/custom-edit-view-examples.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/examples/custom-edit-view/custom-edit-view-examples.component.ts ***!
  \****************************************************************************************/
/*! exports provided: CustomViewEditExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomViewEditExamplesComponent", function() { return CustomViewEditExamplesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CustomViewEditExamplesComponent = /** @class */ (function () {
    function CustomViewEditExamplesComponent() {
        this.snippets = {
            customEditorModule: __webpack_require__(/*! raw-loader!../snippets/custom-editor-module.md */ "./node_modules/raw-loader/index.js!./src/app/pages/examples/snippets/custom-editor-module.md"),
        };
    }
    CustomViewEditExamplesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'custom-edit-view-examples',
            template: __webpack_require__(/*! ./custom-edit-view-examples.component.html */ "./src/app/pages/examples/custom-edit-view/custom-edit-view-examples.component.html"),
        })
    ], CustomViewEditExamplesComponent);
    return CustomViewEditExamplesComponent;
}());



/***/ }),

/***/ "./src/app/pages/examples/custom-edit-view/custom-editor.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/examples/custom-edit-view/custom-editor.component.ts ***!
  \****************************************************************************/
/*! exports provided: CustomEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomEditorComponent", function() { return CustomEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../ng2-smart-table */ "./src/ng2-smart-table/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomEditorComponent = /** @class */ (function (_super) {
    __extends(CustomEditorComponent, _super);
    function CustomEditorComponent() {
        return _super.call(this) || this;
    }
    CustomEditorComponent.prototype.ngAfterViewInit = function () {
        if (this.cell.newValue !== '') {
            this.name.nativeElement.value = this.getUrlName();
            this.url.nativeElement.value = this.getUrlHref();
        }
    };
    CustomEditorComponent.prototype.updateValue = function () {
        var href = this.url.nativeElement.value;
        var name = this.name.nativeElement.value;
        this.cell.newValue = "<a href='" + href + "'>" + name + "</a>";
    };
    CustomEditorComponent.prototype.getUrlName = function () {
        return this.htmlValue.nativeElement.innerText;
    };
    CustomEditorComponent.prototype.getUrlHref = function () {
        return this.htmlValue.nativeElement.querySelector('a').getAttribute('href');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('name'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CustomEditorComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('url'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CustomEditorComponent.prototype, "url", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('htmlValue'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CustomEditorComponent.prototype, "htmlValue", void 0);
    CustomEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n    Name: <input [ngClass]=\"inputClass\"\n            #name\n            class=\"form-control short-input\"\n            [name]=\"cell.getId()\"\n            [disabled]=\"!cell.isEditable()\"\n            [placeholder]=\"cell.getTitle()\"\n            (click)=\"onClick.emit($event)\"\n            (keyup)=\"updateValue()\"\n            (keydown.enter)=\"onEdited.emit($event)\"\n            (keydown.esc)=\"onStopEditing.emit()\"><br>\n    Url: <input [ngClass]=\"inputClass\"\n            #url\n            class=\"form-control short-input\"\n            [name]=\"cell.getId()\"\n            [disabled]=\"!cell.isEditable()\"\n            [placeholder]=\"cell.getTitle()\"\n            (click)=\"onClick.emit($event)\"\n            (keyup)=\"updateValue()\"\n            (keydown.enter)=\"onEdited.emit($event)\"\n            (keydown.esc)=\"onStopEditing.emit()\">\n    <div [hidden]=\"true\" [innerHTML]=\"cell.getValue()\" #htmlValue></div>\n  ",
        }),
        __metadata("design:paramtypes", [])
    ], CustomEditorComponent);
    return CustomEditorComponent;
}(_ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__["DefaultEditor"]));



/***/ }),

/***/ "./src/app/pages/examples/custom-edit-view/custom-render.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/examples/custom-edit-view/custom-render.component.ts ***!
  \****************************************************************************/
/*! exports provided: CustomRenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRenderComponent", function() { return CustomRenderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomRenderComponent = /** @class */ (function () {
    function CustomRenderComponent() {
    }
    CustomRenderComponent.prototype.ngOnInit = function () {
        this.renderValue = this.value.toString().toUpperCase();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CustomRenderComponent.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CustomRenderComponent.prototype, "rowData", void 0);
    CustomRenderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n    {{renderValue}}\n  ",
        })
    ], CustomRenderComponent);
    return CustomRenderComponent;
}());



/***/ }),

/***/ "./src/app/pages/examples/examples.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/examples/examples.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header-component tagline=\"Examples\"></header-component>\n<div class=\"main-content with-sidebar\">\n  <nav class=\"fixed-sidebar\">\n    <h4>Examples</h4>\n    <ul class=\"examples-menu\">\n      <li><a routerLink=\"./using-filters\" routerLinkActive=\"active\">Standalone & Advanced filters</a></li>\n      <li><a routerLink=\"./populate-from-server\" routerLinkActive=\"active\">Loading data from server</a></li>\n      <li><a routerLink=\"./custom-editors-viewers\" routerLinkActive=\"active\">Custom editors and viewers</a></li>\n      <li><a routerLink=\"./various\" routerLinkActive=\"active\">Various</a></li>\n    </ul>\n  </nav>\n  <div class=\"main-content-body\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/examples/examples.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/examples/examples.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".with-sidebar {\n  position: relative; }\n  .with-sidebar .main-content-body {\n    padding-left: 16rem; }\n  .with-sidebar .fixed-sidebar {\n    display: block;\n    padding: 0 1rem;\n    margin-top: 2rem;\n    position: fixed;\n    top: 0;\n    padding-top: 290px;\n    width: 16rem;\n    font-size: 0.875rem; }\n  .with-sidebar .fixed-sidebar .back-top {\n      display: none;\n      margin-bottom: 1rem;\n      font-weight: bold; }\n  .with-sidebar .fixed-sidebar ul {\n      padding-left: 1rem;\n      list-style: none;\n      margin-bottom: 0.875rem; }\n  .with-sidebar .fixed-sidebar.scrolled {\n      position: fixed;\n      top: 0; }\n  .with-sidebar .fixed-sidebar.scrolled .back-top {\n        display: block; }\n  .with-sidebar .fixed-sidebar .examples-menu a.active {\n      font-weight: bold; }\n  @media screen and (max-width: 64em) {\n  .with-sidebar .fixed-sidebar {\n    display: none; } }\n  @media screen and (min-width: 42em) and (max-width: 64em) {\n  .with-sidebar {\n    padding: 2rem 4rem; } }\n  @media screen and (max-width: 42em) {\n  .with-sidebar {\n    padding: 2rem 1rem; } }\n"

/***/ }),

/***/ "./src/app/pages/examples/examples.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/examples/examples.component.ts ***!
  \******************************************************/
/*! exports provided: ExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesComponent", function() { return ExamplesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ExamplesComponent = /** @class */ (function () {
    function ExamplesComponent() {
    }
    ExamplesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'examples',
            styles: [__webpack_require__(/*! ./examples.component.scss */ "./src/app/pages/examples/examples.component.scss")],
            template: __webpack_require__(/*! ./examples.component.html */ "./src/app/pages/examples/examples.component.html"),
        })
    ], ExamplesComponent);
    return ExamplesComponent;
}());



/***/ }),

/***/ "./src/app/pages/examples/examples.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/examples/examples.module.ts ***!
  \***************************************************/
/*! exports provided: ExamplesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesModule", function() { return ExamplesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ng2-smart-table */ "./src/ng2-smart-table/index.js");
/* harmony import */ var _examples_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples.routes */ "./src/app/pages/examples/examples.routes.ts");
/* harmony import */ var _examples_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples.component */ "./src/app/pages/examples/examples.component.ts");
/* harmony import */ var _filter_advanced_example_filters_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./filter/advanced-example-filters.component */ "./src/app/pages/examples/filter/advanced-example-filters.component.ts");
/* harmony import */ var _various_advanced_example_confirm_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./various/advanced-example-confirm.component */ "./src/app/pages/examples/various/advanced-example-confirm.component.ts");
/* harmony import */ var _custom_edit_view_advanced_example_custom_editor_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./custom-edit-view/advanced-example-custom-editor.component */ "./src/app/pages/examples/custom-edit-view/advanced-example-custom-editor.component.ts");
/* harmony import */ var _custom_edit_view_advanced_example_types_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./custom-edit-view/advanced-example-types.component */ "./src/app/pages/examples/custom-edit-view/advanced-example-types.component.ts");
/* harmony import */ var _server_advanced_example_server_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./server/advanced-example-server.component */ "./src/app/pages/examples/server/advanced-example-server.component.ts");
/* harmony import */ var _server_basic_example_load_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./server/basic-example-load.component */ "./src/app/pages/examples/server/basic-example-load.component.ts");
/* harmony import */ var _various_basic_example_multi_select_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./various/basic-example-multi-select.component */ "./src/app/pages/examples/various/basic-example-multi-select.component.ts");
/* harmony import */ var _custom_edit_view_custom_editor_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./custom-edit-view/custom-editor.component */ "./src/app/pages/examples/custom-edit-view/custom-editor.component.ts");
/* harmony import */ var _filter_basic_example_source_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./filter/basic-example-source.component */ "./src/app/pages/examples/filter/basic-example-source.component.ts");
/* harmony import */ var _custom_edit_view_custom_render_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./custom-edit-view/custom-render.component */ "./src/app/pages/examples/custom-edit-view/custom-render.component.ts");
/* harmony import */ var _filter_filter_examples_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./filter/filter-examples.component */ "./src/app/pages/examples/filter/filter-examples.component.ts");
/* harmony import */ var _server_server_examples_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./server/server-examples.component */ "./src/app/pages/examples/server/server-examples.component.ts");
/* harmony import */ var _custom_edit_view_custom_edit_view_examples_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./custom-edit-view/custom-edit-view-examples.component */ "./src/app/pages/examples/custom-edit-view/custom-edit-view-examples.component.ts");
/* harmony import */ var _custom_edit_view_basic_example_custom_actions_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./custom-edit-view/basic-example-custom-actions.component */ "./src/app/pages/examples/custom-edit-view/basic-example-custom-actions.component.ts");
/* harmony import */ var _various_various_examples_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./various/various-examples.component */ "./src/app/pages/examples/various/various-examples.component.ts");
/* harmony import */ var _custom_edit_view_basic_example_button_view_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./custom-edit-view/basic-example-button-view.component */ "./src/app/pages/examples/custom-edit-view/basic-example-button-view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var EXAMPLES_COMPONENTS = [
    _filter_advanced_example_filters_component__WEBPACK_IMPORTED_MODULE_9__["AdvancedExampleFiltersComponent"],
    _various_advanced_example_confirm_component__WEBPACK_IMPORTED_MODULE_10__["AdvancedExampleConfirmComponent"],
    _custom_edit_view_advanced_example_custom_editor_component__WEBPACK_IMPORTED_MODULE_11__["AdvancedExamplesCustomEditorComponent"],
    _custom_edit_view_advanced_example_types_component__WEBPACK_IMPORTED_MODULE_12__["AdvancedExamplesTypesComponent"],
    _server_advanced_example_server_component__WEBPACK_IMPORTED_MODULE_13__["AdvancedExampleServerComponent"],
    _server_basic_example_load_component__WEBPACK_IMPORTED_MODULE_14__["BasicExampleLoadComponent"],
    _various_basic_example_multi_select_component__WEBPACK_IMPORTED_MODULE_15__["BasicExampleMultiSelectComponent"],
    _filter_basic_example_source_component__WEBPACK_IMPORTED_MODULE_17__["BasicExampleSourceComponent"],
    _custom_edit_view_custom_editor_component__WEBPACK_IMPORTED_MODULE_16__["CustomEditorComponent"],
    _custom_edit_view_custom_render_component__WEBPACK_IMPORTED_MODULE_18__["CustomRenderComponent"],
    _filter_filter_examples_component__WEBPACK_IMPORTED_MODULE_19__["FilterExamplesComponent"],
    _server_server_examples_component__WEBPACK_IMPORTED_MODULE_20__["ServerExamplesComponent"],
    _custom_edit_view_custom_edit_view_examples_component__WEBPACK_IMPORTED_MODULE_21__["CustomViewEditExamplesComponent"],
    _various_various_examples_component__WEBPACK_IMPORTED_MODULE_23__["VariousExamplesComponent"],
    _custom_edit_view_basic_example_button_view_component__WEBPACK_IMPORTED_MODULE_24__["BasicExampleButtonViewComponent"],
    _custom_edit_view_basic_example_custom_actions_component__WEBPACK_IMPORTED_MODULE_22__["BasicExampleCustomActionsComponent"],
    _custom_edit_view_basic_example_button_view_component__WEBPACK_IMPORTED_MODULE_24__["ButtonViewComponent"],
];
var ExamplesModule = /** @class */ (function () {
    function ExamplesModule() {
    }
    ExamplesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_examples_routes__WEBPACK_IMPORTED_MODULE_7__["routes"]),
                _ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__["Ng2SmartTableModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            ],
            entryComponents: [
                _custom_edit_view_custom_editor_component__WEBPACK_IMPORTED_MODULE_16__["CustomEditorComponent"],
                _custom_edit_view_custom_render_component__WEBPACK_IMPORTED_MODULE_18__["CustomRenderComponent"],
                _custom_edit_view_basic_example_button_view_component__WEBPACK_IMPORTED_MODULE_24__["ButtonViewComponent"],
            ],
            declarations: [
                _examples_component__WEBPACK_IMPORTED_MODULE_8__["ExamplesComponent"]
            ].concat(EXAMPLES_COMPONENTS),
        })
    ], ExamplesModule);
    return ExamplesModule;
}());



/***/ }),

/***/ "./src/app/pages/examples/examples.routes.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/examples/examples.routes.ts ***!
  \***************************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _examples_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./examples.component */ "./src/app/pages/examples/examples.component.ts");
/* harmony import */ var _filter_filter_examples_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter/filter-examples.component */ "./src/app/pages/examples/filter/filter-examples.component.ts");
/* harmony import */ var _server_server_examples_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./server/server-examples.component */ "./src/app/pages/examples/server/server-examples.component.ts");
/* harmony import */ var _custom_edit_view_custom_edit_view_examples_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-edit-view/custom-edit-view-examples.component */ "./src/app/pages/examples/custom-edit-view/custom-edit-view-examples.component.ts");
/* harmony import */ var _various_various_examples_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./various/various-examples.component */ "./src/app/pages/examples/various/various-examples.component.ts");





var routes = [
    {
        path: '',
        component: _examples_component__WEBPACK_IMPORTED_MODULE_0__["ExamplesComponent"],
        children: [
            {
                path: '',
                redirectTo: 'using-filters',
            },
            {
                path: 'using-filters',
                component: _filter_filter_examples_component__WEBPACK_IMPORTED_MODULE_1__["FilterExamplesComponent"],
            },
            {
                path: 'populate-from-server',
                component: _server_server_examples_component__WEBPACK_IMPORTED_MODULE_2__["ServerExamplesComponent"],
            },
            {
                path: 'custom-editors-viewers',
                component: _custom_edit_view_custom_edit_view_examples_component__WEBPACK_IMPORTED_MODULE_3__["CustomViewEditExamplesComponent"],
            },
            {
                path: 'various',
                component: _various_various_examples_component__WEBPACK_IMPORTED_MODULE_4__["VariousExamplesComponent"],
            },
        ],
    },
];


/***/ }),

/***/ "./src/app/pages/examples/filter/advanced-example-filters.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/examples/filter/advanced-example-filters.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AdvancedExampleFiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedExampleFiltersComponent", function() { return AdvancedExampleFiltersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AdvancedExampleFiltersComponent = /** @class */ (function () {
    function AdvancedExampleFiltersComponent() {
        this.data = [
            {
                id: 4,
                name: 'Patricia Lebsack',
                email: 'Julianne.OConner@kory.org',
                passed: 'Yes',
            },
            {
                id: 5,
                name: 'Chelsey Dietrich',
                email: 'Lucio_Hettinger@annie.ca',
                passed: 'No',
            },
            {
                id: 6,
                name: 'Mrs. Dennis Schulist',
                email: 'Karley_Dach@jasper.info',
                passed: 'Yes',
            },
            {
                id: 7,
                name: 'Kurtis Weissnat',
                email: 'Telly.Hoeger@billy.biz',
                passed: 'No',
            },
            {
                id: 8,
                name: 'Nicholas Runolfsdottir V',
                email: 'Sherwood@rosamond.me',
                passed: 'Yes',
            },
            {
                id: 9,
                name: 'Glenna Reichert',
                email: 'Chaim_McDermott@dana.io',
                passed: 'No',
            },
            {
                id: 10,
                name: 'Clementina DuBuque',
                email: 'Rey.Padberg@karina.biz',
                passed: 'No',
            },
            {
                id: 11,
                name: 'Nicholas DuBuque',
                email: 'Rey.Padberg@rosamond.biz',
                passed: 'Yes',
            },
        ];
        this.settings = {
            columns: {
                id: {
                    title: 'ID',
                },
                name: {
                    title: 'Full Name',
                    filter: {
                        type: 'list',
                        config: {
                            selectText: 'Select...',
                            list: [
                                { value: 'Glenna Reichert', title: 'Glenna Reichert' },
                                { value: 'Kurtis Weissnat', title: 'Kurtis Weissnat' },
                                { value: 'Chelsey Dietrich', title: 'Chelsey Dietrich' },
                            ],
                        },
                    },
                },
                email: {
                    title: 'Email',
                    filter: {
                        type: 'completer',
                        config: {
                            completer: {
                                data: this.data,
                                searchFields: 'email',
                                titleField: 'email',
                            },
                        },
                    },
                },
                passed: {
                    title: 'Passed',
                    filter: {
                        type: 'checkbox',
                        config: {
                            true: 'Yes',
                            false: 'No',
                            resetText: 'clear',
                        },
                    },
                },
            },
        };
    }
    AdvancedExampleFiltersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'advanced-example-filters',
            template: "\n    <ng2-smart-table [settings]=\"settings\" [source]=\"data\"></ng2-smart-table>\n  ",
        })
    ], AdvancedExampleFiltersComponent);
    return AdvancedExampleFiltersComponent;
}());



/***/ }),

/***/ "./src/app/pages/examples/filter/basic-example-source.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/examples/filter/basic-example-source.component.ts ***!
  \*************************************************************************/
/*! exports provided: BasicExampleSourceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicExampleSourceComponent", function() { return BasicExampleSourceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../ng2-smart-table */ "./src/ng2-smart-table/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BasicExampleSourceComponent = /** @class */ (function () {
    function BasicExampleSourceComponent() {
        this.settings = {
            columns: {
                id: {
                    title: 'ID',
                    filter: false,
                },
                name: {
                    title: 'Full Name',
                    filter: false,
                },
                username: {
                    title: 'User Name',
                    filter: false,
                },
                email: {
                    title: 'Email',
                    filter: false,
                },
            },
        };
        this.data = [
            {
                id: 1,
                name: 'Leanne Graham',
                username: 'Bret',
                email: 'Sincere@april.biz',
            },
            {
                id: 2,
                name: 'Ervin Howell',
                username: 'Antonette',
                email: 'Shanna@melissa.tv',
            },
            {
                id: 3,
                name: 'Clementine Bauch',
                username: 'Samantha',
                email: 'Nathan@yesenia.net',
            },
            {
                id: 4,
                name: 'Patricia Lebsack',
                username: 'Karianne',
                email: 'Julianne.OConner@kory.org',
            },
            {
                id: 5,
                name: 'Chelsey Dietrich',
                username: 'Kamren',
                email: 'Lucio_Hettinger@annie.ca',
            },
            {
                id: 6,
                name: 'Mrs. Dennis Schulist',
                username: 'Leopoldo_Corkery',
                email: 'Karley_Dach@jasper.info',
            },
            {
                id: 7,
                name: 'Kurtis Weissnat',
                username: 'Elwyn.Skiles',
                email: 'Telly.Hoeger@billy.biz',
            },
            {
                id: 8,
                name: 'Nicholas Runolfsdottir V',
                username: 'Maxime_Nienow',
                email: 'Sherwood@rosamond.me',
            },
            {
                id: 9,
                name: 'Glenna Reichert',
                username: 'Delphine',
                email: 'Chaim_McDermott@dana.io',
            },
            {
                id: 10,
                name: 'Clementina DuBuque',
                username: 'Moriah.Stanton',
                email: 'Rey.Padberg@karina.biz',
            },
            {
                id: 11,
                name: 'Nicholas DuBuque',
                username: 'Nicholas.Stanton',
                email: 'Rey.Padberg@rosamond.biz',
            },
        ];
        this.source = new _ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__["LocalDataSource"](this.data);
    }
    BasicExampleSourceComponent.prototype.onSearch = function (query) {
        if (query === void 0) { query = ''; }
        this.source.setFilter([
            // fields we want to inclue in the search
            {
                field: 'id',
                search: query,
            },
            {
                field: 'name',
                search: query,
            },
            {
                field: 'username',
                search: query,
            },
            {
                field: 'email',
                search: query,
            },
        ], false);
        // second parameter specifying whether to perform 'AND' or 'OR' search
        // (meaning all columns should contain search query or at least one)
        // 'AND' by default, so changing to 'OR' by setting false here
    };
    BasicExampleSourceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'basic-example-source',
            template: "\n    <input #search class=\"search\" type=\"text\" placeholder=\"Search...\" (keydown.enter)=\"onSearch(search.value)\">\n    <ng2-smart-table [settings]=\"settings\" [source]=\"source\"></ng2-smart-table>\n  ",
        }),
        __metadata("design:paramtypes", [])
    ], BasicExampleSourceComponent);
    return BasicExampleSourceComponent;
}());



/***/ }),

/***/ "./src/app/pages/examples/filter/filter-examples.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/examples/filter/filter-examples.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Customized filters examples</h2>\n<h3><a id=\"separate-filter\" class=\"anchor\" href=\"#separate-filter\" aria-hidden=\"true\"><span aria-hidden=\"true\" class=\"octicon octicon-link\"></span></a>Standalone Filter Example</h3>\n<p>\n  Say you don't need to have a filter field in the each table column or the requirements says that search field should be placed outside of the table?<br>\n  Fortunately this is super easy to achieve, to do this we need to slightly modify our basic component example.\n</p>\n<h4><a id=\"data-source\" class=\"anchor\" href=\"#data-source\" aria-hidden=\"true\"><span aria-hidden=\"true\" class=\"octicon octicon-link\"></span></a>Data Source</h4>\n<p>\n  First thing you need to know is that all the data operations against the table <i>must</i> be done using the <strong>DataSource</strong> table property. DataSource is an abstraction around your data which allows you easily modify the table data or subscribe to events to modify the table behaviour.\n</p>\n<p>\n  To access the DataSource we either can take it from the table or pass it instead of our <i>data array</i>. Let's do the second option as it requires less code and is more demonstrative. Let's import the DataSource class by modifying the import statement:\n</p>\n<pre>\n  <code highlight class=\"typescript\">{{ snippets.sourceRequire }}</code>\n</pre>\n<p>\n  Note that the import now contains a <strong>LocalDataSource</strong> class (the word <i>Local</i> here means that the data is processed locally in a browser, not on the server side).<br>\n  Then let's create a DataSource instance and pass our data array into it as a constructor parameter:\n</p>\n<pre>\n  <code highlight class=\"typescript\">{{ snippets.createSource }}</code>\n</pre>\n<p>\n  Now let's pass the source to the table instead of the data array:\n</p>\n<pre>\n  <code highlight class=\"typescript\">{{ snippets.sourceTemplate }}</code>\n</pre>\n<p>\n  At this point if you look at the result there will be no difference comparing to the first example. Basically if you pass an array to the table component first thing it will do is wrap LocalDataSource object around your array as we did here manually.<br>\n  Now, having the DataSource we basically could change the table data in any way we need to - filter it, sort, paginate to some page, create/delete/modify the rows. In our example we need to be able to filter the data outside of the table, firstly let's add a search filed to the template with a listener:\n</p>\n<pre>\n  <code highlight class=\"typescript\">{{ snippets.search }}</code>\n</pre>\n<p>\n  And the listener code which asks the DataSource to filter the data:\n</p>\n<pre>\n  <code highlight class=\"typescript\">{{ snippets.searchTable }}</code>\n</pre>\n<p>\n  Last thing, let's hide the default table filters to not conflict with our standalone one:\n</p>\n<pre>\n  <code highlight class=\"typescript\">{{ snippets.hideFilters }}</code>\n</pre>\n<p>\n  And done! Now the table has a standalone search field:\n</p>\n<div>\n  <basic-example-source></basic-example-source>\n</div>\n<p>\n  Same way you can modify the data of the table, for example by adding a row from a third party form or listening to some external event.\n  Here's a full component code:\n</p>\n<pre class=\"with-source\">\n  <a class=\"source\" href=\"https://github.com/akveo/ng2-smart-table/blob/master/src/app/pages/examples/filter/basic-example-source.component.ts\" target=\"_blank\">Demo Source</a>\n  <code highlight class=\"typescript\">{{ snippets.sourceFull }}</code>\n</pre>\n\n<h3><a id=\"filters\" class=\"anchor\" href=\"#filters\" aria-hidden=\"true\"><span aria-hidden=\"true\" class=\"octicon octicon-link\"></span></a>Checkbox, Select and Completer filter types</h3>\n<p>\n  An example on how to use the built-in column filter types:\n</p>\n<div class=\"with-source\">\n  <a class=\"source\" href=\"https://github.com/akveo/ng2-smart-table/blob/master/src/app/pages/examples/filter/advanced-example-filters.component.ts\" target=\"_blank\">Demo Source</a>\n  <advanced-example-filters></advanced-example-filters>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/examples/filter/filter-examples.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/examples/filter/filter-examples.component.ts ***!
  \********************************************************************/
/*! exports provided: FilterExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterExamplesComponent", function() { return FilterExamplesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterExamplesComponent = /** @class */ (function () {
    function FilterExamplesComponent() {
        this.snippets = {
            sourceRequire: __webpack_require__(/*! raw-loader!../snippets/source-require.md */ "./node_modules/raw-loader/index.js!./src/app/pages/examples/snippets/source-require.md"),
            createSource: __webpack_require__(/*! raw-loader!../snippets/create-source.md */ "./node_modules/raw-loader/index.js!./src/app/pages/examples/snippets/create-source.md"),
            sourceTemplate: __webpack_require__(/*! raw-loader!../snippets/source-template.md */ "./node_modules/raw-loader/index.js!./src/app/pages/examples/snippets/source-template.md"),
            search: __webpack_require__(/*! raw-loader!../snippets/search.md */ "./node_modules/raw-loader/index.js!./src/app/pages/examples/snippets/search.md"),
            searchTable: __webpack_require__(/*! raw-loader!../snippets/search-table.md */ "./node_modules/raw-loader/index.js!./src/app/pages/examples/snippets/search-table.md"),
            sourceFull: __webpack_require__(/*! raw-loader!../snippets/source-full.md */ "./node_modules/raw-loader/index.js!./src/app/pages/examples/snippets/source-full.md"),
            hideFilters: __webpack_require__(/*! raw-loader!../snippets/hide-filters.md */ "./node_modules/raw-loader/index.js!./src/app/pages/examples/snippets/hide-filters.md"),
        };
    }
    FilterExamplesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'filter-examples',
            template: __webpack_require__(/*! ./filter-examples.component.html */ "./src/app/pages/examples/filter/filter-examples.component.html"),
        })
    ], FilterExamplesComponent);
    return FilterExamplesComponent;
}());



/***/ }),

/***/ "./src/app/pages/examples/server/advanced-example-server.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/examples/server/advanced-example-server.component.ts ***!
  \****************************************************************************/
/*! exports provided: AdvancedExampleServerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedExampleServerComponent", function() { return AdvancedExampleServerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _src_ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../src/ng2-smart-table */ "./src/ng2-smart-table/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdvancedExampleServerComponent = /** @class */ (function () {
    function AdvancedExampleServerComponent(http) {
        this.settings = {
            columns: {
                id: {
                    title: 'ID',
                },
                albumId: {
                    title: 'Album',
                },
                title: {
                    title: 'Title',
                },
                url: {
                    title: 'Url',
                },
            },
        };
        this.source = new _src_ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["ServerDataSource"](http, { endPoint: 'https://jsonplaceholder.typicode.com/photos' });
    }
    AdvancedExampleServerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'advanced-example-server',
            template: "\n    <ng2-smart-table [settings]=\"settings\" [source]=\"source\"></ng2-smart-table>\n  ",
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AdvancedExampleServerComponent);
    return AdvancedExampleServerComponent;
}());



/***/ }),

/***/ "./src/app/pages/examples/server/basic-example-load.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/examples/server/basic-example-load.component.ts ***!
  \***********************************************************************/
/*! exports provided: BasicExampleLoadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicExampleLoadComponent", function() { return BasicExampleLoadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../ng2-smart-table */ "./src/ng2-smart-table/index.js");
/* harmony import */ var _basic_example_load_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic-example-load.service */ "./src/app/pages/examples/server/basic-example-load.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BasicExampleLoadComponent = /** @class */ (function () {
    function BasicExampleLoadComponent(service) {
        var _this = this;
        this.service = service;
        this.settings = {
            columns: {
                id: {
                    title: 'ID',
                    editable: false,
                    addable: false,
                },
                name: {
                    title: 'Full Name',
                },
                username: {
                    title: 'User Name',
                },
                email: {
                    title: 'Email',
                },
            },
        };
        this.source = new _ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__["LocalDataSource"]();
        this.service.getData().then(function (data) {
            _this.source.load(data);
        });
    }
    BasicExampleLoadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'basic-example-load',
            providers: [_basic_example_load_service__WEBPACK_IMPORTED_MODULE_2__["BasicExampleLoadService"]],
            template: "\n    <ng2-smart-table [settings]=\"settings\" [source]=\"source\"></ng2-smart-table>\n  ",
        }),
        __metadata("design:paramtypes", [_basic_example_load_service__WEBPACK_IMPORTED_MODULE_2__["BasicExampleLoadService"]])
    ], BasicExampleLoadComponent);
    return BasicExampleLoadComponent;
}());



/***/ }),

/***/ "./src/app/pages/examples/server/basic-example-load.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/examples/server/basic-example-load.service.ts ***!
  \*********************************************************************/
/*! exports provided: BasicExampleLoadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicExampleLoadService", function() { return BasicExampleLoadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BasicExampleLoadService = /** @class */ (function () {
    function BasicExampleLoadService() {
    }
    BasicExampleLoadService_1 = BasicExampleLoadService;
    // emulating request to the server
    BasicExampleLoadService.prototype.getData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(_this.generateData());
            }, 2000);
        });
    };
    BasicExampleLoadService.prototype.getNewExampleObj = function (n) {
        n = typeof n !== 'undefined' ? n : Math.random() * 1000;
        return {
            id: n,
            name: "Jack London " + n,
            username: "jack_london_" + n,
            email: "jack_london_" + n + "@example.com",
        };
    };
    BasicExampleLoadService.prototype.generateData = function () {
        var data = [];
        for (var i = 0; i < BasicExampleLoadService_1.DATA_SIZE; i++) {
            data.push(this.getNewExampleObj(i));
        }
        return data;
    };
    BasicExampleLoadService.DATA_SIZE = 500;
    BasicExampleLoadService = BasicExampleLoadService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], BasicExampleLoadService);
    return BasicExampleLoadService;
    var BasicExampleLoadService_1;
}());



/***/ }),

/***/ "./src/app/pages/examples/server/server-examples.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/examples/server/server-examples.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Get data from external source example</h2>\n<h3><a id=\"from-server\" class=\"anchor\" href=\"#from-server\" aria-hidden=\"true\"><span aria-hidden=\"true\" class=\"octicon octicon-link\"></span></a>Loading From Server Example</h3>\n<p>\n  This example shows how to pass the data loaded from some API to the table DataSource.\n</p>\n<div class=\"with-source\">\n  <a class=\"source\" href=\"https://github.com/akveo/ng2-smart-table/blob/master/src/app/pages/examples/server/basic-example-load.component.ts\" target=\"_blank\">Demo Source</a>\n  <basic-example-load></basic-example-load>\n</div>\n\n<h3><a id=\"server\" class=\"anchor\" href=\"#server\" aria-hidden=\"true\"><span aria-hidden=\"true\" class=\"octicon octicon-link\"></span></a>Server Data Source Example</h3>\n<p>\n  An example on how to load data user Server DataSource:\n</p>\n<div class=\"with-source\">\n  <a class=\"source\" href=\"https://github.com/akveo/ng2-smart-table/blob/master/src/app/pages/examples/server/advanced-example-server.component.ts\" target=\"_blank\">Demo Source</a>\n<advanced-example-server></advanced-example-server>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/examples/server/server-examples.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/examples/server/server-examples.component.ts ***!
  \********************************************************************/
/*! exports provided: ServerExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerExamplesComponent", function() { return ServerExamplesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ServerExamplesComponent = /** @class */ (function () {
    function ServerExamplesComponent() {
    }
    ServerExamplesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'server-examples',
            template: __webpack_require__(/*! ./server-examples.component.html */ "./src/app/pages/examples/server/server-examples.component.html"),
        })
    ], ServerExamplesComponent);
    return ServerExamplesComponent;
}());



/***/ }),

/***/ "./src/app/pages/examples/various/advanced-example-confirm.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/examples/various/advanced-example-confirm.component.ts ***!
  \******************************************************************************/
/*! exports provided: AdvancedExampleConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedExampleConfirmComponent", function() { return AdvancedExampleConfirmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../ng2-smart-table */ "./src/ng2-smart-table/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdvancedExampleConfirmComponent = /** @class */ (function () {
    function AdvancedExampleConfirmComponent() {
        this.settings = {
            delete: {
                confirmDelete: true,
            },
            add: {
                confirmCreate: true,
            },
            edit: {
                confirmSave: true,
            },
            columns: {
                id: {
                    title: 'ID',
                },
                name: {
                    title: 'Full Name',
                },
                username: {
                    title: 'User Name',
                },
                email: {
                    title: 'Email',
                },
            },
        };
        this.data = [
            {
                id: 1,
                name: 'Leanne Graham',
                username: 'Bret',
                email: 'Sincere@april.biz',
                notShownField: true,
            },
            {
                id: 2,
                name: 'Ervin Howell',
                username: 'Antonette',
                email: 'Shanna@melissa.tv',
                notShownField: true,
            },
            {
                id: 3,
                name: 'Clementine Bauch',
                username: 'Samantha',
                email: 'Nathan@yesenia.net',
                notShownField: false,
            },
            {
                id: 4,
                name: 'Patricia Lebsack',
                username: 'Karianne',
                email: 'Julianne.OConner@kory.org',
                notShownField: false,
            },
            {
                id: 5,
                name: 'Chelsey Dietrich',
                username: 'Kamren',
                email: 'Lucio_Hettinger@annie.ca',
                notShownField: false,
            },
            {
                id: 6,
                name: 'Mrs. Dennis Schulist',
                username: 'Leopoldo_Corkery',
                email: 'Karley_Dach@jasper.info',
                notShownField: false,
            },
            {
                id: 7,
                name: 'Kurtis Weissnat',
                username: 'Elwyn.Skiles',
                email: 'Telly.Hoeger@billy.biz',
                notShownField: false,
            },
            {
                id: 8,
                name: 'Nicholas Runolfsdottir V',
                username: 'Maxime_Nienow',
                email: 'Sherwood@rosamond.me',
                notShownField: true,
            },
            {
                id: 9,
                name: 'Glenna Reichert',
                username: 'Delphine',
                email: 'Chaim_McDermott@dana.io',
                notShownField: false,
            },
            {
                id: 10,
                name: 'Clementina DuBuque',
                username: 'Moriah.Stanton',
                email: 'Rey.Padberg@karina.biz',
                notShownField: false,
            },
            {
                id: 11,
                name: 'Nicholas DuBuque',
                username: 'Nicholas.Stanton',
                email: 'Rey.Padberg@rosamond.biz',
                notShownField: true,
            }
        ];
        this.source = new _ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__["LocalDataSource"](this.data);
    }
    AdvancedExampleConfirmComponent.prototype.onDeleteConfirm = function (event) {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    AdvancedExampleConfirmComponent.prototype.onSaveConfirm = function (event) {
        if (window.confirm('Are you sure you want to save?')) {
            event.newData['name'] += ' + added in code';
            event.confirm.resolve(event.newData);
        }
        else {
            event.confirm.reject();
        }
    };
    AdvancedExampleConfirmComponent.prototype.onCreateConfirm = function (event) {
        if (window.confirm('Are you sure you want to create?')) {
            event.newData['name'] += ' + added in code';
            event.confirm.resolve(event.newData);
        }
        else {
            event.confirm.reject();
        }
    };
    AdvancedExampleConfirmComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'advance-example-comfirm',
            template: "\n    <ng2-smart-table\n      [settings]=\"settings\"\n      [source]=\"source\"\n      (deleteConfirm)=\"onDeleteConfirm($event)\"\n      (editConfirm)=\"onSaveConfirm($event)\"\n      (createConfirm)=\"onCreateConfirm($event)\"></ng2-smart-table>\n  ",
        }),
        __metadata("design:paramtypes", [])
    ], AdvancedExampleConfirmComponent);
    return AdvancedExampleConfirmComponent;
}());



/***/ }),

/***/ "./src/app/pages/examples/various/basic-example-multi-select.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/examples/various/basic-example-multi-select.component.ts ***!
  \********************************************************************************/
/*! exports provided: BasicExampleMultiSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicExampleMultiSelectComponent", function() { return BasicExampleMultiSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BasicExampleMultiSelectComponent = /** @class */ (function () {
    function BasicExampleMultiSelectComponent() {
        this.settings = {
            selectMode: 'multi',
            columns: {
                id: {
                    title: 'ID',
                },
                name: {
                    title: 'Full Name',
                },
                username: {
                    title: 'User Name',
                },
                email: {
                    title: 'Email',
                },
            },
        };
        this.data = [
            {
                id: 1,
                name: 'Leanne Graham',
                username: 'Bret',
                email: 'Sincere@april.biz',
            },
            {
                id: 2,
                name: 'Ervin Howell',
                username: 'Antonette',
                email: 'Shanna@melissa.tv',
            },
            {
                id: 3,
                name: 'Clementine Bauch',
                username: 'Samantha',
                email: 'Nathan@yesenia.net',
            },
            {
                id: 4,
                name: 'Patricia Lebsack',
                username: 'Karianne',
                email: 'Julianne.OConner@kory.org',
            },
            {
                id: 5,
                name: 'Chelsey Dietrich',
                username: 'Kamren',
                email: 'Lucio_Hettinger@annie.ca',
            },
            {
                id: 6,
                name: 'Mrs. Dennis Schulist',
                username: 'Leopoldo_Corkery',
                email: 'Karley_Dach@jasper.info',
            },
            {
                id: 7,
                name: 'Kurtis Weissnat',
                username: 'Elwyn.Skiles',
                email: 'Telly.Hoeger@billy.biz',
            },
            {
                id: 8,
                name: 'Nicholas Runolfsdottir V',
                username: 'Maxime_Nienow',
                email: 'Sherwood@rosamond.me',
            },
            {
                id: 9,
                name: 'Glenna Reichert',
                username: 'Delphine',
                email: 'Chaim_McDermott@dana.io',
            },
            {
                id: 10,
                name: 'Clementina DuBuque',
                username: 'Moriah.Stanton',
                email: 'Rey.Padberg@karina.biz',
            },
            {
                id: 11,
                name: 'Nicholas DuBuque',
                username: 'Nicholas.Stanton',
                email: 'Rey.Padberg@rosamond.biz',
            },
        ];
    }
    BasicExampleMultiSelectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'basic-example-multi-select',
            template: "\n    <ng2-smart-table [settings]=\"settings\" [source]=\"data\"></ng2-smart-table>\n  ",
        })
    ], BasicExampleMultiSelectComponent);
    return BasicExampleMultiSelectComponent;
}());



/***/ }),

/***/ "./src/app/pages/examples/various/various-examples.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/examples/various/various-examples.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Various examples</h2>\n<h3><a id=\"confirm\" class=\"anchor\" href=\"#confirm\" aria-hidden=\"true\"><span aria-hidden=\"true\" class=\"octicon octicon-link\"></span></a>Confirm Action Example</h3>\n<p>\n  An example on how to confirm an action before it's applied to the table:\n</p>\n<div class=\"with-source\">\n  <a class=\"source\" href=\"https://github.com/akveo/ng2-smart-table/blob/master/src/app/pages/examples/various/advanced-example-confirm.component.ts\" target=\"_blank\">Demo Source</a>\n  <advance-example-comfirm></advance-example-comfirm>\n</div>\n\n\n<h3><a id=\"multiselect\" class=\"anchor\" href=\"#multiselect\" aria-hidden=\"true\"><span aria-hidden=\"true\" class=\"octicon octicon-link\"></span></a>Multi select</h3>\n<p>An example on how to use multi select mode:</p>\n<div class=\"with-source\">\n  <a class=\"source\" href=\"https://github.com/akveo/ng2-smart-table/blob/master/src/app/pages/examples/various/basic-example-multi-select.component.ts\" target=\"_blank\">Demo Source</a>\n  <basic-example-multi-select></basic-example-multi-select>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/examples/various/various-examples.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/examples/various/various-examples.component.ts ***!
  \**********************************************************************/
/*! exports provided: VariousExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariousExamplesComponent", function() { return VariousExamplesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var VariousExamplesComponent = /** @class */ (function () {
    function VariousExamplesComponent() {
    }
    VariousExamplesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'various-examples',
            template: __webpack_require__(/*! ./various-examples.component.html */ "./src/app/pages/examples/various/various-examples.component.html"),
        })
    ], VariousExamplesComponent);
    return VariousExamplesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=examples-examples-module.js.map