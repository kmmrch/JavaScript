#### CONDITIONAL STATEMENTS
In javascript there's two types of conditional statements: **if/else** and **switch/case**.

IF/ELSE:

For example:
> In our application we're going to get the current hour and, depending on it's value, we're going to greet the user with a different message:
> - if the hour is in between 6am and 12pm: good morning
> - if it's between 12 pm and 6pm: good afternoon
> - otherwise: good evening
```
let hour = 10;
if(hour >= 6 && hour < 12){
    console.log('Good morning!');
}
else if(hour >= 12 && hour < 18){
    console.log('Good afternoon!');
}else
    console.log('Good evening!');
```

SWITCH/CASE
```
let role; // represents the role of the current user (guest, moderator or admin)

switch(role){
    case 'guest':
        console.log('guest user');
        break;

    case 'moderator':
        console.log('moderator user');
        break;

    case 'admin':
        console.log('admin user');
        break;

    default:
        console.log('unknown user');
}
```
If the "break" statement isn't added all of the "console.log" statements will be executed.
