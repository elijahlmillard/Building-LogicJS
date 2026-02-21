// Kata 3: Multiplication table using nested loops
// ** OBJECTIVE** Comment out your code. To better understand nested loops**
// Commit 1: "scaffold nested loops"
// Commit 2: "added multiplication logic"
// Commit 3: "refactored for readability and spacing"

printMultiTable(-2, 5);
printMultiTable(10, 9);

function printMultiTable(rows, cols) {

  printNumber(rows, cols);

  for (let row = 1; row <= rows; row++){
    let currentRow = "";

    for (let col = 1; col <= cols; col++)
      currentRow += (row * col) + "\t";

    console.log(currentRow);
  }
}

// Stretch Goal: Guard clause example
// the return stops the function
function printNumber(num, num2) {
  if (num <= 0 || num2 <=0) console.log("Please ensure both numbers are positive.");
  return console.log("Numbers:", num, num2);
}
