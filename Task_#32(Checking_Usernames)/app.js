"use strict";
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// List of current users
let current_users = ["user5", "admiN", "User2", "user4", "user3",];
// List of new users
let new_users = ["user7", "user2", "user8", "admin", "user9"];
// Loop through new_users list
for (let user = 0; user < new_users.length; user++) {
    // Check if the current new username exists in current_users (case insensitive)
    let usernameExists = current_users.some(newUser => newUser.toLowerCase() === new_users[user].toLowerCase());
    if (usernameExists) {
        console.log(`The username "${new_users[user]}" is not available. Please enter a new username.`);
    }
    else {
        console.log(`The username "${new_users[user]}" is available.`);
    }
}
