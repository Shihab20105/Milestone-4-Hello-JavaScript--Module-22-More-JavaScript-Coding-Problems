/* 23-1 Module Introduction and isArray, includes, concat */

/* 
const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student = {id: 121, class: 11, name: 'Hasan'};
const friends = [13, 14, 11, 17, 21, 16, 15, 20];

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(typeof friends); *
/
/* Output:
string
number
boolean
object
object */



/* 
const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student = {id: 121, class: 11, name: 'Hasan'}; // This is not really a 'object'. We can't detect an array with 'typeof'.
const friends = [13, 14, 11, 17, 21, 16, 15, 20];
function add(num1, num2){
    num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(typeof friends);
console.log(typeof add); 
*/
/* Output:
string
number
boolean
object
object    // This One has ??
function */


// To 'detect' or 'check' an array you have a simple system which is 'console.log(Array.isArray(friends));'


/* 
const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student = {id: 121, class: 11, name: 'Hasan'}; // This is not really a 'object'. We can't detect an array with 'typeof'.
const friends = [13, 14, 11, 17, 21, 16, 15, 20];
function add(num1, num2){
    num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(Array.isArray(friends));
console.log(typeof add); 
*/
/* Output:
string
number
boolean
object
true
function */



/* 
const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student = {id: 121, class: 11, name: 'Hasan'}; // This is not really a 'object'. We can't detect an array with 'typeof'.
const friends = [13, 14, 11, 17, 21, 16, 15, 20];
function add(num1, num2){
    num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(Array.isArray(age));
console.log(typeof add); 
*/
/* Output:
string
number
boolean
object
false
function */



/* 
const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student = {id: 121, class: 11, name: 'Hasan'}; // This is not really a 'object'. We can't detect an array with 'typeof'.
const friends = [13, 14, 11, 17, 21, 16, 15, 20];
function add(num1, num2){
    num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(Array.isArray(age));
console.log(typeof add);

// So the most useful way to check whether something is in 'an array' or not is to use 'includes'.

console.log(friends.includes(19));
console.log(friends.includes(21)); 
*/
/* Output:
string
number
boolean
object
false
function
false
true */




const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student = {id: 121, class: 11, name: 'Hasan'}; // This is not really a 'object'. We can't detect an array with 'typeof'.
const friends = [13, 14, 11, 17, 21, 16, 15, 20];
function add(num1, num2){
    num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(Array.isArray(age));
console.log(typeof add);

// So the most useful way to check whether something is in 'an array' or not is to use 'includes'.

console.log(friends.includes(19));
console.log(friends.includes(21));

// So the most useful way to check whether something is in 'an array' or not is to use 'includes'. Although there is another system is 'indexOf'.
if(friends.indexOf(252) ==! -1){

}



// concat:
const newFriendsAge = [12, 13, 11, 13];
const allFriends = newFriendsAge.concat(friends);
console.log(allFriends);
/* Output:
string
number
boolean
object
false
function
false
true
[
  12, 13, 11, 13, 13,
  14, 11, 17, 21, 16,
  15, 20
] */
