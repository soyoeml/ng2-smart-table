(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./demo/demo.module": [
		"./src/app/pages/demo/demo.module.ts",
		"demo-demo-module"
	],
	"./documentation/documentation.module": [
		"./src/app/pages/documentation/documentation.module.ts",
		"documentation-documentation-module"
	],
	"./examples/examples.module": [
		"./src/app/pages/examples/examples.module.ts",
		"examples-examples-module"
	],
	"./home/home.module": [
		"./src/app/pages/home/home.module.ts",
		"home-home-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
            template: "\n    <router-outlet></router-outlet>\n  ",
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ng2-smart-table */ "./src/ng2-smart-table/index.js");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/pages.module */ "./src/app/pages/pages.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _theme_directives_scrollPosition_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./theme/directives/scrollPosition.directive */ "./src/app/theme/directives/scrollPosition.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _theme_directives_scrollPosition_directive__WEBPACK_IMPORTED_MODULE_9__["ScrollPositionDirective"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_8__["routes"], { useHash: true }),
                _ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["Ng2SmartTableModule"],
                _pages_pages_module__WEBPACK_IMPORTED_MODULE_6__["PagesModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
var routes = [
    {
        path: '',
        redirectTo: 'pages',
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: '',
    },
];


/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages.routes */ "./src/app/pages/pages.routes.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ng2_smart_table_ng2_smart_table_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ng2-smart-table/ng2-smart-table.module */ "./src/ng2-smart-table/ng2-smart-table.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_pages_routes__WEBPACK_IMPORTED_MODULE_4__["routes"]),
                _ng2_smart_table_ng2_smart_table_module__WEBPACK_IMPORTED_MODULE_6__["Ng2SmartTableModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            ],
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/pages/pages.routes.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.routes.ts ***!
  \***************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
var routes = [
    {
        path: '',
        loadChildren: './home/home.module#HomeModule',
    },
    {
        path: 'demo',
        loadChildren: './demo/demo.module#DemoModule',
    },
    {
        path: 'documentation',
        loadChildren: './documentation/documentation.module#DocumentationModule',
    },
    {
        path: 'examples',
        loadChildren: './examples/examples.module#ExamplesModule',
    },
];


/***/ }),

/***/ "./src/app/shared/components/basic-example/basic-example-data.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/components/basic-example/basic-example-data.component.ts ***!
  \*********************************************************************************/
/*! exports provided: BasicExampleDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicExampleDataComponent", function() { return BasicExampleDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BasicExampleDataComponent = /** @class */ (function () {
    function BasicExampleDataComponent() {
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
    BasicExampleDataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'basic-example-data',
            template: "\n    <ng2-smart-table [settings]=\"settings\" [source]=\"data\"></ng2-smart-table>\n  ",
        })
    ], BasicExampleDataComponent);
    return BasicExampleDataComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/basic-example/basic-example.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/basic-example/basic-example.component.ts ***!
  \****************************************************************************/
/*! exports provided: BasicExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicExampleComponent", function() { return BasicExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BasicExampleComponent = /** @class */ (function () {
    function BasicExampleComponent() {
        this.settings = {
            columns: {
                id: {
                    title: 'ID',
                    width: '100px',
                },
                name: {
                    title: 'Full Name',
                    width: '40%',
                },
                username: {
                    title: 'User Name',
                },
                email: {
                    title: 'Email',
                },
            },
        };
    }
    BasicExampleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'basic-example',
            template: "\n    <ng2-smart-table [settings]=\"settings\"></ng2-smart-table>\n  ",
        })
    ], BasicExampleComponent);
    return BasicExampleComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"page-header internal\">\n  <h1 class=\"project-name\"><a routerLink=\"/\">ng2-smart-table</a></h1>\n  <h2 class=\"project-tagline\">{{ tagline }}</h2>\n\n  <a routerLinkActive=\"active\" routerLink=\"/demo\" class=\"btn\">Quick Start</a>\n  <a routerLinkActive=\"active\" routerLink=\"/examples\" class=\"btn\">Examples</a>\n  <a routerLinkActive=\"active\" routerLink=\"/documentation\" class=\"btn\">Documentation</a>\n  <a target=\"_blank\" href=\"https://github.com/akveo/ng2-smart-table\" class=\"btn\">View on GitHub</a>\n</section>"

/***/ }),

/***/ "./src/app/shared/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.tagline = '';
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "tagline", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'header-component',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/components/header/header.component.html"),
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/directives/highlight.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/directives/highlight.directive.ts ***!
  \**********************************************************/
/*! exports provided: HighlightCodeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightCodeDirective", function() { return HighlightCodeDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HighlightCodeDirective = /** @class */ (function () {
    function HighlightCodeDirective(elRef) {
        this.elRef = elRef;
    }
    HighlightCodeDirective.prototype.ngAfterViewInit = function () {
        highlight_js__WEBPACK_IMPORTED_MODULE_1__["highlightBlock"](this.elRef.nativeElement);
    };
    HighlightCodeDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: 'code[highlight]',
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], HighlightCodeDirective);
    return HighlightCodeDirective;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ng2-smart-table */ "./src/ng2-smart-table/index.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony import */ var _components_basic_example_basic_example_data_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/basic-example/basic-example-data.component */ "./src/app/shared/components/basic-example/basic-example-data.component.ts");
/* harmony import */ var _components_basic_example_basic_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/basic-example/basic-example.component */ "./src/app/shared/components/basic-example/basic-example.component.ts");
/* harmony import */ var _directives_highlight_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/highlight.directive */ "./src/app/shared/directives/highlight.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SHARED_COMPONENTS = [
    _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
    _components_basic_example_basic_example_component__WEBPACK_IMPORTED_MODULE_6__["BasicExampleComponent"],
    _components_basic_example_basic_example_data_component__WEBPACK_IMPORTED_MODULE_5__["BasicExampleDataComponent"],
];
var SHARED_DIRECTIVES = [
    _directives_highlight_directive__WEBPACK_IMPORTED_MODULE_7__["HighlightCodeDirective"],
];
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__["Ng2SmartTableModule"],
            ],
            declarations: SHARED_COMPONENTS.concat(SHARED_DIRECTIVES),
            exports: SHARED_COMPONENTS.concat(SHARED_DIRECTIVES),
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/theme/directives/scrollPosition.directive.ts":
/*!**************************************************************!*\
  !*** ./src/app/theme/directives/scrollPosition.directive.ts ***!
  \**************************************************************/
/*! exports provided: ScrollPositionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollPositionDirective", function() { return ScrollPositionDirective; });
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

var ScrollPositionDirective = /** @class */ (function () {
    function ScrollPositionDirective() {
        this.scrollChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ScrollPositionDirective.prototype.ngOnInit = function () {
        this.onWindowScroll();
    };
    ScrollPositionDirective.prototype.onWindowScroll = function () {
        var isScrolled = window.scrollY > this.maxHeight;
        if (isScrolled !== this.isScrolled) {
            this.isScrolled = isScrolled;
            this.scrollChange.emit({
                scrolled: isScrolled,
                offset: window.scrollY,
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ScrollPositionDirective.prototype, "maxHeight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ScrollPositionDirective.prototype, "scrollChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ScrollPositionDirective.prototype, "onWindowScroll", null);
    ScrollPositionDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[scrollPosition]',
        })
    ], ScrollPositionDirective);
    return ScrollPositionDirective;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ "./src/ng2-smart-table/components/cell/cell-edit-mode/custom-edit.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/ng2-smart-table/components/cell/cell-edit-mode/custom-edit.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CustomEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomEditComponent", function() { return CustomEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _edit_cell_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-cell-default */ "./src/ng2-smart-table/components/cell/cell-edit-mode/edit-cell-default.ts");
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


var CustomEditComponent = /** @class */ (function (_super) {
    __extends(CustomEditComponent, _super);
    function CustomEditComponent(resolver) {
        var _this = _super.call(this) || this;
        _this.resolver = resolver;
        return _this;
    }
    CustomEditComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.cell && !this.customComponent) {
            var componentFactory = this.resolver.resolveComponentFactory(this.cell.getColumn().editor.component);
            this.customComponent = this.dynamicTarget.createComponent(componentFactory);
            // set @Inputs and @Outputs of custom component
            this.customComponent.instance.cell = this.cell;
            this.customComponent.instance.inputClass = this.inputClass;
            this.customComponent.instance.onStopEditing.subscribe(function () { return _this.onStopEditing(); });
            this.customComponent.instance.onEdited.subscribe(function (event) { return _this.onEdited(event); });
            this.customComponent.instance.onClick.subscribe(function (event) { return _this.onClick(event); });
        }
    };
    CustomEditComponent.prototype.ngOnDestroy = function () {
        if (this.customComponent) {
            this.customComponent.destroy();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dynamicTarget', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", Object)
    ], CustomEditComponent.prototype, "dynamicTarget", void 0);
    CustomEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'table-cell-custom-editor',
            template: "\n    <ng-template #dynamicTarget></ng-template>\n  ",
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
    ], CustomEditComponent);
    return CustomEditComponent;
}(_edit_cell_default__WEBPACK_IMPORTED_MODULE_1__["EditCellDefault"]));



/***/ }),

/***/ "./src/ng2-smart-table/components/cell/cell-edit-mode/default-edit.component.html":
/*!****************************************************************************************!*\
  !*** ./src/ng2-smart-table/components/cell/cell-edit-mode/default-edit.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"getEditorType()\">\n    <select-editor *ngSwitchCase=\"'list'\"\n                   [cell]=\"cell\"\n                   [inputClass]=\"inputClass\"\n                   (onClick)=\"onClick($event)\"\n                   (onEdited)=\"onEdited($event)\"\n                   (onStopEditing)=\"onStopEditing()\">\n    </select-editor>\n\n    <textarea-editor *ngSwitchCase=\"'textarea'\"\n                     [cell]=\"cell\"\n                     [inputClass]=\"inputClass\"\n                     (onClick)=\"onClick($event)\"\n                     (onEdited)=\"onEdited($event)\"\n                     (onStopEditing)=\"onStopEditing()\">\n    </textarea-editor>\n\n    <checkbox-editor *ngSwitchCase=\"'checkbox'\"\n                     [cell]=\"cell\"\n                     [inputClass]=\"inputClass\"\n                     (onClick)=\"onClick($event)\">\n    </checkbox-editor>\n\n    <completer-editor *ngSwitchCase=\"'completer'\"\n                      [cell]=\"cell\">\n    </completer-editor>\n\n    <input-editor *ngSwitchDefault\n                  [cell]=\"cell\"\n                  [inputClass]=\"inputClass\"\n                  (onClick)=\"onClick($event)\"\n                  (onEdited)=\"onEdited($event)\"\n                  (onStopEditing)=\"onStopEditing()\">\n    </input-editor>\n</div>"

/***/ }),

/***/ "./src/ng2-smart-table/components/cell/cell-edit-mode/default-edit.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/ng2-smart-table/components/cell/cell-edit-mode/default-edit.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DefaultEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultEditComponent", function() { return DefaultEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _edit_cell_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-cell-default */ "./src/ng2-smart-table/components/cell/cell-edit-mode/edit-cell-default.ts");
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


var DefaultEditComponent = /** @class */ (function (_super) {
    __extends(DefaultEditComponent, _super);
    function DefaultEditComponent() {
        return _super.call(this) || this;
    }
    DefaultEditComponent.prototype.getEditorType = function () {
        return this.cell.getColumn().editor && this.cell.getColumn().editor.type;
    };
    DefaultEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'table-cell-default-editor',
            template: __webpack_require__(/*! ./default-edit.component.html */ "./src/ng2-smart-table/components/cell/cell-edit-mode/default-edit.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], DefaultEditComponent);
    return DefaultEditComponent;
}(_edit_cell_default__WEBPACK_IMPORTED_MODULE_1__["EditCellDefault"]));



/***/ }),

/***/ "./src/ng2-smart-table/components/cell/cell-edit-mode/edit-cell-default.ts":
/*!*********************************************************************************!*\
  !*** ./src/ng2-smart-table/components/cell/cell-edit-mode/edit-cell-default.ts ***!
  \*********************************************************************************/
/*! exports provided: EditCellDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCellDefault", function() { return EditCellDefault; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lib_data_set_cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/data-set/cell */ "./src/ng2-smart-table/lib/data-set/cell.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditCellDefault = /** @class */ (function () {
    function EditCellDefault() {
        this.inputClass = '';
        this.edited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    EditCellDefault.prototype.onEdited = function (event) {
        this.edited.next(event);
        return false;
    };
    EditCellDefault.prototype.onStopEditing = function () {
        this.cell.getRow().isInEditing = false;
        return false;
    };
    EditCellDefault.prototype.onClick = function (event) {
        event.stopPropagation();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _lib_data_set_cell__WEBPACK_IMPORTED_MODULE_1__["Cell"])
    ], EditCellDefault.prototype, "cell", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EditCellDefault.prototype, "inputClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EditCellDefault.prototype, "edited", void 0);
    return EditCellDefault;
}());



/***/ }),

/***/ "./src/ng2-smart-table/components/cell/cell-edit-mode/edit-cell.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/ng2-smart-table/components/cell/cell-edit-mode/edit-cell.component.ts ***!
  \***********************************************************************************/
/*! exports provided: EditCellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCellComponent", function() { return EditCellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lib_data_set_cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/data-set/cell */ "./src/ng2-smart-table/lib/data-set/cell.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditCellComponent = /** @class */ (function () {
    function EditCellComponent() {
        this.inputClass = '';
        this.edited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    EditCellComponent.prototype.onEdited = function (event) {
        this.edited.next(event);
        return false;
    };
    EditCellComponent.prototype.getEditorType = function () {
        return this.cell.getColumn().editor && this.cell.getColumn().editor.type;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _lib_data_set_cell__WEBPACK_IMPORTED_MODULE_1__["Cell"])
    ], EditCellComponent.prototype, "cell", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EditCellComponent.prototype, "inputClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EditCellComponent.prototype, "edited", void 0);
    EditCellComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'table-cell-edit-mode',
            template: "\n      <div [ngSwitch]=\"getEditorType()\">\n        <table-cell-custom-editor *ngSwitchCase=\"'custom'\"\n                                  [cell]=\"cell\"\n                                  [inputClass]=\"inputClass\"\n                                  (edited)=\"onEdited($event)\">\n        </table-cell-custom-editor>\n        <table-cell-default-editor *ngSwitchDefault\n                                  [cell]=\"cell\"\n                                  [inputClass]=\"inputClass\"\n                                  (edited)=\"onEdited($event)\">\n        </table-cell-default-editor>\n      </div>\n    ",
        })
    ], EditCellComponent);
    return EditCellComponent;
}());



/***/ }),

/***/ "./src/ng2-smart-table/components/cell/cell-editors/checkbox-editor.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/ng2-smart-table/components/cell/cell-editors/checkbox-editor.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CheckboxEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxEditorComponent", function() { return CheckboxEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _default_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default-editor */ "./src/ng2-smart-table/components/cell/cell-editors/default-editor.ts");
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


var CheckboxEditorComponent = /** @class */ (function (_super) {
    __extends(CheckboxEditorComponent, _super);
    function CheckboxEditorComponent() {
        return _super.call(this) || this;
    }
    CheckboxEditorComponent.prototype.onChange = function (event) {
        var trueVal = (this.cell.getColumn().getConfig() && this.cell.getColumn().getConfig().true) || true;
        var falseVal = (this.cell.getColumn().getConfig() && this.cell.getColumn().getConfig().false) || false;
        this.cell.newValue = event.target.checked ? trueVal : falseVal;
    };
    CheckboxEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'checkbox-editor',
            styles: [__webpack_require__(/*! ./editor.component.scss */ "./src/ng2-smart-table/components/cell/cell-editors/editor.component.scss")],
            template: "\n    <input [ngClass]=\"inputClass\"\n           type=\"checkbox\"\n           class=\"form-control\"\n           [name]=\"cell.getId()\"\n           [disabled]=\"!cell.isEditable()\"\n           [checked]=\"cell.getValue() == (cell.getColumn().getConfig()?.true || true)\"\n           (click)=\"onClick.emit($event)\"\n           (change)=\"onChange($event)\">\n    ",
        }),
        __metadata("design:paramtypes", [])
    ], CheckboxEditorComponent);
    return CheckboxEditorComponent;
}(_default_editor__WEBPACK_IMPORTED_MODULE_1__["DefaultEditor"]));



/***/ }),

/***/ "./src/ng2-smart-table/components/cell/cell-editors/completer-editor.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/ng2-smart-table/components/cell/cell-editors/completer-editor.component.ts ***!
  \****************************************************************************************/
/*! exports provided: CompleterEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleterEditorComponent", function() { return CompleterEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_completer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-completer */ "./node_modules/ng2-completer/index.js");
/* harmony import */ var _default_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default-editor */ "./src/ng2-smart-table/components/cell/cell-editors/default-editor.ts");
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



var CompleterEditorComponent = /** @class */ (function (_super) {
    __extends(CompleterEditorComponent, _super);
    function CompleterEditorComponent(completerService) {
        var _this = _super.call(this) || this;
        _this.completerService = completerService;
        _this.completerStr = '';
        return _this;
    }
    CompleterEditorComponent.prototype.ngOnInit = function () {
        if (this.cell.getColumn().editor && this.cell.getColumn().editor.type === 'completer') {
            var config = this.cell.getColumn().getConfig().completer;
            config.dataService = this.completerService.local(config.data, config.searchFields, config.titleField);
            config.dataService.descriptionField(config.descriptionField);
        }
    };
    CompleterEditorComponent.prototype.onEditedCompleter = function (event) {
        this.cell.newValue = event.title;
        return false;
    };
    CompleterEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'completer-editor',
            template: "\n    <ng2-completer [(ngModel)]=\"completerStr\"\n                   [dataService]=\"cell.getColumn().getConfig().completer.dataService\"\n                   [minSearchLength]=\"cell.getColumn().getConfig().completer.minSearchLength || 0\"\n                   [pause]=\"cell.getColumn().getConfig().completer.pause || 0\"\n                   [placeholder]=\"cell.getColumn().getConfig().completer.placeholder || 'Start typing...'\"\n                   (selected)=\"onEditedCompleter($event)\">\n    </ng2-completer>\n    ",
        }),
        __metadata("design:paramtypes", [ng2_completer__WEBPACK_IMPORTED_MODULE_1__["CompleterService"]])
    ], CompleterEditorComponent);
    return CompleterEditorComponent;
}(_default_editor__WEBPACK_IMPORTED_MODULE_2__["DefaultEditor"]));



/***/ }),

/***/ "./src/ng2-smart-table/components/cell/cell-editors/default-editor.ts":
/*!****************************************************************************!*\
  !*** ./src/ng2-smart-table/components/cell/cell-editors/default-editor.ts ***!
  \****************************************************************************/
