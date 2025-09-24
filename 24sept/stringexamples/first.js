//String: Seq of char 
//String is primitive data type 

let str='Itview2 Solution'

console.log(str) //display
console.log(typeof(str)) //check data type of str

console.log(str.length) //length is a property to find out no of char in given string

console.log(str.toLowerCase()) //to convert into lower char
console.log(str.toUpperCase()) // to convert into upper char

console.log(str.trim()) //remove starting and ending space of the string
console.log(str.trimStart()) //remove only starting space 
console.log(str.trimEnd()) //remove only ending space
console.log(str) //trim function does not affect on our original string 

let str2='Pune'
console.log(str.concat(str2)) //combine two strings or concatenate of two strings
console.log(str) //concatenate does affect on the original string

console.log(str.includes(str2)) //includes return the true or false value depending on the char or string is present in the given string or not 
console.log(str.includes('w'))

console.log(str.indexOf('w'))//6 its return the index of first occurrence of char 
console.log(str.indexOf('z'))//minus 1
console.log(str.indexOf('Solution')) //index of function is case sensitive function

console.log(str.replace('o','b')) //replace first char with new char
console.log(str.replaceAll('o','b'))//replace all char with new char
console.log(str) //replace and replaceAll they do not changes in original string
console.log(str.replace('Solution','Technology'))

let addharnumber='2345'
console.log(addharnumber.padStart(12,'*'))
console.log(addharnumber.padEnd(12,'#'))

//str=' Itview2 Solution '
let result=str.split(" ")
console.log(result[0])
console.log(str)//split do not change any original string value

