showStars(5);

function showStars(rows){
    for(i=1 ; i<=rows ; i++){
        for(j=1 ; j<=i ; j++){
            console.log('* ');
        }
        console.log('\n');
    }
}