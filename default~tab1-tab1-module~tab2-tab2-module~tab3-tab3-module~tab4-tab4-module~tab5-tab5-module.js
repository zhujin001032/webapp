(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~tab1-tab1-module~tab2-tab2-module~tab3-tab3-module~tab4-tab4-module~tab5-tab5-module"],{

/***/ "./src/app/route/entry/anchor.directive.ts":
/*!*************************************************!*\
  !*** ./src/app/route/entry/anchor.directive.ts ***!
  \*************************************************/
/*! exports provided: AppAnchorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppAnchorDirective", function() { return AppAnchorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppAnchorDirective = /** @class */ (function () {
    function AppAnchorDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    AppAnchorDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appAnchor]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
    ], AppAnchorDirective);
    return AppAnchorDirective;
}());



/***/ }),

/***/ "./src/app/route/entry/coms.component.ts":
/*!***********************************************!*\
  !*** ./src/app/route/entry/coms.component.ts ***!
  \***********************************************/
/*! exports provided: ComsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComsComponent", function() { return ComsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/event.service */ "./src/app/shared/service/event.service.ts");
/* harmony import */ var _anchor_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./anchor.directive */ "./src/app/route/entry/anchor.directive.ts");




var ComsComponent = /** @class */ (function () {
    function ComsComponent(componentFactoryResolver, eventService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.eventService = eventService;
    }
    ComsComponent.prototype.ngOnInit = function () {
    };
    // tslint:disable-next-line:use-life-cycle-interface
    ComsComponent.prototype.ngOnChanges = function (changes) {
        // const viewContainerRef = this.appAnchor.viewContainerRef;
        // viewContainerRef.clear();
        this.loadComponent();
    };
    ComsComponent.prototype.loadComponent = function () {
        var _this = this;
        var viewContainerRef = this.appAnchor.viewContainerRef;
        viewContainerRef.clear();
        this.coms.forEach(function (v) {
            var componentFactory = _this.componentFactoryResolver.resolveComponentFactory(v.component);
            var componentRef = viewContainerRef.createComponent(componentFactory);
            (componentRef.instance).tagData = v.tagData;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ComsComponent.prototype, "coms", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_anchor_directive__WEBPACK_IMPORTED_MODULE_3__["AppAnchorDirective"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _anchor_directive__WEBPACK_IMPORTED_MODULE_3__["AppAnchorDirective"])
    ], ComsComponent.prototype, "appAnchor", void 0);
    ComsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-coms',
            template: '<section>\n' +
                '<ng-template appAnchor></ng-template>\n' +
                '<div id="home-app-coms-sec" style="display:none;"></div></section>'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _shared_service_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"]])
    ], ComsComponent);
    return ComsComponent;
}());



/***/ }),

