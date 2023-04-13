#### ARRAYS

An **array** is an ordered collection of data (either primitive or object depending upon the language).

Arrays are used to store mutiple values into a single variable. This one is compared to a variable that can store only one value.

Each item in an array has a number attached to it, called a numeric **index**, that allows you to access it.

In JavaScript, arrays start at index zero and can be manipulated with various methods.

##### ADDING ELEMENTS:
→ at the end of the array:
- with the .push() method we can pass one or more arguments and these arguments will be placed at the end of the array.
```
const numbers = [3, 4];
numbers.push(5, 6);
console.log(numbers);
```
→ at the beggining of the array:
- the .unshift() method basically pushes the existing elements in the array to the right and add new elements in the beginning
```
numbers.unshift(1, 2);
console.log(numbers);
```
→ in the middle of the array:
- with the .splice() method we can go to a given position and add new elements or remove existing elements.
the first parameter is the starting index, the second is which elements you want to delet and the third is the elements to be added.
```
numbers.splice(2, 0, 'a', 'b');
console.log(numbers);
```

##### FINDING ELEMENTS:
Finding elements depends on if you're storing primitive or reference types in an array.

→ finding primitive types:
- with the .indexOf() method we pass the element we want to find and if the element exists in the array this method will return the index of it,
if it doesn't exist it'll return -1
```
const numbers = [1, 2, 3, 1, 4];
console.log(numbers.indexOf(1));
```
- the .lastIndexOf() method returns the last index of a given element or -1 if it doesn't exist
```
console.log(numbers.lastIndexOf(1));
```
- this sees ig a given element exists in an array
```
console.log(numbers.indexOf(1) !== -1);
```
- the .includes() method returns true if a given elements exists in an array
```
console.log(numbers.includes(1));
```

→ finding reference types:
```
const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' }
];
const course = courses.find(function(course){
    return course.name === 'a';
});
console.log(course);
```
This returns the value of the first element in the array that satisfies the provided testing function.
```
const course = courses.findIndex(function(course){
    return course.name === 'a';
});
console.log(course);
```
This one, instead of returning the actual object, returns it's index.

##### ARROW FUNCTIONS:
Whenever you want to pass a function, as a callback function or as an agument for a different method, you can use the arrow method syntax.
```
const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' }
];
const course = courses.find(course => course.name === 'a');
console.log(course);
```
