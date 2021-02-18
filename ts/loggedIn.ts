/*=================================
Typescript/Javascript file
Developed by Nabalas©
2021


================================= */

import logOut, { sessionButtons } from './logout';
import {getUsers} from './users'

export default function loggedIn(){

    if (localStorage.email && localStorage.password) {
        
        document.getElementById('texto-consulta')!.innerHTML = `Hola ${getUsers()[0].username}, haz tu consulta`;
        document.getElementById('schedule')!.innerHTML = `${getUsers()[0].username}, agenda tu cita`;

        sessionButtons.signInDesk!.parentElement!.classList.add('d-none');
        sessionButtons.signInMob!.parentElement!.classList.add('d-none');
        sessionButtons.signOutDesk!.parentElement!.classList.remove('d-none');
        sessionButtons.signOutMob!.parentElement!.classList.remove('d-none');

        document.getElementsByClassName('options-title')[3].parentElement!.style.backgroundColor = '#a685e2';
        document.getElementsByClassName('options-title')[4].parentElement!.style.backgroundColor = '#ffabe1';
    }

    sessionButtons.signOutDesk!.addEventListener('click', logOut);
    sessionButtons.signOutMob!.addEventListener('click', logOut);

}