var user1 = { name: "nerd", org: "dev" };
var user2 = { name: "nerd", org: "dev" };
// var eq = JSON.parse(JSON.stringify(user1)) == JSON.parse(JSON.stringify(user2)); // false
// var eq = user1 == user2; // false
// var eq = Object.toJSON(user1) == Object.toJSON(user2); //false - doesn't exist
// var eq = JSON.stringify(user1) == JSON.stringify(user2); // true

alert(eq); // gives false
