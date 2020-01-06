const db = [
  {
    username: "blo0dezt",
    password: "123"
  },
  {
    username: "Shiffu",
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

function loginSucces(user, pass) {
  if (
    (user !== db[0].username && pass !== db[0].password) ||
    (user !== db[1].username && pass !== db[1].password)
  ) {
    alert("Enter a valid credentials");
    console.log("error prompt");
  } else {
    console.log(`Hello ${user} nice to see you again`);
    console.log(newsFeed);
  }
}

loginSucces(userPrompt, passPrompt);
