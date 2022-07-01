"use strict";

const arr = [2, 1, 28, 6, 13];

// удаление последнего элемента массива
// arr.pop();
// добавление элемента в конец массива
arr.push(10);
console.log(arr);

// сортировка массива. Работаем на алгоритме быстрой сортировки
arr.sort((a, b) => a - b);
console.log(arr);


// for (let i = 0; i< arr.length; i++){
//   console.log(arr[i]);
// }


// можно использовать break и continue
for (let value of arr){
  console.log(value);
}

// const str = prompt('', '');
// const products = str.split(', ');
// console.log('products: ', products);
// console.log(products.join('-'));

// перебор массива
arr.forEach((item, index, arr) => {
  console.log(`Индекс ${index}: значение ${item} внутри массива ${arr}`);
});

// фильтрация значений. Это новый массив
console.log(arr.filter((value) => value < 5));


// для строки используем присвоение возможностей Array.prototype, чтобы работала map.call. Это новый массив
const string = '12345';
const reversed = Array.prototype.map.call(string, (x) => x).reverse();
console.log(reversed);


// для массива. Это новый массив
const reversedArr = arr.map(elem => elem * 0.5).reverse();
console.log('reversedArr: ', reversedArr);


// length массива = последний индекс массива + 1
// arr[99] = 0;
// console.log(arr);
// console.log(arr.length); // 100
