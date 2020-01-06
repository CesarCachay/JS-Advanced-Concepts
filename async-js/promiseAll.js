const firstPromise = new Promise((resolve, reject) => {
  if (true) {
    resolve("This one worked properly!");
  } else {
    reject("Error, this one is broken");
  }
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Less than a second");
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "Within a second");
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, "I'm the last one");
});

const allMyPromises = [firstPromise, promise2, promise3, promise4];

Promise.all(allMyPromises).then(values => console.log(values));

// In this case when we run Promise.all it'll run when all the promises are done.
// That's why in this example everything will be printed after 5 seconds.

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums"
];

Promise.all(
  urls.map(url => {
    return fetch(url).then(response => response.json());
  })
)
  .then(results => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
  })
  .catch(() => console.log("Error"));

// In the Promise all if one of them got an error everything fails