/***/ "./src/app/route/entry/entry.page.html":
/*!*********************************************!*\
  !*** ./src/app/route/entry/entry.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header *ngIf=\"titleBar && titleBar!=={} \"\n    [ngClass]=\"{'isHeight': !isHeader, 'header-orange': titleBar.cssStyle === 'orange','header-white': titleBar.cssStyle === 'white'}\"\n    translucent=\"false\">\n    <ion-toolbar id=\"superToolbar\"\n        [ngClass]=\"{'isShow': isHeader,'isHide':!isHeader,'bg-image':showWaterImg, 'title-orange': titleBar.cssStyle === 'orange','title-white': titleBar.cssStyle === 'white','bottom-line': (titleBar.cssStyle === 'white' || titleBar.cssStyle === undefined ) && titleBar.bottomLine !== false }\">\n        <ng-container *ngIf=\"titleBar.title &&  (!titleBar.title.layout || titleBar.title.layout === 'center')\">\n            <ion-title class=\"nav-title\" *ngIf=\"titleBar.title\">{{titleBar.title.labelName}}</ion-title>\n        </ng-container>\n        <ng-container *ngIf=\"titleBar.title && titleBar.title.layout === 'left'\">\n            <ion-buttons slot=\"start\" class=\"start\" class=\"nav-title nav-title-left\">\n                {{titleBar.title.labelName}}\n            </ion-buttons>\n\n        </ng-container>\n        <ion-buttons class=\"nav-title nav-position\" style=\"height: 2.75rem;\" *ngIf=\"titleBar.position\" slot=\"start\"\n            class=\"start\" (click)=\"buttonClick(titleBar.position.link)\">\n            <span id=\"identityCityName\" *ngIf=\"positionInfo &&  positionInfo.name\">{{positionInfo.name}} </span>\n            <i class=\"triangle-icon\"></i>\n        </ion-buttons>\n\n\n        <!-- search box -->\n        <ng-container *ngIf=\"titleBar.cssStyle === 'white' || titleBar.cssStyle === undefined \">\n            <div (click)=\"searchButtonClick(titleBar.searchInput,$event)\">\n                <ion-searchbar class=\"search-bar\" *ngIf=\"titleBar.searchInput\"\n                    placeholder={{titleBar.searchInput.placeholder}} value={{titleBar.searchInput.value}} mode=\"ios\">\n                </ion-searchbar>\n            </div>\n\n            <!-- <img class=\"header-icon-img\" src=\"../../../assets/img/nav_search.png\" alt=\"search\"> -->\n        </ng-container>\n        <ng-container *ngIf=\"titleBar.cssStyle === 'orange'\">\n            <div (click)=\"searchButtonClick(titleBar.searchInput)\">\n                <ion-searchbar class=\"search-bar search-bar-orange\" *ngIf=\"titleBar.searchInput\"\n                    placeholder={{titleBar.searchInput.placeholder}} mode=\"ios\"></ion-searchbar>\n            </div>\n\n            <!-- <img class=\"header-icon-img\" src=\"../../../assets/img/nav_search_white@3x.png\" alt=\"search\"> -->\n        </ng-container>\n\n\n\n        <!-- search btn -->\n        <ng-container *ngIf=\"titleBar.searchButton\">\n            <ng-container *ngIf=\"titleBar.searchButton.layout==='left'\">\n                <ion-buttons slot=\"start\" class=\"start\" (click)=\"searchButtonClick(titleBar.searchButton)\">\n                    <ng-container *ngIf=\"titleBar.cssStyle === 'white' || titleBar.cssStyle === undefined \">\n                        <img class=\"header-icon-img\" src=\"../../../assets/img/nav_search.png\" alt=\"search\">\n                    </ng-container>\n                    <ng-container *ngIf=\"titleBar.cssStyle === 'orange'\">\n                        <img class=\"header-icon-img\" src=\"../../../assets/img/nav_search_white@3x.png\" alt=\"search\">\n                    </ng-container>\n                    <span\n                        [ngClass]=\"{'button-orange': titleBar.cssStyle === 'orange','button-white': titleBar.cssStyle === 'white'}\">{{titleBar.searchButton.labelName}}</span>\n                </ion-buttons>\n            </ng-container>\n\n            <ng-container *ngIf=\"titleBar.searchButton.layout==='right'\">\n                <ion-buttons slot=\"end\" class=\"end\" (click)=\"searchButtonClick(titleBar.searchButton)\">\n                    <ng-container *ngIf=\"titleBar.cssStyle === 'white' || titleBar.cssStyle === undefined \">\n                        <img class=\"header-icon-img-r\" src=\"../../../assets/img/nav_search.png\" alt=\"search\">\n                    </ng-container>\n                    <ng-container *ngIf=\"titleBar.cssStyle === 'orange'\">\n                        <img class=\"header-icon-img-r\" src=\"../../../assets/img/nav_search_white@3x.png\" alt=\"search\">\n                    </ng-container>\n                    <span\n                        [ngClass]=\"{'button-orange': titleBar.cssStyle === 'orange','button-white': titleBar.cssStyle === 'white'}\">{{titleBar.searchButton.labelName}}</span>\n                </ion-buttons>\n            </ng-container>\n        </ng-container>\n\n        <ng-container *ngIf=\"titleBar.back\">\n            <ng-container *ngIf=\"titleBar.back.layout==='left'\">\n                <ion-buttons slot=\"start\" class=\"start\" (click)=\"back()\">\n                    <ng-container *ngIf=\"titleBar.cssStyle === 'white' || titleBar.cssStyle === undefined \">\n                        <img class=\"header-icon-img\" style=\"margin-right: 0px;\" src=\"../../../assets/img/back.png\"\n                            alt=\"back\">\n                    </ng-container>\n                    <ng-container *ngIf=\"titleBar.cssStyle === 'orange'\">\n                        <img class=\"header-icon-img\" src=\"../../../assets/img/nav_icon_back_white@3x.png\" alt=\"back\">\n                    </ng-container>\n                </ion-buttons>\n            </ng-container>\n\n            <ng-container *ngIf=\"titleBar.back.layout==='right'\">\n                <ion-buttons slot=\"end\" class=\"end\" (click)=\"back()\">\n                    <ng-container *ngIf=\"titleBar.cssStyle === 'white' || titleBar.cssStyle === undefined \">\n                        <img class=\"header-icon-img-r\" src=\"../../../assets/img/back.png\" alt=\"back\">\n                    </ng-container>\n                    <ng-container *ngIf=\"titleBar.cssStyle === 'orange'\">\n                        <img class=\"header-icon-img-r\" src=\"../../../assets/img/nav_icon_back_white@3x.png\" alt=\"back\">\n                    </ng-container>\n                </ion-buttons>\n            </ng-container>\n        </ng-container>\n\n\n        <!-- add  call btn : -->\n        <ng-container *ngIf=\"titleBar.call\">\n            <ng-container *ngIf=\"titleBar.call.layout==='left'\">\n                <ion-buttons slot=\"start\" class=\"start\" (click)=\"call(titleBar.call)\">\n                    <ng-container *ngIf=\"titleBar.cssStyle === 'white' || titleBar.cssStyle === undefined \">\n                        <img class=\"header-icon-img\" src=\"../../../assets/icon/nav_icon_tel@3x.png\" alt=\"call\">\n                    </ng-container>\n                    <ng-container *ngIf=\"titleBar.cssStyle === 'orange'\">\n                        <img class=\"header-icon-img\" src=\"../../../assets/icon/nav_icon_tel_white@3x.png\" alt=\"call\">\n                    </ng-container>\n                </ion-buttons>\n            </ng-container>\n\n            <ng-container *ngIf=\"titleBar.call.layout==='right'\">\n                <ion-buttons slot=\"end\" class=\"end\" (click)=\"call(titleBar.call)\">\n                    <ng-container *ngIf=\"titleBar.cssStyle === 'white' || titleBar.cssStyle === undefined \">\n                        <img class=\"header-icon-img-r\" src=\"../../../assets/icon/nav_icon_tel@3x.png\" alt=\"call\">\n                    </ng-container>\n                    <ng-container *ngIf=\"titleBar.cssStyle === 'orange'\">\n                        <img class=\"header-icon-img-r\" src=\"../../../assets/icon/nav_icon_tel_white@3x.png\" alt=\"call\">\n                    </ng-container>\n                </ion-buttons>\n            </ng-container>\n        </ng-container>\n\n        <!-- add  chat btn : -->\n        <ng-container *ngIf=\"titleBar.chat\">\n            <ng-container *ngIf=\"titleBar.chat.layout==='left'\">\n                <ion-buttons slot=\"start\" class=\"start\" (click)=\"chat(titleBar.chat)\">\n                    <img class=\"header-icon-img\" src=\"../../../assets/icon/{{titleBar.chat.icon}}\" alt=\"chat\">\n                    <!-- <ng-container *ngIf=\"titleBar.cssStyle === 'white' || titleBar.cssStyle === undefined \">\n                        <img class=\"header-icon-img\" src=\"../../../assets/icon/details_icon_chat@3x.png\" alt=\"chat\">\n                    </ng-container>\n                    <ng-container *ngIf=\"titleBar.cssStyle === 'orange'\">\n                        <img class=\"header-icon-img\" src=\"../../../assets/icon/details_icon_chat_w@3x.png\" alt=\"chat\">\n                    </ng-container> -->\n                </ion-buttons>\n            </ng-container>\n\n            <ng-container *ngIf=\"titleBar.chat.layout==='right'\">\n                <ion-buttons slot=\"end\" class=\"end\" (click)=\"chat(titleBar.chat)\">\n                    <img class=\"header-icon-img-r\" src=\"../../../assets/icon/{{titleBar.chat.icon}}\" alt=\"chat\">\n                    <!-- \n                    <ng-container *ngIf=\"titleBar.cssStyle === 'white' || titleBar.cssStyle === undefined \">\n                        <img class=\"header-icon-img\" src=\"../../../assets/icon/details_icon_chat@3x.png\" alt=\"chat\">\n                    </ng-container>\n                    <ng-container *ngIf=\"titleBar.cssStyle === 'orange'\">\n                        <img class=\"header-icon-img\" src=\"../../../assets/icon/details_icon_chat_w@3x.png\" alt=\"chat\">\n                    </ng-container> -->\n                </ion-buttons>\n            </ng-container>\n        </ng-container>\n\n        <!-- add  more btn : -->\n        <ng-container *ngIf=\"titleBar.moreLine\">\n            <ng-container *ngIf=\"titleBar.moreLine.layout==='left'\">\n                <ion-buttons slot=\"start\" class=\"start\" (click)=\"moreLine(titleBar.moreLine)\">\n                    <img class=\"header-icon-img\" src=\"../../../assets/icon/{{titleBar.moreLine.icon}}\" alt=\"moreLine\">\n\n                    <!-- <ng-container *ngIf=\"titleBar.cssStyle === 'white' || titleBar.cssStyle === undefined \">\n                        <img class=\"header-icon-img\" src=\"../../../assets/icon/nav_icon_more@3x.png\" alt=\"moreLine\">\n                    </ng-container>\n                    <ng-container *ngIf=\"titleBar.cssStyle === 'orange'\">\n                        <img class=\"header-icon-img\" src=\"../../../assets/icon/nav_icon_more_w@3x.png\" alt=\"moreLine\">\n                    </ng-container> -->\n                </ion-buttons>\n            </ng-container>\n\n            <ng-container *ngIf=\"titleBar.moreLine.layout==='right'\">\n                <ion-buttons slot=\"end\" class=\"end\" (click)=\"moreLine(titleBar.moreLine)\">\n                    <img class=\"header-icon-img-r\" src=\"../../../assets/icon/{{titleBar.moreLine.icon}}\" alt=\"moreLine\">\n                    <!-- <ng-container *ngIf=\"titleBar.cssStyle === 'white' || titleBar.cssStyle === undefined \">\n                        <img class=\"header-icon-img\" src=\"../../../assets/icon/nav_icon_more@3x.png\" alt=\"moreLine\">\n                    </ng-container>\n                    <ng-container *ngIf=\"titleBar.cssStyle === 'orange'\">\n                        <img class=\"header-icon-img\" src=\"../../../assets/icon/nav_icon_more_w@3x.png\" alt=\"moreLine\">\n                    </ng-container> -->\n                </ion-buttons>\n            </ng-container>\n        </ng-container>\n\n        <!-- add  filter btn : -->\n        <ng-container *ngIf=\"titleBar.filter\">\n            <ng-container *ngIf=\"titleBar.filter.layout==='left'\">\n                <ion-buttons slot=\"start\" class=\"start\" (click)=\"filter(titleBar.filter)\">\n                    <img class=\"header-icon-img\" src=\"../../../assets/img/{{titleBar.filter.icon}}\" alt=\"chat\">\n\n                    <!-- <ng-container *ngIf=\"titleBar.cssStyle === 'white' || titleBar.cssStyle === undefined \">\n                        <img class=\"header-icon-img\" src=\"../../../assets/icon/nav_search@3x.png\" alt=\"filter\">\n                    </ng-container>\n                    <ng-container *ngIf=\"titleBar.cssStyle === 'orange'\">\n                        <img class=\"header-icon-img\" src=\"../../../assets/icon/nav_search_white@3x.png\" alt=\"filter\">\n                    </ng-container> -->\n                </ion-buttons>\n            </ng-container>\n\n            <ng-container *ngIf=\"titleBar.filter.layout==='right'\">\n                <ion-buttons slot=\"end\" class=\"end\" (click)=\"filter(titleBar.filter)\">\n                    <img class=\"header-icon-img-r\" src=\"../../../assets/img/{{titleBar.filter.icon}}\" alt=\"chat\">\n\n                    <!-- <ng-container *ngIf=\"titleBar.cssStyle === 'white' || titleBar.cssStyle === undefined \">\n                        <img class=\"header-icon-img\" src=\"../../../assets/icon/nav_search@3x.png\" alt=\"filter\">\n                    </ng-container>\n                    <ng-container *ngIf=\"titleBar.cssStyle === 'orange'\">\n                        <img class=\"header-icon-img\" src=\"../../../assets/icon/nav_search_white@3x.png\" alt=\"filter\">\n                    </ng-container> -->\n                </ion-buttons>\n            </ng-container>\n        </ng-container>\n\n        <!-- textButton 确定 提价表单用的  -->\n        <ng-container *ngIf=\"titleBar.textButton\">\n            <ng-container *ngIf=\"titleBar.textButton.layout==='left'\">\n                <ion-buttons slot=\"start\" class=\"start\" (click)=\"textButton(titleBar.textButton)\">\n                    <span style=\"color: #FF6314;\">{{titleBar.textButton.label}}</span>\n                </ion-buttons>\n            </ng-container>\n            <ng-container *ngIf=\"titleBar.textButton.layout==='right'\">\n                <ion-buttons slot=\"end\" class=\"end\" (click)=\"textButton(titleBar.textButton)\">\n                    <span style=\"color: #FF6314;\">{{titleBar.textButton.label}}</span>\n                </ion-buttons>\n            </ng-container>\n        </ng-container>\n\n        <!-- iconButton 数组形式最终可能是用这个替代所以的图标 btn -->\n        <ng-container *ngIf=\"titleBar.iconButton && titleBar.iconButton.length\">\n            <ng-container *ngFor=\"let item of titleBar.iconButton\">\n                <ng-container *ngIf=\"item.layout==='left'\">\n                    <ion-buttons slot=\"start\" class=\"start\" (click)=\"iconButtonClick(item)\">\n                        <img class=\"header-icon-img\" src=\"../../../assets/icon/{{item.icon}}\" alt=\"iconButton\">\n                        <!-- <ng-container *ngIf=\"titleBar.cssStyle === 'white' || titleBar.cssStyle === undefined \">\n                                        <img class=\"header-icon-img\" src=\"../../../assets/icon/nav_search@3x.png\" alt=\"iconButton\">\n                                    </ng-container>\n                                    <ng-container *ngIf=\"titleBar.cssStyle === 'orange'\">\n                                        <img class=\"header-icon-img\" src=\"../../../assets/icon/nav_search_white@3x.png\" alt=\"iconButton\">\n                                    </ng-container> -->\n                    </ion-buttons>\n                </ng-container>\n\n                <ng-container *ngIf=\"item.layout==='right'\">\n                    <ion-buttons slot=\"end\" class=\"end\" (click)=\"iconButtonClick(item)\">\n                        <img class=\"header-icon-img-r\" src=\"../../../assets/icon/{{item.icon}}\" alt=\"iconButton\">\n                        <!-- <ng-container *ngIf=\"titleBar.cssStyle === 'white' || titleBar.cssStyle === undefined \">\n                                        <img class=\"header-icon-img\" src=\"../../../assets/icon/nav_search@3x.png\" alt=\"iconButton\">\n                                    </ng-container>\n                                    <ng-container *ngIf=\"titleBar.cssStyle === 'orange'\">\n                                        <img class=\"header-icon-img\" src=\"../../../assets/icon/nav_search_white@3x.png\" alt=\"iconButton\">\n                                    </ng-container> -->\n                    </ion-buttons>\n                </ng-container>\n            </ng-container>\n        </ng-container>\n\n        <!-- toggleButton -->\n\n        <ng-container *ngIf=\"titleBar.toggleButton && titleBar.toggleButton.length === 2\">\n            <ion-title>\n                <div class=\"nav-toggle-bg\">\n                    <div class=\"toggle-left\" [ngClass]=\"{'toggle-check': titleBar.toggleButton[0].checked}\"\n                        (click)=\"toggle(titleBar.toggleButton, 0)\">{{titleBar.toggleButton[0].label}}</div>\n                    <div class=\"toggle-right\" [ngClass]=\"{'toggle-check': titleBar.toggleButton[1].checked}\"\n                        (click)=\"toggle(titleBar.toggleButton, 1)\">{{titleBar.toggleButton[1].label}}</div>\n                </div>\n            </ion-title>\n            <!-- todo: -->\n            <!-- <ng-container *ngIf=\"titleBar.textButton.layout==='right'\">\n                        <ion-buttons slot=\"end\" class=\"end\" (click)=\"textButton(titleBar.textButton)\">\n                            <span [ngClass]=\"{'button-orange': titleBar.cssStyle === 'orange','button-white': titleBar.cssStyle === 'white'}\">{{titleBar.textButton.label}}</span>\n                        </ion-buttons>\n                    </ng-container> -->\n        </ng-container>\n        <!-- add  share btn-->\n        <ng-container *ngIf=\"titleBar.share\">\n            <ng-container *ngIf=\"titleBar.share.layout==='left'\">\n                <ion-buttons slot=\"start\" class=\"start\" (click)=\"share(titleBar.share.link)\">\n                    <ng-container *ngIf=\"titleBar.cssStyle === 'white' || titleBar.cssStyle === undefined \">\n                        <img class=\"header-icon-img\" src=\"../../../assets/icon/nav_icon_share@3x.png\" alt=\"share\">\n                    </ng-container>\n                    <ng-container *ngIf=\"titleBar.cssStyle === 'orange'\">\n                        <img class=\"header-icon-img\" src=\"../../../assets/icon/nav_icon_share_white@3x.png\" alt=\"share\">\n                    </ng-container>\n                </ion-buttons>\n            </ng-container>\n\n            <ng-container *ngIf=\"titleBar.share.layout==='right'\">\n                <ion-buttons slot=\"end\" class=\"end\" (click)=\"share(titleBar.share.link)\">\n                    <ng-container *ngIf=\"titleBar.cssStyle === 'white' || titleBar.cssStyle === undefined \">\n                        <img class=\"header-icon-img-r\" src=\"../../../assets/icon/nav_icon_share@3x.png\" alt=\"share\">\n                    </ng-container>\n                    <ng-container *ngIf=\"titleBar.cssStyle === 'orange'\">\n                        <img class=\"header-icon-img-r\" src=\"../../../assets/icon/nav_icon_share_white@3x.png\"\n                            alt=\"share\">\n                    </ng-container>\n                </ion-buttons>\n            </ng-container>\n        </ng-container>\n\n        <!-- add  favorite btn-->\n        <ng-container *ngIf=\"titleBar.favorite\">\n            <ng-container *ngIf=\"titleBar.favorite.layout==='left'\">\n                <ion-buttons slot=\"start\" class=\"start\" (click)=\"favorite(titleBar.favorite.submit)\">\n                    <ng-container *ngIf=\"titleBar.cssStyle === 'white' || titleBar.cssStyle === undefined \">\n                        <ng-container *ngIf=\"titleBar.favorite.icon === 'unfavorite'\">\n                            <img class=\"header-icon-img\" src=\"../../../assets/icon/nav_icon_collection_normal@3x.png\"\n                                alt=\"favorite\">\n                        </ng-container>\n                    </ng-container>\n                    <ng-container *ngIf=\"titleBar.cssStyle === 'orange'\">\n                        <ng-container *ngIf=\"titleBar.favorite.icon === 'unfavorite'\">\n                            <img class=\"header-icon-img\" src=\"../../../assets/icon/nav_icon_collection_white_nor@3x.png\"\n                                alt=\"favorite\">\n                        </ng-container>\n                    </ng-container>\n                    <ng-container *ngIf=\"titleBar.favorite.icon === 'favorite'\">\n                        <img class=\"header-icon-img\" src=\"../../../assets/icon/nav_icon_collection_pre@3x.png\"\n                            alt=\"favorite\">\n                    </ng-container>\n                </ion-buttons>\n            </ng-container>\n\n            <ng-container *ngIf=\" titleBar.favorite.layout==='right'\">\n                <ion-buttons slot=\"end\" class=\"end\" (click)=\"favorite(titleBar.favorite.submit)\">\n                    <ng-container *ngIf=\"titleBar.cssStyle === 'white' || titleBar.cssStyle === undefined \">\n                        <ng-container *ngIf=\"titleBar.favorite.icon === 'unfavorite'\">\n                            <img class=\"header-icon-img-r\" src=\"../../../assets/icon/nav_icon_collection_normal@3x.png\"\n                                alt=\"favorite\">\n                        </ng-container>\n                    </ng-container>\n                    <ng-container *ngIf=\"titleBar.cssStyle === 'orange'\">\n                        <ng-container *ngIf=\"titleBar.favorite.icon === 'unfavorite'\">\n                            <img class=\"header-icon-img-r\"\n                                src=\"../../../assets/icon/nav_icon_collection_white_nor@3x.png\" alt=\"favorite\">\n                        </ng-container>\n                    </ng-container>\n                    <ng-container *ngIf=\"titleBar.favorite.icon === 'favorite'\">\n                        <img class=\"header-icon-img-r\" src=\"../../../assets/icon/nav_icon_collection_pre@3x.png\"\n                            alt=\"favorite\">\n                    </ng-container>\n                </ion-buttons>\n            </ng-container>\n        </ng-container>\n\n        <ng-container *ngIf=\"titleBar.cancel\">\n            <ng-container *ngIf=\"titleBar.cancel.layout==='left'\">\n                <ion-buttons slot=\"start\" class=\"start\" (click)=\"back()\">\n                    <span\n                        [ngClass]=\"{'button-orange': titleBar.cssStyle === 'orange','button-white': titleBar.cssStyle === 'white'}\">{{titleBar.cancel.labelName}}</span>\n                </ion-buttons>\n            </ng-container>\n            <ng-container *ngIf=\"titleBar.cancel.layout==='right'\">\n                <ion-buttons slot=\"end\" class=\"end\" (click)=\"back()\">\n                    <span\n                        [ngClass]=\"{'button-orange': titleBar.cssStyle === 'orange','button-white': titleBar.cssStyle === 'white'}\">{{titleBar.cancel.labelName}}</span>\n                </ion-buttons>\n            </ng-container>\n        </ng-container>\n\n        <ng-container *ngIf=\"titleBar.close\">\n            <ng-container *ngIf=\"titleBar.close.layout==='left'\">\n                <ion-buttons slot=\"start\" class=\"start\" (click)=\"close()\">\n                    <img class=\"header-icon-img\" src=\"../../../assets/img/close.png\" alt=\"back\">\n                </ion-buttons>\n            </ng-container>\n            <ng-container *ngIf=\"titleBar.close.layout==='right'\">\n                <ion-buttons slot=\"end\" class=\"end\" (click)=\"close()\">\n                    <img class=\"header-icon-img-r\" src=\"../../../assets/img/close.png\" alt=\"back\">\n                </ion-buttons>\n            </ng-container>\n        </ng-container>\n\n        <ng-container *ngIf=\"titleBar.discounts\">\n            <ng-container *ngIf=\"titleBar.discounts.layout==='left'\">\n                <ion-buttons slot=\"start\" class=\"start\" (click)=\"buttonClick(titleBar.discounts.link)\">\n                    <img class=\"header-icon-img\" src=\"../../../assets/img/activity@3x.png\" alt=\"discounts\">\n                </ion-buttons>\n            </ng-container>\n            <ng-container *ngIf=\"titleBar.discounts.layout==='right'\">\n                <ion-buttons slot=\"end\" class=\"end\" (click)=\"buttonClick(titleBar.discounts.link)\">\n                    <img class=\"header-icon-img-r\" src=\"../../../assets/img/activity@3x.png\" alt=\"discounts\">\n                </ion-buttons>\n            </ng-container>\n        </ng-container>\n    </ion-toolbar>\n    <ion-toolbar *ngIf=\"showTopTab\" style=\"--padding-bottom:0px;padding-left: 0px;padding-right: 0px;\" id=\"homeTopTab\">\n        <!-- <ul class=\"ulTopTab\">\n            <li *ngFor=\"let item of tagData.data;let i=index;\" id=\"homeNavTab{{i}}\"\n                [ngClass]=\"{'active': tagData.currentTab === item.indexTab}\" [ngStyle]=\"{'width': aWidth}\"\n                (click)=\"change(item,item.indexTab)\">\n                <span>{{item.label}}</span>\n            </li>\n        </ul> -->\n        <div id=\"HometopSegment\">\n            <ion-segment #segment (ionChange)=\"segmentChanged($event)\" [(ngModel)]=\"selectedSegment\"\n                [scrollable]=\"true\">\n                <ion-segment-button *ngFor=\"let item of tagData.data;let i=index;\" [value]=\"i\">\n                    <span>{{item.label}}</span>\n                    <div class=\"bar\"></div>\n                </ion-segment-button>\n            </ion-segment>\n        </div>\n        <hr style=\"width: 100%;height: 0.04rem;background-color: #EBEBED;\">\n    </ion-toolbar>\n    <ion-toolbar *ngIf=\"showSubTab\" style=\"--padding-bottom:0px;padding-left: 0px;padding-right: 0px;\">\n        <ng-container *ngIf=\"subTagData.cssType===2\">\n            <!-- <li *ngFor=\"let item of subTagData.data;let i=index;\" id=\"fixedNavTab{{i}}\"\n                [ngClass]=\"{'active': subTagData.currentTab === item.indexTab,'li-margin':i===0}\" class=\"li-cssType2\"\n                (click)=\"subChange(item,item.indexTab)\">\n                <span id=\"fixedSpanNavTab{{i}}\">{{item.label}}</span>\n            </li> -->\n            <div id=\"homeTopCssType2Segment\">\n                <ion-segment #segment (ionChange)=\"customSegmentChanged($event)\" [(ngModel)]=\"selectedSegment\"\n                    [scrollable]=\"true\">\n                    <ion-segment-button *ngFor=\"let item of subTagData.data;let i=index;\" [value]=\"i\">\n                        <span>{{item.label}}</span>\n                        <div class=\"bar\"></div>\n                    </ion-segment-button>\n                </ion-segment>\n            </div>\n        </ng-container>\n        <ng-container *ngIf=\"subTagData.cssType!==2\">\n            <ul class=\"ulTopTab\">\n                <li *ngFor=\"let item of subTagData.data;let i=index;\" id=\"fixedNavTab{{i}}\"\n                    [ngClass]=\"{'active': subTagData.currentTab === item.indexTab}\" [ngStyle]=\"{'width': subAWidth}\"\n                    (click)=\"subChange(item,item.indexTab)\">\n                    <span id=\"fixedSpanNavTab{{i}}\">{{item.label}}</span>\n                </li>\n            </ul>\n            <hr *ngIf=\"subTagData.isShowLine===true\" style=\"width: 100%;height: 0.04rem;background-color: #EBEBED;\">\n        </ng-container>\n    </ion-toolbar>\n\n    <!-- <ion-toolbar *ngIf=\"showCustomTopTab\" style=\"--padding-bottom:0px;padding-left: 0px;padding-right: 0px;\"\n        id=\"customTopTab\">\n        <div id=\"CustomTopSegment\">\n            <ion-segment #custSegment (ionChange)=\"customSegmentChanged($event)\" [(ngModel)]=\"selectedCustomSegment\"\n                [scrollable]=\"true\">\n                <ion-segment-button style=\"font-size: 1rem !important;\"\n                    *ngFor=\"let item of custTabTagData.data;let i=index;\" [value]=\"i\">\n                    <span>{{item.label}}</span>\n                    <div class=\"bar\"></div>\n                </ion-segment-button>\n            </ion-segment>\n        </div>    \n    </ion-toolbar> -->\n\n\n\n\n    <app-header-coms *ngIf=\"headerComs\" [coms]=\"headerComs\"></app-header-coms>\n</ion-header>\n<ion-content force-overscroll=\"true\" overflow-scroll=“true” has-bouncing=\"true\" [scrollEvents]=\"true\" id=\"superCotainer\"\n    #superCotainer (ionScroll)=\"onScroll($event)\"\n    [ngClass]=\"{'gray-bg': isGrayBg,'white-bg': !isGrayBg ,'bg-image':showWaterImg}\">\n    <!-- 全局下拉刷新 height设置为2*60 原因是他们有个背景差，bug-view-4350.html -->\n    <ion-refresher *ngIf=\"showRefresher === true \" style=\"height: 120px;\" slot=\"fixed\" pullFactor=\"0.5\" pullMin=\"60\"\n        pullMax=\"120\" (ionRefresh)=\"refreshData($event)\">\n        <ion-refresher-content [ngStyle]=\"{'background':isGrayBg?'#F7F8FA':'#FFF'}\" pullingIcon=\"\" pullingText=\"\"\n            refreshingSpinner=\"crescent\" refreshingText=\"\">\n        </ion-refresher-content>\n    </ion-refresher>\n    <app-coms *ngIf=\"coms&&!showRefresh\" [coms]=\"coms\"></app-coms>\n    <app-second *ngIf=\"subComs&&!showRefresh\" [subComs]=\"subComs\"></app-second>\n    <ion-backdrop *ngIf=\"!showRefresh\" style=\"opacity:0.3; height:100000px;\" id=\"main-backdrop\"\n        (ionBackdropTap)=\"backdropclick()\" [tappable]=\"appGlobalService.openBackdrop\" [visible]=\"true\"\n        [stopPropagation]=\"appGlobalService.openBackdrop\" [ngClass]=\"{'showDrop': !appGlobalService.openBackdrop}\">\n    </ion-backdrop>\n    <ng-container *ngIf=\"showRefresh\">\n        <img class=\"empty-img\" src=\" ../../../assets/icon/empty_no@3x.png\" alt=\"\">\n        <p *ngIf=\"!netState\" class=\"empty-title\">网络繁忙</p>\n        <p *ngIf=\"!netState\" class=\"empty-sub-title\">别紧张，试试看刷新页面</p>\n        <p *ngIf=\"netState === 'No network connection'\" class=\"empty-title\">无网络连接</p>\n        <p *ngIf=\"netState === 'No network connection'\" class=\"empty-sub-title\">请检查网络设置</p>\n        <button class=\"empty-btn\" (click)=\"refreshPage()\">刷新</button>\n    </ng-container>\n    <!-- <ion-infinite-scroll *ngIf=\"showLoading === true \" id=\"home-view-infinite\" threshold=\"1%\"\n        (ionInfinite)=\"loadData($event)\">\n        <ion-infinite-scroll-content loadingSpinner=\"\" loadingText=\"\">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll> -->\n</ion-content>\n<ion-footer *ngIf=\"footerComs&&footerComs.length>0\" [ngClass]=\"{'bg-image':showWaterImg}\">\n    <app-footer-coms [coms]=\"footerComs\"></app-footer-coms>\n</ion-footer>"

/***/ }),

