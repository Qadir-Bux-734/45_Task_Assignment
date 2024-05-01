"use strict";
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function createCar(manufacturer, modelName, ...options) {
    let car = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    // Loop through the keyword arguments and add them to the car object
    for (let i = 0; i < options.length; i += 2) {
        let key = options[i];
        let value = options[i + 1];
        car[key] = value;
    }
    return car;
}
// Call the function with required information and additional name-value pairs
let myCar = createCar("Toyota", "Camry", "color", "red", "year", 2024);
// Print the object to verify the information
console.log(myCar);
