"use strict";

const a = 5;

// передача по значению. Данные примитивны
const b = a;

console.log(b);
console.log(a);


const obj = {
  a: 4,
  b: 1
};

// передача ссылки. То есть в copy кладется не значение, а ссылка на объект obj, поэтому все изменения с copy будут влиять и на obj.
const copy = obj;

copy.a = 10;

console.log(copy);
console.log(obj);


// копирование объектов/ Поверхностная копия
// поверхностная копия создает копию только простых элементов объектов. В случае, когда идет второй урочень и далее, копирование идет по ссылочному типу

function copyObj(mainObj){
  let objCopy = {};
  for (let key in mainObj){
    objCopy[key] = mainObj[key];
  }
  return objCopy;
}

const numbers = {
  a: 4,
  b: 2,
  c: {
    x: 10,
    y: 15
  }
};

const newNumbers = copyObj(numbers);
newNumbers.a = 50;
// данная строчка изменит также и сам оригинал. В данном случае значение передается по ссылке
newNumbers.c.x = 30;

console.log(newNumbers);
console.log(numbers);

const add = {
  d: 17,
  e: 20
};

// также создание поверхностной копии объекта
// console.log(Object.assign(numbers, add));

const clone = Object.assign({}, add);

clone.d = 25;
console.log(clone);
console.log(add);

// копирование массива

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'sdadadf';

console.log(newArray);
console.log(oldArray);

// spread-оператор. Поверхностная копия

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];
console.log(internet);


function log(a, b, c){
  console.log(a);
  console.log(b);
  console.log(c);
}

const nums = [2, 5, 7];

log(...nums);

// массивы
const array = [a, b];
const newNewArray = [...array];
console.log(newNewArray);

// объекты ES9
const objecto = {
  one: 1,
  two: 2
};
const newObjecto = {...objecto};
console.log(newObjecto);










