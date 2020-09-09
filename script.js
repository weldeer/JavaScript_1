// document lifecycle js, события браузера чтобы можно было скрипт разместить в head и он видел DOM
// Эта штука так и не заработала
// document.onload = function () {
//     run()
// }
document.addEventListener("DOMContentLoaded", function () {
    console.log("1243")
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
        const container = document.querySelectorAll('div')[0];
        const h2 = document.createElement('h2');
        h2.innerHTML = "динамический заголовок";
        //container.after(h2); // после
        //container.before(h2);
        //container.append(h2); // внутри вконце
        container.prepend(h2);  // внутри вначале
        console.log('4444')
    }, 2000)
})


function test() {
    //alert('bplf');
    console.log('dscsxs')
}

// НИкогда проактически не используется
//const arrP = document.getElementsByName('p');

