
let salary=[20,10,5,4,32]
//multiply every ele of array with 2 and store in new array

let result=salary.map(num=>num*2)
console.log(result) //its create a new array and store the result of return value of callback function
console.log(salary) //don't affect on original array ele