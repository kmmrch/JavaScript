// if the number is divisible by 3 ==> fizz
// if it is divisible by 5 ==> buzz
// if it is divisible by both 3 and 5 ==> fizzbuzz
// if it isn't divisible by either of the numbers ==> we get the same number
// if it isn't a number ==> NaN

const output = fizzBuzz(3);
console.log(output);

function fizzBuzz(input){
    if(typeof input !== 'number')
        return NaN;

    if(input % 3 === 0 && input % 5 === 0)
        return 'FizzBuzz';

    if(input % 3 === 0)
        return 'Fizz';

    if(input % 5 === 0)
        return 'Buzz';

    return input;
}
