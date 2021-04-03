(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/stevegillis/IdeaProjects/birddog/src/main/birddog-ui/src/main.ts */"zUnb");


/***/ }),

/***/ "3Gmg":
/*!****************************************************************!*\
  !*** ./src/app/modules/app-state/customer/customer.service.ts ***!
  \****************************************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var _datorama_akita_ng_entity_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita-ng-entity-service */ "d5yd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _customer_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer.store */ "svFg");



class CustomerService extends _datorama_akita_ng_entity_service__WEBPACK_IMPORTED_MODULE_0__["NgEntityService"] {
    constructor(store) {
        super(store);
        this.store = store;
    }
}
CustomerService.ɵfac = function CustomerService_Factory(t) { return new (t || CustomerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_customer_store__WEBPACK_IMPORTED_MODULE_2__["CustomerStore"])); };
CustomerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CustomerService, factory: CustomerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "65Kj":
/*!********************************************************************!*\
  !*** ./src/app/modules/app-state/scan-domain/scan-domain.store.ts ***!
  \********************************************************************/
/*! exports provided: ScanDomainStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanDomainStore", function() { return ScanDomainStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @datorama/akita */ "4ZtF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _scan_host_scan_host_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scan-host/scan-host.store */ "veH9");




let ScanDomainStore = class ScanDomainStore extends _datorama_akita__WEBPACK_IMPORTED_MODULE_1__["EntityStore"] {
    constructor(scanHostStore) {
        super();
        this.scanHostStore = scanHostStore;
    }
    /**
     * Clear the store
     */
    clear() {
        this.remove();
        this.scanHostStore.clear();
    }
};
ScanDomainStore.ɵfac = function ScanDomainStore_Factory(t) { return new (t || ScanDomainStore)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_scan_host_scan_host_store__WEBPACK_IMPORTED_MODULE_3__["ScanHostStore"])); };
ScanDomainStore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ScanDomainStore, factory: ScanDomainStore.ɵfac, providedIn: 'root' });
ScanDomainStore = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["StoreConfig"])({ name: 'ScanDomain' })
], ScanDomainStore);



/***/ }),

/***/ "6ZYd":
/*!*********************************************!*\
  !*** ./src/app/modules/core/core.module.ts ***!
  \*********************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pages_birddog_customer_birddog_customer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/birddog-customer/birddog-customer.component */ "pCpI");
/* harmony import */ var _home_birddog_home_birddog_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/birddog-home/birddog-home.component */ "St8A");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clr/angular */ "8MG2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_birddog_scan_live_birddog_scan_live_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/birddog-scan-live/birddog-scan-live.component */ "Qcb9");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_scan_jobs_scan_jobs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/scan-jobs/scan-jobs.component */ "7tiv");
/* harmony import */ var _components_scan_domains_scan_domains_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/scan-domains/scan-domains.component */ "Zx5B");
/* harmony import */ var _components_scan_hosts_scan_hosts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/scan-hosts/scan-hosts.component */ "icp9");
/* harmony import */ var _components_customers_customers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/customers/customers.component */ "B8pv");
/* harmony import */ var _pages_birddog_scan_jobs_birddog_scan_jobs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/birddog-scan-jobs/birddog-scan-jobs.component */ "rDux");
/* harmony import */ var _pages_birddog_scan_domains_birddog_scan_domains_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/birddog-scan-domains/birddog-scan-domains.component */ "MGHH");
/* harmony import */ var _pages_birddog_scan_hosts_birddog_scan_hosts_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/birddog-scan-hosts/birddog-scan-hosts.component */ "cc5f");
/* harmony import */ var _components_scan_host_ports_scan_host_ports_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/scan-host-ports/scan-host-ports.component */ "UJR9");
/* harmony import */ var _pages_birddog_scan_host_ports_birddog_scan_host_ports_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/birddog-scan-host-ports/birddog-scan-host-ports.component */ "MNXn");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @swimlane/ngx-charts */ "zQsl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "fXoL");


















class CoreModule {
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_16__["NgxChartsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_pages_birddog_customer_birddog_customer_component__WEBPACK_IMPORTED_MODULE_1__["BirddogCustomerComponent"], _home_birddog_home_birddog_home_component__WEBPACK_IMPORTED_MODULE_2__["BirddogHomeComponent"], _pages_birddog_scan_live_birddog_scan_live_component__WEBPACK_IMPORTED_MODULE_5__["BirddogScanLiveComponent"], _components_scan_jobs_scan_jobs_component__WEBPACK_IMPORTED_MODULE_7__["ScanJobsComponent"], _components_scan_domains_scan_domains_component__WEBPACK_IMPORTED_MODULE_8__["ScanDomainsComponent"], _components_scan_hosts_scan_hosts_component__WEBPACK_IMPORTED_MODULE_9__["ScanHostsComponent"], _components_customers_customers_component__WEBPACK_IMPORTED_MODULE_10__["CustomersComponent"], _pages_birddog_scan_jobs_birddog_scan_jobs_component__WEBPACK_IMPORTED_MODULE_11__["BirddogScanJobsComponent"], _pages_birddog_scan_domains_birddog_scan_domains_component__WEBPACK_IMPORTED_MODULE_12__["BirddogScanDomainsComponent"], _pages_birddog_scan_hosts_birddog_scan_hosts_component__WEBPACK_IMPORTED_MODULE_13__["BirddogScanHostsComponent"], _components_scan_host_ports_scan_host_ports_component__WEBPACK_IMPORTED_MODULE_14__["ScanHostPortsComponent"], _pages_birddog_scan_host_ports_birddog_scan_host_ports_component__WEBPACK_IMPORTED_MODULE_15__["BirddogScanHostPortsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_16__["NgxChartsModule"]] }); })();


/***/ }),

/***/ "7tiv":
/*!**************************************************************************!*\
  !*** ./src/app/modules/core/components/scan-jobs/scan-jobs.component.ts ***!
  \**************************************************************************/
/*! exports provided: ScanJobsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanJobsComponent", function() { return ScanJobsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_state_scan_job_scan_job_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app-state/scan-job/scan-job.query */ "JyTd");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @clr/angular */ "8MG2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ScanJobsComponent_clr_dg_row_11_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-dg-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScanJobsComponent_clr_dg_row_11_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const entity_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.selectScanJob(entity_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entity_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entity_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, entity_r1.created));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entity_r1.jobStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 7, entity_r1.scanStarted));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 9, entity_r1.scanCompleted));
} }
class ScanJobsComponent {
    constructor(query) {
        this.query = query;
        /**
         * Trigger when a customer is selected
         */
        this.onScanJobSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this.entities = [];
        query.selectAll().subscribe(results => {
            this.entities = results;
        });
    }
    /**
     * Select a customer and navigate to the scan jobs page
     * @param customer
     */
    selectScanJob(scanJob) {
        //set the active customer
        this.query.setActive(scanJob);
        //let who ever holds this component that a customer was selected
        this.onScanJobSelected.emit(scanJob);
    }
}
ScanJobsComponent.ɵfac = function ScanJobsComponent_Factory(t) { return new (t || ScanJobsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_state_scan_job_scan_job_query__WEBPACK_IMPORTED_MODULE_1__["ScanJobQuery"])); };
ScanJobsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScanJobsComponent, selectors: [["app-scan-jobs"]], outputs: { onScanJobSelected: "onScanJobSelected" }, decls: 12, vars: 1, consts: [[4, "clrDgItems", "clrDgItemsOf"], [1, "btn", "btn-link", 3, "click"]], template: function ScanJobsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-datagrid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "clr-dg-column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "clr-dg-column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Created");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "clr-dg-column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "clr-dg-column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "clr-dg-column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ScanJobsComponent_clr_dg_row_11_Template, 15, 11, "clr-dg-row", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgItemsOf", ctx.entities);
    } }, directives: [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagrid"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridMainRenderer"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridWillyWonka"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrActionableOompaLoompa"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrExpandableOompaLoompa"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagridColumn"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridHeaderRenderer"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagridItems"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagridRow"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridRowRenderer"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagridCell"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridCellRenderer"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzY2FuLWpvYnMuY29tcG9uZW50LnNjc3MifQ== */"] });


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

/***/ "B8pv":
/*!**************************************************************************!*\
  !*** ./src/app/modules/core/components/customers/customers.component.ts ***!
  \**************************************************************************/
/*! exports provided: CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_state_customer_customer_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app-state/customer/customer.query */ "f+eC");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @clr/angular */ "8MG2");




