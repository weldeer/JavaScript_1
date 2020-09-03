// Урок 3

// Задание №1
function task_1() {
    let i = 0;
    while (i < 100) {
        if (isprime(i)) {
            console.log(i);
        }
        i++;
    }
}

function isprime(n) {
    if (n == 1) // 1 - не простое число
        return false;
    // перебираем возможные делители от 2 до sqrt(n)
    for (d = 2; d * d <= n; d++) {
        // если разделилось нацело, то составное
        if (n % d == 0)
            return false;
    }
    // если нет нетривиальных делителей, то простое
    return true;
}




// Задание №2, 3
function task_2_3() {
    let arr = [1, 2, 3, 5, 10]

    console.log(countBasketPrice(arr))
}

function countBasketPrice(arr) {
    // Решение 1
    //let arrSum = 0;
    // for (var i = 0; i < arr.length; i++) {
    //     arrSum = arrSum + arr[i];
    // }

    // Решение 2
    let arrSum = arr.reduce(function(sum, current) {
        return sum + current;
    }, 0);

    return arrSum;
}

// Задание 4
function task_4() {

    for (var i = 0; i <= 10; i=i+step(i)) {

    }
}

function step(i) {
    console.log(i);
    return 1;
}

// Задание 5
function task_5() {

  let tree = 'x';
  for (var i = 0; i <= 20; i++){
      console.log(tree)
      tree = tree+'x';
  }
}

console.log('====Задание №1====');
task_1();
console.log('====Задание №2 3====');
task_2_3();
console.log('====Задание №4====');
task_4();
console.log('====Задание №5====');
task_5();