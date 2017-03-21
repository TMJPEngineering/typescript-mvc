"use strict";
exports.__esModule = true;
var Model = require("../models");
var UserController = (function () {
    function UserController() {
        this.model = new Model.UserModel();
    }
    UserController.prototype.index = function (req, res) {
        this.model.getUser().then(function (user) {
            console.log(user);
            res.send(user);
        });
    };
    return UserController;
}());
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map