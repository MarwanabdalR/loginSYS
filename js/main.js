// All inputs
var signupName = document.getElementById('signupName');
var signupEmail = document.getElementById('signupEmail');
var signupPassword = document.getElementById('signupPassword');
var signinEmail = document.getElementById('signinEmail');
var signinPassword = document.getElementById('signinPassword');

// Get base URL
var baseURL = location.origin;

// To say welcome in the home page
var username = localStorage.getItem('sessionUsername');
if (username) {
    document.getElementById('username').innerHTML = "Welcome " + username;
}

// Retrieve users from localStorage
var signUpArray = [];
if (localStorage.getItem('users') == null) {
    signUpArray = [];
} else {
    signUpArray = JSON.parse(localStorage.getItem('users'));
}

// Check if signup inputs are empty
function isEmpty() {
    return signupName.value !== "" && signupEmail.value !== "" && signupPassword.value !== "";
}

// Check if email exists in signup array
function isEmailExist() {
    return signUpArray.some(user => user.email.toLowerCase() === signupEmail.value.toLowerCase());
}

// Signup function
function signUp() {
    if (!isEmpty()) {
        document.getElementById('exist').innerHTML = '<span class="text-danger m-3">All inputs are required</span>';
        return false;
    }

    var signUp = {
        name: signupName.value,
        email: signupEmail.value,
        password: signupPassword.value
    };

    if (isEmailExist()) {
        document.getElementById('exist').innerHTML = '<span class="text-danger m-3">Email already exists</span>';
        return false;
    } else {
        signUpArray.push(signUp);
        localStorage.setItem('users', JSON.stringify(signUpArray));
        document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>';
        return true;
    }
}

// Check if login inputs are empty
function isLoginEmpty() {
    return signinEmail.value !== "" && signinPassword.value !== "";
}

// Login function
function login() {
    if (!isLoginEmpty()) {
        document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">All inputs are required</span>';
        return false;
    }

    var email = signinEmail.value;
    var password = signinPassword.value;

    for (var i = 0; i < signUpArray.length; i++) {
        if (signUpArray[i].email.toLowerCase() === email.toLowerCase() && signUpArray[i].password === password) {
            localStorage.setItem('sessionUsername', signUpArray[i].name);
            location.replace(baseURL + '/home.html');
            return true;
        }
    }

    document.getElementById('incorrect').innerHTML = '<span class="p-2 text-danger">Incorrect email or password</span>';
    return false;
}

// Logout function
function logout() {
    localStorage.removeItem('sessionUsername');
}
