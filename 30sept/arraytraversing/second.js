let obj={
    sname:'rajiv',
    sid:22101
}
console.log(obj)
// for (const ele of obj) {  //its not applicable on object
//     console.log(ele)
// }
let laptop={
    type:'Dell',
    price:22000
}
// for (const key in obj) {
//     console.log(`key ${key}:${obj[key]}`)
// }
for (const key in laptop) {
    console.log(`key ${key}:${laptop[key]}`)
}