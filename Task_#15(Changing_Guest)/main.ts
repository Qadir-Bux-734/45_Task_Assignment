// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.
let guest_list:string[]=["Qadir", "Shahid", "Wajid","Mir"]
for(let friends of guest_list){
    console.log(`Dear ${friends} would you like to join me for a dinner.`);
    
}
//replace a guests
console.log(`unfortunatily ${guest_list[3]} he can't make the dinner`);
// mir replace and add akram 
guest_list[3]="Akram"
// Now this is a new list
console.log("New list ");
guest_list.forEach(new_Guests => {
    console.log(`Dear ${new_Guests} would you like to join me for a dinner.`);
    
    
});



