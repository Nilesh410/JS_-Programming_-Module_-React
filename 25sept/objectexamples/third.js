//operate on specific property of object

let empobj1={
    id:12101,
    empname:'rajiv',
    jobrole:'software engineer',
    experience:12,
    city:'pune',
    info:function (){
        console.log('Employee from Infosys');
    },
    skills:['JAVA','JS','React','DBMS'],
    contact:{
        add:'Pune Maharashtra',
        pincode:411045,
        mobno:123345689
    }
}

console.log(empobj1)
Object.defineProperty(empobj1,'id',{
    writable:false,
    configurable:false,

})
empobj1.id=12102
delete empobj1.id
console.log(empobj1)