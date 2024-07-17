// bigInt
// It is a built-in type that allows you to work with numbers that are larger than the range supported by the regular number type.
// BigInt literals are written by appending the n suffix to an integer literal
// In js we cant read the whole number beyond 2 raise to 53
// const maxNumber = Number.MAX_SAFE_INTEGER;
// let maxNumber : bigint = 9007199254740992n
// console.log(maxNumber)
//end way
var anotherBigNumber = BigInt("90071992547409925");
console.log(anotherBigNumber);
