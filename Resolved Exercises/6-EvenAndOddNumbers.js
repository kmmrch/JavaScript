// write a function called showNumbers that takes a parameter called limit
// the output should display all the numbers from 0 to the number suplied as the limit
// next to each number it should display even, if it's an even number, or odd, if it's an odd number

showNumbers(10);
function showNumbers(limit){
    for(let i = 0; i <= limit; i++){
        if(i % 1 === 0)
        console.log(i, 'EVEN');
        else
        console.log(i, 'ODD');

// it can also be written like this: const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
//                                        console.log(i, message);
    }
}
