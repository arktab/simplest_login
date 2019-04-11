'use strict';
(function () {
    name();

})();

function name() {
    var name = prompt("Please enter yourname", "Vasya");
    //name validation
    if (name == null || name == "") {
        alert('Login canceled');
    } else if (name == 'Admin') {
        alert('Please enter password');
        password();
    } else {
        alert('I dont know you!');
    }
}

function password() {
    password = prompt("Please enter Admin password", "");
    //password validation
    if (password == "DarkOverlord") {
        alert('Welcome!');
    } else {
        alert('ACCESS REJEKT');
    }
