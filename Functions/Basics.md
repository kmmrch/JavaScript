#### FUNCTIONS

```
function walk(){
    console.log('walk');
}
```
What we have here is what we refer to as a function declaration.
In JavaScript there's another way to define functions, using a function expression (variable or costant).
- anonymous function expression:
```
let run = function(){
    console.log('run');
};
```
- named function expression:
```
let run = function walk (){
    console.log('run');
};
```

##### HOISTING:
In JavaScript we can call a function that is defined using the function declaration syntax before it's declaration.
When the JavaScript engine executes the code, it moves all the function declarations to the top, this is called hoisting.

##### ARGUMENTS:
> the arguments object will display all the arguments of a function
```
function sum(a, b){
    console.log(arguments);
    return a + b;
}
console.log(sum(1)); // 1 + undefined = NaN
```
> to return the sum of all the arguments:
```
function sum(){
    let total = 0;
    for(let value of arguments)
    total += value; 

    console.log(arguments);
    return total;
}
console.log(sum(1, 2, 3, 4, 5));
```

##### THE REST OPERATOR:
> ✎ **DO NOT** confuse this with the spread operator (used in arrays), when the three dots are used along with a parameter in a function, it's called rest operator!
```
function sum(...args){ 
    console.log(args);
    return args.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3, 4, 5));
```
When the rest operator is applied with the parameters of a function, we can pass a varying number of arguments.

##### DEFAULT PARAMETERS:
- Use the logical or operator to give the variable a defaut value
```
function interest(principal, rate, years){
    rate = rate || 3.5;
    years = years || 5;

    return principal * rate / 100 * years;
}
```
Once you give a parameter a default value, you should give all the following parameters a default value.
```
function interest(principal, rate = 3.5, years = 5){
    return principal * rate / 100 * years;
}
```

##### GETTERS AND SETTERS:
```
const person = {
    firstName: 'Mariana',
    lastName: 'Kemmerich'

    fullName(){
        return `${person.firstName} ${person.lastName}`;
    }
};
console.log(person.fullName());
```
- getters: access properties
```
get fullName(){
    return `${person.firstName} ${person.lastName}`;
}
```
- setters: change (mutate) properties
```
set fullName(value){
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
}
```

##### TRY AND CATCH:
```
const person = {
    firstName: 'Mariana',
    lastName: 'Kemmerich'

    fullName(){
        return `${person.firstName} ${person.lastName}`;
    }

set fullName(value){
    if(typeof value !== 'string')
    throw new Error('Value is not a string.');

    const parts = value.split(' ');
    if(part.length !== 2)
        throw new Error('Enter a first and last name: ');

    this.firstName = parts[0];
    this.lastName = parts[1];
}
};

try{
    person.fullName = null;
}
catch(e){
    console.log(e);
}
```

##### LOCAL VS. GLOBAL SCOPE:
Local variables, or local constants in a function, take precedence over global variables or constants.
In general, you should avoid defining global constants or variables because they can be accessible everywhere, that is considered bad practice.
Other functions can accidentally change their value, and this will lead to all kinds of bugs and issues in the program.

##### LET VS. VAR:
```
function start(){
    for(var i = 0; i < 5; i++){
        console.log(i);
    }
}
```
When you declare a variable with var, it's scope is not limited to the block in which it's defined, it's limited to the function in which it's defined.
This is not how most of the programming languages work. technically, in other programming languages, these variables should only be accessible to in the block they were defined.

##### THE "THIS" KEYWORD:
> method: "this" references the object that is executing the current function
```
const video = {
    title: 'a',
    play(){
        console.log(this);
    }
};
video.play();
```
> regular function: "this" references the global object (window, global)
```
const video = {
    title: 'a',
    play(){
        console.log(this);
    }
};
function playVideo(){
    console.log(this);
}
playVideo();
```
> constructor function: "this" references a new empty object
```
function Video(title){
    this.title = title;
    console.log(this);
}
const v = new Video('a');
```
