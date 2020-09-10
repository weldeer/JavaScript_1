// document lifecycle js, события браузера чтобы можно было скрипт разместить в head и он видел DOM
// Эта штука так и не заработала
// document.onload = function () {
//     run()
// }
// НИкогда проактически не используется
//const arrP = document.getElementsByName('p');

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
    const xArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const wFigArr1 = ['', '♖', '♘', '♗', '♔', '♕', '♗', '♘', '♖'];
    const wFigArr2 = ['', '♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'];
    const bFigArr1 = ['', '♜', '♞', '♝', '♚', '♛', '♝', '♞', '♜'];
    const bFigArr2 = ['', '♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'];


    white = false;
    for (let i = 9; i >= 1; i--) {
        const newTr = newTable.insertRow(9 - i);
        for (let j = 0; j < 9; j++) {
            if (i == 9) {
                const newTh = document.createElement("th");
                newTh.innerHTML = (xArr[j - 1] == undefined) ? '' : xArr[j - 1];
                newTr.appendChild(newTh);
            } else if (j == 0) {
                const newTh = document.createElement("th");
                newTh.innerHTML = i;
                newTr.appendChild(newTh);
            } else {
                const newTd = newTr.insertCell(j);

                // Белые фигуры
                if (i == 8) {
                    newTd.innerHTML = wFigArr1[j]
                };
                if (i == 7) {
                    newTd.innerHTML = wFigArr2[j];
                };

                // Черные фигуры
                if (i == 2) {
                    newTd.innerHTML = bFigArr2[j];
                };
                if (i == 1) {
                    newTd.innerHTML = bFigArr1[j]
                };


                // Чередование CSS класса черный/белый
                if (white) {
                    newTd.className = xArr[j - 1] + i + ' white';
                    white = false;
                } else {
                    newTd.className = xArr[j - 1] + i + ' black';
                    white = true;
                }
            }
        }
        // С новой строки  меняем цвет/булиан булиан на противоположный, собственное ноухау
        //white = 2 - Number(white) - 1;
        // можно проще
        white = !white;
    }
    board.appendChild(newTable);
}