/*! exports provided: DefaultEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultEditor", function() { return DefaultEditor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lib_data_set_cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/data-set/cell */ "./src/ng2-smart-table/lib/data-set/cell.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DefaultEditor = /** @class */ (function () {
    function DefaultEditor() {
        this.onStopEditing = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onEdited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _lib_data_set_cell__WEBPACK_IMPORTED_MODULE_1__["Cell"])
    ], DefaultEditor.prototype, "cell", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DefaultEditor.prototype, "inputClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DefaultEditor.prototype, "onStopEditing", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DefaultEditor.prototype, "onEdited", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DefaultEditor.prototype, "onClick", void 0);
    return DefaultEditor;
}());



/***/ }),

/***/ "./src/ng2-smart-table/components/cell/cell-editors/editor.component.scss":
/*!********************************************************************************!*\
  !*** ./src/ng2-smart-table/components/cell/cell-editors/editor.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host input,\n:host textarea {\n  width: 100%;\n  line-height: normal;\n  padding: .375em .75em; }\n"

/***/ }),

/***/ "./src/ng2-smart-table/components/cell/cell-editors/input-editor.component.ts":
/*!************************************************************************************!*\
  !*** ./src/ng2-smart-table/components/cell/cell-editors/input-editor.component.ts ***!
  \************************************************************************************/
/*! exports provided: InputEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputEditorComponent", function() { return InputEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _default_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default-editor */ "./src/ng2-smart-table/components/cell/cell-editors/default-editor.ts");
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


var InputEditorComponent = /** @class */ (function (_super) {
    __extends(InputEditorComponent, _super);
    function InputEditorComponent() {
        return _super.call(this) || this;
    }
    InputEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'input-editor',
            styles: [__webpack_require__(/*! ./editor.component.scss */ "./src/ng2-smart-table/components/cell/cell-editors/editor.component.scss")],
            template: "\n    <input [ngClass]=\"inputClass\"\n           class=\"form-control\"\n           [(ngModel)]=\"cell.newValue\"\n           [name]=\"cell.getId()\"\n           [placeholder]=\"cell.getTitle()\"\n           [disabled]=\"!cell.isEditable()\"\n           (click)=\"onClick.emit($event)\"\n           (keydown.enter)=\"onEdited.emit($event)\"\n           (keydown.esc)=\"onStopEditing.emit()\">\n    ",
        }),
        __metadata("design:paramtypes", [])
    ], InputEditorComponent);
    return InputEditorComponent;
}(_default_editor__WEBPACK_IMPORTED_MODULE_1__["DefaultEditor"]));



/***/ }),

/***/ "./src/ng2-smart-table/components/cell/cell-editors/select-editor.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/ng2-smart-table/components/cell/cell-editors/select-editor.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SelectEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectEditorComponent", function() { return SelectEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _default_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default-editor */ "./src/ng2-smart-table/components/cell/cell-editors/default-editor.ts");
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


var SelectEditorComponent = /** @class */ (function (_super) {
    __extends(SelectEditorComponent, _super);
    function SelectEditorComponent() {
        return _super.call(this) || this;
    }
    SelectEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'select-editor',
            template: "\n    <select [ngClass]=\"inputClass\"\n            class=\"form-control\"\n            [(ngModel)]=\"cell.newValue\"\n            [name]=\"cell.getId()\"\n            [disabled]=\"!cell.isEditable()\"\n            (click)=\"onClick.emit($event)\"\n            (keydown.enter)=\"onEdited.emit($event)\"\n            (keydown.esc)=\"onStopEditing.emit()\">\n\n        <option *ngFor=\"let option of cell.getColumn().getConfig()?.list\" [value]=\"option.value\"\n                [selected]=\"option.value === cell.getValue()\">{{ option.title }}\n        </option>\n    </select>\n    ",
        }),
        __metadata("design:paramtypes", [])
    ], SelectEditorComponent);
    return SelectEditorComponent;
}(_default_editor__WEBPACK_IMPORTED_MODULE_1__["DefaultEditor"]));



/***/ }),

/***/ "./src/ng2-smart-table/components/cell/cell-editors/textarea-editor.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/ng2-smart-table/components/cell/cell-editors/textarea-editor.component.ts ***!
  \***************************************************************************************/
/*! exports provided: TextareaEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextareaEditorComponent", function() { return TextareaEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _default_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default-editor */ "./src/ng2-smart-table/components/cell/cell-editors/default-editor.ts");
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


var TextareaEditorComponent = /** @class */ (function (_super) {
    __extends(TextareaEditorComponent, _super);
    function TextareaEditorComponent() {
        return _super.call(this) || this;
    }
    TextareaEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'textarea-editor',
            styles: [__webpack_require__(/*! ./editor.component.scss */ "./src/ng2-smart-table/components/cell/cell-editors/editor.component.scss")],
            template: "\n    <textarea [ngClass]=\"inputClass\"\n              class=\"form-control\"\n              [(ngModel)]=\"cell.newValue\"\n              [name]=\"cell.getId()\"\n              [disabled]=\"!cell.isEditable()\"\n              [placeholder]=\"cell.getTitle()\"\n              (click)=\"onClick.emit($event)\"\n              (keydown.enter)=\"onEdited.emit($event)\"\n              (keydown.esc)=\"onStopEditing.emit()\">\n    </textarea>\n    ",
        }),
        __metadata("design:paramtypes", [])
    ], TextareaEditorComponent);
    return TextareaEditorComponent;
}(_default_editor__WEBPACK_IMPORTED_MODULE_1__["DefaultEditor"]));



/***/ }),

/***/ "./src/ng2-smart-table/components/cell/cell-view-mode/custom-view.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/ng2-smart-table/components/cell/cell-view-mode/custom-view.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CustomViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomViewComponent", function() { return CustomViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lib_data_set_cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/data-set/cell */ "./src/ng2-smart-table/lib/data-set/cell.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomViewComponent = /** @class */ (function () {
    function CustomViewComponent(resolver) {
        this.resolver = resolver;
    }
    CustomViewComponent.prototype.ngOnInit = function () {
        if (this.cell && !this.customComponent) {
            this.createCustomComponent();
            this.callOnComponentInit();
            this.patchInstance();
        }
    };
    CustomViewComponent.prototype.ngOnDestroy = function () {
        if (this.customComponent) {
            this.customComponent.destroy();
        }
    };
    CustomViewComponent.prototype.createCustomComponent = function () {
        var componentFactory = this.resolver.resolveComponentFactory(this.cell.getColumn().renderComponent);
        this.customComponent = this.dynamicTarget.createComponent(componentFactory);
    };
    CustomViewComponent.prototype.callOnComponentInit = function () {
        var onComponentInitFunction = this.cell.getColumn().getOnComponentInitFunction();
        onComponentInitFunction && onComponentInitFunction(this.customComponent.instance);
    };
    CustomViewComponent.prototype.patchInstance = function () {
        Object.assign(this.customComponent.instance, this.getPatch());
    };
    CustomViewComponent.prototype.getPatch = function () {
        return {
            value: this.cell.getValue(),
            rowData: this.cell.getRow().getData()
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _lib_data_set_cell__WEBPACK_IMPORTED_MODULE_1__["Cell"])
    ], CustomViewComponent.prototype, "cell", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dynamicTarget', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", Object)
    ], CustomViewComponent.prototype, "dynamicTarget", void 0);
    CustomViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'custom-view-component',
            template: "\n    <ng-template #dynamicTarget></ng-template>\n  ",
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
    ], CustomViewComponent);
    return CustomViewComponent;
}());



/***/ }),

/***/ "./src/ng2-smart-table/components/cell/cell-view-mode/view-cell.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/ng2-smart-table/components/cell/cell-view-mode/view-cell.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ViewCellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCellComponent", function() { return ViewCellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lib_data_set_cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/data-set/cell */ "./src/ng2-smart-table/lib/data-set/cell.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewCellComponent = /** @class */ (function () {
    function ViewCellComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _lib_data_set_cell__WEBPACK_IMPORTED_MODULE_1__["Cell"])
    ], ViewCellComponent.prototype, "cell", void 0);
    ViewCellComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'table-cell-view-mode',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            template: "\n    <div [ngSwitch]=\"cell.getColumn().type\">\n        <custom-view-component *ngSwitchCase=\"'custom'\" [cell]=\"cell\"></custom-view-component>\n        <div *ngSwitchCase=\"'html'\" [innerHTML]=\"cell.getValue()\"></div>\n        <div *ngSwitchDefault>{{ cell.getValue() }}</div>\n    </div>\n    ",
        })
    ], ViewCellComponent);
    return ViewCellComponent;
}());



/***/ }),

/***/ "./src/ng2-smart-table/components/cell/cell.component.ts":
/*!***************************************************************!*\
  !*** ./src/ng2-smart-table/components/cell/cell.component.ts ***!
  \***************************************************************/
/*! exports provided: CellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CellComponent", function() { return CellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lib_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/grid */ "./src/ng2-smart-table/lib/grid.ts");
/* harmony import */ var _lib_data_set_cell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/data-set/cell */ "./src/ng2-smart-table/lib/data-set/cell.ts");
/* harmony import */ var _lib_data_set_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/data-set/row */ "./src/ng2-smart-table/lib/data-set/row.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CellComponent = /** @class */ (function () {
    function CellComponent() {
        this.inputClass = '';
        this.mode = 'inline';
        this.isInEditing = false;
        this.edited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CellComponent.prototype.onEdited = function (event) {
        if (this.isNew) {
            this.grid.create(this.grid.getNewRow(), this.createConfirm);
        }
        else {
            this.grid.save(this.row, this.editConfirm);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _lib_grid__WEBPACK_IMPORTED_MODULE_1__["Grid"])
    ], CellComponent.prototype, "grid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _lib_data_set_row__WEBPACK_IMPORTED_MODULE_3__["Row"])
    ], CellComponent.prototype, "row", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CellComponent.prototype, "editConfirm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CellComponent.prototype, "createConfirm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CellComponent.prototype, "isNew", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _lib_data_set_cell__WEBPACK_IMPORTED_MODULE_2__["Cell"])
    ], CellComponent.prototype, "cell", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CellComponent.prototype, "inputClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CellComponent.prototype, "mode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CellComponent.prototype, "isInEditing", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CellComponent.prototype, "edited", void 0);
    CellComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ng2-smart-table-cell',
            template: "\n    <table-cell-view-mode *ngIf=\"!isInEditing\" [cell]=\"cell\"></table-cell-view-mode>\n    <table-cell-edit-mode *ngIf=\"isInEditing\" [cell]=\"cell\"\n                          [inputClass]=\"inputClass\"\n                          (edited)=\"onEdited($event)\">\n    </table-cell-edit-mode>\n  ",
        })
    ], CellComponent);
    return CellComponent;
}());



/***/ }),

/***/ "./src/ng2-smart-table/components/cell/cell.module.ts":
/*!************************************************************!*\
  !*** ./src/ng2-smart-table/components/cell/cell.module.ts ***!
  \************************************************************/
/*! exports provided: CellModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CellModule", function() { return CellModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_completer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-completer */ "./node_modules/ng2-completer/index.js");
/* harmony import */ var _cell_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cell.component */ "./src/ng2-smart-table/components/cell/cell.component.ts");
/* harmony import */ var _cell_edit_mode_custom_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cell-edit-mode/custom-edit.component */ "./src/ng2-smart-table/components/cell/cell-edit-mode/custom-edit.component.ts");
/* harmony import */ var _cell_edit_mode_default_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cell-edit-mode/default-edit.component */ "./src/ng2-smart-table/components/cell/cell-edit-mode/default-edit.component.ts");
/* harmony import */ var _cell_edit_mode_edit_cell_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cell-edit-mode/edit-cell.component */ "./src/ng2-smart-table/components/cell/cell-edit-mode/edit-cell.component.ts");
/* harmony import */ var _cell_editors_checkbox_editor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cell-editors/checkbox-editor.component */ "./src/ng2-smart-table/components/cell/cell-editors/checkbox-editor.component.ts");
/* harmony import */ var _cell_editors_completer_editor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cell-editors/completer-editor.component */ "./src/ng2-smart-table/components/cell/cell-editors/completer-editor.component.ts");
/* harmony import */ var _cell_editors_input_editor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cell-editors/input-editor.component */ "./src/ng2-smart-table/components/cell/cell-editors/input-editor.component.ts");
/* harmony import */ var _cell_editors_select_editor_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cell-editors/select-editor.component */ "./src/ng2-smart-table/components/cell/cell-editors/select-editor.component.ts");
/* harmony import */ var _cell_editors_textarea_editor_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cell-editors/textarea-editor.component */ "./src/ng2-smart-table/components/cell/cell-editors/textarea-editor.component.ts");
/* harmony import */ var _cell_view_mode_custom_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cell-view-mode/custom-view.component */ "./src/ng2-smart-table/components/cell/cell-view-mode/custom-view.component.ts");
/* harmony import */ var _cell_view_mode_view_cell_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cell-view-mode/view-cell.component */ "./src/ng2-smart-table/components/cell/cell-view-mode/view-cell.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var CELL_COMPONENTS = [
    _cell_component__WEBPACK_IMPORTED_MODULE_4__["CellComponent"],
    _cell_edit_mode_custom_edit_component__WEBPACK_IMPORTED_MODULE_5__["CustomEditComponent"],
    _cell_edit_mode_default_edit_component__WEBPACK_IMPORTED_MODULE_6__["DefaultEditComponent"],
    _cell_edit_mode_edit_cell_component__WEBPACK_IMPORTED_MODULE_7__["EditCellComponent"],
    _cell_editors_checkbox_editor_component__WEBPACK_IMPORTED_MODULE_8__["CheckboxEditorComponent"],
    _cell_editors_completer_editor_component__WEBPACK_IMPORTED_MODULE_9__["CompleterEditorComponent"],
    _cell_editors_input_editor_component__WEBPACK_IMPORTED_MODULE_10__["InputEditorComponent"],
    _cell_editors_select_editor_component__WEBPACK_IMPORTED_MODULE_11__["SelectEditorComponent"],
    _cell_editors_textarea_editor_component__WEBPACK_IMPORTED_MODULE_12__["TextareaEditorComponent"],
    _cell_view_mode_custom_view_component__WEBPACK_IMPORTED_MODULE_13__["CustomViewComponent"],
    _cell_view_mode_view_cell_component__WEBPACK_IMPORTED_MODULE_14__["ViewCellComponent"],
];
var CellModule = /** @class */ (function () {
    function CellModule() {
    }
    CellModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ng2_completer__WEBPACK_IMPORTED_MODULE_3__["Ng2CompleterModule"],
            ],
            declarations: CELL_COMPONENTS.slice(),
            exports: CELL_COMPONENTS.slice(),
        })
    ], CellModule);
    return CellModule;
}());



/***/ }),

/***/ "./src/ng2-smart-table/components/filter/filter-types/checkbox-filter.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/ng2-smart-table/components/filter/filter-types/checkbox-filter.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CheckboxFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxFilterComponent", function() { return CheckboxFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _default_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default-filter */ "./src/ng2-smart-table/components/filter/filter-types/default-filter.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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




var CheckboxFilterComponent = /** @class */ (function (_super) {
    __extends(CheckboxFilterComponent, _super);
    function CheckboxFilterComponent() {
        var _this = _super.call(this) || this;
        _this.filterActive = false;
        _this.inputControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        return _this;
    }
    CheckboxFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.changesSubscription = this.inputControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(this.delay))
            .subscribe(function (checked) {
            _this.filterActive = true;
            var trueVal = (_this.column.getFilterConfig() && _this.column.getFilterConfig().true) || true;
            var falseVal = (_this.column.getFilterConfig() && _this.column.getFilterConfig().false) || false;
            _this.query = checked ? trueVal : falseVal;
            _this.setFilter();
        });
    };
    CheckboxFilterComponent.prototype.resetFilter = function (event) {
        event.preventDefault();
        this.query = '';
        this.inputControl.setValue(false, { emitEvent: false });
        this.filterActive = false;
        this.setFilter();
    };
    CheckboxFilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'checkbox-filter',
            template: "\n    <input type=\"checkbox\" [formControl]=\"inputControl\" [ngClass]=\"inputClass\" class=\"form-control\">\n    <a href=\"#\" *ngIf=\"filterActive\"\n                (click)=\"resetFilter($event)\">{{column.getFilterConfig()?.resetText || 'reset'}}</a>\n  ",
        }),
        __metadata("design:paramtypes", [])
    ], CheckboxFilterComponent);
    return CheckboxFilterComponent;
}(_default_filter__WEBPACK_IMPORTED_MODULE_2__["DefaultFilter"]));



/***/ }),

/***/ "./src/ng2-smart-table/components/filter/filter-types/completer-filter.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/ng2-smart-table/components/filter/filter-types/completer-filter.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CompleterFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleterFilterComponent", function() { return CompleterFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ng2_completer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-completer */ "./node_modules/ng2-completer/index.js");
/* harmony import */ var _default_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default-filter */ "./src/ng2-smart-table/components/filter/filter-types/default-filter.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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





var CompleterFilterComponent = /** @class */ (function (_super) {
    __extends(CompleterFilterComponent, _super);
    function CompleterFilterComponent(completerService) {
        var _this = _super.call(this) || this;
        _this.completerService = completerService;
        _this.completerContent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        return _this;
    }
    CompleterFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        var config = this.column.getFilterConfig().completer;
        config.dataService = this.completerService.local(config.data, config.searchFields, config.titleField);
        config.dataService.descriptionField(config.descriptionField);
        this.changesSubscription = this.completerContent
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (ev) { return (ev && ev.title) || ev || ''; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(this.delay))
            .subscribe(function (search) {
            _this.query = search;
            _this.setFilter();
        });
    };
    CompleterFilterComponent.prototype.inputTextChanged = function (event) {
        // workaround to trigger the search event when the home/end buttons are clicked
        // when this happens the [(ngModel)]="query" is set to "" but the (selected) method is not called
        // so here it gets called manually
        if (event === '') {
            this.completerContent.next(event);
        }
    };
    CompleterFilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'completer-filter',
            template: "\n    <ng2-completer [(ngModel)]=\"query\"\n                   (ngModelChange)=\"inputTextChanged($event)\"\n                   [dataService]=\"column.getFilterConfig().completer.dataService\"\n                   [minSearchLength]=\"column.getFilterConfig().completer.minSearchLength || 0\"\n                   [pause]=\"column.getFilterConfig().completer.pause || 0\"\n                   [placeholder]=\"column.getFilterConfig().completer.placeholder || 'Start typing...'\"\n                   (selected)=\"completerContent.next($event)\">\n    </ng2-completer>\n  ",
        }),
        __metadata("design:paramtypes", [ng2_completer__WEBPACK_IMPORTED_MODULE_2__["CompleterService"]])
    ], CompleterFilterComponent);
    return CompleterFilterComponent;
}(_default_filter__WEBPACK_IMPORTED_MODULE_3__["DefaultFilter"]));



/***/ }),

/***/ "./src/ng2-smart-table/components/filter/filter-types/default-filter.ts":
/*!******************************************************************************!*\
  !*** ./src/ng2-smart-table/components/filter/filter-types/default-filter.ts ***!
  \******************************************************************************/
