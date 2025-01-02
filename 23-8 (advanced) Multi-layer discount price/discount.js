/*                          23-8 (advanced) Multi-layer discount price calculation */

/* 
1. If ticket numbers is less than 100,  ticket price: 100
2. If ticket numbers is more than 100, but less than 200. 
First 100 tickets  price: 100
Rest tickets price: 90
3. If you purchase more than 200 tickets 
First 100 price: 100
101-200 price: 90
200+ price: 70
*/



/* 
function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if(ticketQuantity <= 100){
        const price = ticketQuantity * first100Rate;
        return price;
    }
}

const price = ticketPrice(1);
console.log('Price: ', price); 
*/ 
// Output: Price:  100



/* 
function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if(ticketQuantity <= 100){
        const price = ticketQuantity * first100Rate;
        return price;
    }
}

const price = ticketPrice(150);
console.log('Price: ', price); 
*/
// Output: Price:  undefined



/* 
The code works as intended for ticket quantities less than or equal to 100, as it calculates the price correctly based on the first 100 rate. However, the function is incomplete for cases where 'ticketQuantity' exceeds 100. To handle all possible scenarios, you need to add logic for ticket quantities in the ranges of 101-200 and beyond.

Here’s a complete version of your function:
*/

/*
function ticketPrice(ticketQuantity) {
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;

    if (ticketQuantity <= 100) {
        return ticketQuantity * first100Rate;
    } else if (ticketQuantity <= 200) {
        const first100Price = 100 * first100Rate;
        const restTicketPrice = (ticketQuantity - 100) * second100Rate;
        return first100Price + restTicketPrice;
    } else {
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTicketPrice = (ticketQuantity - 200) * restTicketRate;
        return first100Price + second100Price + restTicketPrice;
    }
}
// Example usage
const price = ticketPrice(250);
console.log('Price: ', price); 
*/
//Output: Price:  22500

/*
Let's break it down step by step in a simple way. The 'ticketPrice' function calculates the total price of tickets based on the quantity you buy. The pricing depends on how many tickets you purchase, divided into three ranges:

Pricing Rules:
1. First 100 tickets: Each costs 100.
2. Next 100 tickets (101–200): Each costs 90.
3. Remaining tickets (201 and beyond): Each costs 70.


How It Works:
1. For 100 tickets or fewer (ticketQuantity <= 100):
* The function directly multiplies the number of tickets by the first100 rate.
* Example:
ticketPrice(50) = 50 * 100 = 5000


2. For tickets between 101 and 200 (ticketQuantity <= 200):
* First, calculate the price of the first 100 tickets: '100 * 100 = 10000'.
* Then, calculate the price for the rest ('ticketQuantity - 100' tickets) at 90 per ticket.
* Add both prices together.
Example:
ticketPrice(150)
= (100 * 100) + ((150 - 100) * 90)
= 10000 + (50 * 90)
= 10000 + 4500
= 14500


3. For tickets beyond 200 (ticketQuantity > 200):
* First, calculate the price of the first 100 tickets: '100 * 100 = 10000'.
* Then, calculate the price for the next 100 tickets: '100 * 90 = 9000'.
* Finally, calculate the price for the rest ('ticketQuantity - 200' tickets) at 70 per ticket.
* Add all three together.
* Example:
ticketPrice(250)
= (100 * 100) + (100 * 90) + ((250 - 200) * 70)
= 10000 + 9000 + (50 * 70)
= 10000 + 9000 + 3500
= 22500



Step-by-Step for Your Example (ticketPrice(250)):
1. First 100 tickets: 100 × 100 = 10,000
2. Next 100 tickets (101–200): 100 × 90 = 9,000
3. Remaining 50 tickets (201–250): 50 × 70 = 3,500
4. Total Price: 10,000 + 9,000 + 3,500 = 22,500
*/



