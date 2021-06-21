(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/callenord/projects/time-management/src/main.ts */"zUnb");


/***/ }),

/***/ "0KrY":
/*!**********************************!*\
  !*** ./src/app/tasks.service.ts ***!
  \**********************************/
/*! exports provided: TasksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksService", function() { return TasksService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class TasksService {
    constructor() {
        if (localStorage.getItem('tasks')) {
            this.tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        else {
            this.tasks = [{ name: 'Зарядка', time: 0, value: '00:00:00', dead: '' }, { name: 'Учёба', time: 0, value: '00:00:00', dead: '' }, { name: 'Работа', time: 0, value: '00:00:00', dead: '' }];
        }
        this.task$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.tasks);
    }
    addTask(task) {
        this.tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
    removeTask(id) {
        this.tasks.splice(id, 1);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}
TasksService.ɵfac = function TasksService_Factory(t) { return new (t || TasksService)(); };
TasksService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TasksService, factory: TasksService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TasksService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "OCdn":
/*!************************************************!*\
  !*** ./src/app/deadline/deadline.component.ts ***!
  \************************************************/
/*! exports provided: DeadlineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeadlineComponent", function() { return DeadlineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _tasks_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tasks.service */ "0KrY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function DeadlineComponent_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", task_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r3.name);
} }
function DeadlineComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0435\u0440\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DeadlineComponent {
    constructor(t) {
        this.t = t;
        this.time = '';
        this.invalid = false;
    }
    ngOnInit() {
        this.tasks = this.t.tasks;
        this.value = this.t.tasks[0];
    }
    setTime(t) {
        this.time = '';
        this.invalid = !/^(?:2[0-3]|[01]?[0-9]):[0-5][0-9]:[0-5][0-9]$/.test(t);
        if (this.invalid === false) {
            if (this.t.tasks.find((t) => t.name === this.value.name)) {
                this.t.tasks.find((t) => t.name === this.value.name).dead = t;
                localStorage.setItem('tasks', JSON.stringify(this.t.tasks));
            }
        }
    }
    setCurrentTask(v) {
        this.value = v;
    }
}
DeadlineComponent.ɵfac = function DeadlineComponent_Factory(t) { return new (t || DeadlineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tasks_service__WEBPACK_IMPORTED_MODULE_1__["TasksService"])); };
DeadlineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeadlineComponent, selectors: [["app-deadline"]], decls: 9, vars: 3, consts: [["name", "task", "id", "task", 3, "change"], ["t", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", 3, "ngModel", "ngModelChange"], [3, "click"], [4, "ngIf"], [3, "value"]], template: function DeadlineComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0415\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u044B\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "select", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DeadlineComponent_Template_select_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.setCurrentTask(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DeadlineComponent_option_4_Template, 2, 2, "option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DeadlineComponent_Template_input_ngModelChange_5_listener($event) { return ctx.time = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeadlineComponent_Template_button_click_6_listener() { return ctx.setTime(ctx.time); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C \u0432\u0440\u0435\u043C\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DeadlineComponent_p_8_Template, 2, 0, "p", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tasks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.time);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]], styles: ["input[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 2px solid purple;\n  border-radius: 5px;\n  outline: none;\n  margin-right: 10px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  padding: 10px;\n  background-color: yellowgreen;\n  color: white;\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\", \"Lucida Sans\", Arial, sans-serif;\n  cursor: pointer;\n  border-radius: 5px;\n  border: 2px solid #e236b7;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\", \"Lucida Sans\", Arial, sans-serif;\n  font-size: 1.5em;\n  color: white;\n  text-shadow: 0 1px 2px black;\n}\n\nselect[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 5px;\n  background-color: #ffdd6d;\n}\n\np[_ngcontent-%COMP%] {\n  width: 250px;\n  padding: 10px;\n  border: 2px solid #ff3030;\n  background-color: #ff9c99;\n  border-radius: 10px;\n  color: red;\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\", \"Lucida Sans\", Arial, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2RlYWRsaW5lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxxR0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxR0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EscUdBQUE7QUFDSiIsImZpbGUiOiJkZWFkbGluZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0IHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHB1cnBsZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbmJ1dHRvbiB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3dncmVlbjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjI2LCA1NCwgMTgzKTtcbn1cblxuaDIge1xuICAgIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtc2hhZG93OiAwIDFweCAycHggYmxhY2s7XG59XG5cbnNlbGVjdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIyMSwgMTA5KTtcbn1cblxucCB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDI1NSwgNDgsIDQ4KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNTUsIDE1NiwgMTUzKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeadlineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-deadline',
                templateUrl: './deadline.component.html',
                styleUrls: ['./deadline.component.scss']
            }]
    }], function () { return [{ type: _tasks_service__WEBPACK_IMPORTED_MODULE_1__["TasksService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _tasks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks.service */ "0KrY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







function AppComponent_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", task_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r2.name);
} }
class AppComponent {
    constructor(title, tasksService) {
        this.title = title;
        this.tasksService = tasksService;
        this.isStart = true;
        this.title.setTitle('Time Management App');
    }
    get getStartButtonStatus() {
        return this.isStart ? 'Начать' : '| |';
    }
    ngOnInit() {
        this.tasks = this.tasksService.tasks;
        this.currentTask = this.tasks[0];
    }
    setCurrentTask(task) {
        this.currentTask = this.tasks.find(((t) => t.name === task));
    }
    startTime() {
        if (!this.isStart) {
            this.timer = new Date();
        }
        else {
            this.currentTask.time += Math.floor((new Date().getTime() - this.timer.getTime()) / 1000);
            let data = new Date(0);
            data.setSeconds(this.currentTask.time);
            this.currentTask.value = data.toISOString().substr(11, 8);
            this.tasksService.task$.next(this.tasks);
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tasks_service__WEBPACK_IMPORTED_MODULE_2__["TasksService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 20, vars: 4, consts: [[1, "menu"], ["routerLink", "/stats", 1, "btn", "stats-btn"], ["routerLink", "/new", 1, "btn", "new-btn"], ["routerLink", "/pomodoro", 1, "btn", "technique-btn"], ["routerLink", "/deadline", 1, "btn", "deadline-btn"], ["name", "task", "id", "task", 3, "change"], ["t", ""], [3, "value", 4, "ngFor", "ngForOf"], ["routerLink", "/", 1, "app-title", 2, "cursor", "pointer"], [1, "current-activity"], [1, "router"], [1, "start-button", 3, "click"], [3, "value"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u041D\u043E\u0432\u0430\u044F \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u0422\u0435\u0445\u043D\u0438\u043A\u0430 Pomodoro ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u0415\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u044B\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "select", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_select_change_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return ctx.setCurrentTask(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppComponent_option_11_Template, 2, 2, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Time Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_18_listener() { ctx.isStart = !ctx.isStart; return ctx.startTime(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tasks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", !ctx.isStart);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getStartButtonStatus);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"]], styles: ["body {\n  background: #ffeeee;\n  background: linear-gradient(to right, #ffeeee, #ddefbb);\n}\n\n.app-title {\n  grid-area: title;\n  text-align: center;\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\", \"Lucida Sans\", Arial, sans-serif;\n  color: white;\n  text-shadow: 0 3px 3px black;\n}\n\n.start-button {\n  padding: 73px 50px;\n  width: 200px;\n  grid-area: btn;\n  height: 200px;\n  border-radius: 50%;\n  font-size: 2rem;\n  background-color: #cf7070;\n  color: white;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.5s;\n  margin: auto;\n  margin-top: 25%;\n  display: block;\n}\n\n.start-button:hover {\n  background-color: #c94444;\n}\n\n.active {\n  background-color: sandybrown;\n  transition: all 0.5s;\n}\n\n.active:hover {\n  background-color: #79572a;\n}\n\n.btn {\n  border: 1px solid white;\n  border-radius: 10px;\n  box-shadow: 0 3px 3px 3px white;\n  padding: 10px;\n  color: white;\n  cursor: pointer;\n  margin: 10px;\n}\n\n.stats-btn {\n  background-color: darkmagenta;\n}\n\n.new-btn {\n  background-color: darkorange;\n}\n\n.technique-btn {\n  background-color: #0aa188;\n}\n\n.deadline-btn {\n  background-color: #00bdbd;\n}\n\nselect {\n  padding: 10px;\n  border: 1px solid white;\n}\n\n.router {\n  grid-area: router;\n  padding-left: 20px;\n}\n\n.current-activity {\n  display: grid;\n  grid-template-areas: \"router  title\" \"router  btn\";\n  grid-template-columns: repeat(2, 1fr);\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n}\n\n.menu {\n  box-shadow: 0 3px 3px 0 black;\n}\n\n.app-title {\n  display: inline;\n  float: right;\n  margin: 7px;\n  padding-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBRUEsdURBQUE7QUFDRjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxR0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUlBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUZKOztBQUhJO0VBQ0kseUJBQUE7QUFLUjs7QUFFQTtFQUNJLDRCQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFBSTtFQUNJLHlCQUFBO0FBRVI7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSw2QkFBQTtBQUNKOztBQUVBO0VBQ0ksNEJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0Esa0RBQUE7RUFFQSxxQ0FBQTtBQUFKOztBQUdBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUFBSjs7QUFHQTtFQUNJLDZCQUFBO0FBQUo7O0FBR0E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUFKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBiYWNrZ3JvdW5kOiAjZmZlZWVlO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZWVlZSwgI2RkZWZiYik7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZWVlZSwgI2RkZWZiYik7XG59XG5cbi5hcHAtdGl0bGUge1xuICAgIGdyaWQtYXJlYTogdGl0bGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LXNoYWRvdzogMCAzcHggM3B4IGJsYWNrO1xufVxuXG4uc3RhcnQtYnV0dG9uIHtcbiAgICBwYWRkaW5nOiA3M3B4IDUwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGdyaWQtYXJlYTogYnRuO1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA3LCAxMTIsIDExMik7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAxLCA2OCwgNjgpO1xuICAgIH1cbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLXRvcDogMjUlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzYW5keWJyb3duO1xuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjEsIDg3LCA0Mik7XG4gICAgfVxufVxuXG4uYnRuIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDNweCAzcHggd2hpdGU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbjogMTBweDtcbn1cblxuLnN0YXRzLWJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya21hZ2VudGE7XG59XG5cbi5uZXctYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrb3JhbmdlO1xufVxuXG4udGVjaG5pcXVlLWJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwLCAxNjEsIDEzNik7XG59XG5cbi5kZWFkbGluZS1idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxODksIDE4OSk7XG59XG5cbnNlbGVjdCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbn1cblxuLnJvdXRlciB7XG4gICAgZ3JpZC1hcmVhOiByb3V0ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4uY3VycmVudC1hY3Rpdml0eSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcInJvdXRlciAgdGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXIgIGJ0blwiO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG59XG5cbmJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4ubWVudSB7XG4gICAgYm94LXNoYWRvdzogMCAzcHggM3B4IDAgYmxhY2s7XG59XG5cbi5hcHAtdGl0bGUge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luOiA3cHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cbiJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }, { type: _tasks_service__WEBPACK_IMPORTED_MODULE_2__["TasksService"] }]; }, null); })();


/***/ }),

/***/ "TlSY":
/*!**************************************!*\
  !*** ./src/app/new/new.component.ts ***!
  \**************************************/
/*! exports provided: NewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComponent", function() { return NewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _tasks_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tasks.service */ "0KrY");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class NewComponent {
    constructor(tasksS) {
        this.tasksS = tasksS;
    }
    saveNew() {
        this.tasksS.addTask({
            name: this.newName,
            time: 0,
            value: '00:00'
        });
    }
}
NewComponent.ɵfac = function NewComponent_Factory(t) { return new (t || NewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tasks_service__WEBPACK_IMPORTED_MODULE_1__["TasksService"])); };
NewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewComponent, selectors: [["app-new"]], decls: 6, vars: 1, consts: [["type", "text", 3, "ngModel", "ngModelChange"], ["d", ""], [3, "click"]], template: function NewComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043D\u043E\u0432\u043E\u0439 \u0437\u0430\u0434\u0430\u0447\u0438:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewComponent_Template_input_ngModelChange_2_listener($event) { return ctx.newName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewComponent_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); ctx.saveNew(); return _r0.value = ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newName);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: ["button[_ngcontent-%COMP%] {\n  background-color: #1c7900;\n  color: white;\n  border: none;\n  border-radius: 10px;\n  margin: 5px;\n  padding: 10px;\n  cursor: pointer;\n}\n\ninput[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-radius: 5px;\n  width: 200px;\n}\n\np[_ngcontent-%COMP%] {\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\", \"Lucida Sans\", Arial, sans-serif;\n  color: white;\n  text-shadow: 0 1px 2px black;\n  font-size: 1.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25ldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0kscUdBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQUNKIiwiZmlsZSI6Im5ldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI4LCAxMjEsIDApO1xuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmlucHV0IHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB3aWR0aDogMjAwcHg7XG59XG5cbnAge1xuICAgIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMnB4IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-new',
                templateUrl: './new.component.html',
                styleUrls: ['./new.component.scss']
            }]
    }], function () { return [{ type: _tasks_service__WEBPACK_IMPORTED_MODULE_1__["TasksService"] }]; }, null); })();


