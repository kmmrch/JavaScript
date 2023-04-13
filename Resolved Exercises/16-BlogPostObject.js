// exercise 16: blog post objects

// create a blog post object with the following properties:
// - title
// - body
// - author
// - views
// - comments (it's an object so it must have the properties author and body)
// - isLive

let post = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 10,
    comments: [
        { author 'a', body: 'b'},
        { author 'c', body: 'd'}
    ],
    isLive: true
};
console.log(post);
