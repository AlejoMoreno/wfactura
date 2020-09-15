(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~folder-folder-module~splash-splash-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{ folder }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">{{ folder }}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div id=\"container\">\n    <div *ngIf=\"folder == 'Perfil'\">\n      <ion-card>\n        <ion-card-header>\n          <ion-card-subtitle>{{ email }}</ion-card-subtitle>\n          <ion-card-title>{{ first_name }} {{ last_name }}</ion-card-title>\n        </ion-card-header>\n      \n        <ion-card-content>\n          Teléfono: {{ mobile }}<br>\n          Dirección: {{ address }}\n        </ion-card-content>\n      </ion-card>\n      \n      <ion-card>\n        <ion-item>\n          <ion-icon name=\"eye-off-outline\" slot=\"start\"></ion-icon>\n          <ion-label> ********</ion-label>\n          <ion-button fill=\"outline\" slot=\"end\">Cambiar</ion-button>\n        </ion-item>\n      \n        <ion-card-content>\n          Recomendamos cambiar la contraseña cada 2 meses, con el fin de proteger los datos.\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card>\n        <ion-item>\n          <ion-button fill=\"outline\" slot=\"end\">Intersoft</ion-button>\n        </ion-item>\n      \n        <ion-card-content class=\"banner\">\n          La empresa Wakusoft te invita a gestionar tus facturas en Intersoft\n          donde podrás tener el control de las referencias, clientes, proveedores, \n          pagos y contabilidad. <br>\n          <strong>Estamos aliados con facturatech para la facturación electrónica DIAN</strong>\n        </ion-card-content>\n      </ion-card>\n    </div>\n\n    <div *ngIf=\"folder == 'Facturar'\">\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title>De, </ion-card-title>\n          <ion-card-subtitle style=\"font-size: 10px;\">{{ email }}</ion-card-subtitle>\n          <ion-card-title style=\"font-size: 10px;\">{{ first_name }} {{ last_name }}</ion-card-title>\n        </ion-card-header>\n      </ion-card>\n\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title>Para, </ion-card-title>\n        </ion-card-header>\n        <ion-list lines=\"full\" class=\"ion-no-margin\">\n          <ion-item>\n            <ion-label position=\"stacked\">Nombre Compañia:</ion-label>\n            <ion-input placeholder=\"ej.(Wakusoft)\" [(ngModel)]=\"nombre\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"stacked\">Dirección:</ion-label>\n            <ion-input placeholder=\"ej.(Calle 38)\" [(ngModel)]=\"direccion\"></ion-input>\n            <ion-input value=\"$\" type=\"hidden\" [(ngModel)]=\"currency\"></ion-input>\n            <ion-input value=\"-\" type=\"hidden\" [(ngModel)]=\"tipo\"></ion-input>\n          </ion-item>\n        </ion-list>\n      </ion-card>\n      \n      <ion-card>\n        <ion-list lines=\"full\" class=\"ion-no-margin\">\n          <ion-item>\n            <ion-label position=\"stacked\">Prod. No:</ion-label>\n            <ion-input [(ngModel)]=\"item_code\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"stacked\">Nombre Producto:</ion-label>\n            <ion-input [(ngModel)]=\"item_name\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"stacked\">Cantidad:</ion-label>\n            <ion-input type=\"number\" [(ngModel)]=\"order_item_quantity\" (change)='onchangeCantidad($event.target.value)'></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"stacked\">Precio:</ion-label>\n            <ion-input type=\"number\" [(ngModel)]=\"order_item_price\" (change)='onchangePrecio($event.target.value)'></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"stacked\">Total:</ion-label>\n            <ion-input type=\"number\" [(ngModel)]=\"order_item_final_amount\" disabled=\"true\"></ion-input>\n          </ion-item>\n        </ion-list>\n      </ion-card>\n\n      <ion-button color=\"success\" (click)=\"AgregarProducto()\">Agregar</ion-button>\n\n      <div style=\"width: 100%;overflow-x: scroll;\">\n        <table class=\"table\"> \n          <thead>\n            <tr>\n              <th></th>\n              <th>Producto</th>\n              <th>Total</th>\n            </tr>\n          </thead>\n          <tr *ngFor=\"let item of productos;\">\n            <td style=\"width: 50px;\"><div class=\"danger\">-</div></td>\n            <td style=\"width: 200px;\">{{ item.item_name }}</td>\n            <td style=\"width: 100px;\">{{ item.order_item_final_amount }}</td>\n          </tr>\n        </table>\n      </div>\n      \n\n      \n      <ion-card>\n        <ion-list lines=\"full\" class=\"ion-no-margin\">\n          <ion-item>\n            <ion-label position=\"stacked\">Notas</ion-label>\n            <ion-textarea placeholder=\"Notas\" [(ngModel)]=\"notas\" ></ion-textarea>\n          </ion-item>\n        </ion-list>\n      </ion-card>\n\n\n      <ion-card>\n        <ion-list lines=\"full\" class=\"ion-no-margin\">\n          <ion-item>\n            <ion-label position=\"stacked\">Subtotal</ion-label>\n            <ion-input type=\"number\" [(ngModel)]=\"order_total_before_tax\" disabled=\"true\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"stacked\">Tasa Impuesto (%):</ion-label>\n            <ion-input type=\"number\" [(ngModel)]=\"order_tax_per\" placeholder=\"ej(19)\" (change)='onchangeImpuesto($event.target.value)'></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"stacked\">Monto Inpuesto:</ion-label>\n            <ion-input type=\"number\" [(ngModel)]=\"order_total_tax\" disabled=\"true\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"stacked\">Total:</ion-label>\n            <ion-input type=\"number\" [(ngModel)]=\"order_total_after_tax\" disabled=\"true\"></ion-input>\n          </ion-item>\n        </ion-list>\n      </ion-card>\n\n      <ion-button color=\"success\" (click)=\"GuardarFactura()\">Guardar</ion-button><br><br><br><br>\n\n    </div>\n\n    <div *ngIf=\"folder == 'Compras'\">\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title>Para, </ion-card-title>\n          <ion-card-subtitle style=\"font-size: 10px;\">{{ email }}</ion-card-subtitle>\n          <ion-card-title style=\"font-size: 10px;\">{{ first_name }} {{ last_name }}</ion-card-title>\n        </ion-card-header>\n      </ion-card>\n\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title>De, </ion-card-title>\n        </ion-card-header>\n        <ion-list lines=\"full\" class=\"ion-no-margin\">\n          <ion-item>\n            <ion-label position=\"stacked\">Nombre Compañia:</ion-label>\n            <ion-input placeholder=\"ej.(Wakusoft)\" [(ngModel)]=\"nombre\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"stacked\">Dirección:</ion-label>\n            <ion-input placeholder=\"ej.(Calle 38)\" [(ngModel)]=\"direccion\"></ion-input>\n            <ion-input value=\"$\" type=\"hidden\" [(ngModel)]=\"currency\"></ion-input>\n            <ion-input value=\"-\" type=\"hidden\" [(ngModel)]=\"tipo\"></ion-input>\n          </ion-item>\n        </ion-list>\n      </ion-card>\n      \n      <ion-card>\n        <ion-list lines=\"full\" class=\"ion-no-margin\">\n          <ion-item>\n            <ion-label position=\"stacked\">Prod. No:</ion-label>\n            <ion-input [(ngModel)]=\"item_code\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"stacked\">Nombre Producto:</ion-label>\n            <ion-input [(ngModel)]=\"item_name\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"stacked\">Cantidad:</ion-label>\n            <ion-input type=\"number\" [(ngModel)]=\"order_item_quantity\" (change)='onchangeCantidad($event.target.value)'></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"stacked\">Precio:</ion-label>\n            <ion-input type=\"number\" [(ngModel)]=\"order_item_price\" (change)='onchangePrecio($event.target.value)'></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"stacked\">Total:</ion-label>\n            <ion-input type=\"number\" [(ngModel)]=\"order_item_final_amount\" disabled=\"true\"></ion-input>\n          </ion-item>\n        </ion-list>\n      </ion-card>\n\n      <ion-button color=\"success\" (click)=\"AgregarProducto()\">Agregar</ion-button>\n\n      <div style=\"width: 100%;overflow-x: scroll;\">\n        <table class=\"table\"> \n          <thead>\n            <tr>\n              <th></th>\n              <th>Producto</th>\n              <th>Total</th>\n            </tr>\n          </thead>\n          <tr *ngFor=\"let item of productos;\">\n            <td style=\"width: 50px;\"><div class=\"danger\">-</div></td>\n            <td style=\"width: 200px;\">{{ item.item_name }}</td>\n            <td style=\"width: 100px;\">{{ item.order_item_final_amount }}</td>\n          </tr>\n        </table>\n      </div>\n      \n\n      \n      <ion-card>\n        <ion-list lines=\"full\" class=\"ion-no-margin\">\n          <ion-item>\n            <ion-label position=\"stacked\">Notas</ion-label>\n            <ion-textarea placeholder=\"Notas\" [(ngModel)]=\"notas\" ></ion-textarea>\n          </ion-item>\n        </ion-list>\n      </ion-card>\n\n\n      <ion-card>\n        <ion-list lines=\"full\" class=\"ion-no-margin\">\n          <ion-item>\n            <ion-label position=\"stacked\">Subtotal</ion-label>\n            <ion-input type=\"number\" [(ngModel)]=\"order_total_before_tax\" disabled=\"true\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"stacked\">Tasa Impuesto (%):</ion-label>\n            <ion-input type=\"number\" [(ngModel)]=\"order_tax_per\" placeholder=\"ej(19)\" (change)='onchangeImpuesto($event.target.value)'></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"stacked\">Monto Inpuesto:</ion-label>\n            <ion-input type=\"number\" [(ngModel)]=\"order_total_tax\" disabled=\"true\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"stacked\">Total:</ion-label>\n            <ion-input type=\"number\" [(ngModel)]=\"order_total_after_tax\" disabled=\"true\"></ion-input>\n          </ion-item>\n        </ion-list>\n      </ion-card>\n\n      <ion-button color=\"success\" (click)=\"GuardarFactura()\">Guardar</ion-button><br><br><br><br>\n\n    </div>\n\n\n    <div *ngIf=\"folder == 'Historial'\">\n      <ion-card>\n        <ion-card-header>\n          <ion-card-subtitle>Historial</ion-card-subtitle>\n          <ion-card-title>Ventas</ion-card-title>\n        </ion-card-header>\n      \n        <ion-card-content>\n          Totales: {{ total }}<br><br>\n\n          <div>\n            <table>\n              <thead>\n                <tr>\n                  <th>No.</th>\n                  <th>Fecha</th>\n                  <th>Cliente</th>\n                  <th>Total</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of ventas;\">\n                  <td style=\"width: 50px !important;\">{{ item.order_id }}</td>\n                  <td>{{ item.order_date }}</td>\n                  <td style=\"width: 100px !important;\">{{ item.order_receiver_name }}</td>\n                  <td>{{ item.order_total_after_tax }}</td>\n                </tr>\n              </tbody>\n            </table>\n          </div> \n        </ion-card-content>\n      </ion-card>\n      \n\n      <ion-card>\n        <ion-card-header>\n          <ion-card-subtitle>Historial</ion-card-subtitle>\n          <ion-card-title>Compras</ion-card-title>\n        </ion-card-header>\n      \n        <ion-card-content>\n          Totales: {{ total }}<br><br>\n\n          <div >\n            <table>\n              <thead>\n                <tr>\n                  <th>No.</th>\n                  <th>Fecha</th>\n                  <th>Proveedor</th>\n                  <th>Total</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of ventas;\">\n                  <td style=\"width: 50px !important;\">{{ item.order_id }}</td>\n                  <td>{{ item.order_date }}</td>\n                  <td style=\"width: 100px !important;\">{{ item.order_receiver_name }}</td>\n                  <td>{{ item.order_total_after_tax }}</td>\n                </tr>\n              </tbody>\n            </table>\n          </div> \n        </ion-card-content>\n      </ion-card>\n\n      <ion-card>\n        <ion-item>\n          <ion-button fill=\"outline\" slot=\"end\">Intersoft</ion-button>\n        </ion-item>\n      \n        <ion-card-content class=\"banner\">\n          La empresa Wakusoft te invita a gestionar tus facturas en Intersoft\n          donde podrás tener el control de las referencias, clientes, proveedores, \n          pagos y contabilidad. <br>\n          <strong>Estamos aliados con facturatech para la facturación electrónica DIAN</strong>\n        </ion-card-content>\n      </ion-card>\n      \n\n    </div>\n\n    <div *ngIf=\"folder == 'Salir'\">\n      <ion-card>\n        <ion-item>\n          <ion-button fill=\"outline\" slot=\"end\">Intersoft</ion-button>\n        </ion-item>\n      \n        <ion-card-content class=\"banner\" style=\"height: 200px;overflow-y: scroll;\">\n          La empresa Wakusoft te invita a gestionar tus facturas en Intersoft\n          donde podrás tener el control de las referencias, clientes, proveedores, \n          pagos y contabilidad. <br>\n          <strong>Estamos aliados con facturatech para la facturación electrónica DIAN</strong>\n          <br><br><br><br><br>\n        </ion-card-content>\n      </ion-card>\n      <ion-button color=\"danger\" (click)=\"Salir()\">Salir</ion-button>\n    </div>\n\n    <div *ngIf=\"folder == 'Inbox'\">\n      <div *ngIf=\"login == true\" style=\"position: fixed;top:0;left: 0;width: 100%;height: 600px;z-index: 1000;background: black;\">\n        <ion-card >\n          <ion-card-header>\n            <ion-card-subtitle>WFactura</ion-card-subtitle>\n            <ion-card-title>Ingresar</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list lines=\"full\" class=\"ion-no-margin\">\n              <ion-item>\n                <ion-label position=\"stacked\" >Email</ion-label>\n                <ion-input [(ngModel)]=\"email\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"stacked\">Contraseña</ion-label>\n                <ion-input type=\"password\" [(ngModel)]=\"password\"></ion-input>\n              </ion-item>\n            </ion-list>\n            <ion-button color=\"success\" (click)=\"Login()\">Entrar</ion-button>\n            <ion-button color=\"primary\" (click)=\"CrearUsuarios()\">Date de alta</ion-button>\n            <br><br><br><br>\n          </ion-card-content>\n        </ion-card>\n\n        <ion-card>\n          <ion-item>\n            <ion-button fill=\"outline\" slot=\"end\">Intersoft</ion-button>\n          </ion-item>\n        \n          <ion-card-content class=\"banner\" style=\"height: 200px;overflow-y: scroll;\">\n            La empresa Wakusoft te invita a gestionar tus facturas en Intersoft\n            donde podrás tener el control de las referencias, clientes, proveedores, \n            pagos y contabilidad. <br>\n            <strong>Estamos aliados con facturatech para la facturación electrónica DIAN</strong>\n            <br><br><br><br><br>\n          </ion-card-content>\n        </ion-card>\n      </div>\n\n      <div *ngIf=\"login == false\" style=\"position: fixed;top:0;left: 0;width: 100%;height: 600px;z-index: 1000;background: black;\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-subtitle>WFactura</ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list lines=\"full\" class=\"ion-no-margin\">\n              <ion-item>\n                <ion-label position=\"stacked\" >Email</ion-label>\n                <ion-input [(ngModel)]=\"email\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"stacked\" >Nombres</ion-label>\n                <ion-input [(ngModel)]=\"first_name\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"stacked\" >Apellidos</ion-label>\n                <ion-input [(ngModel)]=\"last_name\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"stacked\" >Teléfono</ion-label>\n                <ion-input [(ngModel)]=\"mobile\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"stacked\" >Dirección</ion-label>\n                <ion-input [(ngModel)]=\"address\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"stacked\">Contraseña</ion-label>\n                <ion-input type=\"password\" [(ngModel)]=\"password\"></ion-input>\n              </ion-item>\n            </ion-list>\n            <ion-button color=\"success\" (click)=\"Setuser()\">Date de alta</ion-button>\n            <ion-button color=\"primary\" (click)=\"LoginUsuarios()\">Regresar</ion-button>\n            <br><br><br><br>\n          </ion-card-content>\n        </ion-card>\n      </div>\n\n      \n    </div>\n\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/splash/splash.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/splash/splash.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n  <img src=\"../../assets/img/splash.png\" style=\"width: 100%;top:0;left: 0;\">\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/folder/folder.page.scss":
/*!*****************************************!*\
  !*** ./src/app/folder/folder.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n/* Hide table headers (but not display: none;, for accessibility) */\n\ntable {\n  width: 100%;\n  font-size: 10px;\n}\n\nth {\n  background: #ddd;\n  color: black;\n  border: 1px solid white;\n  padding: 5%;\n  text-align: center;\n}\n\ntr {\n  border: 1px solid #ddd;\n}\n\ntd {\n  /* Behave  like a \"row\" */\n  border: none;\n  border: 1px solid #ddd;\n  position: relative;\n  white-space: normal;\n  padding: 5%;\n  text-align: center;\n}\n\ntd:before {\n  /* Now like a table header */\n  position: absolute;\n  /* Top/left values mimic padding */\n  white-space: nowrap;\n  text-align: left;\n  font-weight: bold;\n}\n\n/* Label the data */\n\ntd:before {\n  content: attr(data-title);\n}\n\ntd:last-child {\n  border-bottom: none;\n}\n\nion-card-header {\n  background: #4caf50;\n  background: -webkit-gradient(left top, left bottom, color-stop(0%, #4caf50), color-stop(100%, #a5d6a7));\n  background: linear-gradient(to bottom, #4caf50 0%, #a5d6a7 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#4caf50\", endColorstr=\"#a5d6a7\", GradientType=0 );\n}\n\nion-card-subtitle, ion-card-title {\n  color: white;\n}\n\n.banner {\n  color: white !important;\n  background: #4caf50 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL2ZvbGRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUdBLG1FQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFBRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxzQkFBQTtBQUVGOztBQUNBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQ0E7RUFDRSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFDQSxtQkFBQTs7QUFDQTtFQUFZLHlCQUFBO0FBR1o7O0FBREE7RUFDRSxtQkFBQTtBQUlGOztBQUFBO0VBQ0UsbUJBQUE7RUFFQSx1R0FBQTtFQUlBLGdFQUFBO0VBQ0Esb0hBQUE7QUFHRjs7QUFEQTtFQUNFLFlBQUE7QUFJRjs7QUFGQTtFQUNFLHVCQUFBO0VBQ0EsOEJBQUE7QUFLRiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9mb2xkZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUtYnV0dG9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzhjOGM4YztcbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cblxuLyogSGlkZSB0YWJsZSBoZWFkZXJzIChidXQgbm90IGRpc3BsYXk6IG5vbmU7LCBmb3IgYWNjZXNzaWJpbGl0eSkgKi9cbnRhYmxle1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxudGgge1xuICBiYWNrZ3JvdW5kOiAjZGRkO1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBwYWRkaW5nOiA1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxudHIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xufVxuXG50ZCB7XG4gIC8qIEJlaGF2ZSAgbGlrZSBhIFwicm93XCIgKi9cbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIHBhZGRpbmc6IDUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnRkOmJlZm9yZSB7XG4gIC8qIE5vdyBsaWtlIGEgdGFibGUgaGVhZGVyICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLyogVG9wL2xlZnQgdmFsdWVzIG1pbWljIHBhZGRpbmcgKi9cbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1hbGlnbjpsZWZ0O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLyogTGFiZWwgdGhlIGRhdGEgKi9cbnRkOmJlZm9yZSB7IGNvbnRlbnQ6IGF0dHIoZGF0YS10aXRsZSk7IH1cblxudGQ6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cblxuaW9uLWNhcmQtaGVhZGVye1xuICBiYWNrZ3JvdW5kOiByZ2JhKDc2LDE3NSw4MCwxKTtcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDc2LDE3NSw4MCwxKSAwJSwgcmdiYSgxNjUsMjE0LDE2NywxKSAxMDAlKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCUsIHJnYmEoNzYsMTc1LDgwLDEpKSwgY29sb3Itc3RvcCgxMDAlLCByZ2JhKDE2NSwyMTQsMTY3LDEpKSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSg3NiwxNzUsODAsMSkgMCUsIHJnYmEoMTY1LDIxNCwxNjcsMSkgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoNzYsMTc1LDgwLDEpIDAlLCByZ2JhKDE2NSwyMTQsMTY3LDEpIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSg3NiwxNzUsODAsMSkgMCUsIHJnYmEoMTY1LDIxNCwxNjcsMSkgMTAwJSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoNzYsMTc1LDgwLDEpIDAlLCByZ2JhKDE2NSwyMTQsMTY3LDEpIDEwMCUpO1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzRjYWY1MCcsIGVuZENvbG9yc3RyPScjYTVkNmE3JywgR3JhZGllbnRUeXBlPTAgKTtcbn1cbmlvbi1jYXJkLXN1YnRpdGxlLCBpb24tY2FyZC10aXRsZXtcbiAgY29sb3I6d2hpdGU7XG59XG4uYmFubmVye1xuICBjb2xvcjp3aGl0ZSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDc2LDE3NSw4MCwxKSAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/folder/folder.page.ts":
/*!***************************************!*\
  !*** ./src/app/folder/folder.page.ts ***!
  \***************************************/
/*! exports provided: FolderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderPage", function() { return FolderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user-service.service */ "./src/app/services/user-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _splash_splash_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../splash/splash.page */ "./src/app/splash/splash.page.ts");






let FolderPage = class FolderPage {
    constructor(activatedRoute, router, userService, modalController) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.userService = userService;
        this.modalController = modalController;
    }
    ngOnInit() {
        try {
            this.folder = this.activatedRoute.snapshot.paramMap.get('id');
            console.log(this.folder);
            this.login = true;
            this.total = 100000;
            if (this.folder == "Inbox") {
                this.presentModal();
            }
            else {
                this.getusuarios();
            }
            if (this.folder == "Historial") {
                this.GetHistorial();
            }
            if (this.folder == "Facturar" || this.folder == "Compras") {
                this.productos = [];
                this.order_item_price = 0;
                this.order_total_before_tax = 0;
                this.currency = "$";
            }
            if (this.folder == "Facturar") {
                this.tipo = "VENTA";
            }
            else {
                this.tipo = "COMPRA";
            }
        }
        catch (Exception) {
            console.log(Exception.toString());
        }
    }
    getusuarios() {
        var usuario = JSON.parse(localStorage.getItem("usuario"));
        this.email = usuario.email;
        this.first_name = usuario.first_name;
        this.last_name = usuario.last_name;
        this.mobile = usuario.mobile;
        this.address = usuario.address;
        this.password = usuario.password;
    }
    onchangeCantidad() {
        this.TotalProducto();
    }
    onchangePrecio() {
        this.TotalProducto();
    }
    onchangeImpuesto() {
        this.order_total_tax = (this.order_total_before_tax * this.order_tax_per) / 100;
        this.order_total_after_tax = this.order_total_tax + this.order_total_before_tax;
    }
    TotalProducto() {
        this.order_item_final_amount = this.order_item_quantity * this.order_item_price;
    }
    AgregarProducto() {
        this.productos.push({
            "item_code": this.item_code,
            "item_name": this.item_name,
            "order_item_quantity": this.order_item_quantity,
            "order_item_price": this.order_item_price,
            "order_item_final_amount": this.order_item_final_amount
        });
        var total = 0;
        this.productos.forEach(function (item) {
            total = total + item.order_item_final_amount;
        });
        this.order_total_before_tax = total;
    }
    GuardarFactura() {
        this.getusuarios();
        this.userService.setFactura(this.email, this.order_total_after_tax, this.order_total_tax, this.order_tax_per, this.order_total_before_tax, this.notas, this.tipo, this.currency, this.direccion, this.nombre).subscribe((data) => {
            const resultado = data;
            console.log("RESULTADO VENTAS:", resultado);
            if (resultado['resultado'] == "error") {
                alert(resultado['body']['msm']);
            }
            else {
                this.ventas = resultado['body'];
                this.resultadodata = resultado['body']['msm'];
                this.productos.forEach((item) => {
                    this.userService.setProductos(resultado['body']['id'], item.order_item_final_amount, item.order_item_price, item.order_item_quantity, item.item_name, item.item_code).subscribe((data) => {
                        const resultado = data;
                        console.log(resultado);
                        if (resultado['resultado'] == "error") {
                            //alert(resultado['body']['msm']);
                        }
                        else {
                            this.resultadodata = this.resultadodata + resultado['body']['msm'];
                            this.ventas = resultado['body'];
                        }
                    }, (error) => {
                        console.error(error);
                        alert("error");
                    });
                });
            }
            alert(this.resultadodata);
        }, (error) => {
            console.error(error);
            alert("error");
        });
    }
    GetHistorial() {
        this.getusuarios();
        this.userService.getHistorial(this.email)
            .subscribe((data) => {
            const resultado = data;
            console.log(resultado);
            if (resultado['resultado'] == "error") {
                alert(resultado['body']['msm']);
            }
            else {
                this.ventas = resultado['body'];
            }
        }, (error) => {
            console.error(error);
            alert("error");
        });
    }
    Login() {
        this.userService.getUsers(this.email, this.password)
            .subscribe((data) => {
            const resultado = data;
            console.log(resultado);
            if (resultado['resultado'] == "error") {
                alert(resultado['body']['msm']);
            }
            else {
                localStorage.setItem("usuario", JSON.stringify(resultado['body']));
                this.Onshow('/folder/Perfil');
            }
        }, (error) => {
            console.error(error);
            alert("error");
        });
    }
    CrearUsuarios() {
        this.login = false;
    }
    LoginUsuarios() {
        this.login = true;
    }
    Setuser() {
        this.getusuarios();
        this.userService.setUser(this.email, this.password, this.first_name, this.last_name, this.mobile, this.address)
            .subscribe((data) => {
            const resultado = data;
            console.log(resultado);
            if (resultado['resultado'] == "error") {
                alert(resultado['body']['msm']);
            }
            else {
                localStorage.setItem("usuario", JSON.stringify(resultado['body']));
                this.Onshow('/folder/Perfil');
            }
        }, (error) => {
            console.error(error);
            alert("error");
        });
    }
    Salir() {
        console.log("Salida del sistema");
        this.Onshow('/folder/Inbox');
    }
    Onshow(link) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.presentModal();
                this.router.navigate([link]);
            }
            catch (Exception) {
                console.log(Exception.toString());
            }
        });
    }
    presentModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _splash_splash_page__WEBPACK_IMPORTED_MODULE_5__["SplashPage"]
            });
            return yield modal.present();
        });
    }
};
FolderPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
FolderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-folder',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./folder.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./folder.page.scss */ "./src/app/folder/folder.page.scss")).default]
    })
], FolderPage);



/***/ }),

/***/ "./src/app/splash/splash.page.ts":
/*!***************************************!*\
  !*** ./src/app/splash/splash.page.ts ***!
  \***************************************/
/*! exports provided: SplashPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashPage", function() { return SplashPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");




let SplashPage = class SplashPage {
    constructor(viewCtrl, splashScreen) {
        this.viewCtrl = viewCtrl;
        this.splashScreen = splashScreen;
    }
    ionViewDidEnter() {
        //this.splashScreen.hide();
        setTimeout(() => {
            this.viewCtrl.dismiss();
        }, 4000);
    }
};
SplashPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"] }
];
SplashPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-splash',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./splash.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/splash/splash.page.html")).default
    })
], SplashPage);



/***/ })

}]);
//# sourceMappingURL=default~folder-folder-module~splash-splash-module-es2015.js.map