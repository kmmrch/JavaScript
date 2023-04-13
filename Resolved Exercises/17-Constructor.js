// use a constructor function to create the object from the "blog post object" exercise

let post = new Post('a', 'b', 'c');
console.log(post);

function Post(title, body, author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}
