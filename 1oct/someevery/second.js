let arr=[12,14,10,11,2,12]

console.log(arr)
const result=arr.some((num)=>{
                debugger
                return num%2!=0
            })
console.log(result)