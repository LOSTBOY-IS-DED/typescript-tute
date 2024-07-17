// function invocation 

// greeting function 
function greet(name: string, id: number){
  console.log(`welcome , ${name} and your id is ${id}`);
}

//calling the function 
greet("Subh" , 1);


// using arrow function 

const greetings = (name: string, id: number) => {
  console.log(`welcome , ${name} and your id is ${id}`);
}

greetings("Neha",2 );

// default return type is void 