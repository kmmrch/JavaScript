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

#### **FACTORY FUNCTIONS:** produce objects

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

#### **CONSTRUCTOR FUNCTIONS:**