/***/ }),

/***/ "TtVv":
/*!******************************************!*\
  !*** ./src/app/stats/stats.component.ts ***!
  \******************************************/
/*! exports provided: StatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsComponent", function() { return StatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _tasks_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tasks.service */ "0KrY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-apexcharts */ "CV0D");





const _c0 = ["chart"];
function StatsComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StatsComponent_li_1_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const id_r3 = ctx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.removeTask(id_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dead", ctx_r0.isDead(task_r2.value, task_r2.dead));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", task_r2.name, " ", task_r2.value, " ");
} }
function StatsComponent_apx_chart_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "apx-chart", 4);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx_r1.chartOptions.series)("chart", ctx_r1.chartOptions.chart)("labels", ctx_r1.chartOptions.labels)("responsive", ctx_r1.chartOptions.responsive);
} }
class StatsComponent {
    constructor(tasksS) {
        this.tasksS = tasksS;
        this.tasksS.task$.subscribe(() => {
            console.log(this.tasks);
            this.setup();
        });
    }
    setup() {
        this.chartOptions = {
            series: this.tasksS.tasks.map((task) => task.time),
            chart: {
                width: 380,
                type: "pie"
            },
            labels: this.tasksS.tasks.map((task) => task.name),
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: "bottom"
                        }
                    }
                }
            ]
        };
    }
    isDead(a, b) {
        if (!a || !b)
            return;
        const aI = a.split(':');
        const bI = b.split(':');
        if (+aI[0] < +bI[0]) {
            return true;
        }
        else if (+aI[1] < +bI[1]) {
            return true;
        }
        else if (+aI[2] < +bI[2]) {
            return true;
        }
        return false;
    }
    ngOnInit() {
        this.tasks = this.tasksS.tasks;
        this.setup();
    }
    removeTask(id) {
        this.tasksS.removeTask(id);
        this.setup();
    }
}
StatsComponent.ɵfac = function StatsComponent_Factory(t) { return new (t || StatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tasks_service__WEBPACK_IMPORTED_MODULE_1__["TasksService"])); };
StatsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatsComponent, selectors: [["app-stats"]], viewQuery: function StatsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, decls: 4, vars: 2, consts: [[3, "dead", 4, "ngFor", "ngForOf"], ["id", "chart"], [3, "series", "chart", "labels", "responsive", 4, "ngIf"], [1, "delete", 3, "click"], [3, "series", "chart", "labels", "responsive"]], template: function StatsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StatsComponent_li_1_Template, 4, 4, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StatsComponent_apx_chart_3_Template, 1, 4, "apx-chart", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tasks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.chartOptions.series && ctx.chartOptions.chart && ctx.chartOptions.labels && ctx.chartOptions.responsive);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__["ChartComponent"]], styles: [".delete[_ngcontent-%COMP%] {\n  padding: 5px 15px;\n  background-color: #e22c2c;\n  color: white;\n  margin: 10px;\n  display: inline-block;\n  border-radius: 10px;\n  cursor: pointer;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style: none;\n  background: rebeccapurple;\n  display: inline-block;\n  padding: 20px 30px;\n  border-radius: 25px;\n}\n\nli[_ngcontent-%COMP%] {\n  text-decoration: underline;\n  color: #ffffff;\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\", \"Lucida Sans\", Arial, sans-serif;\n  font-size: 2em;\n  text-shadow: 0 1px 3px black;\n}\n\n#chart[_ngcontent-%COMP%] {\n  max-width: 380px;\n  margin: 35px auto;\n  padding: 0;\n}\n\n.dead[_ngcontent-%COMP%] {\n  color: #f5ff6f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0YXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLHFHQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKIiwiZmlsZSI6InN0YXRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlbGV0ZSB7XG4gICAgcGFkZGluZzogNXB4IDE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNiwgNDQsIDQ0KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxudWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogcmViZWNjYXB1cnBsZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMjBweCAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbmxpIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggM3B4IGJsYWNrO1xufVxuXG4jY2hhcnQge1xuICAgIG1heC13aWR0aDogMzgwcHg7XG4gICAgbWFyZ2luOiAzNXB4IGF1dG87XG4gICAgcGFkZGluZzogMDtcbn1cblxuLmRlYWQge1xuICAgIGNvbG9yOiByZ2IoMjQ1LCAyNTUsIDExMSk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-stats',
                templateUrl: './stats.component.html',
                styleUrls: ['./stats.component.scss']
            }]
    }], function () { return [{ type: _tasks_service__WEBPACK_IMPORTED_MODULE_1__["TasksService"] }]; }, { chart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["chart"]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-apexcharts */ "CV0D");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pomodoro_pomodoro_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pomodoro/pomodoro.component */ "vp4T");
