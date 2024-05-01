// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let sentence: string = "Mr Ahmed! You are genious.";

//LowerCase
let lowerCase: string = sentence.toLowerCase();
console.log(lowerCase);

//Uppercase

let upperCase: string = sentence.toUpperCase();
console.log(upperCase);

//titlecase

let words: string[] = sentence.toLowerCase().split(" ");
let titleCase: string = "";
for (let i = 0; i < words.length; i++) {
  titleCase +=
    words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
console.log(titleCase);
