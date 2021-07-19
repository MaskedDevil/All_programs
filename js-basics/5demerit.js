// Speed Limit = 70
// Above each 5 -> 1 points
// 12 points -> suspended

console.log(checkSpeed(130));

function checkSpeed(speed){
    if(speed <= 74) return 'ok';
    else if((speed - 70) / 5 >= 12) return 'License Suspended';
    else if((speed - 70) % 5 === 0) return 'Points:' + ((speed - 70) / 5);
}