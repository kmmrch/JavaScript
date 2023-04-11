// create a function called showProperties. it'll take an object and the function should display all the properties that are type string

const movie = {
    title: 'ponyo',
    releaseYear: 2008,
    rating: 5,
    director: 'miyazaki hayao'
};
showProperties(movie);

function showProperties(obj){
    for(let key in obj){
        if(typeof obj[key] === 'string')
            console.log(key, obj[key]);
    }        
}
