let fruits=['mango','apple','grapes','watermelon']
console.log(fruits)

//1. push:add the new elements at last
fruits.push('muskmelon')
console.log(fruits)

//2.pop : remove the last ele from existing array
console.log(fruits.pop())
console.log(fruits)

//3.unshift: add the new elements at first location
fruits.unshift('muskmelon')
console.log(fruits)

//4.shift : remove the first element of array
console.log(fruits.shift())
console.log(fruits)

//5.concat:combine the two array and return value of combine array 
let myfruits=['muskmelon','banana','cherry','apple']
console.log(myfruits)
console.log(fruits.concat(myfruits))
console.log(fruits)

//6. indexof():return the index of element whichever we search in the array
console.log(fruits)
console.log(fruits.indexOf('muskmelon'))

//7.includes:it check the if that ele is present or not inside the array
console.log(fruits.includes('cherry'))

console.log(fruits)
console.log(myfruits)

//8.sort : sort the array elements
console.log(fruits)
fruits.sort()
console.log(fruits)

//9.reverse : its shows the reverse ele of array and store in original array 
fruits.reverse()
console.log(fruits)

//10. slice: take subarray of particular size from the existing array
console.log(fruits.slice(1))

//11: splice:Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
console.log(fruits)
console.log(fruits.splice(0,3,'banana','cherry'))

console.log(fruits)