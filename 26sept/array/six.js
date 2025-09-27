const user1={
    username:'rajiv',
    userid:1210
}

//user2=user1
const user2={...user1} //shallow copy
console.log(user1)
console.log(user2)

user2.username='anil'
console.log(user1)
console.log(user2)
