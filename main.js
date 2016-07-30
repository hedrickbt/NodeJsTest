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



var MyCounter = 10;

console.log( 'For Loop' );
for ( var Index = 0; Index < MyCounter; Index++ ) {
  console.log( 2 * Index + ' Index=' + Index );
}

console.log( 'Do..While Loop' );
var Index = 0;
do {
  Index++;
  console.log( 2 * Index + ' Index2=' + Index );
} while (Index < MyCounter);

console.log( 'While..Do Loop' );
var Index = 0;
while (Index < MyCounter) {
  Index++;
  console.log( 2 * Index + ' Index2=' + Index );
} 

console.log( 'If..else..' );
var IsTrue = '10';
if (IsTrue === 10) {  // Triple equals says the datatype and value have to be the same.  Double only checks the value
  console.log('yep type and value');
} else if (IsTrue == 10) {
  console.log('yep only value');
} else {
  console.log('nope');
}

console.log( 'For Loop : Only Evens' );
for ( var Index = 0; Index < MyCounter; Index++ ) {
  if (Index % 2 == 0) {
    console.log( 2 * Index + ' Even Index=' + Index );
  }
}

console.log( 'For Loop : Break after 4');
for ( var Index = 0; Index < MyCounter; Index++ ) {
  console.log( 2 * Index + ' Even Index=' + Index );
  if (Index == 4) {
    break;
  }
}

console.log( 'For Loop : continue : Skip 4');
for ( var Index = 0; Index < MyCounter; Index++ ) {
  if (Index == 4) {
    continue;
  }
  console.log( 2 * Index + ' Even Index=' + Index );
}


console.log( 'Switch');
for (var i=0; i<=10; i++) {
  switch (i) {
    case 1:
      console.log(i + ' Is the lonliest number');
      break;
    case 10:
      console.log('Perfect ' + i);
      break;
    default:
      console.log('Where\'s ' + i);
  }
}
