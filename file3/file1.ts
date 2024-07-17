// the way we are writing this is explicitly is known as type annotation

//@ts-ignore

const sum = (a: number , b: number) => {
  return (a+b)
}

// type annotations are expressed using colons followed by the desire type after the variable or function parameter declaration. There can be space after colon

// Number type

let myNum: number = 10 ; 

//string type 

let myFullName: string = "Subhajit chaudhury ";

// any type 

let anyVariable : any = 20 ;

console.log(myNum.toString());

//Advantages 
// It helps the typescript compiler to enforce type checking and provide type safety during development 
