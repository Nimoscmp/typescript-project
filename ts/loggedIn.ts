/*=================================
Typescript/Javascript file
Developed by Nabalas©
2021


================================= */

import {getUsers} from './users'

export default function loggedIn(){

    if (localStorage.email && localStorage.password) {
        
        document.getElementById('texto-consulta')!.innerHTML = `Hola ${getUsers()[0].username}, haz tu consulta`;
        document.getElementById('schedule')!.innerHTML = `${getUsers()[0].username}, agenda tu cita`;

    }

}