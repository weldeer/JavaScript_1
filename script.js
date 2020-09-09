// Практическое Задание № 4
// Задание №0
function taskZero() {
    const calcus = {
        a: 3,
        b: 7,
    }

    console.log(sumLog(calcus.a, calcus.b));
}

function sumLog(a, b) {
    return a + b;
}

// Задание №1
function taskOne(a) {

    const arrValue = a.toString().split('');
    const objValue = {
        units: 0,
        tens: 0,
        hundreds: 0,
    }

    console.log(arrValue.length);
    if (a > 999) {
        return {}
    } else {
        objValue.units = +arrValue[0]; // + перед строкой переводит строку в число
        objValue.tens = +arrValue[1];
        objValue.hundreds = +arrValue[2];
        return objValue;
    }
}

// Задание №2 и №3
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
        sum: function() {
            // Решение 1
            let arrSum = 0;
            this.products.forEach(function(product, i, arr) {
                arrSum += product.price;
            });
             return arrSum;
        }
    }
    //console.log(basket)
    return basket;
}

function amountBasket(basket) {
    // Решение 1
    // let arrSum = 0;
    // basket.forEach(function(product, i, arr) {
    //     arrSum += product.price;
    // });

    // Решение 2
    let arrSum = basket.reduce(function (sum, current) {
        return sum + current.price;
    }, 0);

    return arrSum;
}

// Конец Задание №2

//console.log(arrValue[2]);


// const tab = {
//     icon: "/img/img.jpg",
//     title: "OOP",
//     isSave: false,
// }
//
//
// const arr = [1, 2, 3]
// arr.push(44, 24)
// console.log(arr)


//console.log("==== Task 0 ====")
//taskZero();
//console.log("==== Task 1 ====")
//console.log(taskOne(565));
//console.log("==== Task 2 ====")
//console.log(getBasket());
//console.log(amountBasket(getBasket()));
//console.log("==== Task 3 ====")
console.log(getBasket().sum());

