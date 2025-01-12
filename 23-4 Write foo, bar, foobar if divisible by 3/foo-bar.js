/*                          23-4 Write foo, bar, foobar if divisible by 3 or 5 or both */


/* 
Let's break down the "foo", "bar", and "foobar" example in JavaScript to help you understand step-by-step. This explanation will cover what is happening and why it works.

Problem Statement:

You want to check numbers and:

* Print "foo" if the number is divisible by 3.
* Print "bar" if the number is divisible by 5.
* Print "foobar" if the number is divisible by both 3 and 5.
* If a number is divisible by neither, print the number itself.

Step-by-Step Breakdown:

for (let i = 1; i <= 100; i++) {
  let output = '';  // Initialize an empty string for each iteration
  
  if (i % 3 === 0) {
    output += 'foo';  // Add "foo" if the number is divisible by 3
  }
  
  if (i % 5 === 0) {
    output += 'bar';  // Add "bar" if the number is divisible by 5
  }
  
  console.log(output || i);  // Print "output" if it's not empty, otherwise print the number
}

Explanation of Concepts:

1. For Loop ('for' statement)

'for (let i = 1; i <= 100; i++) {'

* This loop runs from 1 to 100.
* 'i' is the loop counter that changes from 1 to 100.
* 'let' is used to declare the variable 'i' (scoped to the loop).

2. Divisibility Check ('if' statement)

'if (i % 3 === 0)'

* '%' is the modulus operator. It returns the remainder when one number is divided by another.
* 'i % 3 === 0' means "check if 'i' is divisible by 3".
* If the remainder is 0, the condition is true, so "foo" is added to 'output'.

3. String Concatenation ('+=')

'output += 'foo';'

* '+=' adds "foo" to the existing 'output'.
* If 'output' was empty, it becomes "foo".
* Similarly, "bar" is added if divisible by 5.

4. Combining Conditions

* When a number is divisible by both 3 and 5 (e.g., 15), both conditions are true:
    * "foo" is added because '15 % 3 === 0'.
    * "bar" is added because '15 % 5 === 0'.
* So, 'output' becomes "foobar".

5. Printing the Result ('console.log')

'console.log(output || i);'

* 'output || i' checks if 'output' is not empty.
* If 'output' is empty, it prints 'i' instead.

Example Output:
1
2
foo
4
bar
foo
7
8
foo
bar
11
foo
13
14
foobar

Key Terms Simplified:
* Modulus (%): Finds the remainder of division.
* String Concatenation (+=): Adds one string to another.
* Logical OR (||): Returns the first truthy value (in this case, 'output' or 'i').



for (let i = 1; i <= 100; i++) {
    let output = '';  // Initialize an empty string for each iteration
    
    if (i % 3 === 0) {
      output += 'foo';  // Add "foo" if the number is divisible by 3
    }
    
    if (i % 5 === 0) {
      output += 'bar';  // Add "bar" if the number is divisible by 5
    }
    
    console.log(output || i);  // Print "output" if it's not empty, otherwise print the number
  }

Output:
1
2
foo
4
bar
foo
7
8
foo
bar
11
foo
13
14
foobar
16
17
foo
19
bar
foo
22
23
foo
bar
26
foo
28
29
foobar
31
32
foo
34
bar
foo
37
38
foo
bar
41
foo
43
44
foobar
46
47
foo
49
bar
foo
52
53
foo
bar
56
foo
58
59
foobar
61
62
foo
64
bar
foo
67
68
foo
bar
71
foo
73
74
foobar
76
77
foo
79
bar
foo
82
83
foo
bar
86
foo
88
89
foobar
91
92
foo
94
bar
foo
97
98
foo
bar


/ ------------------------------------------------------------------------------------------------------------ /

This code snippet will loop from 1 to 100 and check if each number is divisible by 3, 5, or both. Here's how it works step-by-step:

for (let i = 1; i <= 100; i++) {
  let output = '';  // Initialize an empty string for each iteration
  
  // Check if the number is divisible by 3
  if (i % 3 === 0) {
    output += 'foo';  // Add "foo" if divisible by 3
  }
  
  // Check if the number is divisible by 5
  if (i % 5 === 0) {
    output += 'bar';  // Add "bar" if divisible by 5
  }
  
  // If output is not empty, print it, otherwise print the number itself
  console.log(output || i);  // If output is empty, print the number `i`
}

Step-by-Step Explanation:

1. Divisible by 3 (i % 3 === 0)

* If a number is divisible by 3, "foo" is added to the 'output' string.
* Example: For 'i = 3', '3 % 3 === 0' is true, so "foo" will be added to 'output'.

2. Divisible by 5 (i % 5 === 0)

* If a number is divisible by 5, "bar" is added to the 'output' string.
* Example: For 'i = 5', '5 % 5 === 0' is true, so "bar" will be added to 'output'.

3. Divisible by both 3 and 5 (i % 3 === 0 && i % 5 === 0)

* If a number is divisible by both 3 and 5, both "foo" and "bar" will be concatenated to the 'output' string, resulting in "foobar".
* Example: For 'i = 15', '15 % 3 === 0' and '15 % 5 === 0' are both true, so "foobar" will be printed.

4. Neither divisible by 3 nor 5 (if no match)

* If a number is not divisible by 3 or 5, it will print the number itself.
* Example: For 'i = 1', since '1' is not divisible by 3 or 5, the output will be '1'.


Detailed Example Output:
Here’s how the code works for the first few numbers:

i:	        i % 3:      i % 5:	    Output:
1	        1	        1	        1
2	        2	        2	        2
3	        0	        3	        foo
4	        1	        4	        4
5	        2	        0	        bar
6	        0	        1	        foo
7	        1	        2	        7
8	        2	        3	        8
9	        0	        4	        foo
10	        1	        0	        bar
11	        2	        1	        11
12	        0	        2	        foo
13	        1	        3	        13
14	        2	        4	        14
15	        0	        0	        foobar
16	        1	        1	        16


Summary of the Logic:

* "foo": Printed for numbers divisible by 3 (like 3, 6, 9, 12, etc.).
* "bar": Printed for numbers divisible by 5 (like 5, 10, 20, etc.).
* "foobar": Printed for numbers divisible by both 3 and 5 (like 15, 30, 45, etc.).
* If a number is divisible by neither 3 nor 5, the number itself is printed.

Key Points to Remember: 

* 'i % 3 === 0': This checks if a number is divisible by 3.
* 'i % 5 === 0': This checks if a number is divisible by 5.
* '+=': This operator is used to append to the string 'output'. It adds "foo" or "bar" depending on the divisibility condition.
* 'console.log(output || i)': This prints the output string (if it's not empty) or the number 'i' (if 'output' is empty).





** Here's the same logic using a while loop:

let i = 1;  // Initialize the counter

while (i <= 100) {
  let output = '';  // Initialize an empty string for each iteration
  
  if (i % 3 === 0) {
    output += 'foo';  // Add "foo" if the number is divisible by 3
  }
  
  if (i % 5 === 0) {
    output += 'bar';  // Add "bar" if the number is divisible by 5
  }
  
  console.log(output || i);  // Print "output" if it's not empty, otherwise print the number
  
  i++;  // Increment the counter
}
This version uses a 'while' loop instead of a 'for' loop to iterate from 1 to 100, performing the same checks and outputs.



** Here's a shorter version using a 'while' loop with a direct 'console.log' statement:

let i = 1;

while (i <= 100) {
  console.log((i % 3 ? '' : 'foo') + (i % 5 ? '' : 'bar') || i);
  i++;
}

Explanation:

* '(i % 3 ? '' : 'foo')': Returns "foo" if 'i' is divisible by 3, otherwise returns an empty string.
* '(i % 5 ? '' : 'bar')': Returns "bar" if 'i' is divisible by 5, otherwise returns an empty string.
* The '+' concatenates the results of both checks.
* '|| i' outputs 'i' if the result of the concatenation is an empty string.
*/
