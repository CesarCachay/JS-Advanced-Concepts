// ----------------------------------- METHODS TO DELETE OR ADD SPACES ----------------------------------- //
// The lenght of this string will be 10
// If the string currently doesn't have that length this method will add the missing ones at the start
"Cesar".padStart(10); // => "     Cesar"

// The lenght of this string will be 10.
// If the string currently doesn't have that length this method will add the missing ones at the end
"Cesar".padEnd(10); // => "Cesar     "

// ES10

const userEmail1 = "                   cesar@gmail.com";
const userEmail2 = "thegoodboy@gmail.com                          ";

console.log(userEmail1.trimStart()); // => cesar@gmail.com It deletes all the spaces of the start of the string
console.log(userEmail2.trimEnd()); // => thegoodboy@gmail.com It deletes all the spaces of the end of the string

// ----------------------------------- METHODS TO HANDLE OBJECTS ----------------------------------- //

let usersDb = {
  user1: "Cesar",
  user2: "Majito",
  user3: "Toshi",
  user4: "Gemili"
};

console.log(usersDb["user1"]);

const arrUsers = Object.keys(usersDb).forEach((user, index) => {
  console.log(
    `The name of ${user} is ${usersDb[user]} and their ID is ${index}`
  );
});

Object.values(usersDb).forEach(value => console.log(value));

Object.entries(usersDb).forEach(keyAndValue => console.log(keyAndValue));

Object.entries(usersDb).map(value => {
  return `${value[0].replace("user", "The contact ID is ")} their name is ${
    value[1]
  }`;
});
