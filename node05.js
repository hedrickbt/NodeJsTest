var myArray = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45];
var myDict = {0:0, 1:5, 2:10, 3:15, 4:20, 5:25, 6:30, 7:35, 8:40, 9:45}
var myDictMap = {'a':0, 'b':5, 'c':10, 'd':15, 'e':20, 'f':25, 'g':30, 'h':35, 'i':40, 'j':45}
var myArrayWithFunction = [0,3,6,9,function(){console.log('brooke');}]

var i = 0;
do {
  console.log('do..while: ' + myArray[i]);
  i++;
} while (i < myArray.length)

console.log('')

i = 0;
while (i < myArray.length) {
  console.log('while..do: ' + myArray[i]);
  i++;
}

console.log('')

i = 0;
while (i < myArray.length) {
  console.log(myArray[i] === 5 ? 'It is 5' : 'while..do w/check: ' + myArray[i]);
  i++;
}

console.log('')

for (i = 0;  i < myArray.length; i++) {
    console.log('for..: ' + myArray[i]);
}


console.log('')

for (key in myArray) {
    console.log('for..in(keyval myArray): ' + key + '=' + myDict[key]);
}

console.log('')

for (key in myDict) {
    console.log('for..in(keyval myDict): ' + key + '=' + myDict[key]);
}

console.log('')

for (key in myDictMap) {
    console.log('for..in(keyval myDictMap): ' + key + '=' + myDictMap[key]);
}

console.log('')

for (key in myArrayWithFunction) {
    item = myArrayWithFunction[key]
    if (typeof(item) == 'function') {
      item()
    } else {
      console.log('for..in(keyval myArray): ' + key + '=' + myDict[key]);
    }
}
