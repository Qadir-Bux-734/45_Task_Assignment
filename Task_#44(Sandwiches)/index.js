"use strict";
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function makeSandwich(...items) {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("No items selected. It's an empty sandwich.");
    }
    else {
        console.log("You ordered a sandwich with:");
        for (const item of items) {
            console.log("- " + item);
        }
    }
    console.log("---------------------");
}
// Call the function with different numbers of arguments
makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
makeSandwich("Turkey", "Swiss cheese");
makeSandwich("Peanut Butter", "Jelly");
