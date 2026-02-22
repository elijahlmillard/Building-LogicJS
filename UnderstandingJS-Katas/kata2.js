// Kata 2: FizzBuzz from 1 to 20
// ** OBJECTIVE** Create your own loop using the following logic**
// Commit 1: "scaffold for loop"
// Commit 2: "added fizzbuzz logic"
// Commit 3: "refactored with clear variable and comments"

for (fizz = 1; fizz < 26; fizz++) {

  switch (true){

    case fizz % 3 && fizz % 5 === 0:
        console.log("FizzBuzz")
      break;

    case fizz % 3 === 0:
        console.log("fizz");
      break;

    case fizz % 5 === 0:
        console.log("Buzz");
      break;

    default:
      console.log(fizz);
  }
}