/***/ "./src/app/route/entry/entry.page.scss":
/*!*********************************************!*\
  !*** ./src/app/route/entry/entry.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-searchbar {\n  --background: #f2f3f5;\n  --placeholder-font-style: 0.81rem; }\n\nion-toolbar:last-child {\n  --border-width: 0 0 0; }\n\n.header-orange {\n  background: linear-gradient(90deg, #ff9500 0%, #ff6314 100%); }\n\n.header-white {\n  background: white; }\n\nion-header .nav-title {\n  height: 3rem;\n  color: #27282e;\n  font-size: 1.13rem;\n  font-weight: bold; }\n\nion-header .nav-title.nav-position span {\n  max-width: 3.6rem;\n  font-size: 0.88rem;\n  color: #27282e;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  line-height: 1rem;\n  display: inline-block;\n  font-weight: normal; }\n\nion-header ion-toolbar {\n  --background: #fff;\n  padding-left: 20px;\n  padding-right: 20px; }\n\nion-header ion-toolbar ul {\n    background: #fff;\n    box-shadow: 0 0 0 0 #ebebed;\n    margin-bottom: 1px;\n    width: 100%;\n    z-index: 16; }\n\nion-header ion-toolbar ul li {\n      display: inline-block;\n      font-size: 0.88rem;\n      color: #858894;\n      text-align: center;\n      height: 2.75rem;\n      line-height: 2.75rem; }\n\nion-header ion-toolbar ul li.active {\n      color: #27282e;\n      font-weight: bold; }\n\nion-header ion-toolbar ul li.active:after {\n        content: \"\";\n        height: 3px;\n        display: block;\n        width: 1.76rem;\n        margin: 0 auto;\n        margin-top: -3px;\n        background-image: linear-gradient(-90deg, #ff6314 0%, #ff9500 100%);\n        border-radius: 1.5px; }\n\nion-header ion-toolbar .toolbar-title {\n    color: white; }\n\nion-header ion-toolbar .title-white {\n    --background: #fff;\n    color: #27282e; }\n\nion-header .triangle-icon {\n  display: inline-block;\n  border-top: 0.25rem solid #27282e;\n  border-left: 0.2rem solid transparent;\n  border-bottom: 0.2rem solid transparent;\n  border-right: 0.2rem solid transparent;\n  margin-left: 5px;\n  margin-top: 5px; }\n\nion-header ion-buttons {\n  height: 2.75rem;\n  min-width: 2.75rem; }\n\nion-header ion-buttons span {\n    font-size: 1rem;\n    color: #27282e;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis; }\n\nion-header ion-buttons .button-orange {\n    color: white; }\n\nion-header ion-buttons .button-white {\n    color: #27282e; }\n\nion-header .end {\n  justify-content: flex-end; }\n\nion-header .search-bar {\n  padding-left: 1.25rem;\n  height: 2.19rem;\n  font-size: 0.81rem;\n  pointer-events: none; }\n\nion-header ion-searchbar.search-bar.search-bar-orange {\n  position: relative;\n  --background: rgba(242, 243, 245, 0.3);\n  color: white;\n  --placeholder-opacity: 1;\n  --icon-color: rgba(255, 255, 255, 1);\n  font-size: 0.81rem; }\n\nion-header .searchbar-search-icon.sc-ion-searchbar-ios {\n  margin-left: calc(50% - 60px);\n  left: 5px;\n  top: 0;\n  padding: 200px;\n  position: absolute;\n  width: 1rem !important;\n  height: 100%;\n  contain: strict; }\n\nion-header ion-searchbar {\n  padding: 0;\n  height: 2rem; }\n\nion-header .title-orange {\n  --background: linear-gradient(90deg, rgba(255, 149, 0, 1) 0%, rgba(255, 99, 20, 1) 100%); }\n\nion-header .title-orange .nav-title {\n    color: white; }\n\nion-header .title-orange .nav-title .triangle-icon {\n    color: white;\n    display: inline-block;\n    border-top: 0.25rem solid white;\n    border-left: 0.2rem solid transparent;\n    border-bottom: 0.2rem solid transparent;\n    border-right: 0.2rem solid transparent;\n    margin-left: 5px;\n    margin-top: 5px;\n    font-size: 0.25rem; }\n\nion-header .title-orange .nav-title span {\n    color: white; }\n\nion-header .toolbar-title {\n  color: white; }\n\nion-header .title-white {\n  --background: #fff;\n  color: #27282e; }\n\nion-header .bottom-line {\n  --border-width: 0 0 0.03rem 0 !important;\n  box-shadow: 0 0.03rem 0 0 #ebebed !important; }\n\n.triangle-icon {\n  display: inline-block;\n  border-top: 0.25rem solid #27282e;\n  border-left: 0.2rem solid transparent;\n  border-bottom: 0.2rem solid transparent;\n  border-right: 0.2rem solid transparent;\n  margin-left: 5px;\n  margin-top: 5px;\n  font-size: 0.25rem;\n  color: #27282e; }\n\nion-buttons span {\n  font-size: 1rem;\n  color: #27282e;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis; }\n\nion-buttons .button-orange {\n  color: white; }\n\nion-buttons .button-white {\n  color: #27282e; }\n\n.tabbar {\n  background-color: white;\n  background: white; }\n\n@supports (bottom: env(safe-area-inset-bottom)) {\n  .tabbar,\n  ion-footer {\n    padding-bottom: env(safe-area-inset-bottom); } }\n\n@supports (bottom: constant(safe-area-inset-bottom)) {\n  .tabbar,\n  ion-footer {\n    padding-bottom: constant(safe-area-inset-bottom); } }\n\n@media screen and (max-width: 340px) {\n  ion-toolbar {\n    padding-left: 2% !important;\n    padding-right: 2% !important; } }\n\n.nav-toggle-bg {\n  width: 6.25rem;\n  height: 1.38rem;\n  background: white;\n  border-radius: 0.69rem;\n  border: 0.06rem solid #ff6314;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.toggle-left {\n  flex: 1;\n  height: 100%;\n  font-size: 0.75rem;\n  color: #ff6314;\n  line-height: 1.38rem;\n  background: #ffffff;\n  border-radius: 0.69rem; }\n\n.toggle-right {\n  flex: 1;\n  height: 100%;\n  font-size: 0.75rem;\n  color: #ff6314;\n  line-height: 1.38rem;\n  background: #ffffff;\n  border-radius: 0.69rem; }\n\n.toggle-left.toggle-check,\n.toggle-right.toggle-check {\n  background: linear-gradient(270deg, #ff6314 0%, #ff9500 100%);\n  border-radius: 0.69rem;\n  color: #ffffff; }\n\n.surebutton-orange {\n  color: #ff6314; }\n\n.isHide {\n  opacity: 0;\n  transition: all 0.25s ease-out; }\n\n.isShow {\n  opacity: 1;\n  transition: all 0.25s ease-in; }\n\n.header-icon-img {\n  margin-left: -4px; }\n\n.spanBadge:after {\n  content: \"\";\n  width: 0.5rem;\n  height: 0.5rem;\n  background: #ff6314;\n  border-radius: 50%;\n  top: 0.5rem; }\n\n@supports (top: env(safe-area-inset-top)) {\n  .isHeight {\n    height: env(safe-area-inset-top); } }\n\n@supports (top: constant(safe-area-inset-top)) {\n  .isHeight {\n    height: constant(safe-area-inset-top); } }\n\n.showDrop {\n  display: none; }\n\n.empty-img {\n  width: 11.25rem;\n  height: 9.56rem;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 23.76%; }\n\n.empty-title {\n  height: 1rem;\n  font-size: 1rem;\n  color: #333333;\n  line-height: 1rem;\n  margin-bottom: 0.63rem;\n  margin-top: 1.88rem;\n  text-align: center; }\n\n.empty-sub-title {\n  height: 0.75rem;\n  font-size: 0.75rem;\n  color: #858894;\n  line-height: 0.75rem;\n  margin-bottom: 1.25rem;\n  text-align: center; }\n\n.empty-btn {\n  width: 5.63rem;\n  height: 2rem;\n  background: linear-gradient(86deg, #ff9500 0%, #ff6314 100%);\n  border-radius: 1.09rem;\n  text-align: center;\n  font-size: 0.81rem;\n  color: white;\n  margin-left: auto;\n  margin-right: auto;\n  display: block; }\n\n#homeTopCssType2Segment {\n  transform: all 0.5s;\n  display: flex;\n  background: white; }\n\nion-segment {\n  --color-checked: black;\n  height: 2.75rem;\n  position: relative;\n  flex: 8;\n  justify-content: flex-start !important; }\n\nion-segment-button {\n  background-color: white;\n  text-transform: none !important;\n  color: #858894 !important;\n  font-size: 1rem !important; }\n\n.ios ion-segment-button {\n  border: 0; }\n\nion-segment-button.segment-button-checked {\n  background-color: white !important;\n  font-size: 1.25rem !important;\n  font-weight: bold;\n  color: #27282e !important; }\n\nion-segment-button.segment-button-checked .bar {\n    width: 1.63rem;\n    height: 0.19rem;\n    background: linear-gradient(90deg, #ff9500 0%, #ff6314 100%);\n    border-radius: 0.09rem;\n    position: absolute;\n    bottom: 0; }\n\nion-segment-button span {\n  display: block;\n  margin-bottom: 0.3125rem;\n  margin-left: 0.625rem;\n  margin-right: 0.625rem; }\n\nion-segment-button:first-child span {\n  margin-left: 1.25rem; }\n\n.li-cssType2 {\n  margin-left: 0.625rem;\n  margin-right: 0.625rem; }\n\n.li-margin {\n  margin-left: 1.25rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXNvbmhlL25ld01ldGFEYXRhQXBwMy9zcmMvYXBwL3JvdXRlL2VudHJ5L2VudHJ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFhO0VBQ2IsaUNBQXlCLEVBQUE7O0FBRTNCO0VBQ0UscUJBQWUsRUFBQTs7QUFHakI7RUFDRSw0REFBc0YsRUFBQTs7QUFFeEY7RUFDRSxpQkFBaUIsRUFBQTs7QUFFbkI7RUFFSSxZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTs7QUFMckI7RUFXTSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLG1CQUFtQixFQUFBOztBQW5CekI7RUF3Qkksa0JBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBMUJ2QjtJQTRCTSxnQkFBZ0I7SUFDaEIsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVyxFQUFBOztBQWhDakI7TUFrQ1EscUJBQXFCO01BQ3JCLGtCQUFrQjtNQUNsQixjQUFjO01BQ2Qsa0JBQWtCO01BQ2xCLGVBQWU7TUFDZixvQkFBb0IsRUFBQTs7QUF2QzVCO01BMkNRLGNBQWM7TUFDZCxpQkFBaUIsRUFBQTs7QUE1Q3pCO1FBOENVLFdBQVc7UUFDWCxXQUFXO1FBQ1gsY0FBYztRQUNkLGNBQWM7UUFDZCxjQUFjO1FBQ2QsZ0JBQWdCO1FBQ2hCLG1FQUFtRTtRQUNuRSxvQkFBb0IsRUFBQTs7QUFyRDlCO0lBMERNLFlBQVksRUFBQTs7QUExRGxCO0lBNkRNLGtCQUFhO0lBQ2IsY0FBYyxFQUFBOztBQTlEcEI7RUFrRUkscUJBQXFCO0VBQ3JCLGlDQUFpQztFQUNqQyxxQ0FBcUM7RUFDckMsdUNBQXVDO0VBQ3ZDLHNDQUFzQztFQUN0QyxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBOztBQXhFbkI7RUEyRUksZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQTVFdEI7SUE4RU0sZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHVCQUF1QixFQUFBOztBQWxGN0I7SUFzRk0sWUFBWSxFQUFBOztBQXRGbEI7SUF5Rk0sY0FBYyxFQUFBOztBQXpGcEI7RUErRkkseUJBQXlCLEVBQUE7O0FBL0Y3QjtFQW1HSSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixvQkFBb0IsRUFBQTs7QUF0R3hCO0VBeUdJLGtCQUFrQjtFQUNsQixzQ0FBYTtFQUNiLFlBQVk7RUFDWix3QkFBc0I7RUFDdEIsb0NBQWE7RUFDYixrQkFBa0IsRUFBQTs7QUE5R3RCO0VBa0hJLDZCQUE2QjtFQUM3QixTQUFTO0VBQ1QsTUFBTTtFQUNOLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBekhuQjtFQTRISSxVQUFVO0VBQ1YsWUFBWSxFQUFBOztBQTdIaEI7RUFnSUksd0ZBQWEsRUFBQTs7QUFoSWpCO0lBa0lNLFlBQVksRUFBQTs7QUFsSWxCO0lBcUlNLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsK0JBQStCO0lBQy9CLHFDQUFxQztJQUNyQyx1Q0FBdUM7SUFDdkMsc0NBQXNDO0lBQ3RDLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCLEVBQUE7O0FBN0l4QjtJQWdKTSxZQUFZLEVBQUE7O0FBaEpsQjtFQW9KSSxZQUFZLEVBQUE7O0FBcEpoQjtFQXVKSSxrQkFBYTtFQUNiLGNBQWMsRUFBQTs7QUF4SmxCO0VBMkpJLHdDQUFlO0VBQ2YsNENBQTRDLEVBQUE7O0FBR2hEO0VBQ0UscUJBQXFCO0VBQ3JCLGlDQUFpQztFQUNqQyxxQ0FBcUM7RUFDckMsdUNBQXVDO0VBQ3ZDLHNDQUFzQztFQUN0QyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixjQUFjLEVBQUE7O0FBRWhCO0VBRUksZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHVCQUF1QixFQUFBOztBQU4zQjtFQVNJLFlBQVksRUFBQTs7QUFUaEI7RUFZSSxjQUFjLEVBQUE7O0FBSWxCO0VBQ0UsdUJBQXVCO0VBQ3ZCLGlCQUFpQixFQUFBOztBQUc0QjtFQUM3Qzs7SUFFRSwyQ0FBMkMsRUFBQSxFQUM1Qzs7QUFFaUQ7RUFDbEQ7O0lBRUUsZ0RBQWdELEVBQUEsRUFDakQ7O0FBR0g7RUFDRTtJQUNFLDJCQUEyQjtJQUMzQiw0QkFBNEIsRUFBQSxFQUM3Qjs7QUFHSDtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWtDO0VBQ2xDLHNCQUFzQjtFQUN0Qiw2QkFBMEM7RUFDMUMsY0FBYztFQUNkLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsT0FBTztFQUNQLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsc0JBQXNCLEVBQUE7O0FBRXhCO0VBQ0UsT0FBTztFQUNQLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsc0JBQXNCLEVBQUE7O0FBR3hCOztFQUVFLDZEQUF1RjtFQUN2RixzQkFBc0I7RUFDdEIsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxVQUFVO0VBR1YsOEJBQThCLEVBQUE7O0FBRWhDO0VBQ0UsVUFBVTtFQUdWLDZCQUE2QixFQUFBOztBQUUvQjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVyxFQUFBOztBQUk0QjtFQUN2QztJQUNFLGdDQUFnQyxFQUFBLEVBQ2pDOztBQUUyQztFQUM1QztJQUNFLHFDQUFxQyxFQUFBLEVBQ3RDOztBQUVIO0VBQ0UsYUFBYSxFQUFBOztBQUdmO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGNBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0FBNkI7RUFDN0Isb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLDREQUFzRjtFQUN0RixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLHNCQUFnQjtFQUNoQixlQUFlO0VBSWYsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxzQ0FBc0MsRUFBQTs7QUFHeEM7RUFFRSx1QkFBd0M7RUFDeEMsK0JBQStCO0VBQy9CLHlCQUF3QztFQUN4QywwQkFBMEIsRUFBQTs7QUFHNUI7RUFDRSxTQUFTLEVBQUE7O0FBR1g7RUFDRSxrQ0FBbUQ7RUFDbkQsNkJBQTZCO0VBRTdCLGlCQUFpQjtFQUNqQix5QkFBcUMsRUFBQTs7QUFMdkM7SUFRSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLDREQUFzRjtJQUN0RixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFNBQVMsRUFBQTs7QUFJYjtFQUNFLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLG9CQUFvQixFQUFBOztBQUd0QjtFQUNFLHFCQUFxQjtFQUNyQixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxvQkFBb0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3JvdXRlL2VudHJ5L2VudHJ5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zZWFyY2hiYXIge1xuICAtLWJhY2tncm91bmQ6ICNmMmYzZjU7XG4gIC0tcGxhY2Vob2xkZXItZm9udC1zdHlsZTogMC44MXJlbTtcbn1cbmlvbi10b29sYmFyOmxhc3QtY2hpbGQge1xuICAtLWJvcmRlci13aWR0aDogMCAwIDA7XG59XG4vLyDpgILphY1pcGhvbmUxMVxuLmhlYWRlci1vcmFuZ2Uge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjU1LCAxNDksIDAsIDEpIDAlLCByZ2JhKDI1NSwgOTksIDIwLCAxKSAxMDAlKTtcbn1cbi5oZWFkZXItd2hpdGUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbmlvbi1oZWFkZXIge1xuICAubmF2LXRpdGxlIHtcbiAgICBoZWlnaHQ6IDNyZW07XG4gICAgY29sb3I6ICMyNzI4MmU7XG4gICAgZm9udC1zaXplOiAxLjEzcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIC8vICM1NTA6IOagh+mimOacquWvuem9kO+8jOWIoOmZpHBhZGRpbmdcbiAgICAvLyBwYWRkaW5nLXRvcDogN3B4O1xuICB9XG4gIC5uYXYtdGl0bGUubmF2LXBvc2l0aW9uIHtcbiAgICBzcGFuIHtcbiAgICAgIG1heC13aWR0aDogMy42cmVtO1xuICAgICAgZm9udC1zaXplOiAwLjg4cmVtO1xuICAgICAgY29sb3I6ICMyNzI4MmU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIH1cbiAgfVxuXG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgdWwge1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgI2ViZWJlZDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDFweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgei1pbmRleDogMTY7XG4gICAgICBsaSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAwLjg4cmVtO1xuICAgICAgICBjb2xvcjogIzg1ODg5NDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDIuNzVyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyLjc1cmVtO1xuICAgICAgfVxuXG4gICAgICBsaS5hY3RpdmUge1xuICAgICAgICBjb2xvcjogIzI3MjgyZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgaGVpZ2h0OiAzcHg7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDEuNzZyZW07XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTNweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCAjZmY2MzE0IDAlLCAjZmY5NTAwIDEwMCUpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEuNXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC50b29sYmFyLXRpdGxlIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgLnRpdGxlLXdoaXRlIHtcbiAgICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIGNvbG9yOiAjMjcyODJlO1xuICAgIH1cbiAgfVxuICAudHJpYW5nbGUtaWNvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci10b3A6IDAuMjVyZW0gc29saWQgIzI3MjgyZTtcbiAgICBib3JkZXItbGVmdDogMC4ycmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206IDAuMnJlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6IDAuMnJlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgfVxuICBpb24tYnV0dG9ucyB7XG4gICAgaGVpZ2h0OiAyLjc1cmVtO1xuICAgIG1pbi13aWR0aDogMi43NXJlbTtcbiAgICBzcGFuIHtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIGNvbG9yOiAjMjcyODJlO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIC8vIG1heC13aWR0aDogMzVweDtcbiAgICB9XG4gICAgLmJ1dHRvbi1vcmFuZ2Uge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICAuYnV0dG9uLXdoaXRlIHtcbiAgICAgIGNvbG9yOiAjMjcyODJlO1xuICAgIH1cbiAgfVxuICAuc3RhcnQge1xuICB9XG4gIC5lbmQge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIH1cbiAgLnNlYXJjaC1iYXIge1xuICAgIC8vIHBhZGRpbmctcmlnaHQ6IDEuMjVyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xuICAgIGhlaWdodDogMi4xOXJlbTtcbiAgICBmb250LXNpemU6IDAuODFyZW07XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgaW9uLXNlYXJjaGJhci5zZWFyY2gtYmFyLnNlYXJjaC1iYXItb3JhbmdlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI0MiwgMjQzLCAyNDUsIDAuMyk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbiAgICAtLWljb24tY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgZm9udC1zaXplOiAwLjgxcmVtO1xuICB9XG5cbiAgLnNlYXJjaGJhci1zZWFyY2gtaWNvbi5zYy1pb24tc2VhcmNoYmFyLWlvcyB7XG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoNTAlIC0gNjBweCk7XG4gICAgbGVmdDogNXB4O1xuICAgIHRvcDogMDtcbiAgICBwYWRkaW5nOiAyMDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDFyZW0gIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgY29udGFpbjogc3RyaWN0O1xuICB9XG4gIGlvbi1zZWFyY2hiYXIge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgaGVpZ2h0OiAycmVtO1xuICB9XG4gIC50aXRsZS1vcmFuZ2Uge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1NSwgMTQ5LCAwLCAxKSAwJSwgcmdiYSgyNTUsIDk5LCAyMCwgMSkgMTAwJSk7XG4gICAgLm5hdi10aXRsZSB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIC5uYXYtdGl0bGUgLnRyaWFuZ2xlLWljb24ge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgYm9yZGVyLXRvcDogMC4yNXJlbSBzb2xpZCB3aGl0ZTtcbiAgICAgIGJvcmRlci1sZWZ0OiAwLjJyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItYm90dG9tOiAwLjJyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItcmlnaHQ6IDAuMnJlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICBmb250LXNpemU6IDAuMjVyZW07XG4gICAgfVxuICAgIC5uYXYtdGl0bGUgc3BhbiB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICB9XG4gIC50b29sYmFyLXRpdGxlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgLnRpdGxlLXdoaXRlIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gICAgY29sb3I6ICMyNzI4MmU7XG4gIH1cbiAgLmJvdHRvbS1saW5lIHtcbiAgICAtLWJvcmRlci13aWR0aDogMCAwIDAuMDNyZW0gMCAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IDAgMC4wM3JlbSAwIDAgI2ViZWJlZCAhaW1wb3J0YW50O1xuICB9XG59XG4udHJpYW5nbGUtaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXRvcDogMC4yNXJlbSBzb2xpZCAjMjcyODJlO1xuICBib3JkZXItbGVmdDogMC4ycmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAwLjJyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogMC4ycmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMC4yNXJlbTtcbiAgY29sb3I6ICMyNzI4MmU7XG59XG5pb24tYnV0dG9ucyB7XG4gIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogIzI3MjgyZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIH1cbiAgLmJ1dHRvbi1vcmFuZ2Uge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuYnV0dG9uLXdoaXRlIHtcbiAgICBjb2xvcjogIzI3MjgyZTtcbiAgfVxufVxuXG4udGFiYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG5Ac3VwcG9ydHMgKGJvdHRvbTogZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pKSB7XG4gIC50YWJiYXIsXG4gIGlvbi1mb290ZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7XG4gIH1cbn1cbkBzdXBwb3J0cyAoYm90dG9tOiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtYm90dG9tKSkge1xuICAudGFiYmFyLFxuICBpb24tZm9vdGVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzQwcHgpIHtcbiAgaW9uLXRvb2xiYXIge1xuICAgIHBhZGRpbmctbGVmdDogMiUgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyJSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5uYXYtdG9nZ2xlLWJnIHtcbiAgd2lkdGg6IDYuMjVyZW07XG4gIGhlaWdodDogMS4zOHJlbTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgYm9yZGVyLXJhZGl1czogMC42OXJlbTtcbiAgYm9yZGVyOiAwLjA2cmVtIHNvbGlkIHJnYmEoMjU1LCA5OSwgMjAsIDEpO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50b2dnbGUtbGVmdCB7XG4gIGZsZXg6IDE7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBjb2xvcjogI2ZmNjMxNDtcbiAgbGluZS1oZWlnaHQ6IDEuMzhyZW07XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDAuNjlyZW07XG59XG4udG9nZ2xlLXJpZ2h0IHtcbiAgZmxleDogMTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGNvbG9yOiAjZmY2MzE0O1xuICBsaW5lLWhlaWdodDogMS4zOHJlbTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMC42OXJlbTtcbn1cblxuLnRvZ2dsZS1sZWZ0LnRvZ2dsZS1jaGVjayxcbi50b2dnbGUtcmlnaHQudG9nZ2xlLWNoZWNrIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgcmdiYSgyNTUsIDk5LCAyMCwgMSkgMCUsIHJnYmEoMjU1LCAxNDksIDAsIDEpIDEwMCUpO1xuICBib3JkZXItcmFkaXVzOiAwLjY5cmVtO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5zdXJlYnV0dG9uLW9yYW5nZSB7XG4gIGNvbG9yOiAjZmY2MzE0O1xufVxuXG4uaXNIaWRlIHtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1vdXQ7XG59XG4uaXNTaG93IHtcbiAgb3BhY2l0eTogMTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbjtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW47XG59XG4uaGVhZGVyLWljb24taW1nIHtcbiAgbWFyZ2luLWxlZnQ6IC00cHg7XG59XG5cbi5zcGFuQmFkZ2U6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMC41cmVtO1xuICBoZWlnaHQ6IDAuNXJlbTtcbiAgYmFja2dyb3VuZDogI2ZmNjMxNDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0b3A6IDAuNXJlbTtcbiAgLy8gcG9zaXRpb246IGFic29sdXRlOyDkvJrlr7zoh7R0YWLmu5HlnZflnKjpobbpg6ggZml4ZWQgYnkgYW5kcmV3LndlblxufVxuXG5Ac3VwcG9ydHMgKHRvcDogZW52KHNhZmUtYXJlYS1pbnNldC10b3ApKSB7XG4gIC5pc0hlaWdodCB7XG4gICAgaGVpZ2h0OiBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCk7XG4gIH1cbn1cbkBzdXBwb3J0cyAodG9wOiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtdG9wKSkge1xuICAuaXNIZWlnaHQge1xuICAgIGhlaWdodDogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LXRvcCk7XG4gIH1cbn1cbi5zaG93RHJvcCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5lbXB0eS1pbWcge1xuICB3aWR0aDogMTEuMjVyZW07XG4gIGhlaWdodDogOS41NnJlbTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDIzLjc2JTtcbn1cbi5lbXB0eS10aXRsZSB7XG4gIGhlaWdodDogMXJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogcmdiYSg1MSwgNTEsIDUxLCAxKTtcbiAgbGluZS1oZWlnaHQ6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNjNyZW07XG4gIG1hcmdpbi10b3A6IDEuODhyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5lbXB0eS1zdWItdGl0bGUge1xuICBoZWlnaHQ6IDAuNzVyZW07XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgY29sb3I6IHJnYmEoMTMzLCAxMzYsIDE0OCwgMSk7XG4gIGxpbmUtaGVpZ2h0OiAwLjc1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZW1wdHktYnRuIHtcbiAgd2lkdGg6IDUuNjNyZW07XG4gIGhlaWdodDogMnJlbTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDg2ZGVnLCByZ2JhKDI1NSwgMTQ5LCAwLCAxKSAwJSwgcmdiYSgyNTUsIDk5LCAyMCwgMSkgMTAwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDEuMDlyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjgxcmVtO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbiNob21lVG9wQ3NzVHlwZTJTZWdtZW50IHtcbiAgdHJhbnNmb3JtOiBhbGwgMC41cztcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbmlvbi1zZWdtZW50IHtcbiAgLS1jb2xvci1jaGVja2VkOiBibGFjaztcbiAgaGVpZ2h0OiAyLjc1cmVtO1xuICAvLyBib3JkZXItYm90dG9tOiAwLjAzcmVtICNlYmViZWQgc29saWQ7XG4gIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLy8gZmxleDogOTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4OiA4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDsgLy8g5YW85a655L2O54mI5pys5a6J5Y2T5omL5py6XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIC8vIG1pbi13aWR0aDogMy41cmVtOyAvL09yIHdoYXRldmVyIHdpZHRoIHlvdSB3YW50IHRhYiB0byBiZSAtIGZvciBmb3VyIHZpc2libGUgdGFiczogbWluLXdpZHRoOiAyNXZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICBjb2xvcjogcmdiYSgxMzMsIDEzNiwgMTQ4LCAxKSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbn1cblxuLmlvcyBpb24tc2VnbWVudC1idXR0b24ge1xuICBib3JkZXI6IDA7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEuMjVyZW0gIWltcG9ydGFudDtcblxuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHJnYmEoMzksIDQwLCA0NiwgMSkgIWltcG9ydGFudDtcblxuICAuYmFyIHtcbiAgICB3aWR0aDogMS42M3JlbTtcbiAgICBoZWlnaHQ6IDAuMTlyZW07XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1NSwgMTQ5LCAwLCAxKSAwJSwgcmdiYSgyNTUsIDk5LCAyMCwgMSkgMTAwJSk7XG4gICAgYm9yZGVyLXJhZGl1czogMC4wOXJlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICB9XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDAuMzEyNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDAuNjI1cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNjI1cmVtO1xufVxuXG5pb24tc2VnbWVudC1idXR0b246Zmlyc3QtY2hpbGQgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiAxLjI1cmVtO1xufVxuXG4ubGktY3NzVHlwZTIge1xuICBtYXJnaW4tbGVmdDogMC42MjVyZW07XG4gIG1hcmdpbi1yaWdodDogMC42MjVyZW07XG59XG5cbi5saS1tYXJnaW4ge1xuICBtYXJnaW4tbGVmdDogMS4yNXJlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/route/entry/footercoms.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/route/entry/footercoms.component.ts ***!
  \*****************************************************/
