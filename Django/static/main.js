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

module.exports = "mat-sidenav-container, mat-sidenav-content, mat-sidenav {\n    height: 100%;\n}\n \nmat-sidenav {\n    width: 250px;\n}\n \nmain {\n    padding: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6Ii4uL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXNpZGVuYXYtY29udGFpbmVyLCBtYXQtc2lkZW5hdi1jb250ZW50LCBtYXQtc2lkZW5hdiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuIFxubWF0LXNpZGVuYXYge1xuICAgIHdpZHRoOiAyNTBweDtcbn1cbiBcbm1haW4ge1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <button routerLink=\"/\">Home</button> \n    <button routerLink=\"student\">Student</button> \n    <button routerLink=\"CSEE\">CSEE</button> \n    <button routerLink=\"test\">Test</button>\n<div> \n\n<router-outlet></router-outlet>\n\n"

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

/***/ "./src/app/view/csee/csee.component.css":
/*!**********************************************!*\
  !*** ./src/app/view/csee/csee.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjc2VlL2NzZWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/view/csee/csee.component.html":
/*!***********************************************!*\
  !*** ./src/app/view/csee/csee.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n     <h1> CSEE Page </h1>\n        <div>\n          <input [(ngModel)]=\"signin.username\" placeholder=\"username\"><br>\n          <input [(ngModel)]=\"signin.password\" placeholder=\"password\" type=\"password\"><br>\n          <button (click)=\"SignIn()\"> Sign In CSEE </button>\n        </div>\n</div>\n\n\n \n"

/***/ }),

/***/ "./src/app/view/csee/csee.component.ts":
/*!*********************************************!*\
  !*** ./src/app/view/csee/csee.component.ts ***!
  \*********************************************/
/*! exports provided: CSEEComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSEEComponent", function() { return CSEEComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/view/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CSEEComponent = /** @class */ (function () {
    function CSEEComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    CSEEComponent.prototype.ngOnInit = function () {
        this.signin = {
            username: '',
            password: '',
            email: ''
        };
    };
    CSEEComponent.prototype.SignIn = function () {
        var _this = this;
        this.userService.signinNewUser(this.signin).subscribe(function (response) {
            _this.router.navigateByUrl('/CSEE/hw-register');
        }, function (error) { return console.log('error', error); });
    };
    CSEEComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-csee',
            template: __webpack_require__(/*! ./csee.component.html */ "./src/app/view/csee/csee.component.html"),
            providers: [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]],
            styles: [__webpack_require__(/*! ./csee.component.css */ "./src/app/view/csee/csee.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CSEEComponent);
    return CSEEComponent;
}());



/***/ }),

/***/ "./src/app/view/csee/hw-register/hw-register.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/view/csee/hw-register/hw-register.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjc2VlL2h3LXJlZ2lzdGVyL2h3LXJlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/view/csee/hw-register/hw-register.component.html":
/*!******************************************************************!*\
  !*** ./src/app/view/csee/hw-register/hw-register.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  hw-register works!\n</p>\n"

/***/ }),

/***/ "./src/app/view/csee/hw-register/hw-register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/view/csee/hw-register/hw-register.component.ts ***!
  \****************************************************************/
/*! exports provided: HwRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HwRegisterComponent", function() { return HwRegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HwRegisterComponent = /** @class */ (function () {
    function HwRegisterComponent() {
    }
    HwRegisterComponent.prototype.ngOnInit = function () {
    };
    HwRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hw-register',
            template: __webpack_require__(/*! ./hw-register.component.html */ "./src/app/view/csee/hw-register/hw-register.component.html"),
            styles: [__webpack_require__(/*! ./hw-register.component.css */ "./src/app/view/csee/hw-register/hw-register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HwRegisterComponent);
    return HwRegisterComponent;
}());



/***/ }),

/***/ "./src/app/view/home/home.component.css":
/*!**********************************************!*\
  !*** ./src/app/view/home/home.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lL2hvbWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/view/home/home.component.html":
/*!***********************************************!*\
  !*** ./src/app/view/home/home.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/view/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/view/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/view/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/view/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/view/student/my-page/my-page.component.css":
/*!************************************************************!*\
  !*** ./src/app/view/student/my-page/my-page.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHVkZW50L215LXBhZ2UvbXktcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/view/student/my-page/my-page.component.html":
/*!*************************************************************!*\
  !*** ./src/app/view/student/my-page/my-page.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  my-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/view/student/my-page/my-page.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/view/student/my-page/my-page.component.ts ***!
  \***********************************************************/