/*! exports provided: DefaultFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultFilter", function() { return DefaultFilter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lib_data_set_column__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/data-set/column */ "./src/ng2-smart-table/lib/data-set/column.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DefaultFilter = /** @class */ (function () {
    function DefaultFilter() {
        this.delay = 300;
        this.filter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DefaultFilter.prototype.ngOnDestroy = function () {
        if (this.changesSubscription) {
            this.changesSubscription.unsubscribe();
        }
    };
    DefaultFilter.prototype.setFilter = function () {
        this.filter.emit(this.query);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DefaultFilter.prototype, "query", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DefaultFilter.prototype, "inputClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _lib_data_set_column__WEBPACK_IMPORTED_MODULE_1__["Column"])
    ], DefaultFilter.prototype, "column", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DefaultFilter.prototype, "filter", void 0);
    return DefaultFilter;
}());



/***/ }),

/***/ "./src/ng2-smart-table/components/filter/filter-types/input-filter.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/ng2-smart-table/components/filter/filter-types/input-filter.component.ts ***!
  \**************************************************************************************/
/*! exports provided: InputFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputFilterComponent", function() { return InputFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _default_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default-filter */ "./src/ng2-smart-table/components/filter/filter-types/default-filter.ts");
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




var InputFilterComponent = /** @class */ (function (_super) {
    __extends(InputFilterComponent, _super);
    function InputFilterComponent() {
        var _this = _super.call(this) || this;
        _this.inputControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        return _this;
    }
    InputFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.query) {
            this.inputControl.setValue(this.query);
        }
        this.inputControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["skip"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(this.delay))
            .subscribe(function (value) {
            _this.query = _this.inputControl.value;
            _this.setFilter();
        });
    };
    InputFilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'input-filter',
            template: "\n    <input\n      [ngClass]=\"inputClass\"\n      [formControl]=\"inputControl\"\n      class=\"form-control\"\n      type=\"text\"\n      placeholder=\"{{ column.title }}\"/>\n  ",
        }),
        __metadata("design:paramtypes", [])
    ], InputFilterComponent);
    return InputFilterComponent;
}(_default_filter__WEBPACK_IMPORTED_MODULE_3__["DefaultFilter"]));



/***/ }),

/***/ "./src/ng2-smart-table/components/filter/filter-types/select-filter.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/ng2-smart-table/components/filter/filter-types/select-filter.component.ts ***!
  \***************************************************************************************/
/*! exports provided: SelectFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectFilterComponent", function() { return SelectFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _default_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default-filter */ "./src/ng2-smart-table/components/filter/filter-types/default-filter.ts");
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




var SelectFilterComponent = /** @class */ (function (_super) {
    __extends(SelectFilterComponent, _super);
    function SelectFilterComponent() {
        var _this = _super.call(this) || this;
        _this.inputControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        return _this;
    }
    SelectFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inputControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["skip"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(this.delay))
            .subscribe(function (value) { return _this.setFilter(); });
    };
    SelectFilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'select-filter',
            template: "\n    <select [ngClass]=\"inputClass\"\n            class=\"form-control\"\n            [(ngModel)]=\"query\"\n            [formControl]=\"inputControl\">\n\n        <option value=\"\">{{ column.getFilterConfig().selectText }}</option>\n        <option *ngFor=\"let option of column.getFilterConfig().list\" [value]=\"option.value\">\n          {{ option.title }}\n        </option>\n    </select>\n  ",
        }),
        __metadata("design:paramtypes", [])
    ], SelectFilterComponent);
    return SelectFilterComponent;
}(_default_filter__WEBPACK_IMPORTED_MODULE_3__["DefaultFilter"]));



/***/ }),

/***/ "./src/ng2-smart-table/components/filter/filter.component.scss":
/*!*********************************************************************!*\
  !*** ./src/ng2-smart-table/components/filter/filter.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .ng2-smart-filter /deep/ input,\n:host .ng2-smart-filter /deep/ select {\n  width: 100%;\n  line-height: normal;\n  padding: .375em .75em;\n  font-weight: normal; }\n\n:host .ng2-smart-filter /deep/ input[type=\"search\"] {\n  box-sizing: inherit; }\n\n:host .ng2-smart-filter /deep/ .completer-dropdown-holder {\n  font-weight: normal; }\n\n:host .ng2-smart-filter /deep/ a {\n  font-weight: normal; }\n"

/***/ }),

/***/ "./src/ng2-smart-table/components/filter/filter.component.ts":
/*!*******************************************************************!*\
  !*** ./src/ng2-smart-table/components/filter/filter.component.ts ***!
  \*******************************************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lib_data_source_data_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/data-source/data-source */ "./src/ng2-smart-table/lib/data-source/data-source.ts");
/* harmony import */ var _lib_data_set_column__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/data-set/column */ "./src/ng2-smart-table/lib/data-set/column.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FilterComponent = /** @class */ (function () {
    function FilterComponent() {
        this.inputClass = '';
        this.filter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.query = '';
    }
    FilterComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.source) {
            if (!changes.source.firstChange) {
                this.dataChangedSub.unsubscribe();
            }
            this.dataChangedSub = this.source.onChanged().subscribe(function (dataChanges) {
                var filterConf = _this.source.getFilter();
                if (filterConf && filterConf.filters && filterConf.filters.length === 0) {
                    _this.query = '';
                    // add a check for existing filters an set the query if one exists for this column
                    // this covers instances where the filter is set by user code while maintaining existing functionality
                }
                else if (filterConf && filterConf.filters && filterConf.filters.length > 0) {
                    filterConf.filters.forEach(function (k, v) {
                        if (k.field == _this.column.id) {
                            _this.query = k.search;
                        }
                    });
                }
            });
        }
    };
    FilterComponent.prototype.onFilter = function (query) {
        this.source.addFilter({
            field: this.column.id,
            search: query,
            filter: this.column.getFilterFunction(),
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _lib_data_set_column__WEBPACK_IMPORTED_MODULE_2__["Column"])
    ], FilterComponent.prototype, "column", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _lib_data_source_data_source__WEBPACK_IMPORTED_MODULE_1__["DataSource"])
    ], FilterComponent.prototype, "source", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FilterComponent.prototype, "inputClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FilterComponent.prototype, "filter", void 0);
    FilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ng2-smart-table-filter',
            styles: [__webpack_require__(/*! ./filter.component.scss */ "./src/ng2-smart-table/components/filter/filter.component.scss")],
            template: "\n    <div class=\"ng2-smart-filter\" *ngIf=\"column.isFilterable\" [ngSwitch]=\"column.getFilterType()\">\n      <select-filter *ngSwitchCase=\"'list'\"\n                     [query]=\"query\"\n                     [ngClass]=\"inputClass\"\n                     [column]=\"column\"\n                     (filter)=\"onFilter($event)\">\n      </select-filter>\n      <checkbox-filter *ngSwitchCase=\"'checkbox'\"\n                       [query]=\"query\"\n                       [ngClass]=\"inputClass\"\n                       [column]=\"column\"\n                       (filter)=\"onFilter($event)\">\n      </checkbox-filter>\n      <completer-filter *ngSwitchCase=\"'completer'\"\n                        [query]=\"query\"\n                        [ngClass]=\"inputClass\"\n                        [column]=\"column\"\n                        (filter)=\"onFilter($event)\">\n      </completer-filter>\n      <input-filter *ngSwitchDefault\n                    [query]=\"query\"\n                    [ngClass]=\"inputClass\"\n                    [column]=\"column\"\n                    (filter)=\"onFilter($event)\">\n      </input-filter>\n    </div>\n  ",
        })
    ], FilterComponent);
    return FilterComponent;
}());



/***/ }),

/***/ "./src/ng2-smart-table/components/filter/filter.module.ts":
/*!****************************************************************!*\
  !*** ./src/ng2-smart-table/components/filter/filter.module.ts ***!
  \****************************************************************/
/*! exports provided: FilterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterModule", function() { return FilterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_completer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-completer */ "./node_modules/ng2-completer/index.js");
/* harmony import */ var _filter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter.component */ "./src/ng2-smart-table/components/filter/filter.component.ts");
/* harmony import */ var _filter_types_checkbox_filter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter-types/checkbox-filter.component */ "./src/ng2-smart-table/components/filter/filter-types/checkbox-filter.component.ts");
/* harmony import */ var _filter_types_completer_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filter-types/completer-filter.component */ "./src/ng2-smart-table/components/filter/filter-types/completer-filter.component.ts");
/* harmony import */ var _filter_types_input_filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filter-types/input-filter.component */ "./src/ng2-smart-table/components/filter/filter-types/input-filter.component.ts");
/* harmony import */ var _filter_types_select_filter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./filter-types/select-filter.component */ "./src/ng2-smart-table/components/filter/filter-types/select-filter.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var FILTER_COMPONENTS = [
    _filter_component__WEBPACK_IMPORTED_MODULE_4__["FilterComponent"],
    _filter_types_checkbox_filter_component__WEBPACK_IMPORTED_MODULE_5__["CheckboxFilterComponent"],
    _filter_types_completer_filter_component__WEBPACK_IMPORTED_MODULE_6__["CompleterFilterComponent"],
    _filter_types_input_filter_component__WEBPACK_IMPORTED_MODULE_7__["InputFilterComponent"],
    _filter_types_select_filter_component__WEBPACK_IMPORTED_MODULE_8__["SelectFilterComponent"],
];
var FilterModule = /** @class */ (function () {
    function FilterModule() {
    }
    FilterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ng2_completer__WEBPACK_IMPORTED_MODULE_3__["Ng2CompleterModule"],
            ],
            declarations: FILTER_COMPONENTS.slice(),
            exports: FILTER_COMPONENTS.slice(),
        })
    ], FilterModule);
    return FilterModule;
}());



/***/ }),

/***/ "./src/ng2-smart-table/components/pager/pager.component.scss":
/*!*******************************************************************!*\
  !*** ./src/ng2-smart-table/components/pager/pager.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng2-smart-pagination {\n  display: inline-flex;\n  font-size: .875em;\n  padding: 0; }\n  .ng2-smart-pagination .sr-only {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    border: 0; }\n  .ng2-smart-pagination .ng2-smart-page-item {\n    display: inline; }\n  .ng2-smart-pagination .page-link-next, .ng2-smart-pagination .page-link-prev {\n    font-size: 10px; }\n  :host {\n  display: flex;\n  justify-content: space-between; }\n  :host select {\n    margin: 1rem 0 1rem 1rem; }\n  :host label {\n    margin: 1rem 0 1rem 1rem;\n    line-height: 2.5rem; }\n"

/***/ }),

/***/ "./src/ng2-smart-table/components/pager/pager.component.ts":
/*!*****************************************************************!*\
  !*** ./src/ng2-smart-table/components/pager/pager.component.ts ***!
  \*****************************************************************/
/*! exports provided: PagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagerComponent", function() { return PagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lib_data_source_data_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/data-source/data-source */ "./src/ng2-smart-table/lib/data-source/data-source.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PagerComponent = /** @class */ (function () {
    function PagerComponent() {
        this.perPageSelect = [];
        this.changePage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.count = 0;
    }
    PagerComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.source) {
            if (!changes.source.firstChange) {
                this.dataChangedSub.unsubscribe();
            }
            this.dataChangedSub = this.source.onChanged().subscribe(function (dataChanges) {
                _this.page = _this.source.getPaging().page;
                _this.perPage = _this.source.getPaging().perPage;
                _this.currentPerPage = _this.perPage;
                _this.count = _this.source.count();
                if (_this.isPageOutOfBounce()) {
                    _this.source.setPage(--_this.page);
                }
                _this.processPageChange(dataChanges);
                _this.initPages();
            });
        }
    };
    /**
     * We change the page here depending on the action performed against data source
     * if a new element was added to the end of the table - then change the page to the last
     * if a new element was added to the beginning of the table - then to the first page
     * @param changes
     */
    PagerComponent.prototype.processPageChange = function (changes) {
        if (changes['action'] === 'prepend') {
            this.source.setPage(1);
        }
        if (changes['action'] === 'append') {
            this.source.setPage(this.getLast());
        }
    };
    PagerComponent.prototype.shouldShow = function () {
        return this.source.count() > this.perPage;
    };
    PagerComponent.prototype.paginate = function (page) {
        this.source.setPage(page);
        this.page = page;
        this.changePage.emit({ page: page });
        return false;
    };
    PagerComponent.prototype.next = function () {
        return this.paginate(this.getPage() + 1);
    };
    PagerComponent.prototype.prev = function () {
        return this.paginate(this.getPage() - 1);
    };
    PagerComponent.prototype.getPage = function () {
        return this.page;
    };
    PagerComponent.prototype.getPages = function () {
        return this.pages;
    };
    PagerComponent.prototype.getLast = function () {
        return Math.ceil(this.count / this.perPage);
    };
    PagerComponent.prototype.isPageOutOfBounce = function () {
        return (this.page * this.perPage) >= (this.count + this.perPage) && this.page > 1;
    };
    PagerComponent.prototype.initPages = function () {
        var pagesCount = this.getLast();
        var showPagesCount = 4;
        showPagesCount = pagesCount < showPagesCount ? pagesCount : showPagesCount;
        this.pages = [];
        if (this.shouldShow()) {
            var middleOne = Math.ceil(showPagesCount / 2);
            middleOne = this.page >= middleOne ? this.page : middleOne;
            var lastOne = middleOne + Math.floor(showPagesCount / 2);
            lastOne = lastOne >= pagesCount ? pagesCount : lastOne;
            var firstOne = lastOne - showPagesCount + 1;
            for (var i = firstOne; i <= lastOne; i++) {
                this.pages.push(i);
            }
        }
    };
    PagerComponent.prototype.onChangePerPage = function (event) {
        if (this.currentPerPage) {
            if (typeof this.currentPerPage === 'string' && this.currentPerPage.toLowerCase() === 'all') {
                this.source.getPaging().perPage = null;
            }
            else {
                this.source.getPaging().perPage = this.currentPerPage * 1;
                this.source.refresh();
            }
            this.initPages();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _lib_data_source_data_source__WEBPACK_IMPORTED_MODULE_1__["DataSource"])
    ], PagerComponent.prototype, "source", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], PagerComponent.prototype, "perPageSelect", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PagerComponent.prototype, "changePage", void 0);
    PagerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ng2-smart-table-pager',
            styles: [__webpack_require__(/*! ./pager.component.scss */ "./src/ng2-smart-table/components/pager/pager.component.scss")],
            template: "\n    <nav *ngIf=\"shouldShow()\" class=\"ng2-smart-pagination-nav\">\n      <ul class=\"ng2-smart-pagination pagination\">\n        <li class=\"ng2-smart-page-item page-item\" [ngClass]=\"{disabled: getPage() == 1}\">\n          <a class=\"ng2-smart-page-link page-link\" href=\"#\"\n          (click)=\"getPage() == 1 ? false : paginate(1)\" aria-label=\"First\">\n            <span aria-hidden=\"true\">&laquo;</span>\n            <span class=\"sr-only\">First</span>\n          </a>\n        </li>\n        <li class=\"ng2-smart-page-item page-item\" [ngClass]=\"{disabled: getPage() == 1}\">\n          <a class=\"ng2-smart-page-link page-link page-link-prev\" href=\"#\"\n             (click)=\"getPage() == 1 ? false : prev()\" aria-label=\"Prev\">\n            <span aria-hidden=\"true\">&lt;</span>\n            <span class=\"sr-only\">Prev</span>\n          </a>\n        </li>\n        <li class=\"ng2-smart-page-item page-item\"\n        [ngClass]=\"{active: getPage() == page}\" *ngFor=\"let page of getPages()\">\n          <span class=\"ng2-smart-page-link page-link\"\n          *ngIf=\"getPage() == page\">{{ page }} <span class=\"sr-only\">(current)</span></span>\n          <a class=\"ng2-smart-page-link page-link\" href=\"#\"\n          (click)=\"paginate(page)\" *ngIf=\"getPage() != page\">{{ page }}</a>\n        </li>\n\n        <li class=\"ng2-smart-page-item page-item\"\n            [ngClass]=\"{disabled: getPage() == getLast()}\">\n          <a class=\"ng2-smart-page-link page-link page-link-next\" href=\"#\"\n             (click)=\"getPage() == getLast() ? false : next()\" aria-label=\"Next\">\n            <span aria-hidden=\"true\">&gt;</span>\n            <span class=\"sr-only\">Next</span>\n          </a>\n        </li>\n        \n        <li class=\"ng2-smart-page-item page-item\"\n        [ngClass]=\"{disabled: getPage() == getLast()}\">\n          <a class=\"ng2-smart-page-link page-link\" href=\"#\"\n          (click)=\"getPage() == getLast() ? false : paginate(getLast())\" aria-label=\"Last\">\n            <span aria-hidden=\"true\">&raquo;</span>\n            <span class=\"sr-only\">Last</span>\n          </a>\n        </li>\n      </ul>\n    </nav>\n    \n    <nav *ngIf=\"perPageSelect && perPageSelect.length > 0\" class=\"ng2-smart-pagination-per-page\">\n      <label for=\"per-page\">\n        Per Page:\n      </label>\n      <select (change)=\"onChangePerPage($event)\" [(ngModel)]=\"currentPerPage\" id=\"per-page\">\n        <option *ngFor=\"let item of perPageSelect\" [value]=\"item\">{{ item }}</option>\n      </select>\n    </nav>\n  ",
        })
    ], PagerComponent);
    return PagerComponent;
}());



/***/ }),

/***/ "./src/ng2-smart-table/components/pager/pager.module.ts":
/*!**************************************************************!*\
  !*** ./src/ng2-smart-table/components/pager/pager.module.ts ***!
  \**************************************************************/
/*! exports provided: PagerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagerModule", function() { return PagerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pager_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pager.component */ "./src/ng2-smart-table/components/pager/pager.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PagerModule = /** @class */ (function () {
    function PagerModule() {
    }
    PagerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            ],
            declarations: [
                _pager_component__WEBPACK_IMPORTED_MODULE_3__["PagerComponent"],
            ],
            exports: [
                _pager_component__WEBPACK_IMPORTED_MODULE_3__["PagerComponent"],
            ],
        })
    ], PagerModule);
    return PagerModule;
}());



/***/ }),

