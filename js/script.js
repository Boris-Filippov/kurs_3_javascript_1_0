// С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

let n = 100;

continuationLabel: for (let i = 2; i <= n; i++) {

    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue continuationLabel;
    }

    console.log(i);
}

// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
// 3. Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины./ 

const basket = [
    ['Ноутбук', 45000, 1],
    ['Мышька', 1000, 2],
];

// Вариант через for
// function countBasketPrice(basket) {
//   let totalPrice = 0;
//   for (let i = 0; i < basket.length; i++) {
//     totalPrice += basket[i][1] * basket[i][2];
//   }
//   return totalPrice;
// }
// Вариант через forEach
// function countBasketPrice(basket) {
//   let totalPrice = 0;
//   basket.forEach((cartItem) => {
//     totalPrice += cartItem[1] * cartItem[2];
//   });
//   return totalPrice;
// }
// Самый оптимальный вариант через reduce
function countBasketPrice(basket) {
    // return basket.reduce((totalPrice, cartItem) => totalPrice + cartItem[1] * cartItem[2], 0);
    return basket.reduce(function (totalPrice, cartItem) {
        return totalPrice + cartItem[1] * cartItem[2];
    }, 0);
}

console.log(countBasketPrice(basket));