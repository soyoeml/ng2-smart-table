(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header-component tagline=\"Smart data table library with sorting, filtering, pagination & add/edit/delete functions.\"></header-component>\n\n<section class=\"main-content\">\n\n  <h3><a id=\"demo\" class=\"anchor\" href=\"#demo\" aria-hidden=\"true\"><span aria-hidden=\"true\" class=\"octicon octicon-link\"></span></a>Demo</h3>\n  \n  <div>\n    <basic-example-data></basic-example-data>\n  </div>\n  \n  <h3><a id=\"features\" class=\"anchor\" href=\"#features\" aria-hidden=\"true\"><span aria-hidden=\"true\" class=\"octicon octicon-link\"></span></a>Features</h3>\n    <ul>\n      <li>Local data source (Server/API DataSource is on its way)</li>\n      <li>Filtering</li>\n      <li>Sorting</li>\n      <li>Pagination</li>\n      <li>Inline Add/Edit/Delete</li>\n      <li>Flexible event model</li>\n    </ul>\n\n  <h3><a id=\"free\" class=\"anchor\" href=\"#free\" aria-hidden=\"true\"><span aria-hidden=\"true\" class=\"octicon octicon-link\"></span></a>Is it free?</h3>\n\n  <p>Yes, ng2-smart-table is absolutely free and MIT licensed. That basically means you can use it as you want to.</p>\n\n  <h3><a id=\"support\" class=\"anchor\" href=\"#support\" aria-hidden=\"true\"><span aria-hidden=\"true\" class=\"octicon octicon-link\"></span></a>How can I support you guys?</h3>\n\n  <p>If you have a second:</p>\n  <ul>\n    <li>Star <a href=\"https://github.com/akveo/ng2-smart-table\" target=\"_blank\">our GitHub repo</a></li>\n    <li>Create pull requests, submit bugs, suggest new features</li>\n    <li>Follow <a href=\"https://twitter.com/akveo_inc\" target=\"_blank\">us on Twitter</a></li>\n    <li>Like <a href=\"https://www.facebook.com/akveo/\" target=\"_blank\">our page on Facebook</a></li>\n  </ul>\n\n  <h3><a id=\"hire\" class=\"anchor\" href=\"#hire\" aria-hidden=\"true\"><span aria-hidden=\"true\" class=\"octicon octicon-link\"></span></a>Can I hire you?</h3>\n\n  <p>Yes! We are available for hire. Visit <a href=\"http://akveo.com\">our homepage</a> or simply leave us a note at <a href=\"mailto:contact@akveo.com\">contact@akveo.com</a>. We will be happy to work with you!</p>\n\n</section>"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _home_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.routes */ "./src/app/pages/home/home.routes.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.component */ "./src/app/pages/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_home_routes__WEBPACK_IMPORTED_MODULE_4__["routes"]),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            ],
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
            ],
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.routes.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.routes.ts ***!
  \*******************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "./src/app/pages/home/home.component.ts");

var routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"],
    },
];


/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map