function CustomersComponent_clr_dg_row_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-dg-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomersComponent_clr_dg_row_4_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const entity_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.selectCustomer(entity_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entity_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entity_r1.name);
} }
class CustomersComponent {
    constructor(query) {
        this.query = query;
        /**
         * Trigger when a customer is selected
         */
        this.onCustomerSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this.entities = [];
        query.selectAll().subscribe(result => {
            this.entities = result;
        });
    }
    /**
     * Select a customer and navigate to the scan jobs page
     * @param customer
     */
    selectCustomer(customer) {
        //set the active customer
        this.query.setActive(customer);
        //let who ever holds this component that a customer was selected
        this.onCustomerSelected.emit(customer);
    }
}
CustomersComponent.ɵfac = function CustomersComponent_Factory(t) { return new (t || CustomersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_state_customer_customer_query__WEBPACK_IMPORTED_MODULE_1__["CustomerQuery"])); };
CustomersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomersComponent, selectors: [["app-customers"]], outputs: { onCustomerSelected: "onCustomerSelected" }, decls: 5, vars: 2, consts: [[3, "clrDgField"], [4, "clrDgItems", "clrDgItemsOf"], [1, "btn", "btn-link", 3, "click"]], template: function CustomersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Customers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "clr-datagrid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "clr-dg-column", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CustomersComponent_clr_dg_row_4_Template, 4, 1, "clr-dg-row", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgItemsOf", ctx.entities);
    } }, directives: [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagrid"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridMainRenderer"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridWillyWonka"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrActionableOompaLoompa"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrExpandableOompaLoompa"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagridColumn"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridHeaderRenderer"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagridItems"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagridRow"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridRowRenderer"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagridCell"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridCellRenderer"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21lcnMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "FqhW":
/*!**********************************************************************!*\
  !*** ./src/app/modules/app-state/scan-domain/scan-domain.service.ts ***!
  \**********************************************************************/
/*! exports provided: ScanDomainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanDomainService", function() { return ScanDomainService; });
/* harmony import */ var _datorama_akita_ng_entity_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita-ng-entity-service */ "d5yd");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _scan_domain_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scan-domain.store */ "65Kj");
/* harmony import */ var _scan_host_scan_host_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scan-host/scan-host.store */ "veH9");





class ScanDomainService extends _datorama_akita_ng_entity_service__WEBPACK_IMPORTED_MODULE_0__["NgEntityService"] {
    constructor(store, scanHostStore) {
        super(store);
        this.store = store;
        this.scanHostStore = scanHostStore;
    }
    /***
     * Populate the ScanJob store for the customerId passed in, this makes us able to query the store from anywhere in the app
     * @param customerId
     */
    populateByScanJob(scanJobId) {
        //indicate we are loading
        this.store.setLoading(true);
        //remove the items from the store
        this.store.clear();
        //populate the store and return the results to be nice
        return this.getHttp().get('api/entities/ScanDomain/' + scanJobId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(entities => {
            this.store.add(entities);
            this.store.setLoading(false);
        }));
    }
}
ScanDomainService.ɵfac = function ScanDomainService_Factory(t) { return new (t || ScanDomainService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_scan_domain_store__WEBPACK_IMPORTED_MODULE_3__["ScanDomainStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_scan_host_scan_host_store__WEBPACK_IMPORTED_MODULE_4__["ScanHostStore"])); };
ScanDomainService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ScanDomainService, factory: ScanDomainService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "JyTd":
/*!**************************************************************!*\
  !*** ./src/app/modules/app-state/scan-job/scan-job.query.ts ***!
  \**************************************************************/
/*! exports provided: ScanJobQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanJobQuery", function() { return ScanJobQuery; });
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita */ "4ZtF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _scan_job_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scan-job.store */ "jtIh");
/* harmony import */ var _scan_domain_scan_domain_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scan-domain/scan-domain.service */ "FqhW");




class ScanJobQuery extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__["QueryEntity"] {
    constructor(store, scanDomainService) {
        super(store);
        this.store = store;
        this.scanDomainService = scanDomainService;
    }
    /***
     * Set the active scan job
     * @param scanJob
     */
    setActive(scanJob) {
        this.store.setActive(scanJob.id);
        //populate the jobs for the selected customer
        this.scanDomainService.populateByScanJob(scanJob.id).subscribe(response => {
            console.log("scan domain store set to scan job = " + scanJob.id);
        });
    }
}
ScanJobQuery.ɵfac = function ScanJobQuery_Factory(t) { return new (t || ScanJobQuery)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_scan_job_store__WEBPACK_IMPORTED_MODULE_2__["ScanJobStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_scan_domain_scan_domain_service__WEBPACK_IMPORTED_MODULE_3__["ScanDomainService"])); };
ScanJobQuery.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ScanJobQuery, factory: ScanJobQuery.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "MGHH":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/core/pages/birddog-scan-domains/birddog-scan-domains.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: BirddogScanDomainsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirddogScanDomainsComponent", function() { return BirddogScanDomainsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_state_scan_job_scan_job_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app-state/scan-job/scan-job.query */ "JyTd");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clr/angular */ "8MG2");
/* harmony import */ var _components_scan_domains_scan_domains_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/scan-domains/scan-domains.component */ "Zx5B");






function BirddogScanDomainsComponent_clr_tab_content_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-tab-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-scan-domains", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onScanDomainSelected", function BirddogScanDomainsComponent_clr_tab_content_5_Template_app_scan_domains_onScanDomainSelected_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onScanDomainSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BirddogScanDomainsComponent_clr_tab_content_9_clr_dg_row_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-dg-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entity_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entity_r6.ipAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entity_r6.port.portid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entity_r6.protocol);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entity_r6.port.service.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entity_r6.port.service.product);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entity_r6.port.service.cpe);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entity_r6.port.service.method);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entity_r6.port.service.ostype);
} }
const _c0 = function () { return [10, 20, 50, 100]; };
function BirddogScanDomainsComponent_clr_tab_content_9_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-tab-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BirddogScanDomainsComponent_clr_tab_content_9_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.refresh(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "NMAPPER");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "clr-datagrid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "clr-dg-column", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "IP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "clr-dg-column", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Port");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "clr-dg-column", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Protocol");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "clr-dg-column", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "clr-dg-column", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "clr-dg-column", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "CPE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "clr-dg-column", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Method");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "clr-dg-column", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "OS Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, BirddogScanDomainsComponent_clr_tab_content_9_clr_dg_row_20_Template, 18, 8, "clr-dg-row", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "clr-dg-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "clr-dg-pagination", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "clr-dg-page-size", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Ports");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "ipAddress");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "port.portid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "protocol");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "port.service.name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "port.service.product");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "port.service.cpe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "port.service.method");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "port.service.ostype");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgItemsOf", ctx_r1.entities);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgPageSize", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrPageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _r5.firstItem + 1, " - ", _r5.lastItem + 1, " of ", _r5.totalItems, " users ");
} }
class BirddogScanDomainsComponent {
    constructor(router, http, query) {
        this.router = router;
        this.http = http;
        this.query = query;
        this.entities = [];
    }
    onKeydownHandler(event) {
        this.router.navigateByUrl("jobs");
    }
    onScanDomainSelected() {
        this.router.navigateByUrl('hosts');
    }
    refresh() {
        if (this.query.hasActive()) {
            this.http.get('api/scan/nmap/' + this.query.getActiveId()).subscribe(result => {
                this.entities = result;
            });
        }
    }
}
BirddogScanDomainsComponent.ɵfac = function BirddogScanDomainsComponent_Factory(t) { return new (t || BirddogScanDomainsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_state_scan_job_scan_job_query__WEBPACK_IMPORTED_MODULE_3__["ScanJobQuery"])); };
BirddogScanDomainsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BirddogScanDomainsComponent, selectors: [["app-birddog-scan-domains"]], hostBindings: function BirddogScanDomainsComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.escape", function BirddogScanDomainsComponent_keydown_escape_HostBindingHandler($event) { return ctx.onKeydownHandler($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, decls: 10, vars: 1, consts: [["clrTabLink", ""], [4, "clrIfActive"], [3, "onScanDomainSelected"], [1, "btn", "btn-primary", 3, "click"], [3, "clrDgField"], [4, "clrDgItems", "clrDgItemsOf"], [3, "clrDgPageSize"], ["pagination", ""], [3, "clrPageSizeOptions"], [1, "btn", "btn-link"]], template: function BirddogScanDomainsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "SCAN DOMAINS\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "clr-tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "clr-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Domains");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BirddogScanDomainsComponent_clr_tab_content_5_Template, 2, 0, "clr-tab-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "clr-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "NMAPPER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BirddogScanDomainsComponent_clr_tab_content_9_Template, 27, 15, "clr-tab-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrIfActive", true);
    } }, directives: [_clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrTabs"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ÇlrTabsWillyWonka"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrTab"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrTabLink"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ÇlrActiveOompaLoompa"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrIfActive"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrTabContent"], _components_scan_domains_scan_domains_component__WEBPACK_IMPORTED_MODULE_5__["ScanDomainsComponent"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrDatagrid"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ÇlrDatagridMainRenderer"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ÇlrDatagridWillyWonka"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ÇlrActionableOompaLoompa"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ÇlrExpandableOompaLoompa"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrDatagridColumn"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ÇlrDatagridHeaderRenderer"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrDatagridItems"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrDatagridFooter"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrDatagridPagination"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrDatagridPageSize"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrDatagridRow"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ÇlrDatagridRowRenderer"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrDatagridCell"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ÇlrDatagridCellRenderer"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiaXJkZG9nLXNjYW4tZG9tYWlucy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "MNXn":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/core/pages/birddog-scan-host-ports/birddog-scan-host-ports.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: BirddogScanHostPortsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirddogScanHostPortsComponent", function() { return BirddogScanHostPortsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_state_scan_host_scan_host_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app-state/scan-host/scan-host.query */ "y8zp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_scan_host_ports_scan_host_ports_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/scan-host-ports/scan-host-ports.component */ "UJR9");





function BirddogScanHostPortsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.scanHost.ipAddress, "\n");
} }
class BirddogScanHostPortsComponent {
    constructor(router, scanHostQuery) {
        this.router = router;
        this.scanHostQuery = scanHostQuery;
        this.scanHost = null;
        if (scanHostQuery.hasActive()) {
            this.scanHost = this.scanHostQuery.getActive();
        }
    }
    onKeydownHandler(event) {
        this.router.navigateByUrl("hosts");
    }
    ngOnInit() {
    }
}
BirddogScanHostPortsComponent.ɵfac = function BirddogScanHostPortsComponent_Factory(t) { return new (t || BirddogScanHostPortsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_state_scan_host_scan_host_query__WEBPACK_IMPORTED_MODULE_2__["ScanHostQuery"])); };
BirddogScanHostPortsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BirddogScanHostPortsComponent, selectors: [["app-birddog-scan-host-ports"]], hostBindings: function BirddogScanHostPortsComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.escape", function BirddogScanHostPortsComponent_keydown_escape_HostBindingHandler($event) { return ctx.onKeydownHandler($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, decls: 3, vars: 1, consts: [[4, "ngIf"]], template: function BirddogScanHostPortsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "SCAN HOST PORTS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BirddogScanHostPortsComponent_div_1_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-scan-host-ports");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.scanHost);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _components_scan_host_ports_scan_host_ports_component__WEBPACK_IMPORTED_MODULE_4__["ScanHostPortsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiaXJkZG9nLXNjYW4taG9zdC1wb3J0cy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "Qcb9":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/core/pages/birddog-scan-live/birddog-scan-live.component.ts ***!
  \*************************************************************************************/
/*! exports provided: BirddogScanLiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirddogScanLiveComponent", function() { return BirddogScanLiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_birddog_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/birddog-message.service */ "xEFK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clr/angular */ "8MG2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function BirddogScanLiveComponent_clr_dg_row_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-dg-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const msg_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, msg_r1.statusDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](msg_r1.server);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](msg_r1.scanType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](msg_r1.scanMessage);
} }
class BirddogScanLiveComponent {
    /***
     *
     * @param http
     */
    constructor(http, ms) {
        this.http = http;
        this.ms = ms;
        this.input = "";
        this.messages = [];
        this.ms.messages.subscribe(msg => {
            this.messages.push(msg);
        });
    }
    /***
     *
     */
    executeScan() {
        console.log(this.input);
        this.http.post("/api/scan/", this.input).subscribe(result => {
            console.log(result);
        });
    }
}
BirddogScanLiveComponent.ɵfac = function BirddogScanLiveComponent_Factory(t) { return new (t || BirddogScanLiveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_birddog_message_service__WEBPACK_IMPORTED_MODULE_2__["BirddogMessageService"])); };
BirddogScanLiveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BirddogScanLiveComponent, selectors: [["app-birddog-scan-live"]], decls: 15, vars: 3, consts: [["clrInput", "", "placeholder", "My input", "name", "input", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary", 3, "click"], [4, "ngFor", "ngForOf"]], template: function BirddogScanLiveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BirddogScanLiveComponent_Template_input_ngModelChange_0_listener($event) { return ctx.input = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BirddogScanLiveComponent_Template_button_click_1_listener() { return ctx.executeScan(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "clr-datagrid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "clr-dg-column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "clr-dg-column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Running on");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "clr-dg-column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Scan Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "clr-dg-column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, BirddogScanLiveComponent_clr_dg_row_12_Template, 10, 6, "clr-dg-row", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "clr-dg-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.input);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.messages.length, " users");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrDatagrid"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ÇlrDatagridMainRenderer"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ÇlrDatagridWillyWonka"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ÇlrActionableOompaLoompa"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ÇlrExpandableOompaLoompa"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrDatagridColumn"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ÇlrDatagridHeaderRenderer"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrDatagridFooter"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrDatagridRow"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ÇlrDatagridRowRenderer"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrDatagridCell"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ÇlrDatagridCellRenderer"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiaXJkZG9nLXNjYW4tbGl2ZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "St8A":
/*!**************************************************************************!*\
  !*** ./src/app/modules/core/home/birddog-home/birddog-home.component.ts ***!
  \**************************************************************************/
