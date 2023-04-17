// create a circle object using the object literal syntax
// this object should have a radius and an area properties

const circle = {
    radius: 1,
    get area(){
        return Math.PI * this.radius * this.radius;
    }
};
console.log(circle.area);
