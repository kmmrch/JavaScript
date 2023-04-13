// initialize the address object, first using a factory function and then using a constructor function

// factory function:
let address = createAddress('a', 'b', 'c');
console.log(address);

function createAddress(street, city, zipCode){
    return {
        street,
        city,
        zipCode
    };
}

// constructor function:
let address = new Address('a', 'b', 'c');
console.log(address);

function Address(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}