/*! exports provided: MyPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPageComponent", function() { return MyPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyPageComponent = /** @class */ (function () {
    function MyPageComponent() {
    }
    MyPageComponent.prototype.ngOnInit = function () {
    };
    MyPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-page',
            template: __webpack_require__(/*! ./my-page.component.html */ "./src/app/view/student/my-page/my-page.component.html"),
            styles: [__webpack_require__(/*! ./my-page.component.css */ "./src/app/view/student/my-page/my-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MyPageComponent);
    return MyPageComponent;
}());



/***/ }),

/***/ "./src/app/view/student/sign-in/sign-in.component.css":
/*!************************************************************!*\
  !*** ./src/app/view/student/sign-in/sign-in.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHVkZW50L3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/view/student/sign-in/sign-in.component.html":
/*!*************************************************************!*\
  !*** ./src/app/view/student/sign-in/sign-in.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/view/student/sign-in/sign-in.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/view/student/sign-in/sign-in.component.ts ***!
  \***********************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SignInComponent = /** @class */ (function () {
    function SignInComponent() {
    }
    SignInComponent.prototype.ngOnInit = function () {
    };
    SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/view/student/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/view/student/sign-in/sign-in.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/view/student/sign-up/sign-up-complete/sign-up-complete.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/view/student/sign-up/sign-up-complete/sign-up-complete.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHVkZW50L3NpZ24tdXAvc2lnbi11cC1jb21wbGV0ZS9zaWduLXVwLWNvbXBsZXRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/view/student/sign-up/sign-up-complete/sign-up-complete.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/view/student/sign-up/sign-up-complete/sign-up-complete.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  sign-up-complete works!\n</p>\n"

/***/ }),

/***/ "./src/app/view/student/sign-up/sign-up-complete/sign-up-complete.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/view/student/sign-up/sign-up-complete/sign-up-complete.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SignUpCompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpCompleteComponent", function() { return SignUpCompleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SignUpCompleteComponent = /** @class */ (function () {
    function SignUpCompleteComponent() {
    }
    SignUpCompleteComponent.prototype.ngOnInit = function () {
    };
    SignUpCompleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-up-complete',
            template: __webpack_require__(/*! ./sign-up-complete.component.html */ "./src/app/view/student/sign-up/sign-up-complete/sign-up-complete.component.html"),
            styles: [__webpack_require__(/*! ./sign-up-complete.component.css */ "./src/app/view/student/sign-up/sign-up-complete/sign-up-complete.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SignUpCompleteComponent);
    return SignUpCompleteComponent;
}());



/***/ }),

/***/ "./src/app/view/student/sign-up/sign-up.component.css":
/*!************************************************************!*\
  !*** ./src/app/view/student/sign-up/sign-up.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHVkZW50L3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/view/student/sign-up/sign-up.component.html":
/*!*************************************************************!*\
  !*** ./src/app/view/student/sign-up/sign-up.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>Enter your info.</h1>\n  <input [(ngModel)]=\"signup.student_id\" placeholder=\"student_id\"><br>\n  <input [(ngModel)]=\"signup.student_name\" placeholder=\"student_name\"><br>\n  <input [(ngModel)]=\"signup.student_number\" placeholder=\"student_number\"><br>\n  <input [(ngModel)]=\"signup.student_password\" placeholder=\"student_password\" type=\"password\"><br>\n  <button (click)=\"SignUp()\"> Register User </button>\n</div>\n"

/***/ }),

/***/ "./src/app/view/student/sign-up/sign-up.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/view/student/sign-up/sign-up.component.ts ***!
  \***********************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../user.service */ "./src/app/view/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    SignUpComponent.prototype.ngOnInit = function () {
        this.signup = {
            student_id: '',
            student_name: '',
            student_number: '',
            student_password: ''
        };
    };
    SignUpComponent.prototype.SignUp = function () {
        var _this = this;
        this.userService.signupNewUser(this.signup).subscribe(function (response) {
            _this.router.navigateByUrl('/student/mypage');
        }, function (error) { return console.log('error', error); });
    };
    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/view/student/sign-up/sign-up.component.html"),
            providers: [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]],
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/view/student/sign-up/sign-up.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/view/student/sign-up/user-information/user-information.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/view/student/sign-up/user-information/user-information.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHVkZW50L3NpZ24tdXAvdXNlci1pbmZvcm1hdGlvbi91c2VyLWluZm9ybWF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/view/student/sign-up/user-information/user-information.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/view/student/sign-up/user-information/user-information.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user-information works!\n</p>\n"

