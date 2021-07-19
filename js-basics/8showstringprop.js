const movie = {
    title: 'ABC',
    releaseYear: 1234,
    rating: 4.5,
    director: 'XYZ'
};

showProperties(movie);

function showProperties(obj){
    for(let prop in obj){
        if(typeof obj[prop] === 'string')
            console.log(prop, obj[prop]);
    }
}