//Use of for-in and for-of

let obj = {
    prop1: 123,
    prop2: 'what?',
    prop3: true,
    prop4: null
};

//For-in loop to traverse in an object
for(key in obj){
    console.log(key, typeof obj[key]);
}

let arr = ['element1', 'element2', 'element3'];

//For-of loop to traverse in an array
for(key of arr){
    console.log(key);
}