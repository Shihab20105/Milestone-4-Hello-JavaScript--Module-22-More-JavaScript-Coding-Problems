/* 23-7 Calculate the total cost of the products in a shopping cart */

/* 
const shoppingCart = [
    { name: 'Shoe', price: 1200 },
    { name: 'Shirt', price: 2200 },
    { name: 'Pant', price: 3700 },
    { name: 'Belt', price: 600 },
];


function totalCost(products){
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        console.log(product);
    }
}

const expense = totalCost(shoppingCart);
console.log('Total expense today:' , expense); 
*/
/* Output:
{ name: 'Shoe', price: 1200 }
{ name: 'Shirt', price: 2200 }
{ name: 'Pant', price: 3700 }
{ name: 'Belt', price: 600 }
Total expense today: undefined */



/* 
const shoppingCart = [
    { name: 'Shoe', price: 1200 },
    { name: 'Shirt', price: 2200 },
    { name: 'Pant', price: 3700 },
    { name: 'Belt', price: 600 },
];


function totalCost(products){
    const sum = 0; //TypeError: Assignment to constant variable.
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        sum = sum + product; //D:\Web Development\Milestone-4 Hello JavaScript\Module-23 More JS Coding Problems\23-7 Calculate the total cost of the produc\simple-cart.js:43
        //sum = sum + product;
        //    ^
        console.log(product);
    }
    return sum;
}

const expense = totalCost(shoppingCart);
console.log('Total expense today:' , expense); 
*/



/* 
const shoppingCart = [
    { name: 'Shoe', price: 1200 },
    { name: 'Shirt', price: 2200 },
    { name: 'Pant', price: 3700 },
    { name: 'Belt', price: 600 },
];


function totalCost(products){
    let sum = 0; 
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        sum = sum + product; 
        console.log(product);
    }
    return sum;
}

const expense = totalCost(shoppingCart);
console.log('Total expense today:' , expense); 
*/
/* Output:
{ name: 'Shoe', price: 1200 }
{ name: 'Shirt', price: 2200 }
{ name: 'Pant', price: 3700 }
{ name: 'Belt', price: 600 }
Total expense today: 0[object Object][object Object][object Object][object Object] */




const shoppingCart = [
    { name: 'Shoe', price: 1200 },
    { name: 'Shirt', price: 2200 },
    { name: 'Pant', price: 3700 },
    { name: 'Belt', price: 600 },
];


function totalCost(products){
    let sum = 0; 
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        sum = sum + product.price; 
        //console.log(product);
    }
    return sum;
}

const expense = totalCost(shoppingCart);
console.log('Total expense today:' , expense); 

// Output: Total expense today: 7700