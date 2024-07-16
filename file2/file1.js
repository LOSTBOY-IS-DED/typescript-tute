"use strict";
// todo 1 : wap to add two numbers
// todo 2 : How to catch errors and solve it 
// todo 3 : ts config file 
// todo 1
// function sum(a,b){
//   return a+b
// }
// console.log(sum(5,6)) //11 node file1.ts
// now lets check the problem 
// what if we write a string instead of numbers ??
// we need to define types in typescript 
//@ts-ignore  // the implementation error is gonejj
function sum(a, b) {
    return a + b;
}
// console.log(sum(5,"subh")) not assignable error 
console.log(sum(5, 6));
// tsc --init for tsconfig file 
// setting noEmmitOnError to true will no create the executable js file 
// this isnt working 
// instead write 
// tsc --noEmmitOnError file1.ts
