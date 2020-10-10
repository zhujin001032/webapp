(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _coms_coms_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../coms/coms.module */ "./src/app/coms/coms.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tabs.router.module */ "./src/app/tabs/tabs.router.module.ts");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/fesm5/ngx-echarts.js");









var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _coms_coms_module__WEBPACK_IMPORTED_MODULE_5__["ComsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_echarts__WEBPACK_IMPORTED_MODULE_8__["NgxEchartsModule"],
                _tabs_router_module__WEBPACK_IMPORTED_MODULE_7__["TabsPageRoutingModule"]
            ],
            declarations: [
                _tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"],
            ],
            exports: [
                _coms_coms_module__WEBPACK_IMPORTED_MODULE_5__["ComsModule"]
            ]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.page.html":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content *ngIf=\"showRefresh\" [scrollEvents]=\"false\">\n\n  <img class=\"empty-img\" src=\" ../../../assets/icon/empty_no@3x.png\" alt=\"\">\n  <p *ngIf=\"!netState\" class=\"empty-title\">网络繁忙</p>\n  <p *ngIf=\"!netState\" class=\"empty-sub-title\">别紧张，试试看刷新页面</p>\n  <p *ngIf=\"netState === 'No network connection'\" class=\"empty-title\">无网络连接</p>\n  <p *ngIf=\"netState === 'No network connection'\" class=\"empty-sub-title\">请检查网络设置</p>\n  <button class=\"empty-btn\" (click)=\"refreshPage()\">刷新</button>\n</ion-content>\n\n<ion-tabs *ngIf=\"!showRefresh\" id=\"ionTabs\" #ionTabs class=\"tab-bar\" (ionTabsDidChange)=\"change($event)\">\n\n  <ion-tab-bar #myTabBar id=\"myTabBar\" slot=\"bottom\">\n    <ion-backdrop *ngIf=\"appGlobalService.openBackdrop\" style=\"opacity:0.3; height:100%;\" id=\"main-backdrop\"\n      (ionBackdropTap)=\"backdropclick()\" [tappable]=\"appGlobalService.openBackdrop\" [visible]=\"true\"\n      [stopPropagation]=\"appGlobalService.openBackdrop\" [ngClass]=\"{'showDrop': !appGlobalService.openBackdrop}\">\n    </ion-backdrop>\n    <ng-container *ngFor=\"let item of appNavigation; let i=index\">\n\n      <!-- <ion-tab-button tab=\"tab{{i+1}}\"  [selected]=\"i === 0 \"(click)=\"tabClick(i+1)\">\n        <ng-container *ngIf=\"i === 0\">\n          <img src='../../assets/icon/{{item.normalIco}}' *ngIf=\"flag!='tab1'\" class=\"img-icon\" />\n          <img src='../../assets/icon/{{item.selectedIco}}' *ngIf=\"flag=='tab1'\" class=\"img-icon\" />\n        </ng-container>\n\n        <ng-container *ngIf=\"i === 1\">\n          <img src='../../assets/icon/{{item.normalIco}}' *ngIf=\"flag!='tab2'\" class=\"img-icon\" />\n          <img src='../../assets/icon/{{item.selectedIco}}' *ngIf=\"flag=='tab2'\" class=\"img-icon\" />\n        </ng-container>\n\n        <ng-container *ngIf=\"i === 2\">\n          <img src='../../assets/icon/{{item.normalIco}}' *ngIf=\"flag!='tab3'\" class=\"img-icon\" />\n          <img src='../../assets/icon/{{item.selectedIco}}' *ngIf=\"flag=='tab3'\" class=\"img-icon\" />\n        </ng-container>\n        <ng-container *ngIf=\"i === 3\">\n          <img src='../../assets/icon/{{item.normalIco}}' *ngIf=\"flag!='tab4'\" class=\"img-icon\" />\n          <img src='../../assets/icon/{{item.selectedIco}}' *ngIf=\"flag=='tab4'\" class=\"img-icon\" />\n        </ng-container>\n        <ng-container *ngIf=\"i === 4\">\n          <img src='../../assets/icon/{{item.normalIco}}' *ngIf=\"flag!='tab5'\" class=\"img-icon\" />\n          <img src='../../assets/icon/{{item.selectedIco}}' *ngIf=\"flag=='tab5'\" class=\"img-icon\" />\n        </ng-container>\n\n        <ion-label>{{item.label}}</ion-label>\n        <ng-container *ngIf=\"item.badge && (item.badge > 99) \">\n          <ion-badge class=\"badge\">99+</ion-badge>\n        </ng-container>\n\n        <ng-container *ngIf=\"item.badge && (item.badge > 0)  && (item.badge &lt;= 99) \">\n          <ion-badge id=\"badgeForTab{{i+1}}\" class=\"badge\">{{item.badge}}</ion-badge>\n        </ng-container>\n      </ion-tab-button> -->\n      <ion-tab-button tab=\"tab{{i+1}}\" [selected]=\"i === 0\">\n        <ng-container *ngIf=\"i === 0\">\n          <img src='../../assets/icon/{{item.normalIco}}' *ngIf=\"flag !== 'tab1'\" class=\"img-icon\" />\n          <img src='../../assets/icon/{{item.selectedIco}}' *ngIf=\"flag === 'tab1'\" class=\"img-icon\" />\n          <ion-label [ngClass]=\"{'label-selected': flag === 'tab1' , 'label-normal': flag !=='tab1'}\">{{item.label}}\n          </ion-label>\n        </ng-container>\n\n        <ng-container *ngIf=\"i === 1\">\n          <img src='../../assets/icon/{{item.normalIco}}' *ngIf=\"flag !== 'tab2'\" class=\"img-icon\" />\n          <img src='../../assets/icon/{{item.selectedIco}}' *ngIf=\"flag === 'tab2'\" class=\"img-icon\" />\n          <ion-label [ngClass]=\"{'label-selected': flag === 'tab2' , 'label-normal': flag !=='tab2'}\">{{item.label}}\n          </ion-label>\n        </ng-container>\n\n        <ng-container *ngIf=\"i === 2\">\n          <img src='../../assets/icon/{{item.normalIco}}' *ngIf=\"flag !== 'tab3'\" class=\"img-icon\" />\n          <img src='../../assets/icon/{{item.selectedIco}}' *ngIf=\"flag === 'tab3'\" class=\"img-icon\" />\n          <ion-label [ngClass]=\"{'label-selected': flag === 'tab3' , 'label-normal': flag !=='tab3'}\">{{item.label}}\n          </ion-label>\n        </ng-container>\n        <ng-container *ngIf=\"i === 3\">\n          <img src='../../assets/icon/{{item.normalIco}}' *ngIf=\"flag !== 'tab4'\" class=\"img-icon\" />\n          <img src='../../assets/icon/{{item.selectedIco}}' *ngIf=\"flag === 'tab4'\" class=\"img-icon\" />\n          <ion-label [ngClass]=\"{'label-selected': flag === 'tab4' , 'label-normal': flag !=='tab4'}\">{{item.label}}\n          </ion-label>\n        </ng-container>\n        <ng-container *ngIf=\"i === 4\">\n          <img src='../../assets/icon/{{item.normalIco}}' *ngIf=\"flag !== 'tab5'\" class=\"img-icon\" />\n          <img src='../../assets/icon/{{item.selectedIco}}' *ngIf=\"flag ==='tab5'\" class=\"img-icon\" />\n          <ion-label [ngClass]=\"{'label-selected': flag === 'tab5' , 'label-normal': flag !=='tab5'}\">{{item.label}}\n          </ion-label>\n        </ng-container>\n\n\n        <ng-container *ngIf=\"item.badge && (item.badge > 99) \">\n          <ion-badge class=\"badge\">99+</ion-badge>\n        </ng-container>\n\n        <ng-container *ngIf=\"item.badge && (item.badge > 0)  && (item.badge &lt;= 99) \">\n          <ion-badge id=\"badgeForTab{{i+1}}\" class=\"badge\">{{item.badge}}</ion-badge>\n        </ng-container>\n      </ion-tab-button>\n    </ng-container>\n\n    <!-- <ion-tab-button tab=\"tab1\">\n        <img src='../../assets/icon/tabbar_icon_home_nor@3x.png' *ngIf=\"flag!='tab1'\" class=\"img-icon\"/>\n        <img src='../../assets/icon/tabbar_icon_home_pre@3x.png' *ngIf=\"flag=='tab1'\" class=\"img-icon\"/>\n      <ion-label>首页</ion-label>\n    </ion-tab-button> -->\n\n    <!-- <ion-tab-button tab=\"tab2\">\n        <img src='../../assets/icon/tabbar_icon_release_nor@3x.png' *ngIf=\"flag!='tab2'\" class=\"img-icon\"/>\n        <img src='../../assets/icon/tabbar_icon_release_pre@3x.png' *ngIf=\"flag=='tab2'\" class=\"img-icon\"/>\n      <ion-label>发布</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab3\">\n        <img src='../../assets/icon/tabbar_icon_my_nor@3x.png' *ngIf=\"flag!='tab3'\" class=\"img-icon\"/>\n        <img src='../../assets/icon/tabbar_icon_my_press@3x.png' *ngIf=\"flag=='tab3'\" class=\"img-icon\"/>\n      <ion-label>我的</ion-label>\n    </ion-tab-button> -->\n  </ion-tab-bar>\n\n</ion-tabs>"

