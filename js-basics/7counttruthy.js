const array = [0, null, undefined, '', false, NaN, 1, 2, 3];
console.log(countTruthy(array));

function countTruthy(array){
    let cout = 0;
    for(let value of array)
        if(value)
            cout++;
    return cout;
}