webpackJsonp([1,5],{

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_model__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customer_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__room_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__order_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__order_model__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_model__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__cities__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__country__ = __webpack_require__(394);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};












var CustomerComponent = (function () {
    function CustomerComponent(location, roomService, fb, orderService, customerService, route) {
        this.location = location;
        this.roomService = roomService;
        this.fb = fb;
        this.orderService = orderService;
        this.customerService = customerService;
        this.route = route;
        this.customerId = '';
        this.roomId = '';
        this.customerForm = fb.group({
            'firstName': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            'lastName': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            'birthDate': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, dateValidator])],
            'birthPlace': [''],
            'birthCountry': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            'id': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            'issueDate': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, dateValidator])],
            'expirationDate': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, dateValidator])],
            'issueCountry': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            'issueCity': [''],
            'streetAddress': [''],
            'city': [''],
            'country': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
        });
    }
    CustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.customersObser = _this.customerService.getCustomerByID(params['customerId']);
            _this.customerId = params['customerId'];
        });
        this.route.params
            .subscribe(function (parames) { return _this.roomId = parames['roomId']; });
        this.customersObser.subscribe(function (customers) {
            if (customers.length > 0) {
                _this.customer = customers[0];
                _this.doesExist = true;
                _this.disableControls();
            }
            else {
                _this.customer = new __WEBPACK_IMPORTED_MODULE_2__customer_model__["a" /* Customer */]();
                _this.customer.id = _this.customerId;
                _this.doesExist = false;
            }
            _this.customerModal.show({ observeChanges: true });
        });
        this.cityList = __WEBPACK_IMPORTED_MODULE_10__cities__["a" /* KOREA_CITIES */].concat(__WEBPACK_IMPORTED_MODULE_10__cities__["b" /* VIETNAM_CITIES */].map(function (x) { return x.province; })).concat(__WEBPACK_IMPORTED_MODULE_10__cities__["b" /* VIETNAM_CITIES */].map(function (x) { return x.city; }));
        this.countryList = __WEBPACK_IMPORTED_MODULE_11__country__["a" /* COUNTRIES */];
    };
    CustomerComponent.prototype.onSubmit = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var key;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.doesExist) {
                            key = this.customerService.addCustomer(value);
                        }
                        return [4 /*yield*/, this.addOrder()];
                    case 1:
                        _a.sent();
                        location.reload();
                        this.customerModal.hide();
                        return [2 /*return*/];
                }
            });
        });
    };
    CustomerComponent.prototype.showDropDown = function () {
        $('.ui.dropdown').dropdown({ allowAdditions: true });
    };
    CustomerComponent.prototype.addOrder = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var price, order, key;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        price = this.getPrice(this.roomId);
                        order = new __WEBPACK_IMPORTED_MODULE_8__order_model__["a" /* Order */]({
                            customerId: this.customer.$key,
                            roomId: this.roomId,
                            services: [
                                new __WEBPACK_IMPORTED_MODULE_9__service_model__["a" /* Service */]({
                                    description: 'Tiền Phòng',
                                    price: price,
                                    unit: 'ngày',
                                    quantity: 1
                                })
                            ]
                        });
                        key = this.orderService.addOrder(order);
                        return [4 /*yield*/, key.then(function (value) {
                                console.log('value: ' + value);
                                _this.roomService.updateRoom(_this.roomId, { orderId: value });
                                _this.roomService.updateRoom(_this.roomId, { isOccupied: true });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CustomerComponent.prototype.disableControls = function () {
        var _this = this;
        Object.keys(this.customerForm.controls).forEach(function (key) {
            _this.customerForm.get(key).disable();
        });
    };
    CustomerComponent.prototype.getPrice = function (roomId) {
        if (roomId === '0' || roomId === '1' || roomId === '2') {
            return 400000;
        }
        return 300000;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('customerModal'),
        __metadata("design:type", Object)
    ], CustomerComponent.prototype, "customerModal", void 0);
    CustomerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
            selector: 'app-customer',
            template: __webpack_require__(532),
            styles: [__webpack_require__(468)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__angular_common__["g" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_common__["g" /* Location */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__room_service__["a" /* RoomService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__room_service__["a" /* RoomService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__order_service__["a" /* OrderService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__customer_service__["a" /* CustomerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__customer_service__["a" /* CustomerService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */]) === "function" && _f || Object])
    ], CustomerComponent);
    return CustomerComponent;
    var _a, _b, _c, _d, _e, _f;
}());

function dateValidator(control) {
    var pattern = "(0?[1-9]|[12][0-9]|3[01])/(0?[1-9]|1[012])/((19|20)\\d\\d)";
    if (control !== undefined && !control.value.match(pattern)) {
        return { invalidDate: true };
    }
}
//# sourceMappingURL=customer.component.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_model__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_service__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelServiceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HotelServiceComponent = (function () {
    function HotelServiceComponent(route, orderService) {
        this.route = route;
        this.orderService = orderService;
        this.service = new __WEBPACK_IMPORTED_MODULE_1__service_model__["a" /* Service */]();
        this.services = __WEBPACK_IMPORTED_MODULE_1__service_model__["b" /* SERVICES */];
    }
    HotelServiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.orderId = params['orderId'];
        });
        this.hotelServiceModal.show();
        $('.ui.dropdown').dropdown();
    };
    HotelServiceComponent.prototype.add = function () {
        this.orderService.addService(this.orderId, this.service);
        console.log("Add " + this.service + " to the " + this.orderId);
        this.hotelServiceModal.hide();
        location.reload();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('hotelServiceModal'),
        __metadata("design:type", Object)
    ], HotelServiceComponent.prototype, "hotelServiceModal", void 0);
    HotelServiceComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
            selector: 'app-hotel-service',
            template: __webpack_require__(533),
            styles: [__webpack_require__(469)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__order_service__["a" /* OrderService */]) === "function" && _b || Object])
    ], HotelServiceComponent);
    return HotelServiceComponent;
    var _a, _b;
}());

//# sourceMappingURL=hotel-service.component.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__room_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_service__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainComponent = (function () {
    function MainComponent(roomService, customerService) {
        this.roomService = roomService;
        this.customerService = customerService;
        this.vacantRooms = 0;
        this.occupiedRooms = 0;
        this.dirtyRooms = 0;
        this.cssClass = 'ui main container';
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rooms = this.roomService.getRooms();
        this.roomService.getRooms().subscribe(function (rooms) {
            _this.vacantRooms = rooms.filter(function (x) { return !x.isOccupied; }).length || 0;
            _this.occupiedRooms = rooms.filter(function (x) { return x.isOccupied; }).length;
            _this.dirtyRooms = rooms.filter(function (x) { return x.status == 2; }).length;
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* HostBinding */])('attr.class'),
        __metadata("design:type", Object)
    ], MainComponent.prototype, "cssClass", void 0);
    MainComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
            selector: 'app-main',
            template: __webpack_require__(534),
            styles: [__webpack_require__(470)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__room_service__["a" /* RoomService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__room_service__["a" /* RoomService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__customer_service__["a" /* CustomerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__customer_service__["a" /* CustomerService */]) === "function" && _b || Object])
    ], MainComponent);
    return MainComponent;
    var _a, _b;
}());

//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_component__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__room_card_room_card_component__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__room_list_room_list_component__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__room_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_semantic_ng_semantic__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__environments_environment__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__customer_customer_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__customer_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__order_order_component__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__order_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__customer_customer_search_form_component__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__customer_customer_info_component__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__hotel_service_hotel_service_component__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__main_routing_module__ = __webpack_require__(398);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var MainModule = (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng_semantic_ng_semantic__["a" /* NgSemanticModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_18__main_routing_module__["a" /* MainRoutingModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__room_service__["a" /* RoomService */],
                __WEBPACK_IMPORTED_MODULE_12__customer_service__["a" /* CustomerService */],
                __WEBPACK_IMPORTED_MODULE_14__order_service__["a" /* OrderService */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_3__room_card_room_card_component__["a" /* RoomCardComponent */],
                __WEBPACK_IMPORTED_MODULE_4__room_list_room_list_component__["a" /* RoomListComponent */],
                __WEBPACK_IMPORTED_MODULE_11__customer_customer_component__["a" /* CustomerComponent */],
                __WEBPACK_IMPORTED_MODULE_13__order_order_component__["a" /* OrderComponent */],
                __WEBPACK_IMPORTED_MODULE_15__customer_customer_search_form_component__["a" /* CustomerSearchFormComponent */],
                __WEBPACK_IMPORTED_MODULE_16__customer_customer_info_component__["a" /* CustomerInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_17__hotel_service_hotel_service_component__["a" /* HotelServiceComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__main_component__["a" /* MainComponent */]]
        })
    ], MainModule);
    return MainModule;
}());

//# sourceMappingURL=main.module.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__order_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__room_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_model__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OrderComponent = (function () {
    function OrderComponent(orderService, roomService, customerService, route) {
        this.orderService = orderService;
        this.roomService = roomService;
        this.customerService = customerService;
        this.route = route;
        this.IsCheckOut = false;
        this.total = 0.0;
        this.quantity = 0.0;
        this.discount = 0.0;
        this.adjustment = 0.0;
        this.totalDay = 0.0;
        this.chekedOut = false;
        this.displayQty = 1;
    }
    OrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.orderId = params['id'];
            _this.editting = params['edit'];
            _this.order = _this.orderService.getOrder(params['id']);
            _this.order.subscribe(function (order) {
                _this.customer = _this.customerService.getCustomer(order.customerId);
                _this.services = _this.orderService.getServices(params['id']);
                _this.services.subscribe(function (services) {
                    _this.updateService = services[0];
                    var currentDate = new Date();
                    var checkInDate = new Date(order.checkInTime);
                    var currentDay = currentDate.getDate();
                    var currentMonth = currentDate.getMonth();
                    var currentYear = currentDate.getFullYear();
                    var currentHour = currentDate.getHours();
                    var currentMinutes = currentDate.getMinutes();
                    var checkInDay = checkInDate.getDate();
                    var checkInMonth = checkInDate.getMonth();
                    var checkInYear = checkInDate.getFullYear();
                    var checkInHour = checkInDate.getHours();
                    var checkInMinutes = checkInDate.getMinutes();
                    _this.roomId = order.roomId;
                    var stayingHour = (currentHour - checkInHour) < 0 ? (currentHour - checkInHour) + 24 : currentHour - checkInHour;
                    var stayingDay = (currentHour - checkInHour) < 0 ? currentDay - checkInDay - 1 : currentDay - checkInDay;
                    _this.day = stayingDay;
                    _this.hour = (currentMinutes - checkInMinutes) < 0 ? stayingHour - 1 : stayingHour;
                    _this.minutes = (currentMinutes - checkInMinutes) < 0 ? (currentMinutes - checkInMinutes) + 60 : currentMinutes;
                    if (stayingDay <= 0 && stayingHour < 4) {
                        var totalTime = (((currentHour - checkInHour) * 60) + (currentMinutes - checkInMinutes));
                        var totalHour = Math.trunc(totalTime / 60);
                        var totalMinute = totalTime % 60;
                        if (totalMinute >= 15) {
                            totalHour++;
                        }
                        _this.pendingUpdate = _this.calculateHourlyRate(services[0], totalHour);
                    }
                    else {
                        _this.calculateDailyRate(services[0], currentHour, currentMinutes, stayingDay);
                    }
                    for (var index = 1; index < services.length; index++) {
                        var element = services[index];
                        _this.total += element.price * element.quantity;
                    }
                    _this.total += _this.price * _this.quantity;
                    if (_this.pendingAdd) {
                        _this.total += _this.pendingAdd.price * _this.pendingAdd.quantity;
                    }
                    _this.orderModal.show({ observeChanges: true });
                });
            });
        });
    };
    OrderComponent.prototype.close = function () {
        this.total = this.total - this.discount || 0.0 + this.adjustment || 0.0;
        this.orderService.updateOrder(this.orderId, {
            total: this.total,
            checkOutTime: new Date().toString(),
            discount: this.discount,
            adjustment: this.adjustment
        });
        this.roomService.updateRoom(this.roomId, {
            orderId: '',
            status: 2,
            isOccupied: false
        });
        this.orderService.updateService(this.orderId, this.updateService.$key, {
            price: this.price,
            quantity: this.quantity,
            unit: this.unit
        });
        if (this.pendingAdd) {
            this.addService(this.pendingAdd);
        }
        this.orderModal.hide();
        location.reload();
    };
    OrderComponent.prototype.hide = function () {
        this.orderModal.hide();
        location.reload();
    };
    OrderComponent.prototype.remove = function (key) {
        this.orderService.removeService(this.orderId, key);
    };
    OrderComponent.prototype.calculateHourlyRate = function (service, totalHour, recalculate) {
        if (recalculate === void 0) { recalculate = false; }
        var price = 0.0, unit = '', quantity = 0.0;
        if (totalHour > 4) {
            return null;
        }
        else {
            if (totalHour > 3) {
                unit = "gi\u1EDD";
                quantity = 1;
                this.displayQty = 4;
                if (service.price === 400000) {
                    price = 280000;
                }
                else {
                    price = 210000;
                }
            }
            else if (totalHour > 2) {
                this.displayQty = 3;
                unit = "gi\u1EDD";
                quantity = 1;
                if (service.price === 400000) {
                    price = 240000;
                }
                else {
                    price = 190000;
                }
            }
            else if (totalHour > 1) {
                unit = "gi\u1EDD";
                quantity = 1;
                this.displayQty = 2;
                if (service.price === 400000) {
                    price = 190000;
                }
                else {
                    price = 150000;
                }
            }
            else {
                unit = "gi\u1EDD";
                quantity = 1;
                this.displayQty = 1;
                if (service.price === 400000) {
                    price = 120000;
                }
                else {
                    price = 100000;
                }
            }
            if (!recalculate) {
                this.price = price;
                this.unit = unit;
                this.quantity = quantity;
            }
            var updateService = new __WEBPACK_IMPORTED_MODULE_5__service_model__["a" /* Service */]({ description: "Ti\u1EC1n Ph\u00F2ng Theo Gi\u1EDD", price: price, unit: unit, quantity: quantity });
            // this.updateService(updateService, service.key);
            return updateService;
        }
    };
    OrderComponent.prototype.calculateDailyRate = function (service, checkOutHour, checkOutMinutes, totalDay) {
        var price = 0.0, unit = '';
        this.price = price = service.price;
        this.unit = unit = "ng\u00E0y";
        this.quantity = totalDay;
        if (this.hour > 4)
            this.quantity++;
        if (checkOutHour >= 12) {
            var totalTime = (((checkOutHour - 12) * 60) + (checkOutMinutes));
            var totalHour = Math.trunc(totalTime / 60);
            var totalMinute = totalTime % 60;
            if (totalMinute >= 15) {
                totalHour++;
            }
            if (totalHour > 4) {
                this.quantity++;
            }
            else {
                this.pendingAdd = this.calculateHourlyRate(service, totalHour, true);
            }
        }
        var update = new __WEBPACK_IMPORTED_MODULE_5__service_model__["a" /* Service */]({ description: 'Tiền giờ theo ngày', price: price, unit: unit, quantity: this.quantity });
        //this.updateService(updateService, service.key);
        this.pendingUpdate = update;
    };
    OrderComponent.prototype.addService = function (service) {
        this.orderService.addService(this.orderId, service);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('orderModal'),
        __metadata("design:type", Object)
    ], OrderComponent.prototype, "orderModal", void 0);
    OrderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
            selector: 'app-order',
            template: __webpack_require__(535),
            styles: [__webpack_require__(471)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__order_service__["a" /* OrderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__room_service__["a" /* RoomService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__room_service__["a" /* RoomService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__customer_service__["a" /* CustomerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__customer_service__["a" /* CustomerService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */]) === "function" && _d || Object])
    ], OrderComponent);
    return OrderComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=order.component.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__room_model__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__room_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__order_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RoomCardComponent = (function () {
    function RoomCardComponent(fb, roomService, customerService, orderService, db, route, location, router) {
        this.fb = fb;
        this.roomService = roomService;
        this.customerService = customerService;
        this.orderService = orderService;
        this.db = db;
        this.route = route;
        this.location = location;
        this.router = router;
        this.cssClass = 'card';
        this.selectedRoom = new __WEBPACK_IMPORTED_MODULE_1__room_model__["a" /* Room */]('', '', 1, 0, false, 1, '', '');
        this.customerId = '';
        this.orderId = '';
    }
    RoomCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roomService.getRooms().subscribe(function (rooms) { return _this.rooms = rooms.filter(function (x) { return !x.isOccupied; }); });
    };
    RoomCardComponent.prototype.setSelected = function (room) {
        this.selectedRoom = room;
    };
    RoomCardComponent.prototype.checkOut = function (room) {
        this.router.navigate(['/orders', room.orderId, 'no'], { skipLocationChange: true });
    };
    RoomCardComponent.prototype.clean = function (room) {
        room.status = 1;
        room.isOccupied = false;
        this.roomService.updateRoom(room.$key, { status: room.status, isOccupied: false });
    };
    RoomCardComponent.prototype.showCustomerSearchModal = function () {
        this.searchForm.show();
    };
    RoomCardComponent.prototype.markAsDirtyOrClean = function (room) {
        if (room.status == 1)
            room.status = 2;
        else
            room.status = 1;
        this.roomService.updateRoom(room.$key, { status: room.status });
    };
    RoomCardComponent.prototype.move = function () {
        this.moveRoom.orderId = this.room.orderId;
        this.moveRoom.isOccupied = true;
        this.roomService.updateRoom(this.moveRoom.$key, { orderId: this.room.orderId, isOccupied: true });
        this.room.isOccupied = false;
        this.room.orderId = "";
        this.roomService.updateRoom(this.room.$key, { orderId: '', isOccupied: false });
        this.moveRoomModal.hide();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('customerModal'),
        __metadata("design:type", Object)
    ], RoomCardComponent.prototype, "customerModal", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('searchForm'),
        __metadata("design:type", Object)
    ], RoomCardComponent.prototype, "searchForm", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('infoModal'),
        __metadata("design:type", Object)
    ], RoomCardComponent.prototype, "infoModal", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('orderModal'),
        __metadata("design:type", Object)
    ], RoomCardComponent.prototype, "orderModal", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('moveRoomModal'),
        __metadata("design:type", Object)
    ], RoomCardComponent.prototype, "moveRoomModal", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* HostBinding */])('attr.class'),
        __metadata("design:type", Object)
    ], RoomCardComponent.prototype, "cssClass", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__room_model__["a" /* Room */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__room_model__["a" /* Room */]) === "function" && _a || Object)
    ], RoomCardComponent.prototype, "room", void 0);
    RoomCardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
            selector: 'app-room-card',
            template: __webpack_require__(536),
            styles: [__webpack_require__(472)]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__room_service__["a" /* RoomService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__room_service__["a" /* RoomService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__customer_service__["a" /* CustomerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__customer_service__["a" /* CustomerService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__order_service__["a" /* OrderService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* ActivatedRoute */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__angular_common__["g" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_common__["g" /* Location */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* Router */]) === "function" && _j || Object])
    ], RoomCardComponent);
    return RoomCardComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=room-card.component.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuService = (function () {
    function MenuService() {
    }
    MenuService.prototype.getMenu = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__menu__["a" /* MENU */]);
    };
    MenuService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MenuService);
    return MenuService;
}());

