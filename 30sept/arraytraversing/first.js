let arr=[20,10,5,4,32,'Hello Programmer']

console.log(arr)
//access individual ele
for(let i=0;i<arr.length;i++)
{
    console.log(`arr[${i}]=${arr[i]}`)
}

//for of
//let arr=[20,10,5,4,32]
// for (const ele of arr) { 
//     if(ele>5)
//     {
//          console.log(ele);
//     }
// }

for (const ele of arr) { 
    
    if(ele==5)
    {
        console.log(ele) 
        continue   
    }
 
}