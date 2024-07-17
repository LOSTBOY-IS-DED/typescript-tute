// todo --> string initialization
// declare a variable message of type string and assign it the value hello typescript 
var theName = "Subh";
console.log("hello " + theName);
// todo --> concatenation 
// create two variable firstName and lastName of type string and assign them you first name and last name respectively. Concatenate the two variable and store the result in a variable called fullName
var thefirstName = "Subh ";
var theLastName = "Chaudhury";
var theFullName = thefirstName + theLastName;
console.log(theFullName);
// todo --> string length 
// declare a variable sentence of type string assign it a sentence of your choice > find the length of the string and store it in a variable called sentence length
var sentence = " Hi my name is subh";
var sentenceLength = sentence.length;
console.log(sentenceLength);
// todo --> uppercase and lowercase 
// Declare a variable of type string and assign it a sentence of your choice. Cover the entire sentence to uppercase and store the variable in upperCaseText and the entire sentence to lower case in lowerCaseText 
var newSentence = "Hi I am Subh I am the best";
var upperCaseText = newSentence.toUpperCase();
var lowerCaseText = newSentence.toLowerCase();
console.log(upperCaseText);
console.log(lowerCaseText);
// todo --> substring 
// declare a variable longText of type string and assign it a long sentence and Extract the first 10 characters from longText and store them in the shortText variable 
var longText = "Hi I am the best";
var shortText = longText.slice(0, 10);
console.log(shortText);
// todo --> string comparison 
// declare two variable str1 and str2 of type string and assign them different sentences. compare the two strings ans store the result (true or false) in a variable called areEqual.
var str1 = "Hola amigo";
var str2 = "Hola amigo ";
var areEqual = str1 === str2;
console.log(areEqual);
// todo --> string template 
//  declare variables product and price of type string and number .
// create a string using template literals to display the products and its price and its format is the product {product} is priced at {price} dollars .
var product = "rolls royce";
var price = 200000000;
var display = "The product is ".concat(product, " listed at ").concat(price, " ruppes");
console.log(display);