/*! exports provided: BirddogHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirddogHomeComponent", function() { return BirddogHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_state_customer_customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app-state/customer/customer.service */ "3Gmg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clr/angular */ "8MG2");




function BirddogHomeComponent_clr_dropdown_menu_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-dropdown-menu", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "About");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Preferences");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Log-out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class BirddogHomeComponent {
    /**
     *
     * @param customerService
     */
    constructor(customerService) {
        this.customerService = customerService;
        customerService.get().subscribe();
    }
    ngOnInit() {
    }
}
BirddogHomeComponent.ɵfac = function BirddogHomeComponent_Factory(t) { return new (t || BirddogHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_state_customer_customer_service__WEBPACK_IMPORTED_MODULE_1__["CustomerService"])); };
BirddogHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BirddogHomeComponent, selectors: [["app-birddog-home"]], decls: 34, vars: 0, consts: [[1, "main-container"], [1, "alert", "alert-app-level"], [1, "header-6"], [1, "branding"], ["routerLink", "/", 1, "logo-and-title"], [1, "title"], [1, "header-nav"], ["routerLink", "/", 1, "nav-link", "nav-text"], ["routerLink", "/customer", 1, "nav-link", "nav-text"], [1, "header-actions"], ["clrDropdownTrigger", "", "aria-label", "toggle settings menu", 1, "nav-icon"], ["clrPosition", "bottom-right", 4, "clrIfOpen"], [1, "subnav"], [1, "nav"], [1, "nav-item"], ["routerLink", "/jobs", 1, "nav-link", "nav-text"], ["routerLink", "/domains", 1, "nav-link", "nav-text"], ["routerLink", "/hosts", 1, "nav-link", "nav-text"], ["routerLink", "/ports", 1, "nav-link", "nav-text"], [1, "content-container"], [1, "content-area"], ["clrPosition", "bottom-right"], ["routerLink", "/about", "clrDropdownItem", ""], ["routerLink", "/preferences", "clrDropdownItem", ""], ["clrDropdownItem", ""]], template: function BirddogHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Birddog Security");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "clr-dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, BirddogHomeComponent_clr_dropdown_menu_15_Template, 7, 0, "clr-dropdown-menu", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nav", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Scan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Scan Jobs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Domains");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Hosts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Ports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDropdown"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDropdownTrigger"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrIfOpen"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDropdownMenu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDropdownItem"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiaXJkZG9nLWhvbWUuY29tcG9uZW50LnNjc3MifQ== */"] });


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'birddog-ui';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "T2Og":
/*!****************************************************************************!*\
  !*** ./src/app/modules/app-state/scan-host-port/scan-host-port.service.ts ***!
  \****************************************************************************/
/*! exports provided: ScanHostPortService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanHostPortService", function() { return ScanHostPortService; });
/* harmony import */ var _datorama_akita_ng_entity_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita-ng-entity-service */ "d5yd");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _scan_host_port_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scan-host-port.store */ "dXd9");




class ScanHostPortService extends _datorama_akita_ng_entity_service__WEBPACK_IMPORTED_MODULE_0__["NgEntityService"] {
    constructor(store) {
        super(store);
        this.store = store;
    }
    /***
     * Populate the ScanJob store for the customerId passed in, this makes us able to query the store from anywhere in the app
     * @param customerId
     */
    populateByScanHostId(scanHostId) {
        //indicate we are loading
        this.store.setLoading(true);
        //remove the items from the store
        this.store.remove();
        //populate the store and return the results to be nice
        return this.getHttp().get('api/entities/ScanHostPort/' + scanHostId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(entities => {
            this.store.add(entities);
            this.store.setLoading(false);
        }));
    }
}
ScanHostPortService.ɵfac = function ScanHostPortService_Factory(t) { return new (t || ScanHostPortService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_scan_host_port_store__WEBPACK_IMPORTED_MODULE_3__["ScanHostPortStore"])); };
ScanHostPortService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ScanHostPortService, factory: ScanHostPortService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "TpLM":
/*!********************************************************************!*\
  !*** ./src/app/modules/app-state/scan-domain/scan-domain.query.ts ***!
  \********************************************************************/
/*! exports provided: ScanDomainQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanDomainQuery", function() { return ScanDomainQuery; });
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita */ "4ZtF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _scan_domain_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scan-domain.store */ "65Kj");
/* harmony import */ var _scan_host_scan_host_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scan-host/scan-host.service */ "c8Ga");




class ScanDomainQuery extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__["QueryEntity"] {
    constructor(store, scanHostService) {
        super(store);
        this.store = store;
        this.scanHostService = scanHostService;
    }
    /***
     * Set the active scan job
     * @param scanJob
     */
    setActive(scanDomain) {
        this.store.setActive(scanDomain.id);
        //populate the jobs for the selected customer
        this.scanHostService.populateByScanDomain(scanDomain.id).subscribe(response => {
            console.log("scan host store set to scan job = " + scanDomain.id);
        });
    }
}
ScanDomainQuery.ɵfac = function ScanDomainQuery_Factory(t) { return new (t || ScanDomainQuery)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_scan_domain_store__WEBPACK_IMPORTED_MODULE_2__["ScanDomainStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_scan_host_scan_host_service__WEBPACK_IMPORTED_MODULE_3__["ScanHostService"])); };
ScanDomainQuery.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ScanDomainQuery, factory: ScanDomainQuery.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "UJR9":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/core/components/scan-host-ports/scan-host-ports.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ScanHostPortsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanHostPortsComponent", function() { return ScanHostPortsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_state_scan_host_port_scan_host_port_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app-state/scan-host-port/scan-host-port.query */ "pEci");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @clr/angular */ "8MG2");



function ScanHostPortsComponent_clr_dg_row_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-dg-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entity_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entity_r2.port.portid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entity_r2.protocol);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entity_r2.port.service.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entity_r2.port.service.product);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entity_r2.port.service.cpe);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entity_r2.port.service.method);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entity_r2.port.service.ostype);
} }
const _c0 = function () { return [10, 20, 50, 100]; };
class ScanHostPortsComponent {
    constructor(query) {
        this.query = query;
        this.entities = [];
        query.selectAll().subscribe(result => {
            this.entities = result;
        });
    }
}
ScanHostPortsComponent.ɵfac = function ScanHostPortsComponent_Factory(t) { return new (t || ScanHostPortsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_state_scan_host_port_scan_host_port_query__WEBPACK_IMPORTED_MODULE_1__["ScanHostPortQuery"])); };
ScanHostPortsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScanHostPortsComponent, selectors: [["app-scan-host-ports"]], decls: 22, vars: 14, consts: [[3, "clrDgField"], [4, "clrDgItems", "clrDgItemsOf"], [3, "clrDgPageSize"], ["pagination", ""], [3, "clrPageSizeOptions"], [1, "btn", "btn-link"]], template: function ScanHostPortsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-datagrid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "clr-dg-column", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Port");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "clr-dg-column", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Protocol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "clr-dg-column", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "clr-dg-column", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "clr-dg-column", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "CPE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "clr-dg-column", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Method");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "clr-dg-column", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "OS Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ScanHostPortsComponent_clr_dg_row_15_Template, 16, 7, "clr-dg-row", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "clr-dg-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "clr-dg-pagination", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "clr-dg-page-size", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Ports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "port.portid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "protocol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "port.service.name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "port.service.product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "port.service.cpe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "port.service.method");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "port.service.ostype");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgItemsOf", ctx.entities);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgPageSize", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrPageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _r1.firstItem + 1, " - ", _r1.lastItem + 1, " of ", _r1.totalItems, " users ");
    } }, directives: [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagrid"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridMainRenderer"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridWillyWonka"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrActionableOompaLoompa"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrExpandableOompaLoompa"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagridColumn"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridHeaderRenderer"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagridItems"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagridFooter"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagridPagination"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagridPageSize"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagridRow"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridRowRenderer"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagridCell"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridCellRenderer"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzY2FuLWhvc3QtcG9ydHMuY29tcG9uZW50LnNjc3MifQ== */"] });


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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clr/angular */ "8MG2");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _modules_core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/core/core.module */ "6ZYd");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _datorama_akita_ng_entity_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @datorama/akita-ng-entity-service */ "d5yd");
/* harmony import */ var _datorama_akita_ngdevtools__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @datorama/akita-ngdevtools */ "ZWwf");
/* harmony import */ var _datorama_akita_ng_router_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @datorama/akita-ng-router-store */ "Dxt5");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: _datorama_akita_ng_entity_service__WEBPACK_IMPORTED_MODULE_7__["NG_ENTITY_SERVICE_CONFIG"], useValue: { baseUrl: 'api/entities' } }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _modules_core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].production ? [] : _datorama_akita_ngdevtools__WEBPACK_IMPORTED_MODULE_8__["AkitaNgDevtools"].forRoot(),
            _datorama_akita_ng_router_store__WEBPACK_IMPORTED_MODULE_9__["AkitaNgRouterStoreModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _modules_core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _datorama_akita_ngdevtools__WEBPACK_IMPORTED_MODULE_8__["AkitaNgDevtools"], _datorama_akita_ng_router_store__WEBPACK_IMPORTED_MODULE_9__["AkitaNgRouterStoreModule"]] }); })();


/***/ }),

