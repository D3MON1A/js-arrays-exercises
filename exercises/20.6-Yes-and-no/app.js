let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here
function myFunc(param){
  if(param === 0){return "woko"}
  else if(param === 1){return "wiki"}
}
console.log(theBools.map(myFunc))