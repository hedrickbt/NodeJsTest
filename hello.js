console.log('Hello World!');

var MyString = 'my string' + ' more string';
console.log(MyString);

var MyInteger = 0;
MyInteger = 1*2;
MyInteger += 10;
MyInteger += 'bob'
console.log(MyInteger);

var MyArray=['b',1, 5.8, ['another array']];
console.log(MyArray[0]);
console.log(MyArray);
console.log(MyArray[3][0]);
console.log(MyArray.length);
MyArray.push(100);
console.log(MyArray.length);
console.log(MyArray[MyArray.length-1]);
console.log(MyArray.pop());
console.log(MyArray.length);


var MyObject = {
  index : 100,
  cat : 'cat',
};
console.log(MyObject);
console.log(MyObject.cat);
console.log(MyObject.length);

function MyFunction(param1, param2) {
  console.log('Param1 ' + param1);
  console.log('Param2 ' + param2);
}
MyFunction('brooke', 'hedrick');

MyArray.push(MyFunction);
console.log(MyArray[MyArray.length-1]);
MyArray[MyArray.length-1]('ron', 'teacher');

for (i=0; i< MyArray.length; i++) {
  console.log('MyArray[' + i + ']=' + MyArray[i]);
}

console.log(null);
console.log(undefined);