/***/ "./src/ng2-smart-table/components/tbody/cells/create-cancel.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/ng2-smart-table/components/tbody/cells/create-cancel.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TbodyCreateCancelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TbodyCreateCancelComponent", function() { return TbodyCreateCancelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lib_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/grid */ "./src/ng2-smart-table/lib/grid.ts");
/* harmony import */ var _lib_data_set_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/data-set/row */ "./src/ng2-smart-table/lib/data-set/row.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TbodyCreateCancelComponent = /** @class */ (function () {
    function TbodyCreateCancelComponent() {
    }
    TbodyCreateCancelComponent.prototype.onSave = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.grid.save(this.row, this.editConfirm);
    };
    TbodyCreateCancelComponent.prototype.onCancelEdit = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.row.isInEditing = false;
    };
    TbodyCreateCancelComponent.prototype.ngOnChanges = function () {
        this.saveButtonContent = this.grid.getSetting('edit.saveButtonContent');
        this.cancelButtonContent = this.grid.getSetting('edit.cancelButtonContent');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _lib_grid__WEBPACK_IMPORTED_MODULE_1__["Grid"])
    ], TbodyCreateCancelComponent.prototype, "grid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _lib_data_set_row__WEBPACK_IMPORTED_MODULE_2__["Row"])
    ], TbodyCreateCancelComponent.prototype, "row", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TbodyCreateCancelComponent.prototype, "editConfirm", void 0);
    TbodyCreateCancelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ng2-st-tbody-create-cancel',
            template: "\n    <a href=\"#\" class=\"ng2-smart-action ng2-smart-action-edit-save\"\n        [innerHTML]=\"saveButtonContent\" (click)=\"onSave($event)\"></a>\n    <a href=\"#\" class=\"ng2-smart-action ng2-smart-action-edit-cancel\"\n        [innerHTML]=\"cancelButtonContent\" (click)=\"onCancelEdit($event)\"></a>\n  ",
        })
    ], TbodyCreateCancelComponent);
    return TbodyCreateCancelComponent;
}());



/***/ }),

/***/ "./src/ng2-smart-table/components/tbody/cells/custom.component.ts":
/*!************************************************************************!*\
  !*** ./src/ng2-smart-table/components/tbody/cells/custom.component.ts ***!
  \************************************************************************/
/*! exports provided: TbodyCustomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TbodyCustomComponent", function() { return TbodyCustomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lib_data_set_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/data-set/row */ "./src/ng2-smart-table/lib/data-set/row.ts");
/* harmony import */ var _lib_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/grid */ "./src/ng2-smart-table/lib/grid.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TbodyCustomComponent = /** @class */ (function () {
    function TbodyCustomComponent() {
        this.custom = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TbodyCustomComponent.prototype.onCustom = function (action, event) {
        event.preventDefault();
        event.stopPropagation();
        this.custom.emit({
            action: action.name,
            data: this.row.getData(),
            source: this.source
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _lib_grid__WEBPACK_IMPORTED_MODULE_2__["Grid"])
    ], TbodyCustomComponent.prototype, "grid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _lib_data_set_row__WEBPACK_IMPORTED_MODULE_1__["Row"])
    ], TbodyCustomComponent.prototype, "row", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TbodyCustomComponent.prototype, "source", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TbodyCustomComponent.prototype, "custom", void 0);
    TbodyCustomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ng2-st-tbody-custom',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            template: "\n      <a *ngFor=\"let action of grid.getSetting('actions.custom')\" href=\"#\"\n         class=\"ng2-smart-action ng2-smart-action-custom-custom\" \n         [innerHTML]=\"action.title\"\n         (click)=\"onCustom(action, $event)\"></a>\n        "
        })
    ], TbodyCustomComponent);
    return TbodyCustomComponent;
}());



/***/ }),

/***/ "./src/ng2-smart-table/components/tbody/cells/edit-delete.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/ng2-smart-table/components/tbody/cells/edit-delete.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TbodyEditDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TbodyEditDeleteComponent", function() { return TbodyEditDeleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lib_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/grid */ "./src/ng2-smart-table/lib/grid.ts");
/* harmony import */ var _lib_data_set_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/data-set/row */ "./src/ng2-smart-table/lib/data-set/row.ts");
/* harmony import */ var _lib_data_source_data_source__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/data-source/data-source */ "./src/ng2-smart-table/lib/data-source/data-source.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TbodyEditDeleteComponent = /** @class */ (function () {
    function TbodyEditDeleteComponent() {
        this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editRowSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TbodyEditDeleteComponent.prototype.onEdit = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.editRowSelect.emit(this.row);
        if (this.grid.getSetting('mode') === 'external') {
            this.edit.emit({
                data: this.row.getData(),
                source: this.source,
            });
        }
        else {
            this.grid.edit(this.row);
        }
    };
    TbodyEditDeleteComponent.prototype.onDelete = function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.grid.getSetting('mode') === 'external') {
            this.delete.emit({
                data: this.row.getData(),
                source: this.source,
            });
        }
        else {
            this.grid.delete(this.row, this.deleteConfirm);
        }
    };
    TbodyEditDeleteComponent.prototype.ngOnChanges = function () {
        this.isActionEdit = this.grid.getSetting('actions.edit');
        this.isActionDelete = this.grid.getSetting('actions.delete');
        this.editRowButtonContent = this.grid.getSetting('edit.editButtonContent');
        this.deleteRowButtonContent = this.grid.getSetting('delete.deleteButtonContent');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _lib_grid__WEBPACK_IMPORTED_MODULE_1__["Grid"])
    ], TbodyEditDeleteComponent.prototype, "grid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _lib_data_set_row__WEBPACK_IMPORTED_MODULE_2__["Row"])
    ], TbodyEditDeleteComponent.prototype, "row", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _lib_data_source_data_source__WEBPACK_IMPORTED_MODULE_3__["DataSource"])
    ], TbodyEditDeleteComponent.prototype, "source", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TbodyEditDeleteComponent.prototype, "deleteConfirm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TbodyEditDeleteComponent.prototype, "editConfirm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TbodyEditDeleteComponent.prototype, "edit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TbodyEditDeleteComponent.prototype, "delete", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TbodyEditDeleteComponent.prototype, "editRowSelect", void 0);
    TbodyEditDeleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ng2-st-tbody-edit-delete',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            template: "\n    <a href=\"#\" *ngIf=\"isActionEdit\" class=\"ng2-smart-action ng2-smart-action-edit-edit\"\n        [innerHTML]=\"editRowButtonContent\" (click)=\"onEdit($event)\"></a>\n    <a href=\"#\" *ngIf=\"isActionDelete\" class=\"ng2-smart-action ng2-smart-action-delete-delete\"\n        [innerHTML]=\"deleteRowButtonContent\" (click)=\"onDelete($event)\"></a>\n  ",
        })
    ], TbodyEditDeleteComponent);
    return TbodyEditDeleteComponent;
}());



/***/ }),

/***/ "./src/ng2-smart-table/components/tbody/tbody.component.html":
/*!*******************************************************************!*\
  !*** ./src/ng2-smart-table/components/tbody/tbody.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tr *ngFor=\"let row of grid.getRows()\" (click)=\"userSelectRow.emit(row)\" (mouseover)=\"rowHover.emit(row)\" class=\"ng2-smart-row\" [className]=\"rowClassFunction(row)\" [ngClass]=\"{selected: row.isSelected}\">\n  <td *ngIf=\"isMultiSelectVisible\" class=\"ng2-smart-actions ng2-smart-action-multiple-select\" (click)=\"multipleSelectRow.emit(row)\">\n    <input type=\"checkbox\" class=\"form-control\" [ngModel]=\"row.isSelected\">\n  </td>\n  <td *ngIf=\"!row.isInEditing && showActionColumnLeft\" class=\"ng2-smart-actions\">\n    <ng2-st-tbody-custom [grid]=\"grid\" (custom)=\"custom.emit($event)\" [row]=\"row\" [source]=\"source\"></ng2-st-tbody-custom>\n\n    <ng2-st-tbody-edit-delete [grid]=\"grid\"\n                              [deleteConfirm]=\"deleteConfirm\"\n                              [editConfirm]=\"editConfirm\"\n                              (edit)=\"edit.emit(row)\"\n                              (delete)=\"delete.emit(row)\"\n                              (editRowSelect)=\"editRowSelect.emit($event)\"\n                              [row]=\"row\"\n                              [source]=\"source\">\n    </ng2-st-tbody-edit-delete>\n  </td>\n   <td *ngIf=\"row.isInEditing && showActionColumnLeft\"  class=\"ng2-smart-actions\">\n    <ng2-st-tbody-create-cancel [grid]=\"grid\" [row]=\"row\" [editConfirm]=\"editConfirm\"></ng2-st-tbody-create-cancel>\n  </td>\n  <td *ngFor=\"let cell of row.cells\">\n    <ng2-smart-table-cell [cell]=\"cell\"\n                          [grid]=\"grid\"\n                          [row]=\"row\"\n                          [isNew]=\"false\"\n                          [mode]=\"mode\"\n                          [editConfirm]=\"editConfirm\"\n                          [inputClass]=\"editInputClass\"\n                          [isInEditing]=\"row.isInEditing\">\n    </ng2-smart-table-cell>\n  </td>\n\n  <td *ngIf=\"row.isInEditing && showActionColumnRight\"  class=\"ng2-smart-actions\">\n    <ng2-st-tbody-create-cancel [grid]=\"grid\" [row]=\"row\" [editConfirm]=\"editConfirm\"></ng2-st-tbody-create-cancel>\n  </td>\n\n  <td *ngIf=\"!row.isInEditing && showActionColumnRight\" class=\"ng2-smart-actions\">\n    <ng2-st-tbody-custom [grid]=\"grid\" (custom)=\"custom.emit($event)\" [row]=\"row\" [source]=\"source\"></ng2-st-tbody-custom>\n\n    <ng2-st-tbody-edit-delete [grid]=\"grid\"\n                              [deleteConfirm]=\"deleteConfirm\"\n                              [editConfirm]=\"editConfirm\"\n                              [row]=\"row\"\n                              [source]=\"source\"\n                              (edit)=\"edit.emit(row)\"\n                              (delete)=\"delete.emit(row)\"\n                              (editRowSelect)=\"editRowSelect.emit($event)\">\n    </ng2-st-tbody-edit-delete>\n  </td>\n</tr>\n\n<tr *ngIf=\"grid.getRows().length == 0\">\n  <td [attr.colspan]=\"grid.getColumns().length + (isActionAdd || isActionEdit || isActionDelete)\">\n    {{ noDataMessage }}\n  </td>\n</tr>\n"

/***/ }),

/***/ "./src/ng2-smart-table/components/tbody/tbody.component.scss":
/*!*******************************************************************!*\
  !*** ./src/ng2-smart-table/components/tbody/tbody.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .ng2-smart-row.selected {\n  background: rgba(0, 0, 0, 0.05); }\n\n:host .ng2-smart-row .ng2-smart-actions.ng2-smart-action-multiple-select {\n  text-align: center; }\n"

/***/ }),

/***/ "./src/ng2-smart-table/components/tbody/tbody.component.ts":
/*!*****************************************************************!*\
  !*** ./src/ng2-smart-table/components/tbody/tbody.component.ts ***!
  \*****************************************************************/
/*! exports provided: Ng2SmartTableTbodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2SmartTableTbodyComponent", function() { return Ng2SmartTableTbodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lib_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/grid */ "./src/ng2-smart-table/lib/grid.ts");
/* harmony import */ var _lib_data_source_data_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/data-source/data-source */ "./src/ng2-smart-table/lib/data-source/data-source.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Ng2SmartTableTbodyComponent = /** @class */ (function () {
    function Ng2SmartTableTbodyComponent() {
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.custom = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.edited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.userSelectRow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editRowSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.multipleSelectRow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rowHover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Ng2SmartTableTbodyComponent.prototype.ngOnChanges = function () {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.mode = this.grid.getSetting('mode');
        this.editInputClass = this.grid.getSetting('edit.inputClass');
        this.showActionColumnRight = this.grid.showActionColumn('right');
        this.isActionAdd = this.grid.getSetting('actions.add');
        this.isActionEdit = this.grid.getSetting('actions.edit');
        this.isActionDelete = this.grid.getSetting('actions.delete');
        this.noDataMessage = this.grid.getSetting('noDataMessage');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _lib_grid__WEBPACK_IMPORTED_MODULE_1__["Grid"])
    ], Ng2SmartTableTbodyComponent.prototype, "grid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _lib_data_source_data_source__WEBPACK_IMPORTED_MODULE_2__["DataSource"])
    ], Ng2SmartTableTbodyComponent.prototype, "source", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], Ng2SmartTableTbodyComponent.prototype, "deleteConfirm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], Ng2SmartTableTbodyComponent.prototype, "editConfirm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], Ng2SmartTableTbodyComponent.prototype, "rowClassFunction", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], Ng2SmartTableTbodyComponent.prototype, "save", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], Ng2SmartTableTbodyComponent.prototype, "cancel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], Ng2SmartTableTbodyComponent.prototype, "edit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], Ng2SmartTableTbodyComponent.prototype, "delete", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], Ng2SmartTableTbodyComponent.prototype, "custom", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], Ng2SmartTableTbodyComponent.prototype, "edited", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], Ng2SmartTableTbodyComponent.prototype, "userSelectRow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], Ng2SmartTableTbodyComponent.prototype, "editRowSelect", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], Ng2SmartTableTbodyComponent.prototype, "multipleSelectRow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], Ng2SmartTableTbodyComponent.prototype, "rowHover", void 0);
    Ng2SmartTableTbodyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[ng2-st-tbody]',
            styles: [__webpack_require__(/*! ./tbody.component.scss */ "./src/ng2-smart-table/components/tbody/tbody.component.scss")],
            template: __webpack_require__(/*! ./tbody.component.html */ "./src/ng2-smart-table/components/tbody/tbody.component.html"),
        })
    ], Ng2SmartTableTbodyComponent);
    return Ng2SmartTableTbodyComponent;
}());



/***/ }),

/***/ "./src/ng2-smart-table/components/tbody/tbody.module.ts":
/*!**************************************************************!*\
  !*** ./src/ng2-smart-table/components/tbody/tbody.module.ts ***!
  \**************************************************************/
/*! exports provided: TBodyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TBodyModule", function() { return TBodyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _cell_cell_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cell/cell.module */ "./src/ng2-smart-table/components/cell/cell.module.ts");
/* harmony import */ var _tbody_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tbody.component */ "./src/ng2-smart-table/components/tbody/tbody.component.ts");
/* harmony import */ var _cells_create_cancel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cells/create-cancel.component */ "./src/ng2-smart-table/components/tbody/cells/create-cancel.component.ts");
/* harmony import */ var _cells_edit_delete_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cells/edit-delete.component */ "./src/ng2-smart-table/components/tbody/cells/edit-delete.component.ts");
/* harmony import */ var _cells_custom_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cells/custom.component */ "./src/ng2-smart-table/components/tbody/cells/custom.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var TBODY_COMPONENTS = [
    _cells_create_cancel_component__WEBPACK_IMPORTED_MODULE_5__["TbodyCreateCancelComponent"],
    _cells_edit_delete_component__WEBPACK_IMPORTED_MODULE_6__["TbodyEditDeleteComponent"],
    _cells_custom_component__WEBPACK_IMPORTED_MODULE_7__["TbodyCustomComponent"],
    _tbody_component__WEBPACK_IMPORTED_MODULE_4__["Ng2SmartTableTbodyComponent"]
];
var TBodyModule = /** @class */ (function () {
    function TBodyModule() {
    }
    TBodyModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _cell_cell_module__WEBPACK_IMPORTED_MODULE_3__["CellModule"],
            ],
            declarations: TBODY_COMPONENTS.slice(),
            exports: TBODY_COMPONENTS.slice(),
        })
    ], TBodyModule);
    return TBodyModule;
}());



/***/ }),

/***/ "./src/ng2-smart-table/components/thead/cells/actions-title.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/ng2-smart-table/components/thead/cells/actions-title.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ActionsTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsTitleComponent", function() { return ActionsTitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lib_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/grid */ "./src/ng2-smart-table/lib/grid.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActionsTitleComponent = /** @class */ (function () {
    function ActionsTitleComponent(ref) {
        this.ref = ref;
    }
    ActionsTitleComponent.prototype.ngAfterViewInit = function () {
        this.ref.nativeElement.classList.add('ng2-smart-actions');
    };
    ActionsTitleComponent.prototype.ngOnChanges = function () {
        this.actionsColumnTitle = this.grid.getSetting('actions.columnTitle');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _lib_grid__WEBPACK_IMPORTED_MODULE_1__["Grid"])
    ], ActionsTitleComponent.prototype, "grid", void 0);
    ActionsTitleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[ng2-st-actions-title]',
            template: "\n    <div class=\"ng2-smart-title\">{{ actionsColumnTitle }}</div>\n  ",
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ActionsTitleComponent);
    return ActionsTitleComponent;
}());



/***/ }),

/***/ "./src/ng2-smart-table/components/thead/cells/actions.component.ts":
/*!*************************************************************************!*\
  !*** ./src/ng2-smart-table/components/thead/cells/actions.component.ts ***!
  \*************************************************************************/
/*! exports provided: ActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsComponent", function() { return ActionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lib_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/grid */ "./src/ng2-smart-table/lib/grid.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActionsComponent = /** @class */ (function () {
    function ActionsComponent() {
        this.create = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ActionsComponent.prototype.ngOnChanges = function () {
        this.createButtonContent = this.grid.getSetting('add.createButtonContent');
        this.cancelButtonContent = this.grid.getSetting('add.cancelButtonContent');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _lib_grid__WEBPACK_IMPORTED_MODULE_1__["Grid"])
    ], ActionsComponent.prototype, "grid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ActionsComponent.prototype, "create", void 0);
    ActionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ng2-st-actions',
            template: "\n    <a href=\"#\" class=\"ng2-smart-action ng2-smart-action-add-create\"\n        [innerHTML]=\"createButtonContent\"\n        (click)=\"$event.preventDefault();create.emit($event)\"></a>\n    <a href=\"#\" class=\"ng2-smart-action ng2-smart-action-add-cancel\"\n        [innerHTML]=\"cancelButtonContent\"\n        (click)=\"$event.preventDefault();grid.createFormShown = false;\"></a>\n  ",
        })
    ], ActionsComponent);
    return ActionsComponent;
}());



/***/ }),

/***/ "./src/ng2-smart-table/components/thead/cells/add-button.component.ts":
/*!****************************************************************************!*\
  !*** ./src/ng2-smart-table/components/thead/cells/add-button.component.ts ***!
  \****************************************************************************/
/*! exports provided: AddButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddButtonComponent", function() { return AddButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lib_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/grid */ "./src/ng2-smart-table/lib/grid.ts");
/* harmony import */ var _lib_data_source_data_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/data-source/data-source */ "./src/ng2-smart-table/lib/data-source/data-source.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddButtonComponent = /** @class */ (function () {
    function AddButtonComponent(ref) {
        this.ref = ref;
        this.create = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AddButtonComponent.prototype.ngAfterViewInit = function () {
        this.ref.nativeElement.classList.add('ng2-smart-actions-title', 'ng2-smart-actions-title-add');
    };
    AddButtonComponent.prototype.ngOnChanges = function () {
        this.isActionAdd = this.grid.getSetting('actions.add');
        this.addNewButtonContent = this.grid.getSetting('add.addButtonContent');
    };
    AddButtonComponent.prototype.onAdd = function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.grid.getSetting('mode') === 'external') {
            this.create.emit({
                source: this.source,
            });
        }
        else {
            this.grid.createFormShown = true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _lib_grid__WEBPACK_IMPORTED_MODULE_1__["Grid"])
    ], AddButtonComponent.prototype, "grid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _lib_data_source_data_source__WEBPACK_IMPORTED_MODULE_2__["DataSource"])
    ], AddButtonComponent.prototype, "source", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AddButtonComponent.prototype, "create", void 0);
    AddButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[ng2-st-add-button]',
            template: "\n    <a *ngIf=\"isActionAdd\" href=\"#\" class=\"ng2-smart-action ng2-smart-action-add-add\"\n        [innerHTML]=\"addNewButtonContent\" (click)=\"onAdd($event)\"></a>\n  ",
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], AddButtonComponent);
    return AddButtonComponent;
}());



