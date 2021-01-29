contact = {
    fullname: "Jane Doe",
    phone: "321-321-4321",
    email: "test@test.com"
}
// let result={};
// for(let key in contact){
//     // Code goes here
//     result= (key + " : " + contact[key])
//     console.log(result);
   
// }
for(key in contact){ 
  console.log(`${key}: ${contact[key]}`);
};