/* harmony import */ var _stats_stats_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stats/stats.component */ "TtVv");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./new/new.component */ "TlSY");
/* harmony import */ var _tasks_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tasks.service */ "0KrY");
/* harmony import */ var _deadline_deadline_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./deadline/deadline.component */ "OCdn");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_tasks_service__WEBPACK_IMPORTED_MODULE_9__["TasksService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__["NgApexchartsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _pomodoro_pomodoro_component__WEBPACK_IMPORTED_MODULE_6__["PomodoroComponent"],
        _stats_stats_component__WEBPACK_IMPORTED_MODULE_7__["StatsComponent"],
        _new_new_component__WEBPACK_IMPORTED_MODULE_8__["NewComponent"],
        _deadline_deadline_component__WEBPACK_IMPORTED_MODULE_10__["DeadlineComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__["NgApexchartsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _pomodoro_pomodoro_component__WEBPACK_IMPORTED_MODULE_6__["PomodoroComponent"],
                    _stats_stats_component__WEBPACK_IMPORTED_MODULE_7__["StatsComponent"],
                    _new_new_component__WEBPACK_IMPORTED_MODULE_8__["NewComponent"],
                    _deadline_deadline_component__WEBPACK_IMPORTED_MODULE_10__["DeadlineComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__["NgApexchartsModule"]
                ],
                providers: [_tasks_service__WEBPACK_IMPORTED_MODULE_9__["TasksService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new/new.component */ "TlSY");
/* harmony import */ var _pomodoro_pomodoro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pomodoro/pomodoro.component */ "vp4T");
/* harmony import */ var _stats_stats_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stats/stats.component */ "TtVv");
/* harmony import */ var _deadline_deadline_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deadline/deadline.component */ "OCdn");








const routes = [{
        path: 'stats', component: _stats_stats_component__WEBPACK_IMPORTED_MODULE_4__["StatsComponent"]
    }, {
        path: 'pomodoro', component: _pomodoro_pomodoro_component__WEBPACK_IMPORTED_MODULE_3__["PomodoroComponent"]
    }, {
        path: 'new', component: _new_new_component__WEBPACK_IMPORTED_MODULE_2__["NewComponent"]
    }, {
        path: 'deadline', component: _deadline_deadline_component__WEBPACK_IMPORTED_MODULE_5__["DeadlineComponent"]
    }];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vp4T":
/*!************************************************!*\
  !*** ./src/app/pomodoro/pomodoro.component.ts ***!
  \************************************************/
/*! exports provided: PomodoroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PomodoroComponent", function() { return PomodoroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PomodoroComponent {
    constructor() {
        this.isStarted = false;
    }
    ngOnInit() {
    }
    get text() {
        if (this.isStarted === false) {
            return 'Старт';
        }
        else {
            return this.ourdata || 'Загружаем данные...';
        }
    }
    start() {
        if (!this.isStarted) {
            this.timer = setTimeout(() => {
                clearTimeout(this.timer);
                this.timer = null;
                this.isStarted = false;
                this.warningText = 'Подождите 5 минут и продолжайте работу.';
                setTimeout(() => {
                    this.warningText = null;
                }, 5 * 1000 * 60);
            }, 25 * 1000 * 60);
            this.date1 = new Date();
            this.date2 = new Date();
            this.date2.setMinutes(this.date2.getMinutes() + 25);
            this.isStarted = true;
            this.timer2 = setInterval(() => {
                this.date1 = new Date();
                let data = new Date(0);
                data.setSeconds((this.date2.getTime() - this.date1.getTime()) / 1000);
                this.ourdata = data.toISOString().substr(14, 5);
            }, 1000);
        }
    }
}
PomodoroComponent.ɵfac = function PomodoroComponent_Factory(t) { return new (t || PomodoroComponent)(); };
PomodoroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PomodoroComponent, selectors: [["app-pomodoro"]], decls: 7, vars: 4, consts: [[3, "click"]], template: function PomodoroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0420\u0430\u0431\u043E\u0442\u0430 \u043F\u043E \u0442\u0435\u0445\u043D\u0438\u043A\u0435 Pomodoro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PomodoroComponent_Template_button_click_3_listener() { return ctx.start(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.warningText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.text, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.warningText);
    } }, styles: ["button[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 200px;\n  height: 200px;\n  border: 1px solid green;\n  background-color: #ff5151;\n  color: white;\n  font-size: 2em;\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\", \"Lucida Sans\", Arial, sans-serif;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\np[_ngcontent-%COMP%] {\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\", \"Lucida Sans\", Arial, sans-serif;\n  color: white;\n  text-shadow: 0 2px 2px black;\n  font-size: 1.5em;\n}\n\ndiv[_ngcontent-%COMP%] {\n  margin-left: 50px;\n}\n\n.disabled[_ngcontent-%COMP%] {\n  background-color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BvbW9kb3JvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHFHQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxxR0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7QUFDSiIsImZpbGUiOiJwb21vZG9yby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDgxLCA4MSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnAge1xuICAgIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgdGV4dC1zaGFkb3c6IDAgMnB4IDJweCBibGFjaztcbiAgICBmb250LXNpemU6IDEuNWVtO1xufVxuXG5kaXYge1xuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuXG4uZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PomodoroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pomodoro',
                templateUrl: './pomodoro.component.html',
                styleUrls: ['./pomodoro.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map