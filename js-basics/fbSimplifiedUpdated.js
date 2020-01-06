const db = [
  {
    username: "blo0dezt",
    password: "123"
  },
  {
    username: "Shiffu",
    password: "123"
  },
  {
    username: "majito",
    password: "123"
  },
  {
    username: "anthony",
    password: "123"
  }
];

const newsFeed = [
  {
    username: "majito95",
    title: "It was super busy learning JavaScript"
  },
  {
    username: "luisjose414",
    title: "I love politics and I want to be a major in my city"
  },
  {
    username: "philippeDelgado",
    title: "Let's have fun together on New's Year Eve!"
  }
];

const userPrompt = prompt("Please enter your username");
const passPrompt = prompt("Please enter your password");

function checkUsers(username, password) {
  for (let i = 0; i < db.length; i++) {
    if (db[i].username === username && db[i].password === password) {
      return true;
    }
  }
  return false;
}

function loginSucces(user, pass) {
  if (checkUsers(user, pass)) {
    console.log(`Hello ${user} nice to see you again`);
    console.log(newsFeed);
  } else {
    alert("Enter a valid credentials");
    console.log("error prompt");
  }
}

loginSucces(userPrompt, passPrompt);