//# sourceMappingURL=menu.service.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__(539),
            styles: [__webpack_require__(475)]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_order_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_room_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_customer_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_datepicker__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reservation_reservation_service__ = __webpack_require__(71);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DailyReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DailyReportComponent = (function () {
    function DailyReportComponent(orderService, roomService, customerService, reservationService) {
        var _this = this;
        this.orderService = orderService;
        this.roomService = roomService;
        this.customerService = customerService;
        this.reservationService = reservationService;
        this.fromDate = new __WEBPACK_IMPORTED_MODULE_4_ng2_datepicker__["b" /* DateModel */]();
        this.toDate = new __WEBPACK_IMPORTED_MODULE_4_ng2_datepicker__["b" /* DateModel */]();
        this.orders = [];
        this.filterList = [];
        this.total = 0.0;
        this.orderService.getOrders().subscribe(function (orders) {
            _this.orders = orders.filter(function (order) { return order.checkOutTime !== ''; });
            _this.date = new Date(_this.orders[0].checkOutTime);
            var _loop_1 = function (i) {
                _this.roomService.getRoom(orders[i].roomId).subscribe(function (room) {
                    orders[i].roomId = room.name;
                });
                _this.orderService.getServices(orders[i].$key).subscribe(function (services) {
                    orders[i].services = services;
                });
            };
            for (var i = 0; i < orders.length; i++) {
                _loop_1(i);
            }
        });
        this.options = new __WEBPACK_IMPORTED_MODULE_4_ng2_datepicker__["c" /* DatePickerOptions */]();
        this.options.maxDate = new Date();
        this.options.format = 'DD/MM/YYYY';
        this.options.todayText = 'Hôm Nay';
        this.options.selectYearText = 'Chọn Năm';
        this.options.clearText = 'Xóa';
        this.options.style = 'bold';
        this.options.initialDate = new Date();
        this.fromDate.day = new Date().getDate.toString();
        this.fromDate.month = new Date().getMonth.toString();
        this.fromDate.year = new Date().getFullYear.toString();
        this.toDate.day = new Date().getDate.toString();
        this.toDate.month = new Date().getMonth.toString();
        this.toDate.year = new Date().getFullYear.toString();
    }
    DailyReportComponent.prototype.ngOnInit = function () {
        this.setDate();
    };
    DailyReportComponent.prototype.setDate = function () {
        var _this = this;
        this.total = 0.0;
        this.filterList = [];
        var fromDay = Number.parseInt(this.fromDate.day);
        var fromMonth = Number.parseInt(this.fromDate.month) - 1;
        var fromYear = Number.parseInt(this.fromDate.year);
        var toDay = Number.parseInt(this.toDate.day);
        var toMonth = Number.parseInt(this.toDate.month) - 1;
        var toYear = Number.parseInt(this.toDate.year);
        var length = this.orders.length;
        for (var index = 0; index < length; index++) {
            var date = new Date(this.orders[index].checkOutTime);
            var day = date.getDate();
            var month = date.getMonth();
            var year = date.getFullYear();
            var valid = date.getDate() >= fromDay && date.getMonth() >= fromMonth && date.getFullYear() >= fromYear
                && date.getDate() <= toDay && date.getMonth() <= toMonth && date.getFullYear() <= toYear;
            if (valid) {
                this.filterList.push(this.orders[index]);
            }
        }
        var firstDate = this.toDate.day + toMonth.toString() + this.toDate.year;
        this.reservationService.getReservationsByDate(firstDate).subscribe(function (reservations) {
            _this.reservationList = reservations;
            _this.reservationList.forEach(function (r) { return _this.total += r.amount; });
        });
    };
    DailyReportComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
            selector: 'app-daily-report',
            template: __webpack_require__(540),
            styles: [__webpack_require__(476)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__main_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__main_order_service__["a" /* OrderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__main_room_service__["a" /* RoomService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__main_room_service__["a" /* RoomService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__main_customer_service__["a" /* CustomerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__main_customer_service__["a" /* CustomerService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__reservation_reservation_service__["a" /* ReservationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__reservation_reservation_service__["a" /* ReservationService */]) === "function" && _d || Object])
    ], DailyReportComponent);
    return DailyReportComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=daily-report.component.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_datepicker__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_order_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_room_service__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonthlyReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MonthlyReportComponent = (function () {
    function MonthlyReportComponent(orderService, roomService) {
        var _this = this;
        this.orderService = orderService;
        this.roomService = roomService;
        this.fromDate = new __WEBPACK_IMPORTED_MODULE_1_ng2_datepicker__["b" /* DateModel */]();
        this.toDate = new __WEBPACK_IMPORTED_MODULE_1_ng2_datepicker__["b" /* DateModel */]();
        this.orders = [];
        this.details = true;
        this.filterList = [];
        this.total = [];
        this.reportList = [];
        this.choosen = false;
        this.totalAll = 0.0;
        this.orderService.getOrders().subscribe(function (orders) {
            _this.orders = orders.filter(function (order) { return order.checkOutTime !== ''; });
            var _loop_1 = function (i) {
                _this.roomService.getRoom(orders[i].roomId).subscribe(function (room) {
                    orders[i].roomId = room.name;
                });
                _this.orderService.getServices(orders[i].$key).subscribe(function (services) {
                    orders[i].services = services;
                });
            };
            for (var i = 0; i < orders.length; i++) {
                _loop_1(i);
            }
        });
        this.options = new __WEBPACK_IMPORTED_MODULE_1_ng2_datepicker__["c" /* DatePickerOptions */]();
        this.options.maxDate = new Date();
        this.options.format = 'MM/YYYY';
        this.options.todayText = 'Tháng';
        this.options.selectYearText = 'Chọn Năm';
        this.options.clearText = 'Xóa';
        this.options.style = 'bold';
        this.options.initialDate = new Date();
        this.fromDate.month = new Date().getMonth.toString();
        this.fromDate.year = new Date().getFullYear.toString();
        this.toDate.month = new Date().getMonth.toString();
        this.toDate.year = new Date().getFullYear.toString();
    }
    MonthlyReportComponent.prototype.ngOnInit = function () {
        //this.setDate();
    };
    MonthlyReportComponent.prototype.setDate = function () {
        var _this = this;
        this.filterList = [];
        var fromMonth = Number.parseInt(this.fromDate.month) - 1;
        var fromYear = Number.parseInt(this.fromDate.year);
        var toMonth = Number.parseInt(this.toDate.month) - 1;
        var toYear = Number.parseInt(this.toDate.year);
        var length = this.orders.length;
        for (var index = 0; index < length; index++) {
            var date = new Date(this.orders[index].checkOutTime);
            var month = date.getMonth();
            var year = date.getFullYear();
            var valid = date.getMonth() === fromMonth && date.getFullYear() === fromYear;
            if (valid) {
                this.filterList.push(this.orders[index]);
            }
        }
        this.filterList = this.filterList.map(function (order) {
            var date = new Date(order.checkOutTime);
            var dateString = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
            var service = 0.0;
            order.services.forEach(function (element) {
                if (element.unit === "gi\u1EDD") {
                    service += element.price;
                }
                else {
                    service += element.price * element.quantity;
                }
            });
            return {
                date: dateString,
                service: service,
                adjustment: order.adjustment,
                discount: order.discount,
                total: order.total
            };
        });
        this.filterList = this.groupBy(this.filterList, function (item) {
            return [item.date];
        });
        this.filterList.forEach(function (arr) {
            var subTotal = 0.0;
            arr.forEach(function (item) {
                subTotal += item.total;
            });
            _this.total.push(subTotal);
        });
        this.filterList.sort(function (x) { return x.date; });
        this.filterList.forEach(function (list) {
            var adjustment = 0.0;
            var discount = 0.0;
            var service = 0.0;
            var total = 0.0;
            var date = '';
            list.forEach(function (item) {
                date = item.date;
                adjustment += item.adjustment || 0;
                discount += item.discount || 0;
                service += item.service || 0;
                total += item.total || 0;
            });
            _this.reportList.push({
                date: date,
                adjustment: adjustment,
                discount: discount,
                service: service,
                total: total
            });
            _this.totalAll += total;
        });
        this.choosen = true;
    };
    MonthlyReportComponent.prototype.groupBy = function (array, f) {
        var groups = {};
        array.forEach(function (o) {
            var group = JSON.stringify(f(o));
            groups[group] = groups[group] || [];
            groups[group].push(o);
        });
        return Object.keys(groups).map(function (group) {
            return groups[group];
        });
    };
    MonthlyReportComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
            selector: 'app-monthly-report',
            template: __webpack_require__(541),
            styles: [__webpack_require__(477)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__main_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__main_order_service__["a" /* OrderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__main_room_service__["a" /* RoomService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__main_room_service__["a" /* RoomService */]) === "function" && _b || Object])
    ], MonthlyReportComponent);
    return MonthlyReportComponent;
    var _a, _b;
}());

//# sourceMappingURL=monthly-report.component.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_order_service__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReportComponent = (function () {
    function ReportComponent(orderService) {
        this.orderService = orderService;
        this.cssClass = "ui main container";
    }
    ReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.orderService.getOrders().subscribe(function (orders) {
            _this.orders = orders.filter(function (order) { return order.checkOutTime !== ''; });
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* HostBinding */])("attr.css"),
        __metadata("design:type", Object)
    ], ReportComponent.prototype, "cssClass", void 0);
    ReportComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
            selector: 'app-report',
            template: __webpack_require__(544),
            styles: [__webpack_require__(480)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__main_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__main_order_service__["a" /* OrderService */]) === "function" && _a || Object])
    ], ReportComponent);
    return ReportComponent;
    var _a;
}());

