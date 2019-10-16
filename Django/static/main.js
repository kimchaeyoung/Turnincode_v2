(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body {\n    background-color: #F5F093;\n}\nmat-sidenav-container, mat-sidenav-content, mat-sidenav {\n    height: 100%;\n}\nmat-sidenav {\n    width: 250px;\n}\nmain {\n    padding: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6Ii4uLy4uL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCwgYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjA5Mztcbn1cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciwgbWF0LXNpZGVuYXYtY29udGVudCwgbWF0LXNpZGVuYXYge1xuICAgIGhlaWdodDogMTAwJTtcbn1cbiBcbm1hdC1zaWRlbmF2IHtcbiAgICB3aWR0aDogMjUwcHg7XG59XG4gXG5tYWluIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Angular';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _view_view_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/view.module */ "./src/app/view/view.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                _view_view_module__WEBPACK_IMPORTED_MODULE_7__["ViewModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/view/csee/csee-hw/csee-hw.component.css":
/*!*********************************************************!*\
  !*** ./src/app/view/csee/csee-hw/csee-hw.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjc2VlLWh3L2NzZWUtaHcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/view/csee/csee-hw/csee-hw.component.html":
/*!**********************************************************!*\
  !*** ./src/app/view/csee/csee-hw/csee-hw.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button routerLink=\"register\"> Register </button>\n<button routerLink=\"manage\"> Manage </button>\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/view/csee/csee-hw/csee-hw.component.ts":
/*!********************************************************!*\
  !*** ./src/app/view/csee/csee-hw/csee-hw.component.ts ***!
  \********************************************************/
/*! exports provided: CseeHwComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CseeHwComponent", function() { return CseeHwComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CseeHwComponent = /** @class */ (function () {
    function CseeHwComponent() {
    }
    CseeHwComponent.prototype.ngOnInit = function () {
    };
    CseeHwComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-csee-hw',
            template: __webpack_require__(/*! ./csee-hw.component.html */ "./src/app/view/csee/csee-hw/csee-hw.component.html"),
            styles: [__webpack_require__(/*! ./csee-hw.component.css */ "./src/app/view/csee/csee-hw/csee-hw.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CseeHwComponent);
    return CseeHwComponent;
}());



/***/ }),

/***/ "./src/app/view/csee/csee-hw/hw-manage/hw-manage.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/view/csee/csee-hw/hw-manage/hw-manage.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjc2VlLWh3L2h3LW1hbmFnZS9ody1tYW5hZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/view/csee/csee-hw/hw-manage/hw-manage.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/view/csee/csee-hw/hw-manage/hw-manage.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li *ngFor=\"let hw of hwlist; let i = index\">\n    <h4>{{i}}: {{hw.hw_name}}</h4>\n    <p> {{hw.hw_ink}}</p>\n    <p> {{hw.hw_description}}</p>\n    <p> {{hw.hw_duedate}}</p>\n  </li>\n</ul>\n\n"

/***/ }),

/***/ "./src/app/view/csee/csee-hw/hw-manage/hw-manage.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/view/csee/csee-hw/hw-manage/hw-manage.component.ts ***!
  \********************************************************************/
/*! exports provided: HwManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HwManageComponent", function() { return HwManageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../user.service */ "./src/app/view/user.service.ts");



var HwManageComponent = /** @class */ (function () {
    function HwManageComponent(userService) {
        this.userService = userService;
        this.hwlist = [];
    }
    HwManageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.manageHomework().subscribe(function (response) {
            _this.hwlist = response;
        }, function (error) { return console.log('error', error); });
    };
    HwManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hw-manage',
            template: __webpack_require__(/*! ./hw-manage.component.html */ "./src/app/view/csee/csee-hw/hw-manage/hw-manage.component.html"),
            providers: [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]],
            styles: [__webpack_require__(/*! ./hw-manage.component.css */ "./src/app/view/csee/csee-hw/hw-manage/hw-manage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], HwManageComponent);
    return HwManageComponent;
}());



/***/ }),

