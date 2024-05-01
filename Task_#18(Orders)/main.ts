// Seeing the World: Think of at least five places in the world you’d like to visit.

// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its
// order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.


let places:string[]=["China","America","South_Africa","Amazon_Forest","Japan"]
// Original Order Of array
console.log(`Original Order:`,places);
//Change Original order into alphabetical order
console.log(`Alphabetical Order:`,[...places].sort());
// Now same Original order of array 
console.log(`Orginal Order:`,places);
//Change Original order into reverse order
console.log(`Reverse Alphabetical order:`, [...places].reverse());
// Now Again same Original order of array 
console.log(`Original order:`,places);
// Reverse the original order
places.reverse()
console.log(`Reverse the Original order `,places);
//Change Orginal order into alphabetical order
places.sort()
console.log(`original to Alphabetical order`,places);
 // Now Reverse the original order
places.reverse()
console.log(`Reverse the Original order `,places);




