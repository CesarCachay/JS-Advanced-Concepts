var b = {
  name: "jay",
  say() {
    console.log(this);
  }
};

var c = {
  name: "jay",
  say() {
    return function() {
      console.log(this);
    };
  }
};

var d = {
  name: "jay",
  say() {
    return () => console.log(this);
  }
};

b.say(); // { name: "jay", f { console.log(this) } }
c.say(); // f () { console.log(this) } || [Function]
d.say(); // () => console.log(this)

// double call
b.say()(); // { name: "jay", f { console.log(this) } } // Error b.say(...) is not a function
c.say()(); // window.object
d.say()(); // { name: "jay", say: f }
