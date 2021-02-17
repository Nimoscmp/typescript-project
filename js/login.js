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
var loggedIn_1 = __importDefault(require("./loggedIn"));
var main_1 = require("./main");
var main_2 = require("./main");
function default_1(user, formID) {
    main_1.sign_in_button;
    main_2.errortext;
    if (user.email === formID.email && user.username === formID.username && user.password === formID.password) {
        localStorage.setItem('email', formID.email);
        localStorage.setItem('username', formID.email);
        localStorage.setItem('password', formID.password);
        main_2.errortext.classList.add('d-none');
        // sign_in_button.setAttribute('data-bs-dismiss', 'modal');
        console.log('correct, changed');
        loggedIn_1.default();
    }
    else {
        // sign_in_button.setAttribute('data-bs-dismiss', '');
        console.log('incorrect, not changed');
        main_2.errortext.classList.remove('d-none');
    }
}
exports.default = default_1;
