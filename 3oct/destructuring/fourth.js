/* 5) Given an array of objects representing products with a price property, calculate the total cost of all products after applying a 10% discount.
const products = [
{ name: 'Product 1', price: 100 },
{ name: 'Product 2', price: 200 },
{ name: 'Product 3', price: 300 }
]; */

//Expected Output: 540
const products = [
{ name: 'Product 1', price: 100 },
{ name: 'Product 2', price: 200 },
{ name: 'Product 3', price: 300 }
]; 
// const discountarray=products.map((ele)=>{
//     return (ele.price-(ele.price*0.10))
// })
// console.log(discountarray)
const totalcost=products.map((ele)=>{
                        return (ele.price-(ele.price*0.10))
                    }).reduce((cost,cprice)=>{
                                return cost=cost+cprice
                                },0)
console.log(totalcost)