//# sourceMappingURL=report.component.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report_component__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_order_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__daily_report_daily_report_component__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__monthly_report_monthly_report_component__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__periodical_report_periodical_report_component__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reports_routing_module__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_datepicker__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__report_table_report_table_component__ = __webpack_require__(407);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportModule", function() { return ReportModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ReportModule = (function () {
    function ReportModule() {
    }
    ReportModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_7__reports_routing_module__["a" /* ReportRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8_ng2_datepicker__["a" /* DatePickerModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__report_component__["a" /* ReportComponent */],
                __WEBPACK_IMPORTED_MODULE_4__daily_report_daily_report_component__["a" /* DailyReportComponent */],
                __WEBPACK_IMPORTED_MODULE_5__monthly_report_monthly_report_component__["a" /* MonthlyReportComponent */],
                __WEBPACK_IMPORTED_MODULE_6__periodical_report_periodical_report_component__["a" /* PeriodicalReportComponent */],
                __WEBPACK_IMPORTED_MODULE_9__report_table_report_table_component__["a" /* ReportTableComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__main_order_service__["a" /* OrderService */]]
        })
    ], ReportModule);
    return ReportModule;
}());

//# sourceMappingURL=report.module.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reservation_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReservationComponent = (function () {
    function ReservationComponent(reservationService, router) {
        this.reservationService = reservationService;
        this.router = router;
        this.description = '';
        this.amount = 0.0;
        this.invalid = false;
        this.reservations = [];
    }
    ReservationComponent.prototype.ngOnInit = function () {
    };
    ReservationComponent.prototype.save = function () {
        var date = (new Date().getDate().toString()) + (new Date().getMonth().toString()) + (new Date().getFullYear().toString());
        this.reservationService.addReservation({
            description: this.description,
            amount: this.amount,
            date: date,
            day: new Date().getDate(),
            month: new Date().getMonth(),
            year: new Date().getFullYear()
        });
        this.router.navigate(['/']);
    };
    ReservationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
            selector: 'app-reservation',
            template: __webpack_require__(545),
            styles: [__webpack_require__(481)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__reservation_service__["a" /* ReservationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__reservation_service__["a" /* ReservationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
    ], ReservationComponent);
    return ReservationComponent;
    var _a, _b;
}());

//# sourceMappingURL=reservation.component.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    firebase: {
        apiKey: "AIzaSyCJ-mj_VRzyms0XGJz8MXH2PmIjWE6T6DM",
        authDomain: "hoang-long-hotel.firebaseapp.com",
        databaseURL: "https://hoang-long-hotel.firebaseio.com",
        projectId: "hoang-long-hotel",
        storageBucket: "hoang-long-hotel.appspot.com",
        messagingSenderId: "843555283760"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderService = (function () {
    function OrderService(db) {
        this.db = db;
    }
    OrderService.prototype.addOrder = function (order) {
        return this.db.list('/orders').push(order).then(function (item) { return item.key; });
    };
    OrderService.prototype.getOrder = function (key) {
        return this.db.object("/orders/" + key);
    };
    OrderService.prototype.updateService = function (orderId, key, data) {
        return this.db.list("/orders/" + orderId + "/services").update(key, data);
    };
    OrderService.prototype.addService = function (key, service) {
        return this.db.list("/orders/" + key + "/services").push(service);
    };
    OrderService.prototype.getServices = function (key) {
        return this.db.list("/orders/" + key + "/services").map(function (services) { return services.map(function (service) { return service; }); });
    };
    OrderService.prototype.getAllServices = function (key) {
        return this.db.list("/orders/" + key + "/services");
    };
    OrderService.prototype.removeService = function (orderId, key) {
        this.db.list("/orders/" + orderId + "/services").remove(key);
    };
    OrderService.prototype.updateOrder = function (key, data) {
        this.db.list('/orders').update(key, data);
    };
    OrderService.prototype.getOrders = function () {
        return this.db.list('/orders');
    };
    OrderService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
    ], OrderService);
    return OrderService;
    var _a;
}());

//# sourceMappingURL=order.service.js.map

/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./main/main.module": [
		162
	],
	"./report/report.module": [
		170
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 377;


/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(172);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_not_found_page_not_found_component__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reservation_reservation_component__ = __webpack_require__(171);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var appRoutes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'main', loadChildren: './main/main.module#MainModule' },
    { path: 'report', loadChildren: './report/report.module#ReportModule' },
    { path: 'reservation', component: __WEBPACK_IMPORTED_MODULE_3__reservation_reservation_component__["a" /* ReservationComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: true })
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(db) {
        this.db = db;
        this.cssClass = "ui container";
        this.title = 'app works!';
        this.items = db.list('rooms');
        this.customers = db.list('customers');
    }
    AppComponent.prototype.getInfo = function (key) {
        this.item = this.db.object("rooms/" + key);
        this.item.subscribe(function (x) { return console.log(x.name); });
        console.log(this.item);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* HostBinding */])('attr.class'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "cssClass", void 0);
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(531),
            styles: [__webpack_require__(467)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_menu_module__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_main_module__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__report_report_module__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__page_not_found_page_not_found_component__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_datepicker__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__reservation_reservation_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__reservation_reservation_component__ = __webpack_require__(171);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_13__reservation_reservation_component__["a" /* ReservationComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_5__menu_menu_module__["a" /* MenuModule */],
                __WEBPACK_IMPORTED_MODULE_6__main_main_module__["MainModule"],
                __WEBPACK_IMPORTED_MODULE_8__report_report_module__["ReportModule"],
                __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_11_ng2_datepicker__["a" /* DatePickerModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__reservation_reservation_service__["a" /* ReservationService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VIETNAM_CITIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KOREA_CITIES; });
var VIETNAM_CITIES = [
    {
        "city": "Cần Thơ",
        "province": "Cần Thơ",
        "area": "1,408.9",
        "population": "1,248,000"
    },
    {
        "city": "Đà Nẵng",
        "province": "Đà Nẵng",
        "area": "1,285.4",
        "population": "1,028,000"
    },
    {
        "city": "Hải Phòng",
        "province": "Hải Phòng",
        "area": "1,527.4",
        "population": "1,963,300"
    },
    {
        "city": "Hà Nội",
        "province": "Hà Nội",
        "area": "3,324.5",
        "population": "7,216,000"
    },
    {
        "city": "Hồ Chí Minh",
        "province": "Hồ Chí Minh",
        "area": "2,095.5",
        "population": "8,146,300"
    },
    {
        "city": "Bà Rịa",
        "province": "Bà Rịa–Vũng Tàu",
        "area": "91.46",
        "population": "122,424"
    },
    {
        "city": "Bạc Liêu",
        "province": "Bạc Liêu",
        "area": "175.4",
        "population": "188,863"
    },
    {
        "city": "Bắc Giang",
        "province": "Bắc Giang",
        "area": "32.21",
        "population": "126,810"
    },
    {
        "city": "Bắc Ninh",
        "province": "Bắc Ninh",
        "area": "80.28",
        "population": "272,634"
    },
    {
        "city": "Bảo Lộc",
        "province": "Lâm Đồng",
        "area": "232.56",
        "population": "153,362"
    },
    {
        "city": "Biên Hòa",
        "province": "Đồng Nai",
        "area": "264.07",
        "population": "1,104,495"
    },
    {
        "city": "Bến Tre",
        "province": "Bến Tre",
        "area": "67.48",
        "population": "143,312"
    },
    {
        "city": "Buôn Ma Thuột",
        "province": "Đắk Lắk",
        "area": "370.00",
        "population": "340,000"
    },
    {
        "city": "Cà Mau",
        "province": "Cà Mau",
        "area": "250.3",
        "population": "204,895"
    },
    {
        "city": "Cẩm Phả",
        "province": "Quảng Ninh",
        "area": "486.4",
        "population": "195,800"
    },
    {
        "city": "Cao Lãnh",
        "province": "Đồng Tháp",
        "area": "107.195",
        "population": "149,837"
    },
    {
        "city": "Châu Đốc",
        "province": "An Giang",
        "area": "105.290",
        "population": "157,298"
    },
    {
        "city": "Đà Lạt",
        "province": "Lâm Đồng",
        "area": "393.29",
        "population": "256,393"
    },
    {
        "city": "Điện Biên Phủ",
        "province": "Điện Biên",
        "area": "60.09",
        "population": "70,639"
    },
    {
        "city": "Đông Hà",
        "province": "Quảng Trị",
        "area": "73.06",
        "population": "93,756"
    },
    {
        "city": "Đồng Hới",
        "province": "Quảng Bình",
        "area": "155.54",
        "population": "160,325"
    },
    {
        "city": "Hà Tĩnh",
        "province": "Hà Tĩnh",
        "area": "56.19",
        "population": "117,546"
    },
    {
        "city": "Hạ Long",
        "province": "Quảng Ninh",
        "area": "208.7",
        "population": "203,731"
    },
    {
        "city": "Hải Dương",
        "province": "Hải Dương",
        "area": "71.39",
        "population": "187,405"
    },
    {
        "city": "Hòa Bình",
        "province": "Hòa Bình",
        "area": "148.2",
        "population": "93,409"
    },
    {
        "city": "Hội An",
        "province": "Quảng Nam",
        "area": "61.47",
        "population": "121,716"
    },
    {
        "city": "Huế",
        "province": "Thừa Thiên–Huế",
        "area": "83.3",
        "population": "333,715"
    },
    {
        "city": "Hưng Yên",
        "province": "Hưng Yên",
        "area": "46.8",
        "population": "121,486"
    },
    {
        "city": "Kon Tum",
        "province": "Kon Tum",
        "area": "432.98",
        "population": "137,662"
    },
    {
        "city": "Lạng Sơn",
        "province": "Lạng Sơn",
        "area": "79.0",
        "population": "148,000"
    },
    {
        "city": "Lào Cai",
        "province": "Lào Cai",
        "area": "221.5",
        "population": "94,192"
    },
    {
        "city": "Long Xuyên",
        "province": "An Giang",
        "area": "106.87",
        "population": "280,300"
    },
    {
        "city": "Móng Cái",
        "province": "Quảng Ninh",
        "area": "518.28",
        "population": "108,016"
    },
    {
        "city": "Mỹ Tho",
        "province": "Tiền Giang",
        "area": "79.8",
        "population": "215,000"
    },
    {
        "city": "Nam Định",
        "province": "Nam Định",
        "area": "46.4",
        "population": "191,900"
    },
    {
        "city": "Ninh Bình",
        "province": "Ninh Bình",
        "area": "48.3",
        "population": "130,517"
    },
    {
        "city": "Nha Trang",
        "province": "Khánh Hòa",
        "area": "251.0",
        "population": "392,279"
    },
    {
        "city": "Cam Ranh",
        "province": "Khánh Hòa",
        "area": "325.0",
        "population": "128,358"
    },
    {
        "city": "Phan Rang–Tháp Chàm",
        "province": "Ninh Thuận",
        "area": "79.37",
        "population": "102,941"
    },
    {
        "city": "Phan Thiết",
        "province": "Bình Thuận",
        "area": "206.0",
        "population": "255,000"
    },
    {
        "city": "Phủ Lý",
        "province": "Hà Nam",
        "area": "34.27",
        "population": "121,350"
    },
    {
        "city": "Pleiku",
        "province": "Gia Lai",
        "area": "260.61",
        "population": "186,763"
    },
    {
        "city": "Quảng Ngãi",
        "province": "Quảng Ngãi",
        "area": "37.12",
        "population": "134,400"
    },
    {
        "city": "Quy Nhơn",
        "province": "Bình Định",
        "area": "284.28",
        "population": "311,000"
    },
    {
        "city": "Rạch Giá",
        "province": "Kiên Giang",
        "area": "97.75",
        "population": "228,360"
    },
    {
        "city": "Sa Đéc",
        "province": "Đồng Tháp",
        "area": "59.81",
        "population": "152,237"
    },
    {
        "city": "Sóc Trăng",
        "province": "Sóc Trăng",
        "area": "76.15",
        "population": "173,922"
    },
    {
        "city": "Sơn La",
        "province": "Sơn La",
        "area": "324.93",
        "population": "107,282"
    },
    {
        "city": "Tam Kỳ",
        "province": "Quảng Nam",
        "area": "92.63",
        "population": "120,256"
    },
    {
        "city": "Tân An",
        "province": "Long An",
        "area": "81.79",
        "population": "166,419"
    },
    {
        "city": "Thái Bình",
        "province": "Thái Bình",
        "area": "67.7",
        "population": "270,000"
    },
    {
        "city": "Thái Nguyên",
        "province": "Thái Nguyên",
        "area": "189.70",
        "population": "330,000"
    },
    {
        "city": "Thanh Hóa",
        "province": "Thanh Hóa",
        "area": "57.8",
        "population": "197,551"
    },
    {
        "city": "Trà Vinh",
        "province": "Trà Vinh",
        "area": "68.03",
        "population": "131,360"
    },
    {
        "city": "Tuy Hòa",
        "province": "Phú Yên",
        "area": "212.62",
        "population": "167,174"
    },
    {
        "city": "Tuyên Quang",
        "province": "Tuyên Quang",
        "area": "119.17",
        "population": "110,119"
    },
    {
        "city": "Uông Bí",
        "province": "Quảng Ninh",
        "area": "256.3",
        "population": "170,000"
    },
    {
        "city": "Việt Trì",
        "province": "Phú Thọ",
        "area": "110.99",
        "population": "277,539"
    },
    {
        "city": "Vinh",
        "province": "Nghệ An",
        "area": "104.98",
        "population": "282,981"
    },
    {
        "city": "Vĩnh Yên",
        "province": "Vĩnh Phúc",
        "area": "50.80",
        "population": "122,568"
    },
    {
        "city": "Vĩnh Long",
        "province": "Vĩnh Long",
        "area": "48.01",
        "population": "147,039"
    },
    {
        "city": "Vũng Tàu",
        "province": "Bà Rịa–Vũng Tàu",
        "area": "141.1",
        "population": "327,000"
    },
    {
        "city": "Yên Bái",
        "province": "Yên Bái",
        "area": "108.155",
        "population": "95,892"
    },
    {
        "city": "Cao Bằng",
        "province": "Cao Bằng",
        "area": "107.6",
        "population": "84,421"
    }
];
var KOREA_CITIES = ["Seoul", "Incheon", "Paju", "Cheonan", "Yongin", "Kwanghui-dong", "Pon-dong", "Gwangju", "Gwangmyeong", "Tang-ni", "Busan", "Seongnam-si", "Suwon-si", "Namyang", "Namyangju", "Jeju-si", "Ulsan", "Osan", "Hanam", "Pyong-gol", "Anyang-si", "Yangsan", "Daejeon", "Nonsan", "Seocho", "Wonju", "Kisa", "Daegu", "Ansan-si", "Gongju", "Haeundae", "Sasang", "Bucheon-si", "Chuncheon", "Ilsan-dong", "Naju", "Jinju", "Uiwang", "Gangneung", "Yongsan-dong", "Pohang", "Changwon", "Jeonju", "Yeosu", "Songnim", "Gimhae", "Songjeong", "Hyoja-dong", "Icheon-si", "Kimso", "Iksan", "Deokjin", "Koyang-dong", "Samsung", "Anseong", "Samjung-ni", "Mapo-dong", "Gunnae", "Nae-ri", "Suncheon", "Okpo-dong", "Moppo", "Sangdo-dong", "Cheongju-si", "Ch'aeun", "Taebuk", "Yeoju", "Seong-dong", "Duchon", "Gyeongju", "Andong", "Seosan City", "Asan", "Miryang", "Wonmi-gu", "Janghowon", "Chungnim", "Songam", "Tongan", "Ap'o", "Jecheon", "Se-ri", "Ka-ri", "Hansol", "Songang", "Hyangyang", "Gyeongsan-si", "Gumi", "Unpo", "Ulchin", "Namhyang-dong", "T'aebaek", "Hadong", "Haesan", "Chungju", "Chilgok"];
//# sourceMappingURL=cities.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COUNTRIES; });
var COUNTRIES = [
    { name: 'Afghanistan', code: 'AF' },
    { name: 'Åland Islands', code: 'AX' },
    { name: 'Albania', code: 'AL' },
    { name: 'Algeria', code: 'DZ' },
    { name: 'American Samoa', code: 'AS' },
    { name: 'AndorrA', code: 'AD' },
    { name: 'Angola', code: 'AO' },
    { name: 'Anguilla', code: 'AI' },
    { name: 'Antarctica', code: 'AQ' },
    { name: 'Antigua and Barbuda', code: 'AG' },
    { name: 'Argentina', code: 'AR' },
    { name: 'Armenia', code: 'AM' },
    { name: 'Aruba', code: 'AW' },
    { name: 'Australia', code: 'AU' },
    { name: 'Austria', code: 'AT' },
    { name: 'Azerbaijan', code: 'AZ' },
    { name: 'Bahamas', code: 'BS' },
    { name: 'Bahrain', code: 'BH' },
    { name: 'Bangladesh', code: 'BD' },
    { name: 'Barbados', code: 'BB' },
    { name: 'Belarus', code: 'BY' },
    { name: 'Belgium', code: 'BE' },
    { name: 'Belize', code: 'BZ' },
    { name: 'Benin', code: 'BJ' },
    { name: 'Bermuda', code: 'BM' },
    { name: 'Bhutan', code: 'BT' },
    { name: 'Bolivia', code: 'BO' },
    { name: 'Bosnia and Herzegovina', code: 'BA' },
    { name: 'Botswana', code: 'BW' },
    { name: 'Bouvet Island', code: 'BV' },
    { name: 'Brazil', code: 'BR' },
    { name: 'British Indian Ocean Territory', code: 'IO' },
    { name: 'Brunei Darussalam', code: 'BN' },
    { name: 'Bulgaria', code: 'BG' },
    { name: 'Burkina Faso', code: 'BF' },
    { name: 'Burundi', code: 'BI' },
    { name: 'Cambodia', code: 'KH' },
    { name: 'Cameroon', code: 'CM' },
    { name: 'Canada', code: 'CA' },
    { name: 'Cape Verde', code: 'CV' },
    { name: 'Cayman Islands', code: 'KY' },
    { name: 'Central African Republic', code: 'CF' },
    { name: 'Chad', code: 'TD' },
    { name: 'Chile', code: 'CL' },
    { name: 'China', code: 'CN' },
    { name: 'Christmas Island', code: 'CX' },
    { name: 'Cocos (Keeling) Islands', code: 'CC' },
    { name: 'Colombia', code: 'CO' },
    { name: 'Comoros', code: 'KM' },
    { name: 'Congo', code: 'CG' },
    { name: 'Congo, The Democratic Republic of the', code: 'CD' },
    { name: 'Cook Islands', code: 'CK' },
    { name: 'Costa Rica', code: 'CR' },
    { name: 'Cote D\'Ivoire', code: 'CI' },
    { name: 'Croatia', code: 'HR' },
    { name: 'Cuba', code: 'CU' },
    { name: 'Cyprus', code: 'CY' },
    { name: 'Czech Republic', code: 'CZ' },
    { name: 'Denmark', code: 'DK' },
    { name: 'Djibouti', code: 'DJ' },
    { name: 'Dominica', code: 'DM' },
    { name: 'Dominican Republic', code: 'DO' },
    { name: 'Ecuador', code: 'EC' },
    { name: 'Egypt', code: 'EG' },
    { name: 'El Salvador', code: 'SV' },
    { name: 'Equatorial Guinea', code: 'GQ' },
    { name: 'Eritrea', code: 'ER' },
    { name: 'Estonia', code: 'EE' },
    { name: 'Ethiopia', code: 'ET' },
    { name: 'Falkland Islands (Malvinas)', code: 'FK' },
    { name: 'Faroe Islands', code: 'FO' },
    { name: 'Fiji', code: 'FJ' },
    { name: 'Finland', code: 'FI' },
    { name: 'France', code: 'FR' },
    { name: 'French Guiana', code: 'GF' },
    { name: 'French Polynesia', code: 'PF' },
    { name: 'French Southern Territories', code: 'TF' },
    { name: 'Gabon', code: 'GA' },
    { name: 'Gambia', code: 'GM' },
    { name: 'Georgia', code: 'GE' },
    { name: 'Germany', code: 'DE' },
    { name: 'Ghana', code: 'GH' },
    { name: 'Gibraltar', code: 'GI' },
    { name: 'Greece', code: 'GR' },
    { name: 'Greenland', code: 'GL' },
    { name: 'Grenada', code: 'GD' },
    { name: 'Guadeloupe', code: 'GP' },
    { name: 'Guam', code: 'GU' },
    { name: 'Guatemala', code: 'GT' },
    { name: 'Guernsey', code: 'GG' },
    { name: 'Guinea', code: 'GN' },
    { name: 'Guinea-Bissau', code: 'GW' },
    { name: 'Guyana', code: 'GY' },
    { name: 'Haiti', code: 'HT' },
    { name: 'Heard Island and Mcdonald Islands', code: 'HM' },
    { name: 'Holy See (Vatican City State)', code: 'VA' },
    { name: 'Honduras', code: 'HN' },
    { name: 'Hong Kong', code: 'HK' },
    { name: 'Hungary', code: 'HU' },
    { name: 'Iceland', code: 'IS' },
    { name: 'India', code: 'IN' },
    { name: 'Indonesia', code: 'ID' },
    { name: 'Iran, Islamic Republic Of', code: 'IR' },
    { name: 'Iraq', code: 'IQ' },
    { name: 'Ireland', code: 'IE' },
    { name: 'Isle of Man', code: 'IM' },
    { name: 'Israel', code: 'IL' },
    { name: 'Italy', code: 'IT' },
    { name: 'Jamaica', code: 'JM' },
    { name: 'Japan', code: 'JP' },
    { name: 'Jersey', code: 'JE' },
    { name: 'Jordan', code: 'JO' },
    { name: 'Kazakhstan', code: 'KZ' },
    { name: 'Kenya', code: 'KE' },
    { name: 'Kiribati', code: 'KI' },
    { name: 'Korea, Democratic People\'S Republic of', code: 'KP' },
    { name: 'Korea, Republic of', code: 'KR' },
    { name: 'Kuwait', code: 'KW' },
    { name: 'Kyrgyzstan', code: 'KG' },
    { name: 'Lao People\'S Democratic Republic', code: 'LA' },
    { name: 'Latvia', code: 'LV' },
    { name: 'Lebanon', code: 'LB' },
    { name: 'Lesotho', code: 'LS' },
    { name: 'Liberia', code: 'LR' },
    { name: 'Libyan Arab Jamahiriya', code: 'LY' },
    { name: 'Liechtenstein', code: 'LI' },
    { name: 'Lithuania', code: 'LT' },
    { name: 'Luxembourg', code: 'LU' },
    { name: 'Macao', code: 'MO' },
    { name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK' },
    { name: 'Madagascar', code: 'MG' },
    { name: 'Malawi', code: 'MW' },
    { name: 'Malaysia', code: 'MY' },
    { name: 'Maldives', code: 'MV' },
    { name: 'Mali', code: 'ML' },
    { name: 'Malta', code: 'MT' },
    { name: 'Marshall Islands', code: 'MH' },
    { name: 'Martinique', code: 'MQ' },
    { name: 'Mauritania', code: 'MR' },
    { name: 'Mauritius', code: 'MU' },
    { name: 'Mayotte', code: 'YT' },
    { name: 'Mexico', code: 'MX' },
    { name: 'Micronesia, Federated States of', code: 'FM' },
    { name: 'Moldova, Republic of', code: 'MD' },
    { name: 'Monaco', code: 'MC' },
    { name: 'Mongolia', code: 'MN' },
    { name: 'Montserrat', code: 'MS' },
    { name: 'Morocco', code: 'MA' },
    { name: 'Mozambique', code: 'MZ' },
    { name: 'Myanmar', code: 'MM' },
    { name: 'Namibia', code: 'NA' },
    { name: 'Nauru', code: 'NR' },
    { name: 'Nepal', code: 'NP' },
    { name: 'Netherlands', code: 'NL' },
    { name: 'Netherlands Antilles', code: 'AN' },
    { name: 'New Caledonia', code: 'NC' },
    { name: 'New Zealand', code: 'NZ' },
    { name: 'Nicaragua', code: 'NI' },
    { name: 'Niger', code: 'NE' },
    { name: 'Nigeria', code: 'NG' },
    { name: 'Niue', code: 'NU' },
    { name: 'Norfolk Island', code: 'NF' },
    { name: 'Northern Mariana Islands', code: 'MP' },
    { name: 'Norway', code: 'NO' },
    { name: 'Oman', code: 'OM' },
    { name: 'Pakistan', code: 'PK' },
    { name: 'Palau', code: 'PW' },
    { name: 'Palestinian Territory, Occupied', code: 'PS' },
    { name: 'Panama', code: 'PA' },
    { name: 'Papua New Guinea', code: 'PG' },
    { name: 'Paraguay', code: 'PY' },
    { name: 'Peru', code: 'PE' },
    { name: 'Philippines', code: 'PH' },
    { name: 'Pitcairn', code: 'PN' },
    { name: 'Poland', code: 'PL' },
    { name: 'Portugal', code: 'PT' },
    { name: 'Puerto Rico', code: 'PR' },
    { name: 'Qatar', code: 'QA' },
    { name: 'Reunion', code: 'RE' },
    { name: 'Romania', code: 'RO' },
    { name: 'Russian Federation', code: 'RU' },
    { name: 'RWANDA', code: 'RW' },
    { name: 'Saint Helena', code: 'SH' },
    { name: 'Saint Kitts and Nevis', code: 'KN' },
    { name: 'Saint Lucia', code: 'LC' },
    { name: 'Saint Pierre and Miquelon', code: 'PM' },
    { name: 'Saint Vincent and the Grenadines', code: 'VC' },
    { name: 'Samoa', code: 'WS' },
    { name: 'San Marino', code: 'SM' },
    { name: 'Sao Tome and Principe', code: 'ST' },
    { name: 'Saudi Arabia', code: 'SA' },
    { name: 'Senegal', code: 'SN' },
    { name: 'Serbia and Montenegro', code: 'CS' },
    { name: 'Seychelles', code: 'SC' },
    { name: 'Sierra Leone', code: 'SL' },
    { name: 'Singapore', code: 'SG' },
    { name: 'Slovakia', code: 'SK' },
    { name: 'Slovenia', code: 'SI' },
    { name: 'Solomon Islands', code: 'SB' },
    { name: 'Somalia', code: 'SO' },
    { name: 'South Africa', code: 'ZA' },
    { name: 'South Georgia and the South Sandwich Islands', code: 'GS' },
    { name: 'Spain', code: 'ES' },
    { name: 'Sri Lanka', code: 'LK' },
    { name: 'Sudan', code: 'SD' },
    { name: 'Suriname', code: 'SR' },
    { name: 'Svalbard and Jan Mayen', code: 'SJ' },
    { name: 'Swaziland', code: 'SZ' },
    { name: 'Sweden', code: 'SE' },
    { name: 'Switzerland', code: 'CH' },
    { name: 'Syrian Arab Republic', code: 'SY' },
    { name: 'Taiwan, Province of China', code: 'TW' },
    { name: 'Tajikistan', code: 'TJ' },
    { name: 'Tanzania, United Republic of', code: 'TZ' },
    { name: 'Thailand', code: 'TH' },
    { name: 'Timor-Leste', code: 'TL' },
    { name: 'Togo', code: 'TG' },
    { name: 'Tokelau', code: 'TK' },
    { name: 'Tonga', code: 'TO' },
    { name: 'Trinidad and Tobago', code: 'TT' },
    { name: 'Tunisia', code: 'TN' },
    { name: 'Turkey', code: 'TR' },
    { name: 'Turkmenistan', code: 'TM' },
    { name: 'Turks and Caicos Islands', code: 'TC' },
    { name: 'Tuvalu', code: 'TV' },
    { name: 'Uganda', code: 'UG' },
    { name: 'Ukraine', code: 'UA' },
    { name: 'United Arab Emirates', code: 'AE' },
    { name: 'United Kingdom', code: 'GB' },
    { name: 'United States', code: 'US' },
    { name: 'United States Minor Outlying Islands', code: 'UM' },
    { name: 'Uruguay', code: 'UY' },
    { name: 'Uzbekistan', code: 'UZ' },
    { name: 'Vanuatu', code: 'VU' },
    { name: 'Venezuela', code: 'VE' },
    { name: 'Viet Nam', code: 'VN' },
    { name: 'Virgin Islands, British', code: 'VG' },
    { name: 'Virgin Islands, U.S.', code: 'VI' },
    { name: 'Wallis and Futuna', code: 'WF' },
    { name: 'Western Sahara', code: 'EH' },
    { name: 'Yemen', code: 'YE' },
    { name: 'Zambia', code: 'ZM' },
    { name: 'Zimbabwe', code: 'ZW' }
];
//# sourceMappingURL=country.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Customer; });
var Customer = (function () {
    function Customer(obj) {
        this.$key = obj && obj.$key || '';
        this.$ref = obj && obj.$ref || '';
        this.id = obj && obj.id || '';
        this.lastName = obj && obj.lastName || '';
        this.firstName = obj && obj.firstName || '';
        this.streetAddress = obj && obj.streetAddress || '';
        this.city = obj && obj.city || '';
        this.country = obj && obj.country || '';
        this.issueDate = obj && obj.issueDate || '';
        this.expirationDate = obj && obj.expirationDate || '';
        this.issueCity = obj && obj.issueCity || '';
        this.issueCountry = obj && obj.issueCountry || '';
        this.birthDate = obj && obj.birthDate || '';
        this.birthPlace = obj && obj.birthPlace || '';
    }
    return Customer;
}());

//# sourceMappingURL=customer.model.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__room_card_room_card_component__ = __webpack_require__(164);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerInfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomerInfoComponent = (function () {
    function CustomerInfoComponent(injector) {
        this.injector = injector;
        this.parentComponent = injector.get(__WEBPACK_IMPORTED_MODULE_1__room_card_room_card_component__["a" /* RoomCardComponent */]);
    }
    CustomerInfoComponent.prototype.ngOnInit = function () {
    };
    CustomerInfoComponent.prototype.show = function () {
        this.infoModal.show();
    };
    CustomerInfoComponent.prototype.hide = function () {
        this.infoModal.hide();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('infoModal'),
        __metadata("design:type", Object)
    ], CustomerInfoComponent.prototype, "infoModal", void 0);
    CustomerInfoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
            selector: 'app-customer-info',
            template: "\n    <sm-modal title=\"Checked in Customer Info\" icon=\"user circle outline\" #infoModal>\n        <modal-content>\n\n            <a class=\"ui teal label \">\n                Customer Name: \n            </a>\n              <a class=\"ui orange label\">\n                Tung \n            </a>\n\n        </modal-content>\n        <modal-actions>\n            <button class=\"ui blue button\" (click)=\"hide()\">Close</button>\n        </modal-actions>\n    </sm-modal>\n    ",
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Injector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Injector */]) === "function" && _a || Object])
    ], CustomerInfoComponent);
    return CustomerInfoComponent;
    var _a;
}());

