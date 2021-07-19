//Initialize address object using factory function and constructor function

function createAddress(street, city, pinCode){
    return {
        street,
        city,
        pinCode,
        showAddress(){
            console.log(street, city, pinCode);
        }
    };
}

let address1 = createAddress('B.T Road', 'Kolkata', 700001);
address1.showAddress();

function Address(street, city, pinCode){
    this.street = street,
    this.city = city,
    this.pinCode = pinCode,
    this.showAddress = function(){
        console.log(street, city, pinCode);
    }
}

let address2 = new Address('G.T Road', 'Dankuni', 712458);
address2.showAddress();