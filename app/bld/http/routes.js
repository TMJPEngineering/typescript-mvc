"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var routes_1 = require("../vendor/routes");
var CTRL = require("./controllers");
var Routes = (function (_super) {
    __extends(Routes, _super);
    function Routes(app) {
        var _this = _super.call(this, app) || this;
        _this.app = app;
        _this.init();
        return _this;
    }
    /*
        Initialize routes
    */
    Routes.prototype.init = function () {
        var app = this.app;
        app.get('/', new CTRL.UserController().index);
        app.get('/home', new CTRL.HomeController().index);
    };
    return Routes;
}(routes_1.BaseRoute));
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map