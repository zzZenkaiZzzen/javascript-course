'use strict';

// console.log (varX);
// // console.log (letX);
// // console.log (constX);
 
// var varX = 1;
// let letX = 2;
// const constX = 3;
 
// function addDecl(a, b) {
//   return a + b;
// }
 
// const addExpr = function (a, b) {
//   return a + b;
// };
 
// const addArrow = (a, b) => a + b;

// // HOUR 2
// // const person = {
// //   name: 'Jonas',
// //   greet: function () {
// //     console.log(`Hello, I am ${this.name}`);
// //   },
// // };
 
// // person.greet();
 
// // const anotherPerson = { name: 'Sarah' };
 
// // anotherPerson.greet = person.greet;
 
// // anotherPerson.greet();
 
// // const greetFunction = person.greet;
 
// // greetFunction();
 
// // const obj = {
// //   name: 'Object',
 
// //   regularMethod: function () {
// //     console.log('Regular:', this.name); // this = obj
// //   },
// //   arrowMethod: () => {
// //     console.log('Arrow:', this.name);
// //   },
// // };
 
// // obj.regularMethod();
 
// // obj.arrowMethod();
 
// // const timer = {
// //   name: 'Timer',
// //   start: function () {
// //     console.log(`${this.name} starting...`);
 
// //     const self = this;
 
// //     setTimeout(function () {
// //       console.log(`${self.name} finished`);
// //     }, 1000);
// //   },
// //   startModern: function () {
// //     console.log(`${this.name} starting modern...`);
 
// //     setTimeout(() => {
// //       console.log(`${this.name} finished modern`);
// //     }, 1500);
// //   },
// // };
 
// // timer.start();
// // timer.startModern();
 
// const functionTypes = {
//   regularFunction: function () {
//     console.log('Arguments length:', arguments.length);
//     console.log('First argument:', arguments[0]);
//   },
 
//   arrowFunction: () => {
//     console.log(arguments);
//     console.log('Arrow function called');
//   },
 
//   modernFunction: (...args) => {
//     console.log('Args length:', args.length);
//     console.log('First arg:', args[0]);
//   },
// };
 
// functionTypes.regularFunction('hello', 'world');
// // functionTypes.arrowFunction('test');
// functionTypes.modernFunction('modern', 'approach');

//HOUR 3
// let age = 30;
 
// let oldAge = age;
 
// age = 31;
// console.log('age:', age);
// console.log('oldAge:', oldAge);
 
// const me = { name: 'Tattiana', age: 24 };
 
// const friend = me;
 
// friend.name = 'JohnDoe';
// friend.age = 23;
 
// console.log('me:', me);
// console.log('friend:', friend);
 
// const original = {
//     name: 'Alice',
//      age: 28,
//      hobbies: ['reading', 'coding'],
//      };
 
// const shallowCopy = { ...original };
     
// shallowCopy.name = 'Bob';
 
// console.log('original name:', original.name);
// console.log('copy name:', shallowCopy.name);
 
// shallowCopy.hobbies.push('gaming');
 
// console.log(original.hobbies);
 
// console.log(shallowCopy.hobbies);
 
const deepOriginal = {
  name: 'Charlie',
  age: 32,
  address: { city: 'Paris', country: 'France' },
  hobbies: ['travel', 'photography'],
};
 
const deepCopy = structuredClone(deepOriginal);
 
deepCopy.address.city = 'London';
deepCopy.hobbies.push('cooking');
deepCopy.name = 'Lex';
 
console.log(deepOriginal);
console.log(deepCopy);