/*! exports provided: FooterComsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComsComponent", function() { return FooterComsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_service_tabs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/service/tabs.service */ "./src/app/shared/service/tabs.service.ts");
/* harmony import */ var _shared_service_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/event.service */ "./src/app/shared/service/event.service.ts");




// tslint:disable-next-line:max-line-length
var FooterComsComponent = /** @class */ (function () {
    // tslint:disable-next-line:max-line-length
    function FooterComsComponent(componentFactoryResolver, eventService, tabService, ngZone) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.eventService = eventService;
        this.tabService = tabService;
        this.ngZone = ngZone;
    }
    FooterComsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () {
            _this.ngZone.run(function () {
                _this.eventService.eventEmit.on("loadFooterComponent", function (data) {
                    _this.coms = data;
                });
            });
        });
    };
    // tslint:disable-next-line:use-life-cycle-interface
    FooterComsComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.coms) {
            var viewContainerRef_1 = this.myRef;
            viewContainerRef_1.clear();
            this.coms.forEach(function (v) {
                var componentFactory = _this.componentFactoryResolver.resolveComponentFactory(v.component);
                var componentRef = viewContainerRef_1.createComponent(componentFactory);
                (componentRef.instance).tagData = v.tagData;
            });
        }
    };
    FooterComsComponent.prototype.loadComponent = function (askTag) {
        var _this = this;
        this.coms = [];
        this.myRef.clear();
        var tag = JSON.parse(askTag);
        if (!tag.clean) {
            this.tabService.getComsDataByStyle(tag.style, function (callData) { if (callData) {
                _this.coms.push(callData);
            } }, tag);
            var len = this.coms.length;
            for (var i = 0; i < len; i++) {
                var v = this.coms[i];
                var factory = this.componentFactoryResolver.resolveComponentFactory(v.component);
                var ref = this.myRef.createComponent(factory);
                ref.instance.tagData = v.tagData;
                ref.changeDetectorRef.detectChanges();
            }
        }
        localStorage.removeItem("refreshFooterComsTag");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], FooterComsComponent.prototype, "coms", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('footerComsAnchor', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])
    ], FooterComsComponent.prototype, "myRef", void 0);
    FooterComsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ selector: 'app-footer-coms', template: '<section>\n' + '<ng-template #footerComsAnchor></ng-template>\n' + '</section>' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
            _shared_service_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"],
            src_app_shared_service_tabs_service__WEBPACK_IMPORTED_MODULE_2__["TabsService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], FooterComsComponent);
    return FooterComsComponent;
}());



