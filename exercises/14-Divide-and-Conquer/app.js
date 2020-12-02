let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

const mergeTwoList = arr => {
    let oddNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            oddNumbers.push(arr[i])
        }
    };
    let evenNumbers = [];
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] % 2 === 0) {
            evenNumbers.push(arr[j])
        };

       
    };
     let arrays = oddNumbers.concat(evenNumbers)
        return arrays
};


console.log(mergeTwoList(list_of_numbers))
