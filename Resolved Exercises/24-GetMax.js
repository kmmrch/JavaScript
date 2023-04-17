// create a function called getMax that takes an array and returns the largest number in it

const numbers = [1, 2, 3, 4];
const max = getMax(numbers);
console.log(max);

function getMax(array){
    if(array.length === 0) return undefined; //check if the array is empty or not, if it's empty returns undefined

    let max = array[0];
    for(let i = 1; i < array.length; i++)
        if(array[i] > max)
        max = array[i];
    return max;

/* solution using the .reduce() method
    array.reduce((accumulator, current) => {
        if(current > accumulator) return current;
        return accumulator; 
    });
         or
    // array.reduce((a, b) => (b > a) ? b : a); */

}