//# sourceMappingURL=customer-info.component.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerSearchFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomerSearchFormComponent = (function () {
    function CustomerSearchFormComponent() {
        this.roomId = '';
    }
    CustomerSearchFormComponent.prototype.ngOnInit = function () {
    };
    CustomerSearchFormComponent.prototype.show = function () {
        this.searchModal.show();
    };
    CustomerSearchFormComponent.prototype.hide = function () {
        this.searchModal.hide();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Object)
    ], CustomerSearchFormComponent.prototype, "roomId", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('searchModal'),
        __metadata("design:type", Object)
    ], CustomerSearchFormComponent.prototype, "searchModal", void 0);
    CustomerSearchFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
            selector: 'app-customer-search-form',
            template: "\n    <sm-modal title=\"Nh\u1EADn Kh\u00E1ch\" icon=\"user circle outline\" #searchModal>\n        <modal-content>\n            <form class=\"ui form\">\n            <div class=\"field\">\n                <label>Nh\u1EADp m\u00E3 s\u1ED1:</label>\n                <input type=\"text\" name=\"customerId\" id=\"customerId\" placeholder=\"M\u00E3 S\u1ED1 gi\u1EA5y t\u1EDD c\u1EE7a kh\u00E1ch ....\" [(ngModel)]=\"customerId\">\n            </div>\n            </form>\n        </modal-content>\n        <modal-actions>\n            <button type=\"submit\" class=\"ui button primary\" \n                    [class.disabled]=\"customerId==''\" \n                    (click)=\"hide();\"\n                    [routerLink]=\"['/customer-check-in', customerId, roomId]\" skipLocationChange>T\u00ECm</button>\n        </modal-actions>\n    </sm-modal>\n    ",
        }),
        __metadata("design:paramtypes", [])
    ], CustomerSearchFormComponent);
    return CustomerSearchFormComponent;
}());

