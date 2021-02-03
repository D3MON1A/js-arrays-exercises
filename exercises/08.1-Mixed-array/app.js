var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here
// for( var i = 0; i < mix.length; i++)
// console.log(typeof mix[i])
let newArr = [];
//your code here
for (let i=0; i<mix.length ; i++){
    newArr[i]= typeof (mix[i]);  
        

}
console.log(newArr);