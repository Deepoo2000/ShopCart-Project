let favoriteItems = JSON.parse(localStorage.getItem('ProductsFav'));

let myAccountBtn = document.querySelector('.myAccountBtn');
let myCartBtn = document.querySelector('.myCartBtn');
let aboutBtn = document.querySelector('.aboutBtn');

let myAccount = document.querySelector('.myAccount');
let myCart = document.querySelector('.myCart');
let about = document.querySelector('.about');
let items = document.querySelector('.items');

let myAccountBtnClicked = true;

// My Account Details

function createMyAccountInfo() {
    let yourName = document.createElement("div");
    yourName.className = 'yourName';

    let yourEmail = document.createElement("div");
    yourEmail.className = 'yourEmail';

    let yourPassword = document.createElement("div");
    yourPassword.className = 'yourPassword';

    myAccount.appendChild(yourName);
    myAccount.appendChild(yourEmail);
    myAccount.appendChild(yourPassword);

    yourName.innerHTML = `Your Name: ${localStorage.getItem('username')}`;
    yourEmail.innerHTML = `Your Email: ${localStorage.getItem('email')}`;
    yourPassword.innerHTML = `Your Password: ${localStorage.getItem('password')}`;
}


myAccountBtn.addEventListener('click', function (e) {
    e.preventDefault();
    items.innerHTML = '';
    about.innerHTML = '';
    if (myAccountBtnClicked)
        createMyAccountInfo(), myAccountBtnClicked = false;
})

// My Cart Details
window.onload = function () {
    myAccountBtn.click();
}

function createItemsFav() {
    favoriteItems.forEach((ele) => {
        let itemsInfo = document.createElement('div');
        itemsInfo.className = 'items-info';
        let img = document.createElement('img');
        img.src = `${ele.imageUrl}`;
        let title = document.createElement('p');
        title.textContent = `${ele.title}`;
        let color = document.createElement('span');
        color.textContent = `${ele.color}`;
        let price = document.createElement('span');
        price.textContent = `${ele.price}`;
        let itemsActions = document.createElement('div');
        itemsActions.className = 'items-actions';
        let btn = document.createElement('button');
        btn.className = 'buyNow';
        btn.textContent = 'buy';
        let addFav = document.createElement('i');
        addFav.className = 'removeFromFav';
        addFav.innerHTML = '&#10005;';
        addFav.addEventListener('click', function (e) {
            e.preventDefault();
            removeFromFav(ele.id);
        })
        addFav.style.fontWeight = 'bold';
        itemsActions.append(btn);
        itemsActions.append(addFav);
        itemsInfo.append(img);
        itemsInfo.append(title);
        itemsInfo.append(color);
        itemsInfo.append(price);
        itemsInfo.append(itemsActions);
        items.append(itemsInfo);
    });
    myCart.appendChild(items);
}

// Remove From Fav

function removeFromFav(id) {
    console.log("1 + " + favoriteItems);
    if (localStorage.getItem('username')) {
        let filterdItems = favoriteItems.filter((item) => item.id !== id);
        localStorage.setItem("ProductsFav", JSON.stringify(filterdItems));
        favoriteItems = filterdItems;
        myCartBtn.click();

    }
    else {
        window.location = "signIn.html";
    }
}

myCartBtn.addEventListener('click', function (e) {
    e.preventDefault();
    myAccount.innerHTML = '';
    items.innerHTML = '';
    about.innerHTML = '';
    if (localStorage.getItem('ProductsFav'))
        createItemsFav();
    myAccountBtnClicked = true;
})


// About Details

function CreateAboutInfo() {
    let aboutInfo = document.createElement('h3');
    aboutInfo.className = 'about-info';
    aboutInfo.style.color = "#fff";
    aboutInfo.innerHTML = `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Veniam harum magnam ex fugiat velit porro itaque tempora molestias sint rem dolorum 
      optio aliquam repellat nesciunt dolor, nulla suscipit recusandae ipsum quisquam temporibus 
      ipsam iure delectus iusto voluptate. Deleniti, quaerat voluptate.Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Veniam harum magnam ex fugiat velit porro itaque tempora molestias sint rem dolorum 
      optio aliquam repellat nesciunt dolor, nulla suscipit recusandae ipsum quisquam temporibus 
      ipsam iure delectus iusto voluptate. Deleniti, quaerat voluptate.Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Veniam harum magnam ex fugiat velit porro itaque tempora molestias sint rem dolorum 
      optio aliquam repellat nesciunt dolor, nulla suscipit recusandae ipsum quisquam temporibus 
      ipsam iure delectus iusto voluptate. Deleniti, quaerat voluptate.`;

    about.appendChild(aboutInfo);
}

aboutBtn.addEventListener('click', function (e) {
    e.preventDefault();
    myAccount.innerHTML = '';
    items.innerHTML = '';
    about.innerHTML = '';
    CreateAboutInfo();
})