"use strict";
exports.__esModule = true;
var controller_1 = require("../controller");
var BaseRoute = (function () {
    function BaseRoute(app) {
        this.app = app;
    }
    ;
    BaseRoute.prototype.router = function () {
        return this;
    };
    BaseRoute.prototype.get = function (url, name) {
        this.app.get(url, function (req, res) {
            res.send('hello');
        });
    };
    BaseRoute.prototype.controller = function () {
        return new controller_1.Controller();
    };
    return BaseRoute;
}());
exports.BaseRoute = BaseRoute;
//# sourceMappingURL=baseroute.js.map