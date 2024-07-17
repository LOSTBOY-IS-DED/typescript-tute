// unknown types
// the unknown type is a safer alternative to any because it still enforces type checking and type safety 
// variables of type unknown can hold values of any type , but you must perform typeChecks or type assertions before using them in specific ways 
// let myfavNum  = 55 ;
// myfavNum = true // this is type checking 
// myfavNum.map(() => {
// }) // property map doesn't exists on type number 
var num2;
num2 = 5;
num2 = "Subh";
num2 = true;
if (typeof num2 === "number") {
    console.log(num2 + 5);
}
else if (typeof num2 === "string") {
    console.log("hello " + num2);
}
else if (typeof num2 === "boolean") {
    console.log(num2);
}
//unknown useCases are generics