/***/ }),

/***/ "./src/ng2-smart-table/components/thead/cells/checkbox-select-all.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/ng2-smart-table/components/thead/cells/checkbox-select-all.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CheckboxSelectAllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxSelectAllComponent", function() { return CheckboxSelectAllComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lib_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/grid */ "./src/ng2-smart-table/lib/grid.ts");
/* harmony import */ var _lib_data_source_data_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/data-source/data-source */ "./src/ng2-smart-table/lib/data-source/data-source.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CheckboxSelectAllComponent = /** @class */ (function () {
    function CheckboxSelectAllComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _lib_grid__WEBPACK_IMPORTED_MODULE_1__["Grid"])
    ], CheckboxSelectAllComponent.prototype, "grid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _lib_data_source_data_source__WEBPACK_IMPORTED_MODULE_2__["DataSource"])
    ], CheckboxSelectAllComponent.prototype, "source", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CheckboxSelectAllComponent.prototype, "isAllSelected", void 0);
    CheckboxSelectAllComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[ng2-st-checkbox-select-all]',
            template: "\n    <input type=\"checkbox\" [ngModel]=\"isAllSelected\">\n  ",
        })
    ], CheckboxSelectAllComponent);
    return CheckboxSelectAllComponent;
}());



/***/ }),

/***/ "./src/ng2-smart-table/components/thead/cells/column-title.component.ts":
/*!******************************************************************************!*\
  !*** ./src/ng2-smart-table/components/thead/cells/column-title.component.ts ***!
  \******************************************************************************/
/*! exports provided: ColumnTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnTitleComponent", function() { return ColumnTitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lib_data_set_column__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/data-set/column */ "./src/ng2-smart-table/lib/data-set/column.ts");
/* harmony import */ var _lib_data_source_data_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/data-source/data-source */ "./src/ng2-smart-table/lib/data-source/data-source.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ColumnTitleComponent = /** @class */ (function () {
    function ColumnTitleComponent() {
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _lib_data_set_column__WEBPACK_IMPORTED_MODULE_1__["Column"])
    ], ColumnTitleComponent.prototype, "column", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _lib_data_source_data_source__WEBPACK_IMPORTED_MODULE_2__["DataSource"])
    ], ColumnTitleComponent.prototype, "source", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ColumnTitleComponent.prototype, "sort", void 0);
    ColumnTitleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ng2-st-column-title',
            template: "\n    <div class=\"ng2-smart-title\">\n      <ng2-smart-table-title [source]=\"source\" [column]=\"column\" (sort)=\"sort.emit($event)\"></ng2-smart-table-title>\n    </div>\n  ",
        })
    ], ColumnTitleComponent);
    return ColumnTitleComponent;
}());



/***/ }),

/***/ "./src/ng2-smart-table/components/thead/cells/title/title.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/ng2-smart-table/components/thead/cells/title/title.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a.sort.asc, a.sort.desc {\n  font-weight: bold; }\n  a.sort.asc::after, a.sort.desc::after {\n    content: '';\n    display: inline-block;\n    width: 0;\n    height: 0;\n    border-bottom: 4px solid rgba(0, 0, 0, 0.3);\n    border-top: 4px solid transparent;\n    border-left: 4px solid transparent;\n    border-right: 4px solid transparent;\n    margin-bottom: 2px; }\n  a.sort.desc::after {\n  -webkit-transform: rotate(-180deg);\n  transform: rotate(-180deg);\n  margin-bottom: -2px; }\n"

/***/ }),

/***/ "./src/ng2-smart-table/components/thead/cells/title/title.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/ng2-smart-table/components/thead/cells/title/title.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleComponent", function() { return TitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lib_data_source_data_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../lib/data-source/data-source */ "./src/ng2-smart-table/lib/data-source/data-source.ts");
/* harmony import */ var _lib_data_set_column__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../lib/data-set/column */ "./src/ng2-smart-table/lib/data-set/column.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TitleComponent = /** @class */ (function () {
    function TitleComponent() {
        this.currentDirection = '';
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TitleComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.source) {
            if (!changes.source.firstChange) {
                this.dataChangedSub.unsubscribe();
            }
            this.dataChangedSub = this.source.onChanged().subscribe(function (dataChanges) {
                var sortConf = _this.source.getSort();
                if (sortConf.length > 0 && sortConf[0]['field'] === _this.column.id) {
                    _this.currentDirection = sortConf[0]['direction'];
                }
                else {
                    _this.currentDirection = '';
                }
                sortConf.forEach(function (fieldConf) {
                });
            });
        }
    };
    TitleComponent.prototype._sort = function (event) {
        event.preventDefault();
        this.changeSortDirection();
        this.source.setSort([
            {
                field: this.column.id,
                direction: this.currentDirection,
                compare: this.column.getCompareFunction(),
            },
        ]);
        this.sort.emit(null);
    };
    TitleComponent.prototype.changeSortDirection = function () {
        if (this.currentDirection) {
            var newDirection = this.currentDirection === 'asc' ? 'desc' : 'asc';
            this.currentDirection = newDirection;
        }
        else {
            this.currentDirection = this.column.sortDirection;
        }
        return this.currentDirection;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _lib_data_set_column__WEBPACK_IMPORTED_MODULE_2__["Column"])
    ], TitleComponent.prototype, "column", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _lib_data_source_data_source__WEBPACK_IMPORTED_MODULE_1__["DataSource"])
    ], TitleComponent.prototype, "source", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TitleComponent.prototype, "sort", void 0);
    TitleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ng2-smart-table-title',
            styles: [__webpack_require__(/*! ./title.component.scss */ "./src/ng2-smart-table/components/thead/cells/title/title.component.scss")],
            template: "\n    <a href=\"#\" *ngIf=\"column.isSortable\"\n                (click)=\"_sort($event, column)\"\n                class=\"ng2-smart-sort-link sort\"\n                [ngClass]=\"currentDirection\">\n      {{ column.title }}\n    </a>\n    <span class=\"ng2-smart-sort\" *ngIf=\"!column.isSortable\">{{ column.title }}</span>\n  ",
        })
    ], TitleComponent);
    return TitleComponent;
}());



/***/ }),

/***/ "./src/ng2-smart-table/components/thead/rows/thead-filters-row.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/ng2-smart-table/components/thead/rows/thead-filters-row.component.ts ***!
  \**********************************************************************************/
/*! exports provided: TheadFitlersRowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TheadFitlersRowComponent", function() { return TheadFitlersRowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lib_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/grid */ "./src/ng2-smart-table/lib/grid.ts");
/* harmony import */ var _lib_data_source_data_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/data-source/data-source */ "./src/ng2-smart-table/lib/data-source/data-source.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TheadFitlersRowComponent = /** @class */ (function () {
    function TheadFitlersRowComponent() {
        this.create = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.filter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TheadFitlersRowComponent.prototype.ngOnChanges = function () {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
        this.filterInputClass = this.grid.getSetting('filter.inputClass');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _lib_grid__WEBPACK_IMPORTED_MODULE_1__["Grid"])
    ], TheadFitlersRowComponent.prototype, "grid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _lib_data_source_data_source__WEBPACK_IMPORTED_MODULE_2__["DataSource"])
    ], TheadFitlersRowComponent.prototype, "source", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TheadFitlersRowComponent.prototype, "create", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TheadFitlersRowComponent.prototype, "filter", void 0);
    TheadFitlersRowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[ng2-st-thead-filters-row]',
            template: "\n    <th *ngIf=\"isMultiSelectVisible\"></th>\n    <th ng2-st-add-button *ngIf=\"showActionColumnLeft\"\n                          [grid]=\"grid\"\n                          (create)=\"create.emit($event)\">\n    </th>\n    <th *ngFor=\"let column of grid.getColumns()\" class=\"ng2-smart-th {{ column.id }}\">\n      <ng2-smart-table-filter [source]=\"source\"\n                              [column]=\"column\"\n                              [inputClass]=\"filterInputClass\"\n                              (filter)=\"filter.emit($event)\">\n      </ng2-smart-table-filter>\n    </th>\n    <th ng2-st-add-button *ngIf=\"showActionColumnRight\"\n                          [grid]=\"grid\"\n                          [source]=\"source\"\n                          (create)=\"create.emit($event)\">\n    </th>\n  ",
        })
    ], TheadFitlersRowComponent);
    return TheadFitlersRowComponent;
}());



/***/ }),

/***/ "./src/ng2-smart-table/components/thead/rows/thead-form-row.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/ng2-smart-table/components/thead/rows/thead-form-row.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TheadFormRowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TheadFormRowComponent", function() { return TheadFormRowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lib_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/grid */ "./src/ng2-smart-table/lib/grid.ts");
/* harmony import */ var _lib_data_set_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/data-set/row */ "./src/ng2-smart-table/lib/data-set/row.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TheadFormRowComponent = /** @class */ (function () {
    function TheadFormRowComponent() {
        this.create = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TheadFormRowComponent.prototype.onCreate = function (event) {
        event.stopPropagation();
        this.grid.create(this.grid.getNewRow(), this.createConfirm);
    };
    TheadFormRowComponent.prototype.ngOnChanges = function () {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
        this.addInputClass = this.grid.getSetting('add.inputClass');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _lib_grid__WEBPACK_IMPORTED_MODULE_1__["Grid"])
    ], TheadFormRowComponent.prototype, "grid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _lib_data_set_row__WEBPACK_IMPORTED_MODULE_2__["Row"])
    ], TheadFormRowComponent.prototype, "row", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TheadFormRowComponent.prototype, "createConfirm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TheadFormRowComponent.prototype, "create", void 0);
    TheadFormRowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[ng2-st-thead-form-row]',
            template: "\n      <td *ngIf=\"\"></td>\n      <td  *ngIf=\"showActionColumnLeft\"  class=\"ng2-smart-actions\">\n        <ng2-st-actions [grid]=\"grid\" (create)=\"onCreate($event)\"></ng2-st-actions>\n      </td>\n      <td *ngFor=\"let cell of grid.getNewRow().getCells()\">\n        <ng2-smart-table-cell [cell]=\"cell\"\n                              [grid]=\"grid\"\n                              [isNew]=\"true\"\n                              [createConfirm]=\"createConfirm\"\n                              [inputClass]=\"addInputClass\"\n                              [isInEditing]=\"grid.getNewRow().isInEditing\"\n                              (edited)=\"onCreate($event)\">\n        </ng2-smart-table-cell>\n      </td>\n      <td  *ngIf=\"showActionColumnRight\"  class=\"ng2-smart-actions\">\n        <ng2-st-actions [grid]=\"grid\" (create)=\"onCreate($event)\"></ng2-st-actions>\n      </td>\n  ",
        })
    ], TheadFormRowComponent);
    return TheadFormRowComponent;
}());



/***/ }),

/***/ "./src/ng2-smart-table/components/thead/rows/thead-titles-row.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/ng2-smart-table/components/thead/rows/thead-titles-row.component.ts ***!
  \*********************************************************************************/
/*! exports provided: TheadTitlesRowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TheadTitlesRowComponent", function() { return TheadTitlesRowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lib_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/grid */ "./src/ng2-smart-table/lib/grid.ts");
/* harmony import */ var _lib_data_source_data_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/data-source/data-source */ "./src/ng2-smart-table/lib/data-source/data-source.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TheadTitlesRowComponent = /** @class */ (function () {
    function TheadTitlesRowComponent() {
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectAllRows = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TheadTitlesRowComponent.prototype.ngOnChanges = function () {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _lib_grid__WEBPACK_IMPORTED_MODULE_1__["Grid"])
    ], TheadTitlesRowComponent.prototype, "grid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TheadTitlesRowComponent.prototype, "isAllSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _lib_data_source_data_source__WEBPACK_IMPORTED_MODULE_2__["DataSource"])
    ], TheadTitlesRowComponent.prototype, "source", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TheadTitlesRowComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TheadTitlesRowComponent.prototype, "selectAllRows", void 0);
    TheadTitlesRowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[ng2-st-thead-titles-row]',
            template: "\n    <th ng2-st-checkbox-select-all *ngIf=\"isMultiSelectVisible\"\n                                   [grid]=\"grid\"\n                                   [source]=\"source\"\n                                   [isAllSelected]=\"isAllSelected\"\n                                   (click)=\"selectAllRows.emit($event)\">\n    </th>\n    <th ng2-st-actions-title *ngIf=\"showActionColumnLeft\" [grid]=\"grid\"></th>\n    <th *ngFor=\"let column of grid.getColumns()\" class=\"ng2-smart-th {{ column.id }}\" [ngClass]=\"column.class\"\n      [style.width]=\"column.width\" >\n      <ng2-st-column-title [source]=\"source\" [column]=\"column\" (sort)=\"sort.emit($event)\"></ng2-st-column-title>\n    </th>\n    <th ng2-st-actions-title *ngIf=\"showActionColumnRight\" [grid]=\"grid\"></th>\n  ",
        })
    ], TheadTitlesRowComponent);
    return TheadTitlesRowComponent;
}());



/***/ }),

/***/ "./src/ng2-smart-table/components/thead/thead.component.html":
/*!*******************************************************************!*\
  !*** ./src/ng2-smart-table/components/thead/thead.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tr ng2-st-thead-titles-row *ngIf=\"!isHideHeader\"\n                            class=\"ng2-smart-titles\"\n                            [grid]=\"grid\"\n                            [isAllSelected]=\"isAllSelected\"\n                            [source]=\"source\"\n                            (sort)=\"sort.emit($event)\"\n                            (selectAllRows)=\"selectAllRows.emit($event)\">\n</tr>\n\n<tr ng2-st-thead-filters-row *ngIf=\"!isHideSubHeader\"\n                              class=\"ng2-smart-filters\"\n                              [grid]=\"grid\"\n                              [source]=\"source\"\n                              (create)=\"create.emit($event)\"\n                              (filter)=\"filter.emit($event)\">\n</tr>\n\n<tr ng2-st-thead-form-row *ngIf=\"grid.createFormShown\"\n                          [grid]=\"grid\"\n                          [createConfirm]=\"createConfirm\">\n</tr>\n"

/***/ }),

/***/ "./src/ng2-smart-table/components/thead/thead.component.ts":
/*!*****************************************************************!*\
  !*** ./src/ng2-smart-table/components/thead/thead.component.ts ***!
  \*****************************************************************/
/*! exports provided: Ng2SmartTableTheadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2SmartTableTheadComponent", function() { return Ng2SmartTableTheadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lib_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/grid */ "./src/ng2-smart-table/lib/grid.ts");
/* harmony import */ var _lib_data_source_data_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/data-source/data-source */ "./src/ng2-smart-table/lib/data-source/data-source.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Ng2SmartTableTheadComponent = /** @class */ (function () {
    function Ng2SmartTableTheadComponent() {
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectAllRows = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.create = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.filter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Ng2SmartTableTheadComponent.prototype.ngOnChanges = function () {
        this.isHideHeader = this.grid.getSetting('hideHeader');
        this.isHideSubHeader = this.grid.getSetting('hideSubHeader');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _lib_grid__WEBPACK_IMPORTED_MODULE_1__["Grid"])
    ], Ng2SmartTableTheadComponent.prototype, "grid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _lib_data_source_data_source__WEBPACK_IMPORTED_MODULE_2__["DataSource"])
    ], Ng2SmartTableTheadComponent.prototype, "source", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], Ng2SmartTableTheadComponent.prototype, "isAllSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], Ng2SmartTableTheadComponent.prototype, "createConfirm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], Ng2SmartTableTheadComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], Ng2SmartTableTheadComponent.prototype, "selectAllRows", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], Ng2SmartTableTheadComponent.prototype, "create", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], Ng2SmartTableTheadComponent.prototype, "filter", void 0);
    Ng2SmartTableTheadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[ng2-st-thead]',
            template: __webpack_require__(/*! ./thead.component.html */ "./src/ng2-smart-table/components/thead/thead.component.html"),
        })
    ], Ng2SmartTableTheadComponent);
    return Ng2SmartTableTheadComponent;
}());



/***/ }),

/***/ "./src/ng2-smart-table/components/thead/thead.module.ts":
/*!**************************************************************!*\
  !*** ./src/ng2-smart-table/components/thead/thead.module.ts ***!
  \**************************************************************/
/*! exports provided: THeadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THeadModule", function() { return THeadModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _filter_filter_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../filter/filter.module */ "./src/ng2-smart-table/components/filter/filter.module.ts");
/* harmony import */ var _cell_cell_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cell/cell.module */ "./src/ng2-smart-table/components/cell/cell.module.ts");
/* harmony import */ var _thead_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./thead.component */ "./src/ng2-smart-table/components/thead/thead.component.ts");
/* harmony import */ var _cells_actions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cells/actions.component */ "./src/ng2-smart-table/components/thead/cells/actions.component.ts");
/* harmony import */ var _cells_actions_title_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cells/actions-title.component */ "./src/ng2-smart-table/components/thead/cells/actions-title.component.ts");
/* harmony import */ var _cells_add_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cells/add-button.component */ "./src/ng2-smart-table/components/thead/cells/add-button.component.ts");
/* harmony import */ var _cells_checkbox_select_all_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cells/checkbox-select-all.component */ "./src/ng2-smart-table/components/thead/cells/checkbox-select-all.component.ts");
/* harmony import */ var _cells_column_title_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cells/column-title.component */ "./src/ng2-smart-table/components/thead/cells/column-title.component.ts");
/* harmony import */ var _cells_title_title_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cells/title/title.component */ "./src/ng2-smart-table/components/thead/cells/title/title.component.ts");
/* harmony import */ var _rows_thead_filters_row_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./rows/thead-filters-row.component */ "./src/ng2-smart-table/components/thead/rows/thead-filters-row.component.ts");
/* harmony import */ var _rows_thead_form_row_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./rows/thead-form-row.component */ "./src/ng2-smart-table/components/thead/rows/thead-form-row.component.ts");
/* harmony import */ var _rows_thead_titles_row_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./rows/thead-titles-row.component */ "./src/ng2-smart-table/components/thead/rows/thead-titles-row.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var THEAD_COMPONENTS = [
    _cells_actions_component__WEBPACK_IMPORTED_MODULE_6__["ActionsComponent"],
    _cells_actions_title_component__WEBPACK_IMPORTED_MODULE_7__["ActionsTitleComponent"],
    _cells_add_button_component__WEBPACK_IMPORTED_MODULE_8__["AddButtonComponent"],
    _cells_checkbox_select_all_component__WEBPACK_IMPORTED_MODULE_9__["CheckboxSelectAllComponent"],
    _cells_column_title_component__WEBPACK_IMPORTED_MODULE_10__["ColumnTitleComponent"],
    _cells_title_title_component__WEBPACK_IMPORTED_MODULE_11__["TitleComponent"],
    _rows_thead_filters_row_component__WEBPACK_IMPORTED_MODULE_12__["TheadFitlersRowComponent"],
    _rows_thead_form_row_component__WEBPACK_IMPORTED_MODULE_13__["TheadFormRowComponent"],
    _rows_thead_titles_row_component__WEBPACK_IMPORTED_MODULE_14__["TheadTitlesRowComponent"],
    _thead_component__WEBPACK_IMPORTED_MODULE_5__["Ng2SmartTableTheadComponent"],
];
var THeadModule = /** @class */ (function () {
    function THeadModule() {
    }
    THeadModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _filter_filter_module__WEBPACK_IMPORTED_MODULE_3__["FilterModule"],
                _cell_cell_module__WEBPACK_IMPORTED_MODULE_4__["CellModule"],
            ],
            declarations: THEAD_COMPONENTS.slice(),
            exports: THEAD_COMPONENTS.slice(),
        })
    ], THeadModule);
    return THeadModule;
}());



