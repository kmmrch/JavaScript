// create a function called includes that takes an array and a searchElement
// if the given element exists in the array it should return true, otherwise it returns false

const numbers = [1, 2, 3, 4];
console.log(includes(numbers, 1));

function includes(array, searchElement){
    for(let element of array)
        if(element === searchElement)
        return true;
    return false;
}
