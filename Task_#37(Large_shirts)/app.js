"use strict";
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size = "large", message = "I Love Typescript") {
    console.log(`make a ${size} T-shirt with the message, ${message} printed on it `);
}
make_shirt(); //default message and siza
make_shirt("medium"); //medium:size , default message
make_shirt("small", "Dive in to life"); //custom message , small siza