/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#myTabBar {\n  background: white;\n  box-shadow: 0px -1px 6px 0px rgba(133, 136, 148, 0.1);\n  border-top: 0px;\n  position: relative; }\n\n.img-icon {\n  width: 1.5rem;\n  height: 1.5rem; }\n\nion-label {\n  font-size: 0.625rem;\n  font-weight: 400;\n  margin-top: 0.125rem;\n  margin-bottom: 0px; }\n\n.label-normal {\n  color: #B6B7BF; }\n\n.label-selected {\n  color: #FF6314; }\n\n.badge {\n  --background: #FF6314;\n  left: calc(50% + 0.125rem);\n  top: 0.05rem;\n  border-radius: 0.8rem;\n  border: 0.13rem solid white;\n  min-width: 1.45rem;\n  font-size: 0.75rem;\n  font-weight: normal; }\n\n.empty-img {\n  width: 11.25rem;\n  height: 9.56rem;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 23.76%; }\n\n.empty-title {\n  height: 1rem;\n  font-size: 1rem;\n  color: #333333;\n  line-height: 1rem;\n  margin-bottom: 0.63rem;\n  margin-top: 1.88rem;\n  text-align: center; }\n\n.empty-sub-title {\n  height: 0.75rem;\n  font-size: 0.75rem;\n  color: #858894;\n  line-height: 0.75rem;\n  margin-bottom: 1.25rem;\n  text-align: center; }\n\n.empty-btn {\n  width: 5.63rem;\n  height: 2rem;\n  background: linear-gradient(86deg, #ff9500 0%, #ff6314 100%);\n  border-radius: 1.09rem;\n  text-align: center;\n  font-size: 0.81rem;\n  color: white;\n  margin-left: auto;\n  margin-right: auto;\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXNvbmhlL25ld01ldGFEYXRhQXBwMy9zcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxpQkFBOEI7RUFDOUIscURBQWlEO0VBQ2pELGVBQWM7RUFDZCxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxhQUFZO0VBQUMsY0FBYyxFQUFBOztBQUsvQjtFQUNJLG1CQUFrQjtFQUNsQixnQkFBZTtFQUNmLG9CQUFvQjtFQUNwQixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDQSxjQUFjLEVBQUE7O0FBRWQ7RUFDQSxjQUFjLEVBQUE7O0FBTWQ7RUFDSSxxQkFBYTtFQUNiLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGVBQWU7RUFDZixlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsWUFBVztFQUNYLGVBQWM7RUFDZCxjQUFzQjtFQUN0QixpQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxlQUFjO0VBQ2Qsa0JBQWlCO0VBQ2pCLGNBQXlCO0VBQ3pCLG9CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsY0FBYTtFQUNiLFlBQVc7RUFDWCw0REFBNkU7RUFDN0Usc0JBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixrQkFBaUI7RUFDakIsWUFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4jbXlUYWJCYXJ7XG4gICAgYmFja2dyb3VuZDpyZ2JhKDI1NSwyNTUsMjU1LDEpO1xuICAgIGJveC1zaGFkb3c6MHB4IC0xcHggNnB4IDBweCByZ2JhKDEzMywxMzYsMTQ4LDAuMSk7IFxuICAgIGJvcmRlci10b3A6MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5pbWctaWNvbntcbiAgICB3aWR0aDoxLjVyZW07aGVpZ2h0OiAxLjVyZW07XG59XG4vLyAudGFiLXNlbGVjdGVke1xuLy8gICAgIC0tY29sb3Itc2VsZWN0ZWQ6I0ZGNjMxNCA7XG4vLyB9XG5pb24tbGFiZWx7XG4gICAgZm9udC1zaXplOjAuNjI1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OjQwMDtcbiAgICBtYXJnaW4tdG9wOiAwLjEyNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4ubGFiZWwtbm9ybWFse1xuY29sb3I6ICNCNkI3QkY7XG59XG4ubGFiZWwtc2VsZWN0ZWR7XG5jb2xvcjogI0ZGNjMxNDtcbn1cbi8vIGlvbi10YWItYnV0dG9uIHtcbi8vICAgICAtLWNvbG9yLXNlbGVjdGVkOiNGRjYzMTQ7IFxuLy8gICAgIC0tY29sb3I6I0I2QjdCRjtcbi8vIH1cbi5iYWRnZXtcbiAgICAtLWJhY2tncm91bmQ6ICNGRjYzMTQ7XG4gICAgbGVmdDogY2FsYyg1MCUgKyAwLjEyNXJlbSk7XG4gICAgdG9wOiAwLjA1cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcbiAgICBib3JkZXI6IDAuMTNyZW0gc29saWQgd2hpdGU7XG4gICAgbWluLXdpZHRoOiAxLjQ1cmVtO1xuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uZW1wdHktaW1nIHtcbiAgICB3aWR0aDogMTEuMjVyZW07XG4gICAgaGVpZ2h0OiA5LjU2cmVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAyMy43NiU7XG4gIH1cbiAgLmVtcHR5LXRpdGxlIHtcbiAgICBoZWlnaHQ6MXJlbTtcbiAgICBmb250LXNpemU6MXJlbTtcbiAgICBjb2xvcjpyZ2JhKDUxLDUxLDUxLDEpO1xuICAgIGxpbmUtaGVpZ2h0OjFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC42M3JlbTtcbiAgICBtYXJnaW4tdG9wOiAxLjg4cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuZW1wdHktc3ViLXRpdGxlIHtcbiAgICBoZWlnaHQ6MC43NXJlbTtcbiAgICBmb250LXNpemU6MC43NXJlbTtcbiAgICBjb2xvcjpyZ2JhKDEzMywxMzYsMTQ4LDEpO1xuICAgIGxpbmUtaGVpZ2h0OjAuNzVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmVtcHR5LWJ0biB7XG4gICAgd2lkdGg6NS42M3JlbTtcbiAgICBoZWlnaHQ6MnJlbTtcbiAgICBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCg4NmRlZyxyZ2JhKDI1NSwxNDksMCwxKSAwJSxyZ2JhKDI1NSw5OSwyMCwxKSAxMDAlKTtcbiAgICBib3JkZXItcmFkaXVzOjEuMDlyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTowLjgxcmVtO1xuICAgIGNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsMSk7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _jiguang_ionic_jpush_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @jiguang-ionic/jpush/ngx */ "./node_modules/@jiguang-ionic/jpush/ngx/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_service_app_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../shared/service/app-global.service */ "./src/app/shared/service/app-global.service.ts");
/* harmony import */ var _shared_service_event_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/service/event.service */ "./src/app/shared/service/event.service.ts");
/* harmony import */ var _shared_service_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/service/http.service */ "./src/app/shared/service/http.service.ts");
/* harmony import */ var _shared_service_map_baiduapi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/service/map.baiduapi */ "./src/app/shared/service/map.baiduapi.ts");













