"use strict";


// делегирование
const ul = document.querySelector('ul');
const div = document.querySelector('div');

ul.addEventListener('click', function(event){
  div.innerText = event.target.innerText;
});


