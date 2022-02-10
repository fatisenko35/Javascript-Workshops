// Python/JavaScript code that counts how many vowels and constants a string has that a user entered.

let sentence = prompt("Please enter a sentence: ");
let counter = 0;
let constants = 0;
let vowels = "aeiou";
for (let i = 0; i < sentence.length; i++) {
    if (sentence[i].match(/[a-z]/)) {
     vowels.includes(sentence[i].toLowerCase()) ? counter += 1 : constants += 1;   
    }       
}
console.log(counter, "vowels", "and", constants, "constants");