/***/ "./src/app/view/csee/csee-hw/hw-register/hw-register.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/view/csee/csee-hw/hw-register/hw-register.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjc2VlLWh3L2h3LXJlZ2lzdGVyL2h3LXJlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/view/csee/csee-hw/hw-register/hw-register.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/view/csee/csee-hw/hw-register/hw-register.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1> Homework Register </h1>\n    <label for=\"homeworkName\">name:</label>\n    <input type=\"text\" name=\"name\" id=\"homeworkName\" maxlength=\"140\"\n           required [(ngModel)]=\"register.hw_name\"/>\n\n    <br><label for=\"homeworkName\">link:</label>\n    <input type=\"text\" name=\"link\" id=\"homeworkLink\" maxlength=\"140\"\n           required [(ngModel)]=\"register.hw_link\"/>\n\n    <br><label for=\"homeworkDescription\">description:</label>\n    <input type=\"text\" name=\"description\" id=\"homeworkDescription\" maxlength=\"140\"\n           required [(ngModel)]=\"register.hw_description\"/>\n\n    <br><label for=\"homeworkDuedate\">duedate:</label>\n    <input type=\"text\" name=\"duedate\" id=\"homeworkDuedate\" maxlength=\"140\"\n           required [(ngModel)]=\"register.hw_duedate\"/>\n    <br><button (click)=\"Register()\"> Create! </button>\n"

/***/ }),

/***/ "./src/app/view/csee/csee-hw/hw-register/hw-register.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/view/csee/csee-hw/hw-register/hw-register.component.ts ***!
  \************************************************************************/
/*! exports provided: HwRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HwRegisterComponent", function() { return HwRegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../user.service */ "./src/app/view/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HwRegisterComponent = /** @class */ (function () {
    function HwRegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    HwRegisterComponent.prototype.ngOnInit = function () {
        this.register = {
            hw_name: '',
            hw_link: '',
            hw_description: '',
            hw_duedate: '',
        };
    };
    HwRegisterComponent.prototype.Register = function () {
        var _this = this;
        this.userService.registerHomework(this.register).subscribe(function (response) {
            _this.router.navigateByUrl('csee/csee-hw/manage');
        }, function (error) { return console.log('error', error); });
    };
    HwRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hw-register',
            template: __webpack_require__(/*! ./hw-register.component.html */ "./src/app/view/csee/csee-hw/hw-register/hw-register.component.html"),
            providers: [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]],
            styles: [__webpack_require__(/*! ./hw-register.component.css */ "./src/app/view/csee/csee-hw/hw-register/hw-register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HwRegisterComponent);
    return HwRegisterComponent;
}());



/***/ }),

/***/ "./src/app/view/csee/csee-login/csee-login.component.css":
/*!***************************************************************!*\
  !*** ./src/app/view/csee/csee-login/csee-login.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjc2VlLWxvZ2luL2NzZWUtbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/view/csee/csee-login/csee-login.component.html":
/*!****************************************************************!*\
  !*** ./src/app/view/csee/csee-login/csee-login.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n     <h1> CSEE Page </h1>\n        <div>\n          <input [(ngModel)]=\"signin.username\" placeholder=\"username\"><br>\n          <input [(ngModel)]=\"signin.password\" placeholder=\"password\" type=\"password\"><br>\n          <button (click)=\"SignIn()\"> Sign In CSEE </button>\n        </div>\n</div>\n\n\n \n"

/***/ }),

/***/ "./src/app/view/csee/csee-login/csee-login.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/view/csee/csee-login/csee-login.component.ts ***!
  \**************************************************************/
/*! exports provided: CseeLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CseeLoginComponent", function() { return CseeLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../user.service */ "./src/app/view/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CseeLoginComponent = /** @class */ (function () {
    function CseeLoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    CseeLoginComponent.prototype.ngOnInit = function () {
        this.signin = {
            username: '',
            password: '',
            email: ''
        };
    };
    CseeLoginComponent.prototype.SignIn = function () {
        var _this = this;
        this.userService.signinNewCsee(this.signin).subscribe(function (response) {
            _this.router.navigateByUrl('csee/csee-hw');
        }, function (error) { return console.log('error', error); });
    };
    CseeLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-csee-login',
            template: __webpack_require__(/*! ./csee-login.component.html */ "./src/app/view/csee/csee-login/csee-login.component.html"),
            providers: [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]],
            styles: [__webpack_require__(/*! ./csee-login.component.css */ "./src/app/view/csee/csee-login/csee-login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CseeLoginComponent);
    return CseeLoginComponent;
}());