/***/ }),

/***/ "./src/app/view/student/sign-up/user-information/user-information.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/view/student/sign-up/user-information/user-information.component.ts ***!
  \*************************************************************************************/
/*! exports provided: UserInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInformationComponent", function() { return UserInformationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserInformationComponent = /** @class */ (function () {
    function UserInformationComponent() {
    }
    UserInformationComponent.prototype.ngOnInit = function () {
    };
    UserInformationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-information',
            template: __webpack_require__(/*! ./user-information.component.html */ "./src/app/view/student/sign-up/user-information/user-information.component.html"),
            styles: [__webpack_require__(/*! ./user-information.component.css */ "./src/app/view/student/sign-up/user-information/user-information.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserInformationComponent);
    return UserInformationComponent;
}());



/***/ }),

/***/ "./src/app/view/student/student.component.css":
/*!****************************************************!*\
  !*** ./src/app/view/student/student.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHVkZW50L3N0dWRlbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/view/student/student.component.html":
/*!*****************************************************!*\
  !*** ./src/app/view/student/student.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  student works!\n</p>\n<button routerLink=\"signin\">Sign In</button> \n<button routerLink=\"signup\">Sign Up</button>\n<button routerLink=\"mypage\">My Page</button> \n\n<router-outlet></router-outlet>\n\n\n"

/***/ }),

/***/ "./src/app/view/student/student.component.ts":
/*!***************************************************!*\
  !*** ./src/app/view/student/student.component.ts ***!
  \***************************************************/
/*! exports provided: StudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentComponent", function() { return StudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StudentComponent = /** @class */ (function () {
    function StudentComponent() {
    }
    StudentComponent.prototype.ngOnInit = function () {
    };
    StudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student',
            template: __webpack_require__(/*! ./student.component.html */ "./src/app/view/student/student.component.html"),
            styles: [__webpack_require__(/*! ./student.component.css */ "./src/app/view/student/student.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StudentComponent);
    return StudentComponent;
}());



/***/ }),

/***/ "./src/app/view/test/hw/hw.component.css":
/*!***********************************************!*\
  !*** ./src/app/view/test/hw/hw.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0L2h3L2h3LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/view/test/hw/hw.component.html":
/*!************************************************!*\
  !*** ./src/app/view/test/hw/hw.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  hw works!\n</p>\n"

/***/ }),

/***/ "./src/app/view/test/hw/hw.component.ts":
/*!**********************************************!*\
  !*** ./src/app/view/test/hw/hw.component.ts ***!
  \**********************************************/
/*! exports provided: HwComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HwComponent", function() { return HwComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HwComponent = /** @class */ (function () {
    function HwComponent() {
    }
    HwComponent.prototype.ngOnInit = function () {
    };
    HwComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hw',
            template: __webpack_require__(/*! ./hw.component.html */ "./src/app/view/test/hw/hw.component.html"),
            styles: [__webpack_require__(/*! ./hw.component.css */ "./src/app/view/test/hw/hw.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HwComponent);
    return HwComponent;
}());



/***/ }),

/***/ "./src/app/view/test/login/login.component.css":
/*!*****************************************************!*\
  !*** ./src/app/view/test/login/login.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0L2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/view/test/login/login.component.html":
/*!******************************************************!*\
  !*** ./src/app/view/test/login/login.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button routerLink=\"test/hw\">HW</button>\n<p>\n  login works!\n</p>\n"

/***/ }),

/***/ "./src/app/view/test/login/login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/view/test/login/login.component.ts ***!
  \****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/view/test/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/view/test/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/view/test/test.module.ts":
/*!******************************************!*\
  !*** ./src/app/view/test/test.module.ts ***!
  \******************************************/
