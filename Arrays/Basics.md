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
##### REMOVING ELEMENTS:
→ remove from the end
- .pop() method removes the element at the end of the array and returns it
```
const numbers = [1, 2, 3, 4];
const last numbers.pop();
console.log(numbers);
console.log(last);
```
→ remove from the beginning
- .shift() method will return the elements removed fom the begining of the array
```
const first = numbers.shift();
console.log(numbers);
console.log(first);
```
→ remove from the middle
- .splice() method will remove an element somewhere in the middle of the array, the first argument will be the index of said element and the second will be the number of elements to be deleted
```
numbers.splice(2, 1);
console.log(numbers);
```

##### EMPTYING AN ARRAY:
**Solution 1:** simply reassign it to a new array. This works only if there aren't any other references to the original array.
```
let numbers = [1, 2, 3, 4];
numbers = [];
```
**Solution 2:** it doesn't matter how many references we have to the original array, all of them will point to an empty array.
```
numbers.length = 0;
```
**Solution 3:** start removing from the beginning of the array to the last element.
```
numbers.splice(0, numbers.length);
```
**Solution 4:** put this method in a loop and keep calling it as long as there's elements in the array.
```
while(numbers.length > 0)
numbers.pop();
```

##### COMBINING AND SLICING ARRAYS:
```
const first = [1, 2, 3];
const second = [4, 5, 6];
```
- **concat method:**
```
const combined = first.concat(second);
```
- **slice method:** pass the indexes of the elements to be extracted from the array
```
const slice = combined.slice(2, 4);
```
- **spread operator:**
```
const combined = [...first, ...second];
```

##### ITERATING AN ARRAY:
```
const numbers = [1, 2, 3];
```
- for/of
```
for(let number of numbers)
console.log(number);
```
- forEach + arrow function
```
numbers.forEach(number => console.log(number));
```

##### JOINING ARRAYS:
The .join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string
```
const numbers = [1, 2, 3];
const joined = numbers.join(',');
```

##### SORTING ARRAYS:
The .sort() method optionally takes an argument and that's a function used for comparison. This method gets two objects in an array and compares them, if it's in the right order, it'll skip to next few elements, otherwise it's going to rearrange them.
```
const courses = [
    {id: 1, name: 'Node.js'},
    {id: 2, name: 'Javascript'}
];
courses.sort(function(a, b) {
    // if a < b => -1
    // if a > v => 1
    // if a === b => 0
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});
```

##### TESTING THE ELEMENTS OF AN ARRAY:
Checking if the elements in this array are positive:
- **.every() method:** checks if all the elements match the given criteria
```
const numbers = [1, 2, 3];
const allPositive = numbers.every(function(value){
    return value >= 0;
});
```
- **.some() method:** checks if at least one element matches the given criteria
```
const altleastOnePositive = numbers.some(function(value){
    return value >= 0;
});
```

##### FILTERING AN ARRAY:
When the .filter() method is called, it executes the callback function for each element in the array. If the element matches the criteria, it'll be added to a new array.
```
const numbers = [1, -1, 2, 3];
const filtered = numbers.filter(n => n >= 0);
```

##### MAPPING AN ARRAY:
With the .map() method we can map each item in an array to something else.
```
const items = filtered.map(n => '<li>' + n + '</li>');
```

##### REDUCING AN ARRAY:
Calculate the sum of all the elements in the array:
```
const num = [1, 2, 3, 4];
let sum = 0;
for (let n of num)
    sum += n;
```
- .reduce() method: reduces all the elements to a single number
```
// a = 1st element, cV = 2nd element => a = cV
const result = num.reduce(
    (accumulator, currentValue) => accumulator + currentValue);
```
