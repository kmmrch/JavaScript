// create a function called showPrimes that takes a limit and shows all the prime numbers up to this limit

showPrimes(20);

function showPrimes(limit){
    for(let number = 2; number <= limit; number++){

        /*let isPrime = true;
        for(let factor = 2; factor < number; factor++){
            if(number % factor === 0){
            isPrime = false;
            break;
            }
        }*/

        if(isPrime(number))
        console.log(number);
    }
}

function isPrime(number){
    for(let factor = 2; factor < number; factor++){
        if(number % factor === 0){
        return false;
        }
    }
    return true;
}
