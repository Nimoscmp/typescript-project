"use strict";
/*=================================
Typescript/Javascript file
Developed by Nabalas©
2021


================================= */
Object.defineProperty(exports, "__esModule", { value: true });
var users_1 = require("./users");
function loggedIn() {
    if (localStorage.email && localStorage.password) {
        document.getElementById('texto-consulta').innerHTML = "Hola " + users_1.getUsers()[0].username + ", haz tu consulta";
        document.getElementById('schedule').innerHTML = users_1.getUsers()[0].username + ", agenda tu cita";
    }
}
exports.default = loggedIn;
