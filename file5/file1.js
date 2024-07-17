// Any Type 
// The Any type is the most flexible type in typescript . It essentially turns off type checking for the variables or expressions it is applied to .
var favNumber = 5; // now the error is gone typechecking is disable 
favNumber = "Hola";
// use Cases 
// working with dynamic data dealing . when dealing with data from dynamic sources like user inputs , network responses or deserialized JSON objects , the any type can be useful 
// migration from js : when migrating an existing js codebase to ts , using the any type can be a convenient way to quickly annotate variables and functions without immediately specifying their precise types
