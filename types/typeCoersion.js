1 == 1; // true
1 == "1"; // true

if (1) {
  // In this case JS will consider "1" equal to "true"
  console.log(5);
}
// it will print 5

if (0) {
  // In this case JS will consider "0 equal to "false" that's why nothing will be printed
  console.log("I'll be printed");
}
// It won't print anything

false == ""; // true
false == []; // true
false == {}; // false
"" == 0; // true
"" == []; // true
"" == {}; // false
0 == []; // true
0 == {}; // false
0 == null; // false
