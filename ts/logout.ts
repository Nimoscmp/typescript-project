/*=================================
Typescript/Javascript file
Developed by Nabalas©
2021


================================= */

let signInDesk = document.getElementById('sign-in-desk');
let signOutDesk = document.getElementById('sign-out-desk');
let signInMob = document.getElementById('sign-in-mob');
let signOutMob = document.getElementById('sign-out-mob');

export let sessionButtons = {
    signInDesk,
    signOutDesk,
    signInMob,
    signOutMob
}

export default function logOut() {
    resetValues();
    restoreButtons();
    restoreText();
    restoreColor();
    reload();
}

function resetValues(){
    localStorage.clear();
}

function restoreButtons(){
    signInDesk!.parentElement!.classList.remove('d-none');
    signInMob!.parentElement!.classList.remove('d-none');
    signOutDesk!.parentElement!.classList.add('d-none');
    signOutMob!.parentElement!.classList.add('d-none');
}

function restoreText(){
    document.getElementById('texto-consulta')!.innerHTML = 'Haz tu consulta con Domus';
    document.getElementById('schedule')!.innerHTML = 'Agenda tu cita con un asesor';
}

function restoreColor(){
    document.getElementsByClassName('options-title')[3].parentElement!.style.backgroundColor = '#ffb703';
    document.getElementsByClassName('options-title')[4].parentElement!.style.backgroundColor = '#fb8500';
}

function reload(){
    window.location.reload();
}