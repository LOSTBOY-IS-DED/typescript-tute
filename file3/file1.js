// the way we are writing this is explicitly is known as type annotation
//@ts-ignore
var sum = function (a, b) {
    return (a + b);
};
// type annotations are expressed using colons followed by the desire type after the variable or function parameter declaration. There can be space after colon
// Number type
var myNum = 10;
//string type 
var myFullName = "Subhajit chaudhury ";
// any type 
var anyVariable = 20;
console.log(myNum.toString());
//Advantages 
// It helps the typescript compiler to enforce type checking and provide type safety during development 
