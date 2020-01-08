// ----------------------------- INMUTABILITY ----------------------------- //
// When we are working with objects and arrays we can save memory due to passing by reference, but what about if you
// don't want to change the properties and have a different copy of the object or array we defined previously.
// For those particularities we have the inmutability.

// INMUTABILITY WITH ARRAYS
var myArr = [1, 2, 3, 4, 5]
var myCopiedAndModifiedArr = myArr.concat("I'm new") // with the method concat 

console.log(myArr) // [1, 2, 3, 4, 5]
console.log(myCopiedAndModifiedArr) // [1, 2, 3, 4, 5, "I'm new"]

// INMUTABILITY WITH OBJECTS
let myObj = { name: "Cesar Cachay", job: "React Developer" }
let myClonedAndModifiedObj = Object.assign({ seniority: "junior" }, myObj)
// If we leave an empty object as first argument, it will just copy the object we wanted to clone
// let myClonedAndModifiedObj = Object.assign({}, myObj) 
let mySecondClone = { ...myObj, age: 23 } // This is a new way of cloning objects
// If we leave just the spread operator and the object we want to copy that will only clone the object
// let mySecondClone = { ...myObj }

myObj.job = "Frontend Developer"

console.log(myObj) // {name: "Cesar Cachay", job: "Frontend Developer"}
console.log(myClonedAndModifiedObj) // {seniority: "junior", name: "Cesar Cachay", job: "React Developer"}
console.log(mySecondClone) // {name: "Cesar Cachay", job: "React Developer", age: 23}


// ----------------------------- INMUTABILITY IN NESTED OBJECTS ----------------------------- //

// ----------------------------- //
// -- SHALLOW CLONE EXAMPLE -- //
// ----------------------------- //

let obj1 = {
  name: "lion",
  eat: "meat",
  information: {
    color: "brown",
  }
}

let clone = Object.assign({}, obj1)
let clone2 = { ...obj1 }

obj1.information = "is alfa"
console.log(obj1) // {name: "lion", eat: "meat", information: "is alfa"}
console.log(clone) // {name: "lion", eat: "meat", information: {…}}
console.log(clone2) // {name: "lion", eat: "meat", information: {…}}
// Here what happened is that we cloned that first level of the object, but each object get passed by reference.

// -------------------------- //
// -- DEEPER CLONE EXAMPLE -- //
// -------------------------- //

let laptopObj = {
  model: "Macbook Pro",
  year: 2015,
  caracteristics: {
    ram: 16
  }
}
let laptopClone = Object.assign({}, laptopObj)
let laptopClone2 = { ...laptopObj }
let superClone = JSON.parse(JSON.stringify(laptopObj)) // This one have performance issues when is a massive object

laptopObj.caracteristics.ram = "Should I change?"
console.log(laptopObj) // {model: "Macbook Pro", year: 2015, caracteristics: {ram: "Should I change?"}}
console.log(laptopClone) // {model: "Macbook Pro", year: 2015, caracteristics: {ram: "Should I change?"}}
console.log(laptopClone2) // {model: "Macbook Pro", year: 2015, caracteristics: {ram: "Should I change?"}}
console.log(superClone) // {model: "Macbook Pro", year: 2015, caracteristics: {ram: 16}}

// let laptopObj = {
//   model: "Macbook Pro",
//   year: 2015,
//   caracteristics: {
//     ram: 16
//   }
// }
// let laptopClone = Object.assign({}, laptopObj, Object.assign({}, laptopObj.caracteristics))
// let laptopClone2 = { ...laptopObj, ...laptopObj.caracteristics }

// laptopObj.caracteristics.ram = "Should I change?"
// console.log(laptopObj) // {model: "Macbook Pro", year: 2015, caracteristics: {ram: "Should I change?"}}
// console.log(laptopClone) // {model: "Macbook Pro", year: 2015, caracteristics: {ram: "Should I change?"}, ram: 16}
// console.log(laptopClone2) // {model: "Macbook Pro", year: 2015, caracteristics: {ram: "Should I change?"}, ram: 16}