#### **REFERENCE TYPES**

Objects:
```
let person = {
    name: 'Mariana',
    age: 24
};
```
1st way to change the value of the properties: **dot notation**
```
person.name = 'Mari';
```
2nd way to change the value of the properties: **bracket ([]) notation**
```
person['name'] = 'Mary';
console.log(person.name);
```


Arrays:
```
let selectedColors = ['red', 'blue'];
```
Adding a new element to the array
```
selectedColors[2] = 'green';
```
In JavaScript, an array can store different types of variables:
```
selectedColors[3] = 1;
```
To display the element in the specified index in the array:
```
console.log(selectedColors[0]);
```

Functions:
```
function greet() {
    console.log('Hello world');
}
greet();

function greet(name) {
    console.log('Hello' + name);
}
greet('john');
greet('mary');
```
A function that performs a task:
```
function greet(name, lastName) {
    console.log('Hello' + name + ' ' + lastName);
}
greet('john', 'smith');
```
A function that calculates a value:
```
function square(number) {
    return number * number;
}
let number = square(2);
console.log(number);
// or
console.log(square(2));
```
