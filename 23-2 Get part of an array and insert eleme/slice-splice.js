/*                          23-2 Get part of an array and insert elements using slice, splice */

/* 
How to use 'slice' and 'splice' methods in JavaScript to get part of an array and insert elements:

1. 'slice()' – Extracting Part of an Array

* Purpose: Returns a shallow copy of a portion of an array into a new array without modifying the original.

* Syntax: 'array.slice(startIndex, endIndex)'

* 'startIndex': The index where extraction begins (inclusive).
* 'endIndex': The index where extraction ends (exclusive).

Example:

let fruits = ['apple', 'banana', 'cherry', 'date', 'fig'];
let slicedFruits = fruits.slice(1, 4); // Gets elements from index 1 to 3
console.log(slicedFruits); // Output: ['banana', 'cherry', 'date']
console.log(fruits); // Original array remains unchanged
Output:
[ 'banana', 'cherry', 'date' ]
[ 'apple', 'banana', 'cherry', 'date', 'fig' ]

1. 'startIndex' (1): This is where the extraction starts, and it is inclusive.

* So, element at index '1 ('banana')' is included in the result.

2. 'endIndex' (4): This marks where the extraction stops, but it is exclusive.

* The element at index '4 ('fig')' is not included. Instead, the last element in the result is from index '3 ('date')'.

3. Result (slicedFruits): The extracted elements are from index '1' to '3':

* ['banana', 'cherry', 'date']

Key Indexing Recap:

Index 0 = 'apple'
Index 1 = 'banana'
Index 2 = 'cherry'
Index 3 = 'date'
Index 4 = 'fig'

* The 'slice' method includes the element at 'startIndex' but stops just before 'endIndex'.

Visual Representation:

Index:	Element:
0	    'apple'
1	    'banana'
2	    'cherry'
3	    'date'
4	    'fig'

In 'slice(1, 4)', the range is '[1, 4)', meaning:

Include element at index '1 ('banana')'
Include element at index '2 ('cherry')'
Include element at index '3 ('date')'
Exclude element at index '4 ('fig')'






2. 'splice()' – Inserting, Removing, or Replacing Elements

* Purpose: Changes the original array by adding, removing, or replacing elements.

* Syntax: 'array.splice(startIndex, deleteCount, ...itemsToAdd)'

* 'startIndex': Index where changes start.
* 'deleteCount': Number of elements to remove.
* 'itemsToAdd': Elements to insert.



** Example 1: Inserting Elements:

let colors = ['red', 'blue', 'green'];
colors.splice(1, 0, 'yellow', 'purple'); // Inserts at index 1
console.log(colors);
Output: [ 'red', 'yellow', 'purple', 'blue', 'green' ]

How the splice() Method Works:

Syntax: 'array.splice(startIndex, deleteCount, ...itemsToAdd)'

'startIndex': The index where the insertion (or removal) begins.
'deleteCount': The number of elements to remove.
'itemsToAdd': One or more elements to insert at the specified position.

Step-by-Step Breakdown:

1. Original Array: ['red', 'blue', 'green']

Index 0 = 'red'
Index 1 = 'blue'
Index 2 = 'green'

2. colors.splice(1, 0, 'yellow', 'purple'):

* '1' is the startIndex, pointing to 'blue'.
* '0' is the deleteCount, so no elements are removed from the array.
* 'yellow' and 'purple' are the elements to insert at index '1'.

3. Insertion of Elements:

* 'yellow' is inserted at index '1'.
* 'purple' is inserted at index '2'.
* The existing elements ('blue' and 'green') are shifted to the right to make room.

4. Final Array: ['red', 'yellow', 'purple', 'blue', 'green']

Visual Representation:

Before Splice:	After Splice (Insert at index 1):
'red'	            'red'
'blue'	            'yellow'
'green'	            'purple'
                    'blue'
                    'green'


Key Points:
* Inserting elements using 'splice()' shifts existing elements to make room without removing any if 'deleteCount' is '0'.
* The original array is modified directly by 'splice()'.




** Example 2: Removing Elements:

let numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 2); // Removes 2 elements starting at index 2
console.log(numbers);
Output: [1, 2, 5]

Step-by-Step Breakdown:

1. Original Array:numbers = [1, 2, 3, 4, 5]

* Index 0 = 1
* Index 1 = 2
* Index 2 = 3
* Index 3 = 4
* Index 4 = 5

2. numbers.splice(2, 2):

* '2' is the startIndex, pointing to '3'.
* '2' is the deleteCount, so two elements starting from index '2' are removed.
* The elements at index '2' and '3' ('3' and '4') are removed.

3. Final Array:

* The elements remaining are [1, 2, 5].
* '5' shifts into the position of the removed elements.

Visual Representation:

Before Splice:	    After Splice (Removing elements at index 2, 2 elements):
1	                1
2	                2
3	                — (removed)
4	                — (removed)
5	                5

Key Points:
* 'splice(2, 2)' removes two elements starting from index '2'.
* The original array is modified directly by 'splice()'.
* No elements are added because no additional arguments are provided after 'deleteCount'.




** Example 3: Replacing Elements:

let animals = ['cat', 'dog', 'rabbit'];
animals.splice(1, 1, 'fox'); // Replaces 'dog' with 'fox'
console.log(animals);
Output: ['cat', 'fox', 'rabbit']

Step-by-Step Breakdown:

1. Original Array: animals = ['cat', 'dog', 'rabbit']

* Index 0 = 'cat'
* Index 1 = 'dog'
* Index 2 = 'rabbit'

2. animals.splice(1, 1, 'fox'):

* '1' is the startIndex, pointing to 'dog'.
* '1' is the deleteCount, so one element ('dog') is removed from the array.
* 'fox' is the new element inserted at index '1' to replace 'dog'.

3. Final Array: ['cat', 'fox', 'rabbit']

Visual Representation:

Before Splice:	            After Splice (Replace 'dog' with 'fox'):
'cat'	                    'cat'
'dog'	                    'fox'
'rabbit'                    'rabbit'

Key Points:
* Replacement is done by removing one element ('dog') and adding one element ('fox') in its place.
* The original array is modified directly.
* You can replace multiple elements by specifying a higher 'deleteCount' and adding more elements.

Key Differences:
* 'slice' does not modify the original array, while 'splice' modifies the array directly.
* 'slice' is used for copying parts of arrays, 'splice' is used for adding, removing, or replacing elements.
*/