var TabsPage = /** @class */ (function () {
    function TabsPage(platform, http, route, router, appGlobalService, mapBaiduService, eventService, ngZone, jPush, splashScreen) {
        var _this = this;
        this.platform = platform;
        this.http = http;
        this.route = route;
        this.router = router;
        this.appGlobalService = appGlobalService;
        this.mapBaiduService = mapBaiduService;
        this.eventService = eventService;
        this.ngZone = ngZone;
        this.jPush = jPush;
        this.splashScreen = splashScreen;
        this.flag = "tab1";
        this.defaultIndex = -111;
        this.isClick = true;
        this.showRefresh = false;
        // 位置对象
        this.positionInfo = {};
        this.lastIndex = 1;
        this.version = 0;
        // 启动或唤醒应用程序时会触发该事件
        this.onOpenNotification = function (event) {
            console.log("open notification: \n" + JSON.stringify(event));
            _this.managePushMessage(event);
        };
        // 前台收到推送
        this.onReceiveNotification = function (event) {
            console.log("onReceiveNotification :\n" + JSON.stringify(event));
            _this.managePushMessage(event);
        };
        // 应用程序处于后台时收到推送会触发该事件
        this.onBackgroundNotification = function (event) {
            console.log("onBackgroundNotification :\n" + JSON.stringify(event));
            _this.managePushMessage(event);
        };
        // 收到应用内消息时触发这个事件, 推荐使用事件的方式传递，但同时保留了 receiveMessageIniOSCallback 的回调函数，兼容以前的代码。
        this.onReceiveMessage = function (event) {
            try {
                var message = event.content;
            }
            catch (exception) { }
        };
    }
    TabsPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log("tabs init");
        if (this.eventService.eventEmit.listenerCount("selectTabsByIndex") > 0) {
            this.eventService.eventEmit.removeListener("selectTabsByIndex");
        }
        // add by andrew.wen for 刷新指定tabs
        this.eventService.eventEmit.on("selectTabsByIndex", function (data) {
            if (localStorage.getItem("selectTabsByIndexTag")) {
                var selectStr = localStorage.getItem("selectTabsByIndexTag");
                localStorage.removeItem("selectTabsByIndexTag");
                _this.tabs.select(selectStr);
            }
        });
        document.addEventListener("jpush.openNotification", this.onOpenNotification, false);
        document.addEventListener("jpush.receiveNotification", this.onReceiveNotification, false);
        document.addEventListener("jpush.backgroundNotification", this.onBackgroundNotification, false);
        document.addEventListener("jpush.receiveMessage", this.onReceiveMessage, false);
        if (localStorage.getItem("position") === null) {
            // add by andrew.wen 此处需要默认给个中心点的坐标，否则不允许定位的手机不会获取到统计信息。
            var position = {
                name: this.appGlobalService.defaultCityName,
                code: this.appGlobalService.defaultCityId,
                center: this.appGlobalService.defaultCityCenter,
            };
            localStorage.setItem("position", JSON.stringify(position));
            localStorage.setItem("currentCityPosition", JSON.stringify(position));
        }
        this.clearBadage();
        // 以下三选一
        // web预览模式
        // this.preViewApp();
        // this.debugApp(533, "pxw_t_"); // 铺小旺旺测试
        // this.debugApp(510, "pxw_t_"); // 铺小旺旺测试
        // this.debugApp(534, "ppw_t_"); // 铺铺旺测试
        // this.debugApp(522, "ppw_t_"); // 铺铺旺测试
        // this.debugApp(236, "pxw_p_"); // 铺小旺
        // this.debugApp(235, "ppw_p_"); // 铺旺
        // 发布铺旺旺
        this.releaseApp(410); // 3.10.0 为版本号
        // 发布铺小旺
        // this.releasePxwApp(750);
        try {
            this.platform.ready().then(function () {
                // tslint:disable-next-line:no-string-literal
                if (window["Umeng"]) {
                    if (_this.platform.is("ios") &&
                        localStorage.getItem("client") !== "BROWSER") {
                        if (_this.appGlobalService.clientType === "pxw") {
                            window["Umeng"].init(_this.appGlobalService.umengPxwIosAppkey, _this.appGlobalService.umengPxwIosChannel);
                        }
                        else {
                            window["Umeng"].init(_this.appGlobalService.umengIosAppkey, _this.appGlobalService.umengIosChannel);
                        }
                    }
                    else if (_this.platform.is("android") &&
                        localStorage.getItem("client") !== "BROWSER") {
                        if (_this.appGlobalService.clientType === "pxw") {
                            window["Umeng"].init(_this.appGlobalService.umengPxwAndroidAppkey, _this.appGlobalService.umengPxwAndroidChannel);
                        }
                        else {
                            window["Umeng"].init(_this.appGlobalService.umengAndroidAppkey, _this.appGlobalService.umengAndroidChannel);
                        }
                    }
                    var eventData = {};
                    if (localStorage.getItem("device")) {
                        // tslint:disable-next-line:no-string-literal
                        eventData["device"] = localStorage.getItem("device");
                    }
                    if (localStorage.getItem("userId")) {
                        // tslint:disable-next-line:no-string-literal
                        eventData["userId"] = localStorage.getItem("userId");
                    }
                    else {
                        // 游客访问
                        // tslint:disable-next-line:no-string-literal
                        eventData["userId"] = "guest";
                    }
                    window["Umeng"].onEventWithParameters("enter_app_with_Event", eventData);
                }
            });
        }
        catch (error) {
            console.log("error----->umeng error" + JSON.stringify(error));
        }
    };
    // 处理 客户、员工 当前定位城市
    TabsPage.prototype.setCityPosition = function () {
        console.log("setCityPosition-----");
        // 触发拿 第一次城市信息
        if (this.appGlobalService.clientType === "ppw") {
            var firstPostion = localStorage.getItem("firstPostion");
            if (!firstPostion) {
                localStorage.setItem("firstPostion", localStorage.getItem("position"));
            }
        }
    };
    // web预览模式
    TabsPage.prototype.preViewApp = function () {
        var _this = this;
        this.appGlobalService.isPreview = true;
        this.route.queryParams.subscribe(function (params) {
            _this.sessionId = params.sessionId;
            if (!_this.sessionId) {
                _this.sessionId = localStorage.getItem("sessionId");
            }
            localStorage.setItem("sessionId", _this.sessionId);
        });
        if (this.sessionId && this.sessionId !== "null") {
            var params = {
                sessionId: this.sessionId,
                cityId: this.positionInfo.code,
            };
            // 请求获取新数据
            console.log("preViewApp getting app tab data \n");
            this.http.post("application/home/", params, function (res) {
                // 请求数据成功
                if (res) {
                    _this.getPageData(res);
                }
                else {
                    // 请求数据失败
                    _this.appGlobalService.showToast(res.message, 2000, "middle");
                }
            });
        }
        else {
            console.log("无法获取sessionId");
        }
    };
    // if change projectId , use new sessionId if projectId == -100 show Message
    TabsPage.prototype.checkProject = function (target, version, callback) {
        var _this = this;
        var that = this;
        if (target) {
            this.http.get("application/getProjectId/" + target + "/" + version, function (res) {
                if (res.projectId && res.projectId === "-100") {
                    localStorage.setItem("projectId", res.projectId);
                    _this.appGlobalService.showToast(res.message, 3000, "middle");
                    callback(false);
                }
                else if (res.projectId &&
                    localStorage.getItem("projectId") !== res.projectId) {
                    localStorage.setItem("projectId", res.projectId);
                    // 当是微信小程序传来的session 时 不重新请求新的session，前提是 不带参数的session接口 与 最新code对应的session指向同一个项目id，在铺铺旺最新App 审核通过后在更新小程序
                    if (localStorage.getItem("sessionIdFromWX") === "true") {
                        callback(false);
                    }
                    else {
                        callback(true);
                    }
                }
                else {
                    callback(false);
                }
            }, function (err) {
                callback(false);
            });
        }
        else {
            callback(false);
        }
    };
    /** 打包测试 116 是测试项目 id */
    TabsPage.prototype.debugApp = function (pId, pushAlias) {
        var _this = this;
        var that = this;
        if (pId) {
            this.appGlobalService.debugAppId = pId;
        }
        if (pushAlias) {
            this.appGlobalService.pushAlias = pushAlias;
        }
        if (localStorage.getItem("sessionId") !== "null" &&
            localStorage.getItem("sessionId") !== undefined) {
            this.sessionId = localStorage.getItem("sessionId");
            var params = {
                sessionId: this.sessionId,
            };
            console.log("上次session-----", this.sessionId);
            this.http.post("application/home/", params, function (res) {
                _this.getPageData(res);
            }, function (error) {
                // 处理因home接口session过期而导致的白屏问题
                if (error && error.code === "5502") {
                    // 如已经重新请求过sessionId 则不在请求，显示错误页面可以点击刷新 重新请求
                    if (localStorage.getItem("reGetSession")) {
                        that.getNetState();
                    }
                    else {
                        that.http.getSession(function (session) {
                            localStorage.setItem("reGetSession", "true");
                            that.debugApp(_this.appGlobalService.debugAppId, _this.appGlobalService.pushAlias);
                        }, function (err) {
                            that.getNetState();
                        });
                    }
                }
                else {
                    // home fail
                    that.getNetState();
                }
            });
        }
        else {
            that.debugAppGetNewSessionId();
        }
    };
    TabsPage.prototype.debugAppGetNewSessionId = function () {
        var _this = this;
        var that = this;
        this.http.get("application/debug/" + this.appGlobalService.debugAppId, function (ress) {
            _this.sessionId = ress.sessionId;
            localStorage.setItem("sessionId", _this.sessionId);
            console.log(_this.sessionId);
            var params = {
                sessionId: _this.sessionId,
            };
            _this.http.post("application/home/", params, function (res) {
                _this.getPageData(res);
            }, function (error) {
                // 处理因home接口session过期而导致的白屏问题
                if (error && error.code === "5502") {
                    // 如已经重新请求过sessionId 则不在请求，显示错误页面可以点击刷新 重新请求
                    if (localStorage.getItem("reGetSession")) {
                        that.getNetState();
                    }
                    else {
                        that.http.getSession(function (session) {
                            localStorage.setItem("reGetSession", "true");
                            that.debugApp(_this.appGlobalService.debugAppId, _this.appGlobalService.pushAlias);
                        }, function (err) {
                            that.getNetState();
                        });
                    }
                }
                else {
                    that.getNetState();
                }
            });
        }, function (err) {
            that.getNetState();
        });
    };
    // 发布
    TabsPage.prototype.releaseApp = function (version) {
        var _this = this;
        this.version = version;
        var that = this;
        this.appGlobalService.getSessionPath = "application/openApp/xw/" + version;
        this.appGlobalService.pushAlias = "ppw_p_";
        this.checkProject("xw", version, function (res) {
            if (res) {
                localStorage.removeItem("sessionId");
                that.releaseAppGetNewSessionId(version);
            }
            else {
                if (localStorage.getItem("sessionId")) {
                    _this.sessionId = localStorage.getItem("sessionId");
                    _this.appGlobalService.sendSessionIdToWechat();
                    var params = {
                        sessionId: _this.sessionId,
                    };
                    console.log("上次session-----", _this.sessionId);
                    _this.http.post("application/home/", params, function (res) {
                        _this.getPageData(res);
                    }, function (error) {
                        // 处理因home接口session过期而导致的白屏问题
                        if (error && error.code === "5502") {
                            // 如已经重新请求过sessionId 则不在请求，显示错误页面可以点击刷新 重新请求
                            if (localStorage.getItem("reGetSession")) {
                                that.getNetState();
                            }
                            else {
                                that.http.getSession(function (session) {
                                    localStorage.setItem("reGetSession", "true");
                                    that.releaseApp(version);
                                }, function (err) {
                                    that.getNetState();
                                });
                            }
                        }
                        else {
                            // home 失败刷新
                            that.getNetState();
                        }
                    });
                }
                else {
                    that.releaseAppGetNewSessionId(version);
                }
            }
        });
    };
    TabsPage.prototype.releaseAppGetNewSessionId = function (version) {
        var _this = this;
        var that = this;
        this.http.get("application/openApp/xw/" + version, function (ress) {
            _this.sessionId = ress.sessionId;
            localStorage.setItem("sessionId", _this.sessionId);
            console.log(_this.sessionId);
            localStorage.removeItem("sendedSessionId");
            _this.appGlobalService.sendSessionIdToWechat();
            _this.router.events
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (e) { return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }))
                .subscribe(function (e) {
                console.log(e);
                if (e.url.indexOf("/details?") > -1) {
                    sessionStorage.setItem("end", "true");
                    _this.eventService.emit("end", "true");
                    return;
                }
            });
            var params = {
                sessionId: _this.sessionId,
            };
            _this.http.post("application/home/", params, function (res) {
                _this.getPageData(res);
            }, function (error) {
                // 处理因home接口session过期而导致的白屏问题
                if (error && error.code === "5502") {
                    // 如已经重新请求过sessionId 则不在请求，显示错误页面可以点击刷新 重新请求
                    if (localStorage.getItem("reGetSession")) {
                        that.getNetState();
                    }
                    else {
                        that.http.getSession(function (session) {
                            localStorage.setItem("reGetSession", "true");
                            that.releaseApp(version);
                        }, function (err) {
                            that.getNetState();
                        });
                    }
                }
                else {
                    // home 失败刷新
                    that.getNetState();
                }
            });
        }, function (err) {
            // 处理因session接口失败的白屏问题 刷新
            that.getNetState();
        });
    };
    // 发布铺小旺
    TabsPage.prototype.releasePxwApp = function (version) {
        var _this = this;
        var that = this;
        this.version = version;
        this.appGlobalService.getSessionPath = "application/openApp/pxw/" + version;
        this.appGlobalService.pushAlias = "pxw_p_";
        this.checkProject("pxw", version, function (res) {
            if (res) {
                localStorage.removeItem("sessionId");
                that.releasePxwAppGetNewSessionId(version);
            }
            else {
                if (localStorage.getItem("sessionId")) {
                    _this.sessionId = localStorage.getItem("sessionId");
                    console.log("上次session-----", _this.sessionId);
                    var params = {
                        sessionId: _this.sessionId,
                    };
                    _this.http.post("application/home/", params, function (res) {
                        _this.getPageData(res);
                    }, function (error) {
                        // 处理因home接口session过期而导致的白屏问题
                        if (error && error.code === "5502") {
                            // 如已经重新请求过sessionId 则不在请求，显示错误页面可以点击刷新 重新请求
                            if (localStorage.getItem("reGetSession")) {
                                that.getNetState();
                            }
                            else {
                                that.http.getSession(function (session) {
                                    localStorage.setItem("reGetSession", "true");
                                    that.releasePxwApp(version);
                                }, function (err) {
                                    that.getNetState();
                                });
                            }
                        }
                        else {
                            // home 失败刷新
                            that.getNetState();
                        }
                    });
                }
                else {
                    that.releasePxwAppGetNewSessionId(version);
                }
            }
        });
    };
    TabsPage.prototype.releasePxwAppGetNewSessionId = function (version) {
        var _this = this;
        var that = this;
        this.http.get("application/openApp/pxw/" + version, function (ress) {
            _this.sessionId = ress.sessionId;
            localStorage.setItem("sessionId", _this.sessionId);
            console.log(_this.sessionId);
            var params = {
                sessionId: _this.sessionId,
            };
            _this.http.post("application/home/", params, function (res) {
                _this.getPageData(res);
            }, function (error) {
                // 处理因home接口session过期而导致的白屏问题
                if (error && error.code === "5502") {
                    // 如已经重新请求过sessionId 则不在请求，显示错误页面可以点击刷新 重新请求
                    if (localStorage.getItem("reGetSession")) {
                        that.getNetState();
                    }
                    else {
                        that.http.getSession(function (session) {
                            localStorage.setItem("reGetSession", "true");
                            that.releasePxwApp(version);
                        }, function (err) {
                            that.getNetState();
                        });
                    }
                }
                else {
                    // home 失败刷新
                    that.getNetState();
                }
            });
        }, function (err) {
            // 处理因session接口失败的白屏问题 刷新
            that.getNetState();
        });
    };
    // App
    TabsPage.prototype.getPageData = function (res) {
        var _this = this;
        this.showRefresh = false;
        if (res) {
            var pageData = JSON.parse(res.script);
            this.appGlobalService.clientType = pageData.clientType;
            this.setCityPosition();
            this.appNavigation =
                JSON.stringify(pageData.navgtion) !== "{}" ? pageData.navgtion : false;
            console.log("got app tab data \n", this.appNavigation);
            localStorage.setItem("appNav", JSON.stringify(this.appNavigation));
            this.eventService.eventEmit.emit("appNav", "1");
            // 预览需要手动控制路由跳转一次
            if (this.appGlobalService.isPreview) {
                for (var i = 0; i < this.appNavigation.length; i++) {
                    if (this.appNavigation[i].check) {
                        console.log("defaul index ===== ", i, this.appNavigation[i].label);
                        this.defaultIndex = i;
                        this.getDefaultPageData(this.defaultIndex + 1, +this.appNavigation[this.defaultIndex].target);
                        break;
                    }
                }
                if (this.defaultIndex === -111) {
                    this.defaultIndex = 0;
                    this.getDefaultPageData(this.defaultIndex + 1, +this.appNavigation[this.defaultIndex].target);
                }
            }
        }
        if (this.appGlobalService.clientType === "ppw") {
            this.mapBaiduService.refreshWatchPosition(function () {
                _this.ngZone.runOutsideAngular(function () {
                    _this.ngZone.run(function () {
                        _this.eventService.emit("getLocationDone", "true");
                    });
                });
            });
        }
    };
    TabsPage.prototype.getDefaultPageData = function (index, viewId) {
        var path = "home/tab" + index;
        console.log("preview ============================default path", path);
        console.log("preview =========================init app city:\n", localStorage.getItem("position"));
        localStorage.setItem("tabPath", path);
        // this.router.navigate([path], { queryParams: { viewId } });
        this.router.navigate([path]);
    };
    TabsPage.prototype.change = function (event) {
        this.appGlobalService.openBackdrop = false;
        this.flag = event.tab; // event.detail.tab;
        if (this.flag) {
            var path = "home/" + this.flag;
            console.log("===================================default path", path);
            console.log("===========================init app city:\n", localStorage.getItem("position"));
            localStorage.setItem("tabPath", path);
        }
    };
    // 减逻辑
    TabsPage.prototype.setBadgeForKeyValue = function (key, num) {
        var index = +key.substring(key.length - 1) - 1;
        var item = this.appNavigation[index];
        var badge = +(item.badge - num);
        item.badge = badge;
        if (badge <= 0) {
            item.badge = 0;
        }
    };
    TabsPage.prototype.setMsgBadgeValue = function (key, num) {
        var index = +key.substring(key.length - 1) - 1;
        var item = this.appNavigation[index];
        if (item.badge === undefined) {
            item.badge = 0;
        }
        var badge = +(item.badge + num);
        if (badge <= 0) {
            item.badge = 0;
        }
        item.badge = badge;
    };
    // 设置初始值
    TabsPage.prototype.firstBadgeForKeyValue = function (key, num) {
        var index = +key.substring(key.length - 1) - 1;
        var item = this.appNavigation[index];
        item.badge = num;
        if (num <= 0) {
            item.badge = 0;
        }
    };
    TabsPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        // obj 结构{tab1:10}
        this.eventService.eventEmit.on("badgeForTab", function (obj) {
            var key = "";
            if (obj.tab1 >= 0) {
                key = "tab1";
                _this.setBadgeForKeyValue(key, obj[key]);
            }
            if (obj.tab2 >= 0) {
                key = "tab2";
                _this.setBadgeForKeyValue(key, obj[key]);
            }
            if (obj.tab3 >= 0) {
                key = "tab3";
                _this.setBadgeForKeyValue(key, obj[key]);
            }
            if (obj.tab4 >= 0) {
                key = "tab4";
                _this.setBadgeForKeyValue(key, obj[key]);
            }
            if (obj.tab5 >= 0) {
                key = "tab5";
                _this.setBadgeForKeyValue(key, obj[key]);
            }
        });
        // 更新红点信息
        this.eventService.eventEmit.on("updateMsgBadge", function (obj) {
            if (localStorage.getItem("isUpdateMsgBadgeTag")) {
                localStorage.removeItem("isUpdateMsgBadgeTag");
                var key = "";
                if (obj.tab3 >= 0) {
                    key = "tab3";
                    _this.updateTab3MessageBadge("spanBadge");
                    _this.setMsgBadgeValue(key, obj[key]);
                }
            }
        });
        // 清除红点信息
        this.eventService.eventEmit.on("initMsgBadge", function (obj) {
            if (localStorage.getItem("isInitMsgBadgeTag")) {
                localStorage.removeItem("isInitMsgBadgeTag");
                _this.updateTab3MessageBadge();
            }
        });
        this.eventService.eventEmit.on("firstBadgeForTab", function (obj) {
            var key = "";
            if (obj.tab1 >= 0) {
                key = "tab1";
                _this.firstBadgeForKeyValue(key, obj[key]);
            }
            if (obj.tab2 >= 0) {
                key = "tab2";
                _this.firstBadgeForKeyValue(key, obj[key]);
            }
            if (obj.tab3 >= 0) {
                key = "tab3";
                _this.firstBadgeForKeyValue(key, obj[key]);
            }
            if (obj.tab4 >= 0) {
                key = "tab4";
                _this.firstBadgeForKeyValue(key, obj[key]);
            }
            if (obj.tab5 >= 0) {
                key = "tab5";
                _this.firstBadgeForKeyValue(key, obj[key]);
            }
        });
    };
    // {
    //   "aps":{
    //       "alert":"你好铺铺旺",
    //       "badge":4,
    //       "sound":""
    //   },
    //   "extras":{
    //       "messageType":"1",
    //       "params":"{name:sz}",
    //       "target":"58801",
    //       "url":"http://www.baidu.com"
    //   },
    // }
    TabsPage.prototype.clearBadage = function () {
        this.jPush.resetBadge();
        if (localStorage.getItem("platform") === "ios") {
            // iOS
            this.jPush.setApplicationIconBadgeNumber(0);
        }
        else {
            // Android
            this.jPush.clearAllNotification();
        }
    };
    TabsPage.prototype.managePushMessage = function (obj) {
        console.log("obj~~~~~", JSON.parse(JSON.stringify(obj)));
        var extras = obj.extras;
        console.log("extras~~~~~", extras);
        var title = obj.aps.alert;
        console.log("aps~~~~~", title);
        if (extras.messageType === "0") {
            return;
        }
        else if (extras.messageType === "1" &&
            extras.target &&
            extras.target.length > 0) {
            console.log("link~~~~~");
            var params = {
                pageId: extras.target,
                params: extras.params ? extras.params : {},
                sessionId: localStorage.getItem("sessionId"),
            };
            this.appGlobalService.goToForward(params);
        }
        else if (extras.messageType === "2" && extras.url && extras.url.length) {
            this.appGlobalService.openUrl(title, extras.url);
        }
    };
    // 更新tab3 消息红点
    TabsPage.prototype.updateTab3MessageBadge = function (className) {
        // 需要判断当前是在tab1~tab5 还是nav add by andrew.wen
        var ionRouterOutlet = document.getElementsByTagName("ion-router-outlet");
        if (ionRouterOutlet && ionRouterOutlet[1]) {
            try {
                var tabTtmlCollection = ionRouterOutlet[1];
                var len = tabTtmlCollection.children.length;
                for (var i = 0; i < len; i++) {
                    var nodeName = String(tabTtmlCollection.children[i].nodeName);
                    if (nodeName.indexOf("TAB3") > -1) {
                        var tempTabObj = tabTtmlCollection.children[i];
                        var tmp = tempTabObj.children[0].children[1].children[0]
                            .children[1];
                        this.appGlobalService.invitationMsgBdge = className ? true : false;
                        tmp.className = className ? className : "";
                        break;
                    }
                }
            }
            catch (e) {
                console.log("msg----->," + JSON.stringify(e));
            }
        }
    };
    TabsPage.prototype.refreshPage = function () {
        if (this.appGlobalService.getSessionPath ===
            "application/openApp/xw/" + this.version) {
            this.releaseApp(this.version);
        }
        else if (this.appGlobalService.getSessionPath ===
            "application/openApp/pxw/" + this.version) {
            this.releasePxwApp(this.version);
        }
        else {
            this.debugApp();
        }
    };
    TabsPage.prototype.getNetState = function () {
        if (localStorage.getItem("netState") === "No network connection") {
            this.netState = localStorage.getItem("netState");
        }
        else {
            this.netState = "";
        }
        this.showRefresh = true;
        // 清除sessionId
        localStorage.removeItem("sessionId");
        localStorage.removeItem("reGetSession");
        this.splashScreen.hide();
    };
    TabsPage.prototype.backdropclick = function () {
        this.appGlobalService.openBackdrop = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("ionTabs", null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTabs"])
    ], TabsPage.prototype, "tabs", void 0);
    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-tabs",
            template: __webpack_require__(/*! ./tabs.page.html */ "./src/app/tabs/tabs.page.html"),
            styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _shared_service_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_service_app_global_service__WEBPACK_IMPORTED_MODULE_7__["AppGlobalService"],
            _shared_service_map_baiduapi__WEBPACK_IMPORTED_MODULE_10__["MapBaiduService"],
            _shared_service_event_service__WEBPACK_IMPORTED_MODULE_8__["EventService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _jiguang_ionic_jpush_ngx__WEBPACK_IMPORTED_MODULE_5__["JPush"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"]])
    ], TabsPage);
    return TabsPage;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.router.module.ts":