//# sourceMappingURL=customer-search-form.component.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_component__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_order_component__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_customer_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__hotel_service_hotel_service_component__ = __webpack_require__(160);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var mainRoutes = [
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    },
    {
        path: 'main',
        component: __WEBPACK_IMPORTED_MODULE_2__main_component__["a" /* MainComponent */],
    },
    {
        path: 'hotel-services/:orderId',
        component: __WEBPACK_IMPORTED_MODULE_5__hotel_service_hotel_service_component__["a" /* HotelServiceComponent */]
    },
    {
        path: 'orders/:id/:edit',
        component: __WEBPACK_IMPORTED_MODULE_3__order_order_component__["a" /* OrderComponent */]
    },
    {
        path: 'customer-check-in/:customerId/:roomId',
        component: __WEBPACK_IMPORTED_MODULE_4__customer_customer_component__["a" /* CustomerComponent */]
    }
];
var MainRoutingModule = (function () {
    function MainRoutingModule() {
    }
    MainRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(mainRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
            ]
        })
    ], MainRoutingModule);
    return MainRoutingModule;
}());

//# sourceMappingURL=main-routing.module.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Order; });
var Order = (function () {
    function Order(obj) {
        this.customerId = obj && obj.customerId || '';
        this.roomId = obj && obj.roomId || '';
        this.checkInTime = obj && obj.checkInTime || new Date().toString();
        this.checkOutTime = obj && obj.checkOutTime || '';
        this.services = obj && obj.services || [];
        this.discount = obj && obj.discount || 0.0;
        this.adjustment = obj && obj.adjustment || 0.0;
        this.total = obj && obj.total || 0.0;
    }
    Order.prototype.finalizeRoomPrice = function (days, hours, minutes) {
        var price = this.services[0].price;
        if (days <= 0) {
            if (hours > 4) {
                return price;
            }
            else if (hours > 3) {
                return price = 210000;
            }
            else if (hours > 2) {
                return price = 190000;
            }
            else if (hours > 1) {
                return price = 150000;
            }
            else {
                return price = 100000;
            }
        }
        else {
            return price *= days;
        }
    };
    Order.prototype.calculateTotal = function (days, hours, minutes) {
        var total = this.finalizeRoomPrice(days, hours, minutes);
        for (var index = 1; index < this.services.length; index++) {
            var service = this.services[index];
            total += service.price * service.quantity;
        }
        return total;
    };
    return Order;
}());

//# sourceMappingURL=order.model.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RoomService = (function () {
    function RoomService(db) {
        this.db = db;
    }
    RoomService.prototype.getRooms = function () {
        return this.db.list('/rooms');
    };
    RoomService.prototype.updateRoom = function (key, data) {
        this.db.list('/rooms').update(key, data);
    };
    RoomService.prototype.getRoom = function (key) {
        return this.db.object("rooms/" + key);
    };
    RoomService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
    ], RoomService);
    return RoomService;
    var _a;
}());

//# sourceMappingURL=room.service.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RoomListComponent = (function () {
    function RoomListComponent() {
        this.cssClass = "ui cards";
    }
    RoomListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["c" /* FirebaseListObservable */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["c" /* FirebaseListObservable */]) === "function" && _a || Object)
    ], RoomListComponent.prototype, "rooms", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* HostBinding */])('attr.class'),
        __metadata("design:type", Object)
    ], RoomListComponent.prototype, "cssClass", void 0);
    RoomListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
            selector: 'app-room-list',
            template: __webpack_require__(537),
            styles: [__webpack_require__(473)]
        }),
        __metadata("design:paramtypes", [])
    ], RoomListComponent);
    return RoomListComponent;
    var _a;
}());

//# sourceMappingURL=room-list.component.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Room; });
var Room = (function () {
    function Room($key, name, type, price, isOccupied, status, imgUrl, orderId) {
        if (orderId === void 0) { orderId = ''; }
        this.$key = $key;
        this.name = name;
        this.type = type;
        this.price = price;
        this.isOccupied = isOccupied;
        this.status = status;
        this.imgUrl = imgUrl;
        this.orderId = orderId;
    }
    return Room;
}());

//# sourceMappingURL=room.model.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuItem; });
var MenuItem = (function () {
    function MenuItem(name, url, subMenu) {
        this.name = name;
        this.url = url;
        this.subMenu = subMenu;
    }
    return MenuItem;
}());

//# sourceMappingURL=menu-item.model.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_service__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuComponent = (function () {
    function MenuComponent(menuService) {
        this.menuService = menuService;
        this.menu = [];
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuService.getMenu().then(function (menuItems) {
            _this.menu = menuItems;
        });
    };
    MenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
            selector: 'app-menu',
            template: __webpack_require__(538),
            styles: [__webpack_require__(474)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__menu_service__["a" /* MenuService */]) === "function" && _a || Object])
    ], MenuComponent);
    return MenuComponent;
    var _a;
}());

//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_component__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_service__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MenuModule = (function () {
    function MenuModule() {
    }
    MenuModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__menu_service__["a" /* MenuService */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__menu_component__["a" /* MenuComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__menu_component__["a" /* MenuComponent */]]
        })
    ], MenuModule);
    return MenuModule;
}());

//# sourceMappingURL=menu.module.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu_item_model__ = __webpack_require__(402);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MENU; });

var MENU = [
    new __WEBPACK_IMPORTED_MODULE_0__menu_item_model__["a" /* MenuItem */]('Trang Chính', ''),
    new __WEBPACK_IMPORTED_MODULE_0__menu_item_model__["a" /* MenuItem */]('Quản Lý', '/reservation', [
        new __WEBPACK_IMPORTED_MODULE_0__menu_item_model__["a" /* MenuItem */]('Phòng', 'room'),
        new __WEBPACK_IMPORTED_MODULE_0__menu_item_model__["a" /* MenuItem */]('Tiền thu/chi', 'reservation')
    ]),
    new __WEBPACK_IMPORTED_MODULE_0__menu_item_model__["a" /* MenuItem */]('Báo Cáo', '/report', [
        new __WEBPACK_IMPORTED_MODULE_0__menu_item_model__["a" /* MenuItem */]('Báo Cáo Ngày', 'daily-report'),
        new __WEBPACK_IMPORTED_MODULE_0__menu_item_model__["a" /* MenuItem */]('Báo Cáo Tháng', 'monthly-report'),
        new __WEBPACK_IMPORTED_MODULE_0__menu_item_model__["a" /* MenuItem */]('Báo Cáo Năm', 'periodical-report')
    ]),
];
//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeriodicalReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PeriodicalReportComponent = (function () {
    function PeriodicalReportComponent() {
    }
    PeriodicalReportComponent.prototype.ngOnInit = function () {
    };
    PeriodicalReportComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
            selector: 'app-periodical-report',
            template: __webpack_require__(542),
            styles: [__webpack_require__(478)]
        }),
        __metadata("design:paramtypes", [])
    ], PeriodicalReportComponent);
    return PeriodicalReportComponent;
}());

//# sourceMappingURL=periodical-report.component.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reservation_reservation_service__ = __webpack_require__(71);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReportTableComponent = (function () {
    function ReportTableComponent(reservationService) {
        this.reservationService = reservationService;
        this.orders = [];
        this.total = 0.0;
        this.reservations = [];
        this.reservationTotal = 0.0;
    }
    ReportTableComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < this.orders.length; i++) {
            this.orders[i].total = 0.0;
            for (var index = 0; index < this.orders[i].services.length; index++) {
                if (this.orders[i].services[index].unit === "gi\u1EDD") {
                    this.orders[i].total += this.orders[i].services[index].price;
                }
                else {
                    this.orders[i].total += this.orders[i].services[index].price * this.orders[i].services[index].quantity;
                }
            }
            this.orders[i].total = this.orders[i].total + (this.orders[i].adjustment || 0.0) - (this.orders[i].discount || 0.0);
            this.total += this.orders[i].total;
        }
        ;
    };
    ReportTableComponent.prototype.remove = function (key) {
        this.reservationService.deleteResevation(key);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Array)
    ], ReportTableComponent.prototype, "orders", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Object)
    ], ReportTableComponent.prototype, "reservations", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])(),
        __metadata("design:type", Object)
    ], ReportTableComponent.prototype, "reservationTotal", void 0);
    ReportTableComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
            selector: 'app-report-table',
            template: __webpack_require__(543),
            styles: [__webpack_require__(479)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__reservation_reservation_service__["a" /* ReservationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__reservation_reservation_service__["a" /* ReservationService */]) === "function" && _a || Object])
    ], ReportTableComponent);
    return ReportTableComponent;
    var _a;
}());

//# sourceMappingURL=report-table.component.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report_component__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__daily_report_daily_report_component__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__monthly_report_monthly_report_component__ = __webpack_require__(168);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var reportRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__report_component__["a" /* ReportComponent */],
        children: [
            {
                path: '',
                redirectTo: 'daily-report',
                pathMatch: 'full'
            },
            {
                path: 'daily-report',
                component: __WEBPACK_IMPORTED_MODULE_3__daily_report_daily_report_component__["a" /* DailyReportComponent */]
            },
            {
                path: 'monthly-report',
                component: __WEBPACK_IMPORTED_MODULE_4__monthly_report_monthly_report_component__["a" /* MonthlyReportComponent */]
            }
        ]
    }
];
var ReportRoutingModule = (function () {
    function ReportRoutingModule() {
    }
    ReportRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(reportRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
            ]
        })
    ], ReportRoutingModule);
    return ReportRoutingModule;
}());

//# sourceMappingURL=reports-routing.module.js.map

/***/ }),

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 468:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "input[type=\"text\"]:disabled {\r\n    color: blue !important;\r\n    font-weight: bolder;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 469:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 470:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 471:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, ".occupied {\r\n    background-color: lightcoral !important;\r\n}\r\n.dirty {\r\n    background-color: gray !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 473:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 475:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 476:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 477:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 478:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerService = (function () {
    function CustomerService(db) {
        this.db = db;
        this.customers = db.list('/customers');
    }
    CustomerService.prototype.addCustomer = function (customer) {
        return this.db.list('/customers').push(customer).then(function (item) { return item.key; });
    };
    CustomerService.prototype.getCustomers = function () {
        return this.customers;
    };
    CustomerService.prototype.getCustomer = function (key) {
        return this.db.object("customers/" + key);
    };
    CustomerService.prototype.getCustomerByID = function (id) {
        return this.db.list('customers', {
            query: {
                orderByChild: 'id',
                equalTo: id,
            }
        });
    };
    CustomerService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
    ], CustomerService);
    return CustomerService;
    var _a;
}());

