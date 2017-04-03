webpackJsonp([2],[
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(0);
var Login = (function (_super) {
    __extends(Login, _super);
    function Login() {
        var _this = _super.call(this) || this;
        _this.state = { username: "", password: "" };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.login = _this.login.bind(_this);
        return _this;
    }
    Login.prototype.login = function (e) {
        /*
            Use any http request library
        */
        window.location.assign('/home');
        e.preventDefault();
    };
    Login.prototype.handleChange = function (event) {
        this.setState((_a = {},
            _a[event.target.name] = event.target.value,
            _a));
        var _a;
    };
    Login.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h1", null, "Login"),
            React.createElement("form", { onSubmit: this.login, method: "post" },
                React.createElement("input", { type: "text", name: "username", value: this.state.username, onChange: this.handleChange, placeholder: "username" }),
                React.createElement("br", null),
                React.createElement("input", { type: "password", name: "password", value: this.state.password, onChange: this.handleChange, placeholder: "password" }),
                React.createElement("br", null),
                React.createElement("button", null, "Login"))));
    };
    return Login;
}(React.Component));
exports.Login = Login;


/***/ }),
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var React = __webpack_require__(0);
var ReactDom = __webpack_require__(1);
var login_1 = __webpack_require__(6);
ReactDom.render(React.createElement(login_1.Login, null), document.getElementById('app'));


/***/ })
],[9]);
//# sourceMappingURL=login.bundle.js.map