/***/ }),

/***/ "./src/ng2-smart-table/index.js":
/*!**************************************!*\
  !*** ./src/ng2-smart-table/index.js ***!
  \**************************************/
/*! exports provided: Ng2SmartTableModule, DefaultEditor, Cell, LocalDataSource, ServerDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ng2_smart_table_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ng2-smart-table.module */ "./src/ng2-smart-table/ng2-smart-table.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ng2SmartTableModule", function() { return _ng2_smart_table_module__WEBPACK_IMPORTED_MODULE_0__["Ng2SmartTableModule"]; });

/* harmony import */ var _components_cell_cell_editors_default_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/cell/cell-editors/default-editor */ "./src/ng2-smart-table/components/cell/cell-editors/default-editor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultEditor", function() { return _components_cell_cell_editors_default_editor__WEBPACK_IMPORTED_MODULE_1__["DefaultEditor"]; });

/* harmony import */ var _lib_data_set_cell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/data-set/cell */ "./src/ng2-smart-table/lib/data-set/cell.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cell", function() { return _lib_data_set_cell__WEBPACK_IMPORTED_MODULE_2__["Cell"]; });

/* harmony import */ var _lib_data_source_local_local_data_source__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/data-source/local/local.data-source */ "./src/ng2-smart-table/lib/data-source/local/local.data-source.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalDataSource", function() { return _lib_data_source_local_local_data_source__WEBPACK_IMPORTED_MODULE_3__["LocalDataSource"]; });

/* harmony import */ var _lib_data_source_server_server_data_source__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/data-source/server/server.data-source */ "./src/ng2-smart-table/lib/data-source/server/server.data-source.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServerDataSource", function() { return _lib_data_source_server_server_data_source__WEBPACK_IMPORTED_MODULE_4__["ServerDataSource"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/ng2-smart-table/lib/data-set/cell.ts":
/*!**************************************************!*\
  !*** ./src/ng2-smart-table/lib/data-set/cell.ts ***!
  \**************************************************/
/*! exports provided: Cell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cell", function() { return Cell; });
var Cell = /** @class */ (function () {
    function Cell(value, row, column, dataSet) {
        this.value = value;
        this.row = row;
        this.column = column;
        this.dataSet = dataSet;
        this.newValue = '';
        this.newValue = value;
    }
    Cell.prototype.getColumn = function () {
        return this.column;
    };
    Cell.prototype.getRow = function () {
        return this.row;
    };
    Cell.prototype.getValue = function () {
        var valid = this.column.getValuePrepareFunction() instanceof Function;
        var prepare = valid ? this.column.getValuePrepareFunction() : Cell.PREPARE;
        return prepare.call(null, this.value, this.row.getData(), this);
    };
    Cell.prototype.setValue = function (value) {
        this.newValue = value;
    };
    Cell.prototype.getId = function () {
        return this.getColumn().id;
    };
    Cell.prototype.getTitle = function () {
        return this.getColumn().title;
    };
    Cell.prototype.isEditable = function () {
        if (this.getRow().index === -1) {
            return this.getColumn().isAddable;
        }
        else {
            return this.getColumn().isEditable;
        }
    };
    Cell.PREPARE = function (value) { return value; };
    return Cell;
}());



/***/ }),

/***/ "./src/ng2-smart-table/lib/data-set/column.ts":
/*!****************************************************!*\
  !*** ./src/ng2-smart-table/lib/data-set/column.ts ***!
  \****************************************************/
/*! exports provided: Column */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Column", function() { return Column; });
var Column = /** @class */ (function () {
    function Column(id, settings, dataSet) {
        this.id = id;
        this.settings = settings;
        this.dataSet = dataSet;
        this.title = '';
        this.type = '';
        this.class = '';
        this.width = '';
        this.isSortable = false;
        this.isEditable = true;
        this.isAddable = true;
        this.isFilterable = false;
        this.sortDirection = '';
        this.defaultSortDirection = '';
        this.editor = { type: '', config: {}, component: null };
        this.filter = { type: '', config: {} };
        this.renderComponent = null;
        this.process();
    }
    Column.prototype.getOnComponentInitFunction = function () {
        return this.onComponentInitFunction;
    };
    Column.prototype.getCompareFunction = function () {
        return this.compareFunction;
    };
    Column.prototype.getValuePrepareFunction = function () {
        return this.valuePrepareFunction;
    };
    Column.prototype.getFilterFunction = function () {
        return this.filterFunction;
    };
    Column.prototype.getConfig = function () {
        return this.editor && this.editor.config;
    };
    Column.prototype.getFilterType = function () {
        return this.filter && this.filter.type;
    };
    Column.prototype.getFilterConfig = function () {
        return this.filter && this.filter.config;
    };
    Column.prototype.process = function () {
        this.title = this.settings['title'];
        this.class = this.settings['class'];
        this.width = this.settings['width'];
        this.type = this.prepareType();
        this.editor = this.settings['editor'];
        this.filter = this.settings['filter'];
        this.renderComponent = this.settings['renderComponent'];
        this.isFilterable = typeof this.settings['filter'] === 'undefined' ? true : !!this.settings['filter'];
        this.defaultSortDirection = ['asc', 'desc']
            .indexOf(this.settings['sortDirection']) !== -1 ? this.settings['sortDirection'] : '';
        this.isSortable = typeof this.settings['sort'] === 'undefined' ? true : !!this.settings['sort'];
        this.isEditable = typeof this.settings['editable'] === 'undefined' ? true : !!this.settings['editable'];
        this.isAddable = typeof this.settings['addable'] === 'undefined' ? true : !!this.settings['addable'];
        this.sortDirection = this.prepareSortDirection();
        this.compareFunction = this.settings['compareFunction'];
        this.valuePrepareFunction = this.settings['valuePrepareFunction'];
        this.filterFunction = this.settings['filterFunction'];
        this.onComponentInitFunction = this.settings['onComponentInitFunction'];
    };
    Column.prototype.prepareType = function () {
        return this.settings['type'] || this.determineType();
    };
    Column.prototype.prepareSortDirection = function () {
        return this.settings['sort'] === 'desc' ? 'desc' : 'asc';
    };
    Column.prototype.determineType = function () {
        // TODO: determine type by data
        return 'text';
    };
    return Column;
}());



/***/ }),

/***/ "./src/ng2-smart-table/lib/data-set/data-set.ts":
/*!******************************************************!*\
  !*** ./src/ng2-smart-table/lib/data-set/data-set.ts ***!
  \******************************************************/
/*! exports provided: DataSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSet", function() { return DataSet; });
/* harmony import */ var _row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./row */ "./src/ng2-smart-table/lib/data-set/row.ts");
/* harmony import */ var _column__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./column */ "./src/ng2-smart-table/lib/data-set/column.ts");


var DataSet = /** @class */ (function () {
    function DataSet(data, columnSettings) {
        if (data === void 0) { data = []; }
        this.columnSettings = columnSettings;
        this.data = [];
        this.columns = [];
        this.rows = [];
        this.willSelect = 'first';
        this.createColumns(columnSettings);
        this.setData(data);
        this.createNewRow();
    }
    DataSet.prototype.setData = function (data) {
        this.data = data;
        this.createRows();
    };
    DataSet.prototype.getColumns = function () {
        return this.columns;
    };
    DataSet.prototype.getRows = function () {
        return this.rows;
    };
    DataSet.prototype.getFirstRow = function () {
        return this.rows[0];
    };
    DataSet.prototype.getLastRow = function () {
        return this.rows[this.rows.length - 1];
    };
    DataSet.prototype.findRowByData = function (data) {
        return this.rows.find(function (row) { return row.getData() === data; });
    };
    DataSet.prototype.deselectAll = function () {
        this.rows.forEach(function (row) {
            row.isSelected = false;
        });
    };
    DataSet.prototype.selectRow = function (row) {
        var previousIsSelected = row.isSelected;
        this.deselectAll();
        row.isSelected = !previousIsSelected;
        this.selectedRow = row;
        return this.selectedRow;
    };
    DataSet.prototype.multipleSelectRow = function (row) {
        row.isSelected = !row.isSelected;
        this.selectedRow = row;
        return this.selectedRow;
    };
    DataSet.prototype.selectPreviousRow = function () {
        if (this.rows.length > 0) {
            var index = this.selectedRow ? this.selectedRow.index : 0;
            if (index > this.rows.length - 1) {
                index = this.rows.length - 1;
            }
            this.selectRow(this.rows[index]);
            return this.selectedRow;
        }
    };
    DataSet.prototype.selectFirstRow = function () {
        if (this.rows.length > 0) {
            this.selectRow(this.rows[0]);
            return this.selectedRow;
        }
    };
    DataSet.prototype.selectLastRow = function () {
        if (this.rows.length > 0) {
            this.selectRow(this.rows[this.rows.length - 1]);
            return this.selectedRow;
        }
    };
    DataSet.prototype.willSelectFirstRow = function () {
        this.willSelect = 'first';
    };
    DataSet.prototype.willSelectLastRow = function () {
        this.willSelect = 'last';
    };
    DataSet.prototype.select = function () {
        if (this.getRows().length === 0) {
            return;
        }
        if (this.willSelect) {
            if (this.willSelect === 'first') {
                this.selectFirstRow();
            }
            if (this.willSelect === 'last') {
                this.selectLastRow();
            }
            this.willSelect = '';
        }
        else {
            this.selectFirstRow();
        }
        return this.selectedRow;
    };
    DataSet.prototype.createNewRow = function () {
        this.newRow = new _row__WEBPACK_IMPORTED_MODULE_0__["Row"](-1, {}, this);
        this.newRow.isInEditing = true;
    };
    /**
     * Create columns by mapping from the settings
     * @param settings
     * @private
     */
    DataSet.prototype.createColumns = function (settings) {
        for (var id in settings) {
            if (settings.hasOwnProperty(id)) {
                this.columns.push(new _column__WEBPACK_IMPORTED_MODULE_1__["Column"](id, settings[id], this));
            }
        }
    };
    /**
     * Create rows based on current data prepared in data source
     * @private
     */
    DataSet.prototype.createRows = function () {
        var _this = this;
        this.rows = [];
        this.data.forEach(function (el, index) {
            _this.rows.push(new _row__WEBPACK_IMPORTED_MODULE_0__["Row"](index, el, _this));
        });
    };
    return DataSet;
}());



/***/ }),

/***/ "./src/ng2-smart-table/lib/data-set/row.ts":
/*!*************************************************!*\
  !*** ./src/ng2-smart-table/lib/data-set/row.ts ***!
  \*************************************************/
/*! exports provided: Row */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return Row; });
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cell */ "./src/ng2-smart-table/lib/data-set/cell.ts");

var Row = /** @class */ (function () {
    function Row(index, data, _dataSet) {
        this.index = index;
        this.data = data;
        this._dataSet = _dataSet;
        this.isSelected = false;
        this.isInEditing = false;
        this.cells = [];
        this.process();
    }
    Row.prototype.getCell = function (column) {
        return this.cells.find(function (el) { return el.getColumn() === column; });
    };
    Row.prototype.getCells = function () {
        return this.cells;
    };
    Row.prototype.getData = function () {
        return this.data;
    };
    Row.prototype.getIsSelected = function () {
        return this.isSelected;
    };
    Row.prototype.getNewData = function () {
        var values = Object.assign({}, this.data);
        this.getCells().forEach(function (cell) { return values[cell.getColumn().id] = cell.newValue; });
        return values;
    };
    Row.prototype.setData = function (data) {
        this.data = data;
        this.process();
    };
    Row.prototype.process = function () {
        var _this = this;
        this.cells = [];
        this._dataSet.getColumns().forEach(function (column) {
            var cell = _this.createCell(column);
            _this.cells.push(cell);
        });
    };
    Row.prototype.createCell = function (column) {
        var defValue = column.settings.defaultValue ? column.settings.defaultValue : '';
        var value = typeof this.data[column.id] === 'undefined' ? defValue : this.data[column.id];
        return new _cell__WEBPACK_IMPORTED_MODULE_0__["Cell"](value, this, column, this._dataSet);
    };
    return Row;
}());



/***/ }),

/***/ "./src/ng2-smart-table/lib/data-source/data-source.ts":
/*!************************************************************!*\
  !*** ./src/ng2-smart-table/lib/data-source/data-source.ts ***!
  \************************************************************/
/*! exports provided: DataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSource", function() { return DataSource; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var DataSource = /** @class */ (function () {
    function DataSource() {
        this.onChangedSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.onAddedSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.onUpdatedSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.onRemovedSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    DataSource.prototype.refresh = function () {
        this.emitOnChanged('refresh');
    };
    DataSource.prototype.load = function (data) {
        this.emitOnChanged('load');
        return Promise.resolve();
    };
    DataSource.prototype.onChanged = function () {
        return this.onChangedSource.asObservable();
    };
    DataSource.prototype.onAdded = function () {
        return this.onAddedSource.asObservable();
    };
    DataSource.prototype.onUpdated = function () {
        return this.onUpdatedSource.asObservable();
    };
    DataSource.prototype.onRemoved = function () {
        return this.onRemovedSource.asObservable();
    };
    DataSource.prototype.prepend = function (element) {
        this.emitOnAdded(element);
        this.emitOnChanged('prepend');
        return Promise.resolve();
    };
    DataSource.prototype.append = function (element) {
        this.emitOnAdded(element);
        this.emitOnChanged('append');
        return Promise.resolve();
    };
    DataSource.prototype.add = function (element) {
        this.emitOnAdded(element);
        this.emitOnChanged('add');
        return Promise.resolve();
    };
    DataSource.prototype.remove = function (element) {
        this.emitOnRemoved(element);
        this.emitOnChanged('remove');
        return Promise.resolve();
    };
    DataSource.prototype.update = function (element, values) {
        this.emitOnUpdated(element);
        this.emitOnChanged('update');
        return Promise.resolve();
    };
    DataSource.prototype.empty = function () {
        this.emitOnChanged('empty');
        return Promise.resolve();
    };
    DataSource.prototype.setSort = function (conf, doEmit) {
        if (doEmit) {
            this.emitOnChanged('sort');
        }
    };
    DataSource.prototype.setFilter = function (conf, andOperator, doEmit) {
        if (doEmit) {
            this.emitOnChanged('filter');
        }
    };
    DataSource.prototype.addFilter = function (fieldConf, andOperator, doEmit) {
        if (doEmit) {
            this.emitOnChanged('filter');
        }
    };
    DataSource.prototype.setPaging = function (page, perPage, doEmit) {
        if (doEmit) {
            this.emitOnChanged('paging');
        }
    };
    DataSource.prototype.setPage = function (page, doEmit) {
        if (doEmit) {
            this.emitOnChanged('page');
        }
    };
    DataSource.prototype.emitOnRemoved = function (element) {
        this.onRemovedSource.next(element);
    };
    DataSource.prototype.emitOnUpdated = function (element) {
        this.onUpdatedSource.next(element);
    };
    DataSource.prototype.emitOnAdded = function (element) {
        this.onAddedSource.next(element);
    };
    DataSource.prototype.emitOnChanged = function (action) {
        var _this = this;
        this.getElements().then(function (elements) { return _this.onChangedSource.next({
            action: action,
            elements: elements,
            paging: _this.getPaging(),
            filter: _this.getFilter(),
            sort: _this.getSort(),
        }); });
    };
    return DataSource;
}());



/***/ }),

/***/ "./src/ng2-smart-table/lib/data-source/local/local.data-source.ts":
/*!************************************************************************!*\
  !*** ./src/ng2-smart-table/lib/data-source/local/local.data-source.ts ***!
  \************************************************************************/
/*! exports provided: LocalDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalDataSource", function() { return LocalDataSource; });
/* harmony import */ var _local_sorter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local.sorter */ "./src/ng2-smart-table/lib/data-source/local/local.sorter.ts");
/* harmony import */ var _local_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local.filter */ "./src/ng2-smart-table/lib/data-source/local/local.filter.ts");
/* harmony import */ var _local_pager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local.pager */ "./src/ng2-smart-table/lib/data-source/local/local.pager.ts");
/* harmony import */ var _data_source__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data-source */ "./src/ng2-smart-table/lib/data-source/data-source.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers */ "./src/ng2-smart-table/lib/helpers.ts");
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