//# sourceMappingURL=customer.service.js.map

/***/ }),

/***/ 480:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 481:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 219,
	"./af.js": 219,
	"./ar": 226,
	"./ar-dz": 220,
	"./ar-dz.js": 220,
	"./ar-kw": 221,
	"./ar-kw.js": 221,
	"./ar-ly": 222,
	"./ar-ly.js": 222,
	"./ar-ma": 223,
	"./ar-ma.js": 223,
	"./ar-sa": 224,
	"./ar-sa.js": 224,
	"./ar-tn": 225,
	"./ar-tn.js": 225,
	"./ar.js": 226,
	"./az": 227,
	"./az.js": 227,
	"./be": 228,
	"./be.js": 228,
	"./bg": 229,
	"./bg.js": 229,
	"./bn": 230,
	"./bn.js": 230,
	"./bo": 231,
	"./bo.js": 231,
	"./br": 232,
	"./br.js": 232,
	"./bs": 233,
	"./bs.js": 233,
	"./ca": 234,
	"./ca.js": 234,
	"./cs": 235,
	"./cs.js": 235,
	"./cv": 236,
	"./cv.js": 236,
	"./cy": 237,
	"./cy.js": 237,
	"./da": 238,
	"./da.js": 238,
	"./de": 241,
	"./de-at": 239,
	"./de-at.js": 239,
	"./de-ch": 240,
	"./de-ch.js": 240,
	"./de.js": 241,
	"./dv": 242,
	"./dv.js": 242,
	"./el": 243,
	"./el.js": 243,
	"./en-au": 244,
	"./en-au.js": 244,
	"./en-ca": 245,
	"./en-ca.js": 245,
	"./en-gb": 246,
	"./en-gb.js": 246,
	"./en-ie": 247,
	"./en-ie.js": 247,
	"./en-nz": 248,
	"./en-nz.js": 248,
	"./eo": 249,
	"./eo.js": 249,
	"./es": 251,
	"./es-do": 250,
	"./es-do.js": 250,
	"./es.js": 251,
	"./et": 252,
	"./et.js": 252,
	"./eu": 253,
	"./eu.js": 253,
	"./fa": 254,
	"./fa.js": 254,
	"./fi": 255,
	"./fi.js": 255,
	"./fo": 256,
	"./fo.js": 256,
	"./fr": 259,
	"./fr-ca": 257,
	"./fr-ca.js": 257,
	"./fr-ch": 258,
	"./fr-ch.js": 258,
	"./fr.js": 259,
	"./fy": 260,
	"./fy.js": 260,
	"./gd": 261,
	"./gd.js": 261,
	"./gl": 262,
	"./gl.js": 262,
	"./gom-latn": 263,
	"./gom-latn.js": 263,
	"./he": 264,
	"./he.js": 264,
	"./hi": 265,
	"./hi.js": 265,
	"./hr": 266,
	"./hr.js": 266,
	"./hu": 267,
	"./hu.js": 267,
	"./hy-am": 268,
	"./hy-am.js": 268,
	"./id": 269,
	"./id.js": 269,
	"./is": 270,
	"./is.js": 270,
	"./it": 271,
	"./it.js": 271,
	"./ja": 272,
	"./ja.js": 272,
	"./jv": 273,
	"./jv.js": 273,
	"./ka": 274,
	"./ka.js": 274,
	"./kk": 275,
	"./kk.js": 275,
	"./km": 276,
	"./km.js": 276,
	"./kn": 277,
	"./kn.js": 277,
	"./ko": 278,
	"./ko.js": 278,
	"./ky": 279,
	"./ky.js": 279,
	"./lb": 280,
	"./lb.js": 280,
	"./lo": 281,
	"./lo.js": 281,
	"./lt": 282,
	"./lt.js": 282,
	"./lv": 283,
	"./lv.js": 283,
	"./me": 284,
	"./me.js": 284,
	"./mi": 285,
	"./mi.js": 285,
	"./mk": 286,
	"./mk.js": 286,
	"./ml": 287,
	"./ml.js": 287,
	"./mr": 288,
	"./mr.js": 288,
	"./ms": 290,
	"./ms-my": 289,
	"./ms-my.js": 289,
	"./ms.js": 290,
	"./my": 291,
	"./my.js": 291,
	"./nb": 292,
	"./nb.js": 292,
	"./ne": 293,
	"./ne.js": 293,
	"./nl": 295,
	"./nl-be": 294,
	"./nl-be.js": 294,
	"./nl.js": 295,
	"./nn": 296,
	"./nn.js": 296,
	"./pa-in": 297,
	"./pa-in.js": 297,
	"./pl": 298,
	"./pl.js": 298,
	"./pt": 300,
	"./pt-br": 299,
	"./pt-br.js": 299,
	"./pt.js": 300,
	"./ro": 301,
	"./ro.js": 301,
	"./ru": 302,
	"./ru.js": 302,
	"./sd": 303,
	"./sd.js": 303,
	"./se": 304,
	"./se.js": 304,
	"./si": 305,
	"./si.js": 305,
	"./sk": 306,
	"./sk.js": 306,
	"./sl": 307,
	"./sl.js": 307,
	"./sq": 308,
	"./sq.js": 308,
	"./sr": 310,
	"./sr-cyrl": 309,
	"./sr-cyrl.js": 309,
	"./sr.js": 310,
	"./ss": 311,
	"./ss.js": 311,
	"./sv": 312,
	"./sv.js": 312,
	"./sw": 313,
	"./sw.js": 313,
	"./ta": 314,
	"./ta.js": 314,
	"./te": 315,
	"./te.js": 315,
	"./tet": 316,
	"./tet.js": 316,
	"./th": 317,
	"./th.js": 317,
	"./tl-ph": 318,
	"./tl-ph.js": 318,
	"./tlh": 319,
	"./tlh.js": 319,
	"./tr": 320,
	"./tr.js": 320,
	"./tzl": 321,
	"./tzl.js": 321,
	"./tzm": 323,
	"./tzm-latn": 322,
	"./tzm-latn.js": 322,
	"./tzm.js": 323,
	"./uk": 324,
	"./uk.js": 324,
	"./ur": 325,
	"./ur.js": 325,
	"./uz": 327,
	"./uz-latn": 326,
	"./uz-latn.js": 326,
	"./uz.js": 327,
	"./vi": 328,
	"./vi.js": 328,
	"./x-pseudo": 329,
	"./x-pseudo.js": 329,
	"./yo": 330,
	"./yo.js": 330,
	"./zh-cn": 331,
	"./zh-cn.js": 331,
	"./zh-hk": 332,
	"./zh-hk.js": 332,
	"./zh-tw": 333,
	"./zh-tw.js": 333
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 527;


/***/ }),

/***/ 531:
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 532:
/***/ (function(module, exports) {

module.exports = "<sm-modal title=\"Customer Information.\" #customerModal>\n  <modal-content *ngIf=\"customer\">\n    <form class=\"ui form\" [formGroup]=\"customerForm\">\n      <div class=\"field\">\n        <div class=\"four fields\">\n          <div class=\"field\">\n            <label for=\"idNumber\">Số CMND/Hộ Chiếu</label>\n            <input type=\"text\" name=\"Số CMND/Hộ Chiếu/...\" placeholder=\"ID Number\" [class.error]=\"!customerForm.controls['id'].valid\"\n              [formControl]=\"customerForm.controls['id']\" [(ngModel)]=\"customer.id\" [disabled]=\"doesExist\">\n            <div *ngIf=\"customerForm.controls['id'].hasError('required')&&customerForm.controls['id'].dirty\" class=\"ui pointing red basic label\">Yêu cầu phải có mã số giấy tờ </div>\n          </div>\n          <div class=\"field\">\n            <label for=\"issueDate\">Ngày Cấp</label>\n            <input type=\"text\" name=\"issueDate\" placeholder=\"Ngày Cấp\" [class.error]=\"!customerForm.controls['issueDate'].valid\" [formControl]=\"customerForm.controls['issueDate']\"\n              [(ngModel)]=\"customer.issueDate\">\n            <div *ngIf=\"customerForm.controls['issueDate'].hasError('required')&&customerForm.controls['issueDate'].dirty\" class=\"ui pointing red basic label\">Yêu cầu phải có ngày cấp</div>\n            <div *ngIf=\"customerForm.controls['issueDate'].hasError('invalidDate')\" class=\"ui pointing red basic label\">Ngày cấp phải theo định dạng dd/mm/yyyy (VD: 30/12/2015)</div>\n          </div>\n          <div class=\"field\">\n            <label>Ngày Hết Hạn</label>\n            <input type=\"text\" name=\"expirationDate\" placeholder=\"Ngày Hết Hạn\" [class.error]=\"!customerForm.controls['expirationDate'].valid\"\n              [formControl]=\"customerForm.controls['expirationDate']\" [(ngModel)]=\"customer.expirationDate\">\n            <div *ngIf=\"customerForm.controls['expirationDate'].hasError('required')&&customerForm.controls['expirationDate'].dirty\"\n              class=\"ui pointing red basic label\">Yêu cầu phải có ngày hết hạn</div>\n            <div *ngIf=\"customerForm.controls['expirationDate'].hasError('invalidDate')\" class=\"ui pointing red basic label\">Ngày hết hạn phải theo định dạnh dd/mm/yyyy (VD: 30/12/2015)</div>\n\n          </div>\n          <div class=\"field\">\n            <label>Tỉnh/Thành Phố Cấp:</label>\n            <select [(ngModel)]=\"customer.issueCity\" (focus)=\"showDropDown()\" class=\"ui fluid search selection dropdown\" [formControl]=\"customerForm.controls['issueCity']\">\n                <option *ngFor=\"let city of cityList\" [ngValue]=\"city\">{{ city }}</option>\n              </select >\n                <!-- <input type=\"text\" placeholder=\"Thành Phố Cấp\" \n                [formControl]=\"customerForm.controls['issueCity']\"\n                [class.error]=\"!customerForm.controls['issueCity'].valid\"\n                [(ngModel)]=\"customer.issueCity\"> -->\n          </div>\n          <div class=\"field\">\n            <label>Quốc Gia Cấp: </label>\n            <select [(ngModel)]=\"customer.issueCountry\" (focus)=\"showDropDown()\" class=\"ui fluid search selection dropdown\" [formControl]=\"customerForm.controls['issueCountry']\">\n                <option *ngFor=\"let country of countryList\" [ngValue]=\"country.name\">{{ country.name }}</option>\n              </select >\n          \n              <!-- <input type=\"text\" placeholder=\"Quốc Gia Cấp\" \n                [formControl]=\"customerForm.controls['issueCountry']\"\n                [class.error]=\"!customerForm.controls['issueCountry'].valid\"\n                [(ngModel)]=\"customer.issueCountry\"> -->\n            <div *ngIf=\"customerForm.controls['issueCountry'].hasError('required')&&customerForm.controls['issueCountry'].dirty\" \n                  class=\"ui pointing red basic label\">Yêu cầu nhập quốc gia cấp </div>\n          </div>         \n        </div>\n      </div>\n      <div class=\"field\">\n        <label>Họ</label>\n        <div class=\"two fields\">\n          <div class=\"field\">\n            <input type=\"text\" name=\"lastName\" placeholder=\"Họ\" \n                  [class.error]=\"!customerForm.controls['lastName'].valid\" \n                  [formControl]=\"customerForm.controls['lastName']\"\n                  [(ngModel)]=\"customer.lastName\">\n            <div *ngIf=\"customerForm.controls['lastName'].hasError('required')&&customerForm.controls['firstName'].dirty\" \n                  class=\"ui pointing red basic label\">Yêu cầu phải có họ</div>\n          </div>\n          <div class=\"field\">\n            <input type=\"text\" name=\"firstName\" placeholder=\"Tên\" \n                  [class.error]=\"!customerForm.controls['firstName'].valid\"\n                  [formControl]=\"customerForm.controls['firstName']\"\n                  [(ngModel)]=\"customer.firstName\">\n            <div *ngIf=\"customerForm.controls['firstName'].hasError('required')&&customerForm.controls['lastName'].dirty\" \n                  class=\"ui pointing red basic label\">Yêu cầu phải có tên</div>\n          </div>\n        </div>\n        <div class=\"three fields\">\n          <div class=\"field\">\n            <label for=\"birthDate\">Ngày Sinh</label>\n            <input type=\"text\" name=\"birthDate\" placeholder=\"Ngày Sinh\" \n                  [class.error]=\"!customerForm.controls['birthDate'].valid\" \n                  [formControl]=\"customerForm.controls['birthDate']\"\n                  [(ngModel)]=\"customer.birthDate\">\n            <div *ngIf=\"customerForm.controls['birthDate'].hasError('required')&&customerForm.controls['birthDate'].dirty\" \n                  class=\"ui pointing red basic label\">Yêu cầu phải có ngày sinh</div>\n             <div *ngIf=\"customerForm.controls['birthDate'].hasError('invalidDate')\" \n                  class=\"ui pointing red basic label\">Ngày sinh phải theo định dạng dd/mm/yyyy (VD: 30/12/2015)</div> \n          </div>\n          <div class=\"field\">\n            <label>Tỉnh/Thành Phố</label>\n            <select [(ngModel)]=\"customer.birthPlace\"\n                (focus)=\"showDropDown()\" class=\"ui fluid search selection dropdown\" \n                [formControl]=\"customerForm.controls['birthPlace']\" >\n                <option *ngFor=\"let city of cityList\" [ngValue]=\"city\">{{ city }}</option>\n              </select >\n            <!-- <input type=\"text\" name=\"birthPlace\" placeholder=\"Nơi Sinh\" \n                    [class.error]=\"!customerForm.controls['birthPlace'].valid\"\n                    [formControl]=\"customerForm.controls['birthPlace']\"\n                    [(ngModel)]=\"customer.birthPlace\"> -->\n            <!-- <div *ngIf=\"customerForm.controls['birthPlace'].hasError('required')&&customerForm.controls['birthPlace'].dirty\"\n                    class=\"ui pointing red basic label\">Yêu cầu phải có nơi sinh</div> -->\n          </div>\n          <div class=\"field\">\n            <label>Quốc Gia</label>\n            <select [(ngModel)]=\"customer.birthCountry\"\n                (focus)=\"showDropDown()\" class=\"ui fluid search selection dropdown\" \n                [formControl]=\"customerForm.controls['birthCountry']\" >\n                <option *ngFor=\"let country of countryList\" [ngValue]=\"country.name\">{{ country.name }}</option>\n              </select >\n            <!-- <input type=\"text\" name=\"birthPlace\" placeholder=\"Nơi Sinh\" \n                    [class.error]=\"!customerForm.controls['birthPlace'].valid\"\n                    [formControl]=\"customerForm.controls['birthPlace']\"\n                    [(ngModel)]=\"customer.birthPlace\"> -->\n            <div *ngIf=\"customerForm.controls['birthPlace'].hasError('required')&&customerForm.controls['birthPlace'].dirty\"\n                    class=\"ui pointing red basic label\">Yêu cầu phải có nơi sinh</div>\n          </div>\n        </div>\n        <div class=\"field\">\n          <label>Địa Chỉ:</label>\n          <input type=\"text\" name=\"street address\" placeholder=\"Địa Chỉ\" \n                [class.error]=\"!customerForm.controls['streetAddress'].valid\"\n                [formControl]=\"customerForm.controls['streetAddress']\"\n                [(ngModel)]=\"customer.streetAddress\">\n        </div>\n        <div class=\"two fields\">\n          <div class=\"field\">\n            <label>Tỉnh/Thành Phố</label>\n             <select [(ngModel)]=\"customer.city\"\n                (focus)=\"showDropDown()\" class=\"ui fluid search selection dropdown\" \n                [formControl]=\"customerForm.controls['city']\" >\n                <option *ngFor=\"let city of cityList\" [ngValue]=\"city\">{{ city }}</option>\n              </select >\n            <!-- <input type=\"text\" placeholder=\"Thành Phố\" \n                [formControl]=\"customerForm.controls['city']\"\n                [class.error]=\"!customerForm.controls['city'].valid\"\n                [(ngModel)]=\"customer.city\"> -->\n          </div>\n          <div class=\"field\">\n            <label>Quốc Gia</label>\n             <select [(ngModel)]=\"customer.country\"\n                (focus)=\"showDropDown()\" class=\"ui fluid search selection dropdown\" \n                [formControl]=\"customerForm.controls['country']\" >\n                <option *ngFor=\"let country of countryList\" [ngValue]=\"country.name\">{{ country.name }}</option>\n              </select >\n            <!-- <input type=\"text\" placeholder=\"Quốc Gia\" \n                [formControl]=\"customerForm.controls['country']\"\n                [class.error]=\"!customerForm.controls['country'].valid\"\n                [(ngModel)]=\"customer.country\"> -->\n            <div *ngIf=\"customerForm.controls['country'].hasError('required')&&customerForm.controls['country'].dirty\" \n                class=\"ui pointing red basic label\">Country is required</div>\n          </div>\n        </div>\n      </div>\n    </form>\n    <!-- <div class=\"ui message info\">{{ customerForm.value | json }} DOES EXIST{{ doesExist }}</div> -->\n  </modal-content>\n  <modal-actions>\n    <button class=\"ui button primary\" \n            (click)=\"onSubmit(customerForm.value);customerModal.hide()\"\n            [class.disabled]=\"!customerForm.valid && !doesExist\">Nhận Khách</button>\n  </modal-actions>\n</sm-modal>"

/***/ }),

