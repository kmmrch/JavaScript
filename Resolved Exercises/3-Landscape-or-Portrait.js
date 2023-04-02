// Implement a function isLandscape that takes two parameters: width and height of an image:
// it returns true if the image is landscape (width > height)
// otherwise it returns false

console.log(isLandscape(800, 600));
function isLandscape(width, height){
    return (width > height);

// it can also be written like this: return (width > height) ? true : false;
// or like this:
// if(width > height) return true;
// return false;
}
