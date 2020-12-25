"use strict";
let num = 20;
function showMessage(text){
console.log(text);
num =30;
}
showMessage('Привет');
console.log(num);

const summ = (a, b) => a+b;

const minus = function(a,b){
return a-b;
};
console.log(summ(300, 100));
console.log(minus(300, 100));