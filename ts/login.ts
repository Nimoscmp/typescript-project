/*=================================
Typescript/Javascript file
Developed by Nabalas©
2021


================================= */

import {User} from './users';
import loggedIn from './loggedIn';
import {sign_in_button} from './main';
import {errortext} from './main';

export default function(user:User, formID:{email:string, username:string, password:string}){
    
    sign_in_button;
    errortext;
    
    if(user.email === formID.email && user.username === formID.username && user.password === formID.password){

        localStorage.setItem('email', formID.email);
        localStorage.setItem('username', formID.email);
        localStorage.setItem('password', formID.password);

        errortext!.classList.add('d-none');

        // sign_in_button.setAttribute('data-bs-dismiss', 'modal');

        console.log('correct, changed');
        loggedIn();

    } else{

        // sign_in_button.setAttribute('data-bs-dismiss', '');
        console.log('incorrect, not changed');
        errortext!.classList.remove('d-none');

    }

}