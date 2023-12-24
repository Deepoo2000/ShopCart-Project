
/////////////////// Main Container
// let logo = document.querySelector('.logo');
let img = document.querySelector('.img');
let container = document.querySelector('.container');
let home = document.querySelector('.home');
let productsBtn = document.querySelector('.products');
let signInButton = document.querySelector('.signIn');
let signUpButton = document.querySelector('.signUp');
let account = document.querySelector('.account');
let logOut = document.querySelector('.logOut');

// load page Defult background Color
window.addEventListener('load', function () {
    if (localStorage.getItem('mainColor') === null) {
        container.style.background = '#c79b53';
        img.src = 'images/3.png';
        localStorage.setItem('mainImg', img.src);
        localStorage.setItem('mainColor', container.style.background);
    }
    else {
        container.style.background = localStorage.getItem('mainColor');
        if (img) {
            img.src = localStorage.getItem('mainImg');
        }
    }
});

function phones(phone) {
    img.src = phone;
    localStorage.setItem('mainImg', phone);
}

function colors(color) {
    container.style.background = color;
    localStorage.setItem('mainColor', color);
}
/////////////////////////////////////// 

// logo button
if (img) {
    img.addEventListener('click', function (e) {
        e.preventDefault();
        window.location = 'index.html';
    });
}

// home button
home.addEventListener('click', function (e) {
    e.preventDefault();
    window.location = 'index.html';
});

// products button
productsBtn.addEventListener('click', function (e) {
    e.preventDefault();
    window.location = 'products.html';
});

// SignIn Button
signInButton.addEventListener('click', function () {
    window.location = 'signIn.html';
});

// SignIn Button
signUpButton.addEventListener('click', function () {
    window.location = 'signUp.html';
});

// when you click on logout button
logOut.addEventListener('click', function (e) {
    e.preventDefault();

    localStorage.clear();
    signInButton.style.display = 'inline';
    signUpButton.style.display = 'inline';
    account.style.display = 'none';
    logOut.style.display = 'none';

    window.location = 'signIn.html';
});



if (account) {
    account.addEventListener('click', function (e) {
        e.preventDefault();
        window.location = 'account.html';
    })
}

//remove signIn and signUp button After login
if (localStorage.getItem('okay')) {
    signInButton.style.display = 'none';
    signUpButton.style.display = 'none';

    account.innerHTML = localStorage.getItem('username');
    logOut.innerHTML = 'logOut';
    logOut.style.marginLeft = '15px';

    account.style.color = '#fff';
    logOut.style.color = '#fff';

    logOut.style.cursor = 'pointer';
};