/***/ }),

/***/ "./src/app/view/csee/csee-signup/csee-signup.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/view/csee/csee-signup/csee-signup.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjc2VlLXNpZ251cC9jc2VlLXNpZ251cC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/view/csee/csee-signup/csee-signup.component.html":
/*!******************************************************************!*\
  !*** ./src/app/view/csee/csee-signup/csee-signup.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h1>Enter your info.</h1>\n  <input [(ngModel)]=\"signup.professor_id\" placeholder=\"professor_id\"><br>\n  <input [(ngModel)]=\"signup.professor_name\" placeholder=\"professor_name\"><br>\n  <button (click)=\"SignUp()\"> Submit </button>\n</div>\n"

/***/ }),

/***/ "./src/app/view/csee/csee-signup/csee-signup.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/view/csee/csee-signup/csee-signup.component.ts ***!
  \****************************************************************/
/*! exports provided: CseeSignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CseeSignupComponent", function() { return CseeSignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../user.service */ "./src/app/view/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CseeSignupComponent = /** @class */ (function () {
    function CseeSignupComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    CseeSignupComponent.prototype.ngOnInit = function () {
        this.signup = {
            professor_id: '',
            professor_name: ''
        };
    };
    CseeSignupComponent.prototype.SignUp = function () {
        var _this = this;
        this.userService.signupNewCsee(this.signup).subscribe(function (response) {
            _this.router.navigateByUrl('');
        }, function (error) { return console.log('error', error); });
    };
    CseeSignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-csee-signup',
            template: __webpack_require__(/*! ./csee-signup.component.html */ "./src/app/view/csee/csee-signup/csee-signup.component.html"),
            providers: [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]],
            styles: [__webpack_require__(/*! ./csee-signup.component.css */ "./src/app/view/csee/csee-signup/csee-signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CseeSignupComponent);
    return CseeSignupComponent;
}());



/***/ }),

/***/ "./src/app/view/csee/csee.module.ts":
/*!******************************************!*\
  !*** ./src/app/view/csee/csee.module.ts ***!
  \******************************************/
/*! exports provided: ROUTES, CseeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CseeModule", function() { return CseeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _csee_login_csee_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./csee-login/csee-login.component */ "./src/app/view/csee/csee-login/csee-login.component.ts");
/* harmony import */ var _csee_hw_csee_hw_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./csee-hw/csee-hw.component */ "./src/app/view/csee/csee-hw/csee-hw.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _csee_hw_hw_register_hw_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./csee-hw/hw-register/hw-register.component */ "./src/app/view/csee/csee-hw/hw-register/hw-register.component.ts");
/* harmony import */ var _csee_hw_hw_manage_hw_manage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./csee-hw/hw-manage/hw-manage.component */ "./src/app/view/csee/csee-hw/hw-manage/hw-manage.component.ts");
/* harmony import */ var _csee_signup_csee_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./csee-signup/csee-signup.component */ "./src/app/view/csee/csee-signup/csee-signup.component.ts");










