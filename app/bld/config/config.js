"use strict";
exports.__esModule = true;
var express = require("express");
var path = require("path");
var Config = (function () {
    function Config(app) {
        this.app = app;
        this.static();
    }
    Config.prototype.static = function () {
        console.log(path.join(__dirname, '../resources/assets'));
        this.app.use("/node_modules", express.static(path.join(__dirname, '../../../node_modules')));
        this.app.use("/assets", express.static(path.join(__dirname, '../resources/assets')));
    };
    return Config;
}());
exports.Config = Config;
//# sourceMappingURL=config.js.map