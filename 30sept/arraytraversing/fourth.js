
let salary=[20,10,5,4,32]
let result=salary.forEach((num,index)=>
                        {
                            console.log(`index ${index}=${num*2.5}`)
                            return num
                        })
console.log(result)
// console.log(salary)