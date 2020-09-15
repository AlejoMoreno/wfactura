(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["splash-splash-module"], {
    /***/
    "./node_modules/@ionic-native/splash-screen/ngx/index.js":
    /*!***************************************************************!*\
      !*** ./node_modules/@ionic-native/splash-screen/ngx/index.js ***!
      \***************************************************************/

    /*! exports provided: SplashScreen */

    /***/
    function node_modulesIonicNativeSplashScreenNgxIndexJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SplashScreen", function () {
        return SplashScreen;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/core */
      "./node_modules/@ionic-native/core/__ivy_ngcc__/index.js");

      var SplashScreen =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SplashScreen, _super);

        function SplashScreen() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        SplashScreen.prototype.show = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "show", {
            "sync": true
          }, arguments);
        };

        SplashScreen.prototype.hide = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "hide", {
            "sync": true
          }, arguments);
        };

        SplashScreen.pluginName = "SplashScreen";
        SplashScreen.plugin = "cordova-plugin-splashscreen";
        SplashScreen.pluginRef = "navigator.splashscreen";
        SplashScreen.repo = "https://github.com/apache/cordova-plugin-splashscreen";
        SplashScreen.platforms = ["Amazon Fire OS", "Android", "iOS", "Windows"];
        SplashScreen = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], SplashScreen);
        return SplashScreen;
      }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NwbGFzaC1zY3JlZW4vbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBNEJ0QyxnQ0FBaUI7Ozs7SUFPakQsMkJBQUk7SUFRSiwyQkFBSTs7Ozs7O0lBZk8sWUFBWTtRQUR4QixVQUFVLEVBQUU7T0FDQSxZQUFZO3VCQTdCekI7RUE2QmtDLGlCQUFpQjtTQUF0QyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgU3BsYXNoIFNjcmVlblxuICogQHByZW1pZXIgc3BsYXNoc2NyZWVuXG4gKiBAY2FwYWNpdG9yaW5jb21wYXRpYmxlIHRydWVcbiAqIEBkZXNjcmlwdGlvbiBUaGlzIHBsdWdpbiBkaXNwbGF5cyBhbmQgaGlkZXMgYSBzcGxhc2ggc2NyZWVuIGR1cmluZyBhcHBsaWNhdGlvbiBsYXVuY2guIFRoZSBtZXRob2RzIGJlbG93IGFsbG93cyBzaG93aW5nIGFuZCBoaWRpbmcgdGhlIHNwbGFzaHNjcmVlbiBhZnRlciB0aGUgYXBwIGhhcyBsb2FkZWQuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFNwbGFzaFNjcmVlbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc3BsYXNoLXNjcmVlbi9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc3BsYXNoU2NyZWVuOiBTcGxhc2hTY3JlZW4pIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuc3BsYXNoU2NyZWVuLnNob3coKTtcbiAqXG4gKiB0aGlzLnNwbGFzaFNjcmVlbi5oaWRlKCk7XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdTcGxhc2hTY3JlZW4nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1zcGxhc2hzY3JlZW4nLFxuICBwbHVnaW5SZWY6ICduYXZpZ2F0b3Iuc3BsYXNoc2NyZWVuJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tc3BsYXNoc2NyZWVuJyxcbiAgcGxhdGZvcm1zOiBbJ0FtYXpvbiBGaXJlIE9TJywgJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3BsYXNoU2NyZWVuIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogU2hvd3MgdGhlIHNwbGFzaHNjcmVlblxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHNob3coKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBIaWRlcyB0aGUgc3BsYXNoc2NyZWVuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgaGlkZSgpOiB2b2lkIHt9XG59XG4iXX0=

      /***/

    },

    /***/
    "./node_modules/@ionic-native/status-bar/ngx/index.js":
    /*!************************************************************!*\
      !*** ./node_modules/@ionic-native/status-bar/ngx/index.js ***!
      \************************************************************/

    /*! exports provided: StatusBar */

    /***/
    function node_modulesIonicNativeStatusBarNgxIndexJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StatusBar", function () {
        return StatusBar;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/core */
      "./node_modules/@ionic-native/core/__ivy_ngcc__/index.js");

      var StatusBar =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StatusBar, _super);

        function StatusBar() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        StatusBar.prototype.overlaysWebView = function (doesOverlay) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "overlaysWebView", {
            "sync": true
          }, arguments);
        };

        StatusBar.prototype.styleDefault = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "styleDefault", {
            "sync": true
          }, arguments);
        };

        StatusBar.prototype.styleLightContent = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "styleLightContent", {
            "sync": true
          }, arguments);
        };

        StatusBar.prototype.styleBlackTranslucent = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "styleBlackTranslucent", {
            "sync": true
          }, arguments);
        };

        StatusBar.prototype.styleBlackOpaque = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "styleBlackOpaque", {
            "sync": true
          }, arguments);
        };

        StatusBar.prototype.backgroundColorByName = function (colorName) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "backgroundColorByName", {
            "sync": true
          }, arguments);
        };

        StatusBar.prototype.backgroundColorByHexString = function (hexString) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "backgroundColorByHexString", {
            "sync": true
          }, arguments);
        };

        StatusBar.prototype.hide = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "hide", {
            "sync": true
          }, arguments);
        };

        StatusBar.prototype.show = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "show", {
            "sync": true
          }, arguments);
        };

        Object.defineProperty(StatusBar.prototype, "isVisible", {
          get: function get() {
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "isVisible");
          },
          set: function set(value) {
            Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "isVisible", value);
          },
          enumerable: true,
          configurable: true
        });
        StatusBar.pluginName = "StatusBar";
        StatusBar.plugin = "cordova-plugin-statusbar";
        StatusBar.pluginRef = "StatusBar";
        StatusBar.repo = "https://github.com/apache/cordova-plugin-statusbar";
        StatusBar.platforms = ["Android", "iOS", "Windows"];
        StatusBar = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], StatusBar);
        return StatusBar;
      }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3N0YXR1cy1iYXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sc0VBQXVELE1BQU0sb0JBQW9CLENBQUM7O0lBbUMxRCw2QkFBaUI7Ozs7SUFnQjlDLG1DQUFlLGFBQUMsV0FBb0I7SUFRcEMsZ0NBQVk7SUFRWixxQ0FBaUI7SUFRakIseUNBQXFCO0lBUXJCLG9DQUFnQjtJQWFoQix5Q0FBcUIsYUFBQyxTQUFpQjtJQVl2Qyw4Q0FBMEIsYUFBQyxTQUFpQjtJQVE1Qyx3QkFBSTtJQVFKLHdCQUFJOzBCQXBGSixnQ0FBUzs7Ozs7Ozs7Ozs7SUFMRSxTQUFTO1FBRHJCLFVBQVUsRUFBRTtPQUNBLFNBQVM7b0JBcEN0QjtFQW9DK0IsaUJBQWlCO1NBQW5DLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBDb3Jkb3ZhUHJvcGVydHksIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIFN0YXR1cyBCYXJcbiAqIEBwcmVtaWVyIHN0YXR1c2JhclxuICogQGNhcGFjaXRvcmluY29tcGF0aWJsZSB0cnVlXG4gKiBAZGVzY3JpcHRpb25cbiAqIE1hbmFnZSB0aGUgYXBwZWFyYW5jZSBvZiB0aGUgbmF0aXZlIHN0YXR1cyBiYXIuXG4gKlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1zdGF0dXNiYXJgLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbU3RhdHVzQmFyIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLXN0YXR1c2JhcikuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3N0YXR1cy1iYXIvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0YXR1c0JhcjogU3RhdHVzQmFyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiAvLyBsZXQgc3RhdHVzIGJhciBvdmVybGF5IHdlYnZpZXdcbiAqIHRoaXMuc3RhdHVzQmFyLm92ZXJsYXlzV2ViVmlldyh0cnVlKTtcbiAqXG4gKiAvLyBzZXQgc3RhdHVzIGJhciB0byB3aGl0ZVxuICogdGhpcy5zdGF0dXNCYXIuYmFja2dyb3VuZENvbG9yQnlIZXhTdHJpbmcoJyNmZmZmZmYnKTtcbiAqIGBgYFxuICpcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdTdGF0dXNCYXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1zdGF0dXNiYXInLFxuICBwbHVnaW5SZWY6ICdTdGF0dXNCYXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1zdGF0dXNiYXInLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdGF0dXNCYXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBTdGF0dXNCYXIgaXMgY3VycmVudGx5IHZpc2libGUgb3Igbm90LlxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIGlzVmlzaWJsZTogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2V0IHdoZXRoZXIgdGhlIHN0YXR1cyBiYXIgb3ZlcmxheXMgdGhlIG1haW4gYXBwIHZpZXcuIFRoZSBkZWZhdWx0XG4gICAqIGlzIHRydWUuXG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZG9lc092ZXJsYXkgIFdoZXRoZXIgdGhlIHN0YXR1cyBiYXIgb3ZlcmxheXMgdGhlIG1haW4gYXBwIHZpZXcuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgb3ZlcmxheXNXZWJWaWV3KGRvZXNPdmVybGF5OiBib29sZWFuKSB7fVxuXG4gIC8qKlxuICAgKiBVc2UgdGhlIGRlZmF1bHQgc3RhdHVzYmFyIChkYXJrIHRleHQsIGZvciBsaWdodCBiYWNrZ3JvdW5kcykuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgc3R5bGVEZWZhdWx0KCkge31cblxuICAvKipcbiAgICogVXNlIHRoZSBsaWdodENvbnRlbnQgc3RhdHVzYmFyIChsaWdodCB0ZXh0LCBmb3IgZGFyayBiYWNrZ3JvdW5kcykuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgc3R5bGVMaWdodENvbnRlbnQoKSB7fVxuXG4gIC8qKlxuICAgKiBVc2UgdGhlIGJsYWNrVHJhbnNsdWNlbnQgc3RhdHVzYmFyIChsaWdodCB0ZXh0LCBmb3IgZGFyayBiYWNrZ3JvdW5kcykuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgc3R5bGVCbGFja1RyYW5zbHVjZW50KCkge31cblxuICAvKipcbiAgICogVXNlIHRoZSBibGFja09wYXF1ZSBzdGF0dXNiYXIgKGxpZ2h0IHRleHQsIGZvciBkYXJrIGJhY2tncm91bmRzKS5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBzdHlsZUJsYWNrT3BhcXVlKCkge31cblxuICAvKipcbiAgICogU2V0IHRoZSBzdGF0dXMgYmFyIHRvIGEgc3BlY2lmaWMgbmFtZWQgY29sb3IuIFZhbGlkIG9wdGlvbnM6XG4gICAqIGJsYWNrLCBkYXJrR3JheSwgbGlnaHRHcmF5LCB3aGl0ZSwgZ3JheSwgcmVkLCBncmVlbiwgYmx1ZSwgY3lhbiwgeWVsbG93LCBtYWdlbnRhLCBvcmFuZ2UsIHB1cnBsZSwgYnJvd24uXG4gICAqXG4gICAqIGlPUyBub3RlOiB5b3UgbXVzdCBjYWxsIFN0YXR1c0Jhci5vdmVybGF5c1dlYlZpZXcoZmFsc2UpIHRvIGVuYWJsZSBjb2xvciBjaGFuZ2luZy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yTmFtZSAgVGhlIG5hbWUgb2YgdGhlIGNvbG9yIChmcm9tIGFib3ZlKVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIGJhY2tncm91bmRDb2xvckJ5TmFtZShjb2xvck5hbWU6IHN0cmluZykge31cblxuICAvKipcbiAgICogU2V0IHRoZSBzdGF0dXMgYmFyIHRvIGEgc3BlY2lmaWMgaGV4IGNvbG9yIChDU1Mgc2hvcnRoYW5kIHN1cHBvcnRlZCEpLlxuICAgKlxuICAgKiBpT1Mgbm90ZTogeW91IG11c3QgY2FsbCBTdGF0dXNCYXIub3ZlcmxheXNXZWJWaWV3KGZhbHNlKSB0byBlbmFibGUgY29sb3IgY2hhbmdpbmcuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBoZXhTdHJpbmcgIFRoZSBoZXggdmFsdWUgb2YgdGhlIGNvbG9yLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIGJhY2tncm91bmRDb2xvckJ5SGV4U3RyaW5nKGhleFN0cmluZzogc3RyaW5nKSB7fVxuXG4gIC8qKlxuICAgKiBIaWRlIHRoZSBTdGF0dXNCYXJcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBoaWRlKCkge31cblxuICAvKipcbiAgICogU2hvdyB0aGUgU3RhdHVzQmFyXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgc2hvdygpIHt9XG59XG4iXX0=

      /***/

    },

    /***/
    "./src/app/splash/splash-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/splash/splash-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: SplashPageRoutingModule */

    /***/
    function srcAppSplashSplashRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SplashPageRoutingModule", function () {
        return SplashPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _splash_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./splash.page */
      "./src/app/splash/splash.page.ts");

      var routes = [{
        path: '',
        component: _splash_page__WEBPACK_IMPORTED_MODULE_3__["SplashPage"]
      }];

      var SplashPageRoutingModule = function SplashPageRoutingModule() {
        _classCallCheck(this, SplashPageRoutingModule);
      };

      SplashPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SplashPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/splash/splash.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/splash/splash.module.ts ***!
      \*****************************************/

    /*! exports provided: SplashPageModule */

    /***/
    function srcAppSplashSplashModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SplashPageModule", function () {
        return SplashPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_status_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/status-bar */
      "./node_modules/@ionic-native/status-bar/ngx/index.js");
      /* harmony import */


      var _ionic_native_splash_screen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/splash-screen */
      "./node_modules/@ionic-native/splash-screen/ngx/index.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _folder_folder_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../folder/folder.page */
      "./src/app/folder/folder.page.ts");
      /* harmony import */


      var _splash_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./splash-routing.module */
      "./src/app/splash/splash-routing.module.ts");
      /* harmony import */


      var _splash_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./splash.page */
      "./src/app/splash/splash.page.ts");

      var SplashPageModule = function SplashPageModule() {
        _classCallCheck(this, SplashPageModule);
      };

      SplashPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _splash_routing_module__WEBPACK_IMPORTED_MODULE_9__["SplashPageRoutingModule"]],
        declarations: [_splash_page__WEBPACK_IMPORTED_MODULE_10__["SplashPage"], _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _folder_folder_page__WEBPACK_IMPORTED_MODULE_8__["FolderPage"]],
        providers: [_ionic_native_status_bar__WEBPACK_IMPORTED_MODULE_5__["StatusBar"], _ionic_native_splash_screen__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"]]
      })], SplashPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=splash-splash-module-es5.js.map