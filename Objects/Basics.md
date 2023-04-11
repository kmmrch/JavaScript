#### OBJECTS

Objects are collections of key value pairs.

Object Oriented Programming (OOP) is basically a style of programming where we see a program as a collection of objects that talk to each other to perform some functionality

> Create an application that draws different kinds of shapes, e.g. circles, rectangles, etc:

```
const circle = {
    radius: 1,
    location: {
        x:1,
        y: 1
    },
    isVisible: true,
    draw: function(){ // if a function is part of an object, it's called a method
        console.log('draw');
    }
};
```

##### **FACTORY FUNCTIONS:** produce objects

```
function createCircle(radius){
    return {
        radius, // if the key and value are the same, we can make the code shorter by removing the value and simply adding the key
        draw(){
            console.log('draw');
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);
```

##### **CONSTRUCTOR FUNCTIONS:**

✎ When naming constructor functions we should use pascal notation by convention!

```
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}
const circle = new Circle(1);
```

In factory functions we simply call the function and in this function we return an object. Meanwhile, in constructor functions we use the "new" operator and, instead of returning an object, we use the "this" keyword

##### DYNAMIC NATURE OF OBJECTS:
In javascript, once you create an object you can always add new properties or methods, or remove existing ones
```
const circle = {
    radius: 1
};
circle.color = 'yellow'; // new property
circle.draw = function(){} // new method

delete circle.color; // remove existing property
delete circle.draw; // remove existing method

console.log(circle);
```

##### FUNCTIONS ARE OBJECTS:
```
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}
```
- Returns the name of the function:
```
Circle.name;
```

- Returns the number of arguments:
```
Circle.length;
```

- Calls the function (the curly braces references the object):
```
Circle.call({}, 1);
```

- This does the exact same thing as the line above:
```
const another = new Circle(1);
```

- Calls the function, but instead of passing the arguments explicitly we pass them in an array (it's useful when we already have an array):
```
Circle.apply({}, [1, 2, 3]);
```

✎ Every object in JavaScript has a constructor property, and that references the function that was used to create said object.

##### VALUE VS. REFERENCE TYPES:
