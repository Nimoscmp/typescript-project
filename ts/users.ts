/*=================================
Typescript/Javascript file
Developed by Nabalas©
2021


================================= */

export class User{

    constructor(private _email:string, private _username:string, private _password:string){

    }

    get email():string{
        return this._email;
    }

    set email(address){
        this._email = address;
    }

    get username():string{
        return this._username;
    }

    set username(user_name){
        this._username = user_name;
    }

    get password():string{
        return this._password;
    }

    set password(accesskey){
        this._password = accesskey;
    }
}

let users:User[] = [];

let user1 = new User('usuario@hotmail.es', 'Nicolas', 'contra111');

users.push(user1);

export function getUsers(){
    return users;
}