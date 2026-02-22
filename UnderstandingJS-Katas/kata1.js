// Kata 1: Print the first 10 even numbers
// ** OBJECTIVE** Create your own loop using the following logic**
// Commit 1: "scaffold loop structure"
// Commit 2: "added even number condition"
// Commit 3: "refactored variable names for clarity"


for (let number = 1; number < 21; number = number + 1) { //for args, (initialization; condition; post-iteration)
    // check if number is even
    if(number % 2 == 0){
      // log the number
      console.log(number);
    }
}
