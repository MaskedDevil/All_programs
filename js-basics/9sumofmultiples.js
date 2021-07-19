//sum of multiples of 3 and 5 for a given limit
console.log(sum(10));

function sum(limit){
    let sum = 0;
    for(let i=1; i<=10; i++){
        sum += (i%5 === 0 || i%3 === 0) ? i : 0;
    }
    return sum;
}