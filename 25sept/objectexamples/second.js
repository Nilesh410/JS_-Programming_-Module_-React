//Seal function of object

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
//seal function
console.log(empobj1)
Object.seal(empobj1)
empobj1.city='Mumbai'
empobj1.email='xyz@itviewSolution'
delete empobj1.city
console.log(empobj1)