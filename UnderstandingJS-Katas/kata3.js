// Kata 3: Multiplication table using nested loops
// ** OBJECTIVE** Comment out your code. To better understand nested loops**
// Commit 1: "scaffold nested loops"
// Commit 2: "added multiplication logic"
// Commit 3: "refactored for readability and spacing"

printMultiTable(-2, 5);
printMultiTable(10, 9);

function printMultiTable(rows, cols) {


  for (let row = 1; row <= rows; row++){
    let currentRow = "";

    for (let col = 1; col <= cols; col++)
      currentRow += (row * col) + "\t";

    console.log(currentRow);
  }
}

// Stretch Goal: Guard clause example
function printNumber(num) {
  if (num <= 0) return console.log("Please enter a positive number.");
  console.log("Number:", num);
}
