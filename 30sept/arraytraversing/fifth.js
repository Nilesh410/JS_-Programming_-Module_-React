
let salary=[20,10,5,4,32]
let result=salary.map((num)=>
                        {       
                            return num*2
                        })
console.log(result) //its create a new array and store the result of return value of callback function
console.log(salary) //dont affect on original array ele