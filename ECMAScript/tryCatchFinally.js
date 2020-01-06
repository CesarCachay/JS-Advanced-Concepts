// The finallly statement in the most of the cases will be in the very end of the trycatch
// In the trycatch. The first block called "try" can receive parameters.
// The catch block always receives a parameter which is the error, it can be consoled and the custom one either
// The last block called finally. Never receives an argument it just runs always if it's successfull and if fails

const urls = [
  "https://swapi.co/api/people/1",
  "https://swapi.co/api/people/2",
  "https://swapi.co/api/people/3",
  "https://swapi.co/api/people/4"
];

Promise.all(
  urls.map(url =>
    fetch(url)
      .then(response => response.json())
      .then(people => console.log(people))
  )
)
  .catch(error => console.log(`You got an error ${error}`))
  .finally(() =>
    console.log("I'm usually at the end. I don't receive any parameter!")
  );

// ----------------------------------------------------------------------------------//
// ------------------ SAME EXAMPLE ANOTHER THING TO CONSIDER ----------------------- //
// ----------------------------------------------------------------------------------//
// If it fails, it doesn't matter the finally block will be run

const urls2 = [
  "https://swapi.co/api/people/1",
  "https://swapi.co/api/people/2",
  "https://swapi.co/api/people/3",
  "https://swapi.co/api/people/4"
];

Promise.all(
  urls2.map(url =>
    fetch(url)
      .then(response => response.json())
      .then(people => {
        // In this case all the console.log below will be skipped and run directly the catch statement and the finally
        throw Error;
        console.log(people);
      })
  )
)
  .catch(error => console.log(`You got an error ${error}`))
  .finally(() =>
    console.log("I'm usually at the end. I don't receive any parameter!")
  );