var ROUTES = [
    { path: 'signup/csee', component: _csee_signup_csee_signup_component__WEBPACK_IMPORTED_MODULE_9__["CseeSignupComponent"] },
    {
        path: 'professor-page',
        component: _csee_hw_csee_hw_component__WEBPACK_IMPORTED_MODULE_4__["CseeHwComponent"],
        children: [
            { path: 'register', component: _csee_hw_hw_register_hw_register_component__WEBPACK_IMPORTED_MODULE_7__["HwRegisterComponent"] },
            { path: 'manage', component: _csee_hw_hw_manage_hw_manage_component__WEBPACK_IMPORTED_MODULE_8__["HwManageComponent"] }
        ]
    }
];
var CseeModule = /** @class */ (function () {
    function CseeModule() {
    }
    CseeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_csee_login_csee_login_component__WEBPACK_IMPORTED_MODULE_3__["CseeLoginComponent"], _csee_hw_csee_hw_component__WEBPACK_IMPORTED_MODULE_4__["CseeHwComponent"], _csee_hw_hw_register_hw_register_component__WEBPACK_IMPORTED_MODULE_7__["HwRegisterComponent"], _csee_hw_hw_manage_hw_manage_component__WEBPACK_IMPORTED_MODULE_8__["HwManageComponent"], _csee_signup_csee_signup_component__WEBPACK_IMPORTED_MODULE_9__["CseeSignupComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(ROUTES),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            ]
        })
    ], CseeModule);
    return CseeModule;
}());



/***/ }),

/***/ "./src/app/view/signin/signin.component.css":
/*!**************************************************!*\
  !*** ./src/app/view/signin/signin.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".font {\n    font-family: 'Lobster';\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQiIsImZpbGUiOiIuLi9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9udCB7XG4gICAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/view/signin/signin.component.html":
/*!***************************************************!*\
  !*** ./src/app/view/signin/signin.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center; margin-top: 30px;\">\n   <link href=\"//fonts.googleapis.com/css?family=Lobster&subset=latin,latin-ext\" rel=\"stylesheet\" type=\"text/css\">\n   <h1 class=\"font\"> Turnincode </h1>\n</div>\n"

/***/ }),

/***/ "./src/app/view/signin/signin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/view/signin/signin.component.ts ***!
  \*************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SigninComponent = /** @class */ (function () {
    function SigninComponent() {
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/view/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/view/signin/signin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/view/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/view/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/view/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/view/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Sign Up</h3>\n  <h5>choose your mode</h5>\n  <button routerLink=\"student-signup\"> student </button>\n  <button routerLink=\"csee\"> professor </button>\n\n"

/***/ }),

/***/ "./src/app/view/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/view/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/view/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/view/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/view/student/student-page/mypage/mypage.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/view/student/student-page/mypage/mypage.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zdHVkZW50L3N0dWRlbnQtcGFnZS9teXBhZ2UvbXlwYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/view/student/student-page/mypage/mypage.component.html":
/*!************************************************************************!*\
  !*** ./src/app/view/student/student-page/mypage/mypage.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  mypage works!\n</p>\n"

/***/ }),

/***/ "./src/app/view/student/student-page/mypage/mypage.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/view/student/student-page/mypage/mypage.component.ts ***!
  \**********************************************************************/
/*! exports provided: MypageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MypageComponent", function() { return MypageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MypageComponent = /** @class */ (function () {
    function MypageComponent() {
    }
    MypageComponent.prototype.ngOnInit = function () {
    };
    MypageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mypage',
            template: __webpack_require__(/*! ./mypage.component.html */ "./src/app/view/student/student-page/mypage/mypage.component.html"),
            styles: [__webpack_require__(/*! ./mypage.component.css */ "./src/app/view/student/student-page/mypage/mypage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MypageComponent);
    return MypageComponent;
}());



/***/ }),

