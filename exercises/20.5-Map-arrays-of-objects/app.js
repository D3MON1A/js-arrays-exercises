let people = [
	{ name: 'Joe', birthDate: new Date(1986,10,24) },
	{ name: 'Bob', birthDate: new Date(1975,5,24) },
	{ name: 'Erika', birthDate: new Date(1989,6,12) },
	{ name: 'Dylan', birthDate: new Date(1999,12,14) },
	{ name: 'Steve', birthDate: new Date(2003,4,24) }
];

let simplifier = function(person){
    var today = new Date();
    var age = today.getFullYear() - person.birthDate.getFullYear();
    var m = today.getMonth() - person.birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < person.birthDate.getDate())) {
        age = age - 1;
    }
    return ("Hello, my name is " + person.name + " and I am " + age)
};
console.log(people.map(simplifier));


// let simplifier = function(person){
    
//     var birthdate = person.birthDate;
//     var cur = new Date();
//     var diff = cur-birthdate; // This is the difference in milliseconds
//     var age = Math.floor(diff/31557600000); // Divide by 1000*60*60*24*365.25
    
    
//     return 'Hello, my name is ' + person.name + ' and I am ' + age;
// };

// console.log(people.map(simplifier));