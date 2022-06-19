"use strict";

// логические операторы

console.log(NaN || 2 || undefined); // 2
console.log(NaN && 2 && undefined); // NaN
console.log(1 && 2 && 3); // 3
console.log(!1 || 2 || !3); // 2
console.log(25 || null && !3); // 25
console.log(NaN || null || !3 || undefined); // undefined
console.log(NaN || null && !3 && undefined); // null
console.log(5 === 5 && 3 > 1 || 5); // true



console.log(NaN || null); // null !!
console.log(null && false); // null !!
console.log(25 || null); // 25

console.log(5 === 5 && 3 > 1 && 5); // && умножает, || булит 

console.log(NaN || undefined); // !! при && - NaN, при || - undefined

console.log((2 && 3) || 5); // 3
console.log((2 || 3) && 5); // 5