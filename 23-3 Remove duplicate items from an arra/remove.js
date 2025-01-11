/*                          23-3 Remove duplicate items from an array */

/* 
To remove duplicate items from an array in JavaScript, you can use different approaches depending on your needs. Here are some common and efficient ways:

1. Using 'Set' (ES6+)

const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = [...new Set(array)];
console.log(uniqueArray);
Output: [1, 2, 3, 4, 5]

Explanation:
The 'Set' object stores unique values, and the spread operator ('...') converts the set back into an array.

2. Using 'filter()'

const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = array.filter((item, index) => array.indexOf(item) === index);
console.log(uniqueArray);
Output: [1, 2, 3, 4, 5]

Explanation:

* The filter() method keeps an element only if it appears for the first time at the current index.

1. The 'filter()' method loops through each item in the array.
2. For each item, it checks if the first time this item appears in the array is at the current position (index).
3. The condition 'array.indexOf(item) === index' is doing this check:
* 'array.indexOf(item)' finds the first position (index) where the item appears in the array.
* 'index' is the position we are currently checking.
4. If the first position (from 'indexOf()') is the same as the current position (index), that means it's the first time the item is appearing at that index, so it keeps it.
5. If it’s not the first time (the item already appeared earlier), it skips that item.

Example Walkthrough:

For 'array = [1, 2, 2, 3, 4, 4, 5]':

* At index 0, item is '1'. The first occurrence of '1' is at index 0 (so keep it).
* At index 1, item is '2'. The first occurrence of '2' is at index 1 (so keep it).
* At index 2, item is '2'. The first occurrence of '2' is at index 1, but current index is 2 (so skip it).
* At index 3, item is '3'. The first occurrence of '3' is at index 3 (so keep it).
* At index 4, item is '4'. The first occurrence of '4' is at index 4 (so keep it).
* At index 5, item is '4'. The first occurrence of '4' is at index 4, but current index is 5 (so skip it).
* At index 6, item is '5'. The first occurrence of '5' is at index 6 (so keep it).

Result:
The final unique array is [1, 2, 3, 4, 5] because duplicates are removed.

/ ------------------------------------------------------------------------------------------------------------- /

Here’s a simpler explanation of how 'filter()' works to remove duplicates:

When you loop through the array using 'filter()', it checks each item.

* 'indexOf(item)' finds the first position where the item appears in the array.
* 'filter()'compares this position with the current position (index).
* If they are the same, it means this is the first time the item appears, so it keeps the item.
* If they are different, it means the item has already been seen before, so it skips the item.



3. Using 'reduce()'

const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = array.reduce((acc, item) => {
  if (!acc.includes(item)) {
    acc.push(item);
  }
  return acc;
}, []);
console.log(uniqueArray);
Output: [1, 2, 3, 4, 5]

Explanation:
'reduce()' builds a new array by checking if the item is already included before adding it.

* These methods are straightforward and help eliminate duplicate values effectively.


** Explain how the reduce() method is used to remove duplicates in a simple way.

const array = [1, 2, 2, 3, 4, 4, 5];

const uniqueArray = array.reduce((acc, item) => {
  if (!acc.includes(item)) {
    acc.push(item); // Add the item if it's not already in acc
  }
  return acc; // Return the updated accumulator
}, []); // Initial accumulator is an empty array

console.log(uniqueArray);
Output: [1, 2, 3, 4, 5]

Step-by-Step Explanation:

1. 'reduce()' processes the array by accumulating a result step by step.

* The 'acc' (accumulator) is an empty array at the beginning ([]).
* 'item' represents each element in the original array as 'reduce()' loops through it.

2. 'if (!acc.includes(item))' checks if 'item' is already in 'acc'.

* If the item is not in 'acc', it adds ('push()') it to the accumulator.
* If it’s already there, it skips adding the duplicate.

3. The 'return acc;' statement ensures the updated array ('acc') is passed on to the next iteration.

4. At the end, 'reduce()' returns 'acc', which now holds the unique values.

Example Walkthrough:

For 'array = [1, 2, 2, 3, 4, 4, 5]:'

* Step 1: 'acc = []', item = '1'.  '1' is not in 'acc', so add '1' → 'acc = [1]'.
* Step 2: 'acc = [1]', item = '2'.  '2' is not in 'acc', so add '2' → 'acc = [1, 2]'.
* Step 3: 'acc = [1, 2]', item = '2'.  '2' is already in 'acc', so skip it.
* Step 4: 'acc = [1, 2]', item = '3'.  '3' is not in 'acc', so add '3' → 'acc = [1, 2, 3]'.
* Step 5: 'acc = [1, 2, 3]', item = '4'.  '4' is not in 'acc', so add '4' → 'acc = [1, 2, 3, 4]'.
* Step 6: 'acc = [1, 2, 3, 4]', item = '4'.  '4' is already in 'acc', so skip it.
* Step 7: 'acc = [1, 2, 3, 4]', item = '5'.  '5' is not in 'acc', so add '5' → 'acc = [1, 2, 3, 4, 5]'.

Final Output:

[1, 2, 3, 4, 5]
This method builds a new array by checking each element one by one, adding it only if it’s not already in the result.


** The most efficient method to remove duplicates from an array in JavaScript is using a Set. Here’s why:

Why 'Set' is Most Efficient:

1. Time Complexity:

* Creating a 'Set' has a time complexity of O(n), where 'n' is the number of elements in the array.
* In contrast, 'filter()' with 'indexOf()' or 'reduce()' with 'includes()' have O(n²) complexity in the worst case, as both 'indexOf()' and 'includes()' are linear operations nested within a loop.

2. Memory Usage:

* A 'Set' uses some extra memory internally, but since it avoids repetitive searches, it is generally faster for large arrays.

When to Use Each Approach:

Method:	        Time Complexity:        Best Use Case:
Set	            O(n)	                Large datasets where performance is critical
filter()	    O(n²)	                Small arrays or where simplicity is more important than speed
reduce()	    O(n²)	                More functional programming style, or when building complex results

Conclusion:
Use 'Set' for most cases where efficiency matters:

const uniqueArray = [...new Set(array)];

* For small arrays or specialized needs, other methods may still be acceptable.


** In the context of the 'reduce()' method, 'acc' stands for "accumulator". It is a variable that keeps track of the ongoing result as 'reduce()' processes each element in the array.

Here’s a simple analogy:

* Think of 'acc' like a basket where you are collecting unique items.
* On each loop (iteration), you check if the current item is already in the basket (using 'includes()').
* If it’s not in the basket, you add it (using 'push()').
* At the end, the basket ('acc') contains only unique items.

Breakdown in the Example:

const uniqueArray = array.reduce((acc, item) => {
  if (!acc.includes(item)) {
    acc.push(item); // Add item if it's not already there
  }
  return acc; // Return the updated basket (accumulator)
}, []); // Start with an empty basket (acc = [])

* ''acc' starts as an empty array ('[]').
* It gets filled with values as you loop through the original array, accumulating the unique items step by step.
* In short, 'acc' is where the result (final unique array) is being collected and built up as you iterate.
*/