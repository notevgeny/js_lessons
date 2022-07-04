"use strict";

// согласно учебнику: Замыкание - это функция, которая запоминает свои внешние переменные и может получить к ним доступ.

function createCounter(){
  let counter = 0;

  const myFunction = function(){
    // при первом обращении при инициализации функции произойдет поиск переменной counter. Тк в локальной области видимости ее не будет, то myFunction поднимется выше
    // и будет искать в области видимости функции CreateCounter. После чего запишет ссылку на counter = 0. Таким образом, произойдет замыкание  
    counter = counter + 1; // closure {при первом обращении counter = 0;}
    return counter; 
  };
  return myFunction;
}

const increment = createCounter();

const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);


// пример ошибки, когда переменная num не может быть показана в консоли, тк консоль не имеет доступа к ее лексическому окружению
for (let i = 0; i < 9; i++){
  for (let j = 0; j < 9; j++){
    let num = 3;
    console.log(num); // правильное использование
  }
  // console.log(num); // ошибка 
}