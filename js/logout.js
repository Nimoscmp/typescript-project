"use strict";
/*=================================
Typescript/Javascript file
Developed by Nabalas©
2021


================================= */
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionButtons = void 0;
var signInDesk = document.getElementById('sign-in-desk');
var signOutDesk = document.getElementById('sign-out-desk');
var signInMob = document.getElementById('sign-in-mob');
var signOutMob = document.getElementById('sign-out-mob');
exports.sessionButtons = {
    signInDesk: signInDesk,
    signOutDesk: signOutDesk,
    signInMob: signInMob,
    signOutMob: signOutMob
};
function logOut() {
    resetValues();
    restoreButtons();
    restoreText();
    restoreColor();
    reload();
}
exports.default = logOut;
function resetValues() {
    localStorage.clear();
}
function restoreButtons() {
    signInDesk.parentElement.classList.remove('d-none');
    signInMob.parentElement.classList.remove('d-none');
    signOutDesk.parentElement.classList.add('d-none');
    signOutMob.parentElement.classList.add('d-none');
}
function restoreText() {
    document.getElementById('texto-consulta').innerHTML = 'Haz tu consulta con Domus';
    document.getElementById('schedule').innerHTML = 'Agenda tu cita con un asesor';
}
function restoreColor() {
    document.getElementsByClassName('options-title')[3].parentElement.style.backgroundColor = '#ffb703';
    document.getElementsByClassName('options-title')[4].parentElement.style.backgroundColor = '#fb8500';
}
function reload() {
    window.location.reload();
}
