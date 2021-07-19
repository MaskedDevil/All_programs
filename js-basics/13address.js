// Create an object with properties:
// street, city and pinCode and 
// create a function showAddress(address) to display the properties of address along with thier values

let address = {
    street: 'G.T Road',
    city: 'Uttarpara',
    pinCode: 712258
};

function showAddress(address){
    for(let key in address)
        console.log(key, address[key]);
}

showAddress(address);