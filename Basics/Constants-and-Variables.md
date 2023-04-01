#### **CONSTANTS AND PRIMITIVE/VALUE TYPES OF VARIABLES**

String literal:
```
let name = 'Mariana';
```
Number literal:
```
let age = 30;
```
Boolean literal:
```
let isAproved = true; // or false
```

If the variable isn't initialized, it's value will be "undefined" by default.
```
let firstName; // the output will be "undefined"
```

When we want to explicitly clear the value of a variable "null" is used:
```
let SelectedColor = null;
```

Once a constant is initialized it's value *cannot* be reassigned!
```
const interestRate = 0.3;
interestRate = 1;
console.log(interestRate); // error
```
