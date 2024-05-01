// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

let userName="Aadi"
let str="Qadir"
let n1=6;
let n2=4
let arr=[1, 2, 3, 4, 5, 6]

// • Tests for equality and inequality with strings
console.log(" Test for equality and inequality with strings");
console.log(userName==="Aadi");
console.log(str===userName);

// • Tests using the lower case function
console.log("Tests using the lower case function");
console.log(userName.toLowerCase()==="aadi");
console.log(str.toLowerCase()!=="qadir");


// • Numerical Tests

  console.log("Test the Numericals Tests");
  
console.log(6<=6); // Equality 
console.log(n2!==4); // Inequality 
console.log(n1>n2); //   Greater than 
console.log(n1<n2); // lessthan than
console.log(n1>=2); // greater than or equal to
console.log(n2<=3); // less than or equal to 

// • Tests using "and" and "or" operators
console.log("Tests using 'and' and 'or' Operators");
console.log(n1>=6 && n2<=4);
console.log(n2<=6 && n1>=9);
//Now 'or' operator
console.log(n1>4 || n2>7);
console.log(n2>=5 ||n1<=1);

// • Test whether an item is in a array
  console.log("\n Test whether an item is in array");
  console.log(arr.includes(4));
  // • Test whether an item is not in a array
  console.log("\n Test whether an item is not in a Array:");
  
  console.log(arr.includes(7));
  
  












