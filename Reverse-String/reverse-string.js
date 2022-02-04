// *****************************Problem Statement*****************************************

// Purpose of the this coding challenge is to write a code that given a string , returns reverse of it.

// ## Learning Outcomes

// At the end of the this coding challenge, students will be able to;

// - analyze a problem, identify and apply programming knowledge for appropriate solution.

// - demonstrate their knowledge of algorithmic design principles by using JavaScript effectively.

// ## Problem Statement

// - Write a function that takes an array of characters and reverses the letters in place.

// - Examples:

//   - reverseString("Clarusway Rocks!") ➞ !skcoR yawsuralC

//   - reverseString("Happy") ➞ yppaH

// ************************************ Solution ***********************************

function reverseString(sentence){
    return sentence.split("").reverse().join("");
}