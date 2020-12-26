"use strict";
// const options = {
//     name: 'Test',
//     width: 1024,
//     height: 512,
//     colors: {
//         border: "black",
//         bg: "red"
//     }
// };
// const {border, bg} = options.colors;
// console.log(`border = ${border} .BG = ${bg}`);


// for (let key in options) {
//     if (typeof (options[key]) === "object") {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }
// }
// function leanJS(lang, callback){
//     console.log(` Я учу ${lang} язык `);
//     callback();
// }
//  const adv = function(){
//     console.log(" Этот язык вообще изи");
//     };
// leanJS ("English", adv);
// let numbers = {
// //     a: 10,
// //     b: 20,
// //     c: {
// //         x: 100,
// //         y: 200,
// //     }
// // };
// // let at = {
// //     d: 17,
// //     k: 20,
// // };
//   function copy(makecopy){
//       let key;
//       let newCopyObject = {};
//       for (key in makecopy){
//         newCopyObject[key]= makecopy[key];
//       }
//       return newCopyObject;
//   }
// let copyNumbers = Object.assign({}, numbers, at);
// copyNumbers.d = 10000;
// console.log(numbers);
// console.log(copyNumbers);
// const oldArr = ["a", "b", "c"];
// const newArr = oldArr.slice();
// newArr[0] = 'z';
// console.log(oldArr);
// console.log(newArr);
// const video = ['youtube', 'vimeo', 'tik-tok'];
// const blogs = ['VK', 'Twitter', 'Instagram'];
// const internet = [...video,...blogs,'Github'];
// console.log(internet);
const erty = {
    one: 1,
    two: 2,
    three: 3,
    sayHello: function() {
        console.log ("Привет");
    }
};
const newErty = Object.create(erty);
newErty.sayHello();
