"use strict";

// callback - функция, которая должна быть выполнена только после того, как другая функция (или участок кода) завершили свое выполнение
// простыми словами - callback - это отложенная до момента вызова функция

function learnJS(lang, callback){
  console.log(`я учу: ${lang}`);
  callback();
}

function done(){
  console.log('Я прошел этот урок');
}

learnJS('JavaScript', done);