var LocalDataSource = /** @class */ (function (_super) {
    __extends(LocalDataSource, _super);
    function LocalDataSource(data) {
        if (data === void 0) { data = []; }
        var _this = _super.call(this) || this;
        _this.data = [];
        _this.filteredAndSorted = [];
        _this.sortConf = [];
        _this.filterConf = {
            filters: [],
            andOperator: true,
        };
        _this.pagingConf = {};
        _this.data = data;
        return _this;
    }
    LocalDataSource.prototype.load = function (data) {
        this.data = data;
        return _super.prototype.load.call(this, data);
    };
    LocalDataSource.prototype.prepend = function (element) {
        this.reset(true);
        this.data.unshift(element);
        return _super.prototype.prepend.call(this, element);
    };
    LocalDataSource.prototype.append = function (element) {
        this.reset(true);
        this.data.push(element);
        return _super.prototype.append.call(this, element);
    };
    LocalDataSource.prototype.add = function (element) {
        this.data.push(element);
        return _super.prototype.add.call(this, element);
    };
    LocalDataSource.prototype.remove = function (element) {
        this.data = this.data.filter(function (el) { return el !== element; });
        return _super.prototype.remove.call(this, element);
    };
    LocalDataSource.prototype.update = function (element, values) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.find(element).then(function (found) {
                found = Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["deepExtend"])(found, values);
                _super.prototype.update.call(_this, found, values).then(resolve).catch(reject);
            }).catch(reject);
        });
    };
    LocalDataSource.prototype.find = function (element) {
        var found = this.data.find(function (el) { return el === element; });
        if (found) {
            return Promise.resolve(found);
        }
        return Promise.reject(new Error('Element was not found in the dataset'));
    };
    LocalDataSource.prototype.getElements = function () {
        var data = this.data.slice(0);
        return Promise.resolve(this.prepareData(data));
    };
    LocalDataSource.prototype.getFilteredAndSorted = function () {
        var data = this.data.slice(0);
        this.prepareData(data);
        return Promise.resolve(this.filteredAndSorted);
    };
    LocalDataSource.prototype.getAll = function () {
        var data = this.data.slice(0);
        return Promise.resolve(data);
    };
    LocalDataSource.prototype.reset = function (silent) {
        if (silent === void 0) { silent = false; }
        if (silent) {
            this.filterConf = {
                filters: [],
                andOperator: true,
            };
            this.sortConf = [];
            this.pagingConf['page'] = 1;
        }
        else {
            this.setFilter([], true, false);
            this.setSort([], false);
            this.setPage(1);
        }
    };
    LocalDataSource.prototype.empty = function () {
        this.data = [];
        return _super.prototype.empty.call(this);
    };
    LocalDataSource.prototype.count = function () {
        return this.filteredAndSorted.length;
    };
    /**
     *
     * Array of conf objects
     * [
     *  {field: string, direction: asc|desc|null, compare: Function|null},
     * ]
     * @param conf
     * @param doEmit
     * @returns {LocalDataSource}
     */
    LocalDataSource.prototype.setSort = function (conf, doEmit) {
        if (doEmit === void 0) { doEmit = true; }
        if (conf !== null) {
            conf.forEach(function (fieldConf) {
                if (!fieldConf['field'] || typeof fieldConf['direction'] === 'undefined') {
                    throw new Error('Sort configuration object is not valid');
                }
            });
            this.sortConf = conf;
        }
        _super.prototype.setSort.call(this, conf, doEmit);
        return this;
    };
    /**
     *
     * Array of conf objects
     * [
     *  {field: string, search: string, filter: Function|null},
     * ]
     * @param conf
     * @param andOperator
     * @param doEmit
     * @returns {LocalDataSource}
     */
    LocalDataSource.prototype.setFilter = function (conf, andOperator, doEmit) {
        var _this = this;
        if (andOperator === void 0) { andOperator = true; }
        if (doEmit === void 0) { doEmit = true; }
        if (conf && conf.length > 0) {
            conf.forEach(function (fieldConf) {
                _this.addFilter(fieldConf, andOperator, false);
            });
        }
        else {
            this.filterConf = {
                filters: [],
                andOperator: true,
            };
        }
        this.filterConf.andOperator = andOperator;
        this.pagingConf['page'] = 1;
        _super.prototype.setFilter.call(this, conf, andOperator, doEmit);
        return this;
    };
    LocalDataSource.prototype.addFilter = function (fieldConf, andOperator, doEmit) {
        var _this = this;
        if (andOperator === void 0) { andOperator = true; }
        if (doEmit === void 0) { doEmit = true; }
        if (!fieldConf['field'] || typeof fieldConf['search'] === 'undefined') {
            throw new Error('Filter configuration object is not valid');
        }
        var found = false;
        this.filterConf.filters.forEach(function (currentFieldConf, index) {
            if (currentFieldConf['field'] === fieldConf['field']) {
                _this.filterConf.filters[index] = fieldConf;
                found = true;
            }
        });
        if (!found) {
            this.filterConf.filters.push(fieldConf);
        }
        this.filterConf.andOperator = andOperator;
        _super.prototype.addFilter.call(this, fieldConf, andOperator, doEmit);
        return this;
    };
    LocalDataSource.prototype.setPaging = function (page, perPage, doEmit) {
        if (doEmit === void 0) { doEmit = true; }
        this.pagingConf['page'] = page;
        this.pagingConf['perPage'] = perPage;
        _super.prototype.setPaging.call(this, page, perPage, doEmit);
        return this;
    };
    LocalDataSource.prototype.setPage = function (page, doEmit) {
        if (doEmit === void 0) { doEmit = true; }
        this.pagingConf['page'] = page;
        _super.prototype.setPage.call(this, page, doEmit);
        return this;
    };
    LocalDataSource.prototype.getSort = function () {
        return this.sortConf;
    };
    LocalDataSource.prototype.getFilter = function () {
        return this.filterConf;
    };
    LocalDataSource.prototype.getPaging = function () {
        return this.pagingConf;
    };
    LocalDataSource.prototype.prepareData = function (data) {
        data = this.filter(data);
        data = this.sort(data);
        this.filteredAndSorted = data.slice(0);
        return this.paginate(data);
    };
    LocalDataSource.prototype.sort = function (data) {
        if (this.sortConf) {
            this.sortConf.forEach(function (fieldConf) {
                data = _local_sorter__WEBPACK_IMPORTED_MODULE_0__["LocalSorter"]
                    .sort(data, fieldConf['field'], fieldConf['direction'], fieldConf['compare']);
            });
        }
        return data;
    };
    // TODO: refactor?
    LocalDataSource.prototype.filter = function (data) {
        if (this.filterConf.filters) {
            if (this.filterConf.andOperator) {
                this.filterConf.filters.forEach(function (fieldConf) {
                    if (fieldConf['search'].length > 0) {
                        data = _local_filter__WEBPACK_IMPORTED_MODULE_1__["LocalFilter"]
                            .filter(data, fieldConf['field'], fieldConf['search'], fieldConf['filter']);
                    }
                });
            }
            else {
                var mergedData_1 = [];
                this.filterConf.filters.forEach(function (fieldConf) {
                    if (fieldConf['search'].length > 0) {
                        mergedData_1 = mergedData_1.concat(_local_filter__WEBPACK_IMPORTED_MODULE_1__["LocalFilter"]
                            .filter(data, fieldConf['field'], fieldConf['search'], fieldConf['filter']));
                    }
                });
                // remove non unique items
                data = mergedData_1.filter(function (elem, pos, arr) {
                    return arr.indexOf(elem) === pos;
                });
            }
        }
        return data;
    };
    LocalDataSource.prototype.paginate = function (data) {
        if (this.pagingConf && this.pagingConf['page'] && this.pagingConf['perPage']) {
            data = _local_pager__WEBPACK_IMPORTED_MODULE_2__["LocalPager"].paginate(data, this.pagingConf['page'], this.pagingConf['perPage']);
        }
        return data;
    };
    return LocalDataSource;
}(_data_source__WEBPACK_IMPORTED_MODULE_3__["DataSource"]));



/***/ }),

/***/ "./src/ng2-smart-table/lib/data-source/local/local.filter.ts":
/*!*******************************************************************!*\
  !*** ./src/ng2-smart-table/lib/data-source/local/local.filter.ts ***!
  \*******************************************************************/
/*! exports provided: LocalFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalFilter", function() { return LocalFilter; });
var LocalFilter = /** @class */ (function () {
    function LocalFilter() {
    }
    LocalFilter.filter = function (data, field, search, customFilter) {
        var filter = customFilter ? customFilter : this.FILTER;
        return data.filter(function (el) {
            var value = typeof el[field] === 'undefined' || el[field] === null ? '' : el[field];
            return filter.call(null, value, search);
        });
    };
    LocalFilter.FILTER = function (value, search) {
        return value.toString().toLowerCase().includes(search.toString().toLowerCase());
    };
    return LocalFilter;
}());



/***/ }),

/***/ "./src/ng2-smart-table/lib/data-source/local/local.pager.ts":
/*!******************************************************************!*\
  !*** ./src/ng2-smart-table/lib/data-source/local/local.pager.ts ***!
  \******************************************************************/
/*! exports provided: LocalPager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalPager", function() { return LocalPager; });
var LocalPager = /** @class */ (function () {
    function LocalPager() {
    }
    LocalPager.paginate = function (data, page, perPage) {
        return data.slice(perPage * (page - 1), perPage * page);
    };
    return LocalPager;
}());



/***/ }),

/***/ "./src/ng2-smart-table/lib/data-source/local/local.sorter.ts":
/*!*******************************************************************!*\
  !*** ./src/ng2-smart-table/lib/data-source/local/local.sorter.ts ***!
  \*******************************************************************/
/*! exports provided: LocalSorter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalSorter", function() { return LocalSorter; });
var LocalSorter = /** @class */ (function () {
    function LocalSorter() {
    }
    LocalSorter.sort = function (data, field, direction, customCompare) {
        var dir = (direction === 'asc') ? 1 : -1;
        var compare = customCompare ? customCompare : this.COMPARE;
        return data.sort(function (a, b) {
            return compare.call(null, dir, a[field], b[field]);
        });
    };
    LocalSorter.COMPARE = function (direction, a, b) {
        if (a < b) {
            return -1 * direction;
        }
        if (a > b) {
            return direction;
        }
        return 0;
    };
    return LocalSorter;
}());



/***/ }),

/***/ "./src/ng2-smart-table/lib/data-source/server/server-source.conf.ts":
/*!**************************************************************************!*\
  !*** ./src/ng2-smart-table/lib/data-source/server/server-source.conf.ts ***!
  \**************************************************************************/
/*! exports provided: ServerSourceConf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerSourceConf", function() { return ServerSourceConf; });
var ServerSourceConf = /** @class */ (function () {
    function ServerSourceConf(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.endPoint, endPoint = _c === void 0 ? '' : _c, _d = _b.sortFieldKey, sortFieldKey = _d === void 0 ? '' : _d, _e = _b.sortDirKey, sortDirKey = _e === void 0 ? '' : _e, _f = _b.pagerPageKey, pagerPageKey = _f === void 0 ? '' : _f, _g = _b.pagerLimitKey, pagerLimitKey = _g === void 0 ? '' : _g, _h = _b.filterFieldKey, filterFieldKey = _h === void 0 ? '' : _h, _j = _b.totalKey, totalKey = _j === void 0 ? '' : _j, _k = _b.dataKey, dataKey = _k === void 0 ? '' : _k;
        this.endPoint = endPoint ? endPoint : '';
        this.sortFieldKey = sortFieldKey ? sortFieldKey : ServerSourceConf.SORT_FIELD_KEY;
        this.sortDirKey = sortDirKey ? sortDirKey : ServerSourceConf.SORT_DIR_KEY;
        this.pagerPageKey = pagerPageKey ? pagerPageKey : ServerSourceConf.PAGER_PAGE_KEY;
        this.pagerLimitKey = pagerLimitKey ? pagerLimitKey : ServerSourceConf.PAGER_LIMIT_KEY;
        this.filterFieldKey = filterFieldKey ? filterFieldKey : ServerSourceConf.FILTER_FIELD_KEY;
        this.totalKey = totalKey ? totalKey : ServerSourceConf.TOTAL_KEY;
        this.dataKey = dataKey ? dataKey : ServerSourceConf.DATA_KEY;
    }
    ServerSourceConf.SORT_FIELD_KEY = '_sort';
    ServerSourceConf.SORT_DIR_KEY = '_order';
    ServerSourceConf.PAGER_PAGE_KEY = '_page';
    ServerSourceConf.PAGER_LIMIT_KEY = '_limit';
    ServerSourceConf.FILTER_FIELD_KEY = '#field#_like';
    ServerSourceConf.TOTAL_KEY = 'x-total-count';
    ServerSourceConf.DATA_KEY = '';
    return ServerSourceConf;
}());



/***/ }),

/***/ "./src/ng2-smart-table/lib/data-source/server/server.data-source.ts":
/*!**************************************************************************!*\
  !*** ./src/ng2-smart-table/lib/data-source/server/server.data-source.ts ***!
  \**************************************************************************/
/*! exports provided: ServerDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerDataSource", function() { return ServerDataSource; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _local_local_data_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../local/local.data-source */ "./src/ng2-smart-table/lib/data-source/local/local.data-source.ts");
/* harmony import */ var _server_source_conf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./server-source.conf */ "./src/ng2-smart-table/lib/data-source/server/server-source.conf.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers */ "./src/ng2-smart-table/lib/helpers.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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





var ServerDataSource = /** @class */ (function (_super) {
    __extends(ServerDataSource, _super);
    function ServerDataSource(http, conf) {
        if (conf === void 0) { conf = {}; }
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.lastRequestCount = 0;
        _this.conf = new _server_source_conf__WEBPACK_IMPORTED_MODULE_2__["ServerSourceConf"](conf);
        if (!_this.conf.endPoint) {
            throw new Error('At least endPoint must be specified as a configuration of the server data source.');
        }
        return _this;
    }
    ServerDataSource.prototype.count = function () {
        return this.lastRequestCount;
    };
    ServerDataSource.prototype.getElements = function () {
        var _this = this;
        return this.requestElements()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.lastRequestCount = _this.extractTotalFromResponse(res);
            _this.data = _this.extractDataFromResponse(res);
            return _this.data;
        })).toPromise();
    };
    /**
     * Extracts array of data from server response
     * @param res
     * @returns {any}
     */
    ServerDataSource.prototype.extractDataFromResponse = function (res) {
        var rawData = res.body;
        var data = !!this.conf.dataKey ? Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["getDeepFromObject"])(rawData, this.conf.dataKey, []) : rawData;
        if (data instanceof Array) {
            return data;
        }
        throw new Error("Data must be an array.\n    Please check that data extracted from the server response by the key '" + this.conf.dataKey + "' exists and is array.");
    };
    /**
     * Extracts total rows count from the server response
     * Looks for the count in the heders first, then in the response body
     * @param res
     * @returns {any}
     */
    ServerDataSource.prototype.extractTotalFromResponse = function (res) {
        if (res.headers.has(this.conf.totalKey)) {
            return +res.headers.get(this.conf.totalKey);
        }
        else {
            var rawData = res.body;
            return Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["getDeepFromObject"])(rawData, this.conf.totalKey, 0);
        }
    };
    ServerDataSource.prototype.requestElements = function () {
        var httpParams = this.createRequesParams();
        return this.http.get(this.conf.endPoint, { params: httpParams, observe: 'response' });
    };
    ServerDataSource.prototype.createRequesParams = function () {
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        httpParams = this.addSortRequestParams(httpParams);
        httpParams = this.addFilterRequestParams(httpParams);
        return this.addPagerRequestParams(httpParams);
    };
    ServerDataSource.prototype.addSortRequestParams = function (httpParams) {
        var _this = this;
        if (this.sortConf) {
            this.sortConf.forEach(function (fieldConf) {
                httpParams = httpParams.set(_this.conf.sortFieldKey, fieldConf.field);
                httpParams = httpParams.set(_this.conf.sortDirKey, fieldConf.direction.toUpperCase());
            });
        }
        return httpParams;
    };
    ServerDataSource.prototype.addFilterRequestParams = function (httpParams) {
        var _this = this;
        if (this.filterConf.filters) {
            this.filterConf.filters.forEach(function (fieldConf) {
                if (fieldConf['search']) {
                    httpParams = httpParams.set(_this.conf.filterFieldKey.replace('#field#', fieldConf['field']), fieldConf['search']);
                }
            });
        }
        return httpParams;
    };
    ServerDataSource.prototype.addPagerRequestParams = function (httpParams) {
        if (this.pagingConf && this.pagingConf['page'] && this.pagingConf['perPage']) {
            httpParams = httpParams.set(this.conf.pagerPageKey, this.pagingConf['page']);
            httpParams = httpParams.set(this.conf.pagerLimitKey, this.pagingConf['perPage']);
        }
        return httpParams;
    };
    return ServerDataSource;
}(_local_local_data_source__WEBPACK_IMPORTED_MODULE_1__["LocalDataSource"]));



/***/ }),

/***/ "./src/ng2-smart-table/lib/grid.ts":
/*!*****************************************!*\
  !*** ./src/ng2-smart-table/lib/grid.ts ***!
  \*****************************************/
/*! exports provided: Grid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return Grid; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/ng2-smart-table/lib/helpers.ts");
/* harmony import */ var _data_set_data_set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-set/data-set */ "./src/ng2-smart-table/lib/data-set/data-set.ts");