/***/ "Zx5B":
/*!********************************************************************************!*\
  !*** ./src/app/modules/core/components/scan-domains/scan-domains.component.ts ***!
  \********************************************************************************/
/*! exports provided: ScanDomainsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanDomainsComponent", function() { return ScanDomainsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_state_scan_domain_scan_domain_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app-state/scan-domain/scan-domain.query */ "TpLM");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @clr/angular */ "8MG2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ScanDomainsComponent_clr_dg_row_11_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-dg-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScanDomainsComponent_clr_dg_row_11_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const entity_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.selectScanDomain(entity_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entity_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entity_r2.dnsName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, entity_r2.created));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entity_r2.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entity_r2.portsFounds);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entity_r2.discoverySource);
} }
const _c0 = function () { return [10, 20, 50, 100]; };
class ScanDomainsComponent {
    constructor(query) {
        this.query = query;
        this.onScanDomainSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this.entities = [];
        query.selectAll().subscribe(result => {
            this.entities = result;
        });
    }
    /**
     *
     * @param scanDomain
     */
    selectScanDomain(scanDomain) {
        //set the active customer
        this.query.setActive(scanDomain);
        //let who ever holds this component that a customer was selected
        this.onScanDomainSelected.emit(scanDomain);
    }
}
ScanDomainsComponent.ɵfac = function ScanDomainsComponent_Factory(t) { return new (t || ScanDomainsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_state_scan_domain_scan_domain_query__WEBPACK_IMPORTED_MODULE_1__["ScanDomainQuery"])); };
ScanDomainsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScanDomainsComponent, selectors: [["app-scan-domains"]], outputs: { onScanDomainSelected: "onScanDomainSelected" }, decls: 18, vars: 12, consts: [[3, "clrDgField"], [4, "clrDgItems", "clrDgItemsOf"], [3, "clrDgPageSize"], ["pagination", ""], [3, "clrPageSizeOptions"], [1, "btn", "btn-link", 3, "click"]], template: function ScanDomainsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-datagrid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "clr-dg-column", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "DNS Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "clr-dg-column", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Created");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "clr-dg-column", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "clr-dg-column", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Ports Found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "clr-dg-column", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Source");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ScanDomainsComponent_clr_dg_row_11_Template, 13, 7, "clr-dg-row", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "clr-dg-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "clr-dg-pagination", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "clr-dg-page-size", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Domains");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "dnsName");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "created");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "portsFounds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "discoverySource");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgItemsOf", ctx.entities);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgPageSize", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrPageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _r1.firstItem + 1, " - ", _r1.lastItem + 1, " of ", _r1.totalItems, " users ");
    } }, directives: [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagrid"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridMainRenderer"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridWillyWonka"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrActionableOompaLoompa"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrExpandableOompaLoompa"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagridColumn"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridHeaderRenderer"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagridItems"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagridFooter"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagridPagination"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagridPageSize"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagridRow"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridRowRenderer"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagridCell"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridCellRenderer"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzY2FuLWRvbWFpbnMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "c8Ga":
/*!******************************************************************!*\
  !*** ./src/app/modules/app-state/scan-host/scan-host.service.ts ***!
  \******************************************************************/
/*! exports provided: ScanHostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanHostService", function() { return ScanHostService; });
/* harmony import */ var _datorama_akita_ng_entity_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita-ng-entity-service */ "d5yd");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _scan_host_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scan-host.store */ "veH9");




class ScanHostService extends _datorama_akita_ng_entity_service__WEBPACK_IMPORTED_MODULE_0__["NgEntityService"] {
    constructor(store) {
        super(store);
        this.store = store;
    }
    /***
     * Populate the ScanJob store for the customerId passed in, this makes us able to query the store from anywhere in the app
     * @param customerId
     */
    populateByScanDomain(scanDomainId) {
        //indicate we are loading
        this.store.setLoading(true);
        //remove the items from the store
        this.store.remove();
        //populate the store and return the results to be nice
        return this.getHttp().get('api/entities/ScanHost/' + scanDomainId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(entities => {
            this.store.add(entities);
            this.store.setLoading(false);
        }));
    }
}
ScanHostService.ɵfac = function ScanHostService_Factory(t) { return new (t || ScanHostService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_scan_host_store__WEBPACK_IMPORTED_MODULE_3__["ScanHostStore"])); };
ScanHostService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ScanHostService, factory: ScanHostService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "cc5f":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/core/pages/birddog-scan-hosts/birddog-scan-hosts.component.ts ***!
  \***************************************************************************************/
/*! exports provided: BirddogScanHostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirddogScanHostsComponent", function() { return BirddogScanHostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_scan_hosts_scan_hosts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/scan-hosts/scan-hosts.component */ "icp9");



