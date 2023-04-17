// write a function called move that takes three parameters: an array, the index of the element we want to move and an offset

const numbers = [1, 2, 3, 4, 5];
const output = move(numbers, 0, 1); // moves the element one position to the right
console.log(output);

function move(array, index, offset){
    const position = index + offset;
    if(position >= array.length || position < 0){
        console.error('Invalid offset.'); // in case the offset is greater than the array's length or less than zero
        return;
    }

    const output = [...array]; // this will be a clone of the original array
    const element = output.splice(index, 1)[0]; // removes the element from the array
    output.splice(position, 0, element); // adds the removed element at a specific position
    return output;
}
