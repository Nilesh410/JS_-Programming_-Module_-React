const user1={
    username:'rajiv',
    userid:1210,
    useradd:{
        city:'pune',
    }
}


const user2=structuredClone(user1) //deep copy using spread operator
console.log(user1)
console.log(user2)
user2.username='anil'
user2.useradd.city='Mumbai'
console.log(user1)
console.log(user2)
