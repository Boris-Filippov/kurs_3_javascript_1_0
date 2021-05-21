// 1. Дан код:
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2 Ответ: Значение а увеличилось на 1. Запись a++ иначе выглядит как a = a + 1
// d = b++; alert(d);           // 1 Ответ: Значение b увеличилось на 1, но запись b++ выводит предыдущее значение, сохраняя в памяти новое. 
// c = (2+ ++a); alert(c);      // 5 Ответ: Из примера 1 мы получили a = 2, в этом примере увеличили значение a еще на 1 и прибавили в скобках 2.
// d = (2+ b++); alert(d);      // 4 Ответ: 2 + предыдущее значение b, которое стало равно 2 в примере № 2.
// alert(a);                    // 3 Ответ: Выводим значение a из примера № 3
// alert(b);                    // 3 Ответ: Выводим значение b из примера № 4
// Почему код даёт именно такие результаты?


// 2. Чему будет равен x в примере ниже?
// var a = 2;
// var x = 1 + (a *= 2);

// Ответ:
// x = 1 + (a = a * 2); x = 5;


// 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.

// Решение:
// let a = -10;
// let b = 15;

// if (a > 0 && b > 0)
// console.log(a - b);
// else if (a < 0 && b < 0)
// console.log(a * b);
// else if (a > 0 && b < 0 || a < 0 && b > 0)
// console.log(a + b);


// 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.

// Решение:
// let a = 3;

// switch (a) {
//     case 0:
//         document.write(' ' + 0);
//     case 1:
//         document.write(' ' + 1);
//     case 2:
//         document.write(' ' + 2);
//     case 3:
//         document.write(' ' + 3);
//     case 4:
//         document.write(' ' + 4);
//     case 5:
//         document.write(' ' + 5);
//     case 6:
//         document.write(' ' + 6);
//     case 7:
//         document.write(' ' + 7);
//     case 8:
//         document.write(' ' + 8);
//     case 9:
//         document.write(' ' + 9);
//     case 10:
//         document.write(' ' + 10);
//     case 11:
//         document.write(' ' + 11);
//     case 12:
//         document.write(' ' + 12);
//     case 13:
//         document.write(' ' + 13);
//     case 14:
//         document.write(' ' + 14);
//     case 15:
//         document.write(' ' + 15);
//         break;
//     default:
//         document.write('Нет числа от 0 до 15');
// }


// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.

// function sum(a, b) {
//     return a + b;
// }

// console.log(sum);

// function sub(a, b) {
//     return a - b;
// }

// function mul(a, b) {
//     return a * b;
// }

// function div(a, b) {
//     return a / b;
// }

// let metod = mul(5, 10);
// console.log(metod);


// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).

// function mathOperation(arg1, arg2, operation) {
//     switch (operation) {
//         case 'sum':
//             return arg1 + arg2;
//             break;
//         case 'sub':
//             return arg1 - arg2;
//             break;
//         case 'mul':
//             return arg1 * arg2;
//             break;
//         case 'div':
//             return arg1 / arg2;
//             break;
//         default:
//             return 'Введите правильную операцию'
//     }
// }
