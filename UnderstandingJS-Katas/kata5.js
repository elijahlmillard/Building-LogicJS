/**
 * ══════════════════════════════════════════════════════
 *  KATA: "The Odd One Out"
 *  Difficulty: 7 kyu (Beginner-Intermediate)
 *  Topic: Arrays & Loops
 * ══════════════════════════════════════════════════════
 *
 * DESCRIPTION:
 * ------------
 * You're given an array of integers where every number
 * appears EXACTLY TWICE — except for one lonely number
 * that appears only ONCE.
 *
 * Your job: find and return that lonely number.
 *
 * FUNCTION SIGNATURE:
 * --------------------
 *   function findOdd(numbers) { ... }
 *
 * PARAMETERS:
 *   numbers  {number[]}  - A non-empty array of integers.
 *                          Always has an odd length.
 *                          Always has exactly one unpaired number.
 *
 * RETURNS:
 *   {number} - The number that appears an odd number of times.
 *
 * ══════════════════════════════════════════════════════
 * EXAMPLES:
 * ══════════════════════════════════════════════════════
 *
 * Example 1:
 *   findOdd([1, 1, 2, 2, 3])  ===  3
 *   (1 appears twice, 2 appears twice, 3 appears once ✓)
 *
 * Example 2:
 *   findOdd([7])  ===  7
 *   (Only one element — it's automatically the odd one)
 *
 * Example 3:
 *   findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2])  ===  1
 *
 * Example 4:
 *   findOdd([10, 10, 20, 20, 30, 30, 99])  ===  99
 *
 * ══════════════════════════════════════════════════════
 * YOUR MISSION (3 levels — try each!):
 * ══════════════════════════════════════════════════════
 *
 *  🟢 Level 1 — Just make it work:
 *     Use a loop and an object to count how many times
 *     each number appears. Then find the one with count = 1.
 *     This is the most readable approach — start here!
 *
 *  🟡 Level 2 — Cleaner JS:
 *     Rewrite using Array methods like .forEach(), .filter(),
 *     or .find(). Get comfortable with how JS handles these.
 *
 *  🔴 Level 3 — The clever trick:
 *     There's a one-liner using a bitwise operator called XOR (^).
 *     Hint: any number XOR'd with itself = 0.
 *           any number XOR'd with 0 = itself.
 *     Research "XOR trick find unique number" and see if you
 *     can figure out why a single .reduce() solves it!
 *
 * ══════════════════════════════════════════════════════
 * JAVASCRIPT TIPS FOR THIS KATA:
 * ══════════════════════════════════════════════════════
 *
 *  📌 Creating an object to count things:
 *     const counts = {};
 *     counts['a'] = (counts['a'] || 0) + 1;
 *
 *  📌 Looping over an array (two styles):
 *     for (let i = 0; i < arr.length; i++) { ... }
 *     for (const item of arr) { ... }   // cleaner!
 *
 *  📌 Getting all entries from an object:
 *     for (const [key, value] of Object.entries(counts)) { ... }
 *
 *  📌 Converting a string key back to a number:
 *     Number(key)   or   parseInt(key)
 *
 * ══════════════════════════════════════════════════════
 * YOUR SOLUTION:
 * ══════════════════════════════════════════════════════
 */

// const fruits = ['apple', 'banana', 'orange', 'apple', 'apple', 'banana'];
// const fruitCounts = {};

// for (const fruit of fruits) {
//   // If the key exists, increment its value; otherwise, initialize it to 1
//   fruitCounts[fruit] = (fruitCounts[fruit] || 0) + 1;
// }

// console.log(fruitCounts);
// Output: { apple: 3, banana: 2, orange: 1 }

// findOdd([1,1,1,2,2])

function findOdd(numbers) {
  // let mylog ="";
  const count = {};
  for (const n of numbers){
    // mylog += n;
    count[n] = (count[n] || 0) + 1;
  }
  for (const [key, value] of Object.entries(count)) {
  // console.log(`${key}: ${value}`); // Output: "a: 5", "b: 7", "c: 9"
  if (value % 2 == 1){
    console.log(`${key} is the odd munber`)
  }
}
  // console.log(mylog);
  // console.log(count);
}

// ══════════════════════════════════════════════════════
// TEST SUITE  (run with Node: node kata.js)
// ══════════════════════════════════════════════════════

const tests = [
  { input: [1, 1, 2, 2, 3],                    expected: 3,  label: "Basic case"             },
  { input: [7],                                 expected: 7,  label: "Single element"         },
  { input: [5, 4, 3, 2, 1, 5, 4, 3, 2],        expected: 1,  label: "Odd one at the start"   },
  { input: [10, 10, 20, 20, 30, 30, 99],        expected: 99, label: "Odd one at the end"     },
  { input: [0, 1, 0],                           expected: 1,  label: "Contains zero"          },
  { input: [-3, -3, -1],                        expected: -1, label: "Negative numbers"       },
  { input: [1, 2, 3, 1, 2, 3, 4, 4, 5, 5, 6],  expected: 6,  label: "Longer array"           },
  { input: [42, 42, 42],                        expected: 42, label: "Appears 3 times (odd!)" },
];

let passed = 0;
for (const { input, expected, label } of tests) {
  const result = findOdd([...input]);
  const ok = result === expected;
  console.log(`${ok ? "✅" : "❌"} ${label}: findOdd([${input}]) → ${result} (expected ${expected})`);
  if (ok) passed++;
}
console.log(`\n${passed}/${tests.length} tests passed.`);

// ══════════════════════════════════════════════════════
// REFERENCE SOLUTIONS  (no peeking until you've tried! 👀)
// ══════════════════════════════════════════════════════

/*
// 🟢 Level 1 — Count with an object
function findOdd(numbers) {
  const counts = {};
  for (const n of numbers) {
    counts[n] = (counts[n] || 0) + 1;
  }
  for (const [key, value] of Object.entries(counts)) {
    if (value % 2 !== 0) return Number(key);
  }
}

// 🟡 Level 2 — Using .find() and .filter()
function findOdd(numbers) {
  return numbers.find(
    n => numbers.filter(x => x === n).length % 2 !== 0
  );
}

// 🔴 Level 3 — XOR one-liner
function findOdd(numbers) {
  return numbers.reduce((acc, n) => acc ^ n, 0);
}
*/