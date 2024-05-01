"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magicianName = ["Harry Houdin", "David Blaine", "Dai Vernon"];
function show_magicians() {
    for (let magician of magicianName)
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
}
show_magicians();
