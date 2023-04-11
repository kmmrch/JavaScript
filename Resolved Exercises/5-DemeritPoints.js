// speed limit: 70
// every 5 kilometers above the limit: 1 point
// Math.floor(1.3)
// if the driver gets 12 points: license is suspended

checkspeed(50);
function checkspeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;

    if(speed <= speedLimit + kmPerPoint){
    console.log('ok');
    }
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if(points >= 12)
    console.log('License suspended!');
    else
    console.log('Points: ', points);
}
