"use strict";
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function show_magicians(magicians) {
    for (let magician of magicians)
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the great";
    }
}
let magicians = ["Harry Houdin", "David Blaine", "Dai Vernon"];
make_great(magicians);
show_magicians(magicians);