/***/ }),

/***/ "./src/app/route/entry/headercoms.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/route/entry/headercoms.component.ts ***!
  \*****************************************************/
/*! exports provided: HeaderComsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComsComponent", function() { return HeaderComsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_service_tabs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/service/tabs.service */ "./src/app/shared/service/tabs.service.ts");
/* harmony import */ var _shared_service_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/event.service */ "./src/app/shared/service/event.service.ts");




// tslint:disable-next-line:max-line-length
var HeaderComsComponent = /** @class */ (function () {
    // tslint:disable-next-line:max-line-length
    function HeaderComsComponent(componentFactoryResolver, eventService, tabService, ngZone) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.eventService = eventService;
        this.tabService = tabService;
        this.ngZone = ngZone;
    }
    HeaderComsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () {
            _this.ngZone.run(function () {
                _this.eventService.eventEmit.on("loadHeaderComponent", function (data) {
                    _this.coms = data;
                });
            });
        });
    };
    // tslint:disable-next-line:use-life-cycle-interface
    HeaderComsComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.coms) {
            var viewContainerRef_1 = this.myRef;
            viewContainerRef_1.clear();
            this.coms.forEach(function (v) {
                var componentFactory = _this.componentFactoryResolver.resolveComponentFactory(v.component);
                var componentRef = viewContainerRef_1.createComponent(componentFactory);
                (componentRef.instance).tagData = v.tagData;
            });
        }
    };
    HeaderComsComponent.prototype.loadComponent = function (askTag) {
        var _this = this;
        this.coms = [];
        this.myRef.clear();
        var tag = JSON.parse(askTag);
        if (!tag.clean) {
            this.tabService.getComsDataByStyle(tag.style, function (callData) { if (callData) {
                _this.coms.push(callData);
            } }, tag);
            var len = this.coms.length;
            for (var i = 0; i < len; i++) {
                var v = this.coms[i];
                var factory = this.componentFactoryResolver.resolveComponentFactory(v.component);
                var ref = this.myRef.createComponent(factory);
                ref.instance.tagData = v.tagData;
                ref.changeDetectorRef.detectChanges();
            }
        }
        localStorage.removeItem("refreshHeaderComsTag");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], HeaderComsComponent.prototype, "coms", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('headerComsAnchor', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])
    ], HeaderComsComponent.prototype, "myRef", void 0);
    HeaderComsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ selector: 'app-header-coms', template: '<section>\n' + '<ng-template #headerComsAnchor></ng-template>\n' + '</section>' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
            _shared_service_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"],
            src_app_shared_service_tabs_service__WEBPACK_IMPORTED_MODULE_2__["TabsService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], HeaderComsComponent);
    return HeaderComsComponent;
}());



/***/ }),

/***/ "./src/app/route/entry/nav-one/nav-one.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/route/entry/nav-one/nav-one.component.ts ***!
  \**********************************************************/
/*! exports provided: NavOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavOneComponent", function() { return NavOneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd-mobile */ "./node_modules/ng-zorro-antd-mobile/fesm5/ng-zorro-antd-mobile.js");
/* harmony import */ var src_app_shared_service_event_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/event.service */ "./src/app/shared/service/event.service.ts");
/* harmony import */ var src_app_coms_share_page_share_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/coms/share-page/share-page.component */ "./src/app/coms/share-page/share-page.component.ts");
/* harmony import */ var src_app_shared_service_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/service/message.service */ "./src/app/shared/service/message.service.ts");
/* harmony import */ var src_app_coms_ranking_modal_ranking_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/coms/ranking-modal/ranking-modal.component */ "./src/app/coms/ranking-modal/ranking-modal.component.ts");
/* harmony import */ var _coms_choose_city_choose_city_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../coms/choose-city/choose-city.component */ "./src/app/coms/choose-city/choose-city.component.ts");
/* harmony import */ var _shared_service_app_global_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/service/app-global.service */ "./src/app/shared/service/app-global.service.ts");
/* harmony import */ var _shared_service_http_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/service/http.service */ "./src/app/shared/service/http.service.ts");
/* harmony import */ var _shared_service_map_baiduapi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/service/map.baiduapi */ "./src/app/shared/service/map.baiduapi.ts");
/* harmony import */ var _shared_service_tabs_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../../shared/service/tabs.service */ "./src/app/shared/service/tabs.service.ts");
/* harmony import */ var src_app_coms_recommend_modal_recommend_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/coms/recommend-modal/recommend-modal.component */ "./src/app/coms/recommend-modal/recommend-modal.component.ts");
/* harmony import */ var src_app_coms_show_phone_modal_show_phone_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/coms/show-phone-modal/show-phone-modal.component */ "./src/app/coms/show-phone-modal/show-phone-modal.component.ts");
















