// write a function called except that takes two arrays and one of them contains the numbers to be excluded from the other

const numbers = [2, 4, 6, 8, 10];
const output = except(numbers, [6]);
console.log(output);

function except(array, excluded){
    const output = [];
    for(let element of array)
        if(!excluded.includes(element))
        output.push(element);
    return output;
}
