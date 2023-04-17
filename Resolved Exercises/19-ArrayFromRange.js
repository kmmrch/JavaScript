// write a function called arrayFromRange that takes two parameters (min and max) and returns all the numbers between them

const numbers = arrayFromRange[-10, -4];
console.log(numbers);

function arrayFromRange(min, max){
    const output = [];
    for(let i = min; i <= max; i++)
        output.push(i);
    return output;
}
