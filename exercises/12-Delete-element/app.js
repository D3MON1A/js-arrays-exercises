var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

function deletePerson(personName)
{
    //your code here
    let newArray = [];
  for (let i = 0; i < people.length; i++){
    if (people[i] != personName){
      newArray.push(people[i])
    }
  }
  return newArray
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));