
// 16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
console.log("I found a bigger dinner table");

let moreGuests:string[]=["Qadir", "Shahid", "Wajid","Mir"]
// •We are adding the one new guest into the beginning of array.
moreGuests.unshift("Imran");
// •Now we are adding the one new guest into the middle of array.
moreGuests.splice(3,0,"Akram");
// • Use append() to adding one new guest to the end of this list.
moreGuests.push("Sadiq");
for (let newInvites of moreGuests){
console.log(`Dear ${newInvites} Would you like to join me for a dinner.`);}


