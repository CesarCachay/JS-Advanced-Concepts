// Both are the same
movePlayer(100, "Left")
  .then(() => movePlayer(400, "Left"))
  .then(() => movePlayer(10, "Right"))
  .then(() => movePlayer(330, "Left"));

async function playerStart() {
  const firstMove = await movePlayer(100, "Left");
  await movePlayer(400, "Left");
  await movePlayer(10, "Right");
  await movePlayer(330, "Left");
}

// --------------------- //
// Async await with fetch
// --------------------- //

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => console.log(data));

async function fetchUsers() {
  const response = fetch("https://jsonplaceholder.typicode.com/users");
  const data = await (await response).json();
  console.log(data);
}

// ---------------------- //
// More realistic example
// ---------------------- //

const fetchUrls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums"
];

Promise.all(
  fetchUrls.map(url => {
    return fetch(url).then(response => response.json());
  })
)
  .then(results => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
  })
  .catch(() => console.log("Error"));

// With trycatch you will be able to catch any error automatically you can console the error itself or
// a custom error.

const asyncUrls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums"
];

const getData = async function() {
  try {
    const [users, posts, albums] = await Promise.all(
      asyncUrls.map(url => {
        return fetch(url).then(response => response.json());
      })
    );

    console.log(users);
    console.log(posts);
    console.log(albums);
  } catch (err) {
    console.error(err);
    console.log("Error fetching data");
  }
};
