// Code goes here
function matrixBuilder(matrix){
  let newMatrix = [];
  let newArray = [];
  for (let x =0; x < matrix; x++){
    newMatrix.push(newArray)
  }
  for (let i =0; i < matrix; i++){
    newArray.push(1) 
  }
  return newMatrix
}



// do not change anything from this line down
console.log(matrixBuilder(5))