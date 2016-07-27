console.log("Hello main world")

var MyValue = 10;

function MyFunction() {
  var localVariable = '100';
  console.log(MyValue);
  unintendedGlobal = 'SomeValue';
}

MyFunction();

if (typeof localVariable == 'undefined') {
  console.log("NO local");
} else {
  console.log("HAS local");
}

if (typeof unintendedGlobal == 'undefined') {
  console.log("NO unintendedGlobal");
} else {
  console.log("HAS unintendedGlobal");
}