var NavOneComponent = /** @class */ (function () {
    function NavOneComponent(platform, http, router, appGlobalService, modalController, mapBaiduService, tabsService, eventService, alertController, ngZone, actionSheet, // 必须有
    modalService, message) {
        var _this = this;
        this.platform = platform;
        this.http = http;
        this.router = router;
        this.appGlobalService = appGlobalService;
        this.modalController = modalController;
        this.mapBaiduService = mapBaiduService;
        this.tabsService = tabsService;
        this.eventService = eventService;
        this.alertController = alertController;
        this.ngZone = ngZone;
        this.actionSheet = actionSheet;
        this.modalService = modalService;
        this.message = message;
        this.hidden = false;
        this.isHeader = true;
        // 标签头数据
        this.titleBar = {};
        this.isGrayBg = false; // 默认背景为灰色
        this.showWaterImg = false; // 是否显示水印
        this.showRefresher = false; // 是否可以下拉刷新
        this.showLoading = false; // 是否展示上拉动画
        // 位置对象
        this.positionInfo = {};
        this.showTopTab = false; // 是否显示顶部tab
        this.showSubTab = false; // 是否显示Subtab
        this.showRefresh = false; // 是否显示刷新
        this.isShowingTipsDiv = false;
        this.isShowingAlertDiv = false;
        this.pageDataFirstTag = {};
        this.tData = {
            customer: [{
                    avatar: "http://www.xx.com/xx.png",
                    name: "小明",
                    submit: {
                        id: "string",
                        content: {}
                    }
                }],
            moreCustomer: {
                label: "更多客户",
                link: {
                    type: "page",
                    target: "pageId",
                    params: {}
                }
            },
            copy: {
                label: "复制链接",
                content: "url"
            },
            savePic: {
                label: "保存图片"
            }
        };
        this.selectedSegment = 0;
        // 有customerTab时切换
        this.eventService.eventEmit.on("nav1ScrollToBottom", function (obj) {
            var reqTag = localStorage.getItem('nav1ScrollToBottomTag');
            if (reqTag !== undefined) {
                localStorage.removeItem('nav1ScrollToBottomTag');
                // tslint:disable-next-line:radix
                _this.content.scrollByPoint(0, parseInt(reqTag), 500);
                // this.content.scrollToBottom(0);
            }
        });
        // 页面包含appTab，调用part接口刷新navOne的footerComs
        this.eventService.eventEmit.on("nav1UpdateFooterComs", function (obj) {
            var reqTag = localStorage.getItem('nav1UpdateFooterComsTag');
            if (reqTag !== undefined) {
                localStorage.removeItem('nav1UpdateFooterComs');
                _this.tabsService.getPageData(obj, function (pageData) {
                    _this.footerComs = pageData.footerComs;
                });
            }
        });
        // 安卓禁用物理返回键之后手动触发返回
        this.eventService.eventEmit.on("nav1ManualBack", function (obj) {
            console.log('msg----->nav1ManualBack time=' + JSON.stringify(new Date().toLocaleTimeString()));
            var reqTag = localStorage.getItem('nav1ManualBackTag');
            localStorage.removeItem('nav1ManualBackTag');
            if (reqTag !== undefined && reqTag === '1') {
                localStorage.setItem('nav1ManualBackTag', '2');
                console.log(' pageData.views[0].tags[0].disableBack =' + _this.pageDataFirstTag.disableBack);
                if (_this.pageDataFirstTag.disableBack === undefined && !_this.isShowingTipsDiv && !_this.isShowingAlertDiv) {
                    _this.back();
                }
            }
        });
    }
    NavOneComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.openBackdrop = this.appGlobalService.openBackdrop;
        this.targetObj = JSON.parse(localStorage.getItem('targetObj'));
        this.getInitInfo(0);
        this.eventService.eventEmit.on('refreshPageData', function (pageData) {
            console.log('need Refresh page data 刷新页面 ------->\n');
            _this.coms = pageData.coms;
            _this.headerComs = pageData.headerComs;
            _this.subComs = pageData.subComs;
            _this.titleBar = pageData.titleBar;
            _this.footerComs = pageData.footerComs;
            _this.isGrayBg = pageData.isGrayBg;
            _this.showRefresher = pageData.showRefresher;
            _this.showLoading = pageData.showLoading;
            _this.backgroundImg = pageData.backgroundImg;
            _this.showWaterImg = pageData.showWaterImg;
            _this.getCurrentToggleData();
        });
        this.eventService.eventEmit.on('addFooterCom', function (coms) {
            if (coms) {
                _this.footerComs.push(coms);
            }
            else {
                _this.footerComs = [];
            }
        });
        this.ngZone.runOutsideAngular(function () {
            _this.ngZone.run(function () {
                _this.eventService.eventEmit.on('testRefreshFooterComsContainer', function () {
                    var askTag = localStorage.getItem("refreshFooterComsTag");
                    if (askTag !== null) {
                        _this.loadComponent(askTag);
                    }
                });
            });
        });
    };
    NavOneComponent.prototype.loadComponent = function (askTag) {
        var _this = this;
        this.footerComs = [];
        var tag = JSON.parse(askTag);
        if (!tag.clean) {
            this.tabsService.getComsDataByStyle(tag.style, function (callData) { if (callData) {
                _this.footerComs.push(callData);
            } }, tag);
        }
        this.eventService.eventEmit.emit("loadFooterComponent", this.footerComs);
        // localStorage.removeItem("refreshFooterComsTag");
    };
    NavOneComponent.prototype.getInitInfo = function (index, pageId) {
        var _this = this;
        try {
            var newFilterTagDefaultIndex_1 = "0";
            this.positionInfo = JSON.parse(this.mapBaiduService.getStore('position'));
            if (pageId) {
                this.targetObj.forward.pageId = pageId;
            }
            if (this.targetObj !== null) {
                if (this.targetObj.forward && this.targetObj.forward.params && this.targetObj.forward.params.index) {
                    newFilterTagDefaultIndex_1 = this.targetObj.forward.params.index;
                }
                this.targetObj.forward.params = (pageId && index) ? ({ code: this.positionInfo.code }) : this.targetObj.forward.params;
                this.http.post('application/page', this.targetObj.forward, function (res) {
                    _this.showRefresh = false;
                    // add by andrew.wen for bug-view-3853.html
                    if (newFilterTagDefaultIndex_1 && newFilterTagDefaultIndex_1 !== "0") {
                        // 如果为newFilterTag且开启检查默认值
                        if (res.script.includes('"style":"newFilterTag",') && res.script.includes('"checkDefaultValue":true')) {
                            res.script = res.script.replace('"style":"newFilterTag",', '"style":"newFilterTag","defaultBusinessStatusIndex":"2",');
                        }
                    }
                    var pageData = JSON.parse(res.script);
                    _this.platform.ready().then(function () {
                        // 确保不是web模拟的android
                        if (_this.platform.is('android') && localStorage.getItem('client') !== 'BROWSER') {
                            _this.pageDataFirstTag = pageData.views[0].tags[0];
                            // 安卓端禁用物理返回
                            if (res.script.includes('"disableBack":"true",')) {
                                pageData.views[0].tags[0].disableBack = true;
                                res.script = JSON.stringify(pageData);
                            }
                        }
                    });
                    // 如果需要记录上一次操作参数则添加新配置重新拼装请求参数然后发送page。
                    if (res.script.includes('"style":"tag.FilterTagLogic",') && res.script.includes('"needRememberLast":true')) {
                        var filterTagName = 'needRememberResult' + pageData.views[0].tags[0].name;
                        if (localStorage.getItem(filterTagName)) {
                            pageData.views[0].tags[1].data.data = [];
                            res.script = JSON.stringify(pageData);
                        }
                    }
                    // 检查新跳转的页面是否需要自动填充
                    if (res.script.includes('"style":"tag.AppTabTagLogic",') && res.script.includes('"name":"exactCommendTag",')) {
                        pageData = {};
                        res.script = res.script.replace('"name":"exactCommendTag",', '"name":"exactCommendTag","isAutoFillData":true,');
                        pageData = JSON.parse(res.script);
                    }
                    // 检查是否有AppTabTag是否有callPhone的footer
                    // tslint:disable-next-line:max-line-length
                    // if (res.script.includes('"style":"tag.AppTabTagLogic",') && res.script.includes('"style":"tag.PhoneTagLogic","name":null,"linearLayout":"footer"')) {
                    //   pageData = {};
                    //   pageData = JSON.parse(res.script);
                    //   const viewTagsLen = pageData.views[0].tags.length;
                    //   const appTabTag = pageData.views[0].tags[viewTagsLen - 1];
                    //   const footerTag = appTabTag.currentData.tags.pop();
                    //   pageData.views[0].tags.push(footerTag);
                    //   res.script = JSON.stringify(pageData);
                    // }
                    // 回到 主tab
                    if (pageData.style === 'page.FramePageLogic') {
                        // 清除访问历史 
                        // 修复http://chandao.xwkj.local:8018/bug-view-4320.html
                        _this.appGlobalService.popAllTarget();
                        history.go(-(localStorage.getItem('lastNavIndex')));
                        setTimeout(function () {
                            localStorage.setItem("needRefreshTab1", "true");
                            localStorage.setItem("needRefreshTab2", "true");
                            localStorage.setItem("needRefreshTab3", "true");
                            localStorage.setItem("needRefreshTab4", "true");
                            localStorage.setItem("needRefreshTab5", "true");
                            _this.router.navigate(['/home/tab1']);
                        }, 100);
                    }
                    // 请求数据成功
                    if (res) {
                        // tslint:disable-next-line:no-shadowed-variable
                        _this.tabsService.getPageData(res, function (pageData) {
                            _this.footerComs = pageData.footerComs;
                            _this.headerComs = pageData.headerComs;
                            _this.coms = pageData.coms;
                            if (_this.coms[0] && _this.coms[0].tagData.style === 'tag.AppTabTagLogic' && _this.coms[0].tagData.name === 'homeAppTabTag') {
                                _this.showTopTab = true;
                                _this.tagData = _this.coms[0].tagData;
                                _this.aWidth = 100 / _this.tagData.data.length + '%';
                            }
                            if (_this.coms[0] && _this.coms[0].tagData.style === 'tag.AppTabTagLogic' && _this.coms[0].tagData.name === 'imagesTag') {
                                _this.subComs = _this.coms;
                                _this.coms = undefined;
                                _this.showSubTab = true;
                                _this.showTopTab = false;
                                _this.subTagData = _this.subComs[0].tagData;
                                _this.subAWidth = 100 / _this.subTagData.data.length + '%';
                            }
                            _this.titleBar = pageData.titleBar;
                            _this.isGrayBg = pageData.isGrayBg;
                            _this.showRefresher = pageData.showRefresher;
                            _this.showLoading = pageData.showLoading;
                            _this.backgroundImg = pageData.backgroundImg;
                            _this.showWaterImg = pageData.showWaterImg;
                            if (_this.footerComs && pageData.footerComs.length) {
                                localStorage.setItem("refreshFooterComsTag", JSON.stringify(pageData.footerComs[0].tagData));
                                // this.eventService.eventEmit.emit("refreshFooterComsContainer", "refreshFooterComsContainer");
                            }
                            _this.getCurrentToggleData();
                        });
                    }
                    else {
                        // 请求数据失败
                        _this.appGlobalService.showToast(res.message, 2000, 'middle');
                    }
                }, function (err) {
                    // 请求数据失败  add by jason he
                    if (localStorage.getItem('netState') === 'No network connection') {
                        _this.netState = localStorage.getItem('netState');
                    }
                    else {
                        _this.netState = '';
                    }
                    _this.showRefresh = true;
                    _this.titleBar = {
                        background: 'white',
                        back: { layout: 'left' },
                    };
                });
            }
        }
        catch (error) {
            console.log('error--->' + JSON.stringify(error));
        }
    };
    NavOneComponent.prototype.buttonClick = function (obj) {
        if (obj.type === 'page') {
            var params = {
                pageId: obj.target,
                params: {},
                sessionId: localStorage.getItem('sessionId')
            };
            if (obj.param) {
                params.params = { code: this.positionInfo.code };
            }
            this.appGlobalService.goToForward(params);
        }
        else if (obj.type === 'modal') {
            this.showCityModel(obj.target);
        }
    };
    NavOneComponent.prototype.showCityModel = function (target) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var that, modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        that = this;
                        return [4 /*yield*/, this.modalController.create({
                                component: _coms_choose_city_choose_city_component__WEBPACK_IMPORTED_MODULE_9__["ChooseCityComponent"],
                                componentProps: { value: target, type: 1, modalTitle: '选择地址' } // 首页是1 默认不传或者0
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function () {
                            that.positionInfo = JSON.parse(localStorage.getItem('position'));
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    NavOneComponent.prototype.searchButtonClick = function (obj) {
        // search res back to search history
        if (obj.goTo && obj.goTo === "-1") {
            this.appGlobalService.popTarget();
            window.history.back();
        }
        else {
            // to history page
            console.log('to search history');
            localStorage.removeItem('searchParams');
            localStorage.removeItem('invitationArr');
            var searchPath = localStorage.getItem('tabPath') + '/navSearch';
            this.router.navigate([searchPath], { queryParams: { obj: JSON.stringify(obj) } });
        }
    };
    /**
     * 关闭方法 登录后返回 刷新 返回再刷新一次上一个页面
     */
    NavOneComponent.prototype.close = function () {
        if (localStorage.getItem('enterLoginPage')) {
            localStorage.removeItem('enterLoginPage');
        }
        window.history.back();
        if (localStorage.getItem('needRefresh') !== 'true') {
            this.appGlobalService.popTarget();
        }
    };
    /**
     * 返回方法
     */
    NavOneComponent.prototype.back = function () {
        var _this = this;
        if (localStorage.getItem('enterLoginPage')) {
            localStorage.removeItem('enterLoginPage');
        }
        this.appGlobalService.openBackdrop = false;
        localStorage.removeItem('searchParams');
        localStorage.removeItem('invitationArr');
        var that = this;
        // back 支持配置返回层级数
        if (Number(this.titleBar.back.back) < 0) {
            var back = Math.abs(Number(this.titleBar.back.back));
            for (var index = 0; index < back; index++) {
                this.appGlobalService.popTarget();
            }
            window.history.go(Number(this.titleBar.back.back));
        }
        else if (localStorage.getItem('fromPostOrEdit') === 'true') {
            // 铺铺旺发布后详情返回
            this.ppwPublishPageBack();
        }
        else {
            var cancelBackNow_1 = false;
            if (this.coms && this.coms.length) {
                this.coms.forEach(function (element) {
                    var style = element.tagData.style;
                    if (cancelBackNow_1) {
                        return;
                    }
                    switch (style) {
                        // 当前是详情
                        case 'tag.AppOppDetailTagLogic':
                            if (_this.appGlobalService.tipsDiv && _this.appGlobalService.tipsDiv !== undefined) {
                                cancelBackNow_1 = true;
                                _this.showTips();
                            }
                            else if (_this.appGlobalService.alertDiv && _this.appGlobalService.alertDiv !== undefined) {
                                cancelBackNow_1 = true;
                                _this.showAlertDialog();
                            }
                            break;
                        // 小旺发布
                        case 'tag.AppGeneralFormTagLogic':
                            cancelBackNow_1 = true;
                            _this.pxwPublishBack();
                            break;
                        case 'tag.AppContract':
                            cancelBackNow_1 = true;
                            _this.sureCancel('确定放弃本次报价吗？');
                            break;
                        case 'tag.AppQuotedPriceTagLogic':
                            cancelBackNow_1 = true;
                            _this.sureCancel('确定放弃本次报价吗？');
                            break;
                        case 'appOnlinePriceTags':
                            cancelBackNow_1 = true;
                            _this.sureCancel('确定放弃操作？');
                            break;
                        case 'appDecorationPriceTags':
                            cancelBackNow_1 = true;
                            _this.sureCancel('确定放弃操作？');
                            break;
                        default:
                            break;
                    }
                });
                if (!cancelBackNow_1) {
                    this.appGlobalService.popTarget();
                    window.history.back();
                }
            }
            else {
                this.appGlobalService.popTarget();
                window.history.back();
            }
        }
    };
    NavOneComponent.prototype.sureCancel = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: '',
                            subHeader: '',
                            message: msg,
                            buttons: [{
                                    text: '取消',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('取消');
                                    }
                                }, {
                                    text: '确定',
                                    handler: function () {
                                        _this.appGlobalService.globalParamNameObj = {};
                                        window.history.back();
                                        _this.appGlobalService.popTarget();
                                        // 表单返回 撤销刷新标志
                                        localStorage.removeItem('needRefresh');
                                        setTimeout(function () {
                                            if (_this.tabsService.tabPage.indexOf("tab") > -1) {
                                                var tab = _this.tabsService.tabPage;
                                                var tabIndex = tab.substring(tab.length - 1);
                                                console.log("needRefreshTab" + tabIndex);
                                                localStorage.setItem('needRefreshTab' + tabIndex, 'true');
                                                _this.eventService.eventEmit.emit(_this.tabsService.tabPage, '1');
                                                console.log('submit back-eventEmit--->' + _this.tabsService.tabPage);
                                            }
                                        }, 500);
                                    }
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NavOneComponent.prototype.pxwPublishBack = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: '',
                            subHeader: '',
                            message: '确定返回吗？',
                            buttons: [{
                                    text: '取消',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('取消');
                                    }
                                }, {
                                    text: '确定',
                                    handler: function () {
                                        _this.appGlobalService.globalParamNameObj = {};
                                        window.history.back();
                                        _this.appGlobalService.popTarget();
                                        // 表单返回 撤销刷新标志
                                        localStorage.removeItem('needRefresh');
                                        setTimeout(function () {
                                            if (_this.tabsService.tabPage.indexOf("tab") > -1) {
                                                var tab = _this.tabsService.tabPage;
                                                var tabIndex = tab.substring(tab.length - 1);
                                                console.log("needRefreshTab" + tabIndex);
                                                localStorage.setItem('needRefreshTab' + tabIndex, 'true');
                                                _this.eventService.eventEmit.emit(_this.tabsService.tabPage, '1');
                                                console.log('submit back-eventEmit--->' + _this.tabsService.tabPage);
                                            }
                                        }, 500);
                                    }
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NavOneComponent.prototype.ppwPublishPageBack = function () {
        localStorage.removeItem('fromPostOrEdit');
        if (document.getElementById('fixedNavTab0')) {
            this.eventService.eventEmit.emit('refreshSubTab', 'refreshSubTab');
        }
        else {
            // 设置返回刷新前两级页面page级别
            localStorage.setItem('needRefresh-2', 'true');
        }
        this.appGlobalService.popTarget();
        this.appGlobalService.popTarget();
        window.history.go(-2);
    };
    //
    //   "tipsDiv":{
    //     "plugin_id":"1",
    //     "downTag":Object{...},
    //     "numbers":"2,4,6,8",
    //     "title":"信息不好找?",
    //     "content":"立即联系找店顾问，为您整理推荐合适客户"
    // }
    NavOneComponent.prototype.showAlertDialog = function () {
        if (this.appGlobalService.alertDiv.plugin_id) {
            var count = '0';
            switch (this.appGlobalService.alertDiv.plugin_id) {
                case '1':
                    count = this.appGlobalService.alertDivTotalCount.plugin_id1 + '';
                    break;
                case '2':
                    count = this.appGlobalService.alertDivTotalCount.plugin_id2 + '';
                    break;
                case '3':
                    count = this.appGlobalService.alertDivTotalCount.plugin_id3 + '';
                    break;
                case '4':
                    count = this.appGlobalService.alertDivTotalCount.plugin_id4 + '';
                    break;
                case '5':
                    count = this.appGlobalService.alertDivTotalCount.plugin_id5 + '';
                    break;
                case '6':
                    count = this.appGlobalService.alertDivTotalCount.plugin_id6 + '';
                    break;
                case '7':
                    count = this.appGlobalService.alertDivTotalCount.plugin_id7 + '';
                    break;
                case '8':
                    count = this.appGlobalService.alertDivTotalCount.plugin_id8 + '';
                    break;
                case '9':
                    count = this.appGlobalService.alertDivTotalCount.plugin_id9 + '';
                    break;
                case '10':
                    count = this.appGlobalService.alertDivTotalCount.plugin_id10 + '';
                    break;
                default:
                    break;
            }
            var array = this.appGlobalService.alertDiv.numbers.split(',');
            if (array.indexOf(count) > -1) {
                // 匹配到对应的规则数
                this.presentAlertConfirm();
            }
            else {
                this.appGlobalService.popTarget();
                window.history.back();
            }
        }
        else {
            this.appGlobalService.popTarget();
            window.history.back();
        }
    };
    NavOneComponent.prototype.showTips = function () {
        if (this.appGlobalService.tipsDiv.plugin_id) {
            var count = '0';
            switch (this.appGlobalService.tipsDiv.plugin_id) {
                case '1':
                    count = this.appGlobalService.tipsTotalCount.plugin_id1 + '';
                    break;
                case '2':
                    count = this.appGlobalService.tipsTotalCount.plugin_id2 + '';
                    break;
                case '3':
                    count = this.appGlobalService.tipsTotalCount.plugin_id3 + '';
                    break;
                case '4':
                    count = this.appGlobalService.tipsTotalCount.plugin_id4 + '';
                    break;
                case '5':
                    count = this.appGlobalService.tipsTotalCount.plugin_id5 + '';
                    break;
                case '6':
                    count = this.appGlobalService.tipsTotalCount.plugin_id6 + '';
                    break;
                case '7':
                    count = this.appGlobalService.tipsTotalCount.plugin_id7 + '';
                    break;
                case '8':
                    count = this.appGlobalService.tipsTotalCount.plugin_id8 + '';
                    break;
                case '9':
                    count = this.appGlobalService.tipsTotalCount.plugin_id9 + '';
                    break;
                case '10':
                    count = this.appGlobalService.tipsTotalCount.plugin_id10 + '';
                    break;
                default:
                    break;
            }
            var array = this.appGlobalService.tipsDiv.numbers.split(',');
            if (array.indexOf(count) > -1) {
                // 匹配到对应的规则数
                this.showRecommenTip();
            }
            else {
                this.appGlobalService.popTarget();
                window.history.back();
            }
        }
        else {
            this.appGlobalService.popTarget();
            window.history.back();
        }
    };
    NavOneComponent.prototype.presentAlertConfirm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert_1, error_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        this.isShowingAlertDiv = true;
                        return [4 /*yield*/, this.alertController.create({
                                cssClass: 'my-custom-class',
                                backdropDismiss: false,
                                header: '',
                                // tslint:disable-next-line:max-line-length
                                message: '<span "height:2.75rem;font-size:1rem;font-weight:bold;color:rgba(39,40,46,1);">' + this.appGlobalService.alertDiv.title + '</span>',
                                buttons: [
                                    {
                                        text: this.appGlobalService.alertDiv.cancel,
                                        role: 'cancel',
                                        handler: function (blah) {
                                            _this.isShowingAlertDiv = false;
                                            _this.appGlobalService.popTarget();
                                            window.history.back();
                                        }
                                    }, {
                                        text: this.appGlobalService.alertDiv.button.label,
                                        cssClass: 'custom-ok-btn',
                                        handler: function () {
                                            _this.isShowingAlertDiv = false;
                                            // this.appGlobalService.isShowInquiryPageModal = true;
                                            if (_this.appGlobalService.alertDiv.button.submit !== undefined) {
                                                var params = {
                                                    content: _this.appGlobalService.alertDiv.button.submit.content,
                                                    id: _this.appGlobalService.alertDiv.button.submit.id,
                                                    sessionId: localStorage.getItem('sessionId')
                                                };
                                                _this.http.post('application/submit', params, function (res) {
                                                    // 请求数据成功
                                                    if (res.success === true) {
                                                        _this.appGlobalService.showToast(res.message, 2000, 'middle');
                                                        _this.eventService.eventEmit.emit('reloadCurrentPage', '1');
                                                        setTimeout(function () {
                                                            localStorage.setItem('needRefresh', 'true');
                                                        }, 2000);
                                                    }
                                                    else {
                                                        // 请求数据失败
                                                        _this.appGlobalService.showToast(res.message, 2000, 'middle');
                                                    }
                                                });
                                            }
                                            if (!localStorage.getItem('userInfo') && _this.appGlobalService.alertDiv.button.link) {
                                                var pageParams = {
                                                    pageId: _this.appGlobalService.alertDiv.button.link.target,
                                                    params: _this.appGlobalService.alertDiv.button.link.params,
                                                    sessionId: localStorage.getItem('sessionId')
                                                };
                                                _this.appGlobalService.goToForward(pageParams);
                                            }
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.log('error------>' + JSON.stringify(error_1));
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    NavOneComponent.prototype.showRecommenTip = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isShowingTipsDiv = true;
                        return [4 /*yield*/, this.modalController.create({
                                showBackdrop: true,
                                cssClass: 'recommend-modal',
                                component: src_app_coms_recommend_modal_recommend_modal_component__WEBPACK_IMPORTED_MODULE_14__["RecommendModalComponent"],
                                componentProps: { tipData: this.appGlobalService.tipsDiv }
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        // 监听销毁的事件
                        return [4 /*yield*/, modal.onDidDismiss().then(function (res) {
                                _this.isShowingTipsDiv = false;
                                _this.appGlobalService.popTarget();
                                window.history.back();
                            })];
                    case 3:
                        // 监听销毁的事件
                        _a.sent(); // 获取关闭传回的值
                        return [2 /*return*/];
                }
            });
        });
    };
    /** 收藏 */
    NavOneComponent.prototype.favorite = function (submit) {
        var _this = this;
        // 判断是否登录 登录 返回 详情
        var params = {
            id: submit.id,
            content: submit.content,
            sessionId: localStorage.getItem('sessionId')
        };
        console.log('favorite --> submit', params);
        this.http.post('application/submit', params, function (res) {
            // 请求成功
            if (res.success) {
                // 更新收藏icon UI
                if (_this.titleBar.favorite.icon === "unfavorite") {
                    _this.titleBar.favorite.icon = "favorite";
                }
                else {
                    _this.titleBar.favorite.icon = "unfavorite";
                }
                console.log('favorite -->', res.message);
            }
            else {
                // 请求数据失败
                // this.appGlobalService.showToast(res.message, 2000, 'middle');
                if (res.type === 'page') {
                    var loginParams = {
                        pageId: res.target,
                        params: {},
                        sessionId: localStorage.getItem('sessionId')
                    };
                    // to login
                    _this.appGlobalService.goToForward(loginParams);
                }
            }
        });
    };
    /** 拨打客服 */
    NavOneComponent.prototype.call = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var message, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(' 拨打客服 ', data);
                        message = data.name ? data.name + ' ' + data.phone : data.phone;
                        return [4 /*yield*/, this.alertController.create({
                                header: '',
                                subHeader: '',
                                message: data.title + '<br>' + message,
                                buttons: [{
                                        text: '取消',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function (blah) {
                                            console.log('取消');
                                        }
                                    }, {
                                        text: '拨打',
                                        handler: function () {
                                            _this.http.changeCallNumber(data.phone);
                                        }
                                    }]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // 分享弹框
    NavOneComponent.prototype.presentModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, modalData;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            showBackdrop: true,
                            cssClass: 'sharePage',
                            backdropDismiss: true,
                            component: src_app_coms_share_page_share_page_component__WEBPACK_IMPORTED_MODULE_6__["SharePageComponent"],
                            componentProps: { tagData: this.shareData }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 3:
                        modalData = _a.sent();
                        console.log(modalData);
                        return [2 /*return*/];
                }
            });
        });
    };
    /** 分享 */
    NavOneComponent.prototype.share = function (link) {
        var _this = this;
        console.log('share --> page', link);
        // 请求参数
        var params = {
            sessionId: localStorage.getItem("sessionId"),
            pageId: link.target,
            params: link.params
        };
        this.http.post('application/page', params, function (res) {
            console.log(JSON.parse(res.script));
            _this.shareData = JSON.parse(res.script).views[0].tags[0].data;
            console.log(_this.shareData);
            _this.presentModal();
        });
    };
    NavOneComponent.prototype.change = function (obj, indexTab) {
        var _this = this;
        if (obj !== undefined && obj.partLink !== undefined) {
            this.tagData.currentTab = indexTab;
            if (localStorage.getItem('topTapPart' + indexTab)) {
                var parseData = JSON.parse(localStorage.getItem('topTapPart' + indexTab));
                this.tagData.currentData = parseData;
                setTimeout(function () {
                    localStorage.setItem("dataMapTopTabContainer", JSON.stringify(_this.tagData));
                    _this.eventService.eventEmit.emit('refreshTopTabContainer', 'refreshTopTabContainer');
                    _this.content.scrollToTop(0);
                }, 200);
            }
            else {
                this.http.post('application/part', {
                    viewId: obj.partLink.target,
                    sessionId: localStorage.getItem("sessionId"),
                    params: obj.partLink.params
                }, function (res) {
                    // #616 修改：点击转让服务和选址服务跳到第一屏的画面
                    _this.content.scrollToTop(0);
                    if (res !== undefined && res != null) {
                        setTimeout(function () {
                            _this.tagData.currentData = JSON.parse(res.script);
                            localStorage.setItem("dataMapTopTabContainer", JSON.stringify(_this.tagData));
                            _this.eventService.eventEmit.emit('refreshTopTabContainer', 'refreshTopTabContainer');
                        }, 50);
                    }
                });
            }
        }
    };
    NavOneComponent.prototype.subChange = function (obj, indexTab) {
        var _this = this;
        if (obj !== undefined && obj.partLink !== undefined) {
            this.subTagData.currentTab = indexTab;
            this.http.post('application/part', {
                viewId: obj.partLink.target,
                sessionId: localStorage.getItem("sessionId"),
                params: obj.partLink.params
            }, function (res) {
                if (res !== undefined && res != null) {
                    setTimeout(function () {
                        _this.subTagData.currentData = JSON.parse(res.script);
                        localStorage.setItem('refreshGrayBgTag', '' + _this.subTagData.currentData.isGrayBg);
                        _this.eventService.eventEmit.emit('refreshGrayBg', 'refreshGrayBg');
                        localStorage.setItem("dataMapFixedTabContainer", JSON.stringify(_this.subTagData));
                        _this.eventService.eventEmit.emit('refreshNav1FixedContainer', 'refreshNav1FixedContainer');
                    }, 50);
                }
            });
        }
    };
    // 聊天
    NavOneComponent.prototype.chat = function (chat) {
        var _this = this;
        //   {
        //     "layout":"right",
        //     "icon":"details_icon_chat@3x.png",
        //     "link":{
        //         "type":"chat",
        //         "params":{
        //             "opportunity_id":"5dba966981fd4a00011e04ef",
        //             "customer_id":"5d905cd4531ddf00013372e3"
        //         },
        //         "target":"43011"
        //     }
        // }
        if (chat.link && chat.link.type === 'chat') {
            var cityId = JSON.parse(localStorage.getItem('position')) ? JSON.parse(localStorage.getItem('position')).code : 4403;
            var ifLogin = localStorage.getItem('userId') !== 'null';
            if (ifLogin) {
                this.http.getImId(chat.link.params.opportunity_id, chat.link.params.customer_id, cityId, function (item) {
                    if (item.toId !== localStorage.getItem('userId')) {
                        // tslint:disable-next-line:max-line-length
                        _this.router.navigate(['home/' + localStorage.getItem('tab') + '/chatOnline'], { queryParams: { item: JSON.stringify(item) } });
                    }
                });
            }
        }
    };
    // 更多
    NavOneComponent.prototype.moreLine = function (more) {
        var that = this;
        var buttons = [];
        more.data.forEach(function (element, index) {
            buttons.push(element.label);
        });
        ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_4__["ActionSheetService"].showActionSheetWithOptions({
            options: buttons,
            maskClosable: true
        }, function (buttonIndex) {
            if (buttonIndex > -1) {
                console.log(more.data[buttonIndex]);
                ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_4__["ActionSheetService"].close();
                setTimeout(function () {
                    that.selectItem(more.data[buttonIndex]);
                }, 200);
            }
        });
    };
    NavOneComponent.prototype.selectItem = function (item) {
        var _this = this;
        if (item.action === 'submit') {
            item.submit.sessionId = localStorage.getItem('sessionId');
            console.log('more --> submit', item.submit);
            this.http.post('application/submit', item.submit, function (res) {
                _this.appGlobalService.showToast(res.message, 2000, 'middle');
            });
        }
        else if (item.action === 'filter') {
            // 实现服务大厅页面，拥有“分公司服务大厅”权限与加盟店服务大厅”权限时，可见右上角的筛选分公司/加盟店数据的按钮，点击后可以筛选数据，默认“分公司”
            // 如果titleBar中的moreLine返回filterSubmit，那么就直接调取切换标签下面的列表id，然后把数据传入到content，请求submit后刷新页面，记得把切换标签的条件全部重置。
            console.log('more --> filterSubmit ', item.filterSubmit);
            // 选中结果
            var result = {
                // showName: "",
                filter: item.filterSubmit.content,
                order: {}
            };
            this.message.clearMessage();
            this.message.sendMessage(result);
        }
        else if (item.action === 'link') {
            var param = {
                pageId: item.link.target,
                params: item.link.params ? item.link.params : {},
                sessionId: localStorage.getItem('sessionId')
            };
            this.appGlobalService.goToForward(param);
        }
        else if (item.action === 'question') {
            // alert
            this.question(item);
        }
        else if (item.action === 'prompt') {
            // 弹出输入框 alert
            this.inputAlert(item);
        }
        else if (item.action === 'modal') {
            this.openRankingModal("ranking-modal", item);
        }
        else if (item.action === 'refresh') {
            this.refreshPage();
        }
        else if (item.action === 'view') {
            var param = {
                viewId: item.link.target,
                params: item.link.params ? item.link.params : {},
                sessionId: localStorage.getItem('sessionId')
            };
            this.appGlobalService.goToForward(param);
        }
    };
    // ranking-modal
    NavOneComponent.prototype.openRankingModal = function (className, item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var params;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                params = {
                    sessionId: localStorage.getItem("sessionId"),
                    pageId: item.link.target,
                    params: item.link.params
                };
                this.http.post('application/page', params, function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var tagData, style, modal, modalData, modal, modalData;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                tagData = JSON.parse(res.script).views[0].tags[0].data;
                                style = JSON.parse(res.script).views[0].tags[0].style;
                                if (!(style === 'appPopupTag')) return [3 /*break*/, 4];
                                return [4 /*yield*/, this.modalController.create({
                                        showBackdrop: true,
                                        cssClass: 'show-phone-modal',
                                        component: src_app_coms_show_phone_modal_show_phone_modal_component__WEBPACK_IMPORTED_MODULE_15__["ShowPhoneModalComponent"],
                                        componentProps: { tagData: tagData }
                                    })];
                            case 1:
                                modal = _a.sent();
                                return [4 /*yield*/, modal.present()];
                            case 2:
                                _a.sent();
                                return [4 /*yield*/, modal.onDidDismiss()];
                            case 3:
                                modalData = _a.sent();
                                return [3 /*break*/, 8];
                            case 4: return [4 /*yield*/, this.modalController.create({
                                    showBackdrop: true,
                                    cssClass: className,
                                    component: src_app_coms_ranking_modal_ranking_modal_component__WEBPACK_IMPORTED_MODULE_8__["RankingModalComponent"],
                                    componentProps: { tagData: tagData }
                                })];
                            case 5:
                                modal = _a.sent();
                                return [4 /*yield*/, modal.present()];
                            case 6:
                                _a.sent();
                                return [4 /*yield*/, modal.onDidDismiss()];
                            case 7:
                                modalData = _a.sent();
                                _a.label = 8;
                            case 8: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    // alert
    NavOneComponent.prototype.question = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var that, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        that = this;
                        return [4 /*yield*/, this.alertController.create({
                                header: '',
                                subHeader: '',
                                message: item.question,
                                buttons: [{
                                        text: '取消',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function (blah) {
                                            console.log('取消');
                                        }
                                    }, {
                                        text: '确定',
                                        handler: function () {
                                            item.submit.sessionId = localStorage.getItem('sessionId');
                                            console.log('more --> submit', item.submit);
                                            _this.http.post('application/submit', item.submit, function (res) {
                                                // 刷新当前页面
                                                if (item.submit.content.back && item.submit.content.back === '0') {
                                                    _this.http.reloadCurrentPage();
                                                    setTimeout(function () {
                                                        localStorage.setItem('needRefresh', 'true');
                                                        _this.appGlobalService.showToast(res.message, 2000, 'middle');
                                                    }, 1000);
                                                }
                                                else {
                                                    _this.appGlobalService.showToast(res.message, 2000, 'middle');
                                                }
                                            });
                                        }
                                    }]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NavOneComponent.prototype.inputAlert = function (item) {
        var _this = this;
        var that = this;
        ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_4__["ModalService"].prompt(item.htmlObj.title, '', [
            // {
            //   text: 'Close',
            //   onPress: value =>
            //     new Promise(resolve => {
            //       setTimeout(() => {
            //         resolve();
            //         console.log(`value:${value}`);
            //       }, 1000);
            //     })
            // },
            {
                text: item.htmlObj.buttonLabel,
                onPress: function (value) {
                    return new Promise(function (resolve) {
                        if (value.length === 0 || that.appGlobalService.isPhone(value)) {
                            resolve();
                            item.submit.content[item.htmlObj.input.formKey] = value;
                            item.submit.sessionId = localStorage.getItem('sessionId');
                            console.log('more --> submit', item.submit);
                            that.http.post('application/submit', item.submit, function (res) {
                                if (res.message) {
                                    _this.appGlobalService.showToast(res.message, 2000, 'middle');
                                }
                            });
                        }
                        else {
                            that.appGlobalService.showToast('请输入正确的号码', 2000, 'top');
                        }
                    });
                }
            }
        ], 'default', null, [item.htmlObj.input.placeholder]);
    };
    //
    NavOneComponent.prototype.filter = function (filter) {
        var param = {
            pageId: filter.link.target,
            params: filter.link.params ? filter.link.params : {},
            sessionId: localStorage.getItem('sessionId')
        };
        this.appGlobalService.goToForward(param);
    };
    // 确定提交表单用
    NavOneComponent.prototype.textButton = function (textButton) {
        console.log(textButton);
        this.check(textButton);
    };
    // 数组btn
    NavOneComponent.prototype.iconButtonClick = function (item) {
        this.selectItem(item);
    };
    NavOneComponent.prototype.toggle = function (toggleButton, index) {
        if (toggleButton[index].checked) {
            return;
        }
        else if (index === 0) {
            toggleButton[0].checked = true;
            toggleButton[1].checked = false;
            this.toggleChange(toggleButton[0], '0');
        }
        else {
            toggleButton[0].checked = false;
            toggleButton[1].checked = true;
            this.toggleChange(toggleButton[1], '1');
        }
    };
    NavOneComponent.prototype.getCurrentToggleData = function () {
        var _this = this;
        if (this.titleBar && this.titleBar.toggleButton) {
            this.titleBar.toggleButton.forEach(function (e, i) {
                if (e.checked) {
                    _this.toggleChange(e, i.toString());
                }
            });
        }
    };
    NavOneComponent.prototype.toggleChange = function (obj, index) {
        var _this = this;
        if (obj !== undefined && obj.partLink !== undefined) {
            this.http.post('application/part', {
                viewId: obj.partLink.target,
                sessionId: localStorage.getItem("sessionId"),
                params: obj.partLink.params
            }, function (res) {
                if (res !== undefined && res != null) {
                    _this.tabsService.getPageData(res, function (pageData) {
                        _this.coms = pageData.coms;
                        _this.footerComs = pageData.footerComs;
                    });
                }
            });
        }
    };
    // tslint:disable-next-line:ban-types
    NavOneComponent.prototype.valid = function (formGroup, allLabel, compareArray, callback) {
        if (formGroup.valid) {
            // console.log(this.formGroup.value);
            var params = formGroup.value;
            // tslint:disable-next-line:forin
            for (var prop in params) {
                if (Array.isArray(params[prop])) {
                    params[prop] = params[prop].join(',');
                }
                // 删除无效值
                if (prop === '') {
                    // delete params[prop];
                }
                if (prop.indexOf('samekey_') > -1) {
                    var p = prop.replace('samekey_', '');
                    params[p] = params[prop] ? params[prop] : "";
                    delete params[prop];
                }
            }
            var compare = true;
            // tslint:disable-next-line:prefer-for-of
            for (var index = 0; index < compareArray.length; index++) {
                var compareItem = compareArray[index];
                if (Number(params[compareItem.minKey]) > Number(params[compareItem.maxKey])) {
                    console.log(params[compareItem.minKey]);
                    console.log(params[compareItem.maxKey]);
                    if (compareItem.lessTip && compareItem.lessTip.length > 0) {
                        this.appGlobalService.showToast(compareItem.lessTip, 3000, 'top');
                    }
                    else {
                        this.appGlobalService.showToast("\u6700\u5C0F" + compareItem.label + "\u4E0D\u5F97\u5927\u4E8E/\u7B49\u4E8E\u6700\u6700\u5927" + compareItem.label, 3000, 'top');
                    }
                    compare = false;
                    break;
                }
                else if (Number(params[compareItem.minKey]) === Number(params[compareItem.maxKey])) {
                    console.log(params[compareItem.minKey]);
                    console.log(params[compareItem.maxKey]);
                    if (compareItem.equalTip && compareItem.equalTip.length > 0) {
                        this.appGlobalService.showToast(compareItem.equalTip, 3000, 'top');
                    }
                    else {
                        this.appGlobalService.showToast("\u6700\u5C0F" + compareItem.label + "\u4E0D\u5F97\u5927\u4E8E/\u7B49\u4E8E\u6700\u6700\u5927" + compareItem.label, 3000, 'top');
                    }
                    compare = false;
                    break;
                }
            }
            if (compare) {
                console.log(params);
                callback(params);
            }
            // this.onReset();
        }
        else {
            this.getErrors(formGroup, allLabel);
        }
    };
    NavOneComponent.prototype.getErrors = function (form, allLabel) {
        var errs = [];
        for (var name_1 in form.controls) {
            // eg: controls[name] = phone
            if (form.controls[name_1].errors) {
                errs.push({ key: [name_1], err: form.controls[name_1].errors });
            }
        }
        if (errs.length) {
            var errItem = errs[0];
            var firstErrMsgKey = Object.keys(errItem.err)[0];
            console.log(errItem.key, '校验的字段名');
            var messageObj = allLabel[errItem.key];
            var showMessage = messageObj[firstErrMsgKey];
            this.appGlobalService.showToast(showMessage, 3000, 'top');
        }
    };
    NavOneComponent.prototype.check = function (item) {
        var _this = this;
        console.log(item.action);
        var keyString = item.paramName;
        var keys = keyString ? keyString.split(',') : [];
        // if (!keys) {
        //   return;
        // }
        if (item.action === 'reset') {
            keys.forEach(function (element) {
                var formGroup = _this.appGlobalService.getFormGroupWithParamName(element);
                if (formGroup) {
                    formGroup.reset();
                }
            });
        }
        else if (item.action === 'submit') {
            // tslint:disable-next-line:no-shadowed-variable
            var keyString_1 = item.paramName;
            keys = keyString_1.split(',');
            var count_1 = 0;
            var formCount_1 = 0;
            keys.forEach(function (element) {
                var formGroup = _this.appGlobalService.getFormGroupWithParamName(element);
                var messageObj = _this.appGlobalService.getFormGroupMessageWithParamName(element);
                var compareArray = _this.appGlobalService.getFormCompareWithParamName(element);
                if (formGroup && messageObj) {
                    formCount_1 += 1;
                    _this.valid(formGroup, messageObj, compareArray, function (params) {
                        if (params) {
                            item.submit.content[element] = params;
                            count_1 += 1;
                        }
                        else {
                            return;
                        }
                    });
                }
            });
            // 全部校验通过
            if (count_1 === formCount_1) {
                item.submit.sessionId = localStorage.getItem('sessionId');
                console.log('check --> submit', item.submit);
                this.http.post('application/submit', item.submit, function (res) {
                    // 请求成功
                    if (res.success) {
                        _this.appGlobalService.delAllFormGroup();
                        _this.appGlobalService.delAllFormGroupMessage();
                        _this.appGlobalService.delAllFormCompare();
                        _this.success(res, item);
                        // if (res.type === 'page') {
                        //   const payParams = {
                        //     pageId: res.target,
                        //     params: res.params,
                        //     sessionId: localStorage.getItem('sessionId')
                        //   };
                        //   // to newPage
                        //   this.appGlobalService.goToForward(payParams);
                        //   // this.router.navigate(['/return_url'], { queryParams: { p: JSON.stringify(payParams) } });
                        // }
                    }
                    else {
                        // 请求数据失败
                        _this.appGlobalService.showToast(res.message, 2000, 'middle');
                    }
                });
            }
        }
        else if (item.action === 'link') {
            var param = {
                pageId: item.link.target,
                params: item.link.params ? item.link.params : {},
                sessionId: localStorage.getItem('sessionId')
            };
            this.appGlobalService.goToForward(param);
        }
        else if (item.action === 'question') {
            // alert
            this.question(item);
        }
    };
    NavOneComponent.prototype.success = function (res, item) {
        if (res.message) {
            this.appGlobalService.showToast(res.message, 2000, 'middle');
        }
        if (item.back) {
            if (Number(item.back) < 0) {
                var back = Math.abs(Number(item.back));
                for (var index = 0; index < back; index++) {
                    this.appGlobalService.popTarget();
                }
                window.history.go(Number(item.back));
            }
            else if (Number(item.back) === 0) {
                this.http.reloadCurrentPage();
            }
            else {
                window.history.go(Number(item.back));
            }
            localStorage.setItem("needRefresh", "true");
        }
        else if (item.link && item.link.type === 'page') {
            var payParams = {
                pageId: item.link.target,
                params: item.link.params ? item.link.params : {},
                sessionId: localStorage.getItem('sessionId')
            };
            // to newPage
            this.appGlobalService.goToForward(payParams);
        }
        else if (res.target) {
            var payParams = {
                pageId: res.target,
                params: res.params ? res.params : {},
                sessionId: localStorage.getItem('sessionId')
            };
            // to newPage
            this.appGlobalService.goToForward(payParams);
        }
        // else {
        //   this.appGlobalService.showToast(res.message, 2000, 'middle');
        // }
    };
    NavOneComponent.prototype.onScroll = function (e) {
        var _this = this;
        // console.log('msg----->' + new Date());
        e.preventDefault();
        this.content.ionScroll.subscribe(function ($event) {
            // 详情页
            // const customerDetails = document.getElementById("customer_details_hid");
            // if (customerDetails) {
            //   // 手机盒子高度
            //   let contentBoxHeight;
            //   if (window.innerHeight) {
            //     contentBoxHeight = window.innerHeight;
            //   } else if (document.documentElement.clientHeight) {
            //     contentBoxHeight = document.documentElement.clientHeight;
            //   }
            //   // 页面与盒子高差
            //   const heightDiffer = customerDetails.scrollHeight - contentBoxHeight;
            //   if ($event.detail.scrollTop > heightDiffer + 30) {
            //     if (document.getElementById('customer_details_scroll_id')) {
            //       document.getElementById('customer_details_scroll_id').style.display = 'block';
            //     }
            //   } else {
            //     if (document.getElementById('customer_details_scroll_id')) {
            //       document.getElementById('customer_details_scroll_id').style.display = 'none';
            //     }
            //   }
            // }
            if (document.getElementById('scrollContent') &&
                $event.detail.scrollTop - 44 >= document.getElementById('scrollContent').offsetTop) {
                // add by andrew.wen for 样式优化
                // if (document.getElementById('sg-bg')) {
                //   document.getElementById('sg-bg').style.display = "block";
                // }
                var tab2Collection = document.getElementsByTagName('app-nav-one')[0].getElementsByClassName('buttonNavThreeClassName');
                if (tab2Collection && tab2Collection.length > 0) {
                    var buttonNav_1 = tab2Collection[0];
                    buttonNav_1.style.position = "sticky";
                    buttonNav_1.style.position = "-webkit-sticky";
                    buttonNav_1.style.background = "white";
                    buttonNav_1.style.top = "0";
                    buttonNav_1.style.marginTop = "0"; // # 适配vivo x27手机上展示少了一个像素
                    setTimeout(function () { buttonNav_1.style.zIndex = "13"; }, 200);
                }
                // document.getElementById('topSegment').style.position = "sticky";
                // document.getElementById('topSegment').style.position = "-webkit-sticky";
                // document.getElementById('topSegment').style.top = "0";
                // setTimeout(() => { document.getElementById('topSegment').style.zIndex = "13"; }, 200);
                // this.isHeader = false;
            }
            else {
                if (document.getElementById('homeTopTab')) {
                    document.getElementById('homeTopTab').style.display = "block";
                }
                var tab2Collection = document.getElementsByTagName('app-nav-one')[0].getElementsByClassName('buttonNavThreeClassName');
                if (tab2Collection && tab2Collection.length > 0) {
                    var buttonNav = tab2Collection[0];
                    buttonNav.style.removeProperty('position');
                    buttonNav.style.removeProperty('top');
                    buttonNav.style.removeProperty('z-index');
                }
                // document.getElementById('sg-bg').style.display = "none";
                // document.getElementById('topSegment').style.removeProperty('position');
                // document.getElementById('topSegment').style.removeProperty('top');
                // document.getElementById('topSegment').style.removeProperty('z-index');
                _this.isHeader = true;
            }
        });
        // const scrollTopOffsetTop = this.scrollContentDiv.nativeElement.scrollTop;
        // console.log('msg----->' + scrollTopOffsetTop);
    };
    NavOneComponent.prototype.updateFooterChange = function (obj, index) {
        var _this = this;
        if (obj !== undefined && obj.partLink !== undefined) {
            this.http.post('application/part', {
                viewId: obj.partLink.target,
                sessionId: localStorage.getItem("sessionId"),
                params: obj.partLink.params
            }, function (res) {
                if (res !== undefined && res != null) {
                    _this.tabsService.getPageData(res, function (pageData) {
                        _this.coms = pageData.coms;
                        _this.footerComs = pageData.footerComs;
                    });
                }
            });
        }
    };
    // 点击遮罩层关闭下拉面板
    NavOneComponent.prototype.backdropclick = function () {
        this.openBackdrop = false;
        this.appGlobalService.openBackdrop = false;
    };
    // 刷新当前页
    NavOneComponent.prototype.refreshPage = function () {
        this.getInitInfo(0);
    };
    // 刷新列表事件
    NavOneComponent.prototype.refreshData = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.message.clearMessage();
            _this.message.sendMessage(event);
        }, 100);
    };
    NavOneComponent.prototype.customSegmentChanged = function (e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var index, segmentButton;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                index = e.detail.value;
                segmentButton = this.segment.nativeElement.children[index];
                segmentButton.scrollIntoView({
                    behavior: "smooth",
                    inline: "center",
                    block: "nearest",
                });
                if (this.subTagData.data) {
                    this.http.post("application/part", {
                        viewId: this.subTagData.data[index].partLink.target,
                        sessionId: localStorage.getItem("sessionId"),
                        params: this.subTagData.data[index].partLink.params,
                    }, function (res) {
                        // #616 修改：点击转让服务和选址服务跳到第一屏的画面
                        _this.content.scrollToTop(0);
                        if (res !== undefined && res != null) {
                            setTimeout(function () {
                                _this.subTagData.currentData = JSON.parse(res.script);
                                localStorage.setItem("refreshGrayBgTag", "" + _this.subTagData.currentData.isGrayBg);
                                _this.eventService.eventEmit.emit("refreshGrayBg", "refreshGrayBg");
                                localStorage.setItem("dataMapFixedTabContainer", JSON.stringify(_this.subTagData));
                                _this.eventService.eventEmit.emit('refreshNav1FixedContainer', 'refreshNav1FixedContainer');
                            }, 50);
                        }
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    NavOneComponent.prototype.segmentChanged = function (e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var index, segmentButton, parseData;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                index = e.detail.value;
                segmentButton = this.segment.nativeElement.children[index];
                segmentButton.scrollIntoView({
                    behavior: "smooth",
                    inline: "center",
                    block: "nearest",
                });
                if (this.tagData.data) {
                    this.tagData.currentTab = index;
                    if (localStorage.getItem("topTapPart" + index)) {
                        parseData = JSON.parse(localStorage.getItem("topTapPart" + index));
                        this.tagData.currentData = parseData;
                        localStorage.setItem("refreshGrayBgTag", "" + this.tagData.currentData.isGrayBg);
                        this.eventService.eventEmit.emit("refreshGrayBg", "refreshGrayBg");
                        setTimeout(function () {
                            localStorage.setItem("dataMapTopTabContainer", JSON.stringify(_this.tagData));
                            _this.eventService.eventEmit.emit("refreshTopTabContainer", "refreshTopTabContainer");
                            _this.content.scrollToTop(0);
                        }, 200);
                    }
                    else {
                        this.http.post("application/part", {
                            viewId: this.tagData.data[index].partLink.target,
                            sessionId: localStorage.getItem("sessionId"),
                            params: this.tagData.data[index].partLink.params,
                        }, function (res) {
                            // #616 修改：点击转让服务和选址服务跳到第一屏的画面
                            _this.content.scrollToTop(0);
                            if (res !== undefined && res != null) {
                                setTimeout(function () {
                                    _this.tagData.currentData = JSON.parse(res.script);
                                    localStorage.setItem("refreshGrayBgTag", "" + _this.tagData.currentData.isGrayBg);
                                    _this.eventService.eventEmit.emit("refreshGrayBg", "refreshGrayBg");
                                    localStorage.setItem("dataMapTopTabContainer", JSON.stringify(_this.tagData));
                                    _this.eventService.eventEmit.emit("refreshTopTabContainer", "refreshTopTabContainer");
                                }, 50);
                            }
                        });
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("segment", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NavOneComponent.prototype, "segment", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('superCotainer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NavOneComponent.prototype, "scrollContent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollContent'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NavOneComponent.prototype, "scrollContentDiv", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"])
    ], NavOneComponent.prototype, "content", void 0);
    NavOneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-one',
            template: __webpack_require__(/*! ../entry.page.html */ "./src/app/route/entry/entry.page.html"),
            styles: [__webpack_require__(/*! ../entry.page.scss */ "./src/app/route/entry/entry.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _shared_service_http_service__WEBPACK_IMPORTED_MODULE_11__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_service_app_global_service__WEBPACK_IMPORTED_MODULE_10__["AppGlobalService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _shared_service_map_baiduapi__WEBPACK_IMPORTED_MODULE_12__["MapBaiduService"],
            _shared_service_tabs_service__WEBPACK_IMPORTED_MODULE_13__["TabsService"],
            src_app_shared_service_event_service__WEBPACK_IMPORTED_MODULE_5__["EventService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_4__["ActionSheetService"],
            ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_4__["ModalService"],
            src_app_shared_service_message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"]])
    ], NavOneComponent);
    return NavOneComponent;
}());



/***/ }),

/***/ "./src/app/route/entry/secondComs.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/route/entry/secondComs.component.ts ***!
  \*****************************************************/
/*! exports provided: SecondComsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondComsComponent", function() { return SecondComsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/event.service */ "./src/app/shared/service/event.service.ts");



var SecondComsComponent = /** @class */ (function () {
    function SecondComsComponent(componentFactoryResolver, eventService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.eventService = eventService;
    }
    SecondComsComponent.prototype.ngOnInit = function () {
    };
    // tslint:disable-next-line:use-life-cycle-interface
    SecondComsComponent.prototype.ngOnChanges = function (changes) {
        // const viewContainerRef = this.appAnchor.viewContainerRef;
        // viewContainerRef.clear();
        this.loadComponent();
    };
    SecondComsComponent.prototype.loadComponent = function () {
        var _this = this;
        var viewContainerRef = this.myRef;
        viewContainerRef.clear();
        this.subComs.forEach(function (v) {
            var componentFactory = _this.componentFactoryResolver.resolveComponentFactory(v.component);
            var componentRef = viewContainerRef.createComponent(componentFactory);
            (componentRef.instance).tagData = v.tagData;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], SecondComsComponent.prototype, "subComs", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('secondComs', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])
    ], SecondComsComponent.prototype, "myRef", void 0);
    SecondComsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-second',
            template: '<section>\n' +
                '<ng-template #secondComs></ng-template>\n' +
                '</section>'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _shared_service_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"]])
    ], SecondComsComponent);
    return SecondComsComponent;
}());



/***/ }),

/***/ "./src/app/route/entry/subAnchor.directive.ts":
/*!****************************************************!*\
  !*** ./src/app/route/entry/subAnchor.directive.ts ***!
  \****************************************************/
/*! exports provided: AppSubTabAnchorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSubTabAnchorDirective", function() { return AppSubTabAnchorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppSubTabAnchorDirective = /** @class */ (function () {
    function AppSubTabAnchorDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    AppSubTabAnchorDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appSubAnchor]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
    ], AppSubTabAnchorDirective);
    return AppSubTabAnchorDirective;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _coms_call_call_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../coms/call/call.component */ "./src/app/coms/call/call.component.ts");
/* harmony import */ var _coms_footer_logo_footer_logo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../coms/footer-logo/footer-logo.component */ "./src/app/coms/footer-logo/footer-logo.component.ts");
/* harmony import */ var _route_entry_anchor_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../route/entry/anchor.directive */ "./src/app/route/entry/anchor.directive.ts");
/* harmony import */ var _route_entry_coms_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../route/entry/coms.component */ "./src/app/route/entry/coms.component.ts");
/* harmony import */ var _route_entry_footercoms_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../route/entry/footercoms.component */ "./src/app/route/entry/footercoms.component.ts");
/* harmony import */ var _route_entry_headercoms_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../route/entry/headercoms.component */ "./src/app/route/entry/headercoms.component.ts");
/* harmony import */ var _route_entry_secondComs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../route/entry/secondComs.component */ "./src/app/route/entry/secondComs.component.ts");
/* harmony import */ var _route_entry_subAnchor_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../route/entry/subAnchor.directive */ "./src/app/route/entry/subAnchor.directive.ts");
/* harmony import */ var _route_entry_nav_one_nav_one_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../route/entry/nav-one/nav-one.component */ "./src/app/route/entry/nav-one/nav-one.component.ts");














