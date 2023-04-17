const movies = [
    { title: 'tonari no totoro', year: 1988, rating: 5 },
    { title: 'perfect blue', year: 1997, rating: 5 },
    { title: 'your name', year: 2016, rating: 4.3 },
    { title: 'a silent voice', year: 2016, rating: 4.6 }
];

// get all the movies from 2016 with rating > 4
// sort them by their rating in a descending order
// display their titles

const titles = movies
    .filter(m => m.year === 2016 && m.rating >= 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title)
console.log(titles);
