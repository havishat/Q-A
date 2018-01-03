webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__newquestion_newquestion_component__ = __webpack_require__("../../../../../src/app/newquestion/newquestion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pollvote_pollvote_component__ = __webpack_require__("../../../../../src/app/pollvote/pollvote.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__newanswer_newanswer_component__ = __webpack_require__("../../../../../src/app/newanswer/newanswer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        pathMatch: 'full',
        component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */],
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */],
    },
    {
        path: 'newquestion',
        component: __WEBPACK_IMPORTED_MODULE_4__newquestion_newquestion_component__["a" /* NewquestionComponent */],
    },
    {
        path: 'new_answer/:id',
        component: __WEBPACK_IMPORTED_MODULE_6__newanswer_newanswer_component__["a" /* NewanswerComponent */],
    },
    {
        path: 'pollvote/:id',
        component: __WEBPACK_IMPORTED_MODULE_5__pollvote_pollvote_component__["a" /* PollvoteComponent */],
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_service__ = __webpack_require__("../../../../../src/app/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__newquestion_newquestion_component__ = __webpack_require__("../../../../../src/app/newquestion/newquestion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pollvote_pollvote_component__ = __webpack_require__("../../../../../src/app/pollvote/pollvote.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__newanswer_newanswer_component__ = __webpack_require__("../../../../../src/app/newanswer/newanswer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__filter_pipe__ = __webpack_require__("../../../../../src/app/filter.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



 // <— Import
 // <-- Import FormsModule








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__newquestion_newquestion_component__["a" /* NewquestionComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pollvote_pollvote_component__["a" /* PollvoteComponent */],
                __WEBPACK_IMPORTED_MODULE_11__newanswer_newanswer_component__["a" /* NewanswerComponent */],
                __WEBPACK_IMPORTED_MODULE_12__filter_pipe__["a" /* FilterPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_2__task_service__["a" /* TaskService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\n    margin: 0px;\n    padding: 0px;\n    font: inherit;\n}\n\n.header h2{\n    font: 100 20pt \"Roboto\";\n}\n.header{\n    margin-bottom: 20px;\n}\n\n.logout {\n    padding: 5px 10px 5px 10px;\n    font: 100 10pt \"Roboto\";\n}\n\n.header a {\n    font: 100 10pt \"Roboto\";\n}\n\n.current{\n    font: 100 13pt \"Roboto\";\n}\n\n.current h4 {\n    font: 100 16pt \"Roboto\";\n}\n\ninput[type=submit] {\n    font: 100 10pt \"Roboto\";\n}\n\n.topcontainer {\n    margin-left: 50px;\n    margin-bottom: 20px;\n}\n\n.searchbar {\n    margin-left: 30px;\n}\n\n*{\n    margin: 0px;\n    padding: 0px;\n    font: inherit;\n}\n\nh3{\n    font: 100 20pt \"Roboto\";\n}\n\n.container {\n    margin-left: 80px;\n}\n\nth, td{\n    padding: 10px;\n    border: 1px solid black;\n}\n\nth{\n    font: 100 17pt \"Roboto\";\n}\n\ntd {\n    font: 100 13pt \"Roboto\";\n}\n/* button {\n    padding: 5px 10px 5px 10px;\n} */\n\n* {\n    font-family: 'Raleway', sans-serif;\n}\n\nbody {\n    background: url(" + __webpack_require__("../../../../../src/assets/background.jpg") + ") no-repeat center center fixed;\n    background-size: cover;\n    height: 970px;\n    width: 970px;\n}\n\n\nh1 {\n    text-align: center;\n    margin: 50px;\n    font-weight: bold;\n    color: blue;\n    font-size: 400%;\n}\n\n.log-reg {\n    margin: 0 auto;\n    text-align: center;\n    width: 90%;\n}\n\n.inline {\n    display: inline-block;\n    vertical-align: top;\n    margin: 20px;\n    height: 250px;\n    width: 250px;\n}\n\n.wrapper {\n    background-color: #fff;\n    margin: 20px auto;\n    padding: 25px;\n    width: 50%;\n    border-radius: 25px;\n    box-shadow: 0px 3px 106px -12px rgba(8,8,8,1);\n  }\n\ninput {\n    margin: 5px;\n}\n\n.button {\n    width: 50px;\n    height: 50px;\n    background: green;\n}\n\nfieldset {\n    color: blueviolet;\n    font-size: 120%;\n    font-style: oblique;\n}\n\n.like {\n    background: blue;\n    color: white;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n      <meta charset=\"utf-8\">\n      <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n      <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->\n      <title>Dashboard</title>\n  </head>\n\n  <body>\n    <div class=\"wrapper\">\n        <div class=\"topcontainer\">\n          <div class=\"header\">\n              <h2>Hi {{ name }}!</h2>\n              <a [routerLink] = \"['/newquestion']\">Add a Question</a><a><span (click) = \"logout()\"><button type=\"button\" class=\"like\" class=\"logout\">Logout</button></span></a>\n          </div>\n          <input [(ngModel)]=\"searchText\" placeholder=\"search for questions\">\n        </div>\n        <table col-width = \"50%\">\n              <thead>\n                  <tr>\n                    <th>Question</th>\n                    <th>Answers</th>\n                    <th>Actions</th>          \n                  </tr>\n              </thead>\n              <tr *ngFor = \"let question of questions | filter: searchText\">\n                  <td>{{question.question}}</td>\n                  <td>{{question._answers.length}}</td>\n                  <td><p><button class=\"like\" type=\"button\" name=\"button\" (click) = \"show(question._id)\">show</button><button class=\"like\" type=\"button\" name=\"button\" (click) = \"answer(question._id)\">Answer</button></p></td>          \n              </tr>\n          </table>\n    </div>\n  </body>\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__task_service__ = __webpack_require__("../../../../../src/app/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(task, _router) {
        this.task = task;
        this._router = _router;
        this.questions = [];
        // private deletedPollID;
        // private displaypolls: Array<any>;
        this.input = {
            key: ''
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
        // if(this.task.session == null){
        //   this._router.navigateByUrl('/')
        // }
        this.retrieveid();
        this.displayQuestions();
    };
    //user name
    DashboardComponent.prototype.retrieveid = function () {
        var _this = this;
        this.task.retrieveid(function (data) {
            _this.name = data.name;
        });
    };
    //logout
    DashboardComponent.prototype.logout = function () {
        var _this = this;
        this.task.logout()
            .then(function (data) { return _this._router.navigateByUrl('/'); })
            .catch(function (err) { return console.warn(err); });
    };
    //display all questions
    DashboardComponent.prototype.displayQuestions = function () {
        var _this = this;
        this.task.displayQuestions(function (data) {
            // console.log("data",data)
            _this.questions = data;
            console.log("questions", _this.questions);
        });
    };
    //navigate to one question page for vote likes 
    DashboardComponent.prototype.show = function (id) {
        this._router.navigate(['/pollvote/' + id]);
    };
    //navigate to one answer
    DashboardComponent.prototype.answer = function (id) {
        this._router.navigate(['/new_answer/' + id]);
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__task_service__["a" /* TaskService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            return it.question.toLowerCase().includes(searchText);
        });
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n    font-family: 'Raleway', sans-serif;\n}\n\nbody {\n    background: url(" + __webpack_require__("../../../../../src/assets/background.jpg") + ") no-repeat center center fixed;\n    background-size: cover;\n}\n\n\nh1 {\n    text-align: center;\n    margin: 50px;\n    font-weight: bold;\n    color: blue;\n    font-size: 400%;\n}\n\n.log-reg {\n    margin: 0 auto;\n    text-align: center;\n    width: 90%;\n}\n\n.inline {\n    display: inline-block;\n    vertical-align: top;\n    margin: 20px;\n    height: 250px;\n    width: 250px;\n}\n\n.wrapper {\n    background-color: #fff;\n    margin: 20px auto;\n    padding: 25px;\n    width: 50%;\n    border-radius: 25px;\n    box-shadow: 0px 3px 106px -12px rgba(8,8,8,1);\n  }\n\ninput {\n    margin: 5px;\n}\n\n.button {\n    width: 50px;\n    height: 50px;\n    background: green;\n}\n\nfieldset {\n    color: blueviolet;\n    font-size: 120%;\n    font-style: oblique;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <title>Login</title>\n</head>\n<body>\n    <div class=\"log-reg\">\n    <img src=\"../../../assets/images.jpg\" alt=\"Mountain View\" width=\"500\" height=\"377\"><br>\n    <h1>Login Page</h1>\n    <fieldset class=\"wrapper\" class=\"inline\"> \n        <form (submit)=\"onSubmit()\" #formData='ngForm'>\n            Enter Your Name: <br> <input name='name'\n            class='long'\n            type=\"text\"\n            required\n            minlength=\"3\"\n            [(ngModel)]=\"loginobject.name\"\n            />\n            <br>\n            <br>\n            <input class='button' [disabled]='formData.invalid' type=\"submit\" value=\"Login\">\n        </form> \n    </fieldset>\n    </div>\n    \n</body>\n</html> \n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__task_service__ = __webpack_require__("../../../../../src/app/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(_taskService, _router) {
        this._taskService = _taskService;
        this._router = _router;
        this.loginobject = {
            name: '',
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._taskService.retrieveid(function (a) {
            _this.updatedlogin = a;
            _this._router.navigateByUrl('/dashboard');
            console.log("id", _this.updatedlogin._id);
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this._taskService.createNote(this.loginobject, function (hi) {
            _this._taskService.retrieveid(function (a) {
                console.log("will this work??");
                _this.updatedlogin = a;
                _this._taskService.session = a;
                _this._router.navigateByUrl('/dashboard');
                console.log("login", _this.updatedlogin);
                console.log("id", _this._taskService.session._id);
            });
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__task_service__["a" /* TaskService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/newanswer/newanswer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n    font-family: 'Raleway', sans-serif;\n}\n\nbody {\n    background: url(" + __webpack_require__("../../../../../src/assets/background.jpg") + ") no-repeat center center fixed;\n    background-size: cover;\n    height: 970px;\n    width: 970px;\n}\n\n\nh1 {\n    text-align: center;\n    margin: 50px;\n    font-weight: bold;\n    color: blue;\n    font-size: 400%;\n}\n\n.log-reg {\n    margin: 0 auto;\n    text-align: center;\n    width: 90%;\n}\n\n.inline {\n    display: inline-block;\n    vertical-align: top;\n    margin: 20px;\n    height: 250px;\n    width: 250px;\n}\n\n.wrapper {\n    background-color: #fff;\n    margin: 20px auto;\n    padding: 25px;\n    width: 50%;\n    border-radius: 25px;\n    box-shadow: 0px 3px 106px -12px rgba(8,8,8,1);\n  }\n\ninput {\n    margin: 5px;\n}\n\n.button {\n    width: 50px;\n    height: 50px;\n    background: green;\n}\n\nfieldset {\n    color: blueviolet;\n    font-size: 120%;\n    font-style: oblique;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/newanswer/newanswer.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n      <meta charset=\"utf-8\">\n      <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n      <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->\n      <title>new answer</title>\n      <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n      <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n      <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n  </head>\n\n  <body>\n      <a [routerLink] = \"['/dashboard']\">Home</a>\n      <a><span (click) = \"goBackQuestion()\"><button type=\"button\">Go Back Question</button></span></a>  \n      <a><span (click) = \"logout()\"><button type=\"button\" class=\"logout\">Logout</button></span></a>\n    <h1>\n      {{question.question}}\n    </h1>\n    <p>{{question.description}}</p>\n    <div class=\"wrapper\">\n        <form (submit)=\"createAnswer()\" #formData='ngForm'>\n        Your Answer: <input name='your answer' type=\"text\" required minlength=\"5\"  [(ngModel)] = \"newanswer.answer\" #answer='ngModel'/> <br>\n        <span *ngIf=(answer.errors) [ngStyle]=\"{'color': 'red'}\"> Give me valid answer!</span>\n        <span *ngIf=(answer.errors) [ngStyle]=\"{'color': 'red'}\"> {{ answer.errors | json }}</span> \n        <br>\n        Supporting details for your answer (optional): <input name='details' type=\"text\" [(ngModel)] = \"newanswer.details\"/> <br>\n        <input [disabled]='formData.invalid' type=\"submit\" value=\"Submit\"> \n      </form>\n      <button><a [routerLink] = \"['/dashboard']\">Cancel</a></button>\n    </div>\n  </body> \n</html>\n"

/***/ }),

/***/ "../../../../../src/app/newanswer/newanswer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewanswerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__task_service__ = __webpack_require__("../../../../../src/app/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewanswerComponent = (function () {
    function NewanswerComponent(task, _router, _route) {
        var _this = this;
        this.task = task;
        this._router = _router;
        this._route = _route;
        this.newanswer = {
            name: '',
            answer: '',
            details: '',
            likes: 0,
            _questionID: ''
        };
        this._route.paramMap.subscribe(function (params) {
            _this.questionID = params.get('id');
            console.log("id", _this.questionID);
        });
    }
    NewanswerComponent.prototype.ngOnInit = function () {
        // this.retrieveid();
        this.displayAnswer();
    };
    NewanswerComponent.prototype.createAnswer = function () {
        var _this = this;
        this.newanswer.name = this.loggeduser;
        console.log("name1", this.newanswer.name);
        this.newanswer._questionID = this.questionID;
        console.log("newanswer", this.newanswer);
        this.task.createAnswer(this.newanswer, function (res) {
            _this.newanswer.name = _this.loggeduser;
            console.log("name2", _this.newanswer.name);
            _this.question._answers.push(res);
            _this.task.updateQuestion(_this.questionID, _this.question, function (callback) {
                _this._router.navigate(['/']);
            });
            console.log("newnewanswerinfo2", res);
        }, function () {
            console.log("error something");
        });
    };
    NewanswerComponent.prototype.displayAnswer = function () {
        var _this = this;
        this.loggeduser = this.task.loggedUser;
        this.task.displayOneQuestion(this.questionID, function (oneQuestion) {
            _this.question = oneQuestion;
            console.log("question", _this.question);
        });
    };
    NewanswerComponent.prototype.logout = function () {
        var _this = this;
        this.task.logout()
            .then(function (data) { return _this._router.navigateByUrl('/'); })
            .catch(function (err) { return console.warn(err); });
    };
    NewanswerComponent.prototype.goBackQuestion = function () {
        this._router.navigate(['/pollvote/' + this.questionID]);
    };
    NewanswerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-newanswer',
            template: __webpack_require__("../../../../../src/app/newanswer/newanswer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/newanswer/newanswer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__task_service__["a" /* TaskService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], NewanswerComponent);
    return NewanswerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/newquestion/newquestion.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n    font-family: 'Raleway', sans-serif;\n}\n\nbody {\n    background: url(" + __webpack_require__("../../../../../src/assets/background.jpg") + ") no-repeat center center fixed;\n    background-size: cover;\n    height: 970px;\n    width: 970px;\n}\n\n\nh1 {\n    text-align: center;\n    margin: 50px;\n    font-weight: bold;\n    color: blue;\n    font-size: 400%;\n}\n\n.log-reg {\n    margin: 0 auto;\n    text-align: center;\n    width: 90%;\n}\n\n.inline {\n    display: inline-block;\n    vertical-align: top;\n    margin: 20px;\n    height: 250px;\n    width: 250px;\n}\n\n.wrapper {\n    background-color: #fff;\n    margin: 20px auto;\n    padding: 25px;\n    width: 50%;\n    border-radius: 25px;\n    box-shadow: 0px 3px 106px -12px rgba(8,8,8,1);\n  }\n\ninput {\n    margin: 5px;\n}\n\n.button {\n    width: 50px;\n    height: 50px;\n    background: green;\n}\n\nfieldset {\n    color: blueviolet;\n    font-size: 120%;\n    font-style: oblique;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/newquestion/newquestion.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n      <meta charset=\"utf-8\">\n      <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n      <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->\n      <title>new question</title>\n      <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n      <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n      <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n  </head>\n\n  <body>\n      <a [routerLink] = \"['/dashboard']\">Home</a><a><span (click) = \"logout()\"><button type=\"button\" class=\"logout\">Logout</button></span></a>\n    <h1>\n      New Question:\n    </h1>\n    <div class=\"wrapper\">\n        <form (submit)=\"createQuestion()\" #formData='ngForm'>\n        Question: <input name='question' type=\"text\" required minlength=\"10\"  [(ngModel)] = \"newquestion.question\" #question='ngModel'/> <br>\n        <span *ngIf=(question.errors) [ngStyle]=\"{'color': 'red'}\"> Give me valid question!</span>\n        <span *ngIf=(question.errors) [ngStyle]=\"{'color': 'red'}\"> {{ question.errors | json }}</span> \n        <br>\n        Description (optional): <input name='description' type=\"text\" [(ngModel)] = \"newquestion.description\"/> <br>\n        <input [disabled]='formData.invalid' type=\"submit\" value=\"Submit\"> \n      </form>\n      <button><a [routerLink] = \"['/dashboard']\">Cancel</a></button>\n    </div>\n  </body> \n</html>\n"

/***/ }),

/***/ "../../../../../src/app/newquestion/newquestion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewquestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__task_service__ = __webpack_require__("../../../../../src/app/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewquestionComponent = (function () {
    function NewquestionComponent(task, _router) {
        this.task = task;
        this._router = _router;
        this.newquestion = {
            question: '',
            description: '',
            _userId: '',
            creator: '',
        };
    }
    NewquestionComponent.prototype.ngOnInit = function () {
        // if(this.task.session == null){
        //   this._router.navigateByUrl('/')
        // }
        this.retrieveid();
    };
    NewquestionComponent.prototype.retrieveid = function () {
        var _this = this;
        this.task.retrieveid(function (data) {
            _this.name = data.name;
        });
    };
    NewquestionComponent.prototype.createQuestion = function () {
        this.newquestion.creator = this.task.session.name;
        this.newquestion._userId = this.task.session._id;
        console.log("newQuestion", this.newquestion);
        this._router.navigate(["/dashboard"]);
        this.task.createquestion(this.newquestion, function (res) {
            console.log("newQuestioninfo2", res);
        }, function () {
            console.log("error something");
        });
    };
    NewquestionComponent.prototype.logout = function () {
        var _this = this;
        this.task.logout()
            .then(function (data) { return _this._router.navigateByUrl('/'); })
            .catch(function (err) { return console.warn(err); });
    };
    NewquestionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-newquestion',
            template: __webpack_require__("../../../../../src/app/newquestion/newquestion.component.html"),
            styles: [__webpack_require__("../../../../../src/app/newquestion/newquestion.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__task_service__["a" /* TaskService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], NewquestionComponent);
    return NewquestionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pollvote/pollvote.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n    font-family: 'Raleway', sans-serif;\n}\n\nbody {\n    background: url(" + __webpack_require__("../../../../../src/assets/background.jpg") + ") no-repeat center center fixed;\n    background-size: cover;\n    height: 970px;\n    width: 970px;\n}\n\n\nh1 {\n    text-align: center;\n    margin: 50px;\n    font-weight: bold;\n    color: blue;\n    font-size: 400%;\n}\n\n.log-reg {\n    margin: 0 auto;\n    text-align: center;\n    width: 90%;\n}\n\n.inline {\n    display: inline-block;\n    vertical-align: top;\n    margin: 20px;\n    height: 250px;\n    width: 250px;\n}\n\n.wrapper {\n    background-color: #fff;\n    margin: 20px auto;\n    padding: 25px;\n    width: 50%;\n    border-radius: 25px;\n    box-shadow: 0px 3px 106px -12px rgba(8,8,8,1);\n  }\n\ninput {\n    margin: 5px;\n}\n\n.button {\n    width: 50px;\n    height: 50px;\n    background: green;\n}\n\n.like {\n    background: blue;\n    color: white;\n}\n\nfieldset {\n    color: blueviolet;\n    font-size: 120%;\n    font-style: oblique;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pollvote/pollvote.component.html":
/***/ (function(module, exports) {

module.exports = "<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->\n  <title>poll vote</title>\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n</head>\n<body>\n\n<a [routerLink] = \"['/dashboard']\">Home</a>\n<a  (click)=\"answerThisQuestion()\" >Answer this Question</a>\n<a><span (click) = \"logout()\"><button type=\"button\" class=\"logout\">Logout</button></span></a>\n<div class=\"wrapper\">\n<h1>{{ question.question }}</h1>\n<p>{{ question.description }}</p>\n<table>\n    <tr *ngFor='let answer of answers'>\n      <td>\n        {{answer.name}}<br>\n        <b>{{answer.answer}}</b><br>\n        {{answer.details}}\n      </td>\n      <td >{{answer.likes}} likes</td>\n      <td><button class=\"like\" (click)='like(answer._id, answer)'>Like!</button></td>\n    </tr>\n</table>\n</div>\n</body>\n</html>"

/***/ }),

/***/ "../../../../../src/app/pollvote/pollvote.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PollvoteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__task_service__ = __webpack_require__("../../../../../src/app/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PollvoteComponent = (function () {
    function PollvoteComponent(task, _router, _route) {
        var _this = this;
        this.task = task;
        this._router = _router;
        this._route = _route;
        this._route.paramMap.subscribe(function (params) {
            _this.questionID = params.get('id');
            console.log("id", _this.questionID);
        });
    }
    PollvoteComponent.prototype.ngOnInit = function () {
        this.display();
    };
    PollvoteComponent.prototype.display = function () {
        var _this = this;
        this.loggeduser = this.task.loggedUser;
        console.log("creator", this.loggeduser);
        this.task.displayOneQuestion(this.questionID, function (question) {
            _this.question = question;
            console.log("get this one question", _this.question);
        });
        this.task.displayAllAnswers(this.questionID, function (answers) {
            _this.answers = answers;
            console.log("get all its answers", _this.answers);
        });
    };
    PollvoteComponent.prototype.like = function (id, answer) {
        answer.likes += 1;
        this.task.updateAnswer(id, answer);
    };
    PollvoteComponent.prototype.answerThisQuestion = function () {
        this._router.navigate(['/new_answer/' + this.questionID]);
    };
    PollvoteComponent.prototype.logout = function () {
        var _this = this;
        this.task.logout()
            .then(function (data) { return _this._router.navigateByUrl('/'); })
            .catch(function (err) { return console.warn(err); });
    };
    PollvoteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pollvote',
            template: __webpack_require__("../../../../../src/app/pollvote/pollvote.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pollvote/pollvote.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__task_service__["a" /* TaskService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], PollvoteComponent);
    return PollvoteComponent;
}());



/***/ }),

/***/ "../../../../../src/app/task.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // <— Imported

var TaskService = (function () {
    function TaskService(_http) {
        this._http = _http;
        this.loggedUser = null;
    }
    // dashboad logout 
    TaskService.prototype.logout = function () {
        return this._http.get('/login/logout')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    // login page created
    TaskService.prototype.createNote = function (user, callback) {
        var _this = this;
        this.loggedUser = user.name;
        console.log("user", user);
        return this._http.post('/login', user).subscribe(function (response) {
            console.log("login sent to response", response);
            _this.session = response;
            callback();
        }, function (error) {
            console.log("could not login", error);
        });
    };
    //get the user names 
    TaskService.prototype.retrieveid = function (callback) {
        this._http.get('/login/one').subscribe(function (response) {
            callback(response.json());
        }, function (error) {
            console.log("could not retrive all data", error);
        });
    };
    TaskService.prototype.createquestion = function (questioninfo, callback, errorback) {
        console.log("questioninfo1", questioninfo);
        this._http.post('/questions', questioninfo).subscribe(function (response) {
            callback(response.json());
        }, function (error) {
            errorback();
            console.log("could not display question", error);
        });
    };
    TaskService.prototype.displayQuestions = function (callback) {
        console.log("1234");
        this._http.get('/questions').subscribe(function (response) {
            callback(response.json());
        }, function (error) {
            console.log("could not display quesitons", error);
        });
    };
    TaskService.prototype.displayOneQuestion = function (id, callback) {
        console.log("1234");
        this._http.get("/question/" + id).subscribe(function (response) {
            console.log("display one question", response);
            callback(response.json());
        }, function (error) {
            console.log("could not display one quesiton", error);
        });
    };
    TaskService.prototype.updateQuestion = function (id, new_question, callback) {
        this._http.put("/questions/" + id, new_question).subscribe(function (response) {
            callback(response.json());
            console.log("got in here");
        }, function (error) {
            console.log(error);
        });
    };
    TaskService.prototype.createAnswer = function (answerinfo, callback, errorback) {
        console.log("questioninfo1", answerinfo);
        this._http.post('/answer', answerinfo).subscribe(function (response) {
            callback(response.json());
        }, function (error) {
            errorback();
            console.log("could not display answer", error);
        });
    };
    TaskService.prototype.displayAllAnswers = function (id, callback) {
        console.log("get answers", id);
        this._http.get("/answers/" + id).subscribe(function (response) {
            callback(response.json());
        }, function (error) {
            console.log("could not display all answers", error);
        });
    };
    TaskService.prototype.updateAnswer = function (id, updatedQuestion) {
        this._http.put("/answer/" + id, updatedQuestion).subscribe(function (response) {
            console.log("updated", response);
        }, function (error) {
            console.log("could not update answers", error);
        });
    };
    TaskService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "../../../../../src/assets/background.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "background.ba8d141f74af3821332c.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map