window.onload = function () {
    run();
}

const basket = {
    products: [],
    add: function (productName, price, currency) {
        this.products.push({productName, price, currency});
    },
    clear: function () {
        this.products = [];
    },
    sum: function () {
        let arrSum = this.products.reduce(function (sum, current) {
            return sum + current.price;
        }, 0);
        return arrSum;
    },

}


function run() {
    const products = [
        {product: 'Пижама', price: 100, currency: 'USD',},
        {product: 'штаны', price: 50, currency: 'USD',},
        {product: 'куртка', price: 500, currency: 'USD',}
    ]

    renderProducts(products);
}

function renderProducts(products) {
    // получаем основной контейнер
    mainContainer = board = document.querySelector('.main-container');

    // создаем контейнер для товаров

    const newProducts = document.createElement('div')
    newProducts.className = 'products';
    mainContainer.appendChild(newProducts);


    //выводим товары
    products.forEach(function (item) {
        const newProduct = document.createElement('div');
        newProduct.className = 'product-item';
        newProduct.innerHTML = `<h2>${item.product}</h2> <h3>${item.price} $</h3>`;
        newProducts.appendChild(newProduct);

        newButton = document.createElement('button');
        newButton.innerHTML = 'В корзину';
        newButton.addEventListener('click', () => {
            addToCart(item);
        })
        newProduct.appendChild(newButton);
    })
}

function addToCart(item) {
    basket.add(item.product, item.price, item.currency);
    renderCart();
}

function renderCart() {
    mainContainer = board = document.querySelector('.main-container');

    let newCart = document.querySelector('.cart');

    if (newCart === null) {
        // создаем контейнер для корзины если не нашли
        newCart = document.createElement('div')
        newCart.className = 'cart';
        newCart.innerHTML = 'Корзина';
        mainContainer.appendChild(newCart);
    }

    //Очищаем и наполняем корзину
    newCart.innerHTML = "";
    basket.products.forEach(function (item) {
        const newProduct = document.createElement('div');
        newProduct.className = 'cart-item';
        newProduct.innerHTML = `<p>${item.productName} - <b>${item.price}(${item.currency})</b></p> `;
        newCart.appendChild(newProduct);
    })

    let newAmount = document.querySelector('.cartAmount');

    if (newAmount === null) {
        newAmount = document.createElement('b');
        newAmount.className = 'cartAmount';
    }

    newAmount.innerHTML = `ИТОГО: ${basket.sum()} $`;

    newCart.appendChild(newAmount);
}


// Старые функции
document.addEventListener("DOMContentLoaded", function () {
    // console.log("1243")
    // //Обычно этот как в CSS селекторе
    // const arrP = document.querySelectorAll('p');
    // const twoP = arrP[1];
    // twoP.innerHTML = '999';
    // twoP.style.color = 'red';
    // console.log(console.log(arrP));
    // //twoP.remove();
    //
    // //создание ноды
    // const h1 = document.createElement('h1')
    // h1.innerHTML = 'ВЕДМЕД';
    // twoP.before(h1); // можно вставлять перед после в конец в начало внутри тега
    setTimeout(function () {
        //
        //     console.log('4444')
    }, 2000)


})

function test() {
    //alert('bplf');
    //console.log('dscsxs');
    //const container = document.querySelectorAll('div')[0];
    //const h2 = document.createElement('h2');
    //h2.innerHTML = "динамический заголовок";
    //container.after(h2); // после
    //container.before(h2);
    //container.append(h2); // внутри вконце
    //container.prepend(h2);  // внутри вначале
    const outputElement = document.querySelector('.js__target');
    outputElement.innerHTML = math.random();
}

function ViewBasket() {
    console.log('sxsx')
    const basket = [
        {name: 'куртка', price: 100},
        {name: 'брюки', price: 30},
        {name: 'жампер', price: 120},
    ]

    const outputElement = document.querySelector('.js__target')

    const elList = document.createElement('ul');
    outputElement.append(elList);

    basket.forEach(function (item) {

        const elItem = document.createElement('li');
        elItem.innerHTML = `<b>${item.name}</b>: ${item.price}`;
        elList.append(elItem);
    })


}

function createCheessBoard() {
    board = document.querySelector('.board');

    const newTable = document.createElement('table');
    newTable.className = "chess-board";

    white = true;
    for (let i = 9; i > 1; i--) {
        const newTr = newTable.insertRow(9 - i);
        for (let c = 9; c > 1; c--) {
            const newTd = newTr.insertCell(9 - c);
            newTd.html = c;
            if (white) {
                newTd.className = 'white';
                white = false;
            } else {
                newTd.className = 'black';
                white = true;
            }
        }
    }
    board.appendChild(newTable);
}

function getBasket() {
    const basket = {
        products: [{
            product: 'Пижама',
            price: 100,
            currency: 'USD',
        },
            {
                product: 'штаны',
                price: 50,
                currency: 'USD',
            },
            {
                product: 'куртка',
                price: 500,
                currency: 'USD',
            }],
        sum: function () {
            let arrSum = this.products.reduce(function (sum, current) {
                return sum + current.price;
            }, 0);

            return arrSum;
        }
    }
    //console.log(basket)
    return basket;
}


