#### **OPERATORS**
Arithmetic operators:
```
let x = 10;
let y = 3;

console.log(x + y); // addition operator
console.log(x - y); // subtraction operator
console.log(x * y); // multiplication operartor
console.log(x / y); // division operator
console.log(x % y); // remainder of division operator
console.log(x ** y); // exponentiation operator
```
```
// increment (++)
console.log(++x); // increment by one
// or
console.log(x++);
console.log(x);

// decrement (--)
console.log(--x); // decrement by one
```
Assignment operators:
```
let w = 10;

w = w = 5;
w += 5;
w = w * 3;
w *= 3;
```
**[!!!]** All of the arithmetic operators have this combination with the assignment operator.

Comparison operators:
```
y = 1;
```
Relational:
```
console.log(y > 0);
console.log(y >= 0);
console.log(y < 1);
console.log(y <= 1);
```
Equality:
- Strict equality operator: ensure both values have the same type and value, it's more precise and accurate then the lose equality operator
```
console.log(y === 1);
```
- Lose equality operator: doesn't care if the types of both values don't match, only check if they're equal
```
console.log(y == 1);
```
- Difference:
```
console.log(y !== 1);
```
Ternary operators:
> If a customer has more than 100 points they're a "gold customer", otherwise they're a "silver customer".
```
let points = 110;
let type = points > 100 ? 'gold' : 'silver';
console.log(type);
```
Logical operators with non-booleans:
- Logical AND (&&): returns true if both operands are true
```
console.log(true && true); // true
console.log(false && true); // false
```
```
 let highIncome = true;
 let goodCreditScore = true;
 let eligibleForLoan = highIncome && goodCreditScore;
 console.log(eligibleForLoan);
```
- Logical OR (||): returns true if one of the operands is true
```
 let highIncome = false;
 let goodCreditScore = true;
 let eligibleForLoan = highIncome || goodCreditScore;
 console.log('Eligible', eligibleForLoan); // true
```
- Logical NOT (!):
```
 let applicationRefused = !eligibleForLoan;
 console.log('Application refused', applicationRefused);
```
The result of a logical expression isn't necessarily true or false, that depends on the value of the operands we have. When a javascript engine tries to evalue an expression, it looks at each operand, if the operand is not a boolean, it'll try to interpret it as truthy or falsy.
Falsy values:
- undefined
- null
- 0
- boolean false
- '' (empty string)
- NaN (not a number)
Anything that is not falsy --> truthy.
As soon as the engine finds an operand that is truthy that operand will be returned that's what we call "*short-circuiting*":
```
console.log(false || 1 || 2);
```
Since the number "1" is the first truthy operand it'll be returned when the code is compiled.
More on logical operators:
```
let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor); // the red because the user has defined the color
```
The output will be "red" because that's the value defined by the user. With this technique we can provide default values.

Bitwise operators:
Are similar to logical operators but work in the individual bits of a number.
- Single | : bitwise OR operator
```
console.log(1 | 2); // 3
```
- Single & : bitwise AND operator
```
console.log(1 & 2); // 0
```
Example of use of bitwise operators: access control system (read, write and execute)
- permission to read: 00000100 (4)
- permission to write: 00000110 (2)
- permission to execute: 00000001 (1)
```
const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission | executePermission;
console.log(myPermission); // 6

let message = (myPermission & readPermission) ? 'yes' : 'no';
console.log(message); // yes
```
With the bitwise OR operator we can add permissions and with the bitwise AND operator we can check to see if we have given permission.

Operators precedence:
It basically means the order in which expression will be calculated.
```
let p = 2 + 3 * 4; // the multiplication will be calculated first
console.log(p); // 14
```
```
let s = (2 + 3) * 4; // the addition will be calculated first
console.log(s); // 20
```
