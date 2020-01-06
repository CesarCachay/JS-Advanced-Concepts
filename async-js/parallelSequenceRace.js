const promisify = (item, delay) =>
  new Promise(resolve => setTimeout(() => resolve(item), delay));

const a = () => promisify("a", 100);
const b = () => promisify("b", 5000);
const c = () => promisify("c", 3000);

// console.log(a(), b(), c());

async function parallel() {
  const promises = [a(), b(), c()];
  const [output1, output2, output3] = await Promise.all(promises);
  return `parallel is done: ${output1} ${output2} ${output3}`;
}

// parallel().then(data => console.log(data)); // Here we are going to wait for all promises done
// parallel.then(console.log);

async function race() {
  const promises = [a(), b(), c()];
  const output1 = await Promise.race(promises);
  return `race is done: ${output1}`;
}

// race().then(console.log);
// race().then(data => console.log(data)); // Here we are gonna wait until the first one is done and ignore the others

async function sequence() {
  const output1 = await a();
  const output2 = await b();
  const output3 = await c();

  return `sequence is done ${output1} ${output2} ${output3}`;
}

// sequence().then(console.log);
// sequence().then(data => console.log(data));

// ---------------------------------------------------- //
// TRY TO FIND WHICH WILL EXECUTE FIRST AND RETURN LAST //
// ---------------------------------------------------- //
parallel().then(console.log); // This one second = 5000ms
sequence().then(console.log); // This one third/last = 8100ms
race().then(console.log); // This one will be first = 100ms
