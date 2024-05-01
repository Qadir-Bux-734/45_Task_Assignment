"use strict";
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function showMagicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function makeGreat(magicians) {
    const greatMagicians = [];
    for (const magician of magicians) {
        const greatMagician = "the Great " + magician;
        greatMagicians.push(greatMagician);
    }
    return greatMagicians;
}
// Original array of magicians
const magicians = ["Harry Houdin", "David Blaine", "Dai Vernon"];
// Calling makeGreat() with a copy of the original array
const greatMagicians = makeGreat([...magicians]);
// Displaying both original and modified arrays
console.log("Original Magicians:");
showMagicians(magicians);
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
