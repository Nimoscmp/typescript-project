"use strict";
/*=================================
Typescript/Javascript file
Developed by Nabalas©
2021


================================= */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var logout_1 = __importStar(require("./logout"));
var users_1 = require("./users");
function loggedIn() {
    if (localStorage.email && localStorage.password) {
        document.getElementById('texto-consulta').innerHTML = "Hola " + users_1.getUsers()[0].username + ", haz tu consulta";
        document.getElementById('schedule').innerHTML = users_1.getUsers()[0].username + ", agenda tu cita";
        logout_1.sessionButtons.signInDesk.parentElement.classList.add('d-none');
        logout_1.sessionButtons.signInMob.parentElement.classList.add('d-none');
        logout_1.sessionButtons.signOutDesk.parentElement.classList.remove('d-none');
        logout_1.sessionButtons.signOutMob.parentElement.classList.remove('d-none');
        document.getElementsByClassName('options-title')[3].parentElement.style.backgroundColor = '#a685e2';
        document.getElementsByClassName('options-title')[4].parentElement.style.backgroundColor = '#ffabe1';
    }
    logout_1.sessionButtons.signOutDesk.addEventListener('click', logout_1.default);
    logout_1.sessionButtons.signOutMob.addEventListener('click', logout_1.default);
}
exports.default = loggedIn;