// import { TimesGapPipe } from './pipe/times-gap.pipe';
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            ],
            declarations: [
                _route_entry_anchor_directive__WEBPACK_IMPORTED_MODULE_7__["AppAnchorDirective"],
                _route_entry_secondComs_component__WEBPACK_IMPORTED_MODULE_11__["SecondComsComponent"],
                _route_entry_footercoms_component__WEBPACK_IMPORTED_MODULE_9__["FooterComsComponent"],
                _route_entry_headercoms_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComsComponent"],
                _coms_call_call_component__WEBPACK_IMPORTED_MODULE_5__["CallComponent"],
                _route_entry_nav_one_nav_one_component__WEBPACK_IMPORTED_MODULE_13__["NavOneComponent"],
                _coms_footer_logo_footer_logo_component__WEBPACK_IMPORTED_MODULE_6__["FooterLogoComponent"],
                _route_entry_subAnchor_directive__WEBPACK_IMPORTED_MODULE_12__["AppSubTabAnchorDirective"],
                _route_entry_coms_component__WEBPACK_IMPORTED_MODULE_8__["ComsComponent"],
            ],
            exports: [
                _route_entry_anchor_directive__WEBPACK_IMPORTED_MODULE_7__["AppAnchorDirective"],
                _route_entry_secondComs_component__WEBPACK_IMPORTED_MODULE_11__["SecondComsComponent"],
                _route_entry_footercoms_component__WEBPACK_IMPORTED_MODULE_9__["FooterComsComponent"],
                _route_entry_headercoms_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComsComponent"],
                _coms_call_call_component__WEBPACK_IMPORTED_MODULE_5__["CallComponent"],
                _route_entry_nav_one_nav_one_component__WEBPACK_IMPORTED_MODULE_13__["NavOneComponent"],
                _coms_footer_logo_footer_logo_component__WEBPACK_IMPORTED_MODULE_6__["FooterLogoComponent"],
                _route_entry_subAnchor_directive__WEBPACK_IMPORTED_MODULE_12__["AppSubTabAnchorDirective"],
                _route_entry_coms_component__WEBPACK_IMPORTED_MODULE_8__["ComsComponent"],
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~tab1-tab1-module~tab2-tab2-module~tab3-tab3-module~tab4-tab4-module~tab5-tab5-module.js.map