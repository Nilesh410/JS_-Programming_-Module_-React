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

//How to add new property or delete from the existing object
console.log(empobj1)
empobj1.contact.emailid='xyz@iteviewsolution'
console.log(empobj1)

delete empobj1.experience
console.log(empobj1)
empobj1.id=12102
console.log(empobj1)


Object.freeze(empobj1)
empobj1.experience=12
delete empobj1.city
empobj1.city='Mumbai'
console.log(empobj1)
