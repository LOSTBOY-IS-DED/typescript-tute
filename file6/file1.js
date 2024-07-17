// function invocation 
// greeting function 
function greet(name, id) {
    console.log("welcome , ".concat(name, " and your id is ").concat(id));
}
//calling the function 
greet("Subh", 1);
// using arrow function 
var greetings = function (name, id) {
    console.log("welcome , ".concat(name, " and your id is ").concat(id));
};
greetings("Neha", 2);
// default return type is void 
