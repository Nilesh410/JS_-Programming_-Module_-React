function greetings(name)
{
    return function called()
    {
        console.log(`Hello ${name}`)
    }
}



let result=greetings('Itview')
console.log(result())