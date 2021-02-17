/*=================================
Typescript/Javascript file
Developed by Nabalas©
2021


================================= */

import {getUsers} from './users';
import login from './login';

export let sign_in_button = document.getElementById('signInButton')!;
let password_input = document.getElementById('passwordInput')!;
export let errortext = document.getElementById('errorID');

errortext!.classList.add('d-none');

password_input.addEventListener('focusout', () => {

    let email = (<HTMLInputElement>document.getElementById('emailInput')).value;
    let username = (<HTMLInputElement>document.getElementById('userInput')).value;
    let password = (<HTMLInputElement>document.getElementById('passwordInput')).value;

    login(getUsers()[0], {email, username, password});

})