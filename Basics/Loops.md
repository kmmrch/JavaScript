#### **LOOPS**

A loop is a programming tool that is used to repeat a set of instructions.

In javascript there's various kinds of loops and all of them essentially do the same thing.

**For:**
```
for(let i = 0; i < 5; i++)
console.log('Hello world', i);
if(i % 2 !== 0)
console.log(i); //the output will be only the odd numbers between one and five
```
This loop will be executed as long as the condition is true.

To get the reverse order:
```
for(let i = 5; i >= 1; i--)
if(i % 2 !== 0)
console.log(i);
```

**While:**
```
let i = 0;
while(i <= 5){
    if(i % 2 !== 0)
    console.log(i);
    i++;
}
```

**Do/While:**
```
let i = 0;
do {
    if(i % 2 !== 0)
    console.log(i);
    i++;
} while(i <= 5);
```
The difference between while and do/while loops is that do/while are always executed at least once, even if the condition evaluates to false.

**Infinite loops:**

As the name implies, infinite loops executes infinitely or forever. If someone accedentally creates one of these loops, it'll probably crash their browser or computer.

Example **1**:
```
let i = 0;
while(i < 5){
    console.log(i);
}
```
Without te increment statement (i++) this loop will run forever.

Example **2**:
```
while(true){

}
```
Example **3**:
```
let x = 0;
do {
// x++;
}while(x < 5);
```
Example **4**:
```
for(let i = 0; i > 0; i++)
```

**For/In:** used to iterate the properties of an object or array.
- Object:
```
const person = {
    name: 'mariana',
    age: 24
};
for(let key in person)
console.log(key, person[key]);
```
- Array:
```
const colors = ['red', 'green', 'blue'];
for(let index in colors)
console.log(index, colors[index]);
```

**For/Of:** used to iterate over the elements or items in an array.
```
const colors = ['red', 'green', 'blue'];
for(let color of colors)
console.log(color);
```

**Break and Continue:**
```
let i = 0;
while(i <= 10){
    if(i === 5)
    break;
    console.log(i);
    i++;
}if(i % 2 === 0){
i++;
continue;
}
console.log(i);
    i++;
```
With the "*break*" keyword we'll jump out of a loop and with the "*continue*" keyword we jump to the next iteration.
