// write a function called isPalindrome that takes a string as a parameter and returns if the string is a palindrome and false other wise 

const isPalindrome = (palin: string): boolean => {
  let myPalin = palin.split("").reverse().join("");
  return myPalin === palin;
}

console.log(isPalindrome("12321"));

// create a function called calculateAverage that takes an array of numbers as a parameter and return the average of these numbers
const calculateAverage = (myArr : number[]): number =>{
  if (myArr.length === 0 ){
    return 0 ;
  }
  const sum = myArr.reduce((accumulator,currentvalue) => accumulator+currentvalue)
  const average = sum / myArr.length ;

  return average ;
}


const nums : number[] = [1,2,3,4,5];
console.log(calculateAverage(nums));


// write a function called findMaxValue that takes an array of numbers and return the maximum value in the array 

const findMaxValue = (arr : number[]) => {
  if(arr.length ===0){
    console.log("Array is empty");
  }
  let maxValue = arr[0];
  for(let i = 1 ; i < arr.length; i++){
    if (arr[i]>maxValue){
      maxValue = arr[i];
    }
  }
  return maxValue;
}

const newArray : number[] = [1,2,3,4,5];

console.log(findMaxValue(newArray))