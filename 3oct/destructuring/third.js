const userintro={
    username:'rajiv',
    userid:1234,
    useradd:{
        city:'pune',
        state:'Maha'
    }
}
//Destructure in function
function userdata({userid,useradd:{state}})
{
    console.log(userid,state)
}
userdata(userintro)