/*! exports provided: ROUTES, TestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestModule", function() { return TestModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/view/test/login/login.component.ts");
/* harmony import */ var _hw_hw_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hw/hw.component */ "./src/app/view/test/hw/hw.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ROUTES = [
    { path: 'test', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'hw', component: _hw_hw_component__WEBPACK_IMPORTED_MODULE_4__["HwComponent"] }
];
var TestModule = /** @class */ (function () {
    function TestModule() {
    }
    TestModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _hw_hw_component__WEBPACK_IMPORTED_MODULE_4__["HwComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(ROUTES),
            ]
        })
    ], TestModule);
    return TestModule;
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
    UserService.prototype.signupNewUser = function (userData) {
        return this.http.post('./sstudents/', userData);
    };
    UserService.prototype.signinNewUser = function (userData) {
        return this.http.post('./auth/', userData);
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./student/student.component */ "./src/app/view/student/student.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/view/home/home.component.ts");
/* harmony import */ var _csee_csee_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./csee/csee.component */ "./src/app/view/csee/csee.component.ts");
/* harmony import */ var _student_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./student/sign-in/sign-in.component */ "./src/app/view/student/sign-in/sign-in.component.ts");
/* harmony import */ var _student_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./student/sign-up/sign-up.component */ "./src/app/view/student/sign-up/sign-up.component.ts");
/* harmony import */ var _student_my_page_my_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./student/my-page/my-page.component */ "./src/app/view/student/my-page/my-page.component.ts");
/* harmony import */ var _student_sign_up_user_information_user_information_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./student/sign-up/user-information/user-information.component */ "./src/app/view/student/sign-up/user-information/user-information.component.ts");
/* harmony import */ var _student_sign_up_sign_up_complete_sign_up_complete_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./student/sign-up/sign-up-complete/sign-up-complete.component */ "./src/app/view/student/sign-up/sign-up-complete/sign-up-complete.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _csee_hw_register_hw_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./csee/hw-register/hw-register.component */ "./src/app/view/csee/hw-register/hw-register.component.ts");
/* harmony import */ var _test_test_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./test/test.module */ "./src/app/view/test/test.module.ts");















var ROUTES = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    {
        path: 'student',
        component: _student_student_component__WEBPACK_IMPORTED_MODULE_4__["StudentComponent"],
        children: [
            { path: 'signin', component: _student_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_7__["SignInComponent"] },
            {
                path: 'signup',
                component: _student_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_8__["SignUpComponent"],
                children: [
                    { path: 'user-info', component: _student_sign_up_user_information_user_information_component__WEBPACK_IMPORTED_MODULE_10__["UserInformationComponent"] },
                    { path: 'signin-complete', component: _student_sign_up_sign_up_complete_sign_up_complete_component__WEBPACK_IMPORTED_MODULE_11__["SignUpCompleteComponent"] }
                ]
            },
            { path: 'mypage', component: _student_my_page_my_page_component__WEBPACK_IMPORTED_MODULE_9__["MyPageComponent"] }
        ]
    },
    {
        path: 'CSEE',
        component: _csee_csee_component__WEBPACK_IMPORTED_MODULE_6__["CSEEComponent"],
        children: [
            { path: 'hw-register', component: _csee_hw_register_hw_register_component__WEBPACK_IMPORTED_MODULE_13__["HwRegisterComponent"] },
        ]
    }
];
var ViewModule = /** @class */ (function () {
    function ViewModule() {
    }
    ViewModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(ROUTES),
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _test_test_module__WEBPACK_IMPORTED_MODULE_14__["TestModule"],
            ],
            declarations: [
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _student_student_component__WEBPACK_IMPORTED_MODULE_4__["StudentComponent"],
                _csee_csee_component__WEBPACK_IMPORTED_MODULE_6__["CSEEComponent"],
                _student_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_7__["SignInComponent"],
                _student_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_8__["SignUpComponent"],
                _student_my_page_my_page_component__WEBPACK_IMPORTED_MODULE_9__["MyPageComponent"],
                _student_sign_up_user_information_user_information_component__WEBPACK_IMPORTED_MODULE_10__["UserInformationComponent"],
                _student_sign_up_sign_up_complete_sign_up_complete_component__WEBPACK_IMPORTED_MODULE_11__["SignUpCompleteComponent"],
                _csee_hw_register_hw_register_component__WEBPACK_IMPORTED_MODULE_13__["HwRegisterComponent"],
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