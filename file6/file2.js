// write a function called isPalindrome that takes a string as a parameter and returns if the string is a palindrome and false other wise 
var isPalindrome = function (palin) {
    var myPalin = palin.split("").reverse().join("");
    return myPalin === palin;
};
console.log(isPalindrome("12321"));
// create a function called calculateAverage that takes an array of numbers as a parameter and return the average of these numbers
var calculateAverage = function (myArr) {
    if (myArr.length === 0) {
        return 0;
    }
    var sum = myArr.reduce(function (accumulator, currentvalue) { return accumulator + currentvalue; });
    var average = sum / myArr.length;
    return average;
};
var nums = [1, 2, 3, 4, 5];
console.log(calculateAverage(nums));
// write a function called findMaxValue that takes an array of numbers and return the maximum value in the array 
var findMaxValue = function (arr) {
    if (arr.length === 0) {
        console.log("Array is empty");
    }
    var maxValue = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }
    return maxValue;
};
var newArray = [1, 2, 3, 4, 5];
console.log(findMaxValue(newArray));
