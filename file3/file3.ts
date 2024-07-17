
// todo --> string initialization
// declare a variable message of type string and assign it the value hello typescript 

let theName : string = "Subh";
console.log("hello "+ theName);


// todo --> concatenation 
// create two variable firstName and lastName of type string and assign them you first name and last name respectively. Concatenate the two variable and store the result in a variable called fullName

let thefirstName: string = "Subh " ;
let theLastName: string = "Chaudhury";

let theFullName : string = thefirstName + theLastName ;
console.log(theFullName);

// todo --> string length 
// declare a variable sentence of type string assign it a sentence of your choice > find the length of the string and store it in a variable called sentence length

let sentence : string = " Hi my name is subh";
let sentenceLength : number = sentence.length;
console.log(sentenceLength);

// todo --> uppercase and lowercase 
// Declare a variable of type string and assign it a sentence of your choice. Cover the entire sentence to uppercase and store the variable in upperCaseText and the entire sentence to lower case in lowerCaseText 

let newSentence : string = "Hi I am Subh I am the best";
let upperCaseText : string = newSentence.toUpperCase() ;
let lowerCaseText : string = newSentence.toLowerCase();
console.log(upperCaseText);
console.log(lowerCaseText);

// todo --> substring 
// declare a variable longText of type string and assign it a long sentence and Extract the first 10 characters from longText and store them in the shortText variable 

let longText : string = "Hi I am the best";
let shortText : string = longText.slice(0,10);
console.log(shortText);

// todo --> string comparison 
// declare two variable str1 and str2 of type string and assign them different sentences. compare the two strings ans store the result (true or false) in a variable called areEqual.

let str1 : string = "Hola amigo" ;
let str2 : string = "Hola amigo " ;
let areEqual : boolean = str1 === str2;
console.log(areEqual);

// todo --> string template 
//  declare variables product and price of type string and number .
// create a string using template literals to display the products and its price and its format is the product {product} is priced at {price} dollars .

let product : string = "rolls royce";
let price : number = 200000000;
let display : string = `The product is ${product} listed at ${price} ruppes`;
console.log(display);