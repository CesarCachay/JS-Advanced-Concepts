// ----------------------------- PASSED BY VALUE ----------------------------- //
// Primitive types are inmutable it means that we can't really change them, in order to change them we need to
// completely remove the primitive type. This is something called passed by VALUE 

var a = 5
var b = a

b++
console.log(a) // 5.
console.log(b) // 6. What happened here is, b copied the value of a which was (5) and then, we added 1 to 5 to get 6.
// We did "b" equals to "a" and copied the value and put it into a new memory space in our machine.


// ----------------------------- PASSED BY REFERENCE ----------------------------- // 
// In case of OBJECTS and ARRAYS in JS, they are passed by REFERENCE which means that we don't copy the values 
// This is happening because arrays are objects underneath the hood in JavaScript
// like we did with primitive types. When we assigned "obj1" to "obj2" we are said this is where the object is in memory.
// What happens here is that in order to save space in memory we can't start clonning or copying the OBJECTS or Arrays
// because those data structures can contain a lot of information that's why JavaScript are referencing them.

// Example with OBJECTS
let obj1 = { name: "Cesar", favorite_serie: "Shiffu" }
let obj2 = obj1

obj2.favorite_serie = "Actually I changed my mind, now my favorite serie is Mr. Robot"

console.log(obj1)
console.log(obj2)
// What happened in the last example is that "obj1" & "obj2" both of them are pointing somewhere in memory to an space
// where it contains the information.

// Example with ARRAYS
let arr1 = [2, 4, 6]
let arr2 = arr1

arr2.push("I've been pushed recently!")

console.log(arr1); // [2, 4, 6, "I've been pushed recently!"]
console.log(arr2); // [2, 4, 6, "I've been pushed recently!"]


