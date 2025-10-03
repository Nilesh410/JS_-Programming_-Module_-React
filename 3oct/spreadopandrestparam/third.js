const arr1=[1,2,3,4]
const arr2=[5,6,7,8,9,10]
const concatarr=[...arr1,...arr2]
console.log(concatarr)
function add()
{
    console.log(arguments);
    let sum=0
    for(let i=0;i<arguments.length;i++)
    {
        sum=sum+arguments[i]
    }
    return sum
}
let result=add(...concatarr)
console.log(result)