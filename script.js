// document lifecycle js, события браузера чтобы можно было скрипт разместить в head и он видел DOM
// Эта штука так и не заработала
// document.onload = function () {
//     run()
// }
document.addEventListener("DomContentLoaded", ready);



// НИкогда проактически не работает
//const arrP = document.getElementsByName('p');

//Обычно этот как в CSS селекторе
const arrP = document.querySelector('p');
console.log(arrP);