// Object : 

/* Object : one of the non primitive data types
           And also called as reference type of data types

  Object : they have three sub data types
    Object literals 
    Array 
    Function 

    How to declare the object literals 
    Object Literals: when we used object literals = whenever we have to store the data in the form of key values pair
*/

//1. Object Literal

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
console.log(empobj1.skills);
console.log(empobj1.id)
empobj1.emaild='xyzitview@edu'
console.log(empobj1)
empobj1.contact.country='India'
console.log(empobj1)

let empobj2={
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
console.log(empobj1==empobj2)
delete empobj2.info
console.log(empobj2)