var Grid = /** @class */ (function () {
    function Grid(source, settings) {
        this.createFormShown = false;
        this.onSelectRowSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.setSettings(settings);
        this.setSource(source);
    }
    Grid.prototype.showActionColumn = function (position) {
        return this.isCurrentActionsPosition(position) && this.isActionsVisible();
    };
    Grid.prototype.isCurrentActionsPosition = function (position) {
        return position == this.getSetting('actions.position');
    };
    Grid.prototype.isActionsVisible = function () {
        return this.getSetting('actions.add') || this.getSetting('actions.edit') || this.getSetting('actions.delete') || this.getSetting('actions.custom').length;
    };
    Grid.prototype.isMultiSelectVisible = function () {
        return this.getSetting('selectMode') === 'multi';
    };
    Grid.prototype.getNewRow = function () {
        return this.dataSet.newRow;
    };
    Grid.prototype.setSettings = function (settings) {
        this.settings = settings;
        this.dataSet = new _data_set_data_set__WEBPACK_IMPORTED_MODULE_2__["DataSet"]([], this.getSetting('columns'));
        if (this.source) {
            this.source.refresh();
        }
    };
    Grid.prototype.getDataSet = function () {
        return this.dataSet;
    };
    Grid.prototype.setSource = function (source) {
        var _this = this;
        this.source = this.prepareSource(source);
        this.source.onChanged().subscribe(function (changes) { return _this.processDataChange(changes); });
        this.source.onUpdated().subscribe(function (data) {
            var changedRow = _this.dataSet.findRowByData(data);
            changedRow.setData(data);
        });
    };
    Grid.prototype.getSetting = function (name, defaultValue) {
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["getDeepFromObject"])(this.settings, name, defaultValue);
    };
    Grid.prototype.getColumns = function () {
        return this.dataSet.getColumns();
    };
    Grid.prototype.getRows = function () {
        return this.dataSet.getRows();
    };
    Grid.prototype.selectRow = function (row) {
        this.dataSet.selectRow(row);
    };
    Grid.prototype.multipleSelectRow = function (row) {
        this.dataSet.multipleSelectRow(row);
    };
    Grid.prototype.onSelectRow = function () {
        return this.onSelectRowSource.asObservable();
    };
    Grid.prototype.edit = function (row) {
        row.isInEditing = true;
    };
    Grid.prototype.create = function (row, confirmEmitter) {
        var _this = this;
        var deferred = new _helpers__WEBPACK_IMPORTED_MODULE_1__["Deferred"]();
        deferred.promise.then(function (newData) {
            newData = newData ? newData : row.getNewData();
            if (deferred.resolve.skipAdd) {
                _this.createFormShown = false;
            }
            else {
                _this.source.prepend(newData).then(function () {
                    _this.createFormShown = false;
                    _this.dataSet.createNewRow();
                });
            }
        }).catch(function (err) {
            // doing nothing
        });
        if (this.getSetting('add.confirmCreate')) {
            confirmEmitter.emit({
                newData: row.getNewData(),
                source: this.source,
                confirm: deferred,
            });
        }
        else {
            deferred.resolve();
        }
    };
    Grid.prototype.save = function (row, confirmEmitter) {
        var _this = this;
        var deferred = new _helpers__WEBPACK_IMPORTED_MODULE_1__["Deferred"]();
        deferred.promise.then(function (newData) {
            newData = newData ? newData : row.getNewData();
            if (deferred.resolve.skipEdit) {
                row.isInEditing = false;
            }
            else {
                _this.source.update(row.getData(), newData).then(function () {
                    row.isInEditing = false;
                });
            }
        }).catch(function (err) {
            // doing nothing
        });
        if (this.getSetting('edit.confirmSave')) {
            confirmEmitter.emit({
                data: row.getData(),
                newData: row.getNewData(),
                source: this.source,
                confirm: deferred,
            });
        }
        else {
            deferred.resolve();
        }
    };
    Grid.prototype.delete = function (row, confirmEmitter) {
        var _this = this;
        var deferred = new _helpers__WEBPACK_IMPORTED_MODULE_1__["Deferred"]();
        deferred.promise.then(function () {
            _this.source.remove(row.getData());
        }).catch(function (err) {
            // doing nothing
        });
        if (this.getSetting('delete.confirmDelete')) {
            confirmEmitter.emit({
                data: row.getData(),
                source: this.source,
                confirm: deferred,
            });
        }
        else {
            deferred.resolve();
        }
    };
    Grid.prototype.processDataChange = function (changes) {
        if (this.shouldProcessChange(changes)) {
            this.dataSet.setData(changes['elements']);
            if (this.getSetting('selectMode') !== 'multi') {
                var row = this.determineRowToSelect(changes);
                if (row) {
                    this.onSelectRowSource.next(row);
                }
            }
        }
    };
    Grid.prototype.shouldProcessChange = function (changes) {
        if (['filter', 'sort', 'page', 'remove', 'refresh', 'load', 'paging'].indexOf(changes['action']) !== -1) {
            return true;
        }
        else if (['prepend', 'append'].indexOf(changes['action']) !== -1 && !this.getSetting('pager.display')) {
            return true;
        }
        return false;
    };
    // TODO: move to selectable? Separate directive
    Grid.prototype.determineRowToSelect = function (changes) {
        if (['load', 'page', 'filter', 'sort', 'refresh'].indexOf(changes['action']) !== -1) {
            return this.dataSet.select();
        }
        if (changes['action'] === 'remove') {
            if (changes['elements'].length === 0) {
                // we have to store which one to select as the data will be reloaded
                this.dataSet.willSelectLastRow();
            }
            else {
                return this.dataSet.selectPreviousRow();
            }
        }
        if (changes['action'] === 'append') {
            // we have to store which one to select as the data will be reloaded
            this.dataSet.willSelectLastRow();
        }
        if (changes['action'] === 'add') {
            return this.dataSet.selectFirstRow();
        }
        if (changes['action'] === 'update') {
            return this.dataSet.selectFirstRow();
        }
        if (changes['action'] === 'prepend') {
            // we have to store which one to select as the data will be reloaded
            this.dataSet.willSelectFirstRow();
        }
        return null;
    };
    Grid.prototype.prepareSource = function (source) {
        var initialSource = this.getInitialSort();
        if (initialSource && initialSource['field'] && initialSource['direction']) {
            source.setSort([initialSource], false);
        }
        if (this.getSetting('pager.display') === true) {
            source.setPaging(1, this.getSetting('pager.perPage'), false);
        }
        source.refresh();
        return source;
    };
    Grid.prototype.getInitialSort = function () {
        var sortConf = {};
        this.getColumns().forEach(function (column) {
            if (column.isSortable && column.defaultSortDirection) {
                sortConf['field'] = column.id;
                sortConf['direction'] = column.defaultSortDirection;
                sortConf['compare'] = column.getCompareFunction();
            }
        });
        return sortConf;
    };
    Grid.prototype.getSelectedRows = function () {
        return this.dataSet.getRows()
            .filter(function (r) { return r.isSelected; });
    };
    Grid.prototype.selectAllRows = function (status) {
        this.dataSet.getRows()
            .forEach(function (r) { return r.isSelected = status; });
    };
    Grid.prototype.getFirstRow = function () {
        return this.dataSet.getFirstRow();
    };
    Grid.prototype.getLastRow = function () {
        return this.dataSet.getLastRow();
    };
    return Grid;
}());



/***/ }),

/***/ "./src/ng2-smart-table/lib/helpers.ts":
/*!********************************************!*\
  !*** ./src/ng2-smart-table/lib/helpers.ts ***!
  \********************************************/
/*! exports provided: deepExtend, Deferred, getDeepFromObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepExtend", function() { return deepExtend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Deferred", function() { return Deferred; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDeepFromObject", function() { return getDeepFromObject; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Extending object that entered in first argument.
 *
 * Returns extended object or false if have no target object or incorrect type.
 *
 * If you wish to clone source object (without modify it), just use empty new
 * object as first argument, like this:
 *   deepExtend({}, yourObj_1, [yourObj_N]);
 */
var deepExtend = function () {
    var objects = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objects[_i] = arguments[_i];
    }
    if (arguments.length < 1 || typeof arguments[0] !== 'object') {
        return false;
    }
    if (arguments.length < 2) {
        return arguments[0];
    }
    var target = arguments[0];
    // convert arguments to array and cut off target object
    var args = Array.prototype.slice.call(arguments, 1);
    var val, src;
    args.forEach(function (obj) {
        // skip argument if it is array or isn't object
        if (typeof obj !== 'object' || Array.isArray(obj)) {
            return;
        }
        Object.keys(obj).forEach(function (key) {
            src = target[key]; // source value
            val = obj[key]; // new value
            // recursion prevention
            if (val === target) {
                return;
                /**
                 * if new value isn't object then just overwrite by new value
                 * instead of extending.
                 */
            }
            else if (typeof val !== 'object' || val === null) {
                target[key] = val;
                return;
                // just clone arrays (and recursive clone objects inside)
            }
            else if (Array.isArray(val)) {
                target[key] = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(val);
                return;
                // overwrite by new value if source isn't object or array
            }
            else if (typeof src !== 'object' || src === null || Array.isArray(src)) {
                target[key] = deepExtend({}, val);
                return;
                // source value and new value is objects both, extending...
            }
            else {
                target[key] = deepExtend(src, val);
                return;
            }
        });
    });
    return target;
};
var Deferred = /** @class */ (function () {
    function Deferred() {
        var _this = this;
        this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        });
    }
    return Deferred;
}());

// getDeepFromObject({result: {data: 1}}, 'result.data', 2); // returns 1
function getDeepFromObject(object, name, defaultValue) {
    if (object === void 0) { object = {}; }
    var keys = name.split('.');
    // clone the object
    var level = deepExtend({}, object);
    keys.forEach(function (k) {
        if (level && typeof level[k] !== 'undefined') {
            level = level[k];
        }
    });
    return typeof level === 'undefined' ? defaultValue : level;
}


/***/ }),

/***/ "./src/ng2-smart-table/ng2-smart-table.component.html":
/*!************************************************************!*\
  !*** ./src/ng2-smart-table/ng2-smart-table.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table [id]=\"tableId\" [ngClass]=\"tableClass\">\n\n  <thead ng2-st-thead *ngIf=\"!isHideHeader || !isHideSubHeader\"\n                      [grid]=\"grid\"\n                      [isAllSelected]=\"isAllSelected\"\n                      [source]=\"source\"\n                      [createConfirm]=\"createConfirm\"\n                      (create)=\"create.emit($event)\"\n                      (selectAllRows)=\"onSelectAllRows($event)\"\n                      (sort)=\"sort($event)\"\n                      (filter)=\"filter($event)\">\n  </thead>\n\n  <tbody ng2-st-tbody [grid]=\"grid\"\n                      [source]=\"source\"\n                      [deleteConfirm]=\"deleteConfirm\"\n                      [editConfirm]=\"editConfirm\"\n                      [rowClassFunction]=\"rowClassFunction\"\n                      (edit)=\"edit.emit($event)\"\n                      (delete)=\"delete.emit($event)\"\n                      (custom)=\"custom.emit($event)\"\n                      (userSelectRow)=\"onUserSelectRow($event)\"\n                      (editRowSelect)=\"editRowSelect($event)\"\n                      (multipleSelectRow)=\"multipleSelectRow($event)\"\n                      (rowHover)=\"onRowHover($event)\">\n  </tbody>\n\n</table>\n\n<ng2-smart-table-pager *ngIf=\"isPagerDisplay\"\n                        [source]=\"source\"\n                        [perPageSelect]=\"perPageSelect\"\n                        (changePage)=\"changePage($event)\">\n</ng2-smart-table-pager>\n"

/***/ }),

/***/ "./src/ng2-smart-table/ng2-smart-table.component.scss":
/*!************************************************************!*\
  !*** ./src/ng2-smart-table/ng2-smart-table.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  font-size: 1rem; }\n  :host /deep/ * {\n    box-sizing: border-box; }\n  :host /deep/ button,\n  :host /deep/ input,\n  :host /deep/ optgroup,\n  :host /deep/ select,\n  :host /deep/ textarea {\n    color: inherit;\n    font: inherit;\n    margin: 0; }\n  :host /deep/ table {\n    line-height: 1.5em;\n    border-collapse: collapse;\n    border-spacing: 0;\n    display: table;\n    width: 100%;\n    max-width: 100%;\n    overflow: auto;\n    word-break: normal;\n    word-break: keep-all; }\n  :host /deep/ table tr th {\n      font-weight: bold; }\n  :host /deep/ table tr section {\n      font-size: .75em;\n      font-weight: bold; }\n  :host /deep/ table tr td,\n    :host /deep/ table tr th {\n      font-size: .875em;\n      margin: 0;\n      padding: 0.5em 1em; }\n  :host /deep/ a {\n    color: #1e6bb8;\n    text-decoration: none; }\n  :host /deep/ a:hover {\n      text-decoration: underline; }\n"

/***/ }),

/***/ "./src/ng2-smart-table/ng2-smart-table.component.ts":
/*!**********************************************************!*\
  !*** ./src/ng2-smart-table/ng2-smart-table.component.ts ***!
  \**********************************************************/
/*! exports provided: Ng2SmartTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2SmartTableComponent", function() { return Ng2SmartTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lib_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/grid */ "./src/ng2-smart-table/lib/grid.ts");
/* harmony import */ var _lib_data_source_data_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/data-source/data-source */ "./src/ng2-smart-table/lib/data-source/data-source.ts");
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/helpers */ "./src/ng2-smart-table/lib/helpers.ts");
/* harmony import */ var _lib_data_source_local_local_data_source__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/data-source/local/local.data-source */ "./src/ng2-smart-table/lib/data-source/local/local.data-source.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Ng2SmartTableComponent = /** @class */ (function () {
    function Ng2SmartTableComponent() {
        this.settings = {};
        this.rowSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.userRowSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.create = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.custom = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteConfirm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editConfirm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.createConfirm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rowHover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.defaultSettings = {
            mode: 'inline',
            selectMode: 'single',
            hideHeader: false,
            hideSubHeader: false,
            actions: {
                columnTitle: 'Actions',
                add: true,
                edit: true,
                delete: true,
                custom: [],
                position: 'left',
            },
            filter: {
                inputClass: '',
            },
            edit: {
                inputClass: '',
                editButtonContent: 'Edit',
                saveButtonContent: 'Update',
                cancelButtonContent: 'Cancel',
                confirmSave: false,
            },
            add: {
                inputClass: '',
                addButtonContent: 'Add New',
                createButtonContent: 'Create',
                cancelButtonContent: 'Cancel',
                confirmCreate: false,
            },
            delete: {
                deleteButtonContent: 'Delete',
                confirmDelete: false,
            },
            attr: {
                id: '',
                class: '',
            },
            noDataMessage: 'No data found',
            columns: {},
            pager: {
                display: true,
                perPage: 10,
            },
            rowClassFunction: function () { return ""; }
        };
        this.isAllSelected = false;
    }
    Ng2SmartTableComponent.prototype.ngOnChanges = function (changes) {
        if (this.grid) {
            if (changes['settings']) {
                this.grid.setSettings(this.prepareSettings());
            }
            if (changes['source']) {
                this.source = this.prepareSource();
                this.grid.setSource(this.source);
            }
        }
        else {
            this.initGrid();
        }
        this.tableId = this.grid.getSetting('attr.id');
        this.tableClass = this.grid.getSetting('attr.class');
        this.isHideHeader = this.grid.getSetting('hideHeader');
        this.isHideSubHeader = this.grid.getSetting('hideSubHeader');
        this.isPagerDisplay = this.grid.getSetting('pager.display');
        this.isPagerDisplay = this.grid.getSetting('pager.display');
        this.perPageSelect = this.grid.getSetting('pager.perPageSelect');
        this.rowClassFunction = this.grid.getSetting('rowClassFunction');
    };
    Ng2SmartTableComponent.prototype.editRowSelect = function (row) {
        if (this.grid.getSetting('selectMode') === 'multi') {
            this.onMultipleSelectRow(row);
        }
        else {
            this.onSelectRow(row);
        }
    };
    Ng2SmartTableComponent.prototype.onUserSelectRow = function (row) {
        if (this.grid.getSetting('selectMode') !== 'multi') {
            this.grid.selectRow(row);
            this.emitUserSelectRow(row);
            this.emitSelectRow(row);
        }
    };
    Ng2SmartTableComponent.prototype.onRowHover = function (row) {
        this.rowHover.emit(row);
    };
    Ng2SmartTableComponent.prototype.multipleSelectRow = function (row) {
        this.grid.multipleSelectRow(row);
        this.emitUserSelectRow(row);
        this.emitSelectRow(row);
    };
    Ng2SmartTableComponent.prototype.onSelectAllRows = function ($event) {
        this.isAllSelected = !this.isAllSelected;
        this.grid.selectAllRows(this.isAllSelected);
        this.emitUserSelectRow(null);
        this.emitSelectRow(null);
    };
    Ng2SmartTableComponent.prototype.onSelectRow = function (row) {
        this.grid.selectRow(row);
        this.emitSelectRow(row);
    };
    Ng2SmartTableComponent.prototype.onMultipleSelectRow = function (row) {
        this.emitSelectRow(row);
    };
    Ng2SmartTableComponent.prototype.initGrid = function () {
        var _this = this;
        this.source = this.prepareSource();
        this.grid = new _lib_grid__WEBPACK_IMPORTED_MODULE_1__["Grid"](this.source, this.prepareSettings());
        this.grid.onSelectRow().subscribe(function (row) { return _this.emitSelectRow(row); });
    };
    Ng2SmartTableComponent.prototype.prepareSource = function () {
        if (this.source instanceof _lib_data_source_data_source__WEBPACK_IMPORTED_MODULE_2__["DataSource"]) {
            return this.source;
        }
        else if (this.source instanceof Array) {
            return new _lib_data_source_local_local_data_source__WEBPACK_IMPORTED_MODULE_4__["LocalDataSource"](this.source);
        }
        return new _lib_data_source_local_local_data_source__WEBPACK_IMPORTED_MODULE_4__["LocalDataSource"]();
    };
    Ng2SmartTableComponent.prototype.prepareSettings = function () {
        return Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_3__["deepExtend"])({}, this.defaultSettings, this.settings);
    };
    Ng2SmartTableComponent.prototype.changePage = function ($event) {
        this.resetAllSelector();
    };
    Ng2SmartTableComponent.prototype.sort = function ($event) {
        this.resetAllSelector();
    };
    Ng2SmartTableComponent.prototype.filter = function ($event) {
        this.resetAllSelector();
    };
    Ng2SmartTableComponent.prototype.resetAllSelector = function () {
        this.isAllSelected = false;
    };
    Ng2SmartTableComponent.prototype.emitUserSelectRow = function (row) {
        var selectedRows = this.grid.getSelectedRows();
        this.userRowSelect.emit({
            data: row ? row.getData() : null,
            isSelected: row ? row.getIsSelected() : null,
            source: this.source,
            selected: selectedRows && selectedRows.length ? selectedRows.map(function (r) { return r.getData(); }) : [],
        });
    };
    Ng2SmartTableComponent.prototype.emitSelectRow = function (row) {
        this.rowSelect.emit({
            data: row ? row.getData() : null,
            isSelected: row ? row.getIsSelected() : null,
            source: this.source,
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Ng2SmartTableComponent.prototype, "source", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Ng2SmartTableComponent.prototype, "settings", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], Ng2SmartTableComponent.prototype, "rowSelect", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], Ng2SmartTableComponent.prototype, "userRowSelect", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], Ng2SmartTableComponent.prototype, "delete", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], Ng2SmartTableComponent.prototype, "edit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], Ng2SmartTableComponent.prototype, "create", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], Ng2SmartTableComponent.prototype, "custom", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], Ng2SmartTableComponent.prototype, "deleteConfirm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], Ng2SmartTableComponent.prototype, "editConfirm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], Ng2SmartTableComponent.prototype, "createConfirm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], Ng2SmartTableComponent.prototype, "rowHover", void 0);
    Ng2SmartTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ng2-smart-table',
            styles: [__webpack_require__(/*! ./ng2-smart-table.component.scss */ "./src/ng2-smart-table/ng2-smart-table.component.scss")],
            template: __webpack_require__(/*! ./ng2-smart-table.component.html */ "./src/ng2-smart-table/ng2-smart-table.component.html"),
        })
    ], Ng2SmartTableComponent);
    return Ng2SmartTableComponent;
}());



/***/ }),

/***/ "./src/ng2-smart-table/ng2-smart-table.module.ts":
/*!*******************************************************!*\
  !*** ./src/ng2-smart-table/ng2-smart-table.module.ts ***!
  \*******************************************************/
/*! exports provided: Ng2SmartTableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2SmartTableModule", function() { return Ng2SmartTableModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_cell_cell_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/cell/cell.module */ "./src/ng2-smart-table/components/cell/cell.module.ts");
/* harmony import */ var _components_filter_filter_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/filter/filter.module */ "./src/ng2-smart-table/components/filter/filter.module.ts");
/* harmony import */ var _components_pager_pager_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pager/pager.module */ "./src/ng2-smart-table/components/pager/pager.module.ts");
/* harmony import */ var _components_tbody_tbody_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/tbody/tbody.module */ "./src/ng2-smart-table/components/tbody/tbody.module.ts");
/* harmony import */ var _components_thead_thead_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/thead/thead.module */ "./src/ng2-smart-table/components/thead/thead.module.ts");
/* harmony import */ var _ng2_smart_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ng2-smart-table.component */ "./src/ng2-smart-table/ng2-smart-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var Ng2SmartTableModule = /** @class */ (function () {
    function Ng2SmartTableModule() {
    }
    Ng2SmartTableModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _components_cell_cell_module__WEBPACK_IMPORTED_MODULE_3__["CellModule"],
                _components_filter_filter_module__WEBPACK_IMPORTED_MODULE_4__["FilterModule"],
                _components_pager_pager_module__WEBPACK_IMPORTED_MODULE_5__["PagerModule"],
                _components_tbody_tbody_module__WEBPACK_IMPORTED_MODULE_6__["TBodyModule"],
                _components_thead_thead_module__WEBPACK_IMPORTED_MODULE_7__["THeadModule"],
            ],
            declarations: [
                _ng2_smart_table_component__WEBPACK_IMPORTED_MODULE_8__["Ng2SmartTableComponent"],
            ],
            exports: [
                _ng2_smart_table_component__WEBPACK_IMPORTED_MODULE_8__["Ng2SmartTableComponent"],
            ],
        })
    ], Ng2SmartTableModule);
    return Ng2SmartTableModule;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/leon.li/Documents/workspaces/ng2-smart-table/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map