const urlsToFetch = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums"
];

const getData = async function() {
  try {
    const [users, posts, albums] = await Promise.all(
      urlsToFetch.map(url => {
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

// ------------------------------------------------------ //
// -------------------- FOR AWAIT OF -------------------- //
// ------------------------------------------------------ //

const getDataForAwaitLoop = async function() {
  const arrayOfPromises = urlsToFetch.map(url => fetch(url));
  for await (let request of arrayOfPromises) {
    const data = await request.json();
    console.log(data);
  }
};
