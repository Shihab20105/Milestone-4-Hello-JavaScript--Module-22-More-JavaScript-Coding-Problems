/*                          23-5 Use add and multiplication to calculate wood requirements */

/* 
Using addition and multiplication to calculate wood requirements step-by-step.

Example Problem:
You want to build a rectangular wooden table frame, and you need to find out how much wood is required for the legs and the frame.

Dimensions:
* You need 4 legs, each 3 feet tall.
* You need 2 pieces for the length, each 6 feet long.
* You need 2 pieces for the width, each 4 feet long.

Now, let’s calculate the total amount of wood required using addition and multiplication.


Step 1: Use Multiplication for Repeated Parts:
* Since there are 4 legs, the wood required for legs =
4 × 3 feet = 12 feet of wood.

* For the length, you need 2 pieces, each 6 feet.
Wood required for length = 2 × 6 feet = 12 feet.

* For the width, you need 2 pieces, each 4 feet.
Wood required for width = 2 × 4 feet = 8 feet.



Step 2: Add All the Wood Together:
Total wood required =
(wood for legs) + (wood for length) + (wood for width)
= 12 feet + 12 feet + 8 feet
= 32 feet.

Summary:
You used multiplication to find the total for repeated pieces (legs, length, and width) and addition to combine all the totals. This way, you efficiently calculate how much wood you need without counting each piece individually.


** Imagine you are building a rectangular table frame. The table requires:

* 4 legs, each 3 feet tall.
* 2 long frame pieces, each 6 feet long.
* 2 short frame pieces, each 4 feet long.

We want to calculate the total wood required.

// Step 1: Define variables for the dimensions and quantity
let numberOfLegs = 4;
let legHeight = 3; // each leg is 3 feet

let numberOfLongPieces = 2;
let longPieceLength = 6; // each long piece is 6 feet

let numberOfShortPieces = 2;
let shortPieceLength = 4; // each short piece is 4 feet

// Step 2: Use multiplication to find total wood needed for each part
let totalLegsWood = numberOfLegs * legHeight; // 4 * 3 = 12 feet
let totalLongPiecesWood = numberOfLongPieces * longPieceLength; // 2 * 6 = 12 feet
let totalShortPiecesWood = numberOfShortPieces * shortPieceLength; // 2 * 4 = 8 feet

// Step 3: Add up all the wood required
let totalWoodRequired = totalLegsWood + totalLongPiecesWood + totalShortPiecesWood;

// Step 4: Display the result
console.log("Total wood required: " + totalWoodRequired + " feet");

Explanation of the Code:

1. Variables:
We used variables to represent the number of legs, the height of each leg, and the dimensions of the frame pieces.

2. Multiplication:
We multiplied the number of pieces by their respective lengths to find the total wood for legs, long pieces, and short pieces.

3. Addition:
We added the total wood for all parts to get the final wood requirement.

4.Output:
'console.log()' prints the result to the console.

Output:
Total wood required: 32 feet

* This example combines addition and multiplication to calculate wood requirements.

/ ------------------------------------------------------------------------------------------------------------- /

let numberOfLegs = 4;
let legHeight = 3; // each leg is 3 feet

let numberOfLongPieces = 2;
let longPieceLength = 6; // each long piece is 6 feet

let numberOfShortPieces = 2;
let shortPieceLength = 4; // each short piece is 4 feet

let totalLegsWood = numberOfLegs * legHeight; // 4 * 3 = 12 feet
let totalLongPiecesWood = numberOfLongPieces * longPieceLength; // 2 * 6 = 12 feet
let totalShortPiecesWood = numberOfShortPieces * shortPieceLength; // 2 * 4 = 8 feet

let totalWoodRequired = totalLegsWood + totalLongPiecesWood + totalShortPiecesWood;

console.log("Total wood required: " + totalWoodRequired + " feet");
Output: Total wood required: 32 feet





** In JavaScript, you can encapsulate the logic for calculating wood requirements inside a function to make it reusable. Here's how to do it and call the function with different inputs.

JavaScript Code with a Function:

// Function to calculate total wood required
function calculateWoodRequirements(numLegs, legHeight, numLongPieces, longPieceLength, numShortPieces, shortPieceLength) {
    // Multiply to get total wood for each part
    let totalLegsWood = numLegs * legHeight;
    let totalLongPiecesWood = numLongPieces * longPieceLength;
    let totalShortPiecesWood = numShortPieces * shortPieceLength;

    // Add to get the total wood required
    let totalWoodRequired = totalLegsWood + totalLongPiecesWood + totalShortPiecesWood;

    // Return the result
    return totalWoodRequired;
}

// Calling the function with example inputs
let totalWood = calculateWoodRequirements(4, 3, 2, 6, 2, 4); // Example: 4 legs of 3 feet, 2 long pieces of 6 feet, 2 short pieces of 4 feet

// Display the result
console.log("Total wood required: " + totalWood + " feet");

Explanation:

1. Function Definition:
'calculateWoodRequirements' takes 6 parameters:

* 'numLegs': Number of legs
* 'legHeight': Height of each leg
* 'numLongPieces': Number of long frame pieces
* 'longPieceLength': Length of each long piece
* 'numShortPieces': Number of short frame pieces
* 'shortPieceLength': Length of each short piece

2. Inside the Function:
We calculate the total wood needed for each part using multiplication, then sum them up to get the total wood required.

3. Calling the Function:
You call the function with specific values like '4, 3, 2, 6, 2, 4', and the result is stored in 'totalWood'.

4. Output:
The result is printed using 'console.log()'.

Output:
Total wood required: 32 feet


* How to Call the Function with Different Inputs

let woodForSmallTable = calculateWoodRequirements(4, 2, 2, 5, 2, 3);  // Custom table size
console.log("Total wood required for small table: " + woodForSmallTable + " feet");

let woodForLargeTable = calculateWoodRequirements(4, 4, 2, 8, 2, 6);  // Larger table size
console.log("Total wood required for large table: " + woodForLargeTable + " feet");

This approach makes your code modular and reusable for different sets of inputs.

/ ------------------------------------------------------------------------------------------------------------ /

function calculateWoodRequirements(numLegs, legHeight, numLongPieces, longPieceLength, numShortPieces, shortPieceLength) {
    let totalLegsWood = numLegs * legHeight;
    let totalLongPiecesWood = numLongPieces * longPieceLength;
    let totalShortPiecesWood = numShortPieces * shortPieceLength;
    let totalWoodRequired = totalLegsWood + totalLongPiecesWood + totalShortPiecesWood;
    return totalWoodRequired;
}

let totalWood = calculateWoodRequirements(4, 3, 2, 6, 2, 4); 
console.log("Total wood required: " + totalWood + " feet");
Output: Total wood required: 32 feet

/ ----------------------------------------------------------------------------------------------------------- /

function calculateWoodRequirements(numLegs, legHeight, numLongPieces, longPieceLength, numShortPieces, shortPieceLength) {
    let totalLegsWood = numLegs * legHeight;
    let totalLongPiecesWood = numLongPieces * longPieceLength;
    let totalShortPiecesWood = numShortPieces * shortPieceLength;
    let totalWoodRequired = totalLegsWood + totalLongPiecesWood + totalShortPiecesWood;
    return totalWoodRequired;
}

let woodForSmallTable = calculateWoodRequirements(4, 2, 2, 5, 2, 3);  // Custom table size
console.log("Total wood required for small table: " + woodForSmallTable + " feet");
Output: Total wood required for small table: 24 feet

/ ----------------------------------------------------------------------------------------------------------- /

function calculateWoodRequirements(numLegs, legHeight, numLongPieces, longPieceLength, numShortPieces, shortPieceLength) {
    let totalLegsWood = numLegs * legHeight;
    let totalLongPiecesWood = numLongPieces * longPieceLength;
    let totalShortPiecesWood = numShortPieces * shortPieceLength;
    let totalWoodRequired = totalLegsWood + totalLongPiecesWood + totalShortPiecesWood;
    return totalWoodRequired;
}

let woodForLargeTable = calculateWoodRequirements(4, 4, 2, 8, 2, 6);  // Larger table size
console.log("Total wood required for large table: " + woodForLargeTable + " feet");
Output: Total wood required for large table: 44 feet



** How you can use a 'for loop' in JavaScript to calculate wood requirements by adding and multiplying values for each component:


// Function to calculate total wood requirements using a loop
function calculateWoodWithLoop(quantities, lengths) {
    let totalWoodRequired = 0;

    // Loop through each item to calculate total wood
    for (let i = 0; i < quantities.length; i++) {
        totalWoodRequired += quantities[i] * lengths[i]; // Multiply and add
    }

    return totalWoodRequired;
}

// Example input arrays
let quantities = [4, 2, 2];  // 4 legs, 2 long pieces, 2 short pieces
let lengths = [3, 6, 4];     // legs are 3 feet, long pieces 6 feet, short pieces 4 feet

// Calling the function
let totalWood = calculateWoodWithLoop(quantities, lengths);

// Display the result
console.log("Total wood required using loop: " + totalWood + " feet");

Explanation:

1. Function Parameters:

    * 'quantities' is an array representing the number of each type of wood piece.
    * 'lengths' is an array representing the corresponding lengths of each piece.

2. For Loop:

    * The loop runs through each index of the arrays.
    * The current quantity (quantities[i]) is multiplied by the corresponding length (lengths[i]).
    * The result is added to 'totalWoodRequired' in each iteration.

3. Example Input:
In this example, 'quantities = [4, 2, 2]' and 'lengths = [3, 6, 4]'.

The loop calculates:
* '(4 × 3) + (2 × 6) + (2 × 4)' = '12 + 12 + 8' = '32 feet'.

Output:
Total wood required using loop: 32 feet

* This method allows flexibility if you have more pieces or different dimensions; simply update the arrays.

/ ------------------------------------------------------------------------------------------------------------ /

function calculateWoodWithLoop(quantities, lengths) {
    let totalWoodRequired = 0;
    for (let i = 0; i < quantities.length; i++) {
        totalWoodRequired += quantities[i] * lengths[i]; // Multiply and add
    }

    return totalWoodRequired;
}

let quantities = [4, 2, 2];  // 4 legs, 2 long pieces, 2 short pieces
let lengths = [3, 6, 4];     // legs are 3 feet, long pieces 6 feet, short pieces 4 feet

let totalWood = calculateWoodWithLoop(quantities, lengths);
console.log("Total wood required using loop: " + totalWood + " feet");
Output: Total wood required using loop: 32 feet




** How you can use a 'while loop' in JavaScript to calculate wood requirements using addition and multiplication:


// Function to calculate total wood requirements using a while loop
function calculateWoodWithWhileLoop(quantities, lengths) {
    let totalWoodRequired = 0;
    let i = 0;  // Initialize loop counter

    // Loop through each item to calculate total wood
    while (i < quantities.length) {
        totalWoodRequired += quantities[i] * lengths[i];  // Multiply and add
        i++;  // Increment counter
    }

    return totalWoodRequired;
}

// Example input arrays
let quantities = [4, 2, 2];  // 4 legs, 2 long pieces, 2 short pieces
let lengths = [3, 6, 4];     // legs are 3 feet, long pieces 6 feet, short pieces 4 feet

// Calling the function
let totalWood = calculateWoodWithWhileLoop(quantities, lengths);

// Display the result
console.log("Total wood required using while loop: " + totalWood + " feet");

Explanation:

1. Initialization:

    * The variable 'i' is set to '0' before the loop starts.

2. While Loop:

    * The loop runs as long as 'i < quantities.length'.
    * In each iteration, it multiplies the quantity at index 'i' by the corresponding length and adds the result to 'totalWoodRequired'.
    * 'i' is incremented by 1 after each iteration.

3. Example Calculation:

    * '(4 × 3) + (2 × 6) + (2 × 4)' = '12 + 12 + 8' = '32 feet'.

Output:
Total wood required using while loop: 32 feet

* This method works similarly to a 'for' loop but uses a 'while' loop for iteration, which can be useful when the stopping condition or index is dynamically controlled.
*/
/* ----------------------------------------------------------------------------------------------------------- */


function calculateWoodWithWhileLoop(quantities, lengths) {
    let totalWoodRequired = 0;
    let i = 0;  // Initialize loop counter
    while (i < quantities.length) {
        totalWoodRequired += quantities[i] * lengths[i];  // Multiply and add
        i++;  // Increment counter
    }

    return totalWoodRequired;
}

let quantities = [4, 2, 2];  // 4 legs, 2 long pieces, 2 short pieces
let lengths = [3, 6, 4];     // legs are 3 feet, long pieces 6 feet, short pieces 4 feet
let totalWood = calculateWoodWithWhileLoop(quantities, lengths);
console.log("Total wood required using while loop: " + totalWood + " feet");
//Output: Total wood required using while loop: 32 feet
