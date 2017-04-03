"use strict";
exports.__esModule = true;
var path = require("path");
var HomeController = (function () {
    function HomeController() {
    }
    HomeController.prototype.index = function (req, res) {
        res.sendFile(path.join(__dirname, '../../resources/views', 'home.html'));
    };
    return HomeController;
}());
exports.HomeController = HomeController;
//# sourceMappingURL=HomeController.js.map