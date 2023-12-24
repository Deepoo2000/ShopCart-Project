// let dataDB = JSON.parse(localStorage.getItem('productsDB'));;
let dataDB = productsDB;
let tabs = document.querySelectorAll('.tabs li');
let tabsArray = Array.from(tabs);
let allProducts = document.querySelector('.allproducts');
let items = document.querySelector('.items');



function createItems(first, last) {
    dataDB.forEach((ele) => {
        if (ele.id >= first && ele.id <= last) {
            // console.log(items);

            //create div for items-info
            let itemsInfo = document.createElement('div');
            itemsInfo.className = 'items-info';
            // console.log(itemsInfo);

            //create img 
            let img = document.createElement('img');
            img.src = `${ele.imageUrl}`;
            // console.log(img);

            //create p for title
            let title = document.createElement('p');
            title.textContent = `${ele.title}`;
            // console.log(title);

            //create span for color
            let color = document.createElement('span');
            color.textContent = `${ele.color}`;
            // console.log(color);

            //create span for price
            let price = document.createElement('span');
            price.textContent = `${ele.price}`;
            // console.log(price);

            // create div for items-actions 
            let itemsActions = document.createElement('div');
            itemsActions.className = 'items-actions';
            // console.log(itemsActions);

            // create button for buy items 
            let btn = document.createElement('button');
            btn.className = 'buyNow';
            btn.textContent = 'buy';
            // console.log(btn);

            // create heart for addFav 
            let addFav = document.createElement('i');
            addFav.className = 'favorite far fa-heart';
            addFav.addEventListener('click', function () {
                addFav.style.color = 'red';
                addToFav(ele.id);
            })

            //append for items-actions
            itemsActions.append(btn);
            itemsActions.append(addFav);

            //append for items-info
            itemsInfo.append(img);
            itemsInfo.append(title);
            itemsInfo.append(color);
            itemsInfo.append(price);
            itemsInfo.append(itemsActions);

            //append for items
            items.append(itemsInfo);

        }
    });
    //append to class allproducts
    allProducts.appendChild(items);
    // console.log(allProducts);
    // console.log(items);
}



createItems(1, 15);

// add to fav

let favoriteItems = localStorage.getItem("ProductsFav")
    ? JSON.parse(localStorage.getItem("ProductsFav")) : [];


// if (favoriteItems) {
//     favoriteItems.forEach((ele1) => {
//         dataDB.forEach((ele2) => {
//             if (ele1.id == ele2.id) {
//                 ele2.liked = true;
//             }
//         });
//     });
// }

function addToFav(id) {
    if (localStorage.getItem('username')) {
        let chosenItem = dataDB.find((item) => item.id == id);
        // favoriteItems.forEach((ele) => {
        //     if (ele.id == chosenItem.id) {
        //         ele.liked = true;
        //     }
        // })
        // dataDB.forEach((ele) => {
        //     if (ele.id == chosenItem.id) {
        //         ele.liked = true;
        //     }
        // })
        let foundItemInFavOrNot = favoriteItems.some((item) => item.id == chosenItem.id);
        // console.log(favoriteItems);
        if (foundItemInFavOrNot != 1)
            favoriteItems = [...favoriteItems, chosenItem];
        localStorage.setItem("ProductsFav", JSON.stringify(favoriteItems));
    }
    else {
        window.location = "signIn.html";
    }
}



// console.log(favoriteItems);
// console.log(items.lastChild);


// add click event on all items 
// add class active on all items
tabsArray.forEach((ele) => {
    ele.addEventListener('click', function (e) {
        tabsArray.forEach((ele) => {
            ele.classList.remove('active');
        });
        e.currentTarget.classList.add('active');
        items.innerHTML = '';
        if (e.currentTarget.textContent == 'Iphones') {
            createItems(1, 5);
        }
        else if (e.currentTarget.textContent == 'Ipads') {
            createItems(11, 15);
        }
        else if (e.currentTarget.textContent == 'Laptops') {
            createItems(6, 10);
        }
        else if (e.currentTarget.textContent == 'All Products') {
            createItems(1, 15);
        }
    });
});
