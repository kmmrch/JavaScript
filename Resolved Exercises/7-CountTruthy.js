// create a function called countTruthy that takes an array and returns a number of truthy elements in this array

const array[] = [1, 2, 3];
console.log(countTruthy(array));

function countTruthy(array){
    let count = 0;
    for(let value of array)
        if(value)
            count++;
    return count;
}
