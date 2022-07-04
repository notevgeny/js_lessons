"use strict";

// •	Какое будет выведено значение: 

// let x = 5; alert( x++ ); // 5+
// let x = 5; alert (++x); // 6

// // •	Чему равно такое выражение: 

// console.log([ ] + false - null + true); // NaN //тк работаем с массивом, то работаем со строкой. От строки отнимаем другой тип данных и получаем NaN. Поэтому false - null = NaN
// console.log(typeof([ ] + false)); // string
// console.log([ ] + false - null); // NaN

// // •	Что выведет этот код: 

// let y = 1; let x = y = 2; alert(x); // 2+

// // •	Чему равна сумма 

// console.log([ ] + 1 + 2); // суммирование идет в виде строки (из-за массива). Поэтому складываются не int, а string. Поэтому ответ 12

// // •	Что выведет этот код: 

// alert( "1"[0] ); // "1" - это строка, у каждого элемента которой есть свой индекс. Мы обращаемся к первому элементу строки "1" и получаем ответ 1 в виде строки.

// // •	Чему равно 

// console.log(2 && 1 && null && 0 && undefined); // null. Оператор && всегда запинается на лжи. Поэтому как только он дойдет до null, выполнение кода остановится

// // •	Есть ли разница между выражениями? 
// console.log(!!(a && b ) === (a && b)); // динамическая типизация. !! превращает левую часть в булиновое значение. Справа значение будет int. Поэтому === даст ответ false


// // •	Что выведет этот код: 

// alert( null || 2 && 3 || 4 ); // 3. Приоритет у && выше чем у ||
// console.log(2 && 3); // 3
// console.log(null || 3); // 3
// console.log(3 || 4); // 3

// let a = [1, 2, 3]; let b = [1, 2, 3]; 

// console.log(a == b); // false. Даже если массивы имеют одинаковые значения, сами два массива не являются равными. Это два разных объекта.

// // Правда ли что a == b ?

// // •	Что выведет этот код: 

// alert( +"Infinity" ); // Infinity. Строка превращается в число. Число Infinity

// // •	Верно ли сравнение: 

console.log("Ёжик" > "яблоко"); // false. Сравнение идет посимвольно, по таблице Unicode "я" стоит дальше (выше значение) "Ё"

// // •	Чему равно 

console.log( 0 || "" || 2 || undefined || true || false); // 2. "Спотыкаемся" на первой правде, тк везде ||
