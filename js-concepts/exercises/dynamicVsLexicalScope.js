// IN THE CASE OF "THIS" IS DOENS'T HAVE A LEXICAL SCOPE AND THAT MEANS IT DOESN'T MATTER WHERE IT'S RUN. THE FACT THAT MATTERS
// ACTUALLY IS HOW THE FUNCTION WAS CALLED.

// In JS our lexical scope (available data + variables where the function was defined) determines our available variables.
// Not where the function is called (dynamic scope).

const a = function() {
  console.log("a", this);
  const b = function() {
    console.log("b", this);
    const c = {
      hi: function() {
        console.log("c", this);
      }
    };
    c.hi();
  };
  b();
};

a();
//  a, window.object
//  b, window.object
//  c, {hi: f}

const obj = {
  name: "Cesar",
  sing: function() {
    console.log("a", this);
    var anotherSing = function() {
      console.log("b", this);
    };
    anotherSing();
  }
};

obj.sing();
// a, {name: "Cesar", sing: f}
// b, window.object

// To avoid the dynamic scope of this we can use ES6 syntax of arrow functions and solve the problem of pointing the global object

const objWithoutDynamicScope = {
  name: "Cesar",
  sing: function() {
    console.log("a", this);
    var arrowAnotherSing = () => {
      console.log("b", this);
    };
    arrowAnotherSing();
  }
};

objWithoutDynamicScope.sing();
// a, {name: "Cesar", sing: f}
// b, {name: "Cesar", sing: f}
