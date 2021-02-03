let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};
// your code here
par= par.toLowerCase();

for (let i=0; i < par.length ; i++) {
    if (par[i] in counts){
        counts[par[i]] = counts[par[i]] +1;
    
    
    }else if (par[i] == ' '){
        continue;
    
    }else {
        counts[par[i]] = 1;
    }
}
console.log(counts);

// for(let i in par){
//     const letter = par[i].toLowerCase();
//     console.log(letter);
//     if(letter == " ") continue;
//     else if(counts[letter] == undefined){
//         console.log("Found "+letter+" for the first time")
//         counts[letter] = 1;
//     } 
//     else{
//         console.log("Found "+letter+" more than once")
//         counts[letter] = counts[letter] + 1;
        
//     }
// }

// console.log(counts);

// const myFunction = (string) => {
// string = string.replace(/\s/g, '').toLowerCase();
// for (let i=0; i<string.length-1; i++){
//     if (string[i] in counts){
//       counts[string[i]]++;
//     }else {
//    counts[string[i]] = 1}
// }
// return(counts)
// }
// myFunction(par)
// console.log(counts);
