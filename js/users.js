"use strict";
/*=================================
Typescript/Javascript file
Developed by Nabalas©
2021


================================= */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = exports.User = void 0;
var User = /** @class */ (function () {
    function User(_email, _username, _password) {
        this._email = _email;
        this._username = _username;
        this._password = _password;
    }
    Object.defineProperty(User.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (address) {
            this._email = address;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "username", {
        get: function () {
            return this._username;
        },
        set: function (user_name) {
            this._username = user_name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (accesskey) {
            this._password = accesskey;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
exports.User = User;
var users = [];
var user1 = new User('usuario@hotmail.es', 'contra111');
users.push(user1);
function getUsers() {
    return users;
}
exports.getUsers = getUsers;