/*!********************************************!*\
  !*** ./src/app/tabs/tabs.router.module.ts ***!
  \********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _search_history_search_history_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../search-history/search-history.page */ "./src/app/search-history/search-history.page.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");





var routes = [
    {
        path: 'home',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_4__["TabsPage"],
        children: [
            {
                path: 'tab1',
                children: [
                    {
                        path: '',
                        loadChildren: '../tab1/tab1.module#Tab1PageModule'
                    },
                    {
                        path: 'navSeven',
                        component: _search_history_search_history_page__WEBPACK_IMPORTED_MODULE_3__["SearchHistoryPage"]
                    }
                ]
            },
            // {
            //   path: 'details',
            //   children: [
            //     {
            //       path: '',
            //       loadChildren: '../tab1/tab1.module#Tab1PageModule'
            //     },
            //     {
            //       path: 'navSeven',
            //       component: SearchHistoryPage
            //     }
            //   ]
            // },
            {
                path: 'tab2',
                children: [
                    {
                        path: '',
                        loadChildren: '../tab2/tab2.module#Tab2PageModule'
                    },
                    {
                        path: 'navSeven',
                        component: _search_history_search_history_page__WEBPACK_IMPORTED_MODULE_3__["SearchHistoryPage"]
                    }
                ]
            },
            {
                path: 'tab3',
                children: [
                    {
                        path: '',
                        // component: MypagePage
                        // loadChildren: '../tab3/page/mypage/mypage.module#MypagePageModule'
                        loadChildren: '../tab3/tab3.module#Tab3PageModule'
                    },
                    {
                        path: 'navSeven',
                        component: _search_history_search_history_page__WEBPACK_IMPORTED_MODULE_3__["SearchHistoryPage"]
                    }
                ]
            },
            {
                path: 'tab4',
                children: [
                    {
                        path: '',
                        loadChildren: '../tab4/tab4.module#Tab4PageModule'
                    },
                    {
                        path: 'navSeven',
                        component: _search_history_search_history_page__WEBPACK_IMPORTED_MODULE_3__["SearchHistoryPage"]
                    }
                ]
            },
            {
                path: 'tab5',
                children: [
                    {
                        path: '',
                        loadChildren: '../tab5/tab5.module#Tab5PageModule'
                    },
                    {
                        path: 'navSeven',
                        component: _search_history_search_history_page__WEBPACK_IMPORTED_MODULE_3__["SearchHistoryPage"]
                    }
                ]
            },
        ]
    },
    {
        path: '',
        redirectTo: 'home/tab1',
        pathMatch: 'full'
    },
    {
        path: 'return_url',
    },
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module.js.map