/***/ 533:
/***/ (function(module, exports) {

module.exports = "<sm-modal title=\"Thêm Dịch Vụ\" icon=\"user circle outline\" #hotelServiceModal>\n  <modal-content>\n\n  <select [(ngModel)]=\"service\" class=\"ui fluid search selection dropdown\">\n    <option *ngFor=\"let s of services\" [ngValue]=\"s\">{{ s.description }}</option>\n  </select >\n  <br/>\n  <div class=\"ui right labeled input\">\n    <div class=\"ui right labeled input\">\n    <div class=\"ui label\">Tên Dịch Vụ</div>\n    <input type=\"text\" [(ngModel)]=\"service.description\">\n  </div>\n    <div class=\"ui label\">Số Lượng</div>\n    <input type=\"text\" [(ngModel)]=\"service.quantity\">\n    <div class=\"ui basic label\">{{ service.unit}}</div>\n  </div>\n  <div class=\"ui right labeled input\">\n    <div class=\"ui label\">Giá</div>\n    <input type=\"text\" [(ngModel)]=\"service.price\">\n  </div>  \n  </modal-content>\n  <modal-actions>\n    <button class=\"ui blue button\" (click)=\"add()\">Thêm</button>\n  </modal-actions>\n</sm-modal>"

/***/ }),

/***/ 534:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui statistics\">\r\n        <div class=\"statistic ui blue\">\r\n          <div class=\"value\">\r\n            {{ vacantRooms }}\r\n          </div>\r\n          <div class=\"label\">\r\n            Phòng Trống:\r\n          </div>\r\n        </div>\r\n        <div class=\"statistic ui red\">\r\n          <div class=\"value\">\r\n            {{ occupiedRooms }}\r\n          </div>\r\n          <div class=\"label\">\r\n            Phòng Có Khách\r\n          </div>\r\n        </div>\r\n        <div class=\"statistic ui green\">\r\n          <div class=\"value\">\r\n            {{ dirtyRooms }}\r\n          </div>\r\n          <div class=\"label\">\r\n            PHòng Dơ\r\n          </div>\r\n        </div>\r\n      </div>\r\n<app-room-list [rooms]=\"rooms\"></app-room-list>\r\n"

/***/ }),

/***/ 535:
/***/ (function(module, exports) {

module.exports = "<sm-modal title=\"Khách Sạn Hoàng Long - 40 Hậu Giang Phường 4, Quận Tân Bình, Tp. Hồ Chí Minh\" #orderModal>\r\n  <modal-content>\r\n    <h2 class=\"ui center aligned icon header\">\r\n      <i class=\"money icon\"></i> Hóa Đơn Tạm Tính\r\n    </h2>\r\n    <div class=\"ui large header\">Thông Tin Khách Hàng:</div>\r\n    <p>Tên: {{ (customer | async)?.lastName }} {{ (customer | async)?.firstName }}</p>\r\n    <p>Địa Chỉ: {{ (customer | async)?.streetAddress }} - {{ (customer | async)?.city }} - {{ (customer | async)?.country }}</p>\r\n    <p>Ngày Sinh: {{ (customer | async)?.birthDate }} - Tại: {{ (customer | async)?.birthPlace }}, {{(customer | async)?.birthCountry\r\n      }}\r\n      <p>Số CMND/Hộ Chiếu/Thẻ Tạm Trú: {{ (customer | async)?.id }} - Ngày Cấp: {{ (customer | async)?.issueDate }} - Ngày Hết\r\n        Hạn: {{ (customer | async)?.expirationDate }} </p>\r\n      <p>Nơi Cấp: {{ (customer | async)?.issueCity }} - {{ (customer | async)?.issueCountry }} </p>\r\n      <p>Nhận Phòng Lúc: {{ (order | async)?.checkInTime }}</p>\r\n      <p>Thời gian đã ở : {{ day }} ngày, {{ hour }} giờ, and {{ minutes }} phút\r\n        <table class=\"ui teal table\">\r\n          <thead>\r\n            <tr>\r\n              <th>Tên Dịch Vụ</th>\r\n              <th class=\"right aligned\">Giá</th>\r\n              <th class=\"right aligned\">Số Lượng/Đơn Vị</th>\r\n              <th class=\"right aligned\">Thành Tiền</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let service of services | async; let i = index; \">\r\n              <ng-template #other_content>\r\n                <td>{{ service.description }}</td>\r\n                <td class=\"right aligned\" *ngIf=\"price\">{{ price | number}}</td>\r\n                <td class=\"right aligned\" *ngIf=\"quantity\">{{ unit=='ngày' ? quantity : displayQty }} {{ unit }}</td>\r\n                <td class=\"right aligned\" *ngIf=\"price\">{{ price * quantity | number}} <i class=\"ui red window close icon\" (click)=\"remove(service.$key)\"></i></td>\r\n              </ng-template>\r\n              <ng-container *ngIf=\"i > 0;else other_content\">\r\n                <td>{{ service.description }}</td>\r\n                <td class=\"right aligned\">{{ service.price | number}}</td>\r\n                <td class=\"right aligned\">{{ service.quantity }} {{ service.unit }}</td>\r\n                <td class=\"right aligned\">{{ service.price * service.quantity | number}} <i class=\"ui red window close icon\" (click)=\"remove(service.$key)\"></i></td>\r\n              </ng-container>\r\n            </tr>\r\n            <tr *ngIf=\"pendingAdd\">\r\n                <td>{{ pendingAdd.description }}</td>\r\n                <td class=\"right aligned\">{{ pendingAdd.price | number}}</td>\r\n                <td class=\"right aligned\">{{ displayQty }} {{ pendingAdd.unit }}</td>\r\n                <td class=\"right aligned\">{{ pendingAdd.price * pendingAdd.quantity | number}} <i class=\"ui red window close icon\" (click)=\"remove(service.$key)\"></i></td>\r\n            </tr>\r\n          </tbody>\r\n          <tfoot>\r\n            <tr *ngIf=\"editting=='no'\">\r\n              <th></th>\r\n              <th></th>\r\n              <th class=\"right aligned\">\r\n                <h4 class=\"ui teal header\">Giảm Giá</h4>\r\n              </th>\r\n              <th class=\"right aligned\">\r\n                <div class=\"ui right labeled input\">\r\n                  <input type=\"number\" placeholder=\"Nhập số tiền..\" [(ngModel)]=\"discount\" [class.disabled]=\"editting=='yes'\">\r\n                  <div class=\"ui basic label\">\r\n                    $\r\n                  </div>\r\n                </div>\r\n              </th>\r\n            </tr>\r\n            <tr *ngIf=\"editting=='no'\">\r\n              <th></th>\r\n              <th></th>\r\n              <th class=\"right aligned\">\r\n                <h4 class=\"ui teal header\">Điều Chỉnh:</h4>\r\n              </th>\r\n              <th class=\"right aligned\">\r\n                <div class=\"ui right labeled input\">\r\n                  <input type=\"number\" placeholder=\"Điều chỉnh hóa đơn..\" [(ngModel)]=\"adjustment\">\r\n                  <div class=\"ui basic label\">\r\n                    $\r\n                  </div>\r\n                </div>\r\n              </th>\r\n            </tr>\r\n            <tr>\r\n              <th></th>\r\n              <th></th>\r\n              <th class=\"right aligned\">\r\n                <h4 class=\"ui teal header\">Tổng Cộng</h4>\r\n              </th>\r\n              <th class=\"right aligned\">\r\n                <h4 class=\"ui teal header\" *ngIf=\"total\">{{ (total - discount -- adjustment) | number}} VNĐ</h4>\r\n              </th>\r\n            </tr>\r\n          </tfoot>\r\n        </table>\r\n  </modal-content>\r\n  <modal-actions>\r\n    <button class=\"ui blue button\" *ngIf=\"editting=='no'\" (click)=\"close()\">Xác Nhận</button>\r\n    <button class=\"ui blue button\" *ngIf=\"editting=='yes'\" (click)=\"hide()\">Đóng</button>\r\n  </modal-actions>\r\n</sm-modal>"

/***/ }),

/***/ 536:
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" [class.occupied]=\"room.isOccupied\" [class.dirty]=\"room.status==2\">\r\n  <div class=\"ui huge header aligned center\">\r\n    Phòng: {{ room.name }}\r\n  </div>\r\n  <div class=\"ui violet header meta\">\r\n    Loại Phòng: {{ room.type == 1 ? 'Phòng Đơn' : 'Phòng Đôi' }} <img class=\"right floated mini ui image\" src=\"assets/images/{{room.imgUrl}}\">\r\n  </div>\r\n  <div class=\"ui blue header\">\r\n    Tình Trạng: <span class=\"ui basic green label right floated\" [class.green]=\"!room.isOccupied\" [class.red]=\"room.isOccupied\"> {{ room.isOccupied ? 'Có Khách' : 'Trống' }}</span>\r\n  </div>\r\n  <div class=\"ui pink header\">\r\n    Tình trạng vệ sinh: <span class=\"ui basic green label right floated\" [class.blue]=\"room.status==2\"> {{ room.status == 1 ? 'Sạch' : 'Dơ' }}</span>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"!room.isOccupied && room.status == 1\" class=\"ui bottom attached button blue\" (click)=\"showCustomerSearchModal();setSelected(room)\">\r\n  <i class=\"add icon\"></i> Nhận Phòng\r\n</div>\r\n<div *ngIf=\"room.isOccupied\" class=\"ui two bottom attached buttons\">\r\n  <button class=\"ui button green\" (click)=\"servicePopup.show($event, {position: 'bottom center'})\">Menu Phụ</button>\r\n  <div class=\"ui red button\" (click)=\"checkOut(room)\">Trả Phòng</div>\r\n</div>\r\n<div *ngIf=\"!room.isOccupied && room.status==2\" class=\"ui bottom attached button orange\" (click)=\"clean(room)\">\r\n  <i class=\"paint brush icon\"></i> Phòng Đã Dọn\r\n</div>\r\n<app-customer-search-form [roomId]=\"room.$key\" #searchForm></app-customer-search-form>\r\n\r\n<sm-popup #customerPopup>\r\n  <div class=\"ui icon buttons\">\r\n    <button class=\"ui basic button orange\">View</button>\r\n    <button class=\"ui basic button teal\">Edit</button>\r\n  </div>\r\n</sm-popup>\r\n\r\n<sm-popup #servicePopup>\r\n  <div class=\"ui icon buttons\">\r\n    <button class=\"ui button orange\" (click)=\"moveRoomModal.show()\">Chuyển Phòng</button>\r\n    <button class=\"ui button green\" [routerLink]=\"['/orders',room.orderId,'yes']\" skipLocationChange>Xem Hóa Đơn Tạm Thời</button>\r\n    <button class=\"ui button blue\" [routerLink]=\"['/hotel-services',room.orderId]\" skipLocationChange>Thêm Dịch Vụ</button>\r\n    <button class=\"ui button violet\" (click)=\"markAsDirtyOrClean(room)\">{{ room.status == 1 ? 'Báo Phòng Dơ' : 'Báo Phòng Sạch'}}</button>\r\n  </div>\r\n</sm-popup>\r\n\r\n<sm-modal title=\"Thêm Dịch Vụ\" icon=\"user circle outline\" #moveRoomModal>\r\n    <modal-content>  \r\n    <div class=\"ui label\">Chọn Phòng Muốn Chuyển:</div>\r\n    <select [(ngModel)]=\"moveRoom\" class=\"ui fluid search selection dropdown\">\r\n      <option *ngFor=\"let room of rooms\" [ngValue]=\"room\">{{ room.name }}</option>\r\n    </select>\r\n    </modal-content>\r\n    <modal-actions>\r\n      <button class=\"ui blue button\" (click)=\"move()\">Chuyển Phòng</button>\r\n    </modal-actions>\r\n  </sm-modal>\r\n"

