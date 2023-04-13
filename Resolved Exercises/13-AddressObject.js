// create an address object with three properties: street, city and zip code.
// then, create a function called showAdress that takes an address object and displays all the properties in this object along with their values

let address = {
    street: 'a',
    city: 'b',
    zipCode: 'c'
};

function showAddress(address){
    for(let key in address)
    console.log(key, address[key]); // use the bracket notation for the value of a given key
}

showAddress(address);
