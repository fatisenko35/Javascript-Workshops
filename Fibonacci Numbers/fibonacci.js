
// **********Fibonacci Number*************
// Purpose of the this coding challenge is to write a code that given a number, returns the corresponding
// Fibonacci number.
// Learning Outcomes
// At the end of the this coding challenge, students will be able to;
// analyze a problem, identify and apply programming knowledge for appropriate solution.
// demonstrate their knowledge of algorithmic design principles by using JavaScript effectively.
// Problem Statement
// Create a function that, given a number, returns the corresponding Fibonacci number.
// Examples:
// fibonacci(7) ➞ 21
// fibonacci(12) ➞ 233
// The first number in the sequence starts at 1 (not 0).
// ⌛ Happy Coding ✍

// ****************Solution***********************
function fibonacci(num){
  if (num ===  1) {
      return 1;
  } else if(num === 2) {
      return 2
  }else{
    return fibonacci(num - 1) + fibonacci(num - 2)
  }
}