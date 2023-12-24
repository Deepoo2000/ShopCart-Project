let username = document.querySelector('#username');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let submit = document.querySelector('#submit');


submit.addEventListener('click', function(e){
    e.preventDefault();
    if(username.value != "" && email.value != "" && password.value != ""){
        localStorage.setItem('username', username.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('password', password.value);
        window.location = 'signIn.html';
    }
    else {
        alert("please Enter Valid Info...");
    }
});

