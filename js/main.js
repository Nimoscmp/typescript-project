"use strict";
/*=================================
Typescript/Javascript file
Developed by Nabalas©
2021


================================= */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errortext = exports.sign_in_button = void 0;
var users_1 = require("./users");
var login_1 = __importDefault(require("./login"));
exports.sign_in_button = document.getElementById('signInButton');
var password_input = document.getElementById('passwordInput');
exports.errortext = document.getElementById('errorID');
exports.errortext.classList.add('d-none');
password_input.addEventListener('focusout', function () {
    var email = document.getElementById('emailInput').value;
    var username = document.getElementById('userInput').value;
    var password = document.getElementById('passwordInput').value;
    login_1.default(users_1.getUsers()[0], { email: email, username: username, password: password });
});
