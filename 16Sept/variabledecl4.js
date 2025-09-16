var a=10 //global scope 

console.log(a) //10

function display()
{
     console.log(a) //undefined
     var a=20
    console.log(a) //20
}

display()
console.log(a) //10