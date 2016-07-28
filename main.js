// http://stackoverflow.com/questions/10729276/how-can-i-get-the-full-object-in-node-js-console-log-rather-than-object
var util = require('util');

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

var myGlobalVariable = 10;
var myGlobalArray = [100];
var myGlobalObject = {item:200};

var TestVariable = myGlobalVariable;

console.log('TestVariable = ' + TestVariable);
console.log('myGlobalVariable = ' + myGlobalVariable);

myGlobalVariable++;

console.log('TestVariable = ' + TestVariable);
console.log('myGlobalVariable = ' + myGlobalVariable);






TestVariable = myGlobalArray;

console.log('TestVariable = ' + TestVariable);
console.log('myGlobalArray = ' + myGlobalArray);

myGlobalArray[0]++;

console.log('TestVariable = ' + TestVariable);
console.log('myGlobalArray = ' + myGlobalArray);

TestVariable = myGlobalArray.slice();

myGlobalArray[0]++;

console.log('TestVariable = ' + TestVariable);
console.log('myGlobalArray = ' + myGlobalArray);








TestVariable = myGlobalObject;

console.log('TestVariable = ' + util.inspect(TestVariable, {showHidden: false, depth: null}));
console.log('myGlobalObject = ' + util.inspect(myGlobalObject, {showHidden: false, depth: null}));

myGlobalObject.item++;

console.log('TestVariable = ' + util.inspect(TestVariable, {showHidden: false, depth: null}));
console.log('myGlobalObject = ' + util.inspect(myGlobalObject, {showHidden: false, depth: null}));
