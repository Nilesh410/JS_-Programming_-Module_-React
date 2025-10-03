//spread operator used for string
const arr1=[1,2,3,4]
const arr2=[5,6,7,8,9,10]
const concatarr=arr1.concat(arr2)
console.log(concatarr)
const str='Itview Solution'

const newarr=[...arr1,...arr2,...str]
console.log(newarr)