/***/ }),

/***/ 537:
/***/ (function(module, exports) {

module.exports = "<app-room-card *ngFor=\"let room of rooms | async\" [room]=\"room\"></app-room-card>\n"

/***/ }),

/***/ 538:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui fixed inverted menu\">\n  <div class=\"ui container\">\n    <a href=\"#\" class=\"header item\">\n      Quản Lý Khách Sạn Hoàng Long\n    </a>\n    <ng-container *ngFor=\"let menuItem of menu\">\n    <a *ngIf=\"!menuItem.subMenu\" [routerLink]=\"menuItem.url\" class=\"item\">{{ menuItem.name }}</a>\n    <div *ngIf=\"menuItem.subMenu\" [routerLink]=\"menuItem.url\" class=\"ui simple dropdown item\">\n      {{ menuItem.name }} <i class=\"dropdown icon\"></i>\n      <div class=\"menu\">\n        <a *ngFor=\"let subItem of menuItem.subMenu\" class=\"item\" [routerLink]=\"[subItem.url]\">{{ subItem.name }}</a>\n      </div>\n    </div>\n    </ng-container>\n  </div>\n</div>"

/***/ }),

/***/ 539:
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ 540:
/***/ (function(module, exports) {

module.exports = "\n<h1 class=\"ui center aligned\"> Báo Cáo Theo Ngày</h1>\nTừ Ngày: <ng2-datepicker [options]=\"options\" [(ngModel)]=\"fromDate\"></ng2-datepicker>\nĐến Ngày: <ng2-datepicker [options]=\"options\" [(ngModel)]=\"toDate\"></ng2-datepicker>\n<div class=\"ui button green\" (click)=\"setDate()\">Xem</div> \n<app-report-table *ngIf=\"filterList.length > 0\" [orders]=\"filterList\" [reservations]=\"reservationList\" [reservationTotal]=\"total\"></app-report-table>\n\n"

/***/ }),

/***/ 541:
/***/ (function(module, exports) {

module.exports = "<h1 class=\"ui center aligned\"> Báo Cáo Theo Tháng</h1>\nBáo Cáo Tháng:\n<ng2-datepicker [options]=\"options\" [(ngModel)]=\"fromDate\"></ng2-datepicker>\n<div class=\"ui button green\" (click)=\"setDate()\">Xem</div>\n<p></p>\n<!-- <ng-container *ngFor = \"let list of filterList\">\n  <app-report-table *ngFor=\"let orders of list\"  [orders]=\"orders\"></app-report-table>\n</ng-container> -->\n\n<!-- <div class=\"ui message info\" *ngFor=\"let item of filterList\">{{ item | json }}</div>\n<ul *ngFor = \"let detailList of filterList\">\n  <li *ngFor = \"let item of detailList\">{{ item | json }}</li>\n</ul> -->\n<div class=\"ui two top attached buttons\" *ngIf=\"choosen\">\n  <div class=\"ui button orange\" (click)=\"details = false\">Tổng Hợp</div>\n  <div class=\"ui button purple\" (click)=\"details = true\">Chi Tiếp</div>\n</div>\n<div class=\"ui attached segment\" *ngIf=\"choosen\">\n  <ng-container *ngIf=\"details\">\n    <div class=\"statistic ui blue\">\n      <div class=\"value\">\n        {{ totalAll | number }}\n      </div>\n      <div class=\"label\">\n      Tổng Tiền Tháng\n      </div>\n    </div>\n    <table class=\"ui celled striped table\" *ngFor=\"let orders of filterList; let j = index\">\n      <thead>\n        <tr>\n          <th>Ngày</th>\n          <th class=\"right aligned\">Tổng Thu Dịch Vụ</th>\n          <th class=\"right aligned\">Tổng Giảm Giá</th>\n          <th class=\"right aligned\">Tổng Điều Chỉnh</th>\n          <th class=\"right aligned\">Tổng Cộng Trong Ngày</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let order of orders;let i = index;\">\n          <td>{{ order.date }}</td>\n          <td class=\"right aligned\">{{ order.service | number }}</td>\n          <td class=\"right aligned\">{{ order.discount | number }}</td>\n          <td class=\"right aligned\">{{ order.adjustment | number }}</td>\n          <td class=\"right aligned\">{{ order.total | number }}</td>\n        </tr>\n      </tbody>\n      <tfoot>\n        <th></th>\n        <th></th>\n        <th class=\"right aligned\"></th>\n        <th class=\"right aligned ui red header\">Tổng Cộng</th>\n        <th class=\"right aligned ui red header\">{{ total[j] | number}}</th>\n      </tfoot>\n    </table>\n  </ng-container>\n  <ng-container *ngIf=\"!details\">\n    <div class=\"statistic ui blue\">\n      <div class=\"value\">\n        {{ totalAll | number }}\n      </div>\n      <div class=\"label\">\n      Tổng Tiền Tháng\n      </div>\n    </div>\n    <table class=\"ui celled striped table\" *ngFor=\"let order of reportList; let j = index\">\n      <thead>\n        <tr>\n          <th>Ngày</th>\n          <th class=\"right aligned\">Tổng Thu Dịch Vụ</th>\n          <th class=\"right aligned\">Tổng Giảm Giá</th>\n          <th class=\"right aligned\">Tổng Điều Chỉnh</th>\n          <th class=\"right aligned\">Tổng Cộng Trong Ngày</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>{{ order.date }}</td>\n          <td class=\"right aligned\">{{ order.service | number }}</td>\n          <td class=\"right aligned\">{{ order.discount | number }}</td>\n          <td class=\"right aligned\">{{ order.adjustment | number }}</td>\n          <td class=\"right aligned\">{{ order.total | number }}</td>\n        </tr>\n      </tbody>\n      <tfoot>\n        <th></th>\n        <th></th>\n        <th class=\"right aligned\"></th>\n        <th class=\"right aligned ui red header\">Tổng Cộng</th>\n        <th class=\"right aligned ui red header\">{{ total[j] | number}}</th>\n      </tfoot>\n    </table>\n  </ng-container>\n</div>"

/***/ }),

/***/ 542:
/***/ (function(module, exports) {

module.exports = "<p>\n  periodical-report works!\n</p>\n"

/***/ }),

/***/ 543:
/***/ (function(module, exports) {

module.exports = "<!-- <h1 class=\"ui center aligned\"> Báo Cáo Thu Theo Ngày</h1> -->\r\n<!-- Từ Ngày: <ng2-datepicker [options]=\"options\" [(ngModel)]=\"fromDate\"></ng2-datepicker>\r\nĐến Ngày: <ng2-datepicker [options]=\"options\" [(ngModel)]=\"toDate\"></ng2-datepicker>\r\n<div class=\"ui button green\" (click)=\"setDate()\">Xem</div>\r\n\r\n<h2 class=\"ui header\"> Báo cáo thu từ ngày {{ fromDate?.formatted }} tới {{ toDate?.formatted }}</h2> -->\r\n<div class=\"ui statistics floated right\" >\r\n  <div class=\"statistic ui blue\">\r\n    <div class=\"value\">\r\n      {{ total | number }}\r\n    </div>\r\n    <div class=\"label\">\r\n      Tổng Tiền Phòng\r\n    </div>\r\n  </div>\r\n  <div class=\"statistic ui red\">\r\n    <div class=\"value\">\r\n      {{ reservationTotal | number}}\r\n    </div>\r\n    <div class=\"label\">\r\n      Tổng Thu/Chi\r\n    </div>\r\n  </div>\r\n  <div class=\"statistic ui teal\">\r\n    <div class=\"value\">\r\n      {{ total -- reservationTotal | number}}\r\n    </div>\r\n    <div class=\"label\">\r\n      Tổng Tiền Mặt Hiện Có\r\n    </div>\r\n  </div>\r\n</div>\r\n<table class=\"ui green celled striped table\">\r\n  <thead>\r\n    <tr>\r\n      <th>Phòng</th>\r\n      <th>Khoản Thu</th>\r\n      <th class=\"right aligned\">Giảm Giá</th>\r\n      <th class=\"right aligned\">Điều Chỉnh</th>\r\n      <th class=\"right aligned\">Tổng Cộng</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let order of orders;let i = index;\">\r\n      <td>{{ order.roomId }}</td>\r\n      <td class=\"collapsing\">\r\n        <div class=\"ui list\">\r\n          <div class=\"item\" *ngFor=\"let service of order.services\">\r\n            <div class=\"header\">{{ service?.description }}</div>\r\n            Giá: {{ service?.price | number }}- Số Lượng: {{ service?.quantity | number }} {{ service?.unit }}\r\n          </div>\r\n        </div>\r\n      </td>\r\n\r\n      <td class=\"right aligned\">{{ order.discount | number }}</td>\r\n      <td class=\"right aligned\">{{ order.adjustment | number }}</td>\r\n      <td class=\"right aligned\">{{ order.total | number }}</td>\r\n    </tr>\r\n  </tbody>\r\n  <tfoot>\r\n    <th></th>\r\n    <th></th>\r\n    <th class=\"right aligned\"></th>\r\n    <th class=\"right aligned ui red header\">Tổng Cộng</th>\r\n    <th class=\"right aligned ui red header\">{{ total | number}}</th>\r\n  </tfoot>\r\n</table>\r\n\r\n<table class=\"ui olive table\" *ngIf=\"reservations.length > 0\">\r\n  <thead>\r\n    <tr>\r\n      <th>Tên Khoản Thu/Chi</th>\r\n      <th class=\"right aligned\">Số Tiền</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let reservation of reservations\">\r\n      <td>{{ reservation.description }}</td>\r\n      <td class=\"right aligned\">{{ reservation.amount | number }}<i class=\"ui red window close icon\" (click)=\"remove(reservation.$key)\"></i></td>\r\n    </tr>\r\n  </tbody>\r\n  <tfoot>\r\n    <tr>\r\n      <td class=\"right aligned ui red header\">Tổng Cộng</td>\r\n      <td class=\"right aligned ui red header\">{{ reservationTotal | number }}</td>\r\n    </tr>\r\n  </tfoot>\r\n</table>"

/***/ }),

/***/ 544:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui main container\">\n  <div class=\"ui secondary pointing menu\">\n    <a [routerLink]=\"['daily-report']\" [routerLinkActive]=\"['active']\" class=\"item\">\n    Báo Cáo Ngày\n  </a>\n    <a class=\"item\" [routerLink]=\"['monthly-report']\" [routerLinkActive]=\"['active']\">\n    Báo Cáo Tháng\n  </a>\n  </div>\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ 545:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui main container\">\r\n  <form class=\"ui form\">\r\n  <div class=\"field\">\r\n    <label>Tên Khoản Thu/Chi</label>\r\n    <input type=\"text\" name=\"first-name\" placeholder=\"Khoản thu/chi\" [(ngModel)]=\"description\">\r\n  </div>\r\n  <div class=\"field\">\r\n    <label>Số Tiền</label>\r\n    <input type=\"number\" name=\"last-name\" placeholder=\"Số Tiền\" [(ngModel)]=\"amount\">\r\n  </div>  \r\n</form>\r\n<button class=\"ui button red\" [disabled]=\"description==='' || amount === 0.0\" (click)=\"save();\">Lưu</button>\r\n</div>\r\n<!-- <div class=\"ui info message\">RESERVATION: {{ reservations | json}}</div> -->\r\n\r\n<!-- <div class=\"ui tiny modal\">\r\n  <div class=\"header\">Header</div>\r\n  <div class=\"content\">\r\n    <p></p>\r\n  </div>\r\n  <div class=\"actions\">\r\n    <div class=\"ui approve button\">Approve</div>\r\n    <div class=\"ui button\">Neutral</div>\r\n    <div class=\"ui cancel button\">Cancel</div>\r\n  </div>\r\n</div> -->"

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReservationService = (function () {
    function ReservationService(db) {
        this.db = db;
        this.reservations = db.list('reservations');
    }
    ReservationService.prototype.getReservationsByDate = function (date) {
        return this.db.list('reservations', {
            query: {
                orderByChild: 'date',
                equalTo: date,
            },
        });
    };
    ReservationService.prototype.addReservation = function (data) {
        this.reservations.push(data);
        // (<any>$('.tiny.modal')).modal('show');
    };
    ReservationService.prototype.deleteResevation = function (key) {
        this.reservations.remove(key);
    };
    ReservationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
    ], ReservationService);
    return ReservationService;
    var _a;
}());

//# sourceMappingURL=reservation.service.js.map

/***/ }),

/***/ 812:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(378);


/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SERVICES; });
var Service = (function () {
    function Service(obj) {
        this.description = obj && obj.description || '';
        this.price = obj && obj.price || 0.0;
        this.unit = obj && obj.unit || '';
        this.quantity = obj && obj.quantity || 0.0;
    }
    return Service;
}());

var SERVICES = [
    new Service({
        description: "N\u01B0\u1EDBc su\u1ED1i",
        price: 10000,
        unit: "chai",
        quantity: 1
    }),
    new Service({
        description: "N\u01B0\u1EDBc Ng\u1ECDt",
        price: 15000,
        unit: "lon",
        quantity: 1
    }),
    new Service({
        description: "Tiger Beer",
        price: 17000,
        unit: "can",
        quantity: 1
    }),
    new Service({
        description: "Heineken Beer",
        price: 20000,
        unit: "can",
        quantity: 1
    }),
    new Service({
        description: "Gi\u1EB7t \u1EE7i th\u01B0\u1EDDng",
        price: 30000,
        unit: "set",
        quantity: 1
    }),
    new Service({
        description: "Gi\u1EB7t \u1EE7i \u0111\u1EB7c bi\u1EC7t",
        price: 80000,
        unit: "suit",
        quantity: 1
    }),
    new Service({
        description: "Ph\u1EE5 thu",
        price: 0,
        unit: "VN\u0110",
        quantity: 1
    }),
    new Service({
        description: "\u0110\u1EB7t C\u1ECDc",
        price: 0,
        unit: "VN\u0110",
        quantity: 1
    }),
    new Service({
        description: "Kh\u00E1c",
        price: 0,
        unit: "VN\u0110",
        quantity: 1
    })
];
//# sourceMappingURL=service.model.js.map

/***/ })

},[812]);
//# sourceMappingURL=main.bundle.js.map