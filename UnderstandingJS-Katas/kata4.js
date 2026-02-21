function isPrime(num) {
  // Numbers less than 2 are not prime
  if (num <= 1) return false;
  // Check for divisibility from 2 up to the square root of the number
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // Not prime if divisible by any other number
    }
  }
  return true; // Is prime otherwise
}

function printFirstPrimes(num) {
  let countToFind = num;
  let countFound = 0;
  let currentNum = 2; // Start checking from the first prime number

  console.log("The first 20 prime numbers are:");

  // Loop until 20 prime numbers are found
  while (countFound < countToFind) {
    if (isPrime(currentNum)) {
      console.log(currentNum);
      countFound++; // Increment the count of primes found
    }
    currentNum++; // Move to the next number to check
  }
}

// Execute the function
printFirstPrimes(1000);