/***/ "./src/app/view/student/student-page/student-page.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/view/student/student-page/student-page.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zdHVkZW50L3N0dWRlbnQtcGFnZS9zdHVkZW50LXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/view/student/student-page/student-page.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/view/student/student-page/student-page.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button routerLink=\"mypage\"> Mypage </button>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/view/student/student-page/student-page.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/view/student/student-page/student-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: StudentPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentPageComponent", function() { return StudentPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StudentPageComponent = /** @class */ (function () {
    function StudentPageComponent() {
    }
    StudentPageComponent.prototype.ngOnInit = function () {
    };
    StudentPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-page',
            template: __webpack_require__(/*! ./student-page.component.html */ "./src/app/view/student/student-page/student-page.component.html"),
            styles: [__webpack_require__(/*! ./student-page.component.css */ "./src/app/view/student/student-page/student-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StudentPageComponent);
    return StudentPageComponent;
}());



/***/ }),

/***/ "./src/app/view/student/student-sign-in/student-sign-in.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/view/student/student-sign-in/student-sign-in.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".font {\n  font-family: 'Lobster';\n}\n.left {\n  float: right;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3N0dWRlbnQvc3R1ZGVudC1zaWduLWluL3N0dWRlbnQtc2lnbi1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoiLi4vc3R1ZGVudC9zdHVkZW50LXNpZ24taW4vc3R1ZGVudC1zaWduLWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9udCB7XG4gIGZvbnQtZmFtaWx5OiAnTG9ic3Rlcic7XG59XG4ubGVmdCB7XG4gIGZsb2F0OiByaWdodDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/view/student/student-sign-in/student-sign-in.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/view/student/student-sign-in/student-sign-in.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class =\"left\">\n   <button routerLink=\"csee\"> Csee </button>\n</div>\n<br><div style=\"text-align:center; margin-top: 30px;\">\n     <link href=\"//fonts.googleapis.com/css?family=Lobster&subset=latin,latin-ext\" rel=\"stylesheet\" type=\"text/css\">\n     <h1 class=\"font\"> Turnincode </h1>\n    </div>\n\n\n \n"

/***/ }),

/***/ "./src/app/view/student/student-sign-in/student-sign-in.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/view/student/student-sign-in/student-sign-in.component.ts ***!
  \***************************************************************************/
/*! exports provided: StudentSignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentSignInComponent", function() { return StudentSignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var StudentSignInComponent = /** @class */ (function () {
    function StudentSignInComponent(router) {
        this.router = router;
    }
    StudentSignInComponent.prototype.ngOnInit = function () {
    };
    StudentSignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-sign-in',
            template: __webpack_require__(/*! ./student-sign-in.component.html */ "./src/app/view/student/student-sign-in/student-sign-in.component.html"),
            styles: [__webpack_require__(/*! ./student-sign-in.component.css */ "./src/app/view/student/student-sign-in/student-sign-in.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], StudentSignInComponent);
    return StudentSignInComponent;
}());



/***/ }),

/***/ "./src/app/view/student/student-sign-up/student-sign-up.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/view/student/student-sign-up/student-sign-up.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zdHVkZW50L3N0dWRlbnQtc2lnbi11cC9zdHVkZW50LXNpZ24tdXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/view/student/student-sign-up/student-sign-up.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/view/student/student-sign-up/student-sign-up.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h1>Enter your info.</h1>\n  <input [(ngModel)]=\"signup.student_id\" placeholder=\"student_id\"><br>\n  <input [(ngModel)]=\"signup.student_name\" placeholder=\"student_name\"><br>\n  <input [(ngModel)]=\"signup.student_number\" placeholder=\"student_number\"><br>\n  <input [(ngModel)]=\"signup.student_password\" placeholder=\"student_password\" type=\"password\"><br>\n  <button (click)=\"SignUp()\"> Submit </button>\n</div>\n"

/***/ }),

/***/ "./src/app/view/student/student-sign-up/student-sign-up.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/view/student/student-sign-up/student-sign-up.component.ts ***!
  \***************************************************************************/
/*! exports provided: StudentSignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentSignUpComponent", function() { return StudentSignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../user.service */ "./src/app/view/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var StudentSignUpComponent = /** @class */ (function () {
    function StudentSignUpComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    StudentSignUpComponent.prototype.ngOnInit = function () {
        this.signup = {
            student_id: '',
            student_name: '',
            student_number: '',
            student_password: ''
        };
    };
    StudentSignUpComponent.prototype.SignUp = function () {
        var _this = this;
        this.userService.signupNewStudent(this.signup).subscribe(function (response) {
            _this.router.navigateByUrl('/');
        }, function (error) { return console.log('error', error); });
    };
    StudentSignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-sign-up',
            template: __webpack_require__(/*! ./student-sign-up.component.html */ "./src/app/view/student/student-sign-up/student-sign-up.component.html"),
            providers: [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]],
            styles: [__webpack_require__(/*! ./student-sign-up.component.css */ "./src/app/view/student/student-sign-up/student-sign-up.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], StudentSignUpComponent);
    return StudentSignUpComponent;
}());



