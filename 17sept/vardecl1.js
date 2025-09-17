var a=10 //global scope 
console.log('a=',a) //10


if(true)
{
    console.log('a=',a)//10
    var a=20
    console.log('a=',a)//20
}

console.log('a=',a)//20