class BirddogScanHostsComponent {
    constructor(router) {
        this.router = router;
    }
    onKeydownHandler(event) {
        this.router.navigateByUrl("domains");
    }
    ngOnInit() {
    }
    onScanHostSelected() {
        this.router.navigateByUrl('ports');
    }
}
BirddogScanHostsComponent.ɵfac = function BirddogScanHostsComponent_Factory(t) { return new (t || BirddogScanHostsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
BirddogScanHostsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BirddogScanHostsComponent, selectors: [["app-birddog-scan-hosts"]], hostBindings: function BirddogScanHostsComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.escape", function BirddogScanHostsComponent_keydown_escape_HostBindingHandler($event) { return ctx.onKeydownHandler($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, decls: 2, vars: 0, consts: [[3, "onScanHostSelected"]], template: function BirddogScanHostsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "SCAN HOSTS\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-scan-hosts", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onScanHostSelected", function BirddogScanHostsComponent_Template_app_scan_hosts_onScanHostSelected_1_listener() { return ctx.onScanHostSelected(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_scan_hosts_scan_hosts_component__WEBPACK_IMPORTED_MODULE_2__["ScanHostsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiaXJkZG9nLXNjYW4taG9zdHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "dXd9":
/*!**************************************************************************!*\
  !*** ./src/app/modules/app-state/scan-host-port/scan-host-port.store.ts ***!
  \**************************************************************************/
/*! exports provided: ScanHostPortStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanHostPortStore", function() { return ScanHostPortStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @datorama/akita */ "4ZtF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let ScanHostPortStore = class ScanHostPortStore extends _datorama_akita__WEBPACK_IMPORTED_MODULE_1__["EntityStore"] {
    constructor() {
        super();
    }
    clear() {
        this.remove();
    }
};
ScanHostPortStore.ɵfac = function ScanHostPortStore_Factory(t) { return new (t || ScanHostPortStore)(); };
ScanHostPortStore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ScanHostPortStore, factory: ScanHostPortStore.ɵfac, providedIn: 'root' });
ScanHostPortStore = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["StoreConfig"])({ name: 'ScanHostPort' })
], ScanHostPortStore);



/***/ }),

/***/ "f+eC":
/*!**************************************************************!*\
  !*** ./src/app/modules/app-state/customer/customer.query.ts ***!
  \**************************************************************/
/*! exports provided: CustomerQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerQuery", function() { return CustomerQuery; });
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita */ "4ZtF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _customer_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer.store */ "svFg");
/* harmony import */ var _scan_job_scan_job_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scan-job/scan-job.service */ "kTiP");




class CustomerQuery extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__["QueryEntity"] {
    constructor(store, scanJobService) {
        super(store);
        this.store = store;
        this.scanJobService = scanJobService;
    }
    setActive(customer) {
        this.store.setActive(customer.id);
        //populate the jobs for the selected customer
        this.scanJobService.populateByCustomerId(customer.id).subscribe(response => {
            console.log("scan job store set to customer = " + customer.id);
        });
    }
}
CustomerQuery.ɵfac = function CustomerQuery_Factory(t) { return new (t || CustomerQuery)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_customer_store__WEBPACK_IMPORTED_MODULE_2__["CustomerStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_scan_job_scan_job_service__WEBPACK_IMPORTED_MODULE_3__["ScanJobService"])); };
CustomerQuery.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CustomerQuery, factory: CustomerQuery.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "icp9":
/*!****************************************************************************!*\
  !*** ./src/app/modules/core/components/scan-hosts/scan-hosts.component.ts ***!
  \****************************************************************************/
/*! exports provided: ScanHostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanHostsComponent", function() { return ScanHostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_state_scan_host_scan_host_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app-state/scan-host/scan-host.query */ "y8zp");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @clr/angular */ "8MG2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ScanHostsComponent_clr_dg_row_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-dg-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScanHostsComponent_clr_dg_row_9_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const entity_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.selectScanDomain(entity_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entity_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entity_r2.ipAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entity_r2.portsFound);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 4, entity_r2.created));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entity_r2.status);
} }
const _c0 = function () { return [10, 20, 50, 100]; };
class ScanHostsComponent {
    constructor(query) {
        this.query = query;
        this.onScanHostSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this.entities = [];
        query.selectAll().subscribe(results => {
            this.entities = results;
        });
    }
    /**
     *
     * @param scanDomain
     */
    selectScanDomain(scanHost) {
        //set the active customer
        this.query.setActive(scanHost);
        //let who ever holds this component that a customer was selected
        this.onScanHostSelected.emit(scanHost);
    }
}
ScanHostsComponent.ɵfac = function ScanHostsComponent_Factory(t) { return new (t || ScanHostsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_state_scan_host_scan_host_query__WEBPACK_IMPORTED_MODULE_1__["ScanHostQuery"])); };
ScanHostsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScanHostsComponent, selectors: [["app-scan-hosts"]], outputs: { onScanHostSelected: "onScanHostSelected" }, decls: 16, vars: 11, consts: [[3, "clrDgField"], [4, "clrDgItems", "clrDgItemsOf"], [3, "clrDgPageSize"], ["pagination", ""], [3, "clrPageSizeOptions"], [1, "btn", "btn-link", 3, "click"]], template: function ScanHostsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-datagrid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "clr-dg-column", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "IP Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "clr-dg-column", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Open Ports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "clr-dg-column", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Created");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "clr-dg-column", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ScanHostsComponent_clr_dg_row_9_Template, 11, 6, "clr-dg-row", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "clr-dg-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "clr-dg-pagination", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "clr-dg-page-size", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Domains");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "ipAddress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "portsFound");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "created");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgItemsOf", ctx.entities);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgPageSize", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrPageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _r1.firstItem + 1, " - ", _r1.lastItem + 1, " of ", _r1.totalItems, " users ");
    } }, directives: [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagrid"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridMainRenderer"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridWillyWonka"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrActionableOompaLoompa"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrExpandableOompaLoompa"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagridColumn"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridHeaderRenderer"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagridItems"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagridFooter"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagridPagination"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagridPageSize"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagridRow"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridRowRenderer"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDatagridCell"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ÇlrDatagridCellRenderer"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzY2FuLWhvc3RzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "jtIh":
/*!**************************************************************!*\
  !*** ./src/app/modules/app-state/scan-job/scan-job.store.ts ***!
  \**************************************************************/
/*! exports provided: ScanJobStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanJobStore", function() { return ScanJobStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @datorama/akita */ "4ZtF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let ScanJobStore = class ScanJobStore extends _datorama_akita__WEBPACK_IMPORTED_MODULE_1__["EntityStore"] {
    constructor() {
        super();
    }
};
ScanJobStore.ɵfac = function ScanJobStore_Factory(t) { return new (t || ScanJobStore)(); };
ScanJobStore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ScanJobStore, factory: ScanJobStore.ɵfac, providedIn: 'root' });
ScanJobStore = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["StoreConfig"])({ name: 'ScanJob' })
], ScanJobStore);



/***/ }),

/***/ "kTiP":
/*!****************************************************************!*\
  !*** ./src/app/modules/app-state/scan-job/scan-job.service.ts ***!
  \****************************************************************/
/*! exports provided: ScanJobService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanJobService", function() { return ScanJobService; });
/* harmony import */ var _datorama_akita_ng_entity_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita-ng-entity-service */ "d5yd");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _scan_job_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scan-job.store */ "jtIh");




class ScanJobService extends _datorama_akita_ng_entity_service__WEBPACK_IMPORTED_MODULE_0__["NgEntityService"] {
    constructor(store) {
        super(store);
        this.store = store;
    }
    /***
     * Populate the ScanJob store for the customerId passed in, this makes us able to query the store from anywhere in the app
     * @param customerId
     */
    populateByCustomerId(customerId) {
        //indicate we are loading
        this.store.setLoading(true);
        //remove the items from the store
        this.store.remove();
        //populate the store and return the results to be nice
        return this.getHttp().get('api/entities/ScanJob/' + customerId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(entities => {
            this.store.add(entities);
            this.store.setLoading(false);
        }));
    }
}
ScanJobService.ɵfac = function ScanJobService_Factory(t) { return new (t || ScanJobService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_scan_job_store__WEBPACK_IMPORTED_MODULE_3__["ScanJobStore"])); };
ScanJobService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ScanJobService, factory: ScanJobService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "nbeH":
/*!*************************************************************!*\
  !*** ./src/app/modules/core/services/birddog-ws.service.ts ***!
  \*************************************************************/
/*! exports provided: BirddogWsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirddogWsService", function() { return BirddogWsService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BirddogWsService {
    /***
     * Connect to the bird dog web socket
     * @param url
     */
    connect(url) {
        if (!this.subject) {
            this.subject = this.create(url);
        }
        return this.subject;
    }
    /**
     *
     * @param url
     * @private
     */
    create(url) {
        const ws = new WebSocket(url);
        const observable = rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create((obs) => {
            ws.onmessage = obs.next.bind(obs);
            ws.onerror = obs.error.bind(obs);
            ws.onclose = obs.complete.bind(obs);
            return ws.close.bind(ws);
        });
        const observer = {
            next: (data) => {
                if (ws.readyState === WebSocket.OPEN) {
                    ws.send(JSON.stringify(data));
                }
            }
        };
        return rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"].create(observer, observable);
    }
}
BirddogWsService.ɵfac = function BirddogWsService_Factory(t) { return new (t || BirddogWsService)(); };
BirddogWsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BirddogWsService, factory: BirddogWsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "pCpI":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/core/pages/birddog-customer/birddog-customer.component.ts ***!
  \***********************************************************************************/
/*! exports provided: BirddogCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirddogCustomerComponent", function() { return BirddogCustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_customers_customers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/customers/customers.component */ "B8pv");



class BirddogCustomerComponent {
    constructor(router) {
        this.router = router;
    }
    /**
     * Display the jobs for the customer
     */
    onCustomerSelected() {
        this.router.navigateByUrl('jobs');
    }
}
BirddogCustomerComponent.ɵfac = function BirddogCustomerComponent_Factory(t) { return new (t || BirddogCustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
BirddogCustomerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BirddogCustomerComponent, selectors: [["app-birddog-customer"]], decls: 2, vars: 0, consts: [[3, "onCustomerSelected"]], template: function BirddogCustomerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "CUSTOMERS\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-customers", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onCustomerSelected", function BirddogCustomerComponent_Template_app_customers_onCustomerSelected_1_listener() { return ctx.onCustomerSelected(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_customers_customers_component__WEBPACK_IMPORTED_MODULE_2__["CustomersComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiaXJkZG9nLWN1c3RvbWVyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "pEci":
/*!**************************************************************************!*\
  !*** ./src/app/modules/app-state/scan-host-port/scan-host-port.query.ts ***!
  \**************************************************************************/
/*! exports provided: ScanHostPortQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanHostPortQuery", function() { return ScanHostPortQuery; });
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita */ "4ZtF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _scan_host_port_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scan-host-port.store */ "dXd9");



class ScanHostPortQuery extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__["QueryEntity"] {
    constructor(store) {
        super(store);
        this.store = store;
    }
}
ScanHostPortQuery.ɵfac = function ScanHostPortQuery_Factory(t) { return new (t || ScanHostPortQuery)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_scan_host_port_store__WEBPACK_IMPORTED_MODULE_2__["ScanHostPortStore"])); };
ScanHostPortQuery.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ScanHostPortQuery, factory: ScanHostPortQuery.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "rDux":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/core/pages/birddog-scan-jobs/birddog-scan-jobs.component.ts ***!
  \*************************************************************************************/
/*! exports provided: BirddogScanJobsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirddogScanJobsComponent", function() { return BirddogScanJobsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_state_customer_customer_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app-state/customer/customer.query */ "f+eC");
/* harmony import */ var _services_birddog_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/birddog-message.service */ "xEFK");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @clr/angular */ "8MG2");
/* harmony import */ var _components_scan_jobs_scan_jobs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/scan-jobs/scan-jobs.component */ "7tiv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");








function BirddogScanJobsComponent_clr_tab_content_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-tab-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-scan-jobs", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onScanJobSelected", function BirddogScanJobsComponent_clr_tab_content_7_Template_app_scan_jobs_onScanJobSelected_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onScanJobSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BirddogScanJobsComponent_clr_tab_content_11_clr_dg_row_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-dg-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const msg_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, msg_r5.statusDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](msg_r5.server);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](msg_r5.scanType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](msg_r5.scanMessage);
} }
function BirddogScanJobsComponent_clr_tab_content_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-tab-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "clr-datagrid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "clr-dg-column");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "clr-dg-column");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Running on");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "clr-dg-column");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Scan Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "clr-dg-column");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BirddogScanJobsComponent_clr_tab_content_11_clr_dg_row_10_Template, 10, 6, "clr-dg-row", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "clr-dg-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.messages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.messages.length, " users");
} }
class BirddogScanJobsComponent {
    constructor(router, http, customerQuery, ms) {
        this.router = router;
        this.http = http;
        this.customerQuery = customerQuery;
        this.ms = ms;
        this.messages = [];
        this.ms.messages.subscribe(msg => {
            this.messages.push(msg);
        });
    }
    onKeydownHandler(event) {
        this.router.navigateByUrl("customer");
    }
    /**
     * Display the jobs for the customer
     */
    onScanJobSelected() {
        this.router.navigateByUrl('domains');
    }
    /***
     * Execute a  scan job for this customer
     */
    executeScanJob() {
        //TODO: We should not be able to get here
        //Make sure the active id is set
        if (this.customerQuery.hasActive()) {
            this.http.post("/api/scan/", this.customerQuery.getActiveId()).subscribe(result => {
                console.log(result);
            });
        }
    }
}
BirddogScanJobsComponent.ɵfac = function BirddogScanJobsComponent_Factory(t) { return new (t || BirddogScanJobsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_state_customer_customer_query__WEBPACK_IMPORTED_MODULE_3__["CustomerQuery"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_birddog_message_service__WEBPACK_IMPORTED_MODULE_4__["BirddogMessageService"])); };
BirddogScanJobsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BirddogScanJobsComponent, selectors: [["app-birddog-scan-jobs"]], hostBindings: function BirddogScanJobsComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.escape", function BirddogScanJobsComponent_keydown_escape_HostBindingHandler($event) { return ctx.onKeydownHandler($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, decls: 12, vars: 1, consts: [[1, "btn", "btn-primary", 3, "click"], ["clrTabLink", ""], [4, "clrIfActive"], [3, "onScanJobSelected"], [4, "ngFor", "ngForOf"]], template: function BirddogScanJobsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "SCAN JOBS\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BirddogScanJobsComponent_Template_button_click_1_listener() { return ctx.executeScanJob(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Submit Scan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "clr-tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "clr-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Scan Jobs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BirddogScanJobsComponent_clr_tab_content_7_Template, 2, 0, "clr-tab-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "clr-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Running");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BirddogScanJobsComponent_clr_tab_content_11_Template, 13, 2, "clr-tab-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrIfActive", true);
    } }, directives: [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrTabs"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrTabsWillyWonka"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrTab"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrTabLink"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrActiveOompaLoompa"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrIfActive"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrTabContent"], _components_scan_jobs_scan_jobs_component__WEBPACK_IMPORTED_MODULE_6__["ScanJobsComponent"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagrid"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridMainRenderer"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridWillyWonka"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrActionableOompaLoompa"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrExpandableOompaLoompa"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridColumn"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridHeaderRenderer"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridFooter"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridRow"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridRowRenderer"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridCell"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ÇlrDatagridCellRenderer"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiaXJkZG9nLXNjYW4tam9icy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "svFg":
/*!**************************************************************!*\
  !*** ./src/app/modules/app-state/customer/customer.store.ts ***!
  \**************************************************************/
/*! exports provided: CustomerStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerStore", function() { return CustomerStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @datorama/akita */ "4ZtF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let CustomerStore = class CustomerStore extends _datorama_akita__WEBPACK_IMPORTED_MODULE_1__["EntityStore"] {
    constructor() {
        super();
    }
};
CustomerStore.ɵfac = function CustomerStore_Factory(t) { return new (t || CustomerStore)(); };
CustomerStore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CustomerStore, factory: CustomerStore.ɵfac, providedIn: 'root' });
CustomerStore = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["StoreConfig"])({ name: 'Customer' })
], CustomerStore);



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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modules_core_home_birddog_home_birddog_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/core/home/birddog-home/birddog-home.component */ "St8A");
/* harmony import */ var _modules_core_pages_birddog_scan_live_birddog_scan_live_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/core/pages/birddog-scan-live/birddog-scan-live.component */ "Qcb9");
/* harmony import */ var _modules_core_pages_birddog_customer_birddog_customer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/core/pages/birddog-customer/birddog-customer.component */ "pCpI");
/* harmony import */ var _modules_core_pages_birddog_scan_jobs_birddog_scan_jobs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/core/pages/birddog-scan-jobs/birddog-scan-jobs.component */ "rDux");
/* harmony import */ var _modules_core_pages_birddog_scan_domains_birddog_scan_domains_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/core/pages/birddog-scan-domains/birddog-scan-domains.component */ "MGHH");
/* harmony import */ var _modules_core_pages_birddog_scan_hosts_birddog_scan_hosts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/core/pages/birddog-scan-hosts/birddog-scan-hosts.component */ "cc5f");
/* harmony import */ var _modules_core_pages_birddog_scan_host_ports_birddog_scan_host_ports_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/core/pages/birddog-scan-host-ports/birddog-scan-host-ports.component */ "MNXn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