/***/ }),

/***/ "./src/app/view/student/student.module.ts":
/*!************************************************!*\
  !*** ./src/app/view/student/student.module.ts ***!
  \************************************************/
/*! exports provided: ROUTES, StudentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentModule", function() { return StudentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _student_sign_in_student_sign_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./student-sign-in/student-sign-in.component */ "./src/app/view/student/student-sign-in/student-sign-in.component.ts");
/* harmony import */ var _student_sign_up_student_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./student-sign-up/student-sign-up.component */ "./src/app/view/student/student-sign-up/student-sign-up.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _student_page_student_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./student-page/student-page.component */ "./src/app/view/student/student-page/student-page.component.ts");
/* harmony import */ var _student_page_mypage_mypage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./student-page/mypage/mypage.component */ "./src/app/view/student/student-page/mypage/mypage.component.ts");









var ROUTES = [
    { path: 'signup/student-signup', component: _student_sign_up_student_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["StudentSignUpComponent"] },
    {
        path: 'student-page',
        component: _student_page_student_page_component__WEBPACK_IMPORTED_MODULE_7__["StudentPageComponent"],
        children: [
            { path: 'mypage', component: _student_page_mypage_mypage_component__WEBPACK_IMPORTED_MODULE_8__["MypageComponent"] },
        ]
    }
];
var StudentModule = /** @class */ (function () {
    function StudentModule() {
    }
    StudentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_student_sign_in_student_sign_in_component__WEBPACK_IMPORTED_MODULE_3__["StudentSignInComponent"], _student_sign_up_student_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["StudentSignUpComponent"], _student_page_student_page_component__WEBPACK_IMPORTED_MODULE_7__["StudentPageComponent"], _student_page_mypage_mypage_component__WEBPACK_IMPORTED_MODULE_8__["MypageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(ROUTES),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            ]
        })
    ], StudentModule);
    return StudentModule;
}());



/***/ }),

/***/ "./src/app/view/user.service.ts":
/*!**************************************!*\
  !*** ./src/app/view/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.signupNewStudent = function (userData) {
        return this.http.post('./sstudents/', userData);
    };
    UserService.prototype.signupNewCsee = function (userData) {
        return this.http.post('./pprofessors/', userData);
    };
    UserService.prototype.signinNewCsee = function (userData) {
        return this.http.post('./auth/', userData);
    };
    UserService.prototype.signinNewStudent = function (userData) {
        return this.http.post('./auth2/', userData);
    };
    UserService.prototype.registerHomework = function (userData) {
        return this.http.post('./hhomeworks/', userData);
    };
    UserService.prototype.manageHomework = function () {
        return this.http.get('./hhomeworks/');
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/view/view.module.ts":
/*!*************************************!*\
  !*** ./src/app/view/view.module.ts ***!
  \*************************************/
/*! exports provided: ROUTES, ViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewModule", function() { return ViewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _csee_csee_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./csee/csee.module */ "./src/app/view/csee/csee.module.ts");
/* harmony import */ var _student_student_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./student/student.module */ "./src/app/view/student/student.module.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/view/signup/signup.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/view/signin/signin.component.ts");








var ROUTES = [
    { path: '', component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_7__["SigninComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] }
];
var ViewModule = /** @class */ (function () {
    function ViewModule() {
    }
    ViewModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _csee_csee_module__WEBPACK_IMPORTED_MODULE_3__["CseeModule"],
                _student_student_module__WEBPACK_IMPORTED_MODULE_4__["StudentModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(ROUTES),
            ],
            declarations: [
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"],
                _signin_signin_component__WEBPACK_IMPORTED_MODULE_7__["SigninComponent"]
            ]
        })
    ], ViewModule);
    return ViewModule;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jihye/newturnin/Angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map