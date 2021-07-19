// areEqual(address1, address2) to check if the objects hold same values
// areSame(address1, address2) to check if both the objects are referencing to the same object

function Address(street, city, pinCode){
    this.street = street,
    this.city = city,
    this.pinCode = pinCode
}

let address1 = new Address('B.T Road', 'Kolkata', 700001);
let address2 = new Address('B.T Road', 'Kolkata', 700001);
let address3 = address1;
let address4 = {name: 'Adam', place: 'London'};

function areEqual(address1, address2){
    for(let key in address1){
        if(key in address2 === false)   return false;
        if(address1[key] !== address2[key]) return false;
    }
    return true;
}

function areSame(address1, address2){
    return address1 === address2;
}

console.log(areSame(address1, address2));
console.log(areSame(address1, address3));
console.log(areEqual(address1, address2));
console.log(areEqual(address1, address4));
