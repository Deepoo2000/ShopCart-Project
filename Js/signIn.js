let username = document.querySelector('#username');
let password = document.querySelector('#password');
let submit = document.querySelector('#submit');

submit.addEventListener('click', function(e){
    e.preventDefault();
    if(username.value != "" && password.value != ""){
        if(localStorage.getItem('username').trim() === username.value.trim()
        && localStorage.getItem('password').trim() === password.value.trim() ){
           window.location = 'index.html';
           localStorage.setItem('okay', 1);
        }
        else {
            alert("The Account Info InValid...");
        }
    }
    else {
        alert("please Enter Valid Info...");
    }
});