/* 
So if i want to see
const price = ticketPrice(1); 
console.log('Price: ', price); 
Is it output will be 1?

No, the output will not be '1'. It will be '100' because the function calculates the price based on the 'first100Rate', which is '100'. Here's why:
Breakdown:

1. You call the function with 'ticketQuantity = 1'.
2. The function checks the condition: 'if (ticketQuantity <= 100)'. Since '1 <= 100', this block executes.
3. The price is calculated as 'ticketQuantity * first100Rate', which is '1 * 100 = 100'.
4. The function returns '100'.

Output:
const price = ticketPrice(1);
console.log('Price: ', price); 
// Output: Price: 100
*/


/* 
function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if(ticketQuantity <= 100){
        const price = ticketQuantity * first100Rate;
        return price;
    }
}

const price = ticketPrice(20);
console.log('Price: ', price); 
*/
// Output: Price:  2000



/* 
function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if(ticketQuantity <= 100){
        const price = ticketQuantity * first100Rate;
        return price;
    }
    else if(ticketQuantity <= 200){
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity -100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }
}

const price = ticketPrice(100);
console.log('Price: ', price); 
*/ 
// Output: Price:  10000



/* 
function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if(ticketQuantity <= 100){
        const price = ticketQuantity * first100Rate;
        return price;
    }
    else if(ticketQuantity <= 200){
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity -100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }
}

const price = ticketPrice(120);
console.log('Price: ', price); 
*/
// Output: Price:  11800


/* 
function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if(ticketQuantity <= 100){
        const price = ticketQuantity * first100Rate;
        return price;
    }
    else if(ticketQuantity <= 200){
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity -100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }
    else{
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restTicketRate;
        const totalPrice = first100Price + second100Price + restTicketPrice;
        return totalPrice;
    }
}

const price = ticketPrice(120);
console.log('Price: ', price); 
*/
// Output: Price:  11800



/*
Here's a breakdown of what your code does:

1. First 100 tickets: Price is calculated at the 'first100Rate'.
2. Next 100 tickets (101-200): Price is calculated at the 'second100Rate'.
3. Remaining tickets (201+): Price is calculated at the 'restTicketRate'.


Test Case Output:
For 'ticketQuantity = 120':

* First 100 tickets cost: 100 × 100 = 10000
* Next 20 tickets cost: 20 × 90 = 1800
* Total price: 10000 + 1800 = 11800
This matches the output of your code:
Price:  11800


Suggestions for Improvement:

Your code is good, but here are a few enhancements for readability and maintainability:

1. Avoid code repetition: You repeat similar calculations (e.g., 'first100Price', 'second100Price'). You can simplify it by keeping a single 'totalPrice' variable and updating it.
2. Use consistent variable naming: Consider naming variables like 'restTicketQuantity' as 'remainingTickets' for better readability.
3. Add inline comments: Explain what each block of the code does for future reference.

Here's the refactored version:
*/
function ticketPrice(ticketQuantity) {
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    
    let totalPrice = 0;

    if (ticketQuantity <= 100) {
        totalPrice = ticketQuantity * first100Rate;
    } 
    else if (ticketQuantity <= 200) {
        totalPrice = (100 * first100Rate) + ((ticketQuantity - 100) * second100Rate);
    } 
    else {
        totalPrice = (100 * first100Rate) + (100 * second100Rate) + ((ticketQuantity - 200) * restTicketRate);
    }
    
    return totalPrice;
}

const price = ticketPrice(120);
console.log('Price:', price); 
// Output: Price: 11800




// totalPrice = 120 * 100 Output = 12000;
//totalPrice = ((100 * 100) = 10000) + (((120 - 100) = 20) * 90 = 1800) Output = 11800;
//totalPrice = ((100 * 100) = 10000) + ((100 * 90) = 9000) + ((120 - 200) * 70 = -5600) Output = 13400 ;
/*
First term (first 100 tickets):
100 × 100 = 10,000

Second term (next 100 tickets):
100 × 90 = 9,000

Third term (remaining tickets):
Calculate remaining tickets:
(120 − 200) = − 80
Multiply by the rest ticket rate:
− 80 × 70 = − 5,600
Combine all terms:
totalPrice = 10,000 + 9,000 + (−5,600)
totalPrice = 13,400
*/

