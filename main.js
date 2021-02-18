/*=================================
Typescript/Javascript file
Developed by Nabalas©
2021


================================= */
System.register("logout", [], function (exports_1, context_1) {
    "use strict";
    var signInDesk, signOutDesk, signInMob, signOutMob, sessionButtons;
    var __moduleName = context_1 && context_1.id;
    function logOut() {
        resetValues();
        restoreButtons();
        restoreText();
        restoreColor();
        reload();
    }
    exports_1("default", logOut);
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
    return {
        setters: [],
        execute: function () {
            signInDesk = document.getElementById('sign-in-desk');
            signOutDesk = document.getElementById('sign-out-desk');
            signInMob = document.getElementById('sign-in-mob');
            signOutMob = document.getElementById('sign-out-mob');
            exports_1("sessionButtons", sessionButtons = {
                signInDesk: signInDesk,
                signOutDesk: signOutDesk,
                signInMob: signInMob,
                signOutMob: signOutMob
            });
        }
    };
});
/*=================================
Typescript/Javascript file
Developed by Nabalas©
2021


================================= */
System.register("users", [], function (exports_2, context_2) {
    "use strict";
    var User, users, user1;
    var __moduleName = context_2 && context_2.id;
    function getUsers() {
        return users;
    }
    exports_2("getUsers", getUsers);
    return {
        setters: [],
        execute: function () {
            User = /** @class */ (function () {
                function User(_email, _username, _password) {
                    this._email = _email;
                    this._username = _username;
                    this._password = _password;
                }
                Object.defineProperty(User.prototype, "email", {
                    get: function () {
                        return this._email;
                    },
                    set: function (address) {
                        this._email = address;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(User.prototype, "username", {
                    get: function () {
                        return this._username;
                    },
                    set: function (user_name) {
                        this._username = user_name;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(User.prototype, "password", {
                    get: function () {
                        return this._password;
                    },
                    set: function (accesskey) {
                        this._password = accesskey;
                    },
                    enumerable: false,
                    configurable: true
                });
                return User;
            }());
            exports_2("User", User);
            users = [];
            user1 = new User('usuario@hotmail.es', 'Nicolas', 'contra111');
            users.push(user1);
        }
    };
});
/*=================================
Typescript/Javascript file
Developed by Nabalas©
2021


================================= */
System.register("loggedIn", ["logout", "users"], function (exports_3, context_3) {
    "use strict";
    var logout_1, users_1;
    var __moduleName = context_3 && context_3.id;
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
    exports_3("default", loggedIn);
    return {
        setters: [
            function (logout_1_1) {
                logout_1 = logout_1_1;
            },
            function (users_1_1) {
                users_1 = users_1_1;
            }
        ],
        execute: function () {
        }
    };
});
/*=================================
Typescript/Javascript file
Developed by Nabalas©
2021


================================= */
System.register("main", ["users", "login", "loggedIn"], function (exports_4, context_4) {
    "use strict";
    var users_2, login_1, loggedIn_1, sign_in_button, password_input, errortext;
    var __moduleName = context_4 && context_4.id;
    function toLogIn() {
        var email = document.getElementById('emailInput').value;
        var username = document.getElementById('userInput').value;
        var password = document.getElementById('passwordInput').value;
        login_1.default(users_2.getUsers()[0], { email: email, username: username, password: password });
    }
    return {
        setters: [
            function (users_2_1) {
                users_2 = users_2_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            },
            function (loggedIn_1_1) {
                loggedIn_1 = loggedIn_1_1;
            }
        ],
        execute: function () {
            loggedIn_1.default();
            exports_4("sign_in_button", sign_in_button = document.getElementById('signInButton'));
            password_input = document.getElementById('passwordInput');
            exports_4("errortext", errortext = document.getElementById('errorID'));
            errortext.classList.add('d-none');
            password_input.addEventListener('focusout', toLogIn);
            sign_in_button.addEventListener('click', toLogIn);
        }
    };
});
/*=================================
Typescript/Javascript file
Developed by Nabalas©
2021


================================= */
System.register("login", ["loggedIn", "main"], function (exports_5, context_5) {
    "use strict";
    var loggedIn_2, main_1, main_2;
    var __moduleName = context_5 && context_5.id;
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
            loggedIn_2.default();
        }
        else {
            // sign_in_button.setAttribute('data-bs-dismiss', '');
            console.log('incorrect, not changed');
            main_2.errortext.classList.remove('d-none');
        }
    }
    exports_5("default", default_1);
    return {
        setters: [
            function (loggedIn_2_1) {
                loggedIn_2 = loggedIn_2_1;
            },
            function (main_1_1) {
                main_1 = main_1_1;
                main_2 = main_1_1;
            }
        ],
        execute: function () {
        }
    };
});
