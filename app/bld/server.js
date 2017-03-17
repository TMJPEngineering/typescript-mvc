"use strict";
exports.__esModule = true;
var express = require("express");
var config_1 = require("./config");
var http_1 = require("./http");
var Server = (function () {
    function Server(port) {
        this.port = port;
        this.app = express();
        this.config()
            .routes();
    }
    Server.prototype.config = function () {
        new config_1.Config(this.app);
        return this;
    };
    Server.prototype.routes = function () {
        new http_1.Routes(this.app);
        return this;
    };
    Server.prototype.run = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log('Listening to port:' + _this.port);
        });
    };
    return Server;
}());
var server = new Server(9000);
server.run();
//# sourceMappingURL=server.js.map