// create a function called countOccurrences that takes an array and a searchElement and returns the number of times the searchElement has occurred in the array

const numbers = [1, 2, 1, 3, 1, 4];
const count = countOccurences(numbers, 1);
console.log(count);

function countOccurrences(array, searchElement){
    let count = 0;
    for(let element of array)
    if(element === searchElement)
        count++;
    return count;

/* solution using the .reduce() method
    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        console.log(accumulator, current, searchElement);
        return accumulator + occurrence;
    }, 0); */
}
