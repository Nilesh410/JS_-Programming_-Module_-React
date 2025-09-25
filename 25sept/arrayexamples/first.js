//Array

let obj={
    id:12101,
    empname:'rajiv'
}
function display()
{
    console.log('From display function')
}
console.log(typeof(obj))
let arr=['itview',12,true,null,undefined,obj,
    [12,56,89,90],display
]
console.log(arr)
console.log(arr[4])
console.log(arr[7]())
console.log(typeof(arr))
