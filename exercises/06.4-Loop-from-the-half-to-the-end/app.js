var mySampleArray = [3423,5,4,47889,654,8,867543,23,48,56432,55,23,25,12];


const initialValue = Math.floor((mySampleArray.length + 1) / 2);

const stopValue = mySampleArray.length - 1;

var increasingValue = 1;

for (var i = initialValue; i <= stopValue; i++) {
    console.log(mySampleArray[i]);
}