/*                          23-9 Handle unexpected function input parameter error */

/* 
function add(num1, num2){
    return num1 + num2;
}

const result = add(12, 45);
console.log(result); 
*/
// Output: 57



/* 
function add(num1, num2){
    return num1 + num2;
}

const result = add(12, '45');
console.log(result); 
*/
// Output: 1245

/* 
function add(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please enter a number';
    }
    return num1 + num2;
}

const result = add(12, '45');
console.log(result); 
*/
// Output: Please enter a number


/* 
function add(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please enter a number';
    }
    return num1 + num2;
}

const result = add(12, 45);
console.log(result); 
*/
// Output: 57


/* 
function add(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please enter a number';
    }
    return num1 + num2;
}

const result = add('12', 45);
console.log(result); 
*/
// Output: Please enter a number


/* 
function add(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please enter a number';
    }
    return num1 + num2;
}

const result = add(false, 45);
console.log(result); 
*/
// Output: Please enter a number



/* 
function add(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please enter a number';
    }
    return num1 + num2;
}

const result = add(12, 45);
//console.log(result);

function multiply(num1, num2){
    return num1 * num2;
}

const output = multiply(12*45);
console.log(output); 
*/
// Output: NaN



/* 
function add(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please enter a number';
    }
    return num1 + num2;
}

const result = add(12, 45);
//console.log(result);

function multiply(num1, num2){
    console.log(num1, num2);
    return num1 * num2;
}

const output = multiply(12*45);
console.log(output); 
*/
/* Output:
540 undefined
NaN */


function add(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please enter a number';
    }
    return num1 + num2;
}

const result = add(12, 45);
//console.log(result);

function multiply(num1, num2){
    console.log(num1, num2);
    return num1 * num2;
}

const output = multiply(12, 45);
console.log(output);
/* Output:
12 45
540 */