const routes = [
    {
        path: '',
        component: _modules_core_home_birddog_home_birddog_home_component__WEBPACK_IMPORTED_MODULE_1__["BirddogHomeComponent"],
        children: [
            {
                path: '',
                data: { allRoles: false },
                component: _modules_core_pages_birddog_scan_live_birddog_scan_live_component__WEBPACK_IMPORTED_MODULE_2__["BirddogScanLiveComponent"],
            },
            {
                path: 'customer',
                data: { allRoles: false },
                component: _modules_core_pages_birddog_customer_birddog_customer_component__WEBPACK_IMPORTED_MODULE_3__["BirddogCustomerComponent"],
            },
            {
                path: 'jobs',
                data: { allRoles: false },
                component: _modules_core_pages_birddog_scan_jobs_birddog_scan_jobs_component__WEBPACK_IMPORTED_MODULE_4__["BirddogScanJobsComponent"],
            },
            {
                path: 'domains',
                data: { allRoles: false },
                component: _modules_core_pages_birddog_scan_domains_birddog_scan_domains_component__WEBPACK_IMPORTED_MODULE_5__["BirddogScanDomainsComponent"],
            },
            {
                path: 'hosts',
                data: { allRoles: false },
                component: _modules_core_pages_birddog_scan_hosts_birddog_scan_hosts_component__WEBPACK_IMPORTED_MODULE_6__["BirddogScanHostsComponent"],
            },
            {
                path: 'ports',
                data: { allRoles: false },
                component: _modules_core_pages_birddog_scan_host_ports_birddog_scan_host_ports_component__WEBPACK_IMPORTED_MODULE_7__["BirddogScanHostPortsComponent"],
            }
        ]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "veH9":
/*!****************************************************************!*\
  !*** ./src/app/modules/app-state/scan-host/scan-host.store.ts ***!
  \****************************************************************/
/*! exports provided: ScanHostStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanHostStore", function() { return ScanHostStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @datorama/akita */ "4ZtF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _scan_host_port_scan_host_port_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scan-host-port/scan-host-port.store */ "dXd9");




let ScanHostStore = class ScanHostStore extends _datorama_akita__WEBPACK_IMPORTED_MODULE_1__["EntityStore"] {
    constructor(scanHostPortStore) {
        super();
        this.scanHostPortStore = scanHostPortStore;
    }
    /**
     * Clear the store
     */
    clear() {
        this.remove();
        this.scanHostPortStore.clear();
    }
};
ScanHostStore.ɵfac = function ScanHostStore_Factory(t) { return new (t || ScanHostStore)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_scan_host_port_scan_host_port_store__WEBPACK_IMPORTED_MODULE_3__["ScanHostPortStore"])); };
ScanHostStore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ScanHostStore, factory: ScanHostStore.ɵfac, providedIn: 'root' });
ScanHostStore = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["StoreConfig"])({ name: 'ScanHost' })
], ScanHostStore);



/***/ }),

/***/ "xEFK":
/*!******************************************************************!*\
  !*** ./src/app/modules/core/services/birddog-message.service.ts ***!
  \******************************************************************/
/*! exports provided: BirddogMessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirddogMessageService", function() { return BirddogMessageService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _birddog_ws_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./birddog-ws.service */ "nbeH");



class BirddogMessageService {
    constructor(ws) {
        this.ws = ws;
        this.messages = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        ws.connect("ws://" + location.hostname + ":" + location.port + "/ws/scan/topic").subscribe((message) => {
            this.messages.next(JSON.parse(message.data));
        });
    }
}
BirddogMessageService.ɵfac = function BirddogMessageService_Factory(t) { return new (t || BirddogMessageService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_birddog_ws_service__WEBPACK_IMPORTED_MODULE_2__["BirddogWsService"])); };
BirddogMessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BirddogMessageService, factory: BirddogMessageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "y8zp":
/*!****************************************************************!*\
  !*** ./src/app/modules/app-state/scan-host/scan-host.query.ts ***!
  \****************************************************************/
/*! exports provided: ScanHostQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanHostQuery", function() { return ScanHostQuery; });
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita */ "4ZtF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _scan_host_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scan-host.store */ "veH9");
/* harmony import */ var _scan_host_port_scan_host_port_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scan-host-port/scan-host-port.service */ "T2Og");




class ScanHostQuery extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__["QueryEntity"] {
    constructor(store, scanHostPortService) {
        super(store);
        this.store = store;
        this.scanHostPortService = scanHostPortService;
    }
    /***
     * Set the active scan job
     * @param scanJob
     */
    setActive(scanHost) {
        this.store.setActive(scanHost.id);
        //populate the jobs for the selected customer
        this.scanHostPortService.populateByScanHostId(scanHost.id).subscribe(response => {
            console.log("scan host store set to scan job = " + scanHost.id);
        });
    }
}
ScanHostQuery.ɵfac = function ScanHostQuery_Factory(t) { return new (t || ScanHostQuery)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_scan_host_store__WEBPACK_IMPORTED_MODULE_2__["ScanHostStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_scan_host_port_scan_host_port_service__WEBPACK_IMPORTED_MODULE_3__["ScanHostPortService"])); };
ScanHostQuery.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ScanHostQuery, factory